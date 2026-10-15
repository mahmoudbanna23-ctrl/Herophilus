"""make-near-d.py  try 3 of the shot 1 near-cloud layer, cut from the base plate.

Changes vs make-near-from-base.py: crop starts lower (src row 690, below the dark
sea band), luminance gate over the WHOLE crop built at low resolution (so dark
sea clears everywhere, no straight edge), ramp top wobbled by low-frequency
noise, alpha floor 0.15 -> 0 then a light re-blur. Pillow + numpy only.
"""
import os
import numpy as np
from PIL import Image, ImageFilter

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "shot1-sky-dark-d.png")
OUT_PNG = os.path.join(HERE, "shot1-cloud-near-d.png")
OUT_WEBP = os.path.join(HERE, "shot1-web", "shot1-near-d.webp")
PREV = os.path.join(HERE, "..", "build", "shot1-cloudfix3-preview")
W, H = 1536, 1024
CROP_TOP = 690
STRETCH = 1.3
DARKEN = 0.92
FADE_FRAC = 0.35
FLOOR = 0.15


def luma(a):
    return 0.299 * a[..., 0] + 0.587 * a[..., 1] + 0.114 * a[..., 2]


def sstep(x):
    x = np.clip(x, 0, 1)
    return x * x * (3 - 2 * x)


def gblur(a, sigma):
    r = int(3 * sigma) + 1
    k = np.exp(-0.5 * (np.arange(-r, r + 1) / sigma) ** 2)
    k /= k.sum()
    p = np.pad(a, ((r, r), (r, r)), mode="edge")
    p = np.apply_along_axis(lambda v: np.convolve(v, k, "valid"), 0, p)
    p = np.apply_along_axis(lambda v: np.convolve(v, k, "valid"), 1, p)
    return p


def lowres_blur_up(arr, f, blur):
    h, w = arr.shape
    ph, pw = -h % f, -w % f
    p = np.pad(arr.astype(np.float32), ((0, ph), (0, pw)), mode="edge")
    H2, W2 = p.shape
    sm = p.reshape(H2 // f, f, W2 // f, f).mean(axis=(1, 3))
    sm = gblur(sm, blur).astype(np.float32)
    up = Image.fromarray(sm, "F").resize((W2, H2), Image.BICUBIC)
    return np.asarray(up, dtype=np.float32)[:h, :w]


def main():
    base = Image.open(SRC).convert("RGB")
    assert base.size == (W, H)
    bank = base.crop((0, CROP_TOP, W, H)).transpose(Image.FLIP_LEFT_RIGHT)
    PH = int(round((H - CROP_TOP) * STRETCH))
    bank = bank.resize((W, PH), Image.LANCZOS)
    rgb = np.asarray(bank, dtype=np.float32)
    L = luma(rgb)

    # whole-crop luminance gate at low res: dark sea -> clear
    Ls = lowres_blur_up(L, 8, 1.5)
    gate = sstep((Ls - 42.0) / 36.0)
    # brightness shaping (bright tops stay, mid gaps thin)
    p10, p90 = np.percentile(Ls, [10, 90])
    l = np.clip((Ls - p10) / max(p90 - p10, 1.0), 0, 1)
    mask = 0.15 + 1.6 * l

    # ramp with wobbling top edge (low-frequency noise, +-18 px)
    rng = np.random.default_rng(7)
    n = rng.standard_normal((PH, W)).astype(np.float32)
    n = lowres_blur_up(n, 8, 2.0)
    n = n / max(np.abs(n).max(), 1e-6)
    fade_h = PH * FADE_FRAC
    y = np.arange(PH, dtype=np.float32)[:, None] + 18.0 * n
    ramp = sstep(y / fade_h)

    alpha = np.where(ramp >= 1.0, 1.0, np.clip(ramp * mask, 0, 1)) * gate
    alpha[alpha < FLOOR] = 0.0
    a_img = Image.fromarray((alpha * 255).round().astype(np.uint8), "L").filter(ImageFilter.GaussianBlur(2))
    alpha = np.asarray(a_img, dtype=np.float32) / 255.0

    col = np.clip(rgb * DARKEN, 0, 255)
    canvas = np.zeros((H, W, 4), dtype=np.uint8)
    canvas[H - PH:] = np.dstack([col, alpha * 255.0]).round().astype(np.uint8)
    near = Image.fromarray(canvas, "RGBA")
    near.save(OUT_PNG)
    near.save(OUT_WEBP, "WEBP", quality=82, method=6)

    A = canvas[..., 3].astype(np.float32) / 255.0
    Ap = A[H - PH:]
    print("crop src rows %d..%d, placed %dx%d at y=%d" % (CROP_TOP, H, W, PH, H - PH))
    print("png", os.path.getsize(OUT_PNG), "webp", os.path.getsize(OUT_WEBP))
    print("alpha whole: mean %.3f clear(<=.02) %.1f%% >0.9 %.1f%%" % (A.mean(), 100 * (A <= .02).mean(), 100 * (A > .9).mean()))
    print("alpha bank : mean %.3f clear %.1f%% >0.9 %.1f%% in(.02,.15] %.2f%%" % (Ap.mean(), 100 * (Ap <= .02).mean(), 100 * (Ap > .9).mean(), 100 * ((Ap > .02) & (Ap <= .15)).mean()))
    dark = (luma(canvas[..., :3].astype(np.float32)) < 40) & (A > 0.3)
    print("dark(<40 luma) pixels with alpha>0.3: %.3f%% of bank" % (100 * dark[H - PH:].mean()))
    rm = Ap.mean(axis=1)
    print("max adjacent-row jump of row-mean alpha: %.3f" % np.abs(np.diff(rm)).max())
    # straight-edge probe: rows where >60% of columns step by >0.25 in alpha vs row above
    d = np.abs(np.diff(Ap, axis=0)) > 0.25
    print("max share of columns with >0.25 alpha step in one row: %.1f%%" % (100 * d.mean(axis=1).max()))

    os.makedirs(PREV, exist_ok=True)
    def comp(sf, sc=1.0):
        lay = near
        if sc != 1.0:
            nw, nh = int(round(W * sc)), int(round(H * sc))
            lay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
            lay.paste(near.resize((nw, nh), Image.LANCZOS), ((W - nw) // 2, H - nh))
        sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        sh.paste(lay, (0, int(round(H * sf))))
        return Image.alpha_composite(base.convert("RGBA"), sh).convert("RGB")
    for name, sf, sc in (("start", .45, 1.0), ("mid", .20, 1.0), ("end", 0.0, 1.15)):
        im = comp(sf, sc)
        p = os.path.join(PREV, name + ".jpg")
        im.save(p, quality=88)
        print(name, "luma %.1f size %d" % (luma(np.asarray(im, dtype=np.float32)).mean(), os.path.getsize(p)))
    print("base luma %.1f" % luma(np.asarray(base, dtype=np.float32)).mean())


main()
