**Problem:** Trisecting An Angle

**Method Name:**
Schoeler's trisection, on the angle halved four times

**Author:**
Claude (Anthropic), an AI - 07-11-2026, as a variant of H. Schoeler's trisection (taa-over-98.796; 1902, also given by Maurice d'Ocagne in 1934)

**Accuracy (%):**
99.987
(precise readout: 99.987598168331336117327650941445; the worst case from 30° to 150°, at 150°)

**Oversized / Undersized:**
Oversized.

**Number of Circles:**
5

**Number of Lines:**
8

**Verification Method:**
Found by testing the historical methods on the angle halved again and again. Rebuilt and recomputed by tools/verify.py in 50-digit arithmetic, swept across angles, and opened in GeoGebra, which gives the same three angles. Awaiting a person's check.

**File(s):**
TAA-99.987-Claude.ggb

**Description:**
Schoeler's trisection (see the entry taa-over-98.796, long credited to d'Ocagne), worked on the angle halved four times and then multiplied back:

1. Bisect the angle four times from B: H₁ to H_4, so the arc BH is 1/16 of the arc BA.
2. On the arc BH: C the middle of OE, the radius opposite B; M the middle of the arc BH; the parallel to CM through O meets the circle at S. The arc BS is very nearly a third of BH.
3. Double it back four times: the circle about S through B meets the circle about O again, so the new arc from B is twice as long; repeat from that point.
4. The last point T gives OT, the trisecting line; bisect the angle TOA at U to finish.

**Notes / Limitations:**
A general method, charted, like Dürer's and the search finds, at its weakest angle from 30° to 150°. Its smallest step is 5.5% of the radius, above the 5% of the micro scale rule. Credit for the construction is Maurice d'Ocagne's; only the halving is new.
