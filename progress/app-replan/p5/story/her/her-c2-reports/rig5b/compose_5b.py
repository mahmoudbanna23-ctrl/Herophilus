# compose_5b.py - rig 5b sheets from the raw tiles of `rig_her.py --stage review` (PIL).
#   python compose_5b.py        -> arm_deform_close.png, walk_contact_sheet.png, rest_front_diff.png
import os, json
from PIL import Image, ImageDraw, ImageFont, ImageChops

D = os.path.dirname(os.path.abspath(__file__))
R = os.path.join(D, '_review')
idx = json.load(open(os.path.join(R, 'index.json')))
try:
    F = ImageFont.truetype('arial.ttf', 18); FB = ImageFont.truetype('arialbd.ttf', 22)
except OSError:
    F = FB = ImageFont.load_default()

# arm_deform_close: rows = joint at its extreme, cols = front / side of that arm
T = 420
rows = idx['deform']
sh = Image.new('RGB', (2 * T, 40 + len(rows) * T), (24, 22, 20)); dr = ImageDraw.Draw(sh)
dr.text((8, 8), 'rig 5b - arm joints at their measured extremes, close (front | side of that arm)', fill=(255, 255, 255), font=FB)
for r, (lab, f, i) in enumerate(rows):
    for c, v in enumerate(('front', 'side')):
        im = Image.open(os.path.join(R, 'deform_%02d_%s.png' % (i, v))).convert('RGB').resize((T, T), Image.LANCZOS)
        sh.paste(im, (c * T, 40 + r * T))
    dr.text((6, 40 + r * T + 4), '%s  (f%d)' % (lab, f), fill=(255, 220, 120), font=F)
sh.save(os.path.join(D, 'arm_deform_close.png')); print('arm_deform_close', sh.size)

# walk_contact_sheet: one gait cycle (R contact -> L contact + 12), every 2nd frame; side row, three-quarter row
W = 300; fr = idx['walk']
sh = Image.new('RGB', (len(fr) * W, 40 + 2 * W), (24, 22, 20)); dr = ImageDraw.Draw(sh)
dr.text((8, 8), 'rig 5b - walk, one gait cycle, every 2nd frame (top: her right side, bottom: three-quarter)',
        fill=(255, 255, 255), font=FB)
for c, f in enumerate(fr):
    for r, v in enumerate(('side', 'tq')):
        im = Image.open(os.path.join(R, 'walk_%03d_%s.png' % (f, v))).convert('RGB').resize((W, W), Image.LANCZOS)
        sh.paste(im, (c * W, 40 + r * W))
    dr.text((c * W + 6, 44), 'f%d' % f, fill=(255, 220, 120), font=F)
sh.save(os.path.join(D, 'walk_contact_sheet.png')); print('walk_contact_sheet', sh.size)

# rest_front_diff: rig 5b rest_front vs test 8 her_front. Left: test 8, middle: rig 5b, right: |diff| x8 on a
# dimmed test 8 with every pixel over 12/255 in red
A = Image.open(os.path.join(D, 'rest_front.png')).convert('RGB')
B = Image.open('D:/scratch 2026/her-c2/test8/her_front.png').convert('RGB')
assert A.size == B.size, (A.size, B.size)
d = ImageChops.difference(A, B)
dm = d.split(); dmax = ImageChops.lighter(ImageChops.lighter(dm[0], dm[1]), dm[2])
n12 = sum(1 for p in dmax.getdata() if p > 12); mx = max(dmax.getdata())
amp = dmax.point(lambda p: min(255, p * 8))
base = Image.blend(B.convert('L').convert('RGB'), Image.new('RGB', B.size, (0, 0, 0)), 0.6)
red = Image.new('RGB', B.size, (255, 40, 40))
over = Image.composite(red, base, dmax.point(lambda p: 255 if p > 12 else 0))
over = Image.composite(Image.merge('RGB', (amp, amp, amp)), over, amp.point(lambda p: 255 if 0 < p and p <= 96 else 0))
S = 700
sh = Image.new('RGB', (3 * S, S + 44), (24, 22, 20)); dr = ImageDraw.Draw(sh)
for c, im in enumerate((B, A, over)):
    sh.paste(im.resize((S, S), Image.LANCZOS), (c * S, 44))
dr.text((8, 10), 'test 8 her_front | rig 5b rest_front | diff: %d px over 12/255 (red), max %d/255 (grey = |diff| x8)'
        % (n12, mx), fill=(255, 255, 255), font=FB)
sh.save(os.path.join(D, 'rest_front_diff.png')); print('rest_front_diff', sh.size, n12, mx)
