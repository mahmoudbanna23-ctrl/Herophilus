# Section 10 — drafting notes

Binding for both section-10 drafting halves, alongside `pd-ep2-draft-brief.md` (the general rules)
and `endpoint-p2-s10-chapter-rulings.md` (the chapter authority). Where this file and the staged
array disagree, **the staged array wins** — it was read off the page images; this file was written
from the array and from two adjudications.

Section 10, "Liver disorders", pp.1146-1210 of `Pediatrics endpoint part2.pdf`. **20 staged,
19 drafted.** Staging is `endpoint-p2-s10-liver.array.js` (`PEDEP2_S10_STAGED`, n 1..20,
pp.1168-1209, `pr` equal to `n` throughout). Ids are `pedep2-liv-<n>`, so the drafted ids run
1..16 and 18..20 with **17 deliberately absent** — see the fold below.

## The two halves

| half | entries | pages | file |
|---|---|---|---|
| A | n1-n10 (10) | pp.1168-1187 | `endpoint-p2-s10-liver.draft-A.js` |
| B | n11-n20 minus n17 (9) | pp.1189-1209 | `endpoint-p2-s10-liver.draft-B.js` |

Both figures are in half A. The fold is in half B's range.

## ⚠️ n17 is FOLDED — half B must not draft it

n17 (p.1201) is a **reprint of `pedep2-ren-34`, already live from section 7** (p.886). Adjudicated
page against page in `endpoint-p2-s10-fold-adjudication.md`: the same vignette, the same four
options in the same order, the same key, no figure on either page. The book shelved a
nephrotic-syndrome question inside the liver section — **the book's own mis-shelving, not a
transcription error** — which is ruling 6 of the chapter-rulings file, found before staging and
confirmed on the page.

**The fold is already applied to the live entry.** `pedep2-ren-34`'s `source` now reads
`p.886 (reprinted at p.1201, inside the liver-disorders section)`, and its expansion carries
p.1201's differently worded box quoted and attributed, because neither box is a superset of the
other: p.886 states the general infection risk, p.1201 adds the diagnostic inference from the
oedema and names complement loss as well as immunoglobulin loss. Half B does nothing about it
beyond skipping n17. `splice-pd-ep2.js` declares `folded: [17]` for this section, so the gap is
named rather than silent.

## ⚠️ Two pairs that look like folds and are NOT

Both were adjudicated against the page images and **both entries of each pair are drafted**:

- **n18 (p.1203) / n19 (p.1206)** — the same stem template ("Which of the following statements
  about/concerning X is the most factually correct?") applied to hepatitis B and hepatitis A, with
  opposite keys (DNA virus / RNA virus) and disease-specific distractors throughout.
- **n11 (p.1189) / n20 (p.1209)** — both "Which of the following is true about/regarding …", but
  n11 is hepatitis-A-specific virology and natural history (key: cure after 4 weeks) and n20 is
  general acute viral hepatitis (key: jaundice not evident in all cases). No shared option text.

This is the negative-stem / statement-template signature section 9 met first. **Cross-reference the
sibling in the expansion rather than folding it** — say what the other printing asks and how the
option ladder differs, the way `pedep2-ren-35` points at `pedep2-ren-13`.

## Chapters — per entry

Applying `endpoint-p2-s10-chapter-rulings.md`. ⚠️ **That file cites the UNANSWERED twin's page
number** (its "Q2 (p.1169)" is this array's n2 at p.1170); the numbering is the printed question
number, which equals `n`, so match on the number, not the page.

| n | page | chapter | why, in one line |
|---|---|---|---|
| 1 | 1168 | `liver` | 3-day-old, hepatomegaly, umbilical-stump ooze, hypoglycaemia first — the metabolic-hepatitis shape `liv-8` owns (ruling 5) |
| 2 | 1170 | `liver` | pale stool + bruising + hepatomegaly: cholestatic side of the ruling-1 fork |
| 3 | 1172 | `neonatal` | stool and urine explicitly normal in colour — ruling 1's other side, whatever the printed key |
| 4 | 1174 | `liver-hep` | HBsAg-positive mother's newborn is `liv-13`'s own pathway, not `infection-vaccine` (ruling 3) |
| 5 | 1177 | `liver-hep` | Wilson's disease — see the gap tag below (ruling 7) |
| 6 | 1179 | `liver` | biliary atresia, `liv-5` |
| 7 | 1181 | `liver-hep` | hepatitis A, `liv-11` |
| 8 | 1183 | `liver` | galactosaemia, `liv-8` (ruling 5) |
| 9 | 1185 | `liver-hep` | variceal bleeding on chronic HBV — `liv-15`'s own complication list (ruling 4) |
| 10 | 1187 | `liver` | total 12 / direct 9 mg/dL, 75% conjugated — cholestatic (ruling 1) |
| 11 | 1189 | `liver-hep` | hepatitis A facts, `liv-11` |
| 12 | 1191 | `liver-hep` | hepatitis A incubation period, `liv-11` |
| 13 | 1192-1193 | `haematology` | no bilirubin in the stem at all, Hb 15 → 10.2, "next step in management" — ruling 2's `haem-9` side |
| 14 | 1195 | `neonatal` | bilirubin rising on phototherapy, "most likely cause of the jaundice" — `nnj-5` |
| 15 | 1197 | `neonatal` | "most important cause of jaundice in the first 24 hours" — same shape as n14 |
| 16 | 1199 | `liver-hep` | which symptom of acute hepatitis is not universal |
| 17 | — | — | **FOLDED into `pedep2-ren-34`, not drafted** |
| 18 | 1203 | `liver-hep` | hepatitis B virology and serology, `liv-12` |
| 19 | 1206 | `liver-hep` | hepatitis A virology, `liv-11` |
| 20 | 1209 | `liver-hep` | acute viral hepatitis in general, `liv-10` |

That is **`liver` 5 · `liver-hep` 10 · `neonatal` 3 · `haematology` 1 = 19**. A half that reads a
page and disagrees with a row here should say so and escalate rather than file quietly — the
rulings file measured n2, n3, n4, n5, n8, n9, n10, n13, n14, n15 and n17 against the theory deck
directly; the remaining rows are this file applying the same rulings and are the softer ones.

## ⚠️ n5 — Wilson's disease is a measured gap in the course material

Ruling 7: Wilson disease appears **once in the whole peds corpus**, in the neurology deck's
basal-ganglia causes-of-chorea table, as a movement disorder — never as a liver disease. **Answer
it and tag it**, per the standing gap rule: write the mechanism (caeruloplasmin, copper deposition
in liver, basal ganglia and cornea) and the eye sign as the expansion needs them, carrying
`not taken from the course material` as a short tag on those claims, not as a dead-end sentence.
Shape to copy: `entep-throat-103`. The chapter stays `liver-hep`.

## ⚠️ Three explanation boxes are printed on the page AFTER their question

The most in any section of either part. The staged `box` field carries the page; the `source` shape
is the section-9 one:

- n4 — question p.1174, box printed alone on p.1175 →
  `Pediatrics endpoint part2.pdf p.1174 (the explanation box is printed alone on p.1175)`
- n18 — question p.1203, box on p.1204
- n19 — question p.1206, box on p.1207

## Four questions print no box at all

**n10, n12, n13 and n16.** Write the explanation from the cached lecture and end it with the
marker, exactly:

`Written for this bank — Pediatrics endpoint part2.pdf prints no explanation here.`

⚠️ **CORRECTED 2026-09-05, after half B caught it.** This file first printed the marker as
`Written for this bank — the endpoint file prints no explanation here.`, which is **not** the string
`val-pd-ep2.js` checks: its `UNBOXED_MARK` constant (line 238) and `pd-ep2-draft-brief.md` line 168
both name the file, not "the endpoint file". Half B followed the validator over these notes, said so,
and passed clean. The rule that made that safe is the one at the top of this file — **the notes are
not the source.**

The marker never lives in `source`. n10's boxlessness was confirmed during staging by checking
that p.1188 is the next question's own unanswered twin rather than a missed overflow box — it is
not a staging miss.

The other fifteen drafted entries carry a printed box: lead line
`**The endpoint file prints this explanation:**`, blockquote of the staged `expl` verbatim, `---`,
the expansion, and the closing marker as the **final** line:

`*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*`

## The two figures (half A)

Both crops are cut, both were looked at, and both are already written to `app\assets\q\`.
`image` stores the basename **with the 2**:

| n | page | `image` | `imgAlt` |
|---|---|---|---|
| 3 | 1172 | `q-pd-ep2-1172` | `Close-up colour photograph of an infant's face.` |
| 5 | 1177 | `q-pd-ep2-1177` | `Close-up colour photograph of an eye.` |

Use those `imgAlt` strings as written. Both are deliberately confined to modality and view: n3's
photograph shows the facial signs of congenital hypothyroidism and n5's shows a ring at the iris
margin, and **naming either would answer its own question**. The detailed read of what is visible
belongs in the expansion, below the box, where it cannot be seen before answering.

n3's crop is 620×400 and ~26 KB, slightly under this bank's usual 652×408 floor. That is the
printed photograph's own size — it sits inside a thin printed border and the crop is snug to it;
extending further would pull in page background, not more picture. Recorded so the next crop does
not read it as a convention change.

## The four-question shared option menu — n6, n7, n8, n9

All four print the identical five-item ladder in the same order: **Hepatitis A · Hepatitis B ·
Biliary atresia · Galactosaemia · Primary sclerosing cholangitis**, with four different keys. A
shared menu **pairs questions and never folds them**, and the discriminating clinical token must be
named in each expansion or the match was to a template rather than to a question:

- **n6** → biliary atresia: a 3-week-old reassured that this is breast-milk jaundice, with **pale
  stools and hepatomegaly** — the pair of signs that overturns the reassurance and starts `liv-5`'s
  six-week clock.
- **n7** → hepatitis A: recent **travel to rural India**, diarrhoea and vomiting — faecal-oral
  exposure in a 14-year-old, an age at which none of the infantile options is possible.
- **n8** → galactosaemia: a 5-week-old **failing to gain weight, with cataracts** — the ocular sign
  none of the other four produces.
- **n9** → hepatitis B: **Chinese origin**, moved 2 years ago, blood-stained vomiting and
  splenomegaly — vertical transmission and portal hypertension, not a cholestatic infant.

Say in each of the four that the option ladder is shared with the other three and name which token
carries it. Where a sibling id helps, point at an existing id rather than repeating a table.

## Other things measured before drafting

- The section's opening teaching block is **pp.1146-1167** — 22 pages with no question at all, the
  longest such block in the book. `liv-15`'s complication list is printed there at pp.1162-1164,
  which is the on-page source ruling 4 leans on.
- The count of 20 was confirmed on the images **twice**: by the chapter-rulings agent, which opened
  all twenty question pages, and again page by page by both staging halves. After section 9, where
  `kind === "answered"` produced its first false positive, that is no longer optional.
- The handoff between staging halves was proved rather than assumed: half A read p.1190 and
  confirmed it is n12's unanswered twin.
- `val-pd-ep2.js` and `merge-parts-ep2.js` already carried 20 for this section and needed no edit,
  and neither figure sits off its answered page, so there is no `figPage` override here.

## Cross-bank matches — recorded, folded by nobody yet

The sweep put **n1-n9 one-for-one onto House chapter 19 (`pedhd-liv-1` … `pedhd-liv-9`, similarity
0.893-1.000, every key agreeing)** — the fourth chapter-shaped overlap between the two banks — plus
**n14 ≈ `pedhd-neo-8`** (0.736, keys agree). **Nothing folds across banks while both chats are
live.** These belong to the end-of-stream cross-bank sweep and are recorded here only so the sweep
does not have to rediscover them. Do not add `alsoIn`, do not touch `questions.peds.js`.
