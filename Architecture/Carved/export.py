import numpy as np, json
v = np.load('v.npy'); f = np.load('f.npy'); G = json.load(open('grid.json')); W = np.load('walk.npy')
MU = 4.0 / 6.0
keep = [t for t in f if not (v[t][:, 2] < 0.05).all()]            # the underside on the ground is never seen
used = sorted(set(int(i) for t in keep for i in t)); idx = {o: n for n, o in enumerate(used)}
V = [[round(float(v[i][0]) * MU, 3), round(float(v[i][1]) * MU, 3), round(float(v[i][2]) * MU, 3)] for i in used]
Fc = [[idx[int(a)], idx[int(b)], idx[int(c)]] for a, b, c in keep]
walk = ''.join('1' if W[i, j] else '0' for j in range(W.shape[1]) for i in range(W.shape[0]))
import base64
SC = 0.002     # vertex coordinates packed as 16-bit integers of 2 thousandths of a unit, faces as 16-bit indices
pv = base64.b64encode(np.array([[round(c / SC) for c in p] for p in V], dtype='<i2').tobytes()).decode()
pf = base64.b64encode(np.array(Fc, dtype='<u2').tobytes()).decode()
json.dump({'mesh': {'packed': {'v': pv, 'f': pf, 's': SC, 'obj': {'name': 'the carved form', 'col': 'carved', 'cull': 1}}},
           'walkgrid': {'x0': G['x0'] * MU, 'step': G['vox'] * MU, 'n': W.shape[0], 'cells': walk}, 'G': G}, open('carved.json', 'w'), separators=(',', ':'))
print(len(V), 'verts', len(Fc), 'faces')
