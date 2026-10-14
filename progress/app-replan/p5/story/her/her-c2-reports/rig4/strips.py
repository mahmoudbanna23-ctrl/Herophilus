# strips.py - rig 4 review strips + rest diff (system Python + PIL).  python strips.py
import os
from PIL import Image, ImageChops, ImageDraw, ImageFont

D = os.path.dirname(os.path.abspath(__file__))
try:
    FONT = ImageFont.truetype('arial.ttf', 18)
except OSError:
    FONT = ImageFont.load_default()

def strip(rows, crop, tile_w, title, out):
    """rows: list of (label, [frame numbers]); crop: fractional box on each frame."""
    cols = max(len(r[1]) for r in rows)
    probe = Image.open(os.path.join(D, rows[0][2], '%04d.png' % rows[0][1][0]))
    W, H = probe.size
    box = (int(crop[0] * W), int(crop[1] * H), int(crop[2] * W), int(crop[3] * H))
    th = int(tile_w * (box[3] - box[1]) / (box[2] - box[0]))
    sheet = Image.new('RGB', (cols * tile_w, 36 + len(rows) * (th + 26)), (18, 18, 20))
    dr = ImageDraw.Draw(sheet); dr.text((8, 8), title, fill=(255, 255, 255), font=FONT)
    for r, (lab, fr, sub) in enumerate(rows):
        for c, f in enumerate(fr):
            im = Image.open(os.path.join(D, sub, '%04d.png' % f)).convert('RGB').crop(box).resize((tile_w, th), Image.LANCZOS)
            x, y = c * tile_w, 36 + r * (th + 26)
            sheet.paste(im, (x, y + 24)); dr.text((x + 6, y + 3), '%s f%d' % (lab, f), fill=(255, 220, 120), font=FONT)
    sheet.save(os.path.join(D, out))

# the trailing heel around each opposite heel strike (rig 3 popped at f42-43, 54-55, 66-67, 78-79)
opp = [('R trail', 43), ('L trail', 55), ('R trail', 67), ('L trail', 79)]
strip([(lab, list(range(f - 3, f + 3)), 'frames_side') for lab, f in opp], (0.15, 0.6, 0.85, 1.0), 300,
      'Side view, feet: 6 frames around each opposite heel strike (strike = 4th tile)', 'heel_strike_strip.png')
strip([('wave', list(range(106, 136, 3)), 'frames_tq'), ('wave', list(range(136, 166, 3)), 'frames_tq'),
       ('wave', list(range(166, 191, 3)), 'frames_tq')], (0.1, 0.0, 0.9, 0.8), 240,
      'Wave: anticipation 108-120, raise 116-130, wave 128-156, lower 164-178 (every 3rd frame)', 'wave_strip.png')

a = Image.open(os.path.join(D, 'rest_front.png')).convert('RGB')
b = Image.open('D:/scratch 2026/her-c2/test8/her_front.png').convert('RGB').resize(a.size)
d = ImageChops.difference(a, b).point(lambda v: min(255, v * 8))
d.save(os.path.join(D, 'rest_front_diff.png'))
print('diff bbox', ImageChops.difference(a, b).getbbox())
