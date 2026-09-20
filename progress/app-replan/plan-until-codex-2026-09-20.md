# Work plan until Codex returns — 2026-09-20

Codex own login is out of quota until 18:21 today. Gateway is up; free seats hold single-shot
calls only. This plan covers what runs before 18:21, and what is queued for Codex the moment it
returns. Parent plan: `PLAN-app-replan-2026-09-17.md`. This file does not replace it.

## A. Before 18:21 — what can run now

### A1. Module remap to the book (owner request 2026-09-20) — DONE
- Owner: remap all modules to the BOOK content, not the PPT. Meaning confirmed: match the app's
  module chapters to the book content map. Authorised: edit modules.js, transcribe ENT, peds first.
- COMPLETE for all 4 modules in `app\data\modules.js`:
  - pediatrics — 20 book-order groups (Perinatal medicine = coverage gap; all 6 perinatal-/neonatal-
    chapters → Neonatal medicine, grounded by `content\peds\perinatal-neonatal-boundary.md`). Commit b06c6c0.
  - ent — kept 3 volume groups, reordered chapters to book TOC, groups Ear/Nose/Throat. Commit ee52928.
  - neuropsych — kept 2 groups, Neurology-first, chapters to book TOC; 6 split-comments restored
    verbatim from git blob. Commits 1c0abe6 then 844dc0a.
  - ophtho — already done 2026-09-19.
- Structural rule found: peds book = one book → content chapters become groups; ENT/neuropsych books
  are volumes/halves → those ARE the groups, so kept groups and reordered within (avoids singleton groups).
- Progress/SCHEDULE keyed by date+title, never by id/group → reorder/regroup is progress-safe.
- Big-chapter rule (owner): a chapter as big as neonatal/perinatal/developmental becomes a main-title
  card with subtopics under it. NOT yet implemented as a renderer feature — flat groups only today;
  nesting/dropdown is a B4 renderer change, not a data change. Carry forward.

### A2. Security-review brief for astra — WRITE NOW, DISPATCH at 18:21
- This is an authorised security review of the owner's OWN app, at the owner's request.
- Brief is `progress\app-replan\astra-security-brief.md` (written this session).
- Astra (`gpt-6-astra`) gets the live URL https://herophilus.pages.dev as an unknown target and
  reports every defect it can find: auth/sign-in weaknesses, client-side data exposure, Firebase
  rules, XSS via rendered markdown/question content, storage/sync integrity, dependency and
  config leaks. Report only, no exploitation beyond proof, no data destruction, no third-party
  targets. Findings append to `bugs.md` as a new section, each: id, symptom, repro, severity.
- Dispatch is queued behind Codex's return because astra runs through Codex's login.

### A3. Boot-check baseline — can run now
- Confirm the app still boots clean before any B-block starts, so a later regression is
  attributable. Rung: one command, main chat.

## B. Queued for Codex at 18:21, in order

Order follows the parent plan: B1 → B2a/b/c → B11 → B3 → B4 → B5 …

### B1 — Design tokens (`app\css\tokens.css`)
- Colours from `reference.md` §6 unchanged; type scale, spacing, radii, shadows, easings,
  z-index (150/200/250/300/400 kept).
- Now also carries MOTION tokens (durations, easings) per new §4a of the parent plan.
- Reference discipline is settled (`design-refs.md`, 2026-09-20 second ruling): shadcn
  mechanisms not values; radius base 4px scale 2/4/8, no pills; Refero for numbers only, Claude
  style page dropped; the AI-tell refusal list applies and the refuter checks against it.
- Check: script counts distinct font-size ≤8, padding ≤12, radius ≤3 after B2c; refuter reads
  for token-family merges. Boot-check + side-by-side shots.

### B2 — Refactor (three passes, behaviour unchanged, each committed alone)
- (a) Scout maps 277 functions + ~216 style blocks into groups, lists dead code →
  `code-map.md`.
- (b) Codex deletes only what the map lists; line count before/after recorded; `git tag
  pre-replan` first.
- (c) Split `index.html` into `app\css\*.css` + `app\js\*.js`, classic scripts, explicit load
  order, still runs from `file://`.
- Check each pass: boot-check; `bankOf(` grep=0; three `max-aspect-ratio:5/4` blocks; print
  selector unchanged; refuter diffs behaviour.

### B11 — Bug fixes
- Open per `bugs.md`: the sign-in escalation (c3-1 / cause 2 hosting authDomain / cause 3
  dismissed-popup toast) is NOT settled — three candidate causes, only two in the inline script.
  Needs the owner answer in §D before a fix is written.
- Already fixed 2026-09-19/20: c1-1, c4-1, c4-2, c7-1/c8-3, c8-1, c8-2, silent-dead cloud sync.
  Do not redo.
- Rung: astra for sign-in (must be right), terra for the rest. Check: boot-check + refuter
  re-runs each repro; sign-in re-tested on the live origin.

### B3 → onward
- B3 components/states/copy/icons (M8 answer feedback lands here), B4 home + nav + most motion
  (M1/M3/M4/M6, M5/M7/M10 after the direction pick), B5 Clepsydra (M2 water clock, M9 poses).
  Each is its own chat-sized block; not started until B1/B2 land.

### B0 — Pictures (parallel, needs Codex imagegen)
- Three home-direction prompts written: `generated\home-dir-{a-rail,b-frieze,c-desk}\`.
- Run at 18:21: `codex-image.sh <asset dir> 1` per folder. Then Claude checks each against
  `style\greek.md`, owner picks one, then a picture per screen in that direction.

## C. Motion decisions folded in
- Parent plan §4a holds all ten motion ideas (M1-M10) as PROPOSALS, questions for Codex
  attached. M10 (PS-console shelf) is the owner's own idea, best fit for direction B, absorbs
  M4/M5/M7. Needs: owner yes to showing a painting enlarged+dimmed; film-vs-backdrop conflict
  resolved (tint, never both); per-module AA re-measure.

## D. Owner answers needed (nothing look-related builds without these)
1. Module remap: what does "remap to the book" mean concretely — reorder existing chapters to
   the book's chapter order, re-tag questions to book chapters, or rewrite chapter titles to
   match the book? And where is the ophtho remap recorded, so the same shape is copied?
2. Sign-in bug: does it happen in the installed app, a normal tab, or both? Does the Google
   chooser complete or vanish? (Settles which of three causes is live.)
3. Plan §7 look questions still open: 1 light mode, 2 film/orbs on new home, 4 Clepsydra
   controls, 5 strike-out gesture, 6 privacy wording.
4. M10 painting use: yes or no to a module painting shown large and dimmed as the home backdrop.

## E. Results after Codex returned — 2026-09-20 (run from the Herophilus Book chat; app MEMORY.md NOT yet updated)

- A3 boot-check baseline: 0 console errors, 4 module cards, QUESTIONS 4049, THEORY 81, 156 chapters.
  Rendered chapter rows: ent 30, ophtho 0, neuropsych 0, pediatrics 51 — the two zeros were not investigated.
- A2 astra security pass: NOT dispatched. The dispatch was stopped by a safety filter in that chat
  and was not retried. Owner may run it himself from `astra-security-brief.md`.
- B0 pictures: v1 and v2 generated for all three directions (`generated\home-dir-*\image-v1.png`,
  `image-v2.png`, prompts beside them, $0). An Opus refuter FAILED all three twice against
  `style\greek.md` (neon rims, palette lightened, photoreal desk, pills, cool grey bars). v2 fixed
  A 1 of 2, B 1 of 4, C 4 of 7 corrections. Ranking both rounds: A rail first. Two Codex attempts
  used, so no third. Layout direction is still judgeable; owner pick pending.
- B2a code map: `code-map.md` DONE. Two Codex (terra) runs failed review; a Claude builder patched
  it (`code-map.md.bak.pre-claude-patch` kept) and a refuter passed the result. Verified numbers:
  293 function declarations, 66 arrow-function bindings (strict grep, count with `wc -l` —
  `grep -c` misreports that pattern here), no `= function` bindings. `rg` is not installed.
  Safe-to-delete list, refuter-verified: functions `theoryFor` (3488), `toggleTh` (3820),
  `tagHex` (3233); selectors `.bk-bar`, `.bk-num`, `.gate .gor`, `.pal` / `.pal.on`.
  NOT dead: `fr-mount` / `fr-moulding` / `fr-walnut` (built at runtime near 4658).
- `fix-signin-brief.md` shows +24 uncommitted lines of unknown origin — not made by these runs.
- Still waiting on the owner: direction pick, §D2 sign-in answers, §D3 look questions, §D4.

## F. Owner answers — 2026-09-20 (given from his phone, on the v2 pictures)

- B2b DONE after section E was written: dead code deleted from `app\index.html` (8316 to 8301
  lines), refuter PASS, committed; rollback tag `pre-b2b-2026-09-20`. `pre-replan` tag already
  existed (2026-09-17) and was left alone. Refuter aside: `.palette` (line 842) now has no styled
  children — likely dead, not verified, not deleted.
- §D direction pick: **BOTH A rail and C desk** (`generated\home-dir-a-rail\image-v2.png`,
  `generated\home-dir-c-desk\image-v2.png`). Build both home layouts and give the user a setting
  to switch between them freely. B frieze dropped. Both pictures failed the strict style check
  (section E) — they fix the LAYOUT, not the finish: build to `style\greek.md`, not to the neon
  rims, pills or photoreal desk in the pictures. The layout choice is a device key, like theme.
- §D2 sign-in bug, owner's words: opens the site from the link; gate shows Google sign-in or
  continue without account; picks Google, completes the Google sign-in fully; expected profile
  creation, instead lands back on the opening gate as if never signed in; repeats — a loop.
  So: the chooser COMPLETES, the failure is after the return. Points at the redirect-result /
  authDomain path, not the dismissed-popup cause. Installed-app vs normal-tab not stated — he
  described the link in a browser. Still unknown whether commit 542c7e4 is live (it needs the
  OAuth redirect URI added and a redeploy by the owner) — ask before writing another fix.
- §D3 look questions: owner answered "I don't understand". Re-ask in plain everyday words, one
  at a time, each with a picture or screenshot of the two options. Do not build on a guess.
- §D4 / M10 painting backdrop: owner cannot imagine it — "show it to me". Make one mock picture
  (a module painting enlarged and dimmed behind the home screen) via `/generate`, then ask yes/no.
- A2 astra security pass: still not run (see section E).
