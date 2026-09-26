# REFUTE: desk3d step 1 (2026-09-26)

**Verdict: FAIL.** 7 majors. The builder's film drove every action with `el.focus()` / `el.click()`, which skips hit-testing and mouse focus order, so it never saw majors 1, 2, 3 or 4.

Evidence is in `D:/tmp-desk3d-ref1/`. Harness: `ref.mjs`, `sizes.mjs`, `kb.mjs`, `motion.mjs`, `rm-fps.mjs`. All input was real CDP mouse and key events. Film: `ref-wide-motion.mp4`, built from ~10 fps screenshots in `m-wide/`, per-frame transforms in `m-wide/rec.json`.

## Confirmed claims
- 0 console errors and 0 non-`file:` requests across 9 sessions. Classic scripts only. `vendor/three.min.js` is byte-identical to the pilot copy. `node --check` passes.
- Bytes: html+js 20,150; three 607,784.
- Colours match `app/css/tokens.css:80-83`.
- The fps counter runs inside `frame()` (`app.js:418`). An independent rAF counter agrees with it: 1280 1x 105.9/105.6, 6x 78.7/77.7; 390 1x 120.3/120.0, 6x 93.1/102.2. The counter is a rolling window of 240 frames, not a 3 s mean.
- Real heap from CDP `Runtime.getHeapUsage` is 5.4–6.9 MB.
- Esc and the Back button (Tab + Enter) close the book. The book returns to its exact place: `matrixWorld` and the camera are identical before and after, at all 5 sizes.
- Reduced motion: no hover lift, and open/close complete within 60 ms (`rm-1-open.png`).
- Focus ring shows on the page targets (`k-2-focus-lectures.png`).

## Majors
1. **The three page targets cannot be clicked with a mouse.** A stale, hidden book `<button>` sits on top of them: `elementFromPoint` at the centre of Lectures, Questions and Mocks returns `.bk[data-id=neuro]`. Real clicks logged nothing (`sizes.json` logs empty). `s-1280x800-3-mocks-ent.png` shows the paper was never toggled.
   - Cause: `app.js:395` sets `style.display='block'`, which overrides `[hidden]`. The `.bk` buttons are also appended after the page targets, so they stack above them.
   - Fix: clear the inline display when an element is hidden. Give the open book's own button `pointer-events:none`, or append the page targets last.
2. **Ghost buttons are in the Tab order and exposed to screen readers.** While a book is open, the 3 hidden book buttons get focus. After closing, the 3 hidden page targets get focus. Proof: `kb.mjs` output (`openTabs` / `closedTabs`). Same cause and fix as major 1.
3. **Clicking outside does not close the book.** `#ui` covers the whole screen (`index.html:11`) and swallows the click, so the canvas listener at `app.js:372` never fires (target=`ui`, phase stays `open`; `k-4-after-click-outside.png`). Fix: make `#ui` `pointer-events:none` and the `.hit` buttons `pointer-events:auto`, or listen on `#ui`.
4. **Every mouse-click open pops.** Mousedown focuses the button, and the focus handler (`app.js:258`) starts a 350 ms hover tween. `tween()` (`app.js:33`) never cancels an older tween on the same property, and the older one is applied last, so it wins. When it expires, the book jumps in one frame: posY 0.045→0.481, posZ 0.08→1.01. Mid-jump the book is cropped off the left edge.
   - Proof: `m-wide/rec.json` at t=3460; `pop-f28-f29.png`.
   - Fix: in `tween()`, splice out existing tweens with the same target and property.
5. **The cover swings through the page block.** At `app.js:307` it rotates +2.3 rad about the spine into −z, which passes it through the pages (block x ±0.29, z ±0.058). On screen the cover simply vanishes between frames (`swing-f37-f38.png` → `swing-f39-f40.png`). That breaks the rule that every move has a physical cause. The result is also not a spread: Lectures and Questions are two halves of one closed page face.
   - Fix: open the cover toward the viewer (about −π, laid flat to the left) and reframe the camera.
6. **Mocks paper does not meet the brief.**
   - Tucked, it sits fully inside the page block (`app.js:210`), so the Mocks target is an invisible 22 px strip.
   - Pulled out, it is a horizontal slab (`app.js:199`) floating detached above the book, seen edge-on. Its label faces up, away from the camera, and there is no seal (`k-3-focus-mocks-out.png`).
   - Fix: stand the paper upright, poking out of the fore-edge with a visible seal, and slide it along +y.
7. **Books are half-buried in the desk, and narrow text is illegible.** Book roots sit at y=0 with centred geometry (`app.js:266`), so each book's bottom is at −0.46 while the desk slab ends at −0.25 (`app.js:98`). The books show below the desk as coloured strips (`z-390-idle-crop.png`, `z-320-idle-crop.png`).
   - At 390 and 320, Ophthalmology and Neuropsychiatry titles and the Lectures/Questions labels are illegible (`s-390x844-2-open-peds.png`, `s-320x640-2-open-ent.png`). The builder's "titles legible at 390" claim is refuted.
   - Fix: raise the root to y=H/2. Give portrait its own camera or layout.

## Minors
- Book hit boxes use a projected AABB, so they are oversized: ENT spans x −109..277 at 1280, and its focus ring is clipped off the left edge (`z-1024idle-focusbook.png`, right half). Project the cover corners instead.
- Focus is dropped to `<body>` after Back. Return it to the book's button.
- The "camera eases closer" move actually pulls z back (3.745→4.437). The open book is small and off-centre at 390 (`s-390x844-2-open-peds.png`).
- The progress arcs are large C shapes that cut into the tops of the covers. Thin light line artefacts appear on the desk between books (`s-1280x800-1-idle.png`).
- The builder's claim that the Pediatrics arc clips at 1280 idle is not reproduced (`s-1280x800-1-idle.png`).
- NOTES heap row is 10,000,000; replace with the CDP values above.
