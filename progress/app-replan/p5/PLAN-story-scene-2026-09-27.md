# Herophilus — the whole site as one story, from the first visit on (plan, 2026-09-27)

## Context
The 3D desk (`progress/app-replan/p5/desk3d/`) is a standalone prototype: R6-proven interaction, modelled
assets in progress (Part A done, render sent; Max glTF test paused mid-run by plan mode). The shipping app
(`app/`) has no scene layer: gate = HTML cards over a film (`js/gate.js:547-665`), home = cards
(`render.js:174`), 12 views switched by `render()` (`render.js:49-86`), browse vs reading split by
`STILL_VIEWS` (`render.js:19`), Clepsydra a 2D DOM figure at z 150 (`js/clepsydra.js:95-164`),
`app/js/desk-data.js` written but unwired. The owner wants the whole site to be one scene, starting before
sign-in, as a scripted story with the Clepsydra as the main character.

Owner answers 2026-09-27:
- First-ever visit, before sign-in: a cinematic. Clepsydra wanders ancient Alexandria at night, finds a
  hidden ancient library, explores it, finds a key chain with **two keys (1st and 2nd semester)** and faces
  **five doors (five years)**. Then the user chooses door + key (year + semester), Telltale-style.
- Profiles: signatures in a register on the desk.
- Reading views: freeze + dim, the render loop stops.
- Phones: tier by measured fps, painted plate fallback.
- Clepsydra: a **3D version of her** — supersedes "the Clepsydra is never modelled" in
  `PLAN-graphics-2026-09-27.md` and `desk3d-model1-brief.md`. The 2026-09-23 ruling still binds: she stays
  recognisably herself; a test render the owner sees comes first; no upload before he picks the licence.
- Cinematics at: first-visit intro, daily return, milestones, exam countdown.
- Voice-over from the start.

Interview, 2026-09-27 (round 2):
- She **walks on legs**; her face has **eyes and a mouth, lip-synced**; she **speaks in the first person**.
- The intro is a **skippable cutscene** of **~90–120 s**, then Telltale choices.
- Audio is an **original score plus full sound design** (footsteps, wind, sea, keys, doors).
- **Empty years are sealed doors with light at the seams**: they cannot be chosen and unseal as content
  arrives.
- The owner left tools to my choice, "whichever gives the best quality".

Corrected 2026-09-27, after the C1 sheet (`p5/story/C1-character-sheet.md`): she ALREADY has eyes, a
mouth and thin unjointed rod legs. The 3D version gives her jointed legs in the same thin style and a
rigged mouth. That is an extension of her design, allowed under the 2026-09-23 ruling (poses and 3D may
change, identity is fixed), and it reaches the owner as a test render before any final art.

The doors and keys map one-to-one onto the data that already exists: `TERMS` in `app/data/modules.js:39-49`
is exactly 5 years × 2 semesters (`y1s1`…`y5s2`). Today's picker is `termPick()` / term step in
`app/js/theory.js:57-135`, which sets `S.term`; entry is gated in `enterProfile()` (`gate.js:724-735`,
`termEntryPending` at `gate.js:304`). Only `y4s2` has content today.
- A door is sealed when its year has no content: glowing seams, chained, not choosable.
- A key does not turn in a door whose semester is empty. In door IV today, key I is sealed and key II turns.
- Sealing uses the same emptiness test `vEmptyTerm` (`theory.js:137`) uses, so doors unseal by themselves
  as content lands.
- The settings term picker and the no-WebGL fallback follow the same rule.
- A profile already sitting on an empty term keeps it; nothing is migrated.

## The story, shot by shot (the screenplay C4 expands)
1. **Tap to enter** (one tap; browsers block audio without one — it is also the physical cause of what follows).
2. **Alexandria by night**: moonlit streets, colonnades, the Pharos light sweeping in the distance, sea
   wind; she walks, the water in her vessel catching the moon. She speaks, in the first person, lip-synced;
   the score enters under her.
3. **The hidden library**: a door in a wall, lamplight behind it; she steps in; shelves, scrolls, dust in the air.
4. **The keys**: on a reading stand, a chain with two keys; she lifts it — the keys ring.
5. **Five doors**: a hall with five doors, numbered I–V; she turns to the viewer.
6. **The choice (interactive)**: live-HTML choice cards over the scene, Telltale-style.
   - Hovering a door turns her toward it. Sealed doors glow at the seams and answer with a line of hers
     ("not yet").
   - Then the two keys; a key for an empty semester will not turn.
   - Keyboard and screen-reader usable.
7. **The door opens** (key turns, light spills out) → **sign-in** HTML over the lit room beyond → **the register**
   (profiles as signed lines) → the camera settles on **the desk**: the home.
- Skip is always available (click/key), and jumps straight to shot 6.
- Returning device: no intro; the door of the profile's own term opens straight onto the desk; once a day
  the short daily-return beat plays.
- Changing term later (settings) replays shots 5–7 only.
- Reduced motion: shots become still frames with captions; voice still plays.
- The pending door + key choice is held until `enterProfile()`, and applied only if that profile has no
  term yet (the `termEntryPending` path). A profile that already has a term keeps it; the owner confirms
  this in the C4 screenplay review.

## Architecture
- **Shots 2–5 are pre-rendered film, not real-time.** They are non-interactive, so an offline-rendered
  film gives console-grade quality at zero runtime GPU cost.
  - Two encodes: 1080p (laptop/iPad) and 720p (phones), H.264, played by a `<video>` like today's
    `.film` (works on `file://`).
  - Captions are live DOM text, synced to the video clock.
  - Voice, score and sound are mixed into the film's audio track with ffmpeg.
- **Toolchain, chosen for quality on this PC**: RTX 3050 Laptop with 4 GB VRAM, i7-11800H, C: 7 GB free,
  D: 97 GB free (measured 2026-09-27).
  - **Blender** is the hub: modelling, Rigify body rig, face shape keys, glTF export to three.js.
  - **EEVEE** (raytraced) renders most film shots; **Cycles/OptiX** renders the hero close-ups. At
    90–120 s, 30 fps (~2,700–3,600 frames), all-Cycles would cost roughly 25–60 h of rendering; EEVEE
    costs a few hours. Both figures are estimates, to be measured on the test shot.
  - **Cascadeur**: physics-assisted body animation, so the walk and the key lift carry weight. Retargeted
    onto the Rigify rig.
  - **Rhubarb Lip Sync**: an offline CLI that turns the voice audio into mouth shapes, which drive visemes.
    Expressions (brow, eyes, blink) are hand-keyed.
  - **Unreal Engine 5 is ruled out on this machine**: 4 GB VRAM is under its 8 GB recommendation for
    Lumen city scenes; its caches default to C:, which has 7 GB free; and a second lighting pipeline would
    break the film-to-three.js handoff match.
  - Revisit UE5 only on a bigger GPU.
- **Shots 6–7 and everything after are real-time three r147.** The film's last frame and the real-time
  first camera are the same shot, so the handoff is invisible: a physical continuation, no fade from nothing.
- **One persistent scene host** behind the DOM app: a single WebGL canvas at the bottom of the z-stack
  (below Clepsydra 150 / gate 200 / confetti 250 / modal 300 / toast 400). Browse views get transparent
  backgrounds; the DOM stays the real UI (text never breaks, a11y intact).
- **Camera stations, not pages**:
  - doors hall = term choice
  - register = profile step
  - desk overview = home
  - inside the opened book = module
  - scroll = schedule
  - paper pile = review

  `go(v)`/`render()` stay the router. A new `scene.goTo(station)` is called beside `syncFilm()`
  (`render.js:37-47`), reusing desk3d's `tween()`/`camTo()`/`fitCamera()`.
- **Reading views** (`STILL_VIEWS`): the camera eases to the open book, draws one frame, dims it, and stops
  the RAF loop. Her 2D quiz dock stays as today (her glitch is not gated, per ruling).
- **Progressive enhancement; boot never waits**: scene scripts and data load after first paint, with a
  timeout like `loadSDK()`. If there is no WebGL, the tier is low, or the timeout hits, the user gets
  today's gate/term picker/home or the painted plate. The `file://` Google-button swap stays.
- **Lazy payload**: classic `<script>` tags appended on demand. The desk glb, her glb, the doors hall and
  the audio are separate base64 data files, each ≤ 16 MB; totals are measured and recorded. The film is a
  plain file next to `index.html`.
- **Real-time cinematic engine = data + a small sequencer**:
  - `app/data/scenes.js` (`var SCENES`): per scene, a trigger and shots `{camera keys, duration, her clip,
    line id, caption, sfx}`.
  - It drives camera tweens and `THREE.AnimationMixer` (core three) for her clips, captions on the audio
    clock, Skip, and a once-per flag.
  - Used by the daily return, milestones, exam countdown and shots 6–7.
- **New storage keys only, never a rename**:
  - `wardround.seen.intro` (device)
  - `wardround.voice` (device mute/volume)
  - per-profile daily and milestone flags inside the profile state

## Stages (one bounded job each; an owner render/film after each)
- **C0 — finish the desk** (in flight):
  - Resume the Max glTF test: fix the MAXScript top-level `local` compile error, export, validate in
    Blender and the r147 loader.
  - Get the owner's verdict on the Part A render.
  - Part B: glb into desk3d, fps fold-in, drop proof, glb ≤ 16 MB.
  - Refuter, then commit.
- **C1 — her character sheet**: a vision seat reads her existing art (`app/assets/clep/` in git history,
  nine PNGs, plus current live art). It writes the sheet: silhouette, proportions, colours, materials,
  what makes her *her* (memory: she is a clock face, not a girl — look before prompting). Owner confirms.
  No upload anywhere.
- **C2 — her 3D test model**: the owner picks the route first:
  - (a) hand-modelled in Blender or his Max from the sheet, no upload; or
  - (b) image-to-3D (Meshy), which uploads her art, only after he picks the licence.

  The test render shows her legs and face. Then owner sign-off.

  Only then:
  - Rigify body rig.
  - Face shape keys: Rhubarb's 9 mouth shapes plus blink, brow and eye-look expressions.
  - Cascadeur clips: walk, idle, lift keys, turn to camera, point, pour her water, bow.
  - One lip-synced test line, rendered for the owner.
- **C3 — the screenplay**: I draft every shot and every line of hers in plain English: intro ~90–120 s,
  daily return 3–5 s, milestones ~5 s, exam countdown ~8 s. The owner approves the words before any voice
  or film.
- **C4 — the world**:
  - Alexandria night street, library exterior and interior, reading stand, doors hall.
  - Built in Blender (his Max for hand-shaped pieces once C0 proves the export).
  - Any library asset (Poly Haven CC0 models/HDRIs) is a download: listed with sizes, owner yes first.
  - One test still per location, then owner sign-off.
- **C5 — voice, score, sound**:
  - Her voice: the owner picks voice and licence (TTS via `/generate`, or recorded).
  - An original score: generated or licensed, owner picks the licence.
  - Sound effects: CC0 sets, listed with sizes, owner yes before download.
  - Each file is stored with its prompt, source and cost.
- **C6 — the intro film**:
  - One test shot first, to measure EEVEE and Cycles frame times.
  - Then shots 2–5, both encodes, the audio mix and caption timings.
  - Owner film review.
- **C7 — scene host in the app**:
  - Move the desk code into `app/js/scene/` (classic scripts); three r147 + GLTFLoader into `app/vendor/`.
  - Lazy data loader, transparent browse views, tiers + `wardround.gfxTier`, pause/resume on
    `STILL_VIEWS`, fallbacks.
  - App behaviour otherwise unchanged.
- **C8 — the gate as the story**:
  - Intro film handoff to the real-time doors hall.
  - Door + key choice replaces the term picker's look; `termPick()` / `S.term` data path unchanged.
  - Then sign-in and the register (same `gateProfileStep()` data, `enterProfile()` untouched), then the desk.
- **C9 — home = the desk, wired to data**:
  - Load `desk-data.js`; books show mastery arcs/ribbons (`mastery`, `ribbonChapter`).
  - Book → `vModule` inside the page area; Mocks sheet → `vMock`; scroll → `vSchedule` (`nextExam`).
  - Paper pile → `vReview`; letters → flagged/weak; lamp → theme toggle.
- **C10 — the other cinematics**: daily return, milestones (chapter mastered, mock passed, streak / water
  level — every answer counts, 100/day, midnight reset), exam countdown (≤ 7 days via `nextExam()`).
- **C11 — hardening**: fps on the real device mix (laptop + iPad first), refuter, deploy outside the freeze
  (no Pages upload 10-02..03, 10-17..19).

Order: C0 now. C1 and C3 can run beside it (no GPU, no app edits). C2/C4/C5 need owner picks. C6 needs
C2–C5. C7 needs C0. C8 needs C6 + C7.

## Seats
- Main chat: briefs, reads reports, commits and pushes. Never views images.
- 3D build and film (C0, C2a, C4, C6–C9): `lean-drafter` on Opus, prompt opens `ROUTE-OK: Codex cannot
  render; graphics judged on film`. Max work runs headless (`3dsmaxbatch`) on this PC's licensed seat.
- Vision read (C1): Codex `codex exec -i` (owner-trusted for scans), checked by a Claude refuter.
- Screenplay (C3): Claude — her voice is judgement. Voice (C5): `/generate`.
- Every stage: a fresh Opus refuter with real CDP input at 1280x800, 1180x820, 1366x1024, 1024x1366 and
  390x844 before commit.

## Critical files
- `app/index.html`: script order, new lazy loader, intro `<video>`.
- `app/js/render.js`: `render()`, `syncFilm()`, `STILL_VIEWS`.
- `app/js/gate.js`: `showGate`, `gateProfileStep`; `enterProfile` stays untouched.
- `app/js/theory.js`: `termPick` data path kept; look replaced.
- `app/js/desk-data.js`: wire in.
- `app/data/modules.js`: `TERMS`, read only.
- New: `app/js/scene/*.js`, `app/data/scenes.js`, `app/vendor/`, `app/assets/film/`.
- Source to lift: `progress/app-replan/p5/desk3d/{app.js,gfx.js,post.js}`, `blender/build_desk.py`.

## Verification (every stage)
- `node tools/boot-check/boot-check.js`: 0 errors, 4 modules, all chapters.
- `file://` boot with and without WebGL (fallback proven); 0 runtime network except Firebase.
- Desk R6 regression (`check-fix2.mjs`) at the five sizes; word sweep 320→1600 with 0 fails; label contrast
  ≥ 4.5:1.
- fps:
  - high ≥ 60 at 1280 1x
  - iPad sizes DPR 2: high ≥ 50, or a demonstrated drop
  - medium ≥ 30 at 6x throttle
- Story:
  - Skip mid-film lands on the choice.
  - Intro plays once per device.
  - The choice sets `S.term` identically to today's picker (same ids, `at` stamp).
  - Sealed doors and keys refuse, while every term with content opens.
  - Sealing matches the `vEmptyTerm` emptiness test for all 10 terms.
  - A returning profile skips to its door.
  - Reduced motion shows stills.
  - Captions match the audio.
  - No audio before the tap.
  - Reading views draw 0 RAF frames after the dim.
- A film per stage to the owner before the next stage.

## Installs (the owner does these; I never install)
- **Cascadeur**, from cascadeur.com. Needed from C2. Free/indie tier terms, and any export frame cap, are
  UNVERIFIED: check them at install, before relying on it.
- **Rhubarb Lip Sync**, the GitHub release zip (a few MB, no installer). Needed from C2.
- Nothing else. Blender, ffmpeg and Node are already here. 3ds Max waits on the C0 glTF test.

## Owed by the owner (blocks the named stage)
- C0: verdict on the Part A desk render (and the stage-1 films).
- C2: her 3D route (hand-model, no upload / Meshy upload) and, if uploading, the licence.
- C3: approve the screenplay, including the rule that a pending choice never overwrites an existing
  profile term.
- C4: yes/no to CC0 library downloads (list with sizes first).
- C5: the voice and its licence; the score's licence; yes to the SFX download list.
