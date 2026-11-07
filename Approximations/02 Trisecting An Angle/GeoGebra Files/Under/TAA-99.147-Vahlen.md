**Problem:** Trisecting An Angle

**Method Name:**
Vahlen's trisection

**Author:**
K. T. Vahlen - 1911 ("Konstruktionen und Approximationen in systematischer Darstellung", Leipzig, pp. 290-291)

**Accuracy (%):**
99.147
(precise readout: 99.147614362567587602235412731664)

**Oversized / Undersized:**
Undersized.

**Number of Circles:**
6

**Number of Lines:**
11

**Verification Method:**
Rebuilt and recomputed by tools/verify.py, and opened in GeoGebra, which gives BOT = 29.744284° at 90°, with the two halves of the rest 30.127858°.

**File(s):**
TAA-99.147-Vahlen.ggb

**Description:**
Vahlen: for the exact trisection point "OP = 2 cos(x/3)"; the difference from the approximate point (OP = 2) is "2 − 2 cos(x/3)", which "kann also in zweiter Annäherung gleich [2/9] sin vers x gesetzt werden, woraus sich eine sehr einfache und sehr genaue Konstruktion ergibt, indem man den angenäherten Trisektionspunkt ... um [2/9 sin vers x] nach O hin verschiebt" - so moving the approximate point towards O by that much gives a very simple and very accurate construction.

In the file: Cusa's trisection (see TAA-95.527-Cusa-Snellius) with P moved to P'. The versine BC is the foot C of the perpendicular from A; three radii up the tangent and two parallels give BY = (2/9) BC, and P' is that far from P towards O. P'A meets the tangent at D, BM = BD/3, and P'M meets the circle at T.

**Notes / Limitations:**
The scan garbles the fraction; it is the one that follows from Vahlen's own formula, and the rebuilt figure confirms that the exact point is at 2 cos(x/3) from O, as he says. Vahlen gives no construction for the 2/9; the archive's uses three radii and two parallels. A quarter of the versine does better still (TAA-99.660-Claude).

**Sources:**
- [K. T. Vahlen, Konstruktionen und Approximationen (1911)](https://archive.org/details/konstruktionenun00vahluoft)
