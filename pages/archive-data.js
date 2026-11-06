// The archive's data: every charted approximation, who has verified it, and the open places.
// This is the one place the numbers live. The website reads it, and tools/verify.py checks the
// GeoGebra files and .md notes against it. Edit it as plain JSON: keep the quotes and commas.
// Ranks are not stored: the website ranks each side by accuracy (rank 1 is closest to perfect).
//
// Each entry: id (problem-side-accuracy, never changes), side (over/under), marks
// (~ contested, @ too simple, µ micro scale edits), holder, method, circles, lines, acc (the chart
// figure, truncated), precise (a fuller readout, if any), date, geogebra (the id after
// geogebra.org/geometry/), file (the .ggb/.md pair under the problem's folder, without extension),
// note, verified (people who have checked it), disputes (open or closed; see VERIFICATION.md).
const ARCHIVE = {
 "problems": [
  {
   "id": "stc",
   "n": 1,
   "name": "Squaring The Circle",
   "short": "STC",
   "folder": "Approximations/01 Squaring The Circle",
   "task": "Construct a square with the same area as any given circle.",
   "target": "A square of side √π · r (area πr²).",
   "why": "Needs a length of √π. Lindemann proved in 1882 that π is transcendental, so no finite chain of circles and lines reaches it.",
   "entries": [
    {
     "id": "stc-over-99.109",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 1,
     "lines": 20,
     "acc": "99.109",
     "precise": "99.10928741499923",
     "date": "04-11-2025",
     "geogebra": "n2gbkesm",
     "file": "GeoGebra Files/Squared Circle Over/99.109",
     "note": "Re-measured at full precision in November 2026: the chart listed 99.117% oversized.",
     "verified": [],
     "disputes": []
    },
    {
     "id": "stc-over-99.119",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 21,
     "lines": 7,
     "acc": "99.119",
     "precise": "99.11961460044009",
     "date": "28-12-2024",
     "geogebra": "gqncwvc3",
     "file": "GeoGebra Files/Squared Circle Over/99.119",
     "note": "Re-measured at full precision in November 2026: the chart listed 99.139% oversized.",
     "verified": [],
     "disputes": []
    },
    {
     "id": "stc-over-99.283",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 13,
     "lines": 13,
     "acc": "99.283",
     "precise": "99.28301811111724",
     "date": "14-12-2024",
     "geogebra": "dvnhfe3u",
     "file": "GeoGebra Files/Squared Circle Over/99.283",
     "note": "Re-measured at full precision in November 2026: the chart listed 99.253% oversized.",
     "verified": [],
     "disputes": []
    },
    {
     "id": "stc-over-99.356",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 13,
     "lines": 17,
     "acc": "99.356",
     "precise": "",
     "date": "14-12-2024",
     "geogebra": "mgpgm6gk",
     "file": "GeoGebra Files/Squared Circle Over/99.356",
     "note": "",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": []
    },
    {
     "id": "stc-over-99.558",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 13,
     "lines": 25,
     "acc": "99.558",
     "precise": "99.55870872457643",
     "date": "14-12-2024",
     "geogebra": "pfzqcwgu",
     "file": "GeoGebra Files/Squared Circle Over/99.558",
     "note": "Re-measured at full precision in November 2026: the chart listed 99.563% oversized.",
     "verified": [],
     "disputes": []
    },
    {
     "id": "stc-over-99.696",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 25,
     "lines": 8,
     "acc": "99.696",
     "precise": "99.69612973842727",
     "date": "14-12-2024",
     "geogebra": "dxrt3svk",
     "file": "GeoGebra Files/Squared Circle Over/99.696",
     "note": "Re-measured at full precision in November 2026: the chart listed 99.703% oversized.",
     "verified": [],
     "disputes": []
    },
    {
     "id": "stc-over-99.809",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 13,
     "lines": 37,
     "acc": "99.809",
     "precise": "99.80950026343882",
     "date": "08-12-2024",
     "geogebra": "jb6rgjfa",
     "file": "GeoGebra Files/Squared Circle Over/99.809",
     "note": "Re-measured at full precision in November 2026: the chart listed 99.816% oversized.",
     "verified": [],
     "disputes": []
    },
    {
     "id": "stc-over-99.999",
     "side": "over",
     "marks": "",
     "holder": "Srinivasa Ramanujan",
     "method": "Ramanujan's Method",
     "circles": 9,
     "lines": 13,
     "acc": "99.999",
     "precise": "99.99999150859094",
     "date": "1913",
     "geogebra": "f9sfp9mg",
     "file": "GeoGebra Files/Squared Circle Over/99.999-Ramanujan",
     "note": "",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": []
    },
    {
     "id": "stc-under-99.932",
     "side": "under",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 13,
     "lines": 29,
     "acc": "99.932",
     "precise": "99.93219280033432",
     "date": "14-12-2024",
     "geogebra": "aw4nggwg",
     "file": "GeoGebra Files/Squared Circle Under/99.932",
     "note": "Re-measured at full precision in November 2026: the chart listed 99.929% undersized.",
     "verified": [],
     "disputes": []
    },
    {
     "id": "stc-under-99.655",
     "side": "under",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 21,
     "lines": 11,
     "acc": "99.655",
     "precise": "99.65556737848478",
     "date": "28-12-2024",
     "geogebra": "p2ast9yw",
     "file": "GeoGebra Files/Squared Circle Under/99.655",
     "note": "Re-measured at full precision in November 2026: the chart listed 99.644% undersized.",
     "verified": [],
     "disputes": []
    },
    {
     "id": "stc-under-99.253",
     "side": "under",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 13,
     "lines": 17,
     "acc": "99.253",
     "precise": "",
     "date": "14-12-2024",
     "geogebra": "anbgnhsq",
     "file": "",
     "note": "The GeoGebra file for this entry turned out to be a copy of the oversized 99.253% construction, so it was removed. The construction is still on GeoGebra (link), and needs saving to the repository again.",
     "verified": [],
     "disputes": [],
     "notes": "GeoGebra Files/Squared Circle Under/99.253"
    },
    {
     "id": "stc-under-99.150",
     "side": "under",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 13,
     "lines": 20,
     "acc": "99.150",
     "precise": "99.15047322986365",
     "date": "14-12-2024",
     "geogebra": "ajpnpmwa",
     "file": "GeoGebra Files/Squared Circle Under/99.150",
     "note": "Re-measured at full precision in November 2026: the chart listed 99.164% undersized.",
     "verified": [],
     "disputes": []
    },
    {
     "id": "stc-under-99.015",
     "side": "under",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 13,
     "lines": 11,
     "acc": "99.015",
     "precise": "99.01556450524366",
     "date": "14-12-2024",
     "geogebra": "sjdede5r",
     "file": "GeoGebra Files/Squared Circle Under/99.015",
     "note": "Re-measured at full precision in November 2026: the chart listed 99.009% undersized.",
     "verified": [],
     "disputes": []
    },
    {
     "id": "stc-under-95.492",
     "side": "under",
     "marks": "@~",
     "holder": "Edward James Gordon",
     "method": "Circling the Square v1",
     "circles": 7,
     "lines": 6,
     "acc": "95.492",
     "precise": "",
     "date": "2020",
     "geogebra": "jyyqe7rj",
     "file": "GeoGebra Files/Squared Circle Under/95.492",
     "note": "",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": []
    },
    {
     "id": "stc-over-99.99996",
     "side": "over",
     "marks": "µ",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 7,
     "lines": 68,
     "acc": "99.99996",
     "precise": "99.99996544150073",
     "date": "20-06-2024",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.99996",
     "square": "q1",
     "note": "The final square (q1) in its GeoGebra file. Found among Edward's GeoGebra files in November 2026; circles and lines are the steps this square is built from.",
     "verified": [],
     "disputes": []
    },
    {
     "id": "stc-under-99.999",
     "side": "under",
     "marks": "µ",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 7,
     "lines": 60,
     "acc": "99.999",
     "precise": "99.99911186672259",
     "date": "20-06-2024",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.99996",
     "square": "q2",
     "note": "Square q2 in the GeoGebra file, one of the squares built on the way to its final square. Found among Edward's GeoGebra files in November 2026; circles and lines are the steps this square is built from.",
     "verified": [],
     "disputes": [],
     "notes": "GeoGebra Files/Squared Circle Under/99.999"
    },
    {
     "id": "stc-over-99.993",
     "side": "over",
     "marks": "µ",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 7,
     "lines": 46,
     "acc": "99.993",
     "precise": "99.99354562402134",
     "date": "14-12-2024",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.993",
     "square": "q8",
     "note": "The final square (q8) in its GeoGebra file. Found among Edward's GeoGebra files in November 2026; circles and lines are the steps this square is built from.",
     "verified": [],
     "disputes": []
    },
    {
     "id": "stc-over-99.944",
     "side": "over",
     "marks": "µ",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 7,
     "lines": 42,
     "acc": "99.944",
     "precise": "99.94400714415852",
     "date": "14-12-2024",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.993",
     "square": "q7",
     "note": "Square q7 in the GeoGebra file, one of the squares built on the way to its final square. Found among Edward's GeoGebra files in November 2026; circles and lines are the steps this square is built from.",
     "verified": [],
     "disputes": [],
     "notes": "GeoGebra Files/Squared Circle Over/99.944"
    },
    {
     "id": "stc-under-99.956",
     "side": "under",
     "marks": "µ",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 7,
     "lines": 38,
     "acc": "99.956",
     "precise": "99.95692816255126",
     "date": "14-12-2024",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.993",
     "square": "q6",
     "note": "Square q6 in the GeoGebra file, one of the squares built on the way to its final square. Found among Edward's GeoGebra files in November 2026; circles and lines are the steps this square is built from.",
     "verified": [],
     "disputes": [],
     "notes": "GeoGebra Files/Squared Circle Under/99.956"
    },
    {
     "id": "stc-over-99.844",
     "side": "over",
     "marks": "µ",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 7,
     "lines": 34,
     "acc": "99.844",
     "precise": "99.84489338505863",
     "date": "14-12-2024",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.993",
     "square": "q5",
     "note": "Square q5 in the GeoGebra file, one of the squares built on the way to its final square. Found among Edward's GeoGebra files in November 2026; circles and lines are the steps this square is built from.",
     "verified": [],
     "disputes": [],
     "notes": "GeoGebra Files/Squared Circle Over/99.844"
    },
    {
     "id": "stc-under-99.758",
     "side": "under",
     "marks": "µ",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 7,
     "lines": 30,
     "acc": "99.758",
     "precise": "99.75894597375463",
     "date": "14-12-2024",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.993",
     "square": "q4",
     "note": "Square q4 in the GeoGebra file, one of the squares built on the way to its final square. Found among Edward's GeoGebra files in November 2026; circles and lines are the steps this square is built from.",
     "verified": [],
     "disputes": [],
     "notes": "GeoGebra Files/Squared Circle Under/99.758"
    },
    {
     "id": "stc-under-98.968",
     "side": "under",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 7,
     "lines": 18,
     "acc": "98.968",
     "precise": "98.96897985456778",
     "date": "14-12-2024",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.993",
     "square": "q3",
     "note": "Square q3 in the GeoGebra file, one of the squares built on the way to its final square. Found among Edward's GeoGebra files in November 2026; circles and lines are the steps this square is built from.",
     "verified": [],
     "disputes": [],
     "notes": "GeoGebra Files/Squared Circle Under/98.968"
    },
    {
     "id": "stc-over-99.862",
     "side": "over",
     "marks": "µ",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 13,
     "lines": 28,
     "acc": "99.862",
     "precise": "99.86260953814038",
     "date": "01-12-2024",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.862",
     "square": "q4",
     "note": "The final square (q4) in its GeoGebra file. Found among Edward's GeoGebra files in November 2026; circles and lines are the steps this square is built from.",
     "verified": [],
     "disputes": []
    },
    {
     "id": "stc-under-99.484",
     "side": "under",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 13,
     "lines": 24,
     "acc": "99.484",
     "precise": "99.48463511131867",
     "date": "01-12-2024",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.862",
     "square": "q3",
     "note": "Square q3 in the GeoGebra file, one of the squares built on the way to its final square. Found among Edward's GeoGebra files in November 2026; circles and lines are the steps this square is built from.",
     "verified": [],
     "disputes": [],
     "notes": "GeoGebra Files/Squared Circle Under/99.484"
    },
    {
     "id": "stc-under-98.168",
     "side": "under",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 13,
     "lines": 20,
     "acc": "98.168",
     "precise": "98.16833735399295",
     "date": "01-12-2024",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.862",
     "square": "q2",
     "note": "Square q2 in the GeoGebra file, one of the squares built on the way to its final square. Found among Edward's GeoGebra files in November 2026; circles and lines are the steps this square is built from.",
     "verified": [],
     "disputes": [],
     "notes": "GeoGebra Files/Squared Circle Under/98.168"
    },
    {
     "id": "stc-under-99.377",
     "side": "under",
     "marks": "µ",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 13,
     "lines": 31,
     "acc": "99.377",
     "precise": "99.37790232596545",
     "date": "07-12-2024",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Under/99.377",
     "square": "q4",
     "note": "The final square (q4) in its GeoGebra file. Found among Edward's GeoGebra files in November 2026; circles and lines are the steps this square is built from.",
     "verified": [],
     "disputes": []
    },
    {
     "id": "stc-over-99.414",
     "side": "over",
     "marks": "µ",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 13,
     "lines": 27,
     "acc": "99.414",
     "precise": "99.41462065661072",
     "date": "07-12-2024",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Under/99.377",
     "square": "q3",
     "note": "Square q3 in the GeoGebra file, one of the squares built on the way to its final square. Found among Edward's GeoGebra files in November 2026; circles and lines are the steps this square is built from.",
     "verified": [],
     "disputes": [],
     "notes": "GeoGebra Files/Squared Circle Over/99.414"
    },
    {
     "id": "stc-over-96.977",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 13,
     "lines": 15,
     "acc": "96.977",
     "precise": "96.97779239525616",
     "date": "07-12-2024",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Under/99.377",
     "square": "q2",
     "note": "Square q2 in the GeoGebra file, one of the squares built on the way to its final square. Found among Edward's GeoGebra files in November 2026; circles and lines are the steps this square is built from.",
     "verified": [],
     "disputes": [],
     "notes": "GeoGebra Files/Squared Circle Over/96.977"
    },
    {
     "id": "stc-under-98.177",
     "side": "under",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 13,
     "lines": 11,
     "acc": "98.177",
     "precise": "98.17771671737725",
     "date": "07-12-2024",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Under/99.377",
     "square": "q1",
     "note": "Square q1 in the GeoGebra file, one of the squares built on the way to its final square. Found among Edward's GeoGebra files in November 2026; circles and lines are the steps this square is built from.",
     "verified": [],
     "disputes": [],
     "notes": "GeoGebra Files/Squared Circle Under/98.177"
    }
   ]
  },
  {
   "id": "taa",
   "n": 2,
   "name": "Trisecting An Angle",
   "short": "TAA",
   "folder": "Approximations/02 Trisecting An Angle",
   "task": "Divide any given angle into three equal angles.",
   "target": "An angle of exactly θ ÷ 3, for every θ.",
   "why": "For 60°, the third (20°) needs cos 20°, a root of 8x³ − 6x − 1 = 0, a cubic that does not factor. Circles and lines only reach square roots, so Wantzel proved it impossible in general in 1837.",
   "entries": [
    {
     "id": "taa-over-99.317",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Array Casting v2.0",
     "circles": "~6-12+/-",
     "lines": "~2-3+/-",
     "acc": "~99.317",
     "precise": "99.31793149744919",
     "date": "01-12-2024",
     "geogebra": "ydfkxavz",
     "file": "GeoGebra Files/Over/TAA-~99.317",
     "note": "Re-measured at full precision in November 2026: the chart listed ~99.658% undersized. The worst of the three thirds now sets the accuracy, as every third must equal a third of the angle.",
     "verified": [],
     "disputes": []
    },
    {
     "id": "taa-over-91.077",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Array Casting v1.0",
     "circles": "~4-8+/-",
     "lines": "~3-6+/-",
     "acc": "~91.077",
     "precise": "91.07743117124372",
     "date": "01-12-2024",
     "geogebra": "yj7tctaw",
     "file": "GeoGebra Files/Over/TAA-~91.077",
     "note": "Re-measured at full precision in November 2026: the chart listed ~95.538% undersized. The worst of the three thirds now sets the accuracy, as every third must equal a third of the angle.",
     "verified": [],
     "disputes": [],
     "archived": true,
     "archive_reason": "Below the 95% minimum once the worst third is measured."
    }
   ]
  },
  {
   "id": "dtc",
   "n": 3,
   "name": "Doubling The Cube",
   "short": "DTC",
   "folder": "Approximations/03 Doubling The Cube",
   "task": "Construct a cube with twice the volume of any given cube.",
   "target": "An edge of ∛2 · a.",
   "why": "∛2 is a root of x³ − 2 = 0, a cubic that does not factor, so it cannot be built from square roots. Wantzel, 1837.",
   "entries": [
    {
     "id": "dtc-under-97.656",
     "side": "under",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Cube 2 Tesseract v1.0",
     "circles": 13,
     "lines": 30,
     "acc": "97.656",
     "precise": "97.65625000000000",
     "date": "06-06-2024",
     "geogebra": "bmzy5bgb",
     "file": "GeoGebra Files/Under/DTC-97.656",
     "note": "Re-measured at full precision in November 2026: the chart listed 99.227% oversized. The earlier figure came from edge lengths rounded to one decimal place.",
     "verified": [],
     "disputes": []
    },
    {
     "id": "dtc-under-98.924",
     "side": "under",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Cube 2 Tesseract v2.0",
     "circles": 13,
     "lines": 42,
     "acc": "98.924",
     "precise": "98.92478916755539",
     "date": "07-12-2024",
     "geogebra": "yx5e8wnu",
     "file": "GeoGebra Files/Under/DTC-98.924",
     "note": "Re-measured at full precision in November 2026: the chart listed 99.487% oversized. The earlier figure came from edge lengths rounded to one decimal place.",
     "verified": [],
     "disputes": []
    }
   ]
  },
  {
   "id": "rtc",
   "n": 4,
   "name": "Rectifying The Circle",
   "short": "RTC",
   "folder": "Approximations/04 Rectifying The Circle",
   "task": "Construct a straight line as long as the circumference of any given circle.",
   "target": "A segment of length 2πr. Halve it and you have π.",
   "why": "The same wall as squaring the circle: π is transcendental (Lindemann, 1882).",
   "entries": [
    {
     "id": "rtc-over-98.538",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "",
     "circles": 6,
     "lines": 7,
     "acc": "98.538",
     "precise": "",
     "date": "",
     "geogebra": "gmypmfqa",
     "file": "GeoGebra Files/Over/RTC-98.538",
     "note": "",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": []
    },
    {
     "id": "rtc-over-99.596",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "",
     "circles": 13,
     "lines": 9,
     "acc": "99.596",
     "precise": "99.59619104296647",
     "date": "",
     "geogebra": "s5d6kgfs",
     "file": "GeoGebra Files/Over/RTC-99.596",
     "note": "",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": []
    },
    {
     "id": "rtc-over-99.607",
     "side": "over",
     "marks": "µ",
     "holder": "Edward James Gordon",
     "method": "",
     "circles": 9,
     "lines": 4,
     "acc": "99.607",
     "precise": "99.6074651519426",
     "date": "",
     "geogebra": "ryhqksry",
     "file": "GeoGebra Files/Over/RTC-99.607",
     "note": "",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": []
    },
    {
     "id": "rtc-over-99.65",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "",
     "circles": 7,
     "lines": 3,
     "acc": "99.65",
     "precise": "99.65016198300786",
     "date": "",
     "geogebra": "t5bqfckt",
     "file": "GeoGebra Files/Over/RTC-99.650",
     "note": "",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": []
    },
    {
     "id": "rtc-over-99.786",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "",
     "circles": 8,
     "lines": 5,
     "acc": "99.786",
     "precise": "99.78667113012519",
     "date": "",
     "geogebra": "ju6jb78y",
     "file": "GeoGebra Files/Over/RTC-99.786",
     "note": "",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": []
    },
    {
     "id": "rtc-over-99.802",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "",
     "circles": 11,
     "lines": 4,
     "acc": "99.802",
     "precise": "99.80200241997315",
     "date": "",
     "geogebra": "hsybvnu5",
     "file": "GeoGebra Files/Over/RTC-99.802",
     "note": "",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": []
    },
    {
     "id": "rtc-over-99.806",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Euclidean Circumference Approximation",
     "circles": 1,
     "lines": 10,
     "acc": "99.806",
     "precise": "99.806647622550144",
     "date": "",
     "geogebra": "rhqcddpf",
     "file": "GeoGebra Files/Over/RTC-99.806",
     "note": "Walked through step by step on the Constructions page.",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": []
    },
    {
     "id": "rtc-over-99.873",
     "side": "over",
     "marks": "µ",
     "holder": "Edward James Gordon",
     "method": "",
     "circles": 16,
     "lines": 7,
     "acc": "99.873",
     "precise": "99.87336639674726",
     "date": "",
     "geogebra": "rcjzsffq",
     "file": "GeoGebra Files/Over/RTC-99.873",
     "note": "",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": []
    },
    {
     "id": "rtc-over-99.9343",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "",
     "circles": 15,
     "lines": 8,
     "acc": "99.9343",
     "precise": "99.93438016929967",
     "date": "",
     "geogebra": "kycjvbnh",
     "file": "GeoGebra Files/Over/RTC-99.9343",
     "note": "",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": []
    },
    {
     "id": "rtc-over-99.9347",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "",
     "circles": 10,
     "lines": 4,
     "acc": "99.9347",
     "precise": "99.93478707720942",
     "date": "",
     "geogebra": "g7rntemb",
     "file": "GeoGebra Files/Over/RTC-99.9347",
     "note": "",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": []
    },
    {
     "id": "rtc-over-99.971",
     "side": "over",
     "marks": "µ",
     "holder": "Edward James Gordon",
     "method": "",
     "circles": 4,
     "lines": 14,
     "acc": "99.971",
     "precise": "99.97121438042902",
     "date": "",
     "geogebra": "nk5h7gqf",
     "file": "GeoGebra Files/Over/RTC-99.971",
     "note": "",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": []
    },
    {
     "id": "rtc-over-99.997",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "",
     "circles": 7,
     "lines": 5,
     "acc": "99.997",
     "precise": "99.99747444972773",
     "date": "",
     "geogebra": "px4rbkpy",
     "file": "GeoGebra Files/Over/RTC-99.997",
     "note": "",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": []
    },
    {
     "id": "rtc-over-99.9986",
     "side": "over",
     "marks": "µ",
     "holder": "Edward James Gordon",
     "method": "",
     "circles": 10,
     "lines": 7,
     "acc": "99.9986",
     "precise": "99.99865760269533",
     "date": "",
     "geogebra": "yrtbagqh",
     "file": "GeoGebra Files/Over/RTC-99.9986",
     "note": "",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": []
    },
    {
     "id": "rtc-over-99.9987",
     "side": "over",
     "marks": "µ",
     "holder": "Edward James Gordon",
     "method": "",
     "circles": 7,
     "lines": 16,
     "acc": "99.9987",
     "precise": "99.99870460271137",
     "date": "",
     "geogebra": "nygms4nr",
     "file": "GeoGebra Files/Over/RTC-99.9987",
     "note": "",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": []
    },
    {
     "id": "rtc-over-99.9996",
     "side": "over",
     "marks": "µ",
     "holder": "Kochanski / Gordon",
     "method": "Kochanski Gordon Crossover Method",
     "circles": 12,
     "lines": 10,
     "acc": "99.9996",
     "precise": "99.99968125157933",
     "date": "22-12-2025",
     "geogebra": "puardqtn",
     "file": "GeoGebra Files/Over/RTC-99.9996-Kochanski-Gordon",
     "note": "Takes the midpoint between Edward's oversized 99.997% construction and Kochański's undersized 99.998% construction.",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": []
    },
    {
     "id": "rtc-under-99.999",
     "side": "under",
     "marks": "µ",
     "holder": "Edward James Gordon",
     "method": "Microscale Trisection",
     "circles": 9,
     "lines": 13,
     "acc": "99.999",
     "precise": "99.99948805479345",
     "date": "07-11-2025",
     "geogebra": "m6btgcyj",
     "file": "GeoGebra Files/Under/RTC-99.999",
     "note": "",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": []
    },
    {
     "id": "rtc-under-99.998",
     "side": "under",
     "marks": "",
     "holder": "Adam Adamandy Kochanski",
     "method": "Kochański's approximation",
     "circles": 5,
     "lines": 7,
     "acc": "99.998",
     "precise": "99.99811194856672",
     "date": "1685",
     "geogebra": "hhjyc93h",
     "file": "GeoGebra Files/Under/RTC-99.998-Kochanski",
     "note": "A textbook form of it is walked through on the Constructions page.",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": []
    },
    {
     "id": "rtc-under-99.9875",
     "side": "under",
     "marks": "µ",
     "holder": "Edward James Gordon",
     "method": "",
     "circles": 4,
     "lines": 14,
     "acc": "99.9875",
     "precise": "99.98755028618388",
     "date": "",
     "geogebra": "cbmncq7h",
     "file": "GeoGebra Files/Under/RTC-99.9875",
     "note": "",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": []
    },
    {
     "id": "rtc-under-99.9874",
     "side": "under",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "",
     "circles": 9,
     "lines": 6,
     "acc": "99.9874",
     "precise": "99.98745429466945",
     "date": "",
     "geogebra": "scvxwyva",
     "file": "GeoGebra Files/Under/RTC-99.9874",
     "note": "Found with the search space method.",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": []
    },
    {
     "id": "rtc-under-99.812",
     "side": "under",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "",
     "circles": 8,
     "lines": 4,
     "acc": "99.812",
     "precise": "",
     "date": "08-11-2025",
     "geogebra": "zczfbfzp",
     "file": "GeoGebra Files/Under/RTC-99.812",
     "note": "",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": []
    },
    {
     "id": "rtc-under-99.809",
     "side": "under",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "",
     "circles": 9,
     "lines": 4,
     "acc": "99.809",
     "precise": "",
     "date": "08-11-2025",
     "geogebra": "hhks3r3z",
     "file": "GeoGebra Files/Under/RTC-99.809",
     "note": "",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": []
    },
    {
     "id": "rtc-under-99.443",
     "side": "under",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "",
     "circles": 10,
     "lines": 5,
     "acc": "99.443",
     "precise": "99.44303378543306",
     "date": "08-11-2025",
     "geogebra": "at9txh3h",
     "file": "GeoGebra Files/Under/RTC-99.443",
     "note": "",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": []
    },
    {
     "id": "rtc-under-99.376",
     "side": "under",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "",
     "circles": 8,
     "lines": 4,
     "acc": "99.376",
     "precise": "99.37681013608419",
     "date": "",
     "geogebra": "mpnw4ssy",
     "file": "GeoGebra Files/Under/RTC-99.376",
     "note": "Re-measured at full precision in November 2026: the chart listed 99.374% undersized.",
     "verified": [],
     "disputes": []
    },
    {
     "id": "rtc-under-98.165",
     "side": "under",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "",
     "circles": 6,
     "lines": 4,
     "acc": "98.165",
     "precise": "98.16518509675318",
     "date": "",
     "geogebra": "tzdubzms",
     "file": "GeoGebra Files/Under/RTC-98.165",
     "note": "",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": []
    },
    {
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "",
     "precise": "99.97953327991887",
     "date": "",
     "geogebra": "",
     "note": "An adjustment of the undersized 99.999% method.",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": [],
     "id": "rtc-over-99.979",
     "side": "over",
     "circles": 6,
     "lines": 8,
     "acc": "99.979",
     "file": "GeoGebra Files/Over/RTC-99.979"
    },
    {
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "",
     "precise": "99.98238331842036",
     "date": "11-11-2025",
     "geogebra": "",
     "note": "Counted as the 9 circles and 2 lines the result is built from; the file also holds 16 circles and 3 lines of exploration that do not feed it.",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": [],
     "id": "rtc-under-99.982",
     "side": "under",
     "circles": 9,
     "lines": 2,
     "acc": "99.982",
     "file": "GeoGebra Files/Under/RTC-99.982"
    },
    {
     "marks": "µ",
     "holder": "Edward James Gordon",
     "method": "",
     "precise": "99.98997416958272",
     "date": "11-11-2025",
     "geogebra": "",
     "note": "An adjustment of the 99.982% undersized construction: a small circle (about 0.7% of the main radius) makes the final point. Counted as the 20 circles and 7 lines the result is built from; the file also holds reference marks and exploration that do not feed it.",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": [],
     "id": "rtc-over-99.989",
     "side": "over",
     "circles": 20,
     "lines": 7,
     "acc": "99.989",
     "file": "GeoGebra Files/Over/RTC-99.989"
    }
   ]
  },
  {
   "id": "ar",
   "n": 5,
   "name": "Arc Rectification",
   "short": "AR",
   "folder": "Approximations/05 Arc Rectification",
   "task": "Construct a straight line as long as any given arc.",
   "target": "A segment of length r · θ (θ in radians), for every arc.",
   "why": "Contains rectifying the circle as a special case, so it inherits the same wall. A single method would also have to work for every arc at once.",
   "entries": [
    {
     "id": "ar-over-95",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "",
     "circles": 1,
     "lines": 6,
     "acc": "~95",
     "precise": "",
     "date": "",
     "geogebra": "nwxxhgju",
     "file": "GeoGebra Files/Arc Rectification Over/AR~95.000",
     "note": "Works for angles between 90° and 180°.",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": []
    }
   ]
  }
 ],
 "verifiers": {
  "people": [
   {
    "name": "Edward James Gordon",
    "role": "Maintainer",
    "since": "2024",
    "how": "Rebuilds and measures each construction in GeoGebra."
   }
  ],
  "ai": [
   {
    "name": "Claude (Anthropic)",
    "role": "Independent automated checker",
    "since": "2026-11",
    "how": "Runs tools/verify.py, which rebuilds every GeoGebra file from its starting points with its own geometry code, checks that only straightedge and compass steps feed the result, and recomputes the accuracy. Anyone can run the same script and get the same answer."
   }
  ]
 },
 "families": [
  {
   "name": "Circling the Square",
   "problem": "stc",
   "by": "Edward James Gordon",
   "about": "Edward's name for his methods of squaring the circle (v1.0 and v2.0 are chapters in his paper; later variants are listed as additional)."
  },
  {
   "name": "Array Casting",
   "problem": "taa",
   "by": "Edward James Gordon",
   "about": "Edward's methods for trisecting an angle by casting an array of circles across it."
  },
  {
   "name": "Cube 2 Tesseract",
   "problem": "dtc",
   "by": "Edward James Gordon",
   "about": "Edward's methods for doubling the cube, grown from a pattern that doubles a cube's edge."
  }
 ],
 "wanted": [
  {
   "problem": "stc",
   "who": "Srinivasa Ramanujan",
   "year": "1914",
   "value": "π ≈ (9² + 19²/22)^(1/4) = 3.14159265258…",
   "source": "Ramanujan, “Modular equations and approximations to π”, Quarterly Journal of Mathematics, 1914."
  },
  {
   "problem": "rtc",
   "who": "Jacob de Gelder",
   "year": "1849",
   "value": "π ≈ 355/113 = 3.14159292…",
   "source": "Construction of 355/113, cited in histories of π."
  },
  {
   "problem": "rtc",
   "who": "E. W. Hobson",
   "year": "1913",
   "value": "π ≈ 6/5 · (1 + φ) = 3.14164…",
   "source": "Hobson, “Squaring the Circle: A History of the Problem”, 1913."
  },
  {
   "problem": "taa",
   "who": "Albrecht Dürer",
   "year": "1525",
   "value": "approximate trisection; accuracy depends on the angle",
   "source": "Dürer, “Underweysung der Messung”, 1525."
  }
 ]
};
