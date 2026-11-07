"""Variants of the historical constructions: the same steps, with the fractions changed.

Most historical approximations are a skeleton of steps with a few fractions in it: Hayden takes a third
of CD, Hobson 3/5, 1/2 and 3/2 of the radius, the Rhind papyrus 8/9 of the diameter, Lambert a fifth of
the versine. Keep the skeleton, change the fractions, and the construction lands somewhere else. This
script tries every small fraction in each skeleton and lists, for each one, the variants that beat the
original, with what they cost: a fraction p/q of a length costs about q compass steps and two lines
(stepping it out and drawing a parallel), except halves, quarters and eighths, which are midpoints and
free under the counting rules.

  python tools/variants.py              print the findings and write Variants/README.md and variants.json
  python tools/variants.py --max-q 16   allow larger denominators (default 12)

Nothing here is charted by itself: a variant worth charting is drawn as a GeoGebra file and added like
any other entry, credited to the original's author and to whoever found the variant.
"""
import itertools, json, math, os, sys
from fractions import Fraction as Fr

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'Variants')
PI, CBRT2 = math.pi, 2 ** (1 / 3)


def acc(c, t): return 100 - abs(c - t) / t * 100


def cost(f):
    """Rough cost of laying off the fraction f of a length: (circles, lines)."""
    f = Fr(f)
    if f.denominator in (1, 2, 4, 8): return (0, 0)
    return (f.denominator, 2)


def fractions(max_q, lo, hi):
    seen = set()
    for q in range(1, max_q + 1):
        for p in range(0, int(hi * q) + 1):
            f = Fr(p, q)
            if lo <= f <= hi and f not in seen: seen.add(f); yield f


def worst_angle(f, lo=5, hi=90, step=1):
    """The worst accuracy of an arc method over angles lo..hi degrees (the range the sources tabulate)."""
    return min(f(math.radians(d)) for d in range(lo, hi + 1, step))


# Each skeleton: what it is, who it is from, the entry it varies, its slots (name, original value, range),
# and the accuracy for given slot values.
def hayden_dtc(f):
    # AB = 1: C the midpoint, E the apex of the equilateral triangle on CB, D its foot; F a fraction f of the
    # way from C to D; the circle about E with radius BF meets the perpendicular at B in L. AL is the edge.
    BF, BD = 0.5 - 0.25 * f, 0.25
    if BF <= BD: return None
    BL = math.sqrt(3) / 4 + math.sqrt(BF * BF - BD * BD)
    return acc((1 + BL * BL) ** 1.5, 2)


def hobson_stc(a, b, c):
    # OD = a, OE = b, OF = c radii; the square on GH, GH = √(ab) + √c.
    s = math.sqrt(a * b) + math.sqrt(c)
    return acc(s * s, PI)


def rhind_stc(f):
    # The square on the fraction f of the diameter.
    return acc((2 * f) ** 2, PI)


def kunze_rtc(a, b):
    # The right triangle with legs a and b diameters: its perimeter against π diameters.
    return acc(a + b + math.hypot(a, b), PI)


def lambert_ar(p, k):
    # The rectification point P at p radii beyond O, moved towards O by k versines: BD = sin x (P+1)/(P+cos x).
    def one(x):
        P = p - k * (1 - math.cos(x))
        return acc(math.sin(x) * (P + 1) / (P + math.cos(x)), x)
    return worst_angle(one)


def buonafalce1_dtc(f):
    # In the square on the edge, lay off the fraction f of the diagonal from D along DA; BE is the edge.
    return acc((1 + (1 - math.sqrt(2) * f) ** 2) ** 1.5, 2)


def willich_stc(t):
    # A at the top, B a quadrant away, BD a chord of 60° on the far side; E the fraction t of the way from B
    # to D; AE meets the circle again at F; AF is the side.
    A, B, D = (0, 1), (1, 0), (0.5, -math.sqrt(3) / 2)
    E = (B[0] + t * (D[0] - B[0]), B[1] + t * (D[1] - B[1]))
    dx, dy = E[0] - A[0], E[1] - A[1]
    s = 2 * abs(A[0] * dx + A[1] * dy) / math.hypot(dx, dy)          # the chord through A in that direction
    return acc(s * s, PI)


SKELETONS = [
    dict(id='hayden-dtc', name="Hayden's duplication (1871)", entry='dtc-under-99.989', problem='dtc',
         slots=[('f', Fr(1, 3), (Fr(0), Fr(1)))], fn=hayden_dtc,
         about='F a fraction f of the way from C to D (Hayden: a third).'),
    dict(id='hobson-stc', name="Hobson's quadrature (1913)", entry='stc-over-99.998', problem='stc',
         slots=[('OD', Fr(3, 5), (Fr(0), Fr(2))), ('OE', Fr(1, 2), (Fr(0), Fr(2))), ('OF', Fr(3, 2), (Fr(1, 2), Fr(3)))], fn=hobson_stc,
         about='OD, OE and OF as fractions of the radius (Hobson: 3/5, 1/2, 3/2).'),
    dict(id='rhind-stc', name='Rhind papyrus (about 1700 BC)', entry='stc-over-99.398', problem='stc',
         slots=[('side', Fr(8, 9), (Fr(1, 2), Fr(1)))], fn=rhind_stc,
         about='The square on a fraction of the diameter (Ahmes: 8/9).'),
    dict(id='kunze-rtc', name="Kunze's triangle (1851)", entry='rtc-over-99.998', problem='rtc',
         slots=[('leg 1', Fr(3, 5), (Fr(0), Fr(2))), ('leg 2', Fr(6, 5), (Fr(0), Fr(2)))], fn=kunze_rtc,
         about='The legs of the right triangle as fractions of the diameter (Kunze: 3/5 and 6/5).'),
    dict(id='lambert-ar', name="Cusa's and Lambert's rectification (1765)", entry='ar-under-99.029', problem='ar',
         slots=[('OP', Fr(2), (Fr(1), Fr(4))), ('shift', Fr(1, 5), (Fr(0), Fr(1)))], fn=lambert_ar,
         about='Where the rectification point sits (OP radii beyond O) and how many versines it moves in (Cusa: 2 and 0; Lambert: 2 and 1/5). Scored at its worst up to 90°.'),
    dict(id='buonafalce1-dtc', name="Buonafalce's first solution (1876)", entry='dtc-under-99.693', problem='dtc',
         slots=[('DE', Fr(1, 6), (Fr(0), Fr(1)))], fn=buonafalce1_dtc,
         about='DE as a fraction of the diagonal BD (Buonafalce: a sixth).'),
    dict(id='willich-stc', name="Willich's quadrature (1855)", entry='stc-under-99.946', problem='stc',
         slots=[('E', Fr(1, 2), (Fr(0), Fr(1)))], fn=willich_stc,
         about='E as a fraction of the way from B to D (Willich: the midpoint).'),
]


def search(sk, max_q):
    names = [s[0] for s in sk['slots']]
    orig = tuple(s[1] for s in sk['slots'])
    base = sk['fn'](*[float(x) for x in orig])
    base_cost = tuple(map(sum, zip(*[cost(x) for x in orig])))
    pools = [list(fractions(max_q, s[2][0], s[2][1])) for s in sk['slots']]
    found = []
    for combo in itertools.product(*pools):
        if combo == orig: continue
        try: a = sk['fn'](*[float(x) for x in combo])
        except (ValueError, ZeroDivisionError): continue
        if a is None or a <= base: continue
        c = tuple(map(sum, zip(*[cost(x) for x in combo])))
        found.append({'values': dict(zip(names, [str(x) for x in combo])), 'accuracy': a, 'cost': c,
                      'extra': (c[0] - base_cost[0], c[1] - base_cost[1])})
    # Keep the Pareto front: nothing both cheaper (or as cheap) and more accurate.
    found.sort(key=lambda x: (x['cost'][0] + x['cost'][1], -x['accuracy']))
    front, best = [], -1
    for x in found:
        if x['accuracy'] > best: front.append(x); best = x['accuracy']
    return {'id': sk['id'], 'name': sk['name'], 'entry': sk['entry'], 'problem': sk['problem'], 'about': sk['about'],
            'original': {'values': dict(zip(names, [str(x) for x in orig])), 'accuracy': base, 'cost': base_cost},
            'better': len(found), 'front': front[:8]}


def report(results, max_q):
    L = ['# Variants of the historical constructions', '',
         'Written by `tools/variants.py` (denominators up to %d). Each historical construction is kept step for step, and' % max_q,
         'only its fractions are changed. "Cost" is a rough count of the extra compass steps and lines a fraction takes to lay',
         'off (halves, quarters and eighths are midpoints, and free); "extra" is that against the original. Every variant',
         'listed beats the original; the list keeps only those that nothing cheaper beats.', '',
         'A variant is charted only once it is drawn in GeoGebra and added like any other entry, credited to the',
         "original's author and to whoever found the variant (Lambert's with a quarter versine is: `ar-over-99.831`).", '']
    for r in results:
        o = r['original']
        L += ['## ' + r['name'], '', r['about'] + ' Chart entry: `%s`.' % r['entry'], '',
              '| Fractions | Accuracy | Cost (circles, lines) | Extra |', '|---|---|---|---|',
              '| %s (original) | %.9f%% | %d, %d | |' % (', '.join('%s = %s' % kv for kv in o['values'].items()), o['accuracy'], *o['cost'])]
        for x in r['front']:
            L.append('| %s | %.9f%% | %d, %d | %+d, %+d |' % (', '.join('%s = %s' % kv for kv in x['values'].items()), x['accuracy'], *x['cost'], *x['extra']))
        if not r['front']: L.append('| no variant with these denominators beats it | | | |')
        L += ['', '%d variants beat the original in all.' % r['better'], '']
    return '\n'.join(L)


def main():
    max_q = int(sys.argv[sys.argv.index('--max-q') + 1]) if '--max-q' in sys.argv else 12
    results = [search(sk, max_q) for sk in SKELETONS]
    for r in results:
        o = r['original']
        print('%-44s original %.6f%%, %d better; best cheap ones:' % (r['name'], o['accuracy'], r['better']))
        for x in r['front'][:4]:
            print('    %-40s %.9f%%  cost %s' % (', '.join('%s=%s' % kv for kv in x['values'].items()), x['accuracy'], x['cost']))
    os.makedirs(OUT, exist_ok=True)
    open(os.path.join(OUT, 'README.md'), 'w', encoding='utf-8').write(report(results, max_q))
    json.dump({'max_q': max_q, 'results': results}, open(os.path.join(OUT, 'variants.json'), 'w', encoding='utf-8'), indent=1, ensure_ascii=False)
    print('Written to Variants/README.md and Variants/variants.json')


if __name__ == '__main__':
    main()
