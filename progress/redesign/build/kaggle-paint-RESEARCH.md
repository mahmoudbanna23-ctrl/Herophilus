# Kaggle paint model research (2026-10-14)

Question: open model to paint 1536x1024 plates in style of one reference painting, Kaggle 2x T4 (16 GB each, fp16 only).
Research only. No model was run. Anything not cited = unverified.

## Recommendation
**FLUX.2 [klein] 4B (distilled), diffusers `Flux2KleinPipeline`, reference painting passed as `image=`.**
**Fallback: SDXL 1.0 + IP-Adapter (InstantStyle block scales), fp16, then upscale to 1536x1024.**

## Candidate 1: FLUX.2 klein 4B (pick)
- Licence: Apache 2.0; LICENSE.md is plain Apache text, no extra output clause (fetch summary). https://huggingface.co/black-forest-labs/FLUX.2-klein-4B/blob/main/LICENSE.md
  Apache text says nothing about outputs, so no stated restriction on a free educational site. Card only encourages NSFW/provenance filters.
- Gating: card shows none. https://huggingface.co/black-forest-labs/FLUX.2-klein-4B . Confirm on first download.
- VRAM: "as little as 13GB" https://bfl.ai/blog/flux2-klein-towards-interactive-visual-intelligence ; repo 23.7 GB, single-file transformer 7.75 GB (tree page). On one T4 needs `enable_model_cpu_offload()` (card suggests). Text encoder is Qwen3 (diffusers doc), can sit on 2nd T4 or CPU. FP8 community repo reports 7.75 GB peak on a 4090 with offload: https://huggingface.co/abhishekchohan/flux2-klein-4b-fp8 . BFL NVFP4 needs Ampere+, useless on T4. No klein-4B GGUF repo confirmed.
- Speed on T4: NO report found. BFL claims "under 0.5s on modern hardware", not T4. Unverified.
- bf16 vs fp16: card example uses bf16. T4 has no native bf16, runs emulated/slow: https://discuss.pytorch.org/t/bfloat16-native-support/117155 . diffusers Flux docs: fp16 is the Turing path, text-encoder activations can clip in fp16, keep text encoder fp32 if output washes out: https://huggingface.co/docs/diffusers/v0.31.0/api/pipelines/flux . Whether klein 4B survives fp16 without NaN/black images: no report found. TEST FIRST.
- Reference/style: one checkpoint does text-to-image, image-to-image, multi-reference editing (card). `__call__` takes `image` as a list of PIL images: https://huggingface.co/docs/diffusers/main/en/api/pipelines/flux2 . Magnific docs say up to 4 reference images for style/subject transfer (third party): https://docs.magnific.com/api-reference/text-to-image/flux-2-klein/overview.md . No source tests gouache/painterly style. Unverified.
- Resolution: card shows 1024x1024 only; diffusers says 1024 default "best results"; no max stated. 1536x1024 (1.57 MP) native = unverified. Try direct, else 1216x832 + upscale.
- Install: `pip install git+https://github.com/huggingface/diffusers` (card says dev build needed). HF weights, no token expected.
- If reference-only drifts: style LoRA trained on `FLUX.2-klein-base-4B` (undistilled). Painting LoRA examples: rank 32, 4000 steps, 21 images: https://huggingface.co/noema-art/dutchbaroqueflux-klein . Training on T4 = unverified, likely too heavy.

## Candidate 2: SDXL 1.0 + IP-Adapter (fallback)
- Licence: CreativeML OpenRAIL++-M. "Licensor claims no rights in the Output You generate"; "You are accountable for the Output you generate and its subsequent uses". Attachment A bans e.g. false info meant to harm and "medical advice and medical results interpretation". Text never says "commercial". https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/blob/main/LICENSE.md . Card Direct Use says "research purposes only" (card page); licence text governs, but note the mismatch.
  Medical-advice clause: plates are art; keep captions free of clinical claims.
- Ungated (card shows no gate). IP-Adapter repo h94/IP-Adapter is Apache 2.0: https://huggingface.co/h94/IP-Adapter
- T4: fp16 is the documented dtype; 16 GB enough for SDXL (search result, no T4 timing found, unverified).
- Style: InstantStyle scale dict (`{"up":{"block_0":[0.0,1.0,0.0]}}`) is the documented style-only mode; img2img + ip_adapter_image also documented: https://huggingface.co/docs/diffusers/main/en/using-diffusers/ip_adapter
- Resolution: SDXL is 1024-class; direct 1536x1024 may repeat content (general knowledge, unverified). Plan 1216x832 then upscale.
- Weakness (general knowledge, unverified here): CLIP prompt limit of 77 tokens cuts long prompts.

## Candidate 3: Z-Image-Turbo (rejected)
- Apache 2.0, no gate seen, "fits comfortably within 16G VRAM", `ZImagePipeline`, 9 steps, 1024x1024 example. https://huggingface.co/Tongyi-MAI/Z-Image-Turbo
- Card lists text-to-image only; Z-Image-Edit "To be released" (release not confirmed by my search). No reference input, cannot match the painting.

## Candidate 4: FLUX.1-dev (rejected)
- Non-Commercial licence, gated (login + accept): https://huggingface.co/black-forest-labs/FLUX.1-dev
- LICENSE s2(d): "You may use Output for any purpose (including for commercial purposes), except as expressly prohibited herein"; s2(e) asks output filtering + AI disclosure; s1(c) excludes use "in direct interactions with or that has impact on end users". Public site fit unclear. https://huggingface.co/black-forest-labs/FLUX.1-dev/blob/main/LICENSE.md
- 12B size class is heavy for T4. Redux not checked.
- FLUX.1-schnell: Apache 2.0, fetch said gated, no reference input on card. https://huggingface.co/black-forest-labs/FLUX.1-schnell
- SD3.5 Medium (not compared): Stability Community Licence, free under USD 1M revenue, gated. https://huggingface.co/stabilityai/stable-diffusion-3.5-medium

## Checks to run first (one Kaggle notebook)
1. klein 4B fp16 with offload, 1536x1024, 4 steps, one reference: time it, look for black/NaN output.
2. If fp16 fails: text encoder and VAE fp32; if still bad, go to SDXL fallback.
3. Compare plate to reference by eye (no numeric style check exists).
