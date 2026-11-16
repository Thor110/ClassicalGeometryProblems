import numpy as np, json, sys
from skimage import measure
import fast_simplification as fs
F = np.load('F.npy'); G = json.load(open('grid.json')); v = G['vox']
verts, faces, normals, _ = measure.marching_cubes(F, 0.0, spacing=(v, v, v))
verts[:, 0] += G['x0']; verts[:, 1] += G['x0']; verts[:, 2] += G['z0']
# which way the faces wind: compare one face's winding normal with the field's gradient
i = 0; a, b, c = verts[faces[i]]; wn = np.cross(b - a, c - a); print('winding vs marching-cubes normal', float(np.dot(wn, normals[faces[i][0]])))
target = float(sys.argv[1]); v2, f2 = fs.simplify(verts.astype(np.float32), faces.astype(np.int32), target_reduction=target)
print('raw', len(faces), 'simplified', len(f2))
np.save('v.npy', v2); np.save('f.npy', f2)
