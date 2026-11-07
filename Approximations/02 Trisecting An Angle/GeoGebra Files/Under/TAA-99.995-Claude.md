**Problem:** Trisecting An Angle

**Method Name:**
Dürer's trisection, on half the angle

**Author:**
Claude (Anthropic), an AI - 07-11-2026, as a variant of Albrecht Dürer's trisection (1525)

**Accuracy (%):**
99.995
(precise readout: 99.995193858045165405865040800401)

**Oversized / Undersized:**
Undersized.

**Number of Circles:**
8

**Number of Lines:**
8

**Verification Method:**
Found by testing the historical trisections on half the angle. Rebuilt and recomputed by tools/verify.py, swept across angles, and opened in GeoGebra, which gives the parts 49.997597°, 50.001202° and 50.001202° of 150°. Awaiting a person's check.

**File(s):**
TAA-99.995-Claude.ggb

**Description:**
Dürer's trisection (see TAA-99.395-Durer), from one side, on half the angle, and then doubled:

1. Bisect the angle BOA; the bisector meets the circle about O at H, so the arc BH is half the arc BA. Draw the chord BH.
2. A third of the chord: P is three radii from B along the diameter through B (O, E and P a radius apart, E the far end and P a radius beyond it, by the circle about E through O); the line PH and the parallel through O cut BH at D, with BD = BH/3.
3. Dürer's steps from B: the perpendicular to the chord at D meets the arc at G; the circle about B through G carries BG down to the chord at K; X is a third of the way from K back to D (three steps of DK up the perpendicular at D, and a parallel); the circle about B through X meets the arc at S. The arc BS is very nearly a third of BH.
4. The circle about S through B meets the circle about O again at T, so the arc BT is twice BS: very nearly a third of BA.
5. OT is the trisecting line; bisect TOA at U to finish.

**Notes / Limitations:**
Dürer's construction is best between about 30° and 90°; halving first keeps it there for any angle up to 180°, where it still holds 99.986%. One side is enough: the other two thirds come from a single bisection, which also does better than Dürer's own symmetric finish (99.70% against 99.40% at 150° without halving). 8 circles and 8 lines, against Dürer's 12 and 9.

Micro scale: on half the angle Dürer's gap from D to K is small; the smallest step the result depends on is 4.05% of the radius at 150°, under the 5% of the micro scale rule, so the chart marks it µ.
