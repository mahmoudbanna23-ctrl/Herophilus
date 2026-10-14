# Slice 4 — the first cloud join: shot 2 → mist cover → landing (builder brief)

ROUTE-OK: gateway down.

## §0 Marching orders
- Hand back at ~60 tool calls, stopped by 80, even with work left. Partial work reported honestly
  is a success. Write status to `progress/redesign/build/cloud-join-STATUS.md` AS YOU GO.
- Work ONLY in `D:\claude os\Medical school\Herophilus-redesign`. NEVER write in
  `D:\claude os\Medical school\Herophilus` (the live copy). No git — main chat commits.
- Scratch, harness, recordings: `D:\scratch 2026\city-join\` (no `--` in any path).
- Look at a few frames only to check your own output.

## Why
Owner approved shot 2 (the lighthouse drop) and said: "do the mist cover-up". The film's own mist
never fully hides the tower, so a plain crossfade into the landing film ghosts the tower and jumps
in brightness (last shot 2 frame mean luma ~72, first landing frame ~100, mean abs diff 37). The
switch must happen under a page-drawn mist layer that is fully opaque at the moment of the swap.

## Read first (narrow)
1. `app/js/city.js` — header comment (lines 1-40) and the landing film section (from line 119,
   `eligible`, `startFilm`, its park/adopt/destroy, skip on click/key). Reuse it; do not fork it.
2. `app/css/city.css` — `.city-mist` (lines 43-80) and the reduced-motion / calm-view blocks
   (around 148-153).
3. `progress/redesign/PLAN-city-2026-10-13.md` lines 51-66 (hard limits) and 103-110 (who sees
   what).
4. `D:\scratch 2026\city-route\route.js` — harness pattern (CDP, setDeviceMetricsOverride,
   screencast + ffmpeg). ffmpeg:
   `C:\Users\Alfa388\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-8.1.2-full_build\bin\ffmpeg.exe`.

## The job
1. **Asset:** encode `D:\scratch 2026\city-ai\shot2\shot2-up-b.mp4` (1440x960, the approved drop,
   seed 23 upscaled) to `app/assets/city/shot2-dark.mp4` at 1350x900 lanczos +
   `unsharp=5:5:0.7:5:5:0.0`, crf 19, no audio, `+faststart` — same treatment as
   `landing-dark.mp4`.
2. **Who sees it (interim, until shot 1 and scroll exist):** a visitor with `done==0` (not
   started — today they get the resting still) gets shot 2 → cloud cover → landing film → still,
   on a timer, under the SAME rules the landing already has: landscape, >= 768 wide, motion not
   reduced, first view of the load is home, plays only if it can play through within ~1000 ms
   (else skipped for that load), any click/key skips to the resting still, input held only while
   it plays. `done>=1` visitors keep exactly today's landing-only behaviour. Shot 2 is fetched
   only for `done==0` visitors (plan: no speculative download).
3. **The cloud cover:** one full-frame layer above the film(s), below the hot-spots/labels,
   `aria-hidden`. Painted look, not flat: build it from soft layered radial gradients in the
   city's mist blue-grey; its colour is picked to match the landing film's FIRST frame (sample
   it — report the RGB you used) so it clears into the landing without a brightness jump.
   Sequence:
   - over the last ~0.8 s of shot 2 the cover rises to FULL opacity (opacity + a slight upward
     translate; animate opacity/transform only);
   - at full opacity: hard swap shot 2 → landing (no crossfade under it), landing starts paused
     on frame 0 until it can play, then plays;
   - cover holds ~0.2 s, then clears over ~0.9 s as the landing plays.
   The cover must also work when a re-render parks/adopts the film (same park/adopt path).
   Reduced motion / phone / upright: none of this runs (resting still, as today).
4. Keep the city calm-view and print rules intact (the cover never shows on study views or in
   print).

## Hard limits (plan)
Never touch `app/data/*`, `js/storage.js`, `utils.js`, `theme.js`, `icons.js`, `js/lib/*`,
`css/print.css`, mascot artwork. No new storage key. Vanilla, `file://`, no CDN. CSS animates
transform, opacity, clip-path only. Clepsydra artwork untouched.

## Checks before calling it done
1. `node tools/boot-check/boot-check.js` from the trial copy root — 0 console errors.
2. Harness `D:\scratch 2026\city-join\join.js`: seed a profile with 0 answered → record the
   city load at 1440x900 to `join-1440x900.mp4`; seed one with >=1 answered → confirm only the
   landing plays (no shot 2 request in network log); one run with reduced motion → still only.
3. **Seam numbers** from the recording: mean abs diff between consecutive frames across the
   whole switch window; report the max inside the window vs the raw crossfade's 37. At the
   frame of the swap the cover is at opacity 1 (read it from the DOM at that moment) and no
   tower shows (frame luma std dev low — report it).
4. Skip: a click mid shot 2 lands on the resting still with hot-spots working, no stuck cover.
5. Confirm the new CSS rules are live (enumerate `document.styleSheets`).

## Report back (short)
Files changed, the asset size, the cover RGB, seam numbers, recording path, test pass/fail,
anything skipped or broken.
