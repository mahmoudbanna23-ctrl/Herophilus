# Step 4 front page - notes (builder, 2026-10-29)
- Read step4-brief + step3-brief. Demo questions picked (printed keys, no markup in explanation): entep-ear-20, opqb-t20-830, npep-loc-6.
- N1 source: codrops/CoverPageTransition src/js/textLinesReveal.js (MIT) + SplitType 0.3.4 (js/split-type.min.js in codrops/ScrollBlurTypography, lukePeavey).
- M3 source: codrops/OneElementScroll js/index.js addParallaxToText / addParallaxToColumnImages (MIT): gsap.fromTo y, ease 'sine', scrollTrigger scrub:true.
- Counter: HubSpot odometer (MIT) from D:\scratch 2026\motion-copied\src\odometer.
- Plan: css/front.css, js/front.js, index.html link/script, boot.js showGate hook, gate.js text link.

## Built
- New: app/js/front.js, app/css/front.css, app/vendor/odometer.min.js, odometer-theme-minimal.min.css, split-type.min.js, app/assets/licences/odometer-LICENSE.txt, front-page-LICENSE.txt.
- Edited: app/index.html (links + scripts before boot.js), app/js/boot.js (FrontPage.open() only when profiles.length===0), app/js/gate.js (FrontPage.close() at top of showGate; quiet "back to front page" link on the sign-in step, both button orders; file: swap kept).
- Stacking: .front is z-index 100 (under Clepsydra 150, gate 200). Also showGate() closes the front, so order is only a backstop.
- Lifecycle: Lenis + ScrollTrigger + progressbar rings + odometer live in one gsap.context; close() reverts it, destroys Lenis, removes ticker. After gate opens: lenis 0, triggers 0, bars 0 (checked).
- Reduced motion: no Lenis, no triggers, headings not split, odometer shows final number, ring drawn to the expShare (verified: lenis 0, triggers 0, total 7,477, ring 100 %).
- Demo data: counts read from Q_ALL minus LOCKED_MODULES at runtime (QUESTIONS is empty until a term is picked).

## Results (2026-10-29)
- Contrast, dark + light, 4 sizes, 4 stages, scrolling, alpha composited from a text-hidden screenshot: 0 failures after fix. First run failed light hero lede (4.03-4.20, 3.55 and 3.70 at 820x1180 and 390x844); fixed with a heavier light scrim and a uniform scrim at <=820 (front.css).
- Reduced motion 1440, dark + light: 0 failures. No horizontal scroll at any size (scrollWidth == clientWidth everywhere).
- Demo isolation: localStorage before = after (1 key, wardround.theme), 0 Storage setItem/removeItem/clear calls while answering all 3. Console errors 0.
- boot-check: 0 errors. tasks.js: 7 PASS. frozen.js 8bd99322: 30 files, 0 mismatches.
- overlap-proof: TOTAL 192 combos, failing 24, hits 56 = same totals as clean-2/op-fix.txt. Row detail differs from that file (checked counts, a few y offsets; e.g. mock checked 49 vs 67): not caused by the front (it is closed whenever a profile exists); step-3 changes since op-fix were not re-diffed. Output saved to D:\scratch 2026\clean-4\op-now.txt.
- Shots: D:\scratch 2026\clean-4\shots-F1\ (and \rm for reduced motion), report.txt inside. Images not opened by me.

## Fix round 1 (2026-10-29)
- R1: parallax now as published (OneElementScroll js/index.js 138-158): y 75 -> -75, trigger = the painting, 'top bottom'/'bottom top', ease sine, scrub; clamp() start/end removed.
- R2: gate profile step gets the same quiet "Back to the front page" link when profiles.length===0 (gate.js).
- R3: demo heading and finish line use demo.length.
- L1/L2: hero scrim now directional (solid behind text on the left, gone by 64%); >820 painting centred; <=820 painting becomes a band on top (position 93% / 75% at <=480) fading into the page, text below on plain colour, scrim off. Grey smudge in light = pale .55 scrim over the day painting's dark bottom edge; scrim now fades to 0 there.
- L3: sections transparent; backdrop.css gained html.front-on body::before (same plates/blur, centred scrim). Sections are two-column (heading + content) at >820.
- L4: subject cards use surface-1 card + 3px subject colour line (inset shadow) on top; steps also cards.
- Hero scrim v2: solid to the text block's right edge (--fp-r), fades over 20%; dark .62, light .88 (first pass faded too early: light lede 1.06-1.24, dark h1 line 2.6). fp-note colour text-3 -> text-2 (4.0-4.3 on the plate). <=820 top bar gets a fade backing (mark 2.24 on the painting). Painting position: >820 45% centre; <=820 band 93%, <=480 75%.
- F2 results: contrast scan of the whole page (steps of 0.6 viewport, alpha composited, darkest+lightest pixel behind text) 4 sizes x 2 themes: 0 fails; rm 1440 both themes 0 fails; no horizontal scroll; console errors 0; demo isolation identical, 0 storage writes; boot-check 0 errors; tasks 7 PASS; frozen 0 mismatches; overlap-proof 192/24/56. Shots: D:\scratch 2026\clean-4\shots-F2\ (+ \rm). Images not opened by me; hero brightness checked numerically only.

## Fix round 2 (2026-10-30, builder)
- V1 light scrim: 7-stop eased fade (88% -> 0 over fp-r..fp-r+48%), no visible end; light art gets a bottom mask so the day painting's dark table shadow (the "brown patch") fades into the page. Cause of the patch: the painting's own dark bottom, not a layer.
- V2 art position 45% -> 92% (bowl 76-92% of the width now in frame at 1440/1180). V3 portrait: hero min-height 0, mask fade 84%, text pulled up 40px over the fade, h1/lede max-width none. V4 theme button: own filled square + 1px text-2 border. V5 bar padding follows the 920px column. V6 how: heading + ring/caption left, three steps one list surface right. V7 demo: .fp-solo centred 640px, heading above. V8 subjects: one list surface with hairline rows, colour square before the name.
- front.js markup only (how section, demo wrapper class). Harness: D:\scratch 2026\clean-4\code\shots3.js -> shots-F3.

## Fix round 3 (2026-10-30, builder)
- W1 light hero: veil 82% solid to fp-r+4% then 8-stop eased fade to 0 at fp-r+40% (was 88%, fade to +48%); a first try at 70% failed lede contrast (4.1-4.2), 82% = 0 fails. Light bottom mask removed (it turned the brown wood into the grey-brown smear); the day painting is now cropped instead: background-size auto 118%, position 92% 0, so its dark bottom shadow falls outside the hero. No layer of ours tints the corner. Painting file untouched.
- W2 portrait: dark band position 75% -> 83% (<=480); light portrait uses the desktop-light crop (size auto 125%, pos 86% 0 at <=480, no mask). Bowl whole in frame at 390 both themes (looked at hero_dark_390x844, hero_light_390x844).
- W3 how: left column stretches the list height (.fp-how-l), heading top, ring 148px + caption stacked and centred in the rest (>820).
- W4 bands: cause = backdrop.css >=1180 light veil was .40 at the margins (graded 90deg), showing the day painting's dark shadow. Now one even .88 veil in light.
- W5 spaced review: capture artefact - the body line trigger was top 88% and the body sat under that line at 830px. Trigger now top 96% (front.js). 
- Harness: code/shots4.js (TH=light env runs one theme), all4.sh -> shots-F4, h-*.txt.

## Fix round 4 (2026-10-30, builder; stopped at the tool-call cap, NOT finished)
- X1 light hero: band veil removed (.fp-scrim display:none in light). Option 1 chosen: a feathered pool of the page colour (80%) behind the text block only (.fp-hero-in::before, 120px eased mask on all four sides, >820 only). Lede contrast passes in shots-F5 run (no lede fail left). Looked at shots-F5/hero_light_1440x900.png: no hard edge, bowl/book/scrolls intact; pool still reaches ~x=950 (could shrink --fp-f to ~96px). Text-shadow and lede plate NOT needed.
- X2 light portrait: light mask-none override removed (light now fades with the dark mask, same crop kept), .fp-bar background none in light. Looked at shots-F5-try1/hero_light_820x1180.png: smooth fade, no pale band under the nav. Mark contrast then failed (2.4-2.9 on the painting) at all four sizes; added a filled plate + 1px border on .fp-mark in light (same as theme button). NOT re-shot or re-measured.
- X3: harness code/shots5.js settles before every shot (ScrollTrigger.update, 2.6 s wait, non-scrub tweens progress(1), ring path dashoffset 0 once text is 100 %) and reports NOT-AT-END. Run flagged ring dashoffset 295 at 1180x820 and two step lines at ty -27 at 820x1180 at some stops (could be scan stops, not the named shots; not separated). Not closed.
- X4: faint line at y~657 = border-top of the closing section (.fp-sec.fp-end, found by elementsFromPoint). Removed in light: .fp-sec border-top 0. Not re-shot.
- NOT RUN: dark shots, reduced-motion run, boot-check, tasks.js, frozen.js, overlap-proof row diff vs clean git archive HEAD.

## Fix round 5 (2026-10-30, finishing worker)
- X1: pool shrunk: width 600->540 + 2*fp-f, fp-f 120->90px (opaque only over the text box, 90px fade). Backup scratch clean-4/front.css.pre-F5.
- X1 (cont): first try (pool 540, lede 600 wide) failed lede scan 3.74/3.29 at 1440/1180 (lede 277-877 outran the pool). Fix: light lede max-width 27em (>820 only), pool 548px + 90px feather -> pool reach ~x=915 at 1440 (was ~950+). Looked: soft frosted halo, bowl/book/scrolls intact; lamp is veiled behind the text (inside the pool). Lightest option used: pool only; no text-shadow, no lede plate.
- X2: shots-F5 light 820x1180 + 390x844 looked at: smooth fade, no pale band, headline gap as dark. Mark plate = surface-1 fill + 1px text-2 border + radius-1, same as theme button; reads as part of the bar, but it is a white pill on the painting (judgement call for the looker).
- X3: cause = capture, not page. Lines/ring flagged were below the reveal trigger line (top 96% / ring 90%) at the viewport edge: legit unrevealed state. Capture fix (code/shots6.js): before every shot scroll +20% viewport, wait 2.4 s, scroll back, then settle. Result: 0 NOT-AT-END in all light/dark runs; ring full at 1180x820. No page bug (once:true triggers fire on normal scroll).
- X4: demo_light_1440x900 looked at: line at y~658 gone (cause: .fp-sec border-top, light now 0).
- Verify F5: shots-F5 (+rm) all sizes both themes; contrast scan 4 sizes x 2 themes 0 fails, rm 1440 both 0 fails; console errors 0; no h-scroll (sw==cw); demo isolation identical, 0 writes; boot-check 0 errors (159 chapters with questions); tasks 7 PASS; frozen 8bd99322 0 mismatches; overlap-proof 192/24/56, row diff vs fresh git archive HEAD (fc9afbc8) = identical on all 192 rows (i-op.txt vs i-op-head.txt). Dark hero shots byte-identical to F4; other dark diffs = parallax subpixel only (looked at how_dark_820x1180 F4 vs F5: same). Files: D:\scratch 2026\clean-4\run12l.txt run12d.txt run12rm.txt i-*.txt.

## Fix round 6 (2026-10-30, builder)
- Y1: hero + top bar always night. front.css: dark token values restated on `:root[data-theme="light"] .fp-bar, .fp-hero` (one block, no duplicated rules). Deleted: light art swap, light scrim-off, text-block pool, light lede width, light crop, light portrait overrides, wordmark plate (.fp-mark pill). Backups: clean-4/front.css.pre-F6, backdrop.css.pre-F6.
- Y2: light-only `.fp-hero::after` 120px eased fade to the page colour (--fp-page, resolved on .front), hero-in extra bottom padding (+56px wide, +72px portrait over the 48px) so buttons stay above the fade. Looked at hero_light 1440/1180/820/390: no hard edge, no dark band, text on dark throughout.
- Y3: backdrop.css light `html.front-on body::before` = background-image none, solid --surface-0, blur off (the 1180 light veil rule removed). Looked at what_light_1440x900: clean light page.
- Y4: 15 of 16 dark shots byte-identical to shots-F5; demo_dark_1440x900 differs by max 1/255 on 0 px over threshold (parallax subpixel, bbox 806,794-809,834).
- Verify F6: contrast scan 4 sizes x 2 themes 0 fails, rm 1440 both 0 fails; console errors 0; no h-scroll; demo isolation 0 writes, identical; boot-check 0 errors; tasks 7 PASS; frozen 8bd99322 0 mismatches; overlap-proof 192/24/56, 0 diff lines vs i-op-head.txt (fresh git archive HEAD). Shots D:\scratch 2026\clean-4\shots-F6\ (+rm\). Not opened: what/how/demo light at 1180/820/390 and rm shots (opened hero x4 + what_light_1440).
