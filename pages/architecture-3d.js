// The metals of the floor's inlay, one for each problem's steps (Attempt #3 on); gold is kept for the results.
const METALS = {digital: '#7fe8ff', bronze: '#c08a48', silver: '#cfd4dc', copper: '#d8743e', steel: '#74a3dc', patina: '#52b496'};
const metal = (m, a) => { const h = METALS[m]; return 'rgba(' + [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16)).join(',') + ',' + a + ')'; };
// A small 3D view of a plan's floor and solids, drawn on a 2D canvas (no library): drag to turn, scroll or pinch to zoom.
// It can also be walked at eye level, 1.6 m above the floor: keys or the on-screen pad to move, drag to look round.
function makeView3D(cv, P) {
  const g = cv.getContext('2d'), S = P.solids.slice();
  const ORDER = {ring: 0, cone: 6, sector: 0, kerb: 0, rail: 1, column: 2, box: 3, frame: 4, rod: 5};
  S.sort((a, b) => ORDER[a.k] - ORDER[b.k]);
  const COL = {stone: ['#8f8b80', '#c9c5bd'], glass: ['rgba(150,190,220,0.16)', '#bfe0f5'], bronze: [null, '#c08a48'], gold: ['#c49820', '#f0c860'], silver: [null, '#e8e4dc'], goldglass: ['rgba(212,168,56,0.16)', '#f0c860'], goldfloor: ['rgba(212,168,56,0.45)', '#f0c860'], digital: ['#5fd0ea', '#bff6ff'], conef: [null, 'rgba(240,200,96,0.28)'], sector: ['rgba(150,120,210,0.35)', null]};
  const M = P.mesh, OUTER = Math.max(0, ...S.filter(s => s.k === 'frame' || s.k === 'box').map(s => s.s));
  let hang = false, gridU = 0;
  // the materials view (Attempt #9 on): stone, metal inlay and glass, lit by the sun at an hour and date, or at night
  const LOOK = P.look === 'materials', LAT = (P.lat || 50.9) * Math.PI / 180;
  let night = false, SUN = [0, 0, 1];
  function setSun(hour, decl) {
    const H = (hour - 12) * 15 * Math.PI / 180, d = decl * Math.PI / 180;
    SUN = [-Math.cos(d) * Math.sin(H), Math.cos(LAT) * Math.sin(d) - Math.sin(LAT) * Math.cos(d) * Math.cos(H), Math.sin(LAT) * Math.sin(d) + Math.cos(LAT) * Math.cos(d) * Math.cos(H)];
  }
  setSun(12, 0);
  const rgb = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16)), mix = (h, k) => 'rgb(' + rgb(h).map(v => Math.round(Math.min(255, v * k))).join(',') + ')';
  const lit = (h, n) => night ? mix(h, 0.32 + 0.25 * Math.max(0, n[2])) : mix(h, 0.62 + 0.45 * Math.max(0, n[0] * SUN[0] + n[1] * SUN[1] + n[2] * SUN[2]));
  let yaw = P.yaw || -1.95, pitch = P.pitch || 0.55, dist = P.dist || 30, tgt = P.tgt || [0, 1, 1.8], t = 1, start = null, raf = null, on = false;
  const [x0, y0, x1, y1] = P.view;
  const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]], dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const crs = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const nrm = a => { const l = Math.hypot(...a); return [a[0] / l, a[1] / l, a[2] / l]; };
  let E, F, Rt, Up, FL;
  // walking: the eye's place on the floor, its heading and its tilt, in file units (P.radius units to P.metres metres)
  const MU = (P.radius || 4) / (P.metres || 3), EYE = 1.6 * MU, BODY = 0.3 * MU, SPEED = 1.4 * MU;
  let walking = false, wx = 0, wy = y0 - 2 * MU, wyaw = Math.PI / 2, wpitch = -0.05;
  function camera() {
    if (walking) {
      E = [wx, wy, EYE]; const cp = Math.cos(wpitch); F = [cp * Math.cos(wyaw), cp * Math.sin(wyaw), Math.sin(wpitch)];
      Rt = nrm(crs(F, [0, 0, 1])); Up = crs(Rt, F); FL = cv.width * 0.5; return;     // about 90 degrees across
    }
    const cp = Math.cos(pitch); E = [tgt[0] + dist * cp * Math.cos(yaw), tgt[1] + dist * cp * Math.sin(yaw), tgt[2] + dist * Math.sin(pitch)];
    F = nrm(sub(tgt, E)); Rt = nrm(crs(F, [0, 0, 1])); Up = crs(Rt, F); FL = cv.height * 1.15;
  }
  // points in the eye's frame, cut at a near plane so that things beside and behind the eye are drawn correctly
  const NEAR = 0.05;
  const cam = p => { const d = sub(p, E); return [dot(d, Rt), dot(d, Up), dot(d, F)]; };
  const proj = c => [cv.width / 2 + FL * c[0] / c[2], cv.height / 2 - FL * c[1] / c[2], c[2]];
  const cut = (a, b) => { const t_ = (NEAR - a[2]) / (b[2] - a[2]); return [a[0] + (b[0] - a[0]) * t_, a[1] + (b[1] - a[1]) * t_, NEAR]; };
  function clipPoly(cs) {
    const out = [];
    for (let i = 0; i < cs.length; i++) {
      const a = cs[i], b = cs[(i + 1) % cs.length], ina = a[2] >= NEAR, inb = b[2] >= NEAR;
      if (ina) out.push(a); if (ina !== inb) out.push(cut(a, b));
    }
    return out;
  }
  function clipSeg(a, b) { const ina = a[2] >= NEAR, inb = b[2] >= NEAR; if (!ina && !inb) return null; return [ina ? a : cut(a, b), inb ? b : cut(a, b)]; }
  const pr = p => { const c = cam(p); return c[2] < NEAR ? null : proj(c); };
  const ease = x => x <= 0 ? 0 : x >= 1 ? 1 : 1 - Math.pow(1 - x, 3);
  function path(pts, close) {     // a projected polyline, cut where it passes behind the eye
    g.beginPath(); const L = close ? pts.concat([pts[0]]) : pts; let prev = null;
    for (let i = 0; i + 1 < L.length; i++) {
      const sg = clipSeg(cam(L[i]), cam(L[i + 1])); if (!sg) { prev = null; continue; }
      const a = proj(sg[0]), b = proj(sg[1]);
      if (!prev || Math.abs(prev[0] - a[0]) > 0.5 || Math.abs(prev[1] - a[1]) > 0.5) g.moveTo(a[0], a[1]);
      g.lineTo(b[0], b[1]); prev = b;
    }
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
      if (s.k === 'cone') { if (LOOK) return; for (let j = 0; j < 24; j++) { const a = 2 * Math.PI * j / 24; edge([0, 0, s.apex * k], [s.foot * Math.cos(a), s.foot * Math.sin(a), 0], line, 1); } return; }
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
        if (LOOK) {
          const base = s.col === 'digital' ? '#8a9098' : s.col === 'bronze' ? '#a8763a' : '#e4dccb';
          for (let j = 0; j < n; j++) { const a = 2 * Math.PI * (j + 0.5) / n; face([lo[j], lo[(j + 1) % n], hi[(j + 1) % n], hi[j]], lit(base, [Math.cos(a), Math.sin(a), 0]), null); }
          face(hi, s.col === 'digital' ? (night ? '#7fe8ff' : '#5fb8cc') : s.col === 'stone' && s.h > 1 ? lit('#b07a3c', [0, 0, 1]) : lit(base, [0, 0, 1]), null);
        } else {
        for (let j = 0; j < n; j++) face([lo[j], lo[(j + 1) % n], hi[(j + 1) % n], hi[j]], fill, null);
        face(hi, line, null);
        }
        if (s.hour && k >= 1) out.push({pts: [[s.c[0], s.c[1], h + 0.5]], text: String(s.hour)});
      } else if (s.k === 'rail') edge([s.a[0], s.a[1], s.h], [s.a[0] + (s.b[0] - s.a[0]) * k, s.a[1] + (s.b[1] - s.a[1]) * k, s.h], line, 5);
      else if (s.k === 'rod') edge(s.a, [s.a[0] + (s.b[0] - s.a[0]) * k, s.a[1] + (s.b[1] - s.a[1]) * k, s.a[2] + (s.b[2] - s.a[2]) * k], line, 4);
    });
    for (const p of out) {
      let c = p.pts.map(cam);
      if (p.text) c = c[0][2] >= NEAR ? c : [];
      else if (p.line) c = clipSeg(c[0], c[1]) || [];
      else c = clipPoly(c);
      if (!c.length || (!p.text && !p.line && c.length < 3)) { p.d = -1; continue; }
      p.q = c.map(proj); p.d = c.reduce((s, x) => s + x[2], 0) / c.length;
    }
    return out.filter(p => p.d > 0).sort((a, b) => b.d - a.d);
  }
  function draw() {
    camera();
    if (LOOK) { const sky = g.createLinearGradient(0, 0, 0, cv.height); if (night) { sky.addColorStop(0, '#04050b'); sky.addColorStop(1, '#141626'); } else { sky.addColorStop(0, '#6f9cc8'); sky.addColorStop(1, '#dce8f0'); } g.fillStyle = sky; }
    else g.fillStyle = '#0d0d14';
    g.fillRect(0, 0, cv.width, cv.height);
    { const c = clipPoly([[x0, y0, 0], [x1, y0, 0], [x1, y1, 0], [x0, y1, 0]].map(cam)); if (c.length > 2) { g.beginPath(); c.map(proj).forEach((q, j) => j ? g.lineTo(q[0], q[1]) : g.moveTo(q[0], q[1])); g.closePath(); g.fillStyle = LOOK ? (night ? '#26241f' : '#d6cdb9') : '#16161f'; g.fill(); g.strokeStyle = '#5a5a66'; g.lineWidth = 1.5; g.stroke(); } }
    if (gridU) {          // the metre grid on the ground, from the site's north-west corner
      for (let k = 0; x0 + k * gridU <= x1 + 1e-9; k++) { const X = x0 + k * gridU, pts = []; for (let j = 0; j <= 24; j++) pts.push([X, y1 - (y1 - y0) * j / 24, 0]); g.strokeStyle = k % 10 ? 'rgba(220,220,235,0.12)' : 'rgba(220,220,235,0.32)'; g.lineWidth = 1; path(pts); g.stroke(); }
      for (let k = 0; y1 - k * gridU >= y0 - 1e-9; k++) { const Y = y1 - k * gridU, pts = []; for (let j = 0; j <= 24; j++) pts.push([x0 + (x1 - x0) * j / 24, Y, 0]); g.strokeStyle = k % 10 ? 'rgba(220,220,235,0.12)' : 'rgba(220,220,235,0.32)'; g.lineWidth = 1; path(pts); g.stroke(); }
    }
    for (const st of P.steps) for (const x of st.s) if (!x.res) floor(x, x.m ? metal(x.m, LOOK ? (night ? 0.35 : 0.95) : 0.7) : 'rgba(110,110,130,0.55)', x.m ? (LOOK ? 1.8 : 1.4) : 1);
    if (LOOK && night) { g.shadowColor = '#ffcc55'; g.shadowBlur = 14; }
    for (const st of P.steps) for (const x of st.s) if (x.res) floor(x, LOOK ? (night ? '#ffd25a' : '#b8860b') : '#d4a838', LOOK ? 3.5 : 2.5);
    g.shadowBlur = 0;
    if (LOOK && !night && SUN[2] > 0.03) {   // the sun's shadows on the floor: every pillar, post and stone, the cubes and the gnomon
      const k_ = Math.hypot(SUN[0], SUN[1]) / SUN[2], dx = -SUN[0] / Math.hypot(SUN[0], SUN[1]), dy = -SUN[1] / Math.hypot(SUN[0], SUN[1]);
      const inRect = poly => {          // shadows stop at the edge of the site
        let P_ = poly;
        for (const [ax, lim, sg] of [[0, x0, 1], [0, x1, -1], [1, y0, 1], [1, y1, -1]]) {
          const o = []; for (let i = 0; i < P_.length; i++) { const a = P_[i], b = P_[(i + 1) % P_.length], ia = sg * (a[ax] - lim) >= 0, ib = sg * (b[ax] - lim) >= 0;
            if (ia) o.push(a); if (ia !== ib) { const t_ = (lim - a[ax]) / (b[ax] - a[ax]); o.push([a[0] + (b[0] - a[0]) * t_, a[1] + (b[1] - a[1]) * t_, a[2]]); } }
          P_ = o; if (!P_.length) break;
        }
        return P_;
      };
      const seg = (a, b) => { const q = inRect([a, b, b]); if (q.length >= 2) { path([q[0], q[q.length - 1]]); g.stroke(); } };
      const onFloor = (p, z) => [p[0] - SUN[0] / SUN[2] * z, p[1] - SUN[1] / SUN[2] * z, 0.01];
      g.fillStyle = 'rgba(60,45,30,0.32)'; g.strokeStyle = 'rgba(60,45,30,0.4)';
      for (const s of S) {
        if (s.k === 'column') { const L = s.h * k_, r = s.r, px = -dy * r, py = dx * r, c = s.c; const c4 = clipPoly(inRect([[c[0] + px, c[1] + py, 0.01], [c[0] - px, c[1] - py, 0.01], [c[0] - px + dx * L, c[1] - py + dy * L, 0.01], [c[0] + px + dx * L, c[1] + py + dy * L, 0.01]]).map(cam)); if (c4.length > 2) { g.beginPath(); c4.map(proj).forEach((q, j) => j ? g.lineTo(q[0], q[1]) : g.moveTo(q[0], q[1])); g.closePath(); g.fill(); } }
        else if (s.k === 'rod') { g.lineWidth = 4; seg(onFloor(s.a, s.a[2]), onFloor(s.b, s.b[2])); }
        else if (s.k === 'box' || s.k === 'frame') { const a = s.s / 2, z0 = hang ? (OUTER - s.s) / 2 : 0, z1 = z0 + s.h, c = [[-a, -a], [a, -a], [a, a], [-a, a]];
          g.lineWidth = s.k === 'frame' ? 3 : 1.5;
          for (let j = 0; j < 4; j++) { const p = c[j], q = c[(j + 1) % 4]; seg(onFloor(p, z1), onFloor(q, z1)); seg(onFloor(p, z0), onFloor(p, z1)); } }
      }
    }
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
    if (walking) {        // where you stand
      const m = v => (v / MU).toFixed(1), r = Math.hypot(wx, wy) / MU, dirs = ['east', 'north-east', 'north', 'north-west', 'west', 'south-west', 'south', 'south-east'];
      const face = dirs[Math.round(((wyaw % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) / (Math.PI / 4)) % 8];
      g.fillStyle = 'rgba(13,13,20,0.75)'; g.fillRect(0, cv.height - 76, cv.width, 76);
      g.fillStyle = '#d8d4cc'; g.font = '24px Georgia, serif'; g.textAlign = 'left';
      g.fillText(`${r.toFixed(1)} m from the origin (${m(Math.abs(wx))} m ${wx >= 0 ? 'east' : 'west'}, ${m(Math.abs(wy))} m ${wy >= 0 ? 'north' : 'south'}), facing ${face}, eye 1.6 m above the floor`, 20, cv.height - 44);
      g.fillStyle = '#a8a498'; g.font = '20px Georgia, serif';
      g.fillText('W / S or ↑ / ↓ to walk, A / D or ← / → to turn, drag to look round. Pillars and posts stop you; everything else you can walk through.', 20, cv.height - 16);
    }
  }
  // walking: keys and the on-screen pad set what is held down; a loop moves the eye while anything is held
  const held = new Set(); let wraf = null, wlast = null;
  const posts = () => S.filter(s => s.k === 'column').map(s => [s.c[0], s.c[1], s.r + BODY]);
  function step(ts) {
    if (!walking || !held.size) { wraf = null; wlast = null; return; }
    const dt = wlast === null ? 0 : Math.min(0.1, (ts - wlast) / 1000); wlast = ts;
    const fw = (held.has('f') ? 1 : 0) - (held.has('b') ? 1 : 0), tn = (held.has('l') ? 1 : 0) - (held.has('r') ? 1 : 0);
    wyaw += tn * 1.6 * dt;
    if (fw) {
      let nx = wx + Math.cos(wyaw) * fw * SPEED * dt, ny = wy + Math.sin(wyaw) * fw * SPEED * dt;
      for (const [cx, cy, rr] of posts()) {       // slide round a post rather than stopping dead against it
        const d = Math.hypot(nx - cx, ny - cy); if (d >= rr) continue;
        const n = [(nx - cx) / d, (ny - cy) / d], tg = [-n[1], n[0]], vx = nx - wx, vy = ny - wy, v = Math.hypot(vx, vy);
        let along = vx * tg[0] + vy * tg[1]; if (Math.abs(along) < 0.3 * v) along = 0.6 * v;
        nx = cx + n[0] * rr + tg[0] * along; ny = cy + n[1] * rr + tg[1] * along;
      }
      wx = Math.max(x0 - 4 * MU, Math.min(x1 + 4 * MU, nx)); wy = Math.max(y0 - 4 * MU, Math.min(y1 + 4 * MU, ny));
    }
    draw(); wraf = requestAnimationFrame(step);
  }
  const press = k => { held.add(k); if (!wraf) wraf = requestAnimationFrame(step); };
  const KEYS = {ArrowUp: 'f', w: 'f', W: 'f', ArrowDown: 'b', s: 'b', S: 'b', ArrowLeft: 'l', a: 'l', A: 'l', ArrowRight: 'r', d: 'r', D: 'r'};
  cv.tabIndex = 0;
  cv.addEventListener('keydown', e => { if (!walking || !KEYS[e.key]) return; e.preventDefault(); press(KEYS[e.key]); });
  cv.addEventListener('keyup', e => { if (KEYS[e.key]) held.delete(KEYS[e.key]); });
  cv.addEventListener('blur', () => held.clear());
  const pad = document.createElement('div');       // for touch screens
  pad.className = 'controls'; pad.style.cssText = 'justify-content:center;margin-top:8px;display:none;';
  for (const [k, label] of [['l', '↶ Turn left'], ['f', '▲ Forward'], ['b', '▼ Back'], ['r', 'Turn right ↷']]) {
    const b = document.createElement('button'); b.className = 'small'; b.textContent = label; b.style.touchAction = 'none';
    b.addEventListener('pointerdown', e => { e.preventDefault(); press(k); }); for (const ev of ['pointerup', 'pointerleave', 'pointercancel']) b.addEventListener(ev, () => held.delete(k));
    pad.appendChild(b);
  }
  cv.insertAdjacentElement('afterend', pad);
  function frame(ts) { if (!on) return; if (start === null) start = ts; t = Math.min(1, (ts - start) / 3500); draw(); if (t < 1) raf = requestAnimationFrame(frame); else raf = null; }
  const ptrs = new Map(); let pinch = null;
  cv.addEventListener('pointerdown', e => { if (!on) return; if (walking) cv.focus({preventScroll: true}); cv.setPointerCapture(e.pointerId); ptrs.set(e.pointerId, [e.clientX, e.clientY]); });
  cv.addEventListener('pointermove', e => {
    if (!on || !ptrs.has(e.pointerId)) return; const old = ptrs.get(e.pointerId); ptrs.set(e.pointerId, [e.clientX, e.clientY]);
    if (walking) { if (ptrs.size === 1) { wyaw -= (e.clientX - old[0]) * 0.004; wpitch = Math.max(-1.2, Math.min(1.2, wpitch - (e.clientY - old[1]) * 0.004)); } }
    else if (ptrs.size === 1) { yaw -= (e.clientX - old[0]) * 0.008; pitch = Math.max(0.08, Math.min(1.5, pitch + (e.clientY - old[1]) * 0.006)); }
    else { const [a, b] = [...ptrs.values()], d = Math.hypot(a[0] - b[0], a[1] - b[1]); if (pinch) dist = Math.max(8, Math.min(140, dist * pinch / d)); pinch = d; }
    if (!raf) draw();
  });
  const up = e => { ptrs.delete(e.pointerId); pinch = null; };
  cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
  cv.addEventListener('wheel', e => { if (!on) return; e.preventDefault(); if (walking) { const s_ = -Math.sign(e.deltaY) * 0.5 * MU; wx += Math.cos(wyaw) * s_; wy += Math.sin(wyaw) * s_; if (!raf) draw(); return; } dist = Math.max(8, Math.min(140, dist * Math.exp(e.deltaY * 0.001))); if (!raf) draw(); }, {passive: false});
  return {
    sun(hour, decl) { setSun(hour, decl); if (on && !raf) draw(); },
    night(b) { night = b; if (on && !raf) draw(); },
    grid(b, u) { gridU = b ? u : 0; if (on && !raf) draw(); },
    suspend(b) { hang = b; if (on && !raf) draw(); },
    show() { if (on) return; on = true; cv.style.touchAction = 'none'; cv.style.cursor = 'grab'; start = null; t = 0; raf = requestAnimationFrame(frame); },
    walk(b) {
      walking = b; held.clear(); pad.style.display = b ? 'flex' : 'none';
      if (b) { wx = 0; wy = y0 - 2 * MU; wyaw = Math.PI / 2; wpitch = -0.05; t = 1; if (raf) { cancelAnimationFrame(raf); raf = null; } cv.focus({preventScroll: true}); }
      if (on) draw();
    },
    hide() { if (walking) { walking = false; pad.style.display = 'none'; } on = false; cv.style.touchAction = ''; cv.style.cursor = ''; if (raf) cancelAnimationFrame(raf); raf = null; },
  };
}
