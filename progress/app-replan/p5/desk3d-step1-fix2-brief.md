# P5 — 3D desk step 1, fix round 2 (2026-09-26)

Seat: Claude `lean-drafter` run on OPUS. Prompt opens `ROUTE-OK: Codex cannot render; Sonnet build
+ Sonnet fix round 1 both failed refutation; Opus builder per escalation rule`.

WRITE GRANT: edit/create files ONLY under `progress/app-replan/p5/desk3d/`. Films/frames:
`D:/tmp-desk3d-fix2/` (never a path containing `--`).

## Inputs
- Spec `p5/desk3d-step1-brief.md` + fix-1 brief `p5/desk3d-step1-fix1-brief.md` still bind.
- Refuter round 2: `p5/REFUTE-desk3d-step1-round2.md` — FAIL. Open every file:line; look at its
  frames in `D:/tmp-desk3d-ref2/`. Round 1: `p5/REFUTE-desk3d-step1.md`.

## Decisions already made (orchestrator) — do not re-open
1. **All readable words are live HTML text, positioned each frame by projecting a 3D anchor point
   to the screen** (book titles, Lectures, Questions, Mocks). Fixed CSS size: ≥16 px desktop,
   ≥14 px phone. No text rendered into canvas textures. They double as the accessible buttons
   (hide them when their anchor faces away or is occluded). This settles legibility for good.
2. **A real spread**: when open, the LEFT page is the inside of the cover (paper endpaper, not bare
   leather) and carries **Lectures**; the RIGHT page is the top of the page block and carries
   **Questions**. Two separate page surfaces, a visible gutter between them.
3. **Mocks**: the sheet is tucked INSIDE the page block; at rest in the open book only a corner
   and the wax seal peek beyond the fore-edge. Hover lifts it slightly; click slides it out, face to
   camera. The seal must not show through a closed cover (hide/parent it so it only exists when
   the book is open).
4. **One camera-fit function** computes the camera pose from the bounding box of what must be seen
   and the viewport aspect. Idle = all four books; open = the open book fills ~60% of the shorter
   screen side (camera moves TOWARD the book, never away). Close restores by calling the same
   function for idle — never a hard-coded pose. Portrait: books 2×2, black/empty band ≤ 15% of
   frame height at 390x844 and 320x640.
5. **Picking = raycast against the real book meshes** (no oversized hit boxes); the clicked book
   is the book that opens, at every size. The opening book must not intersect any other book at
   any frame (move neighbours aside, or lift the book clear first).
6. **Settle**: every rest pose ends with a small overshoot and return (≤ 3% of travel, ~150 ms).

## Verify — REAL input events only (CDP `Input.dispatch*`, never `.click()`/`.focus()`)
- Per size 1280x800, 1024x768, 820x1180, 390x844, 320x640: click each of the 4 books by its cover
  centre -> assert the right one opens; open-state and idle stills; nothing clipped; label sizes
  measured in CSS px; no book intersection (bounding-box check across the open animation frames).
- Films at 1280x800, 390x844, 320x640 into `D:/tmp-desk3d-fix2/`. Read your stills mid-open and open.
- Do not regress: 0 console errors, 0 network, exact return, Esc/Back/click-outside, reduced motion,
  focus ring, fps counter in loop; fps 1x/6x at 1280.
- `desk3d/NOTES.md`: rewrite — one table: every round-2 major -> how closed -> frame path.

## Stop
Close out by 60 tool calls, hard stop 80; honest partial beats a false done. No commit/add/push/
tag/download/install. No Clepsydra.

Then: fresh Opus refuter round 3 -> `p5/REFUTE-desk3d-step1-round3.md`, films `D:/tmp-desk3d-ref3/`.
