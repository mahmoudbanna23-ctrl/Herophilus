# Sections 9, 10 and 11 — page maps, measured before staging

Measured 2026-09-05 off `content\peds\qb-pages\ocr\ep2\index.json`, ahead of the sections
themselves, so the page structure is known before an agent is addressed to a page. Same instrument
and same two questions as `endpoint-p2-s08-page-map.md`: which field gives the true count, and where
the parity flips.

## The count — `kind`, never the boolean

| section | pages | `expect` | `answered === true` | `kind === "answered"` |
|---|---|---|---|---|
| 9 — Diabetes & Endocrinology | 1079-1145 | 27 | 35 | **27 ✓** |
| 10 — Liver disorders | 1146-1210 | 20 | 38 | **20 ✓** |
| 11 — Malignant diseases | 1211-1269 | 23 | 32 | **23 ✓** |

`kind === "answered"` matches `expect` exactly in all three. The `answered` boolean over-counts in
all three — by 8, 18 and 9 — because it is a yellow-pixel threshold and this book's teaching-notes
slides are yellow-heavy. **Never count a section with the boolean.** Section 10 is the worst case in
the book so far: nearly half its "answered" pages are notes.

## Section 9 — pp.1079-1145, 27 questions

| run | pages | count | parity |
|---|---|---|---|
| 1 | 1082 | 1 | even |
| 2 | 1092, 1094 | 2 | even |
| 3 | 1097 | 1 | **odd** |
| 4 | 1100-1144 | 23 | even |

Kinds: notes 14 · question 26 · answered 27.

⚠️ **Two things to check on the image before drafting.** The section counts **27 answered pages but
only 26 question pages**, so exactly one question here has no clean unanswered twin anywhere. The
two candidates are **p.1082** and **p.1097** — the only two answered pages whose p−1 is a notes page
rather than a question page. Whichever half owns them must look at 1081, 1082, 1096 and 1097 and say
which of the two is genuinely twinless and whether the other's twin was mislabelled as notes. No
figure on either page may be cropped until that is settled.

The opening block pp.1079-1081 and the scattered gaps at 1083-1091, 1095-1096 and 1098-1099 are
teaching notes; confirm no question hides in them.

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
book — section 6 had four notes pages the boolean called answered, and section 8 has two answered
pages whose twin is missing or mislabelled. **Each half still checks its own boundaries on the
image and reports what it finds**, and a disagreement between the map and the page is the finding,
not an inconvenience.
