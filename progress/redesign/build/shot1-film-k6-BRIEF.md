# Phase 2 step 4, retry: shot 1 film from plate k6 (builder brief)

ROUTE-OK: gateway down.

## §0 Marching orders
- Hand back at ~50 tool calls, stopped by 70. Write status to
  `progress/redesign/build/shot1-film-k6-STATUS.md` AS YOU GO.
- Work ONLY in `D:\claude os\Medical school\Herophilus-redesign`. NEVER write in
  `D:\claude os\Medical school\Herophilus` (live copy). No git.
- Kaggle: at most 2 launches, budget 1.0 GPU h, via
  `node "D:\claude os\Tools\factory\kaggle-run.mjs" <item.json> <out dir> <budget h>` with
  `PYTHONUTF8=1`. Any direct `kaggle` CLI call takes `-p` with a dir inside the trial copy.
  Private only, never `--public`.
- D: is tight: final outputs only, no frame dumps. Do not open images; do not judge the look
  beyond plays / right length and size / not black / not frozen. A looker judges.

## Owner decision (2026-10-15)
The owner saw the two k8 takes and said "try again with the other picture": the runner-up plate
`progress/redesign/paint/kaggle/shot1-sky-dark-k6.png`. Its notes:
`progress/redesign/build/shot1-kaggle-LOOK.md` "### k6" — horizon ~27% (matches shot 2), lighthouse
~20% from left rising from the cloud edge and already fairly large, thin jetty with ~7 lamps at
right, cloud bank below the horizon.

## The job
1. Copy `tools/city-film/ai-film/shot1/` (the k8 run, which worked: read its `STATUS.md`,
   `item.json`, top of `shot1.py`) to `tools/city-film/ai-film/shot1-k6/` without its `out/`.
   Slug `hero-city-shot1-k6`, private. Input plate = k6, prepared exactly as k8 was (720x480).
2. Prompt, adapted to k6 and to the k8 looker's findings
   (`progress/redesign/build/shot1-film-LOOK.md`): the camera dives forward and down into the
   cloud bank; the lighthouse light stays on the LEFT and stays in frame to the end (it drifted
   off the top in k8 take A); the last second is fully inside soft cloud, no sea or lamp strip
   left at the top (k8 take B kept one). No new objects, birds, moon, text; gouache look kept.
3. Two seeds (11 and 24, same as before), Real-ESRGAN x2, every other setting as the k8 run.
4. Outputs in `tools/city-film/ai-film/shot1-k6/out/`, same names as the k8 run: `up2x-a.mp4`,
   `up2x-b.mp4`, `preview-{a,b}-720.mp4`, `still-up-{a,b}-{first,mid,last}.png`.

## Report back (short)
Paths + sizes, seconds and GPU h used, launches used, anything that failed.
