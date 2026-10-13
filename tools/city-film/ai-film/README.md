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
