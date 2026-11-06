"""Rebuild every GeoGebra construction in the archive and check it against the charts.

For each .ggb file this script:
  1. reads the construction (geogebra.xml inside the .ggb) and rebuilds it step by step from its
     starting points, with its own geometry code, instead of trusting the numbers GeoGebra saved;
  2. checks every rebuilt point, line and circle against the one saved in the file;
  3. lists which tools were used, and flags any hand-placed point the result depends on
     (a point dropped onto an object, or anything that is not a straightedge and compass step);
  4. recomputes the accuracy from the rebuilt figure, using the archive's rule
     100 - |constructed - true| / true * 100, and compares it with the chart in pages/archive-data.js;
  5. checks that the construction's .md notes agree with the chart.

Run it from the repository root:   python tools/verify.py
Write the results for the website:  python tools/verify.py --write
Compare with GeoGebra itself:       node tools/geogebra_check.js, then python tools/verify.py --compare-geogebra
Precise readouts need the mpmath package (pip install mpmath); everything else needs only Python 3.8+.
It exits with status 1 if anything disagrees, so it can run on every push.
"""
import json, math, re, sys, zipfile, glob, os, datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# The numbers the geometry is done in: ordinary floats (about 16 significant digits) for the everyday
# checks, or arbitrary precision (the mpmath package) for the precise readouts.
_READ_CACHE = {}
M, NUM = math, float
def use_precision(digits=None):
    """digits=None: ordinary floats. Otherwise work to that many significant digits with mpmath."""
    global M, NUM
    _READ_CACHE.clear()
    if digits is None:
        M, NUM = math, float
    else:
        import mpmath
        mpmath.mp.dps = digits
        M, NUM = mpmath, mpmath.mpf
TOL = 1e-6          # relative tolerance when comparing a rebuilt object with the saved one

# ---------------------------------------------------------------- geometry
def P(x, y): return (x, y)
def sub(a, b): return (a[0] - b[0], a[1] - b[1])
def dist(a, b): return M.hypot(a[0] - b[0], a[1] - b[1])
def line_through(p, q):                     # a x + b y + c = 0
    a, b = q[1] - p[1], p[0] - q[0]
    return ('line', a, b, -(a * p[0] + b * p[1]))
def line_dir(l): return (-l[2], l[1])
def perp_through(p, l):                     # line through p perpendicular to l
    a, b = l[1], l[2]
    return ('line', -b, a, -(-b * p[0] + a * p[1]))
def parallel_through(p, l):
    return ('line', l[1], l[2], -(l[1] * p[0] + l[2] * p[1]))
def circle(c, r): return ('circle', c, r)
def inter_ll(l, m):
    d = l[1] * m[2] - l[2] * m[1]
    if abs(d) < 1e-300: return []
    return [((l[2] * m[3] - l[3] * m[2]) / d, (l[3] * m[1] - l[1] * m[3]) / d)]
def inter_lc(l, c):
    a, b, k = l[1], l[2], l[3]; (cx, cy), r = c[1], c[2]
    n = M.hypot(a, b); a, b, k = a / n, b / n, k / n
    d = a * cx + b * cy + k
    foot = (cx - a * d, cy - b * d)
    h2 = r * r - d * d
    if h2 < -1e-9 * r * r: return []
    h = M.sqrt(max(h2, 0))
    return [(foot[0] - b * h, foot[1] + a * h), (foot[0] + b * h, foot[1] - a * h)]
def inter_cc(c1, c2):
    (x1, y1), r1 = c1[1], c1[2]; (x2, y2), r2 = c2[1], c2[2]
    d = M.hypot(x2 - x1, y2 - y1)
    if d == 0: return []
    a = (r1 * r1 - r2 * r2 + d * d) / (2 * d); h2 = r1 * r1 - a * a
    if h2 < -1e-9 * r1 * r1: return []
    h = M.sqrt(max(h2, 0)); mx, my = x1 + a * (x2 - x1) / d, y1 + a * (y2 - y1) / d
    return [(mx + h * (y2 - y1) / d, my - h * (x2 - x1) / d), (mx - h * (y2 - y1) / d, my + h * (x2 - x1) / d)]
def as_curve(o):                            # segments and rays meet things as their full line
    if o[0] in ('segment', 'ray'): return line_through(o[1], o[2])
    if o[0] == 'arc': return circle(o[1], o[2])
    return o
def on_segment(p, a, b):
    return min(a[0], b[0]) - 1e-9 <= p[0] <= max(a[0], b[0]) + 1e-9 and min(a[1], b[1]) - 1e-9 <= p[1] <= max(a[1], b[1]) + 1e-9
def intersections(o1, o2):
    for poly, other in ((o1, o2), (o2, o1)):
        if poly[0] == 'polygon':
            pts, out = poly[1], []
            for i in range(len(pts)):
                a, b = pts[i - 1], pts[i]
                out += [c for c in intersections(('segment', a, b), other) if on_segment(c, a, b)]
            return out
    a, b = as_curve(o1), as_curve(o2)
    if a[0] == 'line' and b[0] == 'line': return inter_ll(a, b)
    if a[0] == 'line' and b[0] == 'circle': return inter_lc(a, b)
    if a[0] == 'circle' and b[0] == 'line': return inter_lc(b, a)
    if a[0] == 'circle' and b[0] == 'circle': return inter_cc(a, b)
    raise ValueError('cannot intersect %s and %s' % (a[0], b[0]))
def shoelace(pts):
    return abs(sum(pts[i][0] * pts[i - 1][1] - pts[i - 1][0] * pts[i][1] for i in range(len(pts)))) / 2
def angle_at(a, b, c):                      # the smaller angle ABC, in radians
    u, v = sub(a, b), sub(c, b)
    return abs(M.atan2(u[0] * v[1] - u[1] * v[0], u[0] * v[0] + u[1] * v[1]))

# ---------------------------------------------------------------- reading a .ggb
def saved_object(el):
    t = el.get('type')
    if t == 'point' and 'coords' in el:
        x, y, z = el['coords']
        return ('point', (x / z, y / z)) if abs(z) > 1e-300 else None
    if t in ('line',) and 'coords' in el:
        x, y, z = el['coords']; return ('line', x, y, z)
    if t == 'conic' and 'matrix' in el:
        A = el['matrix']
        if abs(A[0] - A[1]) < 1e-9 * max(1, abs(A[0])) and abs(A[3]) < 1e-9 * max(1, abs(A[0])):
            cx, cy = -A[4] / A[0], -A[5] / A[0]
            return ('circle', (cx, cy), M.sqrt(max(cx * cx + cy * cy - A[2] / A[0], 0)))
    return None

def read(path):
    xml = zipfile.ZipFile(path).read('geogebra.xml').decode('utf-8')
    xml = xml.split('<construction', 1)[1]
    steps, elements = [], {}
    for m in re.finditer(r'<command name="(\w+)"[^>]*>(.*?)</command>|<element type="(\w+)" label="([^"]+)">(.*?)</element>', xml, re.S):
        if m.group(1):
            ins = re.search(r'<input ([^>]*)/>', m.group(2)); outs = re.search(r'<output ([^>]*)/>', m.group(2))
            steps.append(('cmd', m.group(1), re.findall(r'a\d+="([^"]*)"', ins.group(1)) if ins else [],
                          [html_unescape(x) for x in re.findall(r'a\d+="([^"]*)"', outs.group(1))] if outs else []))
        else:
            body = m.group(5); el = {'type': m.group(3)}
            c = re.search(r'<coords x="([^"]+)" y="([^"]+)" z="([^"]+)"', body)
            if c: el['coords'] = tuple(NUM(v) for v in c.groups())
            mt = re.search(r'<matrix A0="([^"]+)" A1="([^"]+)" A2="([^"]+)" A3="([^"]+)" A4="([^"]+)" A5="([^"]+)"', body)
            if mt: el['matrix'] = tuple(NUM(v) for v in mt.groups())
            v = re.search(r'<value val="([^"]+)"', body)
            if v: el['value'] = NUM(v.group(1))
            label = html_unescape(m.group(4)); elements[label] = el
            steps.append(('el', label))
    return steps, elements

def argument(text, obj, deps):
    """One command input: an object, a number, or a compass transfer such as Radius[c] or Segment[A, B]."""
    if text in obj: return obj[text], deps.get(text, set()), False
    m = re.fullmatch(r'Radius\[(.+)\]', text)
    if m: c = obj[m.group(1)]; return ('len', c[2]), deps.get(m.group(1), set()), False
    m = re.fullmatch(r'Segment\[(.+), (.+)\]', text)
    if m: return ('len', dist(obj[m.group(1)][1], obj[m.group(2)][1])), deps.get(m.group(1), set()) | deps.get(m.group(2), set()), False
    m = re.fullmatch(r'Circle\[(.+), ([-0-9.eE]+)\]', text)
    if m: return ('circle', obj[m.group(1)][1], NUM(m.group(2))), deps.get(m.group(1), set()), True
    m = re.fullmatch(r'\(?(-?)([^()]+)\)?', text)
    if m and m.group(2) in obj and obj[m.group(2)][0] == 'num':
        v = obj[m.group(2)][1]; return ('num', -v if m.group(1) else v), deps.get(m.group(2), set()), False
    return ('num', NUM(text)), set(), True

def html_unescape(s): return s.replace('&apos;', "'").replace('&quot;', '"').replace('&amp;', '&')

# Straightedge and compass steps, and the measuring tools allowed only for reading the result.
CONSTRUCT = {'Circle', 'Line', 'Segment', 'Ray', 'Intersect', 'OrthogonalLine', 'LineBisector', 'Midpoint',
             'AngularBisector', 'Polygon', 'CircleArc'}
MEASURE = {'Distance', 'Circumference', 'Area', 'Length', 'Angle', 'Perimeter'}
HAND_PLACED = {'Point', 'PointIn'}            # a point dropped onto an object by hand

def rebuild(path, overrides=None, ref=None):
    """Rebuild a construction. overrides moves given objects (label -> point or number); ref gives,
    for each intersection, the point to stay nearest to (used to follow a figure as it moves)."""
    if path not in _READ_CACHE: _READ_CACHE[path] = read(path)
    steps, els = _READ_CACHE[path]
    overrides = overrides or {}
    obj, deps, notes, tools = {}, {}, [], {}
    parents, kind_of = {}, {}            # which objects each object was made from, and by which tool
    free, hand, given, made = set(), set(), set(), []
    measures = []
    mismatches = 0
    def get(name):
        if name in obj: return obj[name]
        try: return NUM(name)
        except ValueError: raise KeyError(name)
    def check(label, rebuilt):
        nonlocal mismatches
        if overrides: return
        s = saved_object(els.get(label, {}))
        if s is None or rebuilt is None: return
        if s[0] == 'point' and rebuilt[0] == 'point':
            scale = max(1.0, M.hypot(*s[1]))
            if dist(s[1], rebuilt[1]) > TOL * scale * 100: mismatches += 1; notes.append('%s differs from the saved point' % label)
    commanded = set()
    for st in steps:
        if st[0] == 'cmd': commanded.update(st[3])
    for st in steps:
        if st[0] == 'el':
            label = st[1]
            if label in obj or label in commanded: continue
            el = els[label]; s = saved_object(el)
            if label in overrides:
                ov = overrides[label]
                obj[label] = ('num', ov) if isinstance(ov, (int, float)) else ('point', tuple(ov)); deps[label] = {label}; free.add(label); continue
            if s and s[0] == 'point': obj[label] = s; deps[label] = {label}; free.add(label)
            elif s and s[0] in ('line', 'circle'): obj[label] = s; deps[label] = {label}; free.add(label)
            elif 'value' in el and el['type'] in ('numeric', 'angle'): obj[label] = ('num', el['value']); deps[label] = set(); free.add(label)
            continue
        _, name, ins, outs = st
        tools[name] = tools.get(name, 0) + 1
        ins = [html_unescape(i) for i in ins]
        names_in = [n for i in ins for n in re.findall(r"[A-Za-z][A-Za-z0-9_{}']*", i) if n in obj]
        for o in outs: parents[o] = names_in; kind_of[o] = name
        args, d, typed = [], set(), False
        try:
            for i in ins:
                a, dd, t = argument(i, obj, deps)
                args.append(a); d |= dd; typed = typed or t
        except (KeyError, ValueError):
            notes.append('could not follow %s(%s)' % (name, ', '.join(ins))); continue
        res = {}
        kinds = [a[0] for a in args]
        if name == 'Circle':
            if kinds[:2] == ['point', 'point'] and len(args) == 2: res[outs[0]] = circle(args[0][1], dist(args[0][1], args[1][1]))
            elif kinds[0] == 'point' and kinds[1] == 'segment': res[outs[0]] = circle(args[0][1], dist(args[1][1], args[1][2]))
            elif kinds[0] == 'point' and kinds[1] == 'len': res[outs[0]] = circle(args[0][1], args[1][1])
            elif kinds == ['point', 'point', 'point']:
                (ax, ay), (bx, by), (cx, cy) = args[0][1], args[1][1], args[2][1]
                D = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by))
                ux = ((ax*ax+ay*ay)*(by-cy)+(bx*bx+by*by)*(cy-ay)+(cx*cx+cy*cy)*(ay-by))/D
                uy = ((ax*ax+ay*ay)*(cx-bx)+(bx*bx+by*by)*(ax-cx)+(cx*cx+cy*cy)*(bx-ax))/D
                res[outs[0]] = circle((ux, uy), dist((ux, uy), (ax, ay)))
            elif kinds[0] == 'point' and kinds[1] == 'num' and not any(k.startswith('circle') for k in made):
                res[outs[0]] = circle(args[0][1], args[1][1]); given.add(outs[0])          # the given circle
            else:
                notes.append('Circle with a typed radius (%s) is a measurement, not a compass step' % ', '.join(ins))
                res[outs[0]] = circle(args[0][1], args[1][1]) if kinds[1] == 'num' else None; hand.add(outs[0])
        elif name == 'Line':
            if kinds == ['point', 'point']: res[outs[0]] = line_through(args[0][1], args[1][1])
            elif kinds[0] == 'point': res[outs[0]] = parallel_through(args[0][1], as_curve(args[1]))
        elif name == 'Segment':
            res[outs[0]] = ('segment', args[0][1], args[1][1])
        elif name == 'Ray':
            res[outs[0]] = ('ray', args[0][1], args[1][1])
        elif name == 'OrthogonalLine':
            res[outs[0]] = perp_through(args[0][1], as_curve(args[1]))
        elif name == 'LineBisector':
            a, b = (args[0][1], args[0][2]) if kinds[0] == 'segment' else (args[0][1], args[1][1])
            m = ((a[0] + b[0]) / 2, (a[1] + b[1]) / 2)
            res[outs[0]] = perp_through(m, line_through(a, b))
        elif name == 'Midpoint':
            a, b = (args[0][1], args[0][2]) if kinds[0] == 'segment' else (args[0][1], args[1][1])
            res[outs[0]] = ('point', ((a[0] + b[0]) / 2, (a[1] + b[1]) / 2))
        elif name == 'AngularBisector':
            a, b, c = args[0][1], args[1][1], args[2][1]
            u, v = sub(a, b), sub(c, b); nu, nv = M.hypot(*u), M.hypot(*v)
            w = (b[0] + u[0] / nu + v[0] / nv, b[1] + u[1] / nu + v[1] / nv)
            res[outs[0]] = line_through(b, w)
        elif name == 'Intersect':
            cands = intersections(args[0], args[1])
            for o in outs:
                s = ('point', ref[o]) if ref and o in ref else saved_object(els.get(o, {}))
                if not cands: res[o] = None; continue
                if s and s[0] == 'point': pick = min(cands, key=lambda c: dist(c, s[1]))
                else: pick = cands[0]
                res[o] = ('point', pick)
        elif name == 'Polygon':
            pts = [a[1] for a in args if a[0] == 'point']
            res[outs[0]] = ('polygon', pts)
            for i, o in enumerate(outs[1:]):
                res[o] = ('segment', pts[i], pts[(i + 1) % len(pts)])
        elif name == 'CircleArc':
            res[outs[0]] = ('arc', args[0][1], dist(args[0][1], args[1][1]), args[1][1], args[2][1])
        elif name in HAND_PLACED:
            s = saved_object(els.get(outs[0], {}))
            if overrides and s and args and args[0][0] in ('line', 'segment', 'circle'):
                # When the figure moves, a point placed on an object slides with it: keep it on the object.
                ref_pt = tuple(overrides[outs[0]]) if outs[0] in overrides else ref.get(outs[0], s[1]) if ref else s[1]
                o0 = as_curve(args[0])
                if o0[0] == 'line':
                    a, b, c = o0[1], o0[2], o0[3]; n2 = a * a + b * b; t = (a * ref_pt[0] + b * ref_pt[1] + c) / n2
                    s = ('point', (ref_pt[0] - a * t, ref_pt[1] - b * t))
                else:
                    (cx, cy), rr = o0[1], o0[2]; d = M.hypot(ref_pt[0] - cx, ref_pt[1] - cy) or 1
                    s = ('point', (cx + (ref_pt[0] - cx) * rr / d, cy + (ref_pt[1] - cy) * rr / d))
            res[outs[0]] = s
            if name == 'Point' and ((ins and ins[0] in given and not typed) or (typed and not made)):
                given.add(outs[0])          # a point on the given circle, or the given radius, chosen before anything is drawn
            else: hand.add(outs[0])
            if typed: notes.append('%s is placed on a circle of typed radius (%s)' % (outs[0], ', '.join(ins)))
        elif name == 'Rotate' and kinds[0] == 'point' and kinds[1] == 'num' and kinds[2] == 'point':
            (x, y), t, (cx, cy) = args[0][1], args[1][1], args[2][1]
            res[outs[0]] = ('point', (cx + (x - cx) * M.cos(t) - (y - cy) * M.sin(t), cy + (x - cx) * M.sin(t) + (y - cy) * M.cos(t)))
            if ins[1].strip('()-') in free:
                given.add(outs[0])          # sets up the given angle or arc from given points and a given angle
            else:
                hand.add(outs[0]); notes.append('%s is made by rotating through an angle, which is not a compass step' % outs[0])
        elif name in MEASURE:
            val = None
            if name == 'Distance' and kinds == ['point', 'point']: val = dist(args[0][1], args[1][1])
            elif name in ('Circumference', 'Perimeter') and kinds[0] == 'circle': val = 2 * M.pi * args[0][2]
            elif name == 'Area' and kinds[0] == 'circle': val = M.pi * args[0][2] ** 2
            elif name == 'Area' and kinds[0] == 'polygon': val = shoelace(args[0][1])
            elif name == 'Length' and kinds[0] == 'arc':
                _, c, r, a, b = args[0]
                t = (M.atan2(b[1] - c[1], b[0] - c[0]) - M.atan2(a[1] - c[1], a[0] - c[0])) % (2 * M.pi)
                val = r * t
            elif name == 'Length' and kinds[0] == 'segment': val = dist(args[0][1], args[0][2])
            elif name == 'Angle' and kinds == ['point', 'point', 'point']: val = angle_at(args[0][1], args[1][1], args[2][1])
            measures.append({'tool': name, 'of': ins, 'value': val, 'depends': d, 'names': names_in})
            for o in outs: obj[o] = ('num', val); deps[o] = d
            continue
        else:
            notes.append('%s is not a straightedge and compass step' % name)
            for o in outs:
                s = saved_object(els.get(o, {})); res[o] = s; hand.add(o)
        for o, v in res.items():
            if v is None: continue
            made.append(v[0])
            obj[o] = v; deps[o] = (d | {o}) if o in hand else d
            if v[0] == 'point': check(o, v)
    return {'objects': obj, 'deps': deps, 'free': free, 'given': given, 'hand': hand, 'parents': parents, 'kind_of': kind_of, 'measures': measures, 'tools': tools,
            'notes': notes, 'mismatches': mismatches}

# ---------------------------------------------------------------- judging the result
def acc(constructed, truth): return 100 - abs(constructed - truth) / truth * 100

def judge(problem, r, target=None, path=None, scale=None):
    """Pick the result the file measures, and how far it is from the true value.
    path: for a result the file does not measure itself, the points whose joined length is the result."""
    obj, M = r['objects'], r['measures']
    if path and not all(x in obj for x in path):
        return None                      # the entry names its result points, and they are not in the file
    if path and problem == 'rtc':
        circ = [m for m in M if m['tool'] in ('Circumference', 'Perimeter')]
        if circ and all(x in obj for x in path):
            k = scale or 1
            L = k * sum(dist(obj[a][1], obj[b][1]) for a, b in zip(path, path[1:]))
            d = set().union(*[r['deps'].get(x, set()) for x in path])
            return L, circ[0]['value'], '%spath %s = %s against circumference %s' % ('%d × ' % k if k != 1 else '', '-'.join(path), L, circ[0]['value']), d, circ[0]['depends'], list(path)
    if path and problem == 'ar':
        arcs = [m for m in M if m['tool'] == 'Length' and m['value']]
        if arcs and all(x in obj for x in path):
            L = sum(dist(obj[a][1], obj[b][1]) for a, b in zip(path, path[1:]))
            d = set().union(*[r['deps'].get(x, set()) for x in path])
            return L, arcs[0]['value'], 'path %s = %.6f against arc length %.6f' % ('-'.join(path), L, arcs[0]['value']), d, arcs[0]['depends'], list(path)
    if problem == 'stc':
        circ = [m for m in M if m['tool'] == 'Area' and obj.get(m['of'][0], ('',))[0] == 'circle']
        squares = [o for k, o in obj.items() if o and o[0] == 'polygon' and len(o[1]) == 4 and (target is None or k == target)]
        if circ and squares:
            area = circ[0]['value']; sq = shoelace(squares[-1][1])
            sqname = [k for k, o in obj.items() if o is squares[-1]][0]
            return sq, area, 'square area %.6f against circle area %.6f' % (sq, area), r['deps'].get(sqname, set()), circ[0]['depends'], [sqname]
    if problem == 'rtc':
        circ = [m for m in M if m['tool'] in ('Circumference', 'Perimeter')]
        lens = [m for m in M if m['tool'] == 'Distance' and m['value']]
        if circ and lens:
            C = circ[0]['value']; k = scale or 1     # scale: the construction gives a known fraction of the circumference
            best = min(lens, key=lambda m: abs(k * m['value'] - C))
            if scale:
                return k * best['value'], C, '%d × distance %s = %.6f against circumference %.6f' % (k, '-'.join(best['of']), k * best['value'], C), best['depends'], circ[0]['depends'], best['names']
            return best['value'], C, 'distance %s = %.6f against circumference %.6f' % ('-'.join(best['of']), best['value'], C), best['depends'], circ[0]['depends'], best['names']
    if problem == 'dtc':
        lens = sorted([m for m in M if m['tool'] == 'Distance' and m['value']], key=lambda m: m['value'])
        if len(lens) >= 2:
            a, b = lens[0], lens[-1]
            if abs(b['value'] - a['value']) < 1e-9 * b['value']: return None
            return (b['value'] / a['value']) ** 3, 2.0, 'edge %.6f against given edge %.6f: volume ratio %.6f against 2' % (b['value'], a['value'], (b['value'] / a['value']) ** 3), b['depends'], a['depends'], a['names'] + b['names']
    if problem == 'taa':
        # Every one of the three parts must be a third of the whole, so the worst part is the measure.
        angs = [m for m in M if m['tool'] == 'Angle' and m['value']]
        if len(angs) >= 4:
            whole = max(angs, key=lambda m: m['value']); parts = [m for m in angs if m is not whole][:3]
            third = whole['value'] / 3
            worst = max(parts, key=lambda m: abs(m['value'] - third))
            each = ', '.join('%.4f°' % math.degrees(m['value']) for m in parts)
            return worst['value'], third, 'thirds %s against %.4f° (each %s); the worst sets the accuracy' % (
                each, math.degrees(third), ', '.join('%.3f%%' % acc(m['value'], third) for m in parts)), set().union(*[m['depends'] for m in parts]), whole['depends'], [n for m in angs for n in m['names']]
    if problem == 'ar':
        arcs = [m for m in M if m['tool'] == 'Length' and m['value']]
        lens = [m for m in M if m['tool'] == 'Distance' and m['value']]
        if arcs and lens:
            L = arcs[0]['value']; best = min(lens, key=lambda m: abs(m['value'] - L))
            if abs(best['value'] - L) / L < 0.1:
                return best['value'], L, 'distance %.6f against arc length %.6f' % (best['value'], L), best['depends'], arcs[0]['depends'], best['names']
    return None

LINE_TOOLS = {'Line', 'Segment', 'Ray', 'OrthogonalLine', 'LineBisector', 'AngularBisector'}
MICRO = 0.05          # SUBMISSION_RULESET.md, "Micro scale": a step under 5% of the given size

def ancestry(r, roots):
    seen, stack = set(), list(roots)
    while stack:
        n = stack.pop()
        if n in seen: continue
        seen.add(n); stack += r['parents'].get(n, [])
    return seen

def is_given_line(r, n, problem):
    """Rule 6: the given angle's arms or the given cube's edge are part of the problem, not steps."""
    if problem not in ('taa', 'ar', 'dtc') or r['kind_of'].get(n) not in ('Line', 'Segment', 'Ray'): return False
    ps = r['parents'].get(n, [])
    return len(ps) == 2 and all(x in r['free'] | r['given'] for x in ps)

def steps_used(r, roots, problem=None):
    """Count the result under SUBMISSION_RULESET.md, "Counting": only the steps the result depends on."""
    seen = ancestry(r, roots)
    circles = sum(r['kind_of'].get(n) in ('Circle', 'CircleArc') for n in seen)
    lines = sum(r['kind_of'].get(n) in LINE_TOOLS and not is_given_line(r, n, problem) for n in seen)
    return {'circles': circles, 'lines': lines}

def smallest_step(r, roots, problem, given_size):
    """The smallest step the result depends on, as a fraction of the given figure's size."""
    seen, o, sizes = ancestry(r, roots), r['objects'], []
    for n in seen:
        k = r['kind_of'].get(n); ps = [o[x][1] for x in r['parents'].get(n, []) if x in o and o[x] and o[x][0] == 'point']
        if k in ('Circle', 'CircleArc') and o.get(n) and o[n][0] in ('circle', 'arc'): sizes.append(o[n][2])
        elif k in ('Segment', 'Line', 'Ray', 'LineBisector', 'Midpoint') and len(ps) == 2 and not is_given_line(r, n, problem): sizes.append(dist(*ps))
    sizes = [x for x in sizes if x > 0]
    return min(sizes) / given_size if sizes and given_size else None

def shallowest_crossing(r, roots, steps):
    """The smallest angle, in degrees, at which two curves cross at a point the result depends on.
    Shallow crossings are hard to place accurately on paper."""
    anc, o, best = ancestry(r, roots), r['objects'], None
    def tangent(c, p):
        c = as_curve(c)
        return (float(c[2]), -float(c[1])) if c[0] == 'line' else (-(float(p[1]) - float(c[1][1])), float(p[0]) - float(c[1][0]))
    for st in steps:
        if st[0] != 'cmd' or st[1] != 'Intersect' or not st[3] or st[3][0] not in anc: continue
        a, b, pt = o.get(st[2][0]), o.get(st[2][1]), o.get(st[3][0])
        if not a or not b or not pt or a[0] == 'polygon' or b[0] == 'polygon': continue
        d1, d2 = tangent(a, pt[1]), tangent(b, pt[1])
        n = math.hypot(*d1) * math.hypot(*d2)
        if n == 0: continue
        ang = math.degrees(math.acos(min(1.0, abs(d1[0] * d2[0] + d1[1] * d2[1]) / n)))
        best = ang if best is None else min(best, ang)
    return best

def size_only(problem, path, entry, names, base=None):
    """The hand-placed points among `names` that only set the size of the figure: sliding each one
    along the line or circle it sits on, in small steps either way, leaves the accuracy unchanged.
    (For example a point anywhere on an angle's bisector, used as the radius of the first circle.)"""
    r0 = base or rebuild(path)
    j0 = judge(problem, r0, entry.get('square'), entry.get('result_path'), entry.get('result_scale'))
    if not j0: return set()
    a0 = acc(j0[0], j0[1]); size = given_size(problem, r0, j0[5]) or 1
    pts = lambda r: {k: o[1] for k, o in r['objects'].items() if o and o[0] == 'point'}
    out = set()
    for n in names:
        par = [r0['objects'].get(x) for x in r0['parents'].get(n, [])]
        path_obj = next((x for x in par if x and x[0] in ('line', 'segment', 'circle')), None)
        if not path_obj or r0['objects'].get(n, ('',))[0] != 'point': continue
        P = r0['objects'][n][1]
        if path_obj[0] == 'circle':
            (cx, cy) = path_obj[1]; t0 = M.atan2(P[1] - cy, P[0] - cx); rr = path_obj[2]
            at = lambda s: (cx + rr * M.cos(t0 + s * 0.35), cy + rr * M.sin(t0 + s * 0.35))
        else:
            l = as_curve(path_obj); dx, dy = line_dir(l); k = M.hypot(dx, dy) or 1
            at = lambda s: (P[0] + dx / k * s * 0.3 * size, P[1] + dy / k * s * 0.3 * size)
        same = True
        for sign in (1, -1):
            ref = pts(r0)
            for i in range(1, 11):
                try:
                    r = rebuild(path, {n: at(sign * i / 10)}, ref); ref = pts(r)
                    j = judge(problem, r, entry.get('square'), entry.get('result_path'), entry.get('result_scale'))
                except (ValueError, ZeroDivisionError, KeyError, TypeError): j = None
                if not j or abs(acc(j[0], j[1]) - a0) > 1e-9 * max(1, abs(a0)): same = False; break
            if not same: break
        if same: out.add(n)
    return out

def given_size(problem, r, roots):
    o, M = r['objects'], r['measures']
    if problem in ('stc', 'rtc'):
        for m in M:
            c = o.get(m['of'][0]) if m['of'] else None
            if m['tool'] in ('Area', 'Circumference', 'Perimeter') and c and c[0] == 'circle': return c[2]
    if problem == 'dtc':
        d = sorted(m['value'] for m in M if m['tool'] == 'Distance' and m['value'])
        if d: return d[0]
    rad = [x[2] for x in o.values() if x and x[0] == 'circle']
    return max(rad) if rad else None

def angle_parts(r, problem):
    """(corner, fixed arm point, turning arm point) of the given angle."""
    o = r['objects']
    if problem == 'taa':
        whole = [n for n, k in r['kind_of'].items() if k == 'Angle' and len(r['parents'].get(n, [])) == 3
                 and o.get(n) and o[n][0] == 'num' and o[n][1]]
        if whole:
            w = max(whole, key=lambda n: min(o[n][1], 2 * M.pi - o[n][1]))
            p, c, q = r['parents'][w]
            # the arm whose point was placed freely turns; prefer the one that is not on the base line
            free_arm = [x for x in (q, p) if x in r['free']]
            if not free_arm: return 'B', 'A', 'C'          # its arms are constructed: not the given angle
            turning = free_arm[0]
            fixed = p if turning == q else q
            if all(x in o and o[x][0] == 'point' for x in (c, fixed, turning)):
                if 'C' in (p, q) and fixed == 'C': fixed, turning = turning, fixed
                return c, fixed, turning
    if problem == 'ar' and not all(x in o for x in ('B', 'A', 'C')):
        # no B, A, C: the measured arc names the angle: CircleArc(centre, start, end), the end on the turning arm
        arcs = [n for n, k in r['kind_of'].items() if k == 'CircleArc' and len(r['parents'].get(n, [])) == 3]
        if arcs:
            c, fixed, turning = r['parents'][arcs[0]]
            if all(x in o and o[x] and o[x][0] == 'point' for x in (c, fixed, turning)): return c, fixed, turning
    return 'B', 'A', 'C'

def sweep_at(problem, path, entry, targets, step=1.0):
    """Accuracy at exact angles, each reached from the file's own angle in steps of at most `step`
    degrees so every intersection follows the figure. Returns {degrees: accuracy or None}."""
    out = {}
    for t in targets:
        pts, start = sweep(problem, path, entry, lo=min(t, 0), hi=max(t, 360), step=step, stop_at=t)
        out[t] = dict(pts).get(round(t, 3))
    return out

def sweep(problem, path, entry, lo=5.0, hi=355.0, step=1.0, stop_at=None):
    """Measure an angle method across a range of angles, keeping everything else as drawn.

    The given angle is changed (trisection: the arm through C turns about the vertex B; arc
    rectification: the given angle β changes) a degree at a time, starting from the file's own
    angle, and every intersection follows the figure smoothly from one step to the next.
    Returns [(degrees, accuracy or None)].
    """
    base = rebuild(path)
    def run(ov, ref):
        try:
            r = rebuild(path, ov, ref)
            j = judge(problem, r, None, entry.get('result_path'))
            if not j or any(o is None for o in r['objects'].values() if o is not None and o[0] == 'point' and None in o[1]): return None, r
            return acc(j[0], j[1]), r
        except (ValueError, ZeroDivisionError, KeyError, TypeError): return None, None
    nums = [k for k in base['free'] if base['objects'].get(k, ('',))[0] == 'num']
    if problem == 'taa' or (problem == 'ar' and not nums):
        # One arm turns about the corner. The corner, the fixed arm and the turning arm are read from the
        # whole angle's measurement (Angle[P, corner, Q]); files without one use the archive's usual
        # labels, corner B, fixed arm A, turning arm C.
        corner, fixed, turning = angle_parts(base, problem)
        B, A, C = (base['objects'][k][1] for k in (corner, fixed, turning))
        a0 = M.atan2(A[1] - B[1], A[0] - B[0]); rC = dist(B, C)
        start = math.degrees((M.atan2(C[1] - B[1], C[0] - B[0]) - a0) % (2 * M.pi))
        sgn = 1 if start <= 180 else -1            # the angle may open clockwise from arm BA
        if sgn < 0: start = 360 - start
        make = lambda deg: {turning: (B[0] + rC * M.cos(a0 + sgn * math.radians(deg)), B[1] + rC * M.sin(a0 + sgn * math.radians(deg)))}
    elif problem == 'ar':
        beta = nums[0]
        start = math.degrees(base['objects'][beta][1])
        make = lambda deg: {beta: math.radians(deg)}
    else:
        return []
    pts = lambda r: {k: o[1] for k, o in r['objects'].items() if o and o[0] == 'point'}
    scale = dist(B, A) if (problem == 'taa' or (problem == 'ar' and not nums)) else 1.0
    def same(r1, r2):
        p1, p2 = pts(r1), pts(r2)
        return all(k in p2 and dist(p1[k], p2[k]) <= 1e-9 * scale for k in p1)
    def step_to(d0, d1, ref, depth=0):
        # Move the figure from angle d0 to d1. Where a step is too big for some crossing to be followed
        # (two crossings closer together than the figure moves), one step and two half steps disagree:
        # then the step is halved, as often as needed.
        a, r = run(make(d1), ref)
        if r is None or depth >= 8: return a, r
        am, rm = run(make((d0 + d1) / 2), ref)
        if rm is None: return a, r
        a2, r2 = run(make(d1), pts(rm))
        if r2 is None or same(r, r2): return a, r
        am, rm = step_to(d0, (d0 + d1) / 2, ref, depth + 1)
        if rm is None: return am, rm
        return step_to((d0 + d1) / 2, d1, pts(rm), depth + 1)
    out = {}
    if stop_at is not None:
        # walk straight from the file's angle to stop_at, landing on it exactly
        n = max(1, int(math.ceil(abs(stop_at - start) / step)))
        ref, prev = pts(base), start
        for k in range(n + 1):
            deg = start + (stop_at - start) * k / n
            a, r = step_to(prev, deg, ref)
            if r is None: break
            ref, prev = pts(r), deg
        out[round(stop_at, 3)] = a if r is not None else None
        return sorted(out.items()), start
    for direction in (1, -1):
        ref, deg, prev = pts(base), start, start
        while lo <= deg <= hi:
            a, r = step_to(prev, deg, ref)
            out[round(deg, 3)] = a
            if r is None: break
            ref, prev = pts(r), deg; deg += direction * step
    return sorted(out.items()), start

def good_range(points, start, threshold=95.0):
    """The unbroken run of angles around the file's own angle where accuracy stays at or above the threshold."""
    pts = dict(points); degs = sorted(pts)
    if not degs: return None
    i = min(range(len(degs)), key=lambda k: abs(degs[k] - start))
    if pts[degs[i]] is None or pts[degs[i]] < threshold: return None
    lo = hi = i
    while lo > 0 and pts[degs[lo - 1]] is not None and pts[degs[lo - 1]] >= threshold: lo -= 1
    while hi < len(degs) - 1 and pts[degs[hi + 1]] is not None and pts[degs[hi + 1]] >= threshold: hi += 1
    return (degs[lo], degs[hi])

def precise_accuracy(problem, path, entry, digits=50, shown=32):
    """The entry's accuracy worked out to `digits` significant digits, as a string of `shown` digits."""
    import mpmath
    use_precision(digits)
    try:
        r = rebuild(path)
        j = judge(problem, r, entry.get('square'), entry.get('result_path'), entry.get('result_scale'))
        return mpmath.nstr(acc(j[0], j[1]), shown, strip_zeros=False) if j else None
    finally:
        use_precision(None)

def write_js(path, comment, name, obj):
    """Write data for the website as `const NAME = {...};`, compactly: one line for each item of the
    largest list or table in it, so the file stays small to load and easy to compare between runs."""
    dumps = lambda x: json.dumps(x, ensure_ascii=False, separators=(',', ':'))
    big = max((k for k, x in obj.items() if isinstance(x, (dict, list))), key=lambda k: len(obj[k]), default=None)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(comment + '\nconst %s = {' % name)
        f.write(','.join('%s:%s' % (dumps(k), dumps(x)) for k, x in obj.items() if k != big))
        if big is not None:
            items = obj[big]
            rows = ['%s:%s' % (dumps(k), dumps(x)) for k, x in items.items()] if isinstance(items, dict) else [dumps(x) for x in items]
            open_, close = ('{', '}') if isinstance(items, dict) else ('[', ']')
            f.write('%s%s:%s\n' % (',' if len(obj) > 1 else '', dumps(big), open_) + ',\n'.join(rows) + '\n' + close)
        f.write('};\n')

def read_js(path):
    """The data in a file written by write_js (or any `const NAME = {...};` file)."""
    s = open(path, encoding='utf-8').read()
    return json.loads(s[s.index('{', s.index('const ')):s.rindex('}') + 1])

def load_archive():
    src = open(os.path.join(ROOT, 'pages', 'archive-data.js'), encoding='utf-8').read()
    return json.loads(src[src.index('{'):src.rindex('}') + 1])

def md_fields(path):
    t = open(path, encoding='utf-8').read()
    parts = re.split(r'\*\*(.+?):\*\*', t)
    return {parts[i].strip(): parts[i + 1].strip() for i in range(1, len(parts), 2)}

MARK_START, MARK_END = '<!-- maintainer-list:start -->', '<!-- maintainer-list:end -->'

def maintainer_list(archive, results, today, pairs=()):
    """What still needs the maintainer, written into VERIFICATION.md."""
    maint = archive['verifiers']['people'][0]['name']
    side = {'over': 'oversized', 'under': 'undersized'}
    def name(p, e):
        return '%s, %s %s%%%s (%s)' % (p['name'], side[e['side']], e['acc'], ' · ' + e['method'] if e.get('method') else '', e['id'])
    unverified, attention, missing, counts, disputes, micro = [], [], [], [], [], []
    for p in archive['problems']:
        for e in p['entries']:
            if e.get('archived'): continue
            r = results.get(e['id'], {})
            people = [v for v in e.get('verified', []) if v.get('kind') == 'person']
            if not any(v['by'] == maint for v in people) and not people:
                unverified.append('- [ ] ' + name(p, e) + (': GeoGebra file `%s/%s.ggb`' % (p['folder'], e['file']) + (', square ' + e['square'] if e.get('square') else '') if e.get('file') else ''))
            if r.get('status') in ('attention', 'manual'):
                why = [c for c in r.get('checks', []) if not re.match(r'(every rebuilt|no hand-placed|accuracy .* reproduces)', c)]
                attention.append('- [ ] ' + name(p, e) + ': ' + '; '.join(why))
            if not e.get('file'):
                missing.append('- [ ] ' + name(p, e) + ': no GeoGebra file in the repository' + (' (it is online: https://www.geogebra.org/geometry/%s)' % e['geogebra'] if e.get('geogebra') else ''))
            su = r.get('steps_used')
            if su and isinstance(e['circles'], int) and (su['circles'], su['lines']) != (e['circles'], e['lines']):
                counts.append('- [ ] %s: charted %s circles, %s lines; the result is built from %d circles, %d lines' % (name(p, e), e['circles'], e['lines'], su['circles'], su['lines']))
            if r.get('micro') is not None and ('µ' in e.get('marks', '')) != r['micro'] and not e.get('micro_note', '').startswith('Marked µ by hand') or ('micro_note' in e and 'needs describing' in e['micro_note']):
                micro.append('- [ ] %s: the test finds its smallest step at %.1f%% of the given size; the chart %s µ' % (name(p, e), 100 * r['smallest_step'], 'has' if 'µ' in e.get('marks', '') else 'does not have'))
            for d in e.get('disputes', []):
                if d.get('status') == 'open': disputes.append('- [ ] ' + name(p, e) + ': ' + d.get('summary', ''))
    out = [MARK_START, '', '## Waiting for the maintainer', '',
           'Kept up to date by `python tools/verify.py --write` (last run %s). Tick items off by fixing them; the next run rewrites this list.' % today, '']
    for title, items, about in [
        ('Open disputes', disputes, ''),
        ('Not verified by a person yet', unverified, 'Rebuild each in GeoGebra, confirm the accuracy and the circles and lines, then add yourself to its `verified` list in pages/archive-data.js.'),
        ('Flagged by the AI check', attention, 'Each needs a decision: correct the entry, or explain why the check does not apply.'),
        ('Missing GeoGebra files', missing, ''),
        ('Step counts that differ from the counting rules', counts, 'Under SUBMISSION_RULESET.md, "Counting". Either update the chart, or say why the rule does not fit this entry.'),
        ('Identical or near-identical entries', ['- [ ] %s: %s and %s (score %.2f)' % (x['kind'], x['older'], x['newer'], x['similarity']) for x in pairs if x['kind'] in ('identical', 'same result', 'near identical')],
         'From tools/crossref.py. Decide whether each pair is a duplicate (dispute it), a credit question, or two genuinely different entries.'),
        ('µ marks to review', micro, 'The micro scale test (a step under 5% of the given size) disagrees with the chart. Add or remove the mark, or for a mark made by hand, describe the adjustment in the entry\'s micro_note.')]:
        if not items: continue
        out += ['### %s (%d)' % (title, len(items)), '']
        if about: out += [about, '']
        out += items + ['']
    out.append(MARK_END)
    return '\n'.join(out)

def compare_geogebra():
    """Compare tools/geogebra_points.json (written by tools/geogebra_check.js) with the rebuild."""
    G = json.load(open(os.path.join(ROOT, 'tools', 'geogebra_points.json')))
    total, worst = 0, []
    for f, pts in G.items():
        if pts is None: print('?? GeoGebra could not open ' + f); continue
        r = rebuild(os.path.join(ROOT, f)); o = r['objects']
        scale = max([abs(x[1][0]) + abs(x[1][1]) for x in o.values() if x and x[0] == 'point'] + [1])
        for n, xy in pts.items():
            m = o.get(n)
            if xy is None or not m or m[0] != 'point': continue
            total += 1; worst.append((math.hypot(xy[0] - m[1][0], xy[1] - m[1][1]) / scale, f, n))
    worst.sort(reverse=True)
    print('%d points compared across %d files; largest difference %.1e (%s, %s)' % (total, len(G), worst[0][0], worst[0][1], worst[0][2]))
    sys.exit(1 if worst and worst[0][0] > 1e-9 else 0)

def main():
    if '--compare-geogebra' in sys.argv: return compare_geogebra()
    write = '--write' in sys.argv
    archive = load_archive()
    results, problems_found = {}, 0
    charted = set()
    for p in archive['problems']:
        for e in p['entries']:
            key = e['id']
            res = {'id': key, 'checks': []}
            ok = True
            if not e.get('file'):
                res['status'] = 'no-file'; res['summary'] = 'No GeoGebra file in the repository yet, so it cannot be rebuilt here.'
                results[key] = res; continue
            ggb = os.path.join(ROOT, p['folder'], e['file'] + '.ggb'); md = os.path.join(ROOT, p['folder'], e.get('notes') or e['file']) + '.md'
            charted.add(os.path.normpath(ggb))
            r = rebuild(ggb)
            j = judge(p['id'], r, e.get('square'), e.get('result_path'), e.get('result_scale'))
            res['tools'] = r['tools']
            res['starting_points'] = sorted(k for k in r['free'] | r['given'] if r['objects'].get(k, ('num',))[0] != 'num')
            if r['mismatches']: ok = False; res['checks'].append('%d rebuilt points do not match the saved file' % r['mismatches'])
            else: res['checks'].append('every rebuilt point matches the saved file')
            for n in r['notes']: res['checks'].append(n)
            if j:
                c, t, how, d, dtrue, roots = j
                res['steps_used'] = steps_used(r, roots, p['id'])
                sm = smallest_step(r, roots, p['id'], given_size(p['id'], r, roots))
                res['smallest_step'] = sm; res['micro'] = bool(sm is not None and sm < MICRO)
                sc = shallowest_crossing(r, roots, _READ_CACHE[ggb][0])
                if sc is not None:
                    res['shallowest_crossing'] = round(sc, 2)
                    res['checks'].append('shallowest crossing the result depends on: %.1f°%s' % (sc, ' (shallow: hard to place accurately on paper)' if sc < 15 else ''))
                a = acc(c, t)
                res['accuracy'] = a; res['measured'] = how; res['side'] = 'over' if c > t else 'under'
                hand_used = sorted(h for h in r['hand'] if h in d)
                sized = size_only(p['id'], ggb, e, hand_used, r) if hand_used else set()
                if sized:
                    res['checks'].append('%s %s placed freely, but only sets the size: sliding it along its line or circle leaves the accuracy unchanged' % (', '.join(sorted(sized)), 'is' if len(sized) == 1 else 'are'))
                    hand_used = [h for h in hand_used if h not in sized]
                extra = sorted(x for x in (d - dtrue) if x in r['free'] and r['objects'].get(x, ('num',))[0] != 'num')
                if extra: ok = False; res['checks'].append('the result depends on freely placed point(s) beyond the given figure: ' + ', '.join(extra))
                if hand_used: ok = False; res['checks'].append('the result depends on hand-placed point(s): ' + ', '.join(hand_used))
                else: res['checks'].append('no hand-placed point feeds the result')
                chart = float(re.sub(r'[^0-9.]', '', e['acc']))
                places = len(e['acc'].split('.')[1]) if '.' in e['acc'] else 0
                approx = e['acc'].startswith('~')
                shown = math.floor(a * 10 ** places) / 10 ** places
                if approx: agree = abs(a - chart) < 0.01 + 1 / 10 ** places
                else: agree = abs(shown - chart) < 0.5 / 10 ** places + 1e-9
                if agree: res['checks'].append('accuracy %.10f%% reproduces the chart figure %s%%' % (a, e['acc']))
                else: ok = False; res['checks'].append('accuracy %.10f%% does NOT reproduce the chart figure %s%%' % (a, e['acc']))
                if p['id'] != 'taa' and res['side'] != e['side']: ok = False; res['checks'].append('the file is %ssized but the chart lists it %ssized' % (res['side'], e['side']))
            else:
                res['manual'] = True
                res['checks'].append('the file does not record a measurement this script can match to the result; it needs checking by hand')
            if os.path.exists(md):
                f = md_fields(md)
                for field, val in (('Number of Circles', e['circles']), ('Number of Lines', e['lines'])):
                    if f.get(field, '').strip() != str(val): ok = False; res['checks'].append('notes give %s = %r, chart gives %r' % (field, f.get(field, ''), val))
            if p['id'] in ('taa', 'ar') and j:
                pts, start = sweep(p['id'], ggb, e)
                res['sweep'] = [[round(d, 2), None if a is None else round(a, 4)] for d, a in pts]
                res['sweep_angle'] = round(start, 3)
                g = good_range(pts, start)
                res['range95'] = g
                res['checks'].append('swept across angles: %s' % ('95%% or better from %.0f° to %.0f° (as drawn, %.1f° in the file)' % (g[0], g[1], start) if g else 'never reaches 95%% near the file\'s angle (%.1f°)' % start))
            if write and j:
                res['precise'] = precise_accuracy(p['id'], ggb, e)
            res['status'] = ('manual' if res.get('manual') and ok else 'reproduced' if ok else 'attention')
            res['summary'] = ('Rebuilt from %d given object(s); ' % len(res['starting_points'])) + ('accuracy reproduced.' if res['status'] == 'reproduced' else 'needs checking by hand.' if res['status'] == 'manual' else 'does not match the chart.')
            results[key] = res
    stray = [g for g in glob.glob(os.path.join(ROOT, 'Approximations', '*', 'GeoGebra Files', '*', '*.ggb')) if os.path.normpath(g) not in charted]
    bad = 0
    # An entry the maintainer has already looked at can carry known_issue (why it is flagged, and what is
    # being done): it is still listed, but does not fail the check, so only new problems do.
    known = {e['id']: e['known_issue'] for p in archive['problems'] for e in p['entries'] if e.get('known_issue')}
    for k, v in results.items():
        mark = {'reproduced': 'OK ', 'attention': '!! ', 'no-file': '-- ', 'manual': '.. '}[v['status']]
        if v['status'] == 'attention':
            if k in known: mark = '!~ '
            else: bad += 1
        print(mark + k.ljust(16) + ' ' + (('%.10f%%  ' % v['accuracy']) if 'accuracy' in v else '') + v['summary'] + (('  [known: %s]' % known[k]) if k in known and v['status'] == 'attention' else ''))
        if v['status'] in ('attention', 'manual'):
            for c in v['checks']: print('      ' + c)
    for g in stray: print('?? not on any chart: ' + os.path.relpath(g, ROOT)); bad += 1
    if write:
        out = {'tool': 'tools/verify.py', 'run': datetime.date.today().isoformat(), 'results': results}
        try:
            import crossref
            pairs = crossref.run(archive); crossref.write(pairs)
            print('%d related pairs written to pages/crossref.js' % len(pairs))
        except Exception as ex:
            pairs = []; print('cross-reference was not run: %s' % ex)
        vpath = os.path.join(ROOT, 'VERIFICATION.md')
        vtext = open(vpath, encoding='utf-8').read()
        block = maintainer_list(archive, results, out['run'], pairs)
        if MARK_START in vtext:
            vtext = vtext[:vtext.index(MARK_START)] + block + vtext[vtext.index(MARK_END) + len(MARK_END):]
        else:
            vtext = vtext.replace('## Log', block + '\n\n## Log')
        open(vpath, 'w', encoding='utf-8').write(vtext)
        try:
            import draw; draw.main()
        except Exception as ex:
            print('drawings were not made: %s' % ex)
        write_js(os.path.join(ROOT, 'pages', 'ai-checks.js'), '// Written by tools/verify.py --write. Do not edit by hand: run the script again.', 'AI_CHECKS', out)
    ORIGINS = {'historical', 'maintainer', 'session', 'submitted'}
    for pr in archive['problems']:
        for e in pr['entries']:
            if (e.get('origin') or {}).get('kind') not in ORIGINS:
                print('?? %s has no origin (one of %s; see the note at the top of pages/archive-data.js)' % (e['id'], ', '.join(sorted(ORIGINS)))); bad += 1
    print('\n%d entries, %d need attention%s' % (len(results), bad, (', %d known issue%s' % (len(known), '' if len(known) == 1 else 's')) if known else ''))
    sys.exit(1 if bad else 0)

if __name__ == '__main__':
    main()
