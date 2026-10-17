# Brief — mock exam: move chapter + source choices into a popup per subject (build)

App-lane brief (AGENTS.md rule 1 exception, owner 2026-09-20). No commits; read-only
`git diff`/`git status` only.

## May change

- `app/js/quiz.js`
- `app/js/theory.js`
- `app/css/views.css`

Nothing else. `app/data/` stays closed.

## Why

Commit `38de7aa1` added chapter and source choice to the Mock exam screen as inline
`<details class="mockch">` lists (see `git show 38de7aa1 -- app`). The owner finds the page too
crowded. Ruling: only the 4 subject chips show on the page; each subject gets a small line under
it; tapping the line opens a popup for that subject with its sources and topics.

## Current code

Mock section of `app/js/quiz.js` (search `MOCK — CHANGE 3`): `mockMods`, `mockChOff`,
`mockBankOff`, `mockOpen`, `mockable(q)`, `mockPool()`, `vMock(p)`, `runMock(n)`. Reset in
`app/js/theory.js` `activateTerm` (line ~28). Reuse: `showModal(html)` and `closeModal()`
(`app/js/boot.js` lines 1-2; container `#modal` inside `#modalBg` in `app/index.html:109`;
read the existing `.modal` CSS for max-height/scroll before adding any), `BANKS`, `banksOf(q)`,
`MODULES[].groups[]` (`{name, chapters:[["id","name"],...]}` — chapters are TUPLES), `ico()`,
`render()`, `.chip` + `aria-pressed` tick style, `.bankbar`/`.bankchip`/`.banklabel`/`.bankn`,
`.grouphdr`.

## Build

1. State: keep `mockMods`, `mockChOff` (key = chapter id), `mockOpen`. `mockBankOff` becomes
   keyed per subject: `'<modId>|<bankId>'`. `mockPool()` source test becomes
   `banksOf(q).some(b=>!mockBankOff[q.module+'|'+b])`. Chapters still by `q.chapter` directly
   (never `qsIn()`). Never `bankOf(` — always `banksOf(q)`.
2. Page (`vMock`): heading `1 · Choose modules` and the subject chips stay as now. Under each
   subject chip that is on and has mockable questions, a small button showing a summary:
   `All chapters · all sources ›` when nothing is off, otherwise
   `N of M chapters · K of J sources ›` (M = listed chapters with mockable questions in that
   subject, J = banks present among that subject's mockable questions; show only the part that
   differs from "all" if you like, but keep it short). Its onclick: `mockAdjust('<modId>')`.
   Keep each chip and its line together (a small wrapper per subject inside the existing
   `.filterbar`). REMOVE the inline `2 · Choose chapters` and `3 · Choose sources` sections.
   The length section becomes `2 · Choose length`, otherwise unchanged, fed by `mockPool()`.
3. Popup `mockAdjust(id)`: builds HTML and calls `showModal(html)`. Every control inside it, on
   click, changes state, then calls `mockAdjust(id)` again (redraw the popup) and `render()`
   (page behind updates). Contents, top to bottom:
   - Header: subject icon + name, and a `Done` button (`closeModal();render()`).
   - Sources: a `.bankbar` row of `.bankchip`s, one per bank in `BANKS` order present among
     this subject's mockable questions (membership via `banksOf`), count = this subject's
     mockable questions in that bank. Click toggles `mockBankOff['<modId>|<bankId>']`. Show the
     row only when 2+ banks are present, or when a listed bank is switched off.
   - Topics: `All` / `None` buttons (all chapters of this subject on / off). Then one row per
     group that has at least one chapter with mockable questions: a `.chip` with the group name
     and its mockable count; `aria-pressed` = `true` (all its listed chapters on), `mixed`
     (some), `false` (none). Click: if all on, switch all its chapters off; else switch all on.
     If the group has 2+ listed chapters, a small `›` button next to it toggles
     `mockOpen['<modId>|<groupIndex>']`; when open, that group's chapter chips show beneath it
     (one `.chip` per listed chapter, name + count, toggles `mockChOff[chapterId]`). A group with
     one listed chapter has no `›`. "Listed" = has at least one mockable question in the subject.
4. Empty state on the page when `mockPool()` is empty: keep the three cases (no module / no
   chapter / no source picked); the chapter and source texts now say to tap the line under the
   subject.
5. CSS (`app/css/views.css`): remove the `.mockch` rules; add minimal rules for the per-subject
   wrapper + summary line (small, muted text with `--tx`/`--ink-*` tokens), the popup header,
   and topic rows. Existing tokens only, no new colours, no `backdrop-filter`, no animation.
   If `.modal` has no max-height/overflow, make the popup content scroll inside itself
   (scoped to a class you add, do not change `.modal` globally).
6. `theory.js`: keep resetting all four states on term switch.

## Rules

- `ico()` output contains single quotes: build HTML with backtick template literals only;
  ids inside onclick strings in single quotes, as the current code does.
- Never rename any `wardround.*` storage key. Never open `app/data/questions*.js` contents.
  Nothing under `Semester 8/`. No server, no browser, no network, no sign-in.
- Match the surrounding code style (dense one-liners, short names, sparse comments).
- `node --check app/js/quiz.js` and `node --check app/js/theory.js` before finishing.
- About 40 tool calls; stop at 60 and report even if unfinished.

## Return (final message, plain text, under 250 words)

What you changed, per file, with line ranges. Anything you could not do or are unsure of.
