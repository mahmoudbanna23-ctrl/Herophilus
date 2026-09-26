# P5 — 3D desk step 1, fix round 1 (2026-09-26)

Seat: fresh Claude `lean-drafter` (Sonnet). Prompt opens `ROUTE-OK: Codex cannot render; fix is
judged on film`. If this round fails refutation, round 2 goes to an Opus builder.

WRITE GRANT: edit/create files ONLY under `progress/app-replan/p5/desk3d/`. Films/frames:
`D:/tmp-desk3d-fix1/` (never a path containing `--`).

## Inputs
- Spec: `p5/desk3d-step1-brief.md` (still binds, every line).
- Refuter: `p5/REFUTE-desk3d-step1.md` — FAIL, 7 majors. Open every file:line, use its fix hints,
  look at its cited frames in `D:/tmp-desk3d-ref1/` before changing code.

## Must land (all 7 majors)
1. Mouse can click Lectures / Questions / Mocks. A `[hidden]` element is really hidden (never
   override `display` on `[hidden]`), hidden buttons leave the Tab order and the a11y tree.
2. Click outside the open book closes it (the HTML layer must not swallow canvas clicks:
   `pointer-events:none` on the layer, `auto` on the buttons).
3. No one-frame jump on mouse open: the open starts from the book's current (hovered) pose.
4. A real book open: cover hinges on the SPINE edge and swings outward, away from the pages, and
   stays visible lying open; the open book shows a two-page spread — **Lectures** on the left
   page, **Questions** on the right.
5. Mocks: tucked paper visibly peeks out of the page block at rest in the open book (a corner and a
   wax-seal dot); on hover/click it slides out along the pages, face toward the camera, labelled
   **Mocks**, readable.
6. Books stand ON the desk (bottom face touches the top face, contact shadow), nothing below the
   desk edge. Camera frames desk + books at every size.
7. Legibility at 390x844 and 320x640: book titles and page labels readable (min ~14 CSS px
   equivalent on screen). Layout may change for portrait (e.g. 2×2 books, or closer camera) —
   the layout gives, never the word.
Also: fill the portrait black bands (camera/framing, not a letterbox).

## Verify — with REAL input events
- Drive every interaction with CDP `Input.dispatchMouseEvent` / `Input.dispatchKeyEvent` at real
  coordinates — never `.click()` / `.focus()` in script. Tab through: only visible targets focus.
- Films at 1280x800, 390x844, 320x640 into `D:/tmp-desk3d-fix1/`; stills mid-open and open for
  ENT and Pediatrics; read them yourself.
- Clip sweep: widths 1280, 1024x768, 820x1180, 390x844, 320x640 — no book, arc, title or target
  clipped.
- 0 console errors; fps 1x/6x as before.
- `desk3d/NOTES.md`: rewrite — one table: refuter major -> how closed -> frame path. Numbers only
  from your own run.

## Stop
Close out by 60 tool calls, hard stop 80. No commit/add/push/tag/download/install. No Clepsydra.

Then: fresh Opus refuter round 2 -> `p5/REFUTE-desk3d-step1-round2.md`, films `D:/tmp-desk3d-ref2/`.
