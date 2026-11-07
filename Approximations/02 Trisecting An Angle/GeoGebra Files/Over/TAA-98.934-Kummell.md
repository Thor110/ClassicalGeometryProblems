**Problem:** Trisecting An Angle

**Method Name:**
Kummell's multisection, for thirds

**Author:**
C. H. Kummell - 1878 ("Approximate multisection of an angle", The Analyst 5, pp. 172-176), the case n = 3, as described in the Jahrbuch über die Fortschritte der Mathematik 10 (JFM 10.0363.04)

**Accuracy (%):**
98.934
(precise readout: 98.934697052405248983598145375485)

**Oversized / Undersized:**
Oversized.

**Number of Circles:**
4

**Number of Lines:**
6

**Verification Method:**
Rebuilt and recomputed by tools/verify.py, swept across angles, and opened in GeoGebra, which gives the parts 22.311156°, 21.958392° and 21.958392° of 66.22794°.

**File(s):**
TAA-98.934-Kummell.ggb

**Description:**
The Jahrbuch: "Um den Winkel BCD angenähert in n Theile zu theilen, ziehe man ACA' senkrecht zu BC und beschreibe mit einem beliebigen Radius CA den Halbkreis ADBA'. In der Verlängerung von BC nehme man Punkt E so an, dass AE = AA' = A'E, ziehe ED, das AA' in F schneidet, theile CF in n gleiche Theile, dann theilen die Verbindungslinien von E mit den Theilpunkten den Winkel BCD in n gleiche Theile."

In the file Kummell's C is O, his D is A, and his A and A' are A' and A₂. E is found with the circle about A' through A₂. CF is divided into three by stepping radii along OB and a parallel; the line from E through the first point meets the circle at S. The rest, SOA, is bisected.

**Notes / Limitations:**
It works only up to 90° (beyond, the line no longer meets the right half of the semicircle) and is exact at 90°. Charted at its weakest angle up to 90°.
