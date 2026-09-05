# Peds endpoint part 2 — section 14 (Model Final Exam 3), fold adjudication C

Adjudicates staged entries n56–n80 of section 14 against `content\peds\qb-pages\endpoint-p2-s14-fold-adjudication-C.md`'s
candidate list at `<SC>\cand14-C.txt`, using the staged text from `node dump14.js 56 80`, the live
text from `node live14.js <id>...` for every candidate id encountered, and the rendered page images
in `…\0ffb5f86…\scratchpad\ep2-index\native\` for every entry adjudicated REPRINT. Staged n values
in this range that carried no candidate (n60, n63, n64, n66, n67, n68, n73, n74, n75, n78, n79) are
not covered here, per brief.

**Page images opened** (all `native\pNNNN.jpeg`, all fully legible, no `hires` fallback needed):
p1707 (n56), p1709 (n57), p1711 (n58), p1713 (n59), p1717 (n61), p1719 (n62), p1725 (n65), p1733
(n69), p1735 (n70), p1737 (n71), p1739 (n72), p1747 (n76), p1749 (n77), p1755 (n80). Every one of
these confirmed the dump's transcription and the highlighted key exactly — no discrepancy between
the staged text and the printed page turned up anywhere in this range.

## Structural observation: the n71 template family (and n65's smaller version of the same trap)

**n71 is exactly the worst-case template trap the brief warned about.** Its actual question, read
off p.1737, is "Which of the following statements is true about Down syndrome?" with the true
statement being that males with Down syndrome are frequently infertile. The similarity engine
returned eighteen candidates because the stem "Which of the following statements is true about
**[disease]**?" (or its close cousins "...is true in/about...", "...is true?") is a generic template
this bank reuses across many unrelated chapters — thalassaemia (`pedep2-hem-83`), bronchiolitis
(`pedep2-res-39`, `pedep2-res-59`), nephrotic syndrome (`pedep2-ren-39`), antiepileptic drugs
(`pedep2-neu-28`, `pedep2-neu-32`), primary headache (`pedep2-neu-53`), acute viral hepatitis
(`pedep2-liv-20`), and (by chapter tag alone, not individually re-verified — see the n71 block below
for why that is safe here) emergencies, neonatal disease, neonatal sepsis, infection/vaccination,
gastroenterology and growth/puberty in the part-1 candidates. **The discriminating token for every
one of these is simply the disease named in the stem** — none of them is about Down syndrome, so
none of them folds. The one candidate that is genuinely the same question is `pedep2-gen-27`
(options identical, key identical, same disease), plus its verbatim House twin `pedhd-gen-18`
(cross-bank only, not a fold).

**n65 carries a smaller version of the same trap**, this time on the stem "What is the most common
cause of **[condition]**?" rather than on a shared option ladder: five of its seven candidates name
five different conditions (anaemia, chronic wet cough, faltering growth, recurrent abdominal pain,
gastroenteritis) and reject on that alone; a sixth (`pedep2-mf1-44`) asks a related but different
question about cerebral palsy (which *type* is linked to HIE, not what *causes* CP most often); the
seventh, `pedep2-mf1-79`, is the one genuine match — same disease, same option list, same key.

## n56 == pedep2-ren-41 (p.1707)

**REPRINT.**

p.1707 asks "What is the most common complication of minimal change nephrotic syndrome?" with key A,
"Susceptibility to infections." `pedep2-ren-41`'s live source already records a prior reprint of
this exact question in Model Final Exam 1 (p.1390), describing precisely n56's modifications:
"Cerebral strokes" replaced by "Electrolyte disturbances" as the fourth option, and the key worded
"Susceptibility to infections" rather than the original p.900 wording "Repeated infections." n56 at
p.1707 (Model Final Exam 3) is a **third** printing carrying those same two changes, plus one more
not mentioned in the existing clause: "Acute renal failure" (p.900's second option) is also reworded
to "Acute kidney injury" here. The key's position is unchanged (first) throughout all three
printings.

Proposed addition to `pedep2-ren-41`'s `source` (appending to the existing clause, which already
covers the Model Final Exam 1 printing):

> ; reprinted a third time in Model Final Exam 3, p.1707, with the same "Electrolyte disturbances"
> and "Susceptibility to infections" wording as the Model Final Exam 1 printing, and with "Acute
> renal failure" additionally reworded to "Acute kidney injury"; the answer and its first position
> are unchanged

`pedep2-ren-54` (sim 0.632) is **NOT A REPRINT** — it is a deliberately different question on the
same page family, asking for the *major* (not *most common*) complication of the same disease, with
its own explanation stating in so many words that it and `pedep2-ren-41` are a matched pair testing
different adjectives, not a duplicate.

## n57 == pedep2-car-28 (p.1709)

**REPRINT.**

p.1709 asks "Which clinical problem is a serious complication of Fallot tetralogy?", five options
ending in "E. Heart failure", key C "Cerebrovascular accidents". `pedep2-car-28` (p.684, chapter
cardiac-cyan) carries the same first four options in the same order ("Eisenmenger syndrome",
"Recurrent pneumonia", "Cerebrovascular accidents", "Pulmonary hypertension") with the same key at
the same position, but prints only those four — n57 is that question with a fifth option, "Heart
failure", appended at the end and the stem reworded from car-28's declarative "Serious complications
of Fallot tetralogy include:" into a question. The key's position (third) is unaffected by the
addition, since the new option is appended after it.

A third printing of the same underlying question exists as `pedep2-mf2-72` (p.1577), which carries
the same four core options as car-28 but **reordered** ("Pulmonary hypertension" first, no "Heart
failure"), moving the same key text to second position — noted here for the record since it was
visible in the candidate data, but it is not itself part of this adjudication and is not amended.

Proposed addition to `pedep2-car-28`'s `source`:

> (reprinted in Model Final Exam 3, p.1709, as a question, "Which clinical problem is a serious
> complication of Fallot tetralogy?", with a fifth option, "Heart failure", added at the end; the
> key, Cerebrovascular accidents, keeps its third position)

## n58 == pedep2-ren-1 (p.1711)

**REPRINT**, within-bank; also a cross-bank match, recorded separately below.

p.1711 asks the short, vignette-free question "What is the preferred method to collect a urine
sample for culture in female infants?", options Bag sample / Catheter sample / Pad/cotton wool balls
in nappy / Suprapubic aspirate / Clean catch, key E. `pedep2-ren-1` (p.820, reprinted at p.878) is
Emily's 2-year-old vignette asking the same clinical question, with the identical five-item option
set reordered (Bag, Catheter, Clean catch, Pad/cotton wool, Suprapubic aspirate — key third there).
The option **set** is identical (options 1.000 in the candidate data); only the order changed, and
the key text, "Clean catch", is unchanged. This is the reworded-stem shape carried furthest of any
example in this range: the vignette (age, fever, vomiting, foul urine, exam findings) is stripped out
entirely and the question is generalised to "female infants," but the clinical content and the full
option pool are exactly what `pedep2-ren-1` already teaches, so it is judged the same question rather
than a different one.

Proposed addition to `pedep2-ren-1`'s `source` (appending after the existing "(reprinted at p.878)"):

> ; reprinted a third time in Model Final Exam 3, p.1711, with the vignette stripped out and the
> stem generalised to "the preferred method to collect a urine sample for culture in female
> infants," and the five options reordered (Bag sample, Catheter sample, Pad/cotton wool balls in
> nappy, Suprapubic aspirate, Clean catch); the key, Clean catch, is unchanged and now sits fifth

**CROSS-BANK, RECORD ONLY**: `pedhd-gen-18`'s renal counterpart here, `pedhd-renal-1` (House,
`pediatric .pdf p.15`), carries Emily's identical vignette and the identical five-option order as
`pedep2-ren-1` — this is the pre-existing endpoint/House overlap on this stem, not something n58
creates, and it needs no action beyond noting it for the end-of-stream cross-bank sweep.

## n59 == pedep2-hem-68 (p.1713)

**REPRINT**, exact.

p.1713 is a word-for-word match of `pedep2-hem-68` (p.405, already recorded as reprinted word for
word in Model Final Exam 1, p.1306): same 7-year-old-boy HSP vignette, same five options in the same
order, same key (D, "Normal clotting parameters"). This is a straightforward exact reprint, now the
question's **third** printing.

Proposed addition to `pedep2-hem-68`'s `source`:

> ; reprinted word for word a third time in Model Final Exam 3, p.1713

## n61 == pedep2-mf2-58 (p.1717)

**REPRINT.**

p.1717 asks "What is the underlying pathophysiology in Henoch-Schönlein Purpura (HSP)?" with the
same five options in the same order and the same key (D, "Vasculitis") as `pedep2-mf2-58` (p.1549),
whose stem asks the identical question with the abbreviation alone, "What is the underlying
pathophysiology in HSP?" The only change is spelling out the full name once in the stem; nothing
else differs.

Proposed addition to `pedep2-mf2-58`'s `source`:

> (reprinted in Model Final Exam 3, p.1717, with "HSP" expanded to "Henoch-Schönlein Purpura (HSP)"
> in the stem; the options, their order, and the key are unchanged)

## n62 == pedep2-mf2-6 (p.1719)

**REPRINT**, exact.

p.1719 matches `pedep2-mf2-6` (p.1444) word for word on the stem and on four of five options; the
fifth option is spelled "Brain stem" (two words) here against "Brainstem" (one word) there. Same key
(C, "Basal ganglia and extrapyramidal tract") in the same position.

Proposed addition to `pedep2-mf2-6`'s `source`:

> (reprinted in Model Final Exam 3, p.1719, with "Brainstem" printed as two words, "Brain stem";
> otherwise word for word, same key)

## n65 == pedep2-mf1-79 (p.1725)

**REPRINT.**

p.1725 asks "What is the most common cause of cerebral palsy?", options Prenatal / Perinatal brain
injury / Neonatal infections / Accidents / Meningitis/encephalitis, key A "Prenatal". This is an
exact match to `pedep2-mf1-79` (p.1428), whose own first option is worded "Prenatal cause" rather
than "Prenatal" but is otherwise identical in stem, remaining options, order and key.

**NOT A REPRINT** for the other six candidates the similarity engine returned, all part of the
stem-template trap described above:

- `pedep2-hem-51` — different disease, anaemia in school-aged children (iron deficiency), unrelated
  option list.
- `pedep2-res-47` — different disease, chronic wet cough (persistent bacterial bronchitis), unrelated
  option list.
- `pedep2-mf1-44` — same disease (cerebral palsy) but a different question: which *type* of CP is
  linked to hypoxic-ischaemic encephalopathy (key: spastic quadriplegia), not what *causes* CP most
  often; flagged KEYS DIFFER because it is a different question, not a variant printing of this one.
- `pedep-gp-56` — different topic, faltering growth in infants (inadequate weight gain).
- `pedep-gi-64` — different topic, recurrent abdominal pain in children (functional).
- `pedep-gi-65` — different topic, gastroenteritis in children (viruses).

Proposed addition to `pedep2-mf1-79`'s `source`:

> (reprinted in Model Final Exam 3, p.1725, with the first option shortened from "Prenatal cause" to
> "Prenatal"; otherwise unchanged, same key)

## n69 == pedep2-hem-84 (p.1733)

**REPRINT.**

p.1733 asks "What is the best therapeutic strategy for a 4-year-old girl diagnosed with ITP, with a
platelet count of 30,000/dL and no active bleeding or mucous membrane purpura?", options Oral
steroids / IVIG / Anti-D / Observation and follow-up / Splenectomy, key D. Two live candidates cover
the same clinical vignette and share the same key at the same position (fourth), but neither matches
n69 on every point, and the brief's own trap #2 applies here — the higher-scoring candidate is not
the better match:

- `pedep2-hem-84` (p.438, chapter haem-bleeding, the original placement) has the closer **stem**
  match: it is the only one that keeps both "no active bleeding **or mucous membrane purpura**" and
  the unusual "30,000/**dl**" unit that n69's own note confirms is genuinely printed on p.1733. Its
  options are worded slightly differently ("Steroid" not "Oral steroids"; "follow up" not
  "follow-up") but are otherwise the same list in the same order.
- `pedep2-mf2-62` (p.1557) has the closer **options** match (character-for-character identical to
  n69's five options, "Oral steroids"/"Observation and follow-up" included) but its stem drops the
  "or mucous membrane purpura" clause and restates the unit as "30,000/μL", not matching what p.1733
  prints.

Because the clinical content, the key and its position are identical across all three, and because
`pedep2-hem-84` is both the earliest printing and the one whose stem wording p.1733 actually
reproduces, `pedep2-hem-84` is the target. `pedep2-mf2-62` is noted here as an intermediate, already
existing but currently un-annotated, printing of the same question (Model Final Exam 2) that mixes
the two variants — its own `source` currently carries no reprint clause and is outside this
adjudication's scope to amend, but a later pass should link it in.

Proposed addition to `pedep2-hem-84`'s `source`:

> (reprinted in Model Final Exam 2, p.1557, as a question, with the "or mucous membrane purpura"
> clause dropped, the unit restated as 30,000/μL, and the options reworded "Oral steroids"/
> "Observation and follow-up"; reprinted again in Model Final Exam 3, p.1733, restoring the "or
> mucous membrane purpura" clause and the 30,000/dL unit from this printing while keeping the
> Model Final Exam 2 wording of the options; the key and its fourth position are unchanged in both)

## n70 == pedep2-end-24 (p.1735)

**REPRINT** — the third printing of an already-partly-established chain; this verifies rather than
re-derives it, per the brief.

p.1735 asks "Which of the following is the most ideal insulin regimen for an 8-year-old child
recently diagnosed with type 1 diabetes mellitus, who has regular meals a day?", five options —
Once daily long-acting insulin / Short-acting insulin 3 times daily / Basal-bolus / Intermediate-
acting insulin every 12 hours / Premixed insulin every 12 hours — key C, "Basal-bolus" (third
position). `pedep2-end-24`'s live source already records: original at p.1140 ("What is the most
ideal insulin regimen...", four options, key B "Basal-bolus regimen"), reprinted in Model Final
Exam 2 at p.1587 with a fifth option, "Once daily long-acting insulin," inserted first, moving the
key to third and reworded "Basal bolus" (no hyphen, no "regimen").

p.1735 matches the p.1587 shape exactly on structure: same five-option list with "Once daily
long-acting insulin" inserted first and the key still third, and it matches the "later printings"
stem wording the existing note anticipates ("Which of the following is the most ideal insulin
regimen..." rather than the original's "What is the most ideal..."), confirming what the brief said
about the two later printings sharing that phrasing. One small wording difference from the p.1587
description as recorded: this printing's key is hyphenated, "Basal-bolus", not "Basal bolus" as
recorded for p.1587, and it drops "regimen" the same way p.1587 does. The stem also drops the "3"
before "regular meals a day" (p.1140 and p.1587 both specify "3 regular meals"; p.1735 just says
"regular meals").

Proposed addition to `pedep2-end-24`'s `source` (appending after the existing Model Final Exam 2
clause):

> ; reprinted a third time in Model Final Exam 3, p.1735, with the same five-option order as the
> Model Final Exam 2 printing (Once daily long-acting insulin first, key third), the stem reworded
> "Which of the following is the most ideal insulin regimen for an 8-year-old child recently
> diagnosed with type 1 diabetes mellitus, who has regular meals a day?" (dropping the "3" before
> "regular meals"), and the key printed as "Basal-bolus" (hyphenated, without "regimen")

## n71 == pedep2-gen-27 (p.1737)

**REPRINT**, within-bank; also a cross-bank match, recorded separately below. See the structural
note at the top of this file for why this n drew eighteen candidates.

p.1737 asks "Which of the following statements is true about Down syndrome?", five options identical
to `pedep2-gen-27`'s (Most babies with Down syndrome are born to older mothers / Males are frequently
infertile / The incidence is 1 in 1400 / Epicanthic folds are pathognomonic / The majority have
severe intellectual impairment), same key (B, "Males are frequently infertile") at the same
position. `pedep2-gen-27` (p.221) prefixes the same option list with an extra framing sentence,
"Down syndrome is the most common form of trisomy encountered in children and occurs on chromosome
21," before "Which of the following statements is true?" — n71 folds that framing sentence into the
question itself ("...is true about Down syndrome?") but the tested content, options, order and key
are identical.

**NOT A REPRINT** for the other sixteen candidates, all instances of the "Which of the following
statements is true about/in [disease]?" template applied to a different disease — the discriminating
token in every case is simply which disease is named:

- `pedep2-hem-83` — thalassaemia (key: presence of target cells).
- `pedep2-res-39` — acute bronchiolitis (key: feeding difficulties are common).
- `pedep2-res-59` — bronchiolitis, a second and differently-optioned printing (key: caused by
  viruses only).
- `pedep2-ren-39` — nephrotic syndrome (key: rarely causes chronic renal failure).
- `pedep2-neu-28` — antiepileptic drugs, first half of a deliberately paired pair (key: all AEDs
  have side effects).
- `pedep2-neu-32` — antiepileptic drug treatment, the second half of that same pair (key: not all
  cases need treatment) — its own live explanation names `pedep2-neu-28` as its sibling directly, so
  this pairing is confirmed from the source itself, not inferred.
- `pedep2-neu-53` — primary headache classification (key: tension headache is symmetrical and
  gradual), explicitly marked in its own explanation as answered from general knowledge because the
  course material does not teach this topic at all.
- `pedep2-liv-20` — acute viral hepatitis (key: jaundice is not evident in all cases).
- `pedep-emg-61`, `pedep-mf3-25` — emergencies chapter, not re-read individually: the chapter tag
  alone is a sufficient discriminating token once the template shape is established, and neither
  scored above 0.588.
- `pedep-neo-32`, `pedep-mf3-43` — neonatal / neonatal-sepsis chapters, same reasoning.
- `pedep-mf3-54`, `pedep-mf4-30` — infection-vaccine chapter, same reasoning.
- `pedep-mf3-62` — gastroenterology chapter, same reasoning.
- `pedep-mf4-27` — growth-puberty chapter, same reasoning.

**CROSS-BANK, RECORD ONLY**: `pedhd-gen-18` (House, `pediatric .pdf p.47`, Part I ch.5 Q18) carries
the identical framing sentence, options, order and key as `pedep2-gen-27` — this is the pre-existing
endpoint/House overlap on this exact question, noted for the end-of-stream cross-bank sweep and not
acted on here.

Proposed addition to `pedep2-gen-27`'s `source`:

> (reprinted in Model Final Exam 3, p.1737, with the introductory sentence about trisomy 21 and
> chromosome 21 folded into the question stem, "Which of the following statements is true about Down
> syndrome?"; the options, their order and the key are unchanged)

## n72 == pedep2-mf2-59 (p.1739)

**REPRINT**, exact.

p.1739 is a word-for-word match of `pedep2-mf2-59` (p.1551): same DIC-laboratory-finding stem, same
five options in the same order, same key (B, "Elevated D-dimer").

Proposed addition to `pedep2-mf2-59`'s `source`:

> (reprinted word for word in Model Final Exam 3, p.1739)

## n76 == pedep2-car-43 (p.1747)

**REPRINT.**

p.1747 asks "Which clinical finding should not be associated with rheumatic fever?", options
Carditis / Migratory polyarthritis / Chorea / Maculopapular rash / Subcutaneous nodules, key D. This
matches `pedep2-car-43` (p.715, "All of the following are included in the Jones Major criteria
EXCEPT:") option for option and in the same order (only "polyarthritis" vs. car-43's "arthritis"
differs), same key at the same position.

A second printing, `pedep2-mf2-48` (p.1528), asks the same question with a different framing ("All
of the following are among the major manifestations of Jones criteria for diagnosis of rheumatic
fever except?") and reorders the first three options (Chorea, Migratory arthritis, Carditis) while
keeping Maculopapular rash and Subcutaneous nodules in their original fourth and fifth places, so its
key stays at the same numeric position by coincidence. This is noted for the record; n76's option
order matches `pedep2-car-43` unchanged, not `pedep2-mf2-48`'s reordered version, so `pedep2-car-43`
is the target.

Proposed addition to `pedep2-car-43`'s `source`:

> (reprinted in Model Final Exam 3, p.1747, with the stem reworded "Which clinical finding should not
> be associated with rheumatic fever?" and "migratory arthritis" spelled out as "migratory
> polyarthritis"; the option order and the key, Maculopapular rash at fourth position, are unchanged.
> A further printing in Model Final Exam 2, p.1528, reorders the first three options (chorea,
> migratory arthritis, carditis) while keeping Maculopapular rash fourth and the key unchanged)

## n77 == pedep2-mf2-12 (p.1749)

**REPRINT.**

p.1749 asks "What is the preferred (most common) method of treatment for hydrocephalus?" — the exact
same stem as `pedep2-mf2-12` (p.1456) — but with five options against mf2-12's four: p.1749 inserts
"Skull bone reconstructive surgery" as a third option, which is not present at all in mf2-12. This
pushes the key from mf2-12's third position ("Insertion of ventriculoperitoneal shunt") to p.1749's
fourth ("Ventriculo-peritoneal shunt") — the KEYS DIFFER flag the candidate list raised is fully
explained by this insertion, not by any actual disagreement about the answer. The key's wording is
also shortened slightly, dropping "Insertion of".

Proposed addition to `pedep2-mf2-12`'s `source`:

> (reprinted in Model Final Exam 3, p.1749, with "Skull bone reconstructive surgery" inserted as a
> third option, moving the key, reworded from "Insertion of ventriculoperitoneal shunt" to
> "Ventriculo-peritoneal shunt", from third position to fourth)

## n80 == pedep2-mf1-38 (p.1755)

**REPRINT.**

p.1755 asks "What is the diagnostic clue for anemia due to acute blood loss?", five options: Normal
retic count and high bilirubin / High retic count and high bilirubin / High retic count and marked
red cell hypochromia / Marked red cell hypochromia and microcytosis / High retic count and normal
bilirubin (key, fifth position). `pedep2-mf1-38` (p.1346) has the identical five options with the
last three reordered: High retic count and normal bilirubin (key, third position) / High retic count
and marked red cell hypochromia / Marked red cell hypochromia and microcytosis. The first two options
are in the same order in both; the third, fourth and fifth are reshuffled, carrying the key from
third position down to fifth. The key's text, "High retic count and normal bilirubin," is unchanged.

Proposed addition to `pedep2-mf1-38`'s `source`:

> (reprinted in Model Final Exam 3, p.1755, with the third, fourth and fifth options reordered: this
> printing puts "High retic count and marked red cell hypochromia" third, "Marked red cell
> hypochromia and microcytosis" fourth, and the key, "High retic count and normal bilirubin," fifth,
> against this entry's own third-position key; the first two options and the key's text are
> unchanged)
