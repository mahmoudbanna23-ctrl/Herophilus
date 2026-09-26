# REFUTE round 6 - P5 scroll spike (Opus, 2026-09-26)

Verdict: PASS on the fix-5 acceptance criteria (all 6 "Must land" items and the 3 "Do not regress" checks hold).
Defects: 0 blocker, 0 major, 1 minor, 2 cosmetic, plus notes. The minor one is a regression the fix caused. If the parent
counts any regression as blocking, the verdict becomes FAIL on that item alone.

Under review: progress/app-replan/p5/scroll-spike/ (spike.css + NOTES.md changed; spike.js and index.html equal HEAD; `node --check spike.js` OK).
Films: D:/tmp-spike-ref6b/shots/ (film.mjs = p5/scroll-spike-film.mjs with OUT switched): desk 1280x800, w1024 1024x768, w820 820x1180,
w768 768x1024, phone 390x844 (16 frames each, 0-100%), red + redphone. Probes: D:/tmp-spike-ref6b/*.mjs. The round-5 probes
(dip, ring, leak, shaft, wipefinal, reg) were re-run as they are, and I wrote my own for this round: mysweep.mjs, mydip.mjs (summary added),
wipepx.mjs, sizes.mjs, beat.mjs. None of the builder's D:/tmp-spike-fix5 scripts were run.

| # | Item | Verdict | Evidence |
|---|---|---|---|
| 1 | Titles fit at every width | PASS | mysweep.mjs, 320-1600 step 10 at heights 600, 800 and 1024 (387 layouts, final state): 0 failures on scrollWidth>clientWidth, title/subtitle text past the card's inner right or bottom edge, text overlapping the ring, ring outside the card, card outside the viewport, or font below 16/14px. Columns: 1 at 320-700, 2 at 710-1070, 4 at 1080-1600. Tightest: Neuropsychiatry at 1080, text ends 38px before the card's inner edge (the 30px ring padding included). Frames w768-100, w820-100 and w1024-100 all show the four names whole. Choreography in the 2x2 layout (beat.mjs): every card is 100% on screen at the middle and end of its beat at 1024x768, 820x1180 and 768x1024. It is below the viewport only at beat start, when opacity is 0. |
| 2 | Stall 60-76% >= 40% of the 85% level | PASS | mydip.mjs reproduces the builder's table value for value: 85% = 0.544, bar 0.218, minimum across 60-76% = 0.330 at 63.0% (0.607 of the level), 0 steps fail. This is real motion, not the effect of a lower baseline. In absolute terms the 63-75% trough rose from round 5's 0.127-0.234 to 0.330-0.471 (1.4-2.6x). Measured against round 5's own 85% level (0.70) it is still 47%. The 55% peak fell from 1.50 to 0.495 because the round-5 pop is now spread over 28% of scroll, so the motion was redistributed, not cut. Sums: 44-60% 15.5, 60-76% 13.3, 76-86% 9.3. The dip at 44.5-47% (0.236-0.287) is 43-53% of the new level but only 34-41% of round 5's. It sits outside the brief window, where the shaft has ended and the wipe has not started: NOTE. |
| 3 | Wipe: top-down unroll, continuous, nothing at rest, shadow unclipped | PASS | wipepx.mjs (.daily shown vs hidden, pixel extent): top edge fixed (y=224 desk, 178 phone). The lower edge advances 17-18px per 1% from 47% to 71% on desktop and 13-14px per 1% on phone, with no gap, no dead zone and no pop, and the paper is complete by about 71-72%. leak.mjs: 0 px changed at 0, 30, 44 and 46%. wipefinal.mjs: shadow step at the clip edges is left 2.9 to 7.8, right 6.8 to 0.0, bottom 0.1 to 0.0 sum-RGB (<=7, same as rounds 4-5), so the shadow is not visibly clipped. The 2-degree tilt against the straight lower cut is COSMETIC (wp-55, phone-060). Across a 410px paper the gap is about 14px. It reads as a roller blind drawn down from the bar: a clean horizontal cut slicing a text line, with no curl or shade at the edge. Acceptable for a spike. |
| 4 | Phone spines back to ~20x70 | PASS | sizes.mjs 390x844: ENT 24x70, Oph 16x70, Neuro 14x70, Peds 16x70, from a 61x70 box. 430x932 is 14-24x71. 360x740 is 12-20x60 (the card is shorter). Paper and cards do not overlap: gap 46px at 390x844, 15px at 360x740, 12px at 375x667. 320x640 overlaps by 24px (paper bottom 389, cards top 365). That size is not named in the brief and round 5 overlapped by 70px: NOTE. Frame phone-100 reads well. |
| 5 | Shaft warm | PASS | shaft.mjs at 26%: +15.0 R / +10.8 G / +4.2 B over 12.4% of the frame (round 5: +11.5 / +12.3 / +9.2, neutral). Red now exceeds green, which exceeds blue, so the light is warm. Gone by 44%. desk-030 shows a faint warm glow with no veil. |
| 6 | NOTES rewritten, numbers from the builder's own run | PASS, COSMETIC slips | Every number I re-measured matches (sweep columns, stall table, wipe edge steps, shaft RGB, ring 2.8/5.4, the 390/430/360/320 gaps). Slips: (a) the phone spine range is given as "~16-24 x 70px" but Neuro is 14x70; (b) NOTES does not mention that the 2x2 band shrank the spines at 1024x768 (see M1); (c) the "vertical overflow" condition in the builder's sweep.mjs can never fire (it compares scrollHeight with clientHeight on an auto-height flex child). My sweep checks the text box against the card's inner edge, and that claim does hold. |
| - | Do not regress: ring evenness, badge legibility, 0 console errors | PASS | ring.mjs: min 2.8, max 5.4 deg per 0.25%. desk-080: ENT ring about 3/4 full and Oph partly full, both legible at 20px. Phone ring is 26px. Console errors: 0 in all 7 film passes and every probe run (CDP exceptions, console error/warn/assert, Log). 0 broken images, Cinzel loaded, no horizontal overflow. |

## Defects
- M1 MINOR (regression caused by item 1). File: spike.css, the `@media(min-width:701px) and (max-width:1079px)` rule. It puts 2 rows inside the unchanged
  `.subjects{height:clamp(105px,16vh,170px)}`, so at 1024x768 (a film size) each card is 54px tall and the spines render 14x40, 9x40, 8x40 and 9x40:
  slivers, the same defect class item 4 fixed on phone. Round 5's single row at 1024 gave roughly 22-35 x 103-109 (my estimate from its 123px row,
  not measured). 768x1024 and 820x1180 are better but still 12-22 x 62-65. Fix: in that band raise `.subjects` height
  (for example `height:clamp(170px,22vh,300px)`; at 1024x768 the paper to card gap is 52px, so it can take about 45px), or drop the spine image in the band.
- c1 COSMETIC. File: NOTES.md. Correct "~16-24 x 70" to "14-24 x 70" and add M1 to the open gaps.
- c2 COSMETIC. File: spike.css, the wipe. The straight cut runs against the 2-degree paper tilt. Optional: a small shaded lip at the lower edge would make it read as unrolling.

## Notes (not defects)
- Viewports 600px tall (not named): paper and cards overlap at every phone width (-2 to -42px) and at 1080-1600 desktop (down to -61px at 1600).
  Desktop rules at 1080 and above are unchanged since round 5, so this predates round 6.
- Regression diff against the round-5 frames (reg.mjs): desk 0-45% and 90-100% differ only by dust noise (mean <= 0.04, except desk-030 at 0.42 from the shaft tint).
  red-000 differs by 0 px. Changes at 50-85% and on phone-100 are expected. The "Neuropsychiatry - seizure / pathways" wrap on the paper at 1280 is the same in round 5.
- Fallback path: not verified in this round either (spike.js unchanged). Real Firefox/Safari, DPR above 1 and jank were not checked.
