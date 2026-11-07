// Helpers for the pages that show the charts. The numbers themselves live in archive-data.js (the
// charts) and ai-checks.js (written by tools/verify.py), which must be loaded before this file, and
// common.js (the helpers every page uses) before them.

const REPO = 'https://github.com/Thor110/ClassicalGeometryProblems';

// The best entry on one side, by the full-precision figure (the chart figure is shortened).
// The precise readout as an exact whole number (in units of 10^-34 percent), so that entries agreeing to more digits
// than a floating-point number holds still sort correctly.
const PRECISE_PLACES = 34;
function preciseUnits(e) {
  const t = String(e.precise || e.acc || '').replace(/[^0-9.]/g, '') || '0', [i, f = ''] = t.split('.');
  return BigInt(i || '0') * 10n ** BigInt(PRECISE_PLACES) + BigInt((f + '0'.repeat(PRECISE_PLACES)).slice(0, PRECISE_PLACES) || '0');
}
// Closest to perfection first; an exact tie puts the construction with fewer circles and lines first.
const steps_ = e => (parseInt(e.circles, 10) || 0) + (parseInt(e.lines, 10) || 0);
const byExact = (a, b) => (b.units > a.units) - (b.units < a.units) || steps_(a) - steps_(b);
// The gap from perfection, 1 − accuracy/100, as 1.1 × 10⁻¹⁰: two significant figures, worked out from the 32-digit readout.
const SUP = {'-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹'};
function errorText(e) {
  const d = 100n * 10n ** BigInt(PRECISE_PLACES) - e.units;
  if (d <= 0n) return d === 0n ? '0' : '—';
  const ds = d.toString(), exp = ds.length - 1 - (PRECISE_PLACES + 2);
  const m = (Number(ds.slice(0, 3).padEnd(3, '0')) / 100).toFixed(1);
  const mm = m === '10.0' ? ['1.0', exp + 1] : [m, exp];
  return mm[0] + ' × 10' + String(mm[1]).split('').map(c => SUP[c]).join('');
}
const bestOf = (entries, side) => entries.filter(e => e.side === side).sort(byExact)[0];
const CHECKS = (typeof AI_CHECKS !== 'undefined') ? AI_CHECKS.results : {};

// Status of an entry under the verification rules (VERIFICATION.md):
//   disputed      an open dispute
//   verified      reproduced by someone other than its method holder, a person or an AI checker
//   self-verified checked only by its method holder
//   unverified    no checks yet
// The full names behind a method holder (ARCHIVE.holders), or the holder's name itself. A verification
// is self-verification only when its full name is one of these: matching by surname alone would count
// anyone who shares a surname.
const plainName = s => String(s || '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
function holderNames(holder) { return ((ARCHIVE.holders || {})[holder] || [holder]).map(plainName); }
function isHolder(name, holder) { return holderNames(holder).includes(plainName(name)); }
function statusOf(e) {
  const people = (e.verified || []).filter(v => v.kind === 'person');
  // Someone listed as having also found the construction is not independent of it either.
  const finders = (e.rediscovered || []).map(r => plainName(r.name));
  const independent = people.filter(v => !isHolder(v.by, e.holder) && !finders.includes(plainName(v.by)));
  const ai = CHECKS[e.id] || null;
  const open = (e.disputes || []).filter(d => d.status === 'open');
  let status = 'unverified';
  if (open.length) status = 'disputed';
  else if (independent.length || (ai && ai.status === 'reproduced' && e.holder_kind !== 'ai')) status = 'verified';
  else if (ai && ai.status === 'reproduced' && e.holder_kind === 'ai') status = 'self-verified';
  else if (people.length) status = 'self-verified';
  return {status, people, independent, ai, open};
}

const PROBLEMS = ARCHIVE.problems.map(p => {
  const entries = p.entries.map(e => ({
    ...e,
    file: e.file ? p.folder + '/' + e.file : '',
    notesFile: (e.notes || e.file) ? p.folder + '/' + (e.notes || e.file) : '',
    geogebra: e.geogebra ? 'https://www.geogebra.org/geometry/' + e.geogebra : '',
    value: parseFloat(String(e.acc).replace(/[^0-9.]/g, '')),
    exact: parseFloat(e.precise || String(e.acc).replace(/[^0-9.]/g, '')),
    units: preciseUnits(e),
  }));
  // Chart figures that are alike at the ten-place display limit but not exactly equal are marked ≈.
  const key = e => e.side + ' ' + String(e.acc).replace(/[^0-9.]/g, '');
  const units = {};
  entries.forEach(e => { (units[key(e)] = units[key(e)] || new Set()).add(e.units.toString()); });
  entries.forEach(e => { e.capTie = units[key(e)].size > 1; });
  // Rank each side by accuracy: 1 is closest to perfect. Entries below the 95% minimum are kept
  // on record but not charted.
  const charted = entries.filter(e => !e.archived);
  for (const side of ['over', 'under'])
    charted.filter(e => e.side === side).sort(byExact).forEach((e, i) => { e.rank = i + 1; });
  return {...p, entries: charted, archived: entries.filter(e => e.archived)};
});

// Problem 6, π approximations, is worked out from problem 4: every rectification of the circle,
// halved, is a length of π for a circle of radius 1, with the same accuracy and the same steps (the
// halving is a midpoint, which is not counted). So the π chart lists the same entries, with each
// one's value of π. Only the charts page shows it; everywhere else counts each construction once.
const PI_CHART = (() => {
  const r = PROBLEMS.find(p => p.id === 'rtc'), D = ARCHIVE.derived_pi;
  if (!r) return null;
  const drawn = Object.fromEntries(((D && D.files) || []).map(x => [x.of, x]));
  const withPi = e => {
    const err = (100 - e.exact) / 100 * (e.side === 'over' ? 1 : -1);
    const value = Math.PI * (1 + err);
    const d = drawn[e.id];
    return {...e, piValue: value, piPlaces: Math.max(0, Math.floor(-Math.log10(2 * Math.abs(value - Math.PI)))),
            piFile: d ? D.folder + '/' + d.file : '', piGeogebra: d && d.geogebra ? 'https://www.geogebra.org/geometry/' + d.geogebra : ''};
  };
  return {id: 'pi', n: 6, name: 'π Approximations', short: 'PA', derived: 'rtc', folder: D ? D.folder : '',
    task: 'Construct a length of π from a length of one.',
    target: 'Worked out from the circle rectification chart: halve the constructed circumference of a circle of radius 1. Same accuracy, same circles and lines.',
    why: r.why, entries: r.entries.map(withPi), archived: (r.archived || []).map(withPi)};
})();
// π written out, and how many decimal places of it are right (within half a unit of the last place).
function piText(e) { return 'π ≈ ' + e.piValue.toFixed(Math.min(14, e.piPlaces + 3)) + ' · ' + e.piPlaces + ' decimal place' + (e.piPlaces === 1 ? '' : 's'); }

// An entry's current rank on its side of its chart, by its id ('' if it is not charted).
const rankOf = id => { for (const p of PROBLEMS) { const e = p.entries.find(x => x.id === id); if (e) return e.rank; } return ''; };

// A repository path as a link: the file itself (served next to the website) or its page on GitHub.
function repoFile(path, root) { return (root || '../') + path.split('/').map(encodeURIComponent).join('/'); }
function repoBlob(path) { return REPO + '/blob/main/' + path.split('/').map(encodeURIComponent).join('/'); }

// The repository's accuracy rule: 100 − |constructed − true| ÷ true × 100, truncated (never rounded).
function accuracyOf(constructed, truth) { return 100 - Math.abs(constructed - truth) / truth * 100; }
function truncate(x, places) { const f = Math.pow(10, places); return (Math.trunc(x * f) / f).toFixed(places); }

// Open slots (SUBMISSION_RULESET.md, "Slots"). Every budget of c circles and l lines is a slot on each side of a chart.
const RULESETS = [['Base ruleset', 25, 40], ['Extended ruleset', 49, 80]];
const GIVEN_POINTS = {stc: 2, rtc: 2, pi: 2, dtc: 2, taa: 3, ar: 3};   // the points a construction starts from
// Slots that can never be filled, and why.
function slotImpossible(pid, c, l) {
  if (c === 0) return 'No circles: a straightedge alone, from the given points, draws no new point.';
  if (c === 1 && (pid === 'stc' || pid === 'rtc' || pid === 'pi')) return 'One circle is the given circle itself: lines can then only join the centre and points on one diameter, so the only lengths are r and 2r, far below 95%.';
  return '';
}
const slotKey = e => parseInt(e.circles, 10) + ',' + parseInt(e.lines, 10);
function slotStats(pid, entries, C, L) {
  const ok = e => { const c = parseInt(e.circles, 10), l = parseInt(e.lines, 10); return c <= C && l <= L && !isNaN(c) && !isNaN(l); };
  const filled = side => new Set(entries.filter(e => e.side === side && ok(e)).map(slotKey)).size;
  const per = (C + 1) * (L + 1);
  let impossible = 0; for (let c = 0; c <= C; c++) for (let l = 0; l <= L; l++) if (slotImpossible(pid, c, l)) impossible++;
  const fo = filled('over'), fu = filled('under');
  return {per, impossible, fo, fu, open: 2 * (per - impossible) - fo - fu};
}
// An upper bound on the number of different ways to draw, summed over every budget up to C circles and L lines:
// ways(c, l) ≤ C(n, c) × ∏ₖ [Pₖ(Pₖ − 1) + Pₖ · C(Pₖ, 2)], with n = c + l, P₀ the given points and Pₖ₊₁ = Pₖ + 2k.
function waysLog10(C, L, P0) {
  const lc = (n, k) => { let s = 0; for (let i = 1; i <= k; i++) s += Math.log10(n - k + i) - Math.log10(i); return s; };
  const steps = [0]; let P = P0;
  for (let k = 0; k < C + L; k++) { steps.push(steps[k] + Math.log10(Math.max(1, P * (P - 1) + P * (P * (P - 1) / 2)))); P += 2 * k; }
  let m = -Infinity; const terms = [];
  for (let c = 0; c <= C; c++) for (let l = 0; l <= L; l++) { const t = lc(c + l, c) + steps[c + l]; terms.push(t); if (t > m) m = t; }
  return m + Math.log10(terms.reduce((s, t) => s + Math.pow(10, t - m), 0));
}
