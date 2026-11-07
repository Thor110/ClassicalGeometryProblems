**Problem:** Doubling The Cube

**Method Name:**
Vahlen's external division

**Author:**
K. T. Vahlen - 1911 ("Konstruktionen und Approximationen in systematischer Darstellung", Leipzig), pp. 283-284

**Accuracy (%):**
99.9976
(precise readout: 99.997673552813946002460021205064)

**Oversized / Undersized:**
Undersized.

**Number of Circles:**
10

**Number of Lines:**
4

**Verification Method:**
Rebuilt and recomputed by tools/verify.py, and opened in GeoGebra, which gives TX = 1.25991127935 for AB = 1, Vahlen's 1.2599112.

**File(s):**
DTC-99.9976-Vahlen.ggb

**Description:**
Vahlen finds approximate quadratic equations a + b∛2 + c∛4 = 0 by Jacobi's algorithm, among them 3x² + 24x = 35 for x = ∛2, and builds it: "Man teile die Strecke 8 von außen zum Produkte 35/3, so ist der kleinere Abschnitt nahezu ∛2."

In the file AB is the edge. AP₈ = 8 by doubling (circles about B, P₂ and P₄ through A); c is the circle on AP₈, about P₄. AY = 7 is laid off on the far side of A and AZ = 5/3 on the near side (a third of AB by three steps up the perpendicular q at A and a parallel, taken off P₂); the semicircle on YZ meets q at T, so AT² = 7 · 5/3 = 35/3, and AT touches c. The line from T through the centre P₄ meets c first at X: TX · (TX + 8) = AT² = 35/3, so TX, the smaller part, is the edge.

**Notes / Limitations:**
Short by 0.0008% of the edge (0.0023% by volume). How to lay off the product is left to the reader in Vahlen; the file uses the tangent and secant from T. The scan garbles the fraction; 35/3 is the only reading that gives Vahlen's value.
