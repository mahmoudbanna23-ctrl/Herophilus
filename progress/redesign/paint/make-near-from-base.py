"""make-near-from-base.py

Builds the shot 1 near-cloud layer from the base plate's own cloud bank, so
brushwork and colour match by construction.

Input  shot1-sky-dark-d.png (1536x1024).
Steps  crop rows 52%..bottom, mirror horizontally, upscale to 1536x640
       (Lanczos), place at the bottom of a transparent 1536x1024 canvas.
Alpha  opaque at the bottom; top 35% of the placed bank fades with a vertical
       ramp multiplied by a mask from the cloud's own luminance (bright tops
       stay, dark gaps clear), then a 3 px blur. Colour darkened 8%.
Output shot1-cloud-near-c.png, shot1-web/shot1-near-c.webp (q82),
       previews in ../build/shot1-cloudfix2-preview/.
Pillow + numpy only.
"""
import os
import numpy as np
from PIL import Image, ImageFilter

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "shot1-sky-dark-d.png")
OUT_PNG = os.path.join(HERE, "shot1-cloud-near-c.png")
OUT_WEBP = os.path.join(HERE, "shot1-web", "shot1-near-c.webp")
PREV = os.path.join(HERE, "..", "build", "shot1-cloudfix2-preview")

W, H = 1536, 1024
BANK_TOP = 0.52
PLACED_H = 640
FADE_FRAC = 0.35
DARKEN = 0.92


def luma(a):
    return 0.299 * a[..., 0] + 0.587 * a[..., 1] + 0.114 * a[..., 2]


def main():
    base = Image.open(SRC).convert("RGB")
    assert base.size == (W, H), base.size
    top = int(round(H * BANK_TOP))
    bank = base.crop((0, top, W, H)).transpose(Image.FLIP_LEFT_RIGHT)
    bank = bank.resize((W, PLACED_H), Image.LANCZOS)
    rgb = np.asarray(bank, dtype=np.float32)

    # luminance mask, normalised on the bank's own range
    L = luma(rgb)
    p10, p90 = np.percentile(L, [10, 90])
    l = np.clip((L - p10) / max(p90 - p10, 1.0), 0, 1)
    mask = 0.15 + 1.6 * l  # dark gaps ~0.15, bright tops >1

    fade_h = int(round(PLACED_H * FADE_FRAC))
    ramp = np.ones(PLACED_H, dtype=np.float32)
    t = np.linspace(0, 1, fade_h, dtype=np.float32)
    ramp[:fade_h] = t * t * (3 - 2 * t)  # smoothstep
    alpha = np.where(ramp[:, None] >= 1.0, 1.0, np.clip(ramp[:, None] * mask, 0, 1))

    a_img = Image.fromarray((alpha * 255).round().astype(np.uint8), "L")
    a_img = a_img.filter(ImageFilter.GaussianBlur(3))
    alpha = np.asarray(a_img, dtype=np.float32) / 255.0

    col = np.clip(rgb * DARKEN, 0, 255)
    layer = np.dstack([col, alpha * 255.0]).round().astype(np.uint8)
    canvas = np.zeros((H, W, 4), dtype=np.uint8)
    canvas[H - PLACED_H:] = layer
    near = Image.fromarray(canvas, "RGBA")
    near.save(OUT_PNG)
    near.save(OUT_WEBP, "WEBP", quality=82, method=6)

    A = canvas[..., 3].astype(np.float32) / 255.0
    print("png", os.path.getsize(OUT_PNG), "bytes; webp", os.path.getsize(OUT_WEBP), "bytes")
    print("alpha mean %.3f  clear(<=0.02) %.1f%%  >0.9 %.1f%%  (whole canvas)" %
          (A.mean(), 100 * (A <= 0.02).mean(), 100 * (A > 0.9).mean()))
    Ap = A[H - PLACED_H:]
    print("alpha placed-bank only: mean %.3f clear %.1f%% >0.9 %.1f%%" %
          (Ap.mean(), 100 * (Ap <= 0.02).mean(), 100 * (Ap > 0.9).mean()))

    # previews
    os.makedirs(PREV, exist_ok=True)
    def comp(shift_frac, scale=1.0):
        lay = near
        if scale != 1.0:
            nw, nh = int(round(W * scale)), int(round(H * scale))
            big = near.resize((nw, nh), Image.LANCZOS)
            lay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
            lay.paste(big, ((W - nw) // 2, H - nh))  # about bottom centre
        out = base.convert("RGBA")
        sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        sh.paste(lay, (0, int(round(H * shift_frac))))
        out = Image.alpha_composite(out, sh).convert("RGB")
        return out
    for name, sf, sc in (("start", 0.45, 1.0), ("mid", 0.20, 1.0), ("end", 0.0, 1.15)):
        im = comp(sf, sc)
        p = os.path.join(PREV, name + ".jpg")
        im.save(p, quality=88)
        print(name, "mean luma %.1f  size %d" % (luma(np.asarray(im, dtype=np.float32)).mean(), os.path.getsize(p)))
    print("base mean luma %.1f" % luma(np.asarray(base, dtype=np.float32)).mean())


if __name__ == "__main__":
    main()
