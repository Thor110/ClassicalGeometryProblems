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
// known_issue: why an entry is flagged by tools/verify.py and what is being done; it is listed but no
// longer fails the site check, so that only new problems do.
// holders: the full names behind each method holder, so a verification is counted as self-verification
// only when it is by one of those people (full names, compared without regard to case or accents).
// derived_pi: the π chart is worked out from the circle rectifications (see Approximations/06 Pi
// Approximations); it lists only the π versions drawn in GeoGebra, by the rectification they come from.
// precise is worked out by tools/verify.py to 50 significant digits and shown to 32.
// origin (not shown on the site): where the entry's point of origin can be traced, for the day
// someone asks. kind is one of: historical (published, with the source), maintainer (the
// maintainer's own work, backed by papers, his GeoGebra account and his files), session (found or
// drawn in the maintainer's own sessions with Claude), submitted (sent in by someone else: the
// construction can be checked, but who first found it cannot). evidence lists what backs it.
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
     "lines": 24,
     "acc": "99.109",
     "precise": "99.109287414999247924824150177944",
     "date": "04-11-2025",
     "geogebra": "n2gbkesm",
     "file": "GeoGebra Files/Squared Circle Over/99.109",
     "note": "Re-measured at full precision in November 2026: the chart listed 99.117% oversized.",
     "verified": [],
     "disputes": [],
     "count_history": "Counted 1 circles, 20 lines before the counting rules (version 1.0, November 2026) were written down.",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/n2gbkesm",
       "GeoGebra file in the archive, dated 04-11-2025"
      ]
     }
    },
    {
     "id": "stc-over-99.119",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 17,
     "lines": 7,
     "acc": "99.119",
     "precise": "99.119614600440093701409221415151",
     "date": "28-12-2024",
     "geogebra": "gqncwvc3",
     "file": "GeoGebra Files/Squared Circle Over/99.119",
     "note": "Re-measured at full precision in November 2026: the chart listed 99.139% oversized.",
     "verified": [],
     "disputes": [],
     "count_history": "Counted 21 circles, 7 lines before the counting rules (version 1.0, November 2026) were written down.",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/gqncwvc3",
       "GeoGebra file in the archive, dated 28-12-2024"
      ]
     }
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
     "precise": "99.283018111117233374635516030849",
     "date": "14-12-2024",
     "geogebra": "dvnhfe3u",
     "file": "GeoGebra Files/Squared Circle Over/99.283",
     "note": "Re-measured at full precision in November 2026: the chart listed 99.253% oversized.",
     "verified": [],
     "disputes": [
      {
       "status": "closed",
       "kind": "duplicate",
       "by": "Claude (Anthropic), AI checker",
       "summary": "The undersized 99.253% entry and this entry are the same square, from the same starting points and the same circle. The undersized entry's file (recovered from GeoGebra, geogebra.org/geometry/anbgnhsq) draws it with 4 more lines and measures 99.283% oversized, not undersized.",
       "outcome": "Upheld: the undersized 99.253% entry was removed as a duplicate (November 2026)."
      }
     ],
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/dvnhfe3u",
       "GeoGebra file in the archive, dated 14-12-2024"
      ]
     }
    },
    {
     "id": "stc-over-99.356",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 13,
     "lines": 15,
     "acc": "99.356",
     "precise": "99.356325891573637809425818434204",
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
     "disputes": [],
     "count_history": "Counted 13 circles, 17 lines before the counting rules (version 1.0, November 2026) were written down.",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/mgpgm6gk",
       "GeoGebra file in the archive, dated 14-12-2024"
      ]
     }
    },
    {
     "id": "stc-over-99.558",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 13,
     "lines": 17,
     "acc": "99.558",
     "precise": "99.558708724576435308595028742375",
     "date": "14-12-2024",
     "geogebra": "pfzqcwgu",
     "file": "GeoGebra Files/Squared Circle Over/99.558",
     "note": "Re-measured at full precision in November 2026: the chart listed 99.563% oversized.",
     "verified": [],
     "disputes": [],
     "count_history": "Counted 13 circles, 25 lines before the counting rules (version 1.0, November 2026) were written down.",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/pfzqcwgu",
       "GeoGebra file in the archive, dated 14-12-2024"
      ]
     }
    },
    {
     "id": "stc-over-99.696",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 24,
     "lines": 9,
     "acc": "99.696",
     "precise": "99.696129738427305868037320776129",
     "date": "14-12-2024",
     "geogebra": "dxrt3svk",
     "file": "GeoGebra Files/Squared Circle Over/99.696",
     "note": "Re-measured at full precision in November 2026: the chart listed 99.703% oversized.",
     "verified": [],
     "disputes": [],
     "count_history": "Counted 25 circles, 8 lines before the counting rules (version 1.0, November 2026) were written down.",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/dxrt3svk",
       "GeoGebra file in the archive, dated 14-12-2024"
      ]
     }
    },
    {
     "id": "stc-over-99.809",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 13,
     "lines": 29,
     "acc": "99.809",
     "precise": "99.809500263438838204700515266702",
     "date": "08-12-2024",
     "geogebra": "jb6rgjfa",
     "file": "GeoGebra Files/Squared Circle Over/99.809",
     "note": "Re-measured at full precision in November 2026: the chart listed 99.816% oversized.",
     "verified": [],
     "disputes": [],
     "count_history": "Counted 13 circles, 37 lines before the counting rules (version 1.0, November 2026) were written down.",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/jb6rgjfa",
       "GeoGebra file in the archive, dated 08-12-2024"
      ]
     }
    },
    {
     "id": "stc-over-99.999",
     "side": "over",
     "marks": "",
     "holder": "Srinivasa Ramanujan",
     "method": "Ramanujan's Method",
     "circles": 9,
     "lines": 15,
     "acc": "99.99999",
     "precise": "99.999991508632134162913741597801",
     "date": "1913",
     "geogebra": "f9sfp9mg",
     "file": "GeoGebra Files/Squared Circle Over/99.999-Ramanujan",
     "note": "Shown to more places from November 2026 (it was 99.999%), so that the chart reads in order: its precise value is 99.999991508%.",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": [],
     "count_history": "Counted 9 circles, 13 lines before the counting rules (version 1.0, November 2026) were written down.",
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: Ramanujan, \"Squaring the circle\", Journal of the Indian Mathematical Society, 1913"
      ]
     }
    },
    {
     "id": "stc-under-99.932",
     "side": "under",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 13,
     "lines": 21,
     "acc": "99.932",
     "precise": "99.932192800334345258774925954507",
     "date": "14-12-2024",
     "geogebra": "aw4nggwg",
     "file": "GeoGebra Files/Squared Circle Under/99.932",
     "note": "Re-measured at full precision in November 2026: the chart listed 99.929% undersized.",
     "verified": [],
     "disputes": [],
     "count_history": "Counted 13 circles, 29 lines before the counting rules (version 1.0, November 2026) were written down.",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/aw4nggwg",
       "GeoGebra file in the archive, dated 14-12-2024"
      ]
     }
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
     "precise": "99.655567378484790618963502164071",
     "date": "28-12-2024",
     "geogebra": "p2ast9yw",
     "file": "GeoGebra Files/Squared Circle Under/99.655",
     "note": "Re-measured at full precision in November 2026: the chart listed 99.644% undersized.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/p2ast9yw",
       "GeoGebra file in the archive, dated 28-12-2024"
      ]
     }
    },
    {
     "id": "stc-under-99.150",
     "side": "under",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 13,
     "lines": 16,
     "acc": "99.150",
     "precise": "99.150473229863650914777974872626",
     "date": "14-12-2024",
     "geogebra": "ajpnpmwa",
     "file": "GeoGebra Files/Squared Circle Under/99.150",
     "note": "Re-measured at full precision in November 2026: the chart listed 99.164% undersized.",
     "verified": [],
     "disputes": [],
     "count_history": "Counted 13 circles, 20 lines before the counting rules (version 1.0, November 2026) were written down.",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/ajpnpmwa",
       "GeoGebra file in the archive, dated 14-12-2024"
      ]
     }
    },
    {
     "id": "stc-under-99.015",
     "side": "under",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Circling the Square (additional)",
     "circles": 13,
     "lines": 7,
     "acc": "99.015",
     "precise": "99.015564505243640999729075498713",
     "date": "14-12-2024",
     "geogebra": "sjdede5r",
     "file": "GeoGebra Files/Squared Circle Under/99.015",
     "note": "Re-measured at full precision in November 2026: the chart listed 99.009% undersized.",
     "verified": [],
     "disputes": [],
     "count_history": "Counted 13 circles, 11 lines before the counting rules (version 1.0, November 2026) were written down.",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/sjdede5r",
       "GeoGebra file in the archive, dated 14-12-2024"
      ]
     }
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
     "precise": "95.492965855137201461330258023509",
     "date": "2020",
     "geogebra": "jyyqe7rj",
     "file": "GeoGebra Files/Squared Circle Under/95.492",
     "note": "Marked too simple and contested: constructions this simple appear in ancient sources such as the Śulba Sūtras of Vedic India, and in architecture, so its first discoverer may never be known.",
     "verified": [
      {
       "by": "Edward James Gordon",
       "kind": "person",
       "how": "GeoGebra measuring tools"
      }
     ],
     "disputes": [],
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "paper: Circling the Square (pages/paper-three-classic-geometry-problems.html)",
       "maintainer's GeoGebra account: geogebra.org/geometry/jyyqe7rj",
       "GeoGebra file in the archive, dated 2020"
      ]
     }
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
     "precise": "99.999965441500719454120912166791",
     "date": "20-06-2024",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.99996",
     "square": "q1",
     "note": "The final square (q1) in its GeoGebra file. Found among Edward's GeoGebra files in November 2026; circles and lines are the steps this square is built from.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "GeoGebra file in the archive, dated 20-06-2024"
      ]
     }
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
     "precise": "99.999111866722590868232963257280",
     "date": "20-06-2024",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.99996",
     "square": "q2",
     "note": "Square q2 in the GeoGebra file, one of the squares built on the way to its final square. Found among Edward's GeoGebra files in November 2026; circles and lines are the steps this square is built from.",
     "verified": [],
     "disputes": [],
     "notes": "GeoGebra Files/Squared Circle Under/99.999",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "GeoGebra file in the archive, dated 20-06-2024"
      ]
     }
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
     "precise": "99.993545624048502617292926273577",
     "date": "14-12-2024",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.993",
     "square": "q8",
     "note": "The final square (q8) in its GeoGebra file. Found among Edward's GeoGebra files in November 2026; circles and lines are the steps this square is built from.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "GeoGebra file in the archive, dated 14-12-2024"
      ]
     }
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
     "precise": "99.944007144185262083140923806307",
     "date": "14-12-2024",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.993",
     "square": "q7",
     "note": "Square q7 in the GeoGebra file, one of the squares built on the way to its final square. Found among Edward's GeoGebra files in November 2026; circles and lines are the steps this square is built from.",
     "verified": [],
     "disputes": [],
     "notes": "GeoGebra Files/Squared Circle Over/99.944",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "GeoGebra file in the archive, dated 14-12-2024"
      ]
     }
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
     "precise": "99.956928162563343671500428429842",
     "date": "14-12-2024",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.993",
     "square": "q6",
     "note": "Square q6 in the GeoGebra file, one of the squares built on the way to its final square. Found among Edward's GeoGebra files in November 2026; circles and lines are the steps this square is built from.",
     "verified": [],
     "disputes": [],
     "notes": "GeoGebra Files/Squared Circle Under/99.956",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "GeoGebra file in the archive, dated 14-12-2024"
      ]
     }
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
     "precise": "99.844893385033520546000847359696",
     "date": "14-12-2024",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.993",
     "square": "q5",
     "note": "Square q5 in the GeoGebra file, one of the squares built on the way to its final square. Found among Edward's GeoGebra files in November 2026; circles and lines are the steps this square is built from.",
     "verified": [],
     "disputes": [],
     "notes": "GeoGebra Files/Squared Circle Over/99.844",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "GeoGebra file in the archive, dated 14-12-2024"
      ]
     }
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
     "precise": "99.758945973761597056127418950418",
     "date": "14-12-2024",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.993",
     "square": "q4",
     "note": "Square q4 in the GeoGebra file, one of the squares built on the way to its final square. Found among Edward's GeoGebra files in November 2026; circles and lines are the steps this square is built from.",
     "verified": [],
     "disputes": [],
     "notes": "GeoGebra Files/Squared Circle Under/99.758",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "GeoGebra file in the archive, dated 14-12-2024"
      ]
     }
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
     "precise": "98.968979854568502265892528343095",
     "date": "14-12-2024",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.993",
     "square": "q3",
     "note": "Square q3 in the GeoGebra file, one of the squares built on the way to its final square. Found among Edward's GeoGebra files in November 2026; circles and lines are the steps this square is built from.",
     "verified": [],
     "disputes": [],
     "notes": "GeoGebra Files/Squared Circle Under/98.968",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "GeoGebra file in the archive, dated 14-12-2024"
      ]
     }
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
     "precise": "99.862609538140384333493588184923",
     "date": "01-12-2024",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.862",
     "square": "q4",
     "note": "The final square (q4) in its GeoGebra file. Found among Edward's GeoGebra files in November 2026; circles and lines are the steps this square is built from.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "GeoGebra file in the archive, dated 01-12-2024"
      ]
     }
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
     "precise": "99.484635111318651629508080807114",
     "date": "01-12-2024",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.862",
     "square": "q3",
     "note": "Square q3 in the GeoGebra file, one of the squares built on the way to its final square. Found among Edward's GeoGebra files in November 2026; circles and lines are the steps this square is built from.",
     "verified": [],
     "disputes": [],
     "notes": "GeoGebra Files/Squared Circle Under/99.484",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "GeoGebra file in the archive, dated 01-12-2024"
      ]
     }
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
     "precise": "98.168337353992961803732552073176",
     "date": "01-12-2024",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.862",
     "square": "q2",
     "note": "Square q2 in the GeoGebra file, one of the squares built on the way to its final square. Found among Edward's GeoGebra files in November 2026; circles and lines are the steps this square is built from.",
     "verified": [],
     "disputes": [],
     "notes": "GeoGebra Files/Squared Circle Under/98.168",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "GeoGebra file in the archive, dated 01-12-2024"
      ]
     }
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
     "precise": "99.377902325965436534146421256259",
     "date": "07-12-2024",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Under/99.377",
     "square": "q4",
     "note": "The final square (q4) in its GeoGebra file. Found among Edward's GeoGebra files in November 2026; circles and lines are the steps this square is built from.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "GeoGebra file in the archive, dated 07-12-2024"
      ]
     }
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
     "precise": "99.414620656610733275405353320330",
     "date": "07-12-2024",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Under/99.377",
     "square": "q3",
     "note": "Square q3 in the GeoGebra file, one of the squares built on the way to its final square. Found among Edward's GeoGebra files in November 2026; circles and lines are the steps this square is built from.",
     "verified": [],
     "disputes": [],
     "notes": "GeoGebra Files/Squared Circle Over/99.414",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "GeoGebra file in the archive, dated 07-12-2024"
      ]
     }
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
     "precise": "96.977792395256153676208054319678",
     "date": "07-12-2024",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Under/99.377",
     "square": "q2",
     "note": "Square q2 in the GeoGebra file, one of the squares built on the way to its final square. Found among Edward's GeoGebra files in November 2026; circles and lines are the steps this square is built from.",
     "verified": [],
     "disputes": [],
     "notes": "GeoGebra Files/Squared Circle Over/96.977",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "GeoGebra file in the archive, dated 07-12-2024"
      ]
     }
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
     "precise": "98.177716717377246083131811884125",
     "date": "07-12-2024",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Under/99.377",
     "square": "q1",
     "note": "Square q1 in the GeoGebra file, one of the squares built on the way to its final square. Found among Edward's GeoGebra files in November 2026; circles and lines are the steps this square is built from.",
     "verified": [],
     "disputes": [],
     "notes": "GeoGebra Files/Squared Circle Under/98.177",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "GeoGebra file in the archive, dated 07-12-2024"
      ]
     }
    },
    {
     "id": "stc-over-99.922",
     "side": "over",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Search find: 6 circles, 4 lines",
     "circles": 6,
     "lines": 4,
     "acc": "99.922",
     "precise": "99.922021846135431205393064218938",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.922-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search over constructions, at Edward James Gordon's request.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), by the search tools, with the maintainer watching"
      ]
     }
    },
    {
     "id": "stc-over-99.9998",
     "side": "over",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Search find: 6 circles, 5 lines",
     "circles": 6,
     "lines": 5,
     "acc": "99.9998",
     "precise": "99.999851262127338858952494469650",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.9998-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search over constructions, at Edward James Gordon's request.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), by the search tools, with the maintainer watching"
      ]
     }
    },
    {
     "id": "stc-over-99.999999",
     "side": "over",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Search find: 9 circles, 6 lines",
     "circles": 9,
     "lines": 6,
     "acc": "99.999999",
     "precise": "99.999999711747514344270373475796",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.999999-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search over constructions, at Edward James Gordon's request.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), by the search tools, with the maintainer watching"
      ]
     }
    },
    {
     "id": "stc-under-99.99998",
     "side": "under",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Search find: 8 circles, 4 lines",
     "circles": 8,
     "lines": 4,
     "acc": "99.99998",
     "precise": "99.999984450007743009184636590610",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Under/99.99998-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search over constructions, at Edward James Gordon's request. One crossing it depends on is shallow (10.1°), so it is harder to place accurately on paper.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), by the search tools, with the maintainer watching"
      ]
     }
    },
    {
     "id": "stc-under-99.9999994",
     "side": "under",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Search find: 7 circles, 6 lines",
     "circles": 7,
     "lines": 6,
     "acc": "99.9999994",
     "precise": "99.999999410064833173310895356216",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Under/99.9999994-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search over constructions, at Edward James Gordon's request.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), by the search tools, with the maintainer watching"
      ]
     }
    },
    {
     "id": "stc-over-99.99999157",
     "side": "over",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Search find: 8 circles, 4 lines",
     "circles": 8,
     "lines": 4,
     "acc": "99.99999157",
     "precise": "99.999991572722291224383932207322",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.99999157-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search over constructions, at Edward James Gordon's request.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), by the search tools, with the maintainer watching"
      ]
     }
    },
    {
     "id": "stc-under-99.9999999",
     "side": "under",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Search find: 10 circles, 6 lines",
     "circles": 10,
     "lines": 6,
     "acc": "99.9999999",
     "precise": "99.999999998151908044486130554640",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Under/99.9999999-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search over constructions, at Edward James Gordon's request.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), by the search tools, with the maintainer watching"
      ]
     }
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
     "circles": 9,
     "lines": 3,
     "acc": "~99.317",
     "precise": "99.317931497448995566513368229754",
     "date": "01-12-2024",
     "geogebra": "ydfkxavz",
     "file": "GeoGebra Files/Over/TAA-~99.317",
     "note": "Re-measured at full precision in November 2026: the chart listed ~99.658% undersized. The worst of the three thirds now sets the accuracy, as every third must equal a third of the angle.",
     "verified": [],
     "disputes": [],
     "count_history": "Counted ~6-12+/- circles, ~2-3+/- lines before the counting rules (version 1.0, November 2026) were written down.",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "paper: Circling the Square (pages/paper-three-classic-geometry-problems.html)",
       "maintainer's GeoGebra account: geogebra.org/geometry/ydfkxavz",
       "GeoGebra file in the archive, dated 01-12-2024"
      ]
     },
     "known_issue": "its result depends on points placed by hand (Array Casting adjusts its array by eye, as the paper describes); waiting for the maintainer to decide how it is charted"
    },
    {
     "id": "taa-over-91.077",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Array Casting v1.0",
     "circles": 4,
     "lines": 1,
     "acc": "~91.077",
     "precise": "91.077431171243714272418485660140",
     "date": "01-12-2024",
     "geogebra": "yj7tctaw",
     "file": "GeoGebra Files/Over/TAA-~91.077",
     "note": "Re-measured at full precision in November 2026: the chart listed ~95.538% undersized. The worst of the three thirds now sets the accuracy, as every third must equal a third of the angle.",
     "verified": [],
     "disputes": [],
     "archived": true,
     "archive_reason": "Below the 95% minimum once the worst third is measured.",
     "count_history": "Counted ~4-8+/- circles, ~3-6+/- lines before the counting rules (version 1.0, November 2026) were written down.",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "paper: Circling the Square (pages/paper-three-classic-geometry-problems.html)",
       "maintainer's GeoGebra account: geogebra.org/geometry/yj7tctaw",
       "GeoGebra file in the archive, dated 01-12-2024"
      ]
     },
     "known_issue": "its result depends on points placed by hand (Array Casting adjusts its array by eye, as the paper describes); waiting for the maintainer to decide how it is charted"
    },
    {
     "id": "taa-over-96.305",
     "side": "over",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Search find: 2 circles, 2 lines (any angle)",
     "circles": 2,
     "lines": 2,
     "acc": "96.305",
     "precise": "96.305454252905199430812908542939",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Over/TAA-96.305-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search, at Edward James Gordon's request. A general method: it works for any angle, with no point placed by eye. The chart figure is its worst case between 30° and 150°, which is at 150.00°, the angle the file is drawn at. Its sweep shows the full range where it holds 95%.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), by the search tools, with the maintainer watching"
      ]
     }
    },
    {
     "id": "taa-over-98.902",
     "side": "over",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Search find: 3 circles, 3 lines (any angle)",
     "circles": 3,
     "lines": 3,
     "acc": "98.902",
     "precise": "98.902162603304244105298421350430",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Over/TAA-98.902-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search, at Edward James Gordon's request. A general method: it works for any angle, with no point placed by eye. The chart figure is its worst case between 30° and 150°, which is at 107.52°, the angle the file is drawn at. Its sweep shows the full range where it holds 95%.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), by the search tools, with the maintainer watching"
      ]
     }
    },
    {
     "id": "taa-over-99.051",
     "side": "over",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Search find: 4 circles, 4 lines (any angle)",
     "circles": 4,
     "lines": 4,
     "acc": "99.051",
     "precise": "99.051569874431144465736286739277",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Over/TAA-99.051-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search, at Edward James Gordon's request. A general method: it works for any angle, with no point placed by eye. The chart figure is its worst case between 30° and 150°, which is at 105.08°, the angle the file is drawn at. Its sweep shows the full range where it holds 95%.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), by the search tools, with the maintainer watching"
      ]
     }
    },
    {
     "id": "taa-under-99.467",
     "side": "under",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Search find: 4 circles, 3 lines (any angle)",
     "circles": 4,
     "lines": 3,
     "acc": "99.467",
     "precise": "99.467249472200414370533784321126",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Over/TAA-99.467-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search, at Edward James Gordon's request. A general method: it works for any angle, with no point placed by eye. The chart figure is its worst case between 30° and 150°, which is at 150.00°, the angle the file is drawn at. Its sweep shows the full range where it holds 95%.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), by the search tools, with the maintainer watching"
      ]
     }
    },
    {
     "id": "taa-over-99.726",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Complicated Attempt",
     "circles": 5,
     "lines": 5,
     "acc": "99.726",
     "date": "",
     "geogebra": "fhbn5sry",
     "file": "GeoGebra Files/Over/TAA-99.726",
     "note": "Recovered from Edward's GeoGebra account in November 2026. Drawn at 81.6°; 95% or better for angles from 56° to 153° (99.490% at 90°, 99.370% at 120°), falling to 87.174% at 30°. Point D, anywhere on the bisector, only sets the size.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/fhbn5sry",
       "GeoGebra file in the archive (re-saved from the account in November 2026, so its original date is not recorded)"
      ]
     },
     "precise": "99.726139137270493529120934945039"
    },
    {
     "id": "taa-over-97.995",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Incorrect Proof",
     "circles": 4,
     "lines": 2,
     "acc": "97.995",
     "date": "",
     "geogebra": "mknfrgkm",
     "file": "GeoGebra Files/Over/TAA-97.995",
     "note": "Recovered from Edward's GeoGebra account in November 2026. Exact at 90°, a right angle, which can be trisected exactly; dragging the angle shows it is not a general trisection, hence its name. Drawn at 81.6°; 95% or better from 72° to 128°, 75.880% at 30°.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/mknfrgkm",
       "GeoGebra file in the archive (re-saved from the account in November 2026, so its original date is not recorded)"
      ]
     },
     "precise": "97.995491060509379984006623261114"
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
     "circles": 7,
     "lines": 6,
     "acc": "97.656",
     "precise": "97.656250000000000000000000000000",
     "date": "06-06-2024",
     "geogebra": "bmzy5bgb",
     "file": "GeoGebra Files/Under/DTC-97.656",
     "note": "Re-measured at full precision in November 2026: the chart listed 99.227% oversized. The earlier figure came from edge lengths rounded to one decimal place.",
     "verified": [],
     "disputes": [],
     "count_history": "Counted 13 circles, 30 lines before the counting rules (version 1.0, November 2026) were written down.",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "paper: Circling the Square (pages/paper-three-classic-geometry-problems.html)",
       "maintainer's GeoGebra account: geogebra.org/geometry/bmzy5bgb",
       "GeoGebra file in the archive, dated 06-06-2024"
      ]
     }
    },
    {
     "id": "dtc-under-98.924",
     "side": "under",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Cube 2 Tesseract v2.0",
     "circles": 13,
     "lines": 20,
     "acc": "98.924",
     "precise": "98.924789167555342663978119778077",
     "date": "07-12-2024",
     "geogebra": "yx5e8wnu",
     "file": "GeoGebra Files/Under/DTC-98.924",
     "note": "Re-measured at full precision in November 2026: the chart listed 99.487% oversized. The earlier figure came from edge lengths rounded to one decimal place.",
     "verified": [],
     "disputes": [],
     "count_history": "Counted 13 circles, 42 lines before the counting rules (version 1.0, November 2026) were written down.",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "paper: Circling the Square (pages/paper-three-classic-geometry-problems.html)",
       "maintainer's GeoGebra account: geogebra.org/geometry/yx5e8wnu",
       "GeoGebra file in the archive, dated 07-12-2024"
      ]
     }
    },
    {
     "marks": "",
     "geogebra": "",
     "disputes": [],
     "verified": [],
     "precise": "98.076211353315940291169512258809",
     "id": "dtc-over-98.076",
     "side": "over",
     "holder": "Edward James Gordon",
     "method": "Three Minus Root Three",
     "circles": 5,
     "lines": 0,
     "acc": "98.076",
     "date": "06-11-2026",
     "file": "GeoGebra Files/Over/DTC-98.076",
     "note": "Edward's idea: take three edges and subtract the cube's long diagonal (√3 edges). He thought it needed a 3D step, but √3 can be drawn in the plane, so this is a straightedge and compass construction. AI-assisted: Claude drew the plane construction and wrote the GeoGebra file; awaiting Edward's check in GeoGebra.",
     "origin": {
      "kind": "session",
      "evidence": [
       "the maintainer's idea, drawn with Claude in the maintainer's own session (November 2026)"
      ]
     }
    },
    {
     "id": "dtc-over-99.919",
     "side": "over",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Search find: 4 circles",
     "circles": 4,
     "lines": 0,
     "acc": "99.919",
     "precise": "99.919144884292097041113253470939",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Over/DTC-99.919-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search over constructions, at Edward James Gordon's request.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), by the search tools, with the maintainer watching"
      ]
     }
    },
    {
     "id": "dtc-over-99.9998",
     "side": "over",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Search find: 4 circles, 1 line",
     "circles": 4,
     "lines": 1,
     "acc": "99.9998",
     "precise": "99.999822444571399562160746617505",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Over/DTC-99.9998-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search over constructions, at Edward James Gordon's request.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), by the search tools, with the maintainer watching"
      ]
     }
    },
    {
     "id": "dtc-under-99.999",
     "side": "under",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Search find: 4 circles, 2 lines",
     "circles": 4,
     "lines": 2,
     "acc": "99.999",
     "precise": "99.999971963388894199932730272647",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Under/DTC-99.999-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search over constructions, at Edward James Gordon's request.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), by the search tools, with the maintainer watching"
      ]
     }
    },
    {
     "id": "dtc-over-99.999982",
     "side": "over",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Search find: 5 circles, 2 lines",
     "circles": 5,
     "lines": 2,
     "acc": "99.999982",
     "precise": "99.999982791886151173980670407412",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Over/DTC-99.999982-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search over constructions, at Edward James Gordon's request.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), by the search tools, with the maintainer watching"
      ]
     }
    },
    {
     "id": "dtc-over-99.999989",
     "side": "over",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Search find: 5 circles, 3 lines",
     "circles": 5,
     "lines": 3,
     "acc": "99.999989",
     "precise": "99.999989809714813045665430464690",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Over/DTC-99.999989-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search over constructions, at Edward James Gordon's request. One crossing it depends on is shallow (10.2°), so it is harder to place accurately on paper.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), by the search tools, with the maintainer watching"
      ]
     }
    },
    {
     "id": "dtc-over-99.999992",
     "side": "over",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Search find: 6 circles, 1 lines",
     "circles": 6,
     "lines": 1,
     "acc": "99.999992",
     "precise": "99.999992926501011321061449248517",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Over/DTC-99.999992-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search over constructions, at Edward James Gordon's request.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), by the search tools, with the maintainer watching"
      ]
     }
    },
    {
     "id": "dtc-over-99.999998",
     "side": "over",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Search find: 7 circles, 2 lines",
     "circles": 7,
     "lines": 2,
     "acc": "99.999998",
     "precise": "99.999998292097228382557369094454",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Over/DTC-99.999998-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search over constructions, at Edward James Gordon's request.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), by the search tools, with the maintainer watching"
      ]
     }
    },
    {
     "id": "dtc-under-99.214",
     "side": "under",
     "marks": "",
     "holder": "Kochanski / Gordon",
     "method": "One Fifth Of The Circle",
     "circles": 7,
     "lines": 5,
     "acc": "99.214",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Under/DTC-99.214-Kochanski-Gordon",
     "note": "Edward's near-coincidence put to use: the doubled cube's edge is one fifth of the circle around the original cube, rectified by Kochański's method. Its accuracy is set by the coincidence itself (∛2 ≈ 2π/5), so no better rectification can take it past 99.22%.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "the link noticed by the maintainer in his Cube 2 Tesseract v2.0 (geogebra.org/geometry/yx5e8wnu)",
       "drawn with Claude in the maintainer's own session (November 2026), using Kochański's rectification (1685)"
      ]
     },
     "precise": "99.214465504374956832682628789287"
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
     "lines": 6,
     "acc": "98.538",
     "precise": "98.538723778916723447336600850022",
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
     "disputes": [],
     "count_history": "Counted 6 circles, 7 lines before the counting rules (version 1.0, November 2026) were written down.",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/gmypmfqa",
       "GeoGebra file in the archive"
      ]
     }
    },
    {
     "id": "rtc-over-99.596",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "",
     "circles": 12,
     "lines": 6,
     "acc": "99.596",
     "precise": "99.596191042965087820623942943219",
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
     "disputes": [],
     "count_history": "Counted 13 circles, 9 lines before the counting rules (version 1.0, November 2026) were written down.",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/s5d6kgfs",
       "GeoGebra file in the archive"
      ]
     }
    },
    {
     "id": "rtc-over-99.607",
     "side": "over",
     "marks": "µ",
     "holder": "Edward James Gordon",
     "method": "",
     "circles": 7,
     "lines": 4,
     "acc": "99.607",
     "precise": "99.607465151931678146715974591942",
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
     "disputes": [],
     "count_history": "Counted 9 circles, 4 lines before the counting rules (version 1.0, November 2026) were written down.",
     "micro_note": "Marked µ by hand. The micro scale test finds no step under 5% of the radius (smallest 6.3%), so the adjustment needs describing here.",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/ryhqksry",
       "GeoGebra file in the archive"
      ]
     }
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
     "precise": "99.650161983005792394593267134152",
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
     "disputes": [],
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/t5bqfckt",
       "GeoGebra file in the archive"
      ]
     }
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
     "precise": "99.786671130120006387466767954145",
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
     "disputes": [],
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/ju6jb78y",
       "GeoGebra file in the archive"
      ]
     }
    },
    {
     "id": "rtc-over-99.802",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "",
     "circles": 10,
     "lines": 4,
     "acc": "99.802",
     "precise": "99.802002419950215750263081217370",
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
     "disputes": [],
     "count_history": "Counted 11 circles, 4 lines before the counting rules (version 1.0, November 2026) were written down.",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/hsybvnu5",
       "GeoGebra file in the archive"
      ]
     }
    },
    {
     "id": "rtc-over-99.806",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Euclidean Circumference Approximation",
     "circles": 1,
     "lines": 11,
     "acc": "99.806",
     "precise": "99.806273046892298085181588337489",
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
     "disputes": [],
     "count_history": "Counted 1 circles, 10 lines before the counting rules (version 1.0, November 2026) were written down.",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "paper: Euclidean Circumference Approximation (pages/paper-euclidean-circumference-approximation.html)",
       "maintainer's GeoGebra account: geogebra.org/geometry/rhqcddpf",
       "GeoGebra file in the archive"
      ]
     }
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
     "precise": "99.873366396794544782367532481681",
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
     "disputes": [],
     "micro_note": "Marked µ by hand. The micro scale test finds no step under 5% of the radius (smallest 50.0%), so the adjustment needs describing here.",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/rcjzsffq",
       "GeoGebra file in the archive"
      ]
     }
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
     "precise": "99.934380169290796763267768559944",
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
     "disputes": [],
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/kycjvbnh",
       "GeoGebra file in the archive"
      ]
     }
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
     "precise": "99.934787077215402046910154311551",
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
     "disputes": [],
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/g7rntemb",
       "GeoGebra file in the archive"
      ]
     }
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
     "precise": "99.971214380438437222041918006681",
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
     "disputes": [],
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/nk5h7gqf",
       "GeoGebra file in the archive"
      ]
     }
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
     "precise": "99.997474449728175142220915479809",
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
     "disputes": [],
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/px4rbkpy",
       "GeoGebra file in the archive"
      ]
     }
    },
    {
     "id": "rtc-over-99.9986",
     "side": "over",
     "marks": "µ",
     "holder": "Edward James Gordon",
     "method": "",
     "circles": 10,
     "lines": 6,
     "acc": "99.9986",
     "precise": "99.998657602706203724649433082450",
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
     "disputes": [],
     "count_history": "Counted 10 circles, 7 lines before the counting rules (version 1.0, November 2026) were written down.",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/yrtbagqh",
       "GeoGebra file in the archive"
      ]
     }
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
     "precise": "99.998704602696127078185306284880",
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
     "disputes": [],
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/nygms4nr",
       "GeoGebra file in the archive"
      ]
     }
    },
    {
     "id": "rtc-over-99.9996",
     "side": "over",
     "marks": "µ",
     "holder": "Kochanski / Gordon",
     "method": "Kochanski Gordon Crossover Method",
     "circles": 11,
     "lines": 10,
     "acc": "99.9996",
     "precise": "99.999681250573958688297476824688",
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
     "disputes": [],
     "count_history": "Counted 12 circles, 10 lines before the counting rules (version 1.0, November 2026) were written down.",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "builds on Kochański (1685), published",
       "maintainer's GeoGebra account: geogebra.org/geometry/puardqtn",
       "GeoGebra file in the archive, dated 22-12-2025"
      ]
     }
    },
    {
     "id": "rtc-under-99.999",
     "side": "under",
     "marks": "µ",
     "holder": "Edward James Gordon",
     "method": "Microscale Trisection",
     "circles": 9,
     "lines": 12,
     "acc": "99.999",
     "precise": "99.999488054774351825683597031182",
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
     "disputes": [],
     "count_history": "Counted 9 circles, 13 lines before the counting rules (version 1.0, November 2026) were written down.",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/m6btgcyj",
       "GeoGebra file in the archive, dated 07-11-2025"
      ]
     }
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
     "precise": "99.998111948580257765625961830433",
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
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: Kochański, Acta Eruditorum, 1685"
      ]
     }
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
     "precise": "99.987550286175027993742999576020",
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
     "disputes": [],
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/cbmncq7h",
       "GeoGebra file in the archive"
      ]
     }
    },
    {
     "id": "rtc-under-99.9874",
     "side": "under",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "",
     "circles": 9,
     "lines": 7,
     "acc": "99.9874",
     "precise": "99.987454294672581509519983470773",
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
     "disputes": [],
     "count_history": "Counted 9 circles, 6 lines before the counting rules (version 1.0, November 2026) were written down.",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/scvxwyva",
       "GeoGebra file in the archive"
      ]
     }
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
     "precise": "99.812274130894622303678774138252",
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
     "disputes": [],
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/zczfbfzp",
       "GeoGebra file in the archive, dated 08-11-2025"
      ]
     }
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
     "precise": "99.809147285035536359207857815604",
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
     "disputes": [],
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/hhks3r3z",
       "GeoGebra file in the archive, dated 08-11-2025"
      ]
     }
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
     "precise": "99.443033785433123835916306528891",
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
     "disputes": [],
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/at9txh3h",
       "GeoGebra file in the archive, dated 08-11-2025"
      ]
     }
    },
    {
     "id": "rtc-under-99.376",
     "side": "under",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "",
     "circles": 7,
     "lines": 4,
     "acc": "99.376",
     "precise": "99.376810136084185873769189419839",
     "date": "",
     "geogebra": "mpnw4ssy",
     "file": "GeoGebra Files/Under/RTC-99.376",
     "note": "Re-measured at full precision in November 2026: the chart listed 99.374% undersized.",
     "verified": [],
     "disputes": [],
     "count_history": "Counted 8 circles, 4 lines before the counting rules (version 1.0, November 2026) were written down.",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/mpnw4ssy",
       "GeoGebra file in the archive"
      ]
     }
    },
    {
     "id": "rtc-under-98.165",
     "side": "under",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "",
     "circles": 6,
     "lines": 5,
     "acc": "98.165",
     "precise": "98.165185096756612350891962965026",
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
     "disputes": [],
     "count_history": "Counted 6 circles, 4 lines before the counting rules (version 1.0, November 2026) were written down.",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/tzdubzms",
       "GeoGebra file in the archive"
      ]
     }
    },
    {
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "",
     "precise": "99.979533279912468840362987001644",
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
     "lines": 7,
     "acc": "99.979",
     "file": "GeoGebra Files/Over/RTC-99.979",
     "count_history": "Counted 6 circles, 8 lines before the counting rules (version 1.0, November 2026) were written down.",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "GeoGebra file in the archive"
      ]
     }
    },
    {
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "",
     "precise": "99.982383318431320244389903198571",
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
     "file": "GeoGebra Files/Under/RTC-99.982",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "GeoGebra file in the archive, dated 11-11-2025"
      ]
     }
    },
    {
     "marks": "µ",
     "holder": "Edward James Gordon",
     "method": "",
     "precise": "99.989974169597609935541607998312",
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
     "file": "GeoGebra Files/Over/RTC-99.989",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "GeoGebra file in the archive, dated 11-11-2025"
      ]
     }
    },
    {
     "marks": "",
     "geogebra": "",
     "disputes": [],
     "verified": [],
     "precise": "99.999999967941511700895634629114",
     "id": "rtc-under-99.99999",
     "side": "under",
     "holder": "Srinivasa Ramanujan",
     "method": "Ramanujan's 1914 construction",
     "circles": 8,
     "lines": 10,
     "acc": "99.9999999",
     "date": "1914",
     "file": "GeoGebra Files/Under/RTC-99.99999-Ramanujan-1914",
     "result_scale": 6,
     "note": "π ≈ (9² + 19²/22)^¼. It constructs a sixth of the circumference (the mean proportional between OS and OB), so six times that length is compared with the circumference. Reconstructed from Ramanujan's description in “Modular equations and approximations to π” (1914); trisecting AO and the mean proportional use standard straightedge and compass steps. AI-assisted: the GeoGebra file was written by Claude; awaiting a person's check in GeoGebra. Shown to more places from November 2026 (it was 99.99999%), so that the chart reads in order: its precise value is 99.999999967%.",
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: Ramanujan, \"Modular equations and approximations to π\", Quarterly Journal of Mathematics, 1914"
      ]
     }
    },
    {
     "marks": "µ",
     "geogebra": "",
     "disputes": [],
     "verified": [],
     "precise": "99.999996507837642052022699873957",
     "id": "rtc-over-99.99999",
     "side": "over",
     "holder": "Kochanski / Gordon",
     "method": "Kochanski Gordon Crossover (3/7)",
     "circles": 18,
     "lines": 13,
     "acc": "99.999996",
     "date": "06-11-2026",
     "file": "GeoGebra Files/Over/RTC-99.99999-Kochanski-Gordon-3-7",
     "note": "The crossover method, taking the point three sevenths of the way from Kochański's length to Edward's instead of the midpoint: seven equal compass steps up a perpendicular, then a parallel. AI-assisted: the 3/7 weighting was suggested by Claude, which also added the steps to Edward's GeoGebra file; awaiting Edward's check in GeoGebra. Shown to more places from November 2026 (it was 99.99999%) so that the chart reads in order beside de Gelder's 99.999991%: its precise value is 99.999996507%.",
     "origin": {
      "kind": "session",
      "evidence": [
       "builds on Kochański (1685), published",
       "the maintainer's idea, drawn with Claude in the maintainer's own session (November 2026)"
      ]
     }
    },
    {
     "id": "rtc-over-99.992",
     "side": "over",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Search find: 4 circles, 1 lines (half the circumference)",
     "circles": 4,
     "lines": 1,
     "acc": "99.992",
     "precise": "99.992456759573872762857004189061",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Over/RTC-99.992-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search over constructions, at Edward James Gordon's request. It constructs half the circumference, so twice its length is compared with the circumference (one more circle would draw the doubled length).",
     "verified": [],
     "disputes": [],
     "result_scale": 2,
     "result_path": [
      "P_{9}",
      "P_{12}"
     ],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), by the search tools, with the maintainer watching"
      ]
     }
    },
    {
     "id": "rtc-over-99.999999",
     "side": "over",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Search find: 5 circles, 2 lines",
     "circles": 5,
     "lines": 2,
     "acc": "99.999999",
     "precise": "99.999999966832077147732793025846",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Over/RTC-99.999999-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search over constructions, at Edward James Gordon's request.",
     "verified": [],
     "disputes": [],
     "result_path": [
      "P_{23}",
      "P_{8}"
     ],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), by the search tools, with the maintainer watching"
      ]
     }
    },
    {
     "id": "rtc-under-99.99994",
     "side": "under",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Search find: 5 circles, 1 lines",
     "circles": 5,
     "lines": 1,
     "acc": "99.99994",
     "precise": "99.999949853386903635405870818585",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Under/RTC-99.99994-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search over constructions, at Edward James Gordon's request.",
     "verified": [],
     "disputes": [],
     "result_path": [
      "P_{17}",
      "P_{9}"
     ],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), by the search tools, with the maintainer watching"
      ]
     }
    },
    {
     "id": "rtc-under-99.999992",
     "side": "under",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Search find: 6 circles, 2 lines (half the circumference)",
     "circles": 6,
     "lines": 2,
     "acc": "99.999992",
     "precise": "99.999992956893154687328802452114",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Under/RTC-99.999992-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search over constructions, at Edward James Gordon's request. It constructs half the circumference, so twice its length is compared with the circumference (one more circle would draw the doubled length).",
     "verified": [],
     "disputes": [],
     "result_scale": 2,
     "result_path": [
      "P_{22}",
      "P_{28}"
     ],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), by the search tools, with the maintainer watching"
      ]
     }
    },
    {
     "id": "rtc-under-99.999998",
     "side": "under",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Search find: 5 circles, 4 lines",
     "circles": 5,
     "lines": 4,
     "acc": "99.999998",
     "precise": "99.999998916119244658239667722564",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Under/RTC-99.999998-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search over constructions, at Edward James Gordon's request.",
     "verified": [],
     "disputes": [],
     "result_path": [
      "P_{33}",
      "P_{31}"
     ],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), by the search tools, with the maintainer watching"
      ]
     }
    },
    {
     "id": "rtc-under-99.9999990",
     "side": "under",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Search find: 7 circles, 4 lines (half the circumference)",
     "circles": 7,
     "lines": 4,
     "acc": "99.9999990",
     "precise": "99.999999093143810032783813016393",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Under/RTC-99.9999990-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search over constructions, at Edward James Gordon's request. It constructs half the circumference, so twice its length is compared with the circumference (one more circle would draw the doubled length).",
     "verified": [],
     "disputes": [],
     "result_scale": 2,
     "result_path": [
      "P_{56}",
      "P_{61}"
     ],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), by the search tools, with the maintainer watching"
      ]
     }
    },
    {
     "id": "rtc-under-99.9999998",
     "side": "under",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Search find: 8 circles, 4 lines (half the circumference)",
     "circles": 8,
     "lines": 4,
     "acc": "99.9999998",
     "precise": "99.999999898999895487037595975534",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Under/RTC-99.9999998-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search over constructions, at Edward James Gordon's request. It constructs half the circumference, so twice its length is compared with the circumference (one more circle would draw the doubled length). One crossing it depends on is shallow (10.9°), so it is harder to place accurately on paper.",
     "verified": [],
     "disputes": [],
     "result_scale": 2,
     "result_path": [
      "P_{72}",
      "P_{2}"
     ],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), by the search tools, with the maintainer watching"
      ]
     }
    },
    {
     "id": "rtc-under-99.999997",
     "side": "under",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Search find: 6 circles, 2 lines (half the circumference)",
     "circles": 6,
     "lines": 2,
     "acc": "99.999997",
     "precise": "99.999997390897667828353489625170",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Under/RTC-99.999997-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search over constructions, at Edward James Gordon's request. It constructs half the circumference, so twice its length is compared with the circumference (one more circle would draw the doubled length).",
     "verified": [],
     "disputes": [],
     "result_scale": 2,
     "result_path": [
      "P_{31}",
      "P_{22}"
     ],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), by the search tools, with the maintainer watching"
      ]
     }
    },
    {
     "id": "rtc-over-99.999991",
     "side": "over",
     "marks": "",
     "holder": "Jacob de Gelder",
     "method": "De Gelder's construction of 355/113",
     "circles": 5,
     "lines": 6,
     "acc": "99.999991",
     "precise": "99.999991508632134162913741597801",
     "date": "1849",
     "geogebra": "",
     "file": "GeoGebra Files/Over/RTC-99.999991-de-Gelder",
     "note": "355/113 = 3 + 4²/(7² + 8²): CE = 7/8 of the radius, AF = 1/2 on AE, FG parallel to CD and FH parallel to EG give AH = 16/113, as Hobson (1913, p. 34) gives de Gelder's construction from Grünert's Archiv, vol. 7, 1849. The three radii that complete the half circumference are the archive's.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: de Gelder, Grünert's Archiv, vol. 7, 1849",
       "described step by step in E. W. Hobson, Squaring the Circle: A History of the Problem, 1913, p. 34",
       "the construction's steps redrawn from Hobson's description in November 2026; the last step, laying out the half circumference, is the archive's"
      ]
     },
     "result_scale": 2
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
     "id": "ar-over-97.537",
     "side": "over",
     "marks": "",
     "holder": "Edward James Gordon",
     "method": "Tangent Path",
     "circles": 1,
     "lines": 4,
     "acc": "97.537",
     "precise": "97.537594098354173816498455285687",
     "date": "",
     "geogebra": "nwxxhgju",
     "file": "GeoGebra Files/Arc Rectification Over/AR-97.537",
     "note": "Measured for the 135° arc in the file. 95% or better for arcs from 128° to 215°; the chart listed ~95%, the accuracy towards 180°. Re-measured in November 2026.",
     "verified": [],
     "disputes": [],
     "result_path": [
      "D",
      "G",
      "C"
     ],
     "count_history": "Counted 1 circles, 6 lines before the counting rules (version 1.0, November 2026) were written down.",
     "origin": {
      "kind": "maintainer",
      "evidence": [
       "maintainer's GeoGebra account: geogebra.org/geometry/nwxxhgju",
       "GeoGebra file in the archive"
      ]
     }
    },
    {
     "id": "ar-over-96.640",
     "side": "over",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Search find: 3 circles, 0 lines (any arc)",
     "circles": 3,
     "lines": 0,
     "acc": "96.640",
     "precise": "96.640276048379935257279013741470",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Arc Rectification Over/AR-96.640-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search, at Edward James Gordon's request. A general method: it works for any angle, with no point placed by eye. The chart figure is its worst case between 30° and 150°, which is at 103.51°, the angle the file is drawn at. Its sweep shows the full range where it holds 95%.",
     "verified": [],
     "disputes": [],
     "result_path": [
      "P_{13}",
      "B"
     ],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), by the search tools, with the maintainer watching"
      ]
     }
    },
    {
     "id": "ar-over-98.689",
     "side": "over",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Search find: 4 circles, 0 lines (any arc)",
     "circles": 4,
     "lines": 0,
     "acc": "98.689",
     "precise": "98.689238952760739494558303316201",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Arc Rectification Over/AR-98.689-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search, at Edward James Gordon's request. A general method: it works for any angle, with no point placed by eye. The chart figure is its worst case between 30° and 150°, which is at 88.13°, the angle the file is drawn at. Its sweep shows the full range where it holds 95%.",
     "verified": [],
     "disputes": [],
     "result_path": [
      "P_{20}",
      "A"
     ],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), by the search tools, with the maintainer watching"
      ]
     }
    },
    {
     "id": "ar-over-99.751",
     "side": "over",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Search find: 4 circles, 1 lines (any arc)",
     "circles": 4,
     "lines": 1,
     "acc": "99.751",
     "precise": "99.751887601452442183914025187348",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Arc Rectification Over/AR-99.751-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search, at Edward James Gordon's request. A general method: it works for any angle, with no point placed by eye. The chart figure is its worst case between 30° and 150°, which is at 104.96°, the angle the file is drawn at. Its sweep shows the full range where it holds 95%.",
     "verified": [],
     "disputes": [],
     "result_path": [
      "P_{21}",
      "P_{3}"
     ],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), by the search tools, with the maintainer watching"
      ]
     }
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
    "how": "Runs tools/verify.py, which rebuilds every GeoGebra file from its given objects with its own geometry code (in 50-digit arithmetic for the precise readouts), checks that only straightedge and compass steps feed the result, counts it under the counting rules, and recomputes the accuracy. Its rebuilds are cross-checked against GeoGebra itself with tools/geogebra_check.js. Anyone can run both and get the same answer."
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
   "problem": "rtc",
   "who": "E. W. Hobson",
   "year": "1913",
   "value": "π ≈ 6/5 · (1 + φ) = 3.14164…",
   "source": "Hobson, “Squaring the Circle: A History of the Problem”, 1913.",
   "draft": "Wanted/Hobson-6-5-golden-draft.ggb",
   "draft_note": "A construction of Hobson's value is drafted (99.99847%), to be checked against his own steps before it is charted."
  },
  {
   "problem": "taa",
   "who": "Albrecht Dürer",
   "year": "1525",
   "value": "approximate trisection; accuracy depends on the angle",
   "source": "Dürer, “Underweysung der Messung”, 1525.",
   "draft": "Wanted/Durer-trisection-draft.ggb",
   "draft_note": "Dürer's method is drafted from modern descriptions (99.396% at 150°, its weakest angle up to 150°), to be checked against his 1525 figure before it is charted."
  }
 ],
 "derived_pi": {
  "folder": "Approximations/06 Pi Approximations",
  "about": "The π chart is worked out from the circle rectification chart: each rectification, halved, is a π approximation with the same accuracy and steps. These are the π versions drawn in GeoGebra, linked beside the rectification each comes from.",
  "files": [
   {
    "of": "rtc-under-99.999",
    "file": "GeoGebra Files/PA-99.999",
    "geogebra": "krx65evf"
   },
   {
    "of": "rtc-over-99.9987",
    "file": "GeoGebra Files/PA-99.998",
    "geogebra": "hcce6uhf"
   },
   {
    "of": "rtc-under-99.9875",
    "file": "GeoGebra Files/PA-99.987",
    "geogebra": "gerddbwv"
   },
   {
    "of": "rtc-over-99.971",
    "file": "GeoGebra Files/PA-99.971",
    "geogebra": "hxccnzfx"
   },
   {
    "of": "rtc-over-99.806",
    "file": "GeoGebra Files/PA-99.806",
    "geogebra": "a8zunqzv"
   },
   {
    "of": "rtc-under-99.998",
    "file": "GeoGebra Files/PA-99.998-Kochanski",
    "geogebra": "a8ama49f"
   }
  ]
 },
 "holders": {
  "Kochanski / Gordon": [
   "Adam Adamandy Kochański",
   "Edward James Gordon"
  ],
  "Adam Adamandy Kochanski": [
   "Adam Adamandy Kochański"
  ],
  "Edward James Gordon": [
   "Edward James Gordon"
  ],
  "Srinivasa Ramanujan": [
   "Srinivasa Ramanujan"
  ],
  "Claude (Anthropic)": [
   "Claude (Anthropic)"
  ],
  "Jacob de Gelder": [
   "Jacob de Gelder",
   "Jakob de Gelder"
  ]
 }
};
