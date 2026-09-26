# Scroll spike notes

Architecture: native browsers drive `.plate`, `.candle-pool`, `.shaft`, the three sprite layers,
`.daily-mask`, both `.line-content`s, `.book`, `.book:after` and `.ring-sweep` off
`animation-timeline:scroll(root)`, each selector with its own `--range` token. Fallback (`spike.js`,
unchanged since round 3) reads the same `--range` tokens and pauses the same keyframes at the matching
local progress via a negative `animation-delay`. Reduced motion shows the final state, no dust, no loops.

Titles: plain text, no `&shy;`, `white-space:nowrap`, fixed 16px desktop / 14px phone. The grid gives
way, not the word: 4 columns from 1080px, 2x2 from 701 to 1079px, 1 column at 700px and below.

## Fix round 6 (2026-09-26, Claude lean-drafter, ROUTE-OK per brief: Codex cannot render)

Owner rejected round-6 film: "low quality items fading out of nowhere". Fix targets the three desk
props only (`.letters/.tablet/.pile`). Films: `D:/tmp-spike-fix6/shots/` (`scroll-spike-film-fix6.mjs`
= copy of `p5/scroll-spike-film.mjs`, OUT switched, extra computed-style reads for the three prop
layers). Probe: `regress.mjs` (own script, stall pixel-diff via a from-scratch PNG decoder + title
width sweep - the round-5/6 probes `dip.mjs`/`sweep.mjs`/etc. lived in an earlier scratchpad and are
gone, not reused).

| Item | Result | Change | Evidence |
|---|---|---|---|
| 1 raster quality | LANDED | `p5/props-v2/{letters,tablet,pile}.png` (1536x1024, real alpha, confirmed clean edges by eye - no grey halo, no cutout script needed) trimmed to the alpha bbox with a PowerShell/System.Drawing script (no grey-key needed) and scaled to 600px wide (2x the 300px layer clamp): letters bbox 89,42 1370x938 -> 600x411; tablet bbox 72,69 1416x896 -> 600x380; pile bbox 43,82 1453x851 -> 600x351. Saved to `scroll-spike/props/*.png` (476K/443K/403K), `index.html` `.layer` `src` swapped to them. | Read all three trimmed PNGs directly: clean silhouette, no residual grey pixels at the edge, shadow (`.layer` `drop-shadow` filter, unchanged) still renders under each. |
| 2 entrances | LANDED | `@keyframes far/mid/near` rewritten: explicit `0%{opacity:1;...}` (was `20%{opacity:1}`, which faded in from the base `opacity:0` over the first 20% of the local range while barely moving) - now opacity is 1 for the animation's entire active life, no fade at any point. Each keyframe now starts from **off-frame**: letters `translate(-38vw,1vh)` (enters from the left, matches its left-anchored position), tablet `translate(45vw,-2.4vh)`, pile `translate(48vw,2.4vh)` (both enter from the right, matching their right-anchored position and the brief's "tablet and pile from the right"). A mid-range `82%` keyframe overshoots slightly past the final rest transform before the `100%` keyframe settles back (e.g. letters: overshoot `-3vw,.3vh` (was -7vw, which undershot; fixed after refuter round 7 m1) -> rest `-5vw,1vh`) for the "slight settle" the brief asked for. `--range`s unchanged (letters 20-54%, tablet 22-55%, pile 24-58%). Reduced-motion block already showed props at rest with no motion (unchanged, correct). | Own film run, 1280x800, frames 0/15/18/20/22/25/28/30/32/34/36/38/40/45/50/55/58/60/75/100%: `letOp`/`tabOp`/`pilOp` computed-style opacity = `"1"` at **every** frame, never <1 - confirmed no semi-transparent frame exists anywhere. Screenshots `desk-030.png` (letters just entering frame left edge, opaque, sharp), `desk-040.png` (all three visible, sharp, shadowed, tablet/pile still sliding in from the right), `desk-045.png`, `desk-060.png` (all three at rest, sharp, natural desk placement) all read clean - no ghosting, no grey fringe. Phone (390x844): tablet/pile correctly `display:none` (unchanged mobile rule); letters entrance frames 0/15/20/25/30/35/40/50/60/100% all opacity `"1"`. Reduced-motion (`red`/`redphone`): all three at opacity 1, final-rest transform, matches non-reduced end state. 0 broken images (`imgs:0`) and 0 console errors in all 4 passes. |
| 3 other entrances | CHECKED, none needed a fix | `.book` (subjects cards): base `opacity:0;transform:translateY(120px) scale(.82)` -> `card` keyframe end `opacity:1;transform:none;filter:blur(0)` - real 120px vertical slide + scale, not a pure fade. `.line-content` (the "Study / plan" copy): base `opacity:0;transform:translateY(105%)` -> `rise` keyframe `opacity:1;transform:translateY(0)` - a real 105%-of-own-height slide. `.daily-mask` (the sheet): driven entirely by `clip-path` (`wipe` keyframe, a vertical unroll), no opacity animation at all. All three already carry real movement as their entrance mechanism; opacity change on `.book`/`.line-content` rides along with the slide rather than carrying it alone. Nothing to change. | Read the base rule + keyframe text for `.book`, `.line-content`, `.daily-mask` directly in `spike.css`; confirmed each keyframe's `to` state changes `transform` (or `clip-path`) alongside/opacity, not opacity in isolation. |
| Do-not-regress | Title sweep PASS (fresh run); stall shape present but not numerically comparable; ring/wipe carried by argument | See below. | See below. |

**Do-not-regress, re-run:**
- **Title width sweep**: 320-1600px step 20 (65 widths) x 800px height, final scroll state, checking
  text clipped inside its card, text under the ring, or card overflowing the viewport: **0 failures**
  (`D:/tmp-spike-fix6/sweep-fails.json` = `[]`).
- **Console errors**: 0 in every film pass (desk 20 frames, phone 10, red 1, redphone 1) and the
  regression probe (title sweep + stall run) - `D:/tmp-spike-fix6/regress-errs.json` = `[]`.
- **Ranges for everything NOT touched this round are byte-identical to round 6's PASS values** (grepped
  directly from the live file): `.plate`/`.candle-pool` `0-20%`, `.shaft` `20-45%`, `.daily-mask`
  (wipe) `46-74%`, `.line-a` `52-66%`, `.line-b` `61-77%`, `.ent`/`.ent .ring-sweep` `62-84%`/`64-85%`,
  `.oph` `68-87%`, `.neuro` `78-94%`, `.peds` `82-97%`. This round's edit touched only the
  `far`/`mid`/`near` keyframes and the three `.layer` image `src`s - nothing that feeds the plate,
  pool, shaft, wipe, book-card or ring-sweep animations.
- **Stall 60-76%**: re-ran a pixel-diff (own from-scratch PNG decoder over CDP screenshots, dust
  hidden and confirmed via `getComputedStyle` before capture, 0.5% steps 44-86%, mean abs RGB delta
  between consecutive frames) since the round-5/6 `dip.mjs` script no longer exists (lived in an
  earlier, since-cleared scratchpad). **Numbers do not reconcile with round 6's published table**
  (my scale runs 20-40x larger throughout, e.g. my 85%-step value is 9.59 vs round 6's 0.544; my
  60-76% min is 1.99 = 20.7% of my own 85% value, vs round 6's 60.7%) - this is a normalization/
  downsampling difference in the probe itself, not a re-measurement of the same metric, and I could
  not recover round 6's exact script to match it. What I *can* say from my own run: the window is not
  frozen (min 1.99, max 8.11 across 60-76%, real frame-to-frame motion throughout) and the props
  contribute zero pixels to this window regardless of old or new artwork, since all three finish
  their motion by 58% (before 60%) and are static after. Given the `.plate`/`.candle-pool`/`.shaft`/
  `.daily-mask` CSS driving this window is untouched (previous bullet), I have high confidence there
  is no regression, but the exact round-6 number is **not independently reproduced this round** -
  flagged for the round-7 refuter to re-derive with its own probe.
- **Ring evenness (2.8-5.4 deg/0.25%) and sheet wipe (46-74%)**: not re-swept with a fresh angle/
  clip-path probe this round (same "probe lost" reason as the stall dip) - relying on the byte-identical
  `--range` values above plus a direct read of `desk-075.png`/`desk-100.png` (ENT ring ~3/4 then full,
  Oph partially filled, both legible) as a sanity check, not a full sweep. Flagged for round 7.

## Fix round 5 (2026-09-26, Opus builder, ROUTE-OK per fix4 escalation)

Probes: copies of the round-5 refuter harness in `D:/tmp-spike-fix5/` (`probe.mjs`, `dip.mjs`,
`titles.mjs`, `ring.mjs`, `leak.mjs`, `shaft.mjs`, `wipefinal.mjs`, `img.mjs`, paths switched), plus two
new ones: `sweep.mjs` (width sweep) and `wipe2.mjs` (vertical wipe progress). Films: `film.mjs` = copy of
`p5/scroll-spike-film.mjs` with OUT switched to `D:/tmp-spike-fix5/shots/`. Every number below is from
the final CSS unless the row says otherwise.

| Item | Result | Change | Evidence (final run) |
|---|---|---|---|
| 1 MAJOR titles clip 701-1024 | LANDED | Added `@media(min-width:701px) and (max-width:1079px){.subjects{2 columns, 2 rows}}`. 4 columns now start at 1080px, where a card is ~231px and "Neuropsychiatry" (range width 149px at 16px) still has 8px spare. Font unchanged. | `sweep.mjs`: widths 320-1600 step 10 (129 widths), at viewport height 900 AND 600: 0 failures on scrollWidth > clientWidth, text past card edge, text under ring, or vertical overflow of the title block. Smallest margin (clientWidth minus text range width) 8px, Neuropsychiatry at 1080. Column switch points: 1 col 320-700, 2 col 710-1070, 4 col 1080-1600. `titles.mjs` at 1024x768 / 900x800 / 820x1180 / 768x1024 / 701x900: every title scrollWidth = clientWidth, 16px, no !OVF/!CLIP/!RING. Frames read: `w768-100.png`, `w820-100.png`, `w1024-100.png` - all four names whole. |
| 2 stall 60-76% | LANDED | Re-timed only, no new effect: wipe `45-70%` -> `46-74%` with linear timing; `line-b` `59-73%` -> `61-77%`; ENT card `64-85%` -> `62-84%` (ENT ring left at `64-85%`); Oph card and ring `74-89%` -> `68-87%`, Oph card given ENT's ease-out curve. | `dip.mjs` (round-5 method, 1280x800, dust hidden, 0.5% steps 44-86%): 85% level = 0.544, 40% bar = 0.218. 60-76% min = 0.330 at 63.0% (61% of the 85% level; also above round 5's absolute bar 0.28). Full table below. The 85% level itself fell from round 5's 0.70 because Oph now moves earlier; the curve across 61-86% is flatter (0.33-0.58). |
| 3 sheet wipe | LANDED | Unrolls top -> down from the roll bar: rest `inset(-30px -60px calc(100% + 30px) -60px)` (zero height, bottom edge on top edge), open `inset(-30px -60px -110px -60px)` (unchanged). Linear timing over 46-74%. | `wipe2.mjs` 1280x800: open height 0 at 44-46%, 9px at 46.5%, then +8 to +9px every 0.5% to 497px (full) at 74% - no dead zone, no pop. 390x844: +6 to +7px per step. `leak.mjs`: 0 px changed with `.daily` hidden vs shown at 0, 30, 44, 46% (at 50/53% the top strip is open, expected). `wipefinal.mjs` shadow edge step at clip edges: left 2.9 -> 7.8, right 6.8 -> 0.0, bottom 0.1 -> 0.0 (sum RGB), i.e. <= 7 as in rounds 4-5. Frames read: `desk-055.png` (bar + "Today" strip, straight lower cut, no shadow slab), `desk-065.png`, `phone-055.png`. |
| 4 phone spines | LANDED | Phone `.subjects` height `210px` -> `clamp(210px,40vh,340px)`, card vertical padding 8 -> 4px. To keep the paper clear of the taller stack: phone `.daily` inset `26% 12% 30%` -> `17% 6% 43%`, `.paper` width `min(340px,82vw)`. | `img.mjs` 390x844: img box 61x70 for all four (art 72x212 etc., contain -> spine ~16-24 x 70px). `titles.mjs`: 390x844 subTop 481 / paperBot 435, 430x932 564 / 469, 360x740 422 / 407 - no overlap. Frame read: `phone-100.png`. |
| 5 shaft tint | LANDED (still a faint glow, not a crisp beam) | Beam colours `rgba(255,200,120,.32)` / `rgba(255,220,150,.16)` -> `rgba(255,128,30,.42)` / `rgba(255,158,58,.2)`. Geometry, mask, opacity keyframes unchanged. | `shaft.mjs` added light at 26%: +15.0 R / +10.8 G / +4.2 B (round 5: +11.5 / +12.3 / +9.2), covers 12.4% of frame; 30%: +13.9 / +9.9 / +3.8; gone at 44%. Frame read: `desk-030.png` - faint warm glow upper centre, no veil. |
| 6 NOTES | This file, rewritten | - | Numbers copied from the final runs in `D:/tmp-spike-fix5/` (`sweep-900.txt`, `sweep-600.txt`, `dip-final.txt`; the rest from terminal output). |

Not regressed: `ring.mjs` ENT sweep every 0.25% over 64-85%: min step 2.8 deg, max 5.4 deg (same as
round 5). Frame read `desk-080.png`: ENT ring ~3/4 filled, Oph ring partly filled, both legible at
20px; phone ring 26px.

Console errors: 0 in every film pass (desk 15 frames, w1024 7, w820 7, w768 7, phone 8, red 1,
redphone 1) and every probe run (CDP `Runtime.exceptionThrown`, `consoleAPICalled` error/warning/assert,
`Log.entryAdded`). Film status lines: no horizontal overflow, 0 broken images, Cinzel loaded, all frames.
`node --check spike.js` OK (file unchanged). Reduced motion read: `redphone-000.png` shows the final
state (sheet open, rings full, cards visible).

### Stall table, final run (`dip.mjs`, mean abs RGB delta between consecutive 0.5% frames, dust hidden)
```
0.44 0.000  0.445 0.287  0.45 0.273  0.455 0.258  0.46 0.243  0.465 0.236  0.47 0.249  0.475 0.453  0.48 0.622
0.485 0.516  0.49 0.582  0.495 0.671  0.5 0.671  0.505 0.644  0.51 0.641  0.515 0.628  0.52 0.595  0.525 0.443
0.53 0.394  0.535 0.418  0.54 0.420  0.545 0.429  0.55 0.495  0.555 0.494  0.56 0.463  0.565 0.469  0.57 0.493
0.575 0.531  0.58 0.544  0.585 0.574  0.59 0.620  0.595 0.615  0.6 0.536  0.605 0.450  0.61 0.347  0.615 0.331
0.62 0.337  0.625 0.334  0.63 0.330  0.635 0.339  0.64 0.342  0.645 0.351  0.65 0.359  0.655 0.367  0.66 0.373
0.665 0.423  0.67 0.580  0.675 0.540  0.68 0.490  0.685 0.406  0.69 0.406  0.695 0.412  0.7 0.416  0.705 0.427
0.71 0.430  0.715 0.436  0.72 0.430  0.725 0.426  0.73 0.441  0.735 0.438  0.74 0.467  0.745 0.467  0.75 0.471
0.755 0.461  0.76 0.471  0.765 0.458  0.77 0.464  0.775 0.470  0.78 0.454  0.785 0.458  0.79 0.448  0.795 0.447
0.8 0.434  0.805 0.430  0.81 0.422  0.815 0.431  0.82 0.420  0.825 0.437  0.83 0.444  0.835 0.460  0.84 0.467
0.845 0.479  0.85 0.544  0.855 0.555  0.86 0.573
```
The first value (0.44 = 0.000) has no previous frame. The round-5 second trough at 50-54% is gone
(now 0.394-0.671).

## Open gaps (say so plainly)
- 44.5-47% sits at 0.236-0.287, just before the wipe starts - outside the 60-76% brief window, not
  worked on.
- The wipe's lower edge is an axis-aligned horizontal cut across a paper rotated -2deg, so mid-unroll
  the cut is ~2deg off the paper's own lines (visible in `desk-055.png`). No second roll bar travels
  with the edge.
- 320x640: paper bottom 389 vs cards top 365 - 24px overlap, out of the named sizes (was 70px in
  round 5).
- Fallback path (`CSS.supports` stubbed): not re-verified; `spike.js` unchanged. UNVERIFIED in Chrome.
- Real Firefox/Safari, DPR>1, frame rate/jank: not checked.
