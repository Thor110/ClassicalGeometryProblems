**Problem:** Trisecting An Angle

**Method Name:**
Schoeler's trisection

**Author:**
H. Schoeler - 1902 ("Angenäherte n-Teilung eines beliebigen Winkels mit Zirkel und Lineal", Archiv der Mathematik und Physik (3) 4, pp. 128-129), the case n = 3, as described in the Jahrbuch über die Fortschritte der Mathematik 33 (JFM 33.0517.05). The same steps were given by Maurice d'Ocagne in 1934 (L'Enseignement mathématique 33), as R. C. Yates gives them in "The Trisection Problem" (1942), chapter 4, section 6

**Accuracy (%):**
98.796
(precise readout: 98.796021983927621116053226297479)

**Oversized / Undersized:**
Oversized.

**Number of Circles:**
1

**Number of Lines:**
4

**Verification Method:**
Rebuilt and recomputed by tools/verify.py, and opened in GeoGebra. Its angle BOT reproduces Yates' error table: 45" at 30°, 6'14" at 60° and 21'41" at 90°.

**File(s):**
TAA-98.796-dOcagne.ggb

**Description:**
Yates: "From the midpoint C of the radius of the unit circle, the line CM is drawn to the midpoint of the arc of the given angle AOB. Then angle MCB is approximately one-third angle AOB."

C is the middle of OB', the radius opposite B; M is where the bisector of AOB meets the circle. The angle MCB sits at C, so the parallel to CM through O carries it to the corner, meeting the circle at T. The rest, TOA, is bisected at U to finish the trisection.

**Notes / Limitations:**
Very good for small angles (1.5" at 10°) and getting steadily worse: charted at 90°, its weakest angle up to 90°. 97.8% at 120° and 96.3% at 150°; it holds 95% up to 170°. The year 1934 is from Yates' bibliography entry; the title is as Yates gives it.

**Also found by:**
Maurice d'Ocagne (1934), in L'Enseignement mathématique, as given by Yates (1942); this entry was credited to him until Schoeler's paper of 1902 was found. Ig. Hajek (1936), "Die Dreiteilung des Winkels" (Znaim), the same approximation (JFM 62.0698.01). Both are listed as possible independent rediscoveries (SUBMISSION_RULESET.md, "Earlier discoveries").

**Schoeler's rule:**
The Jahrbuch: "Das beschriebene Verfahren zur n-Teilung (n ungerade) eines beliebigen Winkels α setzt voraus, daß man die (n + 1)-Teilung vollziehen kann. Man mache den (n + 1)-ten Teil von 2α zum Zentriwinkel eines beliebigen Kreises, verlängere einen Schenkel über den Mittelpunkt bis zum Schnitt mit der Peripherie, trage auf der Verlängerung von ihrem Endpunkte aus den (n + 1)-ten Teil des Durchmessers ab und verbinde den erhaltenen Teilpunkt mit dem Endpunkte des anderen Radius des Zentriwinkels. Der Winkel zwischen dem Durchmesser und dieser Verbindungslinie ist angenähert gleich α/n." For n = 3 the central angle is half the given angle (the middle of the arc), and the quarter of the diameter laid inwards from the far end is the middle of the radius opposite B: d'Ocagne's construction, step for step.
