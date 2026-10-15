# shot1 cloud-fix2 STATUS

DONE (5 tool calls, no images opened, no git, app/ untouched).

Script: `paint/make-near-from-base.py` (from `shot1-sky-dark-d.png`, rows 52%..bottom, mirrored, 1536x640 Lanczos, bottom-placed).
Alpha: smoothstep ramp over top 35% x luminance mask (0.15 + 1.6 * normalised luma, p10/p90) then 3 px blur. Darkened 8% (only colour change).

Outputs:
- `paint/shot1-cloud-near-c.png` RGBA, 2,050,162 B
- `paint/shot1-web/shot1-near-c.webp` q82 lossy+alpha, 190,364 B (under 350 KB)

Alpha, whole 1536x1024 canvas: mean 0.493, clear (<=0.02) 41.3%, >0.9 45.6%.
Alpha, placed bank only: mean 0.788, clear 6.0%, >0.9 73.0%.

Previews `build/shot1-cloudfix2-preview/` (jpg q88): start 68.0 (shift down 45%), mid 68.8 (down 20%), end 74.8 (shift 0, 1.15x about bottom centre). Base alone 66.7.

Not looked at; a looker must judge.

## Try 3 (coordinator fixes) - DONE

Script `paint/make-near-d.py`. Outputs `paint/shot1-cloud-near-d.png` (1,391,714 B), `paint/shot1-web/shot1-near-d.webp` (121,856 B). Previews `build/shot1-cloudfix3-preview/`.
Crop: base rows 690..1024 (334 rows, below the dark sea band), mirrored, stretched 1.3x to 1536x434, placed at canvas y=590..1024.
Fix 1: luminance gate (smoothstep luma 42..78) over the WHOLE crop at 1/8 res, blurred, upscaled; ramp top wobbled +-18 px by low-freq noise. Dark (<40 luma) pixels with alpha>0.3: 0.011% of bank. Max share of columns with a >0.25 alpha step in any one row: 0.0%. Max adjacent-row jump of row-mean alpha 0.019.
Fix 2: alpha <0.15 set to 0 then 2 px blur. Alpha in (0.02,0.15] left: 1.04% of bank (blur skirts).
Alpha whole canvas: mean 0.336, clear 61.0%, >0.9 27.3%. Bank only: mean 0.792, clear 8.1%, >0.9 64.4%.
Luma: start 66.7, mid 70.1, end 66.0, base 66.7. Still darkened 8%.
WARNING: crop is only 434 px tall, so start (shift down 45% = 461 px) puts the layer fully off-frame (start luma = base). Start shift must be <= ~40% to show any of it. End luma now below base (66.0 vs 66.7): bank covers less and is darkened.
