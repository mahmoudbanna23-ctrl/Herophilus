# Sections 9, 10 and 11 — page maps, measured before staging

Measured 2026-09-05 off `content\peds\qb-pages\ocr\ep2\index.json`, ahead of the sections
themselves, so the page structure is known before an agent is addressed to a page. Same instrument
and same two questions as `endpoint-p2-s08-page-map.md`: which field gives the true count, and where
the parity flips.

## The count — `kind`, never the boolean

| section | pages | `expect` | `answered === true` | `kind === "answered"` |
|---|---|---|---|---|
| 9 — Diabetes & Endocrinology | 1079-1145 | ~~27~~ **26** | 35 | ~~27~~ **26 — see below** |
| 10 — Liver disorders | 1146-1210 | 20 | 38 | **20 ✓** |
| 11 — Malignant diseases | 1211-1269 | 23 | 32 | **23 ✓** |

⚠️ **The section 9 row above was wrong when it was written, and this file said so in the wrong
direction.** `kind === "answered"` returned 27 and `expect` said 27, so the two agreed — and both
were wrong by one. **p.1082 is not a question**; the section holds **26**. This is the first case in
either part where `kind === "answered"` itself produced a false positive rather than the boolean, so
the sentence below — "`kind` matches `expect` exactly in all three" — is left standing but must now
be read as *the two instruments agreed*, not as *the count is verified*. Sections 10 and 11 are
untouched by this; their rows are still only an index reading, like every row here.

`kind === "answered"` matches `expect` exactly in all three. The `answered` boolean over-counts in
all three — by 8, 18 and 9 — because it is a yellow-pixel threshold and this book's teaching-notes
slides are yellow-heavy. **Never count a section with the boolean.** Section 10 is the worst case in
the book so far: nearly half its "answered" pages are notes.

## Section 9 — pp.1079-1145, **26** questions (CORRECTED ON THE IMAGE, 2026-09-05)

| run | pages | count | parity |
|---|---|---|---|
| 1 | 1092, 1094 | 2 | even |
| 2 | 1097 | 1 | **odd** |
| 3 | 1100-1144 | 23 | even |

Kinds as the index reports them: notes 14 · question 26 · answered 27. **The 27 is one too many and
the 26 question pages were right all along.**

### ⚠️ What this file got wrong, and how it was settled

It printed a fourth run, "1082 | 1 | even", and built on it a twinless-question puzzle: 27 answered
pages against 26 question pages, so one question must have no unanswered twin, with p.1082 and
p.1097 named as the two candidates. **The premise was a false positive and the puzzle does not
exist.** Section 9's staging half A read pp.1079-1091 and 1095-1099 individually rather than
spot-checking, and measured:

- **p.1082 is not a question.** It is an ordinary teaching-notes slide headed "Management"
  (multidisciplinary team, education, insulin therapy bullets) — no stem, no options, no highlighted
  key. It sits inside an unbroken notes run **pp.1079-1090**, and its yellow section header is the
  same shape as the un-flagged yellow headers on pp.1080/1081/1083/1084/1088/1089. It is the only
  page of that run the index mistagged `answered`.
- **p.1097 is not twinless either.** Its twin is a split pair: the stem and options are printed
  plain on **p.1095**, and the figure the stem refers to — a home glucose-monitoring diary,
  captioned "Figure 26.1" — is printed **alone on p.1096**. The index tags a bare figure page
  `notes` because it carries no stem, options or key text. Same shape as section 8's two EEG
  tracings, which is why `val-pd-ep2.js` now carries `figPage: { 3: 1096 }` for this section: **Q3's
  crop comes off p.1096, not off the answered page.**
- **p.1090 is a plain "Questions" title slide** and the section's first real question is printed
  unanswered at p.1091, answered at **p.1092**.

Three independent confirmations of 26: the printed question numbers run **1..26 with no gap** across
all three staging parts, written by three halves that never saw each other's files; 3 (pp.1092,
1094, 1097) + 23 (the even run 1100-1144) = 26; and the answered/question page counts reconcile
exactly once p.1082 leaves the answered set.

**End boundary confirmed on the image by half C:** p.1145 is the section's closing Arabic
supplication — full page, multicolour, no stem, options or box — and **p.1146 is the "Liver
disorders" banner**, section 10's opener. The book's section convention holds.

Tools corrected for the count: `val-pd-ep2.js` (`ans: 26` plus the `figPage` override),
`merge-parts-ep2.js` (`expect: 26`). `splice-pd-ep2.js` and `sweep-staged-ep2.js` carry no count for
section 9 and needed no edit.

The opening block **pp.1079-1090** and the gaps at 1095-1096 and 1098-1099 are teaching notes or
figure/twin pages; pp.1079-1091 and 1095-1099 have now been read individually, so this is measured
rather than assumed.

## Section 10 — pp.1146-1210, 20 questions

| run | pages | count | parity |
|---|---|---|---|
| 1 | 1168, 1170, 1172, 1174 | 4 | even |
| 2 | 1177-1203 | 14 | **odd** |
| 3 | 1206 | 1 | even |
| 4 | 1209 | 1 | **odd** |

Kinds: notes 25 · question 20 · answered 20. Every answered page has its twin at p−1.

**pp.1146-1167 carry no question at all** — 22 pages of opening teaching notes, the longest such
block in the book. The parity flips three times across only 20 questions, so this section is
proportionally the most irregular; address pages from this table.

## Section 11 — pp.1211-1269, 23 questions

A clean even-page run, **1224 through 1268**, 23 questions, no parity flip, every twin at p−1.
pp.1211-1223 are the opening teaching notes. This is the low-risk section of the three.

## Standing instruction

These maps are the index's account, not the page's. The index has already been proved wrong in this
book — section 6 had four notes pages the boolean called answered, section 8 has two answered pages
whose twin is missing or mislabelled, and **section 9 proved that `kind === "answered"` can be
wrong too, which is the failure this file was built to be immune to.** **Each half still checks its own boundaries on the
image and reports what it finds**, and a disagreement between the map and the page is the finding,
not an inconvenience.
