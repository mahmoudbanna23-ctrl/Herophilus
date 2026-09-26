# REFUTE round 2 - P5 scroll spike (Opus, 2026-09-26)

Verdict: FAIL - 0 blocker, 2 major, 8 minor.
Under review: progress/app-replan/p5/scroll-spike/ vs scroll-spike-brief.md + scroll-spike-fix1-brief.md.
spike.css is 3 minified lines: :1 base + keyframes, :2 native @supports block, :3 fallback + media queries.
Shots: D:/tmp-spike-ref2/shots/ (z-*.png = crops/tiles). Probe data: film-desk.json, film-dense.json.

## Round-1 defects
1 line reveal - CLOSED. .line-a 52-62%, .line-b 59-69% in .line-mask (css:2). desk-060: line 1 done, line 2 mid-rise.
2 heading collision - CLOSED. Heading y52-190 vs paper top 225 (desk); clear on phone and both reduced passes.
3 unequal rings - CLOSED (38x38 all four) but REGRESSED into M1.
4 shaft seam - CLOSED on native (no seam desk-035, opacity 0 by p=.50). Fallback: see M2.
5 flat cards - CLOSED. Gold gradient border + grain visible (z-shadow.png right).
6 paint-driven props - PARTIAL. Pool = opacity/transform, ring = clip-path. --p still animated natively (m6).
7 sprites off desk - MOSTLY CLOSED (desk-035/050). Residue m8; reduced m5.
8 pool detached - NOT CLOSED (m3). NOTES row 8 false.
9 flat sheet - PARTIAL. Roll edge added; new clipped-shadow box (m4).
10 shadow box - CLOSED. 11 dead filter - CLOSED. 12 copy/phone - CLOSED. 13 reduced/rings - CLOSED.

## Fix brief must-land
1 CLOSED. 2 CLOSED. 3 CLOSED. 4 CLOSED native. 5 CLOSED. 6 PARTIAL (m6). 7 NOT all (8 open). 8 PARTIAL (m7).

## Defects
M1 MAJOR - css:1 .book div{min-width:0} + .ring{flex:none}; no wrap/truncate on .book b. "OPHTHALMOLOGY" and
   "NEUROPSYCHIATRY" run under the ring at 1280 and 390 and in reduced. Probe flags title range right > ring left
   on cards 2+3 every pass. Shots desk-100, z-phone.png, reduced-000, z-shadow.png. Fix: let the title wrap or
   shrink (smaller clamp / overflow-wrap), or stack ring above text on narrow cards.
M2 MAJOR - css:3 fallback block. Tested by flipping the two @supports in an injected copy of spike.css + CSS.supports stub.
   (a) no rules for .letters/.tablet/.pile, so .layer{opacity:0} (css:1) holds: range 20-45% parallax never appears
   in non-supporting browsers (fallback-* opacity 0 at every frame). (b) plate translate calc(min(p,.2)*-9%) peaks at
   -1.8%, not -9% (matrix -28.8 vs native -144). (c) heading rise travels ~10% of the line, not 105%. (d) shaft is a static
   full-opacity grain wash, no sweep (fallback-035). NOTES "equivalent fallback ranges" is false. Fix: add sprite
   rules, scale ranges by 1/width, mirror the native keyframes.
m3 minor - css:1 .candle-pool radial at 74% 35%, fixed; plate moves under it. Flame ~(1020,370) at 0%, ~(965,370)
   after push; pool centre ~(947,280): glow on the wall ~90px above the flame (desk-020, desk-100). Fix: put pool in
   a wrapper that shares .plate's transform, centre it on the flame.
m4 minor - css:1 .daily clip-path clips .paper box-shadow (0 30px 80px): hard vertical dark edge at the wipe front,
   running above and below the paper, 45-70% (desk-050, desk-060, z-shadow.png left). Fix: clip .paper only, or
   move the shadow to an unclipped sibling.
m5 minor - css:3 reduced block sets .layer{opacity:1} only: sprites sit at their start offsets (+128/+230/+358px),
   tablet and pile cut by the right edge, envelope peeks under the paper (reduced-000). NOTES "fixes the final
   composition" is false. Fix: give .letters/.tablet/.pile their final transforms in reduced.
m6 minor - css:1 .scene{animation:progress} + @keyframes progress animates --p (inherits:true) on the native path
   where nothing reads it: the one animated property outside transform/opacity/clip-path/filter, and a per-frame
   style recalc of the whole scene. Fix: move .scene animation into the @supports not block (JS drives it there anyway).
m7 minor - all ranges use hard ease-out cubic-bezier(.18,.72,.2,1): plate is 93% done at p=.10 (range 0-.20),
   sprites 91% done at 44% of their range. Near-static bands ~10-20% and ~36-45% (z-dense-sheet.png rows 2 and 4-5).
   Reads snappy then dead, not slow/inertial; "every inch" not met there. Fix: softer ease-in-out, longer overlaps.
m8 minor - css:1 .pile: card pile lies on the reed pen and overhangs the desk front edge (~700 vs edge ~665;
   desk-035, desk-050).
m9 minor - index.html: heading "Today's study list" + sheet eyebrow "The ward round" + h1 "Today" say the same thing
   three times; phone card titles Cinzel ~10px (clamp .65rem) barely legible (z-phone.png).
m10 minor - css:1 .ring-fill clip-path inset(0 100% 0 0): a left-to-right wipe of a conic ring, reads as a wipe not
   a fill (desk-080 half-rings). Allowed by brief; a rotating-mask sweep would read right.

## Passes (checked, not trusted)
- node --check spike.js OK. 0 broken images, Cinzel loaded, no horizontal overflow, every pass.
- No Clepsydra: grep "clep" in all 4 files = 0; image srcs are plate, letters-many, tablet-half, pile, gilt-x4.
- No emoji, pills, side-tabs, chirpy slogans. No transition-delay anywhere (grep transition = 0).
- Keyframe props: plate/pool/shaft/far/mid/near/wipe/rise/card/edge/fill use transform, opacity, clip-path, filter only;
  progress uses --p (m6). rAF fallback writes only --p (spike.js:8), as the brief allows.
- Every frame viewed; nothing blank or broken; no shaft seam; no banding seen at DPR 1.

## Console errors
0 across 7 passes (desk 10, phone 3, reduced 1, reducedphone 1, fallback 5, dense 60, densephone 60).
Method: CDP Runtime.exceptionThrown + Runtime.consoleAPICalled (error/warning/assert) + Log.entryAdded (error/warning).
Harness D:/tmp-spike-ref2/film.mjs (round-1 script copy: scroll-spike-film.orig.mjs).

## Could not verify
- Frame rate/jank (settled screenshots, no perf trace). Real Firefox/Safari (fallback simulated in Chrome).
- Banding at high DPR (DPR 1 only). Dust drift over time (static frames).

Video: D:/tmp-spike-ref2/spike-scroll.mp4 (1280x800, 60 f), D:/tmp-spike-ref2/spike-scroll-phone.mp4 (390x844, 60 f).
