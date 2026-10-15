# Kaggle paint kit - STATUS

Brief: `progress/redesign/build/kaggle-paint-BRIEF.md`. Trial copy only, no git.

- 2026-10-14 read brief, research, ai-film README, shot2 item + script, prompts, LOOK note. Quota before: GPU 4.33 h of 30 h. Job cap 1.5 h -> runner budget arg 5.83 (absolute), launches of 1800 s each (max 3).
- 2026-10-14 wrote `tools/kaggle/paint/`: paint.py, jobs.json (4 seeds of shot1-sky-dark), item.json (slug hero-paint, timeout 1800), city-dark-3.png (input copy). Read diffusers 0.41.0 Flux2KleinPipeline source (pip download to scratchpad) to wire the call.
- 2026-10-14 LAUNCH 1 of 3 started (runner, budget 5.83, out `D:/scratch 2026/kaggle-paint/run1`, runner log `run1-runner.log`). Do NOT relaunch while it runs.
- 2026-10-14 LAUNCH 1 DONE ok, 452 s wall. Quota 4.33 -> 4.44 h (0.11 GPU h). Rung klein-fp16 made all 4 (no fallback needed, SDXL code never ran). 4 PNGs 1536x1024 in `progress/redesign/paint/kaggle/` + `shot1-sky-dark-k.json` + `run1.log`; mean 54-67, std 33-40, all finite. Looked at k1 only: it is a painting; lighthouse shows a small tower, not only a spark (looker to judge). Launches 2-3 unused. README written.
- 2026-10-14 ROUND 2 (coordinator, per `shot1-kaggle-LOOK.md`): paint.py now takes `ref` as a list (klein multi-reference); jobs.json = k5-k8 with refs city-dark-3 + shot2-pharos-dark-r2, new prompt (indigo/navy + amber, faint amber haze on coast, broad soft gouache cloud masses, plain dot stars/lamps, irregular lamps clustered at Pharos side). Round 1 list kept as `jobs-round1.json`. LAUNCH 2 of 3 started, out `D:/scratch 2026/kaggle-paint/run2`. Do NOT relaunch while it runs.
- 2026-10-14 LAUNCH 2 DONE ok, 581 s wall. Quota 4.44 -> 4.58 h (0.14 GPU h; job total 0.25 h of 1.5). Rung klein-fp16, 2 references fit (peak 9.2 GiB, about 71 s per image). Prompt 446 tokens (under 512, not truncated). k5-k8 in `progress/redesign/paint/kaggle/` + `shot1-sky-dark-k5-8.json` + `run2.log`; mean 65-72, std 31-36, all finite, 1536x1024. NOT looked at by me (looker judges). k1-k4 kept. Launch 3 unused.
- (older note) Not verified before launch: HF repo gating / file list (outbound curl denied), klein fp16 NaN behaviour, speed on T4.
