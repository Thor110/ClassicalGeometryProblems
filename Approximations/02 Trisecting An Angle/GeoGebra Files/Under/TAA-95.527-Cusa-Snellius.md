**Problem:** Trisecting An Angle

**Method Name:**
Cusa's trisection

**Author:**
Nicholas of Cusa (15th century) and Willebrord Snellius (1621), as given by R. C. Yates, "The Trisection Problem" (1942), chapter 4, section 2, and K. T. Vahlen, "Konstruktionen und Approximationen" (1911), p. 189

**Accuracy (%):**
95.527
(precise readout: 95.527186296506171817958010663952)

**Oversized / Undersized:**
Undersized.

**Number of Circles:**
2

**Number of Lines:**
6

**Verification Method:**
Rebuilt and recomputed by tools/verify.py, and opened in GeoGebra, which gives BOT = 28.658156° at 90°, with the two halves of the rest 30.670922°.

**File(s):**
TAA-95.527-Cusa-Snellius.ggb

**Description:**
Yates: "extend the diameter BE of the unit circle to P so that EP = 1. The line PA strikes the tangent at D ... For the approximate trisection of angle AOB we need only locate the point M so that BM = BD/3 and join it to P. The line PM will cut the unit circle in T. The line joining T to O thus approximately trisects angle AOB."

In the file: the circle about E through O gives P; the tangent at B; PA meets it at D. B, O, E and P are a radius apart along the diameter, so the parallel to PD through O cuts BD at M with BM = BD/3. PM meets the circle at T; OT is the trisecting line, and the angle TOA is bisected at U to finish.

**Notes / Limitations:**
Very good for small angles (0.1" at 10°) and falling off with size: charted at 90°, its weakest angle up to 90°, the range Yates tabulates. Past 90° it drops fast (82% at 120°). Yates' printed error table does not match his own construction (his 30° entry is 6'20"; the construction gives 15"); the figures here are computed from the construction.
