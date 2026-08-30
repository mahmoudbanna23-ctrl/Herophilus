# Tooling brief — OCR confidence gate + MCQ block parser (free-lane build)

**For: OpenCode (or any free-lane CLI). This brief is deliberately content-free: it contains no
text from the source PDFs, no question content, and no medical content. Do not ask for any; the
tool is testable entirely on synthetic fixtures you generate yourself.**

## What to build

One plain-Node script, **`tools/ocr-gate.js`**, single file, **zero npm dependencies**
(Node v26 built-ins only — `fs`, `path`). No Python, no TypeScript, no build step.

Input: one or more Tesseract 5 TSV files (`tesseract page.png out tsv` output). Output: a JSON
report on stdout (or `--out file.json`) that segments each page into MCQ blocks and gives each
block a verdict.

## Tesseract TSV format (tab-separated, header row present)

Columns: `level page_num block_num par_num line_num word_num left top width height conf text`.
Use only `level == 5` rows (words). `conf` is a float 0–100, or `-1` for non-word rows. Words
arrive in reading order. `left/top/width/height` are pixel boxes at 300 DPI (page ≈ 2480×3508
portrait, or wider for landscape).

## Block grammar (generic MCQ page)

A page is a sequence of blocks. Two layout profiles, selected by `--profile`:

- **`portrait`**: single column. Question numbering is continuous across the whole document
  (e.g. `682.` `683.` …). Answer keys appear in separate key blocks later, each of the form
  `Correct Answer:` followed by a single letter `A`–`E`, optionally followed by an
  `Explanation:` paragraph.
- **`landscape2up`**: each image is two book pages side by side — **segment into left/right
  halves by the word-box x midpoint before parsing, and parse each half top-to-bottom as its
  own column** (never interleave). Question numbering **restarts at 1 per chapter**. The key is
  inline: after the options, a line `Answer:` + single letter `A`–`E`.

A question block = a question-number token (`^\d{1,4}[.)]$` or number glued to the first word),
stem words, then an option list: labels `a`–`e` in one of the printed variants (`a.` `a)` `A.`
`A)` `(a)`), each followed by option text. Blocks may share one option menu (options printed
once, several numbered stems before them) — represent that as the menu block attaching to the
preceding stem-only questions; do not fail on it.

## Per-block output

```json
{ "page": "p-116", "qnum": 682, "meanConf": 95.2, "minConf": 88.1,
  "labels": ["a","b","c","d"], "key": "C", "verdict": "TEXT",
  "text": "...block words joined...", "reasons": [] }
```

Verdicts:

- **`TEXT`** — mean conf ≥ threshold (`--threshold`, default **88**) AND the structural parse
  is clean. The block ships to a human/agent as text only.
- **`VISUAL`** — mean conf below threshold, OR the page has a suspected figure (below), OR the
  block structure is odd but recoverable. `reasons` says why, specifically.
- **`HALT`** — the parser cannot segment the block at all. **Halt loudly: print the raw words
  of the offending region, the page, the reason, and exit non-zero.** Never guess past a
  malformed block; never silently skip one.

## Structural checks (these are load-bearing — measured, not theoretical)

Calibration found five key letters **entirely absent** from a TSV while every surrounding word
sat at ~96 confidence. A confidence gate cannot see a missing word. Therefore:

1. **A key marker (`Correct Answer:` / `Answer:`) not followed by exactly one `A`–`E` token is
   verdict `VISUAL` for that key, reason `key-letter-missing`** — never `TEXT`, regardless of
   confidence. (`l`, `1`, `I`, `4` in key position are also failures, reason `key-letter-suspect`.)
2. Option label sequence must be contiguous from `a` (a,b,c is fine; a,b,d is
   `label-gap` → `VISUAL`). Duplicate labels → `VISUAL`.
3. Question numbers must be **read, never computed**. In `portrait` profile, a non-monotonic
   jump (other than +1) is flagged `qnum-jump` → `VISUAL` for both neighbours. In
   `landscape2up`, a reset to 1 is legal; any other backward jump is flagged.
4. **minConf must NOT be used as a gate** — measured: perfectly-read blocks carry minConf 1–20
   from stray marks. Report it, never gate on it.
5. **Header/footer stripping**: drop words whose box top is in the top 4% or bottom 4% of the
   page BEFORE block segmentation, but report what was dropped per page (a page-furniture list)
   so a human can confirm nothing real was lost.

## Figure detection (word-box inversion)

Per page: rasterise the word boxes onto a coarse grid (e.g. 40×56 cells). Any contiguous empty
region larger than `--figure-cells` (default: a region ≥ 8% of the page area) that is NOT page
margin → flag the page `figure-suspect` and set every block on it to `VISUAL`, reason
`figure-on-page`. False positives are acceptable; false negatives are not — when in doubt, flag.

## Self-test (required, no external data)

`node tools/ocr-gate.js --selftest` must generate synthetic TSV fixtures in memory (invent
neutral filler words — lorem-ipsum-like, NOT medical text) and assert at least:

- a clean portrait page parses to `TEXT` blocks with correct qnums, labels, keys;
- a key marker with no following letter → `VISUAL`, `key-letter-missing`;
- a key letter printed as `1` → `VISUAL`, `key-letter-suspect`;
- label sequence a,b,d → `VISUAL`, `label-gap`;
- a landscape2up fixture with two columns parses left column fully before right;
- a page with a large empty region → all blocks `VISUAL`, `figure-on-page`;
- low mean confidence (< threshold) → `VISUAL`, `low-confidence`;
- an unsegmentable region → process exits non-zero with the region's words printed;
- header words are stripped and reported.

Exit 0 with `SELFTEST PASS n=<count>` on success.

## Style

~200–300 lines is the right size. Plain CommonJS (`require`), no classes needed, small pure
functions. Comment only what the code cannot say (thresholds' provenance, the two profile
quirks). CLI: `node tools/ocr-gate.js --profile portrait --threshold 88 p1.tsv p2.tsv …`.

## Acceptance (done by the requesting session, not you)

The diff is reviewed, the self-test run, then the tool is run against real calibration TSVs the
requester holds. You never need the real TSVs; if anything in this spec is ambiguous, say so in
a comment at the top of the file rather than guessing silently.
