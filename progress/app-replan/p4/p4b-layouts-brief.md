# P4b brief — question (Q1 B) and results (R1 A) layouts (2026-09-25)

Seat: Codex `gpt-5.6-terra` (team sheet, `j9-team-talk/minutes.md:56`). Reviewer after you: a Claude
Opus refuter. Final reply begins with `AGENTS.md loaded — Herophilus`, then ≤ 5 lines.

WRITE GRANT (overrides AGENTS.md read-only default for this job only): you may edit the files listed
under "May change" and write `progress/app-replan/p4/p4b-report.md`. Everything else is read-only.

## Read first
1. `progress/app-replan/mocks/NOTES.md` — "Owner picks": Q1 B, R1 A. Q1 B is the Q1 A layout; its only
   difference (neon edges) is ALREADY BUILT in P4a (`10b2684`) — do not redo it.
2. `progress/app-replan/mocks/question-a.html`, `question-b.html`, `results-a.html`, `mocks.css` —
   the picked layouts. The mocks are layout specs, not copy: their sample text, "Comparison only"
   note and eyebrow labels ("Q1 B · reading first", "R1 A · account") are mock furniture — never ship them.
3. `progress/PLAN-app-master-2026-09.md` §2 (rulings, R8, R11) and §3 row "Quiz: keep".
4. The live question view and the live session-end / results view in `app/js/quiz.js`,
   `app/js/render.js`, `app/css/views.css`, `app/css/components.css`.

## Goal — close the gap between the live screens and the two picked mocks, nothing else
Step 1 — write the GAP LIST first, into `p4b-report.md`: for each screen, every place the live
layout differs from its mock (order, grouping, hierarchy, spacing, which element leads). If a screen
already matches, say so and change nothing there.
Step 2 — build only the gaps:
1. **Question (Q1 A layout).** Reading-first: the stem is the one calm reading column; options sit
   directly under it; primary action ("Check answer" or the app's existing equivalent) then the
   secondary action below the options. Tools the app already has (flag, strike, notes, confidence,
   figure, case peek, progress) KEEP working and stay reachable — regroup them quietly around the
   reading column, never remove one. The figure still renders between stem and options.
2. **Results (R1 A).** The session account LEADS: score as `N / M`, one quiet line, then Continue and
   Return home. BELOW it, the wrong-answer review queue: a heading, the wrong answers listed, and a
   control that starts reviewing them (reuse the app's existing review-wrong path — find it; do not
   write a second one). No wrong answers: the queue section says so plainly, no empty box.

## Files
May change: `app/css/views.css`, `app/css/components.css`, `app/css/layout.css`, `app/js/quiz.js`,
`app/js/render.js` (markup order and wrapper elements for these two screens only).
Must not change: `app/data/*`, `wardround.*` keys or stored shapes, SRS/scoring logic, session
timestamps (`paintSessionLive()` path, never `render()` on the tick), stacking 150/200/250/300/400,
the print block selector `:root, :root[data-theme="light"], :root[data-theme="dark"]`, `print.css`,
`app/assets/clep/*`, `tokens.css` (use existing tokens only), the P4a buttons/chips/neon edges.
Clepsydra: NOT on the question screen (plan §4); do not add her anywhere.

## Rulings that bind (plan §2)
No spinning icons · no pulsing idle glow · no hover lift · no pills · no emoji · no gradients in the
interface · no `backdrop-filter` on cards, rows or options · no side-tab thick left borders on new
rules · easing `--ease-standard` only · visible focus ring and 44 px targets · `prefers-reduced-motion`
stops every loop · vanilla, works from `file://` · timed mock still counts DOWN, storage a timestamp.

## Verify before reporting — run each, paste the result
1. `node --check` on every js touched.
2. `node tools\boot-check\boot-check.js` — 0 console errors, 6956 / 153 / 4 / 156. If headless Chrome
   cannot start in your sandbox, say so plainly; the orchestrator runs it.
3. Feature survival: list every question-screen control that existed at `pre-p4b-2026-09-25` (grep
   the render function) and show each still renders after your change (grep, file:line).
4. Keyboard (R11): tab order on the question screen follows reading order (stem, options, actions,
   tools) — describe how you checked it.
5. grep counts pasted: emoji 0; `:hover` rules with `transform` 0; `ease-spring` 0.
6. `git diff --stat` touches only the files above.
Screenshots: do NOT attempt; the orchestrator shoots outside the sandbox (390 px and 1280 px).

## Do not
Commit, push, `git add`, or tag (the orchestrator made `pre-p4b-2026-09-25`). Touch the Clepsydra.
Build home, the desk band, subject browse or the candle (P5). Invent a component not in the mocks.
Change what a control does — layout only.

## Output
`progress/app-replan/p4/p4b-report.md`, ≤ 60 lines: gap list, files and selectors changed, check
results pasted, anything NOT verified named as such.
