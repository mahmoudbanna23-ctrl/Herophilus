# Peds endpoint part 2 — section 14 (Model Final Exam 3), fold adjudication B

Adjudicates staged entries n28–n55 of section 14 against the candidate list at `<SC>\cand14-B.txt`,
using the staged text from `node dump14.js 28 55`, the live text from `node live14.js <id> ...` for
every candidate id encountered (batched across two calls covering all ids in this range), and the
rendered page images in `…\0ffb5f86…\scratchpad\ep2-index\native\` for every entry adjudicated
REPRINT. Staged n values in this range that carried no candidate at all (n29, n44, n47, n48, n50,
n51, n53) are not covered here, per brief.

**Page images opened** (all `native\pNNNN.jpeg`, all fully legible, no `hires` fallback needed):
p1651 (n28), p1655 (n30), p1657 (n31), p1659 (n32), p1661 (n33), p1663 (n34), p1667 (n36), p1669
(n37), p1671 (n38), p1673 (n39), p1675 (n40), p1677 (n41), p1679 (n42), p1681 (n43), p1685 (n45),
p1687 (n46), p1693 (n49), p1699 (n52), p1703 (n54). p1665 (n35) and p1705 (n55) were not opened
because both verdicts turn on the option list and the printed key alone, and the dump text for both
already carries the stager's own "fully legible" read; nothing about the page image itself was in
question for either. Every page opened confirmed the staged transcription exactly, including two
places where the print itself carries a numeral or wording quirk worth recording (n36's age, n46's
"GPO", n49's extra option, n52's "relapse") — none of these are transcription errors, all are what
the page prints.

## Structural observation: this range holds two different reprint shapes side by side

Seventeen of the twenty-one candidates-with-verdicts in this range turned out to be genuine
reprints, a much higher hit rate than the option-set-template traps that dominate other ranges of
this section. Two sub-patterns are worth naming up front because they recur across several blocks
below:

1. **The bare-recall shape.** Several Model Final Exam 3 entries (n37, n42, and, to a lesser extent,
   n38) strip a whole clinical vignette down to a short, patient-free recall question — "What is the
   most likely causative pathogen in infective endocarditis?" instead of the 3-year-old-girl-with-CHD
   vignette; "What would be the initial step in the management of DKA?" instead of the
   3-year-old-boy-with-glucose-850 vignette. In every one of these the **option list and the key
   survive completely intact** (same set, same or trivially reordered text, same underlying answer),
   and that is what decides the verdict: the clinical content being tested is identical, only the
   framing sentence is gone. This is treated as a reprint, consistent with how this shape was
   adjudicated in section 14's earlier range (`endpoint-p2-s14-fold-adjudication-C.md`, n58): a
   stripped-vignette bare question is still the same question when the full option pool and the key
   are unchanged, and is judged differently from a case where the option **pool itself** changes
   (see n34 below).
2. **A vignette-preserved but numerically altered shape** (n30, n36) where the whole clinical frame
   survives but one concrete detail — an age, a set of lab values — is respelled to a rounder or
   simpler form. These are folded on the same logic used elsewhere in this project for a defective
   or respelled numeral: the option list and key are untouched, so the surface change is cosmetic to
   the test, not a new clinical fact being tested.

Against those two shapes, **n33 and n34 are the closer calls in this range**, and both are judged NOT
A REPRINT, for the opposite reason from each other: n34's option **pool** genuinely changes (one
option is swapped for an unrelated one, not just reworded or dropped), and n33's vignette changes a
clinically load-bearing detail (the patient's age, by roughly two orders of magnitude) while dropping
a stated risk factor (maternal age), in a section of this exact bank that is already independently
known to keep near-identical AVSD/Down-syndrome vignettes as separate, unfolded entries across
chapters (`pedep2-gen-24` and `pedep2-car-25` are two already-live, never-folded siblings of exactly
this vignette). Both are explained in full in their own blocks below.

## n28 == pedep2-mf1-49 (p.1651)

**REPRINT.**

p.1651 asks the identical question as `pedep2-mf1-49` (source p.1368): a 20-month-old child with a
febrile illness and a 5-minute generalized tonic-clonic seizure, asking which of four options is a
risk factor for future epilepsy, key D, "History of epilepsy in the father." The four options are
printed in the same order with identical wording on both pages. Only the stem's phrasing differs —
p.1651 states the facts in two short sentences ("...has a 5-minute...seizure. The systemic exam is
normal.") where `pedep2-mf1-49`'s printing narrates the same facts as a short case history ending
with "she was diagnosed with febrile convulsions. Her parents are concerned..." before asking the
same question. This is a reworded-stem reprint with no clinical content added or removed.

Proposed addition to `pedep2-mf1-49`'s `source` (currently "Pediatrics endpoint part2.pdf p.1368"):

> (reprinted in Model Final Exam 3, p.1651, with the stem reworded and condensed — the diagnosis
> confirmation and the parents' concern are dropped in favour of a direct two-sentence case plus
> question; the options and the key are unchanged)

## n30 == pedep-neo-20 (p.1655)

**REPRINT**, within-bank (part 1 and part 2 are one bank); also a cross-bank match to House,
recorded below.

p.1655 asks about a 4-week-old formula-fed girl with jaundice, dark urine, pale stools and failure to
regain birth weight, "Labs show elevated conjugated bilirubin," five options, key B, "Biliary
atresia." `pedep-neo-20` (Pediatrics endpoint part1.pdf p.836) is the same vignette with the same
five options in the same order and the same key, but with the lab finding given as specific numbers:
"Total bilirubin is 135 μmol/L (normal <100), conjugated 65 μmol/L (normal <20). Blood counts are
normal." p.1655 replaces that sentence with the summary "Labs show elevated conjugated bilirubin"
and drops the blood-count sentence entirely; nothing else in the stem or the options changes.

The identical vignette, with the identical specific bilirubin numbers, is also printed in House as
`pedhd-neo-20` (pediatric .pdf p.60), which is a cross-bank match to the same underlying question —
recorded here for the end-of-stream `alsoIn` sweep, not folded, since nothing folds across banks.

Proposed addition to `pedep-neo-20`'s `source` (currently "Pediatrics endpoint part1.pdf p.836"):

> (reprinted in Model Final Exam 3, p.1655, with the specific bilirubin values and the blood-count
> sentence condensed to "Labs show elevated conjugated bilirubin"; the options and the key are
> unchanged; the same vignette, with the original numeric values, also appears in House as
> `pedhd-neo-20`, cross-bank, not folded)

## n31 == pedep2-mf2-43 (p.1657)

**REPRINT.**

p.1657 is a verbatim match to `pedep2-mf2-43` (source p.1518): the 4-year-old boy with delayed
speech, solitary play, distress with change and avoided eye contact, four options, key C, "Autism."
Stem, all four options, and the key are identical word for word between the two pages; only the line
break in the middle of the stem differs, which is a layout artefact, not a text change.

Proposed addition to `pedep2-mf2-43`'s `source` (currently "Pediatrics endpoint part2.pdf p.1518"):

> (reprinted verbatim in Model Final Exam 3, p.1657; the options and the key are unchanged)

## n32 == pedep2-mf2-44 (p.1659)

**REPRINT.**

p.1659 is a verbatim match to `pedep2-mf2-44` (source p.1520): the home-delivered term infant with
umbilical stump oozing on day 4 and uncertain vitamin K status, five options, key B, "Prothrombin
time." Every word of the stem and every option is identical between the two printings.

Proposed addition to `pedep2-mf2-44`'s `source` (currently "Pediatrics endpoint part2.pdf p.1520"):

> (reprinted verbatim in Model Final Exam 3, p.1659; the options and the key are unchanged)

## n33 == none (p.1661)

**NOT A REPRINT** — for all five candidates.

p.1661 asks about a 3-month-old baby, born by vaginal delivery after "an uneventful perinatal
period to a primiparous mother," hypotonic with single palmar creases and epicanthic folds, asking
for the most likely heart lesion, key A, "Atrioventricular septal defect," among the same five heart
lesions in the same order as the two live candidates below.

- `pedep2-gen-24` (sim 0.852) and `pedep2-car-25` (sim 0.796) both describe a **2-day-old** baby born
  to a **38-year-old** primiparous mother — the same option list and key, but a different age by
  roughly two orders of magnitude, and a stated maternal-age risk factor that p.1661 does not
  mention at all. The discriminating token is the age: this project's own material treats the timing
  of an AVSD murmur's discovery as clinically meaningful (the live entries' own explanations discuss
  heart failure typically developing between 2 weeks and 3 months, and frame the 2-day-old's murmur
  as being caught unusually early, before that window opens) — a 3-month-old presenting with the
  same finding is not the same clinical moment in that natural history, and the vignette does not
  merely round or respell a number the way n30 and n36 do; it substitutes a materially different age
  and drops a named risk factor.
- `pedhd-gen-15` (sim 0.775, House) is the cross-bank twin of `pedep2-gen-24`, carrying the same
  2-day-old, 38-year-old vignette; it fails to match p.1661 for the identical reason.
- `pedep2-gen-17` and `pedhd-gen-5` (option-set matches, options 0.800, stems 0.184, keys flagged as
  differing) are "Olive," a 10-day-old baby with a known diagnosis of Down syndrome and a **loud**
  murmur — a different vignette in every particular (no incidental-finding framing, no perinatal
  detail, an already-established diagnosis) with a different option pool (these two swap "Atrial
  septal defect" for "Innocent murmur," four of five options shared, the fifth genuinely different).
  This is the classic shared-menu-family trap: same theme (AVSD and Down syndrome), different
  question.

Worth recording as background, since it explains why age-plus-dropped-detail is treated as
disqualifying here but not in n30 or n36: `pedep2-gen-24` and `pedep2-car-25` are themselves already
two separate, never-folded live entries carrying what is otherwise the identical 2-day-old/38-year-
old vignette, kept apart because they sit in different chapters (genetics and cardiac). This bank
independently reuses this exact AVSD/Down-syndrome vignette family as distinct, unfolded siblings
rather than a single entry with `alsoIn`, which is consistent with reading p.1661's age-and-detail
change as another deliberate variant of the same template rather than a straight reprint of any one
of them. No fold is proposed for any of the five candidates.

## n34 == none (p.1663)

**NOT A REPRINT** — for all five candidates.

p.1663 asks about a 5-year-old girl with type 1 diabetes mellitus diagnosed two months ago, who
becomes aggressive and pale while running in the garden with a blood glucose of 50 mg/dL, five
options, key D, "Oral glucose drink." The five options are: Intramuscular (IM) glucagon /
Intravenous infusion of 5% glucose / Intravenous infusion of normal saline / Oral glucose drink /
Subcutaneous insulin.

- `pedep2-mf2-26` (options 0.800, stems 0.237, keys differ) is Sophie, a 9-year-old with a two-day
  history of fever, vomiting and diarrhoea and clinical dehydration — a completely different patient
  presentation (illness-related dehydration rather than exercise-related hypoglycaemia), correctly
  rejected.
- `pedhd-endo-9`, `-10`, `-11` and `-12` (House) are a shared five-question option-ladder family built
  around a **different** fifth option, "Fluid resuscitation with normal saline (0.9% sodium
  chloride)," in place of p.1663's "Intramuscular (IM) glucagon." This is not a reordering or a
  dropped filler option — the option **pool** itself differs by one substantive, clinically distinct
  choice (a glucagon route versus a shock-resuscitation route), which is a different question by the
  standard this range otherwise uses to fold bare-stem reprints (see the n37/n42 reasoning above,
  where the pool stayed identical). It is worth flagging on the record that one member of this House
  family, `pedhd-endo-11` (Harriet, 5-year-old, diagnosed 2 months ago, aggressive and pale while
  running in the garden, glucose 3 mmol/L — essentially the same value as 50 mg/dL in different
  units), shares almost every vignette detail with p.1663 word for word. Despite that vignette
  overlap, the option pool genuinely differs, so this is judged a related-but-distinct question
  rather than a fold, consistent with the rule that a shared option ladder (or, here, a shared
  vignette against a differing ladder) pairs questions rather than merging them.

No fold is proposed for any of the five candidates.

## n35 == none (p.1665)

**NOT A REPRINT.**

p.1665 describes a 7-year-old girl with recurrent four-limb jerking and right eye deviation lasting
about 2 minutes, unaware afterward — key C, "Tonic-clonic seizure." The single candidate,
`pedep2-mf1-48` (options 1.000, stems 0.163, keys flagged as differing), asks about a 10-year-old boy
with 10–15-second staring spells and an immediate return to baseline — key B, "Absence seizure."
Both draw on the identical five-item seizure-type menu (Myoclonic / Absence / Tonic-clonic / Simple
febrile / Complex febrile), which is exactly the shared-option-menu trap the brief warns about: the
menu is reused across two different clinical pictures with two different correct answers (a true
generalized convulsion with postictal unawareness versus a brief, aware-immediately staring spell),
so the two questions pair on their menu but do not fold.

## n36 == pedep2-dp-19 (p.1667)

**REPRINT**, within-bank; also a cross-bank match to House, recorded below.

p.1667 asks about a "**15**-month-old baby boy...brought to the clinic with features of spastic
diplegia," counselling the parents on cerebral palsy, five statements, key D, "Botulinum toxin may
be useful to treat spasticity." `pedep2-dp-19` (source p.133) is the identical stem and the identical
five options, with identical wording throughout, except that its baby is "**18**-month-old." The age
was re-read at 400 dpi-equivalent resolution on the rendered page and is unambiguously "15" as
printed at p.1667 — this is a genuine numeral difference between the two printings, not a
transcription slip, and it is the only difference between the two entries; the key's position and
text are unaffected.

The identical stem and option set, again with "18-month-old," is also printed in House as
`pedhd-devp-19` (pediatric .pdf p.74), a cross-bank match recorded here, not folded.

Proposed addition to `pedep2-dp-19`'s `source` (currently "Pediatrics endpoint part2.pdf p.133"):

> (reprinted in Model Final Exam 3, p.1667, with the child's age printed as 15 months rather than 18
> months; the options and the key are unchanged; the same question, at 18 months, also appears in
> House as `pedhd-devp-19`, cross-bank, not folded)

## n37 == pedep2-car-21 (p.1669)

**REPRINT**, within-bank; also a cross-bank match to House, recorded below.

p.1669 is the bare-recall question "What is the most likely causative pathogen in infective
endocarditis?" with five options and key C, "Streptococcus viridans" — no clinical vignette at all.
`pedep2-car-21` (source p.670) asks the identical question of a specific patient, a 3-year-old girl
with complex congenital heart disease, fever, an ejection systolic murmur, a CRP of 250 mg/L and
echo-confirmed vegetations, ending "What is the most likely causative pathogen?" The five options are
printed in the identical order with identical wording on both pages, and the key is the same choice
at the same position. The only difference is that p.1669 strips the entire clinical vignette down to
the bare underlying fact question — the same reprint shape already established for n58 in this
section's earlier range (`endpoint-p2-s14-fold-adjudication-C.md`): when the full option pool and the
key survive intact, a stripped vignette is a rewording, not a different question.

The same full vignette and option set, with the same key, is also printed in House as
`pedhd-card-21` (pediatric .pdf p.30) — a cross-bank match, recorded here, not folded.

Proposed addition to `pedep2-car-21`'s `source` (currently "Pediatrics endpoint part2.pdf p.670"):

> (reprinted in Model Final Exam 3, p.1669, as a bare question with the clinical vignette stripped
> out entirely — "What is the most likely causative pathogen in infective endocarditis?" — the five
> options, their order, and the key, Streptococcus viridans, are all unchanged; the same vignette
> also appears in House as `pedhd-card-21`, cross-bank, not folded)

## n38 == pedep2-neu-1 (p.1671)

**REPRINT**, within-bank; also a cross-bank match to House, recorded below.

p.1671 opens "When counseling her parents, which of the following statements regarding simple
febrile convulsions is true?" with no antecedent establishing who "her" is anywhere on the page — a
printed defect, transcribed as printed. `pedep2-neu-1` (source p.955) is the same question preceded
by its setup sentence: "An 18-month-old girl is seen on the post-take ward round following her first
febrile seizure." Once that opening sentence is supplied, the two stems are identical, and the five
options — "They are often focal in nature" through "May occur without fever," with "Occur between
**the** ages of 6 months and 5 years" as option C — are printed with identical wording, in identical
order, with the identical key, C.

The same defective, antecedent-free opening also recurs on the unanswered twin page p.1670 (noted
by the stager, not re-verified here since it carries no key and is not itself a candidate). The same
question, missing only the article "the" in option C ("Occur between ages of 6 months and 5 years"),
is also printed in House as `pedhd-neuro-26` (pediatric .pdf p.100) — a cross-bank match, recorded
here, not folded.

Proposed addition to `pedep2-neu-1`'s `source` (currently "Pediatrics endpoint part2.pdf p.955"):

> (reprinted in Model Final Exam 3, p.1671, with the opening sentence that establishes the patient
> dropped, leaving the stem open on the dangling reference "her parents" with no antecedent on the
> page — a printed defect, carried across as printed; the options and the key are unchanged; the
> same question, missing the article "the" in option C, also appears in House as `pedhd-neuro-26`,
> cross-bank, not folded)

## n39 == pedep2-mf1-69 (p.1673)

**REPRINT.**

p.1673 is a verbatim match to `pedep2-mf1-69` (source p.1408): "What is the most probable type of
abnormality found on karyotyping in cases of Down syndrome?", four options (Mitotic nondisjunction /
Translocation / Meiotic nondisjunction / Mosaicism), key C. Every word of the stem and all four
options match exactly.

Proposed addition to `pedep2-mf1-69`'s `source` (currently "Pediatrics endpoint part2.pdf p.1408"):

> (reprinted verbatim in Model Final Exam 3, p.1673; the options and the key are unchanged)

## n40 == pedep2-hem-37 (p.1675)

**REPRINT**, within-bank; also a cross-bank match to House, recorded below.

p.1675 asks about hemoglobin changing through fetal and extra-uterine life, five statements, key B,
"Hemoglobin concentration falls after birth until around 7 weeks." `pedep2-hem-37` (source p.343) is
the same question, with option B printed there as "Hb concentration falls after birth until around 7
weeks" (the abbreviation "Hb" where p.1675 spells out "Hemoglobin") and the stem's "extrauterine"
printed there without the hyphen p.1675 uses ("extra-uterine"). Every other option, and the key, are
identical.

The same question, in British spelling ("Haemoglobin," "Haematopoesis"), is also printed in House as
`pedhd-haem-16` (pediatric .pdf p.38) — a cross-bank match, recorded here, not folded.

Proposed addition to `pedep2-hem-37`'s `source` (currently "Pediatrics endpoint part2.pdf p.343"):

> (reprinted in Model Final Exam 3, p.1675, with the stem's "extrauterine" printed as "extra-uterine"
> and option B's "Hb" spelled out as "Hemoglobin"; the key is unchanged; the same question, in
> British spelling, also appears in House as `pedhd-haem-16`, cross-bank, not folded)

## n41 == pedep2-mf2-20 (p.1677)

**REPRINT.**

p.1677 is a verbatim match to `pedep2-mf2-20` (source p.1472): "Which clinical problem may present
with secondary (onset) enuresis?", five options (Acute kidney injury / Emotional upset / Ectopic
ureter / Orthostatic proteinuria / Glomerulonephritis), key B. Every word of the stem and all five
options match exactly; an unanswered twin at p.1676 was noted by the stager and is not itself a
candidate.

Proposed addition to `pedep2-mf2-20`'s `source` (currently "Pediatrics endpoint part2.pdf p.1472"):

> (reprinted verbatim in Model Final Exam 3, p.1677; the options and the key are unchanged)

## n42 == pedep-emg-28 (p.1679)

**REPRINT**, within-bank (part 1 and part 2 are one bank).

p.1679 is the bare-recall question "What would be the initial step in the management of diabetic
ketoacidosis (DKA)?" with five options and key E, "IV bolus of normal saline" — no clinical vignette.
`pedep-emg-28` (Pediatrics endpoint part1.pdf p.632) asks the same underlying question of a specific
3-year-old boy with dehydration, rapid breathing, a glucose of 850 mg/dl and urine ketones ++, ending
"What is the most appropriate initial management?" The same five clinical actions appear on both
pages — start IV insulin infusion, SC rapid-acting insulin, an IV bolus of normal saline, (IV)
NaHCO3, and oxygen therapy — but reordered: p.1679 prints the key fifth, `pedep-emg-28` prints it
third, and p.1679 prints "IV NaHCO3" where `pedep-emg-28` prints plain "NaHCO3." This is the same
bare-recall shape as n37 above: the option pool and the underlying answer are unchanged, only their
order and the framing sentence differ, so this is judged the same question rather than a new one.
`pedep-emg-28`'s own `source` field already records a second printing of this same question, "in a
different chapter, respelled," at Pediatrics endpoint part2.pdf p.1142 — p.1679 is a third printing.

Proposed addition to `pedep-emg-28`'s `source` (currently "Pediatrics endpoint part1.pdf p.632 (also
printed in Pediatrics endpoint part2.pdf p.1142, in a different chapter, respelled; the options and
the key are unchanged)"):

> ; reprinted a third time in Model Final Exam 3, p.1679, as a bare question with the vignette
> stripped out — "What would be the initial step in the management of diabetic ketoacidosis (DKA)?"
> — with the same five options reordered, moving the key, an IV bolus of normal saline, from third
> position to fifth, and "NaHCO3" printed as "IV NaHCO3"; the answer is unchanged

## n43 == pedep2-mf2-9 (p.1681)

**REPRINT.**

p.1681 is a verbatim match to `pedep2-mf2-9` (source p.1450): "What is the underlying pathophysiologic
mechanism of anemia in patients with G6PD enzyme deficiency?", five options (Bone marrow aplasia /
Consumption coagulopathy / Food poisoning / Intravascular hemolysis / Extravascular hemolysis), key
D. Every word of the stem and all five options match exactly. (`pedep2-mf2-9`'s own `source` already
records this as a cross-section repeat of an earlier Model Final Exam 2 entry at the same page,
p.1450 — that is the existing entry itself, not a separate live target, and is unaffected by this
fold.)

Proposed addition to `pedep2-mf2-9`'s `source` (currently "Pediatrics endpoint part2.pdf p.1450"):

> (reprinted verbatim in Model Final Exam 3, p.1681; the options and the key are unchanged)

## n45 == pedep2-mf2-1 (p.1685)

**REPRINT**, within-bank; one further candidate is rejected below.

p.1685 is a verbatim match to `pedep2-mf2-1` (source p.1434): the developmental-delay question with
five options ("Not following moving objects by turning head at 4 weeks" through "Poor head control
at 6 months"), key E. Every word of the stem and all five options match exactly.

The second candidate, `pedhd-dev-21` (House, sim 0.800, keys flagged as differing), is **NOT A
REPRINT** — it is a different question entirely, "which of the following is not a developmental
concern," with a completely different set of five milestones (visual fixing at 5 weeks / sitting
unsupported at 7 months / single words at 16 months / walking at 17 months / copying a line at 24
months) that shares no option text at all with p.1685's set. The 0.800 similarity score is a
false-positive from shared subject matter (both are developmental-milestone questions), not from any
shared question content; no fold or cross-bank record is proposed for this pairing.

Proposed addition to `pedep2-mf2-1`'s `source` (currently "Pediatrics endpoint part2.pdf p.1434"):

> (reprinted verbatim in Model Final Exam 3, p.1685; the options and the key are unchanged)

## n46 == pedep2-mf1-39 (p.1687)

**REPRINT.**

p.1687 asks "What is the pathophysiologic defect in sickle cell anemia?" with key D, "Amino acid
replacement," matching `pedep2-mf1-39` (source p.1348) in stem, in all five options, and in the key,
with one exception: p.1687 prints option A as "Enzyme deficiency **GPO**" where `pedep2-mf1-39`
prints plain "Enzyme deficiency." This extra "GPO" was confirmed on the rendered page and is not a
transcription artefact; it does not touch the key, which stays at option D in both printings.

Proposed addition to `pedep2-mf1-39`'s `source` (currently "Pediatrics endpoint part2.pdf p.1348"):

> (reprinted in Model Final Exam 3, p.1687, with option A printed as "Enzyme deficiency GPO" rather
> than "Enzyme deficiency"; the key, Amino acid replacement, is unchanged)

## n49 == pedep2-mf1-65 (p.1693)

**REPRINT.**

p.1693 asks "Which laboratory finding is characteristic of bone marrow failure?" with five options —
Reticulocytosis / Low reticulocyte count (key B) / High indirect bilirubin / Positive Coombs test /
Hypochromic microcytic anemia. `pedep2-mf1-65` (source p.1400) asks the identical question with the
identical key at the identical position (B, "Low reticulocyte count"), but prints only four options:
"High indirect bilirubin" is not among them. This was confirmed by reading p.1693 directly — the
option is genuinely printed there, between the key and "Positive Coombs test," a fifth option that
the earlier printing does not carry. The key's text and its position are unaffected by the addition.

Proposed addition to `pedep2-mf1-65`'s `source` (currently "Pediatrics endpoint part2.pdf p.1400"):

> (reprinted in Model Final Exam 3, p.1693, with an additional option, "High indirect bilirubin,"
> printed between the key and "Positive Coombs test" — a five-option printing where this printing
> carries only four; the key, "Low reticulocyte count," is unchanged and unmoved)

## n52 == pedep2-mf2-69 (p.1699)

**REPRINT.**

p.1699 asks "Which is an essential aspect in the management of acute lymphoblastic leukemia (ALL) in
children?" with key D, "Intrathecal chemotherapy," matching `pedep2-mf2-69` (source p.1571) in stem
and in every option, with one exception: p.1699 prints option E as "Bone marrow radiation **relapse**"
where `pedep2-mf2-69` prints plain "Bone marrow radiation." The key is unaffected, staying at option
D in both printings.

Proposed addition to `pedep2-mf2-69`'s `source` (currently "Pediatrics endpoint part2.pdf p.1571"):

> (reprinted in Model Final Exam 3, p.1699, with option E printed as "Bone marrow radiation relapse"
> rather than "Bone marrow radiation"; the key, Intrathecal chemotherapy, is unchanged)

## n54 == pedep2-mf1-70 (p.1703)

**REPRINT**, within-bank; one further candidate is rejected below.

p.1703 is a verbatim match to `pedep2-mf1-70` (source p.1410): "Which clinical condition is
associated with a diastolic cardiac murmur?", five options (Anemia / Hyperthyroidism with
hyperdynamic circulation / Mitral stenosis / Aortic stenosis / Fever), key C. Every word of the stem
and all five options match exactly.

The second candidate, `pedep2-car-37` (options 1.000, stems 0.333, same key position), is **NOT A
REPRINT** to fold n54 against — it is a separately worded, already-live question, "The following
condition is not associated with a systolic murmur:", using the identical five-item option pool in
inverted logic (asking for the one lesion that is *not* systolic rather than the one that *is*
diastolic). Since p.1703 already has an exact-text match at `pedep2-mf1-70`, this second candidate is
recorded here only as a note that a third, inversely-phrased sibling of the same fact already exists
in the live data; no additional fold or amendment is proposed against it.

Proposed addition to `pedep2-mf1-70`'s `source` (currently "Pediatrics endpoint part2.pdf p.1410"):

> (reprinted verbatim in Model Final Exam 3, p.1703; the options and the key are unchanged)

## n55 == none (p.1705)

**NOT A REPRINT.**

p.1705 asks "Which of the following viruses commonly causes aplastic crisis in a patient with sickle
cell disease?" with five virus options (Roseola / Parvovirus B19 / Coxsackie A16 / Echovirus 11 /
Cytomegalovirus), key B. The single candidate, `pedep2-hem-65` (sim 0.667, keys flagged as
differing), asks "Which of the following is the most common cause of aplastic crisis in a patient
with sickle cell disease?" with a mixed-mechanism option list (Dehydration / Respiratory syncytial
virus infection / Human parvovirus B19 infection / Repeated blood transfusion / Hemophilus
influenzae septicemia), key C. Both share the correct underlying fact (parvovirus B19), but the
discriminating token is the option pool itself: p.1705 tests discrimination among five named viruses,
while `pedep2-hem-65` tests discrimination among a mix of a behavioural trigger, two other infections,
a treatment and a different organism. This is a different question built around the same clinical
fact, not a reprint of the same question, and no fold is proposed.
