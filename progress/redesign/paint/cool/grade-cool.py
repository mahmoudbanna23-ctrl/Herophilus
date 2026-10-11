"""Cool the three dark-look paintings: a split tone by brightness.

Reads ALWAYS from ./src (the untouched warm files) and writes into app/assets/hall
(or into $COOL_OUT if set, for trial runs), so a re-run never grades a graded file.

Shadows and mid-tones move toward night blue; the brightest lamp light keeps its warm
colour. The blend weight is a smooth function of luminance (no threshold).
Usage: python grade-cool.py            -> writes app/assets/hall/*.jpg
       python grade-cool.py --measure  -> numbers only, no write
"""
import os, sys, json
import numpy as np
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, 'src')
DST = os.environ.get('COOL_OUT') or os.path.normpath(os.path.join(HERE, '..', '..', '..', '..', 'app', 'assets', 'hall'))
FILES = ['hall-dark.jpg', 'hall-dark-tall.jpg', 'outside-dark.jpg']

# knobs (tuned against the measured targets in the brief)
TINT = np.array([0.60, 1.04, 1.83], dtype=np.float64)  # night blue, ratio r:g:b (~ #0f1a2e)
TINT = TINT / (0.2126 * TINT[0] + 0.7152 * TINT[1] + 0.0722 * TINT[2])  # luminance 1 -> grading keeps luminance
LO = float(os.environ.get('COOL_LO', 62))   # below this luminance (0-255) the tint is at full strength
HI = float(os.environ.get('COOL_HI', 125))  # above this the original colour is untouched
STRENGTH = float(os.environ.get('COOL_STR', 0.94))
LUMGAIN = float(os.environ.get('COOL_LUM', 0.9))  # luminance multiplier inside the tinted weight

def smooth(a, b, x):
    t = np.clip((x - a) / (b - a), 0, 1)
    return t * t * (3 - 2 * t)

def lum(rgb):  # rgb float 0-255 -> Y 0-255 (Rec.709 on the stored values, same as the measurements)
    return 0.2126 * rgb[..., 0] + 0.7152 * rgb[..., 1] + 0.0722 * rgb[..., 2]

def grade(a):
    y = lum(a)
    w = (1 - smooth(LO, HI, y)) * STRENGTH
    cool = np.clip((y * LUMGAIN)[..., None] * TINT, 0, 255)
    return a * (1 - w[..., None]) + cool * w[..., None]

def hsl(rgb):
    r, g, b = [c / 255 for c in rgb]
    mx, mn = max(r, g, b), min(r, g, b)
    l = (mx + mn) / 2
    if mx == mn: return 0.0, 0.0, l
    d = mx - mn
    s = d / (2 - mx - mn) if l > .5 else d / (mx + mn)
    h = ((g - b) / d) % 6 if mx == r else ((b - r) / d + 2 if mx == g else (r - g) / d + 4)
    return h * 60, s, l

def measure(a):
    y = lum(a).ravel()
    flat = a.reshape(-1, 3)
    order = np.argsort(y)
    n = len(y)
    dark = flat[order[: n // 3]].mean(0)
    top = flat[order[-(n // 20):]].mean(0)
    h1, s1, l1 = hsl(dark)
    h2, s2, l2 = hsl(top)
    return {
        'dark3_hex': '#%02x%02x%02x' % tuple(int(round(v)) for v in dark),
        'dark3_hue': round(h1, 1), 'dark3_sat': round(s1, 2), 'dark3_light': round(l1, 3),
        'top5_hex': '#%02x%02x%02x' % tuple(int(round(v)) for v in top),
        'top5_hue': round(h2, 1),
        'pct_lum_lt8': round(float((y < 8).mean()) * 100, 2),
    }

if __name__ == '__main__':
    only_measure = '--measure' in sys.argv
    rep = {}
    for f in FILES:
        sp = os.path.join(SRC, f)
        a = np.asarray(Image.open(sp).convert('RGB'), dtype=np.float64)
        before = measure(a)
        g = grade(a)
        g8 = np.clip(np.rint(g), 0, 255).astype(np.uint8)
        out = os.path.join(DST, f)
        if not only_measure:
            Image.fromarray(g8, 'RGB').save(out, 'JPEG', quality=int(os.environ.get('COOL_Q', 90)), subsampling=2, optimize=True)
            after = measure(np.asarray(Image.open(out).convert('RGB'), dtype=np.float64))
            rep[f] = {'before': before, 'after': after, 'size_before': os.path.getsize(sp), 'size_after': os.path.getsize(out),
                      'px': list(Image.open(out).size)}
        else:
            rep[f] = {'before': before, 'after': measure(g8.astype(np.float64))}
    print(json.dumps(rep, indent=1))
