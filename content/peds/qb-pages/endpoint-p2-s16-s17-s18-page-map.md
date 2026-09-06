# Endpoint part 2 — sections 16, 17 and 18 page map

The tail of `Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf`, pp.1922–1993. Measured from
`content/peds/qb-pages/ocr/ep2/index.json` on 2026-09-06, with the disputed pages read by eye the
same day.

Two of these sections stage questions and one stages nothing. All three claims below were
inherited from the resume brief and have now been checked; the brief was right about all three, and
the checking still found something worth writing down.

## Section 16 — Recent Modifications, pp.1922–1940

| | |
|---|---|
| banner | p.1922, `notes` |
| answered | **18 pages, pp.1923–1940** |
| unanswered twins | **none** |
| id prefix | `pedep2-rm-` |

**The answered pages are consecutive — step 1 across all 17 intervals.** This section does not
print an unanswered twin before each question the way sections 1–15 do, so there is no parity to
track and no formula to break. `n` maps to `p` as `p = 1922 + n`.

    n1=1923   n2=1924   n3=1925   n4=1926   n5=1927   n6=1928
    n7=1929   n8=1930   n9=1931   n10=1932  n11=1933  n12=1934
    n13=1935  n14=1936  n15=1937  n16=1938  n17=1939  n18=1940

## Section 17 — Recent Additions, pp.1941–1949

| | |
|---|---|
| banner | p.1941, `notes` |
| answered | **8 pages, pp.1942–1949** |
| unanswered twins | **none** |
| id prefix | `pedep2-ra-` |

Same shape as section 16: consecutive answered pages, step 1 across all 7 intervals, `p = 1941 + n`.

    n1=1942   n2=1943   n3=1944   n4=1945
    n5=1946   n6=1947   n7=1948   n8=1949

## Section 18 — Exam Night Review, pp.1950–1992 — STAGES NOTHING

This section takes no entry and must not get one. It is prose revision cards: four teaching pearls
per page, each fusing a clinical vignette clause and its answer into a single sentence, with heavy
yellow highlighting on the key phrase of each sentence and red text on the mechanistic clause. There
is no question number, no option list and no separate explanation box anywhere in it.

**⚠️ The classifier disagrees, and it is wrong.** It tags **p.1977 and p.1984** as `answered` while
calling the other 41 pages of the range `notes`. Both were rendered and read on 2026-09-06, against
p.1976 as a control:

- p.1977 — pearls on HUS, perinatal hepatitis B transmission, a headache red flag, and epiglottitis.
- p.1984 — pearls on D-dimer in DIC, thrombocytosis against DIC, 17α-hydroxyprogesterone in CAH, and
  observation for ITP without active bleeding.
- p.1976 — the control, classified `notes`: renal agenesis and Potter, hepatitis A, breath-holding
  spells, fluid management. **Structurally indistinguishable from the other two.**

The classifier keys on yellow coverage, and this section's format highlights ordinary prose
sentences the way an answered page highlights its key option. All 43 pages carry that signal; only
these two crossed the threshold. So the two `answered` tags are a threshold artefact, not two
questions — and the reason is recorded here because the same signal will fire again if anything
re-runs the classifier over this range.

This does not soften the standing warning that **the classifier errs in both directions.** It called
two pages of the part 1 book `notes` when they held a real question, and it flagged four boxes in
section 15 correctly. It is a search index, never a verdict; every disputed page is looked at.

## Past the last section

p.1993 is the final page of the book, classified `notes`, yellow coverage 0. The index holds
**1,993 rows**, matching the PDF's page count exactly.

## What the closing page-coverage test must account for

Sections 16 and 17 contribute **26 answered pages** (18 + 8) with no twins, and section 18
contributes **none**. A coverage test that expects every `answered` page in pp.1950–1992 to be cited
will report p.1977 and p.1984 as gaps. They are not gaps — they are this file's finding, and the
test should exclude section 18 by range with a pointer here.

---

## Added 2026-09-06, after staging — what the page furniture says

⚠️ **A second file, `endpoint-p2-s16-s17-page-map.md`, was written later the same day by someone who
had not found this one, and it was DELETED once the duplication was seen.** Everything below is the
part of it that this file did not already say. Two claims it made are not carried across, because
both were wrong: that section 17 "was never in the plan" (it is configured in `merge-parts-ep2.js`,
`val-pd-ep2.js` and `splice-pd-ep2.js`, with prefixes `pedep2-rm-`/`pedep2-ra-` and the counts 18 and
8), and that nobody had ever looked at pp.1977/1984 (this file records that reading). **Read the
harness configs and this file before writing a third one.**

### Section 16 prints each question's ORIGINAL number, and they are scattered

The printed number at the head of each page, in page order — confirmed on every page by the staging
pass, which matched all eighteen:

```
p1923=14  p1924=15  p1925=36  p1926=49  p1927=50  p1928=62  p1929=42  p1930=35  p1931=59
p1932=71  p1933=3   p1934=41  p1935=16  p1936=36  p1937=70  p1938=25  p1939=55  p1940=21
```

Not a sequence, not sorted, and **36 appears twice** (p.1925 and p.1936). That is what "recently
modified" means: each page reprints a question **under the number it carries in its home section**.
So `pr` here is a back-reference to somewhere else in the book, not a position in this section, and
`n` is the only sequential index. Section 17's pages print **no number at all**, which fits "recently
added" — `pr` is empty on all eight, confirmed page by page.

⚠️ **That makes section 16 a reprint problem before it is anything else.** Measured after staging:
**17 of its 18 are reprints of live entries** — eleven byte-identical in stem, options and key, and
six modified. Only n11 (p.1933, printed 3) has no live counterpart in either part. Section 17 is the
opposite, as its name implies: **six of its eight are new**, and only n6 and n7 restate live
questions.

### One figure reference, and where the figure is

p.1923 (n1, printed 14) reads *"other members of their family have been tested (see opposite
figure)"*. "Opposite" belongs to the layout of the book this question was lifted from; p.1922 is the
section divider. **The staging pass looked: the pedigree is printed on p.1923 itself**, top right, and
is carried on the entry. p.1925 also prints a Jones-criteria infographic the stem does not reference.

### The tail, confirmed on the page

Four pages opened directly (p.1993 on hires as well), plus p.1992 to explain p.1993:

- **p.1950** — a title/divider slide, "Exam Night Review", with a "YOU CAN DO IT" ribbon graphic.
  Not a question and not a teaching-point list; it is the divider that opens section 18.
- **p.1977** and **p.1984** — exactly the shape this file describes above, confirmed independently.
- **p.1993** — a blank white page, on both resolutions. No text, no graphic.
- **p.1992** — the book's closing slide: a full-page sunset photograph with a yellow Arabic closing
  supplication over it, the same shape as part 1's p.244.

**So the book's content ends cleanly on p.1992 and p.1993 is a trailing blank**, not a page of
content cut off mid-thought — which is the thing worth knowing, because a truncated last page would
mean questions lost rather than a book that finished.
