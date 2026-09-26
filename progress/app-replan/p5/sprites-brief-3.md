# P5 Lane A step 2b — sprite layers, dispatch 3: keyed objects (2026-09-26)

Seat: Codex `gpt-5.6-terra`, built-in `image_gen` tool (imagegen skill). Final reply begins with
`AGENTS.md loaded — Herophilus`, then ≤ 6 lines.

WRITE GRANT (overrides AGENTS.md read-only default for this job only): create/overwrite files under
`progress/app-replan/scene-pilot/plates/edits/` (never touch `edits/rejected/`), the script
`progress/app-replan/scene-pilot/plates/cut-sprites.js`, the report
`progress/app-replan/scene-pilot/plates/sprites-report.md` (rewrite it, UTF-8), and PNGs under
`app/assets/scene/`. Everything else is read-only.

## Why this dispatch exists
Dispatch 2 edited the whole master per state. Six sprites failed review: the edits repainted the
scroll's texture and tone outside the boxes (tablet ×2, pile) and put letters up and right of their
box (letters-1, letters-few, letters-many). Full edits of the master are DROPPED for these six.
New method, the one that worked for the ribbon: generate each object ALONE on flat `#00b140`, key
it out, place it into its box. Keep `edit-1..4.png` and `ribbon-raw.png` as they are.

## Attached image
`progress/app-replan/scene-pilot/plates/master-v2-b.png`, 1916×821 — style and perspective
reference ONLY. Do not edit it. Look at the desk surface at each box before prompting: match its
camera angle (how foreshortened the desk plane is there), its warm lamp light and its smooth,
glossy, soft-lit painted finish.

## Boxes — source of truth
`progress/app-replan/scene-pilot/plates/scene-map-b.js` (load with `vm`, never retype a box):
`SCENE_MAP.slots.letters` `[642,522,160,90]`, `slots.tablet` `[932,458,200,90]`,
`slots.pile` `[1160,458,200,90]` (tablet and pile lie ON the open scroll), `SCENE_MAP.lamp`
(light source).

## Objects — one `image_gen` call each, a NEW image (not an edit), saved to `plates/edits/`
Each: the single object only, whole and uncropped, lying on a surface seen at the desk's angle,
on a flat solid `#00b140` background filling the rest of the frame; no table, no cast shadow on
the background, nothing else in frame.
1. `obj-letters-1.png` — ONE folded letter with a red wax seal.
2. `obj-letters-few.png` — a neat stack of THREE sealed letters.
3. `obj-letters-many.png` — a taller, slightly leaning stack of 8–10 sealed letters.
4. `obj-tablet-blank.png` — a wooden wax tablet: wood frame, dark smooth wax, BLANK.
5. `obj-tablet-half.png` — the SAME tablet (same frame, colour, proportions), the LEFT half of
   the wax scored with stylus strokes, the RIGHT half smooth.
6. `obj-pile.png` — a small loose pile of 4–6 parchment pages, a few corners turned down.

All objects: no writing, letters, numerals, symbols, logo or watermark (strokes and seals are
plain marks, never legible glyphs); no figure, face or hand; no flame, glow or smoke; no ink
outlines, hatching or grain. Letters 1/few/many share one envelope design; tablets 4/5 match.

## `cut-sprites.js` — Node, built-ins only (`fs`, `zlib`, `vm`); no npm
Keep the existing decode/encode. Changes:

A. Keyed objects (the six above):
- Key `#00b140` (soft threshold on green dominance) and DESPILL EVERY PIXEL WITH ALPHA > 0.
- Trim to the alpha bounds; scale (aspect kept) to fit the box minus an 8 px margin on every
  side; place bottom-centred in the box (it rests on the surface).
- Contact shadow under the object: its own alpha, blurred (radius ~6 px), dark brown-black at
  ≤ 0.35 opacity, offset 3–4 px AWAY from the centre of `SCENE_MAP.lamp`; composited beneath the
  object, clipped to the box.
- Output box-sized RGBA: transparent where there is neither object nor shadow. No feather, no
  master pixels — the sprite overlays the master.

B. Master-edit cuts (`letters-0`, `gilt-*`), existing method with three fixes:
- Shift search PER BOX (±8 px, ring outside that box), not one shift per edit.
- The drift ring EXCLUDES pixels inside any other `SCENE_MAP.books.*` box.
- FAIL a sprite whose drift > 12 (object misplaced or the edit repainted around it), as well as
  seam > 10.

C. Ribbon: re-cut from `ribbon-raw.png` with despill on EVERY pixel with alpha > 0; 48×300 as before.

D. Previews for the reviewer: for every output, write
`plates/edits/preview/<name>.png` = the master region around its box with 40 px context on each
side, the sprite composited at its box (gilt: at its book box). Ribbon: preview on a mid-grey card.

E. Self-check (asserts, prints `N passed`, exits non-zero on any fail):
- all 12 outputs exist, decode, exact size (box size; ribbon 48×300);
- keyed objects: object alpha bbox lies ≥ 8 px inside every box edge; all 4 corners alpha 0;
  object covers ≥ 8% of the box; no pixel with alpha > 0 has G > R+24 and G > B+24;
- ribbon: same green test, transparent corners;
- master cuts: every seam ≤ 10, drift ≤ 12, shift within ±8.

Outputs in `app/assets/scene/` (12): `letters-0`, `letters-1`, `letters-few`, `letters-many`,
`tablet-blank`, `tablet-half`, `pile`, `gilt-terracotta`, `gilt-sage`, `gilt-violet`, `gilt-blue`,
`ribbon` (.png).

If an object fails its checks, regenerate that one object ONCE with a sharper prompt; if it fails
again, leave it out of `app/assets/scene/`, report it failed, move on.

## Report
`sprites-report.md`, ≤ 30 lines: table of sprite · source · box · shift/scale · seam · drift ·
pass/fail; failures and why; the script's final `passed` line. Do not judge art by eye — a
separate reviewer looks at every preview.

## Do not
- Draw the Clepsydra, or any figure.
- Edit `master-v2-b.png`, `scene-map-b.js`, anything in `edits/rejected/`, or any `app/` file
  outside `app/assets/scene/`.
- Commit, push, `git add` or tag.
- Download anything; install anything.
- Start a second job.
