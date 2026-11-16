# Architectural Vision

An idea of Edward James Gordon's, from early in this project, first talked through in a conversation
with an AI assistant (Gemini or Llama) and written down here so it is not lost.

## The idea

No straightedge and compass construction can reach the exact answer to these problems. But the
charts hold the best construction that lands **over** the true value, and the best that lands
**under** it. The exact answer must lie between the two.

So build both. A real building, monument or landscape where the best oversized construction and the
best undersized construction are laid out full size, side by side, as two walkable lines. Walk one,
then the other: between them, in the gap you can stand in or point at, lies the perfect result that
no construction can reach. The building makes the impossibility visible, and celebrates every
attempt that narrowed the gap.

## Two visions

The gap between the two lines can be built two ways.

### Vision I: a gap you can walk

The two lines stand about 1.2 m apart where they end, a path wide enough to walk down. Visitors walk
the oversized line, then the undersized one, and stand in the space between, where the perfect result
lies. To keep the gap that wide at a building's size, this vision uses constructions chosen to be
built, around 98% to 99.6% (see [Pairs that can be built](#pairs-that-can-be-built) and the
[search finds](#search-finds-constructions-a-building-can-show)), rather than the best on the charts.

**Rectifying the circle.** A circular plaza, and beside it two straight walkways starting from a
common threshold:
- one as long as an oversized construction of the plaza's circumference;
- one as long as an undersized construction.

Where they end, a marker stands in the gap: the true circumference, π times the diameter.

**Squaring the circle.** A circular garden and a square court of equal area, except that there are
two courts, nested: an oversized square and an undersized square. The true square's outline runs
along the path between their walls.

**Doubling the cube.** A cube-shaped pavilion, and beside it two larger frames at an oversized and an
undersized doubled edge, far enough apart to walk between. The cube of exactly twice the volume lies
between them.

**Trisecting an angle.** A fan-shaped plaza with an angle set into the paving and its three parts
marked out by constructions, as paths radiating from the vertex. At the plaza's edge the oversized
and undersized paths have drawn apart, with the true third between them.

**Arc rectification.** An arched walkway, and beside it the straight paths that match its length
from either side, ending a step apart.

### Vision II: a gap you can see

The lines do not need to be walked between, only walked along, with the gap between them in view.
Here the gap is a seam: a pencil's width, or the joint where two paving slabs meet, filled with
poured gold. This vision can carry the best constructions on the charts.

**Rectifying the circle.** The two walkways from the threshold end at a single joint in the paving,
filled with gold. The oversized line ends at one edge of the joint, the undersized at the other, and
the true circumference lies in the gold.

**Squaring the circle.** The oversized and undersized courts share their walls' outline, separated
by a gold seam around the square. The true square runs inside the gold.

**Doubling the cube.** The two frames meet along a gold-filled joint at their edges, where the cube of
exactly twice the volume lies.

**Trisecting an angle.** The best oversized and undersized paths from the vertex run together across
the plaza, with a gold seam between them that widens only towards the edge.

**Arc rectification.** The straight paths end at a gold joint beside the arch's end.

The seam can be built two ways:

- **At true scale.** The joint is exactly as wide as the gap. A pair is chosen and the work is sized
  so the gap comes out a pencil's width (about 0.5 mm) or a paving joint (about 5 mm). It needs
  modern survey and stone cutting: at that width, rope and stake work wander more than the gap
  ([Old-world methods](#old-world-methods-the-error-grows-with-the-work)).
- **As a symbol.** The best two lines end at a gold joint wider than their gap, so both ends, and the
  perfect result between them, lie somewhere inside the gold. It works at any size, with ordinary
  building accuracy. A plaque gives the gap's true width, which for the best constructions is counted
  in gold atoms (a gold atom is about 0.288 nm across).

An idea of Edward's from November 2026: the lines need only be walked and the gap seen, perhaps as the
meeting of two paving slabs with gold poured into the crack.

## All of them at once: a design study

A single architect could combine them: a circular plaza, a square court of the same area set over it,
a cube pavilion inside its doubled frame, and the circle's length laid out straight. In November 2026
this was worked out as one floor, built from the best approximations on the charts, with every step of
every construction a visible line on the ground. The [website's version](https://thor110.github.io/ClassicalGeometryProblems/pages/architecture.html#attempt-1)
has the plan, a section through the meridian, and the construction step by step. This was Attempt #1;
the page keeps every attempt in a dropdown, and [Attempt #2](#all-of-them-at-once-attempt-2-one-origin) follows below.

### The brief

- Every chart except the trisection's, which depends on the angle: squaring the circle, rectifying it
  (and with it π), rectifying an arc, doubling the cube; each with its best oversized and undersized
  construction, the results in gold.
- The trisection shown where it can be done exactly: the right angle, from the twelve points of a clock.
- As few lines and circles as possible, each construction growing out of what is already drawn.
- A site of at most 50 m; also a statue-sized version, and a version for rope and stakes.
- A building to walk through, with places to view each problem from above and up close, and the
  solstice sun on a gold point.

### The base: a clock

The plaza's circle about O through C; the diameter OC and the perpendicular diameter; the four circles
of the radius about the ends of the diameters, which mark the twelve points of a clock on the rim; and
the four diameters through the 30° points. 5 circles and 6 lines. The right angle between twelve and
three o'clock is divided into exact thirds by them, and the same twelve points trisect 180°, 270° and
360°.

### Choosing the constructions

Each construction on the four charts (190 in all) was rebuilt, and its given figure laid onto the base:
the circle onto the plaza's circle, the cube's edge onto the radius, in each of the 24 ways the clock can
be turned or mirrored onto itself. For each, the steps the result depends on were compared with the base,
and every line or circle already there counted once. Then, for each problem and side, the most accurate
construction was found for each number of added steps, with how far it reaches from the centre and its
smallest step. With a limit of 11 added steps each and a reach of 3.5 radii, every result stays above
99.97%; letting the cube's oversized construction reach 4.4 radii lifts it to 99.999998%, and Ramanujan's
rectification (14 steps) was taken for its accuracy and its name:

| Problem | Oversized | Undersized |
|---|---|---|
| Squaring the circle | Eduard Gregori, 99.99986% | Claude (Anthropic), 99.9999994% |
| Rectifying the circle | Jacob de Gelder, 99.999992% | Srinivasa Ramanujan (1914), 99.99999997% |
| Arc rectification (150°) | Claude (Anthropic), 99.99998% | Claude (Anthropic), 99.99993% |
| Doubling the cube | Claude (Anthropic), 99.999998% | Claude (Anthropic), 99.99997% |

The eight were then merged one after another, each turned to the position that shares most with what is
drawn, and among equals to the one that keeps the floor smallest. Each step was replayed into one GeoGebra
file, [Architecture/Plan/combined-plan.ggb](Architecture/Plan/combined-plan.ggb), and any point, line or
circle that coincides with one already drawn is drawn once. **The whole floor is 40 circles and 43 lines**, the six gold result lines among them, and the two gold squares.
Every result in the combined file gives exactly the accuracy it has on its chart, to ten decimal places,
and the file opens in GeoGebra with every object defined.

The merging placed things well: de Gelder's half circumference lies along the diameter through C, π
radii from the rim northwards; Ramanujan's sixth and both arc results lie on the tangent at C, straightened
from the same point; the two arc results run together and end at one seam.

### The building

With the plaza's radius 5.5 m, the floor is 37.9 m × 42.3 m, and with a 3 m gallery round it the site is
**43.9 m × 48.3 m**. The smallest step is 0.45 m.

- **The Clock Court**: the plaza, 11 m across, with twelve brass points; the quarter between twelve and
  three o'clock paved apart, with its two trisecting lines.
- **The Square Court**: the square of the circle's area, 9.75 m on a side, set over the circle with its
  corners just outside the rim, laid out from the two gold squares, which lie in the floor beside it
  (their sides differ by 6.7 µm).
- **The π Meridian Walk**: de Gelder's half circumference, 17.28 m, due north from the rim, with a mark
  at each radius.
- **The Tangent Of Arcs**: Ramanujan's sixth (5.76 m, short by 1.8 nm, about six gold atoms) and the 150°
  arc (14.40 m; its two gold lines end 12 µm apart), with a colonnade on the arc itself.
- **The Cube Pavilion**: a cube room of edge 5.5 m, the radius, inside an open frame of the doubled
  edge, 6.93 m.
- **The gallery**: raised about 4 m, 3 m wide, with a balcony facing each problem; the floor is walkable,
  every line inlaid flush, and each gold seam has a lens and a plaque giving its true gap.

### The Sun Gate

The π walk lies on the meridian. A gate across it 2.95 m south of its southern end carries an aperture
5.67 m up, for latitude 50.9° north (Southampton). At noon the sun's spot falls on the start of π at the
summer solstice, 6.98 m north of the gate at the equinoxes, and on the far end of the walk at the winter
solstice: each year the sun crosses the whole of π. At other latitudes the aperture moves:

| Latitude | Aperture height | South of the walk's start |
|---|---|---|
| 35° | 12.14 m | 2.48 m |
| 40° | 10.15 m | 3.02 m |
| 45° | 8.09 m | 3.20 m |
| 50.9° | 5.67 m | 2.95 m |
| 55° | 4.04 m | 2.48 m |
| 60° | 2.17 m | 1.61 m |

### Three sizes

- **Statue or table piece, about 1 m**: the circle 23 cm across, the smallest step about 1 cm; machined to
  a hundredth of a millimetre; a pin about 12 cm high as the Sun Gate.
- **Plaza, 44 m × 48 m**: stone and inlay, set out by survey to about a millimetre.
- **Rope and stakes**: every step can be laid, but true to about one part in 5,000; the seams are then
  symbolic (Vision II).

## All of them at once, Attempt #2: one origin

The second attempt, from Edward's notes on the first: start everything from one point, and draw every
problem twice about it, oversized and undersized, so that each gap is a true gap between two shapes or two
lines from the same origin. Fewest steps comes first, accuracy last. The [website's version](https://thor110.github.io/ClassicalGeometryProblems/pages/architecture.html#attempt-2)
has the plan, the floor step by step, and a last step that raises the building in three dimensions.
The file is [Architecture/Plan/attempt-2.ggb](Architecture/Plan/attempt-2.ggb).

### The rules

- **One origin.** O is the first point placed on the ground and the centre of the first circle; C is one
  radius east of it. The clock (the circle, two diameters, four circles of the radius) is built first.
- **Pairs on the same origin.** Squares (the circle's squares and the floors of the doubled cubes) are centred
  on O; lengths (π and the straightened arc) are laid from O along a diameter, the two of a pair on top of
  each other.
- **Transfers are allowed.** A result's length is carried to O with the compass: one circle about O with
  that radius meets the diameters at four points, and the midpoints between neighbours are the corners of a
  square of that side centred on O. Laying a length costs one circle. Midpoints and crossings are not counted.
- **Order of choice.** Fewest steps, counting the transfer, then accuracy.

### The choice

Each charted construction was laid onto the clock in each of its 24 turns and mirror images, and the
lines and circles it adds were counted with the transfer included. The arc constructions were measured on
the clock's quarter arc, from three to twelve o'clock, so both straighten the same arc.

| Problem | Side | Construction | Accuracy here |
|---|---|---|---|
| Squaring the circle | over | Lakenmacher (1890) | 99.99981% |
| Squaring the circle | under | de Serres (1600) | 95.49% |
| Rectifying the circle | over | Claude, rtc-over-99.992 | 99.992% |
| Rectifying the circle | under | Claude, rtc-under-99.99994 | 99.99995% |
| Arc rectification | over | Burmester (1919) | 99.59% on the quarter arc |
| Arc rectification | under | Rankine (1867) | 99.41% on the quarter arc |
| Doubling the cube | over | Claude, dtc-over-99.919 | 99.919% |
| Doubling the cube | under | Stifel (1544) | 97.656% |

The whole floor is 26 circles and 10 lines, with four gold lines and four gold squares as the results
(Attempt #1: 40 circles and 37 lines, with six gold lines and two gold squares). De Serres's side was
already in the floor, drawn by the clock and the circles before it, so his square costs only its transfer.
The given cube's floor costs nothing: its corners are the midpoints of the clock's four quarter chords.
All eight accuracies were checked in GeoGebra on the merged file.

### At 3 m to the radius

The site is 38 m × 31 m, nearly all of it taken by the large construction circles; the building itself
stands within about 10 m of the origin.

| Pair | Oversized | True | Undersized | Gap |
|---|---|---|---|---|
| Doubled cube's edge | 3.7808 m | 3.7798 m | 3.7500 m | 3.1 cm |
| Square's side | 5.3174 m (+5 µm) | 5.3174 m | 5.1962 m | 12.1 cm |
| π radii (half circumference) | +0.711 mm | 9.4248 m | −4.7 µm | 0.716 mm |
| Quarter arc | +19.2 mm | 4.7124 m | −27.7 mm | 4.7 cm |

### The building

- **The cubes.** The given cube, 3 m, in glass on its floor at the origin; around it two open frames, Stifel's
  undersized double and the oversized one, with the true doubled cube between them.
- **The squares.** Two gold squares in the floor about the origin, de Serres's inside Lakenmacher's.
- **π and the arc.** Two gold lines from O west along the diameter for π, two north for the quarter arc,
  with a colonnade on the arc itself.
- **The sundial.** A gnomon rises from O to the north at the angle of the latitude, pointing at the celestial
  pole. On level ground the hour lines bunch towards noon, so the hour stones on the rim are set on their own
  lines, worked out for the latitude (50.9° N here) rather than constructed; they are not the clock's twelve
  points. The noon line falls on the gold arc lines, and the six o'clock morning line on the π lines.

### The trisection, and π

- **The trisection** is in the clock. The right angle under the quarter arc, from three to twelve o'clock,
  is cut into exact thirds by the lines from the origin to one and two o'clock. In the building that
  quarter is paved apart, with the two lines in silver. The same twelve points trisect 180°, 270° and the
  full turn; no other angle on the floor is trisected.
- **Rectifying the circle and π** are one problem: the circumference is 2π radii, so the half laid from the
  origin is π radii. The arc rectification is the other problem, a part of the circle straightened.

### Suspended cubes: Edward's mockup

Edward's Blender mockup of this attempt ([Architecture/Mockups/blender-mockup.obj](Architecture/Mockups/blender-mockup.obj))
has the smaller cube hanging inside the larger one, the two about one centre, so that the gap runs round
all six faces rather than only the four sides and the top. The page shows the mockup itself in its own 3D
view, from the attempts dropdown, and Attempt #2's 3D view can hang its cubes the same way. Hung about the
centre of the oversized frame, which stays on its floor, the gap is 1.5 cm on every face between the two
doubled cubes and 37.5 cm between the given cube and Stifel's; the given cube then floats 39 cm above the
floor, on fine cables to the frame's top corners.

### In three dimensions

The page's player ends with a 3D step: the floor as drawn, every step projected on the ground, and the
building rising from it. It is drawn by a small script of its own (pages/architecture-3d.js), so the page
needs no outside library. The plan and the 3D model come from the same GeoGebra file, through
pages/architecture-plan-2-steps.js.

## All of them at once, Attempt #3: the trisection rings

Attempt #2, with every exact trisection carried all the way round the monument, from Edward's idea of
layering them as concentric rings whose pillars step down to form a cone. The [website's version](https://thor110.github.io/ClassicalGeometryProblems/pages/architecture.html#attempt-3)
has the plan, the floor step by step, and the building raised in three dimensions. The file is
[Architecture/Plan/attempt-3.ggb](Architecture/Plan/attempt-3.ggb): Attempt #2's file exactly as published,
with the rings added at the end, so the eight results keep their accuracies.

### The rings

Four trisections are exact with straightedge and compass, and the clock already marks all of them. Each has
its own ring about the origin, repeating its division the whole way round:

| Ring | Radius | Trisection | Pillars | Height |
|---|---|---|---|---|
| 1, the clock | 3 m | 90° into 30° | 12, every 30° | 4.8 m |
| 2 | 6 m | 180° into 60° | 6, every 60° | 3.6 m |
| 3 | 9 m | 270° into 90° | 4, every 90° | 2.4 m |
| 4 | 12 m | 360° into 120° | 3, every 120° | 1.2 m |

The pillars also get slimmer ring by ring. Their tops lie on one cone, 6 m high over the origin and meeting
the ground 15 m out, and the cubes and the gnomon stand inside it (the gnomon is shortened to 5.6 m for that).
The clock's pillars on the quarter arc replace Attempt #2's colonnade.

### The steps

- The circle about C, from the clock, meets the line OC again two radii out: the second ring is the circle
  about O through that point.
- From that point, a circle through C reaches three radii, and a circle through O reaches four; a circle about
  O through each gives the third and fourth rings.
- The pillars stand where the rings cross lines through the origin. The clock's lines serve every ring
  except the 120° and 300° directions, which need one more line, from four to ten o'clock.

That is 5 circles and 1 line more than Attempt #2: 31 circles and 11 lines in all, with the eight gold
results. The site is 40 m × 31 m. Every new point was checked in GeoGebra.

The pillars due west stand on the π lines at one, two and three radii, like milestones; π ends 0.42 m
beyond the third.

### A metal for each problem

Every step is inlaid in the metal of its problem, so the floor can be read problem by problem: bronze for the
clock and the trisection rings, silver for squaring the circle, copper for π, blued steel for the arc and
patinated bronze for doubling the cube. Gold is kept for the results. A line two problems share is laid once,
in the metal of the one that drew it first, so the clock's bronze (its two diameters and the four circles
about their ends, which make all twelve points) runs under everything else.

## All of them at once, Attempt #4: gates on the outer ring

Attempt #3 with two more exact trisections: 15°, a third of 45°, and 7.5°, a third of 22.5°. Rings of their
own would stand only a metre or so apart, so they are charted on the outer ring alone, 12 m out: a gate every
15° (3.1 m apart) and a low post every 7.5° between them, with the ring's three pillars in place of three
gates. The gates, two posts and a bronze bar 1 m high under the cone, could become guides, thresholds or
turnstiles. The [website's version](https://thor110.github.io/ClassicalGeometryProblems/pages/architecture.html#attempt-4)
has the plan, steps and 3D view; the file is [Architecture/Plan/attempt-4.ggb](Architecture/Plan/attempt-4.ggb),
Attempt #3's file with the new lines added.

- **15°**: lines from the origin through the midpoints between neighbouring clock points. The 45° and 135°
  lines pass through the cube's corners, already on the floor; one more line, from five to eleven o'clock,
  completes the 30° directions.
- **7.5°**: lines through the midpoints between neighbouring 15° points on the clock.
- **Cost**: 19 lines, no circles, for 31 circles and 30 lines in all. Every new point was checked in GeoGebra.

The lines run through the origin and across the whole floor, so the bronze becomes a sunburst. Whether that
reads as a pattern or as clutter is the question this attempt asks.

## All of them at once, Attempt #5: the digital outer shell

> **Not a construction.** 5° cannot be drawn with straightedge and compass: among whole degrees, only
> multiples of 3° can. Attempt #5's outer shell does not claim to construct 5°, and it is not an
> approximation. Its marks are placed by measurement, as a surveyor or a computer would place them, and no
> step on the floor draws them. It is a deliberate symbol, Edward's idea: the digital world round the
> classical one, what can be calculated but not constructed.

Everything inside is Attempt #4 unchanged, and the GeoGebra file is Attempt #4's
([Architecture/Plan/attempt-4.ggb](Architecture/Plan/attempt-4.ggb)): the shell has no construction to record.
Beyond the gates, on a ring 13.5 m from the origin, stand 72 low studs every 5°, 1.18 m apart, in a material
of their own (cyan on the page), with no construction lines; the ring itself is a survey line, dashed in the
plan. Read from outside in, the monument goes from the measured to the constructed, and at its centre to what
neither can reach exactly. The site grows to about 42 m × 32 m.

## All of them at once, Attempt #6: the balance search

The same form as Attempt #5, balanced against the walk-through's findings. The
[website's version](https://thor110.github.io/ClassicalGeometryProblems/pages/architecture.html#attempt-6) has the
plan, steps, 3D view and walk-through; the file is [Architecture/Plan/attempt-6.ggb](Architecture/Plan/attempt-6.ggb).

### The search

Every charted construction except the trisections, 190 in all, was laid alone on the one-origin floor in each of
its 24 turns and mirror images, with its transfer to the origin, and measured for the circles and lines it adds,
how far those reach from the origin, and its accuracy there (126 could be placed; the rest start from a different
given figure). The pairs were then chosen by fewest steps first, then the smallest reach, then accuracy. The
change that mattered most was π: Attempt #5's pair reached nine radii east of the origin; Peirce's and Bojko's take
the same steps and reach only π radii. With every construction now inside four and three quarter radii, the floor
fits inside the digital shell at five radii, and the building can grow to 4.5 m to the radius within 50 m.

| Pair | Oversized | Undersized | At 4.5 m | Gap |
|---|---|---|---|---|
| Doubled cube's edge | Finsler (1938), 98.08% | Stifel (1544), 97.656% | true 5.6696 m: +36.1 mm, −44.6 mm | 80.8 mm (40.4 mm each face) |
| Squared circle's side | Claude, 99.922% | Willich (1855), 99.947% | true 7.9760 m: +3.11 mm, −2.13 mm | 5.24 mm (2.62 mm each edge) |
| π, half the circumference | Peirce (1901), 99.963% | Bojko (1909), 99.994% | true 14.1372 m: +5.30 mm, −0.90 mm | 6.20 mm |
| Quarter arc | Burmester (1919), 99.59% | Cusa and Snellius, 95.49% | true 7.0686 m: +28.8 mm, −318.6 mm | 347 mm |

No gap is microscopic: the smallest is a 2.6 mm gold joint. All eight accuracies were checked in GeoGebra on the
merged file. The floor is 28 circles and 30 lines with the rings and gates (Attempt #5: 31 and 30).

### The walk-through's problems

- **The rings move out half a radius**, to 1.5, 2.5, 3.5 and 4.5 radii: circles about C and about the point two
  radii east mark three, four and five radii on the line OC, and the midpoints between give the rings' radii.
  The clock's twelve points stay as low bronze studs on the clock circle.
- **Room at the centre**: the squares' corners stand 1.96 m from the nearest pillar's centre.
- **Pillars on the gold lines**: where a pillar stands on the π or arc lines (the first and second rings on the π
  lines, the first on the arc lines) it stays one pillar on its exact point, standing on a glass slot, so the
  gold line runs on under it in view: the approximation passes beneath the exact trisection and can still be
  seen. The outer ring's gates are exact: a post on every odd 7.5° mark, each
  15° mark the centre of an opening with a bronze threshold. Every pillar and post stands on a constructed point.
- **The gnomon** rises north from the origin and ends 5.4 m out and 6.6 m up, inside the first ring and the cone.
- **The cone** meets the ground at the digital shell: pillars 8.4, 6.0, 3.6 and 1.2 m tall.

Cusa's straightened quarter arc is exactly 1.5 radii long (95.49% is 3/π), so his gold line ends precisely at the
first ring's gateway.

## The gaps, attempt by attempt

The page charts each pair's gap in each attempt, built at that attempt's size (the cube's on each face, the
square's on each edge, π's and the arc's where the two lines end):

| Attempt | Radius | Cube | Square | π | Arc |
|---|---|---|---|---|---|
| #1 The Clock Plaza | 5.5 m | 344 nm | 3.37 µm | 1.47 µm | 12.0 µm |
| #2 to #5 | 3 m | 15.4 mm | 60.6 mm | 716 µm | 46.9 mm |
| #6 The Balance Search | 4.5 m | 40.4 mm | 2.62 mm | 6.20 mm | 347 mm |
| #7 Stadium Scale | 20 m | 1.21 mm | 1.29 mm | 0.97 mm | 3.78 mm |
| #8 The Machined Piece | 10 cm | 2.28 µm | 6.47 µm | 4.84 µm | 18.9 µm |
| #9 In Its Materials | 4.5 m | as #6 | as #6 | as #6 | as #6 |
| #10 The Cathedral | 6 m | 53.9 mm | 3.49 mm | 8.27 mm | 463 mm |

Attempt #1 used the best pairs on the charts, so its gaps are microscopic; from Attempt #6 every gap can be seen.

## All of them at once, Attempt #7: stadium scale

Attempt #6's form at the size of a football stadium, 20 m to the radius, the digital shell 200 m across. The
[website's version](https://thor110.github.io/ClassicalGeometryProblems/pages/architecture.html#attempt-7) has the
plan, steps, 3D view and walk-through; the file is [Architecture/Plan/attempt-7.ggb](Architecture/Plan/attempt-7.ggb).

The search's question changes with the size. For each problem, every placed oversized construction was paired
with every undersized one (still keeping every construction inside four and three quarter radii), and the pair
chosen is the one with the narrowest gap that is still at least 0.5 mm at this size, a pencil line of gold
between two paving slabs; among pairs within a tenth of that narrowest gap, the one with fewest steps.

| Pair | Oversized | Undersized | Gap at 20 m |
|---|---|---|---|
| Doubled cube (each face) | Boccali (1884), 99.973% | Finsler (1938), 99.9985% | 1.21 mm |
| Squared circle (each edge) | Claude, 99.99985% | Anglin (1884), 99.986% | 1.29 mm |
| π (where the lines end) | Viète (1593), 99.998% | Claude, 99.999993% | 0.97 mm |
| Quarter arc (where the lines end) | Claude, 99.999998% | Claude, 99.988% | 3.78 mm |

All eight accuracies were checked in GeoGebra on the merged file. The floor takes 52 circles and 50 lines, nearly
twice Attempt #6's: accuracy costs steps. The given cube is a 20 m hall, the rings stand at 30, 50, 70 and 90 m,
the pillars step down from 28 m to 4 m on a cone 40 m high, and where a pillar stands on a gold line, it stands on a glass slot and the gold runs on beneath it.

**Accepted loss: the seasons.** At about 8 millionths per degree, a year's ±15 °C moves the 62.8 m π lines by
about ±7.5 mm, more than their gap. The gaps are true for the drawing and for the stone at the temperature it was
laid; through the year they open and close, and the plaques say so. The most accurate pairs can only be held
still in a machined piece kept at one temperature: Attempt #8.

## All of them at once, Attempt #8: the machined piece

The same form as a statue: a machined piece a metre across, 10 cm to the radius, its cone of pillars half a
metre high. The [website's version](https://thor110.github.io/ClassicalGeometryProblems/pages/architecture.html#attempt-8)
has the plan, steps, 3D view and a figure of each pair's line ends under the microscope; the file is
[Architecture/Plan/attempt-8.ggb](Architecture/Plan/attempt-8.ggb).

The search's rule is Attempt #7's with a finer threshold: the narrowest pair whose gap at this size is at least
1 µm, enough for an ordinary light microscope (and, among pairs within a tenth of it, the fewest steps).

| Pair | Oversized | Undersized | Gap at 10 cm |
|---|---|---|---|
| Doubled cube (each face) | Claude, 99.999983% | Hayden (1871), 99.989% | 2.28 µm |
| Squared circle (each edge) | Claude, 99.99985% | Anglin (1884), 99.986% | 6.47 µm |
| π (where the lines end) | Viète (1593), 99.998% | Claude, 99.999993% | 4.84 µm |
| Quarter arc (where the lines end) | Claude, 99.999998% | Claude, 99.988% | 18.9 µm |

Only the cube differs from Attempt #7. All eight accuracies, and every pillar's and post's point, were checked in
GeoGebra; the floor is 52 circles and 52 lines. In each pair one line ends within a few hundredths of a
micrometre of perfect and the other a few micrometres off; the charts hold no pair with a gap between these and
Attempt #1's nanometres, so a finer threshold would not change the choice until the nanometre scale.

- **Material**: a glass-ceramic of the kind used for telescope mirrors, such as Zerodur, which changes length by
  about 2 × 10⁻⁸ a degree: about 6 nm a degree along the π lines, a thousandth of their gap. Lines cut by diamond
  turning or laser and filled with gold; the given cube in clear glass.
- **Display**: a case held at 20 °C, with the microscope station over the gold seams.
- **Further**: made like a computer chip, the best pairs on the charts would show gaps of nanometres, for an
  electron microscope: a different piece again.

## All of them at once, Attempt #9: in its materials

Attempt #6, the 46 m plaza, as it might be built, in the 3D view's materials mode: the floor is Attempt #6's file.
The [website's version](https://thor110.github.io/ClassicalGeometryProblems/pages/architecture.html#attempt-9) sets the
sun at any hour (solar time) and on the solstices or equinoxes at 50.9° N, or shows it at night, and can be walked.

- **Floor**: pale limestone paving, every step a flush metal strip in its problem's metal (bronze for the clock and
  the rings, silver for squaring the circle, copper for π, blued steel for the arc, patinated bronze for the cube).
- **Gold**: the results as gold leaf sealed in resin under glass strips, flush and walkable; lit from beneath at
  night.
- **Pillars**: pale stone with bronze caps, 8.4 m down to 1.2 m. Where one stands on a gold line, it stands on a glass
  slot, so the gold runs on beneath it in view.
- **Hall**: the given cube as a 4.5 m glass pavilion, inside the open bronze and gold frames of the doubled cubes.
- **Edge**: the digital shell as 72 steel bollards a metre high, every 5°, each with a light in its top.
- **Sundial**: the gold gnomon's shadow falls on the hour stones; the shadows of every pillar turn round the floor
  with it, long and low at a December morning.

### Idea: a cathedral

A future attempt where the geometry carves its own space: the slots under the pillars grown into arches that spring
between the trisection pillars, from ring to ring and round each ring, so that the rings become arcades and the cone
a vaulted roof, with the gold lines running along the nave beneath.

### Idea: light through the pillars

Where a pillar stands in the way of a solstice light line, such as the noon sun along the north–south line (the
first and third rings each have a pillar due south and due north), it can be cut through for that light alone: an
aperture lined with gold, or in the cathedral form a window, so that the sun's spot reaches the gold on the floor at
noon on the solstice.

### Idea: bollards

For real-world versions the digital shell's marks can be bollards against vehicles, with their angle chosen for the
scale so they stand close enough: every 5° on the plaza (1.96 m apart at 22.5 m) and every 1° at stadium scale
(1.75 m apart at 100 m). The shell is surveyed, not constructed, so any angle can be used: 4° on the plaza would
bring them to 1.57 m, nearer usual vehicle-barrier spacing.

## All of them at once, Attempt #10: the cathedral

The form as a cathedral, the geometry carving its own space. The floor is Attempt #6's (its file,
[Architecture/Plan/attempt-6.ggb](Architecture/Plan/attempt-6.ggb)), built at 6 m to the radius: 60 m across, the
vault 48 m at its crown. The [website's version](https://thor110.github.io/ClassicalGeometryProblems/pages/architecture.html#attempt-10)
has a section, a plan, and the 3D view with the sun, night, an open vault and the walk-through.

- **Arcades**: each trisection ring is an arcade, its arches springing from the exact points. First ring, 9 m out:
  twelve pillars 33.6 m tall joined by lancets. Second, 15 m: six piers 24 m tall under great pointed arches. Third,
  21 m: four piers 14.4 m tall. Fourth, 27 m: the courtyard's exterior wall, 7.2 m high on posts at the odd 7.5°
  marks, open only at three great portals (0°, 120°, 240°) where the ring's pillar stands as a central pier under
  two round arches; an open courtyard lies between the wall and the arcades.
- **Flying arches**: from every pier's top on the second and third rings to the next ring in, at the same angle or
  to the two nearest pillars: twelve in all. The wall sends none.
- **Vault**: twelve stone ribs from the first ring's pillars to a bronze-ringed oculus 46.5 m up and 4 m across,
  glazed between them; the cubes hang beneath, the given cube a 6 m glass room.
- **Light**: under the glass the gnomon keeps the hours on its stones, and the open oculus throws a brighter spot. At noon on 21 June (the sun 62.5° high at 50.9° N) its line from the
  oculus passes the first ring's north pillar 29.2 m up and the third ring's 6.1 m up, both cut through with
  gold-lined openings, and lands on a gold mark 24.2 m north of the origin. At other dates the noon spot falls
  beyond the courtyard wall. These are worked out for the latitude, not constructed.
- **Floor**: Attempt #9's materials. Gaps at this size: cubes 5.4 cm a face, squares 3.5 mm an edge, π 8.3 mm, the
  arc 46 cm. Pillars on the gold lines stand on glass slots; the digital shell is a ring of lights in the paving
  outside the wall, which itself keeps vehicles out.

## At eye level: the first walk-through

Attempts #2 to #5 can now be walked in their 3D view, with the eye 1.6 m above the floor (the Walk through
button: keys or the on-screen pad to move, drag to look round; pillars and posts stop you, sliding you round
them). The walk starts 2 m south of the site, facing north. What it shows, in Attempt #5:

- **From the edge** the form reads well: the low cyan shell, the ring of gates, and the pillars rising ring by
  ring to the glass hall, the cone plain to see.
- **Inside the clock ring it is crowded.** The clock's pillars stand 3 m out, 4.8 m tall; the doubled cube's
  corners come within 0.8 m of the nearest of them (0.6 m clear of the pillar's face), and the gold squares,
  hour stones and gnomon all share the same few metres.
- **Eight pillars stand on de Serres's square, exactly.** De Serres's side is the chord from four to eight
  o'clock, √3 radii, so his square, centred on the origin, has its sides at √3/2 radii from it: precisely
  where the clock's points at one, two, four, five, seven, eight, ten and eleven o'clock lie. Each of those
  eight pillars stands centred on a gold line, and Lakenmacher's square passes 6 cm outside their centres,
  through the pillars themselves. In the drawing it is a beautiful coincidence; in stone the gold seams would
  run into the pillars.
- **The gnomon meets the twelve o'clock pillar.** Rising north from the origin at the latitude, it passes 3 m
  north at about 3.7 m up, inside the 4.8 m pillar there.

These are the problems for the balance search and the next attempt: room at the centre, the squares clear of
the pillars, and a clear line for the gnomon.

## The plaques: every discrepancy stated

Every pair in a built version carries a plaque saying exactly what it is, so that no one mistakes a symbol for
a measurement: how far apart the two shapes stand, how far the nearer one is from perfect, and whether that can
be built and seen or is only symbolic. Anything placed by calculation rather than construction says so too.
For Attempts #2 to #5, at 3 m to the radius:

| Pair | Gap between the two | Nearer one from perfect | Built and seen? |
|---|---|---|---|
| Doubled cube's edge (Claude 99.919%, Stifel 97.656%) | 3.1 cm (1.5 cm each face) | 1.0 mm too long | Gap built and seen; the 1 mm at the limit of stonework |
| Square's side (Lakenmacher 99.99981%, de Serres 95.49%) | 12.1 cm | 5 µm too long (about 17,500 gold atoms) | Gap built and seen; the 5 µm only on a machined model, under a microscope |
| π, half the circumference (Claude 99.992%, 99.99995%) | 0.72 mm | 4.7 µm too short (about 16,400 gold atoms) | A pencil's width: symbolic on site, as a gold seam |
| The quarter arc (Burmester, Rankine, on this arc) | 4.7 cm | 19 mm too long | Built and seen |

- **Temperature**: stone grows about 8 millionths of its length per degree, some 75 µm a degree along the
  π lines, so distances of a few micrometres are the drawing's, not the stone's.
- **Calculated, not constructed**: the sundial's hour stones and gnomon angle (worked out for the latitude),
  and Attempt #5's digital outer shell.
- **Measured on this arc**: the arc constructions are charted at their own angles; the plaques give their
  accuracy on the building's quarter arc.
- **Atoms**: Attempt #1's Ramanujan line ends 1.8 nm short, about six gold atoms. Only a scanning tunnelling
  or transmission electron microscope shows that, on an object made like a computer chip rather than a floor.
  An engraved chip of the best pairs under such a microscope would be an experiment worth trying.
- **Idea, a microscope station**: a digital microscope over a gold seam, with a screen and an eyepiece
  for visitors, so the micrometres on the plaques can be seen.
- **Idea, a gold-skinned cube**: the doubled cubes' faces are 1.5 cm apart (the 3.1 cm difference of their
  edges shared between opposite faces), too close for two frames. They could be one shell, the oversized cube
  outside, Stifel's inside and gold between, the true doubled cube 0.5 mm below the outer surface. Not decided.
- **Crowding**: at full size the centre is crowded: the cubes, gold squares, clock pillars, gnomon and hour
  stones all lie within about 4 m of the origin. That is the next problem for the design, together with a
  physical model (Edward is considering one in wood, card and paper).

## How close the lines are today

Worked out from the charts in November 2026, once with every entry and once with people's entries
alone (leaving out the search finds made by an AI). As the charts improve, the gap narrows, and the
monument can be updated. The [website's version](https://thor110.github.io/ClassicalGeometryProblems/pages/architecture.html)
is worked out live from the charts.

| Problem | Scale | Best oversized | Best undersized | Gap |
|---|---|---|---|---|
| Squaring The Circle | circle 100 m across, square side 88.6227 m | 99.99999999% (Hung Viet Chu): +3.05 nm | 99.9999999% (Claude (Anthropic), AI): −0.819 nm | 3.86 nm (13.4 gold atoms) |
| Squaring The Circle (people only) | circle 100 m across, square side 88.6227 m | 99.99999999% (Hung Viet Chu): +3.05 nm | 99.9996% (Emil Lampe): −148 µm | 148 µm |
| Doubling The Cube | given edge 10 m, doubled edge 12.5992 m | 99.999998% (Claude (Anthropic), AI): +71.7 nm | 99.99997% (Claude (Anthropic), AI): −1.18 µm | 1.25 µm |
| Doubling The Cube (people only) | given edge 10 m, doubled edge 12.5992 m | 99.9999% (Paul Finsler): +2.10 µm | 99.9995% (Lorenzo Mascheroni): −17.9 µm | 20.0 µm |
| Rectifying The Circle | plaza 100 m across, circumference 314.1593 m | 99.999999% (Claude (Anthropic), AI): +104 nm | 99.9999999% (Srinivasa Ramanujan): −101 nm | 205 nm (712 gold atoms) |
| Rectifying The Circle (people only) | plaza 100 m across, circumference 314.1593 m | 99.999996% (Kochanski / Gordon): +11.0 µm | 99.9999999% (Srinivasa Ramanujan): −101 nm | 11.1 µm |

The page shows each gap to three significant figures in the largest unit that fits (m, mm, µm or nm),
and below a micrometre also in gold atoms (to a tenth when under a hundred). The 13.4 has a note of its own in
[COINCIDENCES.md](COINCIDENCES.md). (Before November 2026 it rounded to two decimal places of
a micrometre, so the squaring gap showed as 0.00 µm.)

### How big for each vision

The gap grows in step with the size of the work, so each pair needs its own size for a pencil line, a
gold joint or a walkable path (the Earth is 12,742 km across):

| Pair | Size given | Pencil line, 0.5 mm | Gold joint, 5 mm | Walkable, 1.2 m |
|---|---|---|---|---|
| Squaring The Circle | circle, across | larger than the Earth | larger than the Earth | larger than the Earth |
| Squaring The Circle (people only) | circle, across | 337 m | 3.37 km | 810 km |
| Doubling The Cube | given cube edge | 4.00 km | 40.0 km | 9,606 km |
| Doubling The Cube (people only) | given cube edge | 250 m | 2.50 km | 600 km |
| Rectifying The Circle | plaza, across | 244 km | 2,440 km | larger than the Earth |
| Rectifying The Circle (people only) | plaza, across | 4.52 km | 45.2 km | 10,838 km |

So the best pairs belong to Vision II, as a symbolic gold seam, and Vision I uses pairs further apart.

## Building it for real

Notes from November 2026, with measurements. `python tools/architecture.py` re-runs every figure
below against the current charts.

### The checklist

Everything below, gathered into the rules a design has to meet. The numbers come from the sections
that follow, and are re-worked by the tools at the end.

**What is built**

1. Every circle and line of the construction exists for real, in the floor or in the architecture.
2. The two lengths come from one construction and start from the same threshold, one a little too
   long and one a little too short, so the true end lies between them.
3. The gap between their ends can be seen: at least a pencil's width (7 mm), better room to stand
   (0.5 m), best a path (1.2 m).

**What makes the gap real**

4. The gap is at least three times wider than the error of building it. With rope work (one part in
   5,000) or modern pegs and tapes (±5 mm a point), that rules out constructions much above 99.6%
   for the circle's length: the near-perfect ones can be honoured, not shown.
5. Choose the construction to suit the site: the gap, as a share of the circumference, is the path's
   width divided by the circumference (π times the plaza's width). A 1.2 m path on a 50 m plaza
   needs a gap of 0.76%, for example 99.6% over and 99.6% under.
6. No micro scale steps (shorter than a twentieth of the radius) and no crossings shallower than
   20°: both magnify the building error.
7. Stay small enough for a flat floor. The Earth's curve lifts a flat floor 0.3 m clear of the ground
   at 4 km across, and bends the geometry more than the gap long before the Earth runs out.

**What makes it buildable**

8. Few rope swings: a handful of circles and lines, not twenty.
9. Everything within the site: the construction's circles reach about three to six times the
   plaza's radius, so the site is larger than the plaza.
10. The longest cord is one that can be swung.

**The sun**

11. Lay the walkways north to south, along the meridian.
12. Set the opening's height for the site's latitude, so the solstice noon spot falls in the gap,
    on the gold brick or slab, between the two lights.
13. Size the gap for the spot: about 0.12 m at the summer solstice for an opening 10 m up, but
    1.4 m at the winter solstice at 51.5° north.

**Honouring the charts**

14. Name the holders of each construction used, and record the charts as they stood when it was
    built.
15. Re-run the search and the measurements as the charts grow (below).

### Edward's notes

- The aim is a fancy piece of architecture, not a diagram: sunlight that shines through an opening
  onto a spot in between two lights at the solstices, as buildings have done throughout the ages.
- The path between the two lines should be walkable.
- At the focus, a literal golden or gold-plated metal slab path, or a single gold brick, as the
  display piece, with other neat geometry and architectural tricks all around.
- An early estimate, worked out with Gemini, found the construction would have to be astronomically
  large just to transfer its lines and circles to the ground. The walkable path is what made it so
  large.
- Finding constructions that can actually be built may be a search of its own.
- Every circle and line of the construction must exist for real, as part of the floor plan and the
  architecture, and there must be a visible gap between the two lines: preferably room to stand
  in, but a pencil's width would do, as long as it can be seen. It need not be built strictly by
  old-world methods.
- Edward recalls the early calculations finding that the construction would be too large to fit on
  the face of the Earth.

### Why the best constructions would need a planet

The gap between an oversized and an undersized construction grows with the size it is built at.
For the gap to be a path 1.2 m wide:

| Pair (people's constructions) | Gap on a 50 m plaza | Plaza needed for a 1.2 m path |
|---|---|---|
| Rectifying the circle: the 3/7 crossover (99.99999%) and Ramanujan (99.99999%) | 5.5 µm | about 10,800 km across, 85% of the Earth's diameter (12,742 km) |
| Rectifying the circle: the crossover (99.9996%) and Ramanujan | 0.5 mm | about 120 km across |
| Squaring the circle: Ramanujan (99.999%) and Edward's 99.999% | 0.2 mm | about 300 km across |
| Doubling the cube: Edward's 98.076% and 98.924% | 126 mm on a 10 m cube | a cube 96 m on each edge |

With the AI search finds included, the circle problems would need plazas hundreds of thousands of
kilometres across, more than the distance to the Moon. So the early estimate was right: the better
the construction, the larger the building, and the best ones need a planet.

### The unified construction: the Architectural Plan

Edward's Architectural Plan (GeoGebra `kyhvbkhh`, the Kochanski Gordon crossover, 11 circles and
10 lines) builds both lines in one construction instead of two separate ones. Along one line from
the point K it marks:

- **S**, Kochański's undersized end, at 99.99811% of the circumference;
- **P**, Edward's oversized end, at 100.00253%;
- **T**, the midpoint of S and P, at 100.00032%: the chart's 99.9996% (shown as 99.999681%).

The true end of the circumference lies between S and P, 0.4278 of the way from S, which is almost
exactly 3/7 (0.4286). That is why the 3/7 crossover lands so close. The gap between the two lines is
S to P, 0.0044% of the circumference:

| Plaza across | Walkways (the circumference) | Gap S to P | T from the true end |
|---|---|---|---|
| 10 m | 31 m | 1.4 mm | 0.1 mm |
| 50 m | 157 m | 6.9 mm | 0.5 mm |
| 1 km | 3.1 km | 139 mm | 10 mm |
| **8.65 km** | **27 km** | **1.2 m, walkable** | 87 mm |

On paper the gap is there at any size. On the ground it disappears. Even with modern tapes, staking
each point to ±5 mm moves S and P apart or together by about ±108 mm, whatever the size, because the error comes from
the many crossing points before them. So on a 50 m plaza the 7 mm gap is lost entirely, and finding
T means halving a 7 mm gap, a micro scale step. The gap only shows reliably once it is about three
times that spread, a third of a metre, on a plaza about 2.4 km across. For the walkable 1.2 m path
it needs a plaza 8.65 km across with walkways 27 km long, where the gap comes out at 1.2 m ± 0.11 m,
and the midpoint T, the near-perfect marker, lands 87 mm from the true end, ± 54 mm.

This is the construction the early estimate found too large to build with a visible gap. With
modern surveying it would take a plaza the size of a town; built by old-world methods, it cannot
show its gap at any size (below).

### Every line in the floor: would it fit on the Earth?

Built in the floor, with every circle and line inlaid, the question is how large it must be for the
gap between the two lines to be seen. The table gives the plaza's width (the walkways are π times
longer) for three gaps: a pencil's width (7 mm), room to stand (0.5 m) and a path (1.2 m).

| The two lines | Gap, as a share of the circumference | Pencil's width | Room to stand | A path |
|---|---|---|---|---|
| Architectural Plan: Kochański's end and Edward's end | 0.0044% | 50 m | 4 km | 9 km |
| Architectural Plan: its midpoint T and the true end | 0.00032% | 700 m | 50 km | 120 km |
| 3/7 crossover and the true end | 0.0000035% | 64 km | 4,560 km | 10,940 km |
| 3/7 crossover and Ramanujan (the best pair by people) | 0.0000035% | 63 km | 4,520 km | 10,840 km |

The Earth sets two limits.

- **It is round.** A floor that stays flat lifts clear of the ground at its edges: 0.3 m on a floor
  4 km across, 1.6 m at 9 km, 80 m at 64 km, 283 m at 120 km. Laid on the ground instead, the floor
  follows the curve, and circles and lines drawn on a curved surface no longer meet where they do on
  paper. The curve's effect outgrows the gap once the plaza passes about 207 km across for the
  Architectural Plan's two lines, 56 km for its midpoint, and only 6 km for the 3/7 crossover.
- **It is only so big.** The Equator is 40,030 km long and the Earth 12,742 km across.

So Edward's memory holds for the most accurate version. With the 3/7 crossover, room to stand needs
walkways 14,300 km long, a third of the way round the world, and a 1.2 m path needs walkways
34,400 km long, 86% of the Equator, on a plaza 86% as wide as the Earth. Long before that, from
about 6 km across, the Earth's curve bends the construction by more than the gap it is meant to
show. Even a pencil's width needs a flat floor 64 km across, standing 80 m clear of the ground at
its edges. It does not fit on the face of the Earth.

The Architectural Plan's own two lines, Kochański's end and Edward's, do fit. A pencil's width of
gap needs a plaza 50 m across, and room to stand needs about 4 km, well inside the Earth's limits.
Seen in the floor, though, the lines must also be placed more exactly than the gap is wide:

- For the pencil's width on a 50 m plaza, every point placed to about 0.1 mm: workshop precision,
  not a building site's.
- For room to stand on a plaza 4 km across, modern surveying (5 to 10 mm a point) is enough: the gap
  comes out at 0.5 m give or take 0.1 to 0.2 m.

What does not fit is a visible gap between the Architectural Plan's midpoint and perfection: that
needs 50 km for room to stand, just inside the Earth's curve, and 120 km for a path, beyond it.

### Old-world methods: the error grows with the work

With every circle swung on a cord and every line stretched between stakes, the error is not a fixed
few millimetres: it grows with the size of the work. A cord 4 km long sags, stretches and wanders far
more than one 25 m long. The best builders of the ancient world worked to about one part in 5,000
(the Great Pyramid's base, 230 m a side, is true to a few centimetres). Marking every crossing point
of a construction with an error in that proportion, and rebuilding it 200 times:

| Construction | Its error | Spread at 1 part in 5,000 | Spread at 1 part in 20,000 | Shows? |
|---|---|---|---|---|
| Architectural Plan: the gap S to P | 0.0044% | ±0.067% | ±0.017% | **no, at any size** |
| Architectural Plan: T, the near-perfect marker | 0.0003% | ±0.033% | ±0.008% | **no, at any size** |
| Rectifying 99.596% (oversized) | 0.40% | ±0.087% | ±0.022% | yes, 5 to 19 times |
| Rectifying 99.376% (undersized) | 0.62% | ±0.044% | ±0.011% | yes, 14 to 57 times |
| Rectifying 98.538% (oversized) | 1.46% | ±0.096% | ±0.024% | yes, 15 to 61 times |
| Squaring 96.977% (oversized) | 3.0% | ±0.20% | ±0.050% | yes, 15 to 61 times |
| Squaring 98.177% (undersized) | 1.8% | ±0.10% | ±0.026% | yes, 17 to 70 times |
| Doubling 98.076% and 97.656% | 1.9% and 2.3% | ±0.005% | ±0.001% | yes, hundreds of times |

Because the error grows with the work, building bigger never reveals a hidden gap: the Architectural
Plan's gap stays fifteen times smaller than the wander of the rope work at 1 part in 5,000, and four
times smaller even at 1 part in 20,000, whether the plaza is 50 m or 8 km across. It would need cords
true to about one part in 226,000. By old-world methods, the near-perfect constructions can only be
honoured, not shown: the gap between them is finer than any rope.

What old-world methods can show is the pairs around 98% to 99.6%. With them the size is free to
choose, so it can be set by the path: Edward's 99.596% and 99.376% from a plaza 37 m across give the
1.2 m walkable gap, with every circle a cord of at most about three times the plaza's radius.

### Two kinds of accuracy

With modern tapes and pegs, the error is closer to a fixed amount instead. A construction drawn on
paper or in GeoGebra is exact. Built on the ground, every crossing point is staked out by hand.
Marking each one to ±5 mm (tape, cord and pegs used with care) and rebuilding
each construction 120 times shows how far its result wanders once built:

- On a 50 m plaza, every construction above about 99.9% has its error **hidden** by the stake-out:
  the result wanders further than the construction is from perfect. Its accuracy cannot be seen in
  the built version, only in the drawing. For rectifying the circle the line falls lower, at about
  99.6%, because its long walkways carry each point's error a long way.
- Micro scale (µ) constructions wander most, because a tiny step magnifies the error of every point
  after it: some squares wander by metres.
- Constructions with no µ steps, from about 98% up to 99.6% for rectifying the circle and up to
  99.8% for squaring it, **show** once built: their error is three to fifteen times the spread for the
  circle's length, and up to eighty times for the squares. These are the ones a building can
  display. Some lower ones are hidden too, where the construction magnifies the stake-out error.

### Pairs that can be built

Rectifying the circle, pairs whose error shows once built (both are Edward's):

| Oversized | Undersized | Gap on a 50 m plaza | Plaza for a 1.2 m path | Spread of the gap once built |
|---|---|---|---|---|
| 99.596% (12 circles, 6 lines) | 99.376% (7 circles, 4 lines) | 1.61 m | **37 m across** | ±150 mm |
| 99.596% | 99.443% (10 circles, 5 lines) | 1.51 m | 40 m | ±287 mm |
| 98.538% (6 circles, 6 lines) | 99.376% | 3.27 m | 18 m | ±165 mm |
| 98.538% | 98.165% (6 circles, 5 lines) | 5.18 m | 12 m | ±383 mm |

A plaza 37 m across with the 99.596% and 99.376% constructions gives a 1.2 m path between the ends
of the two walkways, eight times wider than the stake-out wanders. The walkways themselves are about
π times the plaza long (116 m), and the construction lines reach about three times the plaza's width
beyond it, so the site is a park rather than a courtyard.

Squaring the circle, as two nested square courts: the walkable band on each side is half the
difference of their sides. Edward's 96.977% and 98.177% squares (13 circles each) give a band of
0.54 m round a circle 50 m across, so a 1.2 m band needs a circle about 112 m across.

### The sun

The idea belongs to a long line of buildings that catch the sun:

- Newgrange, Ireland (about 3200 BC): a roof-box lets the winter solstice sunrise run down the
  passage to the chamber floor.
- Abu Simbel, Egypt: twice a year the sun reaches the statues in the inner sanctuary.
- Chichén Itzá, Mexico: at the equinoxes, the shadow of the pyramid's terraces makes a serpent of
  light down the stairway.
- San Petronio, Bologna: Cassini's meridian line (1655), a brass line 67 m long across the floor,
  lit at noon through a small hole in the roof.
- Saint-Sulpice, Paris: a brass meridian line across the floor to a marble obelisk, lit through a
  lens in a window.

A meridian line is exactly the walkable path between two lines: the noon sun's spot moves along a
north-south line through the year, from the summer solstice mark (nearest the opening) to the winter
mark (furthest). Near the solstices the sun "stands still" (the meaning of the word solstice), so
the spot rests on the same mark for several days. Near the equinoxes it moves fast, about 18 cm a
day at 51.5° north for an opening 10 m up. A gold brick at a solstice mark is lit for days; a gold
slab path along the line is lit all year.

Where the noon spot falls for an opening 10 m above the floor:

| Latitude | Sun's height at noon: summer / equinox / winter | Spot from below the opening: summer / equinox / winter | Spot size in winter |
|---|---|---|---|
| 30° | 83.4° / 60.0° / 36.6° | 1.1 m / 5.8 m / 13.5 m | 0.26 m × 0.16 m |
| 40° | 73.4° / 50.0° / 26.6° | 3.0 m / 8.4 m / 20.0 m | 0.47 m × 0.21 m |
| 45° | 68.4° / 45.0° / 21.6° | 4.0 m / 10.0 m / 25.3 m | 0.69 m × 0.25 m |
| 51.5° (London) | 61.9° / 38.5° / 15.1° | 5.3 m / 12.6 m / 37.2 m | 1.38 m × 0.36 m |
| 55° | 58.4° / 35.0° / 11.6° | 6.1 m / 14.3 m / 48.9 m | 2.32 m × 0.46 m |

The distances scale with the opening's height. The spot is an image of the sun, so it grows with
distance and is stretched along the floor when the sun is low: a single brick suits the summer mark,
and a slab or a short gold path suits the winter mark at higher latitudes.

**Putting it together.** Lay the two rectified walkways north to south, along the meridian. Set the
opening's height so that the solstice noon spot lands in the gap between the ends of the oversized
and undersized walkways, on the gold brick that marks the true circumference. Two lights, one at the
end of each walkway, frame it. Once a year the sun marks the point that no construction can reach,
between the two that came closest. In the 37 m plaza above, the gap is 1.2 m: the summer spot (about
0.12 m) sits well inside it, while the winter spot at 51.5° north (1.4 m long) needs a lower opening
or a wider gap. Choosing the solstice, the opening's height and the plaza's size together is part of
the design.

### A search of its own

Choosing constructions for a building turns the charts' question round. Instead of the most accurate
construction, it wants constructions that:

1. **Match the site.** For rectifying the circle, the two errors together must equal the path width
   divided by the plaza's circumference: about 0.8% for a 1.2 m path on a 50 m plaza, so two
   constructions near 99.6%, one over and one under.
2. **Show once built.** Their error is at least three times the stake-out spread: no micro scale
   steps, no shallow crossings, no step much shorter than a metre.
3. **Take few rope swings.** Every circle is a cord swung across tens of metres: a handful, not
   twenty.
4. **Fit the site.** A small footprint, and ideally a pair that shares its first steps, so the two
   walkways grow from the same staked-out circle.
5. **Face the sun.** Walkways along the meridian, and an opening placed for the site's latitude.

A search aimed at a band of accuracy rather than the best accuracy would turn up many more pairs
than the charts hold today. `tools/architecture.py` measures points 1 to 3 for every charted entry.

### Search finds: constructions a building can show

`tools/architecture_search.py` searches for single constructions that meet points 1 to 10 of the
checklist: two lengths from one threshold, a gap in the band that suits a plaza 15 m to 130 m
across, standing out from rope work at one part in 5,000, no micro scale steps or shallow crossings,
and few circles and lines. The best are kept as GeoGebra files in `Architecture/Finds/`, with the
oversized length in red and the undersized in green. They are not chart entries: they are chosen to
be built, not to be close to perfect.

The first run (6 November 2026, 962,348 constructions in six minutes) found that a building does not
need an elaborate construction. Two or three circles and one or two lines are enough to lay out a
pair of walkways from one threshold, one long and one short, with a gap between them that stands out
from rope work 60 to 220 times over, on plazas 17 m to 77 m across. Edward's charted pair (99.596%
and 99.376%) takes 19 circles and 10 lines between them for the same effect. The near-perfect
constructions remain the ones to honour; these are the ones that can be walked. Every find has been
opened in GeoGebra, which measures both lengths exactly as the search did.

<!-- architecture-finds:start -->

_Written by `python tools/architecture_search.py --write`, last run 2026-11-06 with 105 charted entries; 2 runs so far. Do not edit by hand._

| Find | Steps | Over | Under | Gap | Shows at 1 in 5,000 | Plaza for a 1.2 m gap | Longest cord | File |
|---|---|---|---|---|---|---|---|---|
| ARCH-01 | 3c 1l (half, laid twice) | 98.582% | 99.186% | 2.23% | 224 times | 17 m | 34 m | [ARCH-01.ggb](Architecture/Finds/ARCH-01.ggb) |
| ARCH-02 | 3c 1l (half, laid twice) | 98.668% | 99.148% | 2.18% | 199 times | 17 m | 52 m | [ARCH-02.ggb](Architecture/Finds/ARCH-02.ggb) |
| ARCH-03 | 3c 1l (half, laid twice) | 99.873% | 98.295% | 1.83% | 189 times | 21 m | 28 m | [ARCH-03.ggb](Architecture/Finds/ARCH-03.ggb) |
| ARCH-04 | 3c 1l (half, laid twice) | 99.794% | 98.730% | 1.48% | 170 times | 26 m | 44 m | [ARCH-04.ggb](Architecture/Finds/ARCH-04.ggb) |
| ARCH-05 | 3c 1l (half, laid twice) | 99.259% | 99.301% | 1.44% | 152 times | 27 m | 56 m | [ARCH-05.ggb](Architecture/Finds/ARCH-05.ggb) |
| ARCH-06 | 4c 0l (half, laid twice) | 98.414% | 99.691% | 1.89% | 149 times | 20 m | 32 m | [ARCH-06.ggb](Architecture/Finds/ARCH-06.ggb) |
| ARCH-07 | 2c 2l (half, laid twice) | 98.795% | 99.798% | 1.41% | 145 times | 27 m | 47 m | [ARCH-07.ggb](Architecture/Finds/ARCH-07.ggb) |
| ARCH-08 | 3c 1l (half, laid twice) | 97.936% | 99.968% | 2.10% | 140 times | 18 m | 36 m | [ARCH-08.ggb](Architecture/Finds/ARCH-08.ggb) |
| ARCH-09 | 3c 1l (half, laid twice) | 99.888% | 98.386% | 1.73% | 133 times | 22 m | 66 m | [ARCH-09.ggb](Architecture/Finds/ARCH-09.ggb) |
| ARCH-10 | 2c 2l (half, laid twice) | 99.621% | 99.018% | 1.36% | 130 times | 28 m | 28 m | [ARCH-10.ggb](Architecture/Finds/ARCH-10.ggb) |
| ARCH-11 | 3c 1l (half, laid twice) | 99.342% | 99.227% | 1.43% | 130 times | 27 m | 53 m | [ARCH-11.ggb](Architecture/Finds/ARCH-11.ggb) |
| ARCH-12 | 3c 1l (half, laid twice) | 99.796% | 98.831% | 1.37% | 128 times | 28 m | 42 m | [ARCH-12.ggb](Architecture/Finds/ARCH-12.ggb) |

Over and under are each length's accuracy against the circumference; the true end lies between them. "Shows" is how many times wider the gap is than its wander, with every point of the construction marked to one part in 5,000 of the radius. The plaza is the circle's width that makes the gap 1.2 m, and the longest cord is the largest circle swung at that size. "Half, laid twice": the construction gives half the circumference, and each walkway lays its length twice.

<!-- architecture-finds:end -->

### The charted entries, measured for building

<!-- architecture-measure:start -->

_Written by `python tools/architecture.py --write` on 2026-11-06. Do not edit by hand._

#### Stake-out: does the built version still show the construction's error?

Each crossing point staked out to ±5 mm with modern pegs and tapes, or to one part in 5000 of the radius with rope work; circles 50 m across, cube edge 10 m. "Shows" means the error is at least 3 times the spread.

| Entry | Steps | Its error | Spread, pegs and tapes | Shows? | Spread, rope work | Shows? |
|---|---|---|---|---|---|---|
| dtc-under-97.656 | 7c 6l | −99 mm | ±7.2 mm | yes | ±3.4 mm | yes |
| dtc-over-98.076 | 5c 0l | +80 mm | ±10 mm | yes | ±4.2 mm | yes |
| dtc-under-98.924 | 13c 20l | −45 mm | ±15 mm | no | ±5.6 mm | yes |
| dtc-under-99.214 | 7c 5l | −33 mm | ±8.1 mm | yes | ±3.5 mm | yes |
| dtc-over-99.919 (AI) | 4c 0l | +3.4 mm | ±25 mm | no | ±9.4 mm | no |
| dtc-under-99.989 | 6c 4l | −0.5 mm | ±9.4 mm | no | ±3.2 mm | no |
| dtc-over-99.9998 (AI) | 4c 1l | +7.5 µm | ±9.1 mm | no | ±3.8 mm | no |
| dtc-under-99.999 (AI) | 4c 2l | −1.2 µm | ±35 mm | no | ±14 mm | no |
| dtc-over-99.999982 (AI) | 5c 2l | +0.7 µm | ±13 mm | no | ±5.7 mm | no |
| dtc-over-99.999989 (AI) | 5c 3l | +0.4 µm | ±32 mm | no | ±13 mm | no |
| dtc-over-99.999992 (AI) | 6c 1l | +0.3 µm | ±72 mm | no | ±28 mm | no |
| dtc-over-99.999998 (AI) | 7c 2l | +0.072 µm | ±60 mm | no | ±20 mm | no |
| rtc-under-98.165 | 6c 5l | −2882 mm | ±340 mm | yes | ±370 mm | yes |
| rtc-over-98.538 | 6c 6l | +2295 mm | ±141 mm | yes | ±165 mm | yes |
| rtc-under-99.376 | 7c 4l | −979 mm | ±73 mm | yes | ±62 mm | yes |
| rtc-under-99.443 | 10c 5l | −875 mm | ±243 mm | yes | ±243 mm | yes |
| rtc-over-99.596 | 12c 6l | +634 mm | ±138 mm | yes | ±168 mm | yes |
| rtc-over-99.607 | 7c 4l | +617 mm | ±95 mm | yes | ±84 mm | yes |
| rtc-over-99.65 | 7c 3l | +550 mm | ±743 mm | no | ±708 mm | no |
| rtc-over-99.786 | 8c 5l | +335 mm | ±259 mm | no | ±282 mm | no |
| rtc-over-99.802 | 10c 4l | +311 mm | ±565 mm | no | ±713 mm | no |
| rtc-over-99.806 | 1c 11l | +304 mm | ±432 mm | no | ±453 mm | no |
| rtc-under-99.809 | 9c 4l | −300 mm | ±122 mm | no | ±116 mm | no |
| rtc-under-99.812 | 8c 4l | −295 mm | ±607 mm | no | ±586 mm | no |
| rtc-over-99.873 | 16c 7l | +199 mm | ±462 mm | no (µ) | ±441 mm | no (µ) |
| rtc-over-99.9343 | 15c 8l | +103 mm | ±116 mm | no | ±109 mm | no |
| rtc-over-99.9347 | 10c 4l | +102 mm | ±316 mm | no | ±294 mm | no |
| rtc-over-99.971 | 4c 14l | +45 mm | ±210 mm | no (µ) | ±242 mm | no (µ) |
| rtc-over-99.979 | 6c 7l | +32 mm | ±118 mm | no | ±111 mm | no |
| rtc-under-99.982 | 9c 2l | −28 mm | ±35 mm | no | ±35 mm | no |
| rtc-under-99.9874 | 9c 7l | −20 mm | ±407 mm | no | ±425 mm | no |
| rtc-under-99.9875 | 4c 14l | −20 mm | ±197 mm | no (µ) | ±180 mm | no (µ) |
| rtc-over-99.989 | 20c 7l | +16 mm | ±34 mm | no (µ) | ±36 mm | no (µ) |
| rtc-over-99.992 (AI) | 4c 1l | +12 mm | ±32 mm | no | ±29 mm | no |
| rtc-over-99.997 | 7c 5l | +4.0 mm | ±108 mm | no | ±103 mm | no |
| rtc-under-99.998 | 5c 7l | −3.0 mm | ±23 mm | no | ±22 mm | no |
| rtc-over-99.9986 | 10c 6l | +2.1 mm | ±437 mm | no (µ) | ±492 mm | no (µ) |
| rtc-over-99.9987 | 7c 16l | +2.0 mm | ±186 mm | no (µ) | ±193 mm | no (µ) |
| rtc-under-99.999 | 9c 12l | −0.8 mm | ±957 mm | no (µ) | ±989 mm | no (µ) |
| rtc-over-99.9996 | 11c 10l | +0.5 mm | ±60 mm | no (µ) | ±54 mm | no (µ) |
| rtc-under-99.99994 (AI) | 5c 1l | −78.8 µm | ±21 mm | no | ±20 mm | no |
| rtc-under-99.99997 | 8c 7l | −35.0 µm | ±66 mm | no | ±70 mm | no |
| rtc-over-99.999991 | 5c 6l | +13.3 µm | ±40 mm | no | ±43 mm | no |
| rtc-under-99.999992 (AI) | 6c 2l | −11.1 µm | ±19 mm | no | ±20 mm | no |
| rtc-over-99.99999 | 18c 13l | +5.5 µm | ±57 mm | no (µ) | ±53 mm | no (µ) |
| rtc-under-99.999997 (AI) | 6c 2l | −4.1 µm | ±37 mm | no | ±37 mm | no |
| rtc-under-99.999998 (AI) | 5c 4l | −1.7 µm | ±29 mm | no | ±30 mm | no |
| rtc-under-99.9999990 (AI) | 7c 4l | −1.4 µm | ±134 mm | no | ±120 mm | no |
| rtc-under-99.9999998 (AI) | 8c 4l | −0.2 µm | ±87 mm | no | ±113 mm | no |
| rtc-over-99.999999 (AI) | 5c 2l | +0.052 µm | ±32 mm | no | ±35 mm | no |
| rtc-under-99.99999 | 8c 10l | −0.05 µm | ±42 mm | no | ±47 mm | no |
| stc-under-95.492 | 7c 6l | −1010 mm | ±5.4 mm | yes | ±4.9 mm | yes |
| stc-over-96.977 | 13c 15l | +665 mm | ±9.4 mm | yes | ±9.2 mm | yes |
| stc-under-98.168 | 13c 20l | −408 mm | ±6.2 mm | yes | ±6.1 mm | yes |
| stc-under-98.177 | 13c 11l | −406 mm | ±4.9 mm | yes | ±4.5 mm | yes |
| stc-under-98.968 | 7c 18l | −229 mm | ±119 mm | no | ±123 mm | no |
| stc-under-99.015 | 13c 7l | −219 mm | ±7.1 mm | yes | ±7.3 mm | yes |
| stc-over-99.109 | 1c 24l | +197 mm | ±6.0 mm | yes | ±6.5 mm | yes |
| stc-over-99.119 | 17c 7l | +195 mm | ±5.1 mm | yes | ±4.9 mm | yes |
| stc-under-99.150 | 13c 16l | −189 mm | ±5.8 mm | yes | ±5.2 mm | yes |
| stc-over-99.283 | 13c 13l | +159 mm | ±8.9 mm | yes | ±7.8 mm | yes |
| stc-over-99.356 | 13c 15l | +142 mm | ±6.6 mm | yes | ±6.5 mm | yes |
| stc-under-99.377 | 13c 31l | −138 mm | ±5.9 mm | yes | ±6.1 mm | yes |
| stc-over-99.398 | 8c 5l | +133 mm | ±10 mm | yes | ±9.4 mm | yes |
| stc-over-99.414 | 13c 27l | +130 mm | ±6.9 mm | yes | ±7.1 mm | yes |
| stc-under-99.484 | 13c 24l | −114 mm | ±6.5 mm | yes | ±6.2 mm | yes |
| stc-over-99.558 | 13c 17l | +98 mm | ±5.1 mm | yes | ±5.2 mm | yes |
| stc-under-99.655 | 21c 11l | −76 mm | ±5.6 mm | yes | ±5.7 mm | yes |
| stc-over-99.696 | 24c 9l | +67 mm | ±5.8 mm | yes | ±5.7 mm | yes |
| stc-under-99.758 | 7c 30l | −53 mm | ±10158 mm | no (µ) | ±10901 mm | no (µ) |
| stc-over-99.809 | 13c 29l | +42 mm | ±5.4 mm | yes | ±6.5 mm | yes |
| stc-over-99.844 | 7c 34l | +34 mm | ±48869 mm | no (µ) | ±9124 mm | no (µ) |
| stc-over-99.862 | 13c 28l | +30 mm | ±6.0 mm | yes | ±5.8 mm | yes |
| stc-over-99.922 (AI) | 6c 4l | +17 mm | ±8.7 mm | no | ±9.0 mm | no |
| stc-under-99.932 | 13c 21l | −15 mm | ±4.8 mm | yes | ±5.2 mm | no |
| stc-over-99.944 | 7c 42l | +12 mm | ±19939 mm | no (µ) | ±11202 mm | no (µ) |
| stc-under-99.956 | 7c 38l | −9.5 mm | ±24587 mm | no (µ) | ±48432 mm | no (µ) |
| stc-over-99.993 | 7c 46l | +1.4 mm | ±71341 mm | no (µ) | ±2843036 mm | no (µ) |
| stc-over-99.998 | 10c 6l | +0.3 mm | ±9.7 mm | no | ±10.0 mm | no |
| stc-under-99.999 | 7c 60l | −0.2 mm | ±57862 mm | no (µ) | ±29339 mm | no (µ) |
| stc-over-99.9998 (AI) | 6c 5l | +33.0 µm | ±8.9 mm | no | ±10 mm | no |
| stc-over-99.99996 | 7c 68l | +7.7 µm | ±31348 mm | no (µ) | ±42480 mm | no (µ) |
| stc-under-99.99998 (AI) | 8c 4l | −3.4 µm | ±146 mm | no | ±152 mm | no |
| stc-over-99.999 | 9c 15l | +1.9 µm | ±15 mm | no | ±15 mm | no |
| stc-over-99.99999157 (AI) | 8c 4l | +1.9 µm | ±16 mm | no | ±15 mm | no |
| stc-over-99.999998 | 7c 15l | +0.4 µm | ±15 mm | no | ±15 mm | no |
| stc-under-99.9999994 (AI) | 7c 6l | −0.1 µm | ±17 mm | no | ±17 mm | no |
| stc-over-99.999999 (AI) | 9c 6l | +0.064 µm | ±12 mm | no | ±11 mm | no |
| stc-under-99.9999999 (AI) | 10c 6l | −0.00041 µm | ±41 mm | no | ±42 mm | no |

#### Walkable gaps: rectifying the circle

Pairs that show once built (no µ). The gap is the difference between the two lengths; the plaza size is the one that makes it 1.2 m.

| Oversized | Undersized | Gap on a 50 m plaza | Plaza for a 1.2 m path | Spread of the gap |
|---|---|---|---|---|
| 98.538 (6c 6l) | 99.443 (10c 5l) | 3.17 m | 18.9 m | ±281 mm |
| 98.538 (6c 6l) | 99.376 (7c 4l) | 3.27 m | 18.3 m | ±159 mm |
| 98.538 (6c 6l) | 98.165 (6c 5l) | 5.18 m | 11.6 m | ±368 mm |
| 99.596 (12c 6l) | 99.443 (10c 5l) | 1.51 m | 39.8 m | ±279 mm |
| 99.596 (12c 6l) | 99.376 (7c 4l) | 1.61 m | 37.2 m | ±156 mm |
| 99.596 (12c 6l) | 98.165 (6c 5l) | 3.52 m | 17.1 m | ±367 mm |

#### The best pairs, built for a 1.2 m gap

| Pair | Gap on a 50 m plaza | Plaza needed |
|---|---|---|
| Rectifying the circle (people): 99.999996 + 99.9999999 | 5.5 µm | 10838 km across |
| Rectifying the circle: 99.999999 + 99.9999999 | 0.1 µm | 585609 km across |
| Squaring the circle (people): 99.999998 + 99.999 | 0.2 mm | 304 km across |
| Squaring the circle: 99.999999 + 99.9999999 | 0.064 µm | 933507 km across |
| Doubling the cube (people): 98.076 + 99.989 | 81 mm | 149 m |
| Doubling the cube: 99.999998 + 99.999 | 1.2 µm | 9606 km across |

#### The sun at noon through an opening 10 m up

| Latitude | Sun's height: summer / equinox / winter | Spot distance from below the opening | Spot size on the floor, winter |
|---|---|---|---|
| 30° | 83.4° / 60.0° / 36.6° | 1.1 m / 5.8 m / 13.5 m | 0.26 m × 0.16 m |
| 40° | 73.4° / 50.0° / 26.6° | 3.0 m / 8.4 m / 20.0 m | 0.47 m × 0.21 m |
| 45° | 68.4° / 45.0° / 21.6° | 4.0 m / 10.0 m / 25.3 m | 0.69 m × 0.25 m |
| 51.5° | 61.9° / 38.5° / 15.1° | 5.3 m / 12.6 m / 37.2 m | 1.38 m × 0.36 m |
| 55° | 58.4° / 35.0° / 11.6° | 6.1 m / 14.3 m / 48.9 m | 2.32 m × 0.46 m |

<!-- architecture-measure:end -->

### Running it again

- `python tools/architecture_search.py --write` searches (10 minutes by default; `--minutes N` for
  longer) and merges what it finds with the finds already kept, so each run only adds.
- `python tools/architecture.py --write` re-measures every charted entry for building.
- `python tools/architecture_due.py` says whether a run is due. Rather than every fixed number of
  entries, it waits for X new entries, where X is the number added in an average month so far
  (never fewer than 3, never more than 25), so the search runs about monthly when submissions are
  busy and waits when they are quiet. After 180 days, any new entry makes it due.
- `.github/workflows/architecture.yml` checks this whenever the charts change and once a month, and
  when a run is due it runs both tools and opens a pull request with the results for the maintainer
  to look over. It can also be started by hand from the Actions tab.

## Notes

- The pair of lines need not come from the same method holder. The monument records whoever holds
  each side of the chart at the time it is built, so it is also a monument to the people who tried.
- Construction itself could follow the rules: laid out on site with stakes, cords and a rope compass,
  the way surveyors and builders worked for thousands of years, as in
  [Rope Around The Clock](https://thor110.github.io/ClassicalGeometryProblems/pages/paper-rope-around-the-clock.html).
