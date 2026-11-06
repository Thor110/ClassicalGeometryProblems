"""Evaluate one submission: a GeoGebra file and the details the extension sent with it.

    python tools/evaluate_submission.py SUBMISSION_DIR [--out OUT_DIR]

SUBMISSION_DIR holds construction.ggb and submission.json (written by the browser extension in
extension/). The files are read as data only; nothing in them is run.

It works out:
  1. Which problem the construction answers. The problem the submitter chose is checked against
     what the chosen measurements actually are (a square's area against a circle's area, a length
     against a circumference, and so on). If the construction does not fit the chosen problem,
     but fits another, or fits none, it is set aside for manual verification.
  2. The accuracy, by rebuilding the construction from its starting points (tools/verify.py), in
     50-digit arithmetic, from the submitter's chosen result and true-value measurements.
  3. The archive's other checks: tools only (no point placed by hand feeding the result), the
     circles and lines under the counting rules, the micro scale test, shallow crossings.
  4. Whether it is identical or nearly identical to an entry already in the archive (crossref).

It writes OUT_DIR/report.md (the comment posted on the pull request), OUT_DIR/labels.txt (one
label per line) and OUT_DIR/decision.txt (review, reject or manual).
"""
import json, math, os, re, sys, zipfile
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import verify as v

MAX_BYTES = 5 * 1024 * 1024
NAMES = {'stc': 'Squaring the Circle', 'taa': 'Trisecting an Angle', 'dtc': 'Doubling the Cube',
         'rtc': 'Rectifying the Circle', 'ar': 'Arc Rectification'}

def value_of(r, name):
    """A recomputed value for a measurement, polygon or segment chosen in the extension."""
    o = r['objects'].get(name)
    if not o: return None, None
    if o[0] == 'num': return o[1], 'number'
    if o[0] == 'polygon': return v.shoelace(o[1]), 'polygon'
    if o[0] == 'segment': return v.dist(o[1], o[2]), 'segment'
    return None, o[0]

def measure_tool(r, name):
    """Which GeoGebra tool made a measurement (Area, Circumference, Distance, Angle, Length ...)."""
    return r['kind_of'].get(name)

def is_square(r, name):
    o = r['objects'].get(name)
    if not o or o[0] != 'polygon' or len(o[1]) != 4: return False
    p = o[1]; s = [v.dist(p[i], p[i - 1]) for i in range(4)]
    angs = [v.angle_at(p[i - 1], p[i], p[(i + 1) % 4]) for i in range(4)]
    return (max(s) - min(s)) / max(s) < 1e-9 and all(abs(a - math.pi / 2) < 1e-9 for a in angs)

def of_circle(r, name):
    """Does a measurement measure a circle (Area(c), Circumference(c))?"""
    parents = r['parents'].get(name, [])
    return any(r['objects'].get(p, ('',))[0] == 'circle' for p in parents)

def of_arc(r, name):
    return any(r['objects'].get(p, ('',))[0] == 'arc' for p in r['parents'].get(name, []))

def smaller_angle(a):
    a = float(a) % (2 * math.pi)
    return min(a, 2 * math.pi - a)

def fits(problem, r, res, tru, scale):
    """Does the chosen result and true value fit this problem? Returns (constructed, true) or a reason."""
    (rv, rk), (tv, tk) = value_of(r, res), value_of(r, tru)
    if rv is None or tv is None: return 'the chosen measurements could not be found in the construction'
    rt, tt = measure_tool(r, res), measure_tool(r, tru)
    if problem == 'stc':
        sq = res if rk == 'polygon' else next((p for p in r['parents'].get(res, []) if r['objects'].get(p, ('',))[0] == 'polygon'), None)
        if not sq or not is_square(r, sq): return 'the result is not the area of a square'
        if not (tt == 'Area' and of_circle(r, tru)): return 'the true value is not the area of a circle'
        return v.shoelace(r['objects'][sq][1]), tv
    if problem == 'rtc':
        if not (tt in ('Circumference', 'Perimeter') and of_circle(r, tru)): return 'the true value is not the circumference of a circle'
        if rk not in ('number', 'segment') or (rk == 'number' and rt not in ('Distance', 'Length')): return 'the result is not a length'
        return rv * (scale or 1), tv
    if problem == 'dtc':
        if rk not in ('number', 'segment') or tk not in ('number', 'segment'): return 'the result and the given edge must both be lengths'
        if rt not in ('Distance', 'Length', 'Segment') or tt not in ('Distance', 'Length', 'Segment'): return 'the result and the given edge must both be lengths'
        ratio = (rv / tv) ** 3
        if not 1.5 < ratio < 2.5: return 'the result is not close to the edge of a doubled cube (volume ratio %.3f)' % ratio
        return ratio, 2.0
    if problem == 'taa':
        if rt != 'Angle' or tt != 'Angle': return 'the result and the whole angle must both be angles'
        a, w = smaller_angle(rv), smaller_angle(tv)
        for k in (1, 2):
            if abs(a / (k * w / 3) - 1) < 0.1: return a, k * w / 3
        return 'the result is not close to a third of the angle'
    if problem == 'ar':
        if not (tt == 'Length' and of_arc(r, tru)): return 'the true value is not the length of an arc'
        if rk not in ('number', 'segment'): return 'the result is not a length'
        return rv, tv
    return 'unknown problem'

def roots_for(r, res):
    """The objects the result is made from, for counting and the checks."""
    roots = [res] + r['parents'].get(res, [])
    return roots

def evaluate(sub_dir):
    rep, labels = [], {'submission'}
    ggb, js = os.path.join(sub_dir, 'construction.ggb'), os.path.join(sub_dir, 'submission.json')
    if not os.path.exists(ggb) or not os.path.exists(js):
        return 'Missing construction.ggb or submission.json.', labels | {'needs-manual-check'}, 'manual'
    if os.path.getsize(ggb) > MAX_BYTES or not zipfile.is_zipfile(ggb):
        return 'construction.ggb is not a GeoGebra file of a sensible size.', labels | {'needs-manual-check'}, 'manual'
    try:
        info = zipfile.ZipFile(ggb).getinfo('geogebra.xml')
        if info.file_size > 4 * MAX_BYTES: raise ValueError
    except (KeyError, ValueError, zipfile.BadZipFile):
        return 'construction.ggb has no geogebra.xml of a sensible size.', labels | {'needs-manual-check'}, 'manual'
    if os.path.getsize(js) > 256 * 1024:
        return 'submission.json is too large.', labels | {'needs-manual-check'}, 'manual'
    meta = json.load(open(js, encoding='utf-8'))
    claimed, res, tru, scale = meta.get('problem'), meta.get('result'), meta.get('truth'), meta.get('scale')
    try:
        r = v.rebuild(ggb)
    except Exception as ex:
        return 'The construction could not be rebuilt (%s). It needs checking by hand.' % ex, labels | {'needs-manual-check'}, 'manual'

    # 1. Which problem
    verdicts = {p: fits(p, r, res, tru, scale) for p in NAMES}
    fitting = [p for p, x in verdicts.items() if isinstance(x, tuple)]
    rep.append('## Submission evaluation\n')
    rep.append('Submitted by **%s** for **%s**%s.\n' % (meta.get('name') or '(no name given)', NAMES.get(claimed, claimed),
               (', method "%s"' % meta['method']) if meta.get('method') else ''))
    decision = 'review'
    if claimed in fitting:
        rep.append('- **Problem:** confirmed as %s.' % NAMES[claimed]); problem = claimed
    else:
        why = verdicts.get(claimed, 'no problem was chosen') if claimed in NAMES else 'no problem was chosen'
        if fitting:
            rep.append('- **Problem:** it does not fit %s (%s), but it does fit %s. Set aside for manual verification.' % (
                NAMES.get(claimed, claimed), why, ' or '.join(NAMES[p] for p in fitting)))
        else:
            rep.append('- **Problem:** it could not be identified (%s). Set aside for manual verification.' % why)
        labels.add('needs-manual-check'); decision = 'manual'
        problem = fitting[0] if len(fitting) == 1 else None
    if problem is None:
        return '\n'.join(rep), labels, decision

    # 2. Accuracy, in 50-digit arithmetic
    c, t = verdicts[problem]
    if problem == 'taa':
        # as on the charts: every part must be a third, so the worst of the three parts sets the accuracy
        j = v.judge('taa', r)
        if j: c, t = j[0], j[1]
    a = v.acc(c, t); side = 'oversized' if c > t else 'undersized'
    precise = None
    try:
        import mpmath
        v.use_precision(50)
        r50 = v.rebuild(ggb)
        j50 = v.judge('taa', r50) if problem == 'taa' else None
        c50, t50 = (j50[0], j50[1]) if j50 else fits(problem, r50, res, tru, scale)
        precise = mpmath.nstr(v.acc(c50, t50), 32, strip_zeros=False)
    except Exception:
        pass
    finally:
        v.use_precision(None)
    rep.append('- **Accuracy:** %s%% %s%s.' % (('%.3f' % (math.floor(a * 1000) / 1000)), side, (' (precise readout %s%%)' % precise) if precise else ''))
    claimed_acc = meta.get('preview_accuracy')
    if claimed_acc is not None and abs(float(claimed_acc) - a) > 1e-6:
        rep.append('  The extension previewed %.6f%%; the rebuilt figure above is the one that counts.' % float(claimed_acc))

    # 3. The archive's checks
    roots = roots_for(r, res)
    deps = set().union(*[r['deps'].get(x, set()) for x in roots])
    hand = sorted(h for h in r['hand'] if h in deps)
    su = v.steps_used(r, roots, problem)
    size = v.given_size(problem, r, roots)
    sm = v.smallest_step(r, roots, problem, size)
    sc = v.shallowest_crossing(r, roots, v.read(ggb)[0])
    plural = lambda n, w: '%d %s%s' % (n, w, '' if n == 1 else 's')
    rep.append('- **Steps:** %s and %s lead to the result, under the counting rules.' % (plural(su['circles'], 'circle'), plural(su['lines'], 'line')))
    if r['mismatches']: rep.append('- **Rebuild:** %d points did not match the saved file; it needs checking by hand.' % r['mismatches']); labels.add('needs-manual-check'); decision = 'manual'
    if hand:
        rep.append('- **Tools:** the result depends on point(s) placed by hand: %s. Only straightedge and compass steps may lead to the result, so this needs checking by hand.' % ', '.join(hand))
        labels.add('needs-manual-check'); decision = 'manual'
    else:
        rep.append('- **Tools:** only straightedge and compass steps lead to the result.')
    if r['notes']: rep.append('- **Notes from the rebuild:** ' + '; '.join(r['notes']))
    if sm is not None:
        rep.append('- **Micro scale:** smallest step %.2f%% of the given size%s.' % (100 * sm, ', so it would be marked µ' if sm < v.MICRO else ''))
    if sc is not None:
        rep.append('- **Shallowest crossing:** %.1f°%s.' % (sc, ' (shallow: hard to place accurately on paper)' if sc < 15 else ''))
        if sc < 1: rep.append('  A crossing where curves only touch cannot be drawn, so this needs checking by hand.'); labels.add('needs-manual-check'); decision = 'manual'

    # 4. Cross-reference with the archive
    try:
        import crossref as X
        archive = v.load_archive(); p = [x for x in archive['problems'] if x['id'] == problem][0]
        new = {'ratio': float(c / t), 'fp': X.profile_of(r, roots, problem, size), 'curve': None}
        matches = []
        for e in p['entries']:
            if not e.get('file'): continue
            old = X.profile(problem, os.path.join(v.ROOT, p['folder'], e['file'] + '.ggb'), e)
            verdict = old and X.compare(problem, new, old)
            if verdict: matches.append('%s %s (%s%% by %s, score %.2f)' % (verdict[0], e['id'], e['acc'], e['holder'], verdict[1]))
        if matches:
            rep.append('- **Cross-reference:** ' + '; '.join(matches) + '.')
            if any(m.split(' ')[0] in ('identical', 'same', 'near') for m in matches): labels.add('possible-duplicate')
        else:
            rep.append('- **Cross-reference:** not identical or close to any entry in the archive.')
    except Exception as ex:
        rep.append('- **Cross-reference:** could not be run (%s).' % ex)

    # Verdict
    if a < 95:
        rep.append('\n**Below the 95% minimum.** Thank you for trying: the charts only rank constructions of 95% and above, so this one cannot be added. Most charted methods started further out than this, and small changes often help a lot. Keep refining it and submit again.')
        labels.add('below-minimum')
        if decision != 'manual': decision = 'reject'
    elif decision == 'review':
        rep.append('\n**Ready for review.** The maintainer will check it and add it to the charts.')
        labels.add('ready-for-review')
    if problem in ('taa', 'ar'):
        try:
            pts, start = v.sweep(problem, ggb, {}, lo=30.0, hi=150.0)
            ok = [(d, x) for d, x in pts if x is not None]
            g = v.good_range(pts, start)
            if ok:
                wd, wa = min(ok, key=lambda p: p[1])
                rep.append('\n**Across angles:** drawn at %.1f°. %s Between 30° and 150° the weakest is %.3f%% at %.0f°. '
                           'General methods are charted at their weakest angle; methods for one particular angle are charted at that angle. '
                           'The maintainer decides which applies.' % (start, ('It stays at 95%% or better from %.0f° to %.0f°.' % g) if g else 'It drops below 95% close to the drawn angle.', wa, wd))
        except Exception:
            rep.append('\nAngle methods are also measured across a sweep of angles once they are added to the charts.')
    rep.append('\n<sub>Evaluated automatically by tools/evaluate_submission.py. Figures come from rebuilding the construction, not from GeoGebra\'s saved values.</sub>')
    return '\n'.join(rep), labels, decision

def main():
    sub = sys.argv[1]; out = sys.argv[sys.argv.index('--out') + 1] if '--out' in sys.argv else sub
    report, labels, decision = evaluate(sub)
    os.makedirs(out, exist_ok=True)
    open(os.path.join(out, 'report.md'), 'w', encoding='utf-8').write(report + '\n')
    open(os.path.join(out, 'labels.txt'), 'w').write('\n'.join(sorted(labels)) + '\n')
    open(os.path.join(out, 'decision.txt'), 'w').write(decision + '\n')
    print(report); print('\nlabels:', ', '.join(sorted(labels)), '| decision:', decision)

if __name__ == '__main__':
    main()
