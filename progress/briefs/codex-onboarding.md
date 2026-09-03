# Codex onboarding — everything assumed by the drafting brief

**Written 2026-09-03.** Pair this with `tools\bank-harness\pd-ep-draft-brief.md`, which is the
drafting contract. This file is the layer underneath it: the project context that brief takes for
granted because every Claude session already carries it.

**Why this exists.** The first trial gave Codex a staging record and the drafting brief inside an
isolated directory. The brief told it to read the lecture cache; the cache was not in that
directory. It drafted 18 entries with zero invented medicine and zero real explanations, because it
had been told to cite sources it could not reach. That is a supply failure, not a capability one.
Codex named the missing piece itself and asked for **a source-and-authority map**: which inputs are
authoritative, which caches exist, their precedence when they conflict, and which are citable.
That is sections 3 and 4 below.

---

## 1. What the project is

A medical question bank and revision app for a 2nd-term Semester 8 medical student at Alexandria
University — ENT, Ophthalmology, Neuropsychiatry, Pediatrics. It is his own revision tool, built
from his own course material. Roughly 4,586 questions are live. **He sits the exam these are
drafted for on 17 September 2026.** Wrong content is not an abstract defect here; he revises from
it and then sits a paper on it.

Vanilla HTML/CSS/JS, no framework, no build step, no npm. It must run offline from a `file://`
URL. Data files are classic scripts (`var Q_X = [...]`), not ES modules, because ES modules die on
CORS over `file://`.

## 2. The pipeline, and where you sit in it

```
page images  →  STAGING RECORD  →  DRAFTING  →  VALIDATOR  →  SPLICE  →  app/data/
 (scanned)      vision pass,        ← YOU        must exit 0   human-      (shipped)
                human-supervised                                supervised
```

**You own drafting only.** The stage before you reads the printed page off an image and records
exactly what it says. The stage after you is a mechanical validator, then a human-supervised splice
into the shipped file.

**Why you do not get the stages either side.** Staging is visual work on scanned pages, and the
splice writes the live data file that two other sessions are also writing. Neither is a judgement
about your ability — both are about isolation while several workers run at once.

## 3. The source-and-authority map

**Precedence, highest first.** When two sources disagree, the higher one wins and the disagreement
gets recorded in the entry, never silently resolved.

| Rank | Source | What it is authoritative for | Citable? |
|---|---|---|---|
| 1 | **The staging record** (`*.array.js`) | Everything printed: stem, options, the key, the printed explanation box, figures | Yes — it *is* the question |
| 2 | **Lecture caches** `content\peds\lectures\*.txt` | Mechanism, pathophysiology, why a distractor is wrong | **Yes — cite by exact filename in backticks** |
| 3 | **Theory** `T_PEDS` | Structured summaries, where it helps | Yes |
| 4 | **General medical knowledge** | Genuine gaps only, after grepping the concept | Yes, but **must carry the tag** (§5) |
| — | **The OCR index** `content\peds\qb-pages\ocr\ep1\` | **A SEARCH INDEX ONLY. Never a clinical source.** | **NO** |

**On the lecture cache — read this before you use it.** The filenames carry brackets, stray spaces,
a zero-width character and inconsistent numbering: `9) Respiratory distress in newborn.txt`,
`10) new Seizures . Birth injuries , Hpoglycemia 2.txt`, `15.1) Faltering ﻿Growth.txt`. **List the
directory and copy the real filename.** Never write a filename, page number or id from memory —
that has been measured wrong 7 times out of 7 and 3 out of 3 on this project.

**On the OCR index.** WPS read a printed 10⁶ as 10⁹, and exponents also flatten (10⁶ → 106).
A plausible wrong number, not visible garbage. **Never take an exponent, a unit or a dose from
extracted text.** You marked this finding USE; this is the rule it produces.

**⚠️ `T_PEDS` is an OBJECT keyed by chapter id, not an array.** `T_PEDS.length` is `undefined` and
an index walk silently returns nothing. Address it as `T_PEDS['<chapter-id>'].sections`. Theory
section ids run continuously across sibling chapters, so a prefix grep returns a **false zero**.

## 4. Chapter ids — the field the first trial got wrong

Every entry's `chapter` is checked against the real chapter set built from `app/data/modules.js`,
**not** against the `chapter` field in the validator's own section table (that field is
documentation only). An id that is not in the set fails the entry.

The pediatrics ids, complete:

```
emergencies allergy infection infection-bact infection-rash infection-vesic
infection-immunity infection-vaccine normal-dev dev-problems dev-nd genetics
malignant malignant-solid growth-puberty puberty nutrition nutrition-feed
nutrition-pem nutrition-vit accidents gastroenterology gi-diarrhoea gi-abdopain
perinatal perinatal-rd perinatal-hie neonatal neonatal-seiz neonatal-sepsis
haematology haem-bleeding resp-pneumonia respiratory resp-bronch cardiac
cardiac-cyan cardiac-acq renal-uti renal renal-cakut neuro-stroke neurological
neuro-nm neuro-cp mental endocrine endo-dka endo-thyroid liver liver-hep
```

**`neonatology` is not one of them** — that was the first trial's failure, all 18 entries.

**And a section does not map to one chapter.** Endpoint section 7 "Neonatology" spreads across six:
`perinatal`, `perinatal-rd`, `perinatal-hie`, `neonatal` (jaundice alone), `neonatal-seiz`,
`neonatal-sepsis`. **Assign per entry, on its clinical content.** The Claude draft you were compared
against put all 18 in `neonatal` and would have passed the validator while being wrong — that is the
failure mode this section exists to prevent, and it is worse than yours because nothing catches it.

## 5. Content rules that are not negotiable

Each of these is a standing ruling from the project owner, most of them bought with a real mistake.

- **⚠️ THE KEY NEVER MOVES.** `answer` is the staged 0-based index, always. **A defective key is
  noted, never disputed** — if the printed key is wrong, draft the entry, keep the key, and record
  the discrepancy in the explanation. Never take a key dispute to the user.
- **⚠️ A GAP IN THE MATERIAL IS ANSWERED, NOT DECLARED.** Fill it from general medical knowledge and
  keep `not taken from the course material` as a **short tag on the claim itself** — never a
  dead-end sentence, never an opening that announces the gap before answering. Lead with the answer;
  the tag rides along.
- **Before calling anything a gap, grep the CONCEPT, not the term.** Paid for four times:
  `"creatine kinase"` returns zero while the material teaches plasma **CK** in full; `"Guthrie"`
  and `"heel prick"` return zero while the newborn heel-stick TSH screen is printed in full. Then
  say why the zero is a zero and how you measured it.
- **Explain every distractor on its own mechanism.** Not "the printed explanation identifies X
  instead" — that is what the first trial produced and it is not an explanation. Say what the
  distractor *would* look like and what is missing from this vignette.
- **Budget: ~250 words for straight recall, ~520 for vignettes and divergences.** Real limits.
- **`imgAlt` must not answer the question** — modality and view only. This gave away six answers
  once. The detailed read belongs in the explanation.
- **`source` is a citation, never a second explanation.**
- Printed explanation boxes are captured **verbatim**. Where the page prints none, the entry ends
  with the required closing marker (the brief, §4, gives the exact text).

## 6. Hard prohibitions

- **Never write to `app\data\`.** That is the shipped data, and two other sessions write it live.
- **Never run git.** Not commit, not add, not stash. The index is shared; a bare `git commit`
  commits the *index*, not what you staged, and has already swallowed another session's files.
- **Never modify, rename, move or delete anything in `Semester 8\`.** Those are the original
  copyrighted sources.
- **Never run `val-pd.js` or `splice-pd.js` on endpoint files** — that pair is another session's
  and its splicer hardcodes a different write target. Endpoint work uses `val-pd-ep.js` /
  `splice-pd-ep.js`.
- **No network.**

## 7. The findings you marked USE

From your own triage, kept because you said they would change your behaviour:

- **Validate after writing.** A generated data file reports a successful write either way; syntax
  errors here fail *silently* — the app boots and reports a plausible wrong number. `node --check`,
  then load the array and read `.length`.
- **Count by loading the array, never by grep.** These files mix `id:` and `"id":` key styles; a
  bare-key grep once counted 22 of 173 and read as catastrophic data loss. Nothing was lost.
- **`questions.ent.js` is mixed CRLF/LF** (13,767 CRLF of 19,023 lines). Nothing may anchor on a
  bare newline there.
- **Write output incrementally to disk**, so an interrupted run leaves finished work rather than
  nothing.
- **Keep work short and bounded** — you agreed the operational conclusion holds even though the
  cost formula behind it is Claude's and does not port to you.

## 8. How your work is checked

`node tools/bank-harness/val-pd-ep.js <section> <half>` compares your draft against its staging
record: entry count, id prefix, `stem`/`options` byte-identical to staging, `answer` equal to the
staged key, `chapter` in the real chapter set, figure naming, the closing marker the record
requires. **It must exit 0 before anything is spliced.**

**But know what it cannot see.** It cannot tell whether an explanation is clinically wrong, or
empty, or filed under a real-but-incorrect chapter. Passing it is necessary and nowhere near
sufficient — which is why a human reads a sample of every batch, and why you should say plainly
what you were unsure about rather than leaving it to be caught.

## 9. Reporting back

End every run with: how many entries you completed; every entry where you flagged an unverified
claim or a key discrepancy, by number; anything in the staging record that was ambiguous,
contradictory or malformed; and one sentence on what you needed that the brief did not give you.

**That last item is not a formality.** The first trial's closing line — *"I would want the missing
explicit ID-prefix/chapter mapping"* — named the exact field it had got wrong, and is the reason
section 4 exists.
