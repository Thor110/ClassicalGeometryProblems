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
      ],
      "links": [
       {
        "label": "Collected Papers of Srinivasa Ramanujan (1927)",
        "url": "https://archive.org/details/pli.kerala.rare.28155"
       }
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
     "acc": "99.99985",
     "precise": "99.999851262127338858952494469650",
     "date": "06-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.9998-Claude",
     "note": "Found by Claude (Anthropic), an AI, with a computer search over constructions, at Edward James Gordon's request. Relabelled 99.99985 in November 2026 so the chart reads in order beside Lakenmacher's quadrature (stc-over-99.99981); the id is unchanged.",
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
     "note": "OD = 3/5, OF = 3/2 and OE = 1/2 of the radius; the semicircles on DE and AF cut the perpendicular through O at G and H, and the square on GH has area 6/5 · (1 + φ) = 3.14164079 times the radius squared. Given by Hobson (1913) without naming its author. A variant with OD = 1/3, OE = 11/8 and OF = 6/5 (one more circle, two more lines) is charted as stc-under-99.9993. Viète had the same number, 1.2φ², in 1593 (stc-over-99.998-viete), by other steps.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: E. W. Hobson, Squaring the Circle: A History of the Problem, 1913, p. 35, construction (4)",
       "redrawn in November 2026 from the book's text (Internet Archive scans), the three fractions read from the value GH = 1.77246 that Hobson gives"
      ],
      "links": [
       {
        "label": "E. W. Hobson, Squaring the Circle: A History of the Problem (1913)",
        "url": "https://archive.org/details/squaringcirclehi00hobsuoft"
       }
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
      ],
      "links": [
       {
        "label": "W. Hayden, Proceedings of the Royal Society 20 (1871-72)",
        "url": "https://archive.org/details/paper-doi-10_1098_rspl_1871_0099"
       }
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
      ],
      "links": [
       {
        "label": "E. W. Hobson, Squaring the Circle: A History of the Problem (1913)",
        "url": "https://archive.org/details/squaringcirclehi00hobsuoft"
       }
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
      ],
      "links": [
       {
        "label": "C. M. Willich, Proceedings of the Royal Society 7 (1854-55)",
        "url": "https://archive.org/details/philtrans08545474"
       }
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
      ],
      "links": [
       {
        "label": "E. W. Hobson, Squaring the Circle: A History of the Problem (1913)",
        "url": "https://archive.org/details/squaringcirclehi00hobsuoft"
       }
      ]
     },
     "holder_kind": "ai",
     "square": "q"
    },
    {
     "id": "stc-over-99.9999999",
     "side": "over",
     "marks": "",
     "holder": "Hung Viet Chu",
     "method": "Chu's construction of Ramanujan's number",
     "circles": 29,
     "lines": 15,
     "acc": "99.99999999",
     "precise": "99.999999993127849876111384378950",
     "date": "2019",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.9999999-Chu",
     "note": "π ≈ (63/25)(1 + (5/2)(15√5 − 7)/269) = 3.1415926538, a number Ramanujan gave (1914), constructed by Chu from three lengths: √63/5, √(15√5 − 7)/5 and √269/8. Correct to nine decimal places; long (29 circles and 15 lines), within the extended ruleset. Relabelled 99.99999999 in November 2026 so the chart reads in order beside Storchi's (stc-over-99.99999998); the id is unchanged.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: H. V. Chu, \"Squaring the Circle Revisited\", 2019, arXiv:1908.01202, section 3",
       "the number is Ramanujan's, from \"Modular equations and approximations to π\" (1914)",
       "redrawn in November 2026 from Chu's steps; his left figure is drawn on the circle's own diameter (his AB = AC = 1) and his right figure on the perpendicular one, and the three lengths are put together the archive's way, as Chu leaves that to \"basic constructions\""
      ],
      "links": [
       {
        "label": "H. V. Chu, Squaring the Circle Revisited (arXiv)",
        "url": "https://arxiv.org/abs/1908.01202"
       }
      ]
     },
     "square": "q"
    },
    {
     "id": "stc-over-99.886",
     "side": "over",
     "marks": "",
     "holder": "A. H. Anglin",
     "method": "Anglin's first quadrature",
     "circles": 3,
     "lines": 11,
     "acc": "99.886",
     "precise": "99.886539840133838032137557365892",
     "date": "1884",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.886-Anglin",
     "note": "In the square about the circle, the tangent at K, where the diagonal DB meets the circle, cuts AB at G (AG is the side of the inscribed square); GC meets DB at H; HF, from H to the far corner F of the inscribed square on the same diagonal, is the side: 1.77345908 radii.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: A. H. Anglin, \"Approximate circle-quadratures\", Messenger of Mathematics XIII (1884), pp. 165-167, construction 1 (Internet Archive, messengermathem06glaigoog)",
       "redrawn in November 2026; the figure is not in the text, and the letters are placed by the one reading that gives Anglin's HF = 1.77345908 (the tangent at K meets AB with AG equal to the side of the inscribed square, as Anglin says it does)"
      ],
      "links": [
       {
        "label": "The Messenger of Mathematics XIII (1884), first scan",
        "url": "https://archive.org/details/messengermathem06glaigoog"
       }
      ]
     },
     "square": "q"
    },
    {
     "id": "stc-under-99.318",
     "side": "under",
     "marks": "",
     "holder": "A. H. Anglin",
     "method": "Anglin's second quadrature",
     "circles": 4,
     "lines": 14,
     "acc": "99.318",
     "precise": "99.318851152342512046872017519779",
     "date": "1884",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Under/99.318-Anglin",
     "note": "E a corner of the inscribed square; the circle about E with the circle's radius cuts the two sides of the inscribed square through E at I and J; IJ produced meets the circle at P; the parallel to a side of the square about the circle, through P and between the diagonals, is the side: √2 − 1 + √(2√2 − 1) = 1.76640701 radii.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: A. H. Anglin, \"Approximate circle-quadratures\", Messenger of Mathematics XIII (1884), pp. 165-167, construction 2, read from a second scan of the volume (Internet Archive, messengermathem00taylgoog), whose text is cleaner than the first (messengermathem06glaigoog)",
       "redrawn in November 2026; the scan names the circle's radius as \"EA\", but only the circle's own radius gives Anglin's ON = √2 − 1 and his value 1.76640701, which the rebuilt figure gives"
      ],
      "links": [
       {
        "label": "The Messenger of Mathematics XIII (1884), second scan, with the plates",
        "url": "https://archive.org/details/messengermathem00taylgoog"
       },
       {
        "label": "The Messenger of Mathematics XIII (1884), first scan",
        "url": "https://archive.org/details/messengermathem06glaigoog"
       }
      ]
     }
    },
    {
     "id": "stc-under-99.985",
     "side": "under",
     "marks": "",
     "holder": "A. H. Anglin",
     "method": "Anglin's third quadrature",
     "circles": 7,
     "lines": 13,
     "acc": "99.985",
     "precise": "99.985544613161501618784908496277",
     "date": "1884",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Under/99.985-Anglin",
     "note": "The circles about two neighbouring points of contact, with the circle's radius, cut the lines of the inscribed square's sides at E and F; a quarter of FE is laid off from F towards the corner K of the inscribed square, to I; IK is laid off from the corner B of the square about the circle along the diagonal, to X; the parallel to the side through X, between the diagonals, is the side: 1.77232578 radii.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: A. H. Anglin, \"Approximate circle-quadratures\", Messenger of Mathematics XIII (1884), pp. 165-167, construction 3, read from a second scan of the volume (Internet Archive, messengermathem00taylgoog), whose text is cleaner than the first (messengermathem06glaigoog)",
       "redrawn in November 2026; E and F fall on the inscribed square's sides produced, the one reading that gives Anglin's EG = √(√2 − ½), FE = √(2√2 − 1) − 1 and his value 1.77232578, which the rebuilt figure gives"
      ],
      "links": [
       {
        "label": "The Messenger of Mathematics XIII (1884), second scan, with the plates",
        "url": "https://archive.org/details/messengermathem00taylgoog"
       },
       {
        "label": "The Messenger of Mathematics XIII (1884), first scan",
        "url": "https://archive.org/details/messengermathem06glaigoog"
       }
      ]
     }
    },
    {
     "id": "stc-over-99.977",
     "side": "over",
     "marks": "",
     "holder": "Lorenzo Mascheroni",
     "method": "Mascheroni's quadrature with the compass alone",
     "circles": 12,
     "lines": 3,
     "acc": "99.977",
     "precise": "99.977076809959006127820162728019",
     "date": "1797",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.977-Mascheroni",
     "note": "With the compass alone: the radius stepped round the circle; arcs about the second and third points with the radius DB, and the unit arcs about the first and fourth, give N, L and M; two chords AN and one chord LM laid round the circle from B end at R, and BR is the side, 1.7726566 radii by Mascheroni's working.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: L. Mascheroni, La geometria del compasso, Pavia 1797, art. 269; French translation, Géométrie du compas, Paris 1798, pp. 250-252 (Internet Archive, gomtrieducompas00masc)",
       "redrawn in November 2026 from the French text; the rebuilt AN = (√11 − √3)/2 = 0.7922870 and LM = (9 − √33)/6 = 0.5425729 are Mascheroni's values, and BR = 1.772657 radii, his 1.7726566"
      ],
      "links": [
       {
        "label": "L. Mascheroni, Géométrie du compas (1798)",
        "url": "https://archive.org/details/gomtrieducompas00masc"
       }
      ]
     }
    },
    {
     "id": "stc-under-99.519",
     "side": "under",
     "marks": "",
     "holder": "A. H. Anglin",
     "method": "Anglin's fourth quadrature",
     "circles": 6,
     "lines": 14,
     "acc": "99.519",
     "precise": "99.519295054699646643790257755199",
     "date": "1884",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Under/99.519-Anglin",
     "note": "E and F as in his third; I where FE meets the diagonal; the circle about C, where the inscribed square's side through E meets the side of the square about the circle, through I meets the arc about the point of contact at J; the parallel to that side through J, between the diagonals, is the side: 1.7681886 radii.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: A. H. Anglin, \"Approximate circle-quadratures\", Messenger of Mathematics XIII (1884), p. 167, construction 4, with fig. 10 on the plate to the volume (Internet Archive, messengermathem00taylgoog, leaf 203)",
       "redrawn in November 2026; the plate is folded and shows only part of fig. 10, which places C on the side of the square about the circle, above E; with it the circle about C through I meets the arc at the J Anglin's working gives. The rebuilt side is 1.76818858 radii against his printed 1.768191052, a difference in the sixth decimal, which a 30-digit solution of the same figure confirms"
      ],
      "links": [
       {
        "label": "The Messenger of Mathematics XIII (1884), second scan, with the plates",
        "url": "https://archive.org/details/messengermathem00taylgoog"
       },
       {
        "label": "The Messenger of Mathematics XIII (1884), first scan",
        "url": "https://archive.org/details/messengermathem06glaigoog"
       }
      ]
     }
    },
    {
     "id": "stc-under-98.304",
     "side": "under",
     "marks": "µ",
     "holder": "Baudhayana",
     "method": "Baudhayana's rule: 7/8 + 1/(8·29) − 1/(8·29·6) + 1/(8·29·6·8)",
     "circles": 14,
     "lines": 10,
     "acc": "98.304",
     "precise": "98.304485395422055210411175561859",
     "date": "about 800 BC",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Under/98.304-Baudhayana",
     "note": "The Sulba Sutra's rule for turning a circle into a square: the diameter in eight parts, one of them in twenty-nine; of these twenty-nine remove twenty-eight, and the sixth part of the one left, less the eighth part of that sixth. The side is 0.878682 of the diameter (π ≈ 3.0883). Drawn step for step; its last corrections are a ten-thousandth of the diameter, so it is micro scale.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: Baudhāyana Śulba Sūtra I.59 (Thibaut's numbering), as translated in G. Thibaut, \"On the Śulvasútras\", Journal of the Asiatic Society of Bengal 44 (1875), pp. 227-275 (Internet Archive, ulvastras00ktgoog), pp. 27-28 of the offprint",
       "Thibaut shows it is the reverse of Baudhāyana's rule for turning a square into a circle, put into numbers (1224 : 1393); also given by K. T. Vahlen, Konstruktionen und Approximationen (1911), p. 177",
       "redrawn in November 2026 from Thibaut's translation; the rebuilt side is 0.8786817 of the diameter, the rule's value"
      ],
      "links": [
       {
        "label": "G. Thibaut, On the Śulvasútras (1875)",
        "url": "https://archive.org/details/ulvastras00ktgoog"
       },
       {
        "label": "K. T. Vahlen, Konstruktionen und Approximationen (1911)",
        "url": "https://archive.org/details/konstruktionenun00vahluoft"
       }
      ]
     }
    },
    {
     "id": "stc-under-95.634",
     "side": "under",
     "marks": "",
     "holder": "Baudhayana",
     "method": "The Sulba Sutras' thirteen fifteenths",
     "circles": 11,
     "lines": 7,
     "acc": "95.634",
     "precise": "95.634436915663330648680376924284",
     "date": "about 800 BC",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Under/95.634-Baudhayana",
     "note": "The Sulba Sutras' simpler rule, common to Baudhayana, Apastamba and Katyayana: divide the diameter into fifteen parts and remove two; the remaining thirteen are the side of the square (π ≈ 3.004).",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: Baudhāyana Śulba Sūtra I.60 (Thibaut's numbering), and in the Śulba Sūtras of Āpastamba and Kātyāyana, as translated in G. Thibaut, \"On the Śulvasútras\", Journal of the Asiatic Society of Bengal 44 (1875), pp. 227-275 (Internet Archive, ulvastras00ktgoog), pp. 27-28 of the offprint",
       "redrawn in November 2026 from Thibaut's translation"
      ],
      "links": [
       {
        "label": "G. Thibaut, On the Śulvasútras (1875)",
        "url": "https://archive.org/details/ulvastras00ktgoog"
       }
      ]
     }
    },
    {
     "id": "stc-over-99.99981",
     "side": "over",
     "marks": "",
     "holder": "Ernst Lakenmacher",
     "method": "Lakenmacher's quadrature",
     "circles": 4,
     "lines": 6,
     "acc": "99.99981",
     "precise": "99.999810304910761512401523664230",
     "date": "1890",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.99981-Lakenmacher",
     "note": "Two lines from the end of a diameter, through the quarter and three-quarter points of the perpendicular radius, meet the circle at y and i; half the foot of i's perpendicular, plus the chord dy, laid on from the centre, gives az, the side: 0.8862278 of the diameter against 0.8862269.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: E. Lakenmacher, \"Verwandlung einer Kreisfläche in ein annähernd gleich grosses Quadrat\", Archiv der Mathematik und Physik (2) IX (1890), pp. 214-215; cited by K. T. Vahlen, Konstruktionen und Approximationen (1911), p. 311",
       "as described step by step in the review by Maynz, Jahrbuch über die Fortschritte der Mathematik 22 (JFM 22.0578.01, zbMATH Open), since p. 214 of the only scan of the Archiv (Internet Archive, archivdermathem49unkngoog) is a blank image",
       "redrawn in November 2026 from the review; the rebuilt az is 0.8862278 of the diameter, the value Vahlen gives (0.8862279)"
      ],
      "links": [
       {
        "label": "Archiv der Mathematik und Physik, 2nd series, IX (1890)",
        "url": "https://archive.org/details/archivdermathem49unkngoog"
       },
       {
        "label": "K. T. Vahlen, Konstruktionen und Approximationen (1911)",
        "url": "https://archive.org/details/konstruktionenun00vahluoft"
       },
       {
        "label": "Jahrbuch über die Fortschritte der Mathematik, JFM 22.0578.01 (zbMATH Open)",
        "url": "https://zbmath.org/?q=an%3A22.0578.01"
       }
      ]
     }
    },
    {
     "id": "stc-under-99.9996",
     "side": "under",
     "marks": "",
     "holder": "Emil Lampe",
     "method": "Lampe's 44 : 23 triangle",
     "circles": 6,
     "lines": 6,
     "acc": "99.9996",
     "precise": "99.999665663581134295678366211501",
     "date": "1916",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Under/99.9996-Lampe",
     "note": "The right triangle with legs 44 and 23: the circle on its hypotenuse as diameter has the area of the square on the longer leg, 1936.00647 against 1936. On the given diameter, the point of the circle with AZ : ZC = 44 : 23 gives the side AZ.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: E. Lampe, \"Angenäherte Kreisquadraturen\", Sitzungsberichte der Berliner Mathematischen Gesellschaft 15 (1916), pp. 150-158",
       "as described in the review in the Jahrbuch über die Fortschritte der Mathematik, JFM 46.0857.01 (zbMATH Open)",
       "redrawn in November 2026 from the review; 44/23 is a convergent of √(π/(4 − π)) = 1.9130585, as Lampe explains; the rebuilt square is 99.99967% of the circle"
      ],
      "links": [
       {
        "label": "Jahrbuch über die Fortschritte der Mathematik, JFM 46.0857.01 (zbMATH Open)",
        "url": "https://zbmath.org/?q=an%3A46.0857.01"
       }
      ]
     }
    },
    {
     "id": "stc-over-99.99986",
     "side": "over",
     "marks": "",
     "holder": "Eduard Gregori",
     "method": "Gregori's quadrature",
     "circles": 5,
     "lines": 9,
     "acc": "99.99986",
     "precise": "99.999862471591152244281880096479",
     "date": "1947",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.99986-Gregori",
     "note": "In the square about the circle, AE (corner to circle along the diagonal) laid on the side from A to F; the circle about F with the radius meets the next side at G; a quarter of AG cut off from A at H; HB is the side: 2r − (r/4)√(2(√2 − 1)), and b² = 3.1415970 r².",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: G. Innerebner, \"Zur Quadratur des Kreises\", Der Schlern (Bozen) 1947, pp. 329-331, who received it from Eduard Gregori, a merchant of Bolzano, and added the proof",
       "as described in the review in the Zentralblatt, Zbl 0032.17902 (zbMATH Open)",
       "redrawn in November 2026 from the review; the rebuilt square is 3.1415970 r², the review's 3.1415969739"
      ],
      "links": [
       {
        "label": "Zentralblatt, Zbl 0032.17902 (zbMATH Open)",
        "url": "https://zbmath.org/?q=an%3A0032.17902"
       }
      ]
     }
    },
    {
     "id": "stc-over-99.99999998",
     "side": "over",
     "marks": "",
     "holder": "Edoardo Storchi",
     "method": "Storchi's quadrature",
     "circles": 16,
     "lines": 13,
     "acc": "99.99999998",
     "precise": "99.999999989443959073843245880505",
     "date": "1947",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.99999998-Storchi",
     "note": "A long construction on two axes (lengths of r/5, 3r/5, r, 2r and 5r, two semicircles, two right triangles and a parallel) that gives the side √(104348/33215) r. 104348/33215 is a convergent of π; the square is within 10⁻⁸ of the circle.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: E. Storchi, \"Sulla quadratura approssimata del cerchio\", Periodico di Matematiche (4) 25 (1947), pp. 224-227",
       "as described step by step in the review in the Zentralblatt, Zbl 0029.31002 (zbMATH Open)",
       "redrawn in November 2026 from the review; the rebuilt side is √(104348/33215) = 1.7724538510 radii"
      ],
      "links": [
       {
        "label": "Zentralblatt, Zbl 0029.31002 (zbMATH Open)",
        "url": "https://zbmath.org/?q=an%3A0029.31002"
       }
      ]
     }
    },
    {
     "id": "stc-over-99.998-viete",
     "side": "over",
     "marks": "",
     "holder": "François Viète",
     "method": "Viète's square",
     "circles": 7,
     "lines": 11,
     "acc": "99.998",
     "precise": "99.998467881887055614596084601667",
     "date": "1593",
     "geogebra": "",
     "file": "GeoGebra Files/Squared Circle Over/99.998-Viete",
     "note": "AF on the radius AD equal to half the chord CE, so that BF² = 3/2 of the radius squared; AC cut in extreme and mean ratio at H; CI parallel to HF meets BF produced at I: as BH to BC, so BF to BI, and BI is the side of the square. Its area is 1.2φ² times the radius squared, the same number as Hobson's square.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: F. Viète, Variorum de rebus mathematicis responsorum liber VIII (Tours 1593), chapter XV, in Francisci Vietae Opera mathematica, ed. F. van Schooten (Leiden 1646), pp. 392-393 (Internet Archive, bub_gb_25iHrtJpy9oC), Proposition IV, with its figure",
       "also given by J. E. Montucla, Histoire des recherches sur la quadrature du cercle (new edition, Paris 1831), p. 76, note (Internet Archive, histoiredesreche00montuoft)",
       "redrawn in November 2026 from the page image of the 1646 edition; the cut of AC in extreme and mean ratio, which Viète takes as known, is made as in his Proposition III"
      ],
      "links": [
       {
        "label": "Francisci Vietae Opera mathematica, ed. F. van Schooten (Leiden 1646)",
        "url": "https://archive.org/details/bub_gb_25iHrtJpy9oC"
       },
       {
        "label": "J. E. Montucla, Histoire des recherches sur la quadrature du cercle (1831 edition)",
        "url": "https://archive.org/details/histoiredesreche00montuoft"
       }
      ]
     },
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
      ],
      "links": [
       {
        "label": "G. H. Hughes, The Polygons of Albrecht Dürer, 1525 (arXiv)",
        "url": "https://arxiv.org/abs/1205.0080"
       }
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
      ],
      "links": [
       {
        "label": "R. C. Yates, The Trisection Problem (1942; NCTM reprint 1971)",
        "url": "https://archive.org/details/ERIC_ED058058"
       }
      ]
     }
    },
    {
     "id": "taa-over-98.796",
     "side": "over",
     "marks": "",
     "holder": "H. Schoeler",
     "method": "Schoeler's trisection",
     "circles": 1,
     "lines": 4,
     "acc": "98.796",
     "precise": "98.796021983927621116053226297479",
     "date": "1902",
     "geogebra": "",
     "file": "GeoGebra Files/Over/TAA-98.796-dOcagne",
     "note": "Schoeler's rule for dividing an angle into n parts, with n = 3: from the point half a radius beyond the centre, opposite B, the line to the middle of the arc makes a third of the angle with OB; carried to the corner by a parallel. Charted at 90°, its weakest angle up to 90°; the rest of the angle is bisected. Long credited here to d'Ocagne, who gave the same steps in 1934; Schoeler's of 1902 is the earliest publication of these steps found, so the credit moved to him (November 2026), and d'Ocagne is listed as having also found it. Cominotto (1895) already quoted, as known, a construction that gives exactly the same third by other steps, and Baratto's rule of 1869 (taa-over-98.796-baratto) gives exactly the same line for every angle by other steps again.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: H. Schoeler, \"Angenäherte n-Teilung eines beliebigen Winkels mit Zirkel und Lineal\", Archiv der Mathematik und Physik (3) 4 (1902), pp. 128-129, as described in the Jahrbuch über die Fortschritte der Mathematik, JFM 33.0517.05 (zbMATH Open): the (n + 1)-th part of 2α as the central angle (for n = 3, the middle of the arc), the diameter through one end, the (n + 1)-th part of the diameter laid off inwards from its far end (half a radius beyond the centre), and the line to the other end",
       "its error examined by E. Lampe, Archiv der Mathematik und Physik (3) 4 (1902), pp. 130-133 (Jahrbuch über die Fortschritte der Mathematik, JFM 33.0518.01 (zbMATH Open)): always slightly larger than α/n",
       "the same steps given by M. d'Ocagne, \"Étude rationnelle du problème de la trisection de l'angle\", L'Enseignement mathématique 33 (1934), pp. 49-63, as cited in R. C. Yates, The Trisection Problem, 1942 (ERIC ED058058), ch. 4, section 6, with his error table, which the file reproduces: 45\" at 30°, 6'14\" at 60°, 21'41\" at 90°",
       "the same third as the construction E. Cominotto quotes as known in \"Trisezione approssimata dell'angolo\" (Padova 1895), as given by U. Amaldi in F. Enriques, Fragen der Elementargeometrie II (1907), § 17, fig. 127; checked equal in November 2026"
      ],
      "links": [
       {
        "label": "R. C. Yates, The Trisection Problem (1942; NCTM reprint 1971)",
        "url": "https://archive.org/details/ERIC_ED058058"
       },
       {
        "label": "U. Amaldi, Aufgaben dritten Grades, in F. Enriques, Fragen der Elementargeometrie II (1907)",
        "url": "https://archive.org/details/rcin.org.pl.WA35_102168_4521-II_Aufgaben-dritten_78454"
       },
       {
        "label": "Jahrbuch über die Fortschritte der Mathematik, JFM 33.0517.05 (zbMATH Open)",
        "url": "https://zbmath.org/?q=an%3A33.0517.05"
       },
       {
        "label": "Jahrbuch über die Fortschritte der Mathematik, JFM 33.0518.01 (zbMATH Open)",
        "url": "https://zbmath.org/?q=an%3A33.0518.01"
       }
      ]
     },
     "rediscovered": [
      {
       "name": "Maurice d'Ocagne",
       "date": "1934",
       "note": "in L'Enseignement mathématique 33 (1934), pp. 49-63, as given by Yates (1942); charted under his name until Schoeler's paper of 1902 was found"
      },
      {
       "name": "Ig. Hajek",
       "date": "1936",
       "note": "\"Die Dreiteilung des Winkels. Eine für den Zeichner praktische Methode\" (Znaim 1936): the same approximation, cot(α/3) ≈ (1/2 + cos(α/2)) : sin(α/2), as the Jahrbuch notes (JFM 62.0698.01)"
      }
     ]
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
      ],
      "links": [
       {
        "label": "R. C. Yates, The Trisection Problem (1942; NCTM reprint 1971)",
        "url": "https://archive.org/details/ERIC_ED058058"
       },
       {
        "label": "K. T. Vahlen, Konstruktionen und Approximationen (1911)",
        "url": "https://archive.org/details/konstruktionenun00vahluoft"
       }
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
      ],
      "links": [
       {
        "label": "K. T. Vahlen, Konstruktionen und Approximationen (1911)",
        "url": "https://archive.org/details/konstruktionenun00vahluoft"
       }
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
      ],
      "links": [
       {
        "label": "K. T. Vahlen, Konstruktionen und Approximationen (1911)",
        "url": "https://archive.org/details/konstruktionenun00vahluoft"
       }
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
      ],
      "links": [
       {
        "label": "K. T. Vahlen, Konstruktionen und Approximationen (1911)",
        "url": "https://archive.org/details/konstruktionenun00vahluoft"
       }
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
      ],
      "links": [
       {
        "label": "K. T. Vahlen, Konstruktionen und Approximationen (1911)",
        "url": "https://archive.org/details/konstruktionenun00vahluoft"
       }
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
    },
    {
     "id": "taa-under-99.999",
     "side": "under",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Cusa's trisection, on the angle halved four times",
     "circles": 6,
     "lines": 10,
     "acc": "99.9996",
     "precise": "99.999605427632536815092150558559",
     "date": "07-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Under/TAA-99.999-Claude",
     "note": "Cusa's trisection (taa-under-95.527) worked on the angle halved four times and doubled back: 99.999% from 30° to 150°, at its weakest at 150°, where the file is drawn. Halved once more it would be micro scale; this is the deepest that stays at macro scale. Credit for the method is Nicholas of Cusa and Snellius's. Found by Claude (Anthropic), an AI, as a variant. Relabelled 99.9996 in November 2026 so the chart reads in order beside Stoyanoff's trisection (taa-under-99.9991); the id is unchanged.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), testing the historical methods on the angle halved again and again, as a variant of Cusa's trisection (taa-under-95.527)"
      ]
     }
    },
    {
     "id": "taa-under-99.697",
     "side": "under",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Dürer's trisection from one side",
     "circles": 7,
     "lines": 6,
     "acc": "99.697",
     "precise": "99.697894004811645265610227911151",
     "date": "07-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Under/TAA-99.697-Claude",
     "note": "Dürer's trisection (taa-over-99.395) from one side only, with the rest of the angle bisected: better than his own two-sided finish (99.698% against 99.395% at 150°, its weakest angle from 30° to 150°, where the file is drawn), with fewer steps. Credit for the method is Dürer's. Found by Claude (Anthropic), an AI, as a variant.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), testing the historical methods on the angle halved again and again, as a variant of Dürer's trisection (taa-over-99.395)"
      ]
     }
    },
    {
     "id": "taa-under-99.976",
     "side": "under",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Karajordanoff's trisection, on the angle halved three times",
     "circles": 6,
     "lines": 10,
     "acc": "99.976",
     "precise": "99.976048632523529419602494256588",
     "date": "07-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Under/TAA-99.976-Claude",
     "note": "Karajordanoff's trisection (taa-under-99.838) worked on the angle halved three times and doubled back: 99.976% from 30° to 150°, at its weakest at 150°, where the file is drawn. Halved once more it would be micro scale; this is the deepest that stays at macro scale. Credit for the method is Karajordanoff's. Found by Claude (Anthropic), an AI, as a variant.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), testing the historical methods on the angle halved again and again, as a variant of Karajordanoff's trisection (taa-under-99.838)"
      ]
     }
    },
    {
     "id": "taa-over-99.987",
     "side": "over",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Schoeler's trisection, on the angle halved four times",
     "circles": 5,
     "lines": 8,
     "acc": "99.987",
     "precise": "99.987598168331336117327650941445",
     "date": "07-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Over/TAA-99.987-Claude",
     "note": "Schoeler's trisection (taa-over-98.796, long credited to d'Ocagne) worked on the angle halved four times and doubled back: 99.987% from 30° to 150°, at its weakest at 150°, where the file is drawn. Halved once more it would be micro scale; this is the deepest that stays at macro scale. Credit for the method is H. Schoeler's (1902). Found by Claude (Anthropic), an AI, as a variant.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), testing the historical methods on the angle halved again and again, as a variant of Schoeler's trisection (taa-over-98.796)"
      ]
     }
    },
    {
     "id": "taa-over-99.990",
     "side": "over",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Cusa's trisection, a quarter versine, on the angle halved twice",
     "circles": 5,
     "lines": 9,
     "acc": "99.990",
     "precise": "99.990311452044343569799788499864",
     "date": "07-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Over/TAA-99.990-Claude",
     "note": "Cusa's trisection, a quarter versine (taa-under-99.660) worked on the angle halved twice and doubled back: 99.990% from 30° to 150°, at its weakest at 150°, where the file is drawn. Halved once more it would be micro scale; this is the deepest that stays at macro scale. Credit for the method is Cusa, Snellius and Vahlen's. Found by Claude (Anthropic), an AI, as a variant.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), testing the historical methods on the angle halved again and again, as a variant of Cusa's trisection, a quarter versine (taa-under-99.660)"
      ]
     }
    },
    {
     "id": "taa-under-99.748",
     "side": "under",
     "marks": "",
     "holder": "P. Monti",
     "method": "Monti's trisection",
     "circles": 5,
     "lines": 11,
     "acc": "99.748",
     "precise": "99.748542671518520132616598217433",
     "date": "1895",
     "geogebra": "",
     "file": "GeoGebra Files/Under/TAA-99.748-Monti",
     "note": "Bisect the angle; half a radius along the parallel to one arm from the middle of the arc; reflect, and raise a perpendicular at a sixth of the bisector; the line through the two crossings meets the arc at the third. A general method, good to 180°: its weakest from 30° to 150° is at 129.13°, where the file is drawn. Monti's own fractions, a half and a sixth, are the best of all small fractions.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: P. Monti, \"Regola generale per la soluzione grafica della trisezione dell'angolo\", with the proof by G. Schiaparelli, Il Politecnico, 1895",
       "as given, with Schiaparelli's proof and error table, in U. Amaldi, \"Aufgaben dritten Grades\", article VII of F. Enriques (ed.), Fragen der Elementargeometrie II, Leipzig 1907 (Internet Archive, rcin.org.pl.WA35_102168_4521-II_Aufgaben-dritten_78454), § 17, fig. 128",
       "redrawn in November 2026; the scan garbles the table, but the rebuilt figure keeps under the 7 minutes Amaldi gives as its largest error up to 180° (6'47\")"
      ],
      "links": [
       {
        "label": "U. Amaldi, Aufgaben dritten Grades, in F. Enriques, Fragen der Elementargeometrie II (1907)",
        "url": "https://archive.org/details/rcin.org.pl.WA35_102168_4521-II_Aufgaben-dritten_78454"
       }
      ]
     }
    },
    {
     "id": "taa-under-99.990",
     "side": "under",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "method": "Monti's trisection, on the angle halved three times",
     "circles": 8,
     "lines": 14,
     "acc": "99.990",
     "precise": "99.990168391355510168329012859325",
     "date": "07-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Under/TAA-99.990-Claude",
     "note": "Monti's trisection worked on the angle halved three times and doubled back: 99.990% from 30° to 150°, at its weakest at 150°, where the file is drawn. Halved once more it would be micro scale. Credit for the method is Monti's. Found by Claude (Anthropic), an AI, as a variant.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), testing the historical methods on the angle halved again and again, as a variant of Monti's trisection"
      ]
     },
     "holder_kind": "ai"
    },
    {
     "id": "taa-over-99.177",
     "side": "over",
     "marks": "",
     "holder": "E. Cominotto",
     "method": "Cominotto's trisection",
     "circles": 9,
     "lines": 7,
     "acc": "99.177",
     "precise": "99.177435279698193381485327921422",
     "date": "1895",
     "geogebra": "",
     "file": "GeoGebra Files/Over/TAA-99.177-Cominotto",
     "note": "BC trisected at D and E; the arc DG about B carried to the semicircle about E as CH; DI = DC along DH, FK = FC along FI; the circle through K, I and C meets the arc AC at T, the third. A general method, good to 180°: its weakest from 30° to 150° is at 150°, where the file is drawn.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: E. Cominotto, Trisezione approssimata dell'angolo, Padova 1895",
       "as given in A. Conti, \"Problemi di 3° grado: duplicazione del cubo, trisezione dell'angolo\", article XIII of F. Enriques (ed.), Questioni riguardanti la geometria elementare, Bologna 1900 (Internet Archive, questioniriguard00enri), § 17, pp. 459-461, figs. 21-22, with the check at 180°; also in U. Amaldi, \"Aufgaben dritten Grades\", article VII of F. Enriques (ed.), Fragen der Elementargeometrie II, Leipzig 1907 (Internet Archive, rcin.org.pl.WA35_102168_4521-II_Aufgaben-dritten_78454), § 17",
       "redrawn in November 2026 from the Italian text; at 180° the rebuilt figure puts T at the height 2√2(1 + √2)/(5 + 2√2) = 0.872260 of the radius, exactly the value the text derives, so the chord CT is 1.0109 radii, 43 minutes of arc over a third. The text's rounded arithmetic (x = 0.485) makes the chord look closer to the radius than it is"
      ],
      "links": [
       {
        "label": "F. Enriques (ed.), Questioni riguardanti la geometria elementare (1900)",
        "url": "https://archive.org/details/questioniriguard00enri"
       },
       {
        "label": "U. Amaldi, Aufgaben dritten Grades, in F. Enriques, Fragen der Elementargeometrie II (1907)",
        "url": "https://archive.org/details/rcin.org.pl.WA35_102168_4521-II_Aufgaben-dritten_78454"
       }
      ]
     }
    },
    {
     "id": "taa-over-99.950",
     "side": "over",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "method": "Cominotto's trisection, on the angle halved twice",
     "circles": 11,
     "lines": 10,
     "acc": "99.950",
     "precise": "99.950309494646427174346660185630",
     "date": "07-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Over/TAA-99.950-Claude",
     "note": "Cominotto's trisection worked on the angle halved twice and doubled back: 99.950% from 30° to 150°, at its weakest at 150°, where the file is drawn. Halved once more it would be micro scale. Credit for the method is Cominotto's. Found by Claude (Anthropic), an AI, as a variant.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), testing the historical methods on the angle halved again and again, as a variant of Cominotto's trisection"
      ]
     },
     "holder_kind": "ai"
    },
    {
     "id": "taa-under-99.981",
     "side": "under",
     "marks": "",
     "holder": "Eugen Kopf",
     "method": "Kopf's second trisection",
     "circles": 4,
     "lines": 7,
     "acc": "99.981",
     "precise": "99.981561196717939443595306981259",
     "date": "1933",
     "geogebra": "",
     "file": "GeoGebra Files/Under/TAA-99.981-Kopf-Perron",
     "note": "Kopf's second construction, as Perron published it in 1933: P two radii beyond the centre; the arc about F, on the diameter at (3 + √3)/6 of the radius, through B, meets the line CA at A'; the angle A'PB is a third of AOB to within 15 seconds up to 90°, exact at 90°. Its largest error, 14.87\" at 69.93°, is Nehring's (1936). Charted at its weakest angle up to 90°, 63.95°; the trisecting line is carried to the corner by a parallel and the rest bisected.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: O. Perron, \"Eine neue Winkeldreiteilung des Schneidermeisters Kopf\", Sitzungsberichte der Bayerischen Akademie der Wissenschaften, math.-nat. Abt., 1933, pp. 439-445 (Jahrbuch über die Fortschritte der Mathematik, JFM 60.1233.02 (zbMATH Open), which describes the construction step for step)",
       "its largest error found by O. Nehring, \"Über die Dreiteilung des Winkels nach Eugen Kopf\", ibid. 1936, pp. 77-79 (Jahrbuch über die Fortschritte der Mathematik, JFM 62.0698.02 (zbMATH Open)): 14.86\" at the angle with cos x = 181/(266 + 151√3), 69.934°, which the rebuilt figure gives exactly",
       "as given, with Perron's table, in R. C. Yates, The Trisection Problem (1942), ch. 4, § 5, fig. 37 (Internet Archive, ERIC_ED058058), who dates Kopf's work to 1919 and mentions refinements by Perron and d'Ocagne",
       "Kopf's first construction (E. Kopf, Die Dreiteilung des Winkels, Ludwigshafen 1929; Perron, Sitzungsberichte München 59 (1929), pp. 341-343) is a different one, with errors up to 8' 12\" for acute angles"
      ],
      "links": [
       {
        "label": "R. C. Yates, The Trisection Problem (1942; NCTM reprint 1971)",
        "url": "https://archive.org/details/ERIC_ED058058"
       },
       {
        "label": "Jahrbuch über die Fortschritte der Mathematik, JFM 60.1233.02 (zbMATH Open)",
        "url": "https://zbmath.org/?q=an%3A60.1233.02"
       },
       {
        "label": "Jahrbuch über die Fortschritte der Mathematik, JFM 62.0698.02 (zbMATH Open)",
        "url": "https://zbmath.org/?q=an%3A62.0698.02"
       }
      ]
     }
    },
    {
     "id": "taa-over-98.796-baratto",
     "side": "over",
     "marks": "",
     "holder": "Gaetano Baratto",
     "method": "Baratto's trisection",
     "circles": 1,
     "lines": 5,
     "acc": "98.796",
     "precise": "98.796021983927621116053226297479",
     "date": "1869",
     "geogebra": "",
     "file": "GeoGebra Files/Over/TAA-98.796-Baratto",
     "note": "C the middle of the arc AB; the tangent at B meets the chord AC at D; DOB is nearly a third of AOB. Practical up to 90°, as Schiaparelli's report shows; charted at 90°, its weakest there. It gives the same point at every angle as Schoeler's construction (taa-over-98.796, also d'Ocagne's) by other steps.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: G. Baratto (Naples), as reported by G. V. Schiaparelli, \"Relazione sopra una regola proposta per la trisezione dell'angolo dal Sig. Gaetano Baratto\", Rendiconti del Reale Istituto Lombardo (2) II (1869)",
       "as described in the review in the Jahrbuch über die Fortschritte der Mathematik, JFM 02.0362.01 (zbMATH Open)",
       "redrawn in November 2026 from the review; the rebuilt third is 30.3612° at 90°, and its errors grow beyond 90° as the report says"
      ],
      "links": [
       {
        "label": "Jahrbuch über die Fortschritte der Mathematik, JFM 02.0362.01 (zbMATH Open)",
        "url": "https://zbmath.org/?q=an%3A02.0362.01"
       }
      ]
     },
     "rediscovered": [
      {
       "name": "J. Kornbrekke",
       "date": "1919",
       "note": "as the case n = 2 of his \"tilnærmet vinkeldelingskonstruktion\" (Norsk Matematisk Tidsskrift 1 (1919), pp. 27, 71; JFM 47.0548.01): the point at the middle of the arc, the line through it from the far end to the tangent at the near end, and the line from the centre, step for step"
      }
     ]
    },
    {
     "id": "taa-under-99.9991",
     "side": "under",
     "marks": "",
     "holder": "A. Stoyanoff",
     "method": "Stoyanoff's trisection",
     "circles": 7,
     "lines": 5,
     "acc": "99.9991",
     "precise": "99.999172631613137856008523657779",
     "date": "1935",
     "geogebra": "",
     "file": "GeoGebra Files/Under/TAA-99.9991-Stoyanoff",
     "note": "The bisector produced beyond the corner by 4k; circles about the corner with 5k and 20k; the bisector of the half next to one arm meets the smaller circle, and the line to it from the end of the 4k meets the larger: the line from the corner is a third of the angle less a positive error under 1 second up to 90°. Charted at 90°, its weakest in that range.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: A. Stoyanoff, \"Sur la trisection de l'angle\", Annuaire de l'Université de Sofia, Faculté physico-mathématique, Livre 1, 31 (1935), pp. 171-176",
       "as described in the review in the Jahrbuch über die Fortschritte der Mathematik, JFM 62.1417.04 (zbMATH Open)",
       "redrawn in November 2026 from the review; with k a quarter of the radius, the rebuilt error is 0.004\" at 30° and 0.894\" at 90°, under the 1 second the review gives"
      ],
      "links": [
       {
        "label": "Jahrbuch über die Fortschritte der Mathematik, JFM 62.1417.04 (zbMATH Open)",
        "url": "https://zbmath.org/?q=an%3A62.1417.04"
       }
      ]
     }
    },
    {
     "id": "taa-under-97.592",
     "side": "under",
     "marks": "",
     "holder": "M. Blasendorff",
     "method": "Blasendorff's division of the arc",
     "circles": 4,
     "lines": 3,
     "acc": "97.592",
     "precise": "97.592043967855242232106452594959",
     "date": "1896",
     "geogebra": "",
     "file": "GeoGebra Files/Under/TAA-97.592-Blasendorff",
     "note": "With m = 1/3: the diameters through both ends of the arc; J on the line from the far end of one diameter through the end of the arc, twice the diameter beyond it; JG meets the arc at H, nearly a third of the way. Charted at 90°, its weakest up to 90°. For every angle α its point H is Cominotto's trisecting point (taa-over-99.177) of the angle 2α.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: M. Blasendorff, \"Ueber die Teilung des Kreisbogens\", Programm der 8. Realschule Berlin (No. 122), 1896, 29 pp., with a table of the errors",
       "as described in the review in the Jahrbuch über die Fortschritte der Mathematik, JFM 27.0394.06 (zbMATH Open)",
       "redrawn in November 2026 from the review, with m = 1/3; the rebuilt arc AH is 29.2776° at 90°"
      ],
      "links": [
       {
        "label": "Jahrbuch über die Fortschritte der Mathematik, JFM 27.0394.06 (zbMATH Open)",
        "url": "https://zbmath.org/?q=an%3A27.0394.06"
       }
      ]
     }
    },
    {
     "id": "taa-over-98.934",
     "side": "over",
     "marks": "",
     "holder": "C. H. Kummell",
     "method": "Kummell's multisection, for thirds",
     "circles": 4,
     "lines": 6,
     "acc": "98.934",
     "precise": "98.934697052405248983598145375485",
     "date": "1878",
     "geogebra": "",
     "file": "GeoGebra Files/Over/TAA-98.934-Kummell",
     "note": "The semicircle about the corner; E on the arm produced with AE = AA' (the equilateral triangle on the perpendicular diameter); ED meets AA' at F; CF divided into three; the line from E through the first point meets the circle on the trisecting line. Good up to 90° (exact there); charted at 66.23°, its weakest up to 90°.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: C. H. Kummell, \"Approximate multisection of an angle and hints for reducing the unavoidable error to the smallest amount\", The Analyst 5 (1878), pp. 172-176",
       "as described in the review in the Jahrbuch über die Fortschritte der Mathematik, JFM 10.0363.04 (zbMATH Open)",
       "redrawn in November 2026 from the review, with n = 3; it is exact at 90°"
      ],
      "links": [
       {
        "label": "Jahrbuch über die Fortschritte der Mathematik, JFM 10.0363.04 (zbMATH Open)",
        "url": "https://zbmath.org/?q=an%3A10.0363.04"
       }
      ]
     }
    },
    {
     "id": "taa-under-99.855",
     "side": "under",
     "marks": "",
     "holder": "J. G. van der Corput and H. Mooij",
     "method": "van der Corput and Mooij's division, r = 1/3",
     "circles": 6,
     "lines": 3,
     "acc": "99.855",
     "precise": "99.855260800469933045572892767482",
     "date": "1949",
     "geogebra": "",
     "file": "GeoGebra Files/Under/TAA-99.855-vanderCorput",
     "note": "From the middle C of the chord AB, D on AB produced with CD = (3 + r²)/(4r) · AC = 7/3 AC, and the circle about D with radius 3(1 − r²)/(4r) · AC = 2 AC: it meets the arc at the point that cuts off r = 1/3 of it. Their simpler form of two; charted at 90°, its weakest up to 90°.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: J. G. van der Corput and H. Mooij, \"Approximate division of an angle into equal parts\", Proceedings of the Koninklijke Nederlandse Akademie van Wetenschappen 52 (1949), pp. 317-328",
       "as described in the review in the Zentralblatt, Zbl 0032.29801 (zbMATH Open)",
       "redrawn in November 2026 from the review, with r = 1/3, the first of their two constructions"
      ],
      "links": [
       {
        "label": "Zentralblatt, Zbl 0032.29801 (zbMATH Open)",
        "url": "https://zbmath.org/?q=an%3A0032.29801"
       }
      ]
     }
    },
    {
     "id": "taa-under-99.584",
     "side": "under",
     "marks": "",
     "holder": "D. Visser",
     "method": "Visser's trisection",
     "circles": 6,
     "lines": 6,
     "acc": "99.584",
     "precise": "99.584611351392127806854709089838",
     "date": "1950",
     "geogebra": "",
     "file": "GeoGebra Files/Under/TAA-99.584-Visser",
     "note": "Built on a circle three radii about a point a radius behind the corner, with a parallel and two more circles: the angle CDJ is a third. Visser gives it for acute angles; charted at 90°, its weakest up to 90°.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: D. Visser, \"Eine Näherungskonstruktion für die Trisektion eines Winkels\", Simon Stevin 27 (1950), pp. 69-70",
       "as described in the review in the Zentralblatt, Zbl 0037.37802 (zbMATH Open)",
       "redrawn in November 2026 from the review"
      ],
      "links": [
       {
        "label": "Zentralblatt, Zbl 0037.37802 (zbMATH Open)",
        "url": "https://zbmath.org/?q=an%3A0037.37802"
       }
      ]
     }
    },
    {
     "id": "taa-over-98.678",
     "side": "over",
     "marks": "",
     "holder": "Sauerbeck",
     "method": "Sauerbeck's trisection",
     "circles": 4,
     "lines": 4,
     "acc": "98.678",
     "precise": "98.678051586226728249690596289170",
     "date": "1951",
     "geogebra": "",
     "file": "GeoGebra Files/Over/TAA-98.678-Sauerbeck",
     "note": "Bisect the angle, and the half next to OB; the chord from B to the middle of the arc meets the quarter line at E; EF = BE towards O; the equilateral triangle on BF gives G, and BOG is the third. Its error stays under 8'12\" up to 180° but does not shrink for small angles, so it is charted at its weakest from 30° to 150°, at 30°.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: J. Lense, \"Die Winkeldreiteilung des Herrn Sauerbeck\", Sitzungsberichte der Bayerischen Akademie der Wissenschaften, math.-nat. Klasse, 1950 (1951), pp. 107-110",
       "as described in the review in the Zentralblatt, Zbl 0043.35403 (zbMATH Open)",
       "redrawn in November 2026 from the review; the rebuilt error is 7.93' at 30°, 6.24' at 60°, 0 at 90° and 180°, under the 8'12\" Lense gives"
      ],
      "links": [
       {
        "label": "Zentralblatt, Zbl 0043.35403 (zbMATH Open)",
        "url": "https://zbmath.org/?q=an%3A0043.35403"
       }
      ]
     }
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
     "note": "Re-measured at full precision in November 2026: the chart listed 99.227% oversized. The earlier figure came from edge lengths rounded to one decimal place. The edge comes out at exactly 5/4, the value of Stifel's circle on Plato's figure (1544, dtc-under-97.65625).",
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
      ],
      "links": [
       {
        "label": "W. Hayden, Proceedings of the Royal Society 20 (1871-72)",
        "url": "https://archive.org/details/paper-doi-10_1098_rspl_1871_0099"
       }
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
      ],
      "links": [
       {
        "label": "L. Mascheroni, Géométrie du compas (1798)",
        "url": "https://archive.org/details/gomtrieducompas00masc"
       },
       {
        "label": "K. T. Vahlen, Konstruktionen und Approximationen (1911)",
        "url": "https://archive.org/details/konstruktionenun00vahluoft"
       }
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
      ],
      "links": [
       {
        "label": "L. Mascheroni, Géométrie du compas (1798)",
        "url": "https://archive.org/details/gomtrieducompas00masc"
       }
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
      ],
      "links": [
       {
        "label": "U. Amaldi, Aufgaben dritten Grades, in F. Enriques, Fragen der Elementargeometrie II (1907)",
        "url": "https://archive.org/details/rcin.org.pl.WA35_102168_4521-II_Aufgaben-dritten_78454"
       }
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
      ],
      "links": [
       {
        "label": "U. Amaldi, Aufgaben dritten Grades, in F. Enriques, Fragen der Elementargeometrie II (1907)",
        "url": "https://archive.org/details/rcin.org.pl.WA35_102168_4521-II_Aufgaben-dritten_78454"
       }
      ]
     }
    },
    {
     "id": "dtc-under-99.729",
     "side": "under",
     "marks": "",
     "holder": "G. J. Vargiù",
     "method": "Vargiù's mean proportionals",
     "circles": 16,
     "lines": 2,
     "acc": "99.729",
     "precise": "99.729605608547012625765991384792",
     "date": "1877",
     "geogebra": "",
     "file": "GeoGebra Files/Under/DTC-99.729-Vargiu",
     "note": "From the edge and the face diagonal, each length the mean proportional of the two before it; the seventh is the edge of the doubled cube, 2^(85/256) = 1.258784 against ∛2 = 1.259921. A convergent construction: more of them come closer still.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: G. J. Vargiù, Sulla duplicazione del cubo e sulla multiplicazione di esso, Oristano 1877",
       "as given in U. Amaldi, \"Aufgaben dritten Grades\", article VII of F. Enriques (ed.), Fragen der Elementargeometrie II, Leipzig 1907 (Internet Archive, rcin.org.pl.WA35_102168_4521-II_Aufgaben-dritten_78454), § 9; also cited in K. T. Vahlen, Konstruktionen und Approximationen (1911), p. 292, after Buteo (1554)",
       "redrawn in November 2026; the scan garbles Amaldi's figures, and the value is the one the construction gives, 2^(85/256)"
      ],
      "links": [
       {
        "label": "U. Amaldi, Aufgaben dritten Grades, in F. Enriques, Fragen der Elementargeometrie II (1907)",
        "url": "https://archive.org/details/rcin.org.pl.WA35_102168_4521-II_Aufgaben-dritten_78454"
       },
       {
        "label": "K. T. Vahlen, Konstruktionen und Approximationen (1911)",
        "url": "https://archive.org/details/konstruktionenun00vahluoft"
       }
      ]
     }
    },
    {
     "id": "dtc-over-99.972",
     "side": "over",
     "marks": "",
     "holder": "Gaetano Boccali",
     "method": "Boccali's duplication",
     "circles": 6,
     "lines": 3,
     "acc": "99.972",
     "precise": "99.972684147537496573633387496366",
     "date": "1884",
     "geogebra": "",
     "file": "GeoGebra Files/Over/DTC-99.972-Boccali",
     "note": "The side of the regular star decagon in the circle of radius AB, laid along AB, and the semicircle on it: two thirds of A'C + UB' is the edge, (2/3)((√5 − 1)/2 + √φ) = 1.2600358 against ∛2 = 1.2599210, over by less than a ten-thousandth, as Conti states.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: Gaetano Boccali, Doppio cubo ed altre nuove scoperte geometriche in una semplice spirale poligona, Camerino 1884",
       "as re-derived (Conti found Boccali's own route artificial and badly explained, and gives the same result by a different way) in A. Conti, \"Problemi di 3° grado: duplicazione del cubo, trisezione dell'angolo\", article XIII of F. Enriques (ed.), Questioni riguardanti la geometria elementare, Bologna 1900 (Internet Archive, questioniriguard00enri), § 11, pp. 442-445; also in U. Amaldi, \"Aufgaben dritten Grades\", article VII of F. Enriques (ed.), Fragen der Elementargeometrie II, Leipzig 1907 (Internet Archive, rcin.org.pl.WA35_102168_4521-II_Aufgaben-dritten_78454), § 9",
       "redrawn in November 2026 from the Italian text, whose numbers survive the scan: A'C = 0.6180339887, UB' = 1.2720196495, two thirds of the sum 1.2600357588; the rebuilt figure gives the same",
       "the value 1.260035 confirmed independently by K. T. Vahlen, Konstruktionen und Approximationen (1911), p. 284, note 1"
      ],
      "links": [
       {
        "label": "F. Enriques (ed.), Questioni riguardanti la geometria elementare (1900)",
        "url": "https://archive.org/details/questioniriguard00enri"
       },
       {
        "label": "U. Amaldi, Aufgaben dritten Grades, in F. Enriques, Fragen der Elementargeometrie II (1907)",
        "url": "https://archive.org/details/rcin.org.pl.WA35_102168_4521-II_Aufgaben-dritten_78454"
       },
       {
        "label": "K. T. Vahlen, Konstruktionen und Approximationen (1911)",
        "url": "https://archive.org/details/konstruktionenun00vahluoft"
       }
      ]
     }
    },
    {
     "id": "dtc-under-99.9976",
     "side": "under",
     "marks": "",
     "holder": "K. T. Vahlen",
     "method": "Vahlen's external division",
     "circles": 10,
     "lines": 4,
     "acc": "99.9976",
     "precise": "99.997673552813946002460021205064",
     "date": "1911",
     "geogebra": "",
     "file": "GeoGebra Files/Under/DTC-99.9976-Vahlen",
     "note": "The length 8 divided externally so that the parts multiply to 35/3: the smaller part is the edge, the root of 3x² + 24x = 35, an approximate equation for ∛2 from Jacobi's algorithm. 1.2599112 against ∛2 = 1.2599210, the value Vahlen gives.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: K. T. Vahlen, Konstruktionen und Approximationen in systematischer Darstellung, Leipzig 1911 (Internet Archive, konstruktionenun00vahluoft), pp. 283-284, where Vahlen calls it simpler and more accurate than Buonafalce's, Boccali's and Mascheroni's",
       "redrawn in November 2026; the scan garbles the fraction, read back as 35/3 because it alone gives Vahlen's printed value 1.2599112 (the root of x² + 8x = 35/3 is 1.25991128)"
      ],
      "links": [
       {
        "label": "K. T. Vahlen, Konstruktionen und Approximationen (1911)",
        "url": "https://archive.org/details/konstruktionenun00vahluoft"
       }
      ]
     }
    },
    {
     "id": "dtc-under-97.65625",
     "side": "under",
     "marks": "",
     "holder": "Michael Stifel",
     "method": "Stifel's circle on Plato's figure",
     "circles": 3,
     "lines": 1,
     "acc": "97.65625",
     "precise": "97.656250000000000000000000000000",
     "date": "1544",
     "geogebra": "",
     "file": "GeoGebra Files/Under/DTC-97.65625-Stifel",
     "note": "Plato's figure for two mean proportionals between OA = 1 and OB = 2, set at right angles: the circle about M, three eighths of the way along OB, through B, meets OB's line beyond O at D and OA's line near C. OD = 5/4 stands for ∛2 (and OC = 1.581 for ∛4). Exactly the value of Gordon's Cube 2 Tesseract v1.0 (dtc-under-97.656), which also lands on the edge 5/4; charted with the full value, which ends there, so the two keep separate labels.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: Michael Stifel, Arithmetica integra, Nürnberg 1544, fol. 119",
       "as given in K. T. Vahlen, Konstruktionen und Approximationen in systematischer Darstellung, Leipzig 1911 (Internet Archive, konstruktionenun00vahluoft), p. 284, who notes that it gives only ∛2 = 5/4 but can be improved at will (OM = 0.37 instead)",
       "redrawn in November 2026; the scan garbles the fractions, read back as OM = 3/8 and ∛2 = 5/4, the only pair that agrees with each other and with Vahlen's \"besser 0,37\""
      ],
      "links": [
       {
        "label": "K. T. Vahlen, Konstruktionen und Approximationen (1911)",
        "url": "https://archive.org/details/konstruktionenun00vahluoft"
       }
      ]
     }
    },
    {
     "id": "dtc-over-99.998",
     "side": "over",
     "marks": "",
     "holder": "K. T. Vahlen",
     "method": "Vahlen's square: 349/277",
     "circles": 10,
     "lines": 11,
     "acc": "99.998",
     "precise": "99.998393238559658581778723025051",
     "date": "1911",
     "geogebra": "",
     "file": "GeoGebra Files/Over/DTC-99.998-Vahlen",
     "note": "The convergent 349/277 of ∛2's continued fraction, written as (2² + (5/9)²) / (1² + (1 + 5/9)²) = FE² / FB² and drawn on the unit square with two parallels: 1.2599275 against ∛2 = 1.2599210.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: K. T. Vahlen, Konstruktionen und Approximationen in systematischer Darstellung, Leipzig 1911 (Internet Archive, konstruktionenun00vahluoft), pp. 282-283, with its figure",
       "redrawn in November 2026 from the page image (the scanned text garbles the fractions): DF = 5/9 on AD beyond D, CE = 1 on DC beyond C, FJ = 1 and FG = FE on FB, GH parallel to BE, JK parallel to BH; FK = 349/277, Vahlen's 1.2599275"
      ],
      "links": [
       {
        "label": "K. T. Vahlen, Konstruktionen und Approximationen (1911)",
        "url": "https://archive.org/details/konstruktionenun00vahluoft"
       }
      ]
     }
    },
    {
     "id": "dtc-over-99.868",
     "side": "over",
     "marks": "",
     "holder": "Christiaan Huygens",
     "method": "Huygens' chords: cosec 52.5°",
     "circles": 2,
     "lines": 4,
     "acc": "99.868",
     "precise": "99.868657142249619300891080153953",
     "date": "before 1695",
     "geogebra": "",
     "file": "GeoGebra Files/Over/DTC-99.868-Huygens",
     "note": "On the semicircle over AC = 2, the arc AF = 60° and the arc CD = 45°; AD and CF meet at E, and AE = cosec 52.5° = 1.2605 radii. Huygens remarks that the exact point would need EF = CD.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: C. Huygens, Varia opera mathematica I (Leiden 1724), p. 1, as given with its figure in K. T. Vahlen, Konstruktionen und Approximationen in systematischer Darstellung, Leipzig 1911 (Internet Archive, konstruktionenun00vahluoft), p. 284",
       "redrawn in November 2026 from the page image of Vahlen; the rebuilt AE is cosec 52.5° = 1.260472 radii, Vahlen's 1.2605"
      ],
      "links": [
       {
        "label": "K. T. Vahlen, Konstruktionen und Approximationen (1911)",
        "url": "https://archive.org/details/konstruktionenun00vahluoft"
       }
      ]
     }
    },
    {
     "id": "dtc-over-99.981",
     "side": "over",
     "marks": "",
     "holder": "A. A. Dmitrovskij",
     "method": "Dmitrovskij's 1.26",
     "circles": 8,
     "lines": 5,
     "acc": "99.981",
     "precise": "99.981200000000000000000000000000",
     "date": "1910",
     "geogebra": "",
     "file": "GeoGebra Files/Over/DTC-99.981-Dmitrovskij",
     "note": "∛2 ≈ 1.26, drawn as b = 1.2 a and x = b + b/4 − b/5: exact to a/12500 in the edge.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: A. A. Dmitrovskij, \"Angenäherte Lösung der Aufgabe der Würfelverdoppelung\" (in Russian), Vestnik opytnoj fiziki i elementarnoj matematiki (Kagan's Bote) Nr. 526-527 (1910), pp. 269-291",
       "as described in the review in the Jahrbuch über die Fortschritte der Mathematik, JFM 41.0569.01 (zbMATH Open)",
       "redrawn in November 2026 from the review; the rebuilt edge is 1.26 exactly"
      ],
      "links": [
       {
        "label": "Jahrbuch über die Fortschritte der Mathematik, JFM 41.0569.01 (zbMATH Open)",
        "url": "https://zbmath.org/?q=an%3A41.0569.01"
       }
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
       "published: Kochański, Acta Eruditorum, 1685",
       "it reappeared without its author's name in the Bibliothèque universelle III (1816), as Gergonne reports in the Annales de mathématiques VIII (1818), construction II, giving π = 3.14153334; Vahlen (1911, p. 310) identifies it as Kochański's",
       "again, under the name of Nicolai Nuwrotzki, in Journal für die reine und angewandte Mathematik 32 (1846), pp. 91-92, \"Zur näherungsweisen Kreis-Quadratur\" (Internet Archive, sim_journal-fuer-die-reine-und-angewandte-mathematik_1846_32); the same construction step for step (the tangent at one end of the diameter, the 30° line from the centre, three radii along the tangent, and the line to the other end)"
      ],
      "links": [
       {
        "label": "Crelle's Journal für die reine und angewandte Mathematik 32 (1846)",
        "url": "https://archive.org/details/sim_journal-fuer-die-reine-und-angewandte-mathematik_1846_32"
       },
       {
        "label": "K. T. Vahlen, Konstruktionen und Approximationen (1911)",
        "url": "https://archive.org/details/konstruktionenun00vahluoft"
       },
       {
        "label": "Gergonne's Annales de mathématiques VIII (1817-18)",
        "url": "https://archive.org/details/annalesdemathma06unkngoog"
       }
      ]
     },
     "rediscovered": [
      {
       "name": "Nicolai Nuwrotzki",
       "date": "before 1846",
       "note": "in \"Über die Rectification der Peripherie des Kreises\" (Hamburg, Nestler und Melle), without mention of Kochański, as reported in Journal für die reine und angewandte Mathematik 32 (1846), pp. 91-92, \"Zur näherungsweisen Kreis-Quadratur\" (Internet Archive, sim_journal-fuer-die-reine-und-angewandte-mathematik_1846_32)"
      }
     ]
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
      ],
      "links": [
       {
        "label": "Collected Papers of Srinivasa Ramanujan (1927)",
        "url": "https://archive.org/details/pli.kerala.rare.28155"
       }
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
      ],
      "links": [
       {
        "label": "E. W. Hobson, Squaring the Circle: A History of the Problem (1913)",
        "url": "https://archive.org/details/squaringcirclehi00hobsuoft"
       }
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
     "acc": "99.999977",
     "precise": "99.999977703818357853546539562126",
     "date": "1828",
     "geogebra": "",
     "file": "GeoGebra Files/Under/RTC-99.99997-Specht",
     "note": "On the tangent at A, AB = 11/5 and BC = 2/5 of the radius; AD = OB on the diameter through A, and DE parallel to OC give AE = (13/25) √146 of the radius, short of the circumference by 1.4 millionths of the radius. Hobson gives no first name. Relabelled 99.999977 in November 2026 so the chart reads in order beside Hagge's (rtc-under-99.999976); the id is unchanged.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: Specht, Crelle's Journal, vol. 3, p. 83",
       "described in E. W. Hobson, Squaring the Circle: A History of the Problem, 1913, pp. 34-35, construction (3)",
       "redrawn in November 2026 from the book's text (Internet Archive scans), BC read from the value AE = 6.2831839 that Hobson gives"
      ],
      "links": [
       {
        "label": "E. W. Hobson, Squaring the Circle: A History of the Problem (1913)",
        "url": "https://archive.org/details/squaringcirclehi00hobsuoft"
       }
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
     "note": "The right triangle with legs 3/5 and 6/5 of the diameter has a perimeter of 1.8 + (3/5)√5 = 3.1416407 diameters, very nearly the circumference. Laid out on one line here. The same number as Hobson's squaring, 6/5 · (1 + φ), 62 years earlier. The value itself, 1.8 + √1.8 = (3/5)(3 + √5), is older: it is called Vieta's in the Jahrbuch (JFM 62.0698.03, on Lambacher 1936), and A. Busch constructed it in his Vorschule der darstellenden Geometrie (1846), as the Jahrbuch notes on G. Peirce's rediscovery of it in 1907 (JFM 38.0535.01); Lakenmacher (1888) gave it again as a formula. Whether Busch's construction is Kunze's triangle is not known yet (see Wanted). Viète had the same number, 1.2φ², in 1593 (rtc-over-99.998-viete), by other steps.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: A. Kunze, Lehrbuch der Planimetrie I, 2nd edition, Jena 1851, p. 278",
       "as given in K. T. Vahlen, Konstruktionen und Approximationen in systematischer Darstellung, Leipzig 1911, p. 311 (Internet Archive, konstruktionenun00vahluoft)",
       "redrawn in November 2026; the fifths of the radius and the laying out of the perimeter on one line are the archive's"
      ],
      "links": [
       {
        "label": "K. T. Vahlen, Konstruktionen und Approximationen (1911)",
        "url": "https://archive.org/details/konstruktionenun00vahluoft"
       }
      ]
     }
    },
    {
     "id": "rtc-under-99.826",
     "side": "under",
     "marks": "",
     "holder": "Nicholas of Cusa",
     "method": "Cusa's triangle",
     "circles": 8,
     "lines": 2,
     "acc": "99.826",
     "precise": "99.826927249160111806289591143967",
     "date": "15th century",
     "geogebra": "",
     "file": "GeoGebra Files/Under/RTC-99.826-Cusa",
     "note": "Extend the radius OA by the side of the inscribed square, to B; the perimeter of the equilateral triangle in the circle on OB is very nearly the circumference: π ≈ (3√3/4)(1 + √2) = 3.1361. One of Cusa's many constructions, as Beutel gives it.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "Nicholas of Cusa (1401-1464), \"De mathematica perfectione\" and his other writings on the quadrature",
       "as given, with its value 3.1361, in E. Beutel, Die Quadratur des Kreises, Leipzig 1913 (Internet Archive, diequadraturdes01beutgoog), p. 26, fig. 6",
       "redrawn in November 2026; the triangle's three sides are laid end to end on one line, as Beutel compares its perimeter with the circumference"
      ],
      "links": [
       {
        "label": "E. Beutel, Die Quadratur des Kreises (1913)",
        "url": "https://archive.org/details/diequadraturdes01beutgoog"
       }
      ]
     }
    },
    {
     "id": "rtc-under-99.999996",
     "side": "under",
     "marks": "",
     "holder": "Pioche",
     "method": "Pioche's rectification",
     "circles": 9,
     "lines": 6,
     "acc": "99.999996",
     "precise": "99.999996810524326040993991303189",
     "date": "1818",
     "geogebra": "",
     "file": "GeoGebra Files/Under/RTC-99.999996-Pioche",
     "note": "A radius up from A, three along the line to D; BD; the perpendicular at the first division meets BD at E; DE carried on beyond D; then 7/8 of a radius beyond that and 3/10 of one beyond A. KL = (501 + 80√10)/120 radii, short of the circumference by two ten-millionths of the radius. \"Le plus exact\", Gergonne says, of the graphical rectifications.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: J. D. Gergonne, \"Sur quelques rectifications approchées de la circonférence du cercle\", Annales de mathématiques pures et appliquées VIII (1817-18), pp. 245-253 (Internet Archive, annalesdemathma06unkngoog), construction III, \"dû à M. Pioche, militaire distingué, résidant à Metz\", communicated by Servois",
       "redrawn in November 2026 from Gergonne's text; the scan garbles the two fractions, FK = 7/8 of FG and AL = 3/10 of AH, which are the ones that give Gergonne's KL = (501 + 80√10)/120 (their sum must be 47/40); also cited in K. T. Vahlen, Konstruktionen und Approximationen (1911), p. 311"
      ],
      "links": [
       {
        "label": "Gergonne's Annales de mathématiques VIII (1817-18)",
        "url": "https://archive.org/details/annalesdemathma06unkngoog"
       },
       {
        "label": "K. T. Vahlen, Konstruktionen und Approximationen (1911)",
        "url": "https://archive.org/details/konstruktionenun00vahluoft"
       }
      ]
     }
    },
    {
     "id": "rtc-over-99.974",
     "side": "over",
     "marks": "",
     "holder": "Lorenzo Mascheroni",
     "method": "Mascheroni's quarter of the circle",
     "circles": 7,
     "lines": 0,
     "acc": "99.974",
     "precise": "99.974327715793193754982284378486",
     "date": "1797",
     "geogebra": "",
     "file": "GeoGebra Files/Over/RTC-99.974-Mascheroni",
     "note": "With the compass alone: the radius carried round from A to E and E to D; the circles about A and B of radii AD and BE meet at F; the circle about E through F meets the circle at G. AG is very nearly a quarter of the circumference: π ≈ 3.14239917.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: L. Mascheroni, La geometria del compasso, Pavia 1797; Géométrie du compas, Paris 1798, p. 248",
       "as given, with its value π = 3.14239917, in J. D. Gergonne, \"Sur quelques rectifications approchées de la circonférence du cercle\", Annales de mathématiques pures et appliquées VIII (1817-18), pp. 245-253 (Internet Archive, annalesdemathma06unkngoog), construction I",
       "redrawn in November 2026; the scan reads \"B\" for the centre of the last arc, but only E (or D, the same by symmetry) gives Gergonne's value"
      ],
      "links": [
       {
        "label": "Gergonne's Annales de mathématiques VIII (1817-18)",
        "url": "https://archive.org/details/annalesdemathma06unkngoog"
       },
       {
        "label": "L. Mascheroni, Géométrie du compas (1798)",
        "url": "https://archive.org/details/gomtrieducompas00masc"
       }
      ]
     },
     "result_scale": 4
    },
    {
     "id": "rtc-under-99.9999995",
     "side": "under",
     "marks": "",
     "holder": "Specht",
     "method": "Specht's second construction",
     "circles": 14,
     "lines": 11,
     "acc": "99.9999995",
     "precise": "99.999999571702204190564752606934",
     "date": "1828",
     "geogebra": "",
     "file": "GeoGebra Files/Under/RTC-99.9999995-Specht",
     "note": "Five radii along one arm of a right angle, two of them trisected; the distances Mm and Rr carried to the other arm; a parallel from c. Cd = 5√(439/278) radii, short of the circumference by about a seventh of a millionth of the radius: Specht's \"second approximate construction\", accurate to the eighth decimal, as he says.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: C. G. Specht, \"Zweite Annäherungs-Construction des Kreis-Umfanges\", Journal für die reine und angewandte Mathematik 3 (1828), pp. 405-406 (Internet Archive, journalfrdierei14crelgoog)",
       "cited in K. T. Vahlen, Konstruktionen und Approximationen (1911), p. 311",
       "redrawn in November 2026; the thirds are laid off the archive's way"
      ],
      "links": [
       {
        "label": "Crelle's Journal für die reine und angewandte Mathematik 3 (1828)",
        "url": "https://archive.org/details/journalfrdierei14crelgoog"
       },
       {
        "label": "K. T. Vahlen, Konstruktionen und Approximationen (1911)",
        "url": "https://archive.org/details/konstruktionenun00vahluoft"
       }
      ]
     }
    },
    {
     "id": "rtc-over-99.851",
     "side": "over",
     "marks": "",
     "holder": "Maurice d'Ocagne",
     "method": "d'Ocagne's √2 + √3 (after Bioche)",
     "circles": 1,
     "lines": 7,
     "acc": "99.851",
     "precise": "99.851294649965491571107390618366",
     "date": "1895",
     "geogebra": "",
     "file": "GeoGebra Files/Over/RTC-99.851-dOcagne",
     "note": "Bioche noticed that √2 + √3 = 3.1463 is close to π; d'Ocagne drew it in one go: OB at 45°, the parallel through B to the tangent at A', and the bisector of the angle COA cuts off AD = √2 + √3 on the tangent at A, nearly the half circumference. Lemoine drew the same value more simply the same year (rtc-over-99.851-lemoine-a and -b), and reports that it had been set as an exercise earlier, in Amiot's Géométrie revised by Vintéjoux.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: M. d'Ocagne, \"Rectification approchée du cercle\", Journal de mathématiques élémentaires, 4th series, IV (1895) (Internet Archive, journaldemathma34unkngoog), pp. 77-78, after a remark of Ch. Bioche to the Société mathématique de France; Mannheim's proof follows on p. 103",
       "cited in K. T. Vahlen, Konstruktionen und Approximationen (1911), p. 311",
       "redrawn in November 2026 from d'Ocagne's text"
      ],
      "links": [
       {
        "label": "Journal de mathématiques élémentaires (1895)",
        "url": "https://archive.org/details/journaldemathma34unkngoog"
       },
       {
        "label": "K. T. Vahlen, Konstruktionen und Approximationen (1911)",
        "url": "https://archive.org/details/konstruktionenun00vahluoft"
       }
      ]
     },
     "result_scale": 2
    },
    {
     "id": "rtc-under-99.994",
     "side": "under",
     "marks": "",
     "holder": "A. Pleskot",
     "method": "Pleskot's rectification",
     "circles": 5,
     "lines": 3,
     "acc": "99.9947",
     "precise": "99.994772554399896944801333187340",
     "date": "1895",
     "geogebra": "",
     "file": "GeoGebra Files/Under/RTC-99.994-Pleskot",
     "note": "The circle about one end m of a diameter cuts the circle at a and b; ab crosses the diameter at s; sl = 2ab along the diameter, lv = 2r along lb: vb is nearly a quarter of the circumference, 2vb = √51 − 4 = 3.1414284. Relabelled 99.9947 in November 2026 so the chart reads in order beside Busch's second construction (rtc-under-99.9945); the id is unchanged.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: A. Pleskot (Prague), \"Sur la rectification approchée du cercle\", Journal de mathématiques élémentaires, 4th series, IV (1895) (Internet Archive, journaldemathma34unkngoog), pp. 125-126, first in the Časopis pro pěstování mathematiky a fysiky",
       "cited in K. T. Vahlen, Konstruktionen und Approximationen (1911), p. 311",
       "redrawn in November 2026; the scan reads \"si = 206\" for sl = 2ab, which the proof fixes as 2√3"
      ],
      "links": [
       {
        "label": "Journal de mathématiques élémentaires (1895)",
        "url": "https://archive.org/details/journaldemathma34unkngoog"
       },
       {
        "label": "K. T. Vahlen, Konstruktionen und Approximationen (1911)",
        "url": "https://archive.org/details/konstruktionenun00vahluoft"
       }
      ]
     },
     "result_scale": 4
    },
    {
     "id": "rtc-over-99.904",
     "side": "over",
     "marks": "",
     "holder": "A. L. Crelle",
     "method": "The cosine equal to its tangent",
     "circles": 4,
     "lines": 5,
     "acc": "99.904",
     "precise": "99.904097769121747403630174171380",
     "date": "1846",
     "geogebra": "",
     "file": "GeoGebra Files/Over/RTC-99.904-Crelle",
     "note": "The angle whose cosine equals its tangent: its sine is (√5 − 1)/2, and its cosine, √((√5 − 1)/2) = 0.786151 radii, is nearly an eighth of the circumference, 0.785398. Drawn as the perpendicular from the centre to a chord √5 − 1 long, taken off the line from one end of the diameter to the tangent at the other. Lemoine (1895) drew the same length another way, as the leg of a right triangle on the diameter (rtc-over-99.904-lemoine).",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published (unsigned, \"Berlin im März 1846\") in Journal für die reine und angewandte Mathematik 32 (1846), pp. 91-92, \"Zur näherungsweisen Kreis-Quadratur\" (Internet Archive, sim_journal-fuer-die-reine-und-angewandte-mathematik_1846_32); attributed to Crelle, the journal's editor, by Vahlen",
       "cited in K. T. Vahlen, Konstruktionen und Approximationen in systematischer Darstellung, Leipzig 1911 (Internet Archive, konstruktionenun00vahluoft), p. 312: \"der aus cos x = tg x folgende Wert 0,786151 statt 0,785398\"",
       "redrawn in November 2026 from the journal text, which gives the figure step by step; the rebuilt OP is 0.786151 radii, the value printed"
      ],
      "links": [
       {
        "label": "Crelle's Journal für die reine und angewandte Mathematik 32 (1846)",
        "url": "https://archive.org/details/sim_journal-fuer-die-reine-und-angewandte-mathematik_1846_32"
       },
       {
        "label": "K. T. Vahlen, Konstruktionen und Approximationen (1911)",
        "url": "https://archive.org/details/konstruktionenun00vahluoft"
       }
      ]
     },
     "result_scale": 8
    },
    {
     "id": "rtc-under-99.9997",
     "side": "under",
     "marks": "",
     "holder": "K. T. Vahlen",
     "method": "Vahlen's external division for π",
     "circles": 12,
     "lines": 3,
     "acc": "99.9997",
     "precise": "99.999736401923321241913021808841",
     "date": "1911",
     "geogebra": "",
     "file": "GeoGebra Files/Under/RTC-99.9997-Vahlen",
     "note": "39/4 diameters divided externally so that the parts multiply to 81/2: the smaller part is the root of 4x² + 39x = 162, 3.1415844 diameters, Vahlen's 3.14158. Found, like his ∛2 (dtc-under-99.9976), as a small-integer quadratic equation nearly satisfied by π.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: K. T. Vahlen, Konstruktionen und Approximationen in systematischer Darstellung, Leipzig 1911 (Internet Archive, konstruktionenun00vahluoft), p. 312: \"Man teile (10 − 1/4) von außen zum Produkte 81/2, der kleinere Abschnitt ist 3,14158 ≈ π\"",
       "redrawn in November 2026; the scan garbles the fractions, read back as 39/4 and 81/2 because they alone give the printed 3.14158 and the coefficients 2, 39, 81 of the equation the scan keeps (2x² + 39x/2 = 81)"
      ],
      "links": [
       {
        "label": "K. T. Vahlen, Konstruktionen und Approximationen (1911)",
        "url": "https://archive.org/details/konstruktionenun00vahluoft"
       }
      ]
     }
    },
    {
     "id": "rtc-over-99.851-lemoine-a",
     "side": "over",
     "marks": "",
     "holder": "Émile Lemoine",
     "method": "Lemoine's √2 + √3, first way",
     "circles": 4,
     "lines": 2,
     "acc": "99.851",
     "precise": "99.851294649965491571107390618366",
     "date": "1895",
     "geogebra": "",
     "file": "GeoGebra Files/Over/RTC-99.851-Lemoine-a",
     "note": "Bioche's value √2 + √3 for the half circumference, drawn in Lemoine's geometrography with 2 lines and 3 circles: the circle about a point B of the circle through the centre gives C and D, sixty degrees either side; the circle about C gives P; PO meets the circle at K; on KD (√2) the circle about D through C carries DC (√3) on to I. KI is the half circumference. Exactly the value of d'Ocagne's construction (rtc-over-99.851), by other steps.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: E. Lemoine, \"Note sur une construction approchée du développement de la circonférence et remarques diverses\", Bulletin de la Société mathématique de France 23 (1895), pp. 242-255 (NUMDAM, BSMF_1895__23__242_0), § I, construction (a), with its geometrographic count: 2 lines, 3 circles, simplicity 14, against 43 for d'Ocagne's",
       "redrawn in November 2026 from the text; the rebuilt KI is √2 + √3 = 3.1462644 radii"
      ],
      "links": [
       {
        "label": "Bulletin de la Société mathématique de France (NUMDAM, BSMF_1895__23__242_0)",
        "url": "https://www.numdam.org/item/BSMF_1895__23__242_0/"
       }
      ]
     },
     "result_scale": 2
    },
    {
     "id": "rtc-over-99.851-lemoine-b",
     "side": "over",
     "marks": "",
     "holder": "Émile Lemoine",
     "method": "Lemoine's √2 + √3, second way",
     "circles": 5,
     "lines": 1,
     "acc": "99.851",
     "precise": "99.851294649965491571107390618366",
     "date": "1895",
     "geogebra": "",
     "file": "GeoGebra Files/Over/RTC-99.851-Lemoine-b",
     "note": "Bioche's value √2 + √3 again, with 1 line and 4 circles: from K, as in the first way, the circle with radius CD (√3) meets the line PO towards O at E, and the circle through D (√2) meets it beyond K at J. EJ is the half circumference.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: E. Lemoine, \"Note sur une construction approchée du développement de la circonférence et remarques diverses\", Bulletin de la Société mathématique de France 23 (1895), pp. 242-255 (NUMDAM, BSMF_1895__23__242_0), § I, construction (b): 1 line, 4 circles, simplicity 14",
       "redrawn in November 2026 from the text; the rebuilt EJ is √2 + √3 = 3.1462644 radii"
      ],
      "links": [
       {
        "label": "Bulletin de la Société mathématique de France (NUMDAM, BSMF_1895__23__242_0)",
        "url": "https://www.numdam.org/item/BSMF_1895__23__242_0/"
       }
      ]
     },
     "result_scale": 2
    },
    {
     "id": "rtc-over-99.904-lemoine",
     "side": "over",
     "marks": "",
     "holder": "Émile Lemoine",
     "method": "Lemoine's quarter: the golden chord",
     "circles": 6,
     "lines": 2,
     "acc": "99.904",
     "precise": "99.904097769121747403630174171380",
     "date": "1895",
     "geogebra": "",
     "file": "GeoGebra Files/Over/RTC-99.904-Lemoine",
     "note": "On the diameter AB, Lemoine divides AB in extreme and mean ratio with the compass (AG = (√5 − 1)/2 · AB), lays AG as a chord AH, and takes BH: √((√5 − 1)/2) of the diameter, nearly a quarter of the circumference. The same value as Crelle's cosine equal to its tangent (rtc-over-99.904), by other steps; Lemoine says he found it long before and that it is perhaps not known.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: E. Lemoine, \"Note sur une construction approchée du développement de la circonférence et remarques diverses\", Bulletin de la Société mathématique de France 23 (1895), pp. 242-255 (NUMDAM, BSMF_1895__23__242_0), § II, with its geometrographic count: 1 line, 5 circles, simplicity 16",
       "redrawn in November 2026 from the text; the rebuilt AG is (√5 − 1)/2 of AB and BH = 0.7861514 of AB, his 0.7861",
       "the same value as the unsigned note of 1846 in Crelle's Journal 32 (rtc-over-99.904), which Lemoine does not mention; the constructions differ"
      ],
      "links": [
       {
        "label": "Bulletin de la Société mathématique de France (NUMDAM, BSMF_1895__23__242_0)",
        "url": "https://www.numdam.org/item/BSMF_1895__23__242_0/"
       }
      ]
     },
     "result_scale": 4
    },
    {
     "id": "rtc-over-99.962",
     "side": "over",
     "marks": "",
     "holder": "G. Peirce",
     "method": "Peirce's curious construction",
     "circles": 3,
     "lines": 4,
     "acc": "99.962",
     "precise": "99.962524072952331442795540172689",
     "date": "1901",
     "geogebra": "",
     "file": "GeoGebra Files/Over/RTC-99.962-Peirce",
     "note": "AC and BD perpendicular diameters; DE = DO on DA; CE meets BD at G and the circle at F; FC + BG = r(4 − 2√2 + 2√3/3 + √6/3) = 3.142777 r, nearly the half circumference.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: G. Peirce, \"A curious approximate construction for π\", Bulletin of the American Mathematical Society (2) 7 (1901), pp. 426-427",
       "as described in the review in the Jahrbuch über die Fortschritte der Mathematik, JFM 32.0504.04 (zbMATH Open)",
       "redrawn in November 2026 from the review; the rebuilt FC + BG is 3.142770 radii; the review prints 3.142777, but its own formula gives 3.1427700"
      ],
      "links": [
       {
        "label": "Jahrbuch über die Fortschritte der Mathematik, JFM 32.0504.04 (zbMATH Open)",
        "url": "https://zbmath.org/?q=an%3A32.0504.04"
       }
      ]
     },
     "result_scale": 2
    },
    {
     "id": "rtc-under-99.993",
     "side": "under",
     "marks": "",
     "holder": "G. Bojko",
     "method": "Bojko's construction",
     "circles": 5,
     "lines": 3,
     "acc": "99.993",
     "precise": "99.993632274177976716212291039908",
     "date": "1909",
     "geogebra": "",
     "file": "GeoGebra Files/Under/RTC-99.993-Bojko",
     "note": "The chord of 150° laid off along a diameter from one end, to L; OM three radii up the perpendicular at the centre; LM = r√(12 + √3 − 2√(2 + √3)) = 3.1414 r, nearly the half circumference.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: G. Bojko, \"Eine neue Näherungskonstruktion für π\", Zeitschrift für Mathematik und Physik 57 (1909), p. 196",
       "as described in the review in the Jahrbuch über die Fortschritte der Mathematik, JFM 40.0560.03 (zbMATH Open)",
       "redrawn in November 2026 from the review; the rebuilt LM is 3.141393 radii, Bojko's 3.1414"
      ],
      "links": [
       {
        "label": "Jahrbuch über die Fortschritte der Mathematik, JFM 40.0560.03 (zbMATH Open)",
        "url": "https://zbmath.org/?q=an%3A40.0560.03"
       }
      ]
     },
     "result_scale": 2
    },
    {
     "id": "rtc-over-99.999",
     "side": "over",
     "marks": "",
     "holder": "Artur Heiseler",
     "method": "Heiseler's difference of two legs",
     "circles": 5,
     "lines": 3,
     "acc": "99.999",
     "precise": "99.999210766708042967127387157496",
     "date": "1931",
     "geogebra": "",
     "file": "GeoGebra Files/Over/RTC-99.999-Heiseler",
     "note": "π ≈ √(4² − (√3/3)²) − √(1² − (√3/3)²) = 3.141617: two right triangles on the same leg r/√3, with hypotenuses 4r and r, and the difference of their other legs.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: A. Heiseler, \"Eine einfache Methode zur approximativen Rektifikation der Kreisperipherie\", Commentationes Physico-Mathematicae, Societas Scientiarum Fennica 5, No. 17 (1931), pp. 1-5",
       "as described in the review in the Jahrbuch über die Fortschritte der Mathematik, JFM 57.0692.02 and Zbl 0003.16605 (zbMATH Open)",
       "redrawn in November 2026 from the review; the reviews give the formula, not the figure; the file draws it in the most direct way: CT = r/√3 on the tangent at C, the circles about T with radii r and 4r meet the diameter at Q and R, and QR is the difference"
      ],
      "links": [
       {
        "label": "Jahrbuch über die Fortschritte der Mathematik, JFM 57.0692.02 (zbMATH Open)",
        "url": "https://zbmath.org/?q=an%3A57.0692.02"
       },
       {
        "label": "Zentralblatt, Zbl 0003.16605 (zbMATH Open)",
        "url": "https://zbmath.org/?q=an%3A0003.16605"
       }
      ]
     },
     "result_scale": 2
    },
    {
     "id": "rtc-over-99.959",
     "side": "over",
     "marks": "",
     "holder": "August Ludwig Busch",
     "method": "Busch's three diameters and a seventh",
     "circles": 11,
     "lines": 4,
     "acc": "99.959",
     "precise": "99.959750056522931802415920165848",
     "date": "1868",
     "geogebra": "",
     "file": "GeoGebra Files/Over/RTC-99.959-Busch",
     "note": "Archimedes' 22/7 drawn as Busch gives it: three diameters laid along a line and a seventh of the diameter added. 3.14287 diameters, too large by 0.00128, as Busch says.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: A. L. Busch, Vorschule der darstellenden Geometrie, edition of 1868 (Internet Archive, vorschule-der-darstellenden-geometrie), Aufgabe 67, first solution (\"Aufl. 1\"); the first edition is of 1846",
       "redrawn in November 2026 from the scanned text; the rebuilt length is 22/7 diameters, Busch's 3.14287"
      ],
      "links": [
       {
        "label": "A. L. Busch, Vorschule der darstellenden Geometrie (1868 edition)",
        "url": "https://archive.org/details/vorschule-der-darstellenden-geometrie"
       }
      ]
     }
    },
    {
     "id": "rtc-under-99.9945",
     "side": "under",
     "marks": "",
     "holder": "Christiaan Huygens",
     "method": "Huygens' six radii and a fifth of the square's side",
     "circles": 9,
     "lines": 6,
     "acc": "99.9945",
     "precise": "99.994547435922731809106253978542",
     "date": "1654",
     "geogebra": "",
     "file": "GeoGebra Files/Under/RTC-99.9945-Busch",
     "note": "Six radii and a fifth of the side of the inscribed square: 3 + √2/10 = 3.14142 diameters. Huygens (1654) gives it as the third solution of his Problem II, short by less than 1/10000 of the diameter for the half circumference; Busch's textbook gives the same construction in 1868. Too small by 0.00017 of the diameter.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: F. Rudio, Archimedes, Huygens, Lambert, Legendre. Vier Abhandlungen über die Kreismessung (Leipzig 1892), the German translation of C. Huygens, De circuli magnitudine inventa (1654) (Internet Archive, archimedeshuygen00rudiuoft), Problem II (§ 11, pp. 105-106), third solution: \"Um daher eine der ganzen Kreisperipherie gleiche Strecke zu erhalten, füge man zu sechs Halbmessern 1/5 jener Seite des eingeschriebenen Quadrates hinzu\"",
       "the value 3 + √2/10 = 3.14142 is given by K. T. Vahlen, Konstruktionen und Approximationen (1911), p. 312, among Huygens' values",
       "also in: A. L. Busch, Vorschule der darstellenden Geometrie, edition of 1868 (Internet Archive, vorschule-der-darstellenden-geometrie), Aufgabe 67, second solution (\"Aufl. 2\"); the first edition is of 1846",
       "redrawn in November 2026 from the scanned text; the rebuilt length is 3.1414214 diameters; the 3.14125 printed in the 1868 edition does not match its own description, which gives 3.14142"
      ],
      "links": [
       {
        "label": "F. Rudio, Archimedes, Huygens, Lambert, Legendre: Vier Abhandlungen über die Kreismessung (1892)",
        "url": "https://archive.org/details/archimedeshuygen00rudiuoft"
       },
       {
        "label": "A. L. Busch, Vorschule der darstellenden Geometrie (1868 edition)",
        "url": "https://archive.org/details/vorschule-der-darstellenden-geometrie"
       },
       {
        "label": "K. T. Vahlen, Konstruktionen und Approximationen (1911)",
        "url": "https://archive.org/details/konstruktionenun00vahluoft"
       }
      ]
     },
     "rediscovered": [
      {
       "name": "August Ludwig Busch",
       "date": "1868",
       "note": "Vorschule der darstellenden Geometrie, Aufgabe 67, second solution, as three diameters and a fifth of the square's side (edition of 1868; first edition 1846); charted under his name until Huygens' text was found"
      }
     ]
    },
    {
     "id": "rtc-under-99.999976",
     "side": "under",
     "marks": "",
     "holder": "K. Hagge",
     "method": "Hagge's rectification by the compass",
     "circles": 10,
     "lines": 1,
     "acc": "99.999976",
     "precise": "99.999976035727103851204681002871",
     "date": "1914",
     "geogebra": "",
     "file": "GeoGebra Files/Under/RTC-99.999976-Hagge",
     "note": "A rectification with the compass alone: equal circles about the centre and a point of the circle, circles with radii DE and 2r, and the middles of two arcs, J and L; JL is the half circumference, 3.1415919 radii. In the file the two arc middles, which Hagge finds with the compass (by Mascheroni's method), are taken where the line DE meets the arcs, since both lie on it.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: K. Hagge, Revista matemática Hispano-Americana 3 (1913-14), p. 284, without proof",
       "explained and compared with Mascheroni by F. Cebrián, \"Über die Methode von Hagge für die Rektifikation des Kreises allein mit dem Zirkel\", Euclides (Madrid) 9 (1949), pp. 223-225, as described in the review in the Zentralblatt, Zbl 0033.39002 (zbMATH Open)",
       "redrawn in November 2026 from the review; the rebuilt JL is 3.1415919 radii"
      ],
      "links": [
       {
        "label": "Zentralblatt, Zbl 0033.39002 (zbMATH Open)",
        "url": "https://zbmath.org/?q=an%3A0033.39002"
       }
      ]
     },
     "result_scale": 2
    },
    {
     "id": "rtc-under-99.984",
     "side": "under",
     "marks": "",
     "holder": "Christiaan Huygens",
     "method": "Huygens' eight sides of the twelve-gon",
     "circles": 7,
     "lines": 2,
     "acc": "99.984",
     "precise": "99.984468643670162097530629233452",
     "date": "1654",
     "geogebra": "",
     "file": "GeoGebra Files/Under/RTC-99.984-Huygens",
     "note": "Eight sides of the inscribed regular twelve-gon less the radius: very nearly half the circumference, too short by less than 1/4000 of the diameter, as Huygens shows. 8·2 sin 15° − 1 = 3.14110 radii.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: F. Rudio, Archimedes, Huygens, Lambert, Legendre. Vier Abhandlungen über die Kreismessung (Leipzig 1892), the German translation of C. Huygens, De circuli magnitudine inventa (1654) (Internet Archive, archimedeshuygen00rudiuoft), Problem II (§ 11, pp. 104-105), first solution",
       "redrawn in November 2026 from the translation; the rebuilt length is 3.1411047 radii, half the circumference being 3.1415927"
      ],
      "links": [
       {
        "label": "F. Rudio, Archimedes, Huygens, Lambert, Legendre: Vier Abhandlungen über die Kreismessung (1892)",
        "url": "https://archive.org/details/archimedeshuygen00rudiuoft"
       }
      ]
     },
     "result_scale": 2
    },
    {
     "id": "rtc-over-99.975",
     "side": "over",
     "marks": "",
     "holder": "Christiaan Huygens",
     "method": "Huygens' quadrant from the twelve-gon",
     "circles": 4,
     "lines": 4,
     "acc": "99.975",
     "precise": "99.975920590659667948662886975188",
     "date": "1654",
     "geogebra": "",
     "file": "GeoGebra Files/Over/RTC-99.975-Huygens",
     "note": "D halves one semicircle over the diameter, E and F divide the other into three; DE and DF cut the diameter at G and H. DG + GH is a little more than the quadrant, by less than 1/5000 of the diameter: DG is two sides of the inscribed twelve-gon and GH a side of the circumscribed one.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: F. Rudio, Archimedes, Huygens, Lambert, Legendre. Vier Abhandlungen über die Kreismessung (Leipzig 1892), the German translation of C. Huygens, De circuli magnitudine inventa (1654) (Internet Archive, archimedeshuygen00rudiuoft), Problem II (§ 11, pp. 104-105), second solution",
       "redrawn in November 2026 from the translation; the rebuilt DG + GH is 1.5717 radii, against the quadrant 1.5708"
      ],
      "links": [
       {
        "label": "F. Rudio, Archimedes, Huygens, Lambert, Legendre: Vier Abhandlungen über die Kreismessung (1892)",
        "url": "https://archive.org/details/archimedeshuygen00rudiuoft"
       }
      ]
     },
     "result_scale": 4
    },
    {
     "id": "rtc-over-99.998-viete",
     "side": "over",
     "marks": "",
     "holder": "François Viète",
     "method": "Viète's quadrant",
     "circles": 4,
     "lines": 7,
     "acc": "99.998",
     "precise": "99.998467881887055614596084601667",
     "date": "1593",
     "geogebra": "",
     "file": "GeoGebra Files/Over/RTC-99.998-Viete",
     "note": "The radius halved at F; BF meets the circle at G, and the foot H of the perpendicular from G gives AH = 3/5 of the radius. BZ = BF − FA, the side of the decagon, is laid from E along EA, to I, cutting the radius in extreme and mean ratio. As AI is to AE, so AH to AK: AK = (3/5)φ² radii, nearly the quadrant. The same number as Kunze's triangle, π ≈ 1.2φ², 258 years earlier.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: F. Viète, Variorum de rebus mathematicis responsorum liber VIII (Tours 1593), chapter XV, in Francisci Vietae Opera mathematica, ed. F. van Schooten (Leiden 1646), pp. 392-393 (Internet Archive, bub_gb_25iHrtJpy9oC), Proposition III, with its figure",
       "also given by J. E. Montucla, Histoire des recherches sur la quadrature du cercle (new edition, Paris 1831), p. 76, note (Internet Archive, histoiredesreche00montuoft)",
       "redrawn in November 2026 from the page image of the 1646 edition; the rebuilt AK is 1.5708204 radii, against the quadrant 1.5707963"
      ],
      "links": [
       {
        "label": "Francisci Vietae Opera mathematica, ed. F. van Schooten (Leiden 1646)",
        "url": "https://archive.org/details/bub_gb_25iHrtJpy9oC"
       },
       {
        "label": "J. E. Montucla, Histoire des recherches sur la quadrature du cercle (1831 edition)",
        "url": "https://archive.org/details/histoiredesreche00montuoft"
       }
      ]
     },
     "result_scale": 4
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
      ],
      "links": [
       {
        "label": "E. W. Hobson, Squaring the Circle: A History of the Problem (1913)",
        "url": "https://archive.org/details/squaringcirclehi00hobsuoft"
       },
       {
        "label": "R. C. Yates, The Trisection Problem (1942; NCTM reprint 1971)",
        "url": "https://archive.org/details/ERIC_ED058058"
       }
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
      ],
      "links": [
       {
        "label": "K. T. Vahlen, Konstruktionen und Approximationen (1911)",
        "url": "https://archive.org/details/konstruktionenun00vahluoft"
       }
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
    },
    {
     "id": "ar-over-99.832",
     "side": "over",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Lambert's rectification, a quarter versine, on the arc halved once",
     "circles": 4,
     "lines": 4,
     "acc": "99.832",
     "precise": "99.832007744310389221700592257082",
     "date": "07-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Arc Rectification Over/AR-99.832-Claude",
     "note": "Lambert's rectification, a quarter versine (ar-over-99.831) worked on the arc halved once and the length multiplied back by 2: 99.832% from 30° to 150°, at its weakest at 150°, where the file is drawn. Halved once more it would be micro scale; this is the deepest that stays at macro scale. Credit for the method is Lambert (with a quarter of the versine)'s. Found by Claude (Anthropic), an AI, as a variant.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), testing the historical methods on the angle halved again and again, as a variant of Lambert's rectification, a quarter versine (ar-over-99.831)"
      ]
     }
    },
    {
     "id": "ar-under-99.704",
     "side": "under",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Lambert's rectification, on the arc halved once",
     "circles": 9,
     "lines": 6,
     "acc": "99.704",
     "precise": "99.704852329096862320666372863498",
     "date": "07-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Arc Rectification Under/AR-99.704-Claude",
     "note": "Lambert's rectification (ar-under-99.029) worked on the arc halved once and the length multiplied back by 2: 99.704% from 30° to 150°, at its weakest at 150°, where the file is drawn. Halved once more it would be micro scale; this is the deepest that stays at macro scale. Credit for the method is Lambert's. Found by Claude (Anthropic), an AI, as a variant.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), testing the historical methods on the angle halved again and again, as a variant of Lambert's rectification (ar-under-99.029)"
      ]
     }
    },
    {
     "id": "ar-under-99.999",
     "side": "under",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "holder_kind": "ai",
     "method": "Cusa's rectification, on the arc halved five times",
     "circles": 7,
     "lines": 7,
     "acc": "99.99997",
     "precise": "99.999975091467696212367969507633",
     "date": "07-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Arc Rectification Under/AR-99.999-Claude",
     "note": "Cusa's rectification (ar-under-95.492) worked on the arc halved five times and the length multiplied back by 32: 99.999% from 30° to 150°, at its weakest at 150°, where the file is drawn. Its steps stay at macro scale through all five halvings (the smallest is 6.25% of the radius); a sixth would not. Credit for the method is Nicholas of Cusa and Snellius's. Found by Claude (Anthropic), an AI, as a variant. Shown to more places from November 2026 (it was 99.999%), so the chart reads in order beside Rankine's halved first rectification (99.99993%): its precise value is 99.99997509%.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), testing the historical methods on the angle halved again and again, as a variant of Cusa's rectification (ar-under-95.492)"
      ]
     }
    },
    {
     "id": "ar-over-99.097",
     "side": "over",
     "marks": "",
     "holder": "Fontana",
     "method": "Fontana's rectification",
     "circles": 1,
     "lines": 8,
     "acc": "99.097",
     "precise": "99.097904189838359778036458433897",
     "date": "1784",
     "geogebra": "",
     "file": "GeoGebra Files/Arc Rectification Over/AR-99.097-Fontana",
     "note": "Draw the chord BA; bisect the angle between it and the tangent at B again and again, raising a perpendicular each time; the last meets the tangent at Z, and BZ is nearly the arc: Euler's product sin x / x = cos(x/2) cos(x/4) cos(x/8) ... Drawn with three bisections (C, D, E), as in Beutel's figure; at 150°, its weakest angle from 30° to 150°.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "first given by Fontana in 1784, according to E. Beutel, Die Quadratur des Kreises, Leipzig 1913 (Internet Archive, diequadraturdes01beutgoog), pp. 56-58, fig. 12 (\"zuerst von Fontana 1784 angegeben ..., jedoch bis in die neueste Zeit in nur wenig verschiedenen Formen wiederholt aufgefunden\")",
       "redrawn in November 2026 from Beutel's description, with the three bisections his figure shows"
      ],
      "links": [
       {
        "label": "E. Beutel, Die Quadratur des Kreises (1913)",
        "url": "https://archive.org/details/diequadraturdes01beutgoog"
       }
      ]
     }
    },
    {
     "id": "ar-under-95.243",
     "side": "under",
     "marks": "",
     "holder": "W. J. Macquorn Rankine",
     "method": "Rankine's first rectification",
     "circles": 2,
     "lines": 1,
     "acc": "95.243",
     "precise": "95.243357050517822955557596074333",
     "date": "1867",
     "geogebra": "",
     "file": "GeoGebra Files/Arc Rectification Under/AR-95.243-Rankine",
     "note": "The chord AB extended beyond B by half of itself, to C; the arc about C through A meets the tangent at B in D; BD is nearly the arc, short by θ⁵/1080 of the radius. A general method, at its weakest from 30° to 150° at 150°, where the file is drawn (99.41% at 90°).",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: W. J. M. Rankine, Philosophical Magazine, 4th series, vol. 34 (1867), pp. 284-286 and 381-382; also in his \"Machinery and Millwork\" (1869), pp. 28-29, construction I",
       "as given, with its error series, in F. J. van den Berg, \"Over de benaderde rectificatie van een cirkelboog\", Nieuw Archief voor Wiskunde IV (1878), pp. 200-204 (Internet Archive, nieuwarchiefvoo00amstgoog), and in L. Cremona, Elemente des graphischen Calculs (German by M. Curtze, 1875), p. 101",
       "redrawn in November 2026; the scan garbles the fraction of the chord, which is the half that gives van den Berg's error θ⁵/1080"
      ],
      "links": [
       {
        "label": "Nieuw Archief voor Wiskunde IV (1878)",
        "url": "https://archive.org/details/nieuwarchiefvoo00amstgoog"
       }
      ]
     }
    },
    {
     "id": "ar-over-98.685",
     "side": "over",
     "marks": "",
     "holder": "W. J. Macquorn Rankine",
     "method": "Rankine's second rectification",
     "circles": 1,
     "lines": 3,
     "acc": "98.685",
     "precise": "98.685638416550806522083823795251",
     "date": "1867",
     "geogebra": "",
     "file": "GeoGebra Files/Arc Rectification Over/AR-98.685-Rankine",
     "note": "A quarter of the arc, by two bisections, to E; the radius OE meets the tangent at B in C; BC + CA is nearly the arc, long by θ⁵/4320. A general method, at its weakest from 30° to 150° at 150°, where the file is drawn (99.85% at 90°).",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: W. J. M. Rankine, Philosophical Magazine, 4th series, vol. 34 (1867), pp. 284-286 and 381-382; also in his \"Machinery and Millwork\" (1869), pp. 28-29, construction II",
       "as given, with its error series (correcting Rankine's last term), in F. J. van den Berg, \"Over de benaderde rectificatie van een cirkelboog\", Nieuw Archief voor Wiskunde IV (1878), pp. 200-204 (Internet Archive, nieuwarchiefvoo00amstgoog)",
       "redrawn in November 2026"
      ],
      "links": [
       {
        "label": "Nieuw Archief voor Wiskunde IV (1878)",
        "url": "https://archive.org/details/nieuwarchiefvoo00amstgoog"
       }
      ]
     },
     "result_path": [
      "B",
      "C_2",
      "A"
     ]
    },
    {
     "id": "ar-over-99.899",
     "side": "over",
     "marks": "",
     "holder": "W. J. Macquorn Rankine",
     "method": "Rankine's two rectifications combined",
     "circles": 9,
     "lines": 6,
     "acc": "99.899",
     "precise": "99.899839323137080626555539821335",
     "date": "1867",
     "geogebra": "",
     "file": "GeoGebra Files/Arc Rectification Over/AR-99.899-Rankine",
     "note": "Four fifths of the second and one fifth of the first, which cancels their θ⁵ errors and leaves θ⁷/870912: both laid on the tangent from B, and the point a fifth of the way from the second to the first. 99.90% at 150°, its weakest from 30° to 150°.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "the combination as given with Rankine's two constructions in F. J. van den Berg, \"Over de benaderde rectificatie van een cirkelboog\", Nieuw Archief voor Wiskunde IV (1878), pp. 200-204 (Internet Archive, nieuwarchiefvoo00amstgoog) (\"door 4/5 de van de tweede op te tellen bij 1/5 de van de eerste, eene meer benaderde waarde\"), from Cremona-Curtze (1875) and Rankine (1867)",
       "redrawn in November 2026; the laying of both lengths on the tangent and the fifth are the archive's"
      ],
      "links": [
       {
        "label": "Nieuw Archief voor Wiskunde IV (1878)",
        "url": "https://archive.org/details/nieuwarchiefvoo00amstgoog"
       }
      ]
     }
    },
    {
     "id": "ar-under-99.99993",
     "side": "under",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "method": "Rankine's first rectification, on the arc halved four times",
     "circles": 7,
     "lines": 6,
     "acc": "99.99993",
     "precise": "99.999933594932761848121953201198",
     "date": "07-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Arc Rectification Under/AR-99.99993-Claude",
     "note": "Rankine's first rectification (ar-under-95.243) worked on the arc halved four times and the length multiplied back by 16: 99.99993% from 30° to 150°, at its weakest at 150°, where the file is drawn. Halved once more it would be micro scale. Credit for the method is Rankine's. Found by Claude (Anthropic), an AI, as a variant.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), testing the historical methods on the arc halved again and again, as a variant of Rankine's first rectification (ar-under-95.243)"
      ]
     },
     "holder_kind": "ai"
    },
    {
     "id": "ar-over-99.999",
     "side": "over",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "method": "Rankine's second rectification, on the arc halved four times",
     "circles": 6,
     "lines": 7,
     "acc": "99.999",
     "precise": "99.999983396512446742465957327970",
     "date": "07-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Arc Rectification Over/AR-99.999-Claude",
     "note": "Rankine's second rectification (ar-over-98.685) worked on the arc halved four times and the length multiplied back by 16: 99.99998% from 30° to 150°, at its weakest at 150°, where the file is drawn. Halved once more it would be micro scale. Credit for the method is Rankine's. Found by Claude (Anthropic), an AI, as a variant.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), testing the historical methods on the arc halved again and again, as a variant of Rankine's second rectification (ar-over-98.685)"
      ]
     },
     "holder_kind": "ai"
    },
    {
     "id": "ar-over-99.9999",
     "side": "over",
     "marks": "",
     "holder": "Claude (Anthropic)",
     "method": "Rankine's two rectifications combined, on the arc halved four times",
     "circles": 13,
     "lines": 11,
     "acc": "99.9999",
     "precise": "99.999999998223405024348375222136",
     "date": "07-11-2026",
     "geogebra": "",
     "file": "GeoGebra Files/Arc Rectification Over/AR-99.9999-Claude",
     "note": "Rankine's combination of his two rectifications (ar-over-99.899) worked on the arc halved four times and the length multiplied back by 16: 99.9999999982% from 30° to 150°, at its weakest at 150°, where the file is drawn, with every step at macro scale. Credit for the method is Rankine's. Found by Claude (Anthropic), an AI, as a variant.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "session",
      "evidence": [
       "found by Claude in the maintainer's own sessions with the archive (November 2026), testing the historical methods on the arc halved again and again, as a variant of Rankine's combined rectification (ar-over-99.899)"
      ]
     },
     "holder_kind": "ai"
    },
    {
     "id": "ar-over-99.592",
     "side": "over",
     "marks": "",
     "holder": "Maurice d'Ocagne",
     "method": "d'Ocagne's two-thirds chord",
     "circles": 3,
     "lines": 4,
     "acc": "99.592",
     "precise": "99.592753722848533646649098273646",
     "date": "1907",
     "geogebra": "",
     "file": "GeoGebra Files/Arc Rectification Over/AR-99.592-dOcagne",
     "note": "Divide the chord AB from A in the ratio 2 : 1 and draw the radius through the point; the chord from A to its end is nearly two thirds of the arc AB. Here laid off one and a half times. Charted at 90°, its weakest up to 90°.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: M. d'Ocagne, \"Sur la rectification approchée des arcs de cercle\", Nouvelles Annales de Mathématiques (4) 7 (1907), pp. 1-6",
       "as described in the review in the Jahrbuch über die Fortschritte der Mathematik, JFM 38.0535.03 (zbMATH Open)",
       "redrawn in November 2026 from the review; the rebuilt error stays under 0.001 of the radius up to 70°, as the review states"
      ],
      "links": [
       {
        "label": "Jahrbuch über die Fortschritte der Mathematik, JFM 38.0535.03 (zbMATH Open)",
        "url": "https://zbmath.org/?q=an%3A38.0535.03"
       }
      ]
     }
    },
    {
     "id": "ar-over-99.592-burmester",
     "side": "over",
     "marks": "",
     "holder": "Ludwig Burmester",
     "method": "Burmester's chord",
     "circles": 2,
     "lines": 1,
     "acc": "99.592",
     "precise": "99.592753722848533646649098273646",
     "date": "1919",
     "geogebra": "",
     "file": "GeoGebra Files/Arc Rectification Over/AR-99.592-Burmester",
     "note": "The arc as completed to the semicircle asb about m; the circle about the middle of bm through a meets the line from that middle through s at a point whose chord from a is the arc. Charted at 90°. It gives exactly d'Ocagne's length of 1907 (ar-over-99.592) at every angle, by other steps.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: L. Burmester, \"Angenäherte Geradstreckung der Kreisbögen\", Sitzungsberichte der Bayerischen Akademie der Wissenschaften, München 1919, pp. 431-437",
       "as described in the review in the Jahrbuch über die Fortschritte der Mathematik, JFM 47.0547.04 (zbMATH Open)",
       "redrawn in November 2026 from the review; with its own steps it gives exactly the length of d'Ocagne's two-thirds chord (1907) for every arc"
      ],
      "links": [
       {
        "label": "Jahrbuch über die Fortschritte der Mathematik, JFM 47.0547.04 (zbMATH Open)",
        "url": "https://zbmath.org/?q=an%3A47.0547.04"
       }
      ]
     }
    },
    {
     "id": "ar-under-99.986",
     "side": "under",
     "marks": "",
     "holder": "Fr. Strempel",
     "method": "Strempel's first rectification",
     "circles": 3,
     "lines": 4,
     "acc": "99.986",
     "precise": "99.986543313648394920762252347666",
     "date": "1903",
     "geogebra": "",
     "file": "GeoGebra Files/Arc Rectification Under/AR-99.986-Strempel",
     "note": "AM to the middle of the arc meets the perpendicular to the chord at B in C; the circle about A through C meets AB produced at K; BL = 3/2 BC beyond C; LK meets AC at N, and AN is the arc: under 7 millionths of the radius up to 45°. Charted at 90°, its weakest up to 90°.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: Fr. Strempel, \"Neue, sehr genaue und einfache Methoden der Rektifikation sowie der Teilung von Kreisbogen\", Programm des Gymnasiums und Realgymnasiums Rostock (Nr. 748), 1903, 23 pp.",
       "as described in the review in the Jahrbuch über die Fortschritte der Mathematik, JFM 34.0553.05 (zbMATH Open)",
       "redrawn in November 2026 from the review; the rebuilt error at 45° is 6.5 millionths of the radius, under the 7 the review gives"
      ],
      "links": [
       {
        "label": "Jahrbuch über die Fortschritte der Mathematik, JFM 34.0553.05 (zbMATH Open)",
        "url": "https://zbmath.org/?q=an%3A34.0553.05"
       }
      ]
     }
    },
    {
     "id": "ar-under-99.922",
     "side": "under",
     "marks": "µ",
     "holder": "Christiaan Huygens",
     "method": "Huygens' rectification",
     "circles": 7,
     "lines": 4,
     "acc": "99.922",
     "precise": "99.922170582020817042221417181743",
     "date": "1654",
     "geogebra": "",
     "file": "GeoGebra Files/Arc Rectification Under/AR-99.922-Huygens",
     "note": "The arc halved; to two chords of the half arc add a third of their excess over the chord of the whole: (8 sin(θ/4) − 2 sin(θ/2))/3 radii. Always a little short; at the quadrant by less than 1/1200, as Huygens shows. Given for arcs up to the quadrant; charted at 90°, its weakest there.",
     "verified": [],
     "disputes": [],
     "origin": {
      "kind": "historical",
      "evidence": [
       "published: F. Rudio, Archimedes, Huygens, Lambert, Legendre. Vier Abhandlungen über die Kreismessung (Leipzig 1892), the German translation of C. Huygens, De circuli magnitudine inventa (1654) (Internet Archive, archimedeshuygen00rudiuoft), Problem III (§ 12, pp. 106-107)",
       "redrawn in November 2026 from the translation; at 90° the rebuilt length is 1.5695738 radii against the arc 1.5707963"
      ],
      "links": [
       {
        "label": "F. Rudio, Archimedes, Huygens, Lambert, Legendre: Vier Abhandlungen über die Kreismessung (1892)",
        "url": "https://archive.org/details/archimedeshuygen00rudiuoft"
       }
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
   "about": "The arc read off the tangent through a point on the diameter beyond the circle: Cusa and Snellius put it a radius beyond the far end; Lambert moves it in by a fifth of the versine (Newton's formula); the variant search found a quarter better still. Worked on the arc halved again and again, Cusa's simple point does best of all: halved five times, 99.99997% from 30° to 150°."
  },
  {
   "name": "Snellius' trisection point",
   "problem": "taa",
   "by": "Nicholas of Cusa, Willebrord Snellius, K. T. Vahlen",
   "about": "Cusa's rectification turned into a trisection: a third of the tangent length, read back through the same point. Cusa and Snellius put the point a radius beyond the far end of the diameter; Vahlen moves it in by 2/9 of the versine, towards the exact point 2 cos(x/3); the variant search found a quarter better still. Worked on half the angle and then doubled, the same constructions hold from 30° to 150°. Halved four times, Cusa's own point holds 99.9996%."
  },
  {
   "name": "Dürer's trisection",
   "problem": "taa",
   "by": "Albrecht Dürer",
   "about": "Dürer's averaging of the three chords (1525): a third of the chord, a perpendicular to the arc, carried back down, and a third of the gap. Worked from one side on half the angle and doubled, it holds 99.995% from 30° to 150°."
  },
  {
   "name": "Monti's trisection",
   "problem": "taa",
   "by": "P. Monti",
   "about": "Monti's construction (1895), with Schiaparelli's proof: good to 180° as it stands, and 99.990% from 30° to 150° on the angle halved three times."
  },
  {
   "name": "Rankine's rectifications",
   "problem": "ar",
   "by": "W. J. Macquorn Rankine",
   "about": "Rankine's two constructions for the length of any arc (1867), with errors θ⁵/1080 short and θ⁵/4320 long, and their combination, four fifths and one fifth, which leaves only θ⁷/870912. On the arc halved four times the combination holds 99.9999999982% from 30° to 150°."
  },
  {
   "name": "Cominotto's trisection",
   "problem": "taa",
   "by": "E. Cominotto",
   "about": "Cominotto's construction (1895), through a circle on three points: good to 180° as it stands (43' out at 180°, 25' at 150°), and 99.950% from 30° to 150° on the angle halved twice."
  }
 ],
 "wanted": [
  {
   "problem": "rtc",
   "who": "August Ludwig Busch",
   "year": "1846",
   "value": "π ≈ (3/5)(3 + √5): the right triangle with legs 3/5 and 6/5 of the diameter, exactly Kunze's triangle (rtc-over-99.998)",
   "source": "Busch, Vorschule der darstellenden Geometrie, Aufgabe 67, third solution: in the edition of 1868 (Internet Archive) it is Kunze's construction step for step; the Jahrbuch (JFM 38.0535.01) dates it to the first edition, 1846. Kunze's is charted from the second edition of his Lehrbuch der Planimetrie (1851). Which came first depends on the dates of the first editions of both books, which are not online; if Busch's is earlier, the credit moves to him and Kunze is listed as having also found it."
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
   "C. G. Specht",
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
   "K. T. Vahlen",
   "Karl Theodor Vahlen"
  ],
  "P. Monti": [
   "Pompeo Monti",
   "P. Monti"
  ],
  "Nicholas of Cusa": [
   "Nicholas of Cusa",
   "Nikolaus von Kues"
  ],
  "G. J. Vargiù": [
   "Giuseppe Vargiù",
   "G. J. Vargiù"
  ],
  "Fontana": [
   "Fontana",
   "Gregorio Fontana"
  ],
  "Hung Viet Chu": [
   "Hung Viet Chu",
   "H. V. Chu"
  ],
  "Pioche": [
   "Pioche"
  ],
  "A. H. Anglin": [
   "A. H. Anglin"
  ],
  "A. Pleskot": [
   "A. Pleskot",
   "Antonín Pleskot"
  ],
  "W. J. Macquorn Rankine": [
   "W. J. Macquorn Rankine",
   "William John Macquorn Rankine"
  ],
  "Gaetano Boccali": [
   "G. Boccali",
   "Gaetano Boccali"
  ],
  "E. Cominotto": [
   "E. Cominotto"
  ],
  "Michael Stifel": [
   "Michael Stifel"
  ],
  "A. L. Crelle": [
   "August Leopold Crelle",
   "A. L. Crelle"
  ],
  "Christiaan Huygens": [
   "C. Huygens",
   "Christiaan Huygens"
  ],
  "Émile Lemoine": [
   "Émile Lemoine",
   "E. Lemoine"
  ],
  "Kopf / Perron": [
   "Kopf",
   "O. Perron",
   "Oskar Perron"
  ],
  "Baudhayana": [
   "Baudhayana",
   "Baudhāyana"
  ],
  "Ernst Lakenmacher": [
   "E. Lakenmacher",
   "Ernst Lakenmacher"
  ],
  "Gaetano Baratto": [
   "Gaetano Baratto"
  ],
  "A. Stoyanoff": [
   "A. Stoyanoff"
  ],
  "Ludwig Burmester": [
   "L. Burmester",
   "Ludwig Burmester"
  ],
  "Fr. Strempel": [
   "Fr. Strempel"
  ],
  "G. Peirce": [
   "G. Peirce"
  ],
  "G. Bojko": [
   "G. Bojko"
  ],
  "Artur Heiseler": [
   "A. Heiseler",
   "Artur Heiseler"
  ],
  "Emil Lampe": [
   "E. Lampe",
   "Emil Lampe"
  ],
  "A. A. Dmitrovskij": [
   "A. A. Dmitrovskij"
  ],
  "Eugen Kopf": [
   "Eugen Kopf",
   "E. Kopf",
   "Kopf"
  ],
  "M. Blasendorff": [
   "M. Blasendorff"
  ],
  "H. Schoeler": [
   "H. Schoeler"
  ],
  "August Ludwig Busch": [
   "A. Busch",
   "A. L. Busch",
   "August Ludwig Busch"
  ],
  "C. H. Kummell": [
   "C. H. Kummell",
   "Charles H. Kummell"
  ],
  "J. G. van der Corput and H. Mooij": [
   "H. Mooij",
   "J. G. van der Corput",
   "Johannes van der Corput"
  ],
  "D. Visser": [
   "D. Visser"
  ],
  "Sauerbeck": [
   "Sauerbeck"
  ],
  "Eduard Gregori": [
   "Eduard Gregori"
  ],
  "Edoardo Storchi": [
   "E. Storchi",
   "Edoardo Storchi"
  ],
  "K. Hagge": [
   "K. Hagge"
  ],
  "François Viète": [
   "F. Viète",
   "Franciscus Vieta",
   "François Viète"
  ]
 }
};
