# Slice 4 — shot 2 film (lighthouse drop into mist) + first cloud join (builder brief)

ROUTE-OK: gateway down.

## §0 Marching orders
- Hand back at ~60 tool calls, stopped by 80, even with work left. Partial work reported honestly
  is a success. Write status to `tools/city-film/ai-film/shot2/STATUS.md` AS YOU GO (Edit-append).
- Work ONLY in `D:\claude os\Medical school\Herophilus-redesign`. NEVER write in
  `D:\claude os\Medical school\Herophilus` (the live copy). **Every Kaggle CLI call runs with an
  explicit directory inside the trial copy** (`-p <dir>`) — a previous run dropped a
  `dataset-metadata.json` into the live folder. After the run, check the live folder has no new
  files from you (`git -C "D:/claude os/Medical school/Herophilus" status --short | grep -i -E
  "metadata|kernel|wan"` must be empty).
- No git at all — main chat commits.
- Clips, frames, previews: `D:\scratch 2026\city-ai\shot2\` (no `--` in any path).
- Look at frames only to check your own output (a few stills, not every frame).

## Read first (narrow)
1. `tools/city-film/ai-film/landing/STATUS.md` — the recipe that worked (Wan 2.2 I2V-A14B GGUF
   Q4_K_M + lightx2v 4-step LoRAs, 720x480 x 81 frames, two T4s, ~709 s per clip). Reuse its
   kernel/notebook files; copy them into `tools/city-film/ai-film/shot2/` and change only the
   input image, prompt and seed.
2. `tools/city-film/ai-film/README.md` — Run 5 / Run 6 prompt B wording only (grep "prompt B").

## The job
Input plate: `progress/redesign/paint/shot2-pharos-dark-r2.png` (1536x1024, 3:2 → generate at
720x480, same as the landing). Owner approved this plate as-is; its mist is thin, so the FILM
must thicken it.

1. **Two clips, played FORWARD** (not reversed), same motion, two seeds (e.g. 11 and 23):
   prompt B style — smooth crane shot, the camera glides forward past the lighthouse and sinks
   down into the mist; the mist rises and thickens until by the last second the whole frame is
   soft blue-grey cloud with no tower or city visible. Painted, matte, gouache brushwork, night,
   warm lamp light. Negative: glossy, 3D render, text, people, flicker, the tower bending.
   Budget: these two clips only (~0.4–0.6 GPU h; quota 3.79 h used of 30). No third clip.
2. **AI upscale test, one attempt, optional**: if the same Kaggle session has room, upscale the
   better clip x2 with Real-ESRGAN (`realesr-animevideov3` or `RealESRGAN_x4plus` then scale to
   1440x960). If it errors, note why and skip — do not retry, do not open a second session.
3. **The join** (local, ffmpeg at
   `C:\Users\Alfa388\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-8.1.2-full_build\bin\ffmpeg.exe`):
   for each clip, make `join-<a|b>.mp4` = shot 2 clip → crossfade ~0.6 s → `D:\scratch 2026\city-ai\landing\landing-a.mp4`
   (the approved landing, which opens in cloud). Scale both to 1440x960 lanczos +
   `unsharp=5:5:0.7:5:5:0.0`, crf 19. Also extract the last frame of the shot 2 clip and the first
   frame of landing-a as PNGs side by side (`join-<a|b>-seam.png`) so the seam can be judged.
   If the upscale in step 2 worked, make one extra join from the upscaled clip.

## Checks before calling it done
- Each clip: 81 frames, 720x480, plays; last frame is mostly cloud (sample: mean luminance and
  low variance in the last frame vs the first — report the numbers).
- Tower keeps three tiers through the motion (look at frames ~20, ~45, ~65 of each clip).
- Live folder clean (command in §0).

## Report back (short)
Clip paths, which seed looks better and why (one line), GPU hours used and new quota total,
upscale result (worked / skipped + reason), join paths, the seam numbers, anything left broken.
