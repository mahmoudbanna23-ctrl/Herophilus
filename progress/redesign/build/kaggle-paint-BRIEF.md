# Phase 2a — Kaggle painting kit, proven on the shot 1 plate (builder brief)

ROUTE-OK: gateway down.

## §0 Marching orders
- Hand back at ~60 tool calls, stopped by 80, even with work left. Partial work reported honestly
  is a success. Write status to `progress/redesign/build/kaggle-paint-STATUS.md` AS YOU GO.
- Work ONLY in `D:\claude os\Medical school\Herophilus-redesign`. NEVER write in
  `D:\claude os\Medical school\Herophilus` (live copy). No git — main chat commits.
- Kaggle launches: at most 3 for this job. Run them through the factory runner
  (`node "D:\claude os\Tools\factory\kaggle-run.mjs" <item.json> <out dir> <budget h>`, with
  `set PYTHONUTF8=1`). Budget for this job: 1.5 GPU h. Any direct `kaggle` CLI call takes `-p` with
  a directory inside the trial copy. Everything private — never `--public`.
- Do NOT judge the paintings yourself beyond: exists, 1536x1024, not blank, not black, no NaN
  noise. Glance at ONE output only to confirm it is a painting. A looker judges.
- No Codex painting in this job.

## Read first (narrow)
1. `progress/redesign/build/kaggle-paint-RESEARCH.md` — the model choice and risks.
2. `tools/city-film/ai-film/README.md` — Kaggle lessons already paid for (torchao, fp16 vs bf16 on
   T4, OOM poisoning a reused pipeline: one fresh process per config, PYTHONUTF8).
3. `tools/city-film/ai-film/shot2/item.json` and the top of `shot2.py` (logging, worker-process
   pattern) — copy the shape.
4. `progress/redesign/paint/prompts-city.md` sections `common-city-matte` (line ~159) and
   `shot1-sky-dark` (line ~279).
5. `progress/redesign/build/shot1-plate-LOOK.md` — why the first plate failed.

## The job
1. Make `tools/kaggle/paint/`: `paint.py` + `item.json` (slug `hero-paint`, GPU, internet,
   private) + `README.md` (how to re-run, what each input is). The script takes a JSON job list
   (name, prompt, reference image, seed, size) so later phases reuse it for room plates unchanged.
2. Model ladder, each config in a FRESH process:
   a. FLUX.2 [klein] 4B via diffusers `Flux2KleinPipeline`, reference image passed as `image=`,
      fp16 with CPU offload / text encoder on the second T4. If black or NaN output, try fp32 VAE
      / upcast; if it still fails, go to b.
   b. Fallback: SDXL 1.0 + IP-Adapter in InstantStyle style-only mode, fp16, then upscale to
      1536x1024.
   Log which rung produced the images.
3. Reference image: `progress/redesign/paint/city-dark-3.png` (style). Prompt: the
   `shot1-sky-dark` section rewritten with the looker's fixes — **camera much higher** (horizon at
   about 40-45% from the top, not 62%), the coast a THIN dark line with a few tiny warm lamps (not a
   lit city), the Pharos a small warm spark on the LEFT, and the **thick cloud bank BELOW the
   horizon line**, lying between the camera and the coast, so a downward dive passes into it.
   Add the matte style words from `common-city-matte`. Keep a short negative list (photo, 3D
   render, glossy, text, birds, moon disc, lens flare).
4. Output: 4 variants (4 seeds) as `progress/redesign/paint/kaggle/shot1-sky-dark-k1..k4.png`,
   1536x1024 RGB. Save the exact prompts + settings beside them as `shot1-sky-dark-k.json`.

## Report back (short)
Rung used (klein or SDXL), seconds per image, GPU h used, the 4 paths with sizes, anything that
failed, and whether `paint.py` is ready to take a room-plate job list as is.
