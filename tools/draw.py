"""Draw every charted construction twice, as SVG pictures for the website:

  pages/drawings/<entry id>.svg       only the circles and lines the result is built from
  pages/drawings/<entry id>-full.svg  everything in the GeoGebra file, exploration in pale grey

The result itself is drawn in green: the square, the constructed length, the cube's edge,
or the dividing rays. Geometry comes from tools/verify.py's rebuild, not from GeoGebra.

Run from the repository root:  python tools/draw.py
(python tools/verify.py --write runs it too.)
"""
import math, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import verify as v

ROOT = v.ROOT
OUT = os.path.join(ROOT, 'pages', 'drawings')
INK, CIRCLE, PALE, RESULT, GIVEN = '#3a3a44', '#7a7a86', '#d4d4da', '#178a62', '#b07a1a'
LINE_KINDS = {'Line', 'Ray', 'OrthogonalLine', 'LineBisector', 'AngularBisector'}

def clip_line(l, box):
    """The part of the infinite line a x + b y + c = 0 inside box (x0, y0, x1, y1)."""
    _, a, b, c = l
    x0, y0, x1, y1 = box; pts = []
    if abs(b) > 1e-12:
        for x in (x0, x1):
            y = -(a * x + c) / b
            if y0 - 1e-9 <= y <= y1 + 1e-9: pts.append((x, y))
    if abs(a) > 1e-12:
        for y in (y0, y1):
            x = -(b * y + c) / a
            if x0 - 1e-9 <= x <= x1 + 1e-9: pts.append((x, y))
    if len(pts) < 2: return None
    p, q = max(((p, q) for p in pts for q in pts), key=lambda pq: v.dist(*pq))
    return p, q

def ray_end(o, box):
    """Where a ray from o[1] through o[2] leaves the box."""
    (x, y), (px, py) = o[1], o[2]; dx, dy = px - x, py - y
    ts = []
    for lim, p0, d in ((box[0], x, dx), (box[2], x, dx), (box[1], y, dy), (box[3], y, dy)):
        if abs(d) > 1e-12:
            t = (lim - p0) / d
            if t > 0: ts.append(t)
    t = min(ts) if ts else 1
    return (x + dx * t, y + dy * t)

def result_shapes(problem, r, entry, j):
    """What to draw in green, as (kind, data) pairs."""
    obj, shapes = r['objects'], []
    roots = j[5]
    if problem == 'stc':
        for k in roots:
            if obj.get(k) and obj[k][0] == 'polygon': shapes.append(('poly', obj[k][1]))
    elif problem in ('rtc', 'ar'):
        path = entry.get('result_path')
        if path: shapes += [('seg', (obj[a][1], obj[b][1])) for a, b in zip(path, path[1:])]
        else:
            pts = [obj[k][1] for k in roots if obj.get(k) and obj[k][0] == 'point']
            if len(pts) >= 2: shapes.append(('seg', (pts[0], pts[1])))
    elif problem == 'dtc':
        pts = [obj[k][1] for k in roots if obj.get(k) and obj[k][0] == 'point']
        if len(pts) >= 4: shapes += [('given', (pts[0], pts[1])), ('seg', (pts[2], pts[3]))]
    elif problem == 'taa':
        vertex = obj['B'][1]
        for k in sorted(set(roots)):
            if k != 'B' and obj.get(k) and obj[k][0] == 'point': shapes.append(('ray', (vertex, obj[k][1])))
    return shapes

def bounds(r, names, shapes):
    obj, xs, ys = r['objects'], [], []
    for n in names:
        o = obj.get(n)
        if not o: continue
        if o[0] == 'point': xs.append(o[1][0]); ys.append(o[1][1])
        elif o[0] in ('circle', 'arc'): xs += [o[1][0] - o[2], o[1][0] + o[2]]; ys += [o[1][1] - o[2], o[1][1] + o[2]]
        elif o[0] == 'segment': xs += [o[1][0], o[2][0]]; ys += [o[1][1], o[2][1]]
        elif o[0] == 'polygon': xs += [p[0] for p in o[1]]; ys += [p[1] for p in o[1]]
    for kind, data in shapes:
        pts = data if kind == 'poly' else [data[0]] if kind == 'ray' else list(data)
        xs += [p[0] for p in pts]; ys += [p[1] for p in pts]
    if not xs: return None
    w, h = max(xs) - min(xs), max(ys) - min(ys); m = 0.06 * max(w, h, 1e-9)
    return (min(xs) - m, min(ys) - m, max(xs) + m, max(ys) + m)

def svg(r, names, shapes, box, pale=None, title='', given=()):
    obj, kinds = r['objects'], r['kind_of']
    x0, y0, x1, y1 = box; W, H = x1 - x0, y1 - y0
    size = 900; scale = size / max(W, H)
    px = lambda p: ((p[0] - x0) * scale, (y1 - p[1]) * scale)        # y grows downwards in SVG
    out = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %.1f %.1f" role="img" aria-label="%s">' % (W * scale, H * scale, title),
           '<rect width="100%" height="100%" fill="#ffffff"/>']
    def draw(n, colour, width):
        o, k = obj.get(n), kinds.get(n)
        if not o or o[0] == 'num': return
        if o[0] == 'circle' and k in ('Circle',):
            c = px(o[1]); out.append('<circle cx="%.2f" cy="%.2f" r="%.2f" fill="none" stroke="%s" stroke-width="%s"/>' % (c[0], c[1], o[2] * scale, colour, width))
        elif o[0] == 'arc':
            _, c, rr, a, b = o; pa, pb, pc = px(a), px(b), px(c)
            t = (math.atan2(b[1] - c[1], b[0] - c[0]) - math.atan2(a[1] - c[1], a[0] - c[0])) % (2 * math.pi)
            out.append('<path d="M %.2f %.2f A %.2f %.2f 0 %d 0 %.2f %.2f" fill="none" stroke="%s" stroke-width="%s"/>' % (pa[0], pa[1], rr * scale, rr * scale, 1 if t > math.pi else 0, pb[0], pb[1], colour, width))
        elif o[0] == 'line' and k in LINE_KINDS | {'Segment'}:
            if k == 'Segment':
                ps = r['parents'].get(n, [])
                ends = [obj[x][1] for x in ps if obj.get(x) and obj[x][0] == 'point'][:2]
                seg = tuple(ends) if len(ends) == 2 else clip_line(o, box)
            else:
                seg = clip_line(o, box)
            if seg:
                a, b = px(seg[0]), px(seg[1])
                out.append('<line x1="%.2f" y1="%.2f" x2="%.2f" y2="%.2f" stroke="%s" stroke-width="%s"/>' % (a[0], a[1], b[0], b[1], colour, width))
        elif o[0] == 'segment':
            a, b = px(o[1]), px(o[2])
            out.append('<line x1="%.2f" y1="%.2f" x2="%.2f" y2="%.2f" stroke="%s" stroke-width="%s"/>' % (a[0], a[1], b[0], b[1], colour, width))
        elif o[0] == 'ray':
            a, b = px(o[1]), px(ray_end(o, box))
            out.append('<line x1="%.2f" y1="%.2f" x2="%.2f" y2="%.2f" stroke="%s" stroke-width="%s"/>' % (a[0], a[1], b[0], b[1], colour, width))
    if pale:
        for n in pale: draw(n, PALE, 1)
    for n in names:
        draw(n, GIVEN if n in given else CIRCLE if obj.get(n, ('',))[0] in ('circle', 'arc') else INK, 2.2 if n in given else 1.4)
    for kind, data in shapes:
        if kind == 'poly':
            out.append('<polygon points="%s" fill="%s" fill-opacity="0.12" stroke="%s" stroke-width="3"/>' % (' '.join('%.2f,%.2f' % px(p) for p in data), RESULT, RESULT))
        elif kind in ('seg', 'given'):
            a, b = px(data[0]), px(data[1])
            out.append('<line x1="%.2f" y1="%.2f" x2="%.2f" y2="%.2f" stroke="%s" stroke-width="4" stroke-linecap="round"/>' % (a[0], a[1], b[0], b[1], RESULT if kind == 'seg' else GIVEN))
        elif kind == 'ray':
            a, b = px(data[0]), px(ray_end(('ray', data[0], data[1]), box))
            out.append('<line x1="%.2f" y1="%.2f" x2="%.2f" y2="%.2f" stroke="%s" stroke-width="2.5"/>' % (a[0], a[1], b[0], b[1], RESULT))
    out.append('</svg>')
    return '\n'.join(out)

def draw_entry(problem, folder, entry):
    if not entry.get('file'): return False
    path = os.path.join(ROOT, folder, entry['file'] + '.ggb')
    r = v.rebuild(path)
    j = v.judge(problem, r, entry.get('square'), entry.get('result_path'), entry.get('result_scale'))
    if not j: return False
    shapes = result_shapes(problem, r, entry, j)
    used = v.ancestry(r, j[5])
    steps = [n for n in r['kind_of'] if n in used and r['kind_of'][n] in LINE_KINDS | {'Segment', 'Circle', 'CircleArc'}
             and not v.is_given_line(r, n, problem)]
    given = [n for n in r['kind_of'] if (n in used and v.is_given_line(r, n, problem)) or (problem == 'ar' and r['kind_of'][n] == 'CircleArc')]
    everything = [n for n in r['kind_of'] if r['kind_of'][n] in LINE_KINDS | {'Segment', 'Circle', 'CircleArc'}]
    pale = [n for n in everything if n not in used]
    box = bounds(r, steps + given, shapes)
    fullbox = bounds(r, everything, shapes)
    if not box: return False
    os.makedirs(OUT, exist_ok=True)
    title = '%s %s%%' % (entry['id'], entry['acc'])
    open(os.path.join(OUT, entry['id'] + '.svg'), 'w', encoding='utf-8').write(svg(r, given + steps, shapes, box, title=title, given=set(given)))
    open(os.path.join(OUT, entry['id'] + '-full.svg'), 'w', encoding='utf-8').write(svg(r, given + steps, shapes, fullbox, pale=[n for n in pale if n not in given], title=title + ' (everything in the file)', given=set(given)))
    return True

def main():
    archive = v.load_archive()
    keep, made = set(), 0
    for p in archive['problems']:
        for e in p['entries']:
            if draw_entry(p['id'], p['folder'], e):
                made += 1; keep |= {e['id'] + '.svg', e['id'] + '-full.svg'}
    if os.path.isdir(OUT):
        for f in os.listdir(OUT):
            if f.endswith('.svg') and f not in keep: os.remove(os.path.join(OUT, f))
    print('%d constructions drawn into pages/drawings' % made)

if __name__ == '__main__':
    main()
