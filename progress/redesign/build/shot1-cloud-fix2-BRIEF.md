# Shot 1 near-cloud layer, try 2: cut it from the base plate's own clouds (builder brief)

ROUTE-OK: gateway down.

## §0 Marching orders
- Hand back at ~25 tool calls, stopped by 40. Write status to
  `progress/redesign/build/shot1-cloud-fix2-STATUS.md` AS YOU GO.
- Work ONLY in `D:\claude os\Medical school\Herophilus-redesign`. NEVER the live folder. No git.
  No Codex. Do NOT touch `app/` (another builder is in it; main chat swaps the asset later).
- Do not open images. Numbers only. A looker judges. Never overwrite; new names only.

## Why
Looker (`build/shot1-cloudfix-LOOK.md`): the script-fixed Codex near layer fails — smooth glossy
texture vs the base's stippled dabs, mauve blotches, pale halo. Texture cannot be fixed by script.
So build the near layer FROM the base plate itself: its own painted cloud bank, guaranteed same
brushwork and colour.

## The job (in `progress/redesign/paint/`)
New script `make-near-from-base.py` (Pillow + numpy), input `shot1-sky-dark-d.png` (1536x1024):
1. Take the base's cloud bank: rows from ~52% of height to the bottom. Mirror it horizontally (so
   it does not read as a copy of the bank behind it). Upscale it to 1536 wide x ~640 tall (≈1.3x),
   Lanczos, then place it at the bottom of a 1536x1024 transparent canvas.
2. Alpha: opaque at the bottom; the top ~35% of the placed bank fades out with a BROKEN edge — a
   vertical ramp multiplied by a mask from the cloud's own luminance (brighter cloud tops stay
   more opaque, dark gaps go clear), then a light blur (~3 px). No hard line, no rim.
3. Do not recolour (it is the base's own paint). Optional: darken 8% so it reads as nearer/shadowed
   — say if you did.
4. Save `shot1-cloud-near-c.png` (RGBA) and `shot1-web/shot1-near-c.webp` (lossy + alpha, q82).
   Report size (target under 350 KB).
5. Previews as last time, into `build/shot1-cloudfix2-preview/`: `start.jpg` (layer shifted down
   45% of height), `mid.jpg` (down 20%), `end.jpg` (shift 0, scaled 1.15 about bottom centre),
   base unchanged underneath. Report mean luma each.

## Report back (short)
Paths + sizes, alpha stats (mean, % clear, % >0.9), luma per preview, anything that went wrong.
