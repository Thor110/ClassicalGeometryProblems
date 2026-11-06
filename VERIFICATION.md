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

### Not verified by a person yet (33)

Rebuild each in GeoGebra, confirm the accuracy and the circles and lines, then add yourself to its `verified` list in pages/archive-data.js.

- [ ] Squaring The Circle, oversized 99.109% · Circling the Square (additional) (stc-over-99.109): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.109.ggb`
- [ ] Squaring The Circle, oversized 99.119% · Circling the Square (additional) (stc-over-99.119): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.119.ggb`
- [ ] Squaring The Circle, oversized 99.283% · Circling the Square (additional) (stc-over-99.283): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.283.ggb`
- [ ] Squaring The Circle, oversized 99.558% · Circling the Square (additional) (stc-over-99.558): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.558.ggb`
- [ ] Squaring The Circle, oversized 99.696% · Circling the Square (additional) (stc-over-99.696): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.696.ggb`
- [ ] Squaring The Circle, oversized 99.809% · Circling the Square (additional) (stc-over-99.809): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.809.ggb`
- [ ] Squaring The Circle, undersized 99.932% · Circling the Square (additional) (stc-under-99.932): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Under/99.932.ggb`
- [ ] Squaring The Circle, undersized 99.655% · Circling the Square (additional) (stc-under-99.655): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Under/99.655.ggb`
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
- [ ] Doubling The Cube, oversized 98.076% · Three Minus Root Three (dtc-over-98.076): GeoGebra file `Approximations/03 Doubling The Cube/GeoGebra Files/Over/DTC-98.076.ggb`
- [ ] Rectifying The Circle, undersized 99.376% (rtc-under-99.376): GeoGebra file `Approximations/04 Rectifying The Circle/GeoGebra Files/Under/RTC-99.376.ggb`
- [ ] Rectifying The Circle, undersized 99.99999% · Ramanujan's 1914 construction (rtc-under-99.99999): GeoGebra file `Approximations/04 Rectifying The Circle/GeoGebra Files/Under/RTC-99.99999-Ramanujan-1914.ggb`
- [ ] Rectifying The Circle, oversized 99.99999% · Kochanski Gordon Crossover (3/7) (rtc-over-99.99999): GeoGebra file `Approximations/04 Rectifying The Circle/GeoGebra Files/Over/RTC-99.99999-Kochanski-Gordon-3-7.ggb`
- [ ] Arc Rectification, oversized 97.537% · Tangent Path (ar-over-97.537): GeoGebra file `Approximations/05 Arc Rectification/GeoGebra Files/Arc Rectification Over/AR-97.537.ggb`

### Flagged by the AI check (1)

Each needs a decision: correct the entry, or explain why the check does not apply.

- [ ] Trisecting An Angle, oversized ~99.317% · Array Casting v2.0 (taa-over-99.317): the result depends on freely placed point(s) beyond the given figure: D; the result depends on hand-placed point(s): A_1, F, Z; swept across angles: 95% or better from 24° to 47° (as drawn, 39.3° in the file)

### µ marks to review (2)

The micro scale test (a step under 5% of the given size) disagrees with the chart. Add or remove the mark, or for a mark made by hand, describe the adjustment in the entry's micro_note.

- [ ] Rectifying The Circle, oversized 99.607% (rtc-over-99.607): the test finds its smallest step at 6.3% of the given size; the chart has µ
- [ ] Rectifying The Circle, oversized 99.873% (rtc-over-99.873): the test finds its smallest step at 50.0% of the given size; the chart has µ

<!-- maintainer-list:end -->

## Log

Disputes and their outcomes are recorded on each entry in [pages/archive-data.js](pages/archive-data.js),
and shown on the website's chart and verification pages.
