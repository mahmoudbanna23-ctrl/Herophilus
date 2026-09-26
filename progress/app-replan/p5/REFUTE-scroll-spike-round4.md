# REFUTE round 4 - P5 scroll spike (Opus, 2026-09-26)

Verdict: FAIL - 0 blocker, 2 major, 4 minor.
Under review: progress/app-replan/p5/scroll-spike/ (uncommitted fix-round-3 diff vs HEAD f901c0ae) against
scroll-spike-brief.md + scroll-spike-fix3-brief.md (7 must-land items) + REFUTE-scroll-spike-round3.md.
Films: D:/tmp-spike-ref4/shots/ (film.mjs = copy of p5/scroll-spike-film.mjs with OUT switched to ref4;
desk/phone/fb 16 frames each, red/redphone 1 each). Probes: D:/tmp-spike-ref4/run1..run11.mjs (dust hidden
for every pixel diff). Builder frames in D:/tmp-spike-fix3/ not used.

## Must-land items

| # | Item | Verdict | Evidence |
|---|---|---|---|
| 1 | Rings fill 0-100%, one per card | PASS on range, new MINOR on smoothness | Endpoints and stagger right: desk-085 (ENT full, Oph ~3/4, Neuro ~1/3, Peds start), desk-100 + red-000 all full. But the 9-stop clip-path keyframes inherit the cubic-bezier(.42,0,.28,1) timing PER KEYFRAME INTERVAL: ENT sweep sampled every 0.25% scroll (run3) moves 0.3 deg to 13.5 deg per step, stalling at every 45 deg (44.9, 90.0, 134.9, 180.0, 224.9, 270.0, 314.9). An 8-tick ratchet, not a smooth fill. |
| 2 | Titles wrap at word boundaries only, OPHTHALMOLOGY never mid-word | FAIL - MAJOR | Builder replaced one mid-word break with another: soft hyphens. desk-100 / red-000: "OPHTHALMOL- / OGY", "NEUROPSYCHI- / ATRY". phone-100: "OPHTHAL- / MOLOGY", "NEURO- / PSYCHIATRY". Brief item 2 forbids mid-word breaks outright; NOTES admits the hyphen. Titles were also shrunk to 12.8px (1280) and 11.7px (390), from 15.4 / 13.65. Text box is only 102px wide inside a 272px card at 1280. |
| 3 | Wipe keeps shadow and roll | End state PASS; new MAJOR regression at rest | Final: wipe-final.png, roll + shadow intact; step at clip edges <= 3/255 per channel (run10). But the closed clip inset(-30px 100% -110px -60px) is NOT empty: its -60px left inset leaves a 60x400px window open left of the paper from 0% to 45%. Diff with .daily hidden (run5): 13,557-22,794 px changed in box x305-364 y234-669, max diff 550/765. Visible as a bright vertical paper sliver at x~362 plus a hard-edged shadow strip crossing the scrolls and envelope: leak-0.png (first frame), desk-024, desk-030, phone-030 (x~92). |
| 4 | Shaft reads as soft warm light (warm tint, screen, animated opacity/transform) | FAIL - MINOR | Grain static gone (opacity .05 soft-light). Opacity/transform animation and cream tint pre-date this round (shaft rule unchanged in diff). Measured shaft contribution (run6, shaft hidden vs shown): 26%: +15.6 R, +17.0 G, +13.5 B over 768k of 1,024k px; 30%: +12.7/+14.4/+11.8 over 987k px. G >= R = neutral/cool lift over 75-96% of the frame: a haze that desaturates the warm wall (desk-024, shaft-26..40), not a warm beam band. |
| 5 | Phone glow on lamp or hidden | PASS | Phone .candle-pool opacity 0 at 10%/20% (run6); none seen in phone-*. Desktop: pool and plate transforms byte-identical at 5/10/15/20% (run11), glow centre ~16px from wick. |
| 6 | No motion stall 68-73% | FAIL - MINOR (not closed) | Pixel-diff sweep 55-85% at 0.5% steps, dust hidden (run4): mean frame diff 0.70 at 55.5%, 0.68 at 85%, but 0.051-0.14 across 61-73%, trough 0.051-0.057 at 70-71.5% (~13x below neighbours). Moving ENT start to 68% barely helps: its eased start overlaps the eased ends of wipe (70%) and line-b (73%). Frames: dip-0630..dip-0750. Builder verified by computed style only. |
| 7 | Every round-3 minor + NOTES honest | FAIL - MINOR | m3/m4/m6 not closed (rows 3, 4, 6). NOTES.md: upper tables left stale and now false - "0-24%" pool range (now 0-20%), ".ring-sweep rotates a clipped conic-gradient mask", "titles wrap at any word boundary", "m10 ... rotating sweep mask". m4 row says ".book:before keeps the original .18/overlay" - spike.css later rule ".book:before{opacity:.19;mix-blend-mode:soft-light}" overrides it. M2 row claims "no mid-word break" beside its own hyphen-break frames. |

## Other checks
- node --check spike.js: OK.
- Console errors: 0 in every pass run (film desk/phone/fb/red/redphone + probes run1, run6-run9, run11). Method: CDP Runtime.exceptionThrown, Runtime.consoleAPICalled error/warning/assert, Log.entryAdded error/warning.
- Fonts loaded, 0 broken images, no horizontal overflow (film JSON, all 50 frames).
- Reduced motion (red-000, redphone-000): static final composition, rings full, sheet full, no leak.
- Fallback: NOT verified this round. The film script's fallback pass only stubs CSS.supports; Chrome still runs the native @supports block, so builder's fallback-* frames are native frames. My two forcing methods in Chrome gave correct computed --delay/animation-delay but stale paint/computed values (fb-forced-080, fb-forced2-100): a Chrome paused-animation artefact, not attributable to the spike. spike.js unchanged this round; round 3 passed it.
- No Clepsydra, emoji, pills or side-tabs seen.

## Fix hints
- M (item 2): drop the soft hyphens; give the title the width it needs - e.g. .book img width 18-20% or ring absolutely positioned as on phone at every size; clamp title so NEUROPSYCHIATRY fits one line (~130px at 12.8px Cinzel), else ring above text on narrow cards.
- M (item 3): closed state must be fully shut - start the wipe at inset(-30px 100% -110px 100%) or clip-path:inset(... calc(100% + 60px) ...) on the right, or animate an unclipped shadow sibling separately.
- m (ring): .ring-sweep{animation-timing-function:linear} (ease can be baked into keyframe offsets), or a single-interval technique.
- m (shaft): tint toward amber (e.g. rgba(255,190,110,.x)), narrow the band with a tighter mask so most of the frame stays untouched.
- m (dip): start .ent earlier (~64%) or ease-out entrances so their first third carries motion; or delay line-b end.
- m (NOTES): delete or rewrite the stale upper tables; correct the .book:before and "no mid-word" claims.
