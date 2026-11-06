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

### Two kinds of accuracy

A construction drawn on paper or in GeoGebra is exact. Built on the ground, every crossing point is
staked out by hand. Marking each one to ±5 mm (tape, cord and pegs used with care) and rebuilding
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

## Notes

- The pair of lines need not come from the same method holder. The monument records whoever holds
  each side of the chart at the time it is built, so it is also a monument to the people who tried.
- Construction itself could follow the rules: laid out on site with stakes, cords and a rope compass,
  the way surveyors and builders worked for thousands of years, as in
  [Rope Around The Clock](https://thor110.github.io/ClassicalGeometryProblems/pages/paper-rope-around-the-clock.html).
