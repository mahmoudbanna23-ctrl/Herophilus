# compose.py - assembles rig-1 review sheets from the raw Blender renders (system Python + PIL).
#   python compose.py overlay | sheets
import json, os, sys
from PIL import Image, ImageDraw, ImageFont

D = os.path.dirname(os.path.abspath(__file__))
try:
    FONT = ImageFont.truetype('arial.ttf', 22); SMALL = ImageFont.truetype('arial.ttf', 15)
except OSError:
    FONT = SMALL = ImageFont.load_default()

def overlay():
    b2 = json.load(open(os.path.join(D, '_bones2d.json')))
    tiles = []
    for view in ('front', 'side'):
        im = Image.open(os.path.join(D, '_overlay_%s_base.png' % view)).convert('RGB')
        dr = ImageDraw.Draw(im)
        for name, h, t, deform in b2[view]:
            col = (40, 255, 120) if deform else (80, 200, 255)
            dr.line([tuple(h), tuple(t)], fill=col, width=3)
            dr.ellipse([h[0] - 5, h[1] - 5, h[0] + 5, h[1] + 5], outline=(255, 255, 0), width=2)
        for name, h, t, deform in b2[view]:
            if view == 'side' and name.endswith('_R'):
                continue
            if name.startswith(('thumb', 'fingers', 'toe', 'hand')):
                continue
            dr.text((h[0] + 7, h[1] - 9), name, fill=(255, 255, 255), font=SMALL)
        dr.text((12, 10), 'rest pose, %s (green = deform bone, blue = control)' % view, fill=(255, 255, 255), font=FONT)
        tiles.append(im)
    sheet = Image.new('RGB', (2000, 1000))
    sheet.paste(tiles[0], (0, 0)); sheet.paste(tiles[1], (1000, 0))
    sheet.save(os.path.join(D, 'bones_overlay.png'))

def grid(files_labels, cols, tile, title, out):
    rows = (len(files_labels) + cols - 1) // cols
    sheet = Image.new('RGB', (cols * tile, rows * (tile + 30) + 40), (18, 18, 20))
    dr = ImageDraw.Draw(sheet); dr.text((10, 8), title, fill=(255, 255, 255), font=FONT)
    for i, (f, lab) in enumerate(files_labels):
        im = Image.open(f).convert('RGB').resize((tile, tile), Image.LANCZOS)
        x, y = (i % cols) * tile, 40 + (i // cols) * (tile + 30)
        sheet.paste(im, (x, y + 30)); dr.text((x + 8, y + 4), lab, fill=(255, 220, 120), font=FONT)
    sheet.save(out)

def sheets():
    s = os.path.join(D, '_sheet')
    names = ['basis'] + list('ABCDEFGHX') + ['blink_L', 'blink_R', 'brow_up', 'brow_down', 'look_L', 'look_R',
                                             'look_up', 'look_down']
    grid([(os.path.join(s, 'face_%s.png' % n), n) for n in names], 6, 360,
         'Face shape keys at 1.0 (basis = test 8 rest; X = Rhubarb idle = her rest smile)',
         os.path.join(D, 'mouths_sheet.png'))
    labs = ['R_contact', 'R_down', 'R_passing', 'R_up', 'L_contact', 'L_down', 'L_passing', 'L_up']
    meta = json.load(open(os.path.join(D, 'rig_meta.json')))['markers']
    fl = [(os.path.join(s, 'walk_front_%s.png' % l), '%s  f%d  front' % (l, meta[l])) for l in labs] + \
         [(os.path.join(s, 'walk_side_%s.png' % l), '%s  f%d  side' % (l, meta[l])) for l in labs]
    grid(fl, 8, 360, 'Gait key poses, one full cycle (camera follows the pelvis)', os.path.join(D, 'walk_contact_sheet.png'))

{'overlay': overlay, 'sheets': sheets}[sys.argv[1]]()
