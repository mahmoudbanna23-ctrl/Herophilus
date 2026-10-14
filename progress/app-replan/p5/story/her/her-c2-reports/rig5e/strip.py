from PIL import Image, ImageDraw
import os
D = 'D:/scratch 2026/her-c2/rig5e/frames_wave'
fr = list(range(108, 138, 2))
first = Image.open(os.path.join(D, '%04d.png' % fr[0])).convert('RGB')
w, h = first.size
s = 0.5; tw, th = int(w * s), int(h * s)
cols = 5; rows = (len(fr) + cols - 1) // cols
sh = Image.new('RGB', (cols * tw, rows * th), (24, 22, 20)); dr = ImageDraw.Draw(sh)
for i, f in enumerate(fr):
    im = Image.open(os.path.join(D, '%04d.png' % f)).convert('RGB').resize((tw, th), Image.LANCZOS)
    x, y = (i % cols) * tw, (i // cols) * th
    sh.paste(im, (x, y)); dr.text((x + 6, y + 6), 'f%d' % f, fill=(255, 220, 120))
sh.save('D:/scratch 2026/her-c2/rig5e/raise_strip.png'); print(sh.size)
