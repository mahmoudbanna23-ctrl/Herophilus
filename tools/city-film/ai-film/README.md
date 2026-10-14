# ai-film — one painting to a camera-dive clip with an open image-to-video model

Status 2026-10-13: **only a 1.4 s smoke clip exists; the full clip was never produced** (three Kaggle launches used, the cap in the brief).

## Files
- `ai_film.py` — Kaggle GPU script (installs diffusers, loads Wan 2.2 TI2V-5B, smoke test, then picks the biggest config that fits a time budget, falls back to LTX-Video).
- `item.json` — item for `D:\claude os\Tools\factory\kaggle-run.mjs` (slug `hero-city-ai-film`, GPU, internet, private, timeout 7200 s).
- `pharos-dark.jpg` — the painting, 1536x1024 JPEG, uploaded as private dataset `hero-city-ai-film-in`.
- `run3.log`, `settings-run3.json` — log and settings of the last launch.

## Re-run
    set PYTHONUTF8=1        (else the Kaggle CLI dies with a charmap error on the log)
    node "D:\claude os\Tools\factory\kaggle-run.mjs" item.json "<out dir>" 4

## What happened (3 launches, 0.53 h of GPU used of the 4 h budget)
1. Run 1, about 2 min: preinstalled `torchao` too old for new diffusers (`FqnToConfig` import error). Fixed by `pip uninstall -y torchao`. Runner also crashed on a charmap error reading the log (fixed by PYTHONUTF8=1).
2. Run 2, about 16 min: Wan loaded (about 250 s to load) and ran fp16 fine, but my black-frame check misjudged float [0,1] frames as black, switched to bf16 and ran out of memory (bf16 attention on a T4 is the slow, memory-hungry kernel), then LTX also out of memory. Check fixed.
3. Run 3, about 15 min: smoke test passed (fp16, 832x480, 33 frames, 8 steps, 5.7 s per step with CFG, VAE decode 143 s). Main clip chosen 1280x704, 81 frames, 30 steps: **out of memory at the first step** (transformer 10 GB fp16 on the GPU + about 18k tokens of activations on a 14.6 GiB T4). The failed pipeline then stayed on the GPU, so every smaller config failed at once and LTX failed too.

## Fix for the next launch (not tried)
- Start the ladder at 832x480 (about 8k tokens at 81 frames); smoke already worked at 3.5k tokens.
- After an out-of-memory error, rebuild the pipeline (or run each config in a fresh process) instead of reusing it; otherwise one failure poisons the rest.
- Or use `enable_group_offload` on the transformer so it never sits on the GPU whole.
- Prediction numbers to reuse: effective 14 TFLOP/s, VAE decode 1.08e-05 s per pixel-frame (fp32, tiled), model load 250 s, first step 80 s warm-up.

## Settings of the clip that exists (`ai-film-1.mp4` in `D:\scratch 2026\city-ai`)
Wan-AI/Wan2.2-TI2V-5B-Diffusers, transformer fp16, text encoder bf16, VAE fp32, 832x480, 33 frames, 24 fps, 8 steps, guidance 5.0, seed 7, prompt and negative prompt as in `settings-run3.json`. Crop is top-aligned 16:9-ish from the painting (keeps the tower top and fire; loses the bottom strip of water).

## Run 4 (2026-10-14) - three full clips, verdict: not a dive

One launch, 4486 s (1.25 GPU h; job total about 1.78 h of 4). Each config ran in its own
process. Log `run4.log`, settings `settings-run4.json`. Clips in `D:/scratch 2026/city-ai`
as `ai-film-a/b/c.mp4`, each with a `-pingpong` version and a `contact-ai-*.png` strip.

| Clip | Size | Frames | Steps | Seed | Gen time | Looker on 5 stills |
|---|---|---|---|---|---|---|
| a | 832x480 | 81 | 30 | 101 | 820 s | Tower and paint hold; camera barely moves (slow drift) |
| b | 832x480 | 81 | 30 | 202 | 824 s | Moves, but tower turns into a flat-topped block; photographic smoke appears |
| c | 1280x704 | 81 | 30 | 303 | 2117 s | Tower leans, then becomes a thin column beside an empty blue band; stone looks plastic |

Reading: on this model the picture either stays whole and still, or moves and breaks. The
free route is closed after two dispatches. The README above this section was written before
run 4; the builder died (usage limit) before updating it, so this section was added by hand.

## Run 5 (2026-10-14) - BIG model route: Wan 2.2 I2V-A14B GGUF Q4_K_M + lightx2v 4-step LoRAs (launch 1 of max 3)

Script `ai_film.py` is rewritten (the run-4 5B script is kept as `ai_film_run4_5B.py`). Plan, before launch:
- Model: Wan-AI/Wan2.2-I2V-A14B-Diffusers skeleton (VAE, tokenizer, UMT5) + two QuantStack GGUF transformers
  (HighNoise and LowNoise, Q4_K_M, 9.65 GB each) loaded with `WanTransformer3DModel.from_single_file` +
  `GGUFQuantizationConfig(compute_dtype=fp16)`. LoRAs: lightx2v `wan2.2_i2v_A14b_{high,low}_noise_lora_rank64_lightx2v_4step_1022`
  (high into `transformer`, low into `transformer_2` via `load_into_transformer_2=True`). Verified on the web: diffusers docs
  (from_single_file for WanTransformer3DModel, two denoisers, boundary_ratio, guidance_scale_2), file names/sizes through the HF API.
  NOT verified: GGUF + from_single_file + LoRA together for Wan (no example found); that is what the smoke clip tests.
- Settings: 832x480, guidance 1.0 (negative prompt ignored), 4 passes, FlowMatchEuler shift 5 with sigmas 1/.75/.5/.25
  (= timesteps 1000/937/833/625, the lightx2v schedule), boundary 0.9 (2 high + 2 low), 16 fps (native for A14B).
- Memory: high-noise transformer on cuda:0 (moved there only after the VAE has encoded the image), low-noise on cuda:1,
  prompts encoded once in a separate process and the text encoder deleted from disk, query-chunked attention (512),
  denoise returns latents, both transformers are freed, VAE decodes tiled in fp32 on cuda:0.
- Ladder (one fresh process each): enc -> smoke (33 frames, prompt A, seed 11) -> a (81 f, prompt A, seed 11; retry with Q3_K_M)
  -> b (81 f, prompt B, seed 22) -> fb (Wan 2.1 I2V-14B-480P Q3_K_M GGUF + Kijai lightx2v rank64 LoRA) only if a failed.
- Item: timeout 10800 s; HARD stop inside the script at 9900 s. Budget passed to the runner: 8 h.
- My arithmetic (to be checked against the log): about 1.8e15 FLOP per pass at 81 frames, expect 150-400 s per pass.


### Run 5 results (2026-10-14, launch 1 of max 3) - BIG model route WORKED end to end
- Launched: Wan 2.2 I2V-A14B, GGUF Q4_K_M (both experts) + lightx2v 4-step rank-64 LoRAs, guidance 1.0, 4 passes,
  832x480, 16 fps, two T4 (expert split across GPUs). Runner finished ok, 2574 s wall (about 0.72 GPU hours, two T4 on one kernel).
- Came back: bigsmoke-smoke.mp4 (33 f, 609,899 bytes), ai-film-big-a.mp4 (81 f, prompt A seed 11, 1,561,686 bytes),
  ai-film-big-b.mp4 (81 f, prompt B seed 22, 1,963,564 bytes). All frame checks ok, no BAD suffix, no OOM, no fallback needed.
- Measured seconds per pass, 81 frames: 239.7 / 173.1 / 132.2 / 135.8 (first pass slow: warm-up and expert move). Smoke 33 f: 65.0 / 42.5 / 33.9 / 34.9.
  Denoise 681 s, decode 170 s, load 88 s, worker total 943 s per 81-frame clip. Peak GPU memory 13.5 GiB of 15.
- Prediction check: predicted 120 s/pass for 81 f, measured mean after first about 147 s. Prediction was about 20 percent low.
- Failed: nothing. Ladder items fb (Wan 2.1 fallback) and Q3 retry were not needed and did not run.
- Quality judgement of the clips: see the dispatch report (contact sheets viewed once each).

- BUG FOUND after download (run 5): the saved mp4 files had inverted colours. Cause: export_to_video got uint8 numpy frames and multiplies by 255 again, which wraps (x*255 mod 256 = 256-x). The frame PNGs saved by PIL were correct (mean RGB 54,61,80 matches the source). Wrapped mp4 cannot be restored exactly (pure-black pixels land on 0 not 255, so negate leaves red patches; confirmed by two ffmpeg repair tries). Clips from launch 1 are therefore NOT usable as shown. Fix in ai_film.py: pass PIL Images to export_to_video. The model output itself (structure, motion) looked good in the negated sheets.
- Launch 2 of 3 planned: same script, same seeds, to regenerate smoke, a, b with the export fixed. About 0.72 GPU hours again; total this dispatch about 1.44 h.

### Run 6 results (2026-10-14, launch 2 of max 3) - same recipe, export bug fixed
- Launched: ai_film.py with PIL-frame export. Runner ok, 2826 s wall (about 0.79 GPU hours). Total this dispatch about 1.5 GPU hours over 2 launches.
- Came back: bigsmoke-smoke.mp4 (416,423 bytes), ai-film-big-a.mp4 (81 f, 981,477 bytes), ai-film-big-b.mp4 (81 f, 1,017,418 bytes). Colours now match the source (first frame mean RGB 54,61,79).
- Seconds per pass, 81 f: 233 / 168 / 149 / 159 for both clips. Denoise about 710 s, decode 165 s per clip. Smoke 65/43/35/38.
- Failed: nothing in the run. Contact sheets viewed once each; findings are in the dispatch report. Launch 3 not used.
