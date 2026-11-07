**Problem:** Trisecting An Angle

**Method Name:**
Cusa's trisection, on the angle halved four times

**Author:**
Claude (Anthropic), an AI - 07-11-2026, as a variant of Cusa's trisection (taa-under-95.527), by Nicholas of Cusa and Snellius

**Accuracy (%):**
99.9996
(precise readout: 99.999605427632536815092150558559; the worst case from 30° to 150°, at 150°)

**Oversized / Undersized:**
Undersized.

**Number of Circles:**
6

**Number of Lines:**
10

**Verification Method:**
Found by testing the historical methods on the angle halved again and again. Rebuilt and recomputed by tools/verify.py in 50-digit arithmetic, swept across angles, and opened in GeoGebra, which gives the same three angles. Awaiting a person's check.

**File(s):**
TAA-99.999-Claude.ggb

**Description:**
Cusa's trisection (see the entry taa-under-95.527), worked on the angle halved four times and then multiplied back:

1. Bisect the angle four times from B: H₁ to H_4, so the arc BH is 1/16 of the arc BA.
2. On the arc BH: P a radius beyond E, the far end of the diameter through B; PH meets the tangent at B in D; the parallel to PD through O cuts BD at M, a third of the way from B; PM meets the circle at S. The arc BS is very nearly a third of BH.
3. Double it back four times: the circle about S through B meets the circle about O again, so the new arc from B is twice as long; repeat from that point.
4. The last point T gives OT, the trisecting line; bisect the angle TOA at U to finish.

**Notes / Limitations:**
A general method, charted, like Dürer's and the search finds, at its weakest angle from 30° to 150°. Its smallest step is 5.5% of the radius, above the 5% of the micro scale rule. Credit for the construction is Nicholas of Cusa and Snellius's; only the halving is new.
