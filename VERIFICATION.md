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

## Log

Disputes and their outcomes are recorded on each entry in [pages/archive-data.js](pages/archive-data.js),
and shown on the website's chart and verification pages.
