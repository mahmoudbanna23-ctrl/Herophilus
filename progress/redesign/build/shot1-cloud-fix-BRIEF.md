# Shot 1 near-cloud layer: fix on the computer, no repaint (builder brief)

ROUTE-OK: gateway down.

## §0 Marching orders
- Hand back at ~30 tool calls, stopped by 45. Write status to
  `progress/redesign/build/shot1-cloud-fix-STATUS.md` AS YOU GO.
- Work ONLY in `D:\claude os\Medical school\Herophilus-redesign`. NEVER write in the live
  `D:\claude os\Medical school\Herophilus`. No git. No Codex, no painting. Do NOT touch `app/`.
- Do not open images. Numbers only (sizes, alpha stats, luma). A looker judges.
- Never overwrite an existing file; new names only.

## Owner decisions (2026-10-15)
- Base plate is now `paint/shot1-sky-dark-d.png` (owner: "good enough").
- The MIDDLE cloud layer is dropped (looker: wrong texture, hard alpha, hides the spark and lamps).
- The near cloud stays, fixed by script. The end of shot 1 is hidden by the app's existing painted
  cloud cover, so the near layer does NOT need to cover the whole frame.

## Read first (narrow)
- `build/shot1-layers-LOOK.md` — the near-layer findings and the "fixes with no repaint" list.
- `paint/make-cloud-alpha.py` — the alpha method already used.

## The job (in `progress/redesign/paint/`)
1. New script `fix-near-cloud.py` (Pillow + numpy only), input `shot1-cloud-near.png` (black bg),
   output `shot1-cloud-near-b.png` (RGBA, 1536x1024):
   - alpha floor: remap so faint alpha (below ~0.12) goes to 0 — removes the plum smudges;
   - feather: small blur on alpha so no hard cut edge;
   - tint colour toward the base plate's cloud colours (sample mean RGB of the base's lower 45%
     from `shot1-sky-dark-d.png` and blend ~40% toward it) so it does not read plum.
   Print alpha stats (mean, % fully clear, % above 0.9) and mean RGB before/after.
2. Web copies for the page, new folder `paint/shot1-web/`:
   - `shot1-base.jpg` from `shot1-sky-dark-d.png`, quality 86, 1536x1024;
   - `shot1-near.webp` from `shot1-cloud-near-b.png`, lossy with alpha, quality 82.
   Report each file size (target: base under 450 KB, near under 350 KB; say if over).
3. Three preview composites, new folder `build/shot1-cloudfix-preview/`, 1536x1024 JPG:
   `start.jpg` (near layer shifted down 55% of height), `mid.jpg` (shifted down 25%), `end.jpg`
   (shift 0, scaled 1.15 about the bottom centre). Base under it, unchanged.
   Report mean luma of each.

## Report back (short)
Paths + sizes, alpha stats, luma per preview, anything that went wrong.
