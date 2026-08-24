# House tail sweep — Q686–Q724 and S1–S110 (2026-08-24)

The last unadjudicated stretch of `d house ENT mcq.pdf`. **149 staged questions, 394 candidates,
zero unparsed.** Stages after the `norm.js` repair: `A=79 B=29 C=111 D=6 E=123 F=46`.

This file holds the verdicts reached in the main session. The two agent files
`house-sweep-tail-S.md` and `house-sweep-tail-main.md` hold the rest.

---

## The finding: the fourth section is a reprint of the endpoint bank

**All 110 S-questions match something already held, and 100 of them hit an ENDPOINT entry at stage A
or B.** Of the 60 questions whose best hit is stage A with the same key, **56 target `entep-*` and 4
target `entqb-*`.**

That is the explanation, not a coincidence. The section's display title on book p.182 reads
*Selected questions published by the department* and its running header from p.183 reads *Selected
department MCQs* — and the **endpoint file is the department's own question set**. So the fourth
section is very largely the endpoint bank printed a second time, inside a commercial revision book.

**It therefore adds almost no new content — what it adds is a second printing with its own defects**,
and those defects are the reason `norm.js` exists.

⚠️ **SUPERSEDED — the real number is NINE, and it is the ADJUDICATED verdicts that settle it.** This
paragraph originally named four, counting best hits at stage A or B *before* anything was read. Two
agents then each reported a different set, and both were right inside their own scope: one saw only
the 53 questions it was given, the other only the 60 stage-A folds. **Counted from
`verdicts-tail.json`, where every question has a read verdict, nine held entries take two tail
questions each:**

`entep-nose-5` ← S8, S101 · `entep-nose-14` ← S4, S86 · `entep-nose-16` ← S9, S104 ·
`entep-ear-57` ← S21, S70 · `entep-ear-80` ← S24, S61 · `entep-ear-81` ← S25, S65 ·
`entep-mfe4-3` ← S26, S68 · `entep-throat-16` ← S59, S106 · `entep-throat-84` ← S58, S90.

**A count taken before the reading is a candidate count, not a result** — and a count without its
population is not a count at all. The fourth section prints those nine items twice *itself*, on top
of reprinting them from the endpoint file.

⚠️⚠️ **And it reprints items from ITS OWN earlier sections.** Two of the 60 stage-A targets already
carry `house`, folded from the main run earlier the same day: **`entep-nose-58`** (Q431, book p.116,
now S33) and **`entep-throat-82`** (Q622, book p.158, now S53). **The same book prints the same
question in two of its own sections** — so a fold here adds a second House page to an entry that
already cites one, and `addBank` is a no-op on both.

---

## FOLD ×60 — best hit stage A, identical option set, identical key

Identical normalised stem, identical option set, identical keyed text. **24 of the 60 were not
byte-identical in raw text and every one of those was read.** Every difference was punctuation,
capitalisation, a curly-versus-straight apostrophe, or a missing space:

- `acutetonsillitis` / `acute tonsillitis` (`S42`) · `thefollowing` / `the following` (`S32`) ·
  `afterone week` / `after one week` (`S43`)
- `Bell’s palsy` (`S18`) and **`Bell , s palsy`** (`S67`) — the same question, spelled two ways in
  one section, folding into two different endpoint entries
- a trailing colon present on one side and absent on the other, and **nothing else at all**, in
  eight of the twenty-four
- `except?` against `EXCEPT:` (`Q707`, `Q712`)
- a space before a comma: `over cheek ,` (`S79`), `tonsillectomy ,` (`S83`)

**Not one changed meaning.** These are printing defects, and a printing defect is not a difference.

---

## NEW ×13 — no candidate at all

`Q688 Q689 Q690 Q693 Q696 Q697 Q699 Q700 Q702 Q708 Q710 Q711 Q717`

**Why the zero is a zero:** the sweep ran all six stages against the whole 2,216-entry held corpus
with **no top-N cutoff at any stage** and with `norm.js` doing the comparing, so a match defeated by
spelling, whitespace, accent, British/American form or a short typo would still have surfaced. These
thirteen returned nothing at any stage, including the two ranked ones. `Q693` is the third member of
the graded neck-trauma series and its two siblings did surface, which is a check on the instrument
rather than on the questions.

---

## ⚠️⚠️ HOLD BOTH — `S62`: identical question, identical menu, OPPOSITE KEYS

**The most citable shape this project records, and this is the cleanest instance of it yet.**

> **The causative organism in acute necrotizing otitis media is:**
> a. Aspergillus niger · b. Hemolytic streptococci group A · c. Staph aureus · d. Pseudomonas

`S62` (book p.194) keys **d, Pseudomonas**. `entep-ear-86` keys **b, Haemolytic streptococci group
A**. Stage A: the stems are word-for-word and the option sets are identical. **Neither key moves and
neither is disputed.**

**What the course teaches, read in the caches, not asserted:**

- `L17,18) Otorrhea and otalgia`:182–190 prints **`Malignant external otitis (necrotizing external
  otitis, skull base osteomyelitits)`** and, at :190, **`Causative organism usually
  Pseudomonas aeroginosa`**.
- `L21.1) acute otitis media`:36 lists the bacterial causes of acute suppurative otitis media and
  puts **`B hemolytic strept`** first, ahead of *Strept pneumoni* and *H- influenza*; **`Measels`**
  is among the viral causes on the same slide.
- ⚠️ **The phrase *acute necrotizing otitis media* appears in NO cached deck.** `necrotiz`/`necrotis`
  returns exactly two hits across all 34 ENT decks: the external-otitis line above, and
  `necrotizing vasculitis` in `L30) Rhinitis 2`. **The disease in this question is not taught under
  this name.**

So the two banks have split along the seam of a naming collision: **the word *necrotizing* belongs,
in this course, to the EXTERNAL disease, and Pseudomonas belongs with it.** The third candidate makes
that visible — `entqb-ear2-39` asks *which organism is most commonly responsible for malignant otitis
externa* and keys **Pseudomonas aeruginosa**, the same option text House keys here.

### ⚠️⚠️ And the held entry had already named this exact trap, before House was ever read

`entep-ear-86`'s explanation, written in an earlier session from the slides, says:

> The critical discrimination is with **necrotizing (malignant) otitis externa**, which sounds almost
> identical but is a different disease entirely: **Pseudomonas aeruginosa**, in the **external**
> canal, in elderly diabetics. Reading "media" versus "externa" is the whole question.

**That is a description of House's key.** The corpus identified the trap, named the organism the trap
produces, and said the whole question turns on one word — and the second bank then keyed the trap.
**This is the strongest cross-bank evidence the project holds, because it is not an argument
constructed after the fact: the prediction was already in the file.**

**Recorded, not resolved.** Both entries are kept, each names the other, and each quotes the two
slides. The `answer` does not move on either side. **A defective key is noted, never disputed** —
and this one is noted from three directions at once: the two decks, the sibling question
`entqb-ear2-39`, and the held entry's own warning.

---

## NEW — `Q687`, and the three-member series it belongs to

Stage D against two different entries, *identical option set, different key* — which looks like the
`S62` shape and is not. **One menu, three vignettes, three different right answers:**

| Printing | Vignette | Key |
|---|---|---|
| `enthd-thr-685` (House, spliced) | severe neck **and face** trauma, cannot open the mouth | Flexible fiberoptic laryngoscopy (transnasal) |
| `entqb-thr7-373` (Grade Gain) | severe neck trauma, **no** facial affection | Indirect mirror laryngoscopy (transoral) |
| **`Q687`** | the same obstruction, carried further | **Tracheostomy** |

⚠️ **This is the series my earlier record mis-paired** — `entqb-thr7-373` had been set against Q685.
The sweep shows the whole family at once and the correction holds. **The deliberate-pair rule
outranks the reprint rule, at three members.**
