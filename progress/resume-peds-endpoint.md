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
| 1 Growth & Puberty | 5–210 | 89 pages → **73 live** | ✅ spliced `1f05e45` · **16 self-reprints folded 2026-09-03** (14 exact, then 2 reworded) |
| 2 Nutrition | 211–392 | 76 pages → **75 live** | ✅ spliced · 1 self-reprint folded (nut-29) |

| 3 Gastroenterology | 393–549 | 67 → **65** | ✅ **CLOSED 2026-09-03** — drafted, validated, spliced 148→215, folded 215→**213**. 65 `pedep-gi-*` live. |
| 4 Accidents & poisoning | 550–562 | 3 | ✅ **CLOSED 2026-09-03** — staged, drafted, validated, spliced 213→**216**. No fold. 3 `pedep-acc-*` live. |
| 5 Pediatrics Emergencies | 563–702 | 60 | not started |
| 6 Perinatal | 703–773 | 23 → **22?** | p.768 reprints `pedep-gp-70` — fold, do not stage |
| 7 Neonatology | 774–903 | 53 | not started |
| 8 Allergy | 904–928 | 9 | not started |
| 9 Infection & Immunity | 929–1156 | 96 | not started |
| Model exams 1–4, training 1–2 | 1157–1936 | 379 | last; expected mostly reprints |
| Exam Night Review | 1937–1990 | 0 (prose) | nothing to stage |

**Live total: 216 entries from 235 answered pages** (2026-09-03, after §4). The two numbers differ
by the 19 folds and are both correct — pages staged is not questions held. Always say which one you
mean.

⚠️ This paragraph used to sit **between rows 2 and 3 of the table above**, which silently split it
into a header-less second table — rows 3–9 rendered as pipe-paragraphs. Same trap as the one that
broke `pedep-gp-8`'s explanation: **a markdown table's rows must sit on consecutive lines**, and
nothing checks it but reading the rendered page.

Live file `app\data\questions.peds.ep.js` as of 2026-09-03, after the section-4 splice and all
three fold passes: **216 entries, 0 holes, 653,808 bytes.** Boot check **0 console errors**
(`QUESTIONS 4654`, 153 chapter rows, 123 with questions); `validate-all.js` all hard checks passed
across 5 files, no within-file duplicate stem left. ⚠️ **Chars and bytes differ by ~1.2% in this
file** — it is full of typographic quotes and arrows — so always say which you mean; a figure that
once stood here as "bytes" was a char count. (The 89/148/213-entry figures are earlier states and
are dead.)

**▶ RESUME HERE.** ✅ **Sections 1–4 are CLOSED**, each written up at the foot of this file, and all
three fold passes are done. **Next is §5 Emergencies, pp.563–702, 60 answered pages** — nothing for
it is staged, rendered or wired yet, so it starts from the beginning of the standing pipeline:

1. Read `content\peds\qb-pages\ocr\ep1\index.json` over pp.563–702 — confirm the answered-page
   list, look for overflow boxes appearing as short `notes` pages, and note every `options-differ`
   and `few-options` flag. ⚠️ **`options-differ` is usually two bad OCR reads of one option, not a
   real difference** (§4 proved this) — check both `.txt` reads before spending a re-render.
2. Add a section-5 row (`pedep-emg-`, `endpoint-s05-emergencies`, `PEDEP_S05_STAGED`) to all three
   of `val-pd-ep.js`, `splice-pd-ep.js` and `merge-parts-ep.js`; `node --check` each.
3. Pull the answered pages with `tools\ep-index\pull.py`, then stage in **two halves** (60 pages is
   the first section since §1 big enough to want splitting) — briefs modelled on
   `<scratchpad>\s04-brief.md`, which states the **ZERO-BASED** key convention correctly.
4. `merge-parts-ep.js 5 --write` → draft both halves → `val-pd-ep.js 5 A` and `5 B` →
   `splice-pd-ep.js 5 --write` → fold sweep as a separate pass → `validate-all.js` →
   `boot-check.js` → commit with an explicit pathspec.

⚠️ Run `reprint-pd-ep.js 563 702` before staging: §5 is Emergencies and House holds a populated
`emergencies` chapter, so cross-bank hits are likely. **A cross-bank match adds `alsoIn`; it never
removes an entry and never changes the staging count.**

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

Also within section 3: **p.473 == p.512** — confirmed on the images to be **two distinct questions**, not a fold; they differ in option e. See the section-3 block below.

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

### ~~OPEN~~ **CLOSED** 2026-09-03 — fold pass 2, two REWORDED reprints, diagnosed here and folded in the next section

**The two duplicate detectors are complementary and neither alone is sufficient.**
`validate-all.js` compares **transcribed stems** with an exact normalised match; `reprint-pd-ep.js`
compares **OCR page text** with an 8% edit-distance tolerance. Exact-match is structurally blind to
a reprint whose wording moved, however slightly. Run both, every section.

Proof: the exact check declared section 1 clean after the 15 folds. The OCR probe, run over the
same range, then found two more genuine reprints —

| keep | drop | why the exact check missed it |
|---|---|---|
| `pedep-gp-8` (p.44) | `pedep-gp-72` (p.175) | same vignette **reworded**; options and key identical |
| `pedep-gp-10` (p.48) | `pedep-gp-82` (p.195) | *"main drive"* vs *"main **driver**"* — one word |

⚠️ **Test the auditor before believing the audit.** `reprint-pd-ep.js --self-test` skips the
within-section comparison entirely (`if (selfTest) continue;`), which is exactly why it never
surfaced section 1's self-reprints. Run it in **normal** mode over the section's page range.
**Section 2 was run the same way and came back clean** — only p.280 == p.294, already folded.

**Status: `<scratchpad>\fold2.js` is written and its assertion fired — `carved 149, expected 150`
— so it refused to write.** The live file is intact and un-rewritten (150 entries, 0 holes, 150
distinct ids, both keepers' `source` still unchanged). **The cause is now established:**

⚠️⚠️ **`fold.js`'s own output moved the first entry onto the array line.** Its final join is
`lines.slice(0, head).join('\n') + kept.join(',\n\n')` — **no newline between the two**, so the
header line `var Q_PEDS_EP = [` was concatenated with the first block's `{` and the file now opens

    var Q_PEDS_EP = [{
      id:'pedep-gp-1',

That is valid JS and every check passed, which is why nothing caught it: `node --check` clean, boot
0 errors, `validate-all.js` green, array length 150. But `isOpen = /^\{(\s|$)/` cannot match a line
beginning `var`, so the carve starts at entry 2 and sees 149. Measured on the live file: **111 bare
`{` + 38 inline `{ id:` = 149 opening lines against 150 `id:'pedep-` lines**, and the one orphan is
line 8, whose previous line is `var Q_PEDS_EP = [{`.

⚠️ **A THIRD entry shape now exists, and it is one entry only — the first.** Any byte-level tool
over this file must handle bare `{`, inline `{ id:`, **and the head `[{`**. The durable fix is for
the tool to emit a newline after the header so the file returns to two shapes; do that in the same
pass as the fold, and re-assert the block count against the loaded array length afterwards.

**Next action, in order:** fix `fold2.js`'s carve (recognise the `[{` head and re-emit `[` + newline
+ blocks), dry-run until it reports `150 -> 148`, then `--write`; then `node --check`, entry/hole/id
count from the loaded array, `boot-check.js`, `validate-all.js`, and commit `questions.peds.ep.js`
plus this journal with an explicit pathspec.

### ✅ CLOSED 2026-09-03 — fold pass 2 done, 150 → 148

`node tools\bank-harness\fold2-pd-ep.js --write`. Live file now **148 entries, 0 holes, 148
distinct ids, 465,937 chars / 471,472 bytes**. `node --check` clean · `boot-check.js` **0 console
errors** (`QUESTIONS 4586 · THEORY 153 · MODULES 4 · 153 chapter rows`) · `validate-all.js`
**ALL HARD CHECKS PASSED (5 files)** and **no within-file duplicate stem survives in
`questions.peds.ep.js`** — the only peds duplicate groups left are the five known cross-bank
House overlaps, which stay recorded and unresolved.

⚠️ **The journal's "470,768 bytes" was a CHARACTER count, not bytes** — the pre-fold file was
470,768 chars / 476,420 bytes. The file is full of typographic quotes, dashes and arrows, so the
two numbers differ by about 1.2%. Say which one you mean; a byte figure compared against a char
figure reads as a change that never happened.

**The carve fix.** `normaliseHead()` splits `var Q_PEDS_EP = [{` back onto two lines *before*
carving, and the re-emit puts the newline back, so **the file is now back to two entry shapes**
(110 bare + 38 inline = 148, head shape gone). Three further guards were added and all three
earned their place:

- **the block count is asserted against the LOADED array length**, not a hard-coded `EXPECT`. A
  hard-coded 150 tells you the carve disagrees; the loaded length tells you the carve is wrong.
- **a dead-id guard**: every id about to be dropped is checked against every other block first.
  It is what settled which id survives each pair — see below.
- **the output is parsed and its array length checked before a byte is written.**

### Which id survives, and why it is NOT the fuller printing

⚠️ **`pedep-gp-72` says in its own explanation that IT is the version to keep** — "This printing
carries the fuller box... and is the version to keep". The drafter was right about the box and the
tool still keeps `pedep-gp-8`, because the dead-id guard settles it: **`pedep-gp-25` cites
`pedep-gp-8`** (it is the adopted-child sibling of the same vignette, sharing the option menu).
Dropping gp-8 would leave a dead id; dropping gp-72 leaves none. Nothing references gp-72 or
gp-82 at all. So the id is chosen by the reference graph and **the fuller printing is preserved as
content instead** — which is what the standing rule is actually protecting.

Same for `pedep-gp-10` / `pedep-gp-82`: `pedep-gp-82` cross-referenced gp-10, not the other way
round.

### ⚠️ What the fold carried over rather than dropped

A fold that keeps the earlier id silently discards the later entry's whole explanation. Both
dropped entries held material the keeper did not, so both keepers were extended in the same pass
(`explFrom`/`explTo`, anchored on the closing marker, which is unique inside a block):

- **`pedep-gp-8`** gained p.175's fuller box verbatim — it adds "Constitutional delay would show
  delayed puberty signs" — plus gp-72's **familial short stature vs CDGP comparison table** and the
  lecture's two cases (Case 1 = this boy; Case 2 = the 13-year-old with a delayed bone age).
- **`pedep-gp-10`** gained p.195's fuller box verbatim and gp-82's **four-phase table**.

⚠️ **gp-82's phase table carried UNTAGGED outside knowledge and it has now been tagged.** Its
"Share" column (fetal 30% · infantile 15% · childhood 40% · pubertal 15%) is **not in the cached
lectures** — grepped all 58 files; the only phase share the material states is `14) Puberty.txt`'s
"Add 15% to final adult height". The carried-over table drops the Share column, and a tagged
sentence gives the usual figures marked *not taken from the course material*. Two rows of gp-72's
CDGP table (age at presentation, final height) got the same tag. Everything else in both tables was
verified line by line against `13) Short stature.txt` and `14) Puberty.txt` before it was carried.

### ⚠️⚠️ A MARKDOWN TABLE'S ROWS MUST SIT ON CONSECUTIVE LINES — and nothing in the pipeline sees it

The first run joined **every** line of the inserted text with a paragraph break (`\n\n`), which
turns a table into a run of pipe-paragraphs that renders as garbage. It was written to disk and
**passed every check we have**: the file parsed, `node --check` was clean, the array held 148 with
0 holes, `boot-check.js` reported 0 console errors, `validate-all.js` passed every hard check.
**It was caught only by printing the rendered explanation and reading it.**

Fixed in the data (the collapse was confined to exactly the two entries the fold touched, proved
by walking id boundaries) and in the tool, which now has `para()` — an insert is an array of
paragraphs, and a table is itself an array of rows joined by a single `\n`.

⚠️ **Existing entries encode tables correctly** (`| header |\n|---|---|\n| row |`), so the shape to
copy was already in the file. Check the encoding of a live table before writing a new one.

**The tool and the data are proved consistent.** `<scratchpad>\prove-tool.js` re-ran the committed
`fold2-pd-ep.js` against `git show HEAD:app/data/questions.peds.ep.js` in the scratchpad and diffed
its output against the live file: **IDENTICAL, byte for byte.** Worth repeating after any hand-patch
of a file a tool owns — otherwise the tool quietly stops reproducing its own output.

**▶ NEXT: `node tools\bank-harness\reprint-pd-ep.js 393 549`** in NORMAL mode (not `--self-test`,
which skips the within-section comparison entirely) over section 3, Gastroenterology, before any
page of it is staged. Expect it to confirm p.457 and p.534 against `pedep-gp-79` and p.473 ==
p.512, and expect it to find the tail-reprints-head pattern that sections 1 and 2 both had.

---

## ✅ Section 3 — Gastroenterology, pp.393–549: the reprint sweep, and what it changed

`node tools\bank-harness\reprint-pd-ep.js 393 549`, **NORMAL mode** — not `--self-test`, which
short-circuits the within-section comparison entirely (`if (selfTest) continue;`) and would have
found none of the three candidates below.

    answered pages in range: 67
    p.414 … p.455   ==  HOUSE pedhd-gastro-1 … -21     (17 pages — the pre-map exactly)
    p.457           ==  endpoint pedep-gp-79 | HOUSE pedhd-gastro-22 | p.534 (within section)
    p.473           ==  p.512  (within section)
    p.534           ==  endpoint pedep-gp-79 | HOUSE pedhd-gastro-22
    cross-file candidates 21 | within-section candidates 2

### The arithmetic, SETTLED on the images: 67 answered pages → **65 new entries**

The State table's "67 → 65?" was a guess made before the sweep; an intermediate "64" was written
after it and was **wrong**. All four candidate pages have now been read at 200 dpi, each in
isolation, and the sweep's three candidates resolve into two different outcomes:

| Candidate | What the images show | New entries |
|---|---|---|
| p.534 (n=60) | **exact reprint** of the live `pedep-gp-79` — same stem, same options, same key | **0** |
| p.457 (n=22) | **reworded reprint** of the same `pedep-gp-79` — same vignette, same key, one option's text differs | **0** |
| p.473 (n=30) / p.512 (n=49) | **NOT a fold. Two distinct questions on one template** | **2**, not 1 |

67 − 2 = **65**. The number matches the original guess, but it was reached by different reasoning
and the guess was right by coincidence — it assumed p.473/p.512 folded and did not know p.457
existed. Two errors cancelled. **An offsetting error is invisible to a sum: count the parts.**

**p.473 vs p.512 differ only in option e**, and that is the whole question:

- p.473 — `e. Treatment is by repeated finger dilatation`, and **e is the key**
- p.512 — `e. Resolves spontaneously`, and **e is the key**

Options a–d and the stem are identical, and each page prints its own explanation box. This is the
standing rule paying out exactly as written: **a shared option menu PAIRS questions, it never folds
them — name the discriminating token or you matched a template.** The discriminating token here is
option e. A corroborating detail found by the adjudicating agent: p.473/p.512 print **lower-case
a–e** while p.457/p.534 print **upper-case A–E**, so the four pages are two structurally
distinct instances, not four printings of one thing.

**p.457 vs p.534 differ only in option C**, and the difference points outside the book:

- p.189 (the live `pedep-gp-79`) and p.534 — `C. Liver function tests`
- p.457 — `C. Inflammatory markers and liver function tests`

**p.457's wording is House's `pedhd-gastro-22` verbatim.** So the endpoint book prints this one
vignette **three times from two different upstream sources**, and its own two printings disagree
with each other. Both fold into `pedep-gp-79`; the p.457 option-C wording is carried across into the
keeper when the fold pass runs, because it is the printing that agrees with the other bank.

⚠️ **`pedep-gp-79` was re-verified on the p.189 image while this was adjudicated and is a correct
transcription** — option C really is `Liver function tests`, key D. Nothing in the live bank needed
repair. **I described that id to two staging agents from memory as a GORD/reflux question; it is a
functional-abdominal-pain vignette.** Both agents flagged the mismatch instead of bending their
transcription to fit it — "escalate, never decide" working as designed. **Read the id before
describing it to an agent** (project rule: never write a page number, filename or id from memory).

⚠️ The 21 cross-file hits against the **House** bank are NOT folds. A cross-bank match adds the
bank to `alsoIn`; it never removes an entry, and the endpoint printing is staged in full either
way. Only the two within-section hits and the two hits against a live *endpoint* id can subtract.

### The layout, confirmed against `ocr\ep1\index.json` rather than taken from the pre-map

- **notes / non-question pages: 393–412 · 425 · 496 · 549.** 393–412 are the section's study-note
  slides; 549 is the closing slide; **425 and 496 are overflow explanation-box pages**, each
  carrying the box of the question printed before it (n=6 on p.424, n=41 on p.495).
- **67 answered pages**, first 414, last 548. `kind == "answered"` and `kind == "question"` both
  come to 67 here — the two counts agree, unlike sections 5, 6 and 9.
- **The page parity flips twice, and both flips are explained by the box pages:** even 414–424,
  then **odd** 427–495, then **even** 498–548. A parity change with no box page beside it would be
  a missing page; these two have one each.
- Index flags to check on the image: `options-differ` on **416 · 422 · 424 · 461 · 465 · 500 ·
  504 · 520 · 530 · 540**, and `few-options` on **504**.

### Staging setup done 2026-09-03

- **`SEC` row 3 added to both `val-pd-ep.js` and `splice-pd-ep.js`** — prefix **`pedep-gi-`**,
  staging file `endpoint-s03-gastro.array.js`, var `PEDEP_S03_STAGED`, draft base
  `endpoint-s03-gastro.draft`. ⚠️ `val-pd-ep.js`'s `chapter` field is **documentation only** — every
  entry's chapter is validated against the real chapter set loaded from `modules.js`, so section 3
  is free to spread across `gastroenterology` / `gi-diarrhoea` / `gi-abdopain` and into `liver` /
  `liver-hep`. No single chapter id would have been right in that field.
- **69 native 800×450 JPEGs pulled** (the 67 answered pages + the two box pages) with
  `tools\ep-index\pull.py`, then **pruned to exactly those 69** — the unanswered twins were
  rendered by the contiguous range and deleted, so no agent can waste a read on one.
- **Two `lean-drafter` halves** (cap 2 live, never `general-purpose`) writing
  `endpoint-s03-gastro.part-A.js` (n=1–34, pp.414–481) and `.part-B.js` (n=35–67, pp.483–548),
  against `<scratchpad>\s03-brief.md`. Both were told to **stage all 67 verbatim and merely mark
  the reprint candidates in `note`** — folding is the parent's call, made on the images, after the
  two printings can be compared as transcribed text.

### ✅ Staging complete 2026-09-03 — 67 entries, merged and verified

`endpoint-s03-gastro.array.js`, **67 entries, n 1..67, pp.414–548, 49,779 chars**, built by
`merge-parts-ep.js 3 --write` from the two halves. `node --check` clean.

- **No printed explanation box on n=64 (p.542), n=65 (p.544), n=67 (p.548)** — `expl:''`, which is
  a correct value at staging. The drafting pass writes those three from the lecture cache and must
  end each with the "Written for this bank" marker.
- **Boxes printed alone on their own page: n=6 → p.425, n=41 → p.496.** Both confirmed; each box
  belongs to the question printed before it.
- `pr == n` on all 67 — the book's own numbering does not drift anywhere in this section.
- No figures anywhere in section 3.

**⚠️ The merge's one surprise, and it was real: `option counts: {"4":11,"5":56}`.** The pre-map
flagged `few-options` on **one** page (p.504), so eleven four-option questions read as a mass
transcription failure — and all eleven sit in the half whose first agent died mid-run, which is
exactly where a dropped option would hide. It was not a failure:

- The index's own option-label detection reads `["A","B","C","D"]` and no E on all eleven pages.
  `few-options` never fired because its threshold sits **below** 4 — p.504 tripped it at 3 labels.
- Staged option counts agree with the **union of both OCR reads** on **65 of 67** pages. Taking
  `max()` of the two reads instead of the union produced a third false disagreement (n=2, p.416,
  where native missed A and hires missed C — union recovers all five). **Use both halves, and
  union them: that is what the rule means.**
- The two genuine disagreements were both read on 200 dpi images and **both staging readings were
  confirmed**: **n=41 p.495** prints five options lower-case a–e with **e** highlighted (OCR dropped
  the long fifth option, which was the key — the one under-read that would have mattered);
  **n=45 p.504** prints four options upper-case A–D with **C** highlighted, as its agent noted.

So the four-option run is a property of the book, not of the transcription. It begins at n=38 and
is confined to the second half — the first 34 questions are uniformly five-option. Combined with
the upper/lower-case split found during the fold adjudication, section 3 is visibly assembled from
**two upstream sources**, and the four-option run is the seam.

**⚠️ Do NOT delete the two folded pages from staging.** The pipeline is *stage all → draft all →
splice all → fold as a separate pass afterwards* — the splice gate enforces "every staged id
drafted exactly once", so a staging file short of its page count fails the gate. This is how
sections 1 and 2 ran (89 and 76 staged, 73 and 75 live) and how `f4444d6` took 150 → 148.
Section 3 splices at **67**, taking the live bank 148 → 215, and the fold pass then takes it to
**213** by folding n=22 and n=60 into `pedep-gp-79`.

**▶ NEXT: the drafting pass** — two `lean-drafter` halves writing `endpoint-s03-gastro.draft-A.js`
(n=1–34) and `.draft-B.js` (n=35–67), then `val-pd-ep.js 3 A` / `3 B`, then
`splice-pd-ep.js 3 --write`, boot check, `validate-all.js`.

### ⚠⚠ The key convention was WRONG in section 3 staging, and no check could have caught it

Sections 1 and 2 stage `key` as a **ZERO-BASED** index — `opts[key]` is the correct option, matching
the app field `answer`. **My section-3 staging brief specified 1-BASED**, and both agents complied
exactly. `val-pd-ep.js` compares `q.answer` to the staged `key` **with no conversion**, so drafting
section 3 from that record would have set **every one of the 67 answers one option too far** — and
it would have **passed every automated check in the harness**, because nothing here knows which
option is actually correct. Staging, validator and splicer would all have agreed with each other
and all been wrong. This is the sum-vs-parts rule in a new place: **two tools agreeing is not
evidence when they read the same field from the same file.**

Found by reading a section-2 draft entry beside its staging row before writing the section-3
drafting brief: `pedep-nut-3` answers "3.9 kg", the **4th** option, with `answer:3`.

**Fixed 2026-09-03**, in this order:

1. Both part files rewritten, `key` decremented, anchored on the `p:<page>, key:<n>` token — 67
   replacements, 34 + 33, matching the entry counts exactly. ⚠️ A bare `key:` grep counts **68** in
   part-A: `n=22`'s note contains the English phrase "key: reassurance". Anchor on the field.
2. `merge-parts-ep.js` range check moved to `0..opts.length-1`, and **its `key:0` sentinel deleted**
   — 0 is now the first option, not "no highlight". Four entries (n=59, 63, 66, 67) were keyed to
   the first option and had begun raising false "no highlight" warnings.
3. Re-merged and re-verified against the two pages already read at 200 dpi: **n=41 p.495 key=4 →
   the vitamin K option** (image: highlighted **e**, 5th of 5) and **n=45 p.504 key=2 → "Probiotic
   treatment"** (image: highlighted **C**, 3rd of 4). Both land correctly. All 67 keys in range;
   distribution across positions 0–4 is 17/13/14/14/9, with no pile-up at either end.

⚠️ **Two escaping traps hit in the same edit, both already documented and both still expensive.**
Python's text writer translated the files to **CRLF**, and `merge-parts-ep.js` splits entries on a
bare `\n\n` — the merge then reported `DOES NOT PARSE: Unexpected token '{'`, which looks exactly
like a corrupt staging file and is not. Peds files are pure LF; restored, 203 + 197 CRLF. Then the
Bash heredoc **collapsed a `\\` to `\`** inside the Python source, so a JS string lost its escape and
`merge-parts-ep.js` stopped parsing. **Write through `newline=''`, and never type a literal
backslash inside a heredoc.**

⚠️ **Correction:** the p.473/p.512 pair is **n=30 and n=49**, not the "n=39/n=53" written in the
first version of this block and in commit `3ee4436`'s message. The page numbers were right
throughout and the adjudication is unaffected — only the staging indices were misquoted, from
memory rather than from the file. Confirmed from the array: both print the identical Hirschsprung
stem and identical options 0–3, differ only at option 4 (`Treatment is by repeated finger
dilatation` versus `Resolves spontaneously`), and **each is keyed to its own option 4**.

---

## ✅ Section 3 CLOSED 2026-09-03 — 148 → 215 → 213

Both halves drafted by `lean-drafter` (cap 2 live), validated, spliced, folded. Final state:
**213 entries in `questions.peds.ep.js`, 0 holes, 65 `pedep-gi-*` live** — the predicted yield
exactly. `validate-all.js` ALL HARD CHECKS PASSED (5 files); `boot-check.js` **0 console errors**,
`QUESTIONS 4651 · THEORY 153 · MODULES 4 · 153 chapter rows (122 with questions)`, peds 51 rows.

⚠️ That `QUESTIONS 4651` includes **Chat B's concurrent House work** — it is not a measure of this
stream. Section 3 contributed 65.

### The two adjudications that needed a page image, not an argument

- **`pedep-gi-13` (p.439), the one validator warning.** Half A quoted the box as “…red throat, and
  cervical **lymph nodes** suggests a viral etiology…”; staging had “cervical **lymphadenopathy**”.
  A subagent read p.439 at native 800×450: **staging is right**. The draft was repaired to the
  staged wording. Half A had reused “lymph nodes” from the box's own later clause (“inflamed
  mesenteric lymph nodes”) — a plausible slip that no automatic check could have settled, which is
  exactly why the validator warns rather than guesses.
- **`pedep-gi-67` chapter moved `endo-dka` → `gi-abdopain`.** The stem asks which condition is a
  *medical* cause of acute abdominal pain (answer: DKA). Half B filed it by its answer; the other
  abdominal-pain mimics in the same half (mesenteric adenitis `pedep-gi-13`, appendicitis
  `pedep-gi-54`) are all in `gi-abdopain`, and that is the chapter a student revising the topic
  opens.

Two other chapter fits were **reviewed and left alone**: `pedep-gi-18` (testicular torsion) and
`pedep-gi-32` (coeliac screening at T1DM presentation) sit in `gi-abdopain` / `gi-diarrhoea`
because the book prints both inside its GI section and no better chapter exists; `pedep-gi-51`
(oral thrush in a 2-week-old) → `perinatal` is the best available fit — there is no oral or
candidiasis chapter in the peds module.

### ⚠️ The splicer could not find its insertion point, and the message reads like a corrupt file

`splice-pd-ep.js 3` reported **“live: neither a closing entry nor an empty array found”**. The live
file was fine. The splicer matched a fixed tail `'\n}\n];'` — closing brace on a line of its own —
but **the fold passes rewrite entries and leave the brace on the last field's line**
(`source:'…' }`), so after fold 2 the tail no longer existed. Fixed in `splice-pd-ep.js`: find the
array's closing `];`, walk back to the last `}` before it, and require only whitespace between the
two. Both shapes now splice. **This will recur on every section from here** — sections 1 and 2
spliced before any fold pass had run, which is why it appeared only now.

### The `pedep-gp-79` fold — three printings, and a seam between two upstream sources

`fold3-pd-ep.js` (new; carve, dead-id guard and loaded-length assertion copied from
`fold2-pd-ep.js`, plus a generic `edits` list so a chapter move needs no new mechanism):

| Printing | Stem | Options | Key |
|---|---|---|---|
| `pedep-gp-79` p.189 (survivor) | — | “Liver function tests” | index 3 |
| `pedep-gi-60` p.534 (dropped) | **byte-identical to p.189** | identical to p.189 | index 3 |
| `pedep-gi-22` p.457 (dropped) | reworded | **“Inflammatory markers and liver function tests”**, “paediatric” | index 3 |
| House `pedhd-gastro-22` (live, not touched) | **identical to p.189** | **identical to p.457** | index 3 |

**House pairs p.189's stem with p.457's options.** The endpoint file is assembling this question
from two upstream printings rather than reprinting itself — the same seam the four-option run at
n=38+ and the upper/lower-case split already pointed at in this section.

⚠️ **The options were NOT rewritten.** The survivor keeps the wording *its own cited page* prints;
p.457's variant is recorded in the explanation. Rewriting an option to a wording p.189 does not
print would make the entry misquote its own citation — **transcription fidelity outranks “keep the
fuller printing” field by field**, and fold pass 2 set the precedent by touching only `source` and
`explanation`. Nothing of substance was lost: the survivor was already 662 words and covered both
dropped explanations entirely (same lecture, same alarm-signal list, same four distractors); it is
now 938.

`pedep-gp-79`'s chapter also moved `gastroenterology` → `gi-abdopain`. Its filing note had
justified `gastroenterology` on the grounds that the question sat in the Growth and Puberty
section; that reasoning stopped holding once the two Gastroenterology printings were folded in.

### ⚠️ OPEN — the 21 cross-bank House hits in section 3 have NOT been actioned

`reprint-pd-ep.js` found **21 pages in section 3 matching House entries** (p.414–455 ≈
`pedhd-gastro-1`…`-21`). A cross-bank match **adds a bank to `alsoIn`; it never removes an entry**,
so none of them affected the 65. But **no `alsoIn` was written for any of them**, here or in
sections 1 and 2. This is one deliberate pass across the whole endpoint bank, not a per-section
side effect, and it is still owed. ⚠️ It reads `questions.peds.js` (Chat B's file) but must only
ever **write** `questions.peds.ep.js`.

### Where section 3 leaves part 1

**213 of 855.** Sections 4–9 (pp.550–1156, 244 answered pages) and the model exams (pp.1157–1936,
379 expected reprints) are unstaged. **Part 1 is not closed.** Next section by the standing
pipeline is **§4 Accidents, pp.550–562, 3 answered pages** — small enough to stage in one half.

---

## ✅ Section 4 CLOSED 2026-09-03 — 213 → 216, no fold

Three questions, pp.557 / 559 / 561, all five-option, all filed `accidents` ("Accidents and
poisoning") — the chapter had **zero** questions in either bank before today, so this is the first
content it has ever carried. `pedep-acc-1` paracetamol overdose · `pedep-acc-2` road-traffic trauma
in compensated shock · `pedep-acc-3` extensive burn. Staged and drafted in one half each by a
lean-drafter; validator ALL CHECKS PASSED first time, no adjudication needed on any key.

**No fold, and the sweep is the evidence.** Every new stem was scored against all 456 other live
peds entries (213 endpoint + 243 House, normalised-token Jaccard). Best matches: `pedep-acc-1`
**0.317** (`pedhd-card-14`), `pedep-acc-2` **0.311** (`pedhd-neo-3`), `pedep-acc-3` **0.200**
(`pedep-gp-89`). Folds in this bank have run above 0.85; nothing here is close, and no exact-stem
match exists. **No cross-bank `alsoIn` either** — House holds no accidents question at all, so
section 4 adds nothing to the `alsoIn` debt below.

### Two index flags run down, both resolved before drafting

- **`options-differ` on p.559 was SPURIOUS.** The index compares OCR of the unanswered and answered
  printings; both print option B as "Blood glucose measurement", and the flag came from two bad
  reads of that one option — "glucose measurement" (p.558, the word *Blood* dropped entirely) and
  "Blocxi glucose measurement" (p.559). ⚠️ **This is the shape to expect from that flag: the OCR
  differs, not the book.** Check it against both `.txt` reads before spending a re-render on it.
- **`pedep-acc-3`'s stem is genuinely truncated by the book**, not by transcription. It gives an
  "extensive burn" and analgesia already given, and names no burn area, depth, weight or time since
  injury; the lead-in starts mid-sentence with a lowercase "which". Confirmed identical on the
  unanswered twin p.560, so both printings carry it. Staged verbatim, `note` set, and the drafting
  brief told the drafter not to repair it.

### The burn question is the section's one gap-fill

`pedep-acc-3` prints **no explanation box**, and **no peds lecture in the cache covers burns** —
swept `content\peds\lectures\`, the only hit for "burn" is a hospitalisation aside in
`specific bacterial infection.txt`. So it was answered and tagged per the standing rule, never
declared: capillary leak, fluid-before-dressing sequencing, no prophylactic antibiotics,
inhalational-injury indications for intubation, and the 20-minute/hypothermia limit on cold water
each carry `(not taken from the course material)` at the claim. What *is* sourced is cited:
`4) Shock in pediatrics_.txt` lists burns among the causes of dehydration and shock and puts fluid
resuscitation first, and `3) Pediatric resuscitation.txt` carries the ABCDE priority.

The other two are lecture-grounded throughout, and two distractor attributions were checked against
the source rather than taken on trust: urinary alkalinisation is the salicylate intervention
(`5) Poisoning in children_.txt` lines 94–95) and desferrioxamine the iron chelator (line 135).

### Verification

`validate-all.js` **ALL HARD CHECKS PASSED (5 files)**; the soft duplicate-stem list is the
pre-existing ENT/ophtho set, unchanged. `boot-check.js` **0 console errors** —
`QUESTIONS 4654 · THEORY 153 · MODULES 4 · 153 chapter rows`, now **123 with questions** (was 122;
`accidents` is the new one), peds 51 rows. 216 entries live, 0 holes.

### Where section 4 leaves part 1

**216 of 855.** Sections 5–9 (pp.563–1156, 241 answered pages) and the model exams (pp.1157–1936,
379 expected reprints) are unstaged. **Part 1 is not closed.** Next by the standing pipeline is
**§5 Emergencies, pp.563–702, 60 answered pages** — the first section since §1 large enough to want
splitting across two drafting halves. The cross-bank `alsoIn` pass (21 House hits in §3, plus §1
and §2) is still owed and still unstarted.
