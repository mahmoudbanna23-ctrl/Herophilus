/* renal — "Kidney and Urinary tract", Paediatrics. Written 2026-08-14 under
   START-HERE.md §14 (slide-density revision notes) + §14.3a (layout), and
   content\peds\theory-plan.md, whose ONE local override is that PAEDIATRICS
   HAS NO 3,000-WORD CAP: budget = max(lecture words, 25 x questions, 600).

   ─────────────────────────────────────────────────────────────────────────
   BUDGET — both terms measured from disk with `wc -w`, by line range.

   ⚠️ THE BRIEF'S CEILING FIGURE DOES NOT REPRODUCE, AND THE BRIEF'S OWN
   PER-FILE NUMBERS ARE WHAT DISPROVE IT. The hub gave 7,174 as the summed
   lecture words. Each per-file figure it quotes is exactly right; the total
   is not:

       38)UTI.txt                                          1,575 w
       39)Hematuria.txt                                    3,227 w
       40)Congenital anomalies of the kidneys ... .txt     1,414 w
       41)Proteinuria -1.txt                                 483 w
       ------------------------------------------------------------
       1575 + 3227 + 1414 + 483  =                         6,699 w

   475 words below the stated 7,174. Reported, not worked around. Either
   figure is a ceiling this chapter lands well below, so nothing about the
   writing changed — but the arithmetic is stated so the plan can be fixed.

   TERM 1 — what this chapter RESTS ON, by line range:

       L38) UTI
         · lines   3–467  body, end to end                 1,239 w
         · lines 468–511  the lecturer's three closing MCQs  333 w
             COUNTED: lecture slides carrying three facts the body does not
             print — a catheterised specimen goes for quantitative culture,
             no routine imaging after a first simple cystitis, and no VCUG
             after a normal RBUS in a first febrile UTI.
       L39) Hematuria
         · lines   3–777  body, end to end                 2,834 w
         · lines 778–819  the four closing cases             390 w
             COUNTED: impetigo as the APSGN trigger, exercise haematuria,
             and renal vein thrombosis in nephrotic syndrome.
       L40) CAKUT
         · lines   3–267  body, end to end                 1,012 w
         · lines 268–313  six MCQs with a printed answer key  198 w
         ⚠️ NOT CLAIMED: lines 314–331 (190 w) are the bibliography, which
           §14's own drop-list excludes.
       L41) Proteinuria -1
         · lines   3–138  body, end to end                    271 w
         · lines 139–179  three closing MCQs                  208 w
             COUNTED, and this is the important one: the charge-selective
             GBM glycosaminoglycan barrier, antithrombin III loss as the
             thrombosis mechanism, and the orthostatic-proteinuria work-up
             appear ONLY here — nowhere in the deck body. ⚠️ THE BRIEF'S
             WARNING THAT L41 IS "THIN, ~25 WORDS A PAGE" IS CORRECT FOR ITS
             BODY AND WRONG FOR THE FILE: its MCQ slides are 43 % of its
             words and carry its only mechanisms.

       = 6,485 words counted.
       (6,699 raw − 190 bibliography − 24 of file headers = 6,485. Reconciles.)

   TERM 2 — 25 x 26 linked questions = 650 words.

       max(6,485 · 650) = 6,485. TERM 1 GOVERNS, by a factor of ten.

   DIAGRAM-DECK CHECK (§14.1): words per non-blank line —
       L38  4.06 · L39  4.55 · L40  4.84 · L41  3.93.
   All four are ordinary prose decks, far above the ~2.0 that marks a
   labelled-diagram file. No diagram-deck correction applies, and TERM 2
   would not have rescued the budget anyway.

   ⚠️ ENTITY FLOOR, COUNTED BEFORE WRITING (§14.1's `ent-dysph` rule — state
   the expected size UP FRONT, not after four compression passes). This is a
   four-lecture SURVEY chapter, so the entity count is high and the question
   count is low — §14.1's "survey chapter defeats both terms" shape, except
   that here TERM 1 is large enough that the ceiling never binds:
     UTI (12) · haematuria and the glomerulonephritides (11) · proteinuria
     and nephrotic syndrome (5) · CAKUT (14) · question-driven with no deck
     at all (2: HUS, enuresis) = 44 entities x ~90 w = 3,960 w of floor.
     Grids costed at rows x columns: culture 15 cells · look-alike urine
     results 30 · glomerular vs extraglomerular 18 · cause tree 12 · APSGN
     sequelae 12 · nephrotic vs nephritic 18 · CAKUT diagnostic 15 ·
     dysgenesis 6 = ~350 w of cells.
     PREDICTED 4,100–4,600 body words.

   ⚠️ MEASURED OUTCOME, counted with node ON THE FILE AS IT STANDS ON DISK
   AFTER THE FINAL EDIT (§14.1's `ent-rhin` / `ent-vocal` warning — the
   header is a claim, the file is the fact, and a per-section sum that
   reconciles proves only that the numbers came from ONE state of the file,
   never that it was the LAST state). This paragraph was rewritten twice
   because the earlier drafts of it described a file that no longer existed:

       body strings                5,296 words
       + headings and the flowchart  276 words
       = 5,572 words all-in, over 17 sections · intro 40 words · 26/26 linked

     Per section, BODY STRINGS ONLY, measured after the last edit:
       ren-1  217 · ren-2  284 · ren-3  258 · ren-4   29 · ren-5  323
       ren-6  297 · ren-7  371 · ren-8  222 · ren-9  332 · ren-10 528
       ren-11 338 · ren-12 324 · ren-13 430 · ren-14 398 · ren-15 283
       ren-16 297 · ren-17 365          (sum 5,296 — reconciles)
     ren-4 is small on purpose: its content is the treatment flowchart, 105
     of the 276 non-body words.

   ⚠️ THREE COMPRESSION PASSES WERE RUN, 5,948 → 5,296 body words (−652,
   −11.0 %), with NO PROTECTED FACT TOUCHED. The first draft measured 5,948
   — 92 % of the lecture it summarises, which is not telegraphic notes, it
   is a retyped lecture. Pass yields were 339, 165 and 78 words, then the
   §14.3a layout split ADDED 38 back (see below). **A third pass returning
   78 words is close to §14.1's "the fat is gone" signal.** What went: the
   UTI imaging table, which restated ren-16's modality table (now three
   timing lines and a pointer) · ren-16's lesion-by-lesion surgery list,
   which restated ren-15 (now a pointer) · framing and connective sentences
   throughout · ~40 long table cells rewritten as fragments · the
   atypical-HUS, Wilms and stone paragraphs cut to the clause each question
   turns on · APSGN's three-column laboratory table and four-row "not
   recommended" table compressed to fragments.

   ⚠️ THE LAST EDIT RAISED THE COUNT, AND THAT IS §14.1 RULE (2) IN ACTION.
   §14.3a bans the `·`-chained slab, so eight bullets over 45 words were
   split into sub-bullets. Audited afterwards: **0 paragraphs or bullets
   over 45 words remain.** The split cost +38 words and buys the layout the
   renderer needs. Words and pages move in opposite directions with format
   and neither may be optimised against — reported, not hidden.

   ⚠️ WHERE IT LANDS, AND THE BILL, STATED RATHER THAN PAID BY A DELETION:
     · 1,189 under the measured 6,485 ceiling (18.3 % under).
     · 1,878 under the brief's stated 7,174 (26.2 % under).
     · **296 words OVER the top of the 3,500–5,000 band the hub asked for
       (+5.9 %)**, and above the entity-floor prediction of 4,100–4,600 by
       15 %. **~22 printed pages at the /240 estimator.** REPORTED.
     · Reaching 5,000 costs 296 words. Only ~105 of those are droppable
       under §14's own drop-list — APSGN's incidence numbers (27 w), HSP's
       incidence numbers (30 w), CAKUT's branching/nephron/signalling
       numbers (30 w) and atypical HUS (17 w), none of which any of the 26
       questions asks. **They were KEPT deliberately**: §14.2 rule 1 is the
       primary rule and these are numbers the lecturer states, which is
       §14.2 test 4. The hub may cut them for one line of gain each.
     · The remaining ~190 words could only come from protected lecture
       facts — the four "not recommended" historical measures (which one of
       L39's own embedded MCQs tests directly), L39's drug and food lists,
       or the CAKUT embryology. **I did not cut them.**
     · Why it is large at all: this is a FOUR-DECK survey chapter with 44
       entities against 26 questions, so §14.2's LECTURE side of the floor
       governs throughout and TERM 2 never contributes. The bank tests under
       a third of what the decks state.

   ─────────────────────────────────────────────────────────────────────────
   FLOOR KEPT BOTH WAYS — every fact, number, list, eponym and classification
   the counted ranges state, plus every one of the 26 questions' KEY and
   DISCRIMINATOR as a line or a table cell. All 26 ids linked; none dropped.

   ⚠️ FIVE GAPS, ANSWERED AND TAGGED rather than declared (§4a / CLAUDE.md
   §4). Each was greped across ALL 64 cached paediatric decks before being
   called a gap — "read the slide before declaring a gap":

     · HAEMOLYTIC URAEMIC SYNDROME. Two questions turn on it. `HUS` appears
       in seven decks but only ever as a word in a list — L39 names it once
       in the cause tree and once as a cause of intravascular haemolysis, and
       `23).1) Acute diarrhea` names it only as an indication for stool
       culture. `haemolytic` = 0 hits · `schistocyt` = 0 · `shiga` = that one
       stool-culture line. NO DECK DESCRIBES THE SYNDROME. Written and tagged
       in ren-12.
     · ENURESIS. One question. `enures` returns exactly two hits, both
       endocrine: `51) DKA` pairs "Polyuria and enuresis" against a DDx of
       "UTI", and the diabetes deck lists "Nocturnal enuresis" among the
       presenting features of type 1 diabetes. ⚠️ THAT IS A REAL HIT AND IT
       IS THE WHOLE ANSWER TO THE QUESTION — one dipstick screens for
       infection and glucose at once. The reasoning is therefore SOURCED and
       cited; only the primary/secondary definitions and the test ordering
       are supplied and tagged, in ren-17. `bedwet`, `bed-wet` and `wetting`
       all return 0.
     · PROTEUS, UREASE AND STRUVITE STONES. One question. `urease` and
       `struvite` both return 0 corpus-wide. L38 prints Proteus twice — the
       organism list and the flora beneath the prepuce — so the ORGANISM is
       sourced; only the stone mechanism is supplied and tagged, in ren-17.
     · NITRITE'S FALSE NEGATIVE. L38 prints the nitrate-to-nitrite chemistry
       but never says a negative nitrite fails to exclude UTI, which one
       question turns on. Supplied and tagged in ren-3.
     · WILMS TUMOUR. One question offers it as the mass distractor.
       ⚠️ `wilms` and `nephroblastoma` return hits in EXACTLY ONE FILE — L39,
       this chapter's own deck, where it is a single cell of the cause tree.
       The `malignant` chapter's two decks (`48)Leukemias`,
       `49)Rhabdomyoma and Brain Tumors Overview`) DO NOT MENTION IT. It is
       therefore NOT deferred there: deferring a fact to a chapter whose
       decks cannot deliver it would make the register a record of fiction
       (§14.5). The one-line discriminator stays here, in ren-8 and ren-17,
       and the finding is reported to the hub instead.

   MY OWN DEFERRALS (§14.5) — named, so each is a promise, not a deletion.
   Every one was checked against all 26 of this chapter's questions: none
   tests it beyond the clause kept here.
     · TYPE 1 DIABETES AS AN ENTITY — polyuria, polydipsia, weight loss, the
       DKA presentation. KEPT HERE: only "nocturnal enuresis and polyuria can
       be the first sign of diabetes, so the dipstick reads glucose too".
                                                              -> `endocrine`
     · ACUTE INFECTIVE DIARRHOEA AS A SUBJECT — the pathogen list,
       Shiga-toxin E. coli, rehydration, zinc. KEPT HERE: only bloody
       diarrhoea as the HUS trigger, and stool culture as its indication.
                                                        -> `gastroenterology`
     · SYSTEMIC BLEEDING DISORDERS as a differential of red urine — ITP, the
       coagulopathies, the clotting screen. KEPT HERE: only their place in
       the extraglomerular cause list, and the normal-clotting discriminator
       that separates HUS from DIC.                          -> `haematology`
     · WILMS TUMOUR / BLADDER RHABDOMYOSARCOMA as entities. ⚠️ SEE ABOVE —
       recorded as a FINDING, NOT as a register row, because `malignant`'s
       decks do not carry them. If the hub can source them, that is where
       they belong.                             -> `malignant` (NOT PROMISED)

   OMISSION NOTE — cut on purpose, each a decision on the record:
     1. Distractor-by-distractor rejection (§14.2). It lives in each
        question's own `explanation`, one tap away through `qs`. Kept only
        where the teaching point IS the discrimination, and every one of
        those is a table: the four look-alike urine results (ren-3),
        glomerular vs extraglomerular (ren-7), the APSGN/IgAN clock (ren-9,
        ren-11), HUS against its look-alikes (ren-12), nephrotic vs nephritic
        (ren-13).
     2. Question ids in body text, teaching voice, bank meta-commentary,
        per-fact citation clauses (one `Src:` line per section), closing
        summary sections.
     3. L40's bibliography (190 w) and L39's one web attribution.
     4. L38's SUMMARY slide (lines 455–467) restates the body; its two
        genuinely additive clauses — the 24–48 hour window for testing an
        unexplained fever, and "diagnosis can't be confirmed without the
        culture" — are written into ren-2 and ren-3.
     5. Drug doses the material does not state. Furosemide 1–2 mg/kg/day and
        fluid 400 mL/m²/day ARE printed and are kept; no dose is invented for
        prednisolone, co-amoxiclav, trimethoprim or nitrofurantoin.
     6. L39's slide-title fragments with no content under them ("Terrifying";
        "Monitoring IgA Vasculitis Patients / Analgesia", whose one word of
        content is kept in ren-11).
     7. APSGN's pure epidemiology is compressed to one line rather than
        dropped: 500,000 cases / 5,000 deaths / >90 % from disadvantaged
        areas / sporadic with camp and military clusters. §14 permits
        dropping epidemiology with no bearing on an answer; these are
        lecture-stated numbers and cost one fragment, so they stay.
     8. Mechanism deeper than the decks go: the complement cascade beyond C3
        and C4, IgA glycosylation, and CAKUT genetics beyond "at least 16
        signalling agents".

   ⚠️ NO DEFECT NOTES. All 26 questions come from one bank (House,
   `pediatric .pdf`); no key in the set contradicts the four decks or another
   key in the set. Two keys rest on facts the decks do not print
   (Proteus/struvite, enuresis beyond the diabetes clause) — those are tagged
   gaps, not defects.

   Table pipes carry no padding — mdCells() trims outer delimiters.
   Curly apostrophes throughout: a straight one closes a single-quoted field.
   Deck shorthand in `Src:` lines — L38 UTI · L39 Hematuria · L40 CAKUT ·
   L41 Proteinuria. */

var THEORY_PEDS_RENAL = {
  'renal': {

    intro: 'Four decks, one habit of mind: prove the infection with a culture, prove the blood is blood and say where it comes from, separate heavy protein from active sediment, and remember that half of these children have a malformation underneath.',

    sections: [

{
  id: 'ren-1', w: 'must',
  h: 'UTI — the two syndromes, who gets it, and what grows',
  body: [
    '**UTI:** infection in any part of the urinary tract. **Two clinical categories.**',
    '',
    '|  |**Pyelonephritis (upper)**|**Cystitis (lower)**|',
    '|---|---|---|',
    '|Fever|**Febrile, systemic**|**Usually afebrile**|',
    '|Criteria|Bacteriuria + fever **≥ 38 °C**, or loin pain/tenderness with any fever|Dysuria, frequency, **no systemic upset**|',
    '|Risk|**Scars the growing kidney**|No scarring risk|',
    '',
    '### Why it matters',
    '- **One of the most common and most serious bacterial infections in children.**',
    '- **⚠️ 50 % have a structural abnormality of their urinary tract.**',
    '- Pyelonephritis **scars** the growing kidney → **hypertension**, and **progressive CKD if bilateral**.',
    '- **All symptomatic infant UTIs: diagnose and treat promptly to reduce scarring.**',
    '',
    '### Who gets it — the sex ratio inverts at one year',
    '',
    '|  |**Infants < 1 year**|**Children > 1 year**|',
    '|---|---|---|',
    '|Sex|**Male > female**|**Female > male**|',
    '|Why|**Higher risk of congenital anomalies**|**Short, straight urethra**|',
    '',
    '**Raised risk at any age:** uncircumcised male · toilet training · **constipation** · dysfunctional or infrequent voiding · external irritation (tight clothing, pinworm).',
    '',
    '### Route and organism',
    '- **Ascending:** bowel flora → perineum → urethra → bladder.',
    '- **Gram-negative bacilli. E. coli 75–90 %** · Klebsiella · Proteus · Pseudomonas · Enterococcus faecalis.',
    '- **Proteus** — flora beneath the prepuce, i.e. the **uncircumcised** boy.',
    '- **Pseudomonas** — **urinary stasis**: obstructive uropathy, infrequent voiding, **VUR**, constipation, labial adhesion, neuropathic bladder.',
    '- **Candida** — urethral catheterisation and stents.',
    '',
    'Src: L38'
  ].join('\n'),
  qs: ['pedhd-renal-2','pedhd-renal-4','pedhd-renal-23','pedhd-renal-24']
},

{
  id: 'ren-2', w: 'must',
  h: 'How UTI presents, and getting a sample worth culturing',
  body: [
    '### Infants and pre-verbal children',
    '- **Fever may be the only manifestation. Threshold > 38 °C.**',
    '- **Suspect UTI if no other source of fever is found** — the younger the child, the less able to localise infection.',
    '- **⚠️ Test urine in EVERY infant with unexplained fever > 38 °C, within 24–48 hours.**',
    '- Symptoms non-specific · **fever usually but not always present** · **septicaemia may develop rapidly**.',
    '',
    '### Verbal children',
    '- **Dysuria · frequency · urgency or hesitancy · new onset or recurrence of incontinence.**',
    '- **DDx of those symptoms:** cystitis · vulvitis · balanitis · **constipation** · **sexual abuse**.',
    '- **UTI is the most common cause of haematuria**, seldom the only symptom.',
    '',
    '### Collecting the sample',
    '- **Collect urine BEFORE antibiotics**, unless severe sepsis.',
    '- **⚠️ If systemically unwell, do NOT delay treatment to obtain a specimen.**',
    '',
    '|Child|Methods|',
    '|---|---|',
    '|**Toilet-trained**|**Midstream clean-catch sample**|',
    '|**Not toilet-trained**|**Clean catch by the "quick-wee" technique** · adhesive plastic bag · **urethral catheter** · **suprapubic aspiration**|',
    '',
    '### What to ask, and what to look for',
    '- **Past history:** chronic urinary symptoms — incontinence, lack of proper stream, frequency, urgency, **withholding manoeuvres** · previous undiagnosed febrile illnesses.',
    '- **Family history:** previous UTI · chronic constipation · **VUR — familial in 30–50 %** · genitourinary abnormalities · renal failure · antenatally diagnosed renal abnormality · poor growth.',
    '- **Examination:** record urine flow · **BP and temperature** · growth parameters · abdominal masses (bladder, faecal, renal).',
    '- **Perineum and genitalia:** girls — labial adhesions, vulvovaginitis; boys — foreskin, meatal stricture.',
    '- **If incontinent:** **spinal lesions, perineal sensation, anal tone, lower-limb power and sensation**. Consider **sexual abuse**.',
    '- **Bloods only if seriously unwell:** serum electrolytes, blood cultures, insert a cannula.',
    '',
    'Src: L38'
  ].join('\n'),
  qs: ['pedhd-renal-1','pedhd-renal-14','pedhd-renal-16','pedhd-renal-24']
},

{
  id: 'ren-3', w: 'must',
  h: 'Dipstick, microscopy, culture — what confirms a UTI and what does not',
  body: [
    '### Dipstick — the screening test for all symptomatic children, whatever their age',
    '- **NITRITE = bacteriuria.** Gram-negative bacteria **reduce urinary nitrate to nitrite**, which reacts to form a coloured **azo dye**.',
    '- **LEUKOCYTE ESTERASE = pyuria** — the enzyme of white cells. The strip also reads **protein and glucose**.',
    '- *A negative nitrite does not exclude UTI: nitrate reduction needs hours of bladder dwell time, and a frequently voiding child never provides it (not in course material).*',
    '',
    '### Microscopy',
    '**Bacteriuria** ± haematuria · **pyuria** ± **WBC or granular casts**.',
    '',
    '### Culture — the only thing that confirms',
    '',
    '|Method|Colony count|Probability|',
    '|---|---|---|',
    '|**Suprapubic**|**Any number**|**99 %**|',
    '|**Catheter**|Any number|**95 %**|',
    '|**Midstream, 1st**|**> 10⁵ CFU/mL**|**90 %**|',
    '|**Midstream, 2nd**|> 10⁵ CFU/mL|**95 %**|',
    '|**Bag specimen**|—|**⚠️ UNACCEPTABLE**|',
    '',
    '- **CONFIRMED UTI: a proper CFU count of a SINGLE organism per mL, in a properly collected specimen, PLUS pyuria or bacteriuria, in a SYMPTOMATIC child.**',
    '- **CONTAMINATION:** growth of **MIXED organisms**. If in doubt, collect another sample.',
    '- **ASYMPTOMATIC BACTERIURIA:** positive culture with **no manifestations of infection. Benign, does not cause renal injury — except in pregnant women. Do NOT treat with antibiotics.**',
    '- **⚠️ Clinical picture and urinalysis can SUSPECT a UTI; it cannot be confirmed without the culture.**',
    '',
    '### Four results that look alike',
    '',
    '|WBC|RBC|Organisms|Casts|Culture|Verdict|',
    '|---|---|---|---|---|---|',
    '|100/mm³|none|**none seen**|none|**bag, unavailable**|**Contamination** — invalid sample, and the fever has a source|',
    '|< 50/mm³|none|none seen|none|**mixed coliforms**|**Contamination** — mixed growth, fever from the chest|',
    '|> 200/mm³|many|none seen|none|**> 10⁵ coliforms**|**UTI** — heavy pyuria, single organism, symptomatic|',
    '|50–100/mm³|many|none seen|**RBC casts seen**|**negative at 48 h**|**Glomerulonephritis** — casts plus a sterile culture|',
    '',
    'Src: L38'
  ].join('\n'),
  qs: ['pedhd-renal-10','pedhd-renal-11','pedhd-renal-12','pedhd-renal-13','pedhd-renal-14','pedhd-renal-16']
},

{
  id: 'ren-4', w: 'must',
  h: 'Treating a UTI — age first, then upper or lower',
  body: [
    '- **Initiate immediately after the culture is drawn — this reduces the severity of renal scarring.**',
    '- **Empirical initially, changed as per the culture and sensitivity report.**',
    '',
    'Src: L38'
  ].join('\n'),
  flow: {
    title: 'Immediate treatment by age and level',
    steps: [
      { k:'alert', t:'Under 3 months, suspected UTI or severely ill: IV antibiotics (co-amoxiclav) at least 5–7 days, THEN prophylaxis', n:'Septicaemia develops rapidly at this age' },
      { k:'decision', t:'Over 3 months: bacteriuria + fever ≥ 38 °C, or loin pain/tenderness with any fever?', yes:'UPPER UTI — pyelonephritis', no:'Dysuria with no systemic manifestations — LOWER UTI (cystitis)' },
      { k:'decision', t:'Upper UTI — any concern about sepsis?', yes:'IV antibiotic 2–4 days, then oral to complete 7–10 days', no:'Oral antibiotics for 7 days' },
      { k:'step', t:'Lower UTI (cystitis): oral antibiotic for 3–5 days', n:'No scarring risk, so the course is short' }
    ]
  },
  qs: ['pedhd-renal-5','pedhd-renal-2']
},

{
  id: 'ren-5', w: 'must',
  h: 'After the infection — classify it, image it, prevent the next one',
  body: [
    '### Classify',
    '- **SIMPLE UTI: responds to treatment within 48 hours.**',
    '- **ATYPICAL UTI — six criteria:** seriously ill or septicaemia · **poor urine flow** · abdominal or bladder mass · **raised creatinine** · **failure to respond to suitable antibiotics within 48 hours** · **infection with an atypical (non-E. coli) organism**.',
    '- **RECURRENT UTI — any one of three:** **≥ 2 episodes of acute pyelonephritis** · **≥ 1 pyelonephritis + ≥ 1 cystitis** · **≥ 3 episodes of cystitis**.',
    '',
    '### Image — the timing is the examinable part',
    '- **ULTRASOUND: 6 weeks after treatment**, brought forward to **48–72 hours** for an acute complication or no improvement (**atypical UTI**). **Kidney size, number, location · hydronephrosis · bladder anomalies · post-void residual. NOT the gold standard for scars.**',
    '- **MCUG / VCUG: 2–3 weeks after treatment. Detects VUR.** Indicated for **suspected urethral obstruction on US (abnormal bladder in a boy)**, suspected VUR, another US abnormality, voiding problems, **recurrent febrile UTI**.',
    '- **DMSA or MAG-3: functional. Chronic scar = irregular borders and scarring.**',
    '- *Modality strengths, weaknesses and the 2-month DMSA rule: ren-16.*',
    '- *No routine imaging after a first simple cystitis; no routine VCUG after a first febrile UTI with a normal ultrasound.*',
    '',
    '### Prevent',
    '- **(I) Wash out ascending organisms: high fluid intake · regular voiding · double voiding · address constipation · perineal hygiene.**',
    '- **(II) Reduce aggressive organisms** in stool, perineum and under the foreskin: **Lactobacillus acidophilus** probiotic · **antibiotic prophylaxis — controversial** · **circumcision**.',
    '',
    '### Follow-up of recurrent UTI, scarring or reflux',
    '- **Dipstick with any non-specific illness**, to rule out a UTI.',
    '- Prophylactic antibiotics (controversial) · circumcision in boys.',
    '- **Urodynamics → clean intermittent catheterisation if neuropathic bladder.**',
    '- **Anti-VUR surgery** if scarring progresses with higher-grade VUR.',
    '- **BP monitoring** with dysplasia or scars.',
    '- **Urinalysis for proteinuria — a marker of CKD progression.**',
    '- Regular renal growth and function assessment if the defects are bilateral.',
    '',
    'Src: L38; L40'
  ].join('\n'),
  qs: ['pedhd-renal-15','pedhd-renal-17','pedhd-renal-23']
},

{
  id: 'ren-6', w: 'must',
  h: 'Haematuria — the numbers, and whether it is blood at all',
  body: [
    '**Haematuria:** an increased number of RBCs in urine.',
    '',
    '|  |**Gross**|**Microscopic**|',
    '|---|---|---|',
    '|Appearance|**Visibly discoloured — pink, red, dark brown, tea-coloured**, ± small or large **blood clots**|Not visible; found only on **microscopy or dipstick**|',
    '',
    '**⚠️ THE DEGREE OF HAEMATURIA BEARS NO RELATIONSHIP TO THE SERIOUSNESS OF THE UNDERLYING CAUSE.**',
    '',
    '### Thresholds — and the definition is contested',
    '- **Persistent > 5 RBCs/hpf** in **uncentrifuged** urine.',
    '- **Or > 10 RBCs/hpf** on microscopy of **10–15 mL freshly voided, centrifuged** urine.',
    '- **Or a 1+ positive dipstick.**',
    '- Healthy children have occasional red cells. **A single examination is positive in 4–6 % of school children — retest. Only 0.5 % persist on repeat samples 2–3 weeks apart.**',
    '',
    '### The dipstick detects HAEM, not RBCs',
    '- It uses the **pseudo-peroxidase activity of haemoglobin (or myoglobin)** to produce an **oxidised chromogen, green-blue**.',
    '- **⚠️ It does not differentiate haematuria, haemoglobinuria and myoglobinuria.**',
    '- **Dipstick positive + RBCs on microscopy = haematuria. Dipstick positive + low or absent RBCs = haemoglobinuria or myoglobinuria.**',
    '- **⚠️ RBCs lyse rapidly in dilute or acidic urine** — a negative microscopy counts only **promptly, on a freshly voided specimen**.',
    '',
    '### Red urine with < 5 RBCs/hpf — the mimics',
    '',
    '|Haem POSITIVE|Haem NEGATIVE|',
    '|---|---|',
    '|**Haemoglobinuria** — intravascular haemolysis (**HUS, favism**)|**Urobilinogen** — haemolytic anaemia (favism) · **bilirubinuria** — direct bilirubin in obstructive jaundice|',
    '|**Myoglobinuria** — rhabdomyolysis (crush injury)|**Foods** — beets, rhubarb, artificial cereals, drinks and red dyes · **drugs** — methyldopa, rifampicin · **metabolites** — urates, porphyrin|',
    '',
    '### Transient haematuria',
    '- After **fever, illness or extreme exertion** — transient microscopic haematuria and mild proteinuria.',
    '- **Repeat the dipstick and microscopic urinalysis TWICE within 2 weeks of the initial result.**',
    '- **Resolves → no further tests. Persists on at least two of the three consecutive samples → further evaluation.**',
    '',
    'Src: L39'
  ].join('\n'),
  qs: ['pedhd-renal-3','pedhd-renal-13']
},

{
  id: 'ren-7', w: 'must',
  h: 'Glomerular or not — the discriminators, and the red flags',
  body: [
    '**Four questions, in order.** 1 Haematuria, or just red urine? 2 Only haematuria, or **bleeding elsewhere** — a systemic bleeding disorder? 3 Where does it originate? 4 How to settle it?',
    '',
    '|Feature|**GLOMERULAR**|**EXTRA-GLOMERULAR**|',
    '|---|---|---|',
    '|**Colour**|**Cola / tea-coloured / brown / burgundy**|**Bright red**|',
    '|**Clots**|Absent|**⚠️ BLOOD CLOTS ARE PATHOGNOMONIC of lower urinary tract origin**|',
    '|**RBC morphology**|**Dysmorphic > 20 %** — different sizes and shapes, **acanthocytes**|**Isomorphic** — renal tubulo-interstitial, or extrarenal (tract, bleeding diathesis)|',
    '|**Casts**|**⚠️ RBC CASTS ARE PATHOGNOMONIC of glomerular origin**|Absent|',
    '|**Protein**|**> 100 mg/dL indicates glomerular origin**|Absent or trace|',
    '|**Pain**|**Typically painless** — flank pain only when acute or unusually severe|Dysuria, or colic radiating to the groin|',
    '',
    '*Morphology by phase-contrast microscopy on freshly voided urine; casts on fresh urine, or acidic urine stored at 4 °C. Even so, morphology is **not sensitive enough to unequivocally delineate the site**.*',
    '',
    '### History pointing at the glomerulus',
    '- **Pharyngitis or URTI 2–3 weeks ago → post-streptococcal GN. 1–2 days ago → IgA nephropathy.** Also **recent skin infection**, **recent gastrointestinal infection**.',
    '- **Oedema** (morning puffiness, generalised) · **oliguria** · **hypertension** — headache, mental status change, diplopia, epistaxis · **volume overload / heart failure** · fatigue, rash, arthralgia.',
    '',
    '### History pointing lower down',
    '- **UTI** — dysuria, frequency, abdominal pain; **flank pain with fever and rigors = acute pyelonephritis**.',
    '- **Urolithiasis** — unilateral flank pain **radiating to the groin**.',
    '- Vulvovaginitis · surgery or trauma **including non-accidental injury** · sexual activity and STDs · **menarche** · exercise.',
    '- **Drugs:** rifampicin, metronidazole, nitrofurantoin, NSAIDs, cyclophosphamide, anticoagulants, OTC medicines, **calcium or vitamin D**, herbals. **Foods:** beetroot, berries, candies.',
    '- **Personal or family history:** **bleeding disorder** · **sickle cell disease or trait** · haematuria · renal disease · stones · **visual or hearing loss** · hypertension · intracerebral bleed · polycystic kidney disease · coagulopathy.',
    '',
    '### Examination',
    '**Manual BP against age, sex and height centiles** · **oedema and ascites** · chest, heart, hepatomegaly · weight and height · eyes, skin, genitalia, joints · abdominal masses · **malformations (VATER)**.',
    '',
    '**⚠️ Child abuse must always be suspected in the child with unexplained perineal bruising and haematuria.**',
    '',
    '### Red flags — may need URGENT referral to paediatric nephrology',
    '**Haematuria AND any of: proteinuria · hypertension · fluid overload (oedema, ascites) · deranged renal function.**',
    '',
    'Src: L39'
  ].join('\n'),
  qs: ['pedhd-renal-3','pedhd-renal-13','pedhd-renal-20']
},

{
  id: 'ren-8', w: 'high',
  h: 'The causes of haematuria — the tree, the newborn, and the recurrent bleeder',
  body: [
    '',
    '|**GLOMERULAR**|**EXTRA-GLOMERULAR — upper tract**|**EXTRA-GLOMERULAR — lower tract**|',
    '|---|---|---|',
    '|**Familial:** thin basement membrane disease · **Alport syndrome**|**Tubulo-interstitial:** interstitial nephritis|**Urinary tract infection**|',
    '|**Glomerulonephritis:** acute post-infectious GN (**APSGN**) · MPGN · **SLE** · **IgA nephropathy** · **IgA vasculitis (HSP)** · sickle cell glomerulopathy|**Anatomic:** polycystic kidney disease · **tumour (Wilms)**|**Hypercalciuria** · **renal calculi** · trauma/instrumentation|',
    '|**Haemolytic uraemic syndrome**|**Vascular: renal vein thrombosis** · **nutcracker syndrome**|Structural abnormality of ureter or bladder (**PUJO**) · **bladder rhabdomyosarcoma** · systemic bleeding disorder · perineal irritation · vaginal bleeding / menarche · rectal fissures · **factitious**|',
    '',
    '### Two anchors the examiner keeps returning to',
    '- **The most common cause of GROSS haematuria in children is bacterial or viral urinary tract infection.**',
    '- **Most acute glomerulonephritis in children is post-infectious**, most commonly after **group A β-haemolytic streptococcal** infection of **throat or skin**.',
    '',
    '### Haematuria in the NEWBORN — a different list',
    '**Renal vein thrombosis · renal artery thrombosis · autosomal recessive polycystic kidney disease · obstructive uropathy · urinary tract infection · bleeding and clotting disorders · trauma, bladder catheterisation.**',
    '',
    '### Recurrent GROSS haematuria — five causes',
    '**IgA nephropathy · Alport syndrome / thin glomerular basement membrane disease · idiopathic hypercalciuria · nutcracker syndrome · exercise.**',
    '',
    '- **⚠️ Recurrent macroscopic episodes, with or without red flags, and no identifiable cause → consider RENAL BIOPSY.**',
    '- *Stone and Wilms as discriminators: ren-17.*',
    '',
    'Src: L39'
  ].join('\n'),
  qs: ['pedhd-renal-3','pedhd-renal-8','pedhd-renal-19']
},

{
  id: 'ren-9', w: 'must',
  h: 'APSGN — the trigger, the clock, and what the child looks like',
  body: [
    '**Acute post-streptococcal glomerulonephritis: immune-complex nephritis after nephritogenic group A β-haemolytic streptococci (GAHS).**',
    '',
    '### The two portals of entry',
    '- **SKIN** — pyoderma / impetigo, **M types 47, 49, 55**; also **scarlet fever**. **Warm weather.**',
    '- **THROAT** — pharyngitis, **M types 1, 2, 4, 12**. **Cold weather.**',
    '- **Pathogenesis:** nephritogenic strains → **antibodies to streptococcus (anti-streptolysin O) form in the circulation** → immune-complex deposition.',
    '',
    '### Epidemiology',
    '- **Commonest cause of acute nephritic syndrome / acute GN in children**, and one of the commonest **glomerular** causes of gross haematuria.',
    '- **Age 2–18 years, peak 6–8. Uncommon under 3** — less streptococcal carriage, possibly immune factors. **Boys 2:1.**',
    '- **500,000 cases and 5,000 deaths annually; > 90 % from economically disadvantaged areas.** Usually sporadic; epidemics and household clusters (camps, military) where baseline rates are high.',
    '',
    '### ⚠️ The latent period IS the diagnosis',
    '',
    '|Preceding infection|Latent period|',
    '|---|---|',
    '|**Streptococcal pharyngitis**|**1–2 weeks**|',
    '|**Streptococcal pyoderma**|**3–6 weeks**|',
    '|Overall range|**1–6 weeks**|',
    '',
    '*Subclinical disease blurs the timing. Contrast IgA nephropathy — gross haematuria within **1–2 DAYS** of the URTI.*',
    '',
    '### Clinical characteristics at presentation — the spectrum runs from asymptomatic to kidney failure',
    '- **Haematuria** — asymptomatic microscopic, or **gross, painless, brown, smoky, tea-like or cola-like**.',
    '- **Hypertension 60–75 %** — mild to moderate, **subsides after diuresis**; **encephalopathy 5–10 %**.',
    '- **Azotaemia / raised creatinine 30–40 %. Oliguria 25–35 %.**',
    '- **Oedema** — mild, **face, periorbital, extremities**; ascites and anasarca if kidney or heart failure supervenes.',
    '- **Proteinuria** — usually normalises after 4 weeks; **nephrotic syndrome in < 5 %**.',
    '',
    '### Serious sequelae',
    '',
    '|Complication|Frequency|Detail|',
    '|---|---|---|',
    '|**Encephalopathy / seizures**|**5–10 %**|**Related to the hypertension** — blurred vision, severe headache, altered mental status and coma, convulsions|',
    '|**Pulmonary oedema / CHF**|**5–15 %**|**CXR changes up to 50 %.** From HTN or hypervolaemia: respiratory distress, orthopnoea, cough, tachycardia, tachypnoea, **tender hepatomegaly**, gallop, decreased breath sounds, rales, hypoxaemia|',
    '|**Electrolytes**|—|**Hyperkalaemia**|',
    '|**Dialysis**|**1–2 %**|**Most often RPGN** — hyperkalaemia, hyperphosphataemia, hypocalcaemia, acidosis, seizures, uraemia|',
    '',
    '*Acute hypertension harms by its severity, the **absolute change from baseline**, and **the rate of rise**.*',
    '',
    'Src: L39'
  ].join('\n'),
  qs: ['pedhd-renal-20','pedhd-renal-13']
},

{
  id: 'ren-10', w: 'high',
  h: 'APSGN — confirming it, treating it, and what NOT to do',
  body: [
    '### Laboratory investigations',
    '- **Evidence of GN:** urinalysis — **rusty (smoky) / tea-coloured · dysmorphic RBCs · RBC casts · STERILE PYURIA · proteinuria** (mild to moderate; UPC normal to nephrotic).',
    '- **KFT may be impaired**, but a significant fall in GFR is unlikely in children.',
    '- **Hyperkalaemia, hypocalcaemia, metabolic acidosis and hyponatraemia: only in severe patients.**',
    '- **Evidence of preceding strep:** skin and throat swab · **high ASOT** (throat) · **anti-DNAse B titre** (skin).',
    '- **Aetiology: activation of the ALTERNATE complement pathway · C3 decreased in 90 %, normal again within 6–8 WEEKS · serum C4 typically NORMAL.** FBC: **mild normochromic anaemia** from haemodilution and low-grade haemolysis.',
    '- **⚠️ C3 DEPRESSION IS THE MOST COMMON POSITIVE LAB FINDING.**',
    '- **Imaging:** CXR if needed · kidney ultrasound considered · **MRI brain for PRES — parieto-occipital areas on T2**.',
    '',
    '### Histology',
    '- **LM: diffuse proliferative (exudative) GN** — early PMN infiltration, **endothelial proliferation occluding capillaries**, mesangial proliferation, **crescents in severe cases** (otherwise uncommon).',
    '- **IF: diffuse C3 and IgG, "starry sky". EM: subepithelial electron-dense HUMPS**, plus subendothelial deposits.',
    '',
    '### Kidney biopsy — eight indications',
    '- **1 —** severe renal impairment (**RPGN**). **2 —** nephrotic syndrome.',
    '- **3 —** **normal C3**. **4 —** no evidence of streptococcal infection.',
    '- **5 —** persistent gross haematuria or significant proteinuria **> 2 months**.',
    '- **6 —** persistent impaired kidney function **> 2 months**.',
    '- **7 —** persistent microscopic haematuria or any proteinuria **> 6–12 months**.',
    '- **8 —** persistent hypocomplementaemia **> 3 months**.',
    '',
    '### Treatment',
    '- **Hospital for complicated cases** — renal failure, heart failure, encephalopathy.',
    '- **Supportive: salt restriction · fluid restriction, intake = insensible (400 mL/m²/day) + urine output · rest during the oliguric phase · avoid volume depletion and nephrotoxins.**',
    '- **Oedema and hypertension: furosemide 1–2 mg/kg/day** plus salt and fluid balance; **CCB (nifedipine)**.',
    '- **Renal failure:** fluid balance, diuretics, **dialysis if severe**. **RPGN: pulse IV methylprednisolone**, the most common therapy.',
    '- **Heart failure:** preload reduction (diuretics) · afterload reduction (**CCB, ACE inhibitors**) · inotropes (**dopamine — digitalis should be avoided**). **Hypertensive encephalopathy: IV hydralazine or nitroglycerin.**',
    '',
    '### ⚠️ Four historical measures that are NOT recommended',
    '- **Antibiotics to the patient — rare**, only for an **active bacterial infection at diagnosis. Antibiotics do not alter the course of the GN.**',
    '- **Antibiotics to the family — no**, except epidemics, a known carrier, a vulnerable contact.',
    '- **Protracted bed rest — no. "Rest as needed." Limitation of sports — no**, outside the acute phase.',
    '- **⚠️ PREVENTION: early antibiotic therapy for streptococcal throat and skin infection does NOT eliminate the risk of GN.** Culture family members, especially young children, and treat if positive. **Family pets, particularly dogs, have been reported as carriers.**',
    '',
    '### Outcome',
    '- **Short term excellent — complete recovery > 95 % at 6–8 weeks, mortality < 0.5–1 %.**',
    '- **Recurrent gross haematuria is common with a new acute illness early after diagnosis** — recrudescence.',
    '- **⚠️ Hypocomplementaemia > 3 months raises concern for a chronic hypocomplementaemic GN.**',
    '- **Long term: no residual by 1–2 years** in almost all; a CKD predisposition remains as after any AKI; **2 % develop CKD**; **ESKD uncommon**; **recurrent APSGN quite rare**.',
    '',
    'Src: L39'
  ].join('\n'),
  qs: ['pedhd-renal-20']
},

{
  id: 'ren-11', w: 'high',
  h: 'IgA nephropathy and IgA vasculitis (HSP) — one deposit, two diseases',
  body: [
    '**IgA nephropathy is defined by the detection of IgA in glomeruli as dominant or co-dominant with respect to the other immunoglobulins.** Two forms: **primary IgAN (Berger’s GN)**, in the absence of systemic disease, and **IgAN secondary to vasculitis (IgAVN) — Henoch–Schönlein GN**.',
    '',
    '### IgA nephropathy',
    '- **The most common chronic glomerular disease in children.**',
    '- Commonest in the **second and third decades**; in children **median age 10.9 years**, **uncommon under 3**. **Male > female. East Asians > Whites > Blacks.**',
    '- **⚠️ SYNPHARYNGITIC HAEMATURIA: gross haematuria within 1–2 DAYS of an upper respiratory or gastrointestinal infection**, ± **loin pain** — children typically present this way, so diagnosis by biopsy is early.',
    '- Also **asymptomatic microscopic haematuria** with varying proteinuria, ± progressive kidney disease. **Mild to moderate hypertension**, most often with nephritic or nephrotic syndrome.',
    '- **Function declines slowly, over years. More benign in children than adults** — an uncommon cause of childhood ESKD.',
    '',
    '### IgA vasculitis / Henoch–Schönlein purpura',
    '- **A vasculitis with IgA-dominant immune deposits affecting SMALL VESSELS (capillaries, venules, arterioles), involving SKIN, GUT and GLOMERULI, associated with arthralgia or arthritis.**',
    '- **The most common vasculitis of childhood. Age 2–11 years, peak 6. White/Asian males more than everyone else. Typically preceded by an upper respiratory infection.** Adult symptoms are worse.',
    '- **Children: 60–140 per million, nephritis in 20–80 %, median 30 %. Adults: 4–13 per year, peak age 45, nephritis in 80 %.**',
    '- **Renal involvement in children is highly variable: 70–80 % recover within 4 weeks · 20–28 % have an abnormal urinary sediment for > 1 month · 1–7 % progress to ESKD** long-term; rapid regression is frequent.',
    '- **Natural history: 95 % full recovery after 3–4 weeks**; rare rapid progression; possible progression over decades. **Monitoring is the management** — follow the urine; **analgesia** for the joint and abdominal pain.',
    '',
    '*The purpura sits over the **legs and buttocks**, with arthralgia and abdominal pain, in an **afebrile** child with a **normal platelet count** — which separates it from thrombocytopenic purpura and from meningococcal sepsis.*',
    '',
    'Src: L39'
  ].join('\n'),
  qs: ['pedhd-renal-19','pedhd-renal-20']
},

{
  id: 'ren-12', w: 'must',
  h: 'Haemolytic uraemic syndrome — the triad after bloody diarrhoea',
  body: [
    '**⚠️ NOT DESCRIBED IN ANY PAEDIATRIC DECK** — L39 names HUS only in the cause tree and as a cause of **haemoglobinuria**, the diarrhoea deck only as a stool-culture indication. **Everything below is supplied from general medical knowledge and tagged.**',
    '',
    '**HUS: microangiopathic haemolytic anaemia + thrombocytopenia + acute kidney injury** *(not in course material)*.',
    '',
    '- **Typical (D+) HUS follows bloody diarrhoea** — classically **Shiga-toxin-producing E. coli O157:H7**, from undercooked meat, unpasteurised milk or **farm animal contact** *(not in course material)*.',
    '- **The renal picture begins 5–10 days after the diarrhoea starts**, as the stools improve: **pallor, oliguria or anuria, irritability, lethargy** *(not in course material)*.',
    '- **Atypical (D−) HUS** — complement-regulation defect, no diarrhoea, relapsing, worse prognosis *(not in course material)*.',
    '',
    '### The blood picture is the diagnosis',
    '',
    '|Finding|In HUS|What it excludes|',
    '|---|---|---|',
    '|**Haemoglobin**|**Low, with red cell FRAGMENTS (schistocytes) on the film**|Not simple blood loss|',
    '|**Platelets**|**Low** — consumed in microthrombi|—|',
    '|**PT and APTT**|**⚠️ NORMAL**|**Excludes DIC**, where both are prolonged|',
    '|**Urea / creatinine**|**Raised — AKI**|Excludes ITP and simple gastroenteritis|',
    '',
    '### The look-alikes an examiner offers',
    '- **Immune thrombocytopenic purpura:** low platelets **alone** — normal haemoglobin and renal function.',
    '- **Henoch–Schönlein purpura:** purpura with a **normal platelet count**; nephritis follows a rash, not diarrhoea.',
    '- **Acute lymphoblastic leukaemia:** blasts, hepatosplenomegaly, lymphadenopathy; no diarrhoeal prodrome.',
    '- **Post-streptococcal GN:** hypertension and low C3 after throat or skin infection — **no anaemia, no thrombocytopenia**.',
    '',
    '### Management',
    '- **Supportive: fluid and electrolyte balance, transfusion for severe anaemia, dialysis for the AKI**; most children recover renal function. **⚠️ Avoid antibiotics and antimotility agents in Shiga-toxin diarrhoea** — they increase toxin release *(not in course material)*.',
    '- L39 states one thing directly: **HUS causes intravascular haemolysis, so the urine can be haem-positive with FEW OR NO red cells** — haemoglobinuria, not haematuria.',
    '',
    'Src: L39 (HUS in the cause tree and as a cause of haemoglobinuria); `gastroenterology`’s diarrhoea deck (stool culture in bloody diarrhoea and HUS); the clinical account is supplied and tagged'
  ].join('\n'),
  qs: ['pedhd-renal-8','pedhd-renal-22']
},

{
  id: 'ren-13', w: 'must',
  h: 'Proteinuria and nephrotic syndrome',
  body: [
    '### Normal, and the four kinds of abnormal',
    '- **Urinary protein excretion in the normal child < 100 mg/m²/day, or a total < 150 mg/day. Normal protein-to-creatinine ratio < 20 mg/mmol.**',
    '- **Four types: TRANSIENT · ORTHOSTATIC · GLOMERULAR · TUBULAR.**',
    '- **⚠️ ORTHOSTATIC proteinuria: absent in the first-void early morning sample, present later after normal activity. Benign — reassure.** No biopsy, no steroids, no 24-hour collection.',
    '- **The filtration barrier is CHARGE-selective as well as size-selective: the glomerular basement membrane GLYCOSAMINOGLYCANS repel negatively charged plasma proteins** — not the mesangial matrix, the fenestrated endothelium or the podocyte cell body.',
    '',
    '### Nephrotic syndrome',
    '**Heavy proteinuria + oedema + hypoalbuminaemia.**',
    '',
    '|  |**NEPHROTIC**|**NEPHRITIC**|',
    '|---|---|---|',
    '|Protein|**Heavy — 4+ on dipstick**|Mild to moderate|',
    '|Blood|Little or none|**Gross or microscopic haematuria, RBC casts**|',
    '|**Blood pressure**|**⚠️ NORMAL**|**⚠️ RAISED**|',
    '|**Complement**|**⚠️ C3 and C4 NORMAL**|**C3 low in APSGN**|',
    '|Renal function|Normal|Often impaired|',
    '|Oedema|**Gross — periorbital, ascites, scrotal, pitting**|Mild, facial|',
    '',
    '**Aetiology: idiopathic — MINIMAL CHANGE DISEASE.** **Secondary — Henoch–Schönlein purpura · systemic lupus erythematosus · infection · other vasculitides.**',
    '',
    '### Minimal change disease = steroid-sensitive nephrotic syndrome',
    '- **85–90 % of children with nephrotic syndrome. More in boys. Associated with atopy. Often preceded by a URTI. Good prognosis.**',
    '- **Age 1–10 years · NO macroscopic haematuria · normal blood pressure · normal complement · normal renal function · LIGHT MICROSCOPY NORMAL.**',
    '- **Work-up, part 1:** urine protein by dipstick or **protein/creatinine ratio** · **serum albumin** · urea, creatinine, electrolytes · urine microscopy · **urine culture**.',
    '- **Work-up, part 2:** **complement C3, C4** · **antistreptolysin O or anti-DNAse B titres and throat swab** · **malaria screen if travel abroad** · **hepatitis B and C screen** · **FBC and ESR**.',
    '- **Treatment: CORTICOSTEROIDS** (oral prednisolone) · **management of the oedema** · **steroid-sparing drugs**.',
    '',
    '### Complications — four, and the mechanism of the worst',
    '- **HYPOVOLAEMIA** — intravascular volume low despite the oedema, so diuretics and albumin are second-line.',
    '- **THROMBOSIS**, including **renal vein thrombosis. ⚠️ Mechanism: urinary loss of ANTITHROMBIN III plus increased hepatic synthesis of procoagulant factors** — not volume overload, not cholesterol-induced endothelial damage.',
    '- **INFECTION** — bacterial. **HYPERCHOLESTEROLAEMIA.** Effusions (pleural, ascites) follow the oedema.',
    '- *Reduced glucose tolerance is not a complication of the disease — it is an adverse effect of the steroids that treat it (not in course material).*',
    '',
    '### When steroids fail',
    '- **STEROID-RESISTANT nephrotic syndrome — three patterns: focal segmental glomerulosclerosis · membranoproliferative glomerulonephritis · membranous nephropathy.**',
    '- **CONGENITAL nephrotic syndrome: first 3 months of life · poor prognosis · not responsive to steroids · treatment only symptomatic.**',
    '',
    'Src: L41 (body and the three MCQ slides)'
  ].join('\n'),
  qs: ['pedhd-renal-6','pedhd-renal-7','pedhd-renal-21','pedhd-renal-25']
},

{
  id: 'ren-14', w: 'high',
  h: 'CAKUT — the spectrum of renal mass, shape and position',
  body: [
    '**CAKUT: a spectrum of structural malformations resulting from abnormal development of the kidneys and/or urinary tract (ureters, bladder, urethra).**',
    '',
    '### The four numbers',
    '- **Affects over 1 % of live births.**',
    '- **Approximately 30 % of all diagnosed congenital anomalies.**',
    '- **⚠️ THE LEADING CAUSE OF CKD IN CHILDREN — approximately 40–50 % of cases worldwide.**',
    '- **Sporadic or familial, syndromic or non-syndromic. Identifiable antenatally.**',
    '',
    '### Embryology',
    '- **⚠️ Normal kidney development depends on interaction of the URETERIC BUD with the METANEPHRIC MESENCHYME, in the 5th week** — not mesonephric duct with bladder, not cloaca with urethra.',
    '- **Serial branching, approximately 15 generations. By the 20th week about 30 % of nephrons are present and the entire urinary system formation is completed. At least 16 signalling agents.**',
    '',
    '### Classification — four groups',
    '**Abnormalities of the renal MASS · abnormalities of SHAPE and POSITION · abnormalities of the URINARY TRACT · less common forms of urinary tract abnormality.**',
    '',
    '### Renal agenesis',
    '- **Unilateral or bilateral. Association with VACTERL.**',
    '- **⚠️ Absence of BOTH kidneys → severe oligohydramnios → POTTER SEQUENCE, fatal**: **pulmonary hypoplasia**, **limb deformity (talipes)**, **failure to pass urine**.',
    '',
    '### Renal dysgenesis — three principal types',
    '',
    '|Type|What it is|',
    '|---|---|',
    '|**Hypoplasia**|**Small kidney, DECREASED NUMBER of nephrons, NORMAL architecture**|',
    '|**Dysplasia**|**Abnormalities in metanephric DIFFERENTIATION**|',
    '|**Cysts**|Simple / multilocular cysts, **multicystic dysplastic kidney**, and may include **polycystic kidney disease**|',
    '',
    '- **MCDK — multicystic dysplastic kidney:** **failure of union of the ureteric bud with the nephrogenic mesenchyme.**',
    '- **Non-functioning large fluid-filled cysts, a "cluster of grapes", with NO renal tissue in between.**',
    '- **A significant proportion involute by 2 years. Nephrectomy only if it stays very large or hypertension develops — rare. Very low risk of malignant transformation.**',
    '- **POLYCYSTIC KIDNEY DISEASE: BOTH kidneys always affected**, though some or normal function is maintained. **Main childhood symptom is hypertension**; CKD needing renal replacement **in late adulthood**. **Extrarenal: cysts in liver and pancreas, cerebral aneurysms, mitral valve prolapse.**',
    '',
    '### Shape and position',
    '- **ECTOPIC KIDNEY: pelvic, iliac or thoracic**, or to the contralateral side — **fused in most cases = crossed fused ectopia**.',
    '- **HORSESHOE KIDNEY: fusion of the LOWER POLES. ⚠️ Trapped by the INFERIOR MESENTERIC ARTERY during ascent.** May bring **obstruction, infection or stone formation**. **High association with Turner syndrome.**',
    '- **DUPLEX KIDNEY:** from a simply bifid renal pelvis to complete division with **two ureters**.',
    '',
    'Src: L40 (body and the six MCQ slides)'
  ].join('\n'),
  qs: ['pedhd-renal-26','pedhd-renal-18']
},

{
  id: 'ren-15', w: 'must',
  h: 'CAKUT — reflux and obstruction, the lesions that scar kidneys',
  body: [
    '### Vesicoureteral reflux',
    '- **⚠️ Predisposes to recurrent UTIs and renal scarring.**',
    '- **Mechanism: the ureters are displaced LATERALLY and enter DIRECTLY into the bladder rather than at an angle, with a SHORTENED OR ABSENT INTRAMURAL COURSE.**',
    '- Graded by the **International Reflux Study (IRS) classification**, on **VCUG**. **Familial in 30–50 %.**',
    '- **Most low-grade cases resolve spontaneously**; surgery (**reimplantation**) is reserved for **recurrent breakthrough infections and/or high grades**.',
    '',
    '### Ureteropelvic junction obstruction (UPJO)',
    '- **⚠️ THE MOST COMMON OBSTRUCTIVE LESION IN CHILDHOOD. Usually INTRINSIC obstruction.**',
    '- **Approximately 60 % occur on the LEFT; bilateral in 10 %.**',
    '- **Corrected by PYELOPLASTY in severe cases. Prompt surgical repair if:** abdominal mass · **bilateral severe hydronephrosis** · **solitary kidney** · **diminished function in the involved kidney**.',
    '',
    '### Posterior urethral valve',
    '- **⚠️ OCCURS IN MALES ONLY.** Causes **bladder outlet obstruction**.',
    '- **Presents with poor stream, urinary tract infections, or renal failure.** Antenatally **bilateral hydronephrosis with a distended bladder in a male**; postnatally **failure to pass urine**.',
    '- **⚠️ 30 % experience end-stage renal disease or chronic renal insufficiency.**',
    '- **Treatment: immediate catheterisation, then transurethral (endoscopic) valve ablation**; sometimes a **temporary vesicostomy**.',
    '- **⚠️ MCUG is MANDATORY in males with bilateral hydronephrosis** — but the ultrasound comes first.',
    '',
    '### Less common forms',
    '- **PRUNE BELLY (Eagle–Barrett) SYNDROME — a triad: lax abdominal wall muscles (AWM deficiency) · intra-abdominal testis · urinary tract distension and abnormalities. 95 % are males.** Associated extra-urological anomalies, e.g. **cardiac**.',
    '- **BLADDER EXSTROPHY: the bladder protrudes from the abdominal wall with its mucosa exposed · the umbilicus is displaced downwards · the pubic rami are widely separated · the anus is displaced anteriorly**, and there may be **rectal prolapse**.',
    '',
    'Src: L40'
  ].join('\n'),
  qs: ['pedhd-renal-17','pedhd-renal-26']
},

{
  id: 'ren-16', w: 'high',
  h: 'CAKUT — how it shows itself, what to image, and what to do',
  body: [
    '### Clinical presentation — seven routes in',
    '**Antenatal hydronephrosis on routine ultrasound · accidental postnatal discovery in an asymptomatic child · recurrent urinary tract infections · poor urinary flow · failure to thrive · hypertension and proteinuria · chronic kidney disease.**',
    '',
    '### The investigations, and what each is for',
    '',
    '|Test|Purpose|Limitations|',
    '|---|---|---|',
    '|**Renal ultrasound**|**FIRST-LINE. Kidney size, corticomedullary differentiation, system dilatation**, stones, nephrocalcinosis. **Non-invasive, mobile**|**Anatomy, not function. Operator dependent; may not detect all renal scars**|',
    '|**VCUG / MCUG**|**⚠️ GOLD STANDARD for VUR and PUV. Mandatory in males with bilateral hydronephrosis.** Contrast via urethral catheter; bladder and urethral anatomy|**Invasive and unpleasant beyond infancy · high radiation dose · can introduce infection**|',
    '|**DMSA**|**Static scan of the renal cortex. Functional renal mass and renal SCARS**|**⚠️ Wait at least 2 MONTHS after a UTI, or you diagnose false "scars"**|',
    '|**MAG3 renogram**|**Dynamic. Measures DRAINAGE**; separates **obstructive from non-obstructive dilatation**. **Furosemide often given**|Isotope and timing dependent|',
    '|**Bladder urodynamics**|**How well the bladder empties**, and flow rates — bladder abnormality drives recurrent UTI|—|',
    '|**Laboratory**|**CBC · urea, creatinine, electrolytes · blood gases · urinalysis · urine culture**|—|',
    '',
    '**⚠️ Ultrasound gives ANATOMY, not function.** Dysplastic kidneys + hypertension + faltering growth needs **plasma creatinine and electrolytes** to quantify the CKD — repeating the scan adds nothing.',
    '',
    '### Principles of management',
    '- **Antenatal:** with **severe oligohydramnios**, **fetal intervention (shunting)** may be considered **in highly specialised centres**.',
    '- **Postnatal medical: monitoring growth and development · prophylactic antibiotics** for **high-grade VUR or obstructive uropathy with recurrent infections**, e.g. **trimethoprim or nitrofurantoin** · **blood pressure control**.',
    '- **Long-term follow-up** where necessary for CKD patients. *Lesion-by-lesion surgery is in ren-15.*',
    '',
    '### Complications CAKUT predisposes to',
    '**Recurrent urinary tract infections · bladder dysfunction · renal scarring · hypertension and proteinuria. ⚠️ The primary mechanism leading from CAKUT to CKD is PROGRESSIVE RENAL SCARRING.**',
    '',
    'Src: L40'
  ].join('\n'),
  qs: ['pedhd-renal-18','pedhd-renal-15','pedhd-renal-17']
},

{
  id: 'ren-17', w: 'know',
  h: 'Two the decks barely touch — the renal stone, and the wet bed',
  body: [
    '### Renal stone',
    '- **What the decks print:** **unilateral flank pain radiating to the groin suggests obstruction by a calculus** · **idiopathic hypercalciuria** causes recurrent gross haematuria (L39, and both sit in ren-8’s tree) · **horseshoe kidney predisposes to stone formation** (L40).',
    '- **⚠️ The discriminator: colicky loin pain + haematuria + NO proteinuria = stone.** Proteinuria points at the glomerulus; a **palpable mass** at Wilms tumour; **fever with loin pain and rigors** at pyelonephritis.',
    '- **⚠️ PROTEUS AND STRUVITE:** L38 prints Proteus twice as a urinary pathogen but never links it to stones.',
    '- **Proteus is UREASE-producing:** it splits urea to ammonia, alkalinises the urine and precipitates magnesium ammonium phosphate — **struvite (infection) stones** *(mechanism not in course material)*.',
    '- So **recurrent UTI ending in a calculus points at Proteus, not the commoner E. coli**.',
    '- **First investigation: ULTRASOUND of the kidneys and urinary tract** — the stone and the dilatation, non-invasively. **DMSA is for scars and waits 2 months after infection** (L40).',
    '',
    '### Enuresis',
    '- **⚠️ Not written as a topic in any paediatric deck** — but the reasoning the examiner wants IS printed, in the endocrine decks.',
    '- **The DKA deck:** **"polyuria and enuresis"**, listed against a differential of **UTI**.',
    '- **The diabetes deck:** **nocturnal enuresis**, among the presenting features of **type 1 diabetes mellitus** *(that account is `endocrine`’s; cited here, not written)*.',
    '- **PRIMARY: never reliably dry. SECONDARY: wetting returns after at least 6 months of dryness — and always needs a cause sought** *(definitions not in course material)*.',
    '- **⚠️ THE FIRST TEST IS A URINE DIPSTICK:** one strip screens for **infection** (nitrite, leukocyte esterase) and **diabetes** (glucose) at once — the two causes above.',
    '- **It comes BEFORE blood glucose, microscopy and culture, ultrasound, and long before a water deprivation test** *(ordering not in course material)*.',
    '- Other pointers: **constipation** (also a UTI risk factor, L38) · **polydipsia with polyuria** · a **new psychosocial stress such as starting school** *(not in course material)*.',
    '',
    'Src: L39; L40; L38 (Proteus, constipation); `endocrine`’s DKA and diabetes decks (enuresis and polyuria as diabetes presentations — cited only, not counted); the stone mechanism, the enuresis definitions and the test ordering are supplied and tagged'
  ].join('\n'),
  qs: ['pedhd-renal-3','pedhd-renal-4','pedhd-renal-9','pedhd-renal-15']
}

    ]
  }
};
