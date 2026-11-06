# Classical Geometry Problems

An open archive for documenting Euclidean approximations of the classical geometric problems and a proposal for a centralised system to catalogue all attempts to approximate the classical geometry problems.

This archive is not intended to prove the classical problems possible, but to document all meaningful geometric approximations, their accuracy, and their construction efficiency, so that future work may be compared transparently.

**[Visit the website](https://thor110.github.io/ClassicalGeometryProblems/)**: interactive approximation charts, step by step constructions, an accuracy calculator and submission builder, and [why trying the impossible is worthwhile](https://thor110.github.io/ClassicalGeometryProblems/pages/why-try.html).

It is my hope that this repository might be able to help alleviate the burden imparted on academic journals, mathematicians or anyone else that finds themselves regularly receiving claims of solving the classic geometry problems. Anyone receiving such claims can refer the sender here, and the website has [a referral message ready to copy](https://thor110.github.io/ClassicalGeometryProblems/pages/why-try.html#referral).

The author has spent considerable time exploring these constructions both as an intellectual challenge and as a creative exercise in geometry.

## Geometry problems

All approximations of these problems are intended to remain strictly Euclidean, adhering to the strict Euclidean ruleset of using only a straightedge and compass ( no measurements ).

1. Squaring The Circle - This is the problem of constructing a square with the same area as any given circle.

[Squaring The Circle - Approximation Chart](https://thor110.github.io/ClassicalGeometryProblems/pages/charts.html#stc)

2. Trisecting An Angle - This is the problem of trisecting any given angle.

[Trisecting An Angle - Approximation Chart](https://thor110.github.io/ClassicalGeometryProblems/pages/charts.html#taa)

3. Doubling The Cube - This is the problem of doubling the volume of any given cube.

[Doubling The Cube - Approximation Chart](https://thor110.github.io/ClassicalGeometryProblems/pages/charts.html#dtc)

4. Rectifying The Circle - This is a problem similar to arc rectification, but instead of transferring the length of a given arc, it is intended to transfer the length of the circumference of any given circle.

[Rectifying The Circle - Approximation Chart](https://thor110.github.io/ClassicalGeometryProblems/pages/charts.html#rtc)

5. Arc Rectification - This is the problem of rectifying the length of any given arc, that is to transfer the length of any given arc to a newly constructed line (Sometimes referred to as “rectifying the circle” when applied to the entire circumference).

[Arc Rectification - Approximation Chart](https://thor110.github.io/ClassicalGeometryProblems/pages/charts.html#ar)

It is my belief that rectification of any given arc is actually impossible, due to the inherent differences present in any given arc that would result in a generalised method being inapplicable to any other given arc.

However I chose to list it amongst the problems as it relates to many of the other problems and at its core can help demonstrate not only the difficulty in approximating said problems, but the inherent impossibility present in all of them.

6. π Approximations - This is the problem of approximating π using a geometric construction.

Approximations for π can be found using any existing method for Rectifying The Circle by simply dividing the rectified length in two.

## Cataloguing & Submission Guide

This is intended to be a short-form guide to cataloguing the approximations to these problems that are discovered.

If you wish to submit an approximation that you have discovered, then please try to keep your submission as orderly as possible.

Here I will outline what would be expected and provide a template for submissions in any given category, as well as an example submission from my own work.

All geometric approximations should report measured accuracy to three decimal places (do not round the value up or down).

If your GeoGebra file produces a more precise numeric readout, include that raw value in the submission for reference.

Please refer to the file "SUBMISSION_TEMPLATE.md" for the submission template, or use the [submission page](https://thor110.github.io/ClassicalGeometryProblems/pages/submit.html), which works out your accuracy and opens a submission form for you.

## Existing Approximations

This section summarizes verified or notable approximations. Each links to a detailed construction, accuracy analysis, and reproducible file (GeoGebra, Desmos, etc.).

Here I will list the most accurate approximations and link through to the catalogue of other approximations that have been discovered.

Due to the difficulty in searching through the wealth of information on this subject, both on and off of the internet, for the time being I will be listing my own methods for approximating the first four problems

When approximations with higher degrees of accuracy are presented to me, I will update this document accordingly.

### Approximation Chart

An approximation chart for each problem exists to help people more easily sift through approximations, this helps to keep things organised.

The charts live on the [website](https://thor110.github.io/ClassicalGeometryProblems/pages/charts.html), and their data is a single file, [pages/archive-data.js](pages/archive-data.js). The earlier PDF and spreadsheet versions are kept in the repository's history.

[tools/verify.py](tools/verify.py) rebuilds every GeoGebra file and checks it against that data, so the numbers in the charts, the files and the notes cannot quietly drift apart. It also counts each construction under the [counting rules](SUBMISSION_RULESET.md#counting), applies the micro scale test, and measures angle methods across a sweep of angles. [tools/draw.py](tools/draw.py) draws every construction twice for the charts: once with only the steps that count, and once with everything in the file.

### Method names

**Circling the Square**, **Array Casting** and **Cube 2 Tesseract** are the names I gave my own families of methods (for squaring the circle, trisecting an angle and doubling the cube), and the chapter titles of my paper. They are not standard terms. "Circling the Square (additional)" marks later variants that came after the paper's v1.0 and v2.0.

### 1. Squaring The Circle

Srinivasa Ramanujans method for approximating this problem is the most accurate and is listed in the approximation chart.

Among my own methods, Circling the Square variants recovered from my GeoGebra files reach 99.99996% oversized and 99.9991% undersized, using micro scale steps (µ). All of them are on the [chart](https://thor110.github.io/ClassicalGeometryProblems/pages/charts.html#stc).

### 2. Trisecting An Angle

I wrote a paper on the three primary classic geometry problems which presents two different methods for approximating each problem.

[Read the paper](https://thor110.github.io/ClassicalGeometryProblems/pages/paper-three-classic-geometry-problems.html)

### 3. Doubling The Cube

I wrote a paper on the three primary classic geometry problems which presents two different methods for approximating each problem.

[Read the paper](https://thor110.github.io/ClassicalGeometryProblems/pages/paper-three-classic-geometry-problems.html)

A simpler construction, Three Minus Root Three, reaches 98.076% (oversized) from five circles: three edges less the length √3, which can be drawn in the plane.

### 4. Rectifying The Circle

I believe that the most accurate approximation of rectifying the circle would require using Kochanski's method for approximating π twice back to back.

However for the sake of presenting different methods and until a more accurate singular method is discovered, I have chosen to list my own approximation which I discovered recently.

[Read the paper](https://thor110.github.io/ClassicalGeometryProblems/pages/paper-euclidean-circumference-approximation.html)

Ramanujan's 1914 construction is the most accurate on the chart at 99.99999996% (undersized). The crossover between my method and Kochański's reaches 99.99999% (oversized) when it takes the point three sevenths of the way between them instead of the midpoint.

### 5. Arc Rectification

The best method I could find for rectifying any given arc gives ~95% accuracy and only works for angles below 180 degrees and over 90 degrees, however it could easily be modified to accomodate angles over 180 degrees, I just haven't worked on it yet.

### 6. Kochanski's approximations of π

Kochanski's approximations for π are likely the best that will ever be discovered.

"Adam Adamandy Kochański (5 August 1631 – 17 May 1700) was a Polish mathematician, physicist, clock-maker, pedagogue and librarian." - https://en.wikipedia.org/wiki/Adam_Adamandy_Kocha%C5%84ski

**References**
- Henryk Fuks : Adam Adamandy Kochanski’s approximations of ´ π: reconstruction of the algorithm : https://arxiv.org/pdf/1111.1739

## Mechanical Solutions

Here I will list any mechanical solutions for any of these problems.

### 1. Squaring The Circle <a name="mech-1-squaring-the-circle"></a>

Currently, no verified or submitted mechanical solutions exist for this problem.

### 2. Trisecting An Angle <a name="mech-2-trisecting-an-angle"></a>

I devised a mechanical solution which lies outside the Euclidean rules for triscting an angle.

[Read the paper](https://thor110.github.io/ClassicalGeometryProblems/pages/paper-rope-around-the-clock.html)

### 3. Doubling The Cube <a name="mech-3-doubling-the-cube"></a>

Currently, no verified or submitted mechanical solutions exist for this problem.

### 4. Rectifying The Circle <a name="mech-4-rectifying-the-circle"></a>

My mechanical method for trisecting an angle can be adapted to rectifying the circle [Trisecting An Angle (Mechanical)](#mech-2-trisecting-an-angle).

### 5. Arc Rectification <a name="mech-5-arc-rectification"></a>

My mechanical method for trisecting an angle can be adapted for arc rectification [Trisecting An Angle (Mechanical)](#mech-2-trisecting-an-angle).

### 6. π Approximations <a name="mech-6-π-approximations"></a>

My mechanical method for trisecting an angle can be adapted for approximating Pi [Trisecting An Angle (Mechanical)](#mech-2-trisecting-an-angle).

## Understanding Impossibility

Straightedge-and-compass constructions generate only numbers obtainable through nested square roots of rationals, and every such number is a root of a polynomial whose degree is a power of two.

Squaring and rectifying the circle need π, which is transcendental (Lindemann, 1882): it is not the root of any such polynomial. Doubling the cube needs ∛2, and trisecting a general angle needs the root of a cubic (for 60°, 8x³ − 6x − 1 = 0). Neither cubic factors, so their degree is 3, not a power of two (Wantzel, 1837). Hence exact solutions are impossible; only approximations exist.

As such, one can only approximate the problems with varying degrees of accuracy.

These problems, while impossible under strict Euclidean rules, can be solved by relaxing those constraints.

For completeness, this archive will also document notable non-Euclidean or mechanical methods.

## Terminology

Rational Numbers : a number expressible as a ratio of two integers.

Irrational Numbers : a number that cannot be expressed as a ratio of integers.

Transcendental : a number that is not the root of any non-zero polynomial with rational coefficients (e.g. π, e).

## Useful Resources

GeoGebra provides an excellent suite of tools for exploring and discovering geometry. : https://www.geogebra.org/geometry

Euclid's Postulates : https://people.math.harvard.edu/~ctm/home/text/class/harvard/113/97/html/euclid.html

## Verification

Every entry is checked and its record is public: who verified it, whether they are a person or an AI, and any disputes. People and AI verifiers are listed separately, and anyone can join.

- The rules, how to request a verification, and how to dispute an entry: [VERIFICATION.md](VERIFICATION.md)
- The registers and every entry's current status: [the verification page](https://thor110.github.io/ClassicalGeometryProblems/pages/verification.html)
- Submissions, verifications and disputes are GitHub issues, with a form for each: [open an issue](https://github.com/Thor110/ClassicalGeometryProblems/issues/new/choose)

---

Last updated: [06-11-2026]

Maintainer: Edward James Gordon

📁 Repository structure:
- `/Approximations/` — Euclidean constructions: a GeoGebra file and notes for each.
- `/Mechanical Solutions/` — Non-Euclidean or mechanical methods.
- `/pages/` — The website, including the chart data (`archive-data.js`) and the papers.
- `/tools/verify.py` — Rebuilds every GeoGebra file and checks it against the charts.
- `VERIFICATION.md` — How entries are verified and disputed.

If you discover an error, typo, or have suggestions for improving this document, please feel free to open an issue or pull request.

All constructions listed in this archive have been checked by the author using GeoGebra’s measurement tools, and rebuilt and recomputed by an independent automated check. Each entry's record is on the [verification page](https://thor110.github.io/ClassicalGeometryProblems/pages/verification.html).

Contributors are encouraged to verify each construction independently and report any discrepancies or improvements via issue or submission.