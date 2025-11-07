# Classical Geometry Problems

An open archive for documenting Euclidean approximations of the classical geometric problems.

This archive is not intended to prove the classical problems possible, but to document all meaningful geometric approximations, their accuracy, and their construction efficiency, so that future work may be compared transparently.

A proposal for a centralised system to catalogue all attempts to approximate the classical geometry problems.

It is my hope that this repository might be able to help alleviate the burden imparted on academic journals, mathematicians or anyone else that finds themselves regularly receiving claims of solving the classic geometry problems.

The author has spent considerable time exploring these constructions both as an intellectual challenge and as a creative exercise in geometry.

## Geometry problems

All approximations of these problems are intended to remain strictly Euclidean, adhering to the strict Euclidean ruleset of using only a straightedge and compass ( no measurements ).

1. Squaring The Circle - This is the problem of constructing a square with the same area as any given circle.

[Approximation Chart](https://github.com/Thor110/ClassicalGeometryProblems/blob/main/Approximations/01%20Squaring%20The%20Circle/STC-ApproximationChart.pdf)

2. Trisecting An Angle - This is the problem of trisecting any given angle.

[Approximation Chart](https://github.com/Thor110/ClassicalGeometryProblems/blob/main/Approximations/02%20Trisecting%20An%20Angle/TAA-ApproximationChart.pdf)

3. Doubling The Cube - This is the problem of doubling the volume of any given cube.

[Approximation Chart](https://github.com/Thor110/ClassicalGeometryProblems/blob/main/Approximations/03%20Doubling%20The%20Cube/DTC-ApproximationChart.pdf)

4. Rectifying The Circle - This is a problem similar to arc rectification, but instead of transferring the length of a given arc, it is intended to transfer the length of the circumference of any given circle.

[Approximation Chart](https://github.com/Thor110/ClassicalGeometryProblems/blob/main/Approximations/04%20Rectifying%20The%20Circle/RTC-ApproximationChart.pdf)

5. Arc Rectification - This is the problem of rectifying the length of any given arc, that is to transfer the length of any given arc to a newly constructed line (Sometimes referred to as “rectifying the circle” when applied to the entire circumference).

[Approximation Chart](https://github.com/Thor110/ClassicalGeometryProblems/blob/main/Approximations/05%20Arc%20Rectification/AR-ApproximationChart.pdf)

It is my belief that rectification of any given arc is actually impossible, due to the inherent differences present in any given arc that would result in a generalised method being inapplicable to any other given arc.

However I chose to list it amongst the problems as it relates to many of the other problems and at its core can help demonstrate not only the difficulty in approximating said problems, but the inherent impossibility present in all of them.

6. π Approximations - This is the problem of approximating π using a geometric construction.

[Approximation Chart](https://github.com/Thor110/ClassicalGeometryProblems/blob/main/Approximations/06%20%CF%80%20Approximation/PA-ApproximationChart.pdf)

I also chose to list this as a problem due to similar reasoning, that ultimately the core of the problem can help people understand why the problems are impossible.

It is also worth noting that it is quite likely no one will ever find a closer approximation than [Kochanski](#6-kochanskis-approximations-of-π).

## Cataloguing & Submission Guide

This is intended to be a short-form guide to cataloguing the approximations to these problems that are discovered.

If you wish to submit an approximation that you have discovered, then please try to keep your submission as orderly as possible.

Here I will outline what would be expected and provide a template for submissions in any given category, as well as an example submission from my own work.

All geometric approximations should report measured accuracy to three decimal places (do not round the value up or down).

If your GeoGebra file produces a more precise numeric readout, include that raw value in the submission for reference.

Please refer to the file "SUBMISSION_TEMPLATE.md" for the submission template.

## Existing Approximations

This section summarizes verified or notable approximations. Each links to a detailed construction, accuracy analysis, and reproducible file (GeoGebra, Desmos, etc.).

Here I will list the most accurate approximations and link through to the catalogue of other approximations that have been discovered.

Due to the difficulty in searching through the wealth of information on this subject, both on and off of the internet, for the time being I will be listing my own methods for approximating the first four problems

When approximations with higher degrees of accuracy are presented to me, I will update this document accordingly.

### Approximation Chart

An approximation chart for each problem exists to help people more easily sift through approximations, this helps to keep things organised.

Both a formatted PDF version and the editable OpenDocument Spreadsheet (.ods) source file are included.  
Users are encouraged to reference the PDF for readability and the .ods file for data verification or contribution.

### 1. Squaring The Circle

I wrote a paper on the three primary classic geometry problems which presents two different methods for approximating each problem.

- `/Approximations/07 Accompanying Papers/Three Classic Geometry Problems v8.pdf`
[Paper](https://github.com/Thor110/ClassicalGeometryProblems/tree/main/Approximations/07%20Accompanying%20Papers/Three%20Classic%20Geometry%20Problems%20v8.pdf)

### 2. Trisecting An Angle

- `/Approximations/07 Accompanying Papers/Three Classic Geometry Problems v8.pdf`
[Paper](https://github.com/Thor110/ClassicalGeometryProblems/tree/main/Approximations/07%20Accompanying%20Papers/Three%20Classic%20Geometry%20Problems%20v8.pdf)

### 3. Doubling The Cube

- `/Approximations/07 Accompanying Papers/Three Classic Geometry Problems v8.pdf`
[Paper](https://github.com/Thor110/ClassicalGeometryProblems/tree/main/Approximations/07%20Accompanying%20Papers/Three%20Classic%20Geometry%20Problems%20v8.pdf)

### 4. Rectifying The Circle

I believe that the most accurate approximation of rectifying the circle would require using Kochanski's method for approximating π twice back to back.

However for the sake of presenting different methods and until a more accurate singular method is discovered, I have chosen to list my own approximation which I discovered recently.

- `/Approximations/07 Accompanying Papers/EuclideanCircumferenceApproximation.pdf`
[Paper](https://github.com/Thor110/ClassicalGeometryProblems/tree/main/Approximations/07%20Accompanying%20Papers/EuclideanCircumferenceApproximation.pdf)

### 5. Arc Rectification

The best method I could find for rectifying any given arc gives ~95% accuracy and only works for angles below 180 degrees and over 90 degrees, however it could easily be modified to accomodate angles over 180 degrees, I just haven't worked on it yet.

### 6. Kochanski's approximations of π

Kochanski's approximations for π are likely the best that will ever be discovered.

"(5 August 1631 – 17 May 1700) was a Polish mathematician, physicist, clock-maker, pedagogue and librarian." - https://en.wikipedia.org/wiki/Adam_Adamandy_Kocha%C5%84ski

**References**
- Henryk Fuks : Adam Adamandy Kochanski’s approximations of ´ π: reconstruction of the algorithm : https://arxiv.org/pdf/1111.1739

## Mechanical Solutions

Here I will list any mechanical solutions for any of these problems.

### 1. Squaring The Circle <a name="mech-1-squaring-the-circle"></a>

### 2. Trisecting An Angle <a name="mech-2-trisecting-an-angle"></a>

My mechanical method for arc rectification can be adapted to trisecting an angle [Arc Rectification (Mechanical)](#mech-5-arc-rectification).

### 3. Doubling The Cube <a name="mech-3-doubling-the-cube"></a>

### 4. Rectifying The Circle <a name="mech-4-rectifying-the-circle"></a>

My mechanical method for arc rectification can be adapted to rectifying the circle [Arc Rectification (Mechanical)](#mech-5-arc-rectification).

### 5. Arc Rectification <a name="mech-5-arc-rectification"></a>

I devised a mechanical solution which lies outside the Euclidean rules for rectifying any given arc length.

- `/Mechanical Solutions/07 Accompanying Papers/Rope Around The Clock.pdf`
[Paper](https://github.com/Thor110/ClassicalGeometryProblems/tree/main/Mechanical%20Solutions/07%20Accompanying%20Papers/Rope%20Around%20The%20Clock.pdf)

### 6. π Approximations <a name="mech-6-π-approximations"></a>

My mechanical method for arc rectification can be adapted for approximating Pi [Arc Rectification (Mechanical)](#mech-5-arc-rectification).

## Understanding Impossibility

The impossibility of these problems under Euclidean rules arises from the transcendental nature of π and cube roots of non-rational numbers.

Straightedge-and-compass constructions generate only numbers obtainable through nested square roots of rationals. Hence exact solutions are impossible; only approximations exist.

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

## Community Verification

Instructions for independent verification of submitted constructions (under development).

---

Last updated: [07-11-2025]

Maintainer: Edward James Gordon

📁 Repository structure:
- `/Approximations/` — Verified Euclidean constructions.
- `/Mechanical Solutions/` — Non-Euclidean or mechanical methods.

If you discover an error, typo, or have suggestions for improving this document, please feel free to open an issue or pull request.

All constructions listed in this archive have been independently verified by the author using GeoGebra’s measurement tools.

Contributors are encouraged to verify each construction independently and report any discrepancies or improvements via issue or submission.