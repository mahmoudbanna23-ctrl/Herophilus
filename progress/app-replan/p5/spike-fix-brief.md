# P5 Lane A step 1b — spike fix round (2026-09-26)

Seat: Codex `gpt-5.6-terra`. Reviewer after you: a Claude Opus refuter. Final reply begins with
`AGENTS.md loaded — Herophilus`, then ≤ 5 lines.

WRITE GRANT (overrides the AGENTS.md read-only default for this job only): you may edit and create
files under `progress/app-replan/scene-pilot/spike/` (but not `vendor/`, which is read-only), and edit
`progress/app-replan/p5/spike-report.md`. Everything else is read-only, `app/` included.

## Read first
1. `progress/app-replan/p5/spike-brief.md`: the original goal and rulings. They still bind.
2. `progress/app-replan/p5/REFUTE-spike-round2.md`: 17 numbered failures, each with file:line and a
   fix. This job fixes every one of them.
3. `progress/app-replan/p5/spike-measure.md` Round 2: what the lean-drafter already changed
   (`writeUInt32LE` offsets in `make-glb.js`, base64 decoding in `a-three.html`).
4. `app/js/desk-data.js`: it already reads `S.tally` and `S.miss`.

## Fix every refuter item
- **GLB (1-4):**
  - `MAT4:16` in the size table.
  - Buffer `byteLength` set last.
  - `min`/`max` on POSITION and on the animation sampler inputs.
  - One root joint that parents the others; `skeleton` names it.

  Regenerate `model.glb` and `model.b64.js`. Then add a node self-check at the end of `make-glb.js`
  (or in a separate `check-glb.js`) that re-reads the file and asserts all of the following:
  - magic, version and total length;
  - 4-byte padding of each chunk;
  - every accessor has a count and fits inside its bufferView;
  - every bufferView fits inside the buffer;
  - POSITION has min/max;
  - the skin has 3 joints under one root;
  - the animations `idle` and `wave` exist;
  - `model.b64.js` decodes byte-identical to `model.glb`.

  It prints `N passed` and exits non-zero on any failure.
- **Variant A (5-6):**
  - The plate is bound through `uniforms`.
  - The model is visible: an unlit material, or a light.
  - `idle` and `wave` play through `AnimationMixer`.
- **Variant B (7-8):**
  - CLAMP_TO_EDGE and no mipmaps on the NPOT plate.
  - Real linear skinning: 3 bone matrices as uniforms, `joints`/`weights` attributes, and
    inverse-bind × joint world matrices computed per frame.
  - Clip sampling of the GLB's `animations` with LINEAR interpolation of rotation (slerp) and
    translation. Write no more than this needs.
- **Both (9-13):**
  - Reduced motion renders one still frame after the plate and model have loaded, then no loop and
    no timer.
  - Hidden tab sets `raf=0` and resumes when shown.
  - Shed uses the mean frame time over a 1 s window and ignores the first 500 ms after load.
  - `?force=lost` calls `WEBGL_lose_context.loseContext()` on each canvas, so the real listeners run.
    On restore, stay on the still fallback; there is no retry loop.
  - The capability tier runs before any heavy script loads: load `vendor/` (A) and the b64 scripts by
    injected `<script>` only after the tier passes.
- **Assets (14):** encode a real `spike/plate.jpg` (quality ~60, 1916×821) from
  `progress/app-replan/mocks/plates/painted-codex-3.png`. Load the b64 scripts only when
  `location.protocol==='file:'`; under http, use the paths.
- **Report (15-17), `spike-report.md`:**
  - Recompute the GPU budget to include both full-screen canvases at DPR 1: RGBA8 plus depth, at
    1920×1080 and at 390×844.
  - Rename the proposed fields to the committed `S.tally` (`{"YYYY-MM-DD":n}`) and `S.miss`
    (`{qid:n}`), and add a row for `conf`.
  - Name which of your claims are unmeasured.

  Do not edit `spike-measure.md`; the orchestrator's measure run owns it.

## Verify before replying
- `node --check` on every `.js` and `.mjs` you touched.
- The GLB self-check passes.
- If you cannot run Chrome in your sandbox, say so. Do not claim render results you did not see.

## Do not
- Touch `app/` or `vendor/`.
- Commit, push, `git add` or tag.
- Download anything.
- Start a second job.
- Generate art.
- Modify the Clepsydra PNGs.
