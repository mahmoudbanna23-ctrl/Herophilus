# Codex debate on the living-desk plan (2026-09-26)

Seat: gpt-5.6-terra, read-only, two rounds. Raw final replies below; adopted outcomes are in the plan section 'Codex debate 2026-09-26'.

## Round 1 — risks

AGENTS.md loaded - Herophilus

## Part 1 — Execution risks

1. **Blocker — `file://` asset strategy is internally inconsistent.** The plan says textures and GLB must be base64 under `file:`, yet also lists normal external PNG plates, sprites, audio, and GLB assets. WebGL cannot safely texture file-origin images, and `fetch()`/XHR cannot reliably load the GLB. Evidence: `app/index.html:50-56` already uses file assets for DOM video/poster; plan claim not checked. Fix: make the WebGL scene consume one tested embedded asset manifest for *all* GPU inputs, or use a 2D DOM/canvas fallback—not conditional individual loaders.

2. **High — three.js r147 plus GLTFLoader is not “a vendored single classic file.”** `GLTFLoader` is a separate examples script and can pull decoder dependencies for common compressed GLBs. A hand-written skinned-GLB renderer is substantially riskier than the plan admits. Evidence: not checked. Fix: spike only an uncompressed, single-material, modest-bone GLB with pinned classic scripts; reject Draco/KTX2/Meshopt and set a hard compressed-transfer and decoded-memory budget before art production.

3. **High — two WebGL canvases double the fragile resource path.** Context loss, GPU memory pressure, shader compilation stalls, and iOS Safari’s tight GPU/process limits can leave one canvas black while the DOM remains interactive. The proposed FPS detector will not necessarily catch a lost context. Evidence: `render.js:19,37-47` currently only manages a DOM video; no context lifecycle exists. Fix: listen for `webglcontextlost/restored` on both canvases, immediately switch to static plate/PNG, preserve no GPU-only state, and never auto-retry indefinitely.

4. **High — fallback after three seconds is too late and “force 3D” is unsafe.** On a mid-range Android under slow 3G, base64 decode, texture upload, model parse, and two render loops can freeze before measured FPS exists. Forcing 3D defeats the accessibility/performance protection. Evidence: not checked. Fix: capability-tier before loading heavy assets (WebGL2/texture limit/device memory where available), default 2D on uncertain devices, and make “Full scene” a per-session opt-in with an immediate escape.

5. **High — base64 duplicates large data in memory.** JS source string, decoded binary, image decode bitmap, GPU texture, and GLB buffers coexist; variants multiply that. It also inflates `index`/script parse cost and harms file boot. Evidence: `app/js/boot.js:41` documents only a 1.5 MB backup ceiling amid tight browser storage; plan’s asset budget is not checked. Fix: require budgets for transferred, base64, decoded RAM, and GPU VRAM; use one master plate plus colour grades where possible, and do not embed audio.

6. **High — always-present guide conflicts with clinical reading and keyboard use.** Existing code deliberately parks Clepsydra left on quiz-like views to avoid controls (`clepsydra.js:177-190`), while the plan requires constant presence and moving walk targets. “Intersection = 0 at four sizes” misses zoom, dynamic stem length, browser toolbars, translation/accessibility font scaling, and keyboard focus. Fix: use a fixed, collapsible, non-moving quiz dock; it must be excluded from tab order unless expanded, never steal focus, and automatically minimize on focus within question controls.

7. **High — new synced fields may be silently dropped.** Progress is validated through `checkedProgressState()` before merge (`storage.js:65-72`), and cloud saves serialize the full `S` object (`storage.js:140-166`). The plan does not inspect schema validation, merge behavior, exports/imports, backup limits, or concurrent-device conflict resolution. Fix: inspect/update the validator and every migration/import/export path; define monotonic merge semantics for once-only flags and device-vs-profile ownership before adding fields.

8. **Medium — “derived” metrics are likely not derivable historically.** Current saved state initializes `answers`, `srs`, `days`, etc. (`storage.js:43`); quiz in-session attempts are separate (`render.js:316-317`). The plan’s timestamp/per-question-wrong premise needs proof from actual persisted answer shape, including old profiles. Fix: specify exact derivation and an “unknown/not enough history” state; do not promise daily 100 or most-wrong drill until the spike proves it.

9. **Medium — book pagination by measured fit will be unstable.** Font loading, device text size, resize, DPR, and headings can repaginate; remembered page number will then point elsewhere. Existing reader solves this by anchoring to a section on resize (`clepsydra.js:133-137`). Fix: persist a chapter-id anchor, not page number; disable page-turn animation during reflow; test screen readers and print independently.

10. **Medium — art pipeline will drift.** Regenerating dawn/day/dusk/night plates and separate sprite layers will not maintain pixel-identical geometry, perspective, shadows, or lamp/window alignment. `Scene.toView()` cannot solve artwork that moves. Evidence: plan’s `SCENE_MAP` assertion not checked. Fix: generate one canonical master plate, derive grades programmatically, and create sprites from that same source with fixed exported bounds.

11. **Medium — weather and light theme are conflated.** Replacing the existing semantic light theme with an art plate can regress rail, gate, modal, and clinical-content contrast; current CSS has many light-theme-specific rules (`views.css:349-460`). Fix: retain `data-theme` semantics; scene time-of-day is visual preference, not theme state.

12. **Medium — verification misses real delivery gates.** It lacks iOS Safari physical-device testing, offline cold-load size/time, context-loss simulation, zoom/text-scale, screen-reader announcements, keyboard escape recovery, storage quota/import, cloud conflict, and audio decode/error tests. It also claims an unchanged boot time despite adding deferred but potentially parse-heavy base64 code. Fix: add explicit budgets and those test cases; measure cold `file://` and throttled Pages separately.

## Part 2 — ranked design and feature suggestions

1. **Highest impact / moderate cost: make the desk a restrained cinematic shell, not a perpetual effect.** One excellent painted plate, lamp state, subtle dust, and strong soundless transitions will feel more premium than smoke, tilt, weather, lightning, cross-fades, sprites, and a 3D character competing at once.

2. **High / low: prioritize interaction polish.** Book opening, page turns, object hover/focus states, instant input response, excellent typography, and clean state transitions are what make this feel authored rather than AI-generated.

3. **High / moderate: keep Clepsydra 2D first.** A beautifully art-directed sprite rig with a few high-quality poses can feel deliberate. A low-poly Meshy character with weak skinning, generic motion, or uncanny eyes will read cheaper than the current illustrated identity. I would reject the 3D guide unless the approved test is genuinely excellent; cost is losing the “real-time 3D” ambition.

4. **High / low: use AI art as source material, then art-direct it hard.** Lock composition, palette, camera, silhouette, and sprite bounds in one master. Avoid generated text, inconsistent Greek motifs, random books, and pseudo-medical props.

5. **Medium / low: cut lightning and device tilt.** Both add risk and can read like a template effect. Rain ambience and a subtle window grade provide the same mood more elegantly.

6. **Medium / moderate: add authored micro-cinematics only at meaningful milestones.** Lamp catch, book close, and water-clock fill are sufficient. Cut the exam send-off unless dates are profile-specific; fixed exam dates are inappropriate for a reusable profile system.

7. **Medium / low: add a “cinematic intensity” control.** Quiet / Standard / Full is clearer than scattered weather, still, flash, and 3D toggles, while respecting reading and accessibility.

## Top 5 changes to the plan

1. Make 2D Clepsydra the launch requirement; gate 3D behind a strict approved-art and device-budget spike.
2. Use one canonical plate and programmatic grades; stop regenerating spatial variants.
3. Define asset/RAM/GPU budgets and capability-tier loading before the art lane.
4. Preserve semantic light/dark theme; make time-of-day scene-only.
5. Add storage-schema migration, iOS/context-loss, zoom/accessibility, and cloud-conflict gates before J1.

[exited with code 0]

## Round 2 — soundtrack, game feel, corrections

AGENTS.md loaded — Herophilus

Q1. Soundtrack design

- One 45–60 s main-menu loop; six 30–45 s subject leitmotif loops; short ambient loops for library/rain/night; correct, wrong, unlock, return, and exam-outro stingers.
- Every scene/view chooses a pre-rendered loop variant: `quiet`, `standard`, and `full`. Variants are complete mixes, not separately synchronised stems. At a loop boundary, crossfade the current `<audio>` element into the target variant over 300–600 ms. This is the reliable `file://` route: `<audio src>` works locally, whereas `fetch(file:)` plus `decodeAudioData` does not.
- Route each media element through `MediaElementAudioSourceNode` solely for gain fades/master volume. Do not promise sample-accurate stem layering from several independent HTML media elements.
- Export exact-duration loops with a tiny safe tail, test the audible join in Chrome/Edge/Safari, and record loop length/intro offset in the asset manifest. If a track cannot loop cleanly, use a one-shot scene bed rather than faking a loop.
- Use MP3 (around 96–128 kbps CBR) as the primary broadly supported local format. Cap the initial route’s audio at 350 KB and lazy-load all non-current music after interaction. Set a total audio-transfer cap, e.g. 6 MB, including variants; do not preload the collection on slow 3G.
- Default: music off until the first user gesture, then offer a clearly labelled Music toggle and volume slider; sound effects may default low/on, with one master mute. Respect reduced motion separately—audio should not disappear merely because motion is reduced.
- Before using any AI generator output, the owner must read its current terms and confirm: commercial-use rights for the subscription/tier used; whether ownership is assigned or merely licensed; attribution requirements; redistribution and derivative-work rights; whether output may be used in software; territory/term/revocation rules; Content ID or platform-claim policy; training-data/indemnity terms; and whether collaborators can transfer the licence with the app. Keep the export date, account/tier, prompt, asset ID, and licence evidence with each track.

Q2. Six game-feel additions

| Addition | Cost | One risk |
|---|---:|---|
| Consistent input “juice”: button press depth, hover sound, 120–180 ms release | S | Can become noisy or slow keyboard use if overdone |
| A restrained chapter-map reveal with locked/unlocked states | M | May imply progress semantics the existing data cannot support |
| One coherent transition language: fade, card settle, scene-door wipe | M | Motion can harm comfort unless reduced-motion has a static path |
| Progress celebration micro-sequence using existing completion events | M | Must not overstate mastery or create medical-content claims |
| Collectible non-medical desk artefacts tied to milestones | M | Requires a durable, migration-safe persistence model |
| A polished fail-state/retry loop: immediate answer feedback, retry affordance, no shame language | S | Can conflict with existing quiz scoring and accessibility announcements |

Q3. Still wrong or incomplete

- P2-1/P2-5: the conditional defaults reduce risk, but do not replace explicit performance budgets and a deterministic degradation order for smoke, weather, tilt, and lightning. “Full” must remain within the already-defined GPU/frame budget, or shed effects rather than merely loading them because the user selected Full.
- P2-6: the proposed editable `app/data/exams.js` conflicts with this repository’s standing rule that `app\data\` is closed. The plan needs a permitted persistence/configuration location or an owner-approved exception; it cannot rely on editing that file.
- Light theme: “day-grade passes AA over the whole UI” is not a sufficiently testable scene rule. Keep the scene off by default, but define approval as measured contrast for every foreground/background UI pairing in the actual composited light-theme state, at normal and 200% zoom. Decorative grade must never sit behind text, controls, focus rings, or status messages.

[exited with code 0]
