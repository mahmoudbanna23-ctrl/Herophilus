# Phase 2 step 4 — shot 1 film on Kaggle (builder brief)

ROUTE-OK: gateway down.

## §0 Marching orders
- Hand back at ~60 tool calls, stopped by 80, even with work left. Partial work reported honestly
  is a success. Write status to `progress/redesign/build/shot1-film-STATUS.md` AS YOU GO.
- Work ONLY in `D:\claude os\Medical school\Herophilus-redesign`. NEVER write in
  `D:\claude os\Medical school\Herophilus` (live copy). No git — main chat commits.
- Kaggle: at most 3 launches, budget 1.2 GPU h. Use the factory runner
  (`node "D:\claude os\Tools\factory\kaggle-run.mjs" <item.json> <out dir> <budget h>`, with
  `PYTHONUTF8=1`). Any direct `kaggle` CLI call takes `-p` with a dir inside the trial copy.
  Everything private — never `--public`.
- D: is nearly full: keep only the final outputs locally, no intermediate frame dumps.
- Do NOT judge the films yourself beyond: plays, right length/size, not black, not frozen. A
  looker judges. No Codex.

## Owner decision
The owner picked plate `progress/redesign/paint/kaggle/shot1-sky-dark-k8.png` (1536x1024) on
2026-10-15. Looker notes on it: `progress/redesign/build/shot1-kaggle-LOOK.md` "## Round 2".

## Read first (narrow)
1. `tools/city-film/ai-film/README.md` — Kaggle lessons already paid for.
2. `tools/city-film/ai-film/shot2/` — `item.json`, the top of `shot2.py` (settings, prompt,
   Wan 2.2 I2V GGUF Q4_K_M + lightx2v 4-step, Real-ESRGAN x2). Copy the shape, do not rewrite it.
3. `progress/redesign/PLAN-city-2026-10-13.md` — grep `shot 1` / `shot1`: what the shot must do and
   how it hands over to shot 2 (read the matching span only).
4. Where shot 2's finished film went (list `app/assets/city/` and the shot2 output folder) — so
   shot 1 matches its length, frame rate and size.

## The job
1. Make `tools/city-film/ai-film/shot1/` from the shot2 folder (slug `hero-city-shot1`, private),
   with the k8 plate as the input image.
2. Motion: the camera tilts down and dives forward and down from the high night sky into the
   thick cloud bank below the horizon; the Pharos spark stays on the left; the film ends inside
   the soft cloud so it hands over to shot 2 / the mist the way the plan says. No new objects, no
   birds, no moon, no text, the painting's gouache look kept (no photo look).
3. Two seeds, then Real-ESRGAN x2 on each — same settings as shot 2 otherwise.
4. Outputs into `tools/city-film/ai-film/shot1/out/` (match shot2's naming): the two upscaled
   films, plus for each one small preview mp4 (720 wide) and 3 stills (first, middle, last frame)
   for the looker. Do NOT encode the app asset yet — that waits for the owner's seed pick.

## Report back (short)
Paths + sizes, seconds and GPU h used, launches used, anything that failed.
