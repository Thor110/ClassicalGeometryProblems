**Problem:** Trisecting An Angle

**Method Name:**
Kopf's first trisection

**Author:**
Eugen Kopf, master tailor of Ludwigshafen - 1929, as published by Oskar Perron, "Die Winkeldreiteilung des Schneidermeisters Kopf", Sitzungsberichte München 1929, pp. 341-343

**Accuracy (%):**
98.960
(precise readout: 98.960906389829014210587099925821)

**Oversized / Undersized:**
Undersized.

**Number of Circles:**
3

**Number of Lines:**
5

**Verification Method:**
Rebuilt and recomputed by tools/verify.py, and checked against Perron's formula: at 30° the third is 9.896°, at 52°34'37" short by 8'12", at 90° exact.

**File(s):**
TAA-98.960-Kopf.ggb

**Description:**
Perron: "Man zeichne einen Halbkreis und den zu seinem Durchmesser AB senkrechten Radius MC. Durch C zeichne man den Kreisbogen CD mit dem Mittelpunkt B. Schließlich markiere man auf der Verlängerung von AB den Punkt E so, daß CE = AB ist. Ist nun ∠AMF = x der gegebene spitze Winkel, so bringe man die Gerade FB mit dem Kreisbogen CD zum Schnitt in G. Verbindet man dann G mit E, so ist ∠AEG = y die Kopfsche Näherung für den dritten Teil von x."

In the file Perron's M is O, his A is B (the arm OB), his F is A (the other arm), and his B is P, the far end of the diameter. E is found with the circle about C whose radius is the diameter. The angle at E is carried to the corner by the parallel to EG through O, which meets the circle at S; the rest is bisected.

**Notes / Limitations:**
Under by 1.04% at 30°. Perron's later paper (1933) gives Kopf's second, much better construction (taa-under-99.981). The "8'12"" that Lense mentions for Sauerbeck's trisection is a coincidence of the bound; Sauerbeck's construction is a different one.

**Sources:**
- [Jahrbuch über die Fortschritte der Mathematik, JFM 55.0982.04 (zbMATH Open)](https://zbmath.org/?q=an%3A55.0982.04)
- [Bayerische Akademie der Wissenschaften, Sitzungsberichte (003383299)](https://publikationen.badw.de/de/003383299)
