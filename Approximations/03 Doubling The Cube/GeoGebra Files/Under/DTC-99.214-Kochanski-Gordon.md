**Problem:** Doubling The Cube

**Method Name:**
One Fifth Of The Circle

**Author:**
Edward James Gordon (the link) and Adam Adamandy Kochański (the rectification), drawn with Claude (Anthropic) - 06-11-2026

**Accuracy (%):**
99.214
(precise readout: worked out by tools/verify.py; see the chart)

**Oversized / Undersized:**
Undersized.

**Number of Circles:**
7

**Number of Lines:**
5

**Verification Method:**
Rebuilt and recomputed by tools/verify.py, and opened in GeoGebra, which gives the same volume ratio, 1.984289310087.

**File(s):**
DTC-99.214-Kochanski-Gordon.ggb

**Description:**
Edward noticed, in his Cube 2 Tesseract v2.0, that the doubled cube's outline is almost exactly the circle around the original cube's outline plus one more edge: each edge of the doubled cube is close to one fifth of that circle (∛2 ≈ 2π/5, to 0.26%). This construction uses that link directly. Starting from the given edge OA:

1. Draw the circle about O through A, with the given edge as its radius, and the line OA, which meets the circle again at B.
2. Rectify the circle by Kochański's method: the tangent at A; the circle about A through O, crossing the first circle at E; the line from O through the midpoint of AE, at 30° to OA, meets the tangent at C; three steps of the radius along the tangent from C give D. BD is almost exactly half the circumference.
3. Take two fifths of BD: from B, the points O, A, P₃, P₄, P₅ lie one radius apart along the line; join P₅ to D, and draw the parallel through A. It crosses BD at Q.

BQ is the edge of the doubled cube: two fifths of half the circle, which is one fifth of the whole circle.

**Notes / Limitations:**
Its accuracy is set by the near-coincidence itself (2π/5 is 0.26% short of ∛2, so 0.78% short by volume); Kochański's rectification adds only 0.006% more. A better rectification of the circle cannot do better than 99.22%. See "7. Causal Links" on the problems page.
