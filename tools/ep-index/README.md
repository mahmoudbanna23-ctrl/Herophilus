# ep-index — a free, offline search index of an endpoint PDF

Built 2026-09-02 by the watch session from scripts that had lived only in a dead chat's
transcript. Everything below was measured on `Semester 8\Pedo\Questions\Pediatrics endpoint
part1.pdf` (1,991 pages) the same day.

## What it is for

The endpoint PDFs have **no text layer** and every question is printed twice (unanswered page,
then answered page with the key highlighted yellow). Reading 1,991 pages by eye to find which
pages carry new content is the cost that kept the endpoints deferred. This index lets a chat
`grep` the whole book, find the reprints, and locate every answered page **before rendering a
single page for reading**.

It is a **search index, never a clinical source.** Every fact that ships is confirmed on the
rendered page inside a subagent. The answer key is the yellow highlight on the image; it is
never taken from OCR text (see the trap below).

## The one command

```
powershell -ExecutionPolicy Bypass -File tools\ep-index\run-all.ps1 `
    -Pdf "Semester 8\Pedo\Questions\Pediatrics endpoint part1.pdf" `
    -Out content\peds\qb-pages\ocr\ep1 `
    -Work <scratchpad>\ep1-index
```

Images (≈1 GB for part 1) go to `-Work` — the session scratchpad, never the repo. Only text
lands in `-Out`. Part 1 end to end: extract ≈2 min, each OCR pass ≈1.5–2 min. Re-runnable,
overwrites in place. `-First`/`-Last` restrict the page range for a test.

| Step | Script | What it does |
|---|---|---|
| 1 | `extract.py` | Copies each page's **native 800×450 JPEG** out of the PDF (no rasterising — the XObject is read from the content stream's `/Name Do`), renders a 150 dpi PNG too, counts yellow pixels → `meta.json` |
| 2 | `ocr.ps1` ×2 | **Windows.Media.Ocr** (built into Windows 10, free, ≈50 ms/page) on the native JPEGs, then on the 150 dpi PNGs |
| 3 | `index.py` | Writes `pNNNN.txt` (both reads, separated by `--- 150dpi ---`) and `index.json` with the answered flag, word counts, option letters and **flags** |

`ocr.ps1` needs **Windows PowerShell 5.1** (the WinRT projection is not exposed in PowerShell 7).

## What the output looks like

```
content\peds\qb-pages\ocr\ep1\
  p0001.txt … p1991.txt   OCR text, native read first, then the 150 dpi read
  index.json              one row per page:
    {page, yellow, answered, native_copy, words:{native,hires},
     options:{native:[…],hires:[…]}, flags:[…]}
```

Typical uses:

```
grep -l "very low birth weight" content/peds/qb-pages/ocr/ep1/*.txt      # every printing
python -c "import json;print([r['page'] for r in json.load(open('content/peds/qb-pages/ocr/ep1/index.json')) if r['answered']])"
python -c "import json;print([(r['page'],r['flags']) for r in json.load(open('content/peds/qb-pages/ocr/ep1/index.json')) if r['flags']])"
```

## Measured quality (7 ground-truth pages, section 1, against the staging record)

- Stems came back **character-exact on all 7 pages**, printed typos included ("Anal height",
  "mostly likely", "less than 500").
- Word recall: native 87–100 %, 150 dpi 95–100 %.
- ⚠️ **The engine silently drops whole lines**, and a *different* line at each resolution
  (p.38 native lost the key line B; p.145 at 150 dpi lost its key). **The union of the two reads
  recovered every option on every test page.** That is why both are kept and why
  `options-differ` is a flag.
- A box that overflows onto the next page (q39→p.107, q59→p.148, q60→p.151 in section 1) shows
  up as a page with text but no options — exactly the `thin`/no-options shape.

## The flags — the index fails loudly instead of looking complete

| flag | meaning | do this |
|---|---|---|
| `thin` | both reads under 40 % of the surrounding pages' median word count | divider, overflow box, or a lost page — look at it |
| `few-options` | answered page, union of both reads found < 4 option letters | render before trusting the index for this page |
| `passes-differ` | word counts differ by > 25 % | read the longer half first, then the other for what it missed |
| `options-differ` | the two reads did not see the same option letters | one read lost an option line — use both |
| `ocr-error` | the engine threw | re-run that page |

Yellow threshold: **≥ 750** on the 400×225 downscale of the 150 dpi page = answered. Calibrated on
section 1 against the staging record: the 89 answered pages scored 936–20,128, the 89 unanswered
pages and the 3 overflow-box pages scored ≤ 524 — clean separation, no page in between. Change
`YELLOW_MIN` in `index.py` if another book highlights differently; check the first ten pages of
every book, never assume.

## What this replaces

`progress\ocr-pipeline.md` and `MEMORY.md` name WPS (`wpscli photo2word`, rate-limited, 3 s gap,
0.38 s/page render) as the OCR route. That is still the route for the **scanned books** where
Windows OCR has not been measured. For the **endpoint slide captures** this index is faster
(74 s vs hours), free, offline, and the quality above was measured on the real pages. The
superscript trap recorded for WPS (10⁶ read as 10⁹) applies to every OCR engine: **never take an
exponent, a unit or a dose from OCR text.**
