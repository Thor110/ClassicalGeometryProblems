**Problem:** Trisecting An Angle

**Method Name:**
Stoyanoff's trisection

**Author:**
A. Stoyanoff - 1935 ("Sur la trisection de l'angle", Annuaire de l'Université de Sofia 31, pp. 171-176), as described in the Jahrbuch über die Fortschritte der Mathematik 62 (JFM 62.1417.04)

**Accuracy (%):**
99.9991
(precise readout: 99.999172631613137856008523657779)

**Oversized / Undersized:**
Undersized.

**Number of Circles:**
7

**Number of Lines:**
5

**Verification Method:**
Rebuilt and recomputed by tools/verify.py, swept across angles, and opened in GeoGebra, which gives the parts 29.999752°, 30.000124° and 30.000124° of 90°.

**File(s):**
TAA-99.9991-Stoyanoff.ggb

**Description:**
The Jahrbuch: "Um einen gegebenen Winkel mit Zirkel und Lineal annähernd in drei gleiche Teile zu teilen, wird die Winkelhalbierende über den Scheitel O hinaus um eine Strecke OA = 4k verlängert, wo k eine willkürliche Länge bedeutet. Um den Scheitel beschreibe man zwei Kreise mit den Halbmessern 5k und 20k. Die Halbierungslinie der einen Hälfte des gegebenen Winkels schneide den kleineren Kreis in B. Die Gerade AB schneide den größeren Kreis in C. Dann wird der kleinere der beiden Winkel, in die der gegebene Winkel α durch OC geteilt wird, gleich α/3 − ε, wo ε ein positiver Winkel ist, der für α ≤ π/2 kleiner als 1″ ist."

In the file k is a quarter of the radius OB, so OA′ = 4k is the radius (A′ on the bisector beyond O), 20k = 5 radii (stepped along OB) and 5k = 1¼ radii. The quarter-angle bisector meets the 5k circle at E; A′E meets the 20k circle at C; OC meets the circle at S, and the rest, SOA, is bisected.

**Notes / Limitations:**
Charted at 90°, the end of the range the review states; at 150° it is still 99.993%. The choice k = r/4 is the file's; k is arbitrary.
