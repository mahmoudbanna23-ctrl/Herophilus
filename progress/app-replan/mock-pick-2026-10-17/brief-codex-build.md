# Brief — mock exam: pick chapters and sources (build)

App-lane brief (AGENTS.md rule 1 exception, owner 2026-09-20). Goal: on the Mock exam screen,
besides modules, the student can pick chapters inside the chosen modules and pick the question
source (bank). No commits; read-only `git diff`/`git status` only.

## May change

- `app/js/quiz.js`
- `app/js/theory.js`
- `app/css/views.css`

Nothing else. `app/data/` stays closed.

## Current code

- `vMock(p)` and `runMock(n)` in `app/js/quiz.js` (search `MOCK — CHANGE 3`). The pool
  expression `QUESTIONS.filter(q=>mockMods[q.module]&&mockable(q)&&bankOn(q))` appears twice.
- `mockMods={}` is reset in `app/js/theory.js` inside `activateTerm` (around line 28).
- Helpers that already exist (read them, reuse them): `BANKS` (`app/js/storage.js:181`, order
  endpoint, house, gradegain, selfassess, each `{id,name,hex}`), `banksOf(q)` (`storage.js:262`),
  `MODULES[].groups[].chapters[]` where each chapter is a TUPLE `["id","name"]`
  (`app/data/modules.js`), `activeModules()`, `openModules()`, `qsInModule()`, `ico()`,
  `render()`. Module-page source chips: `app/js/render.js:303-325` (`.bankbar`, `.bankchip`,
  `--bk:${b.hex}`, `.banklabel`, `.bankn`). Chip tick style: `.chip[aria-pressed]` in
  `app/css/views.css`. Group header class: `.grouphdr` (`app/css/layout.css`).

## Build

1. Add `mockPool()` and use it in BOTH `vMock` and `runMock`. It returns mockable questions
   whose module is on (`mockMods[q.module]`), whose `q.chapter` is not in `mockChOff`, and whose
   `banksOf(q)` has at least one bank not in `mockBankOff`. It does NOT call `bankOn` (the mock
   now has its own source choice; the module-page filter stays as it is, untouched).
   Filter chapters by `q.chapter` directly. Never use `qsIn()` (it returns exam-view shadow
   copies). Never use `bankOf(` anywhere new — always `banksOf(q)`.
2. New state beside `let mockMods={}`: `mockChOff={}`, `mockBankOff={}`, `mockOpen={}` (plain
   objects, key = chapter id / bank id / module id, value true). Not saved to storage. Reset all
   three next to `mockMods={}` in `theory.js`.
3. Screen sections in this order:
   - `1 · Choose modules` — unchanged, except module chip counts should not depend on `bankOn`
     any more (count mockable questions of that module, all sources).
   - `2 · Choose chapters` — for each module that is on and has questions: one native
     `<details class="mockch">` (render the `open` attribute when `mockOpen[m.id]`, and
     `ontoggle="mockOpen['${m.id}']=this.open"`). `<summary>`: module icon + name + "N of M
     chapters". Inside: two small buttons "All" / "None" (clear or fill `mockChOff` for that
     module's listed chapters, then `render()`), then per group a `.grouphdr`-style label with the
     group name and a `.filterbar` of `.chip` buttons, one per chapter that has at least one
     mockable question in that module, with `aria-pressed`, `style="--c:${m.hex}"`, the chapter
     name and its count. Click toggles `mockChOff[id]` and calls `render()`. Chapters with zero
     mockable questions are not listed; a group with none is skipped. Chapter count = mockable
     questions in that chapter, all sources.
   - `3 · Choose sources` — a `.bankbar` row of `.bankchip` buttons (same markup as the module
     page), one per bank in `BANKS` order that has at least one question among mockable questions
     of the selected modules and not-switched-off chapters (bank membership via `banksOf`). Count
     shown = that set's questions where `banksOf(q)` includes the bank. Click toggles
     `mockBankOff[b.id]`, then `render()`. Show the row only when 2 or more banks are present;
     otherwise show nothing for this section (no heading either).
   - `4 · Choose length` — the existing cards, unchanged, fed by `mockPool()`.
4. Empty state when `mockPool()` is empty: replace the "change it on the module page" text.
   Say, in the same tone and markup as today: no module picked / no chapter picked / no source
   picked, whichever applies first, and that they can pick above.
5. CSS in `app/css/views.css`, near `.filterbar`: minimal styling for `.mockch` and its
   `summary` (pointer cursor, spacing, a hairline using existing `--line*` tokens, text with
   `--tx`). No new colours, no `backdrop-filter`, no animation.

## Rules

- `ico()` output contains single quotes: build HTML with backtick template literals only.
- Never rename any `wardround.*` storage key. Never open `app/data/questions*.js` contents
  (huge). Nothing under `Semester 8/`. No server, no browser, no network, no sign-in.
- Match the surrounding code style (dense one-liners, short names, existing comment density).
- Run `node --check app/js/quiz.js` and `node --check app/js/theory.js` before finishing.
- About 40 tool calls; stop at 60 and report even if unfinished.

## Return (final message, plain text, under 250 words)

What you changed, per file, with line ranges. Anything you could not do or are unsure of.
