**Problem:** Trisecting An Angle

**Method Name:**
Karajordanoff's trisection

**Author:**
Karajordanoff - 1928, as given by R. C. Yates, "The Trisection Problem" (1942), chapter 4, section 4

**Accuracy (%):**
99.838
(precise readout: 99.838643849960773986145409607430)

**Oversized / Undersized:**
Undersized.

**Number of Circles:**
3

**Number of Lines:**
5

**Verification Method:**
Rebuilt and recomputed by tools/verify.py, and opened in GeoGebra. Its angle BOT reproduces Yates' error table: 21" at 30°, 1'53" at 60°, 2'12" at 70° and none at 90°.

**File(s):**
TAA-99.838-Karajordanoff.ggb

**Description:**
Yates: "The circles of radii 1 and 2 are drawn about the angle AOB. The tangent to the unit circle at A meets the chord BC in D, where C is the midpoint of AB [the arc]. The line through D parallel to OB intersects the larger circle in T and OT is the approximate trisecting line."

In the file the radius-2 circle goes through G, a radius beyond B; C is where the bisector of AOB meets the unit circle. The method gives one third, BOT; the rest, TOA, is bisected at U to finish the trisection.

**Notes / Limitations:**
Exact at 90°, with its largest error, 2'20", near 70° (Yates); with the bisected remainder the weakest angle up to 90° is 65.57°, where the file is drawn. It is meant for angles up to 90°: past that the error grows (98.7% at 120°, 93.5% at 150°); it holds 95% up to about 144°. Yates gives no first name.

**Sources:**
- [R. C. Yates, The Trisection Problem (1942; NCTM reprint 1971)](https://archive.org/details/ERIC_ED058058)
