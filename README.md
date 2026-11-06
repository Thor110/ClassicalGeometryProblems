# Classical Geometry Problems

An open archive for documenting Euclidean approximations of the classical geometric problems and a proposal for a centralised system to catalogue all attempts to approximate the classical geometry problems.

This archive is not intended to prove the classical problems possible, but to document all meaningful geometric approximations, their accuracy, and their construction efficiency, so that future work may be compared transparently.

**[Visit the website](https://thor110.github.io/ClassicalGeometryProblems/)**: interactive approximation charts, step by step constructions, an accuracy calculator and submission builder, and [why trying the impossible is worthwhile](https://thor110.github.io/ClassicalGeometryProblems/pages/why-try.html).

It is my hope that this repository might be able to help alleviate the burden imparted on academic journals, mathematicians or anyone else that finds themselves regularly receiving claims of solving the classic geometry problems. Anyone receiving such claims can refer the sender here, and the website has [a referral message ready to copy](https://thor110.github.io/ClassicalGeometryProblems/pages/why-try.html#referral).

The author has spent considerable time exploring these constructions both as an intellectual challenge and as a creative exercise in geometry.

The [architectural vision](ARCHITECTURAL.md) imagines building the best oversized and best undersized constructions full size, as a pair of walkable lines with the perfect result lying between them.

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

The [π chart](https://thor110.github.io/ClassicalGeometryProblems/pages/charts.html#pi) is worked out from the circle rectification chart in just that way: the halving is a midpoint, which is not counted, so every rectification is a π approximation with the same accuracy and steps, and the chart shows each one's value of π and how many decimal places of it are right. The π versions drawn in GeoGebra are kept in [Approximations/06 Pi Approximations](Approximations/06%20Pi%20Approximations).

7. Causal Links - How the six problems are linked:

- **The circle and π are one problem in four forms.** A method that rectifies any arc rectifies the circle (four quarter arcs, or two half arcs). Rectifying the circle and π are the same (halve or double the length). Rectifying the circle and squaring it are the same: the square's side is the geometric mean of the length and the radius, and the square's area keeps exactly the accuracy of the length. So every rectification of the circle is also a square, about three circles and three lines longer.
- **Trisecting an angle and doubling the cube share their tools.** Both need a cube root, which straightedge and compass cannot reach, and any tool that solves cubics (a marked ruler, conic sections, folding paper) solves both. Neither gives the other with straightedge and compass.
- **Rectifying arcs both ways is the bridge.** Straighten the angle's arc, divide the straight length into three, and bend one third back onto the circle: the angle is trisected. The Greeks' quadratrix and Archimedes' spiral do exactly this, and square the circle too.
- **Squaring the circle and doubling the cube have no link.** π is transcendental and ∛2 is a cube root; neither leads to the other.
- **But there is a near-coincidence between the families.** Draw a cube's outline as a hexagon of its edges, with the circle around it, and the doubled cube's outline the same way. The doubled cube's outline is that circle plus one more of its own edges: the unrolled circle takes up five of its six edges, leaving one over. Each edge is one sixth of the doubled outline and one fifth of the circle, so the doubled edge is close to 2π/5 times the original, against the true ∛2, a difference of only 0.26%. Not an exact link, which cannot exist, but it holds at any size, and taking a fifth of a rectified circle doubles the cube to 99.22% by volume. Noticed by Edward James Gordon in his Cube 2 Tesseract v2.0 ([DTC-98.924.ggb](Approximations/03%20Doubling%20The%20Cube/GeoGebra%20Files/Under/DTC-98.924.ggb), [GeoGebra](https://www.geogebra.org/geometry/yx5e8wnu)), where the doubled outline measures 43.163 and the circle 36.005, leaving 7.158 against an edge of 7.194. Measured both ways: in his construction, five edges fall short of the circle by just 0.10%, and the part left over is 0.5% short of an edge; with a cube doubled exactly, five edges overshoot the circle by 0.26%, and the part left over is 1.3% longer than an edge. His construction sits closer to the circle than the exact doubling does, because its own small error leans towards the circle.

The [problems page](https://thor110.github.io/ClassicalGeometryProblems/pages/problems.html#links) has a diagram of these links, the square each rectification of the circle gives, and the circle each arc method gives.

## Cataloguing & Submission Guide

This is intended to be a short-form guide to cataloguing the approximations to these problems that are discovered.

If you wish to submit an approximation that you have discovered, then please try to keep your submission as orderly as possible.

Here I will outline what would be expected and provide a template for submissions in any given category, as well as an example submission from my own work.

All geometric approximations should report measured accuracy to three decimal places (do not round the value up or down).

If your GeoGebra file produces a more precise numeric readout, include that raw value in the submission for reference.

Please refer to the file "SUBMISSION_TEMPLATE.md" for the submission template, or use the [submission page](https://thor110.github.io/ClassicalGeometryProblems/pages/submit.html), which works out your accuracy and opens a submission form for you.

The easiest way to submit is the [browser extension](extension/README.md), which sends a construction straight from GeoGebra as a pull request and has it checked automatically within minutes. Submissions need to reach 95%. See [Submissions/README.md](Submissions/README.md) for what the automatic check reports.

## Existing Approximations

This section summarizes verified or notable approximations. Each links to a detailed construction, accuracy analysis, and reproducible file (GeoGebra, Desmos, etc.).

Here I will list the most accurate approximations and link through to the catalogue of other approximations that have been discovered.

Due to the difficulty in searching through the wealth of information on this subject, both on and off of the internet, for the time being I will be listing my own methods for approximating the first four problems

When approximations with higher degrees of accuracy are presented to me, I will update this document accordingly.

### Approximation Chart

An approximation chart for each problem exists to help people more easily sift through approximations, this helps to keep things organised.

The charts live on the [website](https://thor110.github.io/ClassicalGeometryProblems/pages/charts.html), and their data is a single file, [pages/archive-data.js](pages/archive-data.js). The earlier PDF and spreadsheet versions are kept in the repository's history.

[tools/verify.py](tools/verify.py) rebuilds every GeoGebra file and checks it against that data, so the numbers in the charts, the files and the notes cannot quietly drift apart. It also counts each construction under the [counting rules](SUBMISSION_RULESET.md#counting), applies the micro scale test, and measures angle methods across a sweep of angles. [tools/draw.py](tools/draw.py) draws every construction twice for the charts: once with only the steps that count, and once with everything in the file. [tools/geogebra_check.js](tools/geogebra_check.js) opens every file in GeoGebra itself and compares each point with the checker's rebuild. [tools/crossref.py](tools/crossref.py) compares every entry with every other, and any new GeoGebra file with the whole archive, to find results that are identical, nearly identical, or built on one another.

The charts can show results by people, by AI, or both together.

### Search finds

At my request, Claude (an AI) searched millions of straightedge and compass constructions for short, accurate ones. Its finds are on the charts under its own name with an AI label, waiting for a person's verification like any other entry. They include 4 circles and 2 lines that double the cube to 99.99997%, 5 circles and 2 lines that rectify the circle to 99.99999997%, and 10 circles and 6 lines that square it to 99.999999998%. For the angle problems it found general methods, with nothing placed by eye, that hold across almost every angle: a trisection with 4 circles and 4 lines that is at least 99.05% accurate for every angle from 30° to 150° (and 95% from 5° to 179°), and an arc rectification with 4 circles and 1 line that is at least 99.75% accurate over the same range.

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

## How Many Approximations Are There?

There are almost certainly infinitely many ways to approximate these problems: with no limit on the number of steps, or on how small a step may be, a construction can be refined forever. But with the number of circles and lines capped (the rulesets), only so many constructions can be made, because a fixed number of steps from a fixed starting figure can only be combined in a limited number of ways. Leaving out micro scale steps narrows the field further. So the approximations that need no micro scale adjustments and stay within the step limits are quite possibly a limited and calculable set, one that could in principle be counted and searched in full.

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
- `ARCHITECTURAL.md` — The architectural vision: building the best approximations as walkable monuments.

If you discover an error, typo, or have suggestions for improving this document, please feel free to open an issue or pull request.

All constructions listed in this archive have been checked by the author using GeoGebra’s measurement tools, and rebuilt and recomputed by an independent automated check. Each entry's record is on the [verification page](https://thor110.github.io/ClassicalGeometryProblems/pages/verification.html).

Contributors are encouraged to verify each construction independently and report any discrepancies or improvements via issue or submission.