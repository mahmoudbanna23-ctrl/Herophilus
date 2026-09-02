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
| 1 Growth & Puberty | 5–210 | 89 pages → **75 live** | ✅ spliced `1f05e45` · **14 self-reprints folded 2026-09-03** |
| 2 Nutrition | 211–392 | 76 pages → **75 live** | ✅ spliced · 1 self-reprint folded (nut-29) |

**Live total: 150 entries from 165 answered pages.** The two numbers differ by the 15 folds and
are both correct — pages staged is not questions held. Always say which one you mean.
| 3 Gastroenterology | 393–549 | 67 → **65?** | planned; 2 pages reprint `pedep-gp-79` — fold, do not stage |
| 4 Accidents & poisoning | 550–562 | 3 | not started |
| 5 Pediatrics Emergencies | 563–702 | 60 | not started |
| 6 Perinatal | 703–773 | 23 → **22?** | p.768 reprints `pedep-gp-70` — fold, do not stage |
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

### Sections 3–9 pre-mapped from the index (2026-09-03, no pages rendered)

Answered-page counts all match the contents page. `answered` vs `question` disagrees in three
sections — a question printed once, or a lost highlight; **reconcile from the images before
staging, do not assume**:

| section | answered | question | first/last answered | box overflows onto own page |
|---|---|---|---|---|
| 3 Gastroenterology 393–549 | 67 | 67 | 414 / 548 | after 424, 495 |
| 4 Accidents 550–562 | 3 | 3 | 557 / 561 | none |
| 5 Emergencies 563–702 | 60 | **62** ⚠️ | 577 / 701 | after 675, 678 |
| 6 Perinatal 703–773 | 23 | **22** ⚠️ (+1 `other`, p.741) | 728 / 772 | none |
| 7 Neonatology 774–903 | 53 | 53 | 797 / 902 | after 797 |
| 8 Allergy 904–928 | 9 | 9 | 911 / 927 | none |
| 9 Infection & Immunity 929–1156 | 96 | **95** ⚠️ | 938 / 1155 | after 938 |

Overflow candidates are notes pages of ≤90 words sitting immediately after an answered page. The
notes page after each section's LAST answered page (548, 561, 701, 772, 902, 927, 1155) is
excluded — those are the closing/divider slides, and section 1's closing page p.210 was a prayer
slide. Confirm each candidate on the image; section 2's three were all genuine.

`few-options` pages needing an eye before the index is trusted for them: 504, 742, 797, 938,
1039, 1043.

## Changed since 2026-09-03

### Section 2 part A staged — n=1..38, pp.238-312 (2026-09-03)

`content\peds\qb-pages\endpoint-s02-nutrition.part-A.js`, 38 entries, parses clean, 0 holes,
`n` 1-38 all distinct, every `key` in range, `pr` == `n` throughout (no duplicate printed numbers
in this half). Options: 25 questions with 5, 13 with 4.

⚠️⚠️ **THE OCR BOX-DETECTOR IS NOT A BOX DETECTOR — it over-called by 9 to 1.** "Text continues
after the last option on the answered page" predicted NINE boxless pages in this half (246, 250,
252, 254, 256, 264, 272, 282, 308). Reading the images found **one**: n=36, p.308. The other eight
all print a box the OCR simply lost. So the launch prompt's "box presence... the index shows it per
page" is true only in the direction of presence: **an OCR box hit is evidence, an OCR box miss is
nothing at all.** Every "no box" claim has to come off the image. Section 1's 4-of-89 unboxed
figure was established the same way and stands.

**Findings from part A, all confirmed on the images:**
- ⚠️ **p.238 (n=1) CARRIES A FIGURE** — a clinical wrist photo plus its X-ray, labelled (a)/(b).
  Section 1 had none and its p.4 says "the exam does not contain pictures", so that claim does not
  hold for section 2. Whether it belongs to the question or the explanation is being settled off
  p.237, the unanswered printing. Not cropped yet.
- **Within-section reprint: n=22 (p.280) == n=29 (p.294)** — identical stem, options and key
  ("NOT a cause of anemia in severe PEM" -> Carbohydrate deficiency), different box wording. This
  is the pair the reprint map flagged; the images confirm it.
- **n=5 (p.246) and n=23 (p.282)** are the same marasmus vignette with the name/country dropped and
  the weight centile changed (0.4th -> 3rd). A rewording, not an exact reprint.
- **n=21, n=33, n=35** are three separate "best measurement for acute/severe malnutrition ->
  weight-for-height" items, worded and boxed differently. **Left unfolded**: a shared template is
  not a fold unless the discriminating token is named.
- **n=7-10 share one 5-option menu** (Vitamin D / Vitamin K / Kwashiorkor / Marasmus / Cow's milk
  protein allergy) across four distinct vignettes. A shared menu PAIRS, it never folds.
- **p.272 (n=18) is garbled IN THE SOURCE** — "An 11th presented to the emergency room...", "he was
  and had no past history of convulsions". Re-rendered at 200 dpi to rule out a misread; the print
  is broken. Transcribed verbatim.
- **p.276 (n=20) prints an editorial aside instead of a clinical explanation** ("this question is of
  lesser importance... included it as a backup"). Verbatim, flagged.
- Printed typos kept verbatim: n=15 "Which of the following **not** a finding" (missing "is") and
  its option "distributed muscle: fat ratio".
- Option letter-casing drifts through the section (A-E, then a-e, then A-E, then a-d) and from
  n=19 on most questions print 4 options rather than 5. Confirmed per page, not a truncation.

### Section 2 part B staged — n=39..76, pp.314-391 (2026-09-03)

`content\peds\qb-pages\endpoint-s02-nutrition.part-B.js`, 38 entries, parses clean, 0 holes,
`n` 39-76 all distinct, every `key` in range. Options: 20 with 5, 18 with 4.

- **The duplicate printed number is confirmed on the images.** `pr` tracks `n` to n=65, then
  trails it by one from **n=66 (p.370)** to the end — pp.368 and 370 both print "65", exactly as
  the index predicted before any page was rendered.
- **Three overflow boxes confirmed**: n=54 p.344 -> box p.345 · n=55 p.347 -> box p.348 ·
  n=71 p.380 -> box p.381. All three carry `box:` and their `source` must name the box page.
- **One unboxed page: n=74 (p.387).** The OCR detector had also called p.362; the image prints a
  box there. Same 9:1 over-call shape as part A — **an OCR box miss is nothing at all.**
- **Section boundary proved by reading one page past the last**: p.392 is a decorative Arabic
  supplication slide and p.393 is the "Gastroenterology" section-title slide. Nutrition genuinely
  ends at p.391.
- **Three repeat pairs recorded, none folded** — all three sit inside part B, so one drafter owns
  both sides of each:
  - **n=58 / n=70** — the same five vitamin-deficiency statements **REORDERED**, which moves the
    correct Vitamin C statement from key position A to key position E. This is fold shape 3 (the
    reorder that moves the key letter) and it is the shape that produces a silent mis-key.
  - **n=59 / n=74** — human-milk oligosaccharides, reworded stem and reworded option B, same key
    position. n=74 is the unboxed one.
  - **n=62 / n=71** — the same rickets vignette asking **genuinely different questions**
    (treatment vs investigations). Not a repeat; both written in full.

### Section 2 merged into the staging record (2026-09-03)

`content\peds\qb-pages\endpoint-s02-nutrition.array.js` = a section-1-style header +
`var PEDEP_S02_STAGED = [` + part A + part B + `];`. Measured from disk after the final edit:
**76 entries, 0 holes, n 1..76 all distinct, 74 boxed, unboxed n=36 (p.308) and n=74 (p.387).**
The two part files keep their own header comments inside the array — they are the provenance of
each half and are legal JS comments.

**Shared option menus, computed from the merged record** (the validator enforces these, so they
are not a matter of taste): **n=7/8/9/10** (the Vitamin D / Vitamin K / Kwashiorkor / Marasmus /
CMPA ladder) anchored at `pedep-nut-7`, and **n=22/29** (the identical PEM-anemia reprint)
anchored at `pedep-nut-22`. Both groups fall entirely inside part A.

### ✅ The p.238 figure: it belongs to the QUESTION, and it is cut

**Settled by reading p.237, the unanswered printing** — it carries the identical stem, the same
A-E options with nothing highlighted, and the same two-panel figure, with **no explanation box**.
The reader is therefore meant to look at it before answering, so it is a question figure.

- Staging row n=1 now carries `fig:` (which is what makes `val-pd-ep.js` demand an `image` and an
  `imgAlt`) and a `note` recording how the decision was made.
- Crop cut and **looked at over four rounds** — three were rejected for clipping the top of the
  forearm or the "(a)" label; the accepted box is (415, 188, 748, 304) in the page's 800x450
  frame. Saved as `app\assets\q\q-pd-ep-238.jpg`, **333x116 px, 9.4 KB**.
- ⚠️ **333x116 is the source ceiling, not a choice.** The whole page is a single embedded 800x450
  JPEG, so each panel is only ~165 px wide and rendering the PDF at a higher dpi just upsamples
  the same pixels. The radiograph is legible as an irregular, widened metaphyseal contour and no
  further than that; **an explanation must not claim fine metaphyseal texture this image cannot
  support.**
- `imgAlt` fixed and handed to the drafter rather than left to it:
  `Clinical photograph of a child's forearm and wrist beside a plain radiograph of the same wrist,
  labelled (a) and (b).` — modality and view only, no laterality, no finding. The validator's
  `GIVEAWAY` regex would have failed anything naming the finding.
- **No other figure in pp.239-250**, checked page by page. That is a 12-page sample and does not
  license an absence claim for the rest of the section; the staging pass found none either.

### New tool: `tools\bank-harness\pd-ep-draft-brief.md` (2026-09-03)

The endpoint drafting brief, written this session because **none existed** — section 1 was drafted
from an inline brief in the prep chat, and `pd-draft-brief.md` is Chat B's House brief, wrong here
in three ways (`bank:'house'`, `pedhd-` ids, and "this bank prints no explanation boxes"). The new
brief carries the two closing markers, the boxed lead line and blockquote shape, the `box`-page
`source` variant, the `q-pd-ep-<page>` figure rule and the `imgAlt` caption rule, and it is
reusable for sections 3-9.

⚠️ **It also carries the correction that matters most: section 1 averaged near 700 words an entry
against a budget of ~250 straight recall / ~520 vignette.** Drafters are now told to read a
section-1 entry for its **shape** and never its length, and the validator prints per-entry word
counts so the overrun is visible before the splice rather than after.

### Section 3 planned from the index while section 2 drafted (2026-09-03, no pages rendered)

**Gastroenterology, pp.393–549, 67 questions.** `answered` 67 and `question` 67 agree, and both
match the contents page. 23 `notes`, 0 `other`.

- Notes slides pp.393–412 (the section's own summary run), then **p.425 and p.496 alone**, then
  p.549 (closing slide).
- First answered **p.414**, last answered **p.548**.
- **Answered run: 414–424 even · 427–495 ODD · 498–548 even.** The parity flips exactly twice, at
  p.425 and p.496 — which is the signature of the two overflow boxes and confirms them from the
  page walk alone, independently of the ≤90-word test.
- Index flags in range: `few-options` on **p.504** (read it hard); `options-differ` on 416, 422,
  424, 461, 465, 500, 504, 520, 530, 540.

**⚠️⚠️ TWO PAGES REPRINT A QUESTION ALREADY LIVE IN THIS FILE — these are folds, not new entries.**
`reprint-pd-ep.js 393 549` matched **p.457 and p.534** to **`pedep-gp-79`**, and they match each
other. `pedep-gp-79` is the recurrent-abdominal-pain question from section 1 (p.189) and it was
already filed to chapter `gastroenterology`, so the chapter is right and only the reprint is new.
Unlike the House overlap below, **this one is inside our own file and must be resolved**: confirm
all three printings on the images, keep the fuller one, fold the citations into `source`, and stage
**65, not 67, new questions** if both confirm. Cross-chapter exact reprint is fold shape 5 and is a
known shape for this project.

Also within section 3: **p.473 == p.512** — a second within-section pair to confirm on the images.

**⚠️ House overlap again, and larger than section 2's.** 20 of the 26 live `pedhd-gastro-`
questions reprint in section 3, in page order:

| endpoint page | House id |
|---|---|
| 414 · 416 · 420 · 422 · 424 | `pedhd-gastro-1` · `-2` · `-4` · `-5` · `-6` |
| 427 · 429 · 431 · 433 · 435 · 437 | `pedhd-gastro-7` … `-12` |
| 443 · 445 · 447 | `pedhd-gastro-15` · `-16` · `-17` |
| 451 · 453 · 455 · 457 | `pedhd-gastro-19` · `-20` · `-21` · `-22` |
| 534 | `pedhd-gastro-22` (the second printing of `pedep-gp-79`) |

No match surfaced for `pedhd-gastro-3`, `-13`, `-14`, `-18` or `-23`…`-26` — and per the standing
rule that is **not** an absence claim, only an OCR miss. **Recorded, NOT resolved**: neither chat
can fold into the other's file. This goes to the same single reconciliation pass as section 2's
nutrition table.

### ⚠️ Whole-body reprint sweep — sections 4–9 mapped in advance (2026-09-03)

`reprint-pd-ep.js` run over every remaining body section while section 2 drafted. Cheap,
read-only, and it means **every within-file fold in the book is known before a page is staged**
rather than discovered afterwards. The probe self-tests at 89/89 on section 1, re-confirmed today.

**A. Reprints of questions ALREADY LIVE in `questions.peds.ep.js` — these MUST be folded, not
staged.** Both are section-1 entries that section 1 had already cross-filed to the right chapter,
so only the reprint is new:

| endpoint page | already live as | its chapter | its own page |
|---|---|---|---|
| **457 and 534** (Gastroenterology) | `pedep-gp-79` | `gastroenterology` | p.189 |
| **768** (Perinatal) | `pedep-gp-70` | `perinatal` | p.171 |

If all confirm on the images, **section 3 stages 65 not 67, and section 6 stages 22 not 23.**
⚠️ Note the coincidence but do not lean on it: the pre-map already flagged section 6 as `answered`
23 vs `question` 22. A reprint and a missing unanswered twin are **different anomalies** and both
still have to be settled off the images.

**B. Within-section pairs to confirm on the images** — candidates, not verdicts:
p.586 == p.630 and p.689 == p.697 (Emergencies) · p.840 == p.888 (Neonatology) ·
p.977 == p.1047 (Infection). Section 4 (Accidents) and section 8 (Allergy) returned nothing.

**C. House overlap across the rest of the book — RECORDED, NOT RESOLVED**, same as sections 2 and
3. Live House chapter sizes for reference: `nutr` 15 · `gastro` 26 · `peri` 15 · `neo` 21 ·
`inf` 31.

| endpoint section | endpoint page → House id |
|---|---|
| 6 Perinatal | 728 → `pedhd-peri-1` · 742 → `pedhd-peri-8` |
| 7 Neonatology | 797 · 800 · 802 · 804 · 806 → `pedhd-neo-1`…`-5` · 810 → `-7` · 812 → `-8` · 824 → `-14` · 838 → `-21` |
| 7 Neonatology | 866 → `pedhd-peri-5` · 870 → `pedhd-peri-9` · 876 → `pedhd-peri-6` |
| 9 Infection | 1071 → `pedhd-inf-1` |

⚠️ **The three `pedhd-peri-` hits inside endpoint's NEONATOLOGY range are a chapter-boundary
disagreement, not an error** — the two books cut the perinatal/neonatal line in different places.
The reconciliation pass will have to pick one chapter per held question; it is not this chat's call.

⚠️ **Every zero above is an OCR zero.** Sections 4 and 8 returning no candidate means the probe
found none, not that none exists — the OCR drops whole lines, and this probe only ever compares
the first 70 normalised characters of a stem. Absence is still established on the images.

### The three `answered` ≠ `question` mismatches, narrowed to named pages (2026-09-03)

The pre-map above flagged sections 5, 6 and 9 as needing reconciliation without saying where. A
pairing walk over the index — every `question` page should be followed by an `answered` page, and
every `answered` page preceded by a `question` page — locates all three. **These are hypotheses
with a named page to test, not findings**; each still has to be settled on the image.

| section | mismatch | where the walk breaks | most likely reading |
|---|---|---|---|
| 5 Emergencies | 60 answered vs **62** question | **pp.583, 584 and 585 are three consecutive `question` pages** before the answered p.586 | one question spilling over two unanswered pages, or two whose answered printings lost their highlight |
| 6 Perinatal | **23** answered vs 22 question | **p.742 is answered but p.741 before it classed `other`** | p.741 is p.742's unanswered twin, misclassified: it carries yellow (520 px) and **only one option letter, "A"**, so it failed the option test in both OCR reads |
| 9 Infection | **96** answered vs 95 question | **p.938 is answered but p.937 before it classed `notes`** | same shape — p.938 is also on the `few-options` list, so the pair is probably a sparse layout the classifier mis-scored |

**In every case the walk breaks in exactly ONE place**, which is what makes each a single-page
question rather than a section-wide audit. Sections 3, 4, 7 and 8 pair perfectly end to end.

⚠️ **Section 6's mismatch and section 6's reprint are unrelated.** p.741/742 is a classification
artefact near the front of the section; the `pedep-gp-70` reprint is at p.768. Do not net them off
against each other — that would be an offsetting error, which no sum can see.

⚠️ Note also that **p.586 is both the answered page ending section 5's odd three-page run and one
half of the p.586 == p.630 reprint candidate.** Read it once, for both questions.


---

## ⚠️ SECTION 1 REPRINTS ITSELF — 15 of the 165 live entries are duplicates (2026-09-03)

Found by `validate-all.js`'s duplicate-stem check after the section-2 splice, not by any probe
aimed at it. **The endpoint file holds 165 entries but only 150 distinct questions.**

Section 1's last stretch reprints its own opening. Every pair below is the SAME question, and in
twelve of the fourteen groups the options and the key are byte-identical as well:

| keeper | reprinted at | shape |
|---|---|---|
| `pedep-gp-3` p.34 | p.161 | exact |
| `pedep-gp-4` p.36 | p.167 **and** p.197 | ⚠️ p.197 inserts a 5th option — see below |
| `pedep-gp-5` p.38 | p.169 | p.169 prints "less than 500 g", p.38 "less than 500"; key same |
| `pedep-gp-6` p.40 | p.173 | exact |
| `pedep-gp-9` p.46 | p.177 | exact |
| `pedep-gp-10` p.48 | p.179 | exact |
| `pedep-gp-11` p.50 | p.183 | exact |
| `pedep-gp-12` p.52 | p.185 | exact |
| `pedep-gp-13` p.54 | p.187 | exact |
| `pedep-gp-14` p.56 | p.191 | exact |
| `pedep-gp-15` p.58 | p.193 | exact |
| `pedep-gp-16` p.60 | p.199 | exact |
| `pedep-gp-17` p.62 | p.203 | exact |
| `pedep-nut-22` p.280 | p.294 | exact — inside section 2, not section 1 |

### ⚠️ Why section 1's own count check could not see this

The staging header establishes 89 **two independent ways** and both are right: 89 pages carry a
yellow highlight, and the printed numbers run 1..87 with two of them printed twice. Neither is
wrong. **Counting pages is not counting distinct questions** — every reprint has its own answered
page and its own printed number, so it passes both tests. Two independent measurements that
measure the same wrong thing agree with each other and prove nothing.

`reprint-pd-ep.js --self-test` scores 89/89 for the same reason: it matches each answered page to
*a* live entry, and a reprint pair has two pages and two entries, so nothing is left over.

### `pedep-gp-4` is the one that needs a decision, not a script

pp.36 and 167 print four options; **p.197 prints five**, inserting `Plagiocephalic` at position 2
and pushing the key from index 3 to index 4. This is the reorder-moves-the-key fold shape. The
book keys `Flattening of the skull` while offering `Plagiocephalic` — near-synonyms — as a
distractor on the same page; per the standing rule that is **noted, never disputed**, and the
`answer` stays where the bank put it.

### What this does NOT change

- Section 2's splice is unaffected apart from `pedep-nut-22`/`29`.
- The count of ANSWERED PAGES per section stays exactly as planned — the reprints are real pages
  and were really staged. What changes is the count of distinct questions.
- ⚠️ **The section 3–9 estimates are now suspect in the same way.** The pre-map found reprints
  only by comparing against already-live entries and within a section; it never asked whether a
  section reprints its own opening at its own end, which is precisely the shape found here.
  **Re-run the within-section comparison over every section before staging it**, and expect the
  same tail-reprints-head pattern.

### RESOLVED 2026-09-03 — the folds are done, 165 -> 150

All 15 reprints folded. `questions.peds.ep.js` now holds **150 entries, 0 holes, 150 distinct
ids**; boot check 0 console errors; `validate-all.js` ALL HARD CHECKS PASSED; no within-file
duplicate stem survives.

- Each keeper's `source` now names the reprint page, e.g.
  `Pediatrics endpoint part1.pdf p.34 (the same question is printed again on p.161)`.
- `pedep-nut-22`'s explanation had *cited* `pedep-nut-29` as an unfolded duplicate — the drafter
  spotted the reprint and correctly left the decision alone. That sentence became a statement
  about the two pages, so folding nut-29 left no dead id.
- **`pedep-gp-4` kept its four-option p.36 printing.** The fold rule says keep the fuller printing,
  but here the fuller printing is the *defective* one: p.197 inserts `Plagiocephalic` as a fifth
  option while still keying `Flattening of the skull`, and the bank's own box calls lambdoid fusion
  "posterior plagiocephaly" — two correct answers on one page. Serving a knowingly-defective item
  to a student is worse than serving the clean one, and both printings are recorded either way.
  The defect is written into the explanation; the key was not disputed.

⚠️ **Two entry styles coexist in the live file and a carve that knows one silently merges the
other.** Section 1 and draft-A open on a bare `{` and close on a `},` line; draft-B opens
`{ id:'...` inline and closes with ` },` on its source line. 127 bare + 38 inline = 165. The first
carve found 127 blocks and reported a plausible 127 -> 112 fold. **165 - 127 = 38 = exactly one
draft half**, which is what gave it away. Any future byte-level tool over this file must handle
both shapes and assert its block count against the loaded array length.

### Cross-bank overlap found by the section-2 splice — RECORDED, NOT RESOLVED

| endpoint | House | note |
|---|---|---|
| `pedep-nut-3` | `pedhd-nutr-3` | same stem |
| `pedep-nut-4` | `pedhd-nutr-4` | same stem |
| `pedep-nut-6` | `pedhd-nutr-6` | same stem |
| `pedep-nut-14` | `pedhd-nutr-14` | same stem |
| `pedep-gp-79` | `pedhd-gastro-22` | known from the pre-map |

⚠️ **Four of the five pair on the SAME NUMBER.** endpoint nut-3/4/6/14 against House nutr-3/4/6/14
is not coincidence — the two books are printing a shared nutrition question set in a shared order.
That is a strong lead for the reconciliation pass: **check number-for-number first**, rather than
comparing every stem against every stem. It also means the House nutrition chapter is worth
diffing against section 2 as a block once both banks close.

Neither chat folds into the other's file. This stays a journal entry until both banks are closed.
