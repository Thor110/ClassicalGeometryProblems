**Problem:** Trisecting An Angle

**Method Name:**
Dürer's trisection

**Author:**
Albrecht Dürer - 1525, "Underweysung der Messung mit dem Zirckel und Richtscheyt"

**Accuracy (%):**
99.395
(precise readout: 99.395788009623285706993866023995; at 150°, its weakest angle between 30° and 150°)

**Oversized / Undersized:**
Oversized.

**Number of Circles:**
12

**Number of Lines:**
9

**Verification Method:**
Rebuilt and recomputed by tools/verify.py, swept across angles, and opened in GeoGebra, which gives the three parts at 150° as 49.848947°, 50.302106° and 49.848947°.

**File(s):**
TAA-99.395-Durer.ggb

**Description:**
With Dürer's own letters, as G. H. Hughes gives them ("The Polygons of Albrecht Dürer", 2012, Appendix A, from Strauss's translation): the angle AOB, its arc about O and the chord AB.

1. Trisect the chord AB, at D (nearer A) and D'.
2. The perpendicular to the chord at D meets the arc at H.
3. With the compass at A, carry AH down to the chord, at K.
4. Trisect KD: X is a third of the way from K back to D.
5. With the compass at A, carry AX back up to the arc, at m.

The same from B gives D', H', K', X' and m'. The rays Om and Om' trisect the angle, very nearly. The chord and the gap KD are trisected here by laying equal steps along a line and drawing parallels (Dürer does not say how; the Greeks' way, as here, takes a few circles and lines).

**Notes / Limitations:**
A general method, with no point placed by eye, so it is charted at its weakest angle between 30° and 150°, which is 150°. It is far closer at smaller angles: 99.99996% at 30°, 99.997% at 60° (as Hughes notes, 19°59′59″, too close for Dürer to have seen any error), 99.97% at 90°, 99.84% at 120°. The second trisection (step 4) is Dürer's correction to the first, and is what makes the method so close; for small angles K alone is already very near.
