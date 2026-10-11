# Compare — Claude findings vs Codex blind review, 2026-10-12

Codex (`gpt-6-astra`, read-only, did not see `claude-findings.md`) returned 7 ranked findings:
`codex-review.md`. Claude side: 25 items (A1-A9, B1-B7, C1-C9) in `claude-findings.md`.
Codex items are X1-X7; a letter suffix is a sub-claim inside a finding.

**Citation check (main chat, 2026-10-12).** 34 cited lines opened across `quiz.js`, `render.js`,
`boot.js`, `storage.js`, `gate.js`, `components.css`, `views.css`, `index.html`, `clepsydra.js`;
every Codex citation says what the report claims. One Claude-side drift found: the helpers put
the data scripts at `index.html:114-132` and `boot.js` at `:143`; the live file has `modules.js`
at `:114` and `boot.js` at `:147` (Codex's numbers). The helpers likely read `dist\`.

## Found by both (7 topics)

| Topic | Claude | Codex | Note |
|---|---|---|---|
| Everything loads before the site works | A1-A4 | X1 | Same evidence. Codex counts `app\` (24 scripts, 25.03 MB); Claude counted `dist\` (21.73 MB, locked theory left out). Both right. |
| 15 s cloud wait can hold the entry | A8 | X1 | Same line, `boot.js:392`. |
| Each quiz action rebuilds the page and recounts | B3 | X2 | Codex goes wider — see X2a. |
| Always-on drawing: orbs, film filter, glass bars, button ring, scan line | C1-C4, C6 | X3 | Same lines. Both say the ring and scan line never pause on reading views. |
| Whole-state save and cloud push | B2, B6 | X4 | Same lines in `gate.js`. |
| Search on every key, no debounce | B1 | X5 | Same. |
| Review list: every row at once, `due.includes` | B5 | X6 | Same lines. |

## Only Claude (11 items)

| Item | What | Standing after reading the line |
|---|---|---|
| B4 | Opening a subject scans all questions once per chapter (`render.js:351`, `storage.js:307`) | Confirmed in code. Cost unknown — measure (M4). |
| A6 | Nine pose images preloaded | Real, small (about 4.5 MB decoded). Low. |
| A7 | Two video elements | Folds into Codex X3a. |
| A9 | No offline cache, no cache rules | Real. Affects repeat visits on slow lines; not lag. |
| B6 | Three or more profiles can fill local storage | Real, rare. Progress can fail to save; warned, not silent. |
| B7 | Timers keep running in a hidden tab; `sessStats` scans all questions each second on the session view | Real, small. |
| C5 | Fixed page background | Real. Known scroll cost on iPad Safari. |
| C7 | Scroll-reveal plus glow on every row of long lists | Real. Cost unknown. |
| C9 | No weak-device mode | Real — a missing feature, not a fault. |
| A5 | Images are not oversized | A "fine" finding. |
| C8 | Confetti, home-card images, gate shimmer | Small. |

## Only Codex (5 sub-claims + 1 finding)

| Item | What | Standing after reading the line |
|---|---|---|
| X2a | Picking an option (`quiz.js:493`) and Next (`quiz.js:552`) also redraw everything, not only Submit | **Confirmed.** Claude's helpers only caught Submit (`:510`). This widens B3: three full redraws per question. |
| X2b | The side menu also recomputes weak chapters on every redraw (`render.js:165`) | **Confirmed.** A fourth full pass over all questions per redraw. |
| X3a | The main film has no "gate is showing" check, so two films play at the sign-in screen (`render.js:39,45`) | **Confirmed** — `syncFilm` pauses the gate copy when the gate hides, but never pauses the main one while the gate shows. |
| X4a | `save()` also runs on chapter navigation | Not opened line-by-line; plausible. Cost = M8. |
| X4b | Backup budget counts characters, not bytes; always keeps two snapshots (`boot.js:78`) | Line confirmed. **Disputed as a fault** — see below. |
| X7 | Question pictures reserve no space, so the page jumps when they arrive (`storage.js:212`, `components.css:56`) | **Confirmed.** A real "glitch" on slow lines that Claude missed. |

## Where we disagree (4)

1. **X4b, backup budget unit.** Browsers count local storage in characters (two bytes each), so
   a character budget is the right unit for the quota it guards. Claude: not a fault. The "always
   keeps two" part is deliberate (`boot.js:56-63`).
2. **The cure for loading everything up front.** Codex: load each subject's questions when it is
   opened. Claude: the side menu, search, review deck, due count and weak-chapter list all read
   every subject at once, so this is the largest change on the list and needs its own plan.
   Needs M1/M2 to say how much it buys.
3. **Order.** Codex: load · quiz redraw · drawing · save/sync · search · review · picture jump.
   Claude: load · redraw and subject-open scans · search · drawing · save/sync · review · weak-device mode.
   The real difference is drawing (Codex 3rd, Claude 4th) and whether B4 matters at all.
4. **Crashes.** Neither side has evidence for what kills a tab. Codex names drawing memory on
   high-resolution iPads; Claude names the 22 MB of question text. Unprovable from code; M2 gives
   one half of it.

## Count check

Claude 25 items: 15 in "both" (A1, A2, A3, A4, A8, B1, B2, B3, B5, B6, C1, C2, C3, C4, C6) and
11 in "only Claude" (B4, A6, A7, A9, B6, B7, C5, C7, C9, A5, C8). B6 sits in both tables —
Codex covers its backup half only — so 15 + 11 = 26 placements, 25 distinct items.
Codex 7 findings: X1-X6 in "both", X7 in "only Codex"; sub-claims X2a, X2b, X3a, X4a, X4b listed.
