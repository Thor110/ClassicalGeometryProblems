**Problem:** Trisecting An Angle

**Method Name:**
Monti's trisection

**Author:**
Pompeo Monti, a draughtsman at the Technical Office in Milan - 1895 ("Regola generale per la soluzione grafica della trisezione dell'angolo", Il Politecnico, with the proof by G. Schiaparelli), as given by U. Amaldi in F. Enriques, "Fragen der Elementargeometrie" II (1907), § 17

**Accuracy (%):**
99.748
(precise readout: 99.748542671518520132616598217433)

**Oversized / Undersized:**
Undersized.

**Number of Circles:**
5

**Number of Lines:**
11

**Verification Method:**
Rebuilt and recomputed by tools/verify.py, swept across angles, and opened in GeoGebra, which gives the parts 42.935098°, 43.097451° and 43.097451° of 129.13°. The largest error of the third up to 180° is 6'47", under the 7 minutes Amaldi gives.

**File(s):**
TAA-99.748-Monti.ggb

**Description:**
Amaldi: "Ist ABC der in drei gleiche Teile zu teilende Winkel und AC der dazu gehörige Bogen, so ziehen wir die Halbierungslinie BD des gegebenen Winkels und durch den Punkt D die Parallele DE zu BC und tragen auf dieser den halben Radius bis G ab. Der Schnittpunkt der Geraden CD und BG möge mit H bezeichnet sein. Nun tragen wir den Winkel LBD = DBG auf der anderen Seite von BD ab und errichten im inneren Punkte M, der die Strecke BD im Verhältnis 1:5 teilt, die Normale, die BL in N treffen mag. Die Gerade NH trifft den Bogen AC in einem Punkte T, der näherungsweise den dritten Teil des Bogens AC ... bestimmt."

In the file the corner is O, Monti's arm BC is OB, and his A is A: D is the middle of the arc; G half a radius from D along the parallel to OB; H' where BD meets OG; OG reflected in OD (the perpendicular from G, and the circle about its foot) gives OG'; M is a sixth of OD (three radii along the diameter beyond O, a parallel, and a midpoint); the perpendicular to OD at M meets OG' at N; NH' meets the arc at S. OS is the trisecting line next to OB; the rest, SOA, is bisected.

**Notes / Limitations:**
A general method for any angle up to 180°. The scanned error table is garbled, but its stated bound (under 7 minutes) holds. Monti's fractions (a half and a sixth) are the best of all small fractions (tools/variants.py). Halved three times it holds 99.990% (taa-under-99.990).
