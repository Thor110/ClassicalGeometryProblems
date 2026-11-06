// GeoGebra backup: saves every construction in your GeoGebra files (Main menu → Open) into a folder you choose.
//
// How to use (Chrome or Edge):
//   1. Sign in, and open a GeoGebra app in a new, empty tab, for example geogebra.org/geometry. The
//      script opens each of your files in that app in turn, so start with nothing unsaved in it.
//   2. Press F12, open the Console tab, paste this whole file and press Enter.
//      (If Chrome says pasting is blocked, type:  allow pasting  and press Enter, then paste again.)
//   3. A panel appears in the top right corner. Now open Main menu → Open, so your files are listed.
//      The panel counts them as they appear, and scrolls the list so they all load. If the Open
//      screen was already open before you pasted, close it and open it again.
//   4. When the count stops going up, click "Choose folder and save". In the folder picker, go to
//      your Desktop, click "New folder", name it (say "GeoGebra backup"), select it, and allow Chrome
//      to save files there.
//   5. Each file is opened in the app, then saved as "<its title>.ggb" (two files with the same title get
//      " (2)" added). list.csv lists every file with its id and says which ones saved.
//
// It only reads your own file list and downloads your own files, in your own signed-in browser.
// Nothing is sent anywhere else. Close the tab to stop it at any time.

(async () => {
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const panel = document.createElement('div');
  panel.style.cssText = 'position:fixed;top:12px;right:12px;z-index:2147483647;width:360px;max-height:70vh;overflow:auto;background:#0a0a0f;color:#e0ddd8;font:13px "Courier New",monospace;border:1px solid #555;padding:12px;box-shadow:0 4px 20px #0008';
  document.body.appendChild(panel);
  const say = html => { panel.innerHTML = '<b style="letter-spacing:.15em">GEOGEBRA BACKUP</b><br><br>' + html; };
  const found = new Map();                                   // id → title
  const KEY = /^[A-Za-z0-9]{6,12}$/;
  const add = (id, title) => { if (id && KEY.test(id) && (!found.has(id) || found.get(id) === id)) found.set(id, String(title || id).trim().slice(0, 80) || id); };

  // 1a. Listen to the file list GeoGebra loads: any JSON object with a sharing key (or material id) and a title.
  const harvest = data => {
    const walk = o => {
      if (Array.isArray(o)) return o.forEach(walk);
      if (!o || typeof o !== 'object') return;
      const key = o.sharingKey || o.sharing_key || o.materialId || (typeof o.id === 'string' && KEY.test(o.id) ? o.id : null);
      const type = String(o.type || o.materialType || '').toLowerCase();
      if (key && (o.title || o.name) && !/book|folder|collection|user/.test(type)) add(key, o.title || o.name);
      Object.values(o).forEach(walk);
    };
    try { walk(typeof data === 'string' ? JSON.parse(data) : data); } catch (e) {}
  };
  const realFetch = window.fetch;
  window.fetch = async function (...args) {
    const r = await realFetch.apply(this, args);
    try { if ((r.headers.get('content-type') || '').includes('json')) r.clone().text().then(harvest); } catch (e) {}
    return r;
  };
  const realOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (...args) {
    this.addEventListener('load', () => { try { if (typeof this.responseText === 'string' && /^\s*[\[{]/.test(this.responseText)) harvest(this.responseText); } catch (e) {} });
    return realOpen.apply(this, args);
  };

  // 1b. Also read what is on screen: thumbnails carry the file's id (…/resource/<id>/…), and so do links.
  const LINK = /geogebra\.org\/(?:m|geometry|classic|graphing|calculator|3d|cas|notes|scientific|material\/show\/id)\/([A-Za-z0-9]{6,12})(?:[/?#]|$)/;
  const THUMB = /\/resource\/([A-Za-z0-9]{6,12})\//;
  const titleNear = el => {
    const card = el.closest('[class*="card" i], [class*="material" i], [class*="tile" i], li, article') || el.parentElement || el;
    return (card.getAttribute('title') || card.innerText || '').split('\n').map(s => s.trim()).find(Boolean);
  };
  const scan = () => {
    for (const a of document.querySelectorAll('a[href]')) { const m = a.href.match(LINK); if (m) add(m[1], a.getAttribute('title') || a.innerText || titleNear(a)); }
    for (const el of document.querySelectorAll('img, [style*="background"]')) {
      const src = el.currentSrc || el.src || el.style.backgroundImage || '';
      const m = src.match(THUMB); if (m) add(m[1], titleNear(el));
    }
  };
  // Scroll every scrolled list on the page (the Open screen loads more files as it is scrolled).
  const scrollLists = () => {
    for (const el of document.querySelectorAll('div, ul, section, main')) {
      if (el === panel || panel.contains(el)) continue;
      const s = getComputedStyle(el);
      if (/(auto|scroll)/.test(s.overflowY) && el.scrollHeight > el.clientHeight + 20) el.scrollTop = el.scrollHeight;
    }
  };

  let go = false;
  const show = () => say(`Open <b>Main menu → Open</b> so your files are listed. (Already open? Close it and open it again.)<br><br>` +
    `Files found: <b>${found.size}</b><br><span style="color:#888">The list is scrolled for you so they all load. Wait until the count stops going up.</span><br><br>` +
    `<button id="ggbGo" style="width:100%;padding:8px;background:#111;color:#4a9;border:1px solid #2a4a3a;font:inherit;cursor:pointer">CHOOSE FOLDER AND SAVE</button>`);
  show();
  let dir = undefined;
  panel.addEventListener('click', async e => {
    if (e.target.id !== 'ggbGo') return;
    if (!found.size) { alert('No files found yet. Open Main menu → Open first.'); return; }
    go = true;
    try { dir = await window.showDirectoryPicker({id: 'ggb-backup', mode: 'readwrite', startIn: 'desktop'}); }
    catch (err) { dir = null; }
  });
  while (dir === undefined) {
    scan(); if (!go) { scrollLists(); show(); }
    await sleep(1200);
  }
  window.fetch = realFetch; XMLHttpRequest.prototype.open = realOpen;
  const items = [...found].map(([id, title]) => ({id, title}));
  const write = async (name, data) => {
    if (dir) { const f = await dir.getFileHandle(name, {create: true}); const w = await f.createWritable(); await w.write(data); await w.close(); }
    else { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([data])); a.download = name; a.click(); await sleep(400); }
  };

  // 3. Open each one in this GeoGebra app, take the file the app holds, and save it under its title.
  const isGgb = bytes => bytes.length > 100 && bytes[0] === 0x50 && bytes[1] === 0x4b;      // a .ggb is a zip ("PK")
  const generic = t => !t || /^(geogebra|untitled)?$/i.test(t.trim()) || KEY.test(t.trim());
  const clean = t => String(t || '').replace(/\s*[-–|]\s*GeoGebra.*$/i, '').trim();

  // The title, from the file's own page on geogebra.org (works for your private files, as you are signed in).
  async function titleOf(id) {
    try {
      const r = await realFetch('/m/' + id, {credentials: 'include'});
      if (!r.ok) return '';
      const doc = new DOMParser().parseFromString(await r.text(), 'text/html');
      const t = clean(doc.querySelector('meta[property="og:title"]')?.content || doc.querySelector('title')?.textContent);
      return generic(t) ? '' : t;
    } catch (e) { return ''; }
  }

  // Open the file in the app on this page, wait until it has loaded, and return it as bytes.
  const api = window.ggbApplet;
  async function viaApp(id) {
    if (!api || typeof api.openMaterial !== 'function') return null;
    api.newConstruction();
    await sleep(300);
    const empty = api.getBase64();
    const before = document.title;
    api.openMaterial(id);
    let last = '', same = 0;
    for (let i = 0; i < 80; i++) {                                    // up to 40 seconds
      await sleep(500);
      const now = api.getBase64();
      if (now && now !== empty) { same = now === last ? same + 1 : 0; last = now; if (same >= 2) break; }
    }
    if (!last) return null;
    const b = Uint8Array.from(atob(last), c => c.charCodeAt(0));
    const t = clean(document.title);
    return isGgb(b) ? {bytes: b, title: document.title !== before && !generic(t) ? t : ''} : null;
  }
  async function viaDownload(id) {
    const r = await realFetch('/material/download/format/file/id/' + id, {credentials: 'include'});
    if (!r.ok) return null;
    const b = new Uint8Array(await r.arrayBuffer());
    return isGgb(b) ? {bytes: b, title: ''} : null;
  }

  const safe = s => s.replace(/[\\/:*?"<>|\x00-\x1f]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 80) || 'untitled';
  const used = new Set();
  const nameFor = title => { let n = safe(title), k = 2; while (used.has(n.toLowerCase())) n = safe(title) + ' (' + k++ + ')'; used.add(n.toLowerCase()); return n + '.ggb'; };
  if (!api || typeof api.openMaterial !== 'function') say('This page has no GeoGebra app to open the files in, so they will be downloaded directly instead. For the best result, run this in a GeoGebra app tab (geogebra.org/geometry).');
  const rows = [['id', 'title', 'file', 'result']];
  let ok = 0;
  for (const [i, it] of items.entries()) {
    say(`Opening ${i + 1} of ${items.length}…<br><br>${ok} saved so far.<br><br><span style="color:#888">Leave this tab open and in front until it finishes.</span>`);
    let got = null, how = '';
    try { got = await viaApp(it.id); how = 'opened in GeoGebra'; } catch (e) { how = 'app: ' + e.message; }
    if (!got) { try { got = await viaDownload(it.id); how = 'downloaded'; } catch (e) { how = 'failed: ' + e.message; } }
    let title = generic(it.title) ? '' : it.title;
    title = title || (await titleOf(it.id)) || (got && got.title) || it.id;
    if (got) { const file = nameFor(title); await write(file, got.bytes); ok++; rows.push([it.id, title, file, 'saved (' + how + ')']); }
    else rows.push([it.id, title, '', 'not saved: ' + (how.startsWith('failed') ? how : 'GeoGebra did not open it (a book or an activity?)')]);
    say(`Saved ${i + 1} of ${items.length}: ${title}<br><br>${ok} saved so far.`);
    await sleep(400);                                                  // be gentle with GeoGebra's servers
  }
  if (api) try { api.newConstruction(); } catch (e) {}
  const csv = rows.map(r => r.map(x => '"' + String(x).replace(/"/g, '""') + '"').join(',')).join('\r\n');
  await write('list.csv', new TextEncoder().encode(csv));
  say(`Done: <b>${ok}</b> of ${items.length} saved${dir ? ' in the folder you chose' : ' to your Downloads folder'}, each under its title.<br><br>` +
      `list.csv lists every file with its id, and says why any did not save.<br><br><a href="#" onclick="this.closest('div').remove();return false" style="color:#aaa">Close</a>`);
})();
