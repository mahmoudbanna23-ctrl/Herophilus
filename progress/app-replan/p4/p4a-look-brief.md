# P4a brief — controls, borders, neon edges (2026-09-25)

Seat: Codex `gpt-5.6-terra` (team sheet, `j9-team-talk/minutes.md:56`). Reviewer after you: a Claude
Opus refuter. Final reply begins with `AGENTS.md loaded — Herophilus`, then ≤ 5 lines.

WRITE GRANT (overrides AGENTS.md read-only default for this job only): you may edit the files listed
under "May change" and write `progress/app-replan/p4/p4a-report.md`. Everything else is read-only.

## Read first
1. `progress/PLAN-app-master-2026-09.md` §2 (look rulings, R8, R11) and §5 P4.
2. `progress/app-replan/b3b/b3b-buttons-chips-brief.md` — the button/chip spec. Build it, with the
   overrides below.
3. `progress/app-replan/mocks/question-b.html` + `mocks.css` rule `.neon-note` — the neon edge the
   owner picked (P3 Q1 B).

## Goal — five things, nothing else
1. **Buttons + chips = B3b.** Travelling-light buttons, Ink-mark "B" chips, outline play icon, exactly
   as `b3b/buttons-demo-4.html` prints them.
2. **Neon edges are the DEFAULT** (owner 2026-09-25, overrules the plan's earlier drop). Source spec:
   `border:1px solid #66d9ff; box-shadow:0 0 10px rgba(102,217,255,.65)` from `.neon-note`. Apply it to
   card edges (module cards, chapter rows, question card, answer options, result panels). Put the
   colour and glow in NEW tokens in `tokens.css` (e.g. `--neon`, `--neon-glow`); never inline hex in
   component rules. Thin muted card borders go. Plain line dividers (`--line*` hairlines between
   sections) stay plain — neon is for card edges, not dividers. Light theme: restate the tokens only,
   measured for AA against the light ground.
3. **Answer feedback settles in ~150 ms (M8)**: right/wrong state on an option eases in over ~150 ms
   with the existing `--ease-spring`; no other curve. Reduced motion: instant.
4. **Timed mock counts DOWN** (the one exception to count-up everywhere). Storage stays a TIMESTAMP
   (`quiz.js:606`, project `CLAUDE.md` §6 "timestamps, never countdowns") — only the DISPLAY becomes
   `end − now`. Every other clock keeps counting up. Repaint through the existing 1 s tick path, never
   `render()`.
5. **Peds tag = plain text** (owner 2026-09-25, plan §6). This OVERRIDES the B3b brief's "Peds stays a
   boxed tag". Remove the box, keep the text and its colour.

## Files
May change: `app/css/components.css`, `app/css/views.css`, `app/css/layout.css`, `app/css/tokens.css`
(new tokens; existing values only for the neon swap of card-edge tokens — list each), `app/js/quiz.js`
(mock countdown display only), any `app/js/*.js` only where a chip needs the ink-mark inner element.
Must not change: `app/data/*`, `wardround.*` keys, stacking 150/200/250/300/400, the print block
selector `:root, :root[data-theme="light"], :root[data-theme="dark"]`, `print.css`, `app/assets/clep/*`,
`--ease-spring`. Three token families (`--tx`/`--ink`, `--line*`, `--fill`) never re-merge.

## Rulings that bind (plan §2)
No spinning icons · no pulsing idle glow (the neon glow is STATIC) · no hover lift (no `transform` on
`:hover`; quiet colour change instead) · no pills · no emoji · no gradients in the interface · no
`backdrop-filter` on cards, rows or options · visible focus ring and 44 px targets kept ·
`prefers-reduced-motion` stops every loop, CSS and JS · vanilla, works from `file://`.

## Verify before reporting — run each, paste the result
1. `node tools\boot-check\boot-check.js` — 0 console errors, counts equal to HEAD before your change.
   If headless Chrome cannot start inside your sandbox, say so plainly; the orchestrator runs it.
2. Contrast AA, dark AND light: every text-on-colour pair you touched, computed from the token hex
   (node script, WCAG formula), against the darker stop. List pair, ratio, pass/fail.
3. `grep` counts, pasted: emoji code points in `app/css` + `app/js` = 0; `:hover` rules containing
   `transform` = 0; `backdrop-filter` on card/row/option selectors = 0; `var(--ink)` outside `color:`.
4. `git diff --stat` touches only the files above.
5. Keyboard (R11): tab order and focus ring on one button, one chip, one option — describe what you
   checked and how.
6. List every button/chip/card you did NOT change, with the reason.
Screenshots: do NOT attempt; the orchestrator shoots outside the sandbox.

## Do not
Commit, push, `git add`, or tag (the orchestrator made `pre-p4-2026-09-25`). Touch or redraw the
Clepsydra. Invent a chip or edge style not printed in the demo or the mock. Build Q1/R1 layouts,
the desk band or the home page — those are later phases.

## Output
`progress/app-replan/p4/p4a-report.md`, ≤ 50 lines: files changed, selectors + tokens changed, check
results pasted, anything NOT verified named as such.

## Fix round 1 (2026-09-25) — the Opus refuter FAILED round 1; fix exactly these six, nothing else

Same write grant, same files, same "Do not" list. Keep everything the refuter passed (neon card
edges, static glow, boot, no hover transform). Update `p4a-report.md` in place with a "Fix round 1"
section: each item, file:line, what changed, the check you ran.

1. Travelling light is MISSING (`components.css:102-108`, `views.css:264-266`): no conic ring, no
   orbit keyframes, no `@property --angle`. Port `b3b/buttons-demo-4.html` section 01 as printed:
   `::before` conic ring, ~7 s idle orbit, ~2.3 s on hover, solid flood on `:active`; stopped (static
   ring) under `prefers-reduced-motion`. The demo's conic ring is owner-chosen and is the ONE gradient
   allowed on a control; fill gradients are not.
2. `views.css:264-266` `.btn` loads later and restores `border:var(--line-2)` and a fill gradient,
   overriding item 1 and the neon edge (also `.btn.go`, `.btn.flag.on`). Make `.btn` fills flat; one
   source of truth for button edges. `.btn:active` text-on-fill was 1.36:1 — must reach AA.
3. Ink-mark chip (`views.css:~71-77`): the check mark in `::before` must show ONLY on `.chip.on`; off
   chips get the demo's flat strike through the label `span` (not a slanted line across the chip);
   restore the demo's gold underline on the on state. On/off must read with no motion.
4. `.bankchip` (the source filter, `views.css:43-64`) was never converted: make it an Ink-mark chip.
   Its hover text `--gold` is 1.74:1 on the light card — fix to AA.
5. Plain Peds text `--peds` #2e5f8a is 2.59:1 on the dark card: in dark theme use the demo's
   `--peds-hi` #71b8e8 (as a token); re-measure both themes.
6. The hover glow `rgba(217,180,74,.65)` is inlined in ~7 rules: move it to a new `--gold-glow`
   token (dark + light), reference the token everywhere.
Re-run and paste: boot-check (or say plainly it could not start), the grep checks from the verify
list, and contrast for every pair in items 2, 4, 5 in BOTH themes.

## Fix round 2 (2026-09-25) — refuter FAILED fix round 1; Claude `lean-drafter` takes it (two Codex dispatches spent)

Same files, same "Do not" list. Keep everything that passed (travelling light, flat fills, chip
tick/strike/underline, Peds, `--gold-glow`, filters and keyboard toggling work). Fix exactly:

1. `views.css` `.bankchip:not(.on){opacity:.5}` — off source chips fail AA (light 3.0:1; off hover
   3.18 dark / 2.02 light). Drop the opacity; off text `color:var(--ink-2)` as the demo does.
2. `views.css` `.chip:hover{color:var(--gold)}` — 1.42:1 in light. Use `--gold-text`.
3. `components.css` `.btn[style*="--bad"]::before{content:"! "}` — the warning mark now lives in the
   masked ring pseudo-element and is invisible on Delete / Sign out / Remove (`gate.js:395,773,855,903`).
   Move it to `::after` (or another element the ring does not own) so it shows, in the same place as
   before the P4 change (check `git show pre-p4-2026-09-25:app/css/components.css`).
4. `quiz.js:1137` Review "All N" is an ACTION button with class `chip`, no on/off state; it now shows
   the off strike and reads disabled. Scope the Ink-mark on/off styling to real toggles only. If the
   toggle chips lack `aria-pressed`, add it in `render.js` where they are built (true/false in step
   with `.on`) and key the ink styling on it; action chips then look like plain chips.
   `app/js/quiz.js` and `app/js/render.js` may change for this only.
Nit: on-chips show no hover change because `.on` wins the cascade — give on-chips a quiet hover.

Verify and paste: node --check on any js touched; contrast (WCAG, including any opacity composited
over the card) for every pair in items 1-2, both themes; `grep -n 'rgba(217,180,74' app/css` shows only
tokens.css; `git diff --stat -- app`. Headless Chrome boot-check if it runs for you
(`node tools\boot-check\boot-check.js`, 0 errors, 6956/153/4/156); never a --user-data-dir under a
path containing `--`. Update `p4a-report.md` with a "Fix round 2" section, ≤ 15 lines.
