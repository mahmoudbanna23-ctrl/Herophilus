"""make-cloud-alpha.py <in.png> <out.png>

Black background -> transparent, soft edges kept. Alpha is a smooth ramp on the
brightest channel (distance from black), not a hard threshold. Colour is
un-premultiplied (rgb / alpha) so the cloud does not gain a dark fringe when
laid over the sky plate. Pillow + numpy only.
"""
import sys
import numpy as np
from PIL import Image

LO = 6.0    # at or below this peak-channel value: fully transparent
HI = 70.0   # at or above this: fully opaque


def main(src, dst):
    im = Image.open(src).convert("RGB")
    rgb = np.asarray(im, dtype=np.float32)
    peak = rgb.max(axis=2)
    t = np.clip((peak - LO) / (HI - LO), 0.0, 1.0)
    alpha = t * t * (3.0 - 2.0 * t)  # smoothstep
    a = np.maximum(alpha, 1e-4)[..., None]
    # cloud pixels are premultiplied against black: recover colour, cap at 255
    col = np.clip(rgb / a, 0, 255)
    col = np.where(alpha[..., None] > 0, col, 0)
    out = np.dstack([col, alpha * 255.0]).round().astype(np.uint8)
    Image.fromarray(out, "RGBA").save(dst)
    print(dst, out.shape[1], "x", out.shape[0],
          "alpha min/mean/max", out[..., 3].min(), round(float(out[..., 3].mean()), 1), out[..., 3].max())


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
