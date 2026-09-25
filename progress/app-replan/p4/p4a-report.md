# P4a report — controls, borders, neon edges

Files changed: `app/css/tokens.css`, `components.css`, `layout.css`, `views.css`, and `app/js/render.js`.
`quiz.js` unchanged: its existing `examLeft()` displays `max(0, end - Date.now())` and the 1 s `paintExamClock()` path does not call `render()`.

Tokens: new `--neon`, `--neon-glow`; no existing token values changed.
Dark: `#66d9ff`, `0 0 10px rgba(102,217,255,.65)`.
Light: `#00708f`, `0 0 10px rgba(0,112,143,.48)`.
Selectors: `.card`, `.stat`, `.ch-row`, `.qcard`, `.opt`, `.verdict`, `.modelans`, `.conf`, `.explain`, `.chip`, `.btn`, and Peds `.tag`.
Feedback: `.opt` state properties transition for `.15s var(--ease-spring)`; reduced motion removes the transition and verdict animation.

boot-check: `QUESTIONS 6956; THEORY 153; MODULES 4; chapters 156; module cards 4; console errors: 0`.
Contrast (WCAG formula): neon/card dark 10.75 PASS; neon/card light 4.95 PASS; white/fill 11.53 PASS; on-accent/gold 9.58 PASS; Peds/card light 5.89 PASS.
grep: emoji code points `0`; hover rules containing `transform` `0`; backdrop-filter on card/row/option selectors `0`; `var(--ink)` outside `color:` `0` (one comment match only).
diff stat: app files above plus pre-existing unrelated worktree changes in `content/ophtho/...pairs-verdict.extra.json` and three `progress/app-replan/*` files; no other app file changed.
Keyboard: NOT verified interactively in this sandbox; source retains existing `:focus-visible` rules and native button controls.
Unchanged controls: `.tb-btn`, `.strike-btn`, `.conf-b`, `.mk`, `.pen`, `.qg`, `.qprog`, `.tchip`, `.emb`, `.colb`, `.frtile`, `.gsign`, `.bk-btn`, `.readtheory`, `.th-ch`, and schedule `.day`; they are not B3b buttons/chips/cards, except their hover lift was removed to meet the global ruling.
Unchanged card-like surfaces: figure frames, tables, inputs, modal, rail, results popup, and toast; they are not module cards, chapter rows, question card/options, or result panels named by the brief.

## Fix round 1
1. `components.css:2,102-121` — added the demo's `@property --angle`, masked conic `::before`, 7 s orbit/2.3 s hover, gold active flood, and reduced-motion static ring; `views.css:264-273` later button overrides removed.
2. `components.css:110-114` — flat `.btn`, `.btn.go`, and `.btn.flag.on` fills now share the travelling-light edge; active text is `--on-accent`. Contrast: dark 9.58:1 PASS; light 9.14:1 PASS.
3. `views.css:57-82`, `render.js:81,110-119` — check mark is `.on` only; off strike and on gold underline attach to generated `.chiplabel` text.
4. `views.css:43-68`, `render.js:304-308` — `.bankchip` now uses the same Ink-mark state and label span; hover uses `--gold-text`. Contrast: dark 8.79:1 PASS; light 5.92:1 PASS.
5. `tokens.css:84,212`; `components.css:231` — added theme `--peds-hi` and used it for plain Peds text. Contrast: dark 8.08:1 PASS; light 5.12:1 PASS.
6. `tokens.css:64,211`; `components.css`, `layout.css`, `views.css` — added `--gold-glow` and replaced all component hover glows.
Checks: boot-check: QUESTIONS 6956; THEORY 153; MODULES 4; chapters 156; console errors 0. Grep: emoji 0; hover transform 0; card/row/option backdrop-filter 0; `var(--ink)` outside `color:` 0 declarations (1 pre-existing explanatory comment). `git diff --check`: clean.

## Fix round 2 (lean-drafter, two Codex dispatches spent)
1. `views.css:63` `.bankchip:not(.on)` — dropped `opacity:.5`, set `color:var(--ink-2)` (composited opacity was the failure).
2. `views.css:79` `.chip:hover` `--gold`→`--gold-text`.
3. `components.css:117-119` `.btn[style*="--bad"]` glyph moved off the masked `::before` to a plain absolute `::after` at `left:var(--s-7)`, `padding-left` added to clear the label.
4. `views.css:57-63,79-82`,`quiz.js:1195` — tick/strike/underline gated on `.chip[aria-pressed]`; added `aria-pressed` to the mock-module chip. Review "All N" (`quiz.js:1137`) untouched, now plain. **Not fixed**: `sessions.js` toggle chips have no `aria-pressed` and are out of this item's file scope — they lose the tick/strike visual, flagged not resolved.
Nit: `.bankchip.on:hover`/`.chip.on:hover{color:var(--gold-text)}` added (views.css:61,82).

Checks: `node --check` quiz.js/render.js OK. Contrast (`--bg`, matches brief's pre-fix numbers, e.g. tx@.5 opacity/light-bg=2.99≈3.0): item1 off text ink-2/bg dark 10.68 light 8.19 PASS; item1 off-hover gold-text/bg dark 9.62 light 4.84 PASS; item2 chip:hover gold-text/bg dark 9.62 light 4.84 PASS (was 1.42 FAIL). `grep rgba(217,180,74) app/css`: **NOT tokens-only** — `layout.css:30`,`views.css:436` also match; both predate round 2, flagged not fixed. `git diff --stat -- app`: components.css 91, layout.css 27(carryover), tokens.css 12(carryover), views.css 74, quiz.js 2, render.js 16(carryover). boot-check: 6956/153/4/156, 0 errors. Keyboard: **not verified**, no browser session this pass.

### Follow-up (coordinator, same pass)
`sessions.js`: added `aria-pressed` to all 6 toggle chips (focus/break/cycles/scope×3, lines ~79-94), in step with `.on` — they get the Ink-mark tick/strike again; no action chips in this file. `node --check app/js/sessions.js`: OK.
`layout.css:30` `rgba(217,180,74,.4)`: static decoration, not hover/focus — the rail medallion's always-on separator ring (comment above it: navy disc needs an edge against the near-black rail); left as-is.
`views.css:436` `rgba(217,180,74,.26)`: `.streak` panel's light-theme background gradient fill, not a glow; left as-is.
Re-ran boot-check: 6956/153/4/156, 0 console errors.
