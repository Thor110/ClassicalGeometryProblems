// Helpers for the pages that show the charts. The numbers themselves live in archive-data.js (the
// charts) and ai-checks.js (written by tools/verify.py), which must be loaded before this file, and
// common.js (the helpers every page uses) before them.

const REPO = 'https://github.com/Thor110/ClassicalGeometryProblems';

// The best entry on one side, by the full-precision figure (the chart figure is shortened).
const bestOf = (entries, side) => entries.filter(e => e.side === side).sort((a, b) => b.exact - a.exact)[0];
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
  }));
  // Rank each side by accuracy: 1 is closest to perfect. Entries below the 95% minimum are kept
  // on record but not charted.
  const charted = entries.filter(e => !e.archived);
  for (const side of ['over', 'under'])
    charted.filter(e => e.side === side).sort((a, b) => b.exact - a.exact).forEach((e, i) => { e.rank = i + 1; });
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
