# P5 reframed — the living desk: one painted world that IS the app

## Context
Owner, 2026-09-26, five rounds of picks in the chat. Together they replace P5 (home), the B1
subject page, the film and orbs, and most of P6/P7/P11, with one world.

- **Scene.** One living painting behind the whole app: the painted room, lamp light, smoke, dust
  and depth. It reacts to the pointer and tilt, to app state, and to scroll. It is calm on reading
  views.
- **Welcome, "lamp catches", every visit:**
  - The room is dark while the app loads.
  - The wick catches, the light spreads, then the UI fades in.
  - Any click or key skips it.
  - It never delays boot.
- **Home in the scene.**
  - A new plate with 4 subject books.
  - A clicked book opens to a spread with turnable pages.
  - The day's sheet is written on the open scroll.
  - A rail "Ledger" holds the rest.
- **Clepsydra as a real-time 3D guide.** Her identity is fixed: an orange water-clock dial with
  hour ticks, cartoon eyes, a white chiton with a gold Greek key, and a laurel crown. She never
  becomes a girl (memory `clepsydra-new-pose-permitted`).
  - A test render goes to the owner before any final art (3D ruling 2026-09-23). Meshy under
    CC BY was approved 2026-09-25 (plan §6).
  - Roles: first-run tour, context hints, reactions to answers, and pointing to explanations. She
    never writes medical content.
  - Tone: a normal, warm human (owner 2026-09-26; was "brief scholar"). No "!", no emoji.
  - **Always present, including in quizzes** (owner). This overrides plan §4 "not on the question
    screen" and softens `CLAUDE.md` §6 "calm to read" for her only.
  - Weak devices auto-fall back to her 2D PNG poses and the still plate. A toggle forces 3D.
- **Intro:** a first-ever cinematic per new profile, 10–15 s, skippable and replayable:
  1. Dark library.
  2. The lamp catches.
  3. She wakes by the bowl.
  4. One line about Herophilus.
  5. The tour starts.
- **Outros:**
  - Session end: she closes the book.
  - Daily target of 100 met: the water clock fills, once a day.
  - "Close the desk": the lamp goes out and she sleeps.
  - Exam send-off: the day before each real exam.
- **Desk objects:**
  - Spaced-review letters.
  - Ribbons and gilded spines on the books.
  - A wax tablet for mocks.
  - The scroll bundle holds theory; the A4 reader stays inside.
- **Features:**
  - Water-clock focus timer.
  - Exam countdown on the scroll.
  - Time-of-day light.
  - Weak-spot drill.
- **Sound:** room sounds, off by default, with several ambiences (rain, storm, sea, and more). Her
  lines appear as text bubbles only.
- **Weather is visible:** the plate gets a window. Rain streaks, storm lightning that lights the
  room, sea waves outside.
- **Order:** "All build now, ignore the exam dates." One-Codex-job-at-a-time still holds, so the
  work runs in parallel lanes (below).

Measured facts this plan rests on:
- The current final plate (`mocks/plates/painted-codex-3.png`, 1916×821) holds:
  - 1 book.
  - A 3-scroll bundle.
  - An open scroll; its sheet (880,455–1500,550) is the brightest region.
  - A pen.
  - **An oil lamp, not a candle.** Wick at (1342,367), no painted flame.
  - A bronze bowl on a basin.
  - It has no window.
- Under `file://`, a WebGL texture from a file throws SecurityError; base64 works
  (`DECISION-2026-09-21.md:11-12`). ES modules die on `file://`.
- Where things are now:
  - `.ambient` film, orbs and scrim: `index.html:50-61`, `views.css:124-233`.
  - `syncFilm()`: `render.js:37-47`. `STILL_VIEWS`: `render.js:19`.
  - Gate film and gorbs: `gate.js:547-558`. Splash spinner: `components.css:782-786`.
  - `vModule`: `render.js:255-313`.
  - Clepsydra widget (bubbles, idle chatter, timers): `clepsydra.js` (`clepMount:95`,
    `clepShow:158`).
- Module sizes: ent 30 chapters, ophtho 39, neuropsych 36, pediatrics 51.

The P5 home build failed the refuter and stays uncommitted. The refuter record,
`p5/REFUTE-round1.md`, is still owed. Rollback tag: `pre-p5-2026-09-25` = `c2ec871`.

## Architecture
**Two layers:**
- **Scene layer:** one fixed `<canvas id="scene">` at z0, raw WebGL fragment pass. It replaces
  `.ambient`, the film, the orbs and the gate film.
- **Clepsydra layer:** her own transparent canvas at her existing z150 slot. Its box moves, so she
  can walk the desk and sit in a quiz corner. Bubbles stay DOM (`aria-live=polite`).

The two layers are split so the scene can stop on reading views while she keeps her low-fps idle.

**3D runtime (spike decides; owner flag):**
- Real-time glTF skinning needs either a vendored single classic file (three.js r147 +
  examples/js GLTFLoader, MIT, committed in `app/vendor/`, no CDN, no npm) or a hand-written
  minimal glb skinning renderer.
- `CLAUDE.md` §7 bans frameworks and npm trees, not a vendored library file. I will still ask the
  owner once the spike shows the size and fps of both.

**Assets:**
- `file://` needs base64 for textures and the glb. `http(s)` (Pages) loads the same files normally,
  so the base64 scripts load only when `location.protocol==='file:'`. The deploy stays lean.
- Heavy assets (the model, time-of-day plates, audio) lazy-load after the desk is shown.

**One mapping:** `Scene.toView(rect)` maps source-plate px to viewport px. It feeds the shader,
the DOM hotspots and her walk targets.

**Scene uniforms:**
- Lamp flicker + shader flame at the wick.
- fbm smoke and dust.
- Parallax.
- Pointer ±10 px; tilt (no permission prompt); scroll push-in.
- Hot rect: light swells on the focused book.
- Focus push-in on open.
- Tint per subject.
- Answer pulse ≤ 600 ms.
- `uIntro`: welcome and intro.
- `uDim`: outro "close the desk".
- Weather on the window region: rain, storm with lightning, sea.
- Time-of-day grade and plate cross-fade.
- Sprite layers composited in-shader, so the lighting matches and nothing looks pasted on.

**Calm and power:**
- `syncScene()` replaces `syncFilm()`. On `STILL_VIEWS` the scene draws one dimmed frame and
  stops; she keeps ≤ 15 fps idle.
- A hidden tab stops everything.
- 30 fps cap, DPR 1.
- **Auto-fallback:** if fps stays under 24 for 3 s, or reduced motion is on, the scene becomes the
  still plate and she becomes her 2D poses. A "Full scene" toggle forces 3D.
- A "Still scene" toggle, two-way.
- Print hides both canvases.
- **Lightning:** at most 3 flashes/s with a capped luminance jump (WCAG 2.3.1). Off under reduced
  motion, with a "No flashes" option.

**Light theme** becomes the **day plate** (time-of-day set), which closes P11. Until that plate
exists, it shows the plain fallback list.

**Storage — additions only, no renames:**
- Synced profile fields: `introSeen`, `tourDone`, `sendoffs` (exam ids shown), `dailyCheer` (date).
- Device keys: `wardround.sound`, `wardround.weather`, `wardround.full3d`, `wardround.focus`
  (timer end timestamp — timestamps, never countdowns).
- Daily count and weak-spot data are **derived from existing attempt data if it holds timestamps
  and per-question wrongs**. The spike checks this. If not, the job stops and reports before adding
  a field.
- Exam dates go in a new `app/data/exams.js`: ENT 22 Sep, Ophtho 27 Sep, Neuro 3 Oct, Peds papers
  17 Sep and 18–19 Oct.

## What each surface becomes
- **Home = the desk.**
  - 4 book `<button>` hotspots with always-visible labels (name, answered/total, accuracy).
    Last-used gets focus first, with a quiet mark. Targets ≥ 44 px. Tab order: books, then scroll,
    then objects.
  - Open scroll (ink on parchment, AA against its darkest pixel): Continue, today's schedule,
    today's count out of 100, exam countdown.
  - At ≤ 600 px the scroll content becomes a sheet card under the books.
  - Fallback: the P5 Home A list, fixed per the refuter (#4 stats/icon, #5 light track, the nits,
    #1 text only on surfaces).
- **Book spread = `vModule`**, route unchanged `go({name:'module',id})`.
  - Page 1: close, name, stats, bank chips (`banksOf` only), Practise all, Unanswered.
  - Then chapter cards paginated by measured fit, with group headings carried over.
  - Every `.ch-row` behaviour survives.
  - Page turn: CSS 3D leaf, 500 ms `--ease-standard`. Controls: buttons, ←/→, PageUp/PageDown,
    swipe. `aria-live` announces "Page n of m". Reduced motion swaps instantly.
  - One page on phones. The page is remembered per module.
  - Ribbon at the resume chapter's page. Spine gilding by mastery.
- **Desk objects (painted sprite layers, state-driven):**
  - Letters stack (0 / 1 / few / many) = SRS items due; click starts review.
  - Wax tablet (blank / half-written) = mock; click starts or resumes a mock.
  - Marked-pages pile = weak-spot drill (most-wrong questions, one session).
  - Scroll bundle = theory chooser; opens the existing A4 reader unchanged.
  - The bronze bowl = water-clock focus timer, 25/50 min. Water drains; she keeps company; a
    break when it empties.
- **Rail "Ledger" view:** stats, saved-mock resume, biography (existing markup moved there), plus
  sound, weather, still, full-3D and no-flashes controls, and "Replay intro/tour".
- **Guide system** (`guide.js`): a line table, triggers and walk targets.
  - Tour: new profile after the intro; skippable; keyboard-driven; focus-managed.
  - Hints: unopened book, wrong streak in a chapter, long idle, unfinished mock, letters piling up.
  - Quiz: always present, small, in a corner measured never to cover the stem, options or Check at
    390 px. Reacts after Check (~2 s). After a wrong answer she points to the explanation and the
    chapter's theory.
  - Lines are written for the owner's review before shipping; tone is a normal, warm human (owner 2026-09-26).
- **Outros:** session end (closes the book on results), daily 100 (bowl fills; she cheers once a
  day), Close the desk (lamp out, she sleeps; the next visit's welcome relights), exam send-off
  (the day before, once per exam).
- **Sound:** lamp, drip and page-turn effects plus ambiences (rain, storm, sea, and more). All
  default off; one picker in the Ledger; weather visuals follow the pick; hidden tab mutes. Files
  must be CC0/CC BY with the licence recorded. Downloads need the owner's yes per file batch.

## Lanes (one Codex job at a time; Claude lanes run in parallel; each job = brief like `p4b-layouts-brief.md`, shots by lean-drafter outside the sandbox, Opus refuter, then commit)
- **Lane A, Codex serial:**
  1. **3D spike** (placeholder model built in code): three r147 classic vs minimal renderer.
     Checks: `file://` embedded glb load, size, fps under 6× CPU throttle, fallback trigger. Also
     checks whether attempt data has timestamps and per-question wrongs. Output: a report.
  2. **Art set, image gen.**
     - Master plate v2 from `painted-codex-3` as reference: same room and style; 4 closed books
       with spines in the subject colour tokens and no text; a window; lamp with unlit wick; bowl;
       scroll bundle; open scroll left blank; free desk space for letters, tablet and pile. The 4
       books + lamp fit inside ~400 source px, so the 390 portrait crop holds them. No figure, no
       text.
     - 3 candidates go to the owner, who picks by eye.
     - Then, from the pick: sprite layers (letters ×4 states, tablet ×2, pile, ribbon, gilt spine
       ×4) and dawn/day/dusk/night variants.
     - The owner checks. I measure `SCENE_MAP` (wick, books, scroll, window, object slots).
  3. **Pilot:** standalone `progress/app-replan/scene-pilot/`. It holds the scene + 3 intensity
     presets, welcome, window weather, books + spread, scroll, one sprite, and the model
     placeholder. Owner eye test in Brave: preset, pulse yes/no, book feel.
  4. **Integration jobs, each shot + refuted + committed before the next:**
     - J1: scene core, welcome, calm/power, gate, fallbacks.
     - J2: desk home, scroll, Ledger view, book spread.
     - J3: Clepsydra 3D + 2D fallback + guide system + quiz presence.
     - J4: desk objects, drill, countdown, focus timer, daily count.
     - J5: sound, weather, time-of-day, day plate as light theme.
     - J6: intro cinematic + the 4 outros.
- **Lane B, Claude, parallel.** Each prompt opens `ROUTE-OK: Codex lane busy, one-job rule`.
  - lean-drafter: pure data functions in `app/js/desk-data.js` with an assert self-check: letters
    due, mastery for ribbons and gilt, weak-spot set, daily count, next exam. Codex J4 wires them.
  - lean-drafter: her line sheet (`p5/guide-lines.md`) for the owner's review.
  - researcher: CC0/CC BY sound sources with licence, size and length. No downloads until the
    owner says yes.
- **Lane C, owner + Claude.**
  - I prepare the Meshy input pack: 3 of her existing poses, looked at first, plus a written
    identity spec.
  - The owner runs Meshy on his account. No upload by me, and no key in a file.
  - Test render to the owner, who approves.
  - Auto-rig and animations: idle, walk, wave, point L/R, think, cheer, sad, sleep, close-book, sit.
  - The model is decimated for web; size is measured.
  - The approved glb feeds J3.
- **Before J1:** write `p5/REFUTE-round1.md`, tag `pre-p5-scene-2026-09-26`, delete the
  uncommitted `desk.css`, `desk.js` and `assets/desk/`.
- **After J6:** Claude updates the docs.
  - PLAN §5 rewritten, with P5 = "Living desk" and absorbed parts of P6/P7/P11 marked.
  - NOTES owner picks; B1 superseded by the book.
  - `CLAUDE.md` §6: "orbs" becomes "scene"; she is present in quizzes by owner ruling.
  - MEMORY: replace lines, never add.

  Ask before every push. Deploy freeze: 09-26..27, 10-02..03, 10-17..19.

## Files
New:
- `app/js/scene.js`, `scene-plate.js` (base64 + `SCENE_MAP`), `app/css/scene.css`.
- `app/js/book.js`, `app/css/book.css`.
- `app/js/clep3d.js`, `clep-model.js` (base64 glb, `file:` only).
- `app/js/guide.js`, `app/js/desk-data.js`, `app/js/sound.js`.
- `app/data/exams.js`.
- `app/vendor/` (only if the spike and owner say so).
- `app/assets/scene/*` (plates, sprites), `app/assets/sound/*`, `app/assets/clep3d/*.glb`.

Changed:
- `index.html`, `render.js` (`syncScene`, home, `vModule`, ledger), `gate.js`, `views.css`,
  `components.css`.
- `clepsydra.js`: her renderer swaps to 3D with 2D fallback; bubbles and chatter logic reused.
- The quiz Check spot (pulse + reaction), results (outro).

Must not change:
- `wardround.*` names and existing shapes; the questions and theory data files.
- `tokens.css` values.
- The print selector.
- Stacking 150/200/250/300/400.
- `app/assets/clep/*` PNGs (they become the 2D fallback, unmodified).
- P4a/P4b behaviour.
- `bankOf(` count.

## Codex debate 2026-09-26 — adopted changes (override anything above that conflicts)
Two read-only rounds on `gpt-5.6-terra`. Round 1 found 1 blocker, 6 high and 5 medium risks; round
2 answered the music and game-feel questions. The raw replies are in the session task outputs; copy
them to `p5/debate-codex.md` at step 0.

**Assets and performance**
- **One manifest.** `SCENE_ASSETS` resolves every GPU input to a data URI under `file:` and a path
  under `http(s)`. One loader, one error path, and that path leads to the static fallback.
- **Model format.** Uncompressed single-material GLB only: no Draco, KTX2 or Meshopt. The classic
  scripts are pinned.
- **Budgets are set in the spike, before any art:** transfer, base64, decoded RAM, GPU.
- **Context loss.** `webglcontextlost` / `webglcontextrestored` are handled on both canvases. On
  loss, switch to the static fallback immediately and never retry in a loop.
- **Capability tier before any heavy load.** Uncertain devices start in 2D. Full scene is a
  per-session opt-in with an immediate escape.
- **Deterministic shed order** when frames drop: lightning, then tilt, then weather, then smoke,
  then parallax, then the still plate. "Full" stays inside the budget: it sheds effects, never
  overruns.

**One control replaces the scattered toggles.** "Cinematic intensity" has three levels:
- Quiet: still plate, 2D guide.
- Standard, the default: lamp, dust, faint smoke; weather off.
- Full: adds tilt and weather.

**Lightning** requires all four: storm chosen, intensity Full, no-flashes off, reduced motion off.
"No flashes" is separate and always wins.

**Clepsydra**
- The guide system ships first on her existing 2D poses: tour, hints, reactions, dock.
- Real-time 3D swaps in only after the owner approves a test render and it meets the budget.
- In quiz views she sits in a fixed, collapsible, non-moving dock. It is out of the tab order
  unless expanded, never takes focus, and auto-minimises while focus is inside the question
  controls.
- Her lines carry no shame language on a wrong answer.

**Art**
- One canonical master plate.
- Time of day is a programmatic grade (window colour, lamp level, ambient), not regenerated plates.
- Sprites are cut from edits of the same master with fixed exported bounds.

**Theme**
- `data-theme` keeps its meaning; time of day is scene-only.
- Light theme: scene OFF by default. It turns on only after measured AA for every foreground and
  background pair in the real composited state, at 100% and 200% zoom.
- No decorative grade ever sits behind text, controls, focus rings or status messages.

**Storage**
- Update `checkedProgressState` (`storage.js:65-72`) and every import, export and backup path.
- Once-only flags merge monotonically: OR, or the latest date.
- The spike must prove each derived metric from the persisted shape. Where it cannot, show an
  explicit "not enough history" state. Daily-100 and the drill are not promised until proven.

**Book** remembers a chapter-id anchor, not a page number, so it survives repagination.

**Exam dates** go in a new `app/js/exams.js`, not `app/data/`, which is closed. It is editable per
term. Send-off and countdown hide when no future date exists.

**Music and sound (Codex Q1, adopted)**
- The set:
  - A 45–60 s main theme loop.
  - 4 subject leitmotif loops, 30–45 s each.
  - Ambience loops: library, rain, storm, sea, night.
  - Stingers: correct, wrong, open book, outro, send-off.
- Each loop comes as full pre-rendered mixes: quiet, standard, full. Switching crossfades at the
  loop boundary over 300–600 ms using `<audio src>`, which works from `file://`, routed through
  `MediaElementAudioSourceNode` for gain only. No stem sync is promised.
- Loops export at exact duration, with the loop length recorded in the manifest. A track that
  cannot loop cleanly becomes a one-shot bed.
- Format: MP3 at 96–128 kbps CBR. First view ≤ 350 KB of audio; everything else lazy-loads after a
  gesture; total audio ≤ 6 MB.
- Music is off until a gesture, then offered through a labelled toggle and a volume slider. Effects
  default low. One master mute. Reduced motion does not mute audio.
- **AI generator licence check — owner reads the current terms before any use.** Confirm:
  - Commercial rights on his tier.
  - Ownership vs licence.
  - Attribution.
  - Redistribution and derivatives.
  - Use in software.
  - Territory, term and revocation.
  - Content ID claims.
  - Indemnity.
  - Transferability.

  Keep, per track: export date, tier, prompt, asset id, and the licence evidence.
- Lane B gains: researcher compares AI music generators' current terms (sources cited, unverified
  marked), plus CC0 ambience sources.

**Game-feel (Codex Q2, adopted)**
- Input feedback: press depth plus a quiet 120–180 ms settle and a soft UI tick. There is no hover
  lift, which stays banned.
- One transition language: fade, card settle, and a desk push-in for scene changes, with a static
  path under reduced motion.
- Celebration micro-sequences use only existing completion events, which the outros already cover.
- Retry flow: immediate feedback, a clear retry control, no shame copy.

**Rejected:**
- Locked chapter maps. No progress gating exists in the data, and adding it would invent semantics.
- Collectible artefacts beyond the ribbons, gilt and letters already planned.

**Added verification gates**
- iOS Safari: a physical device if the owner has one, else marked UNVERIFIED.
- Cold `file://` size and time, and throttled Pages cold load, measured separately.
- Context-loss simulation.
- 200% zoom and text scaling.
- Screen-reader announcements.
- Keyboard escape from every overlay.
- Storage quota and import.
- Two-device sync conflict.
- Audio decode error falls back silently.
- Loop joins listened to in Chrome, Edge and Brave.

**Lane A order becomes:** spike, then master plate, then pilot. J3 lands 2D first; 3D swaps in
after approval. J5 adds music once the owner clears a generator's licence.

## Verification (every job, plus its own list)
- `node --check` on every file touched.
- `node tools\boot-check\boot-check.js`: 0 errors, 6956 / 153 / 4 / 156.
- Boot time is unchanged before vs after, measured.
- `file://`: scene and model render with no SecurityError. Forced no-WebGL: still plate, 2D
  poses, working hotspots. Throttled CPU: the auto-fallback fires.
- rAF: the scene stops on still views and on a hidden tab. Her quiz idle is ≤ 15 fps.
- The Still and Full-3D toggles work both ways.
- Hotspots sit on the painted objects at 1280×800, 820×1180, 1180×820 and 390×844 (overlay shots).
  Targets ≥ 44 px. Tab order is correct.
- In a quiz she never overlaps the stem, options or Check (box intersection = 0 at all 4 sizes).
- Book: every `vModule` control survives, checked element by element against `pre-p5-2026-09-25`.
  Pediatrics (51) paginates with no clipped rows. Back returns to the same page.
- The welcome, intro, tour, outros and send-off:
  - Each fires once as specified, in a scripted run with a date override.
  - Each is skippable by click, key and Esc.
  - Each is absent under reduced motion (still end state).
- Lightning ≤ 3 flashes/s, off under reduced motion and no-flashes. Audio never plays unasked.
- AA at 4 sizes over the brightest frame of each time of day, including scroll ink.
- Light theme (day plate or fallback list) passes AA.
- Greps in new code: emoji 0; `:hover`+transform 0; `ease-spring` 0; `backdrop-filter` 0;
  border-left ≥ 3px 0; no CDN URLs; no `import`/`export`.
- `desk-data.js` self-check passes.
- The Clepsydra PNGs are byte-identical (`git diff --stat -- app/assets/clep` empty).
- The owner's eye on: plate candidates, the 3D test render, the pilot, the line sheet, and each
  job's shots.
