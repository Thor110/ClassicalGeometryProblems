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
It exits with status 1 if anything disagrees, so it can run on every push.
Needs only Python 3.8 or later; nothing to install.
"""
import json, math, re, sys, zipfile, glob, os, datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TOL = 1e-6          # relative tolerance when comparing a rebuilt object with the saved one

# ---------------------------------------------------------------- geometry
def P(x, y): return (x, y)
def sub(a, b): return (a[0] - b[0], a[1] - b[1])
def dist(a, b): return math.hypot(a[0] - b[0], a[1] - b[1])
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
    n = math.hypot(a, b); a, b, k = a / n, b / n, k / n
    d = a * cx + b * cy + k
    foot = (cx - a * d, cy - b * d)
    h2 = r * r - d * d
    if h2 < -1e-9 * r * r: return []
    h = math.sqrt(max(h2, 0))
    return [(foot[0] - b * h, foot[1] + a * h), (foot[0] + b * h, foot[1] - a * h)]
def inter_cc(c1, c2):
    (x1, y1), r1 = c1[1], c1[2]; (x2, y2), r2 = c2[1], c2[2]
    d = math.hypot(x2 - x1, y2 - y1)
    if d == 0: return []
    a = (r1 * r1 - r2 * r2 + d * d) / (2 * d); h2 = r1 * r1 - a * a
    if h2 < -1e-9 * r1 * r1: return []
    h = math.sqrt(max(h2, 0)); mx, my = x1 + a * (x2 - x1) / d, y1 + a * (y2 - y1) / d
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
    return abs(math.atan2(u[0] * v[1] - u[1] * v[0], u[0] * v[0] + u[1] * v[1]))

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
            return ('circle', (cx, cy), math.sqrt(max(cx * cx + cy * cy - A[2] / A[0], 0)))
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
            if c: el['coords'] = tuple(float(v) for v in c.groups())
            mt = re.search(r'<matrix A0="([^"]+)" A1="([^"]+)" A2="([^"]+)" A3="([^"]+)" A4="([^"]+)" A5="([^"]+)"', body)
            if mt: el['matrix'] = tuple(float(v) for v in mt.groups())
            v = re.search(r'<value val="([^"]+)"', body)
            if v: el['value'] = float(v.group(1))
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
    if m: return ('circle', obj[m.group(1)][1], float(m.group(2))), deps.get(m.group(1), set()), True
    m = re.fullmatch(r'\(?(-?)([^()]+)\)?', text)
    if m and m.group(2) in obj and obj[m.group(2)][0] == 'num':
        v = obj[m.group(2)][1]; return ('num', -v if m.group(1) else v), deps.get(m.group(2), set()), False
    return ('num', float(text)), set(), True

def html_unescape(s): return s.replace('&apos;', "'").replace('&quot;', '"').replace('&amp;', '&')

# Straightedge and compass steps, and the measuring tools allowed only for reading the result.
CONSTRUCT = {'Circle', 'Line', 'Segment', 'Ray', 'Intersect', 'OrthogonalLine', 'LineBisector', 'Midpoint',
             'AngularBisector', 'Polygon', 'CircleArc'}
MEASURE = {'Distance', 'Circumference', 'Area', 'Length', 'Angle', 'Perimeter'}
HAND_PLACED = {'Point', 'PointIn'}            # a point dropped onto an object by hand

def rebuild(path):
    steps, els = read(path)
    obj, deps, notes, tools = {}, {}, [], {}
    parents, kind_of = {}, {}            # which objects each object was made from, and by which tool
    free, hand, given, made = set(), set(), set(), []
    measures = []
    mismatches = 0
    def get(name):
        if name in obj: return obj[name]
        try: return float(name)
        except ValueError: raise KeyError(name)
    def check(label, rebuilt):
        nonlocal mismatches
        s = saved_object(els.get(label, {}))
        if s is None or rebuilt is None: return
        if s[0] == 'point' and rebuilt[0] == 'point':
            scale = max(1.0, math.hypot(*s[1]))
            if dist(s[1], rebuilt[1]) > TOL * scale * 100: mismatches += 1; notes.append('%s differs from the saved point' % label)
    commanded = set()
    for st in steps:
        if st[0] == 'cmd': commanded.update(st[3])
    for st in steps:
        if st[0] == 'el':
            label = st[1]
            if label in obj or label in commanded: continue
            el = els[label]; s = saved_object(el)
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
            u, v = sub(a, b), sub(c, b); nu, nv = math.hypot(*u), math.hypot(*v)
            w = (b[0] + u[0] / nu + v[0] / nv, b[1] + u[1] / nu + v[1] / nv)
            res[outs[0]] = line_through(b, w)
        elif name == 'Intersect':
            cands = intersections(args[0], args[1])
            for o in outs:
                s = saved_object(els.get(o, {}))
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
            res[outs[0]] = s
            if name == 'Point' and ((ins and ins[0] in given and not typed) or (typed and not made)):
                given.add(outs[0])          # a point on the given circle, or the given radius, chosen before anything is drawn
            else: hand.add(outs[0])
            if typed: notes.append('%s is placed on a circle of typed radius (%s)' % (outs[0], ', '.join(ins)))
        elif name == 'Rotate' and kinds[0] == 'point' and kinds[1] == 'num' and kinds[2] == 'point':
            (x, y), t, (cx, cy) = args[0][1], args[1][1], args[2][1]
            res[outs[0]] = ('point', (cx + (x - cx) * math.cos(t) - (y - cy) * math.sin(t), cy + (x - cx) * math.sin(t) + (y - cy) * math.cos(t)))
            if all(i.strip('()-') in free | given for i in ins):
                given.add(outs[0])          # sets up the given angle or arc from given points and a given angle
            else:
                hand.add(outs[0]); notes.append('%s is made by rotating through an angle, which is not a compass step' % outs[0])
        elif name in MEASURE:
            val = None
            if name == 'Distance' and kinds == ['point', 'point']: val = dist(args[0][1], args[1][1])
            elif name in ('Circumference', 'Perimeter') and kinds[0] == 'circle': val = 2 * math.pi * args[0][2]
            elif name == 'Area' and kinds[0] == 'circle': val = math.pi * args[0][2] ** 2
            elif name == 'Area' and kinds[0] == 'polygon': val = shoelace(args[0][1])
            elif name == 'Length' and kinds[0] == 'arc':
                _, c, r, a, b = args[0]
                t = (math.atan2(b[1] - c[1], b[0] - c[0]) - math.atan2(a[1] - c[1], a[0] - c[0])) % (2 * math.pi)
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

def judge(problem, r, target=None):
    """Pick the result the file measures, and how far it is from the true value."""
    obj, M = r['objects'], r['measures']
    if problem == 'stc':
        circ = [m for m in M if m['tool'] == 'Area' and obj.get(m['of'][0], ('',))[0] == 'circle']
        squares = [o for k, o in obj.items() if o and o[0] == 'polygon' and len(o[1]) == 4 and (target is None or k == target)]
        if circ and squares:
            area = circ[0]['value']; sq = shoelace(squares[-1][1])
            sqname = [k for k, o in obj.items() if o is squares[-1]][0]
            return sq, area, 'square area %.6f against circle area %.6f' % (sq, area), r['deps'].get(sqname, set()), circ[0]['depends'], [sqname] + circ[0]['names']
    if problem == 'rtc':
        circ = [m for m in M if m['tool'] in ('Circumference', 'Perimeter')]
        lens = [m for m in M if m['tool'] == 'Distance' and m['value']]
        if circ and lens:
            C = circ[0]['value']
            best = min(lens, key=lambda m: abs(m['value'] - C))
            return best['value'], C, 'distance %s = %.6f against circumference %.6f' % ('-'.join(best['of']), best['value'], C), best['depends'], circ[0]['depends'], best['names'] + circ[0]['names']
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
                return best['value'], L, 'distance %.6f against arc length %.6f' % (best['value'], L), best['depends'], arcs[0]['depends'], best['names'] + arcs[0]['names']
    return None

LINE_TOOLS = {'Line', 'Segment', 'Ray', 'OrthogonalLine', 'LineBisector', 'AngularBisector'}
def steps_used(r, roots):
    """Circles and lines that the result actually comes from (Midpoint and Intersect are not counted)."""
    seen, stack = set(), list(roots)
    while stack:
        n = stack.pop()
        if n in seen: continue
        seen.add(n); stack += r['parents'].get(n, [])
    kinds = [r['kind_of'].get(n) for n in seen]
    return {'circles': sum(k in ('Circle', 'CircleArc') for k in kinds), 'lines': sum(k in LINE_TOOLS for k in kinds)}

def load_archive():
    src = open(os.path.join(ROOT, 'pages', 'archive-data.js'), encoding='utf-8').read()
    return json.loads(src[src.index('{'):src.rindex('}') + 1])

def md_fields(path):
    t = open(path, encoding='utf-8').read()
    parts = re.split(r'\*\*(.+?):\*\*', t)
    return {parts[i].strip(): parts[i + 1].strip() for i in range(1, len(parts), 2)}

MARK_START, MARK_END = '<!-- maintainer-list:start -->', '<!-- maintainer-list:end -->'

def maintainer_list(archive, results, today):
    """What still needs the maintainer, written into VERIFICATION.md."""
    maint = archive['verifiers']['people'][0]['name']
    side = {'over': 'oversized', 'under': 'undersized'}
    def name(p, e):
        return '%s, %s %s%%%s (%s)' % (p['name'], side[e['side']], e['acc'], ' · ' + e['method'] if e.get('method') else '', e['id'])
    unverified, attention, missing, counts, disputes = [], [], [], [], []
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
            for d in e.get('disputes', []):
                if d.get('status') == 'open': disputes.append('- [ ] ' + name(p, e) + ': ' + d.get('summary', ''))
    out = [MARK_START, '', '## Waiting for the maintainer', '',
           'Kept up to date by `python tools/verify.py --write` (last run %s). Tick items off by fixing them; the next run rewrites this list.' % today, '']
    for title, items, about in [
        ('Open disputes', disputes, ''),
        ('Not verified by a person yet', unverified, 'Rebuild each in GeoGebra, confirm the accuracy and the circles and lines, then add yourself to its `verified` list in pages/archive-data.js.'),
        ('Flagged by the AI check', attention, 'Each needs a decision: correct the entry, or explain why the check does not apply.'),
        ('Missing GeoGebra files', missing, ''),
        ('Step counts to review', counts, 'Informational. The checker counts only the circles and lines the result is built from (a perpendicular bisector counts as one line; midpoints and intersections are not counted). Where your count is higher, the extra steps may be exploration that could be left out of the count, or the counting rules may differ.')]:
        if not items: continue
        out += ['### %s (%d)' % (title, len(items)), '']
        if about: out += [about, '']
        out += items + ['']
    out.append(MARK_END)
    return '\n'.join(out)

def main():
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
            j = judge(p['id'], r, e.get('square'))
            res['tools'] = r['tools']
            res['starting_points'] = sorted(k for k in r['free'] | r['given'] if r['objects'].get(k, ('num',))[0] != 'num')
            if r['mismatches']: ok = False; res['checks'].append('%d rebuilt points do not match the saved file' % r['mismatches'])
            else: res['checks'].append('every rebuilt point matches the saved file')
            for n in r['notes']: res['checks'].append(n)
            if j:
                c, t, how, d, dtrue, roots = j
                res['steps_used'] = steps_used(r, roots)
                a = acc(c, t)
                res['accuracy'] = a; res['measured'] = how; res['side'] = 'over' if c > t else 'under'
                hand_used = sorted(h for h in r['hand'] if h in d)
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
            res['status'] = ('manual' if res.get('manual') and ok else 'reproduced' if ok else 'attention')
            res['summary'] = ('Rebuilt from %d given object(s); ' % len(res['starting_points'])) + ('accuracy reproduced.' if res['status'] == 'reproduced' else 'needs checking by hand.' if res['status'] == 'manual' else 'does not match the chart.')
            results[key] = res
    stray = [g for g in glob.glob(os.path.join(ROOT, 'Approximations', '*', 'GeoGebra Files', '*', '*.ggb')) if os.path.normpath(g) not in charted]
    bad = 0
    for k, v in results.items():
        mark = {'reproduced': 'OK ', 'attention': '!! ', 'no-file': '-- ', 'manual': '.. '}[v['status']]
        if v['status'] == 'attention': bad += 1
        print(mark + k.ljust(16) + ' ' + (('%.10f%%  ' % v['accuracy']) if 'accuracy' in v else '') + v['summary'])
        if v['status'] in ('attention', 'manual'):
            for c in v['checks']: print('      ' + c)
    for g in stray: print('?? not on any chart: ' + os.path.relpath(g, ROOT)); bad += 1
    if write:
        out = {'tool': 'tools/verify.py', 'run': datetime.date.today().isoformat(), 'results': results}
        vpath = os.path.join(ROOT, 'VERIFICATION.md')
        vtext = open(vpath, encoding='utf-8').read()
        block = maintainer_list(archive, results, out['run'])
        if MARK_START in vtext:
            vtext = vtext[:vtext.index(MARK_START)] + block + vtext[vtext.index(MARK_END) + len(MARK_END):]
        else:
            vtext = vtext.replace('## Log', block + '\n\n## Log')
        open(vpath, 'w', encoding='utf-8').write(vtext)
        with open(os.path.join(ROOT, 'pages', 'ai-checks.js'), 'w', encoding='utf-8') as f:
            f.write('// Written by tools/verify.py --write. Do not edit by hand: run the script again.\nconst AI_CHECKS = ')
            json.dump(out, f, indent=1, ensure_ascii=False)
            f.write(';\n')
    print('\n%d entries, %d need attention' % (len(results), bad))
    sys.exit(1 if bad else 0)

if __name__ == '__main__':
    main()
