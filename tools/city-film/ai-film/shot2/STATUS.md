# Shot 2 film (lighthouse glide + sink into mist) - STATUS

Brief: `progress/redesign/build/shot2-film-BRIEF.md`. Trial copy only. Kaggle slug `hero-city-shot2`, input dataset `hero-city-shot2-in` (made by the runner).

- 2026-10-14 read brief + landing recipe. Quota before launch: GPU 3.79 h of 30 h.
- 2026-10-14 made `shot2-pharos-dark-r2-720x480.jpg` (ffmpeg lanczos from the approved r2 plate; looked at once, whole painting, tower + cloud bank at bottom intact).
- 2026-10-14 `shot2.py` = landing.py with: new input, one forward-glide prompt, seeds a=11 / b=23, no smoke, no Wan 2.1 fallback, plus one optional Real-ESRGAN x2 (realesr-animevideov3, SRVGGNetCompact inlined, no pip pkg) step on both clips in a subprocess. `item.json` timeoutSec 4500.
- 2026-10-14 first runner call refused: budget 4.9 < 3.79 + 1.25 (timeoutSec 4500). Nothing launched. Relaunched with budget arg 5.1 (kernel timeout 4500 s is the real cap): `node kaggle-run.mjs item.json 'D:/scratch 2026/city-ai/shot2' 5.1`, runner log `D:/scratch 2026/city-ai/shot2-runner.log`, cwd = this folder. Kernel RUNNING. Do NOT launch again while status RUNNING / runner log empty.
- 2026-10-14 launch finished ok, 1992 s wall. Quota 3.79 h -> 4.33 h = 0.54 GPU h. Clip a (seed 11) 789 s worker, b (seed 23) 817 s, no OOM, frames_ok both. Upscale (animevideov3, inlined net, weights matched) worked on BOTH clips: 22 s each, 81 f, 1440x960. Files in D:/scratch 2026/city-ai/shot2/: raw-rise-a/b.mp4 (clips), up2x-a/b.mp4, frame-{a,b}-{first,mid,last}.png, settings-*.json, run.log. Next: checks + joins.

## Shot 2 run result (2026-10-14, one launch)
- Clips (81 f, 720x480, 24 fps, played forward): D:/scratch 2026/city-ai/shot2/shot2-a.mp4 (seed 11), shot2-b.mp4 (seed 23); upscaled x2 1440x960: shot2-up-a.mp4, shot2-up-b.mp4. Contact sheets (frames 0/20/45/65/80): contact-shot2-a.png, contact-shot2-b.png.
- GPU 3.79 -> 4.33 h (0.54 h). Prompt: forward crane glide, sink into mist (see shot2.py PROMPT_A). Negatives are ignored at guidance 1.
- Luma (YAVG, mp4) f0/f20/f45/f65/f80: a 71.9/74.5/77.1/78.0/78.2; b 71.9/75.1/76.9/77.8/78.6. Frame PNG last-frame whole mean/std: a 72.4/39.8, b 72.9/36.5 (first 65.0/39.3). Upper-half mean first->last: a 38.5->44.9, b 38.8->66.9.
- NOT MET: last frame is NOT all cloud. Tower lantern/top still visible in both (a: whole tower + city edge; b: lantern + top tier only, city gone). Tower keeps tiers and stays straight in both.
- Joins (1440x960, crf 19, 184 f = 81+117-14): join-a.mp4, join-b.mp4, join-up-b.mp4 (+ join-*-seam.png). Seam (last clip frame vs first landing-a frame) mean luma / mean abs diff: a 70.9 vs 99.9 / 42.1; b 71.5 vs 99.9 / 37.1; up-b 72.1 vs 99.9 / 37.2. Landing-a opens in brighter, tower-less mist with a smeared lamp streak, so the crossfade ghosts a visible tower into mist.
- Live folder check (git status | grep metadata|kernel|wan): clean. No git run by me.
