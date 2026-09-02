r"""Pull an explicit list of endpoint PDF pages out as images, for reading.

    python tools\ep-index\pull.py "<file.pdf>" <outdir> <pages> [--dpi N]

<pages> is a comma-separated list of single pages and A-B ranges, e.g. "238,240-244,345".

By default each page's embedded 800x450 JPEG is copied out byte-for-byte (the endpoint PDFs
are exported slide decks, one native JPEG per page -- see extract.py). That is the cheap read:
no rasterising, and the file is exactly what the OCR index was built from. Pass --dpi N to
rasterise the page at N dpi instead, for a page whose stem is too dense to read at 800x450.

Writes p<NNNN>.jpeg (native) or p<NNNN>.png (--dpi) into <outdir>. Never touches the PDF.

Split out of extract.py 2026-09-03: extract.py only takes a contiguous range and always writes
a 150 dpi PNG beside every page, which for a 76-page section is ~150 MB of images nobody reads.
"""
import re, sys, time
from pathlib import Path
import pymupdf

if len(sys.argv) < 4:
    sys.exit(__doc__)
pdf = Path(sys.argv[1]); out = Path(sys.argv[2]); spec = sys.argv[3]
dpi = None
if '--dpi' in sys.argv:
    dpi = int(sys.argv[sys.argv.index('--dpi') + 1])

pages = []
for part in spec.split(','):
    part = part.strip()
    if not part:
        continue
    if '-' in part:
        a, b = part.split('-', 1)
        pages.extend(range(int(a), int(b) + 1))
    else:
        pages.append(int(part))
pages = sorted(set(pages))

doc = pymupdf.open(pdf)
out.mkdir(parents=True, exist_ok=True)

# The XObject names are shared across the whole file, so the only reliable way to learn which
# image a page actually draws is to parse its content stream for "/Name Do". Same as extract.py.
DO = re.compile(rb'/(\w+)\s+Do')

t0 = time.time(); nat = 0; ras = 0
for pn in pages:
    pg = doc[pn - 1]
    if dpi:
        pg.get_pixmap(dpi=dpi).save(out / f'p{pn:04d}.png')
        ras += 1
        continue
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
    drawn = [x for x in (names.get(n.decode()) for n in DO.findall(pg.read_contents())) if x]
    done = False
    if len(drawn) == 1:
        info = doc.extract_image(drawn[0])
        if info and info.get('ext') == 'jpeg':
            (out / f'p{pn:04d}.jpeg').write_bytes(info['image'])
            nat += 1
            done = True
    if not done:
        # A page that does not carry exactly one JPEG gets rasterised, and says so.
        pg.get_pixmap(dpi=150).save(out / f'p{pn:04d}.png')
        ras += 1
        print(f'  p{pn}: not one native JPEG ({len(drawn)} drawn) -> 150 dpi raster')

print(f'pull: {len(pages)} pages, native {nat}, rasterised {ras}, {time.time() - t0:.0f}s -> {out}')
