# Section 9 — "Diabetes & Endocrinology" — drafting notes

Written by the parent chat 2026-09-05, after staging merged and swept, before the drafting halves were
addressed. Everything here is measured off the staged array (`endpoint-p2-s09-endocrine.array.js`), the
sweep output, or the page images — never off a prompt.

**Staged: 26 entries, n 1..26, pp.1092-1144. One folds (n23 into n2, see below), so 25 are drafted.**
`pr` equals `n` for every entry. Option counts: 21
questions with five options, 5 with four (n4, n18, n19, n22, n24). Every entry carries a printed
explanation box — **there is no gap-fill in this section**, which is unusual and worth knowing before
you start writing.

---

## ⚠️ The section holds 26 questions, not the 27 three tools and the page map said

This is the section's headline finding and it was made by a staging half, not by an instrument.

**p.1082 is not a question.** It is an ordinary teaching-notes slide headed "Management" — no stem, no
options, no highlighted key — sitting inside an unbroken notes run pp.1079-1090. The OCR index tagged
it `kind: "answered"` because its yellow section header is the same shape as the un-flagged yellow
headers on pp.1080/1081/1083/1084/1088/1089. **This is the first time in either part that
`kind === "answered"` has produced a false positive** — until now only the `answered` boolean had.

Three independent confirmations of 26: the printed question numbers run **1..26 with no gap** across
three staging parts written by three halves that never saw each other's files; 3 (pp.1092, 1094, 1097)
+ 23 (the even run pp.1100-1144) = 26; and the answered/question page counts reconcile exactly once
p.1082 leaves the answered set.

Corrected for the count: `val-pd-ep2.js` (`ans: 26`), `merge-parts-ep2.js` (`expect: 26`), and
`endpoint-p2-s09-s11-page-map.md`. Parts B and C were staged from the false 27 and were **renumbered
by the parent after writing** — B from n:9-18 to n:8-17, C from n:19-27 to n:18-26. Their headers say
so. If you see a stale "27" anywhere, it is stale.

---

## ⚠️ n3's figure is NOT on the answered page

n3 (Catherine, p.1097) refers to a home glucose-monitoring diary. The answered page reprints the stem,
the options and the key but **not** the figure. The diary — captioned "Figure 26.1" — is printed alone
on **p.1096**, and the stem's own twin (stem + options, unanswered) is on p.1095.

`val-pd-ep2.js` carries `figPage: { 3: 1096 }` for this section. **The crop is cut from p.1096.**
Basename: `q-pd-ep2-1096.jpg` — with the `2`. This is the second section running to need the override;
section 8's two EEG tracings were the first.

n3 also has its explanation box printed alone on **p.1098**, so its `source` takes the box form:
`Pediatrics endpoint part2.pdf p.1097 (the explanation box is printed alone on p.1098)`.

**n3 is the only figure in the section** — measured, every page read.

---

## The fold — one, settled on the images

The sweep raised exactly one within-section pair, and both pages were then looked at:

| | | |
|---|---|---|
| **n2** p.1094 — SURVIVES | James, 11, T1DM, collapses playing football at a holiday camp | key 3 (buccal glucose gel) |
| **n23** p.1138 — DROPPED | the same vignette, condensed | key 3 (buccal glucose gel) |

Measured on both page images: the same patient, the same scenario, the same five options in the same
order, and the same key — option D, highlighted yellow, bold and underlined on both pages. Both staged
transcriptions were confirmed exact. The only differences are the stem's compression ("What should be
his immediate management?" against "What is the immediate management?") and the option letters being
upper case on p.1094 and lower on p.1138. Stem similarity read only 0.560 **because the second
printing is condensed, not because it is a different question.** Neither page carries a figure.

**⚠️ n23 IS NOT DRAFTED. Section 9 drafts 25 entries, not 26.**

### The two boxes are different, and neither is a superset — how that is handled

The reason this needed a look rather than a count: **the book prints a different explanation box under
each printing**, and each carries a clinical detail the other omits — p.1094 has "cannot swallow",
p.1138 has "without needing IV access". Neither is fuller, so "keep the fuller printing" does not
decide it.

**Ruling (parent, 2026-09-05): n2 survives and its own box is the boxed explanation, quoted verbatim
and unmixed.** The p.1138 box is not discarded — the detail it adds is written into the expansion
below the rule, attributed to the reprint in prose, e.g. *"the same question is printed again at
p.1138, where the file's box adds that buccal gel needs no intravenous access."* **The two boxes are
never merged into one blockquote**: a box is the record of what one page prints, and blending two
printings would fabricate a box the book never printed.

`source` on the survivor: `Pediatrics endpoint part2.pdf p.1094 (reprinted at p.1138)`.

The sweep also flagged two shared option **menus**, which pair questions and never fold them:
n2/n23 (the pair above), and **n9/n10/n11/n12 — four DKA-and-hypoglycaemia questions sharing five
identical options.** Four questions off one menu means the discriminating detail is in the vignette
every time. Read each stem for what it actually asks; do not let one entry's reasoning bleed into the
next three.

The sweep also flagged two shared option **menus**, which pair questions and never fold them:
n2/n23 (the pair above), and **n9/n10/n11/n12 — four DKA-and-hypoglycaemia questions sharing five
identical options.** Four questions off one menu means the discriminating detail is in the vignette
every time. Read each stem for what it actually asks; do not let one entry's reasoning bleed into the
next three.

---

## ⚠️ For the end-of-stream cross-bank sweep — a second chapter-shaped House overlap

**n1 through n9 map one-for-one onto House chapter 14** — `pedhd-endo-1` … `pedhd-endo-9`, similarity
0.686–1.000, **every key agreeing**. n16 matches `pedhd-endo-16` (0.739) and n23 matches
`pedhd-endo-2` (0.560, through the n2 reprint). Three more hit on the option set with a diverged stem:
n13 ≈ `pedhd-endo-13`, n14 ≈ `pedhd-endo-14` (options 1.000), n15 ≈ `pedhd-endo-15` (options 1.000).
n26 ≈ `pedhd-liv-3` on options only.

This is the same shape section 8 found against House ch.12 and section 5 found against ch.13. **Nothing
folds across banks and nothing folds across the part-1/part-2 boundary while both chats are live** —
recorded here, acted on at the end of the stream.

Against live endpoint part 1 (record only, another chat writes that file): n25 ≈ `pedep-emg-28`
(0.683, keys agree), n18 ≈ `pedep-neo-37` and `pedep-mf3-16` on options. n20 hits four part-1 entries
and three live part-2 entries at 0.571–0.600 with **keys differing everywhere** — that is a
`Which of the following is NOT…` template matching other negative-stem questions, not a reprint. Do
not fold any of them.

---

## Chapters — the rulings file outranks this file and your prompt

**`endpoint-p2-s09-chapter-rulings.md` is binding. Open it.** Chapters are assigned **per entry** from
what the question is about, never per section. Section 4 landed 24 entries outside its "expected"
chapter and section 8 did the same; a section that comes back uniformly `endocrine` is a symptom, not
a result.

The rulings that will decide most of this section: diabetes and DKA split on whether the vignette **is**
an acute episode; cerebral oedema is always `endo-dka`; hypoglycaemia splits at 28 days of age;
adrenal disease is `endo-thyroid`; CAH and Cushing each have a second shelf (`puberty` /
`growth-puberty`) chosen by what is asked; Turner splits three ways; GH is `growth-puberty`; obesity is
`nutrition`.

Three entries where the call is not obvious and the rulings file must be read closely rather than
skimmed:

- **n18** (p.1128) — pre-eclampsia, 2.2 kg baby at 37 weeks, admitted to SCBU, answer *hypoglycemia*.
  The hypoglycaemia ruling splits at 28 days and this baby is hours old.
- **n26** (p.1144) — a 5-month-old with prolonged jaundice and pale stools whose answer is
  *hypothyroidism*. It is printed in the endocrine section and matches a House **liver** question on
  its option set. Assign on what the question tests, not on the symptom it opens with.
- **n7** (p.1106) — a communication question about a newborn with ambiguous genitalia; the answer is
  what you say to the parents, not a diagnosis.

**Measured absence, stated so a half does not go looking:** there is no rickets, no hypocalcaemia and
no tetany anywhere in pp.1079-1145. If you find calcium-metabolism content, **that disagreement is the
finding** — report it, do not quietly file it.

---

## Standing shape for every entry

- `answer` is **always** the bank's printed key. A key you disagree with is **recorded in
  `explanation`, never moved** — and never brought to the user.
- `stem` and `opts` are byte-identical to the staging. Typos and punctuation stay; numbers and units
  are the one thing to check against the page.
- Boxed explanation: lead line `**The endpoint file prints this explanation:**`, blockquote of the
  verbatim `expl`, `---`, then the expansion, then the closing marker as the **final** line:
  `*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*`
  (curly apostrophe, U+2019).
- `source`: `Pediatrics endpoint part2.pdf p.<staged p>`.
- `imgAlt` on n3 is required **and must not answer the question** — it is a home glucose diary; say
  modality and view, nothing about what the readings show.
- A gap in the course material is **answered** and tagged `not taken from the course material`, never
  declared.
- Every crop is looked at.
