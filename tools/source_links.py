"""Links to the sources each entry cites.

Every entry's origin.evidence names its sources in words: an Internet Archive identifier, a Jahrbuch or Zentralblatt
review number, a NUMDAM item, an arXiv number, or a book by its author. This script turns those into links, so that
anyone can open the page the construction was taken from:

  - origin.links in pages/archive-data.js: [{label, url}], shown under "Sources" in each entry's details on the charts;
  - a "Sources" section at the end of each entry's notes (.md) file.

  python tools/source_links.py           write the links
  python tools/source_links.py --check   list historical entries with no link (exit 1 if any)

To add a source the script does not know yet, add it to BOOKS (by a phrase the evidence uses) or cite its identifier
in the evidence in the usual form ("Internet Archive, <identifier>", "JFM 12.0345.06", "Zbl 0012.34501",
"arXiv:1234.56789", "NUMDAM, <item>", "MDZ, bsb12345678").
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, 'pages', 'archive-data.js')
IA = 'https://archive.org/details/'

# Internet Archive items the archive's sources come from: identifier -> title.
ITEMS = {
    'squaringcirclehi00hobsuoft': 'E. W. Hobson, Squaring the Circle: A History of the Problem (1913)',
    'ERIC_ED058058': 'R. C. Yates, The Trisection Problem (1942; NCTM reprint 1971)',
    'konstruktionenun00vahluoft': 'K. T. Vahlen, Konstruktionen und Approximationen (1911)',
    'diequadraturdes01beutgoog': 'E. Beutel, Die Quadratur des Kreises (1913)',
    'rcin.org.pl.WA35_102168_4521-II_Aufgaben-dritten_78454': 'U. Amaldi, Aufgaben dritten Grades, in F. Enriques, Fragen der Elementargeometrie II (1907)',
    'questioniriguard00enri': 'F. Enriques (ed.), Questioni riguardanti la geometria elementare (1900)',
    'gomtrieducompas00masc': 'L. Mascheroni, Géométrie du compas (1798)',
    'annalesdemathma06unkngoog': "Gergonne's Annales de mathématiques VIII (1817-18)",
    'journalfrdierei14crelgoog': "Crelle's Journal für die reine und angewandte Mathematik 3 (1828)",
    'sim_journal-fuer-die-reine-und-angewandte-mathematik_1846_32': "Crelle's Journal für die reine und angewandte Mathematik 32 (1846)",
    'messengermathem06glaigoog': 'The Messenger of Mathematics XIII (1884), first scan',
    'messengermathem00taylgoog': 'The Messenger of Mathematics XIII (1884), second scan, with the plates',
    'journaldemathma34unkngoog': 'Journal de mathématiques élémentaires (1895)',
    'nieuwarchiefvoo00amstgoog': 'Nieuw Archief voor Wiskunde IV (1878)',
    'archivdermathem49unkngoog': 'Archiv der Mathematik und Physik, 2nd series, IX (1890)',
    'ulvastras00ktgoog': 'G. Thibaut, On the Śulvasútras (1875)',
    'vorschule-der-darstellenden-geometrie': 'A. L. Busch, Vorschule der darstellenden Geometrie (1868 edition)',
    'paper-doi-10_1098_rspl_1871_0099': 'W. Hayden, Proceedings of the Royal Society 20 (1871-72)',
    'philtrans08545474': 'C. M. Willich, Proceedings of the Royal Society 7 (1854-55)',
    'pli.kerala.rare.28155': 'Collected Papers of Srinivasa Ramanujan (1927)',
    'bub_gb_25iHrtJpy9oC': 'Francisci Vietae Opera mathematica, ed. F. van Schooten (Leiden 1646)',
    'histoiredesreche00montuoft': 'J. E. Montucla, Histoire des recherches sur la quadrature du cercle (1831 edition)',
    'lageometrieprati00bovi': 'C. de Bouvelles, La géométrie pratique (Paris 1566)',
    'albrechtdrersun01peltgoog': "A. Peltzer (ed.), Albrecht Dürer's Unterweisung der Messung (1908)",
    'vorlesungenber02cantuoft': 'M. Cantor, Vorlesungen über Geschichte der Mathematik II (2nd edition)',
    'dequadraturacirc00uffe': 'P. Uffenbach, De quadratura circuli mechanici (1653 edition)',
    'archimedeshuygen00rudiuoft': 'F. Rudio, Archimedes, Huygens, Lambert, Legendre: Vier Abhandlungen über die Kreismessung (1892)',
}
# Books the evidence cites by name, for entries that do not give the identifier.
BOOKS = [
    (r'Hobson', 'squaringcirclehi00hobsuoft'), (r'Yates|ERIC[ _]ED058058', 'ERIC_ED058058'), (r'Vahlen', 'konstruktionenun00vahluoft'),
    (r'Beutel', 'diequadraturdes01beutgoog'), (r'Fragen der Elementargeometrie|Amaldi', 'rcin.org.pl.WA35_102168_4521-II_Aufgaben-dritten_78454'),
    (r'Questioni riguardanti', 'questioniriguard00enri'), (r'G[ée]om[ée]trie du compas|geometria del compasso', 'gomtrieducompas00masc'),
    (r'Gergonne|Annales de math[ée]matiques VIII', 'annalesdemathma06unkngoog'), (r'Messenger of Mathematics XIII', 'messengermathem06glaigoog'),
    (r'Journal de math[ée]matiques [ée]l[ée]mentaires', 'journaldemathma34unkngoog'), (r'Nieuw Archief', 'nieuwarchiefvoo00amstgoog'),
    (r'Ś?[Ss]ulvas[úu]tras|Thibaut', 'ulvastras00ktgoog'), (r'Vorschule der darstellenden', 'vorschule-der-darstellenden-geometrie'),
    (r'Hayden|Proceedings of the Royal Society 20', 'paper-doi-10_1098_rspl_1871_0099'), (r'Willich', 'philtrans08545474'), (r'Rudio|Vier Abhandlungen', 'archimedeshuygen00rudiuoft'), (r'Montucla', 'histoiredesreche00montuoft'),
    (r'Ramanujan, "(?:Squaring the circle|Modular equations)', 'pli.kerala.rare.28155'),
]
MDZ = {'bsb10147857': 'L. van Ceulen, Van den Circkel (1596), MDZ', 'bsb10164554': "C. de Bouvelles, Livre singulier et utile touchant l'art et pratique de géométrie (1542), MDZ", 'bsb11942712': 'L. Kunze, Lehrbuch der Geometrie I: Planimetrie (1842), MDZ', 'bsb10082182': 'L. Kunze, Lehrbuch der Geometrie I: Planimetrie (2nd edition, 1851), MDZ'}
ARXIV = {'1205.0080': 'G. H. Hughes, The Polygons of Albrecht Dürer, 1525 (arXiv)', '1908.01202': 'H. V. Chu, Squaring the Circle Revisited (arXiv)'}


def links_for(evidence):
    text = ' '.join(evidence)
    out = []
    def add(label, url):
        if url not in [x['url'] for x in out]: out.append({'label': label, 'url': url})
    for m in re.finditer(r'Internet Archive,? ([A-Za-z0-9_.\-]+[A-Za-z0-9_])', text):
        i = m.group(1)
        if i in ITEMS: add(ITEMS[i], IA + i)
        elif re.search(r'\d', i) and len(i) >= 8: add('Internet Archive: ' + i, IA + i)
    for pat, i in BOOKS:
        if re.search(pat, text) and i not in [x['url'][len(IA):] for x in out if x['url'].startswith(IA)]: add(ITEMS[i], IA + i)
    for kind, num in re.findall(r'\b(JFM|Zbl) (\d+\.\d+(?:\.\d+)?)', text):
        add(('Jahrbuch über die Fortschritte der Mathematik, ' if kind == 'JFM' else 'Zentralblatt, ') + kind + ' ' + num + ' (zbMATH Open)',
            'https://zbmath.org/?q=an%3A' + num)
    for num in re.findall(r'arXiv:?\s?(\d{4}\.\d{4,5})', text):
        add(ARXIV.get(num, 'arXiv:' + num), 'https://arxiv.org/abs/' + num)
    for item in re.findall(r'MDZ,? (bsb\d{8})', text):
        add(MDZ.get(item, 'Münchener DigitalisierungsZentrum: ' + item), 'https://www.digitale-sammlungen.de/en/view/' + item)
    for item in re.findall(r'\b(BSMF_\d{4}__\d+__\d+_\d)', text):
        add('Bulletin de la Société mathématique de France (NUMDAM, ' + item + ')', 'https://www.numdam.org/item/' + item + '/')
    return out


MD_HEAD = '**Sources:**'


def md_section(links):
    return MD_HEAD + '\n' + '\n'.join('- [%s](%s)' % (x['label'], x['url']) for x in links) + '\n'


def main():
    s = open(DATA, encoding='utf-8').read(); i = s.index('{', s.index('const ARCHIVE')); head = s[:i]
    D = json.loads(s[i:s.rindex('}') + 1])
    missing, written = [], 0
    for p in D['problems']:
        for e in p['entries']:
            o = e.get('origin') or {}
            links = links_for(o.get('evidence', []))
            if not links:
                if o.get('kind') == 'historical': missing.append(e['id'])
                o.pop('links', None); continue
            if '--check' in sys.argv: continue
            o['links'] = links; written += 1
            md = os.path.join(ROOT, p['folder'], (e.get('notes') or e.get('file') or '') + '.md')
            if e.get('file') and os.path.exists(md):
                t = open(md, encoding='utf-8').read()
                if MD_HEAD in t: t = t[:t.index(MD_HEAD)].rstrip('\n') + '\n'
                open(md, 'w', encoding='utf-8').write(t.rstrip('\n') + '\n\n' + md_section(links))
    if '--check' in sys.argv:
        print('\n'.join('%s: a historical entry with no source link' % x for x in missing) or 'Every historical entry links to its sources.')
        sys.exit(1 if missing else 0)
    open(DATA, 'w', encoding='utf-8').write(head + json.dumps(D, ensure_ascii=False, indent=1) + s[s.rindex('}') + 1:])
    print('%d entries linked; historical entries without a link: %s' % (written, ', '.join(missing) or 'none'))


if __name__ == '__main__':
    main()
