# Resume — put the app's depth and colour back

Written 2026-09-08 for a fresh chat. Everything needed is on disk; nothing lives only in the dead
session.

## The one-line state

Three commits shipped and pushed on 2026-09-07 night (frames, reveal fix, press feedback). The
owner then said the app **"still feels very dead and dark"**, was interviewed, and the fix is
specified. A Sonnet agent built and validated the whole apply pipeline, then **died to a session
rate limit immediately before writing a single byte.** `app/index.html` is clean at `45a66d8`.

## Read these two files first, in this order

1. `progress\redesign-spec-2026-09-07-owner-interview.md` — the owner's answers. This is the
   specification, not a suggestion.
2. `C:\Users\Alfa388\AppData\Local\Temp\depthwork\notes-depth.md` — the dead agent's working notes.
   It records three special-cased selectors and a four-selector skip list that took real work to
   find. **Do not re-derive these.**

The original brief is `C:\Users\Alfa388\AppData\Local\Temp\depthwork\brief-depth.md` — still valid
word for word, including the narrow write grant that overrides `AGENTS.md` rule 1.

## What is already done and must not be repeated

`C:\Users\Alfa388\AppData\Local\Temp\depthwork\` holds a **validated** diff pipeline. It was
spot-checked against a dozen selectors by hand before the agent died.

    morning.html            the app at f7c359d, before the stripping pass. READ-ONLY reference.
    diff2-result.json       the answer: 136 ADD / 41 SKIP_LIVE_HAS_IT / 4 SKIP_NOT_FOUND
    diff2-mismatches.json   20 raw count mismatches; only the 4 mark.hl and .streak are real
    live-all-offsets.json   byte offsets into the live file, for applying edits
    morning-all.json        860 rule-blocks from morning.html
    live-all.json           971 rule-blocks from app/index.html
    extract-css2/3.js, extract-all.js, diff2.js, parse-offsets.js, apply-edits.js

`apply-edits.js` was mid-write when the agent died — **treat it as unfinished, verify it before
running it.** Everything else is complete.

The 136 ADDs break down as **box-shadow 110, linear-gradient 16, radial-gradient 5,
backdrop-filter 5.**

## Task 1 — restore the depth

Apply the 136 ADDs. The measured damage:

    box-shadow        137  ->  10
    linear-gradient    25  ->  11
    radial-gradient    26  ->  21
    backdrop-filter    11  ->   8

Asked whether to restore some or all, the owner said **all of it**.

Three selectors are **not** plain adds — the live file has a deliberate light-theme pattern
`prop: var(--light-X, DARK_FALLBACK)` that a *different* commit added and that must survive:

- **`.modal`** — restore the dark fallback only, to morning's
  `linear-gradient(160deg,rgba(24,40,60,.96),rgba(14,25,40,.98))`. Verify the exact value off
  `morning.html` before writing. Its shadow and blur are already present.
- **`.streak`** — restore the dark fallback only, to morning's
  `linear-gradient(135deg,rgba(255,201,74,.16),rgba(255,90,95,.13))`. Verify it. **Do not touch**
  `:root[data-theme="light"]{--light-streak-background:var(--card)}`.
- **`.results`** — add `backdrop-filter:blur(18px)` and its `-webkit-` twin as plain declarations.
  No var wrapper exists here; do not invent one. Its shadow is already present.

Two shadow values that look alike and are not: `button.card:active` carries
`0 2px 7px rgba(0,0,0,.2)` and belongs on the **earlier** of its two live rule-blocks;
`.btn:active` carries `0 2px 7px rgba(0,0,0,.3)`. Do not conflate them.

**Skip list — do not recreate these four.** `mark.hl[data-c="y"|"g"|"p"|"b"]` were standalone in
morning and are merged into compound selectors (`mark.hl[data-c="y"],.pen.y`) in the live file.
Restoring morning's shadow there would override `.pen`'s own shadow through the cascade.

**Never touch a `transition` property list**, even where morning's had a `box-shadow` entry the
live one lacks. Out of scope; note it in the report instead.

## Task 2 — lighter, and more colour

Asked whether the problem was dark backgrounds or too little colour, the owner said **both**.

- Lift the dark page, card and raised-fill grounds. They were deliberately moved onto a warm axis
  by `895da14` — **keep the warmth, raise the lightness**, and keep the steps between the three
  visibly distinct afterwards.
- Put real colour back on buttons, chips and progress bars, which are near-monochrome. Inside a
  subject's own pages that colour is **the subject's colour** — an existing standing decision.
  The subject colour already reaches the rail and the headers; extend it.
- **Re-measure text contrast** against the **darker** gradient stop after any fill change, and
  report the numbers.

## Untouchable — every one of these shipped tonight or was ruled by the owner

- Profile frames: `.fr`, `.fr-mount`, `.fr-moulding`, `.fr-walnut`, `--fr-t`, `--fr-c`, `avFrame()`.
- `revealOnScroll`, the `.reveal` CSS, `rootMargin`.
- Every `:active` rule — press feedback is deliberate.
- The live score stays **out** of the study run.
- The subject page stays a contents list; it is being redesigned in Phase 2, so rolling it back
  would spend the week undoing something due for rebuild.
- The Clepsydra, the logo, the name, the module card paintings. She is never redrawn.

## Gates

    node tools\boot-check\boot-check.js
    node tools\build-launch.js
    node tools\dist-check.js

Healthy: `QUESTIONS 4049 · THEORY 81 · MODULES 4`, 153 chapters, 81 rows rendered, **0 console
errors**, dist-check 8/8. `boot-check` refuses to run under a path containing `--`. Check both
themes and test printing. Confirm `tr -cd '\r' < app\index.html | wc -c` is still **0**.

## Environment traps that cost real time here

- `cd "<path>" && git …` is denied by permissions; `git -C "<path>" …` is not. Same for `rm -rf`.
- Python writes CRLF on Windows — pass `newline=''` on **every** read and write of a project file.
- A Bash heredoc over ~7 KB fails to parse; use the Write tool.
- Sonnet hit a session rate limit at 21:20 on 2026-09-07, resetting 00:10 Africa/Cairo. Haiku was
  unaffected all evening.
- `git commit -F <msgfile> -- <paths>`, always. Never `git add -A` — a dozen files in this tree
  belong to other sessions.

## Do not open

`app\data\questions.ent.js`, `questions.peds*.js`, `questions.ophtho.js`, `questions.neuro.js` —
multi-megabyte transcribed commercial banks. Nothing here needs them.

## Done looks like

Depth restored, grounds lighter, colour on the furniture, gates green, one commit in the project's
prose voice, pushed. Then the owner opens the app and says whether it is alive yet.

## After that — Phase 2, not before the exams

`progress\redesign-spec-2026-09-07-owner-interview.md` carries it: the whole app, a properly
playful voice, bold shapes on browsing screens only, much more artwork. The frame craft stays on
the avatars. ⚠️ Playful and "must not read as AI-built" pull against each other — playful has to
come from being specific and wry, never from exclamation marks or cheering. Show the owner options
before any of it ships.
