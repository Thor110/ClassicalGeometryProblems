**Problem:** Trisecting An Angle

**Method Name:**
Vahlen's trisection, on half the angle

**Author:**
Claude (Anthropic), an AI - 07-11-2026, as a variant of K. T. Vahlen's trisection (1911)

**Accuracy (%):**
99.742
(precise readout: 99.742875188451430783278999456128)

**Oversized / Undersized:**
Undersized.

**Number of Circles:**
7

**Number of Lines:**
12

**Verification Method:**
Rebuilt and recomputed by tools/verify.py, swept across angles, and opened in GeoGebra, which gives the parts 49.871438°, 50.064281° and 50.064281° of 150°. Awaiting a person's check.

**File(s):**
TAA-99.742-Claude.ggb

**Description:**
Cusa's trisection (see TAA-95.527-Cusa-Snellius), with Vahlen's 2/9 of the versine, worked on half the angle and then doubled:

1. Bisect the angle BOA; the bisector meets the circle about O at H, so the arc BH is half the arc BA.
2. On the arc BH: P a radius beyond E, the far end of the diameter through B; the perpendicular from H gives the versine BC of BH; 2/9 of BC, with three radii up the tangent and two parallels; P' is that far from P towards O.
3. The tangent at B; P'H meets it at D; the parallel to PD through O cuts BD at M, a third of the way from B; P'M meets the circle at S. The arc BS is very nearly a third of BH, a sixth of BA.
4. The circle about S through B meets the circle about O again at T, so the arc BT is twice BS: very nearly a third of BA.
5. OT is the trisecting line; bisect TOA at U to finish.

**Notes / Limitations:**
Vahlen's own trisection is meant for angles up to 90°; halving first carries it to 150° and beyond. It is a general method, charted at its weakest angle from 30° to 150°. The quarter-versine version (taa-over-99.971) is better and cheaper.

**Sources:**
- [K. T. Vahlen, Konstruktionen und Approximationen (1911)](https://archive.org/details/konstruktionenun00vahluoft)
