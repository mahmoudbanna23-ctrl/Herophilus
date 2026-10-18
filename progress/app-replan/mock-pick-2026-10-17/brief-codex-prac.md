# Brief — subject page: pick topics for "Practise all" and "Unanswered" (build)

App-lane brief (AGENTS.md rule 1 exception, owner 2026-09-20). No commits; read-only
`git diff`/`git status` only.

## May change

- `app/js/render.js`
- `app/js/quiz.js`
- `app/js/theory.js`
- `app/css/views.css`

Nothing else. `app/data/` stays closed.

## Why

Owner 2026-10-18: on a subject's page he wants to pick certain topics (one or several, not
necessarily all) before pressing "Practise all" or "Unanswered", using the same popup as the
mock exam's subject popup (commit `93478fae`).

## Current code

- `vModule(p)` in `app/js/render.js` (~line 294). Buttons block ~327-360: `qs=qsInModule(m.id)`
  (already filtered by the page's own Source chips via `bankOn`), `un`, `halves` (Neurology /
  Psychiatry for neuropsych; Paper 1 / Paper 2 for pediatrics from `g.paper`), `allBtn`,
  `unBtn`/`unBtns` (pediatrics splits Unanswered per paper).
- Mock popup in `app/js/quiz.js`: `mockChOff`, `mockOpen`, `mockGroup(id,i,on)`,
  `mockAdjust(id)`, CSS `.mock-modal`, `.mockhead`, `.mocktopic*`, `.mockmore`, `.mockchapters`,
  `.mockadjust` in `app/css/views.css` ~39-47. Reset in `app/js/theory.js` `activateTerm` (~28).

## Build

1. State `pracChOff={}` (chapter id -> true) beside `mockChOff` in quiz.js. Not saved. Reset in
   theory.js next to the mock reset.
2. `mockAdjust(id,mode)` and `mockGroup(id,i,on,mode)`: when `mode==='prac'` use `pracChOff`
   instead of `mockChOff`, open-state keys prefixed so they do not collide with the mock's
   (e.g. `mockOpen['prac|'+id+'|'+i]`), count questions from `qsInModule(id)` instead of the
   mockable list, and show NO Sources row. Everything else (header + Done, Topics label,
   All/None, topic chips with true/mixed/false, `›` for topics with 2+ listed chapters, chapter
   chips) stays the same. Every inner onclick must pass the mode through (`mockAdjust('${id}','prac')`).
   With no mode the mock behaves exactly as today — do not change mock results.
3. `vModule`: the list feeding the buttons becomes `qs.filter(q=>!pracChOff[q.chapter])` —
   use it for `un`, `allBtn` (single and halves) and `unBtns`. The page subtitle counts,
   accuracy and the chapter rows below keep using the full `qs`. A half whose filtered list is
   empty hides its Practise-all button (Unanswered already hides at 0).
4. Under the buttons (inside or just after that `.filterbar`), one `.mockadjust` button:
   `All topics ›` when nothing is off, otherwise `N of M topics ›` where a topic counts as on
   if at least one of its listed chapters is on (M = groups with at least one chapter holding a
   question in `qs`). onclick `mockAdjust('${m.id}','prac')`. If the filtered list is empty,
   show a short muted note `No topic picked` in place of the buttons; the line stays.
5. Only if needed, minimal CSS with existing tokens; no new colours, no animation, no
   `backdrop-filter`.

## Rules

- Never `bankOf(` — `banksOf(q)` only. Never `qsIn()` for the pick (exam shadow copies);
  filter by `q.chapter` directly.
- `ico()` output contains single quotes: backtick template literals only; ids inside onclick
  strings in single quotes, as the current code does.
- Never rename any `wardround.*` storage key. Never open `app/data/questions*.js` contents.
  Nothing under `Semester 8/`. No server, no browser, no network, no sign-in.
- Match the surrounding code style (dense, short names, sparse comments).
- `node --check` each changed js file before finishing.
- About 40 tool calls; stop at 60 and report even if unfinished.

## Return (final message, plain text, under 250 words)

What you changed, per file, with line ranges. Anything you could not do or are unsure of.
