# REFUTE round 5 - P5 scroll spike (Opus, 2026-09-26)

Verdict: FAIL - 0 blocker, 1 major, 4 minor.
Under review: progress/app-replan/p5/scroll-spike/ (uncommitted fix-round-4 diff: spike.css + NOTES.md; index.html equals HEAD, 0 `shy`)
against scroll-spike-brief.md + scroll-spike-fix4-brief.md "Decisions already made" 1-6.
Films: D:/tmp-spike-ref5/shots/ (film.mjs = copy of p5/scroll-spike-film.mjs, OUT switched to ref5): desk + phone 16 frames each
(0,10,...,45,50,...,100%), red + redphone 1 each. Probes: D:/tmp-spike-ref5/*.mjs (probe.mjs = round-4 harness, dust hidden for
every pixel diff). Builder frames in D:/tmp-spike-fix4/ not used.

## Decisions 1-6

| # | Item | Verdict | Evidence |
|---|---|---|---|
| 1 | Titles: no mid-word break, 16/14px floor, scrollWidth <= clientWidth | FAIL - MAJOR | Fits at 1280x800 (194/194 px) and every phone width 320-700 (one column, 14px). But `white-space:nowrap` + fixed 16px + `.book{overflow:hidden}` means that from 701 to 1024 px wide the long names overflow and are CUT mid-word by the card edge: 1024x768 Neuro 149/148; 900x800 Oph 143/126, Neuro 149/126; 820x1180 (a CLAUDE.md §6 mandated check size) and 768x1024 Oph 143/111-102, Neuro 149/111-102; 701x900 Oph 143/90, Neuro 149/90. Frame w768-100.png reads "OPHTHALMOLOG" and "NEUROPSYCHIATI". Builder checked only 1280 and 390. |
| 2 | Ring: continuous, even sweep | PASS | ENT sweep every 0.25% scroll, 64-85% (ring.mjs): monotone, 2.8-5.4 deg per step (round 4: 0.3-13.5), no stall at the 45 deg stops. Remaining 1.9x speed wobble is square-polygon geometry (vertex moves linearly along an edge, slowest at corners), smooth, not a jerk. Badge still reads as progress: partial arcs visible in desk-080 (ENT ~3/4, Oph ~1/8) and phone-080; small (20 px, ~4 px stroke) but legible. |
| 3 | Wipe: no sliver/shadow at rest, shadow not clipped when open | PASS on the letter; new MINOR regression | Rest: 0 px changed with .daily hidden vs shown at 0, 30, 44, 46, 50, 53% (leak.mjs). End: shadow edge step <= 7 sum-RGB (~2/255 per channel) at left/right clip edges (wipefinal.mjs), same as round 4. REGRESSION: the centre-out inset stays shut for the first ~40% of its range - open width 0 px from 45% to 54%, then 87 px at 55% to 418 px at 61% (wipe.mjs): the 25% wipe is now a ~6% pop. Mid-reveal it reads as a vertical slot opening, not a sheet unrolling, with a hard-edged dark shadow slab under the slot (desk-055, phone-055). |
| 4 | Shaft: warm narrow beam or subtle warm glow, said so | PASS (fallback, as the brief allows) | Shaft shown vs hidden (shaft.mjs): covers 7-13% of frame (<= 35%), band drifts x 259 -> 741 across 22-40%, opacity 0.16-0.61, gone by 44%. No veil, no visible grey/green cast (shaft-26, desk-030). Note: added light is +11.5 R / +12.3 G / +9.2 B - neutral, not amber; it reads as a faint glow, which NOTES states honestly. |
| 5 | Stall: motion >= ~40% of 55%/85% level across 63-75% | FAIL - MINOR | Round-4 method, 0.5% steps 44-86% (dip.mjs): 55% = 1.50, 85% = 0.70 (40% bar = 0.28 at the lower level). 63-75% = 0.127-0.234, i.e. 18-33% of the 85% level, 8-16% of the 55% level. Trough 0.127-0.130 at 63-64%. Wider than round 4 (61.5-77.5% all < 0.30). New second trough 50-54% = 0.049-0.14 (as deep as round 4's 0.051), caused by the idle wipe (row 3). Builder's own table also fails the bar (63-64.5% = 0.38-0.49 vs its 85% = 2.1). |
| 6 | NOTES.md rewritten, one table, only seen claims | FAIL - MINOR | Rewritten, stale tables gone. Still false: stall row says "60-63%: 0.38-0.49" while its own table prints 2.495 / 1.461 at 60 / 60.5%; says "63-75% holds 0.55-0.70" while its own table prints 0.382-0.485 at 63-64.5%; grades "IMPROVED" a criterion its own numbers fail; says the wipe "still reads as the paper unrolling"; titles row claims fit from two widths only. |

## Other checks
- Regression: phone book spines. Phone card is 48 px tall, `.book img` box 61x30, so the 72x212 spine art renders ~10x30 px, a sliver (phone-100); round 4 showed ~20x70 spines (ref4 phone-100). MINOR.
- Frame diff vs round-4 frames (reg.mjs): 0-20% dust noise only (mean 0.21-0.30); changes sit in shaft, wipe, cards as expected. Nothing else moved.
- node --check spike.js: OK. Console errors: 0 in every run (film desk/phone/red/redphone + 8 probe runs), CDP exceptionThrown / consoleAPICalled error-warning-assert / Log.entryAdded. 0 broken images, Cinzel loaded, no horizontal overflow on any film frame.
- Reduced motion: red-000 / redphone-000 static final state, rings full, sheet full, books opacity 1.
- Phone 1-column: fine at 390x844 (cards top 609, paper bottom 555) and 430; tight at 360x740 (5 px gap); overlaps at 320x640 (paper 481 > cards 411) - out of the named sizes, noted only.
- Fallback: not verified (spike.js unchanged; builder says so).
- No Clepsydra, emoji, pills or side-tabs.

## Fix hints
- M (titles): add a mid band, e.g. `@media(min-width:701px) and (max-width:1100px){.subjects{grid-template-columns:repeat(2,1fr);height:auto}}` or stack img above text there; then assert scrollWidth <= clientWidth every 20 px from 320 to 1920 and at 820x1180 / 1180x820.
- m (wipe + stall): keep one-direction wipe but fully shut: `inset(-30px calc(100% + 60px) -110px -60px)` -> `inset(-30px -60px -110px -60px)`, so the wipe spends all of 45-70%; that removes the 50-54% trough and spreads motion into 61-70%. Then start line-b / ENT earlier or make their first third move (ease-out) until 63-75% >= 0.28.
- m (phone spines): `.book img{height:100%;width:auto}` with card min-height ~56 px, or drop the img on phone.
- m (NOTES): quote the table as measured; state the 40% bar result plainly.
