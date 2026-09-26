# REFUTE round 3: desk3d step 1 (2026-09-26)

**Verdict: FAIL.** 3 majors, 7 minors. Every round-1 and round-2 major is closed except round-1 major 7 (legibility): the word-break defect and low title contrast keep it open.

Evidence is in `D:/tmp-desk3d-ref3/`. All input was real CDP (`Input.dispatchMouseEvent` / `dispatchKeyEvent`). Each run used a fresh `--user-data-dir`.

| Script | What it does | Output |
|---|---|---|
| `wb.mjs` | Word-break sweep | `wb-out.json`, `wb-<W>x<H>.png` |
| `sweep-base.mjs` | Builder sweep re-pointed | `s<W>x<H>-out.json`, stills |
| `extra.mjs` | Off-title raycast clicks, gap clicks, title-in-cover, open share, label timing | `extra-out.json`, `x*.png` |
| `pop.mjs` | Title show/hide per frame | console |
| `jump.mjs` | Per-frame deltas | console |
| `film3.mjs`, `settle.mjs` | Films, fps, reduced motion, settle | `film-1280x800.mp4`, `film-390x844.mp4`, `film-320x640.mp4`, `sheet-*.png` |

## Confirmed (re-run, holding)
- **Clean run:** 0 console errors and 0 non-file requests in every session.
- **Correct book opens:** at all 5 sizes, a cover-centre click opens the right book (4/4).
  - A click on the lower cover, below the title, where only the raycast can pick, also opens the right book (19/20). The miss was 320 Ophthalmology: the 4-line title fills the cover down to its bottom edge, so the probe point landed on the edge.
  - Gap clicks between books open nothing.
- **Titles on their books:** each title rect sits inside its own book rect.
- **Labels:** open-state labels are 16 px (15 px on phones), and Lectures, Questions and Mocks all log on a real click.
- **Tab order:** idle is ENT, Ophthalmology, Neuropsychiatry, Pediatrics. Open is Lectures, Questions, Mocks, Back.
- **Clean close:** Esc, Back and click-outside all return with diff 0, and focus goes back to the book's title.
- **No overlap or clipping:** the OBB probe records 0 hit frames. Open, Mocks-out and label clip lists are empty. Empty-background rows are 0.000.
- **Reduced motion works:** no lift, instant open and close, return diff 0, focus ring clear of the edges.
- **Settle:** cover 2.50% / 158 ms, camera 2.49% / 168 ms.
- **fps (my run, 1280):** 107.1 at 1x, 90.9 at 6x.
- **No pop in the motion:** the one per-frame spike is a missed sample (step 0.148 = 2 x 0.074, neighbours regular). The films show no jump.

## Majors
1. **Words break inside the word at 328 of 387 swept sizes (widths 320 to 1600, step 10, heights 640 / 844 / 1180).**
   - This includes desktop 1280: "Ophthalmol-ogy" and "Neuropsych-iatry" (`wb-1280x844.png`, and the builder's own `D:/tmp-desk3d-fix2/s1280x800-1-idle.png`).
   - On phones it is worse: "Oph-thal-mol-ogy" takes 4 lines, "Neuro-psych-iatry" 3 and "Pedi-atrics" 2 (`wb-390x844.png`).
   - Words stay whole only at widths of 1400 and above.
   - NOTES.md says this happens on phones only. That is false.
   - Cause: soft hyphens (U+00AD, 6 of them) at `desk3d/app.js:18-20`; `hyphens:manual` at `desk3d/index.html:14-15`; the label is capped to the cover width at `desk3d/app.js:565-567`.
   - Fix: remove the soft hyphens and set `white-space:nowrap; hyphens:none`. Then let the layout give instead of the word:
     - Size the camera or books so the widest title fits (Neuropsychiatry is about 155 px at 16 px, about 145 px at 15 px).
     - Or let the title plate run wider than the cover.
     - Or use one column on phones.
2. **Title contrast is 1.38 to 1.70 : 1 (gold `#e8c766` on the rendered covers; `wb-1280x844.png`).**
   - The covers render washed out, not as the tokens. ENT `#b4472f` renders at about `#e48052`.
   - Cause: three r147 has `ColorManagement.legacyMode` true, plus `outputEncoding = sRGBEncoding` (`desk3d/app.js:74`). The hex colours are treated as linear.
   - Fix: set `THREE.ColorManagement.legacyMode = false` before any material is made, then re-measure. Target at least 3:1 for bold large text, 4.5:1 preferred.
3. **The titles pop.**
   - On a real click, three titles vanish in a single frame (58 ms). On close they reappear in a single frame at 1492 ms (`pop.mjs`; `sheet-390-open.png` row 1, `sheet-1280-mocks-back.png` last frame).
   - Nothing physical causes it, which breaks the no-pop rule.
   - Cause: `desk3d/app.js:563`, which hides every non-open title while a book is open.
   - Fix: keep the idle books' titles on screen, inert and aria-hidden. Let the existing occlusion test hide only titles that are really covered.

## Minors
- **Mocks peek:** at rest it is a wedge about 38% of the page height at 1280, not "a corner" (decision 3; `x1280x800-open-ent.png`). Cut the PEEK x (`desk3d/app.js:275`) and its tilt.
- **Mocks tuck label:** cream `#f3e6c4` is drawn over the pink neighbour book and has poor contrast (`desk3d/index.html:21`; `x1280x800-open-ent.png`).
- **Portrait open view:** the lower ~30% is plain desk (`s820x1180-3-open-ent.png`). This is within decision 4.
- **Portrait arcs:** front-row arcs overlap the back-row books, for example the Pediatrics arc over Ophthalmology (`s820x1180-3-open-ent.png`, `wb-390x844.png`).
- **Blocky shadow:** a blocky shadow falls on Ophthalmology while ENT closes (`sheet-1280-mocks-back.png` row 3). The shadow map is 1024 (`desk3d/app.js:89`).
- **Squeezed titles:** the title `scaleX` goes down to 0.83 on phones, so glyphs are about 12.5 px wide (`desk3d/app.js:570`). Tie it to the layout instead.
- **Grey smear:** a vertical grey smear shows on the Questions page while Mocks is out at 320 (`s320x640-5-mocks-out-peds.png`).
