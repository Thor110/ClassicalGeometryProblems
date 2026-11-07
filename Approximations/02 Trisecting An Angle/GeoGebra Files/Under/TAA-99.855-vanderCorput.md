**Problem:** Trisecting An Angle

**Method Name:**
van der Corput and Mooij's division, r = 1/3

**Author:**
J. G. van der Corput and H. Mooij - 1949 ("Approximate division of an angle into equal parts", Proc. Akad. Wet. Amsterdam 52, pp. 317-328), as described in the Zentralblatt (Zbl 0032.29801)

**Accuracy (%):**
99.855
(precise readout: 99.855260800469933045572892767482)

**Oversized / Undersized:**
Undersized.

**Number of Circles:**
6

**Number of Lines:**
3

**Verification Method:**
Rebuilt and recomputed by tools/verify.py, swept across angles, and opened in GeoGebra, which gives the parts 29.956578°, 30.021711° and 30.021711° of 90°.

**File(s):**
TAA-99.855-vanderCorput.ggb

**Description:**
The Zentralblatt: "Ist ∡AOB = 2α (OA = OB), ist C der Halbierungspunkt der Sehne AB, bezeichnet D einen Punkt der Geraden AB, für den CD = (3 + r²)/(4r) · AC ist, und wird der kleinere Bogen von dem Kreise mit dem Mittelpunkt D und mit dem Halbmesser R = 3(1 − r²)/(4r) · AC in einem Punkt E geschnitten, so sind die Winkel β = rα und ∡COE approximativ gleich."

For r = 1/3, CD = 7/3 AC and R = 2 AC = AB. In the file C is the middle of the chord BA; AC is divided into three (radii stepped from A through O and a parallel through O), and D is laid off beyond B; the circle about D with radius AB meets the arc at S, and BOS is the third. The rest, SOA, is bisected.

**Notes / Limitations:**
Charted at 90°. Their second form adds a correction in AC³ and is closer still; the review gives it, but it is longer, and only the first is drawn here.

**Sources:**
- [Zentralblatt, Zbl 0032.29801 (zbMATH Open)](https://zbmath.org/?q=an%3A0032.29801)
