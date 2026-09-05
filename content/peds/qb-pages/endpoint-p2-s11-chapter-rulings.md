# Section 11 — chapter rulings

Binding for every drafting half of peds endpoint part 2 section 11, "Malignant diseases",
pp.1211-1269, 23 questions. Written before any section-11 agent exists, and measured off
`app\data\theory.peds.js` (`mal-1`-`mal-22`, plus the cross-chapter material a few forks pull in:
`inf-32`-`inf-33`, `neuro-17`, `gen-4`-`gen-8`) and a full read of the section's own OCR text,
pp.1211-1269 — every page, not a sample. Read this with `endpoint-p2-s09-s11-page-map.md`.

## What was measured, and what was not

- **The count.** The page map calls this "the low-risk section of the three" — a clean even-page
  run pp.1224-1268, no parity flip. Every one of pp.1211-1269 was read (OCR, all 59 pages). The
  printed question numbers run **1 through 23 with no gap** (p.1223 "1." through p.1267 "23.
  Which of the following is the most common malignant tumor in children?"), every question has
  its answered twin at the following odd page, and pp.1211-1221 are teaching notes (epidemiology,
  oncological emergencies, leukaemia, brain tumours) ending in a "Questions" banner at p.1222.
  **The count of 23 holds on the OCR text** — and the printed-number run 1..23 with no gap is the
  same evidence that settled section 9, which is the strongest of the three confirmations there.

  ⚠️ **BUT THIS IS NOT THE CONFIRMATION SECTION 10 GOT, AND THE DIFFERENCE MATTERS** (parent,
  2026-09-05). Section 10's count was confirmed by an agent that **opened all twenty question
  pages as images**. This section's was confirmed on OCR text alone (see the next bullet, which
  says so plainly — the file is not hiding it). **OCR is a search index, never a clinical source,
  and it drops whole lines — a different one at each resolution.** The failure section 9 found was
  a page that *looks* like a question to an instrument and is not one to an eye; a page that OCR
  renders as clean prose is exactly the page that failure hides on. **A printed-number run proves
  the numbering, not that every numbered page is a question.**

  **So: section 11's staging halves confirm the count on the page images, page by page, and are
  the authority over this bullet.** If a half reads 22 or 24, that is the finding and this file
  was wrong — say so loudly rather than staging to match the number written here.

  ✅ **SETTLED — both halves have since done it and 23 holds** (2026-09-05). Half A opened
  pp.1224-1246 and half B pp.1248-1268, each page individually as a rendered image, and each
  showed a printed stem, an option ladder, one option highlighted yellow and its own explanation
  box: 12 + 11 = 23 genuine questions, **no second `kind === "answered"` false positive.** The
  boundary was proved on both sides too — p.1269 is the section's closing Arabic supplication,
  p.1270 the "Model Final Exam 1" title slide. The OCR reading above was right; it is now backed
  by the evidence it lacked.
- **What was NOT done:** no page was rendered or opened as an image. The OCR text was legible and
  internally consistent (every question stem, option list and printed explanation reads cleanly),
  so no page needed the image fallback. If a drafting half finds an OCR garble this file's reading
  missed, that disagreement is the finding.
- **OSCE content:** none in this section — every one of the 23 is a stem-and-options MCQ. Nothing
  to skip here; noted only because the standing rule says to check.

## The candidate chapters, and what each actually teaches

| chapter | name | sections | what is in it |
|---|---|---|---|
| `malignant` | Leukaemia | `mal-1`-`mal-15` | what leukaemia is and the acute/chronic split (`mal-1`) · **incidence — "25-30% of all childhood cancers, and ALL is the commonest cancer in paediatrics"** (`mal-2`) · the predisposing syndromes with a quantified risk — **Down 1:95, Bloom 1:8, Fanconi 1:12** — and the wider list of genetic conditions with increased incidence (`mal-3`) · classification systems (`mal-4`) · presentation, the frequency table, lymphoid/CNS/extramedullary infiltration (`mal-5`-`mal-8`) · diagnosis — blood, film, marrow (`mal-9`-`mal-10`) · Down syndrome and AML (`mal-11`) · **risk stratification and treatment, tagged throughout `not taken from the course material`** (`mal-12`) · **the oncological emergencies — tumour lysis syndrome, febrile neutropenia, SVC syndrome, leukostasis, spinal chloroma** (`mal-13`) · the five pillars of cancer treatment and CAR-T, which **names lymphoma and multiple myeloma as CAR-T targets** (`mal-14`-`mal-15`) |
| `malignant-solid` | Brain and solid tumours | `mal-16`-`mal-22` | rhabdomyoma and tuberous sclerosis complex, **"deferred here by `neurological`"** (`mal-16`-`mal-18`) · brain tumours — types, how they announce themselves, diagnosis and treatment, medulloblastoma (`mal-19`-`mal-20`) · rhabdomyoma against brain tumours (`mal-21`) · **the abdominal mass in a child — Wilms against neuroblastoma**, including the syndromic associations **WAGR · Beckwith-Wiedemann · hemihypertrophy** (Wilms) and **MYCN amplification · opsoclonus-myoclonus** (neuroblastoma) (`mal-22`) |
| `infection-vesic` | Vesicular exanthems | `inf-32`-`inf-34` | chickenpox itself (`inf-32`) · **"Varicella at the edges — pregnancy, the neonate, the immunocompromised"**, which states directly: **"In the immunocompromised — Aciclovir and/or VZIG in severe cases"** (`inf-33`) · shingles (`inf-34`) |
| `neuro-nm` | Motor and neuromuscular disorders | `neuro-17` (one of several) | Friedreich ataxia against ataxia telangiectasia, the latter naming **"Malignancy: increased cancer risk — lymphoma, ALL"** as one of its own discriminating rows |
| `genetics` | Genetics | `gen-4`-`gen-8` | Down syndrome as a syndrome (`gen-4`-`gen-7`) · Turner syndrome (`gen-8`), which notes **"Y chromosome sequence — raises the risk of gonadoblastoma, so gonadectomy is indicated"** for the mosaic/structural minority that carries one |

Two chapters carry the bulk of the section. Two more are needed for single forks, and one
(`genetics`) is needed to source one option inside a single question, not to file the question
itself.

## The rulings

**1. The default split is disease category, not vignette shape.** A question about the leukaemia
disease itself — epidemiology, presentation, blood picture, diagnosis, prognosis, the oncological
emergencies that arise from it or its treatment — is `malignant`. A question naming or describing a
solid tumour — brain tumour, Wilms, neuroblastoma, retinoblastoma — is `malignant-solid`, whether
or not the word "leukaemia" appears anywhere else on the page (several stems mention leukaemia only
as a distractor option). Measured against every one of the 23:

| Q | page(s) | topic | chapter | section |
|---|---|---|---|---|
| 1 | 1223-1224 | epidemiology, commonest childhood cancer | `malignant` | `mal-2` |
| 2 | 1225-1226 | neutropenic fever on chemo | `malignant` | `mal-13` |
| 3 | 1227-1228 | abdominal mass, urinary catecholamines | `malignant-solid` | `mal-22` |
| 4 | 1229-1230 | leukaemia — FBC picture | `malignant` | `mal-6`, `mal-9` |
| 5 | 1231-1232 | posterior fossa mass, developmental regression | `malignant-solid` | `mal-20` |
| 6 | 1233-1234 | chemo patient exposed to a rash | `infection-vesic` (ruling 2) | `inf-33` |
| 7 | 1235-1236 | leukocoria | `malignant-solid` (ruling 3, gap) | `mal-22` shelf |
| 8 | 1237-1238 | headache, normal red reflex | `malignant-solid` | `mal-19`-`mal-20` |
| 9 | 1239-1240 | tonsillitis, pallor, bruising, hepatosplenomegaly | `malignant` | `mal-5`-`mal-6` |
| 10 | 1241-1242 | flank mass not crossing midline | `malignant-solid` | `mal-22` |
| 11 | 1243-1244 | large central abdominal mass | `malignant-solid` | `mal-22` |
| 12 | 1245-1246 | headache, morning vomiting, diplopia | `malignant-solid` | `mal-19`-`mal-20` |
| 13 | 1247-1248 | leg pain, petechiae, pancytopenia — confirm dx | `malignant` | `mal-9` |
| 14 | 1249-1250 | haematuria + flank mass — confirm dx | `malignant-solid` | `mal-22` |
| 15 | 1251-1252 | irregular mass + hypertension — confirm dx | `malignant-solid` (see note below) | `mal-22` |
| 16 | 1253-1254 | new squint, absent red reflex | `malignant-solid` (ruling 3, gap) | `mal-22` shelf |
| 17 | 1255-1256 | vomiting, headache, abnormal eye movements | `malignant-solid` | `mal-19`-`mal-20` |
| 18 | 1257-1258 | persistent cervical lymphadenopathy | `malignant` (ruling 4, gap) | `mal-14` shelf |
| 19 | 1259-1260 | ALL prognostic factors | `malignant` | `mal-12` |
| 20 | 1261-1262 | syndromes and malignancy risk | `malignant` (ruling 5) | `mal-3` primary |
| 21 | 1263-1264 | true statement about childhood brain tumours | `malignant-solid` | `mal-19` |
| 22 | 1265-1266 | red-reflex asymmetry on a photo | `malignant-solid` (ruling 3, gap) | `mal-22` shelf |
| 23 | 1267-1268 | commonest childhood malignant tumour | `malignant` | `mal-2` |

Split: **9 `malignant`, 13 `malignant-solid`, 1 `infection-vesic`** — the section is not
uniformly one chapter, which is the check this file exists to pass.

**2. ⚠️ Q6 is a fork, and it resolves away from `malignant` even though the vignette is an
oncology patient.** The stem is a well child on chemotherapy exposed to a sibling with a rash, and
asks what advice the parents should be given. `malignant`'s own oncological-emergencies section
(`mal-13`) covers tumour lysis, febrile neutropenia, SVC syndrome, leukostasis and spinal
chloroma — it never mentions chickenpox, rash exposure or VZIG. `infection-vesic`'s `inf-33` is
written for exactly this: **"In the immunocompromised — Aciclovir and/or VZIG in severe cases"**,
inside a section explicitly organised around "the exposed newborn" and other high-risk contacts.
Same shape as section 9's ruling 1a — the vignette is an oncology patient, but the thing being
tested (what a varicella exposure in an immunocompromised child needs) is taught only in
`infection-vesic`, so the chapter follows what is asked. File to `infection-vesic` (`inf-33`).

**3. ⚠️ Measured gap: retinoblastoma is not taught anywhere in the corpus.** Q7, Q16 and Q22 are
all leukocoria/red-reflex-asymmetry vignettes whose printed answer is retinoblastoma. A
corpus-wide grep for "retinoblastoma" and "leukocoria" returns **zero hits** — not in
`malignant-solid`, not in the ophthalmology-adjacent chapters, nowhere. File all three to
`malignant-solid`: it is the chapter that already teaches every other named childhood solid
tumour (rhabdomyoma, brain tumours, Wilms, neuroblastoma) via `mal-16`-`mal-22`, so it is the
closest shelf, not an invented one. Flag for the drafting half to answer from general medical
knowledge and tag the explanation `not taken from the course material`, per the project's
gap-filling rule — the gap is answered, never left unfiled or declared.

**4. ⚠️ Measured gap: lymphoma as a disease is not taught anywhere in the corpus.** Q18 (persistent
cervical lymphadenopathy with normal bloods, confirmed by excision biopsy) is a lymphoma
work-up question. The word "lymphoma" appears in exactly three places corpuswide: `neuro-17`
(ataxia telangiectasia's cancer-risk row, `neuro-nm`), `inf-48` (Duncan syndrome's EBV-driven
lymphoma, `infection-immunity`), and `mal-14` (CAR-T's approved targets, "blood cancers, lymphoma
and multiple myeloma", `malignant`). None of the three teaches lymphoma itself — its
presentation, its work-up, or the fact that a persistent, painless, biopsy-worthy node is the
red flag. File to `malignant`: `mal-14` already treats lymphoma as the leukaemia chapter's own
sibling entity for treatment purposes, and there is no dedicated `lymphoma` chapter to file it to
instead. Flag for the drafting half to answer from general medical knowledge and tag the
explanation `not taken from the course material`.

**5. ⚠️ Q20 is a four-way cross-chapter question, and the corpus does not teach one of its five
options at all.** The stem asks which of Down syndrome, Beckwith-Wiedemann syndrome, ataxia
telangiectasia, Li-Fraumeni syndrome and Turner syndrome is **not** associated with increased
malignancy risk (printed answer: Turner). Each named syndrome's cancer link, where the corpus
carries one, sits in a different chapter: Down syndrome's leukaemia risk in `mal-3`
(`malignant`) · Beckwith-Wiedemann's Wilms/hemihypertrophy association in `mal-22`
(`malignant-solid`) · ataxia telangiectasia's lymphoma/ALL risk in `neuro-17` (`neuro-nm`) ·
Turner syndrome itself in `gen-8` (`genetics`). **Li-Fraumeni syndrome returns zero hits
corpus-wide** — a second measured gap, distinct from ruling 3 and 4's. File the question to
`malignant`: the question's own topic — which syndromes predispose to childhood malignancy — is
`mal-3`'s own theme (a table of exactly this shape, for different named syndromes), making it the
primary shelf even though the specific five options split across four chapters. The drafting half
should cite `mal-3` as the anchor and `mal-22`/`neuro-17`/`gen-8` as the supporting sources for the
individual options, and tag the Li-Fraumeni fact `not taken from the course material`.

**5a. ⚠️ Flag, not a ruling: `gen-8` appears to contradict this question's printed key.** The bank's
explanation states flatly that "Turner syndrome is not linked to increased cancer risk." `gen-8`
itself says the opposite for a defined subset: **"Y chromosome sequence — raises the risk of
gonadoblastoma, so gonadectomy is indicated"** for the mosaic/structural Turner karyotypes that
carry a Y-bearing cell line (about half of all Turner cases, per `gen-8`'s own cytogenetics table).
Per the project's standing rule, **a defective or contradictory key is noted, never disputed** —
`answer` stays with the bank's printed option; the drafting half records the `gen-8` discrepancy in
`explanation`, quoting both.

**6. Note for the drafting half, not a chapter fork: Q15's own printed explanation may conflict
with `mal-22`'s table.** Q15 (irregular abdominal mass plus hypertension, answered neuroblastoma)
explains itself as "Hypertension and irregular abdominal mass suggest neuroblastoma." `mal-22`'s
own comparison table lists hypertension under **Wilms** ("Usually WELL; haematuria, hypertension")
and gives neuroblastoma no blood-pressure association at all — only "UNWELL — bone pain, weight
loss, limp" and the periorbital/proptosis signs. Both Wilms and neuroblastoma live in
`malignant-solid`, so this is not a chapter question — it stays `malignant-solid` regardless — but
it is a genuine contradiction between the bank's key and the course's own table, and per the
contradiction rule it belongs in `explanation`, quoted, with `answer` left exactly as the bank
prints it.

**7. Everything else in the section goes to the chapter that teaches the disease being asked
about**, per the table in ruling 1. Nothing in the 23 straddles two chapters without one of
rulings 2-6 covering it.

## What this section does NOT contain

Measured, not assumed:

- **No thalassaemia, sickle cell disease, or straight anaemia-diagnosis question** — `haematology`
  is not needed anywhere in this section, despite `mal-3`'s own cross-reference noting that Fanconi
  anaemia, Shwachman-Diamond and Diamond-Blackfan (all `haematology` diseases) can terminate in
  MDS/AML. None of the 23 tests that link; a drafting half does not need to go looking for it.
- **No rhabdomyoma or tuberous sclerosis question**, despite `mal-16`-`mal-18` teaching both in
  detail. Neither is named or described in any of the 23 stems.
- **No CAR-T or immunotherapy question** — `mal-14`-`mal-15`'s own content (CAR-T mechanism, CRS,
  ICANS) is untested; lymphoma surfaces only as a named CAR-T target inside `mal-14`, which is what
  grounds ruling 4's shelf choice, not a question about CAR-T itself.
- **No thyroid, adrenal, rickets or vitamin-D content** — zero OCR hits for any of them across
  pp.1211-1269.
- **No OSCE content** — every one of the 23 is MCQ; nothing was skipped under the standing OSCE
  rule because nothing OSCE-shaped appeared.
- **`genetics` beyond `gen-4`-`gen-8` is not needed** — the section never asks about karyotype
  mechanics, pedigrees or inheritance patterns as their own topic; `gen-8` is cited only as a
  supporting source for one option inside Q20 (ruling 5), never as a chapter a question is filed to.

If a drafting half finds content on one of these topics on a page this file did not read
individually as bearing on it, that disagreement is the finding and should be reported rather than
quietly filed.
