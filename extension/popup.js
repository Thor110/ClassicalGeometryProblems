// The popup: read the construction from GeoGebra, fill in the form, preview the accuracy, and
// submit it as a pull request, download it as a zip, or open it as an issue.

const $ = id => document.getElementById(id);
const PROBLEMS = {stc: 'Squaring the Circle', rtc: 'Rectifying the Circle', dtc: 'Doubling the Cube', taa: 'Trisecting an Angle', ar: 'Arc Rectification'};
let C = null;              // the construction read from GeoGebra
let TAB = null;            // the GeoGebra tab, to come back to after signing in
let SENDING = false;       // a pull request is being sent: one click sends one pull request
let SENT = null;           // this construction was already sent: the pull request's address
let SIGNED_IN = false;
let KEY = '';              // identifies this construction by its measurements, to know if it was sent

// Runs inside the GeoGebra page (the page's own world, where GeoGebra's ggbApplet lives).
function readConstruction() {
  const api = window.ggbApplet;
  if (!api || typeof api.getBase64 !== 'function') return {error: 'There is no GeoGebra construction on this page.'};
  const measured = ['numeric', 'angle', 'segment', 'triangle', 'quadrilateral', 'pentagon', 'hexagon', 'polygon', 'arc', 'circulararc', 'conicpart'];
  const objects = api.getAllObjectNames().map(n => {
    const type = api.getObjectType(n);
    return {name: n, type, command: api.getCommandString(n, false) || '', defined: api.isDefined(n), value: measured.includes(type) ? api.getValue(n) : null};
  });
  const done = b64 => ({base64: b64, objects, url: location.href, title: document.title});
  return new Promise(res => {
    const sync = api.getBase64(b64 => res(done(b64)));
    if (typeof sync === 'string' && sync) res(done(sync));
  });
}

// What a measurement is: its tool and inputs, from GeoGebra's command text such as "Distance[A, B]".
function parse(o) {
  const m = /^(\w+)\[(.*)\]$/.exec(o.command || '');
  return m ? {tool: m[1], args: m[2].split(',').map(s => s.trim())} : {tool: o.type, args: []};
}
const typeOf = name => (C.objects.find(o => o.name === name) || {}).type;
const isCircle = name => ['circle', 'conic'].includes(typeOf(name));
const isArc = name => ['arc', 'circulararc', 'conicpart'].includes(typeOf(name));
const smaller = a => { a = ((a % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI); return Math.min(a, 2 * Math.PI - a); };

function measurements() {
  return C.objects.filter(o => o.value !== null && o.defined && typeof o.value === 'number').map(o => ({...o, ...parse(o)}));
}

// The archive's accuracy for the chosen problem, result and true value. Returns {acc, side} or {why}.
function preview(problem, resName, truName, scale) {
  const M = measurements(), r = M.find(o => o.name === resName), t = M.find(o => o.name === truName);
  if (!r || !t) return {why: 'Choose your result and the true value.'};
  let c, tv;
  if (problem === 'stc') {
    if (!/triangle|quadrilateral|polygon/.test(r.type) && r.tool !== 'Area') return {why: 'For squaring the circle, choose your square as the result.'};
    if (!(t.tool === 'Area' && isCircle(t.args[0]))) return {why: 'For squaring the circle, the true value is the area of the circle (add Area(c) in GeoGebra if it is missing).'};
    c = r.value; tv = t.value;
  } else if (problem === 'rtc') {
    if (!/Circumference|Perimeter/.test(t.tool)) return {why: 'The true value is the circle\'s circumference (add Circumference(c) in GeoGebra if it is missing).'};
    c = r.value * scale; tv = t.value;
  } else if (problem === 'dtc') {
    c = Math.pow(r.value / t.value, 3); tv = 2;
  } else if (problem === 'taa') {
    if (r.type !== 'angle' || t.type !== 'angle') return {why: 'Choose one of your three angles as the result, and the whole angle as the true value.'};
    const a = smaller(r.value), w = smaller(t.value);
    tv = Math.abs(a - w / 3) < Math.abs(a - 2 * w / 3) ? w / 3 : 2 * w / 3; c = a;
    // As on the charts: when the three parts are all measured, the worst of them sets the accuracy.
    const parts = M.filter(o => o.type === 'angle' && o !== t && Math.abs(smaller(o.value) / (w / 3) - 1) < 0.1);
    if (parts.length >= 3) { c = parts.map(o => smaller(o.value)).reduce((x, y) => Math.abs(y - w / 3) > Math.abs(x - w / 3) ? y : x); tv = w / 3; }
  } else if (problem === 'ar') {
    if (!(t.tool === 'Length' && isArc(t.args[0]))) return {why: 'The true value is the arc\'s length (add Length of the arc in GeoGebra if it is missing).'};
    c = r.value; tv = t.value;
  }
  const acc = 100 - Math.abs(c - tv) / tv * 100;
  return {acc, side: c > tv ? 'oversized' : 'undersized'};
}

// Sensible first guesses for the problem and the two measurements; the person can change them.
function guess() {
  const M = measurements();
  const circleArea = M.find(o => o.tool === 'Area' && isCircle(o.args[0]));
  const circumference = M.find(o => /Circumference|Perimeter/.test(o.tool));
  const arcLength = M.find(o => o.tool === 'Length' && isArc(o.args[0]));
  const squares = M.filter(o => o.type === 'quadrilateral');
  const angles = M.filter(o => o.type === 'angle');
  const lengths = M.filter(o => /Distance|Segment|Length/.test(o.tool) || o.type === 'segment');
  if (squares.length && circleArea) return {problem: 'stc', result: squares[squares.length - 1].name, truth: circleArea.name};
  if (arcLength) return {problem: 'ar', truth: arcLength.name, result: closest(lengths.filter(o => o !== arcLength), arcLength.value)};
  if (circumference) return {problem: 'rtc', truth: circumference.name, result: closest(lengths, circumference.value)};
  if (angles.length >= 2) {
    const whole = angles.reduce((a, b) => smaller(b.value) > smaller(a.value) ? b : a);
    return {problem: 'taa', truth: whole.name, result: closest(angles.filter(o => o !== whole), smaller(whole.value) / 3, smaller)};
  }
  if (lengths.length >= 2) {
    const given = lengths.reduce((a, b) => b.value < a.value ? b : a);
    return {problem: 'dtc', truth: given.name, result: closest(lengths.filter(o => o !== given), given.value * Math.cbrt(2))};
  }
  return {problem: 'stc'};
}
function closest(list, target, f = x => x) {
  if (!list.length) return undefined;
  return list.reduce((a, b) => Math.abs(f(b.value) - target) < Math.abs(f(a.value) - target) ? b : a).name;
}

function fillSelects(g) {
  const M = measurements();
  const opt = o => `<option value="${o.name}">${o.name}: ${o.command || o.type} = ${Number(o.value).toPrecision(12)}</option>`;
  $('result').innerHTML = M.map(opt).join(''); $('truth').innerHTML = M.map(opt).join('');
  if (g.result) $('result').value = g.result;
  if (g.truth) $('truth').value = g.truth;
  $('problem').value = g.problem;
}

function labels() {
  const p = $('problem').value;
  $('resultLabel').textContent = {stc: 'Your square', rtc: 'Your constructed length', dtc: 'Your constructed edge', taa: 'One of your three angles', ar: 'Your constructed length'}[p];
  $('truthLabel').textContent = {stc: 'The area of the circle', rtc: 'The circumference', dtc: 'The given cube\'s edge', taa: 'The whole angle', ar: 'The length of the arc'}[p];
  $('scaleRow').hidden = p !== 'rtc';
}

let current = null;
function update() {
  labels();
  current = preview($('problem').value, $('result').value, $('truth').value, Number($('scale').value));
  const P = $('preview');
  if (current.why) P.innerHTML = `<span class="warm">${current.why}</span>`;
  else {
    const t = Math.floor(current.acc * 1000) / 1000;
    P.innerHTML = `Accuracy <b class="${current.acc >= CONFIG.MINIMUM ? 'good' : 'hot'}">${t.toFixed(3)}%</b> ${current.side}` +
      (current.acc < CONFIG.MINIMUM ? `<br><span class="hot">Below the ${CONFIG.MINIMUM}% minimum, so it cannot be charted yet.</span> You can still download it and keep refining it.` : '') +
      `<br><span class="hint">A preview from GeoGebra's values. The archive rebuilds it to confirm.</span>`;
  }
  check();
}

// What still stops this being sent, or '' when it is ready. Shown when Submit is clicked too early.
function missing() {
  if (SENT) return 'sent';
  if (current?.why) return current.why;
  if (!(current?.acc >= CONFIG.MINIMUM)) return `This is below the ${CONFIG.MINIMUM}% minimum, so it cannot be charted yet. You can still download it and keep refining it.`;
  if (!$('name').value.trim()) return 'Please enter your name.';
  if (!$('agree').checked) return 'Please tick the box to confirm this is your own work (or that you credit its discoverer), and that it may be published.';
  if (!SIGNED_IN) return 'Please sign in with GitHub first (the link just above), or download the zip instead.';
  return '';
}
function check() {
  const why = missing();
  $('submit').disabled = !CONFIG.CLIENT_ID || SENDING || !!SENT;
  $('submit').classList.toggle('waiting', !!why);
  $('submit').textContent = SENT ? 'Already Sent' : SENDING ? 'Sending…' : 'Submit As A Pull Request';
  $('submit').title = !CONFIG.CLIENT_ID ? 'Sign-in is not set up yet: download the zip or open an issue instead.' : why;
  if ($('agree').checked) $('agreeLabel').classList.remove('remind');
}
// The words the language check does not accept, by box. Empty when all is well.
function wording() {
  const out = [];
  for (const [id, label] of [['name', 'name'], ['method', 'method name'], ['description', 'description'], ['notes', 'notes']]) {
    const bad = languageCheck($(id).value, id === 'name');
    if (bad.length) out.push({id, label, bad});
  }
  return out;
}
function wordingMessage(w) {
  const name = w.find(x => x.id === 'name');
  return `<span class="hot">Please change the wording in the ${w.map(x => x.label).join(', ')}.</span> ` +
    (name ? 'Your real name is published with your construction, so that the discovery stays credited to you. ' : '') +
    'The archive is meant to be a welcoming place for everyone who tries these problems.';
}

// A GeoGebra address that opens this construction for anyone, or '' (the app's blank page has none).
const publicLink = () => /geogebra\.org\/(m|geometry|classic|graphing|calculator|3d|cas)\/[A-Za-z0-9]{6,}/.test(C.url || '') ? C.url : '';
const slug = s => (s || 'anonymous').toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 30) || 'anonymous';
function details() {
  return {
    name: $('name').value.trim(), problem: $('problem').value, result: $('result').value, truth: $('truth').value,
    scale: $('problem').value === 'rtc' ? Number($('scale').value) : null,
    method: $('method').value.trim(), description: $('description').value.trim(), notes: $('notes').value.trim(),
    ai_assisted: $('ai').checked, agreed: $('agree').checked,
    preview_accuracy: current && !current.why ? current.acc : null, preview_side: current && current.side,
    geogebra_url: publicLink(), submitted: new Date().toISOString(), extension_version: chrome.runtime.getManifest().version,
  };
}
function notesMarkdown(d) {
  const M = measurements(), r = M.find(o => o.name === d.result), t = M.find(o => o.name === d.truth);
  return `**Problem:** ${PROBLEMS[d.problem]}

**Method Name:**
${d.method}

**Author:**
${d.name} - ${new Date().toLocaleDateString('en-GB').replace(/\//g, '-')}

**Accuracy (%):**
${d.preview_accuracy != null ? (Math.floor(d.preview_accuracy * 1000) / 1000).toFixed(3) + '\n(preview from GeoGebra: ' + d.preview_accuracy + ')' : ''}

**Oversized / Undersized:**
${d.preview_side ? d.preview_side[0].toUpperCase() + d.preview_side.slice(1) + '.' : ''}

**Number of Circles:**
(counted by the archive's evaluation)

**Number of Lines:**
(counted by the archive's evaluation)

**Verification Method:**
GeoGebra, submitted with the archive's browser extension. Result: ${r ? r.command || r.name : d.result}; true value: ${t ? t.command || t.name : d.truth}.

**File(s):**
construction.ggb${publicLink() ? ', ' + publicLink() : ''}

**Description:**
${d.description}

**Notes / Limitations:**
${d.notes}${d.ai_assisted ? '\n\nAn AI helped find or refine this construction.' : ''}
`;
}
const b64bytes = b64 => Uint8Array.from(atob(b64), c => c.charCodeAt(0));
const textB64 = s => btoa(String.fromCharCode(...new TextEncoder().encode(s)));
function folderName(d) {
  const id = Math.random().toString(36).slice(2, 8);
  return `${new Date().toISOString().slice(0, 10)}-${d.problem}-${slug(d.name)}-${id}`;
}

// ----- the three ways to send it
// The construction's measurements, hashed: the same construction gives the same key every time.
async function constructionKey() {
  const text = C.url.split('?')[0] + '|' + measurements().map(o => o.name + '=' + Number(o.value).toPrecision(12)).join('|');
  const h = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(h)].slice(0, 12).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function submitPR() {
  if (SENDING || SENT) return;
  const why = missing();
  if (why) {
    status(`<span class="warm">${why}</span>`);
    if (why.includes('tick the box')) { $('agreeLabel').classList.add('remind'); $('agree').focus(); }
    else if (why.includes('your name')) $('name').focus();
    return;
  }
  const w = wording();
  if (w.length) { status(wordingMessage(w)); $(w[0].id).focus(); return; }
  SENDING = true; check();
  const d = details(), folder = folderName(d), dir = 'Submissions/' + folder;
  const files = [
    {path: dir + '/construction.ggb', base64: C.base64},
    {path: dir + '/submission.json', base64: textB64(JSON.stringify(d, null, 2) + '\n')},
    {path: dir + '/submission.md', base64: textB64(notesMarkdown(d))},
  ];
  const title = `Submission: ${PROBLEMS[d.problem]}${d.preview_accuracy != null ? ' · ' + (Math.floor(d.preview_accuracy * 1000) / 1000).toFixed(3) + '%' : ''}${d.method ? ' · ' + d.method : ''} · ${d.name}`;
  const body = `A construction submitted from GeoGebra with the archive's browser extension.\n\n- **Name:** ${d.name}\n- **Problem:** ${PROBLEMS[d.problem]}\n- **Preview accuracy:** ${d.preview_accuracy != null ? d.preview_accuracy.toFixed(6) + '% ' + d.preview_side : 'not available'}\n- **GeoGebra:** ${publicLink() || 'not shared yet (the construction file is attached)'}\n- **AI-assisted:** ${d.ai_assisted ? 'yes' : 'no'}\n\n${d.description ? d.description + '\n\n' : ''}The evaluation workflow will comment with the archive's own measurement shortly.`;
  const {token} = await chrome.storage.local.get('token');
  status('Sending…');
  try {
    const url = await GH.submit(token, files, title, body, 'submission-' + folder, status);
    await chrome.storage.local.remove('draft');
    const {sent} = await chrome.storage.local.get('sent');
    await chrome.storage.local.set({sent: {...(sent || {}), [KEY]: url}});
    SENT = url;
    status(`Submitted. <a href="${url}" target="_blank">Your pull request</a> will be evaluated automatically in a minute or two.`);
  } catch (e) {
    if (e.status === 401) { await chrome.storage.local.remove(['token', 'login']); SIGNED_IN = false; account(); }
    status(`<span class="hot">GitHub said: ${e.message}</span><br>You can download the zip instead and send it another way.`);
  }
  SENDING = false; check();
}

function download() {
  const d = details(), folder = folderName(d);
  const blob = Zip.make([
    {path: folder + '/construction.ggb', bytes: b64bytes(C.base64)},
    {path: folder + '/submission.json', bytes: new TextEncoder().encode(JSON.stringify(d, null, 2) + '\n')},
    {path: folder + '/submission.md', bytes: new TextEncoder().encode(notesMarkdown(d))},
  ]);
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = folder + '.zip'; a.click();
  status('Downloaded ' + folder + '.zip. Send it by pull request or attach it to an issue.');
}

function issue() {
  const w = wording();
  if (w.length) { status(wordingMessage(w)); $(w[0].id).focus(); return; }
  const d = details();
  const q = {template: 'submission.yml', title: 'Submission: ' + PROBLEMS[d.problem] + (d.method ? ' · ' + d.method : ''),
    method: d.method, author: d.name, accuracy: d.preview_accuracy != null ? String(d.preview_accuracy) : '', geogebra: publicLink(),
    description: d.description, notes: d.notes};
  const url = `https://github.com/${CONFIG.OWNER}/${CONFIG.REPO}/issues/new?` + Object.entries(q).filter(([, v]) => v).map(([k, v]) => k + '=' + encodeURIComponent(v)).join('&');
  chrome.tabs.create({url});
}

// ----- signing in
async function account() {
  const A = $('account');
  if (!CONFIG.CLIENT_ID) { A.innerHTML = 'Pull requests need GitHub sign-in, which is not set up yet. Download the zip or open an issue instead.'; return; }
  const {token, login} = await chrome.storage.local.get(['token', 'login']);
  SIGNED_IN = !!token;
  if (token) {
    A.innerHTML = `Signed in to GitHub as <b>${login}</b>. <a href="#" id="signout">Sign out</a>`;
    $('signout').onclick = async e => { e.preventDefault(); await chrome.storage.local.remove(['token', 'login']); SIGNED_IN = false; account(); check(); };
  } else {
    // Sign-in runs in its own tab (signin.html): this popup closes as soon as GitHub's page is opened.
    const {signin} = await chrome.storage.local.get('signin');
    const waiting = signin && signin.expires_at > Date.now();
    A.innerHTML = waiting
      ? `Signing in with code <b class="good">${signin.user_code}</b>. <a href="#" id="signin">Open the sign-in tab</a>`
      : `Pull requests need a GitHub account. <a href="#" id="signin">Sign in with GitHub</a>`;
    $('signin').onclick = async e => {
      e.preventDefault();
      chrome.tabs.create({url: chrome.runtime.getURL('signin.html') + (TAB ? '?tab=' + TAB : '')});   // it reuses a code already shown
    };
  }
  check();
}

function status(html) { $('status').innerHTML = html; }

// ----- start
(async function start() {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  TAB = tab && tab.id;
  if (!tab || !/^https:\/\/([a-z0-9-]+\.)?geogebra\.org\//.test(tab.url || '')) {
    status(`Open your construction on <a href="https://www.geogebra.org/geometry" target="_blank">geogebra.org</a>, then click this button again.`); return;
  }
  let res;
  try {
    [res] = await chrome.scripting.executeScript({target: {tabId: tab.id}, world: 'MAIN', func: readConstruction});
  } catch (e) { status('Could not read this page: ' + e.message); return; }
  C = res && res.result;
  if (!C || C.error) { status((C && C.error) || 'Could not read the construction on this page.'); return; }
  if (!measurements().length) {
    status('This construction has no measurements yet. In GeoGebra, measure your result and the true value (for example Distance, Area or Circumference), then click this button again.'); return;
  }
  const saved = await chrome.storage.local.get('name');
  $('name').value = saved.name || '';
  fillSelects(guess());
  $('form').hidden = false;
  for (const id of ['problem', 'result', 'truth', 'scale']) $(id).onchange = update;
  $('name').oninput = () => { chrome.storage.local.set({name: $('name').value}); check(); };
  // Keep what was typed for this construction, so closing the popup (to sign in, say) loses nothing.
  // The choices (problem, result, true value) are kept too, for the same construction.
  KEY = await constructionKey();
  const DRAFT = ['method', 'description', 'notes'], TICKS = ['ai', 'agree'], CHOICES = ['problem', 'result', 'truth', 'scale'];
  const {draft, sent} = await chrome.storage.local.get(['draft', 'sent']);
  if (draft && draft.key === KEY) {
    for (const id of DRAFT) if (draft[id]) $(id).value = draft[id];
    for (const id of TICKS) $(id).checked = !!draft[id];
    for (const id of CHOICES) if (draft[id] && [...$(id).options].some(o => o.value === draft[id])) $(id).value = draft[id];
  }
  const keep = () => chrome.storage.local.set({draft: Object.fromEntries([['key', KEY], ...DRAFT.map(id => [id, $(id).value]), ...TICKS.map(id => [id, $(id).checked]), ...CHOICES.map(id => [id, $(id).value])])});
  for (const id of DRAFT) $(id).addEventListener('input', keep);
  for (const id of [...TICKS, ...CHOICES]) $(id).addEventListener('change', keep);
  if (sent && sent[KEY]) {
    SENT = sent[KEY];
    status(`This construction has already been sent: <a href="${SENT}" target="_blank">its pull request</a>. Change the construction in GeoGebra to send a new version.`);
  } else if (!publicLink()) {
    status('<span class="hint">Tip: save and share the construction in GeoGebra first, so its public link goes with it and anyone can open it. The file itself is sent either way.</span>');
  }
  $('agree').onchange = check;
  $('submit').onclick = submitPR; $('download').onclick = download; $('issue').onclick = issue;
  $('site').onclick = e => { e.preventDefault(); chrome.tabs.create({url: CONFIG.SITE + 'pages/submit.html#extension'}); };
  update(); account();
})();
