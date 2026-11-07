**Problem:** Trisecting An Angle

**Method Name:**
Karajordanoff's trisection, on the angle halved three times

**Author:**
Claude (Anthropic), an AI - 07-11-2026, as a variant of Karajordanoff's trisection (taa-under-99.838), by Karajordanoff

**Accuracy (%):**
99.976
(precise readout: 99.976048632523529419602494256588; the worst case from 30° to 150°, at 150°)

**Oversized / Undersized:**
Undersized.

**Number of Circles:**
6

**Number of Lines:**
10

**Verification Method:**
Found by testing the historical methods on the angle halved again and again. Rebuilt and recomputed by tools/verify.py in 50-digit arithmetic, swept across angles, and opened in GeoGebra, which gives the same three angles. Awaiting a person's check.

**File(s):**
TAA-99.976-Claude.ggb

**Description:**
Karajordanoff's trisection (see the entry taa-under-99.838), worked on the angle halved three times and then multiplied back:

1. Bisect the angle three times from B: H₁ to H_3, so the arc BH is 1/8 of the arc BA.
2. On the arc BH: the circle of radius 2 about O (through G, a radius beyond B); C the middle of the arc BH; the tangent at H meets BC in D; the parallel to OB through D meets the larger circle at T₂; OT₂ meets the circle at S. The arc BS is very nearly a third of BH.
3. Double it back three times: the circle about S through B meets the circle about O again, so the new arc from B is twice as long; repeat from that point.
4. The last point T gives OT, the trisecting line; bisect the angle TOA at U to finish.

**Notes / Limitations:**
A general method, charted, like Dürer's and the search finds, at its weakest angle from 30° to 150°. Its smallest step is 5.5% of the radius, above the 5% of the micro scale rule. Credit for the construction is Karajordanoff's; only the halving is new.
