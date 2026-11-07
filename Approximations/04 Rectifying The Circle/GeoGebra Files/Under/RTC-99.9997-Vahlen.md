**Problem:** Rectifying The Circle

**Method Name:**
Vahlen's external division for π

**Author:**
K. T. Vahlen - 1911 ("Konstruktionen und Approximationen in systematischer Darstellung", Leipzig), p. 312

**Accuracy (%):**
99.9997
(precise readout: 99.999736401923321241913021808841)

**Oversized / Undersized:**
Undersized.

**Number of Circles:**
12

**Number of Lines:**
3

**Verification Method:**
Rebuilt and recomputed by tools/verify.py, and opened in GeoGebra, which gives XA = 12.5663375 against the circumference 12.5663706 (radius 2).

**File(s):**
RTC-99.9997-Vahlen.ggb

**Description:**
Vahlen looks for quadratic equations a + bπ + cπ² = 0 with small whole numbers, and builds one: "Man teile (10 − 1/4) von außen zum Produkte 81/2, der kleinere Abschnitt ist 3,14158 = π."

In the file the diameter is the unit. From A, one end of the diameter, AB = 39/4 diameters is laid along it: by doubling (circles about M, P₂ and P₄ through A, to 8 diameters), two more, and back a quarter (half the radius, taken off the middle of OM). For the product, AT on the perpendicular at A is nine sides of the inscribed square (MU, laid off and doubled), 9/√2 diameters, so AT² = 81/2. The circle about the middle C of AB through T meets the line beyond A at X: XA · XB = CT² − CA² = AT² = 81/2, so XA, the smaller part, is the circumference.

**Notes / Limitations:**
Short by 0.00026%. Vahlen leaves the drawing of the product to the reader; the file uses the tangent AT. The scan garbles the fractions; 39/4 and 81/2 are the only reading that gives the printed value.

**Sources:**
- [K. T. Vahlen, Konstruktionen und Approximationen (1911)](https://archive.org/details/konstruktionenun00vahluoft)
