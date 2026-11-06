// The script every paper page shares: the contents list and the figure viewer.
// Figures open full size; arrows step through them, Escape closes.
const figs = [...document.querySelectorAll('.fig img')], lb = document.getElementById('lb');
let at = 0;
function openFig(i) {
  at = (i + figs.length) % figs.length;
  document.getElementById('lbImg').src = figs[at].src;
  document.getElementById('lbCap').textContent = figs[at].alt;
  lb.classList.add('open');
}
figs.forEach((f, i) => f.onclick = () => openFig(i));
document.getElementById('lbPrev').onclick = () => openFig(at - 1);
document.getElementById('lbNext').onclick = () => openFig(at + 1);
document.getElementById('lbClose').onclick = () => lb.classList.remove('open');
lb.onclick = e => { if (e.target === lb) lb.classList.remove('open'); };
document.addEventListener('keydown', e => {
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape') lb.classList.remove('open');
  if (e.key === 'ArrowLeft') openFig(at - 1);
  if (e.key === 'ArrowRight') openFig(at + 1);
});
// Highlight the chapter being read in the contents.
const heads = [...document.querySelectorAll('.article h2')], links = [...document.querySelectorAll('.paper-toc details > a')];
function here() {
  let cur = heads[0];
  for (const h of heads) if (h.getBoundingClientRect().top < 120) cur = h;
  links.forEach(a => a.classList.toggle('here', cur && a.getAttribute('href') === '#' + cur.id));
}
addEventListener('scroll', here, {passive: true}); here();
// On a phone the contents start folded.
if (matchMedia('(max-width:860px)').matches) document.getElementById('tocDetails').open = false;
