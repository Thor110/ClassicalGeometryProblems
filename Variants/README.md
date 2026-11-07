# Variants of the historical constructions

Written by `tools/variants.py` (denominators up to 12). Each historical construction is kept step for step, and
only its fractions are changed. "Cost" is a rough count of the extra compass steps and lines a fraction takes to lay
off (halves, quarters, eighths and so on are midpoints, and free); "extra" is that against the original. Every variant
listed beats the original; the list keeps only those that nothing cheaper beats. Rows marked µ need a halving finer
than a sixteenth: a step under 5% of the given size, micro scale under the counting rules, as the charts mark them.

A variant is charted only once it is drawn in GeoGebra and added like any other entry, credited to the
original's author and to whoever found the variant (Lambert's with a quarter versine is: `ar-over-99.831`).

## Halving the angle first

The historical trisections and arc rectifications are best on small angles. Worked on the angle halved n times
and multiplied back (n more lines and n more circles), they hold from 30° to 150° about as well as they did on
the small angle. Each halving also makes the steps smaller, and in the end micro scale, so the archive charts
each at the deepest halving whose steps all stay at macro scale (marked * below); the methods without small
fractions of their own, like Cusa's, can go deepest. At their weakest from 30° to 150°:

| Method | As it is | Halved once | Twice | Three times | Four times | Five times |
|---|---|---|---|---|---|---|
| Dürer's trisection, from one side | 99.697894% * | 99.995194% | 99.999925% | 99.999999% | 100.000000% | 100.000000% |
| Karajordanoff's trisection | 93.511039% | 99.838644% | 99.914694% | 99.976049% * | 99.993855% | 99.998454% |
| Schoeler's trisection | 96.305454% | 99.177435% | 99.799897% | 99.950309% | 99.987598% * | 99.996901% |
| Cusa's trisection | 50.537381% | 98.022886% | 99.893987% | 99.993626% | 99.999605% * | 99.999975% |
| Vahlen's trisection | 68.027502% | 99.742875% * | 99.996621% | 99.999949% | 99.999999% | 100.000000% |
| Cusa's trisection with a quarter versine | 71.657208% | 99.971180% | 99.990311% * | 99.999257% | 99.999952% | 99.999997% |
| Monti's trisection | 99.748544% | 99.863939% | 99.961698% | 99.990168% * | 99.997526% | 99.999381% |
| Cominotto's trisection | 99.177435% | 99.799897% | 99.950309% * | 99.987598% | 99.996901% | 99.999225% |
| Cusa's rectification | 50.526511% | 98.004262% | 99.892728% | 99.993547% | 99.999601% | 99.999975% * |
| Rankine's first rectification | 95.243357% | 99.719556% | 99.982867% | 99.998936% | 99.999934% * | 99.999996% |
| Rankine's second rectification | 98.685638% | 99.929008% | 99.995707% | 99.999734% | 99.999983% * | 99.999999% |
| Rankine's two combined | 99.899839% | 99.999295% | 99.999992% | 100.000000% | 100.000000% * | 100.000000% |
| Lambert's rectification | 65.943872% | 99.704852% * | 99.996063% | 99.999941% | 99.999999% | 100.000000% |
| Lambert's with a quarter versine | 72.492085% | 99.832008% * | 99.977617% | 99.998453% | 99.999901% | 99.999994% |

Fontana's rectification (1784, ar-over-99.097) is a halving process of its own: with k bisections it gives
2^(k+1) tan(x/2^(k+1)), so each bisection makes it four times closer. Cusa's point worked on the halved arc gains
thirty-two times with each halving, which is why it goes so much further for the same number of steps.

Beyond the starred column the steps are micro scale: still better, and listed here, but not charted. Dürer's
from one side, halved once, is charted with the µ mark (taa-under-99.995), as it was found first.

## Hayden's duplication (1871)

F a fraction f of the way from C to D (Hayden: a third). Chart entry: `dtc-under-99.989`.

| Fractions | Accuracy | Cost (circles, lines) | Extra |
|---|---|---|---|
| f = 1/3 (original) | 99.989151684% | 3, 2 | |
| no variant with these denominators beats it | | | |

0 variants beat the original in all.

## Hobson's quadrature (1913)

OD, OE and OF as fractions of the radius (Hobson: 3/5, 1/2, 3/2). Chart entry: `stc-over-99.998`.

| Fractions | Accuracy | Cost (circles, lines) | Extra |
|---|---|---|---|
| OD = 3/5, OE = 1/2, OF = 3/2 (original) | 99.998467882% | 5, 2 | |
| OD = 1/3, OE = 11/8, OF = 6/5 | 99.999375386% | 8, 4 | +3, +2 |
| OD = 3/8, OE = 11/9, OF = 6/5 | 99.999375386% | 14, 4 | +9, +2 |
| OD = 1/3, OE = 2/7, OF = 15/7 | 99.999666175% | 17, 6 | +12, +4 |
| µ OD = 9/32, OE = 51/64, OF = 27/16 | 99.999836245% | 0, 0 | -5, -2 |
| µ OD = 1/10, OE = 7/12, OF = 75/32 | 99.999979226% | 22, 4 | +17, +2 |

184 variants beat the original in all.

## Rhind papyrus (about 1700 BC)

The square on a fraction of the diameter (Ahmes: 8/9). Chart entry: `stc-over-99.398`.

| Fractions | Accuracy | Cost (circles, lines) | Extra |
|---|---|---|---|
| side = 8/9 (original) | 99.398356959% | 9, 2 | |
| no variant with these denominators beats it | | | |

0 variants beat the original in all.

## Kunze's triangle (1851)

The legs of the right triangle as fractions of the diameter (Kunze: 3/5 and 6/5). Chart entry: `rtc-over-99.998`.

| Fractions | Accuracy | Cost (circles, lines) | Extra |
|---|---|---|---|
| leg 1 = 3/5, leg 2 = 6/5 (original) | 99.998467882% | 10, 4 | |
| no variant with these denominators beats it | | | |

0 variants beat the original in all.

## Cusa's and Lambert's rectification (1765)

Where the rectification point sits (OP radii beyond O) and how many versines it moves in (Cusa: 2 and 0; Lambert: 2 and 1/5). Scored at its worst up to 90°. Chart entry: `ar-under-99.029`.

| Fractions | Accuracy | Cost (circles, lines) | Extra |
|---|---|---|---|
| OP = 2, shift = 1/5 (original) | 99.029742368% | 5, 2 | |
| OP = 33/16, shift = 5/16 | 99.871666316% | 0, 0 | -5, -2 |
| µ OP = 65/32, shift = 9/32 | 99.918421050% | 0, 0 | -5, -2 |

490 variants beat the original in all.

## Buonafalce's first solution (1876)

DE as a fraction of the diagonal BD (Buonafalce: a sixth). Chart entry: `dtc-under-99.693`.

| Fractions | Accuracy | Cost (circles, lines) | Extra |
|---|---|---|---|
| DE = 1/6 (original) | 99.693049864% | 6, 2 | |
| no variant with these denominators beats it | | | |

0 variants beat the original in all.

## Willich's quadrature (1855)

E as a fraction of the way from B to D (Willich: the midpoint). Chart entry: `stc-under-99.946`.

| Fractions | Accuracy | Cost (circles, lines) | Extra |
|---|---|---|---|
| E = 1/2 (original) | 99.946649847% | 0, 0 | |
| no variant with these denominators beats it | | | |

0 variants beat the original in all.

## Willich's quadrature: its two angles

The arc from A to B and the chord BD, in degrees, from the angles that can be drawn exactly (Willich: 90° and 60°). Chart entry: `stc-under-99.946`.

| Fractions | Accuracy | Cost (circles, lines) | Extra |
|---|---|---|---|
| arc AB = 90, chord BD = 60 (original) | 99.946649847% | 1, 1 | |
| no variant with these denominators beats it | | | |

0 variants beat the original in all.

## Kochański's rectification (1685)

How many radii are stepped along the tangent from C (Kochański: 3), and the angle of the line from O (Kochański: 30°). Chart entry: `rtc-under-99.998`.

| Fractions | Accuracy | Cost (circles, lines) | Extra |
|---|---|---|---|
| steps = 3, angle = 30 (original) | 99.998111949% | 5, 1 | |
| no variant with these denominators beats it | | | |

0 variants beat the original in all.

## Specht's rectification (1828)

AB and BC on the tangent at A, in radii (Specht: 11/5 and 2/5). Chart entry: `rtc-under-99.99997`.

| Fractions | Accuracy | Cost (circles, lines) | Extra |
|---|---|---|---|
| AB = 11/5, BC = 2/5 (original) | 99.999977704% | 10, 4 | |
| no variant with these denominators beats it | | | |

0 variants beat the original in all.

## de Gelder's 355/113 (1849)

CE and AF, in radii (de Gelder: 7/8 and 1/2), giving AH = AF² / (1 + CE²) beyond three radii. Chart entry: `rtc-over-99.999991`.

| Fractions | Accuracy | Cost (circles, lines) | Extra |
|---|---|---|---|
| CE = 7/8, AF = 1/2 (original) | 99.999991509% | 0, 0 | |
| no variant with these denominators beats it | | | |

0 variants beat the original in all.

## Buonafalce's third solution (1876)

BE as a fraction of AK, and CF as a fraction of the edge (Buonafalce: 1/2 and 1/4). Chart entry: `dtc-under-99.997`.

| Fractions | Accuracy | Cost (circles, lines) | Extra |
|---|---|---|---|
| BE = 1/2, CF = 1/4 (original) | 99.997229821% | 0, 0 | |
| BE = 3/7, CF = 11/12 | 99.999486321% | 19, 4 | +19, +4 |

1 variants beat the original in all.

## Dürer's trisection (1525)

How far X goes from K back towards D, and where D sits on the chord (Dürer: a third each). Scored at its worst from 30° to 150°, as charted. Chart entry: `taa-over-99.395`.

| Fractions | Accuracy | Cost (circles, lines) | Extra |
|---|---|---|---|
| X = 1/3, D = 1/3 (original) | 99.395788010% | 6, 4 | |
| no variant with these denominators beats it | | | |
| µ X = 21/64, D = 1/3 | 99.788562031% | 3, 2 | -3, -2 |

1 variants beat the original in all.

## Karajordanoff's trisection (1928)

The radius of the larger circle, in radii, and which point of the arc the chord from B goes to (Karajordanoff: 2, and the middle). Scored at its worst up to 90°, the rest bisected, as charted. Chart entry: `taa-under-99.838`.

| Fractions | Accuracy | Cost (circles, lines) | Extra |
|---|---|---|---|
| outer circle = 2, C on the arc = 1/2 (original) | 99.838644566% | 0, 1 | |
| no variant with these denominators beats it | | | |

0 variants beat the original in all.

## Schoeler's trisection (1902; d'Ocagne 1934)

How far behind the centre C is, in radii (Schoeler and d'Ocagne: a half). Scored at its worst up to 90°, the rest bisected, as charted. Chart entry: `taa-over-98.796`.

| Fractions | Accuracy | Cost (circles, lines) | Extra |
|---|---|---|---|
| OC = 1/2 (original) | 98.796021984% | 0, 0 | |
| no variant with these denominators beats it | | | |
| µ OC = 33/64 | 98.969208742% | 0, 0 | +0, +0 |

1 variants beat the original in all.

## Cusa's trisection, and Vahlen's (1911)

How many versines Snellius' point is moved in towards O (Cusa: none; Vahlen: 2/9). Scored at its worst up to 90°, the rest bisected, as charted. Chart entry: `taa-under-95.527`.

| Fractions | Accuracy | Cost (circles, lines) | Extra |
|---|---|---|---|
| shift = 0 (original) | 95.527186297% | 0, 0 | |
| shift = 1/4 | 99.660468370% | 0, 0 | +0, +0 |
| shift = 3/11 | 99.825630926% | 11, 2 | +11, +2 |
| µ shift = 17/64 | 99.889672059% | 0, 0 | +0, +0 |

49 variants beat the original in all.

## Ramanujan's 355/113 (1913)

Where H and T sit on the diameter (Ramanujan: OH = 1/2 towards P, OT = 2/3 towards R). Chart entry: `stc-over-99.999`.

| Fractions | Accuracy | Cost (circles, lines) | Extra |
|---|---|---|---|
| OH = 1/2, OT = 2/3 (original) | 99.999991509% | 3, 2 | |
| no variant with these denominators beats it | | | |

0 variants beat the original in all.

## Ramanujan's 1914 construction

AT, and the two steps CM and MN along CB, as fractions of the radius (Ramanujan: a third each). Chart entry: `rtc-under-99.99999`.

| Fractions | Accuracy | Cost (circles, lines) | Extra |
|---|---|---|---|
| AT = 1/3, CM = 1/3, MN = 1/3 (original) | 99.999999968% | 9, 6 | |
| no variant with these denominators beats it | | | |

0 variants beat the original in all.

## Cusa's trisection on half the angle

Cusa's trisection worked on half the angle and doubled, with Snellius' point moved in by `shift` versines (Cusa: none; Vahlen: 2/9; the charted variant: 1/4). Scored at its worst from 30° to 150°, as charted. Chart entry: `taa-over-99.971`.

| Fractions | Accuracy | Cost (circles, lines) | Extra |
|---|---|---|---|
| shift = 1/4 (original) | 99.971180002% | 0, 0 | |
| no variant with these denominators beats it | | | |

0 variants beat the original in all.

## Monti's trisection (1895)

DG along the parallel, in radii, and where M sits on BD (Monti: a half, and a sixth). Scored at its worst from 30° to 150°, as charted. Chart entry: `taa-under-99.748`.

| Fractions | Accuracy | Cost (circles, lines) | Extra |
|---|---|---|---|
| DG = 1/2, BM = 1/6 (original) | 99.748543621% | 6, 2 | |
| no variant with these denominators beats it | | | |
| µ DG = 1/2, BM = 5/32 | 99.917960728% | 0, 0 | -6, -2 |

1 variants beat the original in all.

## Hayden's quadrature (1871)

Where C sits along the top half side, and EG and DI as fractions of DE (Hayden: a half each). Chart entry: `stc-over-99.999998`.

| Fractions | Accuracy | Cost (circles, lines) | Extra |
|---|---|---|---|
| C = 1/2, EG = 1/2, DI = 1/2 (original) | 99.999998100% | 0, 0 | |
| no variant with these denominators beats it | | | |

0 variants beat the original in all.
