r"""Pull every page of an endpoint PDF out as an image, twice, and measure the yellow.

    python tools\ep-index\extract.py "<file.pdf>" <workdir> [first] [last]

The endpoint PDFs are not scans: each A4 page carries ONE native 800x450 JPEG XObject
(measured 2026-09-02 on Pediatrics endpoint part1.pdf, 1,991/1,991 pages). So the cheap
and lossless route is to copy that JPEG out of the file rather than rasterise the page --
the whole book takes ~26 s. A 150 dpi raster of the same page is written as well, because
Windows OCR drops different lines at the two sizes and the union of both reads is what
recovers every option (see README.md).

Writes into <workdir>:
    native/pNNNN.jpeg   the embedded image, byte-for-byte (or a 72 dpi raster if a page
                        does not hold exactly one image -- flagged in meta.json)
    hires/pNNNN.png     150 dpi raster of the page
    meta.json           per page: xref, width, height, yellow (pixel count on a 400x225
                        downscale), native (true = copied, false = rasterised)

"yellow" is the answered-page signal: the key is highlighted in yellow on the answered
printing only. The count is taken on the 150 dpi A4 raster scaled to 400x225 (so the slide
is a strip inside white margins). Calibrated 2026-09-02 on section 1 against the staging
record: all 89 answered pages scored 936-20,128, all 89 unanswered pages and the 3 overflow
box pages scored <= 524. index.py uses >= 750.

Never writes anywhere but <workdir>. Never touches the PDF.
"""
import json, re, sys, time
from pathlib import Path
import pymupdf

if len(sys.argv) < 3:
    sys.exit(__doc__)
pdf = Path(sys.argv[1]); work = Path(sys.argv[2])
doc = pymupdf.open(pdf)
first = int(sys.argv[3]) if len(sys.argv) > 3 else 1
last = int(sys.argv[4]) if len(sys.argv) > 4 else doc.page_count
(work / 'native').mkdir(parents=True, exist_ok=True)
(work / 'hires').mkdir(parents=True, exist_ok=True)

# The XObject names are shared across the file (every page's resource dict lists all ~2k
# images), so the only reliable way to learn which image a page actually draws is to parse
# its content stream for "/Name Do".
DO = re.compile(rb'/(\w+)\s+Do')


def yellow_count(pix):
    """Count strongly yellow pixels on a 400x225 downscale (r>200, g>180, b<120), x4."""
    img = pymupdf.Pixmap(pix, 400, 225)  # rescale, RGB
    n = img.n; s = img.samples; cnt = 0
    for i in range(0, len(s), n):
        if s[i] > 200 and s[i + 1] > 180 and s[i + 2] < 120:
            cnt += 1
    return cnt * 4


meta = {}
t0 = time.time()
for pno in range(first - 1, last):
    pg = doc[pno]
    names = {}
    xo = doc.xref_get_key(pg.xref, 'Resources/XObject')
    if xo[0] == 'xref':
        rx = int(xo[1].split()[0])
        for k in doc.xref_get_keys(rx):
            v = doc.xref_get_key(rx, k)[1]
            names[k] = int(v.split()[0]) if v.endswith(' R') else None
    elif xo[0] == 'dict':
        for m in re.finditer(r'/(\w+)\s+(\d+)\s+0\s+R', xo[1]):
            names[m.group(1)] = int(m.group(2))
    drawn = [names.get(n.decode()) for n in DO.findall(pg.read_contents())]
    drawn = [x for x in drawn if x]
    rec = {'page': pno + 1, 'native': False, 'xref': None}
    out = work / 'native' / f'p{pno + 1:04d}.jpeg'
    if len(drawn) == 1:
        info = doc.extract_image(drawn[0])
        if info and info.get('ext') == 'jpeg':
            out.write_bytes(info['image'])
            rec.update(native=True, xref=drawn[0], width=info['width'], height=info['height'])
    if not rec['native']:
        pix = pg.get_pixmap(dpi=72)
        pix.save(out)
        rec.update(width=pix.width, height=pix.height, drawn=len(drawn))
    hi = pg.get_pixmap(dpi=150)
    hi.save(work / 'hires' / f'p{pno + 1:04d}.png')
    rec['yellow'] = yellow_count(hi)
    meta[str(pno + 1)] = rec
    if (pno + 1) % 200 == 0:
        print(f'  p{pno + 1}  {time.time() - t0:.0f}s', flush=True)

(work / 'meta.json').write_text(json.dumps(meta, indent=0), encoding='utf-8')
nn = sum(1 for r in meta.values() if r['native'])
print(f'extract: pages {first}-{last}, native copies {nn}, rasterised {len(meta) - nn}, '
      f'{time.time() - t0:.0f}s -> {work}')
