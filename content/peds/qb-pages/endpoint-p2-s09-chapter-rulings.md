# Section 9 — chapter rulings

Binding for every drafting half of peds endpoint part 2 section 9, "Diabetes & Endocrinology",
pp.1079-1145, ~~27~~ **26** questions (the count was corrected 2026-09-05 after p.1082 proved to be
a teaching-notes slide, not a question — see `endpoint-p2-s09-drafting-notes.md`). Written before any
section-9 agent exists, and measured off
`app\data\theory.peds.js` and the OCR text of the section's own pages — not assumed from chapter
names. Read this with `endpoint-p2-s09-s11-page-map.md`.

Why this file exists: section 4 hard-coded one chapter and misfiled 24 of 87. Section 5 distributed
the judgment across halves with no shared rulings and put three diseases on two shelves. Sections 6
and 7 were given central rulings first and neither repeated it.

## The candidate chapters, and what each actually teaches

| chapter | name | sections | what is in it |
|---|---|---|---|
| `endocrine` | Diabetes mellitus | `endo-1`-`endo-8` | classification · T1DM aetiology · presentation and diagnostic criteria · insulin · T2DM · complications and when screening starts · follow-up and associated diseases · **hypoglycaemia in the child on insulin** |
| `endo-dka` | Diabetic ketoacidosis | `endo-9`-`endo-20` | the triad and severity · the cascade · signs and misdiagnoses · risk factors · where to manage and first measures · labs, ICU criteria, monitoring · fluids · insulin · potassium and why bicarbonate is withheld · **cerebral oedema, `endo-18` and `endo-19`** · coming off the drip |
| `endo-thyroid` | Thyroid and adrenal disorders | `endo-21`-`endo-34` | thyroid structure, control and biosynthesis · cretinism · the newborn and the missed diagnosis · congenital hypothyroidism goitrous vs non-goitrous · **neonatal screening, `endo-26` and `endo-27`** · treatment and proving permanence · acquired hypothyroidism · Graves · congenital and neonatal thyrotoxicosis · **congenital adrenal hyperplasia, `endo-33`** · **Cushing syndrome, `endo-34`** |

Three chapters carry the section. The rulings below exist for the questions that do not obviously
belong to one of them.

## The rulings

**1. Diabetes and DKA split on whether the vignette IS an episode.**
`endocrine` owns the disease: what type this is, how it is diagnosed, which insulin regimen, what
complications develop and when screening for them starts, what travels with type 1. `endo-dka` owns
the acute episode and everything done during it — the fluids, the insulin infusion, the potassium,
the withheld bicarbonate, the monitoring, the exit. A question that mentions ketoacidosis only as the
way a new diabetic presented, and then asks about the diabetes, is `endocrine`.

**1a. ⚠️ ADDED 2026-09-05 after ruling 1 failed to settle a real question.** A drafting half raised
n12 (p.1116) and was right to: Sophie is a known type 1 diabetic with fever, vomiting and diarrhoea,
clinically dehydrated, **vitals stable, talking, glucose 16 mmol/L, and no ketones or pH given
anywhere.** By ruling 1's literal test — is the vignette an episode? — she is not in one, which
argues `endocrine`. By ruling 1's own list of what `endo-dka` owns — "the fluids" — she is, because
the thing being tested is the choice between an intravenous **infusion** and fluid **resuscitation**,
and that distinction is taught in `endo-dka` and nowhere else in the module.

**The ruling: `endo-dka`, and the test is refined rather than overturned.** Ruling 1's last sentence
only ever covered the reverse case — DKA mentioned as how a new diabetic presented, then the question
asks about the diabetes. Here diabetes is the background and the question asks about the
DKA-prevention fluid. **Where the vignette is not an episode but the thing being asked is taught only
inside the acute-episode chapter, the chapter follows what is asked.** The file's own printed box
supports this: it says the picture indicates "a risk of diabetic ketoacidosis" — the question exists
to teach what you do about that risk.

Note this sits inside the four-question shared menu n9/n10/n11/n12, which the book uses to make
exactly this discrimination: shock goes to resuscitation (n9, `endo-dka`), a non-ketotic new
diagnosis to subcutaneous insulin (n10, `endocrine`), a conscious hypo to an oral glucose drink (n11,
`endocrine`), and stable dehydration to a routine infusion (n12, `endo-dka`). **Two of the four land
in each chapter, which is the menu working as intended** — a run of four identical option sets
landing in one chapter would have been the finding.

**2. Cerebral oedema is `endo-dka`, always.** `endo-18` and `endo-19` are written for it; no other
chapter in the module teaches it. Measured on p.1086.

**3. ⚠️ Hypoglycaemia splits by age, and the boundary is the same one section 8 uses.**
`endocrine`/`endo-8` is written specifically for hypoglycaemia in the child on insulin, and that is
where an insulin-related hypo goes — not `endo-dka`, whose only mention of it is one line inside
fluid therapy. Hypoglycaemia in the **first 28 days** goes to the neonatal chapters instead
(`neonatal-seiz`/`nns-10` carries five mentions, `perinatal`/`per-11` four), exactly as any seizure
in the first 28 days does. Ten section-9 pages mention hypoglycaemia, so this ruling will be used.

**4. The adrenal diseases are `endo-thyroid`, despite the chapter's name reading as thyroid-first.**
Congenital adrenal hyperplasia is `endo-33` and Cushing syndrome is `endo-34`, both dedicated
sections. Measured on pp.1103, 1104, 1107, 1108, 1120 and 1124 for CAH and pp.1103, 1104 for Cushing.

**5. ⚠️ CAH has a second shelf, and the question decides which.** `puberty`/`gp-18` teaches CAH as a
cause of **peripheral** precocious puberty. File to `puberty` only when the question is about the
precocity — what stage this child is at, why the testes are small, which axis is driving it. File to
`endo-thyroid` when the question is about the disease itself: the salt-losing crisis, the ambiguous
genitalia, the enzyme, the treatment.

**6. ⚠️ Cushing has the same shape.** `growth-puberty`/`gp-5` and `gp-10` name it inside the causes
of short stature. A question asking *why is this child short* is `growth-puberty` even when Cushing
is the answer; a question asking about Cushing syndrome is `endo-thyroid`.

**7. ⚠️ Turner splits between two chapters that both teach it properly.** `genetics`/`gen-8` is a
dedicated section and `growth-puberty`/`gp-10` teaches mosaic Turner as a short-stature cause. File
to `genetics` when the question is about the karyotype, the mechanism, or the syndrome's features as
a syndrome. File to `growth-puberty` when Turner is the answer to *why is this girl short*, and to
`puberty`/`gp-20` when it is the answer to *why has puberty not started*. Measured on p.1089, which
mentions Turner, short stature, puberty and thyroid together — read that page carefully before
filing it.

**8. Growth hormone is `growth-puberty`.** `gp-9` is GH deficiency and `gp-11` is treatment.
Measured on pp.1099, 1100, 1117 and 1118 — all four also mention thyroid, so file by what is asked,
not by which word appears. A hypothyroid child whose growth is the complaint is still a thyroid
question if the question asks for the diagnosis or the test.

**9. Obesity is `nutrition`.** `nut-3` and `nut-4` are the definition, the BMI bands and the
management. File to `endocrine` only when obesity appears inside a type 2 diabetes question and the
question is about the diabetes — `endo-5` is T2DM treatment and mentions obesity three times.
Measured on pp.1135 and 1136.

**10. Neonatal thyroid screening stays `endo-thyroid`.** `endo-26` and `endo-27` are written for it,
including how it is done in Egypt. It does not go to `perinatal` merely for happening in a newborn.

**11. Everything else in the section goes to the chapter that teaches the disease being asked
about.** Diabetes to `endocrine`, the DKA episode to `endo-dka`, thyroid and adrenal to
`endo-thyroid`. If a question genuinely straddles, assign the primary chapter and say so in
`explanation`; do not invent a chapter and do not leave one unfiled.

## What this section does NOT contain

Measured, not assumed: **no rickets, no hypocalcaemia and no tetany appear anywhere in pp.1079-1145**
— zero OCR hits for all three across the whole section. `nutrition-vit` is not a candidate chapter
here. If a half finds calcium-metabolism content on one of its pages, that disagreement with this
file is the finding and should be reported rather than quietly filed.
