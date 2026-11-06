// Small helpers shared by every page of the website. Load it first, before any other script.

const $ = id => document.getElementById(id);

// Text from the data (names, methods, notes, verifications, disputes) is written into pages as
// HTML, and some of it comes from public submissions, so it is escaped first.
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));

// A row of readouts: [[label, value, class], ...] as the boxes at the top of the charts and pages.
// Labels are set in capitals, so π is kept lower case (a capital Π is a different symbol).
const lowerPi = t => String(t).replace(/π/g, '<span style="text-transform:none">π</span>');
const meters = rows => rows.map(([l, v, c]) => `<div class="meter"><div class="mlabel">${lowerPi(l)}</div><div class="mval ${c || ''}">${v}</div></div>`).join('');

// "AI" or "person", for a chart entry.
const kindOf = e => e.holder_kind === 'ai' ? 'ai' : 'person';

// A canvas drawn sharp on any screen: sized to its box in CSS pixels, cleared, and ready to draw on.
function fitCanvas(cv) {
  const ctx = cv.getContext('2d'), dpr = window.devicePixelRatio || 1;
  const W = cv.clientWidth, H = cv.clientHeight;
  cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, W, H);
  return {ctx, W, H};
}

// A button that copies text, says "Copied" for a moment, then goes back to its own label.
// text() gives the text; fallback is a textarea to select if the clipboard is not available.
function copyButton(button, text, fallback) {
  const label = button.textContent; let timer = null;
  button.onclick = async () => {
    try { await navigator.clipboard.writeText(text()); }
    catch (e) { if (fallback) { fallback.select(); document.execCommand('copy'); } }
    button.textContent = 'Copied'; clearTimeout(timer); timer = setTimeout(() => { button.textContent = label; }, 1500);
  };
}
