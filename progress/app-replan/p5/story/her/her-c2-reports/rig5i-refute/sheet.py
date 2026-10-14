import sys
from PIL import Image, ImageDraw
# sheet.py <dir> <out> <cols> <scale> <crop x0,y0,x1,y1 or -> frames...
d, out, cols, sc, crop = sys.argv[1], sys.argv[2], int(sys.argv[3]), float(sys.argv[4]), sys.argv[5]
fr = [int(x) for x in sys.argv[6:]]
ims = []
for f in fr:
    im = Image.open('%s/%04d.png' % (d, f)).convert('RGB')
    if crop != '-': im = im.crop(tuple(int(v) for v in crop.split(',')))
    im = im.resize((int(im.width * sc), int(im.height * sc)))
    ImageDraw.Draw(im).text((4, 4), str(f), fill=(255, 255, 0)); ims.append(im)
w, h = ims[0].size; rows = (len(ims) + cols - 1) // cols
S = Image.new('RGB', (w * cols, h * rows))
for i, im in enumerate(ims): S.paste(im, ((i % cols) * w, (i // cols) * h))
S.save(out)
