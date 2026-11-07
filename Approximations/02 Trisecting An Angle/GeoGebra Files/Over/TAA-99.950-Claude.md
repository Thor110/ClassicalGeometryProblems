**Problem:** Trisecting An Angle

**Method Name:**
Cominotto's trisection, on the angle halved twice

**Author:**
Claude (Anthropic), an AI - 07-11-2026, as a variant of E. Cominotto's trisection (1895)

**Accuracy (%):**
99.950
(precise readout: 99.950309494646427174346660185630)

**Oversized / Undersized:**
Oversized.

**Number of Circles:**
11

**Number of Lines:**
10

**Verification Method:**
Rebuilt and recomputed by tools/verify.py, swept across angles, and opened in GeoGebra, which gives the parts 50.024845°, 49.987577° and 49.987577° of 150°. Awaiting a person's check.

**File(s):**
TAA-99.950-Claude.ggb

**Description:**
Cominotto's trisection (see the historical entry), worked on the angle halved twice:

1. Bisect the angle twice from B: H₁ and H₂, so the arc BH₂ is a quarter of BA.
2. On the arc BH₂, Cominotto's steps, with the corner O, his C as B and his A as H₂ (his H is J and his T is S here): OB trisected at D and E; F is OD beyond O; the arc about O through D meets OH₂ at G; the circle about B with radius DG cuts the semicircle about E at J; the circle about D through B meets DJ at I; the circle about F through B meets FI at K; the circle through K, I and B meets the arc at S.
3. Double back twice: the circle about S through B meets the circle about O again; repeat from that point.
4. The last point gives the trisecting line; bisect the rest of the angle to finish.

**Notes / Limitations:**
A general method, charted at its weakest angle from 30° to 150°. Its smallest step is 8.2% of the radius, above the 5% of the micro scale rule; halved once more it would fall to 4.1% (99.988%). Cominotto's error falls only about four times with each halving, against thirty-two for Cusa's. Credit for the construction is Cominotto's; only the halving is new.
