# Shot 1 film - STATUS
Brief: progress/redesign/build/shot1-film-BRIEF.md. Plate k8 (owner pick 2026-10-15).
- 2026-10-15 folder made from shot2; plate resized to 720x480 (lanczos).
- 2026-10-15 shot1.py edited (dive prompt, seeds 11/24, plate name), item.json made. Quota before launch: GPU 4.58 h. Launching 1 of 3: budget arg 5.9, out = shot1/out, runner log shot1/out/runner.log
- 2026-10-15 launch 1 RUNNING (kernel mahmoudelbanna23/hero-city-shot1). Do not relaunch while runner.log empty.
- 2026-10-15 launch 1 finished ok, 2259 s wall (about 0.63 GPU h; quota 4.58 -> about 5.2). Launches used 1 of 3. a seed 11 worker 847 s, b seed 24 worker 886 s, no OOM. Upscale x2 ok both, 22 s each.
- Outputs in out/: up2x-a.mp4 (1.6 MB), up2x-b.mp4 (1.4 MB), 1440x960, 81 f, 24 fps, 3.375 s; raw-rise-a/b.mp4 720x480; preview-a-720.mp4, preview-b-720.mp4; still-up-{a,b}-{first,mid,last}.png; frame-*.png (raw clip stills), run.log, settings-*.json.
- Checks (not a look): luma YAVG f0/20/40/60/80 a 76.3/79.4/82.9/87.5/95.9, b 76.2/79.9/84.2/89.0/92.3 (rising, not black); first-vs-last mean abs diff 26.3 / 26.8 (not frozen). Looker judges whether it ends in cloud and the spark stays left.
