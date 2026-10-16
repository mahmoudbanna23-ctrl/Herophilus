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
  fixes applied straight to the html, not yet back in build.cjs). Big-moves page (19 pieces, Codrops/Atropos/
  vanilla-tilt/Lenis): check-and-fix agent stopped PARTIAL at its call limit. State: fix\page.html 394,664 B (over
  300 KB target; next = pull shared head out of each card), 6 libs moved to pinned jsdelivr (byte-identical).
  OPEN: card 7 console error "Uncaught TypeError: I is not a function" (gsap@3.11.5 + Flip, cause unknown, original
  untested); card 11 text overlap + overflow 686/578; cards 14-15 click changes nothing; cards 1-6 dark mode unchecked
  (2 glaring panels, 3 static, 5 blank, 6 near-invisible text); card 16 loud orange; banned-design scan, card
  how-to-play text, CDN URL fetch check, MANIFEST.md all NOT done. Delete a card rather than edit its motion.
  Tools: motion-big\tools\{slim,assemble,check,sheet2}.mjs; dark shots fix\d1-*; originals fix\orig. Next: one fresh
  builder (sonnet, ROUTE-OK) for these, then refuter, then read whole page and publish, owner picks into PICKS.md.
  Small-page picks DONE 2026-10-16: 9 of 35, PICKS.md "Small motion picks" (commit 1e224775).

Next — step 1a part B (one builder, then refuter + looker, then recording for owner):
- Focus quiz vQuiz/vCase per step1a-brief.txt item 3 (in this folder; its file:// line is superseded by the online-only rule).
  question panel slide (J / Questions button, focus trap, Escape, focus return).
- Explanation render rule: "> " quote, " • " list, backticks inline code. Nothing else.
- Moves N4, M5, M6 + picked checkmark (#22) / cross (#24): decide whether the Lottie tick replaces N4 or follows it.
  Needs lottie-web lottie_light served from our own site; reduced motion = last frame.
- Screenshots to D:\scratch 2026\clean-1a\ (dark+light, 1440x900 and 1180x820).
- Checks from the trial-copy root: boot-check 0 errors · ui-tasks 7 PASS · frozen.js 8bd99322 0 mismatches.

Then: step 1b subject page (M1 M2 A3 A4), steps 2-5 per plan.
Rules: never edit the live Herophilus folder, no merge, no upload without owner yes; push this branch freely, never
--force; do not commit tools/city-film or tools/kaggle (unrelated, untracked).
Codex was out until 06:54 2026-10-16 and the gateway was down: re-probe before dispatch.
