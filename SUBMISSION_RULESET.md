# Submission Ruleset

These are the rules behind the keys and figures in the approximation charts.

**Rules are subject to change.** Each change is listed under [Changes](#changes) with its date, and
entries are re-checked against the current rules by `tools/verify.py`.

Current version: **1.0 (November 2026)**

## Rulesets

**Base ruleset**

- 25 circles maximum
- 40 lines maximum

**Extended ruleset**, for constructions that begin to approach perfect (99.91% and above)

- 49 circles maximum
- 80 lines maximum

## Accuracy

- 95% minimum, 100% maximum. An entry that falls below 95% is kept on record, listed under its chart as below the minimum, but not ranked.
- Accuracy is `100 − |constructed − true| ÷ true × 100`, worked out from full-precision values and truncated (never rounded) to three decimal places, or more where two entries would otherwise tie.
- **Squaring the circle** compares the square's area with the circle's area.
- **Doubling the cube** compares the constructed cube's volume with twice the given cube's volume.
- **Rectifying the circle** compares the constructed length with the circumference.
- **Arc rectification** compares the constructed length with the arc's length.
- **Trisecting an angle**: every one of the three parts must be a third of the angle, so the worst of the three sets the accuracy.
- **Angle methods** (trisection, arc rectification) must work for any angle. Their accuracy is also measured across a sweep of angles, and the chart notes the range over which the method holds.

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

## Verification

Each entry is **verified**, **self-verified**, **unverified** or **disputed**. People and AI verifiers are recorded separately. See [VERIFICATION.md](VERIFICATION.md).

## Changes

- **1.0 (November 2026)**: the counting rules and the micro scale test were written down. Entries were recounted under them, and the accuracy rules for trisection (the worst third) and angle sweeps were added.
