# The carved form (Attempt #11)

These scripts make Attempt #11 of the Architectural Vision: every element of the cathedral (Attempt #10) written as a
void, and the building taken as the stone within 1.5 m of a void. They need Python 3 with numpy, scikit-image and
fast-simplification (`pip install numpy scikit-image fast-simplification`). Run them from this folder:

1. `python carve.py 0.75` works out, on a grid of 0.75 m, the distance from every point to the nearest void, and from
   it the stone (`F.npy`, `grid.json`) and where a walker meets stone (`walk.npy`).
2. `python mesh.py 0.6` draws the stone's surface by marching cubes and simplifies it (`v.npy`, `f.npy`).
3. `python export.py` packs the surface and the walking grid for the page (`carved.json`), which is then written into
   `pages/architecture-plan-11-steps.js` with the floor of Attempt #6.
4. `python carve.py 0.25` and then `python cuts.py` make the section and the plan
   (`architecture-section-11.svg`, `architecture-plan-11.svg`) from a finer grid.

The intermediate files are large and are not kept in the repository.
