# P5 Lane A step 2b — sprite layers from master-v2-b (2026-09-26)

Seat: Codex `gpt-5.6-terra`, built-in `image_gen` tool (imagegen skill, edit mode on the attached
master). Final reply begins with `AGENTS.md loaded — Herophilus`, then ≤ 6 lines.

WRITE GRANT (overrides AGENTS.md read-only default for this job only): you may create files under
`progress/app-replan/scene-pilot/plates/edits/`, the script
`progress/app-replan/scene-pilot/plates/cut-sprites.js`, the report
`progress/app-replan/scene-pilot/plates/sprites-report.md`, and PNGs under `app/assets/scene/`.
Everything else is read-only.

## Attached image
`progress/app-replan/scene-pilot/plates/master-v2-b.png` — the owner's picked master plate,
1916×821. It is canonical. Every edit keeps it pixel-for-pixel wherever this brief does not ask
for a change: same framing, same size, same light, same finish. No restyle, no re-render.

## Fixed bounds — source of truth
`progress/app-replan/scene-pilot/plates/scene-map-b.js` (load it with `vm`, never retype a box).
Boxes are `[x, y, w, h]` in plate px:
- `SCENE_MAP.slots.letters` `[642,522,160,90]`, `slots.tablet` `[932,458,200,90]`,
  `slots.pile` `[1160,458,200,90]` (tablet and pile lie ON the open scroll — owner ruling);
- `SCENE_MAP.books.terracotta|sage|violet|blue` for the gilt.
Every added object sits fully inside its box with at least 8 px clear margin on every side.

## Edits — one `image_gen` edit call each, saved full-size to `plates/edits/`
1. `edit-1.png`: letters box — ONE folded letter with a wax seal; tablet box — a wooden wax
   tablet, frame and dark smooth wax, BLANK; pile box — a small loose pile of 4–6 parchment
   pages, a few corners turned down.
2. `edit-2.png`: letters box — a small stack of THREE sealed letters; tablet box — the same
   tablet, about half its wax scored with stylus strokes.
3. `edit-3.png`: letters box — a tall, slightly leaning stack of 8–10 sealed letters, still
   inside the box with margin.
4. `edit-4.png`: gilt on all four book spines — raised gold-leaf bands and a thin gilt border.
   Spine colours, positions, shapes and the lamp's occlusion of the blue book unchanged.
5. `ribbon-raw.png` (NOT an edit, a new image): a single fabric bookmark ribbon, deep wine red
   with a thin gold edge, hanging straight down, forked tail, same smooth glossy soft-lit finish
   as the master, on a flat solid `#00b140` background, nothing else in frame.

All objects: lit by the plate's own existing light; no writing, letters, numerals, symbols,
logo or watermark anywhere (stylus strokes and seals are plain marks, never legible glyphs); no
figure, face or hand; no flame, glow or smoke; no ink outlines, hatching or grain.

## `cut-sprites.js` — Node, built-ins only (`fs`, `zlib`, `vm`); no npm
Write a minimal PNG decode/encode (RGBA out; `zlib.crc32` exists in this Node). Then:
- Registration: for each edit, find the integer shift in ±8 px (x and y) that minimises mean
  |edit − master| over a 16 px ring OUTSIDE each target box; cut at that shift. If an edit is not
  1916×821, report its size and fail that edit — do not resample.
- Cut each sprite at its fixed box, output exactly box-sized RGBA. Alpha: 255 inside, linear
  ramp to 0 across the outer 8 px of the box (feather) so the patch blends onto the master.
- `seam` = mean |edit − master| (RGB, 0–255) over that 8 px feather band, after the shift.
  FAIL a sprite whose seam > 10. `drift` = the ring mean outside the box; report only.
- `letters-0.png` = the master's own letters-box crop, same feather (state 0 = empty desk).
- Ribbon: key out `#00b140` (soft threshold on green dominance, despill the edge), trim to the
  ribbon's alpha bounds, then pad/scale to exactly 48×300, centred, aspect kept.
- Outputs in `app/assets/scene/`: `letters-0.png`, `letters-1.png`, `letters-few.png`,
  `letters-many.png`, `tablet-blank.png`, `tablet-half.png`, `pile.png`, `gilt-terracotta.png`,
  `gilt-sage.png`, `gilt-violet.png`, `gilt-blue.png`, `ribbon.png`.
- Self-check at the end, assert-based, prints `N passed` and exits non-zero on any fail: every
  output exists, decodes, has exactly its box size (ribbon 48×300), every seam ≤ 10, every shift
  within ±8, ribbon has transparent corners.

## Report
`sprites-report.md`, ≤ 30 lines: a table of sprite · source edit · box · shift · seam · drift ·
pass/fail; which edits failed and why; the script's final `passed` line. Do not judge the art by
eye in the report — a separate reviewer looks at every crop.

If an edit fails the seam check, retry that one edit ONCE with a stricter "change only inside
this box" prompt; if it fails again, report it failed and move on.

## Do not
- Draw the Clepsydra, or any figure.
- Edit `master-v2-b.png`, `scene-map-b.js` or any `app/` file outside `app/assets/scene/`.
- Commit, push, `git add` or tag.
- Download anything; install anything.
- Start a second job.
