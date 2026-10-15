"""fix-near-cloud.py  (no args; run from paint/)

shot1-cloud-near.png (cloud on black) -> shot1-cloud-near-b.png (RGBA 1536x1024)

1. alpha from peak channel (same smoothstep as make-cloud-alpha.py), colour un-premultiplied
2. alpha floor: faint alpha below FLOOR goes to 0, rest remapped to 0..1 (kills plum smudges)
3. feather: small gaussian blur on alpha (no hard cut edge)
4. tint: shift colour 40% of the way toward the mean RGB of the base plate's lower 45%
   (a mean shift, not a flat blend, so the brushwork inside the cloud survives)

Pillow + numpy only.
"""
import numpy as np
from PIL import Image, ImageFilter

SRC = "shot1-cloud-near.png"
BASE = "shot1-sky-dark-d.png"
DST = "shot1-cloud-near-b.png"

LO, HI = 6.0, 70.0   # same ramp as make-cloud-alpha.py
FLOOR = 0.12
FEATHER = 2.5        # px, gaussian radius on alpha
TINT = 0.40


def stats(tag, a, rgb):
    w = a.astype(np.float64)
    mean_rgb = (rgb * w[..., None]).sum(axis=(0, 1)) / max(w.sum(), 1e-9)
    print(f"{tag}: alpha mean {a.mean():.4f}  clear(==0) {100*(a<=0.0).mean():.2f}%  "
          f"above0.9 {100*(a>0.9).mean():.2f}%  alpha-weighted mean RGB "
          f"{mean_rgb[0]:.1f},{mean_rgb[1]:.1f},{mean_rgb[2]:.1f}")
    return mean_rgb


def main():
    rgb0 = np.asarray(Image.open(SRC).convert("RGB"), dtype=np.float32)
    h, w, _ = rgb0.shape
    peak = rgb0.max(axis=2)
    t = np.clip((peak - LO) / (HI - LO), 0.0, 1.0)
    a0 = t * t * (3.0 - 2.0 * t)
    col = np.clip(rgb0 / np.maximum(a0, 1e-4)[..., None], 0, 255)
    before = stats("before", a0, col)

    # 2. floor
    a = np.clip((a0 - FLOOR) / (1.0 - FLOOR), 0.0, 1.0)
    # 3. feather (8-bit L blur; 256 levels is plenty for alpha)
    a8 = Image.fromarray((a * 255).round().astype(np.uint8), "L").filter(ImageFilter.GaussianBlur(FEATHER))
    a = np.asarray(a8, dtype=np.float32) / 255.0

    # 4. tint toward base lower 45%
    base = np.asarray(Image.open(BASE).convert("RGB"), dtype=np.float32)
    base_mean = base[int(base.shape[0] * 0.55):].reshape(-1, 3).mean(axis=0)
    print("base lower-45pct mean RGB %.1f,%.1f,%.1f" % tuple(base_mean))
    mean_near = (col * a0[..., None]).sum(axis=(0, 1)) / a0.sum()
    col = np.clip(col + TINT * (base_mean - mean_near), 0, 255)

    out = np.dstack([col, a * 255.0]).round().astype(np.uint8)
    Image.fromarray(out, "RGBA").save(DST)
    after = stats("after ", a, out[..., :3].astype(np.float32))
    print(DST, w, "x", h)


if __name__ == "__main__":
    main()
