**Problem:** Trisecting An Angle

**Method Name:**
Dürer's trisection from one side

**Author:**
Claude (Anthropic), an AI - 07-11-2026, as a variant of Dürer's trisection (taa-over-99.395), by Albrecht Dürer

**Accuracy (%):**
99.697
(precise readout: 99.697894004811645265610227911151; the worst case from 30° to 150°, at 150°)

**Oversized / Undersized:**
Undersized.

**Number of Circles:**
7

**Number of Lines:**
6

**Verification Method:**
Found by testing the historical methods on the angle halved again and again. Rebuilt and recomputed by tools/verify.py in 50-digit arithmetic, swept across angles, and opened in GeoGebra, which gives the same three angles. Awaiting a person's check.

**File(s):**
TAA-99.697-Claude.ggb

**Description:**
Dürer's trisection (see TAA-99.395-Durer), from one side only:

1. On the arc BA: a third of the chord BA (the line from P, three radii from B along the diameter, and the parallel through O cut it at D); the perpendicular to the chord at D meets the arc at G; the circle about B through G comes down to the chord at K; X is a third of the way from K back to D (three steps of DK up the perpendicular and a parallel); the circle about B through X meets the arc at S. The arc BS is very nearly a third of BA.
2. OS is the trisecting line; bisect the angle SOA at U to finish.

**Notes / Limitations:**
A general method, charted, like Dürer's and the search finds, at its weakest angle from 30° to 150°. Its smallest step is 29.8% of the radius, above the 5% of the micro scale rule. Credit for the construction is Albrecht Dürer's; only the halving is new.
