"""The authors of the archive's entries, for pages/authors.html.

ARCHIVE.authors in pages/archive-data.js is a list of people, one card each on the Authors page:

  name       the person's name
  life       their years, where they are well established ("1629-1695"), else ""
  kind       "historical" (default), "living" or "ai"
  holders    the names the charts credit them under (an entry's "holder"); a joint credit such as
             "Kochanski / Gordon" is listed on both people
  also       names they appear under in entries' "Also found by" (rediscovered), if any
  bio        two to four sentences on who they were and what they did, or what is known of them
  links      [{label, url}] to fuller biographies (MacTutor, Wikipedia)
  notable    optional one-line summary, for the few shown on the home page

The page itself, and each card's list of entries, are built from the data, so a new entry by someone
already listed needs nothing here. A new author needs a card:

  python tools/authors.py            check that every credited name has a card with a biography (exit 1 if not)
  python tools/authors.py --links    also check that every link opens (needs network access)
"""
import json, os, sys, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, 'pages', 'archive-data.js')


def load():
    s = open(DATA, encoding='utf-8').read()
    return json.loads(s[s.index('{', s.index('const ARCHIVE')):s.rindex('}') + 1])


def problems_of(D):
    for p in D['problems']:
        for e in p['entries']:
            yield p, e


def check(D):
    authors = D.get('authors', [])
    problems = []
    by_holder, by_also = {}, {}
    for a in authors:
        if not a.get('name'): problems.append('an author with no name')
        if not (a.get('bio') or '').strip(): problems.append('%s: no biography' % a.get('name'))
        if a.get('kind', 'historical') not in ('historical', 'living', 'ai'): problems.append('%s: unknown kind %r' % (a['name'], a.get('kind')))
        for l in a.get('links', []):
            if not str(l.get('url', '')).startswith('https://') or not l.get('label'): problems.append('%s: a link without a label or https address' % a['name'])
        for h in a.get('holders', []): by_holder.setdefault(h, []).append(a['name'])
        for h in a.get('also', []) + [a['name']]: by_also.setdefault(h, []).append(a['name'])
    names = [a['name'] for a in authors]
    for n in set(names):
        if names.count(n) > 1: problems.append('%s: listed twice' % n)
    used = set()
    for p, e in problems_of(D):
        if e['holder'] not in by_holder: problems.append('%s: credited to "%s", who has no card on the Authors page' % (e['id'], e['holder']))
        used.update(by_holder.get(e['holder'], []))
        for r in e.get('rediscovered', []):
            if r['name'] not in by_also: problems.append('%s: "Also found by" %s, who has no card on the Authors page' % (e['id'], r['name']))
            used.update(by_also.get(r['name'], []))
    for a in authors:
        if a['name'] not in used: problems.append('%s: has a card but no entry' % a['name'])
    return problems


SKIP = ('https://github.com/',)   # GitHub refuses automated page requests; its links are checked by hand


def check_links(D):
    bad = []
    for a in D.get('authors', []):
        for l in a.get('links', []):
            if l['url'].startswith(SKIP): continue
            try:
                r = urllib.request.urlopen(urllib.request.Request(l['url'], headers={'User-Agent': 'ClassicalGeometryProblems link check'}), timeout=30)
                if r.status != 200: bad.append('%s: %s answered %d' % (a['name'], l['url'], r.status))
            except Exception as ex:
                bad.append('%s: %s did not open (%s)' % (a['name'], l['url'], getattr(ex, 'code', ex)))
    return bad


def main():
    D = load()
    problems = check(D)
    if '--links' in sys.argv: problems += check_links(D)
    print('\n'.join(problems) or 'Every credited name has a card with a biography (%d authors).' % len(D.get('authors', [])))
    sys.exit(1 if problems else 0)


if __name__ == '__main__':
    main()
