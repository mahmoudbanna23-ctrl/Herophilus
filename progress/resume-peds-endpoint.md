# Peds ENDPOINT part 1 — running journal

The working record of the pediatrics endpoint chat. Scope is **`Pediatrics endpoint part1.pdf`
only**; part 2 is deferred by the user (2026-09-02). Launch prompt:
`progress\resume-2026-09-02-peds-endpoint.md`. Anything not written here is invisible to the
watch and dies with the session.

**Owned by this chat:** `app\data\questions.peds.ep.js` · `content\peds\qb-pages\endpoint-*` and
`ocr\ep1\` · `tools\bank-harness\*-pd-ep.js` · `tools\ep-index\` · this file.
**Never touched:** `questions.peds.js` (Chat B's), `index.html`, `questions.js`, `modules.js`,
`MEMORY.md`, `ledger.md`, `splice-pd.js`/`val-pd.js`.

---

## State

| section | pages | questions | state |
|---|---|---|---|
| 1 Growth & Puberty | 5–210 | 89 | ✅ **SPLICED AND COMMITTED `1f05e45`** (2026-09-03) |
| 2 Nutrition | 211–392 | 76 | staging in progress |
| 3 Gastroenterology | 393–549 | 67 | not started |
| 4 Accidents & poisoning | 550–562 | 3 | not started |
| 5 Pediatrics Emergencies | 563–702 | 60 | not started |
| 6 Perinatal | 703–773 | 23 | not started |
| 7 Neonatology | 774–903 | 53 | not started |
| 8 Allergy | 904–928 | 9 | not started |
| 9 Infection & Immunity | 929–1156 | 96 | not started |
| Model exams 1–4, training 1–2 | 1157–1936 | 379 | last; expected mostly reprints |
| Exam Night Review | 1937–1990 | 0 (prose) | nothing to stage |

Live file `app\data\questions.peds.ep.js`: **89 entries, 0 holes.** Boot check after the section-1
splice: **0 console errors, QUESTIONS 4527, 4 module cards, 153 chapter rows.**
`validate-all.js`: all hard checks passed across 5 files.

---

## Section 2 — Nutrition, planned 2026-09-03 from the OCR index

**76 questions on 76 answered pages**, matching the contents page exactly. 76 unanswered pages,
30 notes slides, 0 `other`. Section runs pp.211–392: notes slides pp.211–236, first question page
p.237, first answered page **p.238**, last answered page **p.391**.

**Answered pages** (the only ones staged): 238–344 even, then 347, 350–380 even, then 383, 385,
387, 389, 391.

⚠️ **Three boxes overflow onto their own page** — 345 (q54), 348 (q55), 381 (q71). Each shows in
the index as `notes` with ~50 words and no option letters; each was read and confirmed to be the
preceding question's explanation, not a slide. Parity flips twice because of them, exactly as in
section 1.

⚠️ **The printed numbers run 1–75 over 76 questions: pp.368 and 370 BOTH print "65".** From p.370
on, the printed number trails the true index by one. `n` is the true index, `pr` what the page
prints — the same shape section 1 had (two numbers printed twice there).

**Boxes:** 11 answered pages show no text after the last option and no overflow page —
246, 250, 252, 254, 256, 264, 272, 282, 308, 362, 387. Detected from OCR, so each is a candidate
to confirm by eye, not a verdict; the staging agents were told to decide box presence from the
image.

**Index flags in range:** `few-options` on p.338 (read it hard); `options-differ` on 244, 264,
278, 284, 302, 304, 324, 334, 342, 344, 347, 350, 358.

---

## ⚠️ CROSS-BANK OVERLAP FOUND — recorded, NOT resolved

**Every one of the 15 House `pedhd-nutr-` questions is reprinted in endpoint section 2.**
Measured 2026-09-03 with `tools\bank-harness\reprint-pd-ep.js 211 392`:

| endpoint page | House id |
|---|---|
| 238 · 240 · 242 · 244 · 246 · 248 · 250 · 252 · 254 · 256 · 258 · 260 | `pedhd-nutr-1` … `-12` in page order |
| 262 | `pedhd-nutr-13` (reworded: "Breastfeeding is best for babies," vs House's "Breast feeding is the best for babies") |
| 264 | `pedhd-nutr-14` |
| 358 | `pedhd-nutr-15` |

So the House nutrition chapter is a **subset of endpoint section 2's opening run**, not an
independent set. **Neither chat can fold into the other's file**, so nothing is merged now: this
table is the input to the single reconciliation pass after both banks close. The likely outcome is
one held question per pair carrying `alsoIn`, but that is the reconciliation's call, not this
chat's.

**Within section 2:** p.280 and p.294 look like the same question — for the staging agents to
confirm on the images.

---

## Tools written this session

- **`tools\ep-index\pull.py`** — pulls an explicit page list out of the endpoint PDF as its native
  800×450 JPEG (or `--dpi N` to rasterise a page too dense to read). 147 pages in 1 second. Split
  out of `extract.py`, which only takes a contiguous range and writes a 150 dpi PNG beside every
  page — ~150 MB of images nobody reads, for a section this size.
- **`tools\bank-harness\reprint-pd-ep.js <first> <last>`** — the reprint map: every answered page's
  OCR stem against the live endpoint bank, the live House bank, and the other pages in range.
  ⚠️ **It has a `--self-test`, and the reason is worth keeping.** The first version returned
  **0 matches over section 1 — whose 89 answered pages ARE the 89 live entries** — because it
  compared with `base()` (punctuation and spacing kept) and left the printed "54." on the front of
  every OCR stem, so nothing could align at character 0. `tight()` + stripping the number took it
  to 82/89; an 8% edit-distance tolerance to 88/89; stripping OCR's letter-shaped digits (p.48
  prints "10.", both reads returned "I O.") closed it to **89/89**. `--self-test` must stay at 89.
  **A zero from a probe you just wrote is a claim about the probe first.**

Both `val-pd-ep.js` and `splice-pd-ep.js` now carry a section-2 row (`pedep-nut-`,
`endpoint-s02-nutrition.array.js`, `PEDEP_S02_STAGED`, draft `endpoint-s02-nutrition.draft`).

---

## Changed since 2026-09-03
