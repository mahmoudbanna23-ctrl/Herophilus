/* cardiac — "Cardiac Disorders", Paediatrics. Written 2026-08-14 under
   START-HERE.md §14 (slide-density revision notes) + §14.3a (layout), and
   content\peds\theory-plan.md, whose ONE local difference is that PAEDIATRICS
   HAS NO 3,000-WORD CAP: budget = max(lecture words, 25 x questions, 600),
   no cap. This is the first paediatrics theory chapter written.

   DECK LABELS USED IN THE Src LINES — the numbers are the cached filenames:
     L33 = 33)Congenital acyanotic heart disease_.txt   (70 slides)
     L34 = 34)Students Obstructive diseases.txt          (63 slides)
     L35 = 35)Cyanotic CHDs.txt                          (65 pages, PDF-derived)
     L36 = 36)Myocardial diseases.txt                    (59 slides + .emf addendum)
     L37 = 37)RF.txt                                     (37 slides)

   ⚠️ THE BRIEF'S DECK CLAIM IS CORRECT AND WAS VERIFIED, NOT ASSUMED.
   `34)Students Obstructive diseases` reads as a respiratory title and is a
   CARDIAC deck: slides 3-13 aortic stenosis, 14-27 pulmonary stenosis, 28-61
   coarctation (adult type and critical neonatal). Greped: `coarct`, `aortic
   stenosis` and `pulmonary stenosis` return ZERO hits in L33. Without L34 this
   chapter loses AS, PS and CoA entirely — five of the twenty-four questions
   key one of them outright and four more use them as the discriminator.
   Nothing in the brief's mapping was found wrong.

   BUDGET — §14.1 as revised, both terms measured from disk.

     TERM 1 — summed lecture words. ⚠️ THE MEASURED FIGURE DIFFERS FROM THE
     PLAN'S. The five files are CRLF; `wc -w` with the carriage returns left in
     returns 2,413 (wc glues lines), and with them stripped
     (`tr -d '\r' | wc -w`):

       L33  2,148 w      L34  1,007 w      L35  1,849 w
       L36  1,176 w (including the recovered .emf addendum)
       L37    687 w
       = 6,867 words

     theory-plan.md states 7,052. The 185-word difference is a counting
     artefact, not a missing file. I used the plan's 7,052 as the stated
     ceiling, being the published number and the larger of the two. Neither
     binds — see the outcome below.

     ⚠️ NO LINE-RANGE CLAIM IS MADE AND NONE IS NEEDED. All five decks are
     cardiac end to end, and theory-plan.md's manifest assigns all five to
     `cardiac` and none of them to a second chapter. The WHOLE of each is
     claimed and nothing is billed twice. The one deck cited but NOT counted
     is `6) Genetically determined disease_` (Turner -> coarctation), which is
     `genetics`' and contributes a single clause here.

     TERM 2 — 25 x 24 linked questions = 600 words.

     max(7,052 · 600) = 7,052. TERM 1 GOVERNS. Floor 600 not binding, no cap.

   DIAGRAM-DECK CHECK (§14.1 — under ~2 words per non-blank line marks a
   labelled-diagram deck, in which case the question term should govern):
       L33  3.94 w/line · L34  3.98 · L35  3.30 · L36  5.00 · L37  3.07
   All five are well above 2, so no diagram-deck correction applies to the
   FILES. ⚠️ BUT THREE ARE PARTLY IMAGE-ONLY IN A WAY THAT RATIO CANNOT SEE,
   and this is the most important fact about this chapter's sources:
     · L36 slides 47-57 (infective endocarditis) extracted as the two words
       "Infective endocarditis", eleven times. The prose was recovered from
       .emf vector objects on 2026-08-12 and appended to the cached file. That
       addendum is USED IN FULL and is the whole of card-17.
     · L36 slides 30-39 — the European 2018 consensus criteria for complete
       Kawasaki disease — are STILL image-only and were NOT recovered.
     · L37 is largely a picture deck. The Jones criteria slide (23), the
       treatment slide (35) and the five clinical-picture slides (17-21) are
       titles over photographs, and its 687 words include the "susceptible
       patient" slide printed NINE TIMES — about 90 real words repeated. L37's
       true extractable content is nearer 250 words.
   Consequence, stated up front: the Jones criteria, the acute RF drug
   regimen, the benzathine schedule and the Kawasaki criteria are ANSWERED
   FROM GENERAL KNOWLEDGE AND TAGGED (a gap is filled, not declared). No
   question in this chapter turns on any of them.

   ⚠️ ENTITY FLOOR, COUNTED BEFORE WRITING (§14.1's `ent-dysph` rule — state
   the expected size in advance rather than discovering it after compression).
   TWENTY-ONE distinct entities at ~90 w:
     1 aetiology + the lecturer's own six-group classification · 2 fetal
     circulation and the switch at birth · 3 innocent vs pathological murmur ·
     4 VSD · 5 PDA (term and preterm) · 6 ASD · 7 AVCD · 8 aortic stenosis ·
     9 pulmonary stenosis · 10 adult-type coarctation · 11 critical neonatal
     coarctation · 12 cyanosis itself · 13 the four-step cyanotic approach ·
     14 tetralogy of Fallot · 15 the hypoxaemic spell · 16 the other cyanotic
     lesions (TGA, tricuspid atresia, Ebstein, pulmonary atresia, truncus,
     TAPVC, HLHS, pulmonary AV fistula — eight sub-entities in one section) ·
     17 arrhythmias (SVT, VT, complete heart block) · 18 myocarditis and DCM ·
     19 Kawasaki and MIS-C · 20 infective endocarditis · 21 rheumatic fever
     and RHD.
     21 x 90 = 1,890 base. Framework slides costed ONE BY ONE: the
     classification grid, the fetal-vs-infant table, the presentation list,
     the birth transition, the hyperoxia ladder, the physiology grid, the
     S2-split clue slide, the murmur-type slide, the four-step approach, the
     timing-of-surgery slides, the prophylaxis ladder = ~11 x ~85 = ~935.
     Comparison grids at ROWS x COLUMNS, not one slide each: murmur signature
     (7 x 4 = 28 cells), AS vs PS (10 x 3 = 30), reduced vs increased
     physiology (7 x 3 = 21), arrhythmias (5 x 3 = 15), catheter vs surgery
     (4 x 3 = 12), Jones (1 x 2), prophylaxis (4 x 2) = ~1,000 words.
     PREDICTED 3,800-4,600. SAID HERE, IN ADVANCE.

   ⚠️ MEASURED OUTCOME — taken with a counter validated against the ENT
   drafts: body + table cells + flow text, split on whitespace. Run against
   `ent-nasalobs.draft.js` it returns 2,425 with the identical per-section
   breakdown that file's own header states, so the convention is the project's
   own, not one I invented. THIS PARAGRAPH WAS WRITTEN AFTER THE FINAL EDIT
   AND RE-MEASURED FROM DISK, per §14.1's "the header is a claim, the file is
   the fact" — and it needed to be: an earlier version of this same paragraph
   claimed 4,502 and the file was 5,473.

       body 5,396 words over 18 sections · intro 44 words · 24/24 linked

   Per-section, measured from the finished file (they sum to 5,396 — but per
   §14.1's `ent-vocal` warning, a sum that reconciles proves only that the
   numbers came from ONE state of the file, so this was re-run after the LAST
   keystroke, which was the §14.3a anchor fix below):
     card-1  220 · card-2  206 · card-3  218 · card-4  227 · card-5  419
     card-6  325 · card-7  401 · card-8  255 · card-9  329 · card-10 207
     card-11 349 · card-12 343 · card-13 416 · card-14 367 · card-15 194
     card-16 217 · card-17 298 · card-18 405

   ⚠️ THREE PASSES: 5,858 -> 5,473 -> 5,388 -> 5,396. Net −462 words, −7.9 %,
   WITH NO PROTECTED FACT TOUCHED. The last pass ADDED 8 words: ten section
   openers were fully-bold lines longer than 44 characters with no colon, so
   `mdLead()` would have given them NO coloured anchor (§14.3a). They were
   rewritten as `**Term:** rest` — `**PDA:**`, `**Tetralogy of Fallot:**`,
   `**Infective endocarditis:**`, `**Hypoxaemic spell:**` and so on. Verified
   afterwards: **0 of the 18 section openers now lack an anchor.**
   What the two compression passes removed, itemised:
     · the AS and PS bullet lists in card-8 folded into the AS/PS grid that
       already carried the same signs — the largest single duplication in the
       chapter (~90 w);
     · attribution clauses ("the deck states", "the lecturer says", "printed
       on the slide") throughout, now carried by the one Src line per section
       (~120 w);
     · connective and framing sentences, and six italic asides that carried
       commentary rather than a fact (~90 w);
     · the two flowcharts' step notes tightened, and ~40 long table cells and
       bullets rewritten as fragments (~170 w).
   Nothing a question keys was removed, and no eponym, number, classification
   or drug dose was dropped.

   ⚠️⚠️ AGAINST THE BUDGET, AND THE MISS IS REPORTED RATHER THAN BOUGHT.
   5,396 is 1,656 words UNDER the 7,052 ceiling — 76.5 % of it. That clears
   the ceiling but it does NOT clear the caller's stated expectation of
   roughly 3,500-5,000, and it is 396 words over the top of that band. Stated
   plainly rather than hidden. Estimated pages at the /240 estimator:
   5,396 ÷ 240 = 22.5 pages.

   WHY IT STOPS HERE. The entity floor predicted 3,800-4,600 and the delivered
   file is 5,396 — the under-prediction is the two big comparison grids and
   the two flowcharts, which are cells rather than prose and cost far more
   words than the plan costed them at (§14.1's `ent-phon` finding, seen again:
   a grid costs rows x columns, and I still under-costed). Reaching 5,000
   costs ~390 words and the least damaging set is:
     card-13 shunt procedures, entire        ~60 w — two of the four are
         named on the slide as no longer performed, but Blalock-Taussig and
         the Gore-Tex shunt with their age thresholds are examinable
     card-7  catheter-vs-surgery table       ~45 w — a whole printed slide
     card-16 MIS-C block, entire            ~115 w — a whole printed slide,
         and no question touches it
     card-4  the AS, PS and CoA rows        ~80 w — but card-4 is the single
         grid that answers TEN of the 24 questions and losing three rows
         breaks its one-glance purpose
     card-10 the pseudocyanosis cause lists  ~45 w
     card-18 the acute RF regimen            ~45 w — tagged, not sourced
   = ~390 w, at the cost of three whole printed slides and the integrity of
   the murmur grid. I DID NOT DO IT (§14.1 — stop at the floor and itemise
   rather than delete a protected fact). The hub rules on pages; 22.5 is the
   number, and pages are mostly a layout property, so a reformat is the
   cheaper lever than a word cut.

   FLOOR KEPT BOTH WAYS (§14.2) — every fact, number, classification, list and
   eponym the five decks state, including the recovered endocarditis addendum
   and BOTH of the deck's own conflicting ASD percentage sets; plus every one
   of the 24 questions' KEY and DISCRIMINATOR as a line or a table cell. All
   24 ids linked, none dropped. Distractor-by-distractor argument is NOT here
   — it lives in each question's own explanation, one tap away through qs.

   ⚠️ SIX GAPS, ANSWERED AND TAGGED rather than declared. Each was greped
   across ALL 64 cached paediatrics decks before being called a gap ("read the
   slide before declaring a gap", and a spelling can hide a hit):
     · VAGAL MANOEUVRE for stable SVT. `vagal` returns ONE hit corpus-wide and
       it is `54) seizures and epilepsy` (vagus nerve stimulation). L36 prints
       IV adenosine as first line for the stable patient and never mentions a
       vagal manoeuvre; House keys the vagal manoeuvre. BOTH RECORDED in
       card-15 as a one-line defect note; the ladder supplied and tagged.
     · CONGENITAL RUBELLA'S CARDIAC LESION. `rubella` hits L33 slide 5 only, a
       bare item in the maternal aetiology list. The triad, and that its lesion
       is a PDA, are supplied and tagged in card-1 and card-6.
     · ERYTHEMA MARGINATUM, ASCHOFF, PROLONGED PR INTERVAL, BENZATHINE
       PENICILLIN and ASPIRIN-FOR-RF all return ZERO hits corpus-wide. L37
       names the Jones criteria and prints them as an image. Supplied and
       tagged in card-18.
     · BICUSPID AORTIC VALVE. `bicuspid` returns ZERO — but L34 slide 36 does
       print "BAV" as an associated anomaly on echo in coarctation, so the
       ABBREVIATION is sourced and only the expansion is tagged (card-9). This
       is the "a spelling can hide a hit" case, and it fired here.
     · PERIPHERAL PULMONARY STENOSIS (rubella's second lesion) returns ZERO.
       Tagged in card-1.
     · KAWASAKI DIAGNOSTIC CRITERIA. L36 names the European 2018 consensus and
       prints it as image-only slides 30-39, not recovered. The classic
       criteria are supplied and tagged in card-16. No question tests them.

   MY OWN DEFERRALS (§14.5) — named, so each is a promise and not a deletion.
   Every one was checked against all 24 of this chapter's questions: NONE
   tests it.
     · L33 slide 9's four CAUSE GROUPS of cyanosis are kept here as one line;
       the RESPIRATORY causes of a blue neonate — surfactant deficiency, TTN,
       meconium aspiration, pneumothorax, congenital diaphragmatic hernia —
       belong to the newborn chapter        -> `perinatal`
     · L33 slides 5 and 65's SYNDROMES in their own right — karyotype,
       dysmorphism, non-cardiac anomalies for Down, Edward, Patau, Turner,
       Noonan. Only the CARDIAC association is kept here (Down -> AVCD,
       sourced L33 slide 65; Turner -> coarctation, sourced in `6) Genetically
       determined disease_`, cited only, NOT counted)     -> `genetics`
     · L36 slide 27's HEART-FAILURE TREATMENT slide and the general management
       of cardiogenic shock. The drug list is written here because L33 prints
       it for VSD; the shock algorithm is not mine    -> `emergencies`
     · L37's streptococcal pharyngitis as an INFECTION — throat swab
       technique, the sore-throat differential, GAS eradication as tonsillitis
       treatment. Only the RF-relevant clauses are kept  -> `infection`
     · L35's neurological-complications slide is kept here as a four-item list
       because it is a complication of the cardiac lesion; STROKE AS A DISEASE
       — syndromes, imaging, management — is not mine  -> `neurological`

   OMISSION NOTE — cut on purpose, each a decision on the record:
     1. Distractor-by-distractor rejection (§14.2). Kept only where the
        teaching point IS the discrimination: the murmur signature grid
        (card-4), AS vs PS (card-8), reduced vs increased pulmonary flow
        (card-11), the arrhythmia grid (card-15). Each of those is a table.
     2. Question ids in body text, teaching voice, bank meta-commentary beyond
        the single one-line defect note, per-fact citation clauses (one Src
        line per section), and any closing summary section.
     3. Author-credit slides (L33 2 and 13, L34 1, L35 1-2, L36 1, L37 2),
        objectives slides (L33 3 and 14), "Thank you" slides, and the
        reference lists on L34 slide 62 and L36 slide 58 — no clinical fact.
     4. Slide titles with no content under them: L33's "Hemodynamics of normal
        heart" (twice), "Types of VSD 1 2 3 4", and every bare "Patent Ductus
        Arteriosus" / "ASD Secundum" picture slide; L34's twenty-one bare
        "diagnosis (ECHO)" / "treatment (CATH)" / "CoA" picture titles; L35's
        bare "HEMODYNAMICS", "ECHOCARDIOGRAPHY", "TAPVC", "HLHS",
        "NEUROLOGICAL COMPLICATIONS" and "CXR IN CLASSIFYING PHYSIOLOGY"
        pages; L36's ECG-strip and echo-still titles; L37's five clinical
        photograph titles. Named so it is clear the decks were read to the end
        and nothing carrying words was skipped.
     5. L37's "susceptible patient" slide is written ONCE. The deck prints it
        nine times (slides 7-15); that is a build animation, not nine facts.
        The repetition itself is recorded as the lecturer's emphasis.
     6. Drug doses the material does not state. Every dose here is printed on
        a slide — furosemide, captopril, enalapril, digoxin, morphine,
        phenylephrine, propranolol, ketamine, sodium bicarbonate. The
        benzathine penicillin interval in card-18 is the one exception and is
        tagged as such.
     7. IF THE 22.5-PAGE ESTIMATE MUST COME DOWN, the six cheapest legitimate
        cuts are costed one by one in the MEASURED OUTCOME block above. Only
        one of them — card-16's MIS-C block — costs no question and no
        printed slide. I did not make them; the hub rules on pages.

   DEFECT NOTE (noted, never disputed), one line in the body:
     · House keys a VAGAL MANOEUVRE first for stable SVT; L36 prints IV
       adenosine as first line for the haemodynamically stable patient and
       does not mention vagal manoeuvres. Recorded in card-15, key as printed,
       both statements carried.

   Table pipes carry no padding — mdCells() trims outer delimiters.
   Curly apostrophes throughout: a straight one closes a single-quoted field. */

var THEORY_PEDS_CARDIAC = {
  'cardiac': {

    intro: 'Ten of the twenty-four questions are one skill: name the lesion from its murmur, its click and its second sound. The rest split three ways — the innocent murmur, the blue or collapsing neonate and its duct, and endocarditis on an already abnormal heart.',

    sections: [

{
  id: 'card-1', w: 'must',
  h: 'Aetiology, the lecturer’s classification, and how CHD declares itself',
  body: [
    '### Aetiology',
    '- **Genetic — over 10 %** and rising: whole chromosomes, point mutations, **microdeletions**.',
    '- **Polygenic:** one affected child **doubles the risk** for later siblings.',
    '- **Chromosomal:** **Down · Edward · Patau · Turner · Noonan.**',
    '- **Maternal:** **rubella · drugs · alcohol · lupus · diabetes.**',
    '',
    '**Congenital rubella:** cataract (**absent red reflex**), deafness, **symmetrical growth restriction**; the cardiac lesion is a **PDA**, peripheral pulmonary stenosis second *(lesion not in course material)*.',
    '',
    '*Down → AVCD. Turner → coarctation (genetics deck, cited only).*',
    '',
    '### The six-group classification',
    '',
    '|Group|Lesions|',
    '|---|---|',
    '|**Left-to-right shunt**|**VSD · PDA · ASD**|',
    '|**Right-to-left shunt**|**Tetralogy of Fallot**|',
    '|**Common mixing**|**AVCD**|',
    '|**Well child with obstruction**|**PS · AS**|',
    '|**Sick neonate with obstruction**|**CoA · HLHS**|',
    '|**Cyanotic group**|**F4 · TA · PA · Ebstein anomaly**|',
    '',
    '- **VSD is the commonest CHD — 30–40 % of newborns with a CHD.** **PDA about 10 %.**',
    '- **Tetralogy of Fallot is 10 % of all CHD and the commonest cause of cyanosis after 1 year of age** — the commonest *cyanotic* lesion, never the commonest lesion.',
    '',
    '### How it presents',
    '**Antenatal ultrasound diagnosis · a murmur in an asymptomatic child · growth failure · recurrent chest infection · heart failure · shock · cyanosis, duct-dependent · screening.**',
    '',
    'Src: L33 slides 4–7, 16, 38, 65; L35 pages 8, 10; Turner–CoA from `6) Genetically determined disease_`, cited only'
  ].join('\n'),
  qs: ['pedhd-card-2','pedhd-card-22']
},

{
  id: 'card-2', w: 'must',
  h: 'Fetal circulation, and why a big shunt stays quiet until 2–8 weeks',
  body: [
    '### The three fetal shunts',
    '- **Ductus venosus:** umbilical vein → inferior vena cava.',
    '- **Ductus arteriosus:** main pulmonary artery → aorta.',
    '- **Foramen ovale:** anatomic opening between right and left atrium.',
    '',
    '|Fetal|Infant|',
    '|---|---|',
    '|**Low pressure system**|**High pressure system**|',
    '|**Right-to-left shunting**|**Left-to-right blood flow**|',
    '|**Lungs non-functional**|**Lungs functional**|',
    '|**Increased pulmonary resistance**|**Decreased pulmonary resistance**|',
    '|**Decreased systemic resistance**|**Increased systemic resistance**|',
    '',
    '### The switch at birth',
    '- **Cord clamped** → low-pressure placental circuit shut down → **systemic resistance rises**.',
    '- **First breaths** → pulmonary resistance falls, **pulmonary flow rises SIX-FOLD** → **left atrial pressure rises**.',
    '- Placenta excluded → **right atrial return falls** → **the flap valve of the foramen ovale closes**.',
    '- **The ductus arteriosus closes within the first few hours or days.**',
    '',
    '**⚠️ The exam point:** a large VSD is quiet at birth because **PVR is still high**. It falls over the following weeks, **the left-to-right shunt widens, and the infant declares at 2–8 weeks** — nothing new has gone wrong.',
    '',
    '**Infant heart failure:** a large left-to-right shunt until proved otherwise — **breathless and sweaty on feeding, poor weight gain, recurrent chest infections, hepatomegaly**. L35 lists hepatomegaly with increased pulmonary blood flow, so it is expected at this age, not absent.',
    '',
    'Src: L33 slides 10–12, 28; L35 page 52'
  ].join('\n'),
  qs: ['pedhd-card-3','pedhd-card-4']
},

{
  id: 'card-3', w: 'must',
  h: 'Innocent or pathological — the “S” checklist and what breaks it',
  body: [
    '**Innocent murmur:** every criterion is an “S” — *“an ‘S’, ‘innoSent’”*.',
    '',
    '- **aSymptomatic.**',
    '- **Soft** blowing murmur.',
    '- **Systolic only — not diastolic.**',
    '- **left Sternal edge.**',
    '',
    '**Three findings that must be ABSENT: normal heart sounds with no added sounds · no parasternal thrill · no radiation.**',
    '',
    '*Innocent murmurs vary with posture and get louder with fever, anaemia and exercise — they are flow, so they follow flow (not in course material).*',
    '',
    '### What disqualifies a murmur',
    '',
    '|Finding|Why it disqualifies|',
    '|---|---|',
    '|**A THRILL**|palpable = **grade 4 or louder**; no innocent murmur is that loud → **echocardiogram**|',
    '|**Any diastolic murmur**|the criteria allow systolic only|',
    '|**Added sound — S3, S4, ejection click**|normal heart sounds with **no added sounds** is required|',
    '|**Radiation** — carotids, axilla, back|a gradient with a direction|',
    '|**Symptoms** — failure to thrive, breathless feeds, cyanosis|the murmur is not the whole story|',
    '|**Abnormal pulses** — bounding, absent femorals|a duct or a coarctation|',
    '',
    '- **Respiratory sinus arrhythmia is normal in children** and is not a murmur feature at all.',
    '- **A soft systolic murmur at the left sternal edge in a febrile but well child is a flow murmur: explain it and ask the GP to re-examine after recovery.** No echo, no chest film, no cardiology referral — the fever is the flow.',
    '',
    'Src: L33 slide 8; L36 slides 4–6'
  ].join('\n'),
  qs: ['pedhd-card-1','pedhd-card-16','pedhd-card-19','pedhd-card-23']
},

{
  id: 'card-4', w: 'must',
  h: 'The murmur signature grid — ten questions are this table',
  body: [
    '|Lesion|Timing and site|Second sound|Other|',
    '|---|---|---|---|',
    '|**VSD**|**PANSYSTOLIC** plateau, **lower left sternal edge**, harsh, ± thrill|**normal P2**|a LOUD murmur means a SMALL defect|',
    '|**ASD secundum**|**ejection systolic**, **upper left sternal edge** (pulmonary area)|**WIDE, FIXED SPLIT**|tricuspid diastolic flow murmur|',
    '|**PDA**|**CONTINUOUS “machinery”** through S2, **first intercostal space**|obscured|**bounding pulse**, hyperdynamic circulation|',
    '|**Pulmonary stenosis**|**ejection systolic**, **upper LEFT sternal edge**, ± thrill|**ejection click; soft, delayed P2**|RV heave when severe|',
    '|**Aortic stenosis**|**ejection systolic**, **upper RIGHT sternal edge**, **radiates to neck and carotids**|**ejection click, apical; soft, delayed A2**|**small-volume slow-rising pulse; carotid thrill**|',
    '|**Coarctation, adult type**|ejection systolic, upper sternal edge; **continuous collateral murmur AT THE BACK**|—|**radio-femoral delay; right-arm hypertension**|',
    '|**Innocent**|**soft** systolic, left sternal edge|**normal, no added sounds**|no thrill, no radiation, no symptoms|',
    '',
    '### Three rules the grid turns on',
    '- **The soft, delayed component of S2 names the valve.** Soft **A2** = aortic stenosis, soft **P2** = pulmonary stenosis. **The click is identical in both.**',
    '- **Pansystolic vs ejection.** Pansystolic runs S1 → S2 as a **plateau**. Ejection is **diamond-shaped, with a gap at each end**.',
    '- **Site separates the two pansystolic murmurs:** VSD at the **lower left sternal edge**; **mitral regurgitation at the apex, radiating to the axilla** *(MR not in course material)*.',
    '',
    '*A continuous murmur in a child has two common answers: a PDA below the left clavicle, or coarctation collaterals at the back.*',
    '',
    'Src: L33 slides 8, 27–28, 43, 57; L34 slides 5, 16, 32'
  ].join('\n'),
  qs: ['pedhd-card-6','pedhd-card-7','pedhd-card-8','pedhd-card-9','pedhd-card-10','pedhd-card-13','pedhd-card-14','pedhd-card-15','pedhd-card-17']
},

{
  id: 'card-5', w: 'must',
  h: 'Ventricular septal defect — size decides everything',
  body: [
    '**VSD:** **30–40 % of all newborns with a CHD** — the commonest defect.',
    '',
    '### Anatomical types',
    '- **Perimembranous — 70–80 %**, the commonest.',
    '- **Muscular — 5–20 %:** central / mid-muscular, apical, **multiple = Swiss cheese septum**.',
    '- **Inlet / AV canal type — 5–8 %.**',
    '- **Supracristal / subaortic — 5–7 %.**',
    '',
    '### Haemodynamics',
    '- **Magnitude of shunt = size + pulmonary vascular resistance.**',
    '- **Small, about 3 mm:** the defect itself is the resistance → less flow → **PVR normal**.',
    '- **Large:** minimal resistance at the defect → more flow → **shear and tear, fibrosis** → **high PVR**.',
    '- Systole: **LV → PA → lungs → pulmonary veins → LA → LV** = **volume overload of LA and LV**.',
    '- Shunt dilates the pulmonary artery and raises PVR → **pulmonary hypertension**, more with moderate and larger defects.',
    '- RV pressure rises with time **until Eisenmenger syndrome. Left-to-right early, right-to-left late.**',
    '',
    '### Small VSD',
    '- **Asymptomatic, accidental discovery; normal weight gain and development.**',
    '- **Pansystolic, harsh, parasternal; normal P2.**',
    '- **Normal X-ray, normal ECG**; echo diagnostic.',
    '- **Prognosis: spontaneous closure**, with a risk of **bacterial endocarditis**.',
    '- **Management: assurance and follow-up**, intervention if needed.',
    '',
    '### Moderate and large (unrestrictive) VSD',
    '- **Well in the immediate postnatal period; symptoms at 2–8 weeks.**',
    '- **Persistent dyspnoea, sweating, poor feeding, failure to thrive.**',
    '- **Poor suckling, choking, difficult breathing, exercise intolerance, recurrent chest infection.**',
    '- **Tachycardia, tachypnoea, bounding pulse, stunted growth, pericardial bulge, pansystolic murmur, normal P2**, lower respiratory tract infection, heart failure.',
    '- **Late cyanosis means right ventricular failure.**',
    '',
    '### Eisenmenger syndrome',
    '- **Reversal of the shunt to right-to-left**, from raised pulmonary artery pressure and pulmonary vascular disease → **cyanosis and right-sided heart failure**.',
    '- **Loud pulmonary sound · very short or no systolic murmur · early diastolic murmur of pulmonary regurgitation · murmur of tricuspid regurgitation.**',
    '- **Around 2 to 3 years of age.**',
    '- *A VSD murmur that disappears is bad news, not recovery.*',
    '',
    '### Management of moderate and large VSD',
    '- **Furosemide 1 mg/kg every 12 hours (1–3 mg/kg per day) · captopril 0.5–2 mg/kg per day · enalapril 0.1 mg/kg per day · digoxin 10–20 mcg/kg per day.**',
    '- **Treat the chest infection · review every 2–3 months · manage the failure to thrive · endocarditis prophylaxis.**',
    '- **Closure: surgical is first choice over 1 year of age**; transcatheter otherwise.',
    '- **Surgery indicated for: large VSD with pulmonary hypertension · VSD with associated defects · congestive failure not responding to medication.**',
    '',
    'Src: L33 slides 15–16, 25–32'
  ].join('\n'),
  qs: ['pedhd-card-3','pedhd-card-4','pedhd-card-9','pedhd-card-14']
},

{
  id: 'card-6', w: 'must',
  h: 'Patent ductus arteriosus — the duct that should have shut',
  body: [
    '**PDA:** persistence of the duct **beyond 72 hours of life**. **About 10 % of CHD** in full-term infants.',
    '',
    '### Why it is open, and why it shuts',
    '- **Fetal role:** carries deoxygenated blood **past the collapsed lungs** to the descending aorta and umbilical arteries.',
    '- **Held open in utero by: placental prostaglandins · prostaglandins and nitric-oxide-like vasodilators made by the duct itself · hypoxia.**',
    '- **Closed after birth by: local vasoconstrictors (endothelin) responding to higher arterial oxygen · removal of placental prostaglandin · fewer prostaglandin E2 receptors in the ductal wall.**',
    '- **Spontaneous closure in 55 % of full-term newborns within the first 60 hours.**',
    '',
    '### The preterm duct',
    '- **Patency is inversely related to gestational age.**',
    '- **Lower responsiveness of the muscle layer to oxygen.**',
    '- **Higher sensitivity to the vasodilator effects of prostaglandin E2 and nitric oxide.**',
    '- *The wall of the duct is muscularised in the preterm, versus a poor muscle layer in the full term.*',
    '',
    '### Presentation, investigation, treatment',
    '- **Volume overload**; ducts vary in **size, length and shape**; the picture depends on **size and pressure gradient**.',
    '- **Small: asymptomatic.** Otherwise **chest infection, growth failure, heart failure**.',
    '- **Hyperdynamic circulation → BOUNDING PULSE** · **machinery murmur, first intercostal space** · cardiomegaly · signs of pulmonary hypertension.',
    '- **CXR: cardiomegaly, LV dilatation.** ECG. **Echo with Doppler is the most reliable non-invasive tool.**',
    '- **PRETERM: INDOMETHACIN, a COX-2 inhibitor**, oral or **preferably IV (lyophilised)**; **best before 10 days of age and in less mature infants**; **three doses 12–24 hours apart**. **Ibuprofen an evaluated alternative.** Then ligation or transcatheter closure.',
    '- **INFANTS AND CHILDREN: transcatheter closure — coil occlusion or device**; **surgical ligation, open or thoracoscopic**.',
    '- **⚠️ Never close a duct the child is living on.** In critical coarctation, AS, PS and TGA the duct **is** the circulation, and **prostaglandin keeps it open**.',
    '',
    '*A PDA with absent red reflexes and symmetrical growth restriction is congenital rubella.*',
    '',
    'Src: L33 slides 33–47; L34 slide 57'
  ].join('\n'),
  qs: ['pedhd-card-6','pedhd-card-15','pedhd-card-22']
},

{
  id: 'card-7', w: 'must',
  h: 'Atrial septal defect and AVCD',
  body: [
    '### ASD — anatomical types',
    '- **Secundum — 50–70 %** (the diagram slide says 70 %).',
    '- **Primum — 30 %** (diagram slide: 20 %) — **atrioventricular septal defect, “AV canal”**.',
    '- **Sinus venosus — 10 %** (diagram slide: 6–8 %) — **associated with partial anomalous pulmonary venous drainage**.',
    '- **Coronary sinus ASD — rare**, an unroofed coronary sinus.',
    '',
    '*Two different percentage sets are printed on consecutive slides; both are given rather than one chosen.*',
    '',
    '### Size decides the shunt',
    '- **PFO:** under 5 mm, with a flap valve.',
    '- **Small:** under 8 mm, **no dilatation of the right heart chambers**.',
    '- **Moderate–large:** over 8 mm, **RA and RV dilate**. Shunt also depends on **right ventricular compliance**.',
    '- **Spontaneous closure: under 3 mm diagnosed before 3 months → 100 % by 1½ years · 3–8 mm → over 80 % by 1½ years · over 8 mm rarely closes · unlikely after 4 years.**',
    '',
    '### Course and signs',
    '- **Childhood:** left-to-right shunt with a murmur. **With age:** RA and RV dilate. **Adulthood:** increased pulmonary flow, heart failure, pulmonary vascular change, **Eisenmenger physiology**.',
    '- **Growth usually normal**; tachypnoea only with large defects.',
    '- **Ejection systolic murmur in the pulmonary area — increased flow ACROSS THE PULMONARY VALVE, not across the defect.**',
    '- **Wide fixed splitting of S2** · **tricuspid diastolic flow murmur**.',
    '- Often first noticed as **recurrent respiratory infections and wheeze** in a toddler.',
    '',
    '### Investigation and closure',
    '- **CXR: cardiomegaly (RV, RA) if large · increased pulmonary arterial markings · dilated main pulmonary artery · LV AND LA NOT DILATED.**',
    '- **Echo:** size in mm, RV volume overload, associations.',
    '- **No treatment in infants. Moderate and large secundum ASDs need closure, and the role is TRANSCATHETER closure.**',
    '- **Selection: defect size · shape · patient size (length of the interatrial septum) · transoesophageal echo.** Devices: **Amplatzer occluder, Occlutech, Lifetech, Starway**.',
    '',
    '|  |**Surgery**|**Catheter**|',
    '|---|---|---|',
    '|Success|**approaching 100 %**|**95 %**|',
    '|Stay|**5–7 days**|**24 hours**|',
    '|Complications|postoperative complications|**minor in 1–2 %**, fewer overall|',
    '|Scar|yes|**none**|',
    '',
    '### AVCD',
    '- **Common in Down syndrome.**',
    '- **A single five-leaflet (common) valve** between atria and ventricles, **stretching across the entire atrioventricular junction**, and it **tends to leak**.',
    '- The large defect gives **high pulmonary artery pressure**.',
    '- **Cyanosis at birth · heart failure at 2 weeks to 3 months.**',
    '- **Treat the heart failure medically as for a large VSD; surgical repair at 3 to 6 months.**',
    '',
    'Src: L33 slides 49–67'
  ].join('\n'),
  qs: ['pedhd-card-8','pedhd-card-13']
},

{
  id: 'card-8', w: 'must',
  h: 'Obstruction in a well child — aortic and pulmonary stenosis',
  body: [
    '**AS and PS:** both give an asymptomatic ejection murmur with a click. **The soft, delayed component of S2 names the valve.**',
    '',
    '- **AS: most present with an asymptomatic murmur; severe stenosis gives reduced exercise tolerance, chest pain on exertion, or syncope.**',
    '- **⚠️ Critical neonatal AS has a DUCT-DEPENDENT SYSTEMIC circulation → severe heart failure leading to SHOCK.**',
    '- **PS: most asymptomatic, diagnosed clinically by the murmur.**',
    '- **⚠️ Critical neonatal PS has a DUCT-DEPENDENT PULMONARY circulation → cyanosis in the first few days.**',
    '',
    '|  |**Aortic stenosis**|**Pulmonary stenosis**|',
    '|---|---|---|',
    '|Murmur|**ejection systolic, upper RIGHT sternal edge**|**ejection systolic, upper LEFT sternal edge**, ± thrill|',
    '|Radiation|**to the neck and carotids**|little|',
    '|Click|**apical ejection click**|**at the upper left sternal edge**|',
    '|Second sound|**A2 delayed and soft**|**P2 delayed and soft**|',
    '|Pulse|**small volume, slow rising; carotid thrill**|normal|',
    '|Extra sign|—|**RV impulse, a heave, when severe**|',
    '|ECG|**left ventricular hypertrophy**|**RVH — UPRIGHT T WAVE IN V1**|',
    '|CXR|normal or prominent LV with **post-stenotic dilatation of the ascending aorta (aortopathy)**|normal or **post-stenotic dilatation of the pulmonary artery**|',
    '|Echo, the **gold standard**|degree (mild/mod/severe/critical), LVH, LV function, associations (**CoA, dilated ascending aorta**), aortic regurgitation|degree, RVH, RV function, associations (**ASD, pulmonary branch stenosis**), pulmonary regurgitation|',
    '|Critical neonatal form|duct-dependent **SYSTEMIC** → **shock**|duct-dependent **PULMONARY** → **cyanosis**|',
    '|Treatment|**balloon aortic valvoplasty or aortic valve replacement**|**balloon pulmonary valvoplasty by catheter; surgery rarely required**|',
    '|Indications|**symptoms · severe stenosis · ischaemia on ECG**|**symptoms · severe stenosis**|',
    '',
    '*Pure PS is the one exception to the single-S2 rule in cyanotic assessment — it may give a wide split with a softly audible P2.*',
    '',
    'Src: L34 slides 3–27; L35 page 53'
  ].join('\n'),
  qs: ['pedhd-card-7','pedhd-card-10','pedhd-card-17']
},

{
  id: 'card-9', w: 'must',
  h: 'Coarctation — two different diseases under one name',
  body: [
    '### Adult type — a well child',
    '- **Asymptomatic.**',
    '- **Systemic hypertension in the RIGHT ARM.**',
    '- **Ejection systolic murmur at the upper sternal edge; collaterals heard as a CONTINUOUS MURMUR AT THE BACK.**',
    '- **RADIO-FEMORAL DELAY** — blood bypasses the obstruction through chest-wall collaterals, so the leg pulse is late.',
    '- **CXR: RIB NOTCHING** from large collateral intercostal arteries running under the ribs posteriorly, and the **“3” sign**, a visible notch in the descending aorta at the coarctation site. **ECG: LV hypertrophy.**',
    '- **Echo:** degree, LVH, LV function, associations — **BAV (bicuspid aortic valve, *expansion not in course material*) and dilated ascending aorta**.',
    '- **CT aortography:** degree, **collaterals**, relation to surrounding structures.',
    '- **Management: CoA stenting by catheter** for **symptoms** or **moderate/severe** coarctation; **surgical repair in some patients**.',
    '',
    '### Critical neonatal coarctation — a collapsing baby',
    '- **Examination on the first day of life is usually normal** — the duct is still feeding the descending aorta.',
    '- **Acute circulatory collapse after a few days, when the duct closes.**',
    '- **A sick baby, severe heart failure, ABSENT FEMORAL PULSES, severe metabolic acidosis.**',
    '- **CXR: cardiomegaly from heart failure and shock.** **Echo:** degree, **patency of the PDA**, LV function, associated VSD. **CT aortography:** degree and **arch hypoplasia**.',
    '- **Surgical CoA repair is the standard curative treatment.**',
    '',
    '*Turner syndrome carries coarctation. Prostaglandin E1 causes apnoea, fever and hypotension — have airway support ready (not in course material).*',
    '',
    'Src: L34 slides 28–61'
  ].join('\n'),
  flow: {
    title: 'The collapsed neonate on day 2–7',
    steps: [
      { k:'step', t:'Shock, pallor, cool mottled skin at 24 hours to 7 days', n:'sepsis and a duct-dependent lesion look identical' },
      { k:'step', t:'ALL FOUR pulses · four-limb BP · pre- and post-ductal saturations' },
      { k:'decision', t:'Femorals absent, right brachial the only good pulse?', yes:'Critical coarctation until disproved', no:'Sepsis, metabolic disease, another duct-dependent lesion' },
      { k:'alert', t:'IV PROSTAGLANDIN E1 BEFORE THE ECHO — the duct is the circulation', n:'antibiotics too; both diagnoses treated until one is excluded' },
      { k:'step', t:'Echo confirms; treat the cardiogenic shock and heart failure' },
      { k:'step', t:'Surgical repair — the standard curative treatment' }
    ]
  },
  qs: ['pedhd-card-12','pedhd-card-20']
},

{
  id: 'card-10', w: 'must',
  h: 'Cyanosis — the threshold, the eight types, and what mimics it',
  body: [
    '**Cyanosis:** a bluish or purplish tinge to the skin and mucous membranes.',
    '',
    '- **Threshold — about 5 g/dL** of unoxygenated haemoglobin in the capillaries generates the colour. L33 states it as **reduced haemoglobin exceeding 50 g/L**, seen on the tongue — **the same number in different units**.',
    '- **Anaemia and polycythaemia shift it:** recognised at a **HIGHER saturation in polycythaemia**, a **LOWER saturation in anaemia**.',
    '- **Peripheral:** hands, feet, around the mouth. **Central:** seen on the tongue.',
    '- **Four cause groups: cardiac · respiratory · haematological · neurological.**',
    '',
    '### The eight types',
    '- **Central** — cyanotic CHD.',
    '- **Peripheral** — hypothermia, congestive cardiac failure.',
    '- **Mixed** — CHD in shock.',
    '- **Differential** — **PDA with reversal**.',
    '- **Reverse differential** — **TGA with PDA with reversal**.',
    '- **Intermittent** — **Ebstein anomaly**.',
    '- **Circumoral.**',
    '- **Cyclical** — **bilateral choanal atresia**.',
    '',
    '### True cyanosis versus its mimics',
    '',
    '|True cyanosis|Cyanosis-like conditions|',
    '|---|---|',
    '|**Associated with CLUBBING**|**Not associated with clubbing**|',
    '|**ABG confirms**|**Laboratory estimation of methaemoglobin and sulphaemoglobin confirms**|',
    '',
    '- **Differential diagnosis: methaemoglobin · sulfhaemoglobin · pseudocyanosis.**',
    '- **Pseudocyanosis** is a blue tinge with **neither hypoxaemia nor peripheral vasoconstriction**, mostly from **metals — silver nitrate, silver iodide, silver, lead** — or **drugs — phenothiazines, amiodarone, chloroquine hydrochloride**.',
    '',
    'Src: L35 pages 3–6; L33 slide 9'
  ].join('\n'),
  qs: ['pedhd-card-11','pedhd-card-18']
},

{
  id: 'card-11', w: 'must',
  h: 'Sorting cyanotic CHD at the bedside — four steps, two physiologies',
  body: [
    '**Shared by all cyanotic CHD:** cyanosis, clubbing, polycythaemia.',
    '',
    '|  |**REDUCED pulmonary blood flow**|**INCREASED pulmonary blood flow**|',
    '|---|---|---|',
    '|Lesions|**Tetralogy of Fallot 5–7 % · tricuspid atresia · Ebstein anomaly · pulmonary atresia**|**TGA 3–5 % · truncus arteriosus 1–2 % · single ventricle 1–2 % · TAPVC 1–2 % · HLHS 1–3 %**|',
    '|Growth|**no failure to thrive**|**failure to thrive present**|',
    '|Heart failure|absent|**CHF present**|',
    '|Cyanosis|**more cyanosis**|**milder cyanosis**|',
    '|Spells|**cyanotic spells**|**no cyanotic spells**|',
    '|Precordium|**quiet**|**hyperactive**|',
    '|Liver|**no hepatomegaly**|**hepatomegaly**|',
    '',
    '### Clues from the second sound and the murmur',
    '- **Single S2 → TOF physiology, TGA, most admixture lesions. Fixed split → TAPVC. Normal split → excludes a cardiac cause.**',
    '- *Pure pulmonary stenosis may have a wide split S2 with a softly audible P2.*',
    '- **Ejection systolic in the pulmonary area — most cases · pansystolic at the lower left sternal border — tricuspid atresia with VSD · continuous — pulmonary atresia · to-and-fro — TOF with absent pulmonary valve.**',
    '',
    '### Complications',
    '- **Clubbing · cyanotic spell · depressed IQ · infective endocarditis · polycythaemia · embolic phenomenon.**',
    '- **Neurological: stroke · brain abscess · seizures**, and adverse neurodevelopmental outcome — **lower IQ, poor motor skills, poor language skills, cognitive impairment**.',
    '',
    'Src: L35 pages 7–8, 23, 29–30, 47–57'
  ].join('\n'),
  flow: {
    title: 'The four-step approach to a cyanotic child',
    steps: [
      { k:'step', t:'STEP 1 — DETECT the cyanosis', n:'pitfalls: lighting, anaemia, pigmentation, peripheral cyanosis, mild cyanosis' },
      { k:'step', t:'Pulse oximetry, used properly', n:'misleading if used incorrectly: watch 1–2 minutes, stable waveform, displayed rate matching the actual rate, shield the probe from light' },
      { k:'step', t:'HYPEROXIA TEST — 100 % oxygen by hood ~10 minutes, then ABG pO2' },
      { k:'alert', t:'pO2 under 70 mmHg = CHD VERY LIKELY · under 150 = CHD LIKELY · 150–200 intermediate · over 200 = CHD UNLIKELY' },
      { k:'step', t:'STEP 2 — ASSIGN PHYSIOLOGY: pulmonary blood flow reduced or increased' },
      { k:'step', t:'STEP 3 — ASSESS SEVERITY', n:'early or neonatal onset · cyanotic spells · cyanosis with CHF · severe cyanosis with no or very soft murmur' },
      { k:'step', t:'STEP 4 — CONFIRM: echo diagnoses the majority; catheterisation only in very selected situations; CT and MRI reduce that need further' },
      { k:'step', t:'REFER on diagnosis — neonates are likely to need immediate intervention' }
    ]
  },
  qs: ['pedhd-card-18','pedhd-card-20','pedhd-card-24']
},

{
  id: 'card-12', w: 'must',
  h: 'Tetralogy of Fallot — the four components and the boot-shaped heart',
  body: [
    '**Tetralogy of Fallot:** described by **Fallot in 1888**. **Incidence 10 % of all congenital heart disease**, and **the most common cardiac malformation responsible for cyanosis after 1 year of age**. *The physiology table puts TOF at 5–7 %; both figures are printed.*',
    '',
    '### The four components',
    '- **Ventricular septal defect.**',
    '- **Obstruction to right ventricular outflow.**',
    '- **Overriding of the aorta.**',
    '- **Right ventricular hypertrophy.**',
    '',
    '**Only TWO are actually required:** a **VSD large enough to equalise pressures in both ventricles**, and a **right ventricular outflow tract obstruction**. **RVH is secondary** to the RVOT obstruction and the VSD; **overriding varies**; the **VSD is perimembranous with extension into the subpulmonary region, non-restrictive and large**.',
    '',
    '### History and examination',
    '- **Cyanosis appears AFTER the neonatal period** · **hypoxaemic spells** · low birth weight, developmental delay, easy fatigability.',
    '- **Cyanosis · clubbing · polycythaemia · tachypnoea.**',
    '- **RV tap at the left sternal border · systolic thrill in the upper and mid left sternal borders · ejection click originating from the aorta.**',
    '- **S2 IS SINGLE — the pulmonary component is absent.**',
    '- **Loud ejection systolic murmur at the mid and upper left sternal border. The murmur is the PULMONARY STENOSIS, not the VSD**, and may be confused with a holosystolic VSD murmur.',
    '- **⚠️ INTENSITY IS INVERSE TO SEVERITY: the more severe the obstruction, the shorter and softer the murmur. In pulmonary atresia it is absent or very soft.**',
    '- **Auscultate the BACK for MAPCAs — major aorto-pulmonary collateral arteries.**',
    '',
    '### Investigations',
    '- **Polycythaemia secondary to cyanosis, haematocrit over 65 % · anaemia from relative iron deficiency.**',
    '- **CXR: normal-sized heart · DECREASED pulmonary vascular markings · concave main pulmonary artery segment with an upturned apex = BOOT-SHAPED HEART, coeur en sabot · right atrial enlargement 25 % · right aortic arch 25 %.**',
    '- **ECG: right axis deviation, right ventricular hypertrophy.** Echocardiography; angiogram.',
    '- **Differential of Fallot physiology: TOF · TGA · tricuspid atresia · single ventricle · double outlet right ventricle · corrected TGA · atrioventricular canal defect · malpositions.**',
    '',
    'Src: L35 pages 9–22'
  ].join('\n'),
  qs: ['pedhd-card-24']
},

{
  id: 'card-13', w: 'must',
  h: 'The hypoxaemic spell, and definitive management of TOF',
  body: [
    '**Hypoxaemic spell:** also called the **hypercyanotic, tet, cyanotic or hypoxic** spell.',
    '',
    '- **Mechanism: infundibular spasm and/or decreased systemic vascular resistance**, increasing the **right-to-left shunt at the VSD** and so **diminishing pulmonary blood flow**.',
    '- **Peak incidence 2 to 4 months.**',
    '- **Usually in the morning, after crying, feeding or defecation.**',
    '- **A severe spell may lead to limpness, convulsion, cerebrovascular accident or even death.**',
    '',
    '### Symptoms, and the sign that confirms it',
    '- **Sudden onset of cyanosis, or deepening of existing cyanosis.**',
    '- **Sudden onset of dyspnoea.**',
    '- **Altered consciousness, from irritability to syncope.**',
    '- **⚠️ DECREASE IN INTENSITY OR DISAPPEARANCE OF THE SYSTOLIC MURMUR** — less blood is crossing the outflow tract.',
    '- **Haemodynamics: increased activity → increased respiration → increased venous return → fixed pulmonary blood flow → increased right-to-left shunt → increased cyanosis.**',
    '',
    '### Treating the spell',
    '- **KNEE-CHEST POSITION OR SQUATTING** — **decreases systemic venous return and increases systemic vascular resistance at the femoral arteries**, so **pulmonary blood flow rises and cyanosis falls**. Equivalents: knee-chest, sitting with flexed limbs, the mother carrying the child with folded limbs.',
    '- **Morphine sulphate 0.2 mg/kg SC or IM** — suppresses the respiratory centre, **abolishes hyperpnoea**.',
    '- **Oxygen has little effect on arterial oxygen saturation.**',
    '- **Acidosis: sodium bicarbonate 1 mEq/kg IV.**',
    '- **⚠️ RESPONSE IS JUDGED BY THE MURMUR GETTING LOUDER** as the child becomes less cyanotic — more blood is crossing the stenotic outflow tract.',
    '- **Not fully responding: phenylephrine 0.02 mg/kg IV** · **propranolol 0.01–0.25 mg/kg slow IV push**, reducing the heart rate and possibly reversing the spell · **ketamine 1–3 mg/kg over 60 seconds**, raising systemic vascular resistance and sedating.',
    '',
    '### Medical management of TOF',
    '- **Oral propranolol 0.5 to 1.5 mg/kg every 6 hours to PREVENT spells.**',
    '- **Detect and treat relative iron-deficiency anaemia — anaemic children are more susceptible to cerebrovascular complications.**',
    '- **Good dental hygiene and infective endocarditis prophylaxis.**',
    '- **Keep the haematocrit under 65 %; phlebotomy may be needed for polycythaemia.**',
    '',
    '### Shunt procedures',
    '- **Indications: neonates with TOF and pulmonary atresia · hypoplastic pulmonary annulus needing a transannular patch · hypoplastic pulmonary arteries · severely cyanotic infants under 3 months · infants under 3 to 4 months with medically unmanageable hypoxic spells.**',
    '- **Blalock–Taussig:** subclavian artery to ipsilateral PA, **over 3 months of age**.',
    '- **Gore-Tex interposition:** subclavian to ipsilateral PA, **even under 3 months**.',
    '- **Waterston** (ascending aorta to right PA) and **Potts** (descending aorta to left PA) — **no longer performed**.',
    '',
    'Src: L35 pages 24–35'
  ].join('\n'),
  qs: ['pedhd-card-24']
},

{
  id: 'card-14', w: 'high',
  h: 'The other cyanotic lesions, and when to operate',
  body: [
    '**TGA:** **oxygenated blood circulates within the pulmonary circulation and deoxygenated blood in the systemic circulation. Hypoxia is the result of impaired MIXING — better admixture, better saturation. Early presentation.**',
    '- **Cyanosis within 24–48 hours in a vigorous baby · NO MURMUR · four equal pulses · single loud S2 · saturations do not improve with oxygen · CXR shows INCREASED pulmonary vascular markings.**',
    '- **The absent murmur is the clue, not a reassurance** — nothing is obstructed, the two circuits are simply parallel.',
    '- **Timing: neonatal diagnosis → arterial switch at 10–21 days · after 1 month → atrial switch (Senning) at 3–4 months · TGA with VSD → arterial switch with VSD closure at 1–3 months.**',
    '',
    '**Tricuspid atresia:** **marked cyanosis from birth**; **ECG: LEFT axis deviation, right atrial enlargement, LVH** — the one cyanotic lesion with a left axis.',
    '',
    '**Ebstein anomaly:** **an abnormal tricuspid valve displaced into the right ventricle**; the **anterior cusp keeps some attachment to the valve ring**, the others adherent to the RV wall. **Intermittent cyanosis · multiple clicks · huge right atrium, “arterialisation” of the RV · regurgitant tricuspid valve.**',
    '',
    '**Pulmonary atresia:** **cyanosis at birth**; CXR **concave pulmonary artery segment, apex tilted upward**; continuous murmur.',
    '',
    '**Truncus arteriosus:** **early CHF · mild or no cyanosis · systolic ejection click.** **Elective repair by 1–3 months; beyond 3 months, high risk of pulmonary vascular disease.**',
    '',
    '**TAPVC:** **fixed split S2. Operate as soon as the diagnosis is made — OBSTRUCTED TAPVC IS A SURGICAL EMERGENCY and any delay may be catastrophic.**',
    '',
    '**HLHS:** 1–3 %, and one of the two “sick neonate with obstruction” diagnoses beside coarctation.',
    '',
    '**Pulmonary AV fistula:** fistulous vascular communications in the lungs, **large and localised, or multiple, scattered and small**. **Commonest form is Osler–Weber–Rendu syndrome.** Features depend on shunt magnitude; **mild cyanosis**; **routine echo normal — CONTRAST echo is diagnostic.**',
    '',
    '### When waiting is justified',
    '- **Complex two-ventricle states — DORV/VSD/PS, TGA/VSD/PS, cTGA/VSD/PS — wait until cyanosis is apparent, or 4 to 5 years of age.**',
    '- **Balanced single-ventricle states, SaO2 85–90 % — intervene only if symptoms or cyanosis appear.**',
    '- *Otherwise early correction is desirable: it avoids adverse cardiac, neurodevelopmental and other consequences.*',
    '',
    'Src: L35 pages 36–46, 58–64; L33 slide 6'
  ].join('\n'),
  qs: ['pedhd-card-11','pedhd-card-18']
},

{
  id: 'card-15', w: 'must',
  h: 'Arrhythmias — the complex width and the rate decide',
  body: [
    '**All of them present the same way — palpitation, syncope, heart failure, cardiogenic shock. The ECG separates them.**',
    '',
    '|Rhythm|Recognise it by|Treatment|',
    '|---|---|---|',
    '|**Respiratory sinus arrhythmia**|rate varying with respiration|**normal in children — none**|',
    '|**PAC · PVC · ventricular couplets**|isolated ectopic beats|usually benign in a structurally normal heart *(benignity not in course material)*|',
    '|**SVT**|**regular NARROW-complex tachycardia**; **reentrant atrioventricular**; **HR usually above 180/min, above 220/min in newborns**|**stable → IV ADENOSINE first line** · **unstable → SYNCHRONISED CARDIOVERSION**|',
    '|**Ventricular tachycardia**|**WIDE-complex tachycardia**|**unstable → cardioversion first line** · **stable → IV amiodarone usually first line, but not always**|',
    '|**Complete heart block**|**bradycardia with complete atrioventricular dissociation**; **congenital (SLE, CHD)** or **acquired (viral myocarditis, digitalis toxicity)**|**symptomatic → pacemaker implantation**|',
    '',
    '- **Vagal manoeuvres come BEFORE adenosine in a stable child** — ice to the face in an infant, Valsalva or blowing through a narrow straw in an older one. **Carotid sinus massage is not used in children, and never bilaterally** *(the ladder is not in course material)*.',
    '- **Defect note:** House keys the vagal manoeuvre first; L36 prints IV adenosine as first line for the haemodynamically stable patient and does not mention vagal manoeuvres. **Both recorded, key as printed.**',
    '',
    'Src: L36 slides 4–21'
  ].join('\n'),
  qs: ['pedhd-card-5']
},

{
  id: 'card-16', w: 'high',
  h: 'Myocarditis, dilated cardiomyopathy, Kawasaki and MIS-C',
  body: [
    '**Viral myocarditis:** **viral-induced myocardial injury**, ranging **from an asymptomatic patient to fulminant carditis with cardiogenic shock**. **Treatment of heart failure and cardiogenic shock is the cornerstone**; **IV immunoglobulins and steroids in some patients**.',
    '',
    '**Dilated cardiomyopathy:** **genetic myocardial dysfunction** → **impaired systolic function and a dilated left ventricle with global hypokinesia**. Presents with **heart failure and/or cardiogenic shock**; **same cornerstone**.',
    '',
    '**Kawasaki disease:** **immune-mediated vasculitis** with a **high tendency for coronary arteritis**.',
    '- **IV immunoglobulin is the GOLD STANDARD for treatment.**',
    '- **Steroids and/or other immunomodulators** in **high-risk and resistant patients, as adjuvant therapy with IVIG**.',
    '- *The European 2018 consensus criteria are printed as images and are not recoverable from the cached deck. The classic set is fever of 5 days or more plus 4 of 5 — bilateral non-purulent conjunctivitis, lip and oral changes, polymorphous rash, extremity changes, cervical lymphadenopathy (not in course material).*',
    '',
    '**MIS-C:** **immune-mediated multiorgan dysfunction after COVID infection**, with a **high tendency for cardiac affection — impaired LV systolic function, mitral regurgitation, pericardial effusion, coronary involvement**.',
    '- **Diagnosis: fever + acute-phase reactants + multi-organ affection + evidence of COVID infection + exclusion of other differentials.**',
    '- **Steroids, other immunomodulators and IVIG** inhibit the inflammatory cascade.',
    '- **COVID reaches the heart three ways: MIS-C · acute COVID infection · vaccine-related myocarditis.**',
    '',
    'Src: L36 slides 22–46'
  ].join('\n'),
  qs: []
},

{
  id: 'card-17', w: 'must',
  h: 'Infective endocarditis — septicaemia that settles on an abnormal heart',
  body: [
    '**Infective endocarditis:** a state of **septicaemia resulting in infection of the endocardium**.',
    '',
    '- **May occur after: dental extraction · central venous catheter · cardiac surgery.**',
    '- **May affect: congenitally abnormal valves · rheumatic valve disease · cyanotic congenital heart disease · shunts, e.g. VSD, PDA.**',
    '',
    '### Organisms',
    '- **Common: Streptococcus viridans · Enterococcus faecalis · Staphylococcus aureus.**',
    '- **HACEK group: Haemophilus, Aggregatibacter, Cardiobacterium, Eikenella, Kingella.**',
    '- Others: **Pseudomonas, Klebsiella**.',
    '',
    '### Clinical manifestations',
    '- **General: PROLONGED FEVER** · chills, headache, malaise, anorexia · easy fatigue · arthralgia and myalgia · **splenomegaly** · **petechiae in skin and mucous membranes** · **clubbing and splinter haemorrhages under the finger nails if the diagnosis is late**.',
    '- **Cardiac: tachycardia · NEW MURMURS OR A CHANGING CHARACTER OF AN EXISTING MURMUR · arrhythmias · acute or subacute congestive heart failure.**',
    '- **Embolic: major systemic and pulmonary emboli, infarcts and abscesses · haematogenous osteoarticular sepsis (spondylodiscitis) · mycotic aneurysms · intracranial ischaemic and haemorrhagic lesions · conjunctival haemorrhages · Janeway lesions.**',
    '- **Immunological: glomerulonephritis · Osler nodes · Roth spots.**',
    '',
    '### Investigation, diagnosis, treatment',
    '- **Leukocytosis, anaemia · raised ESR (may be LOW in CHF) and raised CRP · POSITIVE BLOOD CULTURE, MULTIPLE, repeated several times if negative · echo evidence of valve vegetations, new valve regurgitation and valve dehiscence · CT heart may detect a paravalvular abscess · urine: microscopic haematuria.**',
    '- **Diagnosis: MODIFIED DUKE CRITERIA — 2 major, or 1 major + 3 minor, or 5 minor.**',
    '- **Prophylaxis: antibiotic prophylaxis against bacterial endocarditis.**',
    '- **Culture positive: appropriate intravenous bactericidal antibiotics parenterally, in large doses, for 4 to 8 WEEKS.**',
    '- **Culture results unavailable: empirical intravenous antibiotics until they return.**',
    '- *Draw the cultures before the first dose (sequence not in course material).*',
    '',
    'Src: L36 slides 47–57, recovered from the deck’s .emf images'
  ].join('\n'),
  qs: ['pedhd-card-21']
},

{
  id: 'card-18', w: 'must',
  h: 'Rheumatic fever and rheumatic heart disease',
  body: [
    '*L37 is largely a picture deck — the Jones criteria, the treatment slide and the five clinical-picture slides are titles over images. What it states is below; the criteria and the drug regimens are supplied and tagged.*',
    '',
    '### The susceptible patient',
    '**Printed NINE TIMES on consecutive slides — the lecturer’s own emphasis, not nine facts.**',
    '- **Child 5 to 15 years.**',
    '- **Immunologic abnormality [HLA].**',
    '- **Endemic region · over-crowding.**',
    '- **Upper respiratory tract [throat – tonsils].**',
    '- **Group A streptococcal infection · rheumatogenic strain [M serotype].**',
    '- **Persistent infection [untreated].**',
    '',
    '### Presentation named on the deck',
    '- **Preceding pharyngitis – tonsillitis.**',
    '- **Acute illness: fever · body pains · pallor · rashes · raised ESR.**',
    '- **Polyarthritis · carditis · chorea · rash · subcutaneous nodules.**',
    '',
    '### The Jones criteria (Dr Duckett Jones)',
    '*Named on the deck and printed as an image; the content below is not in course material.*',
    '',
    '|Major (5)|Minor|',
    '|---|---|',
    '|**Carditis · Polyarthritis, migratory, large joints · Sydenham chorea · Erythema marginatum · Subcutaneous nodules**|**fever · arthralgia · raised ESR or CRP · PROLONGED PR INTERVAL on ECG**|',
    '',
    '**2 major, or 1 major + 2 minor, PLUS evidence of a preceding group A streptococcal infection.**',
    '',
    '### Proving the streptococcus',
    '- **Throat swab.**',
    '- **ASO test — a high anti-streptolysin O antibody titre.** Streptolysin O is the streptococcal antigen; the host makes anti-streptolysin O against it.',
    '- *The titre rises then falls over months, so one value is a snapshot.*',
    '',
    '### Recurrence, RHD and prophylaxis',
    '- **Recurrence follows a NEW group A streptococcal throat infection** — which is what secondary prophylaxis prevents.',
    '- **Valve lesions named: mitral regurgitation · mitral stenosis · aortic regurgitation · aortic stenosis.** *MR is the commonest acute lesion, MS the commonest late one (not in course material).*',
    '- **Diagnosis of RHD: history of rheumatic fever · a specific cardiac murmur · echocardiography.**',
    '',
    '|Severity|Secondary prophylaxis|',
    '|---|---|',
    '|**No RHD**|**10 years**|',
    '|**Mild RHD**|**to 40 years of age**|',
    '|**Moderate RHD**|**life-long, plus long-term medications**|',
    '|**Severe RHD**|**surgical valve repair or replacement**|',
    '',
    '- **Acute treatment** *(not in course material — the treatment slide is an image)*: **penicillin to eradicate the streptococcus · aspirin or NSAIDs for the arthritis · corticosteroids for severe carditis · bed rest**. **Secondary prophylaxis is intramuscular benzathine penicillin G every 3 to 4 weeks**, oral penicillin V if injection is refused.',
    '',
    'Src: L37 slides 7–37; the Jones table, the acute regimen and the benzathine schedule are not in course material'
  ].join('\n'),
  qs: []
}

    ]
  }
};
