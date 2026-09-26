# P5 sprite layers, dispatch 4: regenerate two objects (2026-09-26)

Seat: Codex `gpt-5.6-terra`, built-in `image_gen` tool (imagegen skill). Final reply begins with
`AGENTS.md loaded — Herophilus`, then ≤ 6 lines.

WRITE GRANT (this job only): overwrite `progress/app-replan/scene-pilot/plates/edits/obj-letters-many.png`
and `.../edits/obj-tablet-half.png`; run `node progress/app-replan/scene-pilot/plates/cut-sprites.js`,
which rewrites its outputs in `app/assets/scene/` and `plates/edits/preview/`. Everything else is
read-only, including `cut-sprites.js` itself. DO NOT edit the cutter.

## Attached images
1. `plates/edits/obj-letters-1.png`: the single sealed letter. Its envelope design is fixed.
2. `plates/edits/obj-tablet-blank.png`: the blank wax tablet. Its frame is fixed.

## Why
- The previous letters-many was a tall portrait tower on a 1024×1536 canvas. The cutter scales the
  letters family to one shared width, so the tower shrank the envelope width to 43 px for every
  state, and letters-1 and letters-few failed coverage. It also showed only about 7 seals.
- tablet-half was a different tablet from tablet-blank: a 2:1 frame against 3:2, a different size.
  Swapping between the two states jumps.

## Generate
1. `obj-letters-many.png`: a NEW image on a LANDSCAPE 1536×1024 canvas. It shows a low, slightly
   untidy stack of 8 to 10 sealed letters. Each letter is exactly the envelope in attached image 1:
   same paper, same seal, same size relative to the frame.
   - The stack is WIDE and LOW: the whole stack is no taller than about 0.6 of one envelope's
     width. Letters lie flat and overlap loosely.
   - Seen at the same angle as image 1. Flat solid `#00b140` background, nothing else in frame.
   - At least 8 wax seals visible.
2. `obj-tablet-half.png`: an EDIT of attached image 2, the blank tablet, so frame, wood,
   proportions, angle and size stay pixel-identical. Change only the LEFT half of the wax: add
   stylus strokes scored into it. The right half stays smooth. The background stays exactly as in
   image 2.

Both images:
- no writing, letters, numerals or symbols (strokes and seals are plain marks);
- no figure or hand; no flame, glow or smoke;
- no ink outlines or hatching.

## Then
Run the cutter and paste its final line. If an object fails, regenerate that ONE object once more,
then stop and report. Do not judge the art by eye: a separate reviewer looks.

## Do not
- Edit anything outside the write grant (the master, `scene-map-b.js`, `edits/rejected/`, other `obj-*`).
- Commit, push, `git add`, download or install anything, or start a second job.
