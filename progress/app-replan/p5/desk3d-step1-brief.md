# P5 — 3D desk, step 1: test render (2026-09-26)

Seat: Claude `lean-drafter` (Sonnet). Prompt opens `ROUTE-OK: Codex cannot render; step 1 is judged
on film the builder must shoot itself`. Plan: `p5/PLAN-3d-desk-2026-09-26.md` (read "What each item
does" and "Runtime" only).

WRITE GRANT: create/edit files ONLY under `progress/app-replan/p5/desk3d/`. Read-only: everything
else, `app/` included. Films/frames go to `D:/tmp-desk3d-1/` (never a path containing `--`).

## Goal
One page, `desk3d/index.html`, that the owner judges for LOOK and MOTION before any texture is
painted. Flat colours only; no image textures.

## Build
- Runtime: three.js classic build, copy `progress/app-replan/scene-pilot/spike/vendor/three.min.js`
  into `desk3d/vendor/`. Read `scene-pilot/spike/a-three.html` for how the pilot boots it. Classic
  `<script>` tags only, no ES modules, no CDN, no download, no npm. Must run from `file://`.
- Scene: a desk top (warm dark wood colour), four closed hardback leather books standing on it,
  covers angled toward the camera, one per subject: ENT, Ophthalmology, Neuropsychiatry, Pediatrics.
  Colours = the app's subject tokens (grep `app/` CSS for the subject colour custom properties;
  report which you used). Reference look: old frame `p5/ref-frames/beat-4.png` (read it) — four
  leather books with a thin gold progress arc above each; use a gold torus arc at a sample
  percentage. Rounded spine, raised bands, page block visible on the fore-edge.
- Light: warm oil-lamp key from the right, cool rim from behind, soft shadows onto the desk.
- Title on each book: live text (canvas texture or HTML), never baked into an image file.

## Motion (every move has a physical cause; no opacity-only entrance, ever)
1. Hover (or focus): the book lifts slightly and tilts toward the camera; cursor = pointer.
2. Click: book lifts off the desk, turns square to the camera, camera eases closer, cover swings
   open on its hinge. Left page reads **Lectures**, right page **Questions**; a sealed exam paper
   tucked in the book slides out upward = **Mocks**. Each of the three is its own click target
   (log the choice to console for now; no app wiring in this step).
3. Back (Esc, click outside, or a Back button): paper slides in, cover closes, book returns to its
   exact place, camera eases back.
4. Easing: no linear motion; slight settle at rest. Durations 400–900 ms.
- Every book and every page target is also a real `<button>` in an HTML layer over the canvas
  (keyboard + screen reader); visible focus ring.
- `prefers-reduced-motion`: open/close instantly, no lift, no camera move.

## Verify (you CAN render — do it)
- `node --check` every JS file. 0 console errors from `file://`.
- Film with headless Chrome over CDP (adapt `p5/scroll-spike-film.mjs`; time-driven, not
  scroll-driven) at 1280x800 and 390x844: idle 1 s, hover ENT, open ENT, hold 1.5 s, hover each of
  Lectures/Questions/Mocks, Back, open Pediatrics, Back. ffmpeg libx264 crf 28, 30 fps, mp4 into
  `D:/tmp-desk3d-1/`. Also 6 stills per size.
- Read your own stills: all four books fully in frame at both sizes (390 wide included — no book
  or label clipped), titles legible, the open book's three targets visible.
- Measure: page bytes (html+js, three separately); REAL scene fps from a counter inside your
  render loop, at 1x and 6x CPU throttle (CDP `Emulation.setCPUThrottlingRate`), mean over 3 s
  during the open animation; JS heap.
- `desk3d/NOTES.md`: what was built, token colours used, every number from your own run, film and
  still paths, and a list of what still looks cheap (honest).

## Stop
Close out by 60 tool calls, hard stop 80; an honest partial beats a false done. No commit/add/
push/tag/download/install. No Clepsydra. No painted art.

Then: fresh Opus refuter -> `p5/REFUTE-desk3d-step1.md`, its own films in `D:/tmp-desk3d-ref1/`.
