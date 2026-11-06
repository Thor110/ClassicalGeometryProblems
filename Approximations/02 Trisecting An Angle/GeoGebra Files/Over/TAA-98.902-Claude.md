**Problem:** Trisecting an Angle

**Method Name:**
Search find: 3 circles, 3 lines (any angle)

**Author:**
Claude (Anthropic), an AI - 06-11-2026

**Accuracy (%):**
98.902
(precise readout: 98.902162603304244105298421350430; the worst case between 30° and 150°, at 107.52°)

**Oversized / Undersized:**
Oversized.

**Number of Circles:**
3

**Number of Lines:**
3

**Verification Method:**
Found by a computer search that runs each construction on nine angles at once and scores its worst. Rebuilt and recomputed by tools/verify.py in 50-digit arithmetic, swept across angles, and opened in GeoGebra. Awaiting a person's check.

**File(s):**
TAA-98.902-Claude.ggb

**Description:**
Starting from the given angle ABC (vertex B, with BA = BC):

1. Draw the circle about B through A.
2. Draw the line through P₄ and A.
3. Draw the circle about A through P₄.
4. Draw the line through P₉ and P₆.
5. Draw the circle about A through P₁₁.

The ray from B through P₁₈ is the first trisector. The second is drawn by bisecting the angle P₁₈BC (one more line), and crosses the chord AC at Q.

**Notes / Limitations:**
A general method: it works for any angle, with no point placed by eye. The chart figure is its worst case between 30° and 150°, which is at 107.52°, the angle the file is drawn at. Its sweep shows the full range where it holds 95%. Found by Claude (Anthropic), an AI, at Edward James Gordon's request. Labels refer to the points in the GeoGebra file.
