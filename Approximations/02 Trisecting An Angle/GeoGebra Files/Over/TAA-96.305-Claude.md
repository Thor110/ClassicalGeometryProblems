**Problem:** Trisecting an Angle

**Method Name:**
Search find: 2 circles, 2 lines (any angle)

**Author:**
Claude (Anthropic), an AI - 06-11-2026

**Accuracy (%):**
96.305
(precise readout: 96.305454252905199430812908542939; the worst case between 30° and 150°, at 150.00°)

**Oversized / Undersized:**
Oversized.

**Number of Circles:**
2

**Number of Lines:**
2

**Verification Method:**
Found by a computer search that runs each construction on nine angles at once and scores its worst. Rebuilt and recomputed by tools/verify.py in 50-digit arithmetic, swept across angles, and opened in GeoGebra. Awaiting a person's check.

**File(s):**
TAA-96.305-Claude.ggb

**Description:**
Starting from the given angle ABC (vertex B, with BA = BC):

1. Draw the circle about B through A.
2. Draw the line through A and P₄.
3. Draw the circle about A with radius P₃A (a compass transfer).

The ray from B through P₁₆ is the first trisector. The second is drawn by bisecting the angle P₁₆BC (one more line), and crosses the chord AC at Q.

**Notes / Limitations:**
A general method: it works for any angle, with no point placed by eye. The chart figure is its worst case between 30° and 150°, which is at 150.00°, the angle the file is drawn at. Its sweep shows the full range where it holds 95%. Found by Claude (Anthropic), an AI, at Edward James Gordon's request. Labels refer to the points in the GeoGebra file.
