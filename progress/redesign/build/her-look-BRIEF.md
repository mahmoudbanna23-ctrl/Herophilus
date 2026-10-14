# Job E1 — the Clepsydra in 3D: two look tests (builder brief)

ROUTE-OK: gateway down.

## §0 Marching orders
- Hand back at ~60 tool calls, stopped by 80, even with work left. Partial work reported honestly
  is a success. Write status to `D:/scratch 2026/her-look/STATUS.md` AS YOU GO.
- Write project files ONLY in `D:\claude os\Medical school\Herophilus-redesign` (and only new
  files under `progress/app-replan/p5/story/her/` — never edit `build_her.py`, `rig_her.py`,
  `face_rig.py`; make copies with a `look_` prefix). NEVER write in
  `D:\claude os\Medical school\Herophilus` (live copy). No git.
- Renders: `D:/scratch 2026/her-look/` (no `--` in any path).
- Blender headless, CPU Cycles (or EEVEE if it renders headless — say which). ONE Blender job at
  a time: first run `tasklist | grep -i blender`; if one is running, wait for it to end.
- Look only at your own renders, a few, to check them.

## ⚠️ Her identity is the owner's artwork
The Clepsydra is the owner's own character. Do NOT change who she is — shape, proportions,
face, the hourglass/water-clock body, colours of her parts. This job changes ONLY the
SHADING/look layer, never the model. Test 8 (`build_her.py`) is her approved look.

## Read first (narrow)
1. `progress/app-replan/p5/RESUME-p5.md` lines 1-20 (state).
2. `progress/app-replan/p5/story/her/NOTES.md` sections "## Test 8" and "## Rig 5r" only (grep
   the headings, read those spans).
3. `D:/scratch 2026/world-c4/toon1-refute/REFUTE.md` — why ink-cartoon test 1 failed and the
   ranked fixes.
4. The city she will stand in: `app/assets/city/` — the resting still (find the dark still the
   page shows; `progress/redesign/paint/city-dark-3.png` is its source painting).

## The job
Render her, standing in a calm neutral pose from the current rig (rig 5r .blend in
`D:/scratch 2026/her-c2/rig5r/` — or test 8 if the rig file will not open), three-quarter view,
full figure, at 1536x1024, composited over the city still at the size and spot she would occupy
on the page (lower right of the city, about a third of the frame height). Two looks:
- **A — painted:** shaded to match the city painting: matte gouache feel, soft painted light,
  the city's navy/amber palette in the light and shadow, visible brush texture in shading, no
  hard ink outlines, no plastic specular.
- **B — ink cartoon:** the 1930s ink-cartoon look (inspiration only), with the toon1 refuter's
  ranked fixes applied (must NOT read as "3D + filter").
Both: same pose, same camera, same lighting direction as the city (warm lamp light from the
city, cool sky light). Also one close crop of her upper body for each (face readable).

Outputs: `her-look/A-painted.png`, `A-painted-close.png`, `B-ink.png`, `B-ink-close.png`,
plus the scripts you wrote (in the trial copy, `look_` prefix).

## Report back (short)
Paths, Blender version + engine, render time, which fixes from the toon1 refuter you applied,
anything that failed.
