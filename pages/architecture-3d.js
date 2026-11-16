// The metals of the floor's inlay, one for each problem's steps (Attempt #3 on); gold is kept for the results.
const METALS = {bronze: '#c08a48', silver: '#cfd4dc', copper: '#d8743e', steel: '#74a3dc', patina: '#52b496'};
const metal = (m, a) => { const h = METALS[m]; return 'rgba(' + [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16)).join(',') + ',' + a + ')'; };
// A small 3D view of a plan's floor and solids, drawn on a 2D canvas (no library): drag to turn, scroll or pinch to zoom.
function makeView3D(cv, P) {
  const g = cv.getContext('2d'), S = P.solids.slice();
  const ORDER = {ring: 0, cone: 6, sector: 0, kerb: 0, rail: 1, column: 2, box: 3, frame: 4, rod: 5};
  S.sort((a, b) => ORDER[a.k] - ORDER[b.k]);
  const COL = {stone: ['#8f8b80', '#c9c5bd'], glass: ['rgba(150,190,220,0.16)', '#bfe0f5'], bronze: [null, '#c08a48'], gold: ['#c49820', '#f0c860'], silver: [null, '#e8e4dc'], goldglass: ['rgba(212,168,56,0.16)', '#f0c860'], goldfloor: ['rgba(212,168,56,0.45)', '#f0c860'], conef: [null, 'rgba(240,200,96,0.28)'], sector: ['rgba(150,120,210,0.35)', null]};
  const M = P.mesh, OUTER = Math.max(0, ...S.filter(s => s.k === 'frame' || s.k === 'box').map(s => s.s));
  let hang = false;
  let yaw = P.yaw || -1.95, pitch = P.pitch || 0.55, dist = P.dist || 30, tgt = P.tgt || [0, 1, 1.8], t = 1, start = null, raf = null, on = false;
  const [x0, y0, x1, y1] = P.view;
  const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]], dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const crs = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const nrm = a => { const l = Math.hypot(...a); return [a[0] / l, a[1] / l, a[2] / l]; };
  let E, F, Rt, Up, FL;
  function camera() {
    const cp = Math.cos(pitch); E = [tgt[0] + dist * cp * Math.cos(yaw), tgt[1] + dist * cp * Math.sin(yaw), tgt[2] + dist * Math.sin(pitch)];
    F = nrm(sub(tgt, E)); Rt = nrm(crs(F, [0, 0, 1])); Up = crs(Rt, F); FL = cv.height * 1.15;
  }
  const pr = p => { const d = sub(p, E), z = dot(d, F); return z < 0.3 ? null : [cv.width / 2 + FL * dot(d, Rt) / z, cv.height / 2 - FL * dot(d, Up) / z, z]; };
  const ease = x => x <= 0 ? 0 : x >= 1 ? 1 : 1 - Math.pow(1 - x, 3);
  function path(pts, close) {     // a projected polyline, broken where it passes behind the eye
    let pen = false; g.beginPath();
    for (const p of pts) { const q = pr(p); if (!q) { pen = false; continue; } pen ? g.lineTo(q[0], q[1]) : g.moveTo(q[0], q[1]); pen = true; }
    if (close) g.closePath();
  }
  function clipLine(p0, d) {      // an infinite floor line, cut to the site
    let lo = -1e9, hi = 1e9;
    for (const [o, dd, a, b] of [[p0[0], d[0], x0, x1], [p0[1], d[1], y0, y1]]) {
      if (Math.abs(dd) < 1e-12) { if (o < a || o > b) return null; continue; }
      let t1 = (a - o) / dd, t2 = (b - o) / dd; if (t1 > t2) [t1, t2] = [t2, t1]; lo = Math.max(lo, t1); hi = Math.min(hi, t2);
    }
    return lo < hi ? [[p0[0] + d[0] * lo, p0[1] + d[1] * lo, 0], [p0[0] + d[0] * hi, p0[1] + d[1] * hi, 0]] : null;
  }
  function floor(x, col, w) {
    g.strokeStyle = col; g.lineWidth = w;
    const seg = (a, b) => { const n = 24, pts = []; for (let k = 0; k <= n; k++) pts.push([a[0] + (b[0] - a[0]) * k / n, a[1] + (b[1] - a[1]) * k / n, 0]); return pts; };
    if (x.k === 'c') { const pts = []; for (let k = 0; k <= 96; k++) { const a = 2 * Math.PI * k / 96; pts.push([x.c[0] + x.r * Math.cos(a), x.c[1] + x.r * Math.sin(a), 0]); } path(pts); g.stroke(); }
    else if (x.k === 'l') { const [a, b, c] = x.e, p0 = [-a * c, -b * c], L = clipLine(p0, [-b, a]); if (L) { path(seg(L[0], L[1])); g.stroke(); } }
    else if (x.k === 's' || x.k === 'r') { path(seg(x.a, x.b)); g.stroke(); }
    else if (x.k === 'g') { path(x.pts.map(p => [p[0], p[1], 0]).concat([[x.pts[0][0], x.pts[0][1], 0]])); g.stroke(); }
    else if (x.k === 'a') { const a0 = Math.atan2(x.a[1] - x.c[1], x.a[0] - x.c[0]); let a1 = Math.atan2(x.b[1] - x.c[1], x.b[0] - x.c[0]); if (a1 < a0) a1 += 2 * Math.PI; const pts = []; for (let k = 0; k <= 48; k++) { const a = a0 + (a1 - a0) * k / 48; pts.push([x.c[0] + x.r * Math.cos(a), x.c[1] + x.r * Math.sin(a), 0]); } path(pts); g.stroke(); }
  }
  function prims(f) {             // the solids as faces, edges and labels, each with its depth
    const out = [], face = (pts, fill, edge) => out.push({pts, fill, edge}), edge = (a, b, col, w) => out.push({pts: [a, b], edge: col, w, line: 1});
    if (M) M.objects.forEach((o, i) => {     // a mesh from a modelling program, each object rising in turn
      const k = ease(f(i)); if (k <= 0) return; const [fill, line] = COL[o.col] || COL.stone, V = j => [M.v[j][0], M.v[j][1], M.v[j][2] * k];
      for (const fc of o.f) face(fc.map(V), fill, line);
      for (const l of o.l) edge(V(l[0]), V(l[1]), line, 2);
    });
    S.forEach((s, i) => {
      const k = ease(f(i)); if (k <= 0) return; const [fill, line] = COL[s.col];
      if (s.k === 'ring') { const n = 96; for (let j = 0; j < n; j++) { const a = 2 * Math.PI * j / n, b = 2 * Math.PI * (j + 1) / n, r = s.r * k; edge([r * Math.cos(a), r * Math.sin(a), 0.03], [r * Math.cos(b), r * Math.sin(b), 0.03], line, 2); } return; }
      if (s.k === 'cone') { for (let j = 0; j < 24; j++) { const a = 2 * Math.PI * j / 24; edge([0, 0, s.apex * k], [s.foot * Math.cos(a), s.foot * Math.sin(a), 0], line, 1); } return; }
      if (s.k === 'sector') { const pts = [[0, 0, 0.02]]; for (let j = 0; j <= 24; j++) { const a = s.a0 + (s.a1 - s.a0) * j / 24; pts.push([s.r * k * Math.cos(a), s.r * k * Math.sin(a), 0.02]); } face(pts, fill, null); return; }
      if (s.k === 'box' || s.k === 'frame' || s.k === 'kerb') {
        // standing on the floor, or hung with the outer frame's centre (Edward's mockup: the smaller cube suspended inside the larger)
        const z0 = hang && s.k !== 'kerb' ? (OUTER - s.s) / 2 : 0;
        const h = s.h * k, a = s.s / 2, c = [[-a, -a], [a, -a], [a, a], [-a, a]], zt = z0 + h;
        if (z0 > 0 && k >= 1) { const b = OUTER / 2; for (const p of c) edge([p[0], p[1], zt], [Math.sign(p[0]) * b, Math.sign(p[1]) * b, OUTER], '#8a8678', 1); }
        if (s.k === 'frame') { for (let j = 0; j < 4; j++) { const p = c[j], q = c[(j + 1) % 4]; edge([p[0], p[1], z0], [p[0], p[1], zt], line, 3); edge([p[0], p[1], zt], [q[0], q[1], zt], line, 3); edge([p[0], p[1], z0], [q[0], q[1], z0], line, 3); } return; }
        for (let j = 0; j < 4; j++) { const p = c[j], q = c[(j + 1) % 4]; face([[p[0], p[1], z0], [q[0], q[1], z0], [q[0], q[1], zt], [p[0], p[1], zt]], fill, line); }
        if (s.k === 'box') { face(c.map(p => [p[0], p[1], zt]), fill, line); if (z0 > 0) face(c.map(p => [p[0], p[1], z0]), fill, line); }
      } else if (s.k === 'column') {
        const h = s.h * k, n = 8, ring = z => Array.from({length: n}, (_, j) => [s.c[0] + s.r * Math.cos(2 * Math.PI * j / n), s.c[1] + s.r * Math.sin(2 * Math.PI * j / n), z]);
        const lo = ring(0), hi = ring(h);
        for (let j = 0; j < n; j++) face([lo[j], lo[(j + 1) % n], hi[(j + 1) % n], hi[j]], fill, null);
        face(hi, line, null);
        if (s.hour && k >= 1) out.push({pts: [[s.c[0], s.c[1], h + 0.5]], text: String(s.hour)});
      } else if (s.k === 'rail') edge([s.a[0], s.a[1], s.h], [s.a[0] + (s.b[0] - s.a[0]) * k, s.a[1] + (s.b[1] - s.a[1]) * k, s.h], line, 5);
      else if (s.k === 'rod') edge(s.a, [s.a[0] + (s.b[0] - s.a[0]) * k, s.a[1] + (s.b[1] - s.a[1]) * k, s.a[2] + (s.b[2] - s.a[2]) * k], line, 4);
    });
    for (const p of out) { const q = p.pts.map(pr); p.q = q; p.d = q.some(x => !x) ? -1 : q.reduce((s, x) => s + x[2], 0) / q.length; }
    return out.filter(p => p.d > 0).sort((a, b) => b.d - a.d);
  }
  function draw() {
    camera(); g.fillStyle = '#0d0d14'; g.fillRect(0, 0, cv.width, cv.height);
    path([[x0, y0, 0], [x1, y0, 0], [x1, y1, 0], [x0, y1, 0]], true); g.fillStyle = '#16161f'; g.fill(); g.strokeStyle = '#5a5a66'; g.lineWidth = 1.5; g.stroke();
    for (const st of P.steps) for (const x of st.s) if (!x.res) floor(x, x.m ? metal(x.m, 0.7) : 'rgba(110,110,130,0.55)', x.m ? 1.4 : 1);
    for (const st of P.steps) for (const x of st.s) if (x.res) floor(x, '#d4a838', 2.5);
    const N = M ? M.objects.length : S.length, f = i => (t * 1.6 - 0.6 * i / N) / 0.6;
    g.lineJoin = 'round';
    for (const p of prims(f)) {
      if (p.text) { g.fillStyle = '#d8d4cc'; g.font = '22px Georgia, serif'; g.textAlign = 'center'; g.fillText(p.text, p.q[0][0], p.q[0][1]); continue; }
      g.beginPath(); p.q.forEach((q, j) => j ? g.lineTo(q[0], q[1]) : g.moveTo(q[0], q[1]));
      if (p.line) { g.strokeStyle = p.edge; g.lineWidth = p.w; g.stroke(); continue; }
      g.closePath(); if (p.fill) { g.fillStyle = p.fill; g.fill(); } if (p.edge) { g.strokeStyle = p.edge; g.lineWidth = 1.5; g.stroke(); }
    }
    const n0 = pr([0, y1 - 1, 0]), n1 = pr([0, y1 + 1.5, 0]);
    if (n0 && n1) { g.fillStyle = '#c9c5bd'; g.font = 'bold 26px Georgia, serif'; g.textAlign = 'center'; g.fillText('N', n1[0], n1[1]); }
  }
  function frame(ts) { if (!on) return; if (start === null) start = ts; t = Math.min(1, (ts - start) / 3500); draw(); if (t < 1) raf = requestAnimationFrame(frame); else raf = null; }
  const ptrs = new Map(); let pinch = null;
  cv.addEventListener('pointerdown', e => { if (!on) return; cv.setPointerCapture(e.pointerId); ptrs.set(e.pointerId, [e.clientX, e.clientY]); });
  cv.addEventListener('pointermove', e => {
    if (!on || !ptrs.has(e.pointerId)) return; const old = ptrs.get(e.pointerId); ptrs.set(e.pointerId, [e.clientX, e.clientY]);
    if (ptrs.size === 1) { yaw -= (e.clientX - old[0]) * 0.008; pitch = Math.max(0.08, Math.min(1.5, pitch + (e.clientY - old[1]) * 0.006)); }
    else { const [a, b] = [...ptrs.values()], d = Math.hypot(a[0] - b[0], a[1] - b[1]); if (pinch) dist = Math.max(8, Math.min(140, dist * pinch / d)); pinch = d; }
    if (!raf) draw();
  });
  const up = e => { ptrs.delete(e.pointerId); pinch = null; };
  cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
  cv.addEventListener('wheel', e => { if (!on) return; e.preventDefault(); dist = Math.max(8, Math.min(140, dist * Math.exp(e.deltaY * 0.001))); if (!raf) draw(); }, {passive: false});
  return {
    suspend(b) { hang = b; if (on && !raf) draw(); },
    show() { if (on) return; on = true; cv.style.touchAction = 'none'; cv.style.cursor = 'grab'; start = null; t = 0; raf = requestAnimationFrame(frame); },
    hide() { on = false; cv.style.touchAction = ''; cv.style.cursor = ''; if (raf) cancelAnimationFrame(raf); raf = null; },
  };
}
