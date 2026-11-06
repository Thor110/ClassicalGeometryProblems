# Submission Ruleset

These are the rules behind the keys and figures in the approximation charts.

**Rules are subject to change.** Each change is listed under [Changes](#changes) with its date, and
entries are re-checked against the current rules by `tools/verify.py`.

Current version: **1.4 (November 2026)**

## Rulesets

**Base ruleset**

- 25 circles maximum
- 40 lines maximum

**Extended ruleset**, for constructions that begin to approach perfect (99.91% and above)

- 49 circles maximum
- 80 lines maximum

## Accuracy

- 95% minimum, 100% maximum. New submissions below 95% are not accepted: the extension will not send them, and a pull request below 95% is closed automatically with its figures and some encouragement. Older entries below 95% stay on record, listed under their chart as below the minimum, but not ranked.
- Accuracy is `100 − |constructed − true| ÷ true × 100`, worked out from full-precision values and truncated (never rounded) to three decimal places, or more where two entries would otherwise tie.
- Every entry also records a **precise readout**, as many digits as can be trusted. `tools/verify.py` rebuilds the construction from its GeoGebra file in 50-digit arithmetic and records 32 significant digits. Where a starting point was placed on the given figure by hand (for example "a point on the circle"), GeoGebra stores it to about 16 digits, so for those entries the digits after about the fifteenth reflect where that point was stored rather than the construction itself.
- **Squaring the circle** compares the square's area with the circle's area.
- **Doubling the cube** compares the constructed cube's volume with twice the given cube's volume.
- **Rectifying the circle** compares the constructed length with the circumference.
- **Arc rectification** compares the constructed length with the arc's length.
- **Trisecting an angle**: every one of the three parts must be a third of the angle, so the worst of the three sets the accuracy.
- **Angle methods** (trisection, arc rectification) must work for any angle. Their accuracy is also measured across a sweep of angles, and the chart notes the range over which the method holds. The chart figure is the accuracy at the angle the file is drawn at. A general method, one with no point placed by eye, can be drawn at its worst angle between 30° and 150°, so that its figure holds for the whole of that range. The angle's corner and arms are read from the file's measurement of the whole angle, whatever they are labelled.
- **Points placed freely to set the size.** A point dropped anywhere on a line or circle (for example any point on the angle's bisector, used as the radius of the first circle) is not counted against a construction when it only sets the size: sliding it along its line or circle leaves the accuracy unchanged. `tools/verify.py` tests this for every such point.

## Key

Key marks are added to the left of the method holder's name.

- `~` **Contested**: proof of the original discoverer is being sought. Some constructions, such as very simple ones, may appear in ancient sources (for example the Śulba Sūtras of Vedic India, or in architecture), so their first discoverer may never be identified.
- `@` **Too simple**: the construction is simple enough that it has almost certainly been found many times before.
- `µ` **Micro scale edits**: the construction relies on steps too small to reproduce reliably on paper. See [Micro scale](#micro-scale) for the exact test.

## Counting

Version 1.0 counts a construction the way it is drawn with GeoGebra's tools, and counts only the steps the result depends on.

1. **Only steps that lead to the result count.** Exploration, guide lines, reference marks at the true value, and measurements do not count, even if they are in the file.
2. **Circles.** Every compass circle or arc counts as one circle. This includes the starting circle, and a circle drawn with a carried radius (a compass transfer).
3. **Lines.** Every straightedge line, segment or ray counts as one line. GeoGebra's compound tools also count as one line each:
   - perpendicular line
   - perpendicular bisector
   - parallel line
   - angle bisector

   On paper each of these takes extra compass circles. Those circles are not counted, so methods drawn with the same tools stay comparable.
4. **Free steps.** Intersections are free. Macro scale midpoints, ones easy to reproduce on paper, are free.
5. **The result itself does not count.** The sides of the final square, the final constructed segment, or the final dividing rays are the answer, not steps towards it.
6. **The given figure does not count**, apart from the starting circle, which is drawn with the compass. That means the given angle's arms, or the given cube's edge.

Counts are checked automatically: `tools/verify.py` traces each result back through the construction and counts what it depends on.

## Micro scale

A construction is marked `µ` when any step that leads to the result is smaller than **5% of the given figure's size**. The given size is the radius of the given circle, or the given cube's edge, or for angle methods the radius of the largest circle drawn.

A step's size is the length of a segment or line drawn between two points, the distance between two points bisected or joined, or the radius of a circle.

The test is applied by `tools/verify.py`. A construction can also be marked `µ` by hand when it relies on a small adjustment the test cannot see, with a note saying what it is.

For information, the checker also reports each entry's **shallowest crossing**: the smallest angle at which two curves the result depends on cross. Below about 15° a crossing is hard to place accurately on paper, so the entry's notes say so. A crossing at 0°, where curves only touch, cannot be drawn at all, and such constructions are not accepted.

## Submitting

- The simplest way is the browser extension, which sends a construction from GeoGebra as a pull request: see [extension/README.md](extension/README.md) and the [submission page](https://thor110.github.io/ClassicalGeometryProblems/pages/submit.html#extension).
- Each submission needs the submitter's real name, and the name, method, description and notes must pass the archive's word check (offensive wording, or a joke in place of a name, closes the pull request with a kind note). One copy of each construction is accepted at a time, and up to five submissions per person can wait for review at once.
- Every submission pull request is evaluated by `tools/evaluate_submission.py`. It confirms the construction fits the problem chosen; one that fits a different problem, or none, is set aside for the maintainer rather than rejected. It reports the accuracy (the worst third, for trisection, and a sweep of angles for angle methods), the circles and lines counted, hand-placed points, micro scale, shallow crossings, and any match with an entry already charted. See [Submissions/README.md](Submissions/README.md).

## Verification

Each entry is **verified**, **self-verified**, **unverified** or **disputed**. People and AI verifiers are recorded separately. See [VERIFICATION.md](VERIFICATION.md).

## Changes

- **1.4 (November 2026)**: points placed freely that only set the size are not counted against a construction; angle sweeps find the angle's corner from the file.
- **1.3 (November 2026)**: submissions through the browser extension, evaluated automatically; new submissions below 95% are no longer accepted.
- **1.2 (November 2026)**: chart figures for general angle methods, and the shallow crossing report.
- **1.1 (November 2026)**: precise readouts are recorded to 32 significant digits, worked out in 50-digit arithmetic.
- **1.0 (November 2026)**: the counting rules and the micro scale test were written down. Entries were recounted under them, and the accuracy rules for trisection (the worst third) and angle sweeps were added.
