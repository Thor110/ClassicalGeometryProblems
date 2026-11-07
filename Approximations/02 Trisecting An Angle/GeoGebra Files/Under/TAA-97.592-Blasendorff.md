**Problem:** Trisecting An Angle

**Method Name:**
Blasendorff's division of the arc

**Author:**
M. Blasendorff - 1896 ("Ueber die Teilung des Kreisbogens", Programm der 8. Realschule Berlin), as described in the Jahrbuch über die Fortschritte der Mathematik 27 (JFM 27.0394.06)

**Accuracy (%):**
97.592
(precise readout: 97.592043967855242232106452594959)

**Oversized / Undersized:**
Undersized.

**Number of Circles:**
4

**Number of Lines:**
3

**Verification Method:**
Rebuilt and recomputed by tools/verify.py, swept across angles, and opened in GeoGebra, which gives the parts 30.3612°, 30.3612° and 29.2776° of 90°.

**File(s):**
TAA-97.592-Blasendorff.ggb

**Description:**
The Jahrbuch: "Es sei AE = α der zu teilende Bogen des Kreises M mit dem Durchmesser d. Man ziehe die Durchmesser EMG und AMF, ziehe FEJ, so dass EJ = (1 − m)/m · d wird, und verbinde J mit G, so trifft JG den Bogen AE in dem gesuchten Teilpunkte H." (AH = mα, nearly.)

In the file Blasendorff's M is O and his E is B; m = 1/3, so EJ is twice the diameter (four radii stepped along OB). G and F are the far ends of the diameters through B and A; J is on FB produced, 4 radii beyond B; JG meets the arc at H. The rest, BOH, is bisected.

**Notes / Limitations:**
Under by 2.4% at 90°; Blasendorff gives it for small arcs and a table of errors. A curiosity found while checking it: for every angle α, H is exactly the point Cominotto's construction gives for the angle 2α, so Blasendorff's two-thirds point of α is Cominotto's third of 2α. He also gives a second form, with the Apollonian circle on the chord, and in 1901 a generalisation.

**Sources:**
- [Jahrbuch über die Fortschritte der Mathematik, JFM 27.0394.06 (zbMATH Open)](https://zbmath.org/?q=an%3A27.0394.06)
