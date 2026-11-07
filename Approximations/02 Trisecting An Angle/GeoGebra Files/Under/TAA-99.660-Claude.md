**Problem:** Trisecting An Angle

**Method Name:**
Cusa's trisection, a quarter versine

**Author:**
Claude (Anthropic), an AI - 07-11-2026, as a variant of Cusa's and Snellius' trisection and Vahlen's (1911)

**Accuracy (%):**
99.660
(precise readout: 99.660468370396310721960919001643)

**Oversized / Undersized:**
Undersized.

**Number of Circles:**
3

**Number of Lines:**
7

**Verification Method:**
Found by testing other fractions of the versine in Cusa's trisection. Rebuilt and recomputed by tools/verify.py, swept across angles, and opened in GeoGebra, which gives BOT = 29.898141° at 90°. Awaiting a person's check.

**File(s):**
TAA-99.660-Claude.ggb

**Description:**
Starting from the angle AOB:

1. Draw the circle about O through B; the line OB meets it again at E, and the circle about E through O gives P, a radius beyond E.
2. Drop the perpendicular from A to OB, meeting it at C, and take a quarter of BC by two midpoints: M₁ of BC, M₂ of BM₁.
3. Move P towards O by BM₂, to P'.
4. Draw the tangent at B; P'A meets it at D. The parallel to PD through O cuts BD at M, a third of the way from B.
5. P'M meets the circle at T. OT is the trisecting line; bisect TOA at U to finish.

**Notes / Limitations:**
Credit for the construction is Cusa's, Snellius' and Vahlen's; only the fraction is new. The exact point is 2 cos(x/3) radii from O; Vahlen moves it by 2/9 of the versine, which is right for small angles; a quarter overshoots there slightly and gains at larger ones (99.66% at 90°, against Vahlen's 99.15%; 95.5% at 120°, against 93.7%).

**Sources:**
- [K. T. Vahlen, Konstruktionen und Approximationen (1911)](https://archive.org/details/konstruktionenun00vahluoft)
