# Brief — review deck: pick subjects and topics to review (build)

App-lane brief (AGENTS.md rule 1 exception, owner 2026-09-20). No commits; read-only
`git diff`/`git status` only.

## May change

- `app/js/quiz.js`
- `app/js/theory.js`
- `app/css/views.css`

Nothing else. `app/data/` stays closed.

## Why

Owner 2026-10-19: "In the review deck add the same option so I can review selectable
subjects/ chapters from selectable modules not all". Same popup as the subject-page topic
picker (commit `0c986c26`, mode 'prac') and the mock subject popup.

## Current code

- `vReview(p)` in `app/js/quiz.js` (~1126-1175): `deck=deckAll()`, `due=dueNow()`; stats grid;
  top `.filterbar` "Start N due" / "Whole deck (N)" / "Reset deck" (or "Nothing due — practise
  anyway (N)" / "Reset deck"); then per `activeModules()` a `.grouphdr`, a `.filterbar` with
  "N due now" / "All N" chips, and one `.ch-row` per deck question.
- Popup: `mockAdjust(id,mode)` and `mockGroup(id,i,on,mode)` in quiz.js (~1226-1251), state line
  `let mockMods={},mockChOff={},pracChOff={},mockBankOff={},mockOpen={};` (~1217). In mode
  'prac' it uses `pracChOff`, counts from `qsInModule(id)`, no Sources row, open keys prefixed
  `prac|`. Inner onclicks currently hard-code `'prac'` (`${mode?',\'prac\'':''}`).
- Mock page subject chips (vMock) show the look to copy for the subject chips.
- Reset: `app/js/theory.js` `activateTerm` (~28).

## Build

1. State: add `revModOff={}` (module id -> true) and `revChOff={}` (chapter id -> true) to the
   quiz.js state line. Not saved. Reset both in theory.js next to the others.
2. Popup mode 'rev': uses `revChOff`, counts from `deckAll().filter(q=>q.module===id)`, no
   Sources row, open keys prefixed `rev|`. Generalise the pass-through so every inner onclick
   passes the actual mode (e.g. `${mode?`,'${mode}'`:''}` or an equivalent precomputed string),
   and the off-map choice handles all three modes (mock/prac/rev). Mock and prac must behave
   exactly as now.
3. `vReview`: under the stats grid, one row of subject `.chip`s (same look as the mock page's
   subject chips), one per active subject that has deck questions, on unless `revModOff[id]`;
   tap toggles `revModOff` and `render()`. Show the row only if 2+ subjects have deck
   questions? No — always show it when the deck is not empty (owner wants to choose).
4. `pick=deck.filter(q=>!revModOff[q.module]&&!revChOff[q.chapter])`; `pdue` = due questions in
   `pick`. Top buttons use `pdue`/`pick` (counts and ids). Stats cards stay on the whole deck.
   Reset deck stays whole-deck. If `pick` is empty: a short muted note `Nothing picked` in place
   of the start buttons (keep "Reset deck").
5. Per subject group: skip a subject that is off. For an on subject, under its `.grouphdr` add a
   `.mockadjust` button: `All topics ›` when none of its deck chapters is off, otherwise
   `N of M topics ›` (M = groups of that module with at least one deck question; a topic is on
   if at least one of its deck chapters is on); onclick `mockAdjust('<id>','rev')`. The header
   counts, "due now" / "All N" chips and the question rows use that subject's picked questions
   only. If a subject has no picked questions left, keep its header + line (so it can be
   restored) and drop its chips and rows.
6. Only if needed, minimal CSS with existing tokens; no new colours, no animation, no
   `backdrop-filter`.

## Rules

- Never `bankOf(` — `banksOf(q)` only. Never `qsIn()`; filter by `q.chapter`/`q.module`.
- `ico()` output contains single quotes: backtick template literals only; ids inside onclick
  strings in single quotes, as the current code does.
- Never rename any `wardround.*` storage key; do not touch `S.srs`, `S.deckResetAt`, `deckAll`,
  `dueNow` or `resetDeck` logic. Never open `app/data/questions*.js` contents. Nothing under
  `Semester 8/`. No server, no browser, no network, no sign-in.
- Match the surrounding code style (dense, short names, sparse comments). Keep the file's
  trailing newline.
- `node --check` each changed js file before finishing.
- About 40 tool calls; stop at 60 and report even if unfinished.

## Return (final message, plain text, under 250 words)

What you changed, per file, with line ranges. Anything you could not do or are unsure of.
