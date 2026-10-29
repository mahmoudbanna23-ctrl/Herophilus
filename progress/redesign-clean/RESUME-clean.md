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

- City strip DONE 2026-10-16 (owner: "everywhere, now"), commits 482ef7db + 1e1f4c03. City/room/hall/scene/films and
  assets gone (~12 MB); warm.css generic rules -> skin.css; ui.css deleted (rules sat under unused .folio). Follow-ups:
  240px end-of-page reserve for the mascot (overlap-proof.js 64/64 clean), no pill chips, --scrim token, gate grid gone,
  stale-tip bug fixed in clepsydra.js (bubble logic only). Refuters DONE x2. Pictures D:\scratch 2026\clean-strip\fix\,
  8 sent to owner. mod-*.jpg = 2026-07-28 design, not city (kept).

- Step 1b subject page DONE 2026-10-22, commit afc5d2dc (pushed). Brief step1b-brief.txt + step1b-fix-brief.txt;
  build/fix detail step1a-notes.md "step 1b part 1-3", "Step 1b fix", "step 1b fix 2". 3DStackMotion effect-1 on
  top, list below; progressbar ring per row; M1/M2 browser View Transitions; mascot right gutter >=1180, page end
  below. A3 + A4 underline DROPPED (copy rule). GSAP licence = GreenSock standard, not MIT (owner told).
  Refuter PASS; looker x2. Checks: boot 0 errors, 7 PASS, frozen 0, overlap 192/192 clean x2, leaks flat.
  Shots D:\scratch 2026\clean-1b\shots (144), reports looker-report*.md; recording D:\scratch 2026\clean-1b\rec.
  OPEN owner question: iPad portrait (820x1180) shows ~850px blank above the deck (demo's own 100vh box) - keep
  deck or list-only there like <=700? Left as demo: cards flying off-screen mid-scroll, start-pose sliver at left.
  Carry-overs: ~1540 ⚠ in non-explanation fields untouched; Lenis vs modals untested; drag below 1180 is sideways
  only; "Grade Gain" tag wraps alone at 390; back-card text still covered at 820 mid-stack.

Next — steps 2-5 per plan.
- " - " run-in lists inside paragraphs (stored text) stay inline; rule covers " • " only - owner call if wanted.
- --neu-* shadows measured 1.00-1.67 (decorative); disabled Check/Previous faint in light (disabled, likely fine).
- Case questions get no tick/cross (no option rows) - builder drop.
Rules: never edit the live Herophilus folder, no merge, no upload without owner yes; push this branch freely, never
--force; do not commit tools/city-film or tools/kaggle (unrelated, untracked).
Codex was out until 06:54 2026-10-16 and the gateway was down: re-probe before dispatch.

## App background - state 2026-10-25 (lean-in now in the trial app; not merged, not uploaded)
- Owner ruled on the step 1b iPad portrait question: KEEP the deck there.
- Fourteen idle full-screen wallpapers rejected (list: bg-codex-consult-prompt.md "Already tried").
- Research pick 2026-10-23, plan bg-plan-mix-2026-10-23.md: calm grain ground everywhere + one Paper Shaders
  scene at home top (nerves / liquid) + mouse-animations Flashlight cursor light. Built in
  D:\scratch 2026\clean-glow7\app-mix (licences\, notes.md, code\, results\). 8 films rec\mix-*.mp4, the four
  1440 ones sent. Checks: 0 console errors, stopped states pass, light contrast 4.60, dark >=5.84.
  Flag: the static CSS mask over the Flashlight edge goes past "colour only". Owner verdict: "not there yet".
- Codex consult (gpt-6-astra, read-only): bg-codex-consult-answer.md. Diagnosis: the painted world is the
  missing piece, shaders read as tech/electricity, painting shrunk to an inset, Clepsydra reads as chat mascot.
- OWNER PICK 2026-10-25: "The journey" - home opens on a wide view of his painted world; scrolling carries you
  past a foreground edge into the room where the subjects are; the heading belongs to the opening view;
  reading views bypass it. The mix (clean-glow7) is superseded.
- 2026-10-25: plate has NO layers and is a desk close-up, not a wide world; owner picked "lean in" (keep
  painted-codex-3, scroll pushes toward the desk) over a new doorway painting. Findings, licences, upscale:
  bg-journey-notes-2026-10-25.md. Built in D:\scratch 2026\lean-in (notes.md there): EDSR 2x plate
  3832x1642, Dolly (MIT, commit 380edf6) unchanged - painting `zoom` (default 1.12), heading `fly`, cards
  `tilt-up` + stagger. Refuter round 2 PASS: cards opacity 1 at scene end, card text >=5.89, heading >=12.86,
  0 errors, no added motion. Four films sent to owner.
- 2026-10-25 owner: films "fine" but light and dark looked the same -> picked a DAYTIME plate for light theme.
  Codex gpt-image edit of the night plate, v2 approved as is (D:\scratch 2026\lean-in\plate\day\, looker-v1/v2.md),
  EDSR 2x 3072x1316. Light ink #1c130b + pale heading wash (r 2svh) + label tag (r 6px): builder addition, owner
  KEPT them. Theme switch = browser default View Transition between plates (owner asked "light the candle");
  lamp-first timing / flicker declined (copy rule, idle pulse). Refuter r3 (refute\r3\verdict.md): A-E PASS.
  Fade cannot be filmed (screencast stalls ~300 ms at the swap); measured live instead (~7 frames, luma 131->35),
  owner watched it: "it works, put it in the trial app".
- 2026-10-25 PORTED to the trial app (scene, both plates, Dolly, fade). theme.js is FROZEN, so the fade wraps
  toggleTheme in js/theme-fade.js instead of editing theme.js (scratch copy still edits theme.js). Checks: boot
  0 errors · ui-tasks 7 PASS · frozen 0. Refuter r4: D:\scratch 2026\lean-in\refute\r4\verdict.md.
- 2026-10-26 PORTED: deeper push (`--dolly-zoom: 1.3`, owner "push in deeper") + "painting melts into page"
  (owner pick): home ground + panels from the plates, lean.css only. Dark: ground #0b0707, panels #1d1411.
  Light: owner ruled CREAM (not the dark day floor): painting fades straight to #e2cdaf (90th pct day plaster),
  panels #eddfc4; brass Continue; hero stripe brass; stat numbers re-picked. Min text contrast 4.82. Detail:
  D:\scratch 2026\lean-in\notes.md "Melt*"; lookers looker-melt*.md (r3 GOOD); refuter refute\r5\verdict.md PASS.
  Owner saw films rec\melt-*.mp4, said yes. Left as is (not asked): subject cards over the painting stay
  white/navy, mascot bubble navy in dark; 820 day plate floor reads a little dark (painting's own).
- 2026-10-29 PORTED: warm subject cards over the painting (r4: dark wood / parchment panels, lean.css colour only,
  looker-melt-r4.md GOOD) + NEW WIDE CARD PAINTINGS. Owner: square photos "half cropped" at the home 6:1 strip,
  picked new wide paintings. Codex gpt-image, refs = own mod-*.jpg + painted plate; generated\mod-wide-<sub>\
  (approved: ent/ophtho strip-v1b, neuro/peds strip-v2, 1536x256) -> app\assets\mod-<sub>-wide.jpg; render.js
  home cards add '-wide' (MOD_ART in frozen storage.js untouched; theory cards keep square art). Owner ruled the
  subject-colour wash OFF on home (lean.css `.lean-cards .mod-art`). Lookers: D:\scratch 2026\lean-in\
  looker-wide-v1.md, looker-wide-cards.md. Checks: boot 0 errors · ui-tasks 7 PASS · frozen 0. Refuter r6:
  D:\scratch 2026\lean-in\refute\r6\verdict.md.
- OPEN: card block starts y 8-10% (brief said 15%) · 49 leftover hlean-* test copies in the user temp
  folder, deletion was denied - owner to clear.

## Step 2 DONE 2026-10-29 (home Today + labelled menu; trial branch only, not merged, not uploaded)
- Briefs step2-brief.txt + step2-fix/polish/final-brief.txt (this folder). Owner: primary Today button ON the
  painting under the heading; it changes with the day (due review > saved mock > continue chapter > fresh /
  returning > day done) - not a fixed "Continue". Secondary row below the painting: weak chapters (top 3, name
  + subject, 3-line clamp), streak, accuracy (hidden on fresh). No days-to-exam (no data, no new key).
- Rail: labels always visible above 860 (260px, hover reveal removed); <=860 drawer kept, hamburger 44x44.
  Search lists chapters as own group. Mascot gutter on non-home views subtracts the rail (skin.css --lane-rail).
- Reports D:\scratch 2026\clean-2\ (report*.md, looker-step2*.md, refute-step2*.md, op-head/op-new/op-fix.txt);
  shots shots4\ (home) + shots5\ (subject pages), 6 sent to owner.
- Checks: boot 0 errors · ui-tasks 7 PASS · frozen 0 · overlap-proof 24/192 = identical to HEAD (all home:
  painting/lean-copy/lean-after under the mascot - PRE-EXISTING, not fixed). No horizontal scroll 1440/1180/1024.
- Left as is: Dolly runway gap above the row (414/377/543 px, by design) · light heading wash (owner-approved) ·
  bubble repeats question count · CSOM tile ~10px low at 1024/820 · 1440 tiles wrap 4+2 · at 1024 the fixed
  top-right buttons cover a chapter row end when scrolled · 1180 column ~445px, titles wrap.
- Next: steps 3-5 per plan.

## Step 3 STARTED 2026-10-29 (owner "go to step 3")
- Brief step3-brief.txt (this folder), three parts A lists+exams / B planning / C shell (modals, backup, term, gate,
  sync). Screen map D:\scratch 2026\clean-3\map.md. Part A dispatched to lean-drafter 13:1x (Codex out until 16:16);
  report D:\scratch 2026\clean-3\report-A.md. Per part: looker on shots-<part>\, refuter, owner pictures, commit.
- Part A DONE 2026-10-29 (owner yes): new lists.css (.lst scope, .lst-m on saved-mock + reset-deck modals only),
  exam-fx.js + vendor hourglass Lottie (#7), quiz.js list views, skin.css:428 lane adds rail on mock/review,
  render.js:52 no stray saved-mock button. Fix round step3A-fix-brief.txt; looker PASS, refuter CONFIRMED.
  Left as is: literal `**` in some stems (data, frozen). overlap-proof only loads review EMPTY - it never sees rows.
- NEXT: Part B (planning) - Codex after 16:16 or lean-drafter, same brief.
