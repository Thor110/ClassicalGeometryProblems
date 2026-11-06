**Problem:** Trisecting An Angle

**Method Name:**
Complicated Attempt

**Author:**
Edward James Gordon - date not recorded (recovered from his GeoGebra account in November 2026)

**Accuracy (%):**
99.726
(precise readout: worked out by tools/verify.py; see the chart)

**Oversized / Undersized:**
Oversized.

**Number of Circles:**
5

**Number of Lines:**
5

**Verification Method:**
Rebuilt and recomputed by tools/verify.py, and swept across angles with the angle's corner at A.

**File(s):**
TAA-99.726.ggb, https://www.geogebra.org/m/fhbn5sry

**Description:**
Starting from the given angle CAB (corner A):

1. Bisect the angle (line h), and take any point D on the bisector.
2. Draw the circle about A through D. It crosses AB at E and AC at F.
3. The chord FE crosses the bisector at G. Draw the circle about G through E.
4. Draw circles of the same radius about E and about F. They cross the circle about G at I and H.
5. The chord HI crosses the bisector at J. Draw the circle about J through I.
6. Find the point S three eighths of the way from J to H, and K three eighths of the way from J to I, by halving three times (macro scale midpoints, not counted).
7. The segment SF crosses the circle about J at T, and the segment KE crosses it at L.

The rays AT and AL are the trisectors.

**Notes / Limitations:**
Drawn at 81.6°, where it gives 99.726%. Point D can be anywhere on the bisector: it only sets the size, and the accuracy does not change when it moves. 95% or better for angles from 56° to 153°: 96.201% at 60°, 99.490% at 90°, 99.370% at 120°, 95.758% at 150°, best about 99.957% near 85°. Below that range it falls away (87.174% at 30°), so it is a method for a range of angles, charted at the angle it is drawn at.
