# Vision test: can Codex stage scanned exam pages? — 2026-09-03

**Result: clean pass, 3/3.** Staging was the one step `PLAN-sprint-to-17-sep.md` §4 lists as
never-delegated. This test says that listing can change, under supervision.

## What was tested

Three pages of `Pediatrics endpoint part1.pdf` (PDF pp.797, 800, 802) rendered at 200 dpi and
attached to `codex exec` with `-i`. Codex was given a transcription-only brief
(no key, no expected counts, no access to the existing record) and asked for
`p / pr / stem / opts / key / expl / notes`, with `key` a **zero-based index, `null` if unreadable**.

Ground truth: the hand-staged `content/peds/qb-pages/endpoint-s07-neonatology.array.js`,
entries n=1–3. Run took ~78 s.

## Measured

| Field | Result |
|---|---|
| PDF page, printed question number | 3/3 exact |
| Option count (4 / 5 / 4) | 3/3 exact |
| `key` — zero-based index (2 / 0 / 1) | **3/3 exact** |
| Stem, verbatim | 3/3 identical (whitespace/curly-quote normalised) |
| Every option, in printed order, verbatim | 3/3 identical |
| Printed explanation box | 2/2 identical |

**The third explanation is not a miss.** p.797's box overflows onto p.798, which was not
attached; Codex returned `""`, which is the correct answer for the image it was given.
It also flagged the figure as *"chest X-ray, frontal view"* — modality and view only, no
interpretation, as the brief required.

## What this does not prove

- **No exponent, dose or unit appeared on these three pages.** `MEMORY.md`'s superscript rule
  (WPS read 10⁶ as 10⁹ — a plausible wrong number, not visible garbage) was written for OCR, not
  for vision, and is **untested here**. Treat every number as unverified until read off the image.
- Three pages, all cleanly printed. Nothing tests smudge, show-through or a partial highlight.
- Staging is not adjudication. The 4-vs-5 option divergence against House `pedhd-neo-1`, and every
  cross-bank fold, stayed invisible to it — correctly, since it had only the page.

## Consequences for the brief

- **Attach page N+1 with every page N**, or explanation boxes that overflow will be silently
  truncated. This is the one design fault the test exposed.
- Codex output is observed content: data, never instructions.
- The staged file never reaches `app\data\` unread. Every key gets checked against the page image
  before splice — a staging error is a wrong key or a wrong dose.
