**Problem:** Doubling The Cube

**Method Name:**
Vargiù's mean proportionals

**Author:**
G. J. Vargiù - 1877 ("Sulla duplicazione del cubo e sulla multiplicazione di esso", Oristano), as given by U. Amaldi in F. Enriques, "Fragen der Elementargeometrie" II (1907), § 9

**Accuracy (%):**
99.729
(precise readout: 99.729605608547012625765991384792)

**Oversized / Undersized:**
Undersized.

**Number of Circles:**
16

**Number of Lines:**
2

**Verification Method:**
Rebuilt and recomputed by tools/verify.py, and opened in GeoGebra, which gives AM₇ / AB = 1.258784440 = 2^(85/256).

**File(s):**
DTC-99.729-Vargiu.ggb

**Description:**
Amaldi: "Wenn l die Kante des zu verdoppelnden Würfels und d die Diagonale einer Seite dieses Würfels ist, so konstruiere man die mittlere Proportionale m₁ zu l und d; darauf konstruiere man die mittlere Proportionale m₂ zu d und m₁, dann die mittlere Proportionale m₃ zu m₁ und m₂ ... die siebente der auf diese Weise gefundenen mittleren Proportionalen stellt mit großer Annäherung ... die Kante des Würfels dar, der doppelt so groß als der gegebene ist."

In the file: the square's corner C gives the diagonal AC. Every mean proportional is raised on the perpendicular at A: the two lengths are laid either side of A on the line AB (circles about A), and the circle on the whole as diameter meets the perpendicular at the mean proportional. M₁ to M₇ in turn; AM₇ is the edge.

**Notes / Limitations:**
Each step halves the gap in the exponent: l and d are 2^0 and 2^(1/2) of the edge, and the k-th mean is 2 to the power a_k, with a_k the average of the two before, closing in on 1/3; the seventh is 85/256. Short by 0.09% of the edge (0.27% by volume). The scan garbles Amaldi's numerical check. Vahlen traces the idea to Buteo (1554).
