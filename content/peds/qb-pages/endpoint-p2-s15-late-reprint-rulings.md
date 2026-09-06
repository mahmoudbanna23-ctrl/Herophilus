# Section 15 — seven reprints the fold adjudication ruled were not reprints

Model Final Exam 4, pp.1759–1921. The four fold-adjudication files
(`endpoint-p2-s15-fold-adjudication-A/B/C/D.md`) ruled 63 of the 80 staged rows reprints, folded n75
into n67 within the section, and left 16 to draft. **Seven of those 16 are also reprints.**

Section 14 had already produced the rule that a candidate list's silence is not a verdict, so section
15's eleven silent `n`s — the ones the candidate generator offered nothing for — were all ruled by
hand rather than skipped. Every one of the eleven came back NOT A REPRINT. **Seven of those eleven
hand rulings were wrong.**

**The count moves from 63 reprints / 16 drafted to 70 / 9.** The within-section fold, n75 into n67,
is unchanged.

## The rule this produced

Section 14's rule holds and is not enough. The new half:

> **A hand ruling made against a stem-ranked candidate list inherits that list's blind spot.**

The eleven were adjudicated by reading each staged row against the candidates the generator had
ranked, plus whatever the adjudicating quarter thought to search for. The generator ranks on stem
similarity. Six of the seven word the stem differently from the printing already live, and three of
them — n69, n79, n80 — are one-line recall questions carrying almost no stem to rank on at all.
Ruling them by hand against that list was not an independent check; it was the same instrument
applied twice.

> **For a one-line recall question the stem is the wrong probe. The key text is the right one.**

Four of the seven (n69, n79, n80, and n34's option ladder) were invisible to every stem-similarity
sweep run on this section and visible immediately to a probe that matched the staged key against
every live key and ignored the stem entirely.

### How they were actually found

By accident, and that is worth recording. The seven surfaced while measuring where the live corpus
already puts each undrafted question's topic, for the chapter rulings — a probe built to count
chapters by key text returned, for several of the sixteen, a live entry whose key was the staged key
word for word. Nothing in the fold workflow was looking. **The chapter-measurement probe should be
run before the fold adjudication closes, not after it**, because it reads the corpus on the one axis
the fold instruments do not.

## The seven rulings

Each was read against both printings on disk before it was acted on. Both sides' transcriptions are
byte-accurate; every divergence below is a real printed difference, recorded and never reconciled.
The citations are written by `tools/bank-harness/reprint-s15-late-pd-ep2.js`.

### n1, p.1759 → `pedep-emg-18` (part 1)

Same 9-year-old with reduced consciousness, fever, GCS 14/15 and petechiae; **same five options in
the same order, key at index 3 on both.**

- The exam prints the vignette in full — blue-lighted in by ambulance, the mother's account of
  headache and fever earlier that day, the petechiae placed on his legs. Part 1 condenses it to one
  sentence.
- The exam writes the key out: "Gain intravenous access, take blood cultures, and administer
  broad-spectrum antibiotics". Part 1 abbreviates it "IV access, blood cultures, and broad-spectrum
  antibiotics". Same three actions.

House's `pedhd-emg-18` also holds this question. That is cross-bank and does not fold mid-stream.

### n3, p.1763 → `pedep2-car-19`

Same 4-year-old, same post-antibiotic ejection systolic murmur, **key stays fourth.**

- The live entry prints four options; the exam adds "Change the present antibiotic" as a fifth.
- The key is shortened: "…inform the GP to re-evaluate after recovery" against the live "…re-evaluate
  the child once she has recovered from illness".
- The exam drops "to the ward" and the ward round, times the murmur as "The next morning", gives
  "Heart sounds are normal, no pulmonary edema is present" where the live entry gives "an ejection
  systolic murmur with normal heart sounds and no radiation", and hyphenates "out-patient ECHO".

**This one had a precedent sitting on its own target.** `pedep2-car-19`'s `source` already records a
Model Final Exam 3 reprint at p.1613 that adds the same fifth option. The adjudication read the fifth
option as a discriminating difference; the live entry already said it was not.

### n19, p.1796 → `pedep-inf-72` (part 1)

Same febrile toddler with no localizing source; **same five options in the same order, key at index 3
on both.**

- The exam prints the vignette in full — the 24-month-old brought in by her mother, 38.7 °C at
  triage, antipyretics given pending review, 37.7 °C ninety minutes later, well hydrated and
  socially interactive. Part 1 condenses it.
- The exam writes each option as an instruction ("Request a CXR", "Take blood for inflammatory
  markers", "Take a blood culture", "Request a urine dipstick", "Discharge the child home"); part 1
  prints the bare nouns.

### n34, p.1827 → `pedep2-mal-19`

Identical ALL-prognosis question and identical option ladder; **option count and key index
unchanged.**

- The exam opens with two sentences the live entry does not print: that ALL is the commonest
  childhood leukaemia with 5-year survival over 80%, and that prognosis depends on a number of
  factors.
- Option labelling: "White cell count (WCC) >50 × 10^9/L at diagnosis" against the live entry without
  the abbreviation; "Age >10 at diagnosis" drops "years".
- The key reads "Non-B cell or non-T cell leukaemia" against the live "Non-B cell, non-T cell
  leukaemia" — the comma written out as *or*.

### n69, p.1899 → `pedep2-res-47` · n79, p.1919 → `pedep2-res-42` · n80, p.1921 → `pedep2-mf1-41`

These three share a shape, and it is the shape easiest to get wrong in **either** direction. Each is a
one-line recall question whose distractors the exam rebuilds wholesale, so almost nothing is shared
but the question itself and the answer.

| | staged | live | what the exam did |
|---|---|---|---|
| n69 | "a common cause" of chronic wet (productive) cough | `pedep2-res-47`, "the most common cause" of chronic wet cough | menu rebuilt 4 → 5: Bronchial asthma, Habit cough, Tracheomalacia, Bacterial tracheitis replace Bacterial bronchitis, Viral bronchitis, Asthma. Key *Persistent bacterial bronchitis* moves index 0 → 2; key text unchanged |
| n79 | which class "is among the preventer therapy for bronchial asthma" | `pedep2-res-42`, which "is considered an asthma preventer" | menu rebuilt, count unchanged: Short-acting β2-agonists, Long-acting β2-agonists, IV steroids replace Short-acting beta agonists (SABA), Oral antihistamines, Intravenous magnesium sulfate. Key moves index 0 → 2 and is printed "Inhaled steroids" against "Inhaled corticosteroids" |
| n80 | median age "for a child to achieve mature pincer grip" | `pedep2-mf1-41`, "the median age of mature pincer grasp" | the five ages replaced: 5, 7, 9, 10, 12 months against 8, 10, 12, 14, 16 months. Key *10 months* moves index 1 → 3; key text and option count unchanged |

**They fold, and here is why.** In each case the stem asks the same question of the same topic and the
key names the same answer. The decisive precedent is on n69's own target: `pedep2-res-47`'s `source`
already carries a Model Final Exam 2 printing folded on exactly these terms — "with a rebuilt set of
four options and the key printed third". Drafting these three would have put a second entry with the
same question and the same answer into the bank, three times over.

The counter-argument was considered and rejected: a rebuilt distractor set does change what the
question discriminates. It does not change what the question *asks*, and the fold rules turn on the
question and the key, not on the distractors. Where the distractors change what is being asked — a
different disease, a different decision — the pair is a template and does not fold. None of these
three is that.

## The nine that survive

**n15, n21, n25, n36, n44, n56, n67, n71, n73.**

Every one was re-probed on its key text as well as its stem, across the whole live peds corpus as it
stood — 1,712 entries: `questions.peds.ep2.js` 615, `questions.peds.ep.js` 704, `questions.peds.js`
393. Nothing in it asks any of their questions. (The House file is read for information only; a
House match is cross-bank and does not fold mid-stream.)

Three of them ranked high on the stem sweep and are pairs, not folds — name them in the drafting
notes and do not fold them:

- **n25** and **n67** share the normal-development *age menu* with several live entries. A shared
  option menu pairs questions and never folds them.
- **n73** shares a respiratory-diagnosis menu with the bronchiolitis family.

## Consequence for the validator

n34 was **the only drafted row** of the four in this section whose explanation box overflows onto its
own page — n16 → p.1790, n31 → p.1821, n34 → p.1828, n52 → p.1865. Folding it means section 15 no
longer exercises the overflow-page hard fail in `val-pd-ep2.js`. Nothing in that check changed; it
simply has no row left to fire on, and **no section in this stream has exercised it yet.** The note in
`val-pd-ep2.js`'s section-15 block was corrected to say so.

## What this file does NOT settle

Chapters for the nine — `endpoint-p2-s15-chapter-rulings.md`. Drafting shape, defects to carry and
pairs to name — `endpoint-p2-s15-drafting-notes.md`.
