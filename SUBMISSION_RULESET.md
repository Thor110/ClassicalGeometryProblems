# Submission Ruleset

These are the rules behind the keys and figures in the approximation charts.

**Rules are subject to change.** Each change is listed under [Changes](#changes) with its date, and
entries are re-checked against the current rules by `tools/verify.py`.

Current version: **1.6 (November 2026)**

## Rulesets

**Base ruleset**

- 25 circles maximum
- 40 lines maximum

**Extended ruleset**, for constructions that begin to approach perfect (99.91% and above)

- 49 circles maximum
- 80 lines maximum

**Slots.** Every budget of c circles and l lines is a slot, on each side of a chart (oversized and undersized), and each slot
has one best construction to find: the most accurate that uses exactly that budget. With at most C circles and L lines there
are (C + 1)(L + 1) slots per side: 26 × 41 = 1,066 under the base ruleset and 50 × 81 = 4,050 under the extended one. Some can
never be filled and are not counted as open: those with no circles (a straightedge alone, from the given points, draws no new
point), and, for squaring and rectifying the circle, those with one circle (the given circle itself; lines then only join the
centre and points on one diameter, so the only lengths are the radius and the diameter). The
[Open Slots page](https://thor110.github.io/ClassicalGeometryProblems/pages/slots.html) shows them as a grid for each chart.

**Ways to draw.** The slots are few; the constructions competing for them are not. With n = c + l steps, P₀ given points
(2, or 3 for an angle) and Pₖ the points drawn before step k, the number of different constructions is at most

    ways(c, l) ≤ C(n, c) × ∏ₖ [ Pₖ(Pₖ − 1) + Pₖ · C(Pₖ, 2) ],   Pₖ₊₁ = Pₖ + 2k

since C(n, c) chooses which steps are circles, each new circle is drawn about one point through another or with a radius
carried from two others (which outnumbers the choices for a line), and each new circle or line meets each earlier one in at
most two new points. Summed over every budget, that is fewer than 10⁵³² ways per chart under the base ruleset (10⁵³⁴ for an
angle) and 10¹²⁸⁹ under the extended one (10¹²⁹¹). It is an upper bound: the same drawing made in another order is counted
again, so the true number is smaller, but still far beyond listing.

## Accuracy

- 95% minimum, 100% maximum. New submissions below 95% are not accepted: the extension will not send them, and a pull request below 95% is closed automatically with its figures and some encouragement. Older entries below 95% stay on record, listed under their chart as below the minimum, but not ranked.
- Accuracy is `100 − |constructed − true| ÷ true × 100`, worked out from full-precision values and truncated (never rounded) to three decimal places, or more where two entries would otherwise tie. Two different constructions that give exactly the same value (for example two ways of drawing √2 + √3) share the chart figure, since no number of places would tell them apart; the id of the one charted second carries its holder's name. Exactly the same result at every angle counts as the same value for an angle method.
- **The chart figure has at most ten decimal places.** It is lengthened from three only as far as needed to keep each side of the chart in order. Entries still alike at ten places share the figure, marked `≈` on the charts, and are ordered by their precise readouts; the full readout is shown beside the figure and on hover. Next to it, the **error** column gives the gap from perfection, 1 − accuracy/100, to two significant figures (for example 1.1 × 10⁻¹⁰), which stays short however close an entry comes.
- Every entry also records a **precise readout**, as many digits as can be trusted. `tools/verify.py` rebuilds the construction from its GeoGebra file in 50-digit arithmetic and records 32 significant digits. Where a starting point was placed on the given figure by hand (for example "a point on the circle"), GeoGebra stores it to about 16 digits, so for those entries the digits after about the fifteenth reflect where that point was stored rather than the construction itself.
- **Squaring the circle** compares the square's area with the circle's area.
- **Doubling the cube** compares the constructed cube's volume with twice the given cube's volume.
- **Rectifying the circle** compares the constructed length with the circumference.
- **Arc rectification** compares the constructed length with the arc's length.
- **Trisecting an angle**: every one of the three parts must be a third of the angle, so the worst of the three sets the accuracy.
- **Angle methods** (trisection, arc rectification) must work for any angle. Their accuracy is also measured across a sweep of angles, and the chart notes the range over which the method holds. The chart figure is the accuracy at the angle the file is drawn at. A general method, one with no point placed by eye, can be drawn at its worst angle between 30° and 150°, so that its figure holds for the whole of that range. The angle's corner and arms are read from the file's measurement of the whole angle, whatever they are labelled.
- **Points placed freely to set the size.** A point dropped anywhere on a line or circle (for example any point on the angle's bisector, used as the radius of the first circle) is not counted against a construction when it only sets the size: sliding it along its line or circle leaves the accuracy unchanged. `tools/verify.py` tests this for every such point.

## Precision and its limits

No accuracy is too high to accept. What keeps the charts finite is the effort a construction may take, not how close it comes:

- **The rulesets cap the steps** (25 circles and 40 lines, or 49 and 80 for the extended ruleset), and every halving or subdivision costs steps, so a construction cannot be refined without end.
- **Files are capped in size**: a submitted GeoGebra file at 5 MB (20 MB unpacked), its details at 256 KB. Anything larger is set aside for a person to look at, not processed.
- **The precise readout is 32 significant digits**, worked out in 50-digit arithmetic, whatever the construction. Two entries equal to 32 digits are an exact tie. Nothing stored for an entry can grow beyond that.
- **The display is capped** at ten decimal places for the chart figure (above), with the full readout beside it and the error in its own column.

## Key

Key marks are added to the left of the method holder's name.

- `~` **Contested**: proof of the original discoverer is being sought. Some constructions, such as very simple ones, may appear in ancient sources (for example the Śulba Sūtras of Vedic India, or in architecture), so their first discoverer may never be identified.
- `@` **Too simple**: the construction is simple enough that it has almost certainly been found many times before.
- `µ` **Micro scale edits**: the construction relies on steps too small to reproduce reliably on paper. See [Micro scale](#micro-scale) for the exact test.

## Earlier discoveries

Credit goes to the earliest known author of a construction, and nobody who found it is ever removed.

- **The same construction found earlier.** When a published source shows that a construction already on the charts was
  found before, the entry is credited to the earliest author the source supports. The person it was credited to stays
  on the entry, listed under **Also found by** with their own date, as a **possible independent rediscovery**. The entry
  keeps its id and its file, and the notes record the source and when the credit moved.
- **Found later.** A submission that turns out to be the same construction as one already charted is not charted again:
  its author is added to that entry's **Also found by** list in the same way.
- **Independence can never be proven.** The archive cannot tell whether a later find was made without knowledge of the
  earlier one, so it never says either way: every later finder is listed as *possibly* having rediscovered it
  independently, which keeps their name and makes no claim about them.
- **The same result is not the same construction.** Two constructions that land on the same value by different steps
  are separate methods and keep separate entries. Stifel's circle on Plato's figure (1544) and Gordon's Cube 2
  Tesseract v1.0 (2024) both give the edge 5/4 of the original, by unrelated constructions, so both are charted.
- **Variants are not rediscoveries.** A historical construction with its fractions changed, or worked on a halved angle,
  is a variant: it is charted as its own entry, credited to the original's author for the method and to its finder for
  the variant.
- **While a source is being sought**, the entry carries the `~` mark (above). Once the source is checked, the mark is
  removed and the credit settled as described here.

People who also found a method are shown in the entry's details on the charts and are found by the chart's search.
If they verify the entry, it counts as self-verification, as for a method holder.

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

- **1.6 (November 2026)**: chart figures capped at ten decimal places, with `≈` for entries alike at the cap; an error column; the limits on precision written down; exact ties ordered by fewer circles and lines.
- **1.5 (November 2026)**: earlier discoveries. Credit goes to the earliest known author; everyone who found a construction later is kept on its entry as a possible independent rediscovery.
- **1.4 (November 2026)**: points placed freely that only set the size are not counted against a construction; angle sweeps find the angle's corner from the file.
- **1.3 (November 2026)**: submissions through the browser extension, evaluated automatically; new submissions below 95% are no longer accepted.
- **1.2 (November 2026)**: chart figures for general angle methods, and the shallow crossing report.
- **1.1 (November 2026)**: precise readouts are recorded to 32 significant digits, worked out in 50-digit arithmetic.
- **1.0 (November 2026)**: the counting rules and the micro scale test were written down. Entries were recounted under them, and the accuracy rules for trisection (the worst third) and angle sweeps were added.
