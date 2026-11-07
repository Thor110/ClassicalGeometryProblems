**Problem:** Trisecting An Angle

**Method Name:**
Cusa's trisection, a quarter versine, on the angle halved twice

**Author:**
Claude (Anthropic), an AI - 07-11-2026, as a variant of Cusa's trisection, a quarter versine (taa-under-99.660), by Cusa, Snellius and Vahlen

**Accuracy (%):**
99.990
(precise readout: 99.990311452044343569799788499864; the worst case from 30° to 150°, at 150°)

**Oversized / Undersized:**
Oversized.

**Number of Circles:**
5

**Number of Lines:**
9

**Verification Method:**
Found by testing the historical methods on the angle halved again and again. Rebuilt and recomputed by tools/verify.py in 50-digit arithmetic, swept across angles, and opened in GeoGebra, which gives the same three angles. Awaiting a person's check.

**File(s):**
TAA-99.990-Claude.ggb

**Description:**
Cusa's trisection, a quarter versine (see the entry taa-under-99.660), worked on the angle halved twice and then multiplied back:

1. Bisect the angle twice from B: H₁ to H_2, so the arc BH is 1/4 of the arc BA.
2. On the arc BH: P a radius beyond E, moved towards O by a quarter of the versine of BH (the foot C of the perpendicular from H, and two midpoints) to P'; P'H meets the tangent at B in D; the parallel to PD through O cuts BD at M, a third of the way from B; P'M meets the circle at S. The arc BS is very nearly a third of BH.
3. Double it back twice: the circle about S through B meets the circle about O again, so the new arc from B is twice as long; repeat from that point.
4. The last point T gives OT, the trisecting line; bisect the angle TOA at U to finish.

**Notes / Limitations:**
A general method, charted, like Dürer's and the search finds, at its weakest angle from 30° to 150°. Its smallest step is 5.2% of the radius, above the 5% of the micro scale rule. Credit for the construction is Cusa, Snellius and Vahlen's; only the halving is new.
