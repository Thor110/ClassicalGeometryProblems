**Problem:** Trisecting An Angle

**Method Name:**
Cusa's trisection, a quarter versine, on half the angle

**Author:**
Claude (Anthropic), an AI - 07-11-2026, as a variant of Cusa's and Snellius' trisection and Vahlen's (1911)

**Accuracy (%):**
99.971
(precise readout: 99.971180001497493623918615186807)

**Oversized / Undersized:**
Oversized.

**Number of Circles:**
4

**Number of Lines:**
8

**Verification Method:**
Found by testing the Cusa family of trisections on half the angle. Rebuilt and recomputed by tools/verify.py, swept across angles, and opened in GeoGebra, which gives the parts 39.509717°, 39.492642° and 39.492642° of 118.495°. Awaiting a person's check.

**File(s):**
TAA-99.971-Claude.ggb

**Description:**
Cusa's trisection (see TAA-95.527-Cusa-Snellius), with Snellius' point moved a quarter of the versine towards O, worked on half the angle and then doubled:

1. Bisect the angle BOA; the bisector meets the circle about O at H, so the arc BH is half the arc BA.
2. On the arc BH: P a radius beyond E, the far end of the diameter through B; the perpendicular from H gives the versine BC of BH; a quarter of BC by two midpoints; P' is that far from P towards O.
3. The tangent at B; P'H meets it at D; the parallel to PD through O cuts BD at M, a third of the way from B; P'M meets the circle at S. The arc BS is very nearly a third of BH, a sixth of BA.
4. The circle about S through B meets the circle about O again at T, so the arc BT is twice BS: very nearly a third of BA.
5. OT is the trisecting line; bisect TOA at U to finish.

**Notes / Limitations:**
These trisections are best on small angles, so halving first keeps them there: at 118.5°, its weakest angle from 30° to 150°, it works on 59.2°. It is a general method, charted, like Dürer's and the search finds, at its weakest angle from 30° to 150°. Up to 180° it holds 99.66%.
