# Peds endpoint part 2, sections 16 and 17 — fold adjudication

The last two question sections of `Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf`:
section 16, "Recently modified Questions", pp.1923–1940, 18 staged; section 17, "Recently Added
Questions", pp.1942–1949, 8 staged. Adjudicated 2026-09-06 against
`endpoint-p2-s16-recent-mod.array.js` and `endpoint-p2-s17-recent-add.array.js`, which hold the
verbatim transcription of every page, read on the image by the staging pass.

**Every one of the 26 gets a verdict below.** A silent candidate list is not a verdict — that rule
is what turned section 16 from 17 reprints into 18, and it is written up in §1.3.

**Method.** The staged text was compared to the live text field by field: stem string equality,
option list element by element, key index. That is a stricter test than the sweep's similarity
score and it is the one that decides here. No page image was opened for this adjudication; the
staging pass had already read all 26 and its notes record what each page prints. Where the
field-by-field comparison and the sweep disagreed, the comparison won.

**Pool searched:** all three peds banks, 1,721 live entries — `questions.peds.ep2.js` (624, this
stream), `questions.peds.ep.js` (704, endpoint part 1) and `questions.peds.js` (393, House).
⚠️ **Both endpoint files carry `bank:'endpoint'`, so a part-1 match is WITHIN-bank and folds
normally; a House match is cross-bank and is recorded only.**

---

## 1. Section 16 — all 18 are reprints, and none is drafted

The section name is the finding. Every page reprints a question already live in
`questions.peds.ep2.js`, under the number it carries in its home section — hence the scattered
`pr` values in the page map, and hence 36 appearing twice.

Citations for all 18 were written onto the live entries by
`tools/bank-harness/reprint-s16-s17-pd-ep2.js`, which re-measures every declared divergence
against disk before it writes and refuses on an undeclared one.

### 1.1 Byte-identical in stem, options and key — 11

| staged | page | live entry | verdict |
|---|---|---|---|
| n1 | 1923 | `pedep2-gen-14` | exact reprint |
| n2 | 1924 | `pedep2-gen-15` | exact reprint |
| n3 | 1925 | `pedep2-car-36` | exact reprint |
| n4 | 1926 | `pedep2-ren-50` | exact reprint |
| n6 | 1928 | `pedep2-car-63` | exact reprint |
| n9 | 1931 | `pedep2-hem-68` | exact reprint |
| n13 | 1935 | `pedep2-liv-16` | exact reprint |
| n14 | 1936 | `pedep2-res-36` | exact reprint |
| n16 | 1938 | `pedep2-mf4-25` | exact reprint |
| n17 | 1939 | `pedep2-car-56` | exact reprint |
| n18 | 1940 | `pedep2-mf4-21` | exact reprint |

Nothing differs in these eleven — not a character of the stem, not an option, not the key index.
The citation clause on each says exactly that and claims nothing else.

### 1.2 Modified reprints — 6

Each of these is one of the fold shapes this stream already recognises. The modification is
recorded in the citation clause; the live entry's own stem, options, key and explanation stand
unchanged.

- **n5, p.1927 → `pedep2-ren-31`** — reworded stem. The live entry's note-form "11-month-old
  presenting to Emergency department with rapidly rising fever and vomiting and ill" is written
  out as "An 11-month-old presents with rapidly rising fever, vomiting, and appears ill", the
  emergency department is dropped, and "What is the best NEXT step?" loses its capital. Option 0
  hyphenates "broad-spectrum" against the live "broad spectrum". Option count and key unchanged.
- **n7, p.1929 → `pedep2-end-16`** — reworded stem plus a respelled option. The routine newborn
  examination that opens the live entry is dropped, and option 0 is spelled out as "Karyotype
  with FISH for sex-determining region of the Y chromosome" where the live entry abbreviates it
  "Karyotype with FISH for SRY". Option count and key unchanged.
- **n8, p.1930 → `pedep2-mal-21`** — a sentence added to the stem: "Brain tumors are the most
  common solid tumor of childhood, and presentation may be insidious, leading to late diagnosis."
  American "tumors" against the live "tumours". Options and key unchanged.
- **n10, p.1932 → `pedep2-gen-27`** — the reverse of n8: the live entry's opening sentence about
  trisomy 21 is folded *out*, leaving the bare "Which of the following statements is true about
  Down syndrome?". The incidence prints as "1 in 1400" against the live "1 in 1,400". Options,
  their order and the key unchanged.
- **n12, p.1934 → `pedep2-dp-2`** — "What age does autism spectrum disorder usually become
  evident?" against the live "At what age…", and all four age ranges print hyphens where the live
  entry uses en dashes. The key index does not move, but the key *text* does, on the dash alone,
  so the reprint tool declares it in `KEYTEXT_OK` rather than passing it silently.
- **n15, p.1937 → `pedep2-mf2-51`** — **the third printing of this question and the second of one
  variant.** Staged: "Which clinical intervention is of evidence-based benefit in the treatment of
  acute bronchiolitis?", five options, key "C-PAP" at index 3. Live: "Which of the following is of
  evidence-based benefit…", four options, key "Continuous positive airway pressure (CPAP)" at
  index 1. **That is precisely the variant `pedep2-mf2-51` already records for the Model Final
  Exam 4 printing at p.1901** — same added fifth option, same abbreviation, same moved key. So the
  clause says "the same variant as p.1901" rather than describing the change twice as if it were
  new. Declared in all three guards: `KEYTEXT_OK`, `KEYINDEX_OK`, `OPTCOUNT_OK`.

### 1.3 ⚠️ n11, p.1933 — the one the sweep missed, and how it was found

**Verdict: reprint of `pedep2-car-19`. Not a draft.**

The duplicate sweep returned **no candidate at any threshold** for n11, in either endpoint file or
in House. On the count that produced this section's first summary, that made n11 the section's
single new question.

It is not. Grepping **the sign rather than the disease** — an ejection systolic murmur noticed
during a febrile illness, and the word "innocent" in an option — returned `pedep2-car-19` at once:
same 4-year-old girl, same lower respiratory tract infection, same intravenous antibiotics, same
murmur the following morning, same four options in the same order, same key position.

Why the sweep could not see it, measured on the two texts:

- **A fifth option was added.** "Change the present antibiotic" is appended to the live entry's
  four, which dilutes every option-set similarity score.
- **The key text was shortened.** "…inform the GP to re-evaluate the child once she has recovered
  from illness" becomes "…inform the GP to re-evaluate after recovery".
- **The stem was compressed.** The ward round and the murmur's description ("with normal heart
  sounds and no radiation") give way to "The next morning" and "Heart sounds are normal, no
  pulmonary edema is present"; "What would be the single most appropriate management plan?"
  becomes "What is…".

Two of those three changes are exactly what `pedep2-car-19`'s `source` **already records** for the
Model Final Exam 4 printing at p.1763. So p.1933 is the **fourth** printing of this question
(p.666 body · p.1613 MFE 3 · p.1763 MFE 4 · p.1933 here) and the **second** printing of the
p.1763 variant — the same shape as n15 above, and the same shape the stream has now seen three
times.

**The rule this pays for, again: a candidate list's silence is not a verdict.** Enough small
modifications, stacked, will push a genuine reprint below any similarity threshold, and a section
literally named "recently modified" is the worst possible place to trust one. `car-19` is
reachable by three separate signs — "innocent", "ejection systolic", "re-evaluate" — and none of
them is the disease name.

### 1.4 Pairings raised and refused — section 16

Named here because refusing them is a verdict too.

- **n16 vs `pedep2-mf2-1`**, similarity 0.800, keys differing. **Pairing, not a fold.** Different
  option menus and different questions: `mf2-1` asks what is **not** a developmental concern, n16
  asks what **denotes** developmental delay. n16's real target is `pedep2-mf4-25`, exact (§1.1).
- **n1 vs `pedep2-gen-8`**, **n10 vs `pedep2-ren-39`**, **n12 vs `pedep2-dp-3`** — all raised by
  the sweep, all compared field by field, all refused. Each shares a topic and part of a menu with
  the staged question and differs in what is actually asked. Their true targets are in §1.1
  and §1.2.

### 1.5 House matches — recorded, folded nowhere

The sweep raised six House hits across the section, of which `pedhd-card-19` and `pedhd-gen-5` are
genuine printings of n11's and n1's questions. **Cross-bank matches take `alsoIn`, never a fold,
and this stream does not write `alsoIn` mid-run.** They are recorded here and in the journal, and
nothing in `questions.peds.js` — Chat B's file — is touched.

---

## 2. Section 17 — 2 reprints, 6 new

The reverse ratio, and again the section name is the finding.

### 2.1 Reprints — 2

- **n6, p.1947 → `pedep2-mf1-4`** — rewritten, not reprinted. Same 3-year-old with fever and
  dyspnoea, but the boy is named **Hatem**, the examination findings are set as bulleted lines
  instead of running prose, and the five-option menu (asthma · inhaled foreign body · pleural
  effusion · pneumonia · pneumothorax, all right-sided) is replaced by a **four-option laterality
  menu**: pleural effusion left or right, pneumonia left or right. The answer is the same
  diagnosis; the key text loses the live entry's hyphen ("Pneumonia (right sided)" against
  "Pneumonia (right-sided)"), which `flat()` does not normalise, so `KEYTEXT_OK` declares it, and
  `OPTCOUNT_OK` declares 5 against 4.
- **n7, p.1948 → `pedep2-mf1-15`** — the same treatment of the same vignette. The boy is named
  **Darren**, findings bulleted, reduced air entry localised to the left lower and middle zones
  and percussion stated normal throughout, and the five-option menu replaced by a four-option
  laterality menu: inhaled foreign body left or right, pleural effusion left or right. Key text
  and key index unchanged; `OPTCOUNT_OK` declares 5 against 4.

**What the two have in common is the section's editorial hand, not a defect** — a named patient, a
bulleted examination, and a menu narrowed to a left/right discrimination. That is worth recording
because it is what makes n8 look like n6.

### 2.2 ⚠️ n8 vs n6 — a shared menu, and why it is not a fold

n8 (p.1949) prints **exactly** n6's four-option menu — pleural effusion left or right, pneumonia
left or right. It is a different question:

| | n6, p.1947 | n8, p.1949 |
|---|---|---|
| patient | Hatem, 3 years | Tony, 4 years |
| course | fever and dyspnoea | admitted with pneumonia, still febrile despite antibiotics |
| discriminating sign | — | **stony dull** to percussion, right lower zone, with crepitations *above* the level of dullness |
| key | Pneumonia (right sided) | Pleural effusion (right sided) |

**The discriminating token is "stony dull".** It is the sign that separates fluid from
consolidation, it appears in n8 and not in n6, and it is why the keys differ on the same menu.
Standing rule applied: a shared option menu **pairs** questions and never folds them, and naming
the token is the price of the pairing.

### 2.3 The six new questions — verdicts

Each was searched by its own discriminating sign across all 1,721 live entries, not by disease
name and not by similarity alone. **All six are new. None has a counterpart in any peds bank.**

- **n1, p.1942 — NEW.** Ritha, 2 months, coryza and tachypnoea without significant recession,
  poor feeding for 3 weeks; which feature most supports congenital heart disease over respiratory
  disease. Searched: no live entry anywhere offers **hepatomegaly as an option** in a
  cardiac-versus-respiratory stem. The one live entry that offers hepatomegaly at all,
  `pedep2-car-3` (Sunil, 3 months), asks a different question about a different infant. Chapter
  ruling: **`cardiac`** — the question is a cardiac-diagnosis discrimination, not a respiratory one.
- **n2, p.1943 — NEW.** The peanut/ball-valve vignette asking the **next step in management**,
  answer bronchoscopy. Searched: every live "bronchoscopy in the options" entry is a chronic-cough
  investigation question (`pedep2-mf1-29`, `pedep2-mf2-68`, `pedep-gi-37`), and every live peanut
  entry is either allergy or the **diagnosis** question at `pedep2-mf1-15` — which is n7's target
  and asks something else. Chapter ruling: **`respiratory`**.
- **n3, p.1944 — NEW.** The two-line ADHD stem, "doesn't sit still in class and cannot wait for
  his turn", asking which question helps make the diagnosis. Searched: the three signature phrases
  ("sit still", "wait for his turn", "completes tasks") return **zero** across all three banks, and
  every live ADHD entry is a long vignette asking something else. Chapter ruling:
  **`dev-problems`**, with the rest of the ADHD material.
- **n4, p.1945 — NEW.** Acute otitis media treated a week ago, now soreness in and behind the ear
  with fever. Searched: **`mastoid` appears in no live question stem or option in any of the three
  banks.** The single raw-text hit in `questions.peds.ep2.js` is inside an explanation, not a
  question. Chapter ruling: **`infection`**, where the other ear and upper-respiratory infection
  questions sit.
- **n5, p.1946 — NEW.** Rob, 9 months, 3 days of fever and difficulty breathing now interfering
  with feeding; hyperinflated chest, RR 70, scattered wheezes, fine end-expiratory crackles.
  Searched: the bank holds many bronchiolitis vignettes, and **not one of them is this patient** —
  the live 9-to-10-month wheeze entries are Jamel/Jamal (`pedep2-res-10`, `res-13`, nocturnal
  stridor) and the rest are 3-to-4-month-olds. "end-expiratory crackle" returns zero everywhere.
  Chapter ruling: **`resp-bronch`**.
- **n8, p.1949 — NEW.** Tony, 4 years, pneumonia not settling, stony dull right base. Searched:
  the only live "stony dull" question is `pedep2-mf1-67` — a 10-year-old with **left** lower lobe
  pneumonia whose menu is empyema/collapse/abscess/pneumothorax/cor pulmonale and whose key is
  **empyema**. Different patient, different side, different menu, different answer. Pairing at
  most; not a fold. Chapter ruling: **`resp-pneumonia`**.

**None of the eight pages of section 17 prints an explanation box**, confirmed page by page by the
staging pass. So all six drafted entries must carry a written explanation and the closing marker
`Written for this bank — the endpoint file prints no explanation here.`

---

## 3. Totals

| | staged | reprints cited | folded within section | drafted |
|---|---|---|---|---|
| section 16 | 18 | **18** | 0 | **0** |
| section 17 | 8 | **2** | 0 | **6** |
| | 26 | 20 | 0 | 6 |

**Section 16 drafts nothing at all** — the first section in this stream to do so, and exactly what
a section named "Recently modified Questions" should do. `val-pd-ep2.js` and `splice-pd-ep2.js`
carry `folded: [1…18]` for it, which is how both tools are told that a staged entry was
deliberately not drafted.

Six new questions is the whole remaining yield of the book, and after they are spliced part 2 is
closed: pp.1950–1992 are section 18's prose revision cards, which stage nothing and must never get
a harness entry, and p.1993 is blank. See `endpoint-p2-s16-s17-s18-page-map.md`.
