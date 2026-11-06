"""Measurements for building the charts for real (see ARCHITECTURAL.md, "Building it for real").

  python tools/architecture.py            prints the tables in Markdown
  python tools/architecture.py --write    also writes them into ARCHITECTURAL.md, between the
                                          architecture-measure markers

1. Stake-out: every crossing point of a construction is marked on site with a small random error
   (5 mm by default: tape, cord and pegs used with care), and the construction is rebuilt many
   times. The spread of the result shows whether its own error, how far it is from perfect, would
   still be visible once built. If the spread is larger, the built version cannot show it.
2. Walkable gaps: how large each oversized and undersized pair must be built for the gap between
   their two results to be a path you can walk (1.2 m by default).
3. The sun: where the noon sun falls at the solstices and equinoxes through an opening in a roof
   or wall, for a range of latitudes.
"""
import itertools, math, os, random, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import verify as v

SIGMA = 0.005      # m, error of each staked-out point
TRIALS = 120
PLAZA = 50.0       # m across, for the circle problems
EDGE = 10.0        # m, the given cube's edge
PATH = 1.2         # m, a comfortable path for two people to pass
ROBUST = 3         # a construction's error must be at least this many times the stake-out spread
ROPE = 1 / 5000    # rope work: each point's error as a share of the radius (the best ancient builders)
OPENING = 10.0     # m, height of the opening the sun shines through
TILT = 23.44       # degrees, the Earth's axial tilt
SUN = math.radians(0.533)   # the sun's width in the sky


def measure(seed=7):
    random.seed(seed)
    real = v.intersections
    rows = []
    for p in v.load_archive()['problems']:
        if p['id'] not in ('rtc', 'stc', 'dtc'): continue
        for e in p['entries']:
            if not e.get('file'): continue
            g = os.path.join(v.ROOT, p['folder'], e['file'] + '.ggb')
            try:
                r = v.rebuild(g); j = v.judge(p['id'], r, e.get('square'), e.get('result_path'), e.get('result_scale'))
            except Exception: continue
            if not j: continue
            c, t = float(j[0]), float(j[1])
            if p['id'] == 'rtc':        # t is the circumference: metres per unit, then the length's error
                size = t / (2 * math.pi); k = (PLAZA / 2) / size; err = lambda c_, t_: (c_ - t_) * k
            elif p['id'] == 'stc':      # t is the circle's area: the square's side error
                size = math.sqrt(t / math.pi); k = (PLAZA / 2) / size; err = lambda c_, t_: (math.sqrt(c_) - math.sqrt(t_)) * k
            else:                       # c, t are volume ratios: the doubled edge's error
                size = v.given_size('dtc', r, j[5]) or 1; k = EDGE / size; err = lambda c_, t_: EDGE * (c_ ** (1 / 3) - t_ ** (1 / 3))
            ref = {n: o[1] for n, o in r['objects'].items() if o and o[0] == 'point'}
            spreads = []
            for s in (SIGMA / k, ROPE * size):          # modern pegs and tapes; rope work
                v.intersections = lambda o1, o2, s=s: [(x + random.gauss(0, s), y + random.gauss(0, s)) for x, y in real(o1, o2)]
                outs = []
                try:
                    for _ in range(TRIALS):
                        try:
                            rr = v.rebuild(g, {}, ref)
                            jj = v.judge(p['id'], rr, e.get('square'), e.get('result_path'), e.get('result_scale'))
                            if jj: outs.append(err(float(jj[0]), float(jj[1])))
                        except Exception: pass
                finally:
                    v.intersections = real
                if len(outs) < TRIALS * 0.8: break
                m = sum(outs) / len(outs); spreads.append(math.sqrt(sum((x - m) ** 2 for x in outs) / (len(outs) - 1)))
            if len(spreads) < 2: continue
            sd, rope = spreads
            rows.append({'id': e['id'], 'problem': p['id'], 'acc': e['acc'], 'holder': e['holder'], 'ai': e.get('holder_kind') == 'ai',
                         'side': e['side'], 'circles': e['circles'], 'lines': e['lines'], 'micro': 'µ' in (e.get('marks') or ''),
                         'err': err(c, t), 'spread': sd, 'rope': rope})
    return rows


def mm(x):
    a = abs(x) * 1000
    return ('%.0f mm' % a) if a >= 10 else ('%.1f mm' % a) if a >= 0.1 else ('%.1f µm' % (a * 1000)) if a >= 1e-4 else ('%.2g µm' % (a * 1000))


def report(rows):
    out = ['## Stake-out: does the built version still show the construction\'s error?\n',
           'Each crossing point staked out to ±%.0f mm with modern pegs and tapes, or to one part in %d of the radius with rope work; circles %.0f m across, cube edge %.0f m. "Shows" means the error is at least %d times the spread.\n' % (SIGMA * 1000, round(1 / ROPE), PLAZA, EDGE, ROBUST),
           '| Entry | Steps | Its error | Spread, pegs and tapes | Shows? | Spread, rope work | Shows? |', '|---|---|---|---|---|---|---|']
    for r in sorted(rows, key=lambda r: (r['problem'], -abs(r['err']))):
        shows = abs(r['err']) >= ROBUST * r['spread']
        rope_shows = abs(r['err']) >= ROBUST * r['rope']
        out.append('| %s%s | %dc %dl | %s%s | ±%s | %s | ±%s | %s |' % (r['id'], ' (AI)' if r['ai'] else '', r['circles'], r['lines'],
                   '+' if r['err'] > 0 else '−', mm(r['err']), mm(r['spread']), 'yes' if shows else 'no%s' % (' (µ)' if r['micro'] else ''),
                   mm(r['rope']), 'yes' if rope_shows else 'no%s' % (' (µ)' if r['micro'] else '')))
    out += ['\n## Walkable gaps: rectifying the circle\n',
            'Pairs that show once built (no µ). The gap is the difference between the two lengths; the plaza size is the one that makes it %.1f m.\n' % PATH,
            '| Oversized | Undersized | Gap on a %.0f m plaza | Plaza for a %.1f m path | Spread of the gap |' % (PLAZA, PATH), '|---|---|---|---|---|']
    rtc = [r for r in rows if r['problem'] == 'rtc' and not r['micro'] and abs(r['err']) >= ROBUST * r['spread']]
    for o, u in itertools.product([r for r in rtc if r['side'] == 'over'], [r for r in rtc if r['side'] == 'under']):
        gap = o['err'] - u['err']
        out.append('| %s (%dc %dl) | %s (%dc %dl) | %.2f m | %.1f m | ±%s |' % (o['acc'], o['circles'], o['lines'], u['acc'], u['circles'], u['lines'],
                   gap, PLAZA * PATH / gap, mm(math.hypot(o['spread'], u['spread']))))
    out += ['\n## The best pairs, built for a %.1f m gap\n' % PATH, '| Pair | Gap on a %.0f m plaza | Plaza needed |' % PLAZA, '|---|---|---|']
    for prob, name in (('rtc', 'Rectifying the circle'), ('stc', 'Squaring the circle'), ('dtc', 'Doubling the cube')):
        for ai in (False, True):
            pick = lambda side: min([r for r in rows if r['problem'] == prob and r['side'] == side and (ai or not r['ai'])], key=lambda r: abs(r['err']), default=None)
            o, u = pick('over'), pick('under')
            if not o or not u: continue
            gap = o['err'] - u['err']; base = PLAZA if prob != 'dtc' else EDGE
            need = base * PATH / gap
            out.append('| %s%s: %s + %s | %s | %s |' % (name, '' if ai else ' (people)', o['acc'], u['acc'], mm(gap),
                       ('%.0f km across' % (need / 1000)) if need > 2000 else ('%.0f m' % need)))
    out += ['\n## The sun at noon through an opening %.0f m up\n' % OPENING,
            '| Latitude | Sun\'s height: summer / equinox / winter | Spot distance from below the opening | Spot size on the floor, winter |', '|---|---|---|---|']
    for lat in (30, 40, 45, 51.5, 55):
        alts = [90 - lat + TILT, 90 - lat, 90 - lat - TILT]
        ds = [OPENING / math.tan(math.radians(a)) for a in alts]
        w = math.radians(alts[2])
        out.append('| %s° | %s | %s | %.2f m × %.2f m |' % (lat, ' / '.join('%.1f°' % a for a in alts), ' / '.join('%.1f m' % d for d in ds),
                   OPENING * SUN / math.sin(w) ** 2, OPENING * SUN / math.sin(w)))
    return '\n'.join(out)


MARK_START, MARK_END = '<!-- architecture-measure:start -->', '<!-- architecture-measure:end -->'

if __name__ == '__main__':
    import datetime
    text = report(measure())
    print(text)
    if '--write' in sys.argv:
        path = os.path.join(v.ROOT, 'ARCHITECTURAL.md'); doc = open(path, encoding='utf-8').read()
        block = (MARK_START + '\n\n_Written by `python tools/architecture.py --write` on %s. Do not edit by hand._\n\n' % datetime.date.today().isoformat()
                 + text.replace('## ', '#### ') + '\n\n' + MARK_END)
        if MARK_START in doc: doc = doc[:doc.index(MARK_START)] + block + doc[doc.index(MARK_END) + len(MARK_END):]
        else: doc += '\n' + block + '\n'
        open(path, 'w', encoding='utf-8').write(doc)
