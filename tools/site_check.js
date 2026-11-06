// Checks the whole website in a real browser, the way a visitor would see it.
//
//   npm install playwright@1.63.0 && npx playwright install chromium   (once)
//   node tools/site_check.js
//
// For every page: no script errors, nothing wider than a phone screen (390 px), every image described,
// every link to a file in the repository pointing at a file that exists, and every link to a place on
// a page (#...) landing on something there (the charts' own #problem/entry links included). Then every
// chart tab is opened and an entry in it selected. Exits with an error if anything fails, so the
// GitHub workflow (.github/workflows/site-check.yml) can stop a change that breaks the site.
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');

(async () => {
  const root = path.resolve(__dirname, '..');
  const pages = ['index.html', ...fs.readdirSync(path.join(root, 'pages')).filter(f => f.endsWith('.html')).map(f => 'pages/' + f)];
  const browser = await chromium.launch();
  const problems = [];
  const fail = (where, what) => problems.push(where + ': ' + what);
  const anchorCache = {};

  async function anchorExists(file, hash) {
    const key = file + '#' + hash;
    if (key in anchorCache) return anchorCache[key];
    const p = await browser.newPage();
    await p.goto('file://' + file + '#' + hash); await p.waitForTimeout(250);
    const ok = await p.evaluate(h => {
      if (document.getElementById(h)) return true;
      if (typeof CHARTS !== 'undefined') {                                     // charts.html#rtc or #rtc/entry
        const [pid, eid] = h.split('/'), c = CHARTS.find(x => x.id === pid);
        return !!c && (!eid || c.entries.some(e => e.id === eid));
      }
      return false;
    }, decodeURIComponent(hash));
    await p.close();
    return (anchorCache[key] = ok);
  }

  for (const rel of pages) {
    for (const [w, h, view] of [[1280, 900, 'desktop'], [390, 844, 'phone']]) {
      const ctx = await browser.newContext({viewport: {width: w, height: h}});
      const p = await ctx.newPage(); const errors = [];
      p.on('pageerror', e => errors.push(e.message));
      p.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
      await p.goto('file://' + path.join(root, rel)); await p.waitForTimeout(400);
      errors.forEach(e => fail(rel + ' (' + view + ')', 'script error: ' + e));
      const info = await p.evaluate(() => ({
        overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        noAlt: [...document.images].filter(i => !i.hasAttribute('alt')).map(i => i.getAttribute('src')),
        links: [...document.querySelectorAll('a[href]')].map(a => a.getAttribute('href')),
      }));
      if (view === 'phone' && info.overflow > 1) fail(rel, 'wider than a phone screen by ' + info.overflow + ' px');
      if (view === 'desktop') {
        info.noAlt.forEach(s => fail(rel, 'image without a description: ' + s));
        for (const href of new Set(info.links)) {
          if (/^(https?:|mailto:|javascript:)/.test(href) || href === '#') continue;
          const [file, hash] = href.split('#');
          const target = file ? path.resolve(path.dirname(path.join(root, rel)), decodeURIComponent(file)) : path.join(root, rel);
          if (!fs.existsSync(target)) { fail(rel, 'link to a missing file: ' + href); continue; }
          if (hash && target.endsWith('.html') && !(await anchorExists(target, hash))) fail(rel, 'link to a place that is not there: ' + href);
        }
      }
      await ctx.close();
    }
  }

  // Every chart tab, and an entry selected in each.
  const p = await browser.newPage({viewport: {width: 1280, height: 900}}); const errors = [];
  p.on('pageerror', e => errors.push(e.message));
  await p.goto('file://' + path.join(root, 'pages/charts.html')); await p.waitForTimeout(400);
  const tabs = await p.evaluate(() => CHARTS.map(c => c.id));
  for (const id of tabs) {
    await p.goto('file://' + path.join(root, 'pages/charts.html#' + id)); await p.waitForTimeout(300);
    const row = await p.$('#table tr[data-key]');
    if (!row) { fail('charts.html#' + id, 'no rows'); continue; }
    await row.click(); await p.waitForTimeout(150);
    if (!(await p.evaluate(() => !!highlighted))) fail('charts.html#' + id, 'selecting a row did nothing');
  }
  errors.forEach(e => fail('charts.html', 'script error: ' + e));
  await browser.close();

  console.log('%d pages checked at desktop and phone widths; %d chart tabs opened.', pages.length, tabs.length);
  if (problems.length) { console.log(problems.length + ' problem(s):\n  ' + problems.join('\n  ')); process.exit(1); }
  console.log('No problems found.');
})();
