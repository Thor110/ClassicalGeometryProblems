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
    },
    {
     "id": "stc-over-99.998",
     "side": "over",
     "marks": "",
     "holder": "E. W. Hobson",
     "method": "Hobson's construction (the square on GH)",
     "circles": 10,
     "lines": 6,
     "acc": "99.998",
     "precise": "99.998467881887055614596084601667",
     "date": "1913",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.998-Hobson",
     "square": "q",
     "note": "OD = 3/5, OF = 3/2 and OE = 1/2 of the radius; the semicircles on DE and AF cut the perpendicular through O at G and H, and the square on GH has area 6/5 · (1 + φ) = 3.14164079 times the radius squared. Given by Hobson (1913) without naming its author. A variant with OD = 1/3, OE = 11/8 and OF = 6/5 (one more circle, two more lines) is charted as stc-under-99.9993.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: E. W. Hobson, Squaring the Circle: A History of the Problem, 1913, p. 35, construction (4)",
       "redrawn in November 2026 from the book's text (Internet Archive scans), the three fractions read from the value GH = 1.77246 that Hobson gives"
      ]
     }
    },
    {
     "id": "stc-over-99.999998",
     "side": "over",
     "marks": "",
     "holder": "William Hayden",
     "method": "Hayden's quadrature",
     "circles": 7,
     "lines": 15,
     "acc": "99.999998",
     "precise": "99.999998100310301921612819278290",
     "date": "1871",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.999998-Hayden",
     "note": "The squares in and about the circle, with their diagonals; a small circle about E whose radius comes from the inner square; the tangent to it from C, halfway along the top side, crosses the circle at P; the chord of the diagonals through P is the side. π ≈ 3.141592713.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: W. Hayden, \"Approximate Geometrical Solutions of the Problems of the Duplication of the Cube and of the Quadrature of the Circle\", Proceedings of the Royal Society of London 20 (1871-72), pp. 525-526, communicated by G. G. Stokes",
       "read from the Internet Archive scan (paper-doi-10_1098_rspl_1871_0099); the figure is not in the text, so B, D, G and I were placed from Hayden's stated r = 3(√10 − √5)/20 and m = 0.322999477, which only one reading of the text gives",
       "redrawn in November 2026"
      ]
     },
     "square": "q"
    },
    {
     "id": "stc-over-99.398",
     "side": "over",
     "marks": "",
     "holder": "Ahmes (Rhind Papyrus)",
     "method": "Eight ninths of the diameter",
     "circles": 8,
     "lines": 5,
     "acc": "99.398",
     "precise": "99.398356959197022328804337226263",
     "date": "c. 1700 BC",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.398-Rhind-Papyrus",
     "note": "The oldest rule on the chart: take away a ninth of the diameter and square what is left, π ≈ 256/81. The papyrus gives the rule as a calculation; the drawing is the archive's.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: the Rhind Mathematical Papyrus (British Museum), copied by the scribe Ahmes, problem 50",
       "the rule as described in E. W. Hobson, Squaring the Circle: A History of the Problem, 1913, \"The first period: earliest traces of the problem\" (Internet Archive scans), which dates it \"probably about 1700 B.C.\"",
       "drawn in November 2026: the papyrus gives no drawing, so the ninths are laid out the archive's way"
      ]
     },
     "square": "q"
    },
    {
     "id": "stc-under-99.946",
     "side": "under",
     "marks": "",
     "holder": "C. M. Willich",
     "method": "Willich's quadrature",
     "circles": 4,
     "lines": 5,
     "acc": "99.946",
     "precise": "99.946649846525578302470585791786",
     "date": "1855",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Under/99.946-Willich",
     "note": "A chord equal to the radius from B, a quadrant from A; its midpoint E; the line from A through E meets the circle again at F. AF is the side of the square. Willich says the side is out by \"somewhat less than one four-thousandth\"; it is one part in 3,748.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: C. M. Willich, \"On a simple Geometrical construction, giving a very approximate Quadrature of the Circle\", Proceedings of the Royal Society of London 7 (1854-55), received April 17, 1855, communicated by G. G. Stokes",
       "read from the Internet Archive scan (philtrans08545474); the text gives every step",
       "redrawn in November 2026; the quadrant AB is found with a perpendicular, as Willich does not say how"
      ]
     },
     "square": "q"
    },
    {
     "id": "stc-under-99.9993",
     "side": "under",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "method": "Hobson's construction, OD = 1/3, OE = 11/8, OF = 6/5",
     "circles": 11,
     "lines": 8,
     "acc": "99.9993",
     "precise": "99.999375385688373920001839233307",
     "date": "07-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Under/99.9993-Claude",
     "note": "Hobson's construction step for step, with D, E and F at other places on the diameter: OD = 1/3, OE = 11/8 and OF = 6/5 of the radius, instead of 3/5, 1/2 and 3/2. One more circle and two more lines than Hobson's; two and a half times closer. Found by Claude (Anthropic), an AI, with tools/variants.py.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), with tools/variants.py, as a variant of Hobson's construction (stc-over-99.998)"
      ]
     },
     "holder_kind": "ai",
     "square": "q"
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
     "file": "GeoGebra Files/Under/TAA-99.467-Claude",
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
    },
    {
     "id": "taa-over-99.395",
     "side": "over",
     "marks": "",
     "holder": "Albrecht Dürer",
     "method": "Dürer's trisection",
     "circles": 12,
     "lines": 9,
     "acc": "99.395",
     "precise": "99.395788009623285706993866023995",
     "date": "1525",
     "geogebra": "",
     "file": "GeoGebra Files/Over/TAA-99.395-Durer",
     "note": "Trisect the chord; raise a perpendicular to the arc; carry it down to the chord from the end; trisect the small gap; carry it back up to the arc. A general method, charted at 150°, its weakest angle up to 150°: 99.99996% at 30°, 99.997% at 60°, 99.97% at 90°, 99.84% at 120°.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: A. Dürer, Underweysung der Messung, 1525",
       "described step by step, with Dürer's letters, in G. H. Hughes, The Polygons of Albrecht Dürer, 2012 (arXiv:1205.0080), Appendix A, from Strauss's translation",
       "redrawn in November 2026; how the chord and the gap are trisected is the archive's, as Dürer does not say"
      ]
     }
    },
    {
     "id": "taa-under-99.838",
     "side": "under",
     "marks": "",
     "holder": "Karajordanoff",
     "method": "Karajordanoff's trisection",
     "circles": 3,
     "lines": 5,
     "acc": "99.838",
     "precise": "99.838643849960773986145409607430",
     "date": "1928",
     "geogebra": "",
     "file": "GeoGebra Files/Under/TAA-99.838-Karajordanoff",
     "note": "Circles of radius 1 and 2 about the corner; the tangent at A meets the chord from B to the middle of the arc in D; the parallel to OB through D meets the larger circle at T. Exact at 90°. Charted at 65.57°, its weakest angle up to 90°; the rest of the angle is bisected.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: Karajordanoff, 1928, from W. Breidenbach, Die Dreiteilung des Winkels, Leipzig, 1933, as cited in R. C. Yates, The Trisection Problem, 1942 (NCTM reprint 1971, ERIC ED058058), ch. 4, section 4, with his error table",
       "redrawn in November 2026; Yates' error table (21\" at 30°, 1'53\" at 60°, 2'12\" at 70°, none at 90°) is reproduced exactly"
      ]
     }
    },
    {
     "id": "taa-over-98.796",
     "side": "over",
     "marks": "",
     "holder": "Maurice d'Ocagne",
     "method": "d'Ocagne's trisection",
     "circles": 1,
     "lines": 4,
     "acc": "98.796",
     "precise": "98.796021983927621116053226297479",
     "date": "1934",
     "geogebra": "",
     "file": "GeoGebra Files/Over/TAA-98.796-dOcagne",
     "note": "From the middle of the radius opposite B, the line to the middle of the arc makes a third of the angle with OB; carried to the corner by a parallel. Charted at 90°, its weakest angle up to 90°; the rest of the angle is bisected.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: M. d'Ocagne, \"Étude rationnelle du problème de la trisection de l'angle\", L'Enseignement mathématique, 1934, pp. 49-63, as cited in R. C. Yates, The Trisection Problem, 1942 (NCTM reprint 1971, ERIC ED058058), ch. 4, section 6, with his error table",
       "redrawn in November 2026; Yates' error table (45\" at 30°, 6'14\" at 60°, 21'41\" at 90°) is reproduced"
      ]
     }
    },
    {
     "id": "taa-under-95.527",
     "side": "under",
     "marks": "",
     "holder": "Nicholas of Cusa / Snellius",
     "method": "Cusa's trisection",
     "circles": 2,
     "lines": 6,
     "acc": "95.527",
     "precise": "95.527186296506171817958010663952",
     "date": "15th century; 1621",
     "geogebra": "",
     "file": "GeoGebra Files/Under/TAA-95.527-Cusa-Snellius",
     "note": "Cusa's rectification used to trisect: P a radius beyond the far end of the diameter; PA meets the tangent at B in D; M a third of the way from B to D; PM meets the circle at T. BOT is the third; the rest is bisected. Charted at 90°, its weakest angle up to 90°: 99.93% at 30°, 99.24% at 60°.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "the trisection as given in R. C. Yates, The Trisection Problem, 1942 (NCTM reprint 1971, ERIC ED058058), ch. 4, section 2: \"For the approximate trisection of angle AOB we need only locate the point M so that BM = BD/3 and join it to P. The line PM will cut the unit circle in T.\"",
       "the point is Snellius' approximate trisection point, as in K. T. Vahlen, Konstruktionen und Approximationen in systematischer Darstellung, Leipzig 1911, p. 189 (PB = 1)",
       "redrawn in November 2026; BM = BD/3 is laid off with the parallel through O to PD (BO is a third of BP), and the rest of the angle bisected, as for the archive's other one-line trisections"
      ]
     }
    },
    {
     "id": "taa-under-99.147",
     "side": "under",
     "marks": "",
     "holder": "K. T. Vahlen",
     "method": "Vahlen's trisection",
     "circles": 6,
     "lines": 11,
     "acc": "99.147",
     "precise": "99.147614362567587602235412731664",
     "date": "1911",
     "geogebra": "",
     "file": "GeoGebra Files/Under/TAA-99.147-Vahlen",
     "note": "Cusa's trisection with Snellius' point moved towards O by 2/9 of the versine BC, Vahlen's second approximation to the exact point 2 cos(x/3). Charted at 90°, its weakest angle up to 90°.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: K. T. Vahlen, Konstruktionen und Approximationen in systematischer Darstellung, Leipzig 1911, pp. 290-291 (\"woraus sich eine sehr einfache und sehr genaue Konstruktion ergibt\")",
       "read from the Internet Archive scan (konstruktionenun00vahluoft); the scan garbles the fraction, which is 2/9: Vahlen gives the exact point as OP = 2 cos(x/3) and the shift as the second approximation of 2 − 2 cos(x/3), which is (2/9) of the versine, and the rebuilt figure confirms that the exact point is 2 cos(x/3)",
       "redrawn in November 2026; how 2/9 of BC is laid off is the archive's"
      ]
     }
    },
    {
     "id": "taa-under-99.660",
     "side": "under",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "method": "Cusa's trisection, a quarter versine",
     "circles": 3,
     "lines": 7,
     "acc": "99.660",
     "precise": "99.660468370396310721960919001643",
     "date": "07-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Under/TAA-99.660-Claude",
     "note": "Cusa's trisection with Snellius' point moved towards O by a quarter of the versine (two midpoints), as in the quarter-versine rectification (ar-over-99.831): better than Vahlen's 2/9 and cheaper. Charted at 90°, its weakest angle up to 90°. Found by Claude (Anthropic), an AI, as a variant.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), with tools/variants.py, as a variant of Cusa's and Vahlen's trisections (taa-under-95.527, taa-under-99.147)"
      ]
     },
     "holder_kind": "ai"
    },
    {
     "id": "taa-over-99.971",
     "side": "over",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "method": "Cusa's trisection, a quarter versine, on half the angle",
     "circles": 4,
     "lines": 8,
     "acc": "99.971",
     "precise": "99.971180001497493623918615186807",
     "date": "07-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Over/TAA-99.971-Claude",
     "note": "The quarter-versine trisection (taa-under-99.660) worked on half the angle and doubled: one line and one circle more, and it holds 99.97% from 30° to 150°, at its weakest at 118.5°, where the file is drawn. Credit for the method is Cusa's, Snellius' and Vahlen's. Found by Claude (Anthropic), an AI, as a variant.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), with tools/variants.py, as a variant of Cusa's, Snellius' and Vahlen's trisections (taa-under-95.527, taa-under-99.147, taa-under-99.660), worked on half the angle"
      ]
     },
     "holder_kind": "ai"
    },
    {
     "id": "taa-under-99.742",
     "side": "under",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "method": "Vahlen's trisection, on half the angle",
     "circles": 7,
     "lines": 12,
     "acc": "99.742",
     "precise": "99.742875188451430783278999456128",
     "date": "07-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Under/TAA-99.742-Claude",
     "note": "Vahlen's trisection (taa-under-99.147) worked on half the angle and doubled: one line and one circle more, and it holds 99.74% from 30° to 150°, at its weakest at 150°, where the file is drawn. Credit for the method is Cusa's, Snellius' and Vahlen's. Found by Claude (Anthropic), an AI, as a variant.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), with tools/variants.py, as a variant of Vahlen's trisection (taa-under-99.147), worked on half the angle"
      ]
     },
     "holder_kind": "ai"
    },
    {
     "id": "taa-under-99.995",
     "side": "under",
     "marks": "µ",
     "holder": "Claude (Anthropic)",
     "method": "Dürer's trisection, on half the angle",
     "circles": 8,
     "lines": 8,
     "acc": "99.995",
     "precise": "99.995193858045165405865040800401",
     "date": "07-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Under/TAA-99.995-Claude",
     "note": "Dürer's trisection (taa-over-99.395), from one side only, worked on half the angle and doubled: 99.995% from 30° to 150°, at its weakest at 150°, where the file is drawn, with fewer steps than Dürer's own. Credit for the method is Dürer's. Found by Claude (Anthropic), an AI, as a variant. Marked µ: on half the angle Dürer's gap from D to K is small, and its smallest step is 4% of the radius, under the 5% of the micro scale rule.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), with tools/variants.py, as a variant of Dürer's trisection (taa-over-99.395), worked on half the angle"
      ]
     },
     "holder_kind": "ai"
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
     "acc": "99.99997",
     "precise": "99.999971963388894199932730272647",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Under/DTC-99.999-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search over constructions, at Edward James Gordon's request. Shown to more places from November 2026 (it was 99.999%), so that the chart reads in order beside Mascheroni's 99.9995%: its precise value is 99.99997196%.",
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
    },
    {
     "id": "dtc-under-99.989",
     "side": "under",
     "marks": "",
     "holder": "William Hayden",
     "method": "Hayden's duplication",
     "circles": 6,
     "lines": 4,
     "acc": "99.989",
     "precise": "99.989151684165171047048796734704",
     "date": "1871",
     "geogebra": "",
     "file": "GeoGebra Files/Under/DTC-99.989-Hayden",
     "note": "Halve the edge; the equilateral triangle on the outer half; a third of the way along its foot; carry that length from the apex onto the perpendicular at B. AL : AB = 1.2598754, against ∛2 = 1.2599210.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: W. Hayden, \"Approximate Geometrical Solutions of the Problems of the Duplication of the Cube and of the Quadrature of the Circle\", Proceedings of the Royal Society of London 20 (1871-72), p. 525, communicated by G. G. Stokes",
       "read from the Internet Archive scan (paper-doi-10_1098_rspl_1871_0099); the text and Hayden's worked figures fix every step",
       "redrawn in November 2026; how CD is trisected is the archive's, as Hayden does not say"
      ]
     }
    },
    {
     "id": "dtc-under-99.847",
     "side": "under",
     "marks": "",
     "holder": "Lorenzo Mascheroni",
     "method": "Mascheroni's duplication (first solution)",
     "circles": 8,
     "lines": 0,
     "acc": "99.847",
     "precise": "99.847467308643382343474121533684",
     "date": "1797",
     "geogebra": "",
     "file": "GeoGebra Files/Under/DTC-99.847-Mascheroni",
     "note": "With the compass alone: B, C, D, E a radius apart round the circle about A; a, where the circles of radius BD about B and E meet; F with BF = Aa; N with FN = FA. aN is the edge of the doubled cube, 1.2592800.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: L. Mascheroni, La geometria del compasso, Pavia 1797, art. 275; French translation by A.-M. Carette, Géométrie du compas, Paris 1798",
       "read from the 1798 translation (Internet Archive, gomtrieducompas00masc), first solution, with Mascheroni's letters; cited in K. T. Vahlen, Konstruktionen und Approximationen in systematischer Darstellung, Leipzig 1911, p. 284",
       "redrawn in November 2026"
      ]
     }
    },
    {
     "id": "dtc-under-99.9995",
     "side": "under",
     "marks": "",
     "holder": "Lorenzo Mascheroni",
     "method": "Mascheroni's duplication (second solution)",
     "circles": 15,
     "lines": 0,
     "acc": "99.9995",
     "precise": "99.999573393292400074345606623000",
     "date": "1797",
     "geogebra": "",
     "file": "GeoGebra Files/Under/DTC-99.9995-Mascheroni",
     "note": "With the compass alone, continuing the first solution: d and c a radius on from E; b where the circles of radius Aa about D and d meet; M and P with cM = MP = aN; Q with FQ = Fb. PQ is the edge, 1.2599190: \"à peine de deux millionièmes de rayon\".",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: L. Mascheroni, La geometria del compasso, Pavia 1797, art. 275, second solution; French translation, Géométrie du compas, Paris 1798",
       "read from the 1798 translation (Internet Archive, gomtrieducompas00masc), with Mascheroni's letters; the sides on which M, P and Q fall are the only ones that give his PQ = 1.2599190",
       "redrawn in November 2026"
      ]
     }
    },
    {
     "id": "dtc-under-99.693",
     "side": "under",
     "marks": "",
     "holder": "G. Buonafalce",
     "method": "Buonafalce's first solution",
     "circles": 8,
     "lines": 6,
     "acc": "99.693",
     "precise": "99.693049863695430646242604077127",
     "date": "1876",
     "geogebra": "",
     "file": "GeoGebra Files/Under/DTC-99.693-Buonafalce",
     "note": "In the square ABCD on the edge, lay a sixth of the diagonal BD from D along DA, to E. BE is the edge of the doubled cube, 1.25863.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: G. Buonafalce, Sulla scoperta di un nuovo rapporto geometrico che serve alla soluzione del problema della duplicazione del cubo, Pisa 1876",
       "as given in F. Enriques (ed.), Fragen der Elementargeometrie II, article VII by U. Amaldi, § 9, Leipzig 1907, fig. 96 (Internet Archive, rcin.org.pl); proof by Father Secchi",
       "redrawn in November 2026; how BD is divided into six is the archive's"
      ]
     }
    },
    {
     "id": "dtc-under-99.997",
     "side": "under",
     "marks": "",
     "holder": "G. Buonafalce",
     "method": "Buonafalce's third solution",
     "circles": 5,
     "lines": 4,
     "acc": "99.997",
     "precise": "99.997229820539562647649966428078",
     "date": "1876",
     "geogebra": "",
     "file": "GeoGebra Files/Under/DTC-99.997-Buonafalce",
     "note": "The quarter circle DKB about C in the square on the edge; BE = AK/2 on BA, CF = BC/4 on CA; the line from F through E meets the arc at G. DG is the edge, 1.2599093.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: G. Buonafalce, Pisa 1876-78 (third of his four solutions)",
       "as given in F. Enriques (ed.), Fragen der Elementargeometrie II, article VII by U. Amaldi, § 9, Leipzig 1907, fig. 97, with the proof (Internet Archive, rcin.org.pl)",
       "redrawn in November 2026; reproduces Amaldi's DG = 1.2599093"
      ]
     }
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
     "note": "Step through it, one circle and one line at a time, on the Constructions page.",
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
    },
    {
     "id": "rtc-under-99.99997",
     "side": "under",
     "marks": "",
     "holder": "Specht",
     "method": "Specht's construction",
     "circles": 8,
     "lines": 7,
     "acc": "99.99997",
     "precise": "99.999977703818357853546539562126",
     "date": "1828",
     "geogebra": "",
     "file": "GeoGebra Files/Under/RTC-99.99997-Specht",
     "note": "On the tangent at A, AB = 11/5 and BC = 2/5 of the radius; AD = OB on the diameter through A, and DE parallel to OC give AE = (13/25) √146 of the radius, short of the circumference by 1.4 millionths of the radius. Hobson gives no first name.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: Specht, Crelle's Journal, vol. 3, p. 83",
       "described in E. W. Hobson, Squaring the Circle: A History of the Problem, 1913, pp. 34-35, construction (3)",
       "redrawn in November 2026 from the book's text (Internet Archive scans), BC read from the value AE = 6.2831839 that Hobson gives"
      ]
     }
    },
    {
     "id": "rtc-over-99.998",
     "side": "over",
     "marks": "",
     "holder": "A. Kunze",
     "method": "Kunze's triangle",
     "circles": 10,
     "lines": 4,
     "acc": "99.998",
     "precise": "99.998467881887055614596084601667",
     "date": "1851",
     "geogebra": "",
     "file": "GeoGebra Files/Over/RTC-99.998-Kunze",
     "note": "The right triangle with legs 3/5 and 6/5 of the diameter has a perimeter of 1.8 + (3/5)√5 = 3.1416407 diameters, very nearly the circumference. Laid out on one line here. The same number as Hobson's squaring, 6/5 · (1 + φ), 62 years earlier.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: A. Kunze, Lehrbuch der Planimetrie I, 2nd edition, Jena 1851, p. 278",
       "as given in K. T. Vahlen, Konstruktionen und Approximationen in systematischer Darstellung, Leipzig 1911, p. 311 (Internet Archive, konstruktionenun00vahluoft)",
       "redrawn in November 2026; the fifths of the radius and the laying out of the perimeter on one line are the archive's"
      ]
     }
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
    },
    {
     "id": "ar-under-95.492",
     "side": "under",
     "marks": "",
     "holder": "Nicholas of Cusa / Snellius",
     "method": "Cusa's rectification",
     "circles": 2,
     "lines": 2,
     "acc": "95.492",
     "precise": "95.492965855137202260181280636280",
     "date": "15th century; 1621",
     "geogebra": "",
     "file": "GeoGebra Files/Arc Rectification Under/AR-95.492-Cusa-Snellius",
     "note": "Extend the diameter through B a radius beyond the circle, to P; the line from P through A meets the tangent at B in D, and BD stands for the arc: 3 sin θ / (2 + cos θ). Charted at 90°, its weakest angle in the 0-90° range its sources use: 99.9999% at 10°, 99.95% at 30°, 99.23% at 60°.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "found by Nicholas of Cusa (15th century); proved by Snellius, Cyclometricus, 1621, and Huygens, De circuli magnitudine inventa, 1654, theorem XIII",
       "the construction with its letters: R. C. Yates, The Trisection Problem, 1942 (NCTM reprint 1971, ERIC ED058058), ch. 4, section 2; the formula and its history: E. W. Hobson, Squaring the Circle, 1913, pp. 27-30",
       "redrawn in November 2026"
      ]
     }
    },
    {
     "id": "ar-under-99.029",
     "side": "under",
     "marks": "",
     "holder": "Johann Heinrich Lambert",
     "method": "Lambert's rectification",
     "circles": 8,
     "lines": 5,
     "acc": "99.029",
     "precise": "99.029742368290431396014389916235",
     "date": "1765",
     "geogebra": "",
     "file": "GeoGebra Files/Arc Rectification Under/AR-99.029-Lambert",
     "note": "Snellius' point P, a radius beyond the far end of the diameter, moved a fifth of the versine BC towards O; the line from it through A meets the tangent at B in D. BD gives Newton's x ≈ sin x (14 + cos x)/(9 + 6 cos x). Charted at 90°, its weakest angle up to 90°, like Cusa's.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: J. H. Lambert, Beyträge zum Gebrauche der Mathematik und deren Anwendung II, Berlin 1765, p. 312",
       "as given in K. T. Vahlen, Konstruktionen und Approximationen in systematischer Darstellung, Leipzig 1911, p. 203 (Internet Archive, konstruktionenun00vahluoft); the scan garbles the fraction, which is the one value (1/5) that gives the formula Vahlen states",
       "redrawn in November 2026; the fifth of BC is laid out the archive's way"
      ]
     }
    },
    {
     "id": "ar-over-99.831",
     "side": "over",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Lambert's rectification, a quarter versine",
     "circles": 3,
     "lines": 3,
     "acc": "99.831",
     "precise": "99.831476501635185766850937397931",
     "date": "07-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Arc Rectification Over/AR-99.831-Claude",
     "note": "Lambert's rectification with one fraction changed: Snellius' point P, a radius beyond the far end of the diameter, is moved towards O by a quarter of the versine BC instead of a fifth. A quarter is two midpoints, so it is both simpler and better than Lambert's: at its weakest up to 90° (76.17°, where the file is drawn) it is 99.831%, against Lambert's 99.03% at 90°. Found by Claude (Anthropic), an AI, with tools/variants.py, which keeps a historical construction's steps and tries other fractions.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), with tools/variants.py, as a variant of Lambert's rectification (ar-under-99.029)"
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
  },
  {
   "name": "Snellius' rectification point",
   "problem": "ar",
   "by": "Nicholas of Cusa, Willebrord Snellius, Johann Heinrich Lambert",
   "about": "The arc read off the tangent through a point on the diameter beyond the circle: Cusa and Snellius put it a radius beyond the far end; Lambert moves it in by a fifth of the versine (Newton's formula); the variant search found a quarter better still."
  },
  {
   "name": "Snellius' trisection point",
   "problem": "taa",
   "by": "Nicholas of Cusa, Willebrord Snellius, K. T. Vahlen",
   "about": "Cusa's rectification turned into a trisection: a third of the tangent length, read back through the same point. Cusa and Snellius put the point a radius beyond the far end of the diameter; Vahlen moves it in by 2/9 of the versine, towards the exact point 2 cos(x/3); the variant search found a quarter better still. Worked on half the angle and then doubled, the same constructions hold from 30° to 150°."
  },
  {
   "name": "Dürer's trisection",
   "problem": "taa",
   "by": "Albrecht Dürer",
   "about": "Dürer's averaging of the three chords (1525): a third of the chord, a perpendicular to the arc, carried back down, and a third of the gap. Worked from one side on half the angle and doubled, it holds 99.995% from 30° to 150°."
  }
 ],
 "wanted": [
  {
   "problem": "taa",
   "who": "Kopf and Perron",
   "year": "1919",
   "value": "a trisection from the limaçon of Pascal, at most 15 seconds of arc out up to 90° (Perron's table), exact at 90°",
   "source": "R. C. Yates, The Trisection Problem (1942), ch. 4, section 5; O. Perron, Sitzungsberichte der Bayerischen Akademie der Wissenschaften, 1933. The scanned text of Yates garbles the construction, so it needs the original figure."
  },
  {
   "problem": "stc",
   "who": "Hung Viet Chu",
   "year": "2019",
   "value": "√(63/25 · (1 + 5/2 · (15√5 − 7)/269)), Ramanujan's number, π correct to nine decimal places",
   "source": "H. V. Chu, \"Squaring the Circle Revisited\", arXiv:1908.01202, section 3: every step is given, but it is long (three figures combined)."
  },
  {
   "problem": "dtc",
   "who": "G. J. Vargiù",
   "year": "1877",
   "value": "seven mean proportionals in a row, starting from the edge and the diagonal: 2^(85/256), 99.73% by volume",
   "source": "Vargiù, Sulla duplicazione del cubo (Oristano 1877), as given by Amaldi in Enriques, Fragen der Elementargeometrie II (1907), § 9. Fully described; long to draw."
  },
  {
   "problem": "dtc",
   "who": "G. Boccali",
   "year": "1884",
   "value": "from the side of the regular decagon and a semicircle; about 1.26",
   "source": "Boccali, Doppio cubo (Camerino 1884), via Amaldi (1907), § 9, fig. 98. The scan garbles the final combination of lengths."
  },
  {
   "problem": "dtc",
   "who": "Christiaan Huygens",
   "year": "1650s",
   "value": "AE = cosec 52.5° = 1.2605",
   "source": "Huygens, Varia opera mathematica I, p. 1, as cited by Vahlen (1911), p. 284. Vahlen gives only the angles; the figure is needed."
  },
  {
   "problem": "stc",
   "who": "Baudhayana",
   "year": "about 800 BC",
   "value": "the square on 1 − 1/8 + 1/(8·29) − 1/(8·29·6) + 1/(8·29·6·8) of the diameter, π ≈ 3.0883",
   "source": "Baudhayana Sulba Sutra, as given by Vahlen (1911), p. 177. Vahlen also credits him with 7:8; which rule is his needs a translation of the Sutra."
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
  ],
  "E. W. Hobson": [
   "Ernest William Hobson",
   "E. W. Hobson"
  ],
  "Albrecht Dürer": [
   "Albrecht Dürer"
  ],
  "Specht": [
   "Specht"
  ],
  "William Hayden": [
   "William Hayden"
  ],
  "Ahmes (Rhind Papyrus)": [
   "Ahmes"
  ],
  "Nicholas of Cusa / Snellius": [
   "Nicholas of Cusa",
   "Nikolaus von Kues",
   "Willebrord Snellius",
   "Willebrord Snel van Royen"
  ],
  "Karajordanoff": [
   "Karajordanoff"
  ],
  "Maurice d'Ocagne": [
   "Maurice d'Ocagne",
   "Philbert Maurice d'Ocagne"
  ],
  "C. M. Willich": [
   "C. M. Willich"
  ],
  "A. Kunze": [
   "A. Kunze"
  ],
  "Johann Heinrich Lambert": [
   "Johann Heinrich Lambert"
  ],
  "Lorenzo Mascheroni": [
   "Lorenzo Mascheroni"
  ],
  "G. Buonafalce": [
   "G. Buonafalce"
  ],
  "K. T. Vahlen": [
   "Karl Theodor Vahlen",
   "K. T. Vahlen"
  ]
 }
};
