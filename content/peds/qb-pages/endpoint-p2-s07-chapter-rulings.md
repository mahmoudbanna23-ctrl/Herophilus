# Section 7 — chapter rulings

Binding for every drafting half of peds endpoint part 2 section 7, "Kidney & Urinary Tract
Disorders" (pp.793-929, 55 staged). Measured once off `app\data\theory.peds.js` and
`app\data\modules.js` on 2026-09-05, before drafting opened.

## Why this file exists

Section 4 hard-coded one chapter for a whole section and misfiled 24 of 87. Section 5 handed the
judgment to each half instead, with no shared rulings, and got the opposite failure — three
diseases landed on two different shelves depending on which agent met them first. **Agreement
between two agents reading one precedent is one measurement, not two.** Section 6 fixed it by
measuring the collisions once, centrally, and handing every half the same rulings; its 79 entries
came back correctly spread over five chapters, including both non-cardiac ones. This file is that
same instrument, aimed at section 7's own collisions.

Judgment is retained everywhere a ruling does not reach. What is removed is the chance of two
halves deciding the same collision differently.

## The three renal chapters, and what each actually teaches

| id | title | its sections |
|---|---|---|
| `renal-uti` | Urinary tract infection | ren-1 the two syndromes and what grows · ren-2 presentation and getting a sample worth culturing · ren-3 dipstick/microscopy/culture · ren-4 treatment, age first · ren-5 classify, image, prevent the next one |
| `renal` | Glomerular disease | ren-6 haematuria numbers · ren-7 glomerular or not · ren-8 the causes tree · ren-9/10 APSGN · ren-11 IgA nephropathy and HSP · ren-12 HUS · ren-13 proteinuria and nephrotic syndrome |
| `renal-cakut` | CAKUT, stones and enuresis | ren-14 the spectrum · ren-15 reflux and obstruction · ren-16 what to image and what to do · ren-17 the renal stone and the wet bed |

## The rulings

**1. HUS is `renal`, not `haematology`, not `gi-diarrhoea`.** It has three plausible shelves — the
vignette is bloody diarrhoea, the findings are a haemolytic anaemia with thrombocytopenia, and the
failure is renal — and it is the section's highest-risk collision. The theory file settles it:
`renal/ren-12` is a section headed for it and carries eight mentions; `gi-diarrhoea/gast-11` and
`haem-bleeding/haem-32` only cross-reference it. File it `renal`.

**2. Henoch-Schönlein purpura / IgA vasculitis is `renal`.** `renal/ren-11` teaches IgA nephropathy
and HSP together as one deposit and two diseases. A palpable-purpura vignette does not go to
`haem-bleeding`, and an arthralgia or abdominal-pain vignette does not go to `gi-abdopain`, when the
question is asking about the disease or its renal involvement.

**3. Wilms tumour splits by what is asked.** `malignant-solid/mal-22` teaches the tumour; `renal/ren-8`
names it only as a cause of haematuria. So: *which tumour is this / how is this abdominal mass
managed* → `malignant-solid`. A haematuria-differential question that merely lists Wilms among the
options → `renal`. This is the general rule in its sharpest form — **file by what the question ASKS,
not by what the vignette or the option list mentions.**

**4. Acute kidney injury and chronic kidney disease have no chapter of their own.** Neither appears
in `MODULES`. File by the cause the question names:
- AKI as a complication of a named glomerular disease (APSGN, HUS) → `renal`, where the theory
  teaches it (`ren-10`, `ren-12`).
- CKD as the endpoint of reflux nephropathy, a scarred kidney or any structural lesion →
  `renal-cakut`, where `ren-16` teaches it (four mentions, and CKD is one of its seven routes in).
- A standalone AKI or CKD question naming no cause → `renal`, and say in one clause inside
  `explanation` that the bank prints it among the glomerular pages.

**5. Hypertension follows its cause.** It is taught in `cardiac` (coarctation) and in five renal
sections. In this section it will be renal: assign it to whichever renal chapter owns the disease
producing it — APSGN and nephrotic syndrome → `renal`, reflux nephropathy and CAKUT → `renal-cakut`.

**6. Imaging after a UTI versus imaging a structural lesion — the trigger decides.** Both `ren-5`
and `ren-16` teach ultrasound, MCUG/VCUG and DMSA, which is exactly the shape that produced section
5's failure. The discriminator is what put the child in front of you:
- The vignette is *a child who has just had a urinary tract infection* and the ask is whether, when
  or what to image after **this infection**, or how to classify it as simple / atypical / recurrent
  → **`renal-uti`** (`ren-5` owns the timings: ultrasound at 6 weeks, brought forward to 48-72 h;
  MCUG at 2-3 weeks).
- The vignette is *antenatal hydronephrosis, a poor urinary stream, an asymptomatic finding, or a
  known or suspected structural lesion*, or the ask is which test is the **gold standard** for VUR
  or posterior urethral valves and what each test's limitation is → **`renal-cakut`** (`ren-16`
  owns that table).

**7. Renal stones and enuresis are `renal-cakut`.** `ren-17` is a dedicated section for both, and it
is the only place either is taught. Note that `ren-17` says the decks barely cover them — an
enuresis or stone question may need general knowledge, which is **answered and tagged**
`not taken from the course material`, never declared as a gap.

**8. Posterior urethral valves and vesicoureteric reflux are `renal-cakut`** (`ren-15`), including
when they present as a UTI. The lesion is the subject; the infection is how it announced itself.

**9. Dehydration, electrolytes and shock leave renal entirely.** Assessment of dehydration and oral
rehydration are `gi-diarrhoea` (`gast-6` through `gast-11`); circulatory collapse recognition is
`emergencies`. If a section-7 page asks one of these, file it out of the renal chapters and say so.

**10. Everything else glomerular — haematuria, proteinuria, nephritic and nephrotic syndrome,
APSGN, IgA nephropathy, and nephrotic complications (peritonitis, thrombosis) — is `renal`;
everything else infective — presentation, sample collection, dipstick, culture, treatment route by
age — is `renal-uti`.**

## Standing instructions

- File by what the question **asks**, never by what the vignette mentions.
- Where an entry sits somewhere the section title would not predict, **say why in one clause inside
  `explanation`** — the reader should never have to guess why a renal-section question is filed
  under `malignant-solid`.
- If no ruling here applies and the theory file does not settle it, **file by the theory file and
  report the decision** in your close-out. Do not invent a chapter; `MODULES` is fixed.
