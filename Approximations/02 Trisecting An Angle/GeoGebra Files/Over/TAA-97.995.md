**Problem:** Trisecting An Angle

**Method Name:**
Incorrect Proof

**Author:**
Edward James Gordon - date not recorded (recovered from his GeoGebra account in November 2026)

**Accuracy (%):**
97.995
(precise readout: worked out by tools/verify.py; see the chart)

**Oversized / Undersized:**
Oversized.

**Number of Circles:**
4

**Number of Lines:**
2

**Verification Method:**
Rebuilt and recomputed by tools/verify.py, and swept across angles with the angle's corner at A.

**File(s):**
TAA-97.995.ggb, https://www.geogebra.org/m/mknfrgkm

**Description:**
Starting from the given angle CAB (corner A):

1. Bisect the angle (line h), and take any point D on the bisector.
2. Draw the circle about A through D. It crosses AB at E and AC at F.
3. The chord FE crosses the bisector at G. Draw the circle about G through E.
4. Draw circles of the same radius about E and about F. They cross the circle about G at I and H.

The rays AH and AI are the trisectors.

**Notes / Limitations:**
Exact for a right angle: at 90° the three parts are equal. A right angle is one of the angles that can be trisected exactly, and the method was set up at 90° and made so it could be dragged in GeoGebra, which is how its other angles show it is not a general trisection, hence its name. Drawn at 81.6°, where it gives 97.995%. 95% or better from 72° to 128°: 91.066% at 60°, 100% at 90°, 95.533% at 120°, 95.176% at 150°; 75.880% at 30°. Point D only sets the size.
