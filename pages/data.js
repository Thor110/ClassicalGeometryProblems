// The approximation charts, as data for the website.
// Taken from the five Approximations/*/..-ApproximationChart.ods files (ranking, key marks,
// circles, lines, accuracy and GeoGebra link), with the precise readout and date from each
// construction's .md notes where they give one. When a chart changes, change it here too.
//
// Each entry:  [side, rank, marks, holder, circles, lines, accuracy, geogebra id, file, extra]
//   side      'over' (oversized) or 'under' (undersized)
//   marks     key marks from the chart: ~ contested, @ too simple, µ micro scale edits
//   accuracy  the chart's figure (truncated, never rounded)
//   file      path of the .ggb/.md pair without extension, or '' when there is none yet
//   extra     optional {method, date, precise, note}

const REPO = 'https://github.com/Thor110/ClassicalGeometryProblems';

const PROBLEMS = [
  {
    id: 'stc', n: 1, name: 'Squaring The Circle', short: 'STC',
    folder: 'Approximations/01 Squaring The Circle',
    chart: 'STC-ApproximationChart',
    task: 'Construct a square with the same area as any given circle.',
    target: 'A square of side √π · r (area πr²).',
    why: 'Needs a length of √π. Lindemann proved in 1882 that π is transcendental, so no finite chain of circles and lines reaches it.',
    entries: [
      ['over', 8, '', 'Edward James Gordon', 1, 20, '99.117', 'n2gbkesm', 'GeoGebra Files/Squared Circle Over/99.117', {date: '04-11-2025'}],
      ['over', 7, '', 'Edward James Gordon', 21, 7, '99.139', 'gqncwvc3', 'GeoGebra Files/Squared Circle Over/99.139', {date: '28-12-2024'}],
      ['over', 6, '', 'Edward James Gordon', 13, 13, '99.253', 'dvnhfe3u', 'GeoGebra Files/Squared Circle Over/99.253', {date: '14-12-2024'}],
      ['over', 5, '', 'Edward James Gordon', 13, 17, '99.356', 'mgpgm6gk', 'GeoGebra Files/Squared Circle Over/99.356', {date: '14-12-2024'}],
      ['over', 4, '', 'Edward James Gordon', 13, 25, '99.563', 'pfzqcwgu', 'GeoGebra Files/Squared Circle Over/99.563', {date: '14-12-2024'}],
      ['over', 3, '', 'Edward James Gordon', 25, 8, '99.703', 'dxrt3svk', 'GeoGebra Files/Squared Circle Over/99.703', {date: '14-12-2024'}],
      ['over', 2, '', 'Edward James Gordon', 13, 37, '99.816', 'jb6rgjfa', 'GeoGebra Files/Squared Circle Over/99.816', {date: '08-12-2024'}],
      ['over', 1, '', 'Srinivasa Ramanujan', 9, 13, '99.999', 'f9sfp9mg', 'GeoGebra Files/Squared Circle Over/99.999-Ramanujan', {method: "Ramanujan's Method", date: '1913', precise: '99.99999150859094'}],
      ['under', 1, '', 'Edward James Gordon', 13, 29, '99.929', 'aw4nggwg', 'GeoGebra Files/Squared Circle Under/99.929', {date: '14-12-2024'}],
      ['under', 2, '', 'Edward James Gordon', 21, 11, '99.644', 'p2ast9yw', 'GeoGebra Files/Squared Circle Under/99.644', {date: '28-12-2024'}],
      ['under', 3, '', 'Edward James Gordon', 13, 17, '99.253', 'anbgnhsq', 'GeoGebra Files/Squared Circle Under/99.253', {date: '14-12-2024'}],
      ['under', 4, '', 'Edward James Gordon', 13, 20, '99.164', 'ajpnpmwa', 'GeoGebra Files/Squared Circle Under/99.164', {date: '14-12-2024'}],
      ['under', 5, '', 'Edward James Gordon', 13, 11, '99.009', 'sjdede5r', 'GeoGebra Files/Squared Circle Under/99.009', {date: '14-12-2024'}],
      ['under', 15, '@~', 'Edward James Gordon', 7, 6, '95.492', 'jyyqe7rj', 'GeoGebra Files/Squared Circle Under/95.492', {method: 'Circling the Square v1', date: '2020'}],
    ],
  },
  {
    id: 'taa', n: 2, name: 'Trisecting An Angle', short: 'TAA',
    folder: 'Approximations/02 Trisecting An Angle',
    chart: 'TAA-ApproximationChart',
    task: 'Divide any given angle into three equal angles.',
    target: 'An angle of exactly θ ÷ 3, for every θ.',
    why: 'For 60°, the third (20°) needs cos 20°, a root of 8x³ − 6x − 1 = 0, a cubic that does not factor. Circles and lines only reach square roots, so Wantzel proved it impossible in general in 1837.',
    entries: [
      ['under', 1, '', 'Edward James Gordon', '~6-12+/-', '~2-3+/-', '~99.658', 'ydfkxavz', 'GeoGebra Files/Under/TAA-~99.658', {method: 'Array Casting v2.0', date: '01-12-2024'}],
      ['under', 15, '', 'Edward James Gordon', '~4-8+/-', '~3-6+/-', '~95.538', 'yj7tctaw', 'GeoGebra Files/Under/TAA-~95.538', {method: 'Array Casting v1.0', date: '01-12-2024'}],
    ],
  },
  {
    id: 'dtc', n: 3, name: 'Doubling The Cube', short: 'DTC',
    folder: 'Approximations/03 Doubling The Cube',
    chart: 'DTC-ApproximationChart',
    task: 'Construct a cube with twice the volume of any given cube.',
    target: 'An edge of ∛2 · a.',
    why: '∛2 is a root of x³ − 2 = 0, a cubic that does not factor, so it cannot be built from square roots. Wantzel, 1837.',
    entries: [
      ['over', 2, '', 'Edward James Gordon', 13, 30, '99.227', 'bmzy5bgb', 'GeoGebra Files/Over/DTC-99.227', {method: 'Cube 2 Tesseract v1.0', date: '06-06-2024', precise: '99.22729260825194'}],
      ['over', 1, '', 'Edward James Gordon', 13, 42, '99.487', 'yx5e8wnu', 'GeoGebra Files/Over/DTC-99.487', {method: 'Cube 2 Tesseract v2.0', date: '07-12-2024', precise: '99.48714854233151'}],
    ],
  },
  {
    id: 'rtc', n: 4, name: 'Rectifying The Circle', short: 'RTC',
    folder: 'Approximations/04 Rectifying The Circle',
    chart: 'RTC-ApproximationChart',
    task: 'Construct a straight line as long as the circumference of any given circle.',
    target: 'A segment of length 2πr. Halve it and you have π.',
    why: 'The same wall as squaring the circle: π is transcendental (Lindemann, 1882).',
    entries: [
      ['over', 15, '', 'Edward James Gordon', 6, 7, '98.538', 'gmypmfqa', 'GeoGebra Files/Over/RTC-98.538', {}],
      ['over', 14, '', 'Edward James Gordon', 13, 9, '99.596', 's5d6kgfs', 'GeoGebra Files/Over/RTC-99.596', {precise: '99.59619104296647'}],
      ['over', 13, 'µ', 'Edward James Gordon', 9, 4, '99.607', 'ryhqksry', 'GeoGebra Files/Over/RTC-99.607', {precise: '99.6074651519426'}],
      ['over', 12, '', 'Edward James Gordon', 7, 3, '99.65', 't5bqfckt', 'GeoGebra Files/Over/RTC-99.650', {precise: '99.65016198300786'}],
      ['over', 11, '', 'Edward James Gordon', 8, 5, '99.786', 'ju6jb78y', 'GeoGebra Files/Over/RTC-99.786', {precise: '99.78667113012519'}],
      ['over', 10, '', 'Edward James Gordon', 11, 4, '99.802', 'hsybvnu5', 'GeoGebra Files/Over/RTC-99.802', {precise: '99.80200241997315'}],
      ['over', 9, '', 'Edward James Gordon', 1, 10, '99.806', 'rhqcddpf', 'GeoGebra Files/Over/RTC-99.806', {method: 'Euclidean Circumference Approximation', precise: '99.806647622550144', note: 'Walked through step by step on the Constructions page.'}],
      ['over', 8, 'µ', 'Edward James Gordon', 16, 7, '99.873', 'rcjzsffq', 'GeoGebra Files/Over/RTC-99.873', {precise: '99.87336639674726'}],
      ['over', 7, '', 'Edward James Gordon', 15, 8, '99.9343', 'kycjvbnh', 'GeoGebra Files/Over/RTC-99.9343', {precise: '99.93438016929967'}],
      ['over', 6, '', 'Edward James Gordon', 10, 4, '99.9347', 'g7rntemb', 'GeoGebra Files/Over/RTC-99.9347', {precise: '99.93478707720942'}],
      ['over', 5, 'µ', 'Edward James Gordon', 4, 14, '99.971', 'nk5h7gqf', 'GeoGebra Files/Over/RTC-99.971', {precise: '99.97121438042902'}],
      ['over', 4, '', 'Edward James Gordon', 7, 5, '99.997', 'px4rbkpy', 'GeoGebra Files/Over/RTC-99.997', {precise: '99.99747444972773'}],
      ['over', 3, 'µ', 'Edward James Gordon', 10, 7, '99.9986', 'yrtbagqh', 'GeoGebra Files/Over/RTC-99.9986', {precise: '99.99865760269533'}],
      ['over', 2, 'µ', 'Edward James Gordon', 7, 16, '99.9987', 'nygms4nr', 'GeoGebra Files/Over/RTC-99.9987', {precise: '99.99870460271137'}],
      ['over', 1, 'µ', 'Kochanski / Gordon', 12, 10, '99.9996', 'kyhvbkhh', '', {method: 'Kochanski Gordon Crossover Method', date: '13-01-2026'}],
      ['under', 1, 'µ', 'Edward James Gordon', 9, 13, '99.999', 'm6btgcyj', 'GeoGebra Files/Under/RTC-99.999', {method: 'Microscale Trisection', date: '07-11-2025', precise: '99.99948805479345'}],
      ['under', 2, '', 'Adam Adamandy Kochanski', 5, 7, '99.998', 'hhjyc93h', 'GeoGebra Files/Under/RTC-99.998-Kochanski', {method: "Kochański's approximation", date: '1685', precise: '99.99811194856672', note: 'A textbook form of it is walked through on the Constructions page.'}],
      ['under', 3, 'µ', 'Edward James Gordon', 4, 14, '99.9875', 'cbmncq7h', 'GeoGebra Files/Under/RTC-99.9875', {precise: '99.98755028618388'}],
      ['under', 4, '', 'Edward James Gordon', 9, 6, '99.9874', 'scvxwyva', 'GeoGebra Files/Under/RTC-99.9874', {precise: '99.98745429466945', note: 'Found with the search space method.'}],
      ['under', 5, '', 'Edward James Gordon', 8, 4, '99.812', 'zczfbfzp', 'GeoGebra Files/Under/RTC-99.812', {date: '08-11-2025'}],
      ['under', 6, '', 'Edward James Gordon', 9, 4, '99.809', 'hhks3r3z', 'GeoGebra Files/Under/RTC-99.809', {date: '08-11-2025'}],
      ['under', 7, '', 'Edward James Gordon', 10, 5, '99.443', 'at9txh3h', 'GeoGebra Files/Under/RTC-99.443', {date: '08-11-2025', precise: '99.44303378543306'}],
      ['under', 8, '', 'Edward James Gordon', 8, 4, '99.374', 'mpnw4ssy', 'GeoGebra Files/Under/RTC-99.374', {precise: '99.37407696435614'}],
      ['under', 9, '', 'Edward James Gordon', 6, 4, '98.165', 'tzdubzms', 'GeoGebra Files/Under/RTC-98.165', {precise: '98.16518509675318'}],
    ],
  },
  {
    id: 'ar', n: 5, name: 'Arc Rectification', short: 'AR',
    folder: 'Approximations/05 Arc Rectification',
    chart: 'AR-ApproximationChart',
    task: 'Construct a straight line as long as any given arc.',
    target: 'A segment of length r · θ (θ in radians), for every arc.',
    why: 'Contains rectifying the circle as a special case, so it inherits the same wall. A single method would also have to work for every arc at once.',
    entries: [
      ['over', 1, '', 'Edward James Gordon', 1, 6, '~95', 'nwxxhgju', 'GeoGebra Files/Arc Rectification Over/AR~95.000', {note: 'Works for angles between 90° and 180°.'}],
    ],
  },
];

// Turn each entry array into an object the pages can read by name.
for (const p of PROBLEMS) {
  p.entries = p.entries.map(([side, rank, marks, holder, circles, lines, acc, gg, file, extra]) => ({
    side, rank, marks, holder, circles, lines, acc, file: file ? p.folder + '/' + file : '',
    geogebra: gg ? 'https://www.geogebra.org/geometry/' + gg : '',
    method: extra.method || '', date: extra.date || '', precise: extra.precise || '', note: extra.note || '',
    value: parseFloat(String(acc).replace(/[^0-9.]/g, '')),
  }));
}

// A repository path as a link: the file itself (served next to the website) or its page on GitHub.
function repoFile(path, root) { return (root || '../') + path.split('/').map(encodeURIComponent).join('/'); }
function repoBlob(path) { return REPO + '/blob/main/' + path.split('/').map(encodeURIComponent).join('/'); }

// The repository's accuracy rule: 100 − |constructed − true| ÷ true × 100, truncated (never rounded).
function accuracyOf(constructed, truth) { return 100 - Math.abs(constructed - truth) / truth * 100; }
function truncate(x, places) { const f = Math.pow(10, places); return (Math.trunc(x * f) / f).toFixed(places); }
