# Landing clip (rise into cloud, played reversed) - STATUS

Goal: Wan 2.2 I2V-A14B clips from `city-dark-3.png` (camera rises into cloud); reversed = descent that ends on the painting.
Trial copy only. Kaggle slug `hero-city-landing`, input dataset `hero-city-landing-in` (private, made by the runner).

- 2026-10-14 read README, ai_film.py, item.json, kaggle-run.mjs. Quota before launch: GPU used 3.23h of 30h (weekly).
- 2026-10-14 made `city-dark-3-720x480.jpg` (ffmpeg scale 720x480, whole picture, -q:v 2), landing.py (720x480, 24 fps export, HARD=4900 s, rise prompts, seeds 11 / 22), item.json (timeoutSec 5400).
- Runner budget note: runner refuses when quota-used + timeoutSec/3600 > budget. Used is 3.23h (weekly counter), so a literal budget of 1.5 would always refuse. Budget passed = 4.8 (3.23 + 1.5 cap, rounded up); the 5400 s kernel timeout is what caps this job at 1.5 h.
- 2026-10-14 launch 1 started (node kaggle-run.mjs item.json 'D:/scratch 2026/city-ai/landing' 4.8, log 'D:/scratch 2026/city-ai/landing-runner.log'). Dataset hero-city-landing-in created; kernel RUNNING. Poll: kaggle kernels status mahmoudelbanna23/hero-city-landing (PYTHONUTF8=1). Do NOT launch again while runner log is empty and status RUNNING.
- 2026-10-14 note: a stray 'kaggle datasets metadata' call wrote dataset-metadata.json into the live app folder (cwd); it was untracked, shown isPrivate:true, and was deleted again. Nothing else touched there.
- 2026-10-14 launch 1 finished ok, 2080 s wall. Files downloaded to D:/scratch 2026/city-ai/landing. Next: ffmpeg post-processing + checks.

## Landing run (2026-10-14, one launch, no relaunch needed)
- Runner ok, 2080 s wall. Kaggle GPU quota 3.23 h -> 3.79 h = 0.56 GPU h (limit was 1.5 h).
- Setup: Wan 2.2 I2V-A14B GGUF Q4_K_M + lightx2v 4-step LoRAs, 720x480, 81 frames, 4 passes, guidance 1.0, export 24 fps (3.375 s). Smoke (33 f, seed 11, prompt A) ran first and passed.
- Seconds per clip (worker total): a 709 s, b 710 s. Load 72 s, denoise 501 s, decode 132 s. Passes (s): 170 / 116 / 104 / 111. Peak GPU memory 12.98 GiB (cuda:0) / 12.95 GiB (cuda:1), of 15.
- Seeds: a = 11, b = 22. No OOM, no BAD suffix. The one "ERROR" line in run.log is pip's dependency-resolver warning at install, not a failure.
- Prompt A (RISE-A): Smooth slow crane shot: the camera rises straight up and pulls back from the ancient harbour city at night, the city growing smaller below, thin mist and low cloud drifting in from the edges and thickening until soft cloud covers most of the view. Clear parallax between the lighthouse, the buildings and the water. Waves move and reflections shimmer, the lighthouse fire flickers, lamp lights glimmer. Hand-painted film style, matte finish, rich detail, stable architecture, no people.
- Prompt B (RISE-B): Smooth aerial shot: the camera lifts quickly up and away from the ancient harbour city at night into a layer of cloud, the lighthouse and buildings shrinking below, thick soft cloud rolling across until the whole view is cloud. (same tail as A)
- Numeric checks: rise-a/b.mp4 720x480, 81 frames, 24 fps. landing-a/b.mp4 720x480, 117 frames (81 + 36 hold). Mean luma (YAVG): input JPEG 50.3 (full range); first generated frame a 60.8, b 60.7 (limited-range mp4 -> about 59 expected: match, not inverted); last generated frame a 102.9, b 121.2 (cloud, brighter, not black). Held end frame of landing-a/b = first generated frame (60.8 / 60.7). First-vs-last mean abs diff a 64.8, b 81.4.
- Files, all in D:/scratch 2026/city-ai/landing/: rise-a.mp4, rise-b.mp4, landing-a.mp4, landing-b.mp4, contact-landing-a.png, contact-landing-b.png (5 frames each, reversed clip, no hold), raw-rise-a.mp4, raw-rise-b.mp4, raw-smoke.mp4, frame-{a,b,smoke}-{first,mid,last}.png, settings-{a,b,smoke,all}.json, run.log, hero-city-landing.log. Runner log: D:/scratch 2026/city-ai/landing-runner.log.
- Not judged: picture quality (a separate looker does that). Next: nothing owed.
