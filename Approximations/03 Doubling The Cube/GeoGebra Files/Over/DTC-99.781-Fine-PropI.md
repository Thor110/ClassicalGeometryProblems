**Problem:** Doubling The Cube

**Method Name:**
Finé's mean proportionals, Prop. I (the half case)

**Author:**
Oronce Finé - "De rebus mathematicis, hactenus desideratis" (Paris 1556), book I, Prop. I, fol. 4r-4v

**Accuracy (%):**
99.781
(precise readout: 99.781978666421110539764920197616)

**Oversized / Undersized:**
Oversized.

**Number of Circles:**
6

**Number of Lines:**
10

**Verification Method:**
Rebuilt and recomputed by tools/verify.py; the cube on the result is compared with twice the given cube.

**File(s):**
DTC-99.781-Fine-PropI.ggb

**Description:**
"Diuidatur postmodum ab recta proportionaliter, seu media & extrema ratione in puncto f, cuius segmentum maius sit af: & huius segmenti dimidio, aequalis secetur ag, & connectatur fg linea recta, quae secet ad rectam in puncto l."

In the file B, C are b, c (the given edge), A is a with ab = 2 bc, and D is d with cd = bc. The golden section of ab comes from ac = √5 bc: the circle about c through b cuts ac at X, and af = aX = ab/φ.

Finé gives the two means between the given lines ab and cd. The edge of the doubled cube is the mean next to the smaller line, so the file takes cd as the given edge and ab = 2 cd. Finé believed his constructions exact; the step he leaves to "experience" (that the last parallel falls on c) is where they fail.

**Notes / Limitations:**
Over by 0.218% in volume. Finé's other cases of Prop. I (the smaller line above half, or between an eighth and a quarter) choose l differently.

**Sources:**
- [O. Finé, De rebus mathematicis hactenus desideratis (1556), MDZ](https://www.digitale-sammlungen.de/en/view/bsb11199762)
