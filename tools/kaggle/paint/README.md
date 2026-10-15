# kaggle/paint - paint plates in the style of a reference painting (open model, Kaggle GPU, free)

Status 2026-10-14: proven on the shot 1 sky plate. FLUX.2 [klein] 4B, fp16, one T4, worked first try
(launch 1 of 1 used: 452 s wall, 0.11 GPU h, 4 images 1536x1024, about 43 s each).

## Files
- `paint.py` - the Kaggle GPU script. Reads `jobs.json`, writes `<name>.png` per job, `settings-<name>.json`, `settings-all.json`, `run.log`.
- `jobs.json` - the job list (the shot 1 sky-dark job, 4 seeds).
- `item.json` - item for `D:\claude os\Tools\factory\kaggle-run.mjs` (slug `hero-paint`, GPU, internet, private, timeout 1800 s). `inputs` lists the files uploaded as private dataset `hero-paint-in`: `jobs.json` plus every reference image the jobs name.
- `city-dark-3.png` - style reference (copy of `progress/redesign/paint/city-dark-3.png`).

## Job format (`jobs.json`)
    {"jobs": [{"name": "room-eyes-dark-1", "ref": "ophtho-dark.jpg", "seed": 1, "w": 1536, "h": 1024,
               "steps": 4, "prompt": "...", "prompt_short": "... under 77 tokens, SDXL only ...",
               "negative": "photo, 3D render, ...", "same_as": "<name of another job>"}]}
- `name` becomes the output file name. `ref` = basename of an input image (style reference), a LIST of basenames (klein takes several; two worked in launch 2, 9.2 GiB peak, about 71 s per image), or null (text only; the SDXL rung needs a ref and uses the first).
- `jobs-round1.json` = the first job list (k1-k4, one reference); `jobs.json` = the current one (k5-k8, two references).
- Keep prompt + "Avoid:" list under 512 tokens; the worker logs the count ("prompt tokens"), the text encoder cuts everything after 512.
- `w`,`h` must be multiples of 16. Reference is scaled by the pipeline to about 1 MP internally.
- `same_as` copies every key you do not set from the named job, so seed variants only list name and seed.
- Optional top-level `"rungs": ["klein-fp16", "sdxl"]` limits which rungs are tried.
- The distilled klein ignores a negative prompt, so `negative` is appended to the prompt as "Avoid: ..." (it can mention things back into the picture; keep it short). SDXL uses it as a real negative prompt.

## Re-run
1. Edit `jobs.json`; copy any new reference image into this folder and add it to `inputs` in `item.json`.
2. From this folder:

       set PYTHONUTF8=1        (else the Kaggle CLI dies with a charmap error)
       node "D:\claude os\Tools\factory\kaggle-run.mjs" item.json "<out dir>" <absolute GPU budget h>

   The budget argument is absolute: the runner refuses if (hours used so far + timeoutSec/3600) is above it. Read `kaggle quota` first.
3. Outputs come back in `<out dir>`. `settings-all.json` says which rung made each image (`rung`).

## What it does (rung ladder, every config in its own forked process)
1. `enc` - Qwen3 text encoder (bf16) turns every prompt into embeddings, saved to /tmp, encoder freed.
2. `klein-fp16` - FLUX.2 [klein] 4B, transformer + VAE fp16, 4 steps, guidance 1.0, reference passed as `image=`. Only this rung ran in launch 1.
3. `klein-vae32` - same with VAE decoded in fp32; `klein-bf16` - transformer bf16 (slow on T4). Tried only for jobs the previous rung did not finish OK.
4. `sdxl` - SDXL 1.0 (fp16-fix VAE) + IP-Adapter in InstantStyle style-only mode, generated 1248x832, LANCZOS to w x h. NEVER RUN so far; untested code.
A job is OK when the image exists at the right size, latents/decode are finite, and std > 8, mean > 3. That is all the script judges; a person judges the painting.

## Measured (launch 1, shot 1 sky-dark, 1536x1024, one T4)
Load 34 s (weights download 70 s, once), denoise 29-33 s (about 7 s per step after the first), decode + save about 12 s, peak GPU memory 8.9 GiB, so the second T4 is unused and 1536x1024 with a reference fits with room. Prompt embeds max abs 16384 (bf16, finite).

## Lessons carried over from `tools/city-film/ai-film`
Preinstalled `torchao` breaks new diffusers: the script uninstalls it. One fresh process per config. `PYTHONUTF8=1` for the runner.

## Known limits
- klein treats the reference as an edit source: a composition can leak through. The prompt says "do not copy the composition"; look at every output.
- The reference is read at about 1 MP, so fine brushwork of a bigger reference is lost.
- Licence: klein 4B Apache 2.0 per its model card (read in research, not re-checked here); SDXL is OpenRAIL++-M.
