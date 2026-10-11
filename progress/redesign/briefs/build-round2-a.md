# Build A, round 2 — remove the scroll cue, warm skin app-wide, left rail

You are one bounded builder job. Read this brief, then `progress/redesign/briefs/round2-plan.md`
sections "Footprint rule", "1. Remove the scroll cue", "2. Warm skin", "3. Left rail" and
"Verification". Do NOT do sections 4, 5 or 6 (doors, upright hall, typography): another job owns
them.

## Where
Worktree `D:\claude os\Medical school\Herophilus-redesign`, branch `redesign/factory-2026-10`.
Never touch `D:\claude os\Medical school\Herophilus` (the main checkout). No git writes at all:
no add, commit, push, stash, checkout. The orchestrator commits.

## Write grant (nothing else may be created or changed under the worktree)
- `app/js/hall.js` — only: delete the scroll cue and inject one more stylesheet link.
- `app/css/hall.css` — only: delete the scroll cue rules.
- `app/css/warm.css` — new.
- `progress/redesign/shots/r2a-*.png` — new stills.
- Scratch: `D:\scratch 2026\redesign\round2\` (scripts, Chrome profile; no `--` in any path).

Zero lines in: `app/index.html`, `render.js`, `storage.js`, `quiz.js`, `boot.js`, `gate.js`,
`theory.js`, `clepsydra.js`, `tokens.css`, `base.css`, `layout.css`, `components.css`,
`views.css`, `print.css`, anything under `app/data/`. No `wardround.*` key. If the job cannot be
done inside this grant, STOP and report why; do not widen it yourself.

## What the owner said (his words, the whole reason for the job)
"Remove the "Scroll" box at the bottom, change the boxes over all this dark blue doesn't match
the whole theme ... edit the left side tool bar so it goes on with the whole theme, don't forget
that our general whole theme is ancient Alex and greek". Box edge: he picked a warm gold glow in
place of the light-blue one.

## Hard look rules
- Plain HTML/CSS/JS, no framework, no build step, no CDN, must open from `file://`.
- Dark look: no navy anywhere on screen. Warm dark stone and aged bronze, sampled from
  `app/assets/hall/hall-dark.jpg` (sample real pixels with a script; the starting values in the
  plan are starting values).
- Light look: already parchment; change only `--neon`/`--neon-glow` and real blue leaks.
- Text colour tokens, `--line*`, subject colours, `--gold`, `--r-sm/md/lg`, fonts: unchanged.
- No emoji, one radius scale, no `backdrop-filter` on cards, rows or options.
- Everything in `warm.css` sits inside `@media screen`. Printing must be byte-for-byte the same
  rules as before.
- The theory reader sheet stays an A4 box and stays dark. Never light, never white.
- The Clepsydra pictures are not touched, re-coloured or filtered.
- The rail: same markup, same buttons, same order. CSS only. A Greek key band as an inline
  `data:` SVG background is wanted; keep it quiet (low alpha), it is trim, not a poster.
- AA contrast measured, with numbers in the report, for: body text, `--ink-3`, `--ink-4`,
  `--gold`, rail text and dim rail text, each against the darkest surface it sits on.

## Method notes that cost earlier runs
- `hall.js` injects its stylesheet near line 38; add `warm.css` the same way, after `hall.css`.
- Locate every hard-coded navy by grep (`rgba(7,13,22`, `rgba(10,20,34`, `rgba(24,40,60`,
  `#22344b`, `#14243a`, `#150f33`, `#b3a9dd`, `rgba(3,7,14`), do not trust old line numbers.
  Then also sample computed backgrounds in the live page: any surface whose blue channel is
  above its red channel in the dark look is a miss.
- After writing CSS confirm it is live: enumerate `document.styleSheets`, count rules
  recursively, find `warm.css`.
- Screenshots: reuse `D:\scratch 2026\redesign\walkin\shoot-walkin.mjs` as the model (copy it
  into the round2 scratch folder, do not edit the original). Headless Chrome, fresh
  `--user-data-dir` with no `--` in the path, one Chrome at a time, retry a silent failure.
- Chrome cannot run inside any Codex sandbox; you are not in one.

## Stills to produce (`progress/redesign/shots/`)
`r2a-<1440x900|1180x820|820x1180>-<dark|light>-<home-top|home-hall|home-below>.png`, plus in dark
at 1440x900 and 820x1180: `r2a-…-module.png` (a subject page), `r2a-…-question.png` (one question
open), `r2a-…-theory.png` (the theory reader), `r2a-…-modal.png` (any pop-up open). LOOK at every
still yourself before reporting; say what you saw, including what is ugly.

## Checks you run before reporting
1. `node tools/boot-check/boot-check.js` from the worktree root: paste its last lines.
2. 0 console errors from `file://` at the three sizes, both looks.
3. `grep -rn "wk-cue" app/` returns nothing.
4. `git -C "<worktree>" status --short -- app` lists only the files in the write grant.
5. The blue-above-red sample: list every surface checked and its colour.
6. Contrast numbers.

## Budget and report
Close out at 60 tool calls; be stopped by 80 even with work left. A partial pass reported
honestly is a success. Write the report as you go to
`D:\scratch 2026\redesign\round2\build-a-report.md`: what was done, each check's result, every
file touched, what is NOT done, anything ugly or doubtful. Your final message: at most 15 lines,
verdict first.
