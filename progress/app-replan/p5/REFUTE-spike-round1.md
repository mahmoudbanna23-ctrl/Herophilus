# REFUTE — P5 scroll spike (2026-09-26)

Verdict: **FAIL** — 0 blocker, 6 major, 7 minor.
Under review: progress/app-replan/p5/scroll-spike/ (index.html, spike.css, spike.js, NOTES.md) vs scroll-spike-brief.md.
All CSS is one minified line, so every CSS ref is spike.css:2 plus the selector.

## Passes (checked, not taken on trust)
- 4 ranges exist and move: computed --p tracks scroll 0..1; plate 1.0 to 1.25 by p=.20; clip-path wipes .45-.70; cards stagger .70-.965 (film-dense.json).
- Native path: scroll(root) drives registered --p. Fallback simulated (CSS.supports stubbed false + .scene animation:none): rAF path writes --p, frames match native (shots/fallback-*.png).
- Reduced motion: --p=1 static final, no dust, no drift (shots/reduced-*.png). Dust = 36 motes, canvas.
- file:// safe: no fetch/XHR/module/CDN; 0 broken images in every pass; Cinzel loaded via app/data/fonts.js. No Clepsydra anywhere. No emoji, no pills, no side-tabs. Radius: 12px + 50% ring only.
- No horizontal overflow at 1280 or 390.

## Defects
1. MAJOR — spike.css:2 `.copy span` — heading does NOT reveal line by line. Both lines share one rule; the only stagger is `span+span{transition-delay:.1s}`, a 100 ms TIME lag (0s-duration transition), not scroll-linked. The span that is translated is itself the overflow:hidden box, so there is no mask. Measured: at p=.576 line1 op .45, line2 op .315 = line1 one sample earlier. Fix: wrap each line in an overflow-hidden outer, translate an inner, give each line its own scroll range. NOTES.md:5 claims wrappers that do not exist. Shot: desk-065.
2. MAJOR — spike.css:2 `.copy` vs `.daily` — heading "DAY COUNT." collides with the sheet top edge (period sits under the paper) from 65% to 100% and in reduced motion. Shots: desk-065, desk-080, desk-100, reduced-000.
3. MAJOR — spike.css:2 `.book i` — rings render at unequal sizes, 38/18/16/38 px (ENT, Oph, Neuro, Peds): flex-shrink squeezes the ring when the subject name is long. Fix `flex:none`. Shot: desk-100, phone-090.
4. MAJOR — spike.css:2 `.shaft` (+ `:after` grain) — the translated shaft rectangle leaves a hard vertical seam where its grain/tint ends: left edge x~45 at 35%, right x~1190/1120/1030 at 65/80/100%. Shaft never fades after 45%, so the seam wanders to the end. Fix: oversize the layer (inset:-50%) or mask its edges, fade out by .45. Shots: desk-035, desk-065, desk-100, fallback-085.
5. MAJOR — spike.css:2 `.book`, `.book:after` — brief asks gradient-lit edges with grain overlay; cards have a flat 1px rgba border and one sweeping glare, no grain. Reads as stock dark glass dashboard cards. Shot: desk-100.
6. MAJOR — spike.css:2 `.candle-pool`, `.book i` — brief: animate transform/opacity/clip-path/filter only. Pool alpha and ring conic-gradient are background values driven by --p, so they repaint every scroll frame; the whole scene hangs off one animated custom property (main-thread style recalc for every child). Fix: pool via opacity of a fixed gradient; ring via stroke-dashoffset on SVG or a rotated mask.
7. MINOR — spike.css:2 `.letters/.tablet/.pile` — parallax sprites float off the desk: slate hangs on the wall, pile sits below the desk edge on the floor; no shadow/grade match. Breaks the teardown's "consistent asset perspective/lighting". Shots: desk-035, desk-050.
8. MINOR — spike.css:2 `.candle-pool` — pool is not transformed with the plate, so after push-in it glows on the wall above the lamp, not on the flame. Shot: desk-020.
9. MINOR — spike.css:2 `.daily/.paper` — sheet is a flat sticky-note card; mid-wipe it is a hard cream bar with no roll edge. Shots: desk-050, phone-050.
10. MINOR — spike.css:2 `.copy span` overflow:hidden clips the 18px text-shadow into a visible box behind "COUNT.". Shot: desk-065.
11. MINOR — spike.css:2 `.shaft` `filter:url('#none')` references a nonexistent filter (dead code).
12. MINOR — index.html:22,24-27 copy: "Make the day count.", "Cases in motion", "Patterns & pathways" are slogan/filler taglines (chirpy-copy rule). Phone: heading collides with slate sprite (phone-090).
13. MINOR — spike.css:2 reduced-motion keeps .journey 500vh: 400vh of scroll where nothing changes. Also Peds ring ends at 40%, Neuro 57% (by design of --delay, but rings never "fill").

## Console errors
0 across 5 runs (desk 8 frames, phone 2, reduced 3, fallback 3, dense 60). Measured over CDP: Runtime.exceptionThrown + Runtime.consoleAPICalled (error/warning/assert) + Log.entryAdded (error/warning). Harness: D:/tmp-spike-ref/film.mjs; raw data film-*.json.

## Could not verify
- Real frame-rate/jank: screenshots after settle, no performance trace.
- True non-supporting engine (Firefox/Safari): fallback only simulated in Chrome.
- Banding at high DPR: shots at DPR 1; none seen at that scale.
- Dust drift over time (static frames; motes do change position between frames).

Evidence: D:/tmp-spike-ref/shots/ (desk-000..100, phone-050/090, reduced-000/050/100, fallback-010/050/085, dense-*), D:/tmp-spike-ref/spike-scroll.mp4 (60 frames, 5 s).
