"""Cross-reference: find entries that are identical or nearly identical to each other.

Two independent comparisons, within each problem:

  1. The result. Each construction's result is turned into a ratio against the true value
     (constructed / true). Two entries whose ratios agree to 12 significant digits produce the
     same number, whatever route they take.
  2. The construction. Each construction's fingerprint is every distance between the points the
     result depends on, plus every circle's radius, all divided by the given figure's size and
     rounded. That fingerprint does not change when a construction is moved, turned, mirrored or
     scaled, so the same construction drawn twice matches however it was drawn. Similarity is the
     share of the two fingerprints they have in common (0 to 1).

Angle methods (trisection, arc rectification) are compared by their accuracy across a sweep of
angles instead: two methods with the same accuracy at every angle are the same method.

Verdicts for a pair:
  identical          same result and similarity of 0.9 or more: the same construction
  same result        same result reached by a different construction
  near identical     similarity of 0.6 or more: most of both constructions is shared
  builds on          the smaller construction lies (95% or more) inside the larger: an adjustment
                     or extension of it
  shares most steps  80% or more of the smaller construction lies inside the larger
  same file          both entries are squares in the same GeoGebra file (expected; listed apart)
'similarity' is the share of the two fingerprints in common; 'containment' is the share of the
smaller one found inside the larger.

Run from the repository root:
  python tools/crossref.py                      compare every entry with every other
  python tools/crossref.py new.ggb stc          compare one new GeoGebra file with the archive
(python tools/verify.py --write also runs it, and writes pages/crossref.js for the website.)
"""
import collections, datetime, json, math, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import verify as v

ROUND = 6                  # fingerprint distances are rounded to this many decimal places
SAME_RESULT = 1e-12        # ratios agreeing to this relative amount are the same result
SIMILAR, IDENTICAL = 0.6, 0.9
BUILDS_ON, SHARES = 0.95, 0.8   # containment: one construction's fingerprint inside another's
SWEEP = [30 + 15 * i for i in range(9)]

def profile(problem, path, entry):
    """The ratio, the fingerprint and, for angle methods, the accuracy curve of one construction."""
    v._READ_CACHE.pop(path, None)
    r = v.rebuild(path)
    j = v.judge(problem, r, entry.get('square'), entry.get('result_path'), entry.get('result_scale'))
    if not j: return None
    ratio = float(j[0] / j[1])
    fp = profile_of(r, j[5], problem, v.given_size(problem, r, j[5]))
    curve = None
    if problem in ('taa', 'ar'):
        try:
            d = v.sweep_at(problem, path, entry, SWEEP)
            curve = [d.get(x) for x in SWEEP]
        except Exception:
            curve = None
    return {'ratio': ratio, 'fp': fp, 'curve': curve, 'steps': sum(fp.values())}

def profile_of(r, roots, problem, size):
    """The fingerprint of a rebuilt construction: distances between the points the result depends
    on, and the radii of its circles, divided by the given figure's size and rounded."""
    anc = v.ancestry(r, roots); o = r['objects']; size = size or 1
    pts = sorted({o[n][1] for n in anc if o.get(n) and o[n][0] == 'point'})
    fp = collections.Counter()
    for a in range(len(pts)):
        for b in range(a + 1, len(pts)):
            fp['d%.*f' % (ROUND, v.dist(pts[a], pts[b]) / size)] += 1
    for n in anc:
        if o.get(n) and o[n][0] == 'circle': fp['r%.*f' % (ROUND, o[n][2] / size)] += 1
    return fp

def similarity(a, b):
    if not a or not b: return 0.0
    inter = sum((a & b).values()); union = sum((a | b).values())
    return inter / union if union else 0.0

def when(e):
    d = e.get('date', '')
    for fmt in ('%d-%m-%Y', '%d %B %Y', '%Y'):
        try: return datetime.datetime.strptime(d.strip(), fmt)
        except ValueError: pass
    return datetime.datetime(2100, 1, 1)          # undated entries sort last

def containment(a, b):
    """The share of the smaller fingerprint found inside the larger."""
    if not a or not b: return 0.0
    return sum((a & b).values()) / min(sum(a.values()), sum(b.values()))

def compare(problem, pa, pb):
    """A verdict for two profiles, or None if they are unrelated."""
    same = abs(pa['ratio'] - pb['ratio']) <= SAME_RESULT * abs(pb['ratio'])
    sim = similarity(pa['fp'], pb['fp']); cont = containment(pa['fp'], pb['fp'])
    if problem in ('taa', 'ar') and pa['curve'] and pb['curve'] and None not in pa['curve'] + pb['curve']:
        gap = max(abs(x - y) for x, y in zip(pa['curve'], pb['curve']))
        same = same or gap < 1e-9
        if gap < 1e-9: sim = max(sim, 1.0)
    if same and sim >= IDENTICAL: return 'identical', sim
    if same: return 'same result', sim
    if sim >= SIMILAR: return 'near identical', sim
    if cont >= BUILDS_ON: return 'builds on', cont
    if cont >= SHARES: return 'shares most steps', cont
    return None

def run(archive=None):
    archive = archive or v.load_archive()
    profiles, pairs = {}, []
    for p in archive['problems']:
        entries = [e for e in p['entries'] if e.get('file')]
        for e in entries:
            try: profiles[e['id']] = profile(p['id'], os.path.join(v.ROOT, p['folder'], e['file'] + '.ggb'), e)
            except Exception as ex:
                profiles[e['id']] = None; print('crossref: could not profile %s: %s' % (e['id'], ex), file=sys.stderr)
        for i, a in enumerate(entries):
            for b in entries[i + 1:]:
                pa, pb = profiles[a['id']], profiles[b['id']]
                if not pa or not pb: continue
                verdict = compare(p['id'], pa, pb)
                if not verdict: continue
                kind, sim = verdict
                if a['file'] == b['file']: kind = 'same file'
                older, newer = sorted((a, b), key=when)
                if kind in ('builds on', 'shares most steps'):
                    # name the smaller construction as the base
                    small, big = sorted((a, b), key=lambda x: sum(profiles[x['id']]['fp'].values()))
                    older, newer = small, big
                pairs.append({'problem': p['id'], 'kind': kind, 'similarity': round(sim, 3),
                              'older': older['id'], 'newer': newer['id'],
                              'older_holder': older['holder'], 'newer_holder': newer['holder'],
                              'kinds': [older.get('holder_kind', 'person'), newer.get('holder_kind', 'person')]})
    order = {'identical': 0, 'same result': 1, 'near identical': 2, 'builds on': 3, 'shares most steps': 4, 'same file': 5}
    pairs.sort(key=lambda x: (order[x['kind']], -x['similarity']))
    return pairs

def check_new(path, problem):
    """Compare one new GeoGebra file with every entry of its problem."""
    archive = v.load_archive()
    new = profile(problem, os.path.abspath(path), {})
    if not new: print('The file does not measure a result for %s.' % problem); return
    p = [x for x in archive['problems'] if x['id'] == problem][0]
    found = 0
    for e in p['entries']:
        if not e.get('file'): continue
        old = profile(problem, os.path.join(v.ROOT, p['folder'], e['file'] + '.ggb'), e)
        verdict = old and compare(problem, new, old)
        if verdict:
            found += 1
            print('%-15s %s %s%% by %s (similarity %.2f)' % (verdict[0], e['id'], e['acc'], e['holder'], verdict[1]))
    print('%d matching entries.' % found if found else 'No identical or near-identical entries: this looks new.')

def write(pairs):
    out = {'tool': 'tools/crossref.py', 'run': datetime.date.today().isoformat(), 'pairs': pairs}
    v.write_js(os.path.join(v.ROOT, 'pages', 'crossref.js'), '// Written by tools/crossref.py. Do not edit by hand: run it again.', 'CROSSREF', out)

def main():
    if len(sys.argv) >= 3: return check_new(sys.argv[1], sys.argv[2])
    pairs = run()
    for x in pairs:
        print('%-15s %-22s %-22s similarity %.2f   (%s; %s)' % (x['kind'], x['older'], x['newer'], x['similarity'], x['older_holder'], x['newer_holder']))
    counts = collections.Counter(x['kind'] for x in pairs)
    print('\n' + ', '.join('%d %s' % (counts[k], k) for k in ('identical', 'same result', 'near identical', 'builds on', 'shares most steps', 'same file')))
    if '--write' in sys.argv: write(pairs)

if __name__ == '__main__':
    main()
