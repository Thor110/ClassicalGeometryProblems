**Problem:** Rectifying The Circle

**Method Name:**
Heiseler's difference of two legs

**Author:**
Artur Heiseler - 1931 ("Eine einfache Methode zur approximativen Rektifikation der Kreisperipherie", Commentationes Physico-Mathematicae 5, No. 17), as described in the Jahrbuch über die Fortschritte der Mathematik 57 (JFM 57.0692.02) and the Zentralblatt (Zbl 0003.16605)

**Accuracy (%):**
99.999
(precise readout: 99.999210766708042967127387157496)

**Oversized / Undersized:**
Oversized.

**Number of Circles:**
5

**Number of Lines:**
3

**Verification Method:**
Rebuilt and recomputed by tools/verify.py, and opened in GeoGebra, which gives QR = 12.5664698 for the radius 4, 3.1416174 radii.

**File(s):**
RTC-99.999-Heiseler.ggb

**Description:**
The Zentralblatt: "Da 1/3 (√141 − √6) = 3,141617... ist, andererseits 1/3 (√141 − √6) = √(4² − (√3/3)²) − √(1² − (√3/3)²) gilt, so läßt sich aus der letzten Formel leicht eine einfache ... Konstruktion ableiten." The Jahrbuch adds that its relative error is about 8 · 10⁻⁶, against 19 · 10⁻⁶ for Kochański's.

In the file: the 30° line from O meets the tangent at C at T, so CT = r/√3. The circle about T with radius r meets the diameter at Q, CQ = √(2/3) r; the circle with radius 4r (four radii stepped along the diameter) meets it at R, CR = √(16 − 1/3) r. QR is the half circumference.

**Notes / Limitations:**
Over by 0.0008%. Heiseler's own figure is not in the reviews; the file draws his formula directly, with the leg √3/3 taken from the tangent at C.

**Sources:**
- [Jahrbuch über die Fortschritte der Mathematik, JFM 57.0692.02 (zbMATH Open)](https://zbmath.org/?q=an%3A57.0692.02)
- [Zentralblatt, Zbl 0003.16605 (zbMATH Open)](https://zbmath.org/?q=an%3A0003.16605)
