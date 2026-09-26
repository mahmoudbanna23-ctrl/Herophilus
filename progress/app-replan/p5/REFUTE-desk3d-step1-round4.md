# REFUTE round 4: desk3d step 1 (2026-09-26)

**Verdict: FAIL.** 1 major, 6 minors. Every major from rounds 1 to 3 is closed. The one major left is a new label pop: round 3 caught the titles popping, and the page labels do the same thing.

Evidence is in `D:/tmp-desk3d-ref4/`. All input was real CDP (`Input.dispatchMouseEvent` / `dispatchKeyEvent`), and every Chrome ran with a fresh `--user-data-dir`. The scripts:
- `sweep-base.mjs`, `wb.mjs` and `extra.mjs` are the round-3 harness, re-pointed.
- `contrast.mjs` is my own probe. It takes two screenshots, one with the labels and one with them hidden, decodes the pixels with ffmpeg, and measures text colour against every background pixel under the text box (plate composited in).
- `pop4.mjs` records each label's opacity and position on every frame.
- `clipvis.mjs`, `owner.mjs`, and `film3.mjs` (fps and reduced-motion modes), plus `settle.mjs`.

## Confirmed (re-run, holding)
- **Word breaks:** 387 sizes (widths 320 to 1600, step 10, heights 640 / 844 / 1180). No word broken, no title on more than one line, none hidden, none clipped. Sizes run 14 to 22 px. Below aspect 0.95 the layout is 2×2.
- **Contrast (my probe, on rendered pixels, 158 labels over 5 sizes and the idle / open / Mocks-out states of 3 books):** the minimum is **5.51**, on Questions at 320. Titles are at least 5.84 and Mocks at least 5.84. At 1280 every label is at least 8.47. Nothing is below 4.5.
- **Titles no longer pop:** the largest per-frame opacity step is 0.18 at 1280 and 0.09 on phones.
- **Right book, clean close:** at all 5 sizes each book opens on a click (20/20). Esc, Back and click-outside return with diff 0, focus goes back to the book, and the OBB probe records 0 hit frames.
- **Clean run:** 0 errors and 0 network requests in every session.
- **Framing:** empty band 0.000. Every open-state label the sweep reports as "clipped" is a faded title (`gone`, visibility hidden; `clipvis.mjs`).
- **Mocks and settle:** the Mocks peek is a corner. Settle is cover 2.50% / 156 ms and camera 2.49% / 159 ms.
- **fps (1280):** 106.3 at 1x, 91.8 at 6x.
- **Reduced motion:** instant, diff 0, focus ring clear of the edges.

## Major
1. **Page labels pop, which breaks fix-3 decision 3 ("never a one-frame vanish or return").**
   - **On Back:** Lectures, Questions and Mocks all vanish in one frame at the click, while the pages still face the camera (`sheet-1280-back.png`, frames 2 to 3). Cause: `desk3d/app.js:451`.
   - **On open:** each one appears 0 to 1 in a single frame (`pop4-*.json`, opacity step 1.0). Cause: `setShown` toggles `hidden` with no fade (`app.js:571`, `599`, `601`, `610`).
   - **Mocks label jumps:** when the paper comes out, the label jumps 211 / 89 / 78 px in one frame (1280 / 390 / 320) from the tuck anchor to the sheet anchor (`app.js:602-608`; `sheet-1280-mocks.png`, frames 6 to 7).
   - **Fix:** use the `.gone` fade for page labels too. Hide them only when the cover closes or the paper tucks (a physical cause). Move the Mocks anchor along with the sheet, or cross-fade it over 150 ms or less.

## Minors
- **Portrait arcs overlap back-row books, for example the Neuro arc over ENT (`c820x1180-open-ophtho-on.png`, `c320x640-idle-on.png`).**
  - I judge this **not a clipping or legibility major**. The labels are HTML drawn above the canvas, contrast over the arc pixels still measures at least 5.57, and the sweep shows 0 clipped.
  - It is visual clutter. Fix: lower the arc (`app.js:208`, `H/2+0.2`) or set its depth per row.
- **Ghost titles:** a title that is being occluded stays drawn over the nearer, moving book for its 150 ms fade. "Ophthalmology" and "Neuropsychiatry" ghost across ENT as it lifts (`zoom-1280-open-neuro.png`, row 3). Fix: start the fade a few frames early (predict the occlusion), or occlude the whole plate rect.
- **Blocky shadow:** still there, on the ENT cover in the Peds-open view (`c1280x800-mocks-peds-on.png`; `app.js:92`). The builder admits it.
- **Portrait framing:** idle and open views leave about 33% plain desk at the bottom at 390 and 320, and the books are about 70 px wide at 320 (`c390x844-idle-on.png`). The builder admits this too.
- **Mismatched pages:** the endpaper renders lemon-yellow next to the peach page block (`c1280x800-open-ent-on.png`; `endMat`, `app.js:184`). Match it to `paperMat`.
- **Mocks paper:** it slides out sideways and hangs detached in the air, where the spec says "slides out upward" (`c1280x800-mocks-peds-on.png`). Title sizes also vary, 22 / 16 / 16 / 22 px at 1280, so ENT and Pediatrics read as more important (`c1280x800-idle-on.png`).

## Owner films (final build, real input)
- `D:/tmp-desk3d-ref4/owner-1280x800.mp4`: 484,802 B, 17.4 s.
- `D:/tmp-desk3d-ref4/owner-390x844.mp4`: 246,510 B, 17.1 s.
- Both are libx264 crf 28 at 30 fps, and both runs had 0 errors and 0 network requests.
- The builder's films predate its last change; these do not.
