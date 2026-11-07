**Problem:** Trisecting An Angle

**Method Name:**
Monti's trisection, on the angle halved three times

**Author:**
Claude (Anthropic), an AI - 07-11-2026, as a variant of P. Monti's trisection (1895)

**Accuracy (%):**
99.990
(precise readout: 99.990168391355510168329012859325)

**Oversized / Undersized:**
Undersized.

**Number of Circles:**
8

**Number of Lines:**
14

**Verification Method:**
Rebuilt and recomputed by tools/verify.py, swept across angles, and opened in GeoGebra, which gives the parts 49.995084°, 50.002458° and 50.002458° of 150°. Awaiting a person's check.

**File(s):**
TAA-99.990-Claude.ggb

**Description:**
Monti's trisection (see the historical entry), worked on the angle halved three times:

1. Bisect the angle three times from B: H₁ to H₃, so the arc BH₃ is an eighth of BA.
2. On the arc BH₃, Monti's steps: D the middle of the arc; G half a radius from D along the parallel to OB; H' where BD meets OG; OG reflected in OD; the perpendicular to OD at its sixth point M meets the reflection at N; NH' meets the arc at S.
3. Double back three times: the circle about S through B meets the circle about O again; repeat from that point.
4. The last point gives the trisecting line; bisect the rest of the angle to finish.

**Notes / Limitations:**
A general method, charted at its weakest angle from 30° to 150°. Its smallest step is 8.1% of the radius, above the 5% of the micro scale rule; halved once more it would fall to 4.1%. Credit for the construction is Monti's; only the halving is new.
