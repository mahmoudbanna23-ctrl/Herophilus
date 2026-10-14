# arm_sheet.py - python arm_sheet.py <out.png> <tile> <tag> [<tag2>]   (rows = poses, cols = tag x view)
import os, sys, json
from PIL import Image, ImageDraw, ImageFont
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), '_arms')
out, tile, tags = sys.argv[1], int(sys.argv[2]), sys.argv[3:]
try:
    F = ImageFont.truetype('arial.ttf', max(12, tile // 18))
except OSError:
    F = ImageFont.load_default()
poses = ['rest', 'swing_fwd', 'swing_back', 'wave_top', 'wave_side']
views = ['front', 'side', 'tq']
cols = [(t, v) for t in tags for v in views]
W, H = len(cols) * tile, 30 + len(poses) * tile
sh = Image.new('RGB', (W, H), (18, 18, 20)); dr = ImageDraw.Draw(sh)
for c, (t, v) in enumerate(cols):
    dr.text((c * tile + 6, 6), '%s  %s' % (t, {'front': 'front', 'side': 'side (her right)', 'tq': 'three-quarter'}[v]),
            fill=(255, 255, 255), font=F)
for r, p in enumerate(poses):
    for c, (t, v) in enumerate(cols):
        fr = json.load(open(os.path.join(D, '%s_probe.json' % t)))['frames'].get(p)
        im = Image.open(os.path.join(D, '%s_%s_%s.png' % (t, p, v))).convert('RGB').resize((tile, tile), Image.LANCZOS)
        sh.paste(im, (c * tile, 30 + r * tile))
        dr.text((c * tile + 6, 30 + r * tile + 4), '%s%s' % (p, '' if fr is None else ' f%d' % fr), fill=(255, 220, 120), font=F)
    if len(tags) > 1:
        dr.line([(3 * tile, 30), (3 * tile, H)], fill=(255, 255, 255), width=3)
sh.save(out)
print(out, sh.size)
