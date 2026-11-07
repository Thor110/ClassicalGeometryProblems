**Problem:** Doubling The Cube

**Method Name:**
Hayden's duplication

**Author:**
William Hayden - 1871 ("Approximate Geometrical Solutions of the Problems of the Duplication of the Cube and of the Quadrature of the Circle", Proceedings of the Royal Society of London, vol. 20, p. 525)

**Accuracy (%):**
99.989
(precise readout: 99.989151684165171047048796734704)

**Oversized / Undersized:**
Undersized.

**Number of Circles:**
6

**Number of Lines:**
4

**Verification Method:**
Rebuilt and recomputed by tools/verify.py, and opened in GeoGebra, which gives AL / AB = 1.259875448. Hayden gives AL = 3.7796264 for AB = 3, so AL / AB = 1.2598754, an error of 0.0000456.

**File(s):**
DTC-99.989-Hayden.ggb

**Description:**
In Hayden's words: "Let AB be the given cube root. Erect the perpendicular BK; bisect AB in C, and with radius CB describe the arcs intersecting at E; let fall the perpendicular ED and trisect CD; then, with radius BF from E as a centre, describe the arc HI cutting BK in L; join AL, which will be nearly equal to the cube root of double the cube of AB."

With AB = 3: CB = 1.5, BD = 0.75, BF = 1.25 (so F is the point of trisection nearest C), the height of L above E is √(1.25² − 0.75²) = 1, and BL = 1.5 sin 60° + 1. CD is trisected here by stepping DC three times up ED from D, joining the third step to C and drawing the parallel through the second.

**Notes / Limitations:**
Hayden does not say how CD is trisected; the stepping used here is the archive's. Accuracy is measured as the doubled cube's volume, (AL/AB)³ = 1.999783 against 2.

**Sources:**
- [W. Hayden, Proceedings of the Royal Society 20 (1871-72)](https://archive.org/details/paper-doi-10_1098_rspl_1871_0099)
