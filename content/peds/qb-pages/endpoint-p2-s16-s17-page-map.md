# Sections 16 and 17 — page map, and why this is TWO sections

Measured 2026-09-06 from `content\peds\qb-pages\ocr\ep2\index.json` (all 1,993 rows) and from the
OCR text of the boundary pages. ⚠️ **OCR is a search index, not a source** — every claim about a
question's content is re-established on the page image by the staging pass. What this file settles is
*shape*: where the sections start and stop, how many questions each holds, and which pages are not
questions at all.

## ⚠️ THE JOURNAL SAID ONE SECTION. THE HARNESS ALREADY KNEW THERE WERE TWO.

`progress\resume-peds-endpoint-part2.md` carried "section 16, Recently modified Questions,
pp.1922–1940" from a page-shape survey run before any of the tail was read. That is section 16, and
it is right as far as it goes. **p.1941 is a second red-text divider reading "Recently Added
Questions", and pp.1942–1949 are eight more question pages under it.**

⚠️ **The prose journal is what was incomplete, not the tooling.** `merge-parts-ep2.js`,
`val-pd-ep2.js` and `splice-pd-ep2.js` each already carry a section 17 config — id prefixes
`pedep2-rm-` and `pedep2-ra-`, staged files `endpoint-p2-s16-recent-mod.array.js` and
`endpoint-p2-s17-recent-add.array.js`, and the counts 18 and 8 that this file measured independently
and matched. **An earlier version of this file said section 17 "was never in the plan"; that was
wrong, and it was wrong because I checked the journal and not the harness.** Read both. The counts
below are a second, independent measurement of what the configs already assert, which is worth
something — it is not a discovery.

| section | banner page | question pages | questions | banner text |
|---|---|---|---|---|
| 16 | 1922 | 1923–1940 | **18** | *Recently modified Questions* |
| 17 | 1941 | 1942–1949 | **8** | *Recently Added Questions* |

**26 questions in the two sections together**, and they close the book.

## ⚠️ THE SHAPE IS DIFFERENT FROM EVERY OTHER SECTION IN THIS BOOK

Sections 1–15 print every question **twice** — an unanswered page, then the answered page with the
key highlighted — so staging reads every second page and the page formula has a step of 2. **These
two sections print each question ONCE.** `index.json` classifies pp.1923–1940 and pp.1942–1949 as
eighteen and eight consecutive `answered` pages with no `question` page between them anywhere, which
is the signature the section-boundary survey found and could not explain.

**So: `p` is the question's only page, the step is 1, and there is no twin to check.** Do not carry
the twin-checking method, the +2 arithmetic, or the overflow-box detection test into these sections
unexamined — a box that overflows here would land on the *next question's* page, not on a blank one.

## Section 16 prints each question's ORIGINAL number, and they are scattered

The printed number at the head of each page, in page order:

```
p1923=14  p1924=15  p1925=36  p1926=49  p1927=50  p1928=62  p1929=42  p1930=35  p1931=59
p1932=71  p1933=3   p1934=41  p1935=16  p1936=36  p1937=70  p1938=25  p1939=55  p1940=21
```

Not a sequence, not sorted, and **36 appears twice** (p.1925 and p.1936). This is what "recently
modified" means: each page reprints a question **under the number it carries in its home section**,
with whatever was modified. So `pr` here is not a position in this section — it is a back-reference
to somewhere else in the book, and `n` is the only sequential index.

⚠️ **That makes section 16 a reprint problem before it is anything else**, and a harder one than the
model exams: a modified reprint may differ from its original in the stem, in one option, or in the
key. Three of the six fold shapes this stream has measured are exactly that (respelled · reworded
stem with a dropped filler option · reordered options moving the key index). **Run
`reprint-pd-ep2.js` over the staged section before any drafting, and when a candidate matches, read
BOTH printings — the whole point of this section is that something changed.**

Section 17's pages print **no number at all**, which fits "recently added": they are new questions
with no home section to be numbered from. `pr` is empty for all eight.

## What is NOT a question — the tail, pp.1950–1993

`index.json` calls **p.1977 and p.1984 `answered`** and every other page from 1950 to 1993 `notes`.
**Both are false positives and the tail stages nothing.** The evidence is structural and was read on
the OCR of six pages: pp.1976, 1977, 1978, 1983, 1984 and 1985 all print the same thing — an
unnumbered bulleted list of one-sentence teaching points, each a fact with no stem, no options and no
key (*"Haemolytic-uraemic syndrome (HUS) presents with anemia, renal failure, and thrombocytopenia
after bloody diarrhea…"*). 1977 and 1984 are indistinguishable from the pages either side of them
that the same classifier called notes.

⚠️ **This is the classifier erring in the direction part 1's close-out named as the expensive one, and
also in the cheap one, on the same run.** Part 1 found it calling a real question page "notes"
(pp.1889/1890); here it calls a notes page "answered" twice.

⚠️ **This was already settled, on the page, before this file existed.** `val-pd-ep2.js` carries it:

> `// SECTION 18, Exam Night Review, pp.1950-1992, HAS NO ENTRY AND MUST NOT GET ONE. It is 43`
> `// pages of prose revision cards -- 41 classify as notes, and the 2 that classify as` `answered`
> `// (pp.1977, 1984) are revision cards with lettered bullets, read and confirmed not to be`
> `// questions.`

and `merge-parts-ep2.js` records the boundary pages as verified by eye on p.1923 and p.1949. **An
earlier version of this file claimed nobody had ever looked at the tail; that was wrong.** The
section-17 staging pass looks at p.1977 and p.1984 anyway — a second eye on the pages that decide
whether questions are left in the book is cheap — but it is a confirmation, not a first reading, and
section 18 gets no harness entry under any outcome short of finding a real question there.

## One figure reference, already visible

p.1923 (n1, printed 14) reads *"other members of their family have been tested (see opposite
figure)"* — a pedigree question. **"Opposite" refers to the layout of the book this question was
lifted from, and p.1922 is the section divider**, so the figure is either on p.1923 itself or it did
not come across with the reprint. The staging pass looks and records which; it does not assume.

## Page arithmetic

Trivial and stated only so nobody derives one: **section 16 is `p = 1922 + n` for n1–n18; section 17
is `p = 1941 + n` for n1–n8.** Step 1, no boxes on separate pages, no gaps.
