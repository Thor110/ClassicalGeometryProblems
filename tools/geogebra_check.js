// Open every GeoGebra file in real GeoGebra and compare each point with tools/verify.py's rebuild.
//
//   npm install playwright && npx playwright install chromium     (once)
//   node tools/geogebra_check.js                                  (from the repository root)
//
// GeoGebra is loaded from geogebra.org. For each .ggb file in Approximations/, every point GeoGebra
// computes is written to tools/geogebra_points.json; then tools/verify.py --compare-geogebra
// compares them with its own rebuild and reports the largest difference.
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
function ggbFiles(dir) {
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap(d => {
    const p = path.join(dir, d.name);
    return d.isDirectory() ? ggbFiles(p) : p.endsWith('.ggb') ? [p] : [];
  });
}
(async () => {
  const files = ggbFiles('Approximations');
  const browser = await chromium.launch(); const results = {};
  for (const f of files) {
    const page = await browser.newPage();
    await page.setContent('<div id="ggb"></div><script src="https://geogebra.org/apps/deployggb.js"></script>');
    await page.waitForFunction(() => window.GGBApplet, null, {timeout: 60000});
    const b64 = fs.readFileSync(f).toString('base64');
    const loaded = await page.evaluate(b64 => new Promise(res => {
      const app = new GGBApplet({appName: 'classic', width: 1200, height: 800, ggbBase64: b64,
        appletOnLoad: api => { window.api = api; res(true); }}, true);
      app.setHTML5Codebase('https://geogebra.org/apps/latest/web3d/');
      app.inject('ggb'); setTimeout(() => res(false), 60000);
    }), b64);
    results[f] = loaded ? await page.evaluate(() => {
      const o = {};
      for (const n of api.getAllObjectNames())
        if (api.getObjectType(n) === 'point') o[n] = api.isDefined(n) ? [api.getXcoord(n), api.getYcoord(n)] : null;
      return o;
    }) : null;
    await page.close(); process.stdout.write(loaded ? '.' : 'x');
  }
  fs.writeFileSync('tools/geogebra_points.json', JSON.stringify(results));
  console.log('\nopened', Object.values(results).filter(Boolean).length, 'of', files.length, 'files in GeoGebra');
  await browser.close();
})();
