# P5 Lane A step 1 — 3D and scene runtime spike (2026-09-26)

Seat: Codex `gpt-5.6-terra`. Reviewer after you: a Claude Opus refuter. Final reply begins with
`AGENTS.md loaded — Herophilus`, then ≤ 5 lines.

WRITE GRANT (overrides AGENTS.md read-only default for this job only): you may create files under
`progress/app-replan/scene-pilot/spike/` (except `vendor/`, which is read-only input) and write
`progress/app-replan/p5/spike-report.md`. Everything else is read-only, `app/` included.

## Read first
1. `progress/app-replan/p5/PLAN-living-desk-2026-09-26.md`: sections Architecture, "Codex debate
   2026-09-26 — adopted changes", Verification. You helped write the debate section; it wins over
   anything above it.
2. `progress/app-replan/mocks/plates/painted-codex-3.png`, the current plate (1916×821). The lamp
   wick is at (1342,367).
3. `app/js/clepsydra.js:95-190`, how her widget mounts, poses and parks. Read it to know the box a
   3D canvas must replace. Do not change it.
4. `spike/vendor/three.min.js` and `spike/vendor/GLTFLoader.js` (three r147, MIT, owner-approved
   download). If they are missing, build variant B only and say so.

## Goal — measure, do not polish
Answer one question with numbers: which runtime carries a skinned, animated Clepsydra plus the
painted scene from `file://` inside a budget, and what is that budget.

1. **Placeholder model.** Write `spike/make-glb.js` (node, no npm), which emits a tiny valid GLB:
   - One mesh of about 2k triangles: an upright disc body plus a head disc. It is abstract, a
     stand-in only, never a drawing of her.
   - A 3-bone skin.
   - Two animation clips: `idle` (sway) and `wave`.
   - One 512² base-colour texture, embedded.

   Emit it raw, and also as `spike/model.b64.js`, a classic script setting `var SPIKE_GLB="…"`.
2. **Asset manifest.** In `spike/assets.js`, write `SCENE_ASSETS`, which resolves each GPU input:
   - to a data URI when `location.protocol==='file:'`;
   - to a path otherwise.

   It covers the plate (encode a JPEG copy of the plate, quality ~60, into `spike/plate.b64.js`)
   and the GLB. There is one loader and one error path, and that path shows the still plate.
3. **Variant A** (`spike/a-three.html`): three r147 classic.
   - A fullscreen plate quad whose fragment shader flickers lamp light around the wick, with a
     shader flame at the wick mapped through one `toView(rect)` function.
   - The placeholder model on its own transparent canvas at z150, playing `idle` and `wave` on a
     button, capped at ≤15 fps idle.
4. **Variant B** (`spike/b-min.html`): the same page on a hand-written minimal WebGL1 renderer.
   It parses the GLB, handles linear skinning of 3 bones, and plays clip sampling. Write no more
   than it needs.
5. **Both variants** share the following:
   - A 30 fps cap at DPR 1, and a hidden tab stops all frames.
   - Reduced motion shows the still plate and draws one static model frame.
   - `webglcontextlost` / `webglcontextrestored` are handled on both canvases. On loss, switch to
     the still fallback and never retry in a loop.
   - A capability tier runs before any heavy load. No WebGL, or a `failIfMajorPerformanceCaveat`
     failure, means 2D: the still plate plus a PNG from `app/assets/clep/` shown via `<img>`, and
     that file is never modified.
   - A frame-time monitor applies the shed order from the plan: lightning, then tilt, then weather,
     then smoke, then parallax, then still. The spike stubs the stages it does not draw, and each
     step is logged.
   - A `?force=2d`, `?force=lost` and `?throttle` query hook, so the checks can drive each path.
6. **Storage check (read only).** It is already known that `S.answers[qid]` keeps only the LAST
   answer (`{pick,ok,at}`, `quiz.js:477,504`). `S.days[iso]` is `true` (`utils.js:95`), and
   `S.srs[qid]` is `{lvl,due}`.

   Confirm or refute this, then list what each planned metric needs:
   - daily count with repeats;
   - weak-spot most-wrong;
   - letters due;
   - mastery.

   For each metric, say whether it is derivable today or needs a new additive field. Propose the
   smallest field names and shapes. Do not add them.
7. **Measure script.** Write `spike/measure.mjs`: node plus headless Chrome over CDP, modelled on
   `progress/app-replan/p5/shoot-home.mjs`. It runs from `file://` with a
   `--user-data-dir` path free of `--`, and measures:
   - load time to first frame;
   - fps over 10 s at 1× and 6× CPU throttle;
   - JS heap;
   - whether the fallback fired under `?force=2d` and `?force=lost`.

   The orchestrator runs it outside your sandbox. You may not be able to run Chrome; say so plainly
   if you cannot.

## Report — `progress/app-replan/p5/spike-report.md`, ≤ 80 lines
- Bytes per file, raw and base64: three + loader, variant B's code, the GLB, the plate.
- Which checks you ran, and which are left for `measure.mjs`, named as such.
- **Proposed budgets:** transfer, base64 total under `file:`, decoded RAM, GPU textures, and the
  frame budget per tier. Give the reasoning in one line each.
- Recommendation A vs B, with the three facts that decide it.
- The storage-check table from step 6.
- Anything NOT verified, named.

## Rulings that bind
- Vanilla classic scripts: no `import`/`export`, no npm, no CDN URL in any file.
- No emoji; no gradients in interface chrome (the shader light on the plate is scene art, which is
  exempt).
- `prefers-reduced-motion` stops every loop, JS timers included.
- Lightning is not in scope.
- The Clepsydra PNGs are never modified or redrawn, and nothing is drawn onto them.

## Do not
- Touch `app/`.
- Commit, push, `git add` or tag.
- Download anything.
- Start a second Codex job.
- Generate art.
