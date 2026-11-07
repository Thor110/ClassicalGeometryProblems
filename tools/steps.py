"""Write every charted construction as a list of steps, for the step-by-step player on the website.

  pages/steps/<problem>.js     STEPS['<problem>'] = {'<entry id>': {...}, ...}

Each entry's steps follow its GeoGebra file in the order it was drawn: first the given figure, then
every circle, line and point, each with a sentence written from the file itself, its geometry, and
whether the result depends on it (the "steps that count"). The last step shows the result and its
measurement. Geometry comes from tools/verify.py's rebuild, as for the drawings, not from GeoGebra.

Run from the repository root:  python tools/steps.py
(python tools/verify.py --write runs it too.)
"""
import json, math, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import verify as v
import draw

OUT = os.path.join(v.ROOT, 'pages', 'steps')
SUB = str.maketrans('0123456789', '₀₁₂₃₄₅₆₇₈₉')
DRAWN = {'Circle', 'Line', 'Segment', 'Ray', 'OrthogonalLine', 'LineBisector', 'AngularBisector', 'Midpoint',
         'Intersect', 'Polygon', 'CircleArc', 'Point', 'PointIn', 'Rotate'}


def pretty(label):
    """GeoGebra's labels as they read on paper: P_{15} as P₁₅."""
    def sub(m):
        s = m.group(1) or m.group(2)
        return s.translate(SUB) if s.isdigit() else '_' + s
    return re.sub(r'_\{([^}]*)\}|_(\w)', sub, label)


def and_list(xs):
    xs = list(xs)
    return xs[0] if len(xs) == 1 else ', '.join(xs[:-1]) + ' and ' + xs[-1] if xs else ''


class Writer:
    def __init__(self, problem, r, steps):
        self.p, self.r, self.cmd_of = problem, r, {}
        for st in steps:
            if st[0] == 'cmd':
                for o in st[3]: self.cmd_of[o] = st

    def short(self, n):
        """A few words naming an object, for use inside a sentence."""
        n = v.html_unescape(n)
        m = re.fullmatch(r'Segment\[(.+), (.+)\]', n)
        if m: return pretty(m.group(1)) + pretty(m.group(2))
        m = re.fullmatch(r'Circle\[(.+), [-0-9.eE]+\]', n)
        if m: return 'a circle about %s with a typed radius' % pretty(m.group(1))
        o = self.r['objects'].get(n)
        st = self.cmd_of.get(n)
        if not st:
            if o and o[0] == 'circle': return 'the given circle'
            if o and o[0] == 'line': return 'the given line'
            return pretty(n)
        _, name, ins, outs = st
        ins = [v.html_unescape(i) for i in ins]
        P = [pretty(i) for i in ins]
        if name == 'Circle':
            return 'the given circle' if n in self.r['given'] else 'the circle about ' + P[0]
        if name == 'Line':
            if len(ins) == 2 and self.is_point(ins[1]): return 'line ' + P[0] + P[1]
            return 'the parallel through ' + P[0]
        if name == 'Segment': return 'segment ' + P[0] + P[1]
        if name == 'Ray': return 'ray ' + P[0] + P[1]
        if name == 'OrthogonalLine': return 'the perpendicular through ' + P[0]
        if name == 'LineBisector': return 'the perpendicular bisector of ' + ''.join(P[:2])
        if name == 'AngularBisector': return 'the bisector of angle ' + ''.join(P[:3])
        if name == 'CircleArc': return 'the arc about ' + P[0]
        if name == 'Polygon':
            if outs and n == outs[0]: return 'the polygon'
            i = outs.index(n) - 1; pts = [p for p in P if True]
            return 'side ' + pts[i % len(pts)] + pts[(i + 1) % len(pts)]
        return pretty(n)

    def is_point(self, n):
        o = self.r['objects'].get(v.html_unescape(n)); return bool(o and o[0] == 'point')

    def sentence(self, st):
        _, name, ins, outs = st
        ins = [v.html_unescape(i) for i in ins]
        P = [pretty(i) for i in ins]; O = [pretty(o) for o in outs if o and self.r['objects'].get(o)]
        hand = any(o in self.r['hand'] for o in outs)
        if name == 'Circle':
            if len(ins) == 3 and all(self.is_point(i) for i in ins): return 'Draw the circle through %s.' % and_list(P)
            if len(ins) == 2 and self.is_point(ins[1]): return 'Draw the circle about %s through %s.' % (P[0], P[1])
            m = re.fullmatch(r'Segment\[(.+), (.+)\]', ins[1]) if len(ins) > 1 else None
            if m: return 'Draw the circle about %s with radius %s%s, carried over with the compass.' % (P[0], pretty(m.group(1)), pretty(m.group(2)))
            m = re.fullmatch(r'Radius\[(.+)\]', ins[1]) if len(ins) > 1 else None
            if m: return 'Draw the circle about %s with the radius of %s.' % (P[0], self.short(m.group(1)))
            if outs[0] in self.r['given']: return 'The given circle about %s.' % P[0]
            return 'Draw a circle about %s with a typed radius (%s), which is a measurement, not a compass step.' % (P[0], ins[1])
        if name == 'Line':
            if len(ins) == 2 and self.is_point(ins[1]): return 'Draw the line through %s and %s.' % (P[0], P[1])
            return 'Draw the line through %s parallel to %s.' % (P[0], self.short(ins[1]))
        if name == 'Segment': return 'Draw the segment %s%s.' % (P[0], P[1])
        if name == 'Ray': return 'Draw the ray from %s through %s.' % (P[0], P[1])
        if name == 'OrthogonalLine': return 'Draw the line through %s perpendicular to %s.' % (P[0], self.short(ins[1]))
        if name == 'LineBisector':
            return 'Draw the perpendicular bisector of %s.' % (P[0] + P[1] if len(P) > 1 else self.short(ins[0]))
        if name == 'AngularBisector': return 'Bisect angle %s.' % ''.join(P[:3])
        if name == 'Midpoint':
            of = P[0] + P[1] if len(P) > 1 else self.short(ins[0]).replace('segment ', '')
            return ('Mark %s, the midpoint of %s.' % (O[0], of)) if O else 'Mark the midpoint of %s.' % of
        if name == 'Intersect':
            a, b = self.short(ins[0]), self.short(ins[1])
            return 'Mark %s where %s meets %s.' % (and_list(O) or 'a point', a, b)
        if name == 'Polygon':
            pts = [p for i, p in zip(ins, P) if self.is_point(i)]
            what = 'the square' if self.p == 'stc' and len(pts) == 4 else 'the polygon'
            return 'Join %s to make %s.' % (and_list(pts), what)
        if name == 'CircleArc': return 'The arc from %s to %s about %s.' % (P[1], P[2], P[0])
        if name in ('Point', 'PointIn'):
            on = self.short(ins[0]) if ins else 'the page'
            if not hand: return 'Choose %s on %s.' % (O[0], on)
            return 'Place %s on %s by eye.' % (O[0], on)
        if name == 'Rotate':
            if hand: return 'Turn %s about %s through %s, which is not a compass step.' % (P[0], P[2], P[1])
            return 'Turn %s about %s through the given angle, to give %s.' % (P[0], P[2], O[0])
        return 'Use GeoGebra\'s %s tool to make %s.' % (name, and_list(O) or '…')


def noun(sentence):
    """A step's sentence as a phrase for the list of what is given."""
    t = sentence.rstrip('.')
    t = re.sub(r'^Draw ', '', t)
    m = re.match(r'^Choose (\S+) on (.+)$', t)
    if m: t = 'the point %s, chosen on %s' % m.groups()
    m = re.match(r'^Turn (\S+) about (\S+) through the given angle, to give (\S+)$', t)
    if m: t = 'the point %s, %s turned about %s through the given angle' % (m.group(3), m.group(1), m.group(2))
    return t[0].lower() + t[1:]


def num(x, d): return float(('%.' + str(d) + 'g') % x)


def shape(o, label, d):
    pt = lambda p: [num(p[0], d), num(p[1], d)]
    if not o: return None
    k = o[0]
    if k == 'point': return {'k': 'p', 'p': pt(o[1]), 'n': pretty(label)}
    if k == 'circle': return {'k': 'c', 'c': pt(o[1]), 'r': num(o[2], d)}
    if k == 'line':
        a, b, c = (float(x) for x in o[1:4]); n = math.hypot(a, b) or 1
        return {'k': 'l', 'e': [num(a / n, d), num(b / n, d), num(c / n, d)]}
    if k == 'segment': return {'k': 's', 'a': pt(o[1]), 'b': pt(o[2])}
    if k == 'ray': return {'k': 'r', 'a': pt(o[1]), 'b': pt(o[2])}
    if k == 'arc': return {'k': 'a', 'c': pt(o[1]), 'r': num(o[2], d), 'a': pt(o[3]), 'b': pt(o[4])}
    if k == 'polygon': return {'k': 'g', 'pts': [pt(p) for p in o[1]]}
    return None


def final(problem, r, entry, j, d):
    """The last step: the result in green, and what it measures."""
    c, t = float(j[0]), float(j[1])
    shapes = []
    for kind, data in draw.result_shapes(problem, r, entry, j):
        if kind == 'poly': shapes.append({'k': 'g', 'pts': [[num(p[0], d), num(p[1], d)] for p in data], 'res': 1})
        elif kind in ('seg', 'given'): shapes.append({'k': 's', 'a': [num(data[0][0], d), num(data[0][1], d)], 'b': [num(data[1][0], d), num(data[1][1], d)], 'res': 1 if kind == 'seg' else 0, 'giv': 1 if kind == 'given' else 0})
        elif kind == 'ray': shapes.append({'k': 'r', 'a': [num(data[0][0], d), num(data[0][1], d)], 'b': [num(data[1][0], d), num(data[1][1], d)], 'res': 1})
    gs = float(v.given_size(problem, r, j[5]) or 1)
    if problem == 'stc':
        out = {'c': c / gs ** 2, 't': t / gs ** 2, 'unit': 'r²', 'what': "the square's area", 'truth': "the circle's area, πr²"}
    elif problem == 'rtc':
        k = entry.get('result_scale')
        out = {'c': c / gs, 't': t / gs, 'unit': 'r', 'what': ('%d × the constructed length' % k) if k else 'the constructed length', 'truth': 'the circumference, 2πr'}
    elif problem == 'ar':
        arc = [x for x in r['objects'].values() if x and x[0] == 'arc']
        rad = float(arc[0][2]) if arc else gs
        out = {'c': c / rad, 't': t / rad, 'unit': 'r', 'what': 'the constructed length', 'truth': "the arc's length"}
    elif problem == 'dtc':
        out = {'c': c, 't': t, 'unit': '', 'what': "the new cube's volume, as a multiple of the given cube's", 'truth': 'double, 2'}
    else:
        angs = [m for m in r['measures'] if m['tool'] == 'Angle' and m['value']]
        whole = max(angs, key=lambda m: m['value']); parts = [m for m in angs if m is not whole][:3]
        out = {'c': math.degrees(c), 't': math.degrees(t), 'unit': '°', 'what': 'the worst of the three parts', 'truth': 'a third of the angle',
               'parts': [round(math.degrees(float(m['value'])), 9) for m in parts], 'whole': round(math.degrees(float(whole['value'])), 9)}
    out['shapes'] = shapes
    return out


def build(problem, folder, entry, frames=False):
    """The entry's steps: (the file's steps, the entry's own part); with frames, also the figure rebuilt at
    every 5° for angle methods, for the player's angle slider (None if it is not an angle method)."""
    if not entry.get('file'): return None
    path = os.path.join(v.ROOT, folder, entry['file'] + '.ggb')
    r = v.rebuild(path)
    j = v.judge(problem, r, entry.get('square'), entry.get('result_path'), entry.get('result_scale'))
    if not j: return None
    steps_xml = v._READ_CACHE[path][0]
    W = Writer(problem, r, steps_xml)
    used = v.ancestry(r, j[5])
    d = 7                                                      # significant figures: far finer than a screen

    def is_given_cmd(st):
        _, name, ins, outs = st
        return any(o in r['given'] for o in outs) or any(v.is_given_line(r, o, problem) for o in outs) \
            or (problem == 'ar' and name == 'CircleArc')

    # The plan: which objects each step draws, fixed from the file as drawn. Step 0 is the given figure.
    given_words, plan, given_names = [], [], []
    free = [n for n in r['objects'] if n in r['free'] and r['objects'][n] and r['objects'][n][0] != 'num']
    given_names += free
    pts = [pretty(n) for n in free if r['objects'][n][0] == 'point']
    if pts: given_words.append(('the point ' if len(pts) == 1 else 'the points ') + and_list(pts))
    for n in free:
        if r['objects'][n][0] in ('circle', 'line'): given_words.append(W.short(n))
    for st in steps_xml:
        if st[0] != 'cmd' or st[1] not in DRAWN: continue
        _, name, ins, outs = st
        names = [o for o in outs if r['objects'].get(o) and r['objects'][o][0] != 'num']
        if not names: continue
        if name == 'Polygon': names = names[:1]                   # the polygon, not its sides one by one
        if is_given_cmd(st):
            given_names += names; given_words.append(noun(W.sentence(st))); continue
        plan.append({'t': W.sentence(st), 'u': 1 if any(o in used for o in outs) else 0,
                     'h': 1 if any(o in r['hand'] for o in outs) else 0, 'n': names,
                     'p': sorted({x for o in outs for x in r['parents'].get(o, [])})})
    plan.insert(0, {'t': 'The given figure: ' + '; '.join(given_words) + '.', 'u': 1, 'h': 0, 'n': given_names, 'p': [], 'giv': 1})

    def geometry(rr, jj):
        steps = []
        for st in plan:
            sh = [x for x in (shape(rr['objects'].get(n), n, d) for n in st['n']) if x]
            if st.get('giv'):
                for x in sh: x['giv'] = 1
            steps.append(sh)
        res_shapes = draw.result_shapes(problem, rr, entry, jj)
        everything = [n for n in rr['objects'] if rr['objects'][n] and rr['objects'][n][0] != 'num']
        box = draw.bounds(rr, everything, res_shapes)
        users = [n for n in rr['kind_of'] if n in used and rr['objects'].get(n) and rr['objects'][n][0] != 'num']
        ubox = draw.bounds(rr, users, res_shapes) or box
        return steps, final(problem, rr, entry, jj, d), [num(x, d) for x in box], [num(x, d) for x in ubox]

    shapes, fin, box, ubox = geometry(r, j)
    # For each step, the earlier steps whose objects it is drawn from (for highlighting in the player).
    index = {}
    for i, st in enumerate(plan):
        for n in st['n']: index.setdefault(n, i)
    def from_steps(st, i):
        out = set()
        for pnm in st['p']:
            k = index.get(pnm)
            if k is None:                                         # an unnamed or undrawn helper: follow its parents
                stack, seen = list(r['parents'].get(pnm, [])), set()
                while stack:
                    q = stack.pop()
                    if q in seen: continue
                    seen.add(q)
                    if q in index: out.add(index[q])
                    else: stack += r['parents'].get(q, [])
            else: out.add(k)
        return sorted(x for x in out if x < i)
    file_part = {'view': box, 'steps': [{'t': st['t'], 'h': st['h'], 's': sh, 'f': from_steps(st, i)} for i, (st, sh) in enumerate(zip(plan, shapes))]}
    entry_part = {'file': entry['file'], 'used': ubox, 'u': ''.join(str(st['u']) for st in plan), 'result': fin}
    if not frames: return file_part, entry_part, None
    if problem not in ('taa', 'ar'): return file_part, entry_part, None
    got = {}
    def keep(deg, rr, a):
        jj = v.judge(problem, rr, entry.get('square'), entry.get('result_path'), entry.get('result_scale'))
        if not jj or a is None: return
        sh, fn, bx, ub = geometry(rr, jj)
        fn['acc'] = a
        got[round(deg, 2)] = {'s': sh, 'r': fn, 'view': bx, 'used': ub}
    start = v.sweep(problem, path, entry, lo=5.0, hi=180.0, step=5.0, on_step=keep)[1]
    return file_part, entry_part, {'start': round(start, 2), 'frames': [dict(deg=k, **x) for k, x in sorted(got.items())]}


def main():
    archive = v.load_archive()
    os.makedirs(OUT, exist_ok=True)
    made, keep = 0, set()
    dump = lambda x: json.dumps(x, ensure_ascii=False, separators=(',', ':'))
    head = '// Written by tools/steps.py (python tools/verify.py --write). Do not edit by hand: run the script again.\n'
    for p in archive['problems']:
        files, entries, angles = {}, {}, {}
        for e in p['entries']:
            try: b = build(p['id'], p['folder'], e, frames=True)
            except Exception as ex: print('steps for %s were not written: %s' % (e['id'], ex)); b = None
            if b:
                files.setdefault(e['file'], b[0]); entries[e['id']] = b[1]; made += 1
                if b[2]: angles[e['id']] = b[2]
        name = p['id'] + '.js'; keep.add(name)
        with open(os.path.join(OUT, name), 'w', encoding='utf-8') as f:
            f.write(head + '// files: each GeoGebra file\'s steps, once (f: the steps each is drawn from); entries: which steps count\n'
                    '// towards each charted result (u), and the result.\n')
            f.write('window.STEPS = window.STEPS || {};\nSTEPS[%s] = {\n"files": {\n' % json.dumps(p['id']))
            f.write(',\n'.join('%s: %s' % (json.dumps(k), dump(x)) for k, x in files.items()))
            f.write('\n},\n"entries": {\n')
            f.write(',\n'.join('%s: %s' % (json.dumps(k), dump(x)) for k, x in entries.items()))
            f.write('\n}};\n')
        if angles:
            name = p['id'] + '-angles.js'; keep.add(name)
            with open(os.path.join(OUT, name), 'w', encoding='utf-8') as f:
                f.write(head + '// Each angle method rebuilt every 5 degrees from its own angle, for the player\'s angle slider.\n')
                f.write('window.ANGLES = window.ANGLES || {};\nANGLES[%s] = {\n' % json.dumps(p['id']))
                f.write(',\n'.join('%s: %s' % (json.dumps(k), dump(x)) for k, x in angles.items()))
                f.write('\n};\n')
    for f in os.listdir(OUT):
        if f.endswith('.js') and f not in keep: os.remove(os.path.join(OUT, f))
    print('%d constructions written as steps into pages/steps' % made)


if __name__ == '__main__':
    main()
