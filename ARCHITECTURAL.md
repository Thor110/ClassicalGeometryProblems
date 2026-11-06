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

## One problem at a time

**Rectifying the circle.** A circular plaza, and beside it two straight walkways starting from a
common threshold:
- one as long as the best oversized construction of the plaza's circumference;
- one as long as the best undersized construction.

Where they end, a marker stands in the gap: the true circumference, π times the diameter.

**Squaring the circle.** A circular garden and a square court of equal area, except that there are
two courts, nested: the best oversized square and the best undersized square. The true square's
outline lies in the band between their walls.

**Doubling the cube.** A cube-shaped pavilion, and beside it two larger cubes, or two frames, at the
best oversized and undersized doubled edge. The cube of exactly twice the volume lies between them.

**Trisecting an angle.** A fan-shaped plaza with an angle set into the paving and its three parts
marked out by the best constructions, as paths radiating from the vertex.

**Arc rectification.** An arched walkway, and beside it the straight path that best matches its
length, from each side.

## All of them at once

A single architect could combine them: a circular plaza (the circle), a square court of the same
area set into it, a cube pavilion beside a doubled one, and paths that trisect the plaza's angles.
Each would carry its pair of lines, oversized and undersized, and its marker for the exact answer in
between.

## How close the lines are today

Worked out from the charts in November 2026, once with every entry and once with people's entries
alone (leaving out the search finds made by an AI). As the charts improve, the gap narrows, and the
monument can be updated. The [website's version](https://thor110.github.io/ClassicalGeometryProblems/pages/architecture.html)
is worked out live from the charts.

| Problem | Scale | Best oversized | Best undersized | Gap you would walk between |
|---|---|---|---|---|
| Rectifying The Circle | plaza 100 m across, circumference 314.159265 m | 99.999999% (Claude (Anthropic), AI): +0.10 µm | 99.99999% (Srinivasa Ramanujan): −0.10 µm | 0.20 µm |
| Rectifying The Circle (people only) | plaza 100 m across, circumference 314.159265 m | 99.99999% (Kochanski / Gordon): +0.011 mm | 99.99999% (Srinivasa Ramanujan): −0.10 µm | 0.011 mm |
| Squaring The Circle | circle 100 m across, square side 88.622693 m | 99.999999% (Claude (Anthropic), AI): +0.13 µm | 99.9999999% (Claude (Anthropic), AI): −0.8 nm | 0.13 µm |
| Squaring The Circle (people only) | circle 100 m across, square side 88.622693 m | 99.999% (Srinivasa Ramanujan): +3.76 µm | 99.999% (Edward James Gordon): −0.394 mm | 0.397 mm |
| Doubling The Cube | given edge 10 m, doubled edge 12.599210 m | 99.999998% (Claude (Anthropic), AI): +0.07 µm | 99.999% (Claude (Anthropic), AI): −1.18 µm | 1.25 µm |
| Doubling The Cube (people only) | given edge 10 m, doubled edge 12.599210 m | 98.076% (Edward James Gordon): +80 mm | 98.924% (Edward James Gordon): −45 mm | 126 mm |

At the scale of a building, the best constructions for the circle are closer together than any
builder can lay a line. Two choices follow:

- **Build the gap at its true size**, and let the monument say that the lines meet at the limit of
  what can be built. The marker for perfection then stands between lines no eye can separate.
- **Build a pair you can see**, using constructions further apart, or a much larger scale such as a
  landscape or a land-art piece kilometres across, so the gap is wide enough to walk between.

With people's constructions alone, doubling the cube still leaves a gap you could stand in, about 126 mm on a 10 m cube; the search finds close it to about a thousandth of a millimetre.

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
