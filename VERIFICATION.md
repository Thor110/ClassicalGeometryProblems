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
| Claude (Anthropic) | Independent automated checker | November 2026 | Runs [tools/verify.py](tools/verify.py), which rebuilds every GeoGebra file from its given objects with its own geometry code (in 50-digit arithmetic for the precise readouts), flags any step that is not straightedge and compass, counts it, and recomputes the accuracy. Its rebuilds are cross-checked against GeoGebra itself with [tools/geogebra_check.js](tools/geogebra_check.js). |

What the AI check can and cannot do:

- It checks the **GeoGebra file**, not drawings on paper. It counts steps under the counting rules, but a person should confirm any count that matters.
- It cannot judge who found a construction first, or whether a method is "too simple".
- It is reproducible: anyone can run `python tools/verify.py` and get the same result.
- An AI may raise a dispute, but it never resolves one. People decide.

## Joining a register

- **People:** verify any entry and post your reproduction in a [verification issue](https://github.com/Thor110/ClassicalGeometryProblems/issues/new?template=verification.yml).
  Once the maintainer has checked it, you are added to the register and credited on that entry.
  Verifying your own method counts as **self-verification** (see below).
  Give your **full name**. A verification counts as self-verification only when it is by one of the
  people who hold the method, matched by full name (`holders` in `pages/archive-data.js` lists the
  full names behind each holder, such as Kochański and Gordon for the crossover methods), so someone
  who merely shares a surname with a holder is counted as independent. Someone listed on the entry as having
  also found the construction ("Also found by", see [Earlier discoveries](SUBMISSION_RULESET.md#earlier-discoveries))
  counts as self-verification too.
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

## AI-assisted submissions and AI method holders

If an AI helped find or refine a construction, say so in the submission's notes. That keeps the
record honest, and it is not held against the submission.

An AI system may also hold a method it found itself. It is listed under its name with an **AI**
label on the chart, kept apart from people as verifiers are, and its entries need a person's
verification like any other. An AI never verifies its own finds alone: its automated check is
recorded, but the entry stays self-verified until a person or another verifier reproduces it.

## New submissions

Pull requests that add a folder to `Submissions/` are evaluated automatically and labelled
(see [Submissions/README.md](Submissions/README.md)). For each one labelled **ready-for-review** or
**needs-manual-check**, the maintainer:

1. reads the evaluation comment, and opens the construction in GeoGebra;
2. for a needs-manual-check, settles what the check could not (the problem, a hand-placed point, a shallow crossing);
3. merges the pull request, then moves the files into the problem's folder under the archive's naming
   (`RTC-99.806.ggb` and its `.md`), adds the entry to `pages/archive-data.js` with
   `"origin": {"kind": "submitted", "evidence": ["pull request #N"]}`, and runs
   `python tools/verify.py --write`.

The AI check then verifies it like any other entry, and it waits in the list below for a person.

<!-- maintainer-list:start -->

## Waiting for the maintainer

Kept up to date by `python tools/verify.py --write` (last run 2026-11-07). Tick items off by fixing them; the next run rewrites this list.

### Not verified by a person yet (126)

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
- [ ] Squaring The Circle, oversized 99.922% · Search find: 6 circles, 4 lines (stc-over-99.922): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.922-Claude.ggb`
- [ ] Squaring The Circle, oversized 99.9998% · Search find: 6 circles, 5 lines (stc-over-99.9998): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.9998-Claude.ggb`
- [ ] Squaring The Circle, oversized 99.999999% · Search find: 9 circles, 6 lines (stc-over-99.999999): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.999999-Claude.ggb`
- [ ] Squaring The Circle, undersized 99.99998% · Search find: 8 circles, 4 lines (stc-under-99.99998): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Under/99.99998-Claude.ggb`
- [ ] Squaring The Circle, undersized 99.9999994% · Search find: 7 circles, 6 lines (stc-under-99.9999994): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Under/99.9999994-Claude.ggb`
- [ ] Squaring The Circle, oversized 99.99999157% · Search find: 8 circles, 4 lines (stc-over-99.99999157): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.99999157-Claude.ggb`
- [ ] Squaring The Circle, undersized 99.9999999% · Search find: 10 circles, 6 lines (stc-under-99.9999999): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Under/99.9999999-Claude.ggb`
- [ ] Squaring The Circle, oversized 99.998% · Hobson's construction (the square on GH) (stc-over-99.998): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.998-Hobson.ggb`, square q
- [ ] Squaring The Circle, oversized 99.999998% · Hayden's quadrature (stc-over-99.999998): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.999998-Hayden.ggb`, square q
- [ ] Squaring The Circle, oversized 99.398% · Eight ninths of the diameter (stc-over-99.398): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.398-Rhind-Papyrus.ggb`, square q
- [ ] Squaring The Circle, undersized 99.946% · Willich's quadrature (stc-under-99.946): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Under/99.946-Willich.ggb`, square q
- [ ] Squaring The Circle, undersized 99.9993% · Hobson's construction, OD = 1/3, OE = 11/8, OF = 6/5 (stc-under-99.9993): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Under/99.9993-Claude.ggb`, square q
- [ ] Squaring The Circle, oversized 99.9999999% · Chu's construction of Ramanujan's number (stc-over-99.9999999): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.9999999-Chu.ggb`, square q
- [ ] Squaring The Circle, oversized 99.886% · Anglin's first quadrature (stc-over-99.886): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.886-Anglin.ggb`, square q
- [ ] Squaring The Circle, undersized 99.318% · Anglin's second quadrature (stc-under-99.318): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Under/99.318-Anglin.ggb`
- [ ] Squaring The Circle, undersized 99.985% · Anglin's third quadrature (stc-under-99.985): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Under/99.985-Anglin.ggb`
- [ ] Squaring The Circle, oversized 99.977% · Mascheroni's quadrature with the compass alone (stc-over-99.977): GeoGebra file `Approximations/01 Squaring The Circle/GeoGebra Files/Squared Circle Over/99.977-Mascheroni.ggb`
- [ ] Trisecting An Angle, oversized ~99.317% · Array Casting v2.0 (taa-over-99.317): GeoGebra file `Approximations/02 Trisecting An Angle/GeoGebra Files/Over/TAA-~99.317.ggb`
- [ ] Trisecting An Angle, oversized 96.305% · Search find: 2 circles, 2 lines (any angle) (taa-over-96.305): GeoGebra file `Approximations/02 Trisecting An Angle/GeoGebra Files/Over/TAA-96.305-Claude.ggb`
- [ ] Trisecting An Angle, oversized 98.902% · Search find: 3 circles, 3 lines (any angle) (taa-over-98.902): GeoGebra file `Approximations/02 Trisecting An Angle/GeoGebra Files/Over/TAA-98.902-Claude.ggb`
- [ ] Trisecting An Angle, oversized 99.051% · Search find: 4 circles, 4 lines (any angle) (taa-over-99.051): GeoGebra file `Approximations/02 Trisecting An Angle/GeoGebra Files/Over/TAA-99.051-Claude.ggb`
- [ ] Trisecting An Angle, undersized 99.467% · Search find: 4 circles, 3 lines (any angle) (taa-under-99.467): GeoGebra file `Approximations/02 Trisecting An Angle/GeoGebra Files/Under/TAA-99.467-Claude.ggb`
- [ ] Trisecting An Angle, oversized 99.726% · Complicated Attempt (taa-over-99.726): GeoGebra file `Approximations/02 Trisecting An Angle/GeoGebra Files/Over/TAA-99.726.ggb`
- [ ] Trisecting An Angle, oversized 97.995% · Incorrect Proof (taa-over-97.995): GeoGebra file `Approximations/02 Trisecting An Angle/GeoGebra Files/Over/TAA-97.995.ggb`
- [ ] Trisecting An Angle, oversized 99.395% · Dürer's trisection (taa-over-99.395): GeoGebra file `Approximations/02 Trisecting An Angle/GeoGebra Files/Over/TAA-99.395-Durer.ggb`
- [ ] Trisecting An Angle, undersized 99.838% · Karajordanoff's trisection (taa-under-99.838): GeoGebra file `Approximations/02 Trisecting An Angle/GeoGebra Files/Under/TAA-99.838-Karajordanoff.ggb`
- [ ] Trisecting An Angle, oversized 98.796% · d'Ocagne's trisection (taa-over-98.796): GeoGebra file `Approximations/02 Trisecting An Angle/GeoGebra Files/Over/TAA-98.796-dOcagne.ggb`
- [ ] Trisecting An Angle, undersized 95.527% · Cusa's trisection (taa-under-95.527): GeoGebra file `Approximations/02 Trisecting An Angle/GeoGebra Files/Under/TAA-95.527-Cusa-Snellius.ggb`
- [ ] Trisecting An Angle, undersized 99.147% · Vahlen's trisection (taa-under-99.147): GeoGebra file `Approximations/02 Trisecting An Angle/GeoGebra Files/Under/TAA-99.147-Vahlen.ggb`
- [ ] Trisecting An Angle, undersized 99.660% · Cusa's trisection, a quarter versine (taa-under-99.660): GeoGebra file `Approximations/02 Trisecting An Angle/GeoGebra Files/Under/TAA-99.660-Claude.ggb`
- [ ] Trisecting An Angle, oversized 99.971% · Cusa's trisection, a quarter versine, on half the angle (taa-over-99.971): GeoGebra file `Approximations/02 Trisecting An Angle/GeoGebra Files/Over/TAA-99.971-Claude.ggb`
- [ ] Trisecting An Angle, undersized 99.742% · Vahlen's trisection, on half the angle (taa-under-99.742): GeoGebra file `Approximations/02 Trisecting An Angle/GeoGebra Files/Under/TAA-99.742-Claude.ggb`
- [ ] Trisecting An Angle, undersized 99.995% · Dürer's trisection, on half the angle (taa-under-99.995): GeoGebra file `Approximations/02 Trisecting An Angle/GeoGebra Files/Under/TAA-99.995-Claude.ggb`
- [ ] Trisecting An Angle, undersized 99.999% · Cusa's trisection, on the angle halved four times (taa-under-99.999): GeoGebra file `Approximations/02 Trisecting An Angle/GeoGebra Files/Under/TAA-99.999-Claude.ggb`
- [ ] Trisecting An Angle, undersized 99.697% · Dürer's trisection from one side (taa-under-99.697): GeoGebra file `Approximations/02 Trisecting An Angle/GeoGebra Files/Under/TAA-99.697-Claude.ggb`
- [ ] Trisecting An Angle, undersized 99.976% · Karajordanoff's trisection, on the angle halved three times (taa-under-99.976): GeoGebra file `Approximations/02 Trisecting An Angle/GeoGebra Files/Under/TAA-99.976-Claude.ggb`
- [ ] Trisecting An Angle, oversized 99.987% · d'Ocagne's trisection, on the angle halved four times (taa-over-99.987): GeoGebra file `Approximations/02 Trisecting An Angle/GeoGebra Files/Over/TAA-99.987-Claude.ggb`
- [ ] Trisecting An Angle, oversized 99.990% · Cusa's trisection, a quarter versine, on the angle halved twice (taa-over-99.990): GeoGebra file `Approximations/02 Trisecting An Angle/GeoGebra Files/Over/TAA-99.990-Claude.ggb`
- [ ] Trisecting An Angle, undersized 99.748% · Monti's trisection (taa-under-99.748): GeoGebra file `Approximations/02 Trisecting An Angle/GeoGebra Files/Under/TAA-99.748-Monti.ggb`
- [ ] Trisecting An Angle, undersized 99.990% · Monti's trisection, on the angle halved three times (taa-under-99.990): GeoGebra file `Approximations/02 Trisecting An Angle/GeoGebra Files/Under/TAA-99.990-Claude.ggb`
- [ ] Trisecting An Angle, oversized 99.177% · Cominotto's trisection (taa-over-99.177): GeoGebra file `Approximations/02 Trisecting An Angle/GeoGebra Files/Over/TAA-99.177-Cominotto.ggb`
- [ ] Trisecting An Angle, oversized 99.950% · Cominotto's trisection, on the angle halved twice (taa-over-99.950): GeoGebra file `Approximations/02 Trisecting An Angle/GeoGebra Files/Over/TAA-99.950-Claude.ggb`
- [ ] Doubling The Cube, undersized 97.656% · Cube 2 Tesseract v1.0 (dtc-under-97.656): GeoGebra file `Approximations/03 Doubling The Cube/GeoGebra Files/Under/DTC-97.656.ggb`
- [ ] Doubling The Cube, undersized 98.924% · Cube 2 Tesseract v2.0 (dtc-under-98.924): GeoGebra file `Approximations/03 Doubling The Cube/GeoGebra Files/Under/DTC-98.924.ggb`
- [ ] Doubling The Cube, oversized 98.076% · Three Minus Root Three (dtc-over-98.076): GeoGebra file `Approximations/03 Doubling The Cube/GeoGebra Files/Over/DTC-98.076.ggb`
- [ ] Doubling The Cube, oversized 99.919% · Search find: 4 circles (dtc-over-99.919): GeoGebra file `Approximations/03 Doubling The Cube/GeoGebra Files/Over/DTC-99.919-Claude.ggb`
- [ ] Doubling The Cube, oversized 99.9998% · Search find: 4 circles, 1 line (dtc-over-99.9998): GeoGebra file `Approximations/03 Doubling The Cube/GeoGebra Files/Over/DTC-99.9998-Claude.ggb`
- [ ] Doubling The Cube, undersized 99.99997% · Search find: 4 circles, 2 lines (dtc-under-99.999): GeoGebra file `Approximations/03 Doubling The Cube/GeoGebra Files/Under/DTC-99.999-Claude.ggb`
- [ ] Doubling The Cube, oversized 99.999982% · Search find: 5 circles, 2 lines (dtc-over-99.999982): GeoGebra file `Approximations/03 Doubling The Cube/GeoGebra Files/Over/DTC-99.999982-Claude.ggb`
- [ ] Doubling The Cube, oversized 99.999989% · Search find: 5 circles, 3 lines (dtc-over-99.999989): GeoGebra file `Approximations/03 Doubling The Cube/GeoGebra Files/Over/DTC-99.999989-Claude.ggb`
- [ ] Doubling The Cube, oversized 99.999992% · Search find: 6 circles, 1 lines (dtc-over-99.999992): GeoGebra file `Approximations/03 Doubling The Cube/GeoGebra Files/Over/DTC-99.999992-Claude.ggb`
- [ ] Doubling The Cube, oversized 99.999998% · Search find: 7 circles, 2 lines (dtc-over-99.999998): GeoGebra file `Approximations/03 Doubling The Cube/GeoGebra Files/Over/DTC-99.999998-Claude.ggb`
- [ ] Doubling The Cube, undersized 99.214% · One Fifth Of The Circle (dtc-under-99.214): GeoGebra file `Approximations/03 Doubling The Cube/GeoGebra Files/Under/DTC-99.214-Kochanski-Gordon.ggb`
- [ ] Doubling The Cube, undersized 99.989% · Hayden's duplication (dtc-under-99.989): GeoGebra file `Approximations/03 Doubling The Cube/GeoGebra Files/Under/DTC-99.989-Hayden.ggb`
- [ ] Doubling The Cube, undersized 99.847% · Mascheroni's duplication (first solution) (dtc-under-99.847): GeoGebra file `Approximations/03 Doubling The Cube/GeoGebra Files/Under/DTC-99.847-Mascheroni.ggb`
- [ ] Doubling The Cube, undersized 99.9995% · Mascheroni's duplication (second solution) (dtc-under-99.9995): GeoGebra file `Approximations/03 Doubling The Cube/GeoGebra Files/Under/DTC-99.9995-Mascheroni.ggb`
- [ ] Doubling The Cube, undersized 99.693% · Buonafalce's first solution (dtc-under-99.693): GeoGebra file `Approximations/03 Doubling The Cube/GeoGebra Files/Under/DTC-99.693-Buonafalce.ggb`
- [ ] Doubling The Cube, undersized 99.997% · Buonafalce's third solution (dtc-under-99.997): GeoGebra file `Approximations/03 Doubling The Cube/GeoGebra Files/Under/DTC-99.997-Buonafalce.ggb`
- [ ] Doubling The Cube, undersized 99.729% · Vargiù's mean proportionals (dtc-under-99.729): GeoGebra file `Approximations/03 Doubling The Cube/GeoGebra Files/Under/DTC-99.729-Vargiu.ggb`
- [ ] Doubling The Cube, oversized 99.972% · Boccali's duplication (dtc-over-99.972): GeoGebra file `Approximations/03 Doubling The Cube/GeoGebra Files/Over/DTC-99.972-Boccali.ggb`
- [ ] Doubling The Cube, undersized 99.9976% · Vahlen's external division (dtc-under-99.9976): GeoGebra file `Approximations/03 Doubling The Cube/GeoGebra Files/Under/DTC-99.9976-Vahlen.ggb`
- [ ] Doubling The Cube, undersized 97.65625% · Stifel's circle on Plato's figure (dtc-under-97.65625): GeoGebra file `Approximations/03 Doubling The Cube/GeoGebra Files/Under/DTC-97.65625-Stifel.ggb`
- [ ] Rectifying The Circle, undersized 99.376% (rtc-under-99.376): GeoGebra file `Approximations/04 Rectifying The Circle/GeoGebra Files/Under/RTC-99.376.ggb`
- [ ] Rectifying The Circle, undersized 99.9999999% · Ramanujan's 1914 construction (rtc-under-99.99999): GeoGebra file `Approximations/04 Rectifying The Circle/GeoGebra Files/Under/RTC-99.99999-Ramanujan-1914.ggb`
- [ ] Rectifying The Circle, oversized 99.999996% · Kochanski Gordon Crossover (3/7) (rtc-over-99.99999): GeoGebra file `Approximations/04 Rectifying The Circle/GeoGebra Files/Over/RTC-99.99999-Kochanski-Gordon-3-7.ggb`
- [ ] Rectifying The Circle, oversized 99.992% · Search find: 4 circles, 1 lines (half the circumference) (rtc-over-99.992): GeoGebra file `Approximations/04 Rectifying The Circle/GeoGebra Files/Over/RTC-99.992-Claude.ggb`
- [ ] Rectifying The Circle, oversized 99.999999% · Search find: 5 circles, 2 lines (rtc-over-99.999999): GeoGebra file `Approximations/04 Rectifying The Circle/GeoGebra Files/Over/RTC-99.999999-Claude.ggb`
- [ ] Rectifying The Circle, undersized 99.99994% · Search find: 5 circles, 1 lines (rtc-under-99.99994): GeoGebra file `Approximations/04 Rectifying The Circle/GeoGebra Files/Under/RTC-99.99994-Claude.ggb`
- [ ] Rectifying The Circle, undersized 99.999992% · Search find: 6 circles, 2 lines (half the circumference) (rtc-under-99.999992): GeoGebra file `Approximations/04 Rectifying The Circle/GeoGebra Files/Under/RTC-99.999992-Claude.ggb`
- [ ] Rectifying The Circle, undersized 99.999998% · Search find: 5 circles, 4 lines (rtc-under-99.999998): GeoGebra file `Approximations/04 Rectifying The Circle/GeoGebra Files/Under/RTC-99.999998-Claude.ggb`
- [ ] Rectifying The Circle, undersized 99.9999990% · Search find: 7 circles, 4 lines (half the circumference) (rtc-under-99.9999990): GeoGebra file `Approximations/04 Rectifying The Circle/GeoGebra Files/Under/RTC-99.9999990-Claude.ggb`
- [ ] Rectifying The Circle, undersized 99.9999998% · Search find: 8 circles, 4 lines (half the circumference) (rtc-under-99.9999998): GeoGebra file `Approximations/04 Rectifying The Circle/GeoGebra Files/Under/RTC-99.9999998-Claude.ggb`
- [ ] Rectifying The Circle, undersized 99.999997% · Search find: 6 circles, 2 lines (half the circumference) (rtc-under-99.999997): GeoGebra file `Approximations/04 Rectifying The Circle/GeoGebra Files/Under/RTC-99.999997-Claude.ggb`
- [ ] Rectifying The Circle, oversized 99.999991% · De Gelder's construction of 355/113 (rtc-over-99.999991): GeoGebra file `Approximations/04 Rectifying The Circle/GeoGebra Files/Over/RTC-99.999991-de-Gelder.ggb`
- [ ] Rectifying The Circle, undersized 99.99997% · Specht's construction (rtc-under-99.99997): GeoGebra file `Approximations/04 Rectifying The Circle/GeoGebra Files/Under/RTC-99.99997-Specht.ggb`
- [ ] Rectifying The Circle, oversized 99.998% · Kunze's triangle (rtc-over-99.998): GeoGebra file `Approximations/04 Rectifying The Circle/GeoGebra Files/Over/RTC-99.998-Kunze.ggb`
- [ ] Rectifying The Circle, undersized 99.826% · Cusa's triangle (rtc-under-99.826): GeoGebra file `Approximations/04 Rectifying The Circle/GeoGebra Files/Under/RTC-99.826-Cusa.ggb`
- [ ] Rectifying The Circle, undersized 99.999996% · Pioche's rectification (rtc-under-99.999996): GeoGebra file `Approximations/04 Rectifying The Circle/GeoGebra Files/Under/RTC-99.999996-Pioche.ggb`
- [ ] Rectifying The Circle, oversized 99.974% · Mascheroni's quarter of the circle (rtc-over-99.974): GeoGebra file `Approximations/04 Rectifying The Circle/GeoGebra Files/Over/RTC-99.974-Mascheroni.ggb`
- [ ] Rectifying The Circle, undersized 99.9999995% · Specht's second construction (rtc-under-99.9999995): GeoGebra file `Approximations/04 Rectifying The Circle/GeoGebra Files/Under/RTC-99.9999995-Specht.ggb`
- [ ] Rectifying The Circle, oversized 99.851% · d'Ocagne's √2 + √3 (after Bioche) (rtc-over-99.851): GeoGebra file `Approximations/04 Rectifying The Circle/GeoGebra Files/Over/RTC-99.851-dOcagne.ggb`
- [ ] Rectifying The Circle, undersized 99.994% · Pleskot's rectification (rtc-under-99.994): GeoGebra file `Approximations/04 Rectifying The Circle/GeoGebra Files/Under/RTC-99.994-Pleskot.ggb`
- [ ] Rectifying The Circle, oversized 99.904% · The cosine equal to its tangent (rtc-over-99.904): GeoGebra file `Approximations/04 Rectifying The Circle/GeoGebra Files/Over/RTC-99.904-Crelle.ggb`
- [ ] Rectifying The Circle, undersized 99.9997% · Vahlen's external division for π (rtc-under-99.9997): GeoGebra file `Approximations/04 Rectifying The Circle/GeoGebra Files/Under/RTC-99.9997-Vahlen.ggb`
- [ ] Arc Rectification, oversized 97.537% · Tangent Path (ar-over-97.537): GeoGebra file `Approximations/05 Arc Rectification/GeoGebra Files/Arc Rectification Over/AR-97.537.ggb`
- [ ] Arc Rectification, oversized 96.640% · Search find: 3 circles, 0 lines (any arc) (ar-over-96.640): GeoGebra file `Approximations/05 Arc Rectification/GeoGebra Files/Arc Rectification Over/AR-96.640-Claude.ggb`
- [ ] Arc Rectification, oversized 98.689% · Search find: 4 circles, 0 lines (any arc) (ar-over-98.689): GeoGebra file `Approximations/05 Arc Rectification/GeoGebra Files/Arc Rectification Over/AR-98.689-Claude.ggb`
- [ ] Arc Rectification, oversized 99.751% · Search find: 4 circles, 1 lines (any arc) (ar-over-99.751): GeoGebra file `Approximations/05 Arc Rectification/GeoGebra Files/Arc Rectification Over/AR-99.751-Claude.ggb`
- [ ] Arc Rectification, undersized 95.492% · Cusa's rectification (ar-under-95.492): GeoGebra file `Approximations/05 Arc Rectification/GeoGebra Files/Arc Rectification Under/AR-95.492-Cusa-Snellius.ggb`
- [ ] Arc Rectification, undersized 99.029% · Lambert's rectification (ar-under-99.029): GeoGebra file `Approximations/05 Arc Rectification/GeoGebra Files/Arc Rectification Under/AR-99.029-Lambert.ggb`
- [ ] Arc Rectification, oversized 99.831% · Lambert's rectification, a quarter versine (ar-over-99.831): GeoGebra file `Approximations/05 Arc Rectification/GeoGebra Files/Arc Rectification Over/AR-99.831-Claude.ggb`
- [ ] Arc Rectification, oversized 99.832% · Lambert's rectification, a quarter versine, on the arc halved once (ar-over-99.832): GeoGebra file `Approximations/05 Arc Rectification/GeoGebra Files/Arc Rectification Over/AR-99.832-Claude.ggb`
- [ ] Arc Rectification, undersized 99.704% · Lambert's rectification, on the arc halved once (ar-under-99.704): GeoGebra file `Approximations/05 Arc Rectification/GeoGebra Files/Arc Rectification Under/AR-99.704-Claude.ggb`
- [ ] Arc Rectification, undersized 99.99997% · Cusa's rectification, on the arc halved five times (ar-under-99.999): GeoGebra file `Approximations/05 Arc Rectification/GeoGebra Files/Arc Rectification Under/AR-99.999-Claude.ggb`
- [ ] Arc Rectification, oversized 99.097% · Fontana's rectification (ar-over-99.097): GeoGebra file `Approximations/05 Arc Rectification/GeoGebra Files/Arc Rectification Over/AR-99.097-Fontana.ggb`
- [ ] Arc Rectification, undersized 95.243% · Rankine's first rectification (ar-under-95.243): GeoGebra file `Approximations/05 Arc Rectification/GeoGebra Files/Arc Rectification Under/AR-95.243-Rankine.ggb`
- [ ] Arc Rectification, oversized 98.685% · Rankine's second rectification (ar-over-98.685): GeoGebra file `Approximations/05 Arc Rectification/GeoGebra Files/Arc Rectification Over/AR-98.685-Rankine.ggb`
- [ ] Arc Rectification, oversized 99.899% · Rankine's two rectifications combined (ar-over-99.899): GeoGebra file `Approximations/05 Arc Rectification/GeoGebra Files/Arc Rectification Over/AR-99.899-Rankine.ggb`
- [ ] Arc Rectification, undersized 99.99993% · Rankine's first rectification, on the arc halved four times (ar-under-99.99993): GeoGebra file `Approximations/05 Arc Rectification/GeoGebra Files/Arc Rectification Under/AR-99.99993-Claude.ggb`
- [ ] Arc Rectification, oversized 99.999% · Rankine's second rectification, on the arc halved four times (ar-over-99.999): GeoGebra file `Approximations/05 Arc Rectification/GeoGebra Files/Arc Rectification Over/AR-99.999-Claude.ggb`
- [ ] Arc Rectification, oversized 99.9999% · Rankine's two rectifications combined, on the arc halved four times (ar-over-99.9999): GeoGebra file `Approximations/05 Arc Rectification/GeoGebra Files/Arc Rectification Over/AR-99.9999-Claude.ggb`

### Flagged by the AI check (1)

Each needs a decision: correct the entry, or explain why the check does not apply.

- [ ] Trisecting An Angle, oversized ~99.317% · Array Casting v2.0 (taa-over-99.317): shallowest crossing the result depends on: 30.0°; A_1, Z are placed freely, but only sets the size: sliding it along its line or circle leaves the accuracy unchanged; the result depends on freely placed point(s) beyond the given figure: D; the result depends on hand-placed point(s): F; swept across angles: 95% or better from 24° to 47° (as drawn, 39.3° in the file)

### Identical or near-identical entries (4)

From tools/crossref.py. Decide whether each pair is a duplicate (dispute it), a credit question, or two genuinely different entries.

- [ ] identical: taa-over-98.796 and taa-over-96.305 (score 1.00)
- [ ] same result: dtc-under-97.65625 and dtc-under-97.656 (score 0.08)
- [ ] near identical: rtc-over-99.971 and rtc-under-99.9875 (score 0.85)
- [ ] near identical: rtc-over-99.9987 and rtc-under-99.9875 (score 0.70)

### µ marks to review (2)

The micro scale test (a step under 5% of the given size) disagrees with the chart. Add or remove the mark, or for a mark made by hand, describe the adjustment in the entry's micro_note.

- [ ] Rectifying The Circle, oversized 99.607% (rtc-over-99.607): the test finds its smallest step at 6.3% of the given size; the chart has µ
- [ ] Rectifying The Circle, oversized 99.873% (rtc-over-99.873): the test finds its smallest step at 50.0% of the given size; the chart has µ

<!-- maintainer-list:end -->

## Cross-reference

[tools/crossref.py](tools/crossref.py) compares every entry with every other entry of its problem, in two
independent ways: whether they produce the same result (to 12 significant digits), and how much of
their constructions they share. A construction's fingerprint is every distance between the points
its result depends on, and every circle's radius, scaled to the given figure, so the same
construction is found however it was drawn: moved, turned, mirrored or resized. Angle methods are
also compared by their accuracy across a sweep of angles.

Relations it reports: **identical**, **same result**, **near identical**, **builds on** (one
construction lies whole inside another), **shares most steps**, and **same file**. Identical,
same-result and near-identical pairs go on the maintainer's list above.

To check a new submission against the archive before adding it:

    python tools/crossref.py path/to/new.ggb stc

## Log

Disputes and their outcomes are recorded on each entry in [pages/archive-data.js](pages/archive-data.js),
and shown on the website's chart and verification pages.
