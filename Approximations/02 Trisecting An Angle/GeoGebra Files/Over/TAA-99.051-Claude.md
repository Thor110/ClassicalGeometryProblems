**Problem:** Trisecting an Angle

**Method Name:**
Search find: 4 circles, 4 lines (any angle)

**Author:**
Claude (Anthropic), an AI - 06-11-2026

**Accuracy (%):**
99.051
(precise readout: 99.051569874431144465736286739277; the worst case between 30° and 150°, at 105.08°)

**Oversized / Undersized:**
Oversized.

**Number of Circles:**
4

**Number of Lines:**
4

**Verification Method:**
Found by a computer search that runs each construction on nine angles at once and scores its worst. Rebuilt and recomputed by tools/verify.py in 50-digit arithmetic, swept across angles, and opened in GeoGebra. Awaiting a person's check.

**File(s):**
TAA-99.051-Claude.ggb

**Description:**
Starting from the given angle ABC (vertex B, with BA = BC):

1. Draw the circle about B through A.
2. Draw the line through A and P₄.
3. Draw the line through P₄ and P₃.
4. Draw the circle about P₃ through B.
5. Draw the line through P₁₁ and B.
6. Draw the circle about P₁₂ with radius AP₃ (a compass transfer).
7. Draw the circle about A with radius P₁₀P₂₃ (a compass transfer).

The ray from B through P₃₃ is the first trisector. The second is drawn by bisecting the angle P₃₃BC (one more line), and crosses the chord AC at Q.

**Notes / Limitations:**
A general method: it works for any angle, with no point placed by eye. The chart figure is its worst case between 30° and 150°, which is at 105.08°, the angle the file is drawn at. Its sweep shows the full range where it holds 95%. Found by Claude (Anthropic), an AI, at Edward James Gordon's request. Labels refer to the points in the GeoGebra file.
