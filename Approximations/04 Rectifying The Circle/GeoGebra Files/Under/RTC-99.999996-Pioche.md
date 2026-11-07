**Problem:** Rectifying The Circle

**Method Name:**
Pioche's rectification

**Author:**
Pioche, of Metz - 1818, as given by J. D. Gergonne, "Sur quelques rectifications approchées de la circonférence du cercle", Annales de mathématiques pures et appliquées, vol. VIII, construction III

**Accuracy (%):**
99.999996
(precise readout: 99.999996810524326040993991303189)

**Oversized / Undersized:**
Undersized.

**Number of Circles:**
9

**Number of Lines:**
6

**Verification Method:**
Rebuilt and recomputed by tools/verify.py in 50-digit arithmetic, and opened in GeoGebra, which gives KL = 6.283185107 of the radius against 2π = 6.283185307. Gergonne gives KL = (501 + 80√10)/120.

**File(s):**
RTC-99.999996-Pioche.ggb

**Description:**
Gergonne: "En un quelconque A des points d'une droite indéfinie soit élevée à cette droite une perpendiculaire AB, égale au rayon donné; soit porté trois fois ce rayon sur la même droite de A en D; soit menée BD; et à la première division C de AD soit élevée à cette droite une perpendiculaire rencontrant BD en E. Soit portée DE sur le prolongement de AD, de D en F; soit prolongée AF au-delà de ses extrémités A et F des quantités AH et FG, égales entre elles et au rayon AB; soit pris FK égal [aux 7/8] de FG; soit encore pris AL égal [aux 3/10] de AH; alors KL sera sensiblement la longueur de la circonférence dont le rayon est AB."

In the file: the circle about A through B gives C and H on the line; two more radii give D. FK = 7/8 of FG by three midpoints. AL = 3/10 of AH: five radii up AB from A, the line from the fifth to H and the parallel through the third give 3/5 of AH, and its midpoint 3/10.

**Notes / Limitations:**
KL = 3 + DE + 7/8 + 3/10 radii, with DE = (2/3)√10: (501 + 80√10)/120 = 6.2831851, against 2π = 6.2831853. The scan garbles both fractions; only their sum matters, and it must be 47/40 to give Gergonne's own value, which 7/8 and 3/10 do.
