"""Search for constructions a building can show (see ARCHITECTURAL.md, "Building it for real").

The charts reward the construction closest to perfect. A building needs something else: one
construction that lays out two lengths of the circumference from the same figure, one a little
too long and one a little too short, far enough apart that the gap between them can be seen, and
stood in, once every circle and line is made for real. This searches for those, and keeps the ones
that pass the checklist in ARCHITECTURAL.md:

  1. Match the site: the gap between the two lengths is between GAP_MIN and GAP_MAX of the
     circumference, so a 1.2 m path fits on a plaza between about 15 m and 130 m across.
  2. Show once built: rope work true to one part in 5,000 (the best ancient builders) still leaves
     the gap at least SHOWS times wider than it wanders.
  3. Few rope swings: at most MAX_STEPS circles and lines, the given circle not counted.
  4. Fit the site: everything within FOOTPRINT radii of the circle's centre; no step shorter than a
     twentieth of the radius (no micro scale), no crossing shallower than MIN_CROSSING degrees.

  python tools/architecture_search.py                 search for 10 minutes and print the finds
  python tools/architecture_search.py --minutes 30    search for longer
  python tools/architecture_search.py --write         also keep the finds: pages/architecture-finds.js,
                                                      GeoGebra files in Architecture/Finds/, and the
                                                      generated part of ARCHITECTURAL.md

Each run starts from a different seed and merges what it finds with the finds already kept, so
running it again only ever adds to them. tools/architecture_due.py says when it is due again.
"""
import cmath, datetime, json, math, os, random, sys, time
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import verify as v

ROOT = v.ROOT
FINDS_JS = os.path.join(ROOT, 'pages', 'architecture-finds.js')
FINDS_DIR = os.path.join(ROOT, 'Architecture', 'Finds')
DOC = os.path.join(ROOT, 'ARCHITECTURAL.md')
MARK_START, MARK_END = '<!-- architecture-finds:start -->', '<!-- architecture-finds:end -->'
TEMPLATE = os.path.join(ROOT, 'Approximations', '04 Rectifying The Circle', 'GeoGebra Files', 'Under', 'RTC-99.998-Kochanski.ggb')

TAU = 2 * math.pi
GAP_MIN, GAP_MAX = 0.003, 0.025      # the gap, as a share of the circumference
SHOWS = 3.0                          # the gap must be this many times its spread once built
ROPE = 1 / 5000                      # error of each point, as a share of the radius: rope work
FINE = 1 / 20000                     # careful modern work, reported alongside
MAX_STEPS = 9
FOOTPRINT = 6.0                      # radii from the centre
MICRO = 0.05                         # radii: shorter steps are micro scale
MIN_CROSSING = 20.0                  # degrees
PATH = 1.2                           # m, the walkable gap
KEEP = 12                            # finds kept between runs
EPS = 1e-9


# ----- geometry on complex numbers: a curve is ('L', p, q) or ('C', centre, radius)
def inter(c1, c2):
    if c1[0] == 'L' and c2[0] == 'L':
        p, q = c1[1], c1[2]; r, s = c2[1], c2[2]; d1, d2 = q - p, s - r
        den = d1.real * d2.imag - d1.imag * d2.real
        if abs(den) < 1e-12: return []
        t = ((r - p).real * d2.imag - (r - p).imag * d2.real) / den
        return [p + d1 * t]
    if c1[0] == 'C' and c2[0] == 'L': c1, c2 = c2, c1
    if c1[0] == 'L':
        p, q = c1[1], c1[2]; c, rr = c2[1], c2[2]; d = q - p; n = abs(d)
        if n < 1e-12: return []
        u = d / n; foot = p + u * ((c - p) * u.conjugate()).real; h2 = rr * rr - abs(c - foot) ** 2
        if h2 < -1e-12: return []
        h = math.sqrt(max(h2, 0)); return [foot + u * h, foot - u * h] if h > 1e-12 else [foot]
    c, r1 = c1[1], c1[2]; e, r2 = c2[1], c2[2]; d = abs(e - c)
    if d < 1e-12: return []
    a = (r1 * r1 - r2 * r2 + d * d) / (2 * d); h2 = r1 * r1 - a * a
    if h2 < -1e-12: return []
    h = math.sqrt(max(h2, 0)); u = (e - c) / d; m = c + u * a
    return [m + 1j * u * h, m - 1j * u * h] if h > 1e-12 else [m]

def crossing_angle(c1, c2, x):
    """The angle between two curves where they cross at x, in degrees (0 to 90)."""
    def direction(c):
        if c[0] == 'L': return c[2] - c[1]
        return 1j * (x - c[1])                       # a circle's tangent
    a, b = direction(c1), direction(c2)
    if abs(a) < 1e-12 or abs(b) < 1e-12: return 90.0
    t = abs(math.degrees(cmath.phase(b / a))) % 180
    return min(t, 180 - t)

def curve_of(origin, pts):
    kind, a, b = origin[0], origin[1], origin[2]
    if kind == 'line': return ('L', pts[a], pts[b])
    if kind == 'circle': return ('C', pts[a], abs(pts[b] - pts[a]))
    return ('C', pts[a], abs(pts[origin[3]] - pts[b]))      # ('transfer', centre, b, c): radius |b c|


# ----- one random construction
def construct(rnd, max_curves=8, max_points=70):
    """Given: centre O = 0, A = 1 on the circle (radius 1), the circle, and the line OA (a step).
    Each further step is a line through two points, a circle about a point through another, or a
    circle carrying a distance (compass transfer). Returns the construction as a record."""
    pts, pmask, porig = [0j, 1 + 0j], [0, 0], [('given',), ('given',)]
    curves, cmask, corig = [], [], []
    def add(origin, dep):
        cv = curve_of(origin, pts); k = len(curves); bit = 1 << k
        curves.append(cv); cmask.append(dep | bit); corig.append(origin)
        for j in range(k):
            for x in inter(cv, curves[j]):
                if abs(x) > FOOTPRINT or len(pts) >= max_points: continue
                if any(abs(x - y) < 1e-7 for y in pts): continue
                pts.append(x); pmask.append(cmask[k] | cmask[j]); porig.append(('X', k, j))
    add(('circle', 0, 1), 0)              # curve 0: the given circle (not counted)
    add(('line', 0, 1), 0)                # curve 1: the line through O and A
    tries = 0
    while len(curves) < max_curves and tries < 40:
        tries += 1; n = len(pts)
        pick = lambda: min(n - 1, int(n * (1 - rnd.random() ** 2)))     # prefer recent points
        a, b = pick(), pick()
        if a == b or abs(pts[a] - pts[b]) < MICRO: continue
        k = rnd.random()
        if k < 0.35: add(('line', a, b), pmask[a] | pmask[b])
        elif k < 0.85: add(('circle', a, b), pmask[a] | pmask[b])
        else:
            c = pick()
            if c in (a, b): continue
            add(('transfer', c, a, b), pmask[a] | pmask[b] | pmask[c])
    return {'pts': pts, 'pmask': pmask, 'porig': porig, 'curves': curves, 'cmask': cmask, 'corig': corig}

def steps_of(rec, mask):
    circles = lines = 0
    for k, o in enumerate(rec['corig']):
        if k == 0 or not (mask >> k) & 1: continue
        if o[0] == 'line': lines += 1
        else: circles += 1
    return circles, lines


# ----- replaying a construction with each crossing point marked a little wrong
def replay(rec, noise, rnd, need):
    """Rebuild the points in `need` (and what they depend on), moving every crossing point by a
    random error of `noise` radii. Returns {index: point} or None if a crossing is lost."""
    pts = {0: 0j, 1: 1 + 0j}; curves = {}
    def point(i):
        if i in pts: return pts[i]
        _, k, j = rec['porig'][i]
        cands = inter(curve(k), curve(j))
        if not cands: raise ValueError
        x = min(cands, key=lambda c: abs(c - rec['pts'][i]))
        pts[i] = x + complex(rnd.gauss(0, noise), rnd.gauss(0, noise))
        return pts[i]
    def curve(k):
        if k in curves: return curves[k]
        o = rec['corig'][k]
        ends = {q: point(q) for q in o[1:]}
        curves[k] = curve_of(o, {**{q: ends[q] for q in ends}})
        return curves[k]
    try:
        return {i: point(i) for i in need}
    except (ValueError, KeyError, ZeroDivisionError):
        return None


def checks(rec, mask, ends):
    """Footprint, micro scale and shallow crossings over everything the two lengths depend on."""
    used_c = [k for k in range(len(rec['curves'])) if (mask >> k) & 1]
    need, todo = set(), list(ends)
    for k in used_c: todo += list(rec['corig'][k][1:])
    while todo:
        i = todo.pop()
        if i in need: continue
        need.add(i)
        o = rec['porig'][i]
        if o[0] == 'X':
            for k in (o[1], o[2]): todo += list(rec['corig'][k][1:])
    smallest, shallowest, reach = 9.0, 90.0, 0.0
    for k in used_c:
        cv = rec['curves'][k]
        if k > 0: smallest = min(smallest, abs(cv[2] - cv[1]) if cv[0] == 'L' else cv[2])
        if cv[0] == 'C': reach = max(reach, abs(cv[1]) + cv[2])
    for i in need:
        reach = max(reach, abs(rec['pts'][i]))
        o = rec['porig'][i]
        if o[0] == 'X': shallowest = min(shallowest, crossing_angle(rec['curves'][o[1]], rec['curves'][o[2]], rec['pts'][i]))
    return smallest, shallowest, reach


def evaluate(rec, cand, rnd, trials=80):
    """The spread of the gap once built, at rope accuracy and at careful modern accuracy."""
    (k1, p1), (k2, p2) = cand['over'], cand['under']
    scale = cand['scale']; need = sorted({k1, p1, k2, p2})
    out = {}
    for name, noise in (('rope', ROPE), ('fine', FINE)):
        gaps = []
        for _ in range(trials):
            r = replay(rec, noise, rnd, need)
            if r is None: continue
            gaps.append((abs(r[p1] - r[k1]) - abs(r[p2] - r[k2])) * scale / TAU)
        if len(gaps) < trials * 0.9: return None
        m = sum(gaps) / len(gaps); sd = math.sqrt(sum((g - m) ** 2 for g in gaps) / (len(gaps) - 1))
        out[name] = sd
    return out


def pairs_in(rec):
    """Pairs of lengths in one construction: one over, one under the circumference (or half of it,
    doubled), with the gap between them in the band. Prefers pairs that share an end."""
    pts, pm = rec['pts'], rec['pmask']
    found = []
    for scale in (1, 2):
        over, under = [], []
        n = len(pts)
        for i in range(n):
            for j in range(i + 1, n):
                d = abs(pts[i] - pts[j]) * scale / TAU - 1
                if 0.0003 < d < GAP_MAX: over.append((d, i, j))
                elif -GAP_MAX < d < -0.0003: under.append((d, i, j))
        for do, i, j in over:
            for du, a, b in under:
                gap = do - du
                if not GAP_MIN <= gap <= GAP_MAX: continue
                shared = len({i, j} & {a, b})
                if not shared: continue                      # the two walkways start from the same point
                mask = pm[i] | pm[j] | pm[a] | pm[b]
                c, l = steps_of(rec, mask)
                if c + l > MAX_STEPS: continue
                k1 = ({i, j} & {a, b}).pop(); p1 = j if i == k1 else i; p2 = b if a == k1 else a
                found.append({'scale': scale, 'over': (k1, p1), 'under': (k1, p2), 'over_rel': do, 'under_rel': du, 'gap': gap,
                              'mask': mask, 'circles': c, 'lines': l})
    return found


def search(minutes, seed):
    rnd = random.Random(seed); end = time.time() + minutes * 60
    finds, tried = {}, 0
    while time.time() < end:
        rec = construct(rnd); tried += 1
        tested = 0
        for cand in sorted(pairs_in(rec), key=lambda c: c['circles'] + c['lines']):
            if tested >= 4: break                            # a few per construction keeps the search moving
            key = (cand['circles'] + cand['lines'], round(cand['over_rel'], 7), round(cand['under_rel'], 7))
            if key in finds: continue
            smallest, shallowest, reach = checks(rec, cand['mask'], set(cand['over']) | set(cand['under']))
            if smallest < MICRO or shallowest < MIN_CROSSING or reach > FOOTPRINT: continue
            tested += 1
            ev = evaluate(rec, cand, rnd)
            if not ev or cand['gap'] < SHOWS * ev['rope']: continue
            cand.update(rope=ev['rope'], fine=ev['fine'], smallest=smallest, shallowest=shallowest, reach=reach, record=pack(rec, cand))
            finds[key] = cand
    return list(finds.values()), tried


def pack(rec, cand):
    """Only what the two lengths need, in a form JSON can hold."""
    return {'pts': [[p.real, p.imag] for p in rec['pts']], 'porig': [list(o) for o in rec['porig']], 'corig': [list(o) for o in rec['corig']],
            'mask': cand['mask'], 'over': list(cand['over']), 'under': list(cand['under']), 'scale': cand['scale']}


def rank(f):
    # fewest rope swings first, then the gap that stands out most from the rope work
    return (f['circles'] + f['lines'], -f['gap'] / f['rope'])


def summary(f):
    D = PATH / (f['gap'] * math.pi)                      # plaza across, for a 1.2 m gap
    return {'id': f['id'], 'circles': f['circles'], 'lines': f['lines'], 'over': 100 * (1 - f['over_rel']), 'under': 100 * (1 + f['under_rel']),
            'gap': f['gap'], 'shows_rope': f['gap'] / f['rope'], 'shows_fine': f['gap'] / f['fine'], 'plaza': D, 'walkway': math.pi * D,
            'rope': f['reach'] * D / 2, 'scale': f['scale'], 'smallest': f['smallest'], 'shallowest': f['shallowest'], 'found': f.get('found'), 'file': f.get('file')}


# ----- keeping the finds
def load():
    if not os.path.exists(FINDS_JS): return {'runs': [], 'finds': []}
    s = open(FINDS_JS, encoding='utf-8').read()
    return json.loads(s[s.index('{'):s.rindex('}') + 1])

def write_ggb(f, path):
    import ggb_writer as W
    rec = f['record']; s = 6.0; ox, oy = 0.0, 0.0
    P = lambda k: (ox + rec['pts'][k][0] * s, oy + rec['pts'][k][1] * s)
    b = W.Builder(); made_p, made_c = set(), set()
    plab = lambda k: 'O' if k == 0 else 'A' if k == 1 else 'P_{%d}' % k
    clab = lambda k: 'c' if k == 0 else 'k_{%d}' % k
    def point(k):
        if k in made_p: return
        o = rec['porig'][k]
        if o[0] == 'given': b.given(plab(k), P(k))
        else: curve(o[1]); curve(o[2]); b.intersect(plab(k), clab(o[1]), clab(o[2]), P(k), show=False)
        made_p.add(k)
    def curve(k):
        if k in made_c: return
        o = rec['corig'][k]
        if o[0] == 'line': point(o[1]); point(o[2]); b.line2(clab(k), plab(o[1]), plab(o[2]))
        elif o[0] == 'circle': point(o[1]); point(o[2]); b.circle(clab(k), plab(o[1]), plab(o[2]))
        else: point(o[1]); point(o[2]); point(o[3]); b.circle(clab(k), plab(o[1]), radius_of=(plab(o[2]), plab(o[3])))
        made_c.add(k)
    point(0); point(1); curve(0)
    (k1, p1), (k2, p2) = rec['over'], rec['under']
    for q in (k1, p1, p2): point(q)
    b.segment('over', plab(k1), plab(p1), (200, 60, 40), th=7)
    b.segment('under', plab(k2), plab(p2), W.RESULT, th=7)
    b.measure('Circumference', ['c'], 'circumferencec', TAU * s)
    b.distance('distanceOver', plab(k1), plab(p1)); b.distance('distanceUnder', plab(k2), plab(p2))
    k = '2 × ' if rec['scale'] == 2 else ''
    b.text('text1', '"%s%s%s = " + %sdistanceOver + "   %s%s%s = " + %sdistanceUnder + "   circumference = " + circumferencec' % (
        k, plab(k1), plab(p1), '2 ' if rec['scale'] == 2 else '', k, plab(k2), plab(p2), '2 ' if rec['scale'] == 2 else ''), 40, 40)
    b.save(path, TEMPLATE, f['id'])
    # check the file: rebuilt by tools/verify.py, both lengths as the search found them
    r = v.rebuild(path); o = r['objects']
    for (a, z), rel in (((k1, p1), f['over_rel']), ((k2, p2), f['under_rel'])):
        got = v.dist(o[plab(a)][1], o[plab(z)][1]) * rec['scale'] / (TAU * s) - 1
        if abs(got - rel) > 1e-9: raise RuntimeError('%s: the written file gives %.9f, the search %.9f' % (path, got, rel))

def table(rows):
    out = ['| Find | Steps | Over | Under | Gap | Shows at 1 in 5,000 | Plaza for a %.1f m gap | Longest cord | File |' % PATH,
           '|---|---|---|---|---|---|---|---|---|']
    for s in rows:
        out.append('| %s | %dc %dl%s | %.3f%% | %.3f%% | %.2f%% | %.0f times | %.0f m | %.0f m | %s |' % (
            s['id'], s['circles'], s['lines'], ' (half, laid twice)' if s['scale'] == 2 else '', s['over'], s['under'], 100 * s['gap'], s['shows_rope'], s['plaza'], s['rope'],
            ('[%s](%s)' % (os.path.basename(s['file']), s['file'].replace(' ', '%20'))) if s.get('file') else ''))
    return '\n'.join(out)

def keep(new, today, tried, minutes, seed):
    data = load()
    old = data['finds']
    seen = {(x['circles'] + x['lines'], round(x['over_rel'], 7), round(x['under_rel'], 7)) for x in old}
    for f in new:
        k = (f['circles'] + f['lines'], round(f['over_rel'], 7), round(f['under_rel'], 7))
        if k not in seen: f['found'] = today; old.append(f); seen.add(k)
    old.sort(key=rank)
    kept, lengths = [], set()                       # variety: no two finds share a length
    for f in old:
        mine = {('o', round(f['over_rel'], 6)), ('u', round(f['under_rel'], 6))}
        if mine & lengths: continue
        kept.append(f); lengths |= mine
        if len(kept) == KEEP: break
    os.makedirs(FINDS_DIR, exist_ok=True)
    for n, f in enumerate(kept, 1):
        f['id'] = 'ARCH-%02d' % n
        rel = 'Architecture/Finds/%s.ggb' % f['id']; f['file'] = rel
        write_ggb(f, os.path.join(ROOT, rel))
    for name in os.listdir(FINDS_DIR):
        if name.endswith('.ggb') and name[:-4] not in {f['id'] for f in kept}: os.remove(os.path.join(FINDS_DIR, name))
    entries = sum(1 for p in v.load_archive()['problems'] for e in p['entries'])
    data['runs'].append({'date': today, 'entries': entries, 'tried': tried, 'minutes': minutes, 'seed': seed, 'new': len(new)})
    data['finds'] = kept
    with open(FINDS_JS, 'w', encoding='utf-8') as fh:
        fh.write('// Written by tools/architecture_search.py --write. Do not edit by hand: run it again.\n'
                 '// The constructions a building can show (ARCHITECTURAL.md), and a record of each run.\nconst ARCHITECTURE_FINDS = ')
        json.dump(data, fh, ensure_ascii=False, indent=1); fh.write(';\n')
    # the generated part of ARCHITECTURAL.md
    doc = open(DOC, encoding='utf-8').read()
    last = data['runs'][-1]
    block = (MARK_START + '\n\n_Written by `python tools/architecture_search.py --write`, last run %s with %d charted entries; %d run%s so far. '
             'Do not edit by hand._\n\n' % (last['date'], last['entries'], len(data['runs']), '' if len(data['runs']) == 1 else 's') + table([summary(f) for f in kept]) +
             '\n\nOver and under are each length\'s accuracy against the circumference; the true end lies between them. '
             '"Shows" is how many times wider the gap is than its wander, with every point of the construction marked to one part in 5,000 of the radius. '
             'The plaza is the circle\'s width that makes the gap %.1f m, and the longest cord is the largest circle swung at that size. '
             '"Half, laid twice": the construction gives half the circumference, and each walkway lays its length twice.\n\n' % PATH + MARK_END)
    if MARK_START in doc: doc = doc[:doc.index(MARK_START)] + block + doc[doc.index(MARK_END) + len(MARK_END):]
    else: doc += '\n' + block + '\n'
    open(DOC, 'w', encoding='utf-8').write(doc)
    return kept


def main():
    args = sys.argv[1:]
    minutes = float(args[args.index('--minutes') + 1]) if '--minutes' in args else 10.0
    seed = int(args[args.index('--seed') + 1]) if '--seed' in args else int(time.time())
    finds, tried = search(minutes, seed)
    finds.sort(key=rank)
    print('%d constructions tried in %.0f minutes (seed %d); %d pass the checklist' % (tried, minutes, seed, len(finds)))
    if '--write' in args:
        kept = keep(finds, datetime.date.today().isoformat(), tried, minutes, seed)
        print(table([summary(f) for f in kept]))
        print('kept %d finds in pages/architecture-finds.js and Architecture/Finds/' % len(kept))
    else:
        for n, f in enumerate(finds[:KEEP], 1): f['id'] = 'find %d' % n
        print(table([summary(f) for f in finds[:KEEP]]))

if __name__ == '__main__':
    main()
