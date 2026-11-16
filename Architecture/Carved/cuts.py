import numpy as np, json, math
from skimage import measure
F = np.load('F.npy'); G = json.load(open('grid.json')); v = G['vox']; x0, z0 = G['x0'], G['z0']
def svg_paths(sl, to_xy):
    out = []
    for c in measure.find_contours(sl, 0.0):
        pts = [to_xy(p) for p in c]; out.append('M' + ' L'.join('%.1f,%.1f' % p for p in pts) + ' Z')
    return out
# the section: the plane x = 0, south to north, ground to sky
i0 = int(round((0 - x0) / v)); sec = F[i0, :, :]          # (y, z)
S = 13.0; Wd = int(68 * S + 40); Ht = int(54 * S + 70)
def sxy(p): y = x0 + p[0] * v; z = z0 + p[1] * v; return ((y + 34) * S + 20, (52 - z) * S + 20)
paths = svg_paths(-sec, sxy)
o = ['<svg xmlns="http://www.w3.org/2000/svg" width="%d" height="%d" viewBox="0 0 %d %d" font-family="Georgia, serif">' % (Wd, Ht, Wd, Ht),
     '<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6f9cc8"/><stop offset="1" stop-color="#dce8f0"/></linearGradient></defs>',
     '<rect width="100%" height="100%" fill="url(#sky)"/>']
gy = sxy(((0 - x0) / v, (0 - z0) / v))[1]
o.append('<rect x="0" y="%.1f" width="%d" height="%.1f" fill="#b9ae96"/>' % (gy, Wd, Ht - gy))
o.append('<path d="%s" fill="#e4dccb" stroke="#6f6656" stroke-width="1.2" fill-rule="evenodd"/>' % ' '.join(paths))
spot = G['spot']; a = sxy(((0 - x0) / v, (G['Zd'] - 1 - z0) / v)); b = sxy(((spot - x0) / v, (0.5 - z0) / v))
o.append('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="#e0a800" stroke-width="3" stroke-dasharray="10 5"/>' % (a + b))
def tx(x, y, s, size=13, anchor='middle'): q = sxy(((x - x0) / v, (y - z0) / v)); return '<text x="%.1f" y="%.1f" font-size="%d" fill="#2a2620" text-anchor="%s">%s</text>' % (q[0], q[1], size, anchor, s)
o.append(tx(0, 49, 'oculus', 13)); o.append(tx(0, 20, 'the dome chamber', 13)); o.append(tx(spot, -1.6, 'June mark, %.1f m north' % spot, 12))
o.append(tx(-31, -1.6, 'S', 14)); o.append(tx(31, -1.6, 'N', 14))
o.append(tx(14, 36, 'noon, 21 June: %.1f°' % G['altJ'], 12, 'start'))
sb = sxy(((-31 - x0) / v, (46 - z0) / v)); se = sxy(((-21 - x0) / v, (46 - z0) / v)); o.append('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="#2a2620" stroke-width="3"/>' % (sb + se)); o.append(tx(-26, 46.8, '10 m', 12))
o.append('<text x="%d" y="%d" font-size="14" fill="#2a2620" text-anchor="middle">Attempt #11: the carved form cut through the origin, south to north. Stone is shaded; everything else is void.</text>' % (Wd / 2, Ht - 18))
o.append('</svg>'); open('architecture-section-11.svg', 'w').write('\n'.join(o))
# the plan: the plane 1.2 m above the floor
k0 = int(round((1.2 - z0) / v)); pl = F[:, :, k0]
P = 13.0; W2 = int(68 * P + 40)
def pxy(p): x = x0 + p[0] * v; y = x0 + p[1] * v; return ((x + 34) * P + 20, (34 - y) * P + 20)
paths = svg_paths(-pl, pxy)
o = ['<svg xmlns="http://www.w3.org/2000/svg" width="%d" height="%d" viewBox="0 0 %d %d" font-family="Georgia, serif">' % (W2, W2 + 40, W2, W2 + 40), '<rect width="100%" height="100%" fill="#d6cdb9"/>']
o.append('<path d="%s" fill="#5d564b" stroke="#2a2620" stroke-width="1" fill-rule="evenodd"/>' % ' '.join(paths))
c = pxy(((0 - x0) / v, (spot - x0) / v)); o.append('<rect x="%.1f" y="%.1f" width="%.1f" height="%.1f" fill="#c8961e"/>' % (c[0] - 1.5 * P, c[1] - 0.25 * P, 3 * P, 0.5 * P))
n = pxy(((30 - x0) / v, (30 - x0) / v)); o.append('<text x="%.1f" y="%.1f" font-size="16" fill="#2a2620">N ↑</text>' % n)
o.append('<text x="%d" y="%d" font-size="14" fill="#2a2620" text-anchor="middle">Attempt #11: the carved form cut 1.2 m above the floor. Dark: stone. Light: the walkable voids, the gold mark on the meridian.</text>' % (W2 / 2, W2 + 22))
o.append('</svg>'); open('architecture-plan-11.svg', 'w').write('\n'.join(o))
print('ok')
