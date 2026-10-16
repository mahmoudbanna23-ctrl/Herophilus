# Resume — clean redesign (branch redesign/clean-2026-10, trial copy only)

State 2026-10-16. Plan: C:\Users\Alfa388\.claude\plans\moonlit-skipping-summit.md. Owner picks: PICKS.md (this folder).

Done:
- Step 0: CONTRACT.md + tools/ui-tasks (tasks.js 7 checks, frozen.js hash check vs 8bd99322).
- Step 1a part A, commit 650bf39c: tokens (Open Props values), Geist + Newsreader base64, Tabler ui-icons.js, results
  screen. Refuter PARTIAL-harmless (4 index.html link edits, extra "Return to this set" button, "Review wrong answers" title).
- Ready-made animations: owner picked 11 of 37 (commit 749e6372), files in anim-picks/, table in PICKS.md.
- Big motion: owner picked Flying question cards (front page hero) and named https://motion.dev/ as the style he wants
  ("motion UI"). PICKS.md "Big motion - direction". Owed: a motion.dev-style showcase covering EVERY screen of the site (owner: not just
  question cards), owner picks, before step 4. Can run beside step 1a part B.
- 2026-10-16 owner: "Never recreate just copy" (memory copy-motion-never-recreate). Hand-built 45-move page VOID.
  Small copied page (35 MIT pieces, 11 screens): PUBLISHED https://claude.ai/artifact/2iU2kqb5HGa4UKsHGButBh,
  file D:\scratch 2026\motion-copied\herophilus-motion-copied.html (build.cjs + MANIFEST.md beside it; text/colour
  fixes applied straight to the html, not yet back in build.cjs). Big-moves page: PUBLISHED 2026-10-16
  https://claude.ai/artifact/GAE4sfawZdujmHdhY4bKP4, file D:\scratch 2026\motion-big\fix\page.html (17 cards,
  353,513 B). 0 console errors in 4 views (dark/light x 1440/390, fix\f1..f4). Refuter: fidelity PASS. Deleted
  (motion would have needed changing): p06-scrolltext, p13-gooey (fix\deleted.json). Card 1 arrow restored (patch
  removed). Known: card 14 click does nothing at 390 wide (phones secondary, accepted). Cards 15-17 = unmodified
  library code on our own small demo markup — not picked, so dropped. Patches: motion-big\tools\patches.mjs.
  Owner picked 2 of 17 (cards 1 + 11), PICKS.md "Big motion picks". Motion picking DONE; next = step 1a part B.
  Small-page picks DONE 2026-10-16: 9 of 35, PICKS.md "Small motion picks" (commit 1e224775).

- Step 1a part B DONE 2026-10-16, commits 7439efcf, da9a8736, c1759850, 4c330dc1. Brief step1a-partB-brief.txt,
  detail step1a-notes.md. Focus quiz, native <dialog> question panel (no slide: copied piece carries none, owner told),
  picks #10 grid + #11 check button, Lottie tick/cross (#22/#24) + animate.css headShake/pulse. Explanation rule
  widened: consecutive "> " lines = one quote, line-leading "•" joins the list (check-explanation-render.js:
  7388 explanations, 0 empty items, 0 throws). Screenshots D:\scratch 2026\clean-1a\b-*.png (looker GOOD).
  Owner recording D:\scratch 2026\clean-1a\rec\step1a-*.mp4 (4 videos, record-step1a.js), sent 2026-10-16, no reply yet.
  Checks at close: boot 0 errors · ui-tasks 7 PASS · frozen 0 mismatches.

Next — step 1b subject page (M1 M2 A3 A4, big pick 3D stacked cards), steps 2-5 per plan. Carry into 1b:
- Yellow ⚠ in stored explanations reads as an emoji (banned): swap at render time for the ui-icons warning icon.
- Dashboard pills: red "ENT" tag by "Dashboard", grey count chips (light). Mascot bubble covers dashboard counts.
- " - " run-in lists inside paragraphs (stored text) stay inline; rule covers " • " only - owner call if wanted.
- Boot-check per-module line shows ophtho 0 chapter rows (since part A) - investigate.
- --neu-* token contrast unmeasured; disabled Check/Previous faint in light (disabled, likely fine).
- Case questions get no tick/cross (no option rows) - builder drop.
Rules: never edit the live Herophilus folder, no merge, no upload without owner yes; push this branch freely, never
--force; do not commit tools/city-film or tools/kaggle (unrelated, untracked).
Codex was out until 06:54 2026-10-16 and the gateway was down: re-probe before dispatch.
