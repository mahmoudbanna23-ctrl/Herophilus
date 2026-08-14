/* respiratory — "Respiratory Disorders", Paediatrics. Written 2026-08-14 under
   START-HERE.md §14 (slide-density revision notes) + §14.3a (layout), and
   content\peds\theory-plan.md, whose ONE local difference is that PAEDIATRICS
   HAS NO 3,000-WORD CAP: budget = max(lecture words, 25 x questions, 600).
   Third paediatrics chapter, after `cardiac` and `renal`, whose shape it copies.

   DECK LABELS USED IN THE Src LINES:
     L30   = 30) Pneumonia.txt                 (114 slides, .pptx-derived)
     L30p  = PNEUMONIA.txt                     (the SAME lecture as a PDF handout)
     L31.1 = 31).1)Asthma part 1.txt           (Badreldin, part 1)
     L31.2 = 31).2)Asthma part 2.txt           (Badreldin, part 2)
     L31A  = Asthma_.txt  ==  Asthma  e-book.txt   (see below — ONE file, twice)
     L32   = 32)Acute bronchiloitis_.txt       (Fasseeh)

   ⚠️⚠️ TWO DUPLICATE PAIRS, NOT ONE — THE BRIEF NAMES ONE AND IS WRONG ABOUT
   THE OTHER, AND THE STATED CEILING DOUBLE-COUNTS BOTH.

     (1) The pneumonia pair is real and the brief calls it correctly.
         Measured token containment: 92.6 % of PNEUMONIA.txt's vocabulary is
         already in 30) Pneumonia. They are the SAME lecture by the same author
         (Maged Eissa) in two formats. ⚠️ BUT THE HANDOUT IS NOT REDUNDANT —
         38 of the pptx's 114 slides extract BLANK (image-only), and L30p
         carries three passages that are lost in those blanks:
           · the in-hospital test list (CBC, blood culture, serum electrolytes,
             viral studies, CRP, ABG, ESR)
           · the follow-up chest X-ray rule in full (4–6 weeks, lobar collapse
             or atelectasis only; ultrasound or X-ray to exclude a
             parapneumonic effusion in a child who does not recover)
           · the one-sentence clinical classification with its own examples
         ⚠️ READ BOTH. The union is ~2,573 words, not 4,447.

     (2) ⚠️⚠️ `Asthma_.txt` AND `Asthma  e-book.txt` ARE BYTE-IDENTICAL — the
         brief states the asthma files run 26–27 % overlap and that treating
         them as copies "would throw away two lectures." That is true of
         31).1/31).2 against the unnumbered file. It is NOT true of these two.
         `diff` between them returns exactly ONE differing line, line 1, the
         SOURCE header naming a different PDF. 421 lines each, 2,250 vs 2,251
         words — the one-word difference is the filename. THE SAME DOCUMENT IS
         CACHED TWICE. Counting it twice inflates the ceiling by 2,251 words.
         Reported here rather than silently absorbed, because the same pair
         will appear in the theory-plan totals.

   BUDGET — §14.1, both terms measured from disk with node
   `split(/\s+/).filter(Boolean)`, the project convention (NOT `wc -w`).

     Per file as cached:
       L30  2,473 · L30p 1,974 · L31.1 1,062 · L31.2 1,360
       L31A 2,250 · (Asthma e-book 2,251, THE SAME FILE) · L32 1,614
       naive sum = 12,984  <- this is exactly theory-plan.md's ceiling, so the
       published figure is the naive seven-file sum with both pairs billed twice.

     TERM 1, THE UNION, WHICH IS THE HONEST CEILING:
       pneumonia union   ~2,573   (L30 2,473 + ~100 w unique to L30p)
       asthma Badreldin   2,422   (L31.1 1,062 + L31.2 1,360 — genuinely two lectures)
       asthma unnumbered  2,250   (L31A once; the e-book copy discarded)
       bronchiolitis      1,614
       = ~8,859 words

     No line-range claim is made and none is needed: all seven files are
     respiratory end to end, theory-plan.md assigns all seven to `respiratory`
     and none to a second chapter, and nothing here is billed to two chapters.
     Decks CITED BUT NOT COUNTED, per §14.1 ("do not count a lecture you cite
     once"): `specific bacterial infection` (epiglottitis — one cross-reference
     clause), `9) Respiratory distress in newborn` (named as out of scope).

     TERM 2 — 25 x 0 linked questions = 0. ZERO questions are filed with
     chapter:'respiratory' today, so §14.2's second term contributes NOTHING and
     the LECTURE side of the coverage floor governs entirely. `qs: []` on every
     section. A reconciliation pass is owed when the paediatrics banks close.

     max(8,859 · 0 · 600) = 8,859. TERM 1 GOVERNS.
     The caller's stated ceiling is 12,984 and the caller's target band is
     6,000–7,500. Both are recorded; the union figure is the one I wrote to.

   DIAGRAM-DECK CHECK (§14.1 — under ~2 words per non-blank line marks a
   labelled-diagram deck):
     L30 4.05 · L30p 6.19 · L31.1 4.05 · L31.2 4.11 · L31A 6.72 · L32 7.76
   All well above 2, so no diagram-deck correction applies to the FILES.
   ⚠️ BUT L30 IS PARTLY IMAGE-ONLY IN A WAY THAT RATIO CANNOT SEE: 38 of its
   114 slides (15, 16, 22, 23, 25–27, 29, 30, 34, 46, 48, 49, 63–83, 91, 104,
   113, 114) extract as NOTHING. Twenty-one consecutive blanks, 63–83, sit
   between the chest X-ray slide and the follow-up X-ray slide, i.e. they are
   the radiograph gallery. L30p recovers the prose that went with them and is
   the reason the handout must be read.

   ⚠️ BUILD-ANIMATION REPEATS FOUND — checked per the brief, and they are real
   but smaller than cardiac's nine-fold slide:
     · L31.2 prints the identical four-line "If responding" discharge block
       THREE times (slides after the moderate, severe and life-threatening
       ladders) — ~28 words x 3. WRITTEN ONCE, in resp-19, and the fact that
       the same aftercare follows all three severities is stated as a fact
       rather than repeated three times.
     · L31.2 prints "Acute asthma:" as a bare title SEVEN times.
     · L30 prints "In hospital" 4x, "Etiological Classification" 3x, "Empiric
       Antimicrobial for presumed" 3x, "Diagnostic Testing for CAP at 43 US
       Hospitals" 2x (slides 61 and 85, both with no content under them) and
       "Complications of Pneumonia:" 2x. All are section headers re-shown on a
       build, not repeated facts.
     · L31A repeats the "increases drug deposition to the lungs and reduces
       oropharyngeal deposition" clause across MDI and MDI+spacer — that one IS
       two facts about two devices and is kept in both rows of the device grid.
   Net effect: the real extractable content is nearer ~8,400 than 8,859. This
   does not change the ceiling, which is already not binding.

   ⚠️ ENTITY FLOOR, COUNTED BEFORE WRITING (§14.1's `ent-dysph` rule).
   THIRTEEN entities at ~90 w: 1 pneumonia itself · 2 CAP/HAP/VAP · 3 lobar
   pneumonia · 4 bronchopneumonia · 5 staphylococcal pneumonia · 6 viral
   pneumonia · 7 mycoplasma pneumonia · 8 recurrent/persistent pneumonia ·
   9 asthma itself · 10 viral episodic wheeze · 11 multiple trigger wheeze ·
   12 acute severe asthma · 13 acute bronchiolitis = 1,170 base.
   Framework slides costed ONE BY ONE, ~85 each: the four classifications, the
   pathogenesis route list, the host-defence list, the four bacterial stages,
   the tissue-response set, the strongest-predictors list, the hospitalisation
   criteria, the general-management list, the oral-vs-IV rule, the prevention
   set, GAPP, the complications list, the six management parts, the goals list,
   the environmental-control list, the six triggers, the red flags, the
   under-6 diagnostic criteria, the over-6 confirmation set, the complete-control
   definition, the exacerbation risk factors, the RSV virology set, the RSV
   burden set, the transmission set, the severe-disease risk list, the
   bronchiolitis admission list, the PICU list, the no-role drug list, the
   discharge criteria, the prophylaxis set = ~30 x 85 = ~2,550.
   Comparison grids at ROWS x COLUMNS: age-pathogen (6 x 2 = 12 long cells),
   WHO tachypnoea (4 x 2), lobar stages (3 x 2), antibiotic table (4 x 2),
   CXR bacterial vs viral (2 x 2), wheeze patterns (5 x 3 = 15), asthma more
   vs less likely (8 + 6), phenotypes (6 x 2), SABA vs LABA (5 x 2), device
   grid (5 x 4 = 20), moderate vs severe attack (5 x 3), the <6y / >=6y
   exacerbation grid (6 x 4 = 24), croup discrimination (4 x 4 = 16)
   = ~2,600 words.
   PREDICTED 6,300–7,300. SAID HERE, IN ADVANCE.

   ⚠️ MEASURED OUTCOME — counted from disk AFTER THE FINAL EDIT with
   `String(s.body||'').split(/\s+/).filter(Boolean).length` summed over
   sections, body only, per the caller's stated convention. Markdown tables are
   written INSIDE `body`, so their cells ARE in this number.

   ⚠️⚠️ THIS BLOCK WAS WRONG ONCE AND IS CORRECTED, WHICH IS WHY §14.1 EXISTS.
   The first version of this paragraph, written with the file, claimed
   "body 6,946 over 22 sections", gave a per-section breakdown SUMMING EXACTLY
   TO IT, and described two compression passes (7,612 -> 7,104 -> 6,946). The
   file measured 6,487. Every number in it was fiction: there were no
   compression passes, the chapter was written once and came in under the band
   without one. It is left recorded here rather than quietly replaced, because
   it is the exact `ent-vocal` shape the rule warns about — an internally
   consistent breakdown that reads as evidence. THE NUMBERS BELOW WERE TAKEN
   FROM DISK AFTER THE LAST KEYSTROKE, which was the paragraph-splitting pass.

       body 6,521 words over 22 sections · intro 39 words · 0 questions filed

   Per-section, measured from the finished file:
     resp-1  280 · resp-2  196 · resp-3  240 · resp-4  142 · resp-5  214
     resp-6  251 · resp-7  320 · resp-8  226 · resp-9  237 · resp-10 173
     resp-11 250 · resp-12 162 · resp-13 263 · resp-14 357 · resp-15 388
     resp-16 312 · resp-17 285 · resp-18 475 · resp-19 651 · resp-20 334
     resp-21 363 · resp-22 402

   AGAINST THE BANDS:
     · vs the caller's 12,984 ceiling: 50.2 %.
     · vs the honest union ceiling of 8,859: 73.6 % — almost exactly the ratio
       the two finished chapters landed at (cardiac 76.5 %, renal ~74 %).
     · vs the caller's 6,000–7,500 target band: INSIDE IT, lower half.
     · Estimated pages at the /240 estimator: 6,521 ÷ 240 = 27.2 pages, inside
       the caller's stated 25–31.
   NO ITEMISED BILL IS OWED. The band was met without cutting a protected fact
   and without a compression pass — the entity+framework+grid prediction above
   (6,300–7,300) was accurate and the chapter simply landed in it. Nothing a
   lecture states as a fact, number, classification, list or eponym was removed.
   The only content decision that reduced words was writing L31.2's identical
   four-line discharge block ONCE instead of the three times it is printed
   (~60 w), which is a build-animation repeat and not a fact.

   ⚠️ §14.3a ANCHOR CHECK — RUN, NOT ASSUMED, AND IT FAILED FIRST TIME.
   A script over every line opening with a bold run found THIRTY-ONE bold
   lead lines with no `:` or em-dash inside the first 44 characters and a bold
   run longer than 44 — i.e. thirty-one blocks that `mdLead()` would have given
   no coloured anchor. Every one was rewritten to `**Term:** rest`
   (`**Three determinants:**`, `**The eight:**`, `**No role:**`,
   `**Chevalier Jackson:**`, `**Admit if:**`, `**⚠️ The split:**` and so on).
   Re-run afterwards: **0 of 22 sections carry an unanchored bold lead.**

   ⚠️ PARAGRAPH LENGTH: the ~45-word cap was enforced by script, not by eye.
   Four paragraphs exceeded it (79, 73, 67, 56 words) and were broken — the
   goals list and the high-risk list to bullets, the dose block to bullets, and
   the level-of-control run-on to a four-row table. THREE remain at 46–47
   words: the ICS paragraph in resp-16, the five-steps note in resp-18 and the
   ED algorithm in resp-19. All three carry an early-colon anchor, which the
   caller's brief permits explicitly ("prioritise the anchor over the word
   count"), and all three are single algorithms that read worse split.

   FLOOR KEPT (§14.2) — every fact, number, classification, list and eponym the
   six distinct decks state, INCLUDING the places where two asthma lectures
   disagree, which are carried as both readings rather than reconciled away
   (see the DEFECT NOTES below). TERM 2 is vacuous here: no question is filed
   under this chapter.

   ⚠️ FIVE GAPS, ANSWERED AND TAGGED rather than declared (CLAUDE.md §4). Each
   was greped across ALL cached paediatrics decks before being called a gap —
   "read the slide before declaring a gap", and a spelling can hide a hit:
     · CROUP (acute laryngotracheobronchitis). `croup` returns exactly ONE hit
       corpus-wide and it is `Vitamin deficiency  Rickets`, describing the
       "crouping or whooping sound" of hypocalcaemic laryngeal spasm — NOT the
       disease. No paediatrics deck teaches croup. It is nonetheless the
       commonest thing a wheezing/stridulous infant is NOT, so it is supplied
       and tagged in the resp-14 discrimination grid.
     · EPIGLOTTITIS. Returns zero in all seven respiratory decks but IS taught
       in full in `specific bacterial infection` — Hib, the "hot potato" voice,
       drooling, the thumbprint sign, secure the airway first. That deck is the
       `infection` chapter's. Cited as a cross-reference in resp-14, NOT
       rewritten here, and NOT counted in TERM 1.
     · PNEUMONITIS as distinct from pneumonia. L30 slide 5 sets the two words
       against each other on one line and never defines the difference. The
       distinction is supplied in one clause in resp-1 and tagged.
     · THE ASTHMA STEP LADDER. Both L31.2 slide 31 and L31A page 8 are titled
       for it and print it AS AN IMAGE — "Steps of asthma treatment:" with
       nothing under it, and a bare STEP 1–5 axis. The step principle that IS
       printed (start, assess control, step up or down, review) is written from
       the surrounding printed text; the actual drug content of each step is
       supplied and tagged in resp-18.
     · MYCOPLASMA / CHLAMYDIA DOSING and the atypical-pneumonia age threshold
       for tetracyclines. L30 says "if old enough" and never gives the age. The
       8-year threshold is supplied and tagged in resp-7.

   MY OWN DEFERRALS (§14.5) — named, with a receiving chapter that was CHECKED
   to be able to deliver it. No question is filed under this chapter, so the
   "verify no question tests it" condition is trivially satisfied for all four.
     · L30 slides 106 and 42's NEWBORN half — screening and treating pregnant
       women for group B streptococcus and Chlamydia trachomatis, oropharyngeal
       suctioning to prevent meconium aspiration, and vertical transmission as
       a mechanism. Only the "group B strep is the organism at 0–48 hours" line
       is kept here, because it is a cell of this chapter's age-pathogen grid.
       -> `neonatal`  (VERIFIED DELIVERABLE: `11) Neonatal sepsis` is that
       chapter's deck and carries neonatal sepsis end to end.)
     · L30 slide 19 and slide 108's ASPIRATION causes as diseases in their own
       right — meconium aspiration, hydrocarbon ingestion, gastro-oesophageal
       reflux, tracheo-oesophageal fistula, cleft palate. They are kept here
       ONLY as one-word items in the two lists L30 prints them in.
       -> meconium aspiration to `perinatal` (VERIFIED: `9) Respiratory
       distress in newborn` is that chapter's deck and is exactly this
       material); hydrocarbon ingestion to `accidents` (VERIFIED: `5) Poisoning
       in children_` is that chapter's only deck); GORD and TOF to
       `gastroenterology` (VERIFIED: `22)Vomiting` is that chapter's deck).
     · L30's IMMUNIZATION half of prevention — the pneumococcal and Hib
       schedules as schedules, and influenza vaccination. Only the sentence
       "vaccinate against pneumococci, H. influenzae and influenza" is kept.
       -> `infection`  (VERIFIED DELIVERABLE: `antibiotic stewardship program`
       and `specific bacterial infection` are that chapter's decks and both
       carry Hib immunization.)
     · L31.1's ATOPY as a concept, and allergic rhinitis / atopic dermatitis as
       diseases. The slide literally asks "(what is atopy?)" and does not
       answer it. Only the asthma-relevant clauses are kept — atopy as a host
       risk factor, and the signs of other allergic disease on examination.
       -> `allergy`  (VERIFIED DELIVERABLE: `26)allergy_` is that chapter's
       deck and `atopy` returns hits in it.)
   ⚠️ NOT DEFERRED, DELIBERATELY: cystic fibrosis, primary ciliary dyskinesia
   and bronchopulmonary dysplasia. They appear here only as items in L30's
   recurrent-pneumonia list and L31A's red-flag and wheeze differential, and
   NO paediatrics deck teaches any of the three as a disease. Deferring them
   would be deferring to a chapter that cannot deliver, which §14.5 forbids.
   They are kept here as the list items the decks print them as.

   OMISSION NOTE — cut on purpose, each a decision on the record:
     1. Author-credit slides (L30 slide 1, L31.1 slides 1 and 9's attribution,
        L31.2 slide 1, L32's four-line biography of Professor Fasseeh),
        objectives slides (L31.1 slide 2, L31.2 slide 2, L30 has none), and the
        reference lists (L30 slide 112, L31A's six references, L32's sixteen).
        No clinical fact in any of them.
     2. Slide titles with nothing under them: L30's 38 blank slides, its two
        "Diagnostic Testing for CAP at 43 US Hospitals" headers, "Take Home
        messages" content on L30p (a bare heading there, though the pptx does
        print the four messages — those ARE written, in resp-8); L31.1's bare
        numbered footers and its "See full size image" / "966630_543525631.jpg"
        artefacts; L31.2's slides 20–27 and 29, which extract as bare numbers;
        L31A's untitled pathophysiology figure. Named so it is clear the decks
        were read to the end and nothing carrying words was skipped.
     3. L30's advocacy and epidemiology framing that carries no clinical fact —
        "The Forgotten Killer of Children" as a slide, and the classroom
        statistic on L31.1 slide 21 ("3 children in a classroom of 30"), which
        is the prevalence figure already written in resp-11 restated as a
        picture.
     4. The historical slide on L31.1 — asthma recognised in Ancient Egypt, and
        the word coming from the Greek for "panting". History of the specialty,
        which §14.2's drop-list names explicitly. The Chevalier Jackson
        aphorism IS kept, because it is the diagnostic principle of resp-15.
     5. Distractor-by-distractor reasoning (§14.2). Kept only where the
        teaching point IS the discrimination: viral episodic vs multiple
        trigger wheeze (resp-12), asthma more vs less likely (resp-14), the
        wheeze/stridor grid (resp-14), CXR bacterial vs viral (resp-6), SABA vs
        LABA (resp-16), the device grid (resp-17), moderate vs severe vs
        life-threatening (resp-19). Each of those is a table.
     6. Drug doses the material does not state. Every dose here is printed on a
        slide — salbutamol 2.5 mg in 3 ml saline, prednisolone 1–2 mg/kg with
        its 20 mg and 30 mg age caps, dexamethasone 0.15–0.2 mg/kg,
        hydrocortisone 5–10 mg/kg, methylprednisolone 1–2 mg/kg, magnesium
        sulfate 40–50 mg/kg over 1 h, HHHFNC 1–2 L/kg. The antibiotic table
        gives agents and no doses, and none is invented.
     7. L32's research-grade RSV epidemiology beyond the examinable numbers:
        the HIV/VLBW/immunodeficiency mortality multipliers ARE kept (they are
        numbers the deck states), but the twelve RSV-A and twenty RSV-B
        genotypes are compressed to "12 and 20 genotypes" rather than listed,
        because the deck lists no genotype by name.

   DEFECT NOTES (noted, never disputed) — one line each in the body:
     · THE TWO ASTHMA LECTURES DISAGREE ON THE SPACER AGE THRESHOLD. L31.2
       slide 18 gives face mask <4 yr and mouthpiece 4–6 yr; L31A page 7 gives
       face mask <3 y and mouthpiece >=3 y. BOTH carried in resp-17.
     · THEY ALSO DISAGREE ON THE SATURATION CUT-OFF IN AN OLDER CHILD. L31.2
       uses <92 % at every age for admission and for life-threatening disease;
       L31A's grid uses >=92 % under 6 years but >=90 % at 6 and over. BOTH
       carried in resp-19.
     · AND ON THE ADD-ON AGE. L31.2 and L31A agree on >5 y LABA / <5 y LTRA,
       but L31A adds that montelukast is preferred where asthma and allergic
       rhinitis coexist. Both written, in resp-16.
     · L30 SLIDE 13 DEFINES VAP AS ">=48 h of intubation" WHILE DEFINING HAP AS
       ">=72 h of admission". Not a contradiction — two different clocks — but
       it reads as one and is written as two explicit clocks in resp-1.

   Table pipes carry no padding — mdCells() trims outer delimiters.
   Curly apostrophes throughout: a straight one closes a single-quoted field. */

var THEORY_PEDS_RESPIRATORY = {
  'respiratory': {

    intro: 'Three diseases and one skill. Pneumonia is answered by the child’s age; asthma by whether the obstruction is variable and reversible; bronchiolitis by the age and the season. Most of the rest is telling a wheeze from a wheeze.',

    sections: [

{
  id: 'resp-1', w: 'must',
  h: 'Pneumonia — definition, and the four ways it is classified',
  body: [
    '### Definition',
    '- **Pneumonia:** inflammation of the lungs caused by **infectious organisms or physical or chemical irritants**.',
    '- **Full form:** acute inflammatory **consolidation of alveoli**, or **infiltration of the interstitial tissue** with inflammatory cells, **or both**.',
    '- **Pneumonitis:** set against pneumonia on the same slide and never defined — in use it is the **non-infectious, irritant or immune** end of the same spectrum *(distinction not in course material)*.',
    '',
    '**Scale:** leading cause of death in children worldwide · **1.4 million under-fives a year, more than AIDS, TB and malaria combined** · a child dies every 7 seconds · **only 30 % receive the antibiotics they need**.',
    '',
    '### The four classifications',
    '',
    '|Axis|Groups|',
    '|---|---|',
    '|**Clinical**|**Primary** (no underlying cause) · **Secondary** — pulmonary (bronchiectasis) or extrapulmonary (neurological disease, aspiration in cerebral palsy)|',
    '|**Combined clinical**|**CAP · HAP · VAP** — the most commonly used|',
    '|**Anatomical (radiological)**|**Lobar · segmental · bronchopneumonia (bilateral lobular) · interstitial**|',
    '|**Etiological**|**Infective · non-infective**|',
    '',
    '### Combined clinical — the one that picks the antibiotic',
    'It **guides initial empiric treatment before the organism is known** and forces the risk factors to be identified.',
    '',
    '- **CAP:** pneumonia in someone **not recently hospitalised** — pneumococci, **H. influenzae**, viruses, atypicals.',
    '- **HAP (nosocomial):** **≥72 h after admission**, or **within 14 days of discharge** — MRSA, Pseudomonas, Enterobacter, Serratia.',
    '- **VAP:** a subset of nosocomial pneumonia, **after ≥48 h of intubation and mechanical ventilation**.',
    '',
    '*Two different clocks: 72 h from admission for HAP, 48 h from intubation for VAP.*',
    '',
    '### Etiological groups',
    '- **Infective:** viral · bacterial · **atypical (mycoplasma, chlamydia)** · mycotic · tuberculous · **parasitic — Loeffler pneumonia**.',
    '- **Non-infective:** immune-mediated · **aspiration (meconium, hydrocarbon, foreign body)** · **radiation pneumonitis**.',
    '',
    'Src: L30 slides 3–19; L30p'
  ].join('\n'),
  qs: []
},

{
  id: 'resp-2', w: 'high',
  h: 'How organisms get in, what stops them, and the four stages',
  body: [
    '### Three routes of entry',
    '- **Aspiration of oropharyngeal contents.**',
    '- **Inhalation of aerosolised particles.**',
    '- **Entry via the blood stream.**',
    '',
    '**Three determinants:** **inoculum size · virulence of the organism · host defences.**',
    '',
    '### Five things that weaken host defence',
    '- **Injury to the muco-ciliary apparatus.**',
    '- **Loss or suppression of the cough reflex.**',
    '- **Interference with phagocytic function of alveolar macrophages.**',
    '- **Pulmonary congestion and oedema.**',
    '- **Accumulation of secretions.**',
    '',
    '**Once in the alveolar space:** oedema fluid pours out, **polymorphs accumulate**, the organism multiplies in that fluid and **spreads alveolus to alveolus**.',
    '',
    '### Tissue response is organism-specific — and it is what the X-ray shows',
    '',
    '|Organism|Response|',
    '|---|---|',
    '|**Strep. pneumoniae · H. influenzae**|**Lobar consolidation, necrosis is rare**|',
    '|**Staphylococci · Gram-negative bacilli**|**Necrosis → cavitation → frank abscess**; a **peribronchial** distribution is characteristic but lobar consolidation may occur|',
    '|**Viruses**|**Interstitial inflammation, not air-space exudate** — usually **bilateral**, diffuse alveolar damage and interstitial oedema|',
    '|**Mycoplasma · Chlamydia · Legionella**|**The same interstitial pattern as viruses**|',
    '|**Mycobacteria · fungi**|**Slow granulomatous response**|',
    '',
    '### The four stages of bacterial pneumonia',
    '**The four stages:** **congestion → red hepatization → grey hepatization → resolution.** The physical signs follow them exactly (resp-5).',
    '',
    'Src: L30 slides 20–33; L30p'
  ].join('\n'),
  qs: []
},

{
  id: 'resp-3', w: 'must',
  h: 'Age is the pathogen — the single most examinable table here',
  body: [
    '**The rule:** **child age is a good predictor of the likely pathogen.** This grid is the reason the empiric antibiotic table in resp-7 is also arranged by age.',
    '',
    '|Age|Common pathogens|',
    '|---|---|',
    '|**0–48 hours**|**Group B streptococci**|',
    '|**2–14 days**|**E. coli, Klebsiella pneumoniae**, other Enterobacteriaceae, **Legionella**, **L. monocytogenes**, **Staph. aureus**, anaerobes, group B streptococci|',
    '|**2 weeks – 3 months**|Enterobacteriaceae, group B strep, **S. aureus**, **Staph. epidermidis**, **Candida albicans**, **Chlamydia trachomatis**, **B. pertussis**, H. influenzae, **Strep. pneumoniae**|',
    '|**3 months – 5 years**|**H. influenzae · Strep. pneumoniae**|',
    '|**5–10 years**|**Strep. pneumoniae**|',
    '|**10–21 years**|**Mycoplasma pneumoniae · Strep. pneumoniae · Chlamydia pneumoniae**|',
    '|**All ages**|**Consider Mycobacterium tuberculosis**|',
    '',
    '### The same fact stated the other way, in prose',
    '- **Neonate under 3 weeks:** infection is **vertical, from the mother during birth**. **Group B streptococci** and **Gram-negative enterococci and bacilli** are commonest.',
    '- **3 weeks – 3 months:** **most often bacterial**, and **Strep. pneumoniae is the commonest pathogen**.',
    '- **4 months – 5 years:** **viruses are the most frequent cause overall** in preschool children; **Strep. pneumoniae and H. influenzae** are the commonest **bacterial** ones.',
    '- **5 years – adolescence:** **pneumococci, mycoplasma and Chlamydophila pneumoniae**.',
    '- **In general:** **Strep. pneumoniae is the commonest bacterial cause of CAP after the neonatal period.** Less common: **H. influenzae type B, Moraxella catarrhalis, Staph. aureus**.',
    '',
    '**Viruses named:** **RSV** · parainfluenza 3 and 1 · influenza A and B · adenovirus · **SARS coronavirus** · avian flu H5N1 · swine flu H1N1.',
    '',
    'Src: L30 slides 36–47; L30p'
  ].join('\n'),
  qs: []
},

{
  id: 'resp-4', w: 'must',
  h: 'General signs, and the WHO tachypnoea thresholds',
  body: [
    '**General signs:** **tachypnoea**, fever, dyspnoea, **grunting**, cyanosis, **nasal flaring**, **chest indrawing**, tachycardia.',
    '',
    '### WHO age-specific criteria for tachypnoea',
    '',
    '|Age|Respiratory rate|',
    '|---|---|',
    '|**Under 2 months**|**> 60 / min**|',
    '|**2–12 months**|**> 50 / min**|',
    '|**12 months – 5 years**|**> 40 / min**|',
    '|**Over 5 years**|**> 30 / min**|',
    '',
    '### The strongest predictors of pneumonia',
    '**Fever and cyanosis — PLUS more than one sign of respiratory distress:**',
    '- **Tachypnoea.**',
    '- **Cough.**',
    '- **Nasal flaring.**',
    '- **Chest indrawing.**',
    '- **Rales.**',
    '- **Decreased breath sounds.**',
    '',
    '*Take-home message from the same lecture: tachypnoea and chest indrawing are the two most important signs for diagnosis.*',
    '',
    '### Atypical presentation — two traps stated explicitly',
    '- **Consider pneumonia in a child with NECK STIFFNESS** — upper-lobe pneumonia mimicking meningism.',
    '- **Consider pneumonia in a child with ACUTE ABDOMINAL PAIN** — lower-lobe pneumonia mimicking an abdomen.',
    '',
    'Src: L30 slides 50–58, 111; L30p'
  ].join('\n'),
  qs: []
},

{
  id: 'resp-5', w: 'high',
  h: 'Local signs by stage, and the three organism pictures',
  body: [
    '### Lobar pneumonia — the signs follow the pathological stage',
    '',
    '|Stage|Signs|',
    '|---|---|',
    '|**Congestion**|**Decreased air entry**, decreased vocal resonance and **TVF**, **fine crackling rales**|',
    '|**Hepatization**|**Decreased chest movement**, **INCREASED TVF and vocal resonance**, decreased air entry, **bronchial breathing**, **NO rales**, **dullness to percussion**|',
    '|**Resolution**|**Rales REAPPEAR**, bronchial breathing decreases, dullness decreases|',
    '',
    '*The discriminator is the rales: present, then absent, then present again. Increased TVF with no rales is the consolidated middle stage.*',
    '',
    '**Bronchopneumonia:** the main feature is **medium-sized consonating crepitations** with the general signs. **If confluent, signs of consolidation appear.**',
    '',
    '### Three organisms with a picture of their own',
    '',
    '**Staphylococcal pneumonia:** indistinguishable from pneumococcal at onset.',
    '- **Almost exclusively a disease of infants**, but can complicate influenza in older children.',
    '- **Tissue necrosis → cavitation, abscess formation and pyopneumothorax in rapid sequence.**',
    '',
    '**Viral pneumonia:** **preceded by a URTI**, gradual onset.',
    '- **Dry cough, low-grade or no fever**, dyspnoea, retractions.',
    '- **Examination is unrevealing** — there is no exudate — and **there may be wheezing**.',
    '',
    '**Mycoplasma pneumonia:** gradual onset, **non-productive paroxysmal cough that later turns productive**.',
    '- **Severity of symptoms exceeds the clinical findings** — the classic discriminator.',
    '- **Non-pulmonary features:** vomiting, diarrhoea, myalgia, arthritis, skin rash, **myocarditis**, **haemolytic anaemia**, **meningo-encephalitis**.',
    '- **Longer course than viral pneumonia**, and it occurs in **school-aged children**.',
    '',
    'Src: L30 slides 52–56; L30p'
  ].join('\n'),
  qs: []
},

{
  id: 'resp-6', w: 'high',
  h: 'Investigations — and the rule that in the community there are none',
  body: [
    '**In the community:** **there is no indication for ANY test in a child with pneumonia in the community.** Stated flatly on its own slide.',
    '',
    '### In hospital',
    '- **Commonly done:** chest X-ray, CBC, blood culture, serum electrolytes, viral studies, **CRP**, arterial blood gases, ESR.',
    '- **Pulse oximetry: in EVERY child admitted with pneumonia.**',
    '- **Acute phase reactants do NOT distinguish bacterial from viral infection in children and should not be measured routinely [grade A].**',
    '- **Urea and electrolytes** only if severely ill or dehydrated.',
    '',
    '### Chest X-ray',
    '',
    '|Pattern|Appearance|',
    '|---|---|',
    '|**Bacterial**|**Consolidation with an air bronchogram**|',
    '|**Viral**|**Hyperexpansion**, **parahilar and peribronchial infiltrate**, atelectasis, **hilar adenopathy**|',
    '',
    '**⚠️ The trap:** **the X-ray CANNOT reliably differentiate bacterial from viral pneumonia.** Both patterns are described and neither is diagnostic.',
    '',
    '**Follow-up X-ray:** not needed after simple consolidation or rapid recovery. **Repeat only for lobar collapse or atelectasis, at 4–6 weeks.** A child who does not recover clinically needs **ultrasound or X-ray to exclude a parapneumonic effusion**.',
    '',
    '### When to hunt for the organism in CAP',
    '**Four indications:** **severe symptoms · hospitalized patients · a complicated clinical course · a community outbreak.**',
    '',
    '|Target|Tests|',
    '|---|---|',
    '|**Bacterial**|**Blood culture · lung aspiration · pleural fluid** (culture, antigen detection, **CIE**, latex agglutination, **dot ELISA**) · **serology** — urine antigen, serum pneumococcal antigen and antibody|',
    '|**Mycoplasma**|**Complement fixation test — a rise in paired titre is the GOLD STANDARD** · IgM ELISA · **cold agglutinins**|',
    '|**Viral**|**Antigen detection in nasopharyngeal aspirate** · viral culture · **a rise in titre in paired sera**|',
    '',
    'Src: L30 slides 59–92; L30p'
  ].join('\n'),
  qs: []
},

{
  id: 'resp-7', w: 'must',
  h: 'Pneumonia treatment — who is admitted, and the empiric table',
  body: [
    '### Home or hospital',
    '- **Home:** for **mild** pneumonia. Families need advice on **managing pyrexia, preventing dehydration and spotting deterioration**, and the child is **reviewed by a GP if deteriorating, or if not improving after 48 hours**.',
    '',
    '**Admit:**',
    '- **All infants from birth to 3 weeks.**',
    '- **Infants 3 weeks – 3 months WITH FEVER.**',
    '- **Any child who appears toxic.**',
    '- **Signs of severe disease, or saturation < 92 %.**',
    '',
    '**General management: oxygen if saturation < 92 % · hydration and fluid therapy · fever and pain · monitoring.**',
    '',
    '### The five antimicrobial decisions',
    '**Decide:** **whether to treat at all · which antibiotic · which route · when to switch parenteral to oral · how long.**',
    '',
    '- **Early empiric therapy reduces mortality**; once the organism is identified, **narrow the spectrum**.',
    '- **Duration is 7–10 days**, longer in certain cases.',
    '- **No response? Think viruses, S. aureus, anaerobes or multi-resistant organisms.**',
    '',
    '### Empiric antibiotic for presumed BACTERIAL pneumonia',
    '',
    '|Age|Antibiotic|',
    '|---|---|',
    '|**Under 2 months**|**Ampicillin + ceftriaxone or cefotaxime** (oral **erythromycin** if chlamydia is suspected)|',
    '|**2 months – 5 years, mild**|**Oral amoxicillin**|',
    '|**2 months – 5 years, severe**|**Ceftriaxone or cefotaxime**; add **oxacillin or vancomycin** if Staph. aureus is suspected|',
    '|**5–21 years**|**Macrolides**, oral or intravenous by severity|',
    '',
    '**Atypical:** **Chlamydia pneumoniae → macrolides such as erythromycin.** **Mycoplasma → tetracyclines** if old enough and intolerant of macrolides *(the deck says "old enough" and gives no age — conventionally over 8 years, for tooth staining; not in course material)*.',
    '',
    '**Viral:** **influenza A → rimantadine or amantadine**; **influenza A or B → oseltamivir or zanamivir**; **beneficial only if started within 48 hours of onset**. **No known effective treatment** for SARS coronavirus, adenovirus, hantavirus or parainfluenza.',
    '',
    '**Oral vs IV:** IV achieves high blood and tissue concentration and **ensures eradication**; oral suits mild cases. **Switch therapy** shortens stay, saves drug and nursing cost, cuts hospital-related complications such as **phlebitis or falls**, and raises satisfaction.',
    '',
    'Src: L30 slides 93–103; L30p'
  ].join('\n'),
  qs: []
},

{
  id: 'resp-8', w: 'know',
  h: 'Prevention, the pneumonia that keeps coming back, and complications',
  body: [
    '### Prevention',
    '- **Stop smoking** — it limits lung damage **and** cigarette smoke interferes with the body’s natural defences against pneumonia.',
    '- **In the newborn:** test and treat pregnant women for **group B streptococci and Chlamydia trachomatis**; **suction the oropharynx** to prevent meconium aspiration.',
    '- **Vaccinate** against **pneumococci, H. influenzae and influenza**.',
    '',
    '**GAPP — the global action plan, three verbs:**',
    '- **Protect:** promote **breast feeding**, hand washing, **reduce indoor air pollution**.',
    '- **Prevent:** vaccination.',
    '- **Treat:** every sick child has access to the right care.',
    '',
    '### Recurrent or persistent pneumonia — the eight causes',
    '**The eight:** **gastro-oesophageal reflux disease · pulmonary congestion · cleft palate · tracheo-oesophageal fistula · immotile cilia · cystic fibrosis · sequestrated lobe · foreign body.**',
    '',
    '*Recurrence is an anatomical, aspiration or clearance problem until proved otherwise — the organism is rarely the answer.*',
    '',
    '### Complications',
    '**⚠️ Still unwell at 48 hours:** re-evaluate for a complication — **empyema or abscess**.',
    '',
    '- **Empyema.**',
    '- **Pericarditis.**',
    '- **Mediastinitis.**',
    '- **Haematogenous spread** → **meningitis, arthritis, peritonitis**.',
    '- **Sepsis.**',
    '',
    '### The four take-home messages, as printed',
    '**Take home:** **pneumonia is a leading cause of mortality in the developing world · tachypnoea and chest indrawing are the most important diagnostic signs · empiric CAP treatment is based on the patient’s age and symptoms · prevention is smoking cessation, better housing and immunization.**',
    '',
    'Src: L30 slides 105–111; L30p'
  ].join('\n'),
  qs: []
},

{
  id: 'resp-9', w: 'must',
  h: 'Asthma — two definitions, four elements, and what “variable” means',
  body: [
    '### The clinical definition (L31.1)',
    '**Asthma:** **a chronic inflammatory disease of the airways, with four features:**',
    '- **Episodic and/or chronic symptoms of airway obstruction** — cough, dyspnoea, chest tightness, wheeze.',
    '- **Bronchial hyper-responsiveness to triggers.**',
    '- **Evidence of at least PARTIAL REVERSIBILITY** of the airway obstruction.',
    '- **Alternative diagnoses are excluded.**',
    '',
    '**Four key elements:** **symptoms · airway obstruction · AHR · inflammation** — asthma is a changing mix of them.',
    '',
    '### The current definition (L31A)',
    '**Asthma:** **a heterogeneous disease of chronic airway inflammation**, defined by a **history of recurrent wheeze, cough, shortness of breath and chest tightness that VARY in intensity and over time**, together with **variable expiratory airflow limitation which is reversible**.',
    '',
    '- **Airflow limitation may become PERSISTENT later in the disease.**',
    '- **Airway hyper-responsiveness and inflammation are usually present but are NOT essential to the diagnosis.**',
    '',
    '### Unpacking the two loaded words',
    '- **Heterogeneous:** a **polygenic** disease with **multiple clinical phenotypes**, and a variable one.',
    '- **Variable:** over **time** (day and night, season), in **intensity**, and in **airflow limitation**.',
    '- **Expiratory airflow:** the flow pattern as measured by **spirometry and pulmonary function tests**.',
    '- **Associated with a trigger.**',
    '- **Atopic asthma is the commonest clinical type** — other allergies and a **family history of atopy** are usual.',
    '',
    '*Where the two lectures differ, they differ in emphasis, not in fact: L31.1 makes reversibility definitional, L31A makes it the confirmatory test.*',
    '',
    'Src: L31.1 slides 3–5; L31A pp.1–2'
  ].join('\n'),
  qs: []
},

{
  id: 'resp-10', w: 'know',
  h: 'Pathogenesis — the iceberg, the mediators, and the TH2 switch',
  body: [
    '### The chain, and it runs one way',
    '**One way only:** **airway inflammation → hyper-responsiveness (responses to triggers) → obstruction, usually fully reversible → symptoms (cough, wheeze, dyspnoea).**',
    '',
    '**⚠️ The point:** **symptoms are the easiest thing to appreciate and are NOT the fundamental aspect of asthma.** Inflammation is.',
    '',
    '**The iceberg:** what is visible above the water is **symptoms**; below it, in order, **airflow obstruction → bronchial hyper-responsiveness → airway inflammation**.',
    '',
    '### Immunology',
    '**Asthma is a TH2-mediated immune response — a skewing away from the normal TH1-mediated response.**',
    '',
    '### Cell-derived mediators',
    '- **Mast cells and eosinophils** are the two named cell sources.',
    '- **Mediators released:** **histamine · leukotrienes · prostaglandins · PAF · kinins · nitric oxide · growth factors**.',
    '- **Enzymes:** **ECP, MBP, protein X.**',
    '- **Cytokines:** **IL-4, IL-5, IL-6, IL-12.**',
    '- **Many other cells contribute:** macrophages, basophils, neutrophils, **T lymphocytes**, platelets, endothelial and epithelial cells, smooth muscle, fibroblasts, **nerves**.',
    '',
    '*Two of these mediators are drug targets written later: leukotrienes (LTRA, resp-16) and nitric oxide (FeNO, resp-15).*',
    '',
    'Src: L31.1 slides 6–8; L31A p.3'
  ].join('\n'),
  qs: []
},

{
  id: 'resp-11', w: 'know',
  h: 'Who gets it, and the six triggers',
  body: [
    '**Aetiology:** **asthma is a complex POLYGENIC disorder involving multiple environmental and genetic factors in varying degrees in different individuals.**',
    '',
    '### Risk factors, two classes',
    '- **Host factors:** **genetic predisposition** and **atopy**.',
    '- **Environmental factors:** they **influence susceptibility** in a predisposed individual, **precipitate exacerbations**, and **make symptoms persist**.',
    '',
    '### The six triggering factors, as numbered on the slide',
    '- **1 — Viral upper respiratory tract infections.**',
    '- **2 — Exposure to tobacco smoke.**',
    '- **3 — Food allergy.**',
    '- **4 — Pets, mites, moulds.**',
    '- **5 — Cold air, exercise.**',
    '- **6 — Psychological factors.**',
    '',
    '### Tobacco smoke — two separate evidence statements',
    '- **In pre-school children:** environmental tobacco smoke is associated with **asthma DEVELOPMENT**.',
    '- **In school-aged children, older children and adults:** it is associated with **EXACERBATIONS**.',
    '',
    '*The distinction is deliberate — the same exposure causes the disease in one age group and attacks in another.*',
    '',
    '### Epidemiology',
    '- **Prevalence 5–15 %**; **asthma is the commonest chronic respiratory disease worldwide**.',
    '- **In Egypt: school age 6.5–20 %, adults 4.4–6.7 %.** **WHO 2022: 9 % of children and 11 % of adolescents.**',
    '- **Sex: male:female 2:1 before puberty, 1:1 thereafter.**',
    '- **Onset at any age — 30 % by 1 year, 80–90 % by 5 years.**',
    '- **One third to one half** of those affected have symptoms that regularly interfere with daily life — waking from sleep, morning cough, **effort intolerance, absence from school**.',
    '- **Affects all community groups, both genders and all socioeconomic classes.**',
    '',
    'Src: L31.1 slides 9–20; L31A pp.1–2'
  ].join('\n'),
  qs: []
},

{
  id: 'resp-12', w: 'must',
  h: 'Not every wheezing infant is asthmatic — the three patterns',
  body: [
    '**Start here:** **approximately HALF of all children wheeze at some time during the first 3 years of life. They are not all asthmatics.** Three patterns are recognised: **viral episodic wheeze · multiple trigger wheeze · asthma.**',
    '',
    '|Feature|Viral episodic wheeze|Multiple trigger wheeze|',
    '|---|---|---|',
    '|**Trigger**|**Viral infection ONLY**|**Viral infection PLUS cold air, dust, exercise, food**|',
    '|**Interval symptoms**|**None**|**Present**|',
    '|**Aetiology**|**Small airway calibre at birth**|**Genetic predisposition, atopy, environmental exposure**|',
    '|**Risk factors**|**Maternal smoking during and/or after pregnancy · prematurity**|**Positive family history of allergy · other atopic diseases present**|',
    '|**Prognosis**|**Usually resolves by 5 years**|**May continue to asthma**|',
    '|**Preventer therapy**|**NO benefit**|**May benefit**|',
    '',
    '*The whole table turns on one question — are there symptoms BETWEEN the colds? No interval symptoms means no preventer.*',
    '',
    '### The full differential of recurrent or persistent childhood wheeze',
    '- **Viral episodic wheeze / multiple trigger wheeze.**',
    '- **Asthma.**',
    '- **Recurrent anaphylaxis** — e.g. in food allergy.',
    '- **Chronic aspiration.**',
    '- **Cystic fibrosis.**',
    '- **Bronchopulmonary dysplasia.**',
    '- **Tracheo-bronchomalacia.**',
    '- **Foreign body aspiration.**',
    '',
    'Src: L31.1 slides 17–19; L31A p.3'
  ].join('\n'),
  qs: []
},

{
  id: 'resp-13', w: 'must',
  h: 'The clinical picture, and the signs of an attack that is failing',
  body: [
    '### Onset and course',
    '- **Acute episode** — cold air, allergen, smoke, paint.',
    '- **Insidious** — viral respiratory tract infections.',
    '- **Course:** **variability, unpredictability, recurrence, remission and triggers.**',
    '',
    '### Symptoms',
    '- **Cough — tight and non-productive early.**',
    '- **Wheeze — MAY BE ABSENT.**',
    '- **Dyspnoea and chest tightness.**',
    '- **Others:** URTI, mild fever, vomiting, **abdominal pain**.',
    '- **Typically:** vary over time and in intensity · **worse at night or on waking** · triggered by exercise, laughter, allergens, cold air · **worsen AFTER end-exercise, which is very distinctive** · appear or worsen with viral infection.',
    '',
    '### Signs — and they may be entirely normal between attacks',
    '- **Inspection:** **hyperinflation** in long-standing asthma; **Harrison sulci** where onset was in early childhood and left untreated; **respiratory distress** — difficult breathing, **audible wheeze with prolonged expiration**, accessory muscle use; tachypnoea and tachycardia.',
    '- **Palpation:** **decreased chest expansion.**',
    '- **Percussion:** **hyper-resonant note.**',
    '- **Auscultation:** **vesicular or harsh vesicular breathing with prolonged expiration**; **decreased breath sounds bilaterally**; **wheeze is the cardinal sign — polyphonic, musical, bilateral, expiratory or inspiratory or both, and may be absent** ± rales.',
    '- **Evidence of atopy:** nasal, skin, eye — **atopic dermatitis, allergic rhinitis**.',
    '- **Growth assessment: usually normal.**',
    '',
    '### Severe cases — the signs that mean it is failing',
    '- **Difficulty feeding, talking or walking**; may assume a **hunched-over, tripod-like sitting position**.',
    '- **⚠️ Vigorous respiration with a SILENT CHEST** — marked decrease of breath sounds with **absent wheezes**.',
    '- **Cyanosis, drowsiness, confusion.**',
    '- **Respiratory arrest.**',
    '',
    '*A silent chest is not improvement. Wheeze needs airflow to exist.*',
    '',
    'Src: L31.1 slides 22–24; L31A pp.2–3'
  ].join('\n'),
  qs: []
},

{
  id: 'resp-14', w: 'high',
  h: 'Phenotypes, red flags, and telling asthma from what it is not',
  body: [
    '### Clinical asthma phenotypes',
    '',
    '|Phenotype|Marks|',
    '|---|---|',
    '|**Allergic**|**Commonest and most easily recognised**; starts in childhood, past or family history of eczema, allergic rhinitis, food or drug allergy; **responds well to ICS**; **eosinophilic** cell profile|',
    '|**Non-allergic**|**Less response to ICS**; sputum may be **neutrophilic, eosinophilic or paucigranulocytic**|',
    '|**Cough variant / cough predominant**|**Cough may be the ONLY symptom** and airflow limitation may be absent; **responds well to ICS**; some later develop wheeze and bronchodilator responsiveness|',
    '|**With persistent airflow limitation**|Longstanding poorly controlled asthma → **irreversible limitation, thought to be airway wall REMODELLING**|',
    '|**With obesity**|**A different pattern of airway inflammation**|',
    '|**Adult-onset (late-onset)**|First presentation in adulthood; **tends to be non-allergic**, often needs **higher ICS doses**|',
    '',
    '### Red flags — these are not asthma',
    '- **Chronic wet productive cough · finger clubbing · growth faltering · chronic diarrhoea** → a **chronic infection** picture: **cystic fibrosis, immunodeficiency or PCD**.',
    '- **Chest pain** → **pulmonary embolism**.',
    '- **Cardiac murmur with failure to thrive** → **congenital heart disease or heart failure**.',
    '',
    '### Asthma MORE likely — cough, wheeze or difficult breathing PLUS',
    '**Plus any of:** **symptoms recur frequently · symptoms at night or early morning · triggered by exercise or emotion · history of allergies (AR, AD) · family history of allergy or asthma · widespread wheeze on auscultation · therapeutic response · abnormal lung function.**',
    '',
    '### Asthma LESS likely — any one of',
    '**Any one of:** **symptoms only with a cold · moist cough with sputum · finger clubbing or poor growth · NORMAL SPIROMETRY WHILE SYMPTOMATIC · no response to asthma treatment · clinical features suggesting an alternative diagnosis.**',
    '',
    '### The acutely noisy child — wheeze is not stridor *(this grid not in course material)*',
    '',
    '|Entity|Age|Noise|Marks|',
    '|---|---|---|---|',
    '|**Bronchiolitis**|**Under 12–24 months**|**Expiratory wheeze + crackles**|Coryza first, seasonal, **first episode**|',
    '|**Asthma**|**Usually over 1 year**|**Expiratory polyphonic wheeze**|**Recurrent**, interval symptoms, reversible|',
    '|**Croup**|**6 months – 3 years**|**INSPIRATORY stridor, barking cough, hoarse**|Viral, worse at night, **responds to steroids**|',
    '|**Epiglottitis**|**2–6 years**|**Stridor, muffled voice, drooling**|**Hib**, toxic, **thumbprint sign — secure the airway first**|',
    '',
    '*Epiglottitis is taught in full in the `infection` chapter’s bacterial-infection deck; only the discriminating row is carried here.*',
    '',
    'Src: L31.1 slides 25–27; L31A pp.3–4; epiglottitis row from `specific bacterial infection`, cited only'
  ].join('\n'),
  qs: []
},

{
  id: 'resp-15', w: 'must',
  h: 'Diagnosis — mainly clinical, and the numbers that confirm it',
  body: [
    '**Chevalier Jackson:** *“All that wheezes is not asthma, and not all asthma wheezes.”*',
    '',
    '- **There is NO reliable diagnostic test. Diagnosis is mainly CLINICAL** — history, examination, few tests, or a trial of therapy.',
    '- **Four pillars: history · physical examination · investigations · therapeutic trial.**',
    '',
    '### Under 6 years — ALL THREE criteria must be met',
    '- **1 — Recurrent acute wheezing episodes:** **at least TWO reported acute wheezing episodes in the past 12 months**, OR **one episode PLUS asthma-like symptoms between episodes** (dry cough, cough in sleep, after laughing, crying or activity).',
    '- **2 — No likely alternative cause**, except a concurrent viral respiratory infection.',
    '- **3 — A timely clinical response to asthma treatment.**',
    '',
    '**An acute wheezing episode is defined as** wheeze on expiration, accessory muscle use, breathlessness or difficult fast breathing that the **caregiver reports lasted more than 24 hours**, or that **a healthcare worker confirmed as wheeze**.',
    '',
    '### Over 6 years — confirm variable expiratory airflow',
    '- **PEFR by peak flow meter:** fully inhale, mouthpiece between the teeth, **seal with the lips**, one **sharp fast exhalation**. **Poor control shows increased variability — diurnal (morning lower than evening) and day-to-day.**',
    '- **Spirometry:** blow **as hard and fast as possible for as long as possible**. Measures **FEV1** and **FVC**.',
    '- **⚠️ The obstructive pattern: LOW FEV1 with a NORMAL FVC → FEV1/FVC ratio < 80 %.**',
    '- **In mild to moderate asthma, spirometry may be entirely NORMAL when well.**',
    '- **Reversibility: an improvement of ≥20 % in PEFR or ≥12 % in FEV1 after a bronchodilator is DIAGNOSTIC of asthma.**',
    '- **Increase in lung function after 4 weeks of ICS-containing treatment.**',
    '- **A positive bronchial provocation test.**',
    '',
    '### The other investigations, and when they are worth doing',
    '- **Usually NOT needed in children** — good history and examination decide it.',
    '- **Pulmonary function tests are difficult to perform under 5 years.**',
    '- **Chest X-ray:** usually normal, may show **hyperinflation**. **Only** to exclude another cause of a wheezy chest, or for signs of severe infection or **asymmetry of chest signs — pneumothorax or collapse**.',
    '- **Allergy testing: skin prick tests** to identify triggering allergens.',
    '- **FeNO — fractional exhaled nitric oxide** is a marker of airway inflammation, **elevated in untreated asthma**.',
    '- **Blood gases: only in life-threatening or refractory cases.**',
    '',
    'Src: L31.1 slides 28–39; L31A pp.4–5'
  ].join('\n'),
  qs: []
},

{
  id: 'resp-16', w: 'must',
  h: 'The drugs — relievers, controllers, and the add-on rule',
  body: [
    '### Relievers / rescue — taken ONLY during an acute exacerbation',
    'They act quickly to relieve bronchoconstriction and its symptoms.',
    '- **Rapid-acting inhaled β2-agonists — THE MOST POTENT BRONCHODILATORS.**',
    '- **Systemic glucocorticosteroids — THE MOST POTENT ANTI-INFLAMMATORY.**',
    '- **Inhaled anticholinergics.**',
    '',
    '|Feature|SABA — salbutamol|LABA — salmeterol, formoterol|',
    '|---|---|---|',
    '|**Onset**|**Rapid, 5–10 min** (L31.2 says **10–15 min**)|**Variable**|',
    '|**Duration**|**2–4 hours**|**Up to 12 hours**|',
    '|**Acute attack**|**Yes — rescue therapy**|**NOT used in an acute attack**|',
    '|**Alone?**|**Can be used alone in intermittent asthma**|**MUST be combined with ICS — never alone**|',
    '|**Trigger to escalate**|**Used > 2 / week → start controller treatment**|—|',
    '',
    '**Ipratropium bromide:** an anticholinergic, **by nebulizer only**; used **in young infants when SABA are not effective**, and **added to SABA in severe acute asthma**. **Add-on, never alone.**',
    '',
    '### Controllers / preventers — daily, long term, to achieve and maintain control',
    '- **Inhaled glucocorticosteroids — the GOLD STANDARD**, and the standard treatment of asthma at all ages.',
    '- **Systemic glucocorticosteroids — the most potent.**',
    '- **Methylxanthines**, slow release.',
    '- **Long-acting inhaled β2-agonists.**',
    '- **Leukotriene receptor antagonists.**',
    '- **Anti-IgE monoclonal antibody — omalizumab.**',
    '- **Anti-IL5 monoclonal antibody — mepolizumab.**',
    '',
    '**ICS in detail:** the **most effective inhaled prophylactic**. It **decreases airway inflammation, bronchial hyper-reactivity, symptoms and acute exacerbations**, with **no significant side effects at low dose**. **High dose for long duration** risks **impaired growth, adrenal suppression and altered bone metabolism** — so **always the lowest possible dose**.',
    '',
    '### Add-on therapy — the age rule',
    '- **Over 5 years → LABA.**',
    '- **Under 5 years → LTRA (oral montelukast)**, especially where **asthma and allergic rhinitis coexist**.',
    '- **Over 5 years, not controlled on ICS + LABA → add LTRA.**',
    '- **⚠️ Try add-on therapy so that you do NOT increase the dose of ICS.**',
    '',
    '**Of no value: antibiotics** in the absence of bacterial infection, **cough medicines and decongestants**. **Antihistamines** are useful only for combined allergic rhinitis.',
    '',
    'Src: L31.2 slides 9–15; L31A pp.6–8'
  ].join('\n'),
  qs: []
},

{
  id: 'resp-17', w: 'high',
  h: 'Devices — why inhalation wins, and which device at which age',
  body: [
    '### Why the inhaled route',
    '- **Site specific** — high concentration delivered directly to the airway.',
    '- **Permits a very small dose.**',
    '- **Systemic side effects reduced to a minimum.**',
    '- **Rapid and predictable relief** with a SABA.',
    '- **Some drugs — ipratropium — can ONLY be given by inhalation**, being unabsorbed orally.',
    '- **Drawback: the patient** — improper technique, or refusal for fear of addiction.',
    '',
    '### The devices, and what each costs',
    '',
    '|Device|Suits|Wins|Loses|',
    '|---|---|---|---|',
    '|**MDI alone**|**Adolescents — needs cooperation**|Portable, easy; **deep slow inspiration then breath hold** raises lung deposition and cuts oropharyngeal deposition|**Less useful in an acute attack** — needs a deep breath; limited drugs|',
    '|**MDI + spacer**|**ALL ages — no cooperation or effort needed**|**Needs only tidal breathing**; **useful in acute attacks** when inspiratory effort is poor|Large; limited drugs; **spacers lose efficacy with time and need replacement**|',
    '|**Dry powder inhaler**|**≥ 6 years — needs effort**|Easy, portable, raises lung deposition|**Needs high flow**; **not useful in exacerbation**; **clumps with time → more oropharyngeal deposition**|',
    '|**Breath-actuated MDI**|**> 6 years**|No hand–breath coordination needed|Effort dependent|',
    '|**Nebulizer**|**Any age**|**Easy, no cooperation, wide drug range, can deliver O₂ in the session — used in acute asthma where oxygen is needed as well**|**Least efficient**; **largest oropharyngeal deposition**; very long sessions; needs electricity and pressurised air|',
    '',
    '### Choice of device by age',
    '',
    '|Age|Preferred|Alternate|',
    '|---|---|---|',
    '|**< 4 years**|**MDI + spacer with FACE MASK**|**Nebulizer with face mask**|',
    '|**4–6 years**|**MDI + spacer with MOUTHPIECE**|**Nebulizer**|',
    '|**> 6 years**|**DPI, breath-actuated MDI, or MDI with spacer**|**Nebulizer**|',
    '',
    '*Chosen on efficacy of drug delivery, cost effectiveness, safety and convenience.*',
    '',
    '*Defect note: L31A gives the spacer thresholds as face mask <3 y and mouthpiece ≥3 y, against L31.2’s <4 y and 4–6 y. Both printed, neither corrected.*',
    '',
    'Src: L31.2 slides 16–19; L31A pp.6–7'
  ].join('\n'),
  qs: []
},

{
  id: 'resp-18', w: 'high',
  h: 'Long-term management — the six parts, and what control means',
  body: [
    '### Asthma management has six interrelated parts',
    '- **1 — Educate the patient into a partnership** (health education).',
    '- **2 — Assess and monitor severity** by symptom report **and, as far as possible, lung function measurement**.',
    '- **3 — Avoid exposure to risk factors.**',
    '- **4 — An individual medication plan for long-term management.**',
    '- **5 — An individual plan for managing exacerbations.**',
    '- **6 — Regular follow-up care.**',
    '',
    '### The goals of successful management',
    '- **Symptoms:** **none by day and none by night** — minimal, ideally zero.',
    '- **Exacerbations:** **none in the previous 6 months.**',
    '- **Reliever:** **minimal SABA use, ≤ 2 per week.**',
    '- **Activity:** **normal levels, including exercise.**',
    '- **Lung function:** **as close to normal as possible.**',
    '- **Drugs:** **no adverse effects from asthma medication.**',
    '- **Long term:** **prevent irreversible airflow limitation · prevent asthma mortality.**',
    '- **Family:** **satisfy patient and family expectations.**',
    '',
    '**Complete control — six ticks:** no daytime symptoms · no night-time symptoms · **no limit on activities including exercise** · **no reliever use** · normal lung function · **no exacerbation needing hospitalization or oral steroids in the previous 6 months**.',
    '',
    '### Environmental control',
    '- **Reduce tobacco and other smoke exposure** — **second-hand cigarette smoke or e-cigarette vapour is the most devastating exposure to the airway**.',
    '- **Dust mites:** encase pillows and mattress; **mite-impermeable bedding may reduce exacerbations requiring hospitalization**.',
    '- **Pets:** remove from the home, or at least the bedroom.',
    '- **Cockroaches:** remove food and garbage. **Moulds:** reduce indoor humidity.',
    '- **Reduce airborne irritants — fumes.**',
    '- **Allergen immunotherapy is effective for atopic asthma due to a SINGLE allergen.**',
    '',
    '### Stepping up and down',
    '',
    '|Level of control|Action|',
    '|---|---|',
    '|**Controlled**|**Maintain, and find the LOWEST controlling step**|',
    '|**Partly controlled**|**Consider stepping UP to gain control**|',
    '|**Uncontrolled**|**Step up until controlled**|',
    '|**Exacerbation**|**Treat as an exacerbation**|',
    '',
    '**Five treatment steps** *(their drug content is printed as an image in both decks; conventionally step 1 as-needed reliever, 2 low-dose ICS, 3 low-dose ICS + LABA, 4 medium or high-dose ICS + LABA, 5 add a biologic or oral steroid — not in course material)*.',
    '',
    '**MART therapy:** a **single combined ICS + LABA inhaler used as BOTH maintenance and reliever**, in a small regular dose. **Increase the frequency up to 4 times if symptoms increase.** **Not for small children**; improves compliance and efficacy.',
    '',
    '### Risk factors for exacerbation',
    '**Nine of them:** **poor symptom control · ≥1 exacerbation in the previous year · SABA-only treatment without any ICS · over-use of SABA · incorrect inhaler technique · socioeconomic problems and poor adherence · smoking · low FEV1 · blood eosinophilia.**',
    '',
    '**Patient education covers:** what asthma is · regular or as-required medication · **inhaler technique** · the doses · **an asthma action plan** · what to avoid · how to monitor outcome · **when to start rescue medication and when to seek help**.',
    '',
    'Src: L31.2 slides 3–8, 30–31; L31A pp.8–9'
  ].join('\n'),
  qs: []
},

{
  id: 'resp-19', w: 'must',
  h: 'The acute attack — grading it, admitting it, and treating it',
  body: [
    '**Exacerbation:** **an acute or sub-acute worsening in symptoms and lung function from the patient’s usual status.** **A patient may present for the FIRST time during an exacerbation.**',
    '',
    '**Where each severity is treated: mild at home · moderate and severe in hospital · life-threatening in the PICU.**',
    '',
    '### Moderate vs severe (L31.2)',
    '',
    '|Feature|Moderate|Severe|',
    '|---|---|---|',
    '|**Speech**|**Able to talk**|**Too breathless to talk**|',
    '|**SpO₂**|**> 92 %**|**< 92 %**|',
    '|**RR 2–5 y**|**≤ 40 / min**|**> 40 / min**|',
    '|**RR 5–12 y**|**≤ 30 / min**|**> 30 / min**|',
    '|**RR 12–18 y**|**≤ 25 / min**|**> 25 / min**|',
    '|**HR 2–5 y**|**≤ 140 / min**|**> 140 / min**|',
    '|**HR 5–12 y**|**≤ 125 / min**|**> 125 / min**|',
    '|**HR 12–18 y**|**≤ 110 / min**|**> 110 / min**|',
    '|**Chest recession**|**Some intercostal recession**|**Use of accessory neck muscles**|',
    '',
    '**⚠️ Tachycardia:** a better guide to severity than respiratory rate — **but it is affected by β2-agonists**.',
    '',
    '**Life-threatening: silent chest · cyanosis · poor respiratory effort · exhaustion · arrhythmia and hypotension · altered consciousness · agitation and confusion · PEFR < 33 % of best · SpO₂ < 92 % at ALL ages.**',
    '',
    '### The same grading by age (L31A)',
    '',
    '|Feature|< 6 y mild/moderate|< 6 y severe|≥ 6 y mild/moderate|≥ 6 y severe|',
    '|---|---|---|---|---|',
    '|**Consciousness**|**Conscious**|**Agitated, confused or drowsy**|Same|Same|',
    '|**Speech**|**Sentences, normal cry**|**Words, or unable to speak**|Same|Same|',
    '|**SpO₂**|**≥ 92 %**|**< 92 %**|**≥ 90 %**|**< 90 %**|',
    '|**Heart rate**|**≤ 180 (0–3 y), ≤ 150 (4–5 y)**|**> 180 / > 150**|**< 120**|**> 120**|',
    '|**Respiratory rate**|**≤ 40**|**> 40**|**≤ 30**|**> 30**|',
    '|**Wheeze**|—|**A SILENT CHEST indicates severe or life-threatening disease**|—|Same|',
    '',
    '*Defect note: L31.2 uses < 92 % at every age; L31A uses < 90 % at 6 years and over. Both printed, neither corrected.*',
    '',
    '### Admit if, after high-dose inhaled bronchodilator, the child',
    '**Admit if:** **persistent breathlessness or tachypnoea · becoming exhausted · PEFR or FEV1 < 50 % of predicted or usual best · SpO₂ < 92 % in air.**',
    '',
    '### Treatment',
    '- **Oxygen if SpO₂ < 92 %**, targeting **94–98 %**.',
    '- **SABA to all children by MDI and spacer** — except a severe attack, where **nebulizer driven by high-flow oxygen** is used.',
    '- **A short course of oral steroid for 3–5 days should be given.**',
    '- **Add nebulized magnesium or nebulized ipratropium INITIALLY in a severe attack.**',
    '- **IV treatment is given in the ICU.**',
    '',
    '**Moderate attack:** SABA via spacer **2–4 puffs, increasing by 2 puffs every 2 minutes to 10 puffs** if needed · **oral prednisolone 1–2 mg/kg** · **monitor response for 15–30 minutes**.',
    '',
    '**Severe attack:** **high-flow oxygen** · SABA via spacer **10 puffs or nebulized salbutamol**, reassess and repeat · **oral prednisolone or IV hydrocortisone** · consider **inhaled ipratropium, IV β2-agonist or aminophylline, or nebulized magnesium**.',
    '',
    '**Life-threatening:** as for severe, but **nebulized ipratropium is given rather than considered**, response is assessed **continuously**, and **the PICU is involved**.',
    '',
    '**Shared aftercare — printed three times:** if responding, **continue bronchodilators every 1–4 hours as needed** · **discharge when stable on 4-hourly treatment** · **continue oral prednisolone for 3–7 days** · **arrange follow-up**.',
    '',
    '**Not responding:** **transfer to PICU** · consider the IV therapies not yet used (**magnesium, aminophylline, β2-agonist**) · **chest X-ray for pneumothorax or infection** · **blood gases** · **mechanical ventilation may be needed**.',
    '',
    '**Doses, as printed:**',
    '- **Nebulized salbutamol:** **2.5 mg — 0.5 ml of 0.5 % solution — in 3 ml normal saline.**',
    '- **± nebulized ipratropium:** **every 20 minutes for the first hour.**',
    '- **Oral prednisolone:** **1–2 mg/kg**, **max 20 mg under 2 y, 30 mg at 2–6 y.**',
    '- **IV steroid equivalents:** **dexamethasone 0.15–0.2 mg/kg · hydrocortisone 5–10 mg/kg · methylprednisolone 1–2 mg/kg.**',
    '- **IV magnesium sulfate:** **40–50 mg/kg infused over 1 hour.**',
    '',
    '**The emergency-department algorithm:** assess (history, examination, **PEF or FEV1**) → **bronchodilators, oxygen if needed** → **good response: observe at least 1 hour, discharge if stable** → **incomplete or poor response: ADD SYSTEMIC GLUCOCORTICOSTEROIDS** → good response discharge, **poor response admit** → **respiratory failure: admit to ICU**.',
    '',
    'Src: L31.2 slides 32–46; L31A pp.9–10'
  ].join('\n'),
  qs: []
},

{
  id: 'resp-20', w: 'must',
  h: 'Bronchiolitis — two definitions that disagree on the age, and RSV',
  body: [
    '**Bronchiolitis:** an **acute viral respiratory infection involving the terminal and respiratory bronchioli in infants**, producing **small airways obstruction**.',
    '',
    '**⚠️ The split:** the European and American guideline definitions differ, and **the difference is the age**.',
    '- **European:** a **seasonal viral illness in infants under 12 MONTHS**, with **nasal discharge, cough, tachypnoea, retractions and BILATERAL CRACKLES**.',
    '- **American Academy of Pediatrics:** a disorder in infants **under 24 MONTHS**, most commonly from a **viral lower respiratory tract infection**, characterised by **WHEEZING**.',
    '',
    '*The two definitions also pick different cardinal signs — crackles in Europe, wheeze in North America.*',
    '',
    '### Aetiology',
    '- **RSV — 62 %.**',
    '- **The remaining 38 %:** **human bocavirus · rhinovirus · human metapneumovirus · influenza A and B · parainfluenza 1–3**.',
    '',
    '### RSV — structure and why it matters',
    '- **Single-stranded RNA genome, 10 genes encoding 11 proteins.**',
    '- **G protein: attachment** to the mucosal epithelium of nose or eyes.',
    '- **F protein: FUSION** with epithelial cell membranes — **entry into the host cell**, and **fusion with adjacent cells to form syncytia**.',
    '- **Variation in the G glycoprotein** gives **two major subtypes, groups A and B**, with **12 genotypes of RSV-A and 20 of RSV-B**.',
    '',
    '*The F protein is the drug target — every prophylactic in resp-22 is aimed at it.*',
    '',
    '### The global burden',
    '- **RSV is the leading cause of severe respiratory infection.** **22 % of all LRTI is RSV**, **33.8 million cases worldwide**.',
    '- **Leading cause of paediatric hospitalization — 3.6 million**; **39 % under 6 months**, 61 % from 6 months to 5 years.',
    '- **Mortality: 46 % under 6 months**, 54 % from 6 months to 5 years. **Over 99 % of deaths are in low-income countries.**',
    '- **Mortality is 30× higher in HIV infection, 13× in VLBW infants under 1,500 g** compared with over 2,500 g, and **4.3× in primary immunodeficiency**.',
    '',
    '**RSV causes three grades of illness: upper respiratory tract infection · lower respiratory tract infection (5 %) · severe illness — bronchiolitis and pneumonia.**',
    '',
    'Src: L32 pp.1–3'
  ].join('\n'),
  qs: []
},

{
  id: 'resp-21', w: 'must',
  h: 'Who gets it badly, how it obstructs, and the shape of the illness',
  body: [
    '### Transmission and timing',
    '- **By droplets, large particles and fomites** — **directly** by contact with infectious secretions, **indirectly** from the environment.',
    '- **RSV survives 6–12 hours or more on hard, non-porous surfaces.** **Nosocomial infection remains a major problem.**',
    '- **Incubation 2–8 days.** **Viral shedding: 1–2 days in adults, an average of 9 days in infants, up to 4 weeks in critically ill infants.**',
    '',
    '### Risk factors for SEVERE bronchiolitis',
    '- **Core four: age under 3 months · male sex · low socioeconomic conditions · RSV infection.**',
    '- **Also: maternal smoking · prematurity with BPD · cardiovascular disease · immunodeficiency · chronic respiratory disease.**',
    '- **⚠️ The only known PROTECTIVE factor is maternal breastfeeding.**',
    '',
    '**The eleven-item high-risk list:**',
    '- **Prematurity:** **born under 35 weeks’ gestation.**',
    '- **Age:** **under 3 months at presentation.**',
    '- **Intake:** **under 50 % of usual fluid intake in the preceding 24 hours.**',
    '- **Cardiac:** **haemodynamically significant cardiac disease.**',
    '- **Lung:** **chronic lung disease · BPD.**',
    '- **Other disease:** **neuromuscular disorder · Down syndrome · immunodeficiency.**',
    '- **Environmental:** **tobacco smoke or air pollution.**',
    '- **Social:** distance from hospital, poor circumstances, **parents unable to spot red-flag symptoms**.',
    '',
    '### Pathogenesis, in three steps',
    '- **RSV replicates in and DESTROYS the ciliated epithelial cells lining the airways.**',
    '- **Either complete obstruction → ATELECTASIS, or a ball-valve effect → alveolar OVERINFLATION.**',
    '- **Both give V/Q mismatch → hypoxaemia.**',
    '',
    '### Diagnosis and the course',
    '- **Bronchiolitis is diagnosed on CLINICAL GROUNDS ALONE.**',
    '- **In an infant under 12 months exposed to a child or adult with a respiratory viral infection:** coryza, then signs of lower respiratory infection — **respiratory distress, low SpO₂, rales, and only rarely wheeze in severe cases**.',
    '- **Timeline: incubation 1–5 days → coryza for 3 days → LRTI symptoms.** **Fever can be present during the coryza and absent once the LRTI starts.**',
    '- **⚠️ Reduced intake, dehydration and severe respiratory symptoms PEAK 3–5 DAYS after the onset of rhinitis** — the child brought in on day 1 has not yet peaked.',
    '- **Chest radiographs and blood tests only if clinically indicated.** **ABG only in more severe cases.**',
    '- **Rapid virus detection** reduces antibiotic use and **matters for cohorting**.',
    '',
    'Src: L32 pp.2–5'
  ].join('\n'),
  qs: []
},

{
  id: 'resp-22', w: 'must',
  h: 'Bronchiolitis management — mostly supportive, and the drugs that do nothing',
  body: [
    '### Indications for hospital admission',
    '**Nine of them:** **respiratory distress · apnoea · tachypnoea · oxygen requirement · poor feeding · dehydration · a requirement for continuous clinical airway clearance · underlying chronic disease · inappropriate social and family conditions.**',
    '',
    '**PICU admission: failure to maintain SpO₂ > 92 % ON oxygen therapy · deteriorating respiratory status with exhaustion · recurrent apnoea.**',
    '',
    '**CPAP and PICU: severe respiratory distress · need for an FiO₂ > 0.5 · the presence of apnoea.**',
    '',
    '### Mild disease',
    '- **Support breastfeeding in small frequent feeds.**',
    '- **Clean the upper airways with saline** — an important first step in initial management.',
    '',
    '### Severe disease',
    '- **In severe bronchiolitis, NG feeding or IV hydration to prevent dehydration is limited to no more than 80 % of the daily requirement.**',
    '- **Oxygen only when SpO₂ in room air is < 92 % in the absence of respiratory distress.** **Pre-warmed and humidified**, by **low-flow nasal cannula or head box**.',
    '- **HHHFNC — heated humidified high-flow nasal cannula:** reduces the **work of breathing**, prevents **dynamic airway collapse** and improves gas exchange by delivering warmed humidified oxygen at a known FiO₂ and a **flow a little above the infant’s peak inspiratory flow, usually 1–2 L/kg body weight**.',
    '- **⚠️ HHHFNC does NOT shorten the course of the disease** — it reduces the need for intensive care and mechanical ventilation.',
    '',
    '### The drugs with no role',
    '**No role:** **nebulized hypertonic saline 3 % · nebulized ipratropium (Atrovent) · nebulized ICS or systemic steroids · nebulized DNase · antibiotics except for secondary bacterial infection — NONE has a role.**',
    '',
    '**The one exception: nebulized salbutamol or adrenaline may be tried, and CONTINUED ONLY IF THERE IS A GOOD RESPONSE.**',
    '',
    '### Discharge criteria — three, and they are specific',
    '- **SpO₂ stable at 94 % in room air with no respiratory distress for 4 hours, INCLUDING during sleep.**',
    '- **Adequate daily oral intake — over 75 % of usual — at a level preventing dehydration.**',
    '- **Adequate parental care and family education about the potential duration of acute symptoms.**',
    '',
    '### Prophylaxis — all three target the F protein',
    '- **Palivizumab:** a **humanised monoclonal anti-RSV antibody** licensed to prevent severe disease from RSV infection.',
    '- **Nirsevimab (Beyfortus):** a monoclonal antibody against **prefusion F**, given **in early infancy and beyond for high-risk infants**.',
    '- **RSVpreF maternal (Abrysvo):** a **bivalent RSV A/B prefusion F vaccine given during pregnancy**.',
    '',
    'Src: L32 pp.5–8'
  ].join('\n'),
  qs: []
}

    ]
  }
};
