# Maintaining the archive

How the archive and its website fit together, and how to do the everyday jobs. Everything runs from
the repository's root folder with Python 3 (and `pip install mpmath`); the browser checks also need
Node.js and Playwright (`npm install playwright@1.63.0` and `npx playwright install chromium`).

## How it fits together

- **The data** lives in one place, [pages/archive-data.js](pages/archive-data.js): every chart entry
  (its id, side, holder, method, circles and lines, chart figure, precise readout, files, notes,
  verifications, disputes and origin), the full names behind each holder, the wanted historical
  constructions, and the π files. It is plain JSON after `const ARCHIVE =`; the comment at its top
  describes every field.
- **The constructions** are the GeoGebra files in `Approximations/`, each with a `.md` of notes beside
  it, one folder for each problem.
- **The checker**, `tools/verify.py`, rebuilds every GeoGebra file with its own geometry, measures it,
  counts its circles and lines under the counting rules, and checks it against the chart. With
  `--write` it also writes what the website shows: `pages/ai-checks.js` (each entry's checks),
  `pages/crossref.js` (related entries, from `tools/crossref.py`), the drawings in `pages/drawings/`
  (from `tools/draw.py`), every construction's steps for the step-by-step player in `pages/steps/`
  (from `tools/steps.py`, with the angle methods rebuilt every 5° for its angle slider in
  `pages/steps/<problem>-angles.js`) and the maintainer's list in `VERIFICATION.md`.
- **The website** is static: `index.html` and `pages/`. Every page loads `pages/common.js` (shared
  helpers); the chart pages also load the data files and `pages/data.js` (ranks, statuses, the π
  chart worked out from the circle rectifications). The paper pages share `pages/paper.js`. The look
  is all in `pages/style.css`.
- **Submissions** come in as pull requests from the browser extension (`extension/`), into
  `Submissions/<folder>/`. `.github/workflows/evaluate-submission.yml` evaluates each one with
  `tools/evaluate_submission.py` and comments with the result.

## Everyday jobs

**After any change to a construction or the chart data:**

    python tools/verify.py --write

It ends with "N entries, 0 need attention". An entry already looked at and flagged on purpose
carries `known_issue` in the data (why, and what is being done): it is listed with `!~` but does not
fail the check.

**Adding a reviewed submission to the charts** (after merging its pull request):

    python tools/add_submission.py Submissions/<folder> --pr <number> --dry-run
    python tools/add_submission.py Submissions/<folder> --pr <number>
    python tools/verify.py --write

The first shows what it will do. The second moves the file into the problem's folder under the
archive's naming, fills in its notes, and adds the entry, with its origin recorded as a submission.
It refuses a construction that does not fit its problem, that the checker would measure differently,
or that duplicates an entry already charted. For the same construction found later, run it again with
`--rediscovery`: no new entry is made, and the submitter is added to that entry's `rediscovered` list.
For the same result by a different construction, `--allow-duplicate` charts it as an entry of its own.
Then delete the `Submissions/<folder>` once the entry is charted.

**Recording a verification:** add it to the entry's `verified` list in the data, with the verifier's
full name, how they checked it and the date. A verification by one of the full names listed for the
holder in `holders` counts as self-verification; anyone else's counts as independent.

**Changing a chart figure:** the chart figure (`acc`) is the precise readout truncated, never
rounded, to three decimal places, or more where needed so each side of the chart reads in order, up to ten
places at most (entries alike at ten places share the figure and the charts mark them ≈). When a new entry would
break the order, relabel the neighbour to more places (its id stays) rather than giving the new one a long label.
`python tools/add_submission.py --check-labels` checks every figure against the rule.
An exact tie (two constructions of the same number) keeps the same figure, and the id of the entry charted
second ends with its holder's name, as `rtc-over-99.851-lemoine-a` and `taa-over-98.796-baratto` do.
`tools/add_submission.py` chooses it that way for new entries.

**The architecture search:** see "Running it again" in [ARCHITECTURAL.md](ARCHITECTURAL.md). It runs
by itself when due (`.github/workflows/architecture.yml`) and opens a pull request with its results.

**Historical constructions:** drafts in progress are in [Wanted/](Wanted/README.md). One is charted
under its discoverer's name only after it has been checked against the original source.
Cite each source in the entry's evidence by its identifier ("Internet Archive, <id>", "JFM 12.0345.06", "Zbl 0012.34501",
"arXiv:1234.56789", a NUMDAM item) and run `python tools/source_links.py`: it writes the links into the data and the
notes. `python tools/source_links.py --check` (run by the verify workflow) fails if a historical entry has no link.

**When a source shows a charted construction was found earlier** (the same construction, not just the same
value: `python tools/crossref.py <file> <problem>` compares the steps), move the credit and keep the name.
Set the entry's `holder`, `date` and `origin` to the earliest author the source supports, add the earlier
holder to its `rediscovered` list, and say what happened in its `note`. Keep its `id` and `file`, so links
and the GeoGebra file stay where they were. Each `rediscovered` record is

    {"name": "A. N. Other", "date": "06-06-2024", "note": "charted under this name until the earlier source was found"}

with `name` and `date` required, and `note` for how they came to it. The charts list each as "possibly an independent rediscovery", since
independence can never be checked (SUBMISSION_RULESET.md, "Earlier discoveries").

**Variants of historical constructions:** `python tools/variants.py` keeps each historical skeleton
and tries other small fractions in it, writing what beats the original to [Variants/](Variants/README.md).
Nothing there is charted by itself: draw a promising variant in GeoGebra and add it like any other entry.

## Checks that run by themselves

| Workflow | When | What |
|---|---|---|
| `verify.yml` | changes to constructions, chart data or tools | `tools/verify.py`: every construction rebuilt and checked |
| `site-check.yml` | changes to the website or tools, and every push to main | `tools/site_check.js`: every page opened in a browser at desktop and phone width; script errors, links, images, every chart tab |
| `evaluate-submission.yml` | a submission pull request | evaluates it, comments, labels, and closes duplicates, floods and offensive wording |
| `architecture.yml` | chart data changes, and monthly | re-runs the architecture search when due, as a pull request |

Run the website check yourself with `node tools/site_check.js`; it lists anything it finds.

## Rules and records

- The rules for submissions: [SUBMISSION_RULESET.md](SUBMISSION_RULESET.md).
- The rules for verification and disputes: [VERIFICATION.md](VERIFICATION.md).
- How the problems are linked, the π chart and the derived squares: the problems page, "7. Causal Links".
- Every entry records where its point of origin can be traced (`origin` in the data): historical,
  the maintainer's own, found in the maintainer's sessions with Claude, or submitted.
