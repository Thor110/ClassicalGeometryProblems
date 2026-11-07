**Problem:** Doubling The Cube

**Method Name:**
Boccali's duplication

**Author:**
Gaetano Boccali - 1884 ("Doppio cubo ed altre nuove scoperte geometriche in una semplice spirale poligona", Camerino), as re-derived by A. Conti in F. Enriques, "Questioni riguardanti la geometria elementare" (1900), § 11, and by U. Amaldi in the German edition (1907), § 9

**Accuracy (%):**
99.972
(precise readout: 99.972684147537496573633387496366)

**Oversized / Undersized:**
Oversized.

**Number of Circles:**
6

**Number of Lines:**
3

**Verification Method:**
Rebuilt and recomputed by tools/verify.py, and opened in GeoGebra, which gives AY = 5.04014303537 for AB = 4, a ratio of 1.2600357588, the value Conti prints; Vahlen (1911, p. 284) also gives Boccali's value as 1.260035.

**File(s):**
DTC-99.972-Boccali.ggb

**Description:**
Conti: "Se AB è il lato del cubo dato, costruiamo il lato del decagono regolare stellato inscritto nel cerchio di raggio uguale ad AB ... prendiamo da una retta r qualunque un segmento A'B' uguale al lato del cubo dato e dalla medesima retta, partendo da B' (o da A') stacchiamo un segmento B'C uguale al lato del decagono regolare stellato precedentemente costruito. Conduciamo dal punto A' la perpendicolare A'Y alla retta r, e descritta la semicirconferenza che ha per diametro B'C, congiungiamo il punto U, comune ad essa e alla A'Y, con B' e con C. Il lato del cubo doppio di quello dato è, coll'approssimazione di 1/10000 per eccesso, uguale a 2/3 (A'C + UB')."

In the file A is Conti's A' and B his B'. The side of the star decagon in a circle of radius AB is φ·AB, and comes from the usual golden-section construction: P₁ a radius up the perpendicular q at A, and the circle about the middle M of AB through P₁ meets the line AB beyond A at C, so BC = φ·AB and AC = (φ − 1)·AB. The semicircle on BC (about its middle N) meets q at U. UB is laid on from C to X, so AX = AC + UB; two thirds of AX is AY (three radii up q, the line from the third to X and the parallel through the second).

**Notes / Limitations:**
Boccali called his way "vere nuove scoperte geometriche", and preferred it to more accurate but "noiose e complicate costruzioni". Conti could not follow Boccali's own derivation and gives this one instead, which reaches the same value; the file follows Conti. Over by 0.009% of the edge (0.027% by volume).

**Sources:**
- [F. Enriques (ed.), Questioni riguardanti la geometria elementare (1900)](https://archive.org/details/questioniriguard00enri)
- [U. Amaldi, Aufgaben dritten Grades, in F. Enriques, Fragen der Elementargeometrie II (1907)](https://archive.org/details/rcin.org.pl.WA35_102168_4521-II_Aufgaben-dritten_78454)
- [K. T. Vahlen, Konstruktionen und Approximationen (1911)](https://archive.org/details/konstruktionenun00vahluoft)
