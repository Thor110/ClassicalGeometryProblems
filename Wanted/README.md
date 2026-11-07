# Wanted: historical constructions, in progress

The charts list known historical approximations that are not charted yet, under "Wanted" on each
chart. A construction is charted under a historical name only once it has been checked against the
original source, or a faithful published description of it, step by step, so that the credit is for
what that person actually drew. Drafts in progress are kept here.

## Still wanted

| Construction | Chart | Why it is not charted yet |
|---|---|---|
| Kopf and Perron (1919): trisection from the limaçon, within 15" up to 90° | Trisecting an angle | The scanned text of Yates, "The Trisection Problem" (1942), ch. 4 §5, garbles the construction; it needs Perron's paper (1933) or a clean copy of Yates' figure 37. |
| H. V. Chu (2019): Ramanujan's number, π to nine places | Squaring the circle | Every step is published (arXiv:1908.01202, §3), but it combines three figures; not drawn yet. |
| G. J. Vargiù (1877): seven mean proportionals, 99.73% | Doubling the cube | Fully described by Amaldi in Enriques, *Fragen der Elementargeometrie* II (1907), § 9; long to draw. |
| G. Boccali (1884): from the regular decagon | Doubling the cube | Amaldi (1907), § 9: the scan garbles the final combination of lengths. |
| Christiaan Huygens: AE = cosec 52.5° = 1.2605 | Doubling the cube | Vahlen (1911), p. 284, gives only the angles; needs *Varia opera mathematica* I, p. 1. |
| Baudhayana (about 800 BC): π ≈ 3.0883 | Squaring the circle | Vahlen (1911), p. 177; which of two rules is his needs a translation of the Sulba Sutra. |

No drafts are in progress.

## Charted from here

Each was redrawn from its published description in November 2026 and checked against the figures
given there.

| Construction | Chart | From |
|---|---|---|
| Ahmes, Rhind papyrus (about 1700 BC): 8/9 of the diameter | Squaring the circle, 99.398% over | Hobson, "Squaring the Circle" (1913), "Earliest traces" |
| Nicholas of Cusa / Snellius (15th century, 1621): 3 sin θ / (2 + cos θ) | Arc rectification, 95.492% under (at 90°) | Yates, "The Trisection Problem" (1942), ch. 4 §2; Hobson (1913), pp. 27-30 |
| Nicholas of Cusa / Snellius: the same point used to trisect | Trisecting an angle, 95.527% under (at 90°) | Yates (1942), ch. 4 §2; Vahlen (1911), p. 189 |
| Albrecht Dürer (1525): trisection | Trisecting an angle, 99.395% over (at 150°) | G. H. Hughes, "The Polygons of Albrecht Dürer" (2012), Appendix A |
| Specht (1828): AE = (13/25) √146 | Rectifying the circle, 99.99997% under | Hobson (1913), pp. 34-35 |
| Jacob de Gelder (1849): 355/113 | Rectifying the circle, 99.999991% over | Hobson (1913), p. 34 |
| William Hayden (1871): quadrature, π ≈ 3.141592713 | Squaring the circle, 99.999998% over | Proceedings of the Royal Society 20 (1871-72), pp. 525-526 |
| William Hayden (1871): duplication, AL : AB = 1.2598754 | Doubling the cube, 99.989% under | Proceedings of the Royal Society 20 (1871-72), p. 525 |
| E. W. Hobson (1913): the square on GH, 6/5 · (1 + φ) | Squaring the circle, 99.998% over | Hobson (1913), p. 35 |
| Karajordanoff (1928): trisection, exact at 90° | Trisecting an angle, 99.838% under (at 65.57°) | Yates (1942), ch. 4 §4 |
| Maurice d'Ocagne (1934): trisection | Trisecting an angle, 98.796% over (at 90°) | Yates (1942), ch. 4 §6 |
| Johann Heinrich Lambert (1765): Snellius' point moved a fifth of the versine | Arc rectification, 99.029% under (at 90°) | Vahlen, "Konstruktionen und Approximationen" (1911), p. 203 |
| Lorenzo Mascheroni (1797): two duplications with the compass alone | Doubling the cube, 99.847% and 99.9995% under | "Géométrie du compas" (1798), art. 275 |
| A. Kunze (1851): the triangle with legs 3/5 and 6/5 of the diameter | Rectifying the circle, 99.998% over | Vahlen (1911), p. 311 |
| C. M. Willich (1855): quadrature | Squaring the circle, 99.946% under | Proceedings of the Royal Society 7 (1854-55) |
| G. Buonafalce (1876): first and third solutions | Doubling the cube, 99.693% and 99.997% under | Amaldi in Enriques, "Fragen der Elementargeometrie" II (1907), § 9 |
| K. T. Vahlen (1911): Cusa's trisection point moved 2/9 of the versine | Trisecting an angle, 99.147% under (at 90°) | Vahlen (1911), pp. 290-291 |

The sources are on the Internet Archive: Hobson as squaringcirclehi00hobsuoft and cu31924001159411,
Yates as ERIC_ED058058 (the 1971 reprint), Hayden as paper-doi-10_1098_rspl_1871_0099, Vahlen as
konstruktionenun00vahluoft, Mascheroni as gomtrieducompas00masc, Willich as philtrans08545474, and Amaldi's chapter of
Enriques as rcin.org.pl.WA35_102168_4521-II_Aufgaben-dritten_78454. The scans
garble some fractions and leave out the figures; where something had to be read back from the values
the author gives, each entry's notes say so.

Angle methods from Yates are charted at their weakest angle up to 90°, the range Yates tabulates
them over; each method gives one trisecting line, and the rest of the angle is bisected.

## Variants

`tools/variants.py` keeps a historical construction step for step and tries other fractions in it; its findings are in
[Variants/](../Variants/README.md). One is charted so far: Lambert's rectification with a quarter of the versine instead
of a fifth (arc rectification, 99.831% over, at 76.17°), credited to Lambert's method and found by the search.
Two more, the same way: Cusa's trisection with the point moved a quarter of the versine (trisecting an angle, 99.660%
under, at 90°), and Hobson's construction with OD = 1/3, OE = 11/8 and OF = 6/5 (squaring the circle, 99.9993% under).

The search also shows how far the historical authors' own choices hold up: for most of them no other small fraction
does better (Hayden, Kunze, Willich, Buonafalce's first, the Rhind papyrus, Kochański, Specht, de Gelder, Karajordanoff,
d'Ocagne and Dürer, with only halving fractions finer than a sixteenth beating some of them, at micro scale).
