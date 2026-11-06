# Verification

How approximations in this archive are checked, who checks them, and how to ask for a check or dispute one.

The same rules, with the current registers and every check's result, are on the website:
https://thor110.github.io/ClassicalGeometryProblems/pages/verification.html

## What verifying means

To verify an entry is to reproduce it independently and confirm four things:

1. **Accuracy.** The construction gives the charted accuracy, worked out by the archive's rule
   `100 − |constructed − true| ÷ true × 100` and truncated (never rounded) to the places shown.
   Work from full-precision values. Values rounded for display can move the result by more than
   the last charted digit.
2. **Side.** It lands on the side the chart says: oversized or undersized.
3. **Tools.** Only straightedge and compass steps lead to the result: no typed lengths or angles,
   and no point placed by eye, apart from the given figure (for example "draw any circle").
4. **Steps.** The circles and lines match the chart under the counting rules in
   [SUBMISSION_RULESET.md](SUBMISSION_RULESET.md).

A verification is evidence that anyone can follow: a GeoGebra link, a file, or a written reproduction.

## People and AI are kept apart

Verifiers are listed in two separate registers, and every verification records which kind it is.
An AI check is never counted as a person, and the website always labels it as AI.

### People

| Name | Role | Since | How they verify |
|---|---|---|---|
| Edward James Gordon | Maintainer | 2024 | Rebuilds and measures each construction in GeoGebra. |

### AI

| Name | Role | Since | How it verifies |
|---|---|---|---|
| Claude (Anthropic) | Independent automated checker | November 2026 | Runs [tools/verify.py](tools/verify.py), which rebuilds every GeoGebra file from its given objects with its own geometry code, flags any step that is not straightedge and compass, and recomputes the accuracy. |

What the AI check can and cannot do:

- It checks the **GeoGebra file**, not drawings on paper, and not the step count (counting needs a person who knows the counting rules).
- It cannot judge who found a construction first, or whether a method is "too simple".
- It is reproducible: anyone can run `python tools/verify.py` and get the same result.
- An AI may raise a dispute, but it never resolves one. People decide.

## Joining a register

- **People:** verify any entry and post your reproduction in a [verification issue](https://github.com/Thor110/ClassicalGeometryProblems/issues/new?template=verification.yml).
  Once the maintainer has checked it, you are added to the register and credited on that entry.
  Verifying your own method counts as **self-verification** (see below).
- **AI systems:** open an issue naming the system, its maker and its method. The method must be
  reproducible by others. AI systems are listed by name and method, never as people.

## Status of an entry

| Status | Meaning |
|---|---|
| **Verified** | Reproduced by at least one verifier who is not its method holder: a person, an AI, or both. The chart shows which. |
| **Self-verified** | Checked only by its own method holder. |
| **Unverified** | Submitted, but not checked yet. |
| **Disputed** | A dispute is open. It is shown until the dispute is resolved. |

A verification by a person carries more weight than an AI check, and the chart says which kind each entry has.

## Requests

All requests are GitHub issues, using the forms provided:

- **[Submission](https://github.com/Thor110/ClassicalGeometryProblems/issues/new?template=submission.yml):** a new approximation.
- **[Verification](https://github.com/Thor110/ClassicalGeometryProblems/issues/new?template=verification.yml):** "I reproduced this entry", or "please check this entry".
- **[Dispute](https://github.com/Thor110/ClassicalGeometryProblems/issues/new?template=dispute.yml):** a challenge to an entry's figures or credit.

## Disputes

Anyone may dispute an entry, for one of these reasons:

- **Accuracy:** the charted figure does not reproduce.
- **Side:** it is on the wrong side of the chart.
- **Counting:** the circles or lines are wrong under the counting rules.
- **Tools:** a step is not straightedge and compass, or a point is placed by eye.
- **Credit:** someone else found it first. While this is open, the entry carries the ~ contested mark.
- **Duplicate:** it is the same construction as another entry.

How a dispute runs:

1. The dispute is opened with evidence: the reproduction, the values found, and how they were found.
2. The entry shows **Disputed** on the chart while the dispute is open.
3. Anyone may add a reproduction to the issue, for or against.
4. The maintainer decides, giving the reason in the issue. The outcome is recorded on the entry:
   - **Upheld:** the figures are corrected. An entry is only removed if it falls below the 95% minimum or is a duplicate.
   - **Rejected:** the entry stands as charted.
   - **Credit:** the discoverer is credited, and the ~ mark is removed once settled.
5. A decision can be reopened with new evidence.

Disputes are about constructions and numbers, never about people. Mockery or personal remarks get an issue closed. The [archive's promise](https://thor110.github.io/ClassicalGeometryProblems/pages/why-try.html) applies to every exchange.

## AI-assisted submissions

Method holders are people. If an AI helped find or refine a construction, say so in the
submission's notes. That keeps the record honest, and it is not held against the submission.

<!-- maintainer-list:start -->

## Waiting for the maintainer

Kept up to date by `python tools/verify.py --write` (last run 2026-11-06). Tick items off by fixing them; the next run rewrites this list.

### Not verified by a person yet (30)

Rebuild each in GeoGebra, confirm the accuracy and the circles and lines, then add yourself to its `verified` list in pages/archive-data.js.

- [ ] Squaring The Circle, oversized 99.109% · Circling the Square (additional) (stc-over-99.109): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.109.ggb`
- [ ] Squaring The Circle, oversized 99.119% · Circling the Square (additional) (stc-over-99.119): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.119.ggb`
- [ ] Squaring The Circle, oversized 99.283% · Circling the Square (additional) (stc-over-99.283): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.283.ggb`
- [ ] Squaring The Circle, oversized 99.558% · Circling the Square (additional) (stc-over-99.558): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.558.ggb`
- [ ] Squaring The Circle, oversized 99.696% · Circling the Square (additional) (stc-over-99.696): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.696.ggb`
- [ ] Squaring The Circle, oversized 99.809% · Circling the Square (additional) (stc-over-99.809): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.809.ggb`
- [ ] Squaring The Circle, undersized 99.932% · Circling the Square (additional) (stc-under-99.932): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Under/99.932.ggb`
- [ ] Squaring The Circle, undersized 99.655% · Circling the Square (additional) (stc-under-99.655): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Under/99.655.ggb`
- [ ] Squaring The Circle, undersized 99.253% · Circling the Square (additional) (stc-under-99.253)
- [ ] Squaring The Circle, undersized 99.150% · Circling the Square (additional) (stc-under-99.150): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Under/99.150.ggb`
- [ ] Squaring The Circle, undersized 99.015% · Circling the Square (additional) (stc-under-99.015): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Under/99.015.ggb`
- [ ] Squaring The Circle, oversized 99.99996% · Circling the Square (additional) (stc-over-99.99996): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.99996.ggb`, square q1
- [ ] Squaring The Circle, undersized 99.999% · Circling the Square (additional) (stc-under-99.999): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.99996.ggb`, square q2
- [ ] Squaring The Circle, oversized 99.993% · Circling the Square (additional) (stc-over-99.993): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.993.ggb`, square q8
- [ ] Squaring The Circle, oversized 99.944% · Circling the Square (additional) (stc-over-99.944): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.993.ggb`, square q7
- [ ] Squaring The Circle, undersized 99.956% · Circling the Square (additional) (stc-under-99.956): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.993.ggb`, square q6
- [ ] Squaring The Circle, oversized 99.844% · Circling the Square (additional) (stc-over-99.844): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.993.ggb`, square q5
- [ ] Squaring The Circle, undersized 99.758% · Circling the Square (additional) (stc-under-99.758): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.993.ggb`, square q4
- [ ] Squaring The Circle, undersized 98.968% · Circling the Square (additional) (stc-under-98.968): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.993.ggb`, square q3
- [ ] Squaring The Circle, oversized 99.862% · Circling the Square (additional) (stc-over-99.862): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.862.ggb`, square q4
- [ ] Squaring The Circle, undersized 99.484% · Circling the Square (additional) (stc-under-99.484): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.862.ggb`, square q3
- [ ] Squaring The Circle, undersized 98.168% · Circling the Square (additional) (stc-under-98.168): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.862.ggb`, square q2
- [ ] Squaring The Circle, undersized 99.377% · Circling the Square (additional) (stc-under-99.377): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Under/99.377.ggb`, square q4
- [ ] Squaring The Circle, oversized 99.414% · Circling the Square (additional) (stc-over-99.414): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Under/99.377.ggb`, square q3
- [ ] Squaring The Circle, oversized 96.977% · Circling the Square (additional) (stc-over-96.977): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Under/99.377.ggb`, square q2
- [ ] Squaring The Circle, undersized 98.177% · Circling the Square (additional) (stc-under-98.177): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Under/99.377.ggb`, square q1
- [ ] Trisecting An Angle, oversized ~99.317% · Array Casting v2.0 (taa-over-99.317): GeoGebra file `Approximations/02 Trisecting An Angle/GeoGebra Files/Over/TAA-~99.317.ggb`
- [ ] Doubling The Cube, undersized 97.656% · Cube 2 Tesseract v1.0 (dtc-under-97.656): GeoGebra file `Approximations/03 Doubling The Cube/GeoGebra Files/Under/DTC-97.656.ggb`
- [ ] Doubling The Cube, undersized 98.924% · Cube 2 Tesseract v2.0 (dtc-under-98.924): GeoGebra file `Approximations/03 Doubling The Cube/GeoGebra Files/Under/DTC-98.924.ggb`
- [ ] Rectifying The Circle, undersized 99.376% (rtc-under-99.376): GeoGebra file `Approximations/04 Rectifying The Circle/GeoGebra Files/Under/RTC-99.376.ggb`

### Flagged by the AI check (2)

Each needs a decision: correct the entry, or explain why the check does not apply.

- [ ] Trisecting An Angle, oversized ~99.317% · Array Casting v2.0 (taa-over-99.317): the result depends on freely placed point(s) beyond the given figure: D; the result depends on hand-placed point(s): A_1, F, Z
- [ ] Arc Rectification, oversized ~95% (ar-over-95): D' is made by rotating through an angle, which is not a compass step; the file does not record a measurement this script can match to the result; it needs checking by hand

### Missing GeoGebra files (1)

- [ ] Squaring The Circle, undersized 99.253% · Circling the Square (additional) (stc-under-99.253): no GeoGebra file in the repository (it is online: https://www.geogebra.org/geometry/anbgnhsq)

### Step counts to review (24)

Informational. The checker counts only the circles and lines the result is built from (a perpendicular bisector counts as one line; midpoints and intersections are not counted). Where your count is higher, the extra steps may be exploration that could be left out of the count, or the counting rules may differ.

- [ ] Squaring The Circle, oversized 99.109% · Circling the Square (additional) (stc-over-99.109): charted 1 circles, 20 lines; the result is built from 1 circles, 24 lines
- [ ] Squaring The Circle, oversized 99.119% · Circling the Square (additional) (stc-over-99.119): charted 21 circles, 7 lines; the result is built from 17 circles, 7 lines
- [ ] Squaring The Circle, oversized 99.356% · Circling the Square (additional) (stc-over-99.356): charted 13 circles, 17 lines; the result is built from 13 circles, 15 lines
- [ ] Squaring The Circle, oversized 99.558% · Circling the Square (additional) (stc-over-99.558): charted 13 circles, 25 lines; the result is built from 13 circles, 17 lines
- [ ] Squaring The Circle, oversized 99.696% · Circling the Square (additional) (stc-over-99.696): charted 25 circles, 8 lines; the result is built from 24 circles, 9 lines
- [ ] Squaring The Circle, oversized 99.809% · Circling the Square (additional) (stc-over-99.809): charted 13 circles, 37 lines; the result is built from 13 circles, 29 lines
- [ ] Squaring The Circle, oversized 99.999% · Ramanujan's Method (stc-over-99.999): charted 9 circles, 13 lines; the result is built from 9 circles, 15 lines
- [ ] Squaring The Circle, undersized 99.932% · Circling the Square (additional) (stc-under-99.932): charted 13 circles, 29 lines; the result is built from 13 circles, 21 lines
- [ ] Squaring The Circle, undersized 99.150% · Circling the Square (additional) (stc-under-99.150): charted 13 circles, 20 lines; the result is built from 13 circles, 16 lines
- [ ] Squaring The Circle, undersized 99.015% · Circling the Square (additional) (stc-under-99.015): charted 13 circles, 11 lines; the result is built from 13 circles, 7 lines
- [ ] Doubling The Cube, undersized 97.656% · Cube 2 Tesseract v1.0 (dtc-under-97.656): charted 13 circles, 30 lines; the result is built from 7 circles, 6 lines
- [ ] Doubling The Cube, undersized 98.924% · Cube 2 Tesseract v2.0 (dtc-under-98.924): charted 13 circles, 42 lines; the result is built from 13 circles, 20 lines
- [ ] Rectifying The Circle, oversized 98.538% (rtc-over-98.538): charted 6 circles, 7 lines; the result is built from 6 circles, 6 lines
- [ ] Rectifying The Circle, oversized 99.596% (rtc-over-99.596): charted 13 circles, 9 lines; the result is built from 12 circles, 6 lines
- [ ] Rectifying The Circle, oversized 99.607% (rtc-over-99.607): charted 9 circles, 4 lines; the result is built from 7 circles, 4 lines
- [ ] Rectifying The Circle, oversized 99.802% (rtc-over-99.802): charted 11 circles, 4 lines; the result is built from 10 circles, 4 lines
- [ ] Rectifying The Circle, oversized 99.806% · Euclidean Circumference Approximation (rtc-over-99.806): charted 1 circles, 10 lines; the result is built from 1 circles, 11 lines
- [ ] Rectifying The Circle, oversized 99.9986% (rtc-over-99.9986): charted 10 circles, 7 lines; the result is built from 10 circles, 6 lines
- [ ] Rectifying The Circle, oversized 99.9996% · Kochanski Gordon Crossover Method (rtc-over-99.9996): charted 12 circles, 10 lines; the result is built from 11 circles, 10 lines
- [ ] Rectifying The Circle, undersized 99.999% · Microscale Trisection (rtc-under-99.999): charted 9 circles, 13 lines; the result is built from 9 circles, 12 lines
- [ ] Rectifying The Circle, undersized 99.9874% (rtc-under-99.9874): charted 9 circles, 6 lines; the result is built from 9 circles, 7 lines
- [ ] Rectifying The Circle, undersized 99.376% (rtc-under-99.376): charted 8 circles, 4 lines; the result is built from 7 circles, 4 lines
- [ ] Rectifying The Circle, undersized 98.165% (rtc-under-98.165): charted 6 circles, 4 lines; the result is built from 6 circles, 5 lines
- [ ] Rectifying The Circle, oversized 99.979% (rtc-over-99.979): charted 6 circles, 8 lines; the result is built from 6 circles, 7 lines

<!-- maintainer-list:end -->

## Log

Disputes and their outcomes are recorded on each entry in [pages/archive-data.js](pages/archive-data.js),
and shown on the website's chart and verification pages.
