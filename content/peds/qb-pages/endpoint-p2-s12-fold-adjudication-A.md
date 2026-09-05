# Endpoint Part 2, Section 12 "Model Final Exam 1" — fold adjudication, n1-n30

Run against: `content\peds\qb-pages\endpoint-p2-s12-mfe1.array.js` (staged, verbatim, n1-n30 read
directly from disk) vs `app\data\questions.peds.ep2.js` (live `Q_PEDS_EP2`, ids read directly from
disk). Candidate list taken from the brief's `sweep-staged-ep2.js 12` output. Page images opened for
every REPRINT call: `…\scratchpad\ep2-index\native\pNNNN.jpeg`, pages `1270+2n` for n1-n30
(n1=p.1272 … n30=p.1330). Live-side pages were not rendered (out of the cached range, not opened, per
brief). No candidate in n1-n30 was found unsettled; no additional un-swept reprint was spotted while
reading.

Where the brief's sweep table said "KEYS DIFFER" (n1, n23), both turned out to be fold shape 3
(reordered options move the key index) once the option TEXT was compared rather than the index —
confirmed against the live JS and the page image both times.

---

## n1 == pedep2-nd-10 (p.1272)

**REPRINT.**

Discriminating token: both ask the median age a child follows a **"two-step command"** example
worded almost identically ("Go to the cupboard and fetch your red shoes"), and both key **"3
years"** — staged key index 2 (text "3 years"), live `answer:3` (text "3 years" at that index). Fold
shape: reworded stem (staged is a generic "a boy", live names the patient "Rinah") + reordered/rebuilt
option ladder (staged: 18mo/2y/3y/4y/5y; live: 6mo/12mo/2y/3y/4y) — same key shape 3+6.

Image confirms: highlighted key is "C. 3 years", box on the page reads "By around 3 years, most
children can understand and follow simple two-step instructions. This reflects typical language
comprehension and short-term memory development. Younger children usually can only follow one-step
commands." No figure.

Live `source` will need: `Pediatrics endpoint part2.pdf p.38; reprinted p.1272`. The model-exam box
says nothing the live explanation doesn't already cover in substance, but it is worded differently
from the live box — record it: staged box quoted above vs live box "Following two-step commands
typically develops by 3 years of age, showing increased language comprehension."

## n2 == pedep2-dp-4 (p.1274)

**REPRINT — a THIRD printing.** The live entry's own explanation already documents the bank printing
this question twice (p.103 "Fortuna" and p.137 "Fatima", same vignette, same 4 options, same key).
This model-exam page is a third printing of the same question.

Discriminating token: **"Left-hand preference"** as the concerning finding in an 8-month-old girl who
rolls but doesn't crawl, says "dada" non-specifically, grasps only with her left hand, smiles but
can't wave bye-bye — identical clinical picture, identical 4-option list in the same order, staged
key index 3 = live `answer:3`.

Image confirms: highlighted key is "D. Left-hand preference", no figure. Box on this page reads "A
strong hand preference before 1 year may indicate hemiplegia or underlying neurological problems.
Other milestones like rolling over, grasping, or babbling are within normal limits for her age." —
this is a THIRD distinct box wording, different from both boxes already quoted in the live
explanation (p.103: "…early hemiparesis and neurological injury"; p.137: "…may suggest weakness of
one side due to cerebral palsy").

Live `source` will need: `Pediatrics endpoint part2.pdf p.103; reprinted p.137; reprinted p.1274`.
The third box's wording should be folded in alongside the other two, quoted as above.

## n5 == pedep2-gen-26 (p.1280)

**REPRINT.**

Discriminating token: identical vignette — 6-year-old boy, Down syndrome, pale/lethargic 4 weeks,
bruises on shins, "which condition is it important to rule out" — same 5 options in the same order,
staged key index 3 = live `answer:3`, both "Acute leukaemia/leukemia".

Image confirms: highlighted key is "D. Acute leukemia", no figure. Box on this page reads "Children
with Down syndrome have a higher risk of leukemia. Pallor, bruising, and lethargy are red flags that
need urgent evaluation." — worded differently from the live box ("Children with Down syndrome are at
increased risk of developing acute leukemia, especially acute lymphoblastic or myeloid leukemia.
Unexplained pallor, lethargy, and bruising warrant prompt evaluation.").

Live `source` will need: `Pediatrics endpoint part2.pdf p.219; reprinted p.1280`, with the staged
box's wording folded in as a second printing.

## n6 == pedep2-gen-18 (p.1282)

**REPRINT.**

Discriminating token: identical vignette — well 4-year-old girl with Down syndrome, annual/yearly
follow-up, constipation, height 75th->25th centile, weight 50th->75th centile, "which investigation" —
staged key index 3 = live `answer:3`, both "Thyroid function tests". Note: staged prints 5 options
(adds "Vitamin D levels" as E), live prints only 4 (no Vitamin D option) — an option-count difference
between printings, not a different question.

Image confirms: highlighted key is "D. Thyroid function tests", no figure. Box on this page reads
"Down syndrome increases the risk of hypothyroidism. Falling height centile with weight gain suggests
endocrine dysfunction rather than celiac disease." — worded differently from the live box ("Children
with Down syndrome are at increased risk for hypothyroidism, which can cause growth deceleration and
weight gain.").

Live `source` will need: `Pediatrics endpoint part2.pdf p.203; reprinted p.1282`. Also worth a note in
`explanation` that the model-exam reprint adds a fifth option, "Vitamin D levels", not present in the
p.203 printing.

## n8 == pedep2-ren-22 (p.1286)

**REPRINT.**

Discriminating token: identical clinical picture — 11-year-old girl, 6 days fever/abdominal
pain/bloody diarrhea, increasingly irritable and lethargic, Hb 7.5, platelets 40 (thousand), raised
urea/creatinine, RBC fragments on film — staged key index 2 = live `answer:2`, both "Hemolytic
uremic syndrome". Option 1 differs in wording ("Inflammatory bowel disease" staged vs "Ulcerative
colitis" live) but the remaining four options and the answer match exactly.

⚠️ Numeric discrepancy between the two printings, recorded per the "contradictions are recorded,
never corrected" rule: staged/model-exam page prints urea **90.0 mmol/L** and creatinine
**200 mmol/L**; the live entry (p.862 printing) has urea **9.0 mmol/L** and creatinine
**200 µmol/L** (the medically conventional unit). Image confirms the model-exam page does print
"urea 90.0 mmol/L (high), creatinine 200 mmol/L (high)" exactly as staged — this is the book's own
inconsistency between its two printings of the same question, not a staging error.

Image confirms: highlighted key is "C. Hemolytic uremic syndrome", no figure.

Live `source` will need: `Pediatrics endpoint part2.pdf p.862; reprinted p.1286`. The lab-value
discrepancy above belongs in `explanation` as a recorded contradiction (per user ruling — never
disputed, never silently reconciled), and the "Inflammatory bowel disease" vs "Ulcerative colitis"
first-option wording is worth noting alongside it. The staged box wording is close to but not
identical to the live box; no substantively new clinical claim in the staged box.

## n18 == pedep2-hem-68 (p.1306)

**REPRINT — exact.** sim 1.000 confirmed by direct read: stem, all 5 options in the same order, and
key all byte-identical between staged and live (staged key index 3 = live `answer:3`, "Normal
clotting parameters").

Image confirms: highlighted key is "D. Normal clotting parameters", no figure. Box on this page reads
"Henoch-Schönlein purpura presents with palpable purpura and normal coagulation. Platelets, PT, and
aPTT are usually normal." — worded differently from the live box ("HSP is a small-vessel vasculitis,
so clotting studies are normal. It presents with palpable purpura, arthritis, and abdominal pain.").

Live `source` will need: `Pediatrics endpoint part2.pdf p.405; reprinted p.1306`, with the staged box
wording folded in as a second printing.

## n19 == pedep2-car-18 (p.1308)

**REPRINT — exact.** sim 0.978 confirmed: stem, all 5 options in the same order, and key are
identical (staged key index 1 = live `answer:1`, "Transposition of the great arteries").

Image confirms: highlighted key is "B. Transposition of the great arteries", no figure. Box on this
page reads "Profound cyanosis from birth, single loud S2, and poor oxygen response indicate TGA.
Increased pulmonary vasculature is seen on CXR." — worded differently (shorter) than the live box
("In TGA, oxygen therapy does not improve cyanosis because the systemic and pulmonary circulations
are in parallel rather than in series. A single second heart sound and severe hypoxia are typical.").

Live `source` will need: `Pediatrics endpoint part2.pdf p.664; reprinted p.1308`, staged box wording
folded in.

## n21 vs pedep2-res-7 and pedep2-res-54 (p.1312) — a split verdict

The sweep flagged n21 against **two** live ids; they are not interchangeable and needed separate
verdicts.

**n21 == pedep2-res-54: REPRINT.**
Discriminating token: option 3 in both is **"Spasmodic cough"** (word-identical), and the key option
text in both is "the presence of symptoms between coughs and colds" (staged) / "the presence of
symptoms between colds" (live, res-54) — a filler-word difference only, same clinical claim, same
key index (staged key 4 = live `answer:4`). Age differs (6-year-old staged vs 3-year-old live) but the
age is not load-bearing for this question — nothing in the box or explanation on either side turns on
the specific age.

**n21 vs pedep2-res-7: NOT A REPRINT.** This is the same shared stem frame ("recurrent wheezing
associated with upper respiratory tract infections… which feature most supports asthma") reused with
a genuinely different third distractor: res-7's option 3 is **"Peak-flow variability diary"**, which
tests a different fact entirely (that a peak-flow tool is not usable at preschool age) — not a filler
swap, a different tested concept from "Spasmodic cough". res-7 also names the patient "Zak" at age 3.
This is the template/shared-stem-frame case the brief describes: same frame, different specific
distractor being tested, so it pairs rather than folds.

Image confirms (for the res-54 fold): highlighted key on p.1312 is "E. The presence of symptoms
between coughs and colds", no figure. Box reads "Persistent symptoms outside acute infections suggest
underlying asthma. Finger clubbing or constant cough is uncommon in mild/moderate asthma." — worded
differently from live res-54's box ("Asthma is more likely when symptoms like wheeze or cough persist
outside of viral illnesses. Isolated symptoms only during colds may reflect viral-induced wheeze
rather than true asthma.").

Live `source` (pedep2-res-54) will need: `Pediatrics endpoint part2.pdf p.583; reprinted p.1312`,
staged box wording folded in. pedep2-res-7's `source` is untouched — n21 does not reprint it.

## n22 == pedep2-neu-26 (p.1314)

**REPRINT — a THIRD printing.** Live `source` already reads "p.1008 (reprinted at p.1075)"; this
model-exam page is a third.

Discriminating token: identical clinical picture — girl with diarrhoea 3 days before progressive
weakness/inability to walk, symmetrical peripheral weakness without atrophy, absent ankle reflexes,
1+ knee reflexes — same 5 options in the same order, staged key index 0 = live `answer:0`,
"Guillain-Barré syndrome". Staged stem specifies "A 12-year-old girl"; live's stem (as printed at
whichever of p.1008/p.1075 it was transcribed from) reads only "A girl" with no age given — the image
confirms the model-exam page itself does print "A 12-year-old girl", so the age is present at least
in this printing.

Image confirms: highlighted key is "A. Guillain-Barré syndrome", no figure. Box on this page reads
"Symmetrical ascending weakness with decreased reflexes after a recent infection is classic for GBS.
Lack of muscle atrophy helps distinguish it from muscular dystrophy." — worded differently from the
live box ("Guillain-Barré often follows an infection like diarrhea. It causes symmetrical ascending
weakness with reduced or absent reflexes, but no muscle atrophy.").

Live `source` will need: `Pediatrics endpoint part2.pdf p.1008 (reprinted at p.1075); reprinted
p.1314`, staged box wording folded in.

## n23 == pedep2-neu-17 (p.1316)

**REPRINT.** Sweep flagged "KEYS DIFFER" (staged key 4, live answer 2) — resolved as fold shape 3,
reordered options moving the key index; the key TEXT matches in both.

Discriminating token: identical vignette — 5-year-old boy ("Ahmed" in live), difficulty climbing
stairs, progressively worse over 6-12 months, playing on carpet with brother when mother calls — both
key **"Gower's sign"** (staged option E, index 4; live option C, index 2). Live's own explanation
already documents this entry as "reprinted at p.1051"; this model-exam page (p.1316) is a further
reprint.

Option-list note: live's 5-option ladder is Babinski's/Romberg's/Gower's/Kernig's/**Chorea**; staged's
is Kernig's/Romberg's/Babinski's/**Dyskinesia**/Gower's — the fourth slot swaps "Chorea" for the
broader term "Dyskinesia". This is a genuine wording difference between printings but does not change
the vignette or the key; folding is still correct because the vignette and the keyed sign are
identical.

Image confirms: highlighted key is "E. Gower's sign", no figure. Box on this page reads "Gower's sign
(using hands to rise from the floor) indicates proximal muscle weakness, typical of Duchenne or Becker
muscular dystrophy." — worded differently from the live box (which opens "Gower's sign indicates
proximal muscle weakness, as seen when a child must use their hands to push off from the floor. It's
characteristic of muscular dystrophies such as Duchenne's." — similar content, different phrasing).

Live `source` will need: `Pediatrics endpoint part2.pdf p.990 (reprinted at p.1051); reprinted
p.1316`. Worth a short note on the Chorea/Dyskinesia option-wording difference between printings.

## n26 == pedep2-res-22 (p.1322)

**REPRINT.**

Discriminating token: same clinical picture — girl admitted with 3-day coryzal symptoms then acute
breathing difficulty, previously well, non-smoking parents, thriving, widespread wheeze with no
crepitations — both key **"Viral episodic wheeze"/"Viral wheeze"** at index 0. Two details differ
between printings and are worth recording rather than treated as disqualifying: age (2-year-old
staged vs 3-year-old live) and atopic history (staged: "no history of atopic disorders"; live: "apart
from mild eczema" — the live printing actually gives her an atopic finding the staged one explicitly
denies). Neither detail is load-bearing in either explanation — both reasoning chains turn on the
single-episode, cold-triggered, no-interval-symptoms picture, not on age or eczema — so this is fold
shape 6 (reworded stem, one changed detail) rather than a different question.

Image confirms: highlighted key is "A. Viral episodic wheeze", no figure. Box on this page reads
"Wheezing only during viral infections in a previously healthy child is characteristic of
viral-induced episodic wheeze. Chronic asthma usually shows symptoms between infections." — worded
differently from the live box ("In children under 5, wheeze triggered by viral infections without
interval symptoms is termed viral wheeze. It is common and self-limited in otherwise healthy
children.").

Live `source` will need: `Pediatrics endpoint part2.pdf p.519; reprinted p.1322`. The age and
eczema/atopic-history discrepancy between the two printings should be noted in `explanation` as a
recorded (not corrected) difference, since it is a real content divergence between two printings of
what is otherwise the same question.

## n28 vs pedep2-nd-19 (p.1326) — NOT A REPRINT

**NOT A REPRINT.** This is a shared option menu (the Gross motor/Fine motor/Speech and
language/Play and social/Global delay five-way classification list that `pedep2-nd-19` and
`pedep2-nd-20` already reuse between themselves in the live file) applied to a different vignette,
not a reprint of nd-19.

What it actually is: nd-19's own explanation states this pattern explicitly — "This same red flag
reappears in a different framing in `pedep2-nd-24`… the two are not folded together, since one asks
for a domain label and the other for a ranked concern, but they teach the identical sign." n28 fits
the same description: it shares nd-19's classification-menu template and its keyed answer (fine motor
delay), but its vignette is materially different, not a rewording of the same one.

Discriminating token: nd-19's vignette establishes **normal gross motor (cruising) and normal speech
("mama"/"papa")**, with the hand-preference finding the *only* abnormality described. n28's vignette,
confirmed on the image, describes **"crossing arms in his left hand and dragging his left hand and
synkinesis and spastic gait"** — overt upper-motor-neuron signs (spasticity, synkinesis, gait
abnormality) that nd-19 never mentions at all, plus a materially different laterality statement
("his father informs the health visitor that he only uses his right side", i.e. avoiding a weak left
side, vs nd-19's "he only uses his left hand at home", i.e. a preference for the left). Age differs by
a month (13-month-old staged vs 12-month-old live) and the first option differs too ("Normal
developmental milestones" staged vs "Gross motor delay" live) — a genuinely different fifth-option
substitution, not a filler swap, since it removes gross motor delay as an option entirely from the
staged version despite the staged vignette actually describing a gait abnormality. Taken together this
is a different clinical vignette built on the same answer menu, not the same question reprinted — it
pairs with nd-19 (and with nd-24, per that entry's own cross-reference) rather than folding into
either.

Image (p.1326) also independently confirms the staged transcription is verbatim, not an OCR/garbling
artifact — the book itself prints the odd-sounding "crossing arms in his left hand and dragging his
left hand" phrasing. No box printed on this page (confirmed genuinely boxless, matching the staging
note), no figure.

Recommendation: n28 gets its own new live entry; it is not added to any `reprints` array.

## n30 == pedep2-neu-33 (p.1330)

**REPRINT — exact.** sim 0.992 confirmed: identical vignette (18-month-old girl "Dalia" in live,
unsteady, normal vision/gaze, limp, falls to left, tone/reflex table showing right-side normal,
left-side increased tone/brisk reflexes), same 5 options in the same order, same key (staged index 0
= live `answer:0`, "Upper motor neuron lesion").

Image confirms: highlighted key is "A. Upper motor neuron lesion", the tone/reflex list is printed as
four bulleted lines with small round dot icons (not a figure, matching the staging note), no other
figure present. Box on this page reads "Increased tone and brisk reflexes on one side suggest a
lesion in the upper motor neurons controlling that side of the body." — worded differently (shorter)
from the live box ("Increased tone and brisk reflexes point to an upper motor neuron problem. Lower
motor neuron lesions cause flaccid weakness and fasciculations instead.").

Live `source` will need: `Pediatrics endpoint part2.pdf p.1022; reprinted p.1330`, staged box wording
folded in.

---

## Summary

| Staged n | Verdict | Live id |
|---|---|---|
| n1 | REPRINT | pedep2-nd-10 |
| n2 | REPRINT (3rd printing) | pedep2-dp-4 |
| n5 | REPRINT | pedep2-gen-26 |
| n6 | REPRINT | pedep2-gen-18 |
| n8 | REPRINT | pedep2-ren-22 |
| n18 | REPRINT | pedep2-hem-68 |
| n19 | REPRINT | pedep2-car-18 |
| n21 | REPRINT (of res-54 only; NOT a reprint of res-7) | pedep2-res-54 |
| n22 | REPRINT (3rd printing) | pedep2-neu-26 |
| n23 | REPRINT | pedep2-neu-17 |
| n26 | REPRINT | pedep2-res-22 |
| n28 | **NOT A REPRINT** — shared option menu, different vignette | (pairs with pedep2-nd-19/nd-24) |
| n30 | REPRINT | pedep2-neu-33 |

**`reprints: [1, 2, 5, 6, 8, 18, 19, 21, 22, 23, 26, 30]`** — count: **12**.

n28 is excluded from `reprints`; it should get its own new live entry. No candidate was left
UNSETTLED. No un-swept reprint was noticed while reading n1-n30 beyond the fourteen listed pairs.
