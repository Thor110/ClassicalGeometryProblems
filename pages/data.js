// Helpers shared by the website's pages. The numbers themselves live in archive-data.js (the
// charts) and ai-checks.js (written by tools/verify.py), which must be loaded before this file.

const REPO = 'https://github.com/Thor110/ClassicalGeometryProblems';
const CHECKS = (typeof AI_CHECKS !== 'undefined') ? AI_CHECKS.results : {};

// Status of an entry under the verification rules (VERIFICATION.md):
//   disputed      an open dispute
//   verified      reproduced by someone other than its method holder, a person or an AI checker
//   self-verified checked only by its method holder
//   unverified    no checks yet
function holderNames(holder) { return holder.split('/').map(s => s.trim().toLowerCase()); }
function isHolder(name, holder) {
  const n = name.toLowerCase();
  return holderNames(holder).some(h => h === n || n.endsWith(' ' + h) || h.endsWith(' ' + n.split(' ').pop()));
}
function statusOf(e) {
  const people = (e.verified || []).filter(v => v.kind === 'person');
  const independent = people.filter(v => !isHolder(v.by, e.holder));
  const ai = CHECKS[e.id] || null;
  const open = (e.disputes || []).filter(d => d.status === 'open');
  let status = 'unverified';
  if (open.length) status = 'disputed';
  else if (independent.length || (ai && ai.status === 'reproduced')) status = 'verified';
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
  // Rank each side by accuracy: 1 is closest to perfect.
  for (const side of ['over', 'under'])
    entries.filter(e => e.side === side).sort((a, b) => b.exact - a.exact).forEach((e, i) => { e.rank = i + 1; });
  return {...p, entries};
});

// A repository path as a link: the file itself (served next to the website) or its page on GitHub.
function repoFile(path, root) { return (root || '../') + path.split('/').map(encodeURIComponent).join('/'); }
function repoBlob(path) { return REPO + '/blob/main/' + path.split('/').map(encodeURIComponent).join('/'); }

// The repository's accuracy rule: 100 − |constructed − true| ÷ true × 100, truncated (never rounded).
function accuracyOf(constructed, truth) { return 100 - Math.abs(constructed - truth) / truth * 100; }
function truncate(x, places) { const f = Math.pow(10, places); return (Math.trunc(x * f) / f).toFixed(places); }
