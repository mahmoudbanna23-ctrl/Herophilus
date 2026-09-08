r"""Merge the two OCR passes and the page metadata into the committed search index.

    python tools\ep-index\index.py <workdir> <outdir>

<workdir> is what extract.py and ocr.ps1 produced (meta.json, ocr-native/, ocr-hires/).
<outdir> gets one file per page plus index.json:

    pNNNN.txt      the native-resolution read, then a line "--- 150dpi ---", then the
                   150 dpi read. Both are kept on purpose: each pass silently drops
                   whole lines, and on the ground-truth pages the union of the two
                   recovered every option and every stem. grep either half, trust neither.
    index.json     per page: kind, answered (yellow), yellow count, words in each pass,
                   option letters seen in each pass, and FLAGS (below). Sorted by page.
                   ACCUMULATES across runs: rows already in index.json for pages outside
                   this run's range are kept untouched; a page inside this run's range
                   overwrites whatever row (if any) was already there. A run never drops
                   rows for pages it was not asked to process -- fixed 2026-09-09 after a
                   run over pages 135-213 overwrote the whole file and destroyed the 129
                   rows section 1 had already earned.

    kind:  "answered"  yellow highlight present AND at least one option letter read --
                       the answered printing of a question; one per question.
           "question"  no yellow, two or more option letters -- the unanswered printing.
           "notes"     no option letter in either pass -- a summary slide, divider or
                       contents page. Notes slides ALSO carry yellow highlighting (all of
                       pp.6-27 in part 1 do), so "answered" alone is not a question count;
                       count kind == "answered".
           "other"     yellow absent, a single option letter -- look at it.

Flags -- the index refuses to look complete when it is not (the one idea borrowed from
Anydoc's "fail loudly" design, 2026-09-02):
    thin           both passes read under 40% of the median word count of the six
                   surrounding pages. A dropped page, a divider slide, or an image page.
    few-options    an ANSWERED question page on which the union of both passes found only
                   one to three distinct option letters (A-E at line start). Something is
                   missing from the read -- render the page before trusting the index.
    passes-differ  the two passes disagree by more than 25% in word count. One of them
                   dropped lines; read the longer one first, then the other for what it
                   missed.
    options-differ the two passes did not read the same set of option letters -- one of
                   them lost an option line (this is the p.38 case: the native pass lost
                   the highlighted key line B, the 150 dpi pass had it).
    ocr-error      the OCR engine threw on this page.

Nothing here is a clinical source. The answer key is the yellow highlight on the image, never
a line of OCR text; a page's OCR text can carry the key line in one pass and not the other
(seen 2026-09-02: p.38 native pass lost it, p.145 150 dpi pass lost it).
"""
import json, re, statistics, sys
from pathlib import Path

if len(sys.argv) < 3:
    sys.exit(__doc__)
work = Path(sys.argv[1]); out = Path(sys.argv[2])
out.mkdir(parents=True, exist_ok=True)
meta = json.loads((work / 'meta.json').read_text(encoding='utf-8'))
YELLOW_MIN = 750  # calibrated on section 1: answered pages >= 936, all others <= 524
OPT = re.compile(r'^\s*[\(\[]?([A-Ea-e])[\)\].:\-]\s*\S')
WORD = re.compile(r'[A-Za-z0-9]+')


def read(kind, page):
    p = work / f'ocr-{kind}' / f'p{page:04d}.txt'
    return p.read_text(encoding='utf-8').splitlines() if p.exists() else ['OCR-ERROR missing file']


def letters(lines):
    s = set()
    for ln in lines:
        m = OPT.match(ln)
        if m:
            s.add(m.group(1).upper())
    return sorted(s)


pages = sorted(int(k) for k in meta)
rows = {}
for pg in pages:
    nat, hi = read('native', pg), read('hires', pg)
    r = {
        'page': pg,
        'yellow': meta[str(pg)]['yellow'],
        'answered': meta[str(pg)]['yellow'] >= YELLOW_MIN,
        'native_copy': meta[str(pg)]['native'],
        'words': {'native': sum(len(WORD.findall(l)) for l in nat),
                  'hires': sum(len(WORD.findall(l)) for l in hi)},
        'options': {'native': letters(nat), 'hires': letters(hi)},
        'flags': [],
    }
    if any(l.startswith('OCR-ERROR') for l in nat + hi):
        r['flags'].append('ocr-error')
    # newline='\n' so the committed index is LF on Windows too (text mode would write CRLF)
    with open(out / f'p{pg:04d}.txt', 'w', encoding='utf-8', newline='\n') as fh:
        fh.write('\n'.join(nat) + '\n--- 150dpi ---\n' + '\n'.join(hi) + '\n')
    rows[pg] = r

for pg in pages:
    r = rows[pg]
    w = max(r['words']['native'], r['words']['hires'])
    nb = [max(rows[q]['words']['native'], rows[q]['words']['hires'])
          for q in range(pg - 3, pg + 4) if q in rows and q != pg]
    med = statistics.median(nb) if nb else 0
    if med and w < 0.4 * med:
        r['flags'].append('thin')
    union = set(r['options']['native']) | set(r['options']['hires'])
    if r['answered'] and union:
        r['kind'] = 'answered'
    elif not union:
        r['kind'] = 'notes'
    elif len(union) >= 2:
        r['kind'] = 'question'
    else:
        r['kind'] = 'other'
    if r['kind'] == 'answered' and len(union) < 4:
        r['flags'].append('few-options')
    a, b = r['words']['native'], r['words']['hires']
    if max(a, b) and abs(a - b) / max(a, b) > 0.25:
        r['flags'].append('passes-differ')
    if r['options']['native'] != r['options']['hires']:
        r['flags'].append('options-differ')

# Merge onto whatever index.json already exists in <outdir>, so a run over one page range
# never destroys the rows an earlier run wrote for a different range. A page in both the old
# file and this run's range takes THIS run's row (that is the point of re-running a range).
existing = {}
idx_path = out / 'index.json'
if idx_path.exists():
    for r in json.loads(idx_path.read_text(encoding='utf-8')):
        existing[r['page']] = r
before = len(existing)
existing.update(rows)
all_pages = sorted(existing.keys())
with open(idx_path, 'w', encoding='utf-8', newline='\n') as fh:
    fh.write(json.dumps([existing[p] for p in all_pages], indent=0))
flagged = {}
for r in rows.values():
    for f in r['flags']:
        flagged[f] = flagged.get(f, 0) + 1
kinds = {}
for r in rows.values():
    kinds[r['kind']] = kinds.get(r['kind'], 0) + 1
print(f'index: {len(pages)} pages, kinds {kinds} (yellow >= {YELLOW_MIN}), '
      f'flags {flagged or "none"} -> {out}')
print(f'merge: index.json had {before} rows before this run, {len(all_pages)} after '
      f'({len(all_pages) - before:+d}) -- pages outside {pages[0]}-{pages[-1]} are untouched carryover')
