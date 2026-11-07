"""Turn a reviewed submission into a chart entry.

After a submission's pull request has been reviewed and merged, its files sit in
Submissions/<folder>/ (construction.ggb, submission.json, submission.md). This moves them into the
archive the way every other entry is kept:

  - the GeoGebra file goes into the problem's folder, named by its accuracy and its holder's surname
    (RTC-99.806-Gordon.ggb), with its notes beside it, the circle and line counts filled in;
  - an entry is added to pages/archive-data.js: id, side, holder, method, circles and lines under the
    counting rules, the chart figure and the precise readout, the µ mark if a step is micro scale, and
    its origin (a submission, with the pull request's number);
  - the submission folder is left in place for the record; delete it once the entry is charted.

Then run `python tools/verify.py --write` to check it and update the website.

  python tools/add_submission.py Submissions/<folder> --pr 12             add it
  python tools/add_submission.py Submissions/<folder> --pr 12 --dry-run   show what it would do
  python tools/add_submission.py --check-labels                          check every chart figure against the label rule

It refuses, and says why, if the construction does not fit the problem it was submitted for, if the
archive's own checker would measure it differently, if an entry with the same id exists, or if the
cross-reference finds it identical to (or with the same result as) an entry already charted.

  --rediscovery     the same construction as an entry already charted, found later: no new entry is made,
                    and the submitter is added to that entry's "rediscovered" list, shown on the charts
                    as "Also found by ... possibly an independent rediscovery" (SUBMISSION_RULESET.md,
                    "Earlier discoveries"). Whether a later find was independent can never be checked,
                    so the name is kept either way.
  --allow-duplicate the same result by a different construction: charted as an entry of its own.
"""
import datetime, json, math, os, re, shutil, sys, unicodedata
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import verify as v
import evaluate_submission as ev

PREFIX = {'stc': '', 'taa': 'TAA-', 'dtc': 'DTC-', 'rtc': 'RTC-', 'ar': 'AR-'}
DATA = os.path.join(v.ROOT, 'pages', 'archive-data.js')


def surname(name):
    plain = unicodedata.normalize('NFKD', name).encode('ascii', 'ignore').decode()
    parts = re.sub(r'[^A-Za-z \-]', '', plain).split()
    return parts[-1].capitalize() if parts else 'Anonymous'


def side_folder(problem, side):
    """Where entries of this problem and side are kept: the folder most of them already use."""
    from collections import Counter
    p = [x for x in v.load_archive()['problems'] if x['id'] == problem][0]
    c = Counter(os.path.dirname(e['file']) for e in p['entries'] if e.get('file') and e['side'] == side)
    if c: return p, c.most_common(1)[0][0]
    names = {'stc': 'Squared Circle ', 'ar': 'Arc Rectification '}
    return p, 'GeoGebra Files/' + names.get(problem, '') + side.capitalize()


LABEL_CAP = 10          # the most decimal places a chart figure shows; the precise readout (32 digits) is always kept in full


def chart_label(precise, problem, side, archive, skip=None):
    """The chart figure: the precise readout truncated (never rounded) to three decimal places, or more where needed so the
    chart still reads in order on its side, but never more than LABEL_CAP. Entries still alike at the cap share the figure
    and the charts mark them with ≈; the precise readout orders them. `skip` leaves one entry (by id) out of the comparison."""
    from decimal import Decimal
    P = Decimal(precise)
    others = [e for p in archive['problems'] if p['id'] == problem for e in p['entries']
              if e['side'] == side and e.get('precise') and e['id'] != skip and Decimal(e['precise']) != P]
    for places in range(3, LABEL_CAP + 1):
        q = Decimal(1).scaleb(-places); label = (P // q * q).quantize(q)
        clash = [e for e in others if (Decimal(e['precise']) > P) != (Decimal(re.sub(r'[^0-9.]', '', e['acc'])) > label)
                 or Decimal(re.sub(r'[^0-9.]', '', e['acc'])) == label]
        if not clash: return str(label)
    return str(label)


def check_labels(archive):
    """Each chart figure against the label rule: at most LABEL_CAP places, a truncation of its precise readout, and in order."""
    from decimal import Decimal
    out = []
    for p in archive['problems']:
        for e in p['entries']:
            a = re.sub(r'[^0-9.]', '', e['acc'])
            if not e.get('precise') or not a: continue
            places = len(a.split('.')[1]) if '.' in a else 0
            if places > LABEL_CAP: out.append('%s: %d places, more than %d' % (e['id'], places, LABEL_CAP))
            q = Decimal(1).scaleb(-places); P = Decimal(e['precise'])
            if (P // q * q).quantize(q) != Decimal(a): out.append('%s: %s is not the precise readout %s truncated' % (e['id'], e['acc'], e['precise'][:16]))
        for side in ('over', 'under'):
            es = sorted([e for e in p['entries'] if e['side'] == side and e.get('precise') and re.sub(r'[^0-9.]', '', e['acc'])], key=lambda e: Decimal(e['precise']))
            for a, b in zip(es, es[1:]):
                if Decimal(re.sub(r'[^0-9.]', '', a['acc'])) > Decimal(re.sub(r'[^0-9.]', '', b['acc'])):
                    out.append('%s (%s) above %s (%s): out of order' % (a['id'], a['acc'], b['id'], b['acc']))
    return out


def add_rediscovery(eid, problem, meta, pr, dry):
    """List the submitter on the earlier entry as a possible independent rediscovery, instead of a new entry."""
    submitted = (meta.get('submitted') or datetime.date.today().isoformat())[:10]
    rec = {'name': meta.get('name') or 'Anonymous', 'date': '-'.join(reversed(submitted.split('-'))),
           'note': 'submitted%s' % (' in pull request #%s' % pr if pr else '')}
    print('The same construction as %s: %s is listed on it as a possible independent rediscovery.' % (eid, rec['name']))
    if dry:
        print(json.dumps(rec, ensure_ascii=False, indent=1)); print('Dry run: nothing written.'); return
    s = open(DATA, encoding='utf-8').read(); i = s.index('{', s.index('const ARCHIVE')); head = s[:i]
    D = json.loads(s[i:s.rindex('}') + 1])
    e = [x for p in D['problems'] if p['id'] == problem for x in p['entries'] if x['id'] == eid][0]
    e.setdefault('rediscovered', []).append(rec)
    open(DATA, 'w', encoding='utf-8').write(head + json.dumps(D, ensure_ascii=False, indent=1) + s[s.rindex('}') + 1:])
    print('Recorded. Now run: python tools/verify.py --write')


def main():
    args = sys.argv[1:]
    if args and args[0] == '--check-labels':
        bad = check_labels(v.load_archive()); print('\n'.join(bad) or 'Every chart figure follows the label rule.'); sys.exit(1 if bad else 0)
    if not args or args[0].startswith('-'): print(__doc__); sys.exit(1)
    sub, dry = args[0].rstrip('/\\'), '--dry-run' in args
    pr = args[args.index('--pr') + 1] if '--pr' in args else None
    if not pr and not dry: sys.exit('Give the pull request number with --pr N, so the entry records where it came from.')
    ggb, js = os.path.join(sub, 'construction.ggb'), os.path.join(sub, 'submission.json')
    meta = json.load(open(js, encoding='utf-8'))
    problem, res, tru, scale = meta.get('problem'), meta.get('result'), meta.get('truth'), meta.get('scale')

    r = v.rebuild(ggb)
    fit = ev.fits(problem, r, res, tru, scale)
    if not isinstance(fit, tuple): sys.exit('It does not fit %s: %s.' % (ev.NAMES.get(problem, problem), fit))
    rk = ev.value_of(r, res)[1]
    square = res if problem == 'stc' and rk == 'polygon' else None
    result_scale = scale if problem == 'rtc' and scale and scale != 1 else None
    j = v.judge(problem, r, square, None, result_scale)
    if not j: sys.exit("The archive's checker cannot measure this file; add it by hand.")
    c, t = fit if problem != 'taa' else (j[0], j[1])
    if abs(v.acc(j[0], j[1]) - v.acc(c, t)) > 1e-9:
        sys.exit("The archive's checker measures %.9f%%, the submission's chosen measurements %.9f%%: they must agree. "
                 "Check which measurement is the result, and add it by hand with result_path." % (v.acc(j[0], j[1]), v.acc(c, t)))
    side = 'over' if j[0] > j[1] else 'under'
    su = v.steps_used(r, j[5], problem)
    sm = v.smallest_step(r, j[5], problem, v.given_size(problem, r, j[5]))
    entry_stub = {'square': square, 'result_path': None, 'result_scale': result_scale}
    precise = v.precise_accuracy(problem, ggb, entry_stub)
    archive = v.load_archive()
    # The same construction, or the same result, as an entry already charted? (tools/crossref.py)
    import crossref as X
    mine = {'ratio': float(j[0] / j[1]), 'fp': X.profile_of(r, j[5], problem, v.given_size(problem, r, j[5])), 'curve': None}
    pp = [x for x in archive['problems'] if x['id'] == problem][0]
    for e in pp['entries']:
        if not e.get('file'): continue
        old = X.profile(problem, os.path.join(v.ROOT, pp['folder'], e['file'] + '.ggb'), e)
        verdict = old and X.compare(problem, mine, old)
        if verdict and verdict[0] == 'identical' and '--rediscovery' in args:
            return add_rediscovery(e['id'], problem, meta, pr, dry)
        if verdict and verdict[0] in ('identical', 'same result'):
            msg = '%s %s (%s%% by %s).' % (verdict[0].capitalize(), e['id'], e['acc'], e['holder'])
            if '--allow-duplicate' not in args:
                sys.exit(msg + ' Not added. The same construction found later: run again with --rediscovery to list the submitter on that entry.'
                         ' The same result by a different construction: run again with --allow-duplicate to chart it as its own entry.')
            print('Note: ' + msg)
    if '--rediscovery' in args: sys.exit('No charted entry has the same construction, so there is nothing to record it against. Not added.')
    label = chart_label(precise, problem, side, archive)
    eid = '%s-%s-%s' % (problem, side, label)
    if any(e['id'] == eid for p in archive['problems'] for e in p['entries']):
        eid += '-' + surname(meta.get('name') or 'anonymous').lower()   # a tie: the entry charted second carries its holder's name
    if any(e['id'] == eid for p in archive['problems'] for e in p['entries']): sys.exit('An entry %s already exists.' % eid)

    p, folder = side_folder(problem, side)
    name = meta.get('name') or 'Anonymous'
    base = '%s%s-%s' % (PREFIX[problem], label, surname(name))
    rel = folder + '/' + base
    dest = os.path.join(v.ROOT, p['folder'], rel)
    url = meta.get('geogebra_url') or ''
    gid = (re.search(r'geogebra\.org/(?:m|geometry|classic|graphing|calculator)/([A-Za-z0-9]{6,12})', url) or [None, ''])[1]
    submitted = (meta.get('submitted') or datetime.date.today().isoformat())[:10]
    date = '-'.join(reversed(submitted.split('-')))
    notes = [x for x in (meta.get('description'), meta.get('notes')) if x]
    entry = {'id': eid, 'side': side, 'marks': 'µ' if sm is not None and sm < v.MICRO else '', 'holder': name,
             'method': meta.get('method') or '', 'circles': su['circles'], 'lines': su['lines'], 'acc': label, 'precise': precise,
             'date': date, 'geogebra': gid, 'file': rel,
             'note': ' '.join(notes + (['An AI helped find or refine this construction.'] if meta.get('ai_assisted') else [])),
             'verified': [], 'disputes': [],
             'origin': {'kind': 'submitted', 'evidence': (['pull request #%s' % pr] if pr else []) +
                        ['submitted with the browser extension, version %s' % meta['extension_version'] if meta.get('extension_version') else 'submitted by pull request']}}
    if square: entry['square'] = square
    if result_scale: entry['result_scale'] = result_scale

    print('%s: %s%% %ssized, %d circles and %d lines%s, by %s' % (eid, label, side, su['circles'], su['lines'], ', µ' if entry['marks'] else '', name))
    print('  file  ->', os.path.join(p['folder'], rel) + '.ggb (and .md)')
    if dry:
        print(json.dumps(entry, ensure_ascii=False, indent=1)); print('Dry run: nothing written.'); return

    os.makedirs(os.path.dirname(dest), exist_ok=True)
    shutil.copyfile(ggb, dest + '.ggb')
    md = open(os.path.join(sub, 'submission.md'), encoding='utf-8').read() if os.path.exists(os.path.join(sub, 'submission.md')) else ''
    md = re.sub(r'(\*\*Number of Circles:\*\*\s*\n)[^\n*]*', r'\g<1>%d' % su['circles'], md)
    md = re.sub(r'(\*\*Number of Lines:\*\*\s*\n)[^\n*]*', r'\g<1>%d' % su['lines'], md)
    md = re.sub(r'(\*\*Accuracy \(%\):\*\*\s*\n)[^\n]*(\n\(preview[^\n]*\))?', r'\g<1>%s\n(precise readout: %s)' % (label, precise), md)
    md = md.replace('construction.ggb', base + '.ggb')
    open(dest + '.md', 'w', encoding='utf-8').write(md)

    s = open(DATA, encoding='utf-8').read(); i = s.index('{', s.index('const ARCHIVE')); head = s[:i]
    D = json.loads(s[i:s.rindex('}') + 1])
    [x for x in D['problems'] if x['id'] == problem][0]['entries'].append(entry)
    if name not in (D.get('holders') or {}):
        D.setdefault('holders', {})[name] = [name]
    open(DATA, 'w', encoding='utf-8').write(head + json.dumps(D, ensure_ascii=False, indent=1) + s[s.rindex('}') + 1:])
    print('Added. Now run: python tools/verify.py --write')


if __name__ == '__main__':
    main()
