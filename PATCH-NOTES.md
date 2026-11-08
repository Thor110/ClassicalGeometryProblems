# Patch Notes

Changes to the Classical Geometry Problems site, newest first. These notes are mainly about the site itself:
its pages, charts, tools and checks. Each release also lists, in brief, how the archive of approximations
changed. The full record of every entry, with its sources, is in [pages/archive-data.js](pages/archive-data.js), each
entry's notes file, and [Wanted/README.md](Wanted/README.md).

The counting rules have their own version history, under "Changes" in [SUBMISSION_RULESET.md](SUBMISSION_RULESET.md).

**When you add a release:** put it at the top, under a heading with the date and a short title. Write
**Site** for changes to pages, charts and tools, and **Archive** for entries added, removed or re-credited.

---

## November 2026: Falcó, Brugmann, Bendeler, Krafft

### Archive
- Added Thomas Brugmann's rectangle ("Gephyrander", 1608), 99.045% over, squared with Euclid's mean proportional.
- Read and set aside, with the reasons on the Wanted list: Falcó (1587), whose squaring rests on equalities he
  assumes; Merkel and Leistner (refuted by Krafft, 1751), numbers only; and "Herr Cantor" (refuted by Bendeler,
  1701), π = 3⅛, Dürer's value.
- 206 entries, 69 authors.

## November 2026: Buteo's survey

### Archive
- Went through Jean Buteo's *De quadratura circuli* (1559), which quotes and refutes the squarings before his time
  (MDZ and the Internet Archive). Added three of them:
  - Oronce Finé's first squaring (1532), 97.943% under;
  - Cusa's fourth squaring (from Regiomontanus), 99.933% under;
  - Bouvelles' line made into a quadrant (1542), 99.772% under, drawn on the given circle and scaled back.
- Re-credited: the circle through the quarter points of the square's sides moves from Bouvelles (1542) to Joachim
  Fortius Ringelbergh (by 1531), from his *Chaos mathematicum*; Buteo says Bouvelles took it from him. Ringelbergh is
  also listed under "Also found by" on Dürer's 3⅛ squaring.
- Not chartable, now explained on the Wanted list: Finé's second squaring and Longomontanus' value (the first needs a
  mechanical device, the second is computed, not drawn); Cusa's second, third and fifth squarings; Campanus (78.6%);
  and the Arabs' √10, which is already charted.
- 205 entries, 68 authors.

## November 2026: Wanted list, first editions

### Site
- `tools/source_links.py` links sources in the Munich Digitization Centre (MDZ): cite them as "MDZ, bsb12345678".

### Archive
- Kunze's triangle is dated 1842, from the first edition of his textbook, found on MDZ. That is earlier than Busch
  (1846), who now appears under "Also found by". Kunze's full name is Carl Ludwig Albrecht Kunze (1805–1890).
- The squaring charted as Hobson's (1913) is Kunze's too, from the same appendix of 1842. The credit moves to Kunze,
  with Hobson under "Also found by".
- De Gelder's construction of 355/113 is dated "before 1842": Kunze gives it in 1842, before the 1849 printing the
  archive had cited.
- Bouvelles' shorter squaring and his circle through the quarter points are dated 1542, from his first French
  edition. The 3⅛ squaring and Barbel's quadrant are not in that edition, so Dürer (1525) keeps the credit for 3⅛.
- Added Ludolph van Ceulen's "hidden point" (1596), in fourths and in sixths, from *Van den Circkel* on MDZ.
- Three rows closed on the Wanted list: Busch against Kunze, Bouvelles against Dürer, and Ludolph's chapter 12.
- 202 entries, 66 authors.

## November 2026: Authors page

### Site
- **New page: Authors** ([pages/authors.html](pages/authors.html)). It has one card for each of the 65 people credited on the charts:
  - who they were and what they contributed to mathematics, or what little is known of them;
  - the entries credited to them, linked to their place on the charts, and those they found after an earlier author;
  - links to MacTutor and Wikipedia biographies.
  - Cards are in order of each author's earliest entry. The page has search and filters (historical, living, AI), and shared credits say who they are shared with.
- **Notable Authors**, a new section on the home page under "Trying Is Not Foolish": Dürer, Viète, Huygens, Kochański,
  Lambert and Ramanujan.
- The page builds itself from the data. `tools/authors.py` checks that every credited name has a card, and the verify
  workflow runs it; `--links` also opens every biography link.
- Authors link added to the home page and the charts.

## November 2026: Renaissance and early modern constructions

### Site
- Footer updated across the site.
- `tools/source_links.py` knows six more sources: Bouvelles, Dürer (Peltzer's edition), Cantor, Uffenbach,
  Montucla and Viète.

### Archive
- Added Nicholas of Cusa's arcuated triangle (about 1450), π = 3.142337, from Cantor's account of his treatise for
  Toscanelli.
- Added Albrecht Dürer's squaring (1525), π = 3⅛. Bouvelles gives the same figure and is listed under
  "Also found by".
- Added four constructions from Charles de Bouvelles' *Géométrie pratique*, including his wheel (π = √10), and
  Achaire Barbel's quadrant, which he reports.
- Added Olivier de Serres' square (1600), π = 3. It ties with Circling the Square v1, by other steps.
- Added two constructions from Philipp Uffenbach's *De quadratura circuli mechanici* (1619/1653), π = 2 + 2/√3.
- 200 entries.

## November 2026: source links

### Site
- **Sources on every entry.** Each entry's details on the charts now have a **Sources** line, with links to the books,
  papers and reviews the construction was taken from: Internet Archive scans, Jahrbuch and Zentralblatt reviews on
  zbMATH Open, arXiv, and NUMDAM. Each entry's notes file ends with the same links.
- New tool `tools/source_links.py`, which writes the links from each entry's evidence. With `--check` it fails if a
  historical entry has no link; the verify workflow now runs it.
- [Wanted/README.md](Wanted/README.md) links every source it names.
- MAINTAINING.md explains how to cite a source so the link is made automatically.

### Archive
- Added Christiaan Huygens (1654): two circle rectifications and an arc rectification, from *De circuli magnitudine
  inventa* (Rudio's German translation, 1892).
- Added François Viète (1593): a quadrant rectification and a squaring, both π ≈ 1.2φ², from his *Opera* (1646).
  They tie with Kunze and Hobson, whose constructions give the same number.
- Re-credited: "three diameters and a fifth of the square's side" (rtc-under-99.9945) moved from Busch (1868) to
  Huygens (1654), who gave the same construction first. Busch is listed under "Also found by".
- 191 entries.

## November 2026: Open Slots page

### Site
- **New page: Open Slots** ([pages/slots.html](pages/slots.html)), linked from the home page and the charts.
  - A table for each chart: slots per side under the base and extended rulesets, how many are filled (over / under),
    how many cannot be filled, and how many are still open.
  - **Ways to draw:** an upper bound on how many different constructions fit within the step limits. The formula
    is shown on the page.
  - Two grids side by side (circles across, lines down), one per side, shaded by accuracy. The frontier is outlined,
    and a corner mark shows slots with more than one entry.
  - Open slots are hidden by default and can be shown with a toggle. Stripes mark the first slot at each budget, a dot
    marks slots where a cheaper entry is already beaten, and a cross marks slots that can never be filled.
  - A key explains why some slots that look easy are hard, or impossible.
  - Hovering over a slot shows what is in it; clicking a filled slot opens that entry on the charts.
- Each chart has a short Open Slots box that links to its grid.

### Archive
- 186 entries.

## November 2026: precision limits

### Site
- Chart figures are capped at **ten decimal places**. Entries that are still alike at ten places are marked `≈`, and
  the full readout shows on hover.
- New **Error** column on the charts: the gap from perfection, for example 1.1 × 10⁻¹⁰.
- Entries are ordered by their exact readouts, and exact ties are ordered by fewer circles and lines.
- `tools/add_submission.py --check-labels` checks that every chart label follows the label rule. The verify workflow
  runs it.
- The ruleset (version 1.6) explains the limits on precision.

### Archive
- Many historical constructions added from the Jahrbuch über die Fortschritte der Mathematik and the
  Zentralblatt (zbMATH Open): Baratto, Stoyanoff, d'Ocagne, Burmester, Strempel, Peirce, Bojko, Heiseler, Lampe,
  Dmitrovskij, Blasendorff, Busch, Kummell, van der Corput and Mooij, Visser, Sauerbeck, Gregori, Storchi, Hagge and
  others.
- The trisection charted as d'Ocagne's was re-credited to H. Schoeler (1902).
- 176 entries.

## November 2026: earlier discoveries and variants

### Site
- **Earlier discoveries:** credit goes to the earliest known author. Later finders are shown on the entry as
  "Also found by". Ruleset version 1.5.
- New [Variants](Variants/README.md) list, with `tools/variants.py`, for small changes to historical methods.
- New OUTREACH.md.
- The charts show a step count for each construction: how many of its playthrough steps lead to the result.

### Archive
- Many historical variants and approximations added: 117 entries, then 153.

## November 2026: step-by-step constructions

### Site
- **New page: Step By Step Constructions** ([pages/constructions.html](pages/constructions.html)). It plays any
  construction one step at a time, with:
  - a speed control, a step slider, and highlighting of the current step;
  - zoom in, zoom out and fit;
  - search, and ↑ / ↓ to move between entries;
  - for angle methods, rebuilding the construction at another angle.
- A ▶ steps link on every chart entry opens its playthrough.
- Construction previews on the charts and papers pages.
- `tools/steps.py` writes the steps for every construction.

### Archive
- 105 entries, then 113.

## November 2026: chart features and site checks

### Site
- Charts:
  - search by name, method or accuracy;
  - links to individual entries;
  - comparing pinned entries;
  - an accuracy ladder you can step through with the arrow keys;
  - a layout for phones.
- Shared code moved into `pages/common.js` and `pages/paper.js`.
- **Site check:** `tools/site_check.js` opens every page at desktop and phone widths, opens every chart tab and plays
  every construction. A new workflow runs it on each change.
- New MAINTAINING.md guide for maintainers.
- New Wanted list ([Wanted/README.md](Wanted/README.md)) of historical constructions not yet charted.
- `tools/add_submission.py` turns an accepted submission into a chart entry.
- An optimisation pass made the pages much smaller (about 24,000 lines removed).

### Archive
- 95 entries.

## November 2026: architecture search

### Site
- **New page: Architectural Vision** ([pages/architecture.html](pages/architecture.html)), with ARCHITECTURAL.md.
  It sets out the plan for searching for constructions automatically and shows what the search has found
  (`pages/architecture-finds.js`).
- A scheduled architecture-search workflow, which reruns the search after new entries are added.
- The Six Problems page shows how the problems relate to each other.
- The π chart, derived from circle rectification, was added.

### Archive
- 92 entries.

## November 2026: browser extension and automatic evaluation

### Site
- **Browser extension** for submitting a construction straight from GeoGebra, with GitHub sign-in. A word check
  (`extension/language.js`) stops offensive text before it is sent, and the evaluation workflow runs the same check.
- New Extension Privacy page ([pages/privacy.html](pages/privacy.html)).
- Submissions are evaluated automatically by a workflow (`tools/evaluate_submission.py`). New submissions below 95%
  are no longer accepted. Ruleset version 1.3.
- `tools/geogebra-backup.js`, a script users can run to back up their GeoGebra files.

## November 2026: verification

### Site
- **New page: Verification** ([pages/verification.html](pages/verification.html)), with VERIFICATION.md.
  - `tools/verify.py` rebuilds every construction from its GeoGebra file and recomputes it in 50-digit arithmetic.
  - Each entry gets a precise 32-digit readout and an automated check list (`pages/ai-checks.js`).
  - Counting rules and the micro scale test: ruleset versions 1.0 to 1.2.
- `tools/geogebra_check.js` cross-checks constructions in GeoGebra itself.
- `tools/crossref.py` and `pages/crossref.js` find identical or near-identical entries.
- GitHub issue templates for submissions, verifications and disputes.

### Archive
- 43 entries, then 86, including Claude's computer-search finds.

## November 2026: the website

### Site
- **The site launched**, with:
  - the Open Archive home page;
  - Approximation Charts, one tab per problem;
  - The Six Problems;
  - Constructions;
  - Mechanical Solutions;
  - Why Try The Impossible;
  - Submit An Approximation;
  - Accompanying Papers: The Three Classic Geometry Problems, Rope Around The Clock, and Euclidean
    Circumference Approximation.

## January 2026

### Archive
- Added the Kochanski–Gordon crossover method.

## November 2025: v0.1 to v0.2.6 (repository only, before the site)

- **v0.1 (7 November 2025):** first public release of the archive, as GeoGebra files and notes.
- v0.1.1 to v0.1.7: README, heading links, directory listings, descriptions of the mechanical solutions, and wording.
- v0.1.8: Ramanujan's squaring method added.
- v0.1.9: a new circle rectification method.
- v0.2: a construction accurate to 99.99948805479345%.
- v0.2.1 to v0.2.4: more methods, a micro scale marker, and methods from the search space.
- v0.2.5: the submission ruleset defined.
- v0.2.6: a near-perfect construction, and adjustments.
