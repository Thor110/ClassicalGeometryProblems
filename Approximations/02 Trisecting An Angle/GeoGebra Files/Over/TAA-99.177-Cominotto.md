**Problem:** Trisecting An Angle

**Method Name:**
Cominotto's trisection

**Author:**
E. Cominotto - 1895 ("Trisezione approssimata dell'angolo", Padova), as given by A. Conti in F. Enriques, "Questioni riguardanti la geometria elementare" (1900), § 17, and by U. Amaldi in the German edition (1907), § 17

**Accuracy (%):**
99.177
(precise readout: 99.177435279698193381485327921422)

**Oversized / Undersized:**
Oversized.

**Number of Circles:**
9

**Number of Lines:**
7

**Verification Method:**
Rebuilt and recomputed by tools/verify.py, swept across angles, and opened in GeoGebra, which gives the parts 50.411282°, 49.794359° and 49.794359° of 150°.

**File(s):**
TAA-99.177-Cominotto.ggb

**Description:**
Conti: "Sia ABC l'angolo e quindi AC l'arco ... che è proposto di trisecare. Dividiamo il raggio BC in tre parti uguali nei punti D, E e sul prolungamento di questo raggio, oltre B, si porti BF = BD = DE = EC. Descriviamo l'arco DG di centro B e raggio BD, e la semicirconferenza di centro E e raggio DE, dalla quale staccheremo da C verso D l'arco CH = DG. Congiunto D con H si costruisca l'arco CI, di centro D e raggio DC, compreso fra DG e DH; si unisca poi F con I e si costruisca l'arco CK, di centro F e raggio FC, compreso tra FG ed FK. La semicirconferenza che passa per K, I, C ... interseca l'arco AC nel punto T che assai prossimamente determina la terza parte di AC."

The file keeps Cominotto's letters. BC is trisected at D and E (three radii up the perpendicular at B, the line from the third to C and the parallels through the first two). F is BD beyond B. G is where the arc about B through D meets BA; the circle about C with radius DG cuts the semicircle about E at H, so the arc CH equals the arc DG. The circle about D through C meets DH at I, the circle about F through C meets FI at K, and the circle through K, I and C meets the arc AC at T. BT is the trisecting line next to BC; the rest, TBA, is bisected.

**Notes / Limitations:**
A general method for any angle up to 180°; Conti checks it at 180°: his formula for T, height 2√2(1 + √2)/(5 + 2√2) = 0.872260 of the radius, is exactly what the rebuilt figure gives, which puts the chord CT at 1.0109 radii (43' over a third). His rounded arithmetic, x = 0.485 for 0.489, makes it look closer than it is; it is a little over a hundredth out at 180°, and 25' at 150°. Cominotto also gives a simpler, older construction (the bisector carried a radius beyond the arc), which he and Conti set aside as too rough. Halved twice it holds 99.950% (see the Claude variant).

**Sources:**
- [F. Enriques (ed.), Questioni riguardanti la geometria elementare (1900)](https://archive.org/details/questioniriguard00enri)
- [U. Amaldi, Aufgaben dritten Grades, in F. Enriques, Fragen der Elementargeometrie II (1907)](https://archive.org/details/rcin.org.pl.WA35_102168_4521-II_Aufgaben-dritten_78454)
