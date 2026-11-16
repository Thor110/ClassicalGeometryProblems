# Attempt #11: the voids. Every element of the cathedral becomes a void carved from solid; the building is the
# solid within T of a void, so its outside is shaped by its inside.
import numpy as np, json, math, sys
R = 6.0; T = 1.5; VOX = float(sys.argv[1]) if len(sys.argv) > 1 else 0.5
H = 48.0; SHELL = 30.0
ring_r = {k: (k + 0.5) * R for k in (1, 2, 3, 4)}
ht = lambda r: H * (1 - r / SHELL)
ANG = {1: [30 * i for i in range(12)], 2: [60 * i for i in range(6)], 3: [90 * i for i in range(4)], 4: [0, 120, 240]}
phi = math.radians(50.9); altJ = math.asin(math.sin(phi) * math.sin(math.radians(23.44)) + math.cos(phi) * math.cos(math.radians(23.44)))
xs = np.arange(-34, 34 + 1e-9, VOX); zs = np.arange(-1, 52 + 1e-9, VOX)
X, Y, Z = np.meshgrid(xs, xs, zs, indexing='ij'); RHO = np.hypot(X, Y)
def box2(a, b): return np.maximum(a, b)                       # intersection of two half-widths (rough distance)
def slab(v, lo, hi): return np.maximum(lo - v, v - hi)
D = np.full(X.shape, 1e9)
def U(d):
    global D; D = np.minimum(D, d)
# the dome: the first ring's vault as an ellipsoidal chamber, 10 m across at the floor's level of the cubes, 44 m high
Zd = 44.0
U((np.sqrt((RHO / 10.0) ** 2 + (np.maximum(Z, 0) / Zd) ** 2) - 1) * 8.0)
# the oculus: a shaft from the dome's crown up through the skin
Zoc = Zd + T + 0.5
U(np.maximum(RHO - 2.0, slab(Z, Zd - 4, Zoc + 2)))
# the ring galleries: walkable, stepping down outward like the cone
GW = {1: 3.6, 2: 3.2, 3: 2.8, 4: 2.4}; GH = {1: 8.0, 2: 6.5, 3: 5.0, 4: 4.0}
for k in (1, 2, 3, 4): U(np.maximum(np.abs(RHO - ring_r[k]) - GW[k] / 2, slab(Z, 0, GH[k])))
# the trisection points: light shafts rising from the galleries to the outside, as tall as the old pillars
for k in (1, 2, 3, 4):
    for a in ANG[k]:
        cx, cy = ring_r[k] * math.cos(math.radians(a)), ring_r[k] * math.sin(math.radians(a))
        U(np.maximum(np.hypot(X - cx, Y - cy) - 0.9, slab(Z, 0, ht(ring_r[k]) + T + 1)))
# passages along the gold lines and the meridian: π west to the third ring, the arc and the meridian north to the wall,
# and the three portals in from outside at 0, 120 and 240 degrees
def passage(a, r0, r1, w, h):
    c, s = math.cos(math.radians(a)), math.sin(math.radians(a)); along = X * c + Y * s; across = -X * s + Y * c
    return np.maximum(np.maximum(slab(along, r0, r1), np.abs(across) - w / 2), slab(Z, 0, h))
U(passage(180, 0, ring_r[3] + 1.5, 2.4, 4.5))
U(passage(90, 0, ring_r[4] + 1.0, 2.4, 4.5))
for a in (0, 120, 240): U(passage(a, 0, SHELL + 3, 3.2, 5.5))
# the flying arches become tunnels: from each second- and third-ring shaft top up and in to the next ring
def tube(P0, P1, r, n=40):
    out = np.full(X.shape, 1e9)
    for i in range(n + 1):
        t = i / n; p = [P0[j] + (P1[j] - P0[j]) * t for j in range(3)]
        out = np.minimum(out, np.sqrt((X - p[0]) ** 2 + (Y - p[1]) ** 2 + (Z - p[2]) ** 2) - r)
    return out
def nearest(k, a):
    d = sorted(ANG[k], key=lambda b: abs((b - a + 180) % 360 - 180)); m = abs((d[0] - a + 180) % 360 - 180)
    return [b for b in d if abs(abs((b - a + 180) % 360 - 180) - m) < 1e-6]
flyers = []
for ko, ki in ((2, 1), (3, 2)):
    for a in ANG[ko]:
        for b in nearest(ki, a):
            o = [ring_r[ko] * math.cos(math.radians(a)), ring_r[ko] * math.sin(math.radians(a)), ht(ring_r[ko]) - 2]
            i = [ring_r[ki] * math.cos(math.radians(b)), ring_r[ki] * math.sin(math.radians(b)), ht(ring_r[ki]) - 6]
            U(tube(o, i, 1.1)); flyers.append([o, i])
# the June noon light: a tunnel bored from the dome's crown along the sun's line to the meridian passage
spot = Zd / math.tan(altJ)
U(tube([0, 0, Zd - 1], [0, spot, 0.5], 0.7, n=60))
# the solid: within T of a void, above the ground
F = np.maximum(np.maximum(-D, D - T), -Z)
F = np.maximum(F, RHO - (SHELL + 3))          # the portals open to the outside: nothing stands beyond their mouths
print('grid', X.shape, 'solid fraction %.3f' % (F < 0).mean(), 'spot %.2f' % spot)
np.save('F.npy', F.astype(np.float32)); json.dump({'vox': VOX, 'x0': -34, 'z0': -1, 'shape': list(F.shape), 'spot': spot, 'Zoc': Zoc, 'Zd': Zd, 'flyers': flyers, 'altJ': math.degrees(altJ)}, open('grid.json', 'w'))
# for the walk: where the solid stands at a person's height
walk = (F[:, :, int((1.0 + 1) / VOX)] < 0)
np.save('walk.npy', walk)
