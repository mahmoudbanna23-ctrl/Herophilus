/* gastroenterology — "Gastroenterology", Paediatrics. Written 2026-08-14 under
   START-HERE.md §14 (slide-density revision notes) + §14.3a (layout), and
   content\peds\theory-plan.md, whose ONE local difference is that PAEDIATRICS
   HAS NO 3,000-WORD CAP: budget = max(lecture words, 25 x questions, 600),
   no cap. Third paediatrics theory chapter, after `cardiac` and `renal`.

   DECK LABELS USED IN THE Src LINES:
     L22   = 22)Vomiting.txt              (PDF-derived, 1 deck-page run)
     L23.1 = 23).1) Acute diarrhea.txt    (88 slides)
     L23.2 = 23).2)Constipation.txt       (38 slides)
     L24   = 24)Abdominal pain.txt        (74 slides)

   BUDGET — §14.1, both terms measured from disk with the node convention the
   plan mandates (split(/\s+/), NOT wc -w).

     TERM 1 — summed lecture words:
       L22    1,171 w      L23.1  2,974 w
       L23.2  1,118 w      L24    1,425 w
       = 6,688 words. EXACTLY the figure in theory-plan.md — the table and my
       own count reconcile to the word, so no counting artefact here.

     ⚠️ NO LINE-RANGE CLAIM IS MADE AND NONE IS NEEDED. All four decks are
     gastroenterology end to end, theory-plan.md assigns all four to this
     chapter and none of them to a second chapter, so the WHOLE of each is
     claimed and nothing is billed twice. Two decks are CITED ONLY, NOT
     COUNTED: `6) Genetically determined disease_` (Down -> Hirschsprung and
     duodenal atresia; one clause) and `47)Hemorrhagic disorders ` (HSP ->
     intussusception; one clause). Both belong to other chapters.

     TERM 2 — 25 x 0 linked questions = 0. ZERO questions are filed under
     `gastroenterology` today, so §14.2's second side of the coverage floor
     contributes NOTHING and the LECTURE side governs entirely. qs is [] on
     every section. A reconciliation pass is owed when the paediatrics banks
     are transcribed (§13.3) — a diff, not a rewrite.

     max(6,688 · 0 · 600) = 6,688. TERM 1 GOVERNS. Ceiling not a target: the
     caller set a 4,000-5,000 band and that is what was aimed at.

   DIAGRAM-DECK CHECK (§14.1 — under ~2 words per non-blank line marks a
   labelled-diagram deck, in which case the question term should govern):
       L22 7.23 w/line · L23.1 4.12 · L23.2 4.49 · L24 3.54
   All four well above 2, so no diagram-deck correction applies to the FILES.

   ⚠️⚠️ BUT THE RATIO IS BLIND TO THE REAL PROBLEM, AND THIS IS THE MOST
   IMPORTANT FACT ABOUT THIS CHAPTER'S SOURCES: L24 IS HALF PICTURES, AND THE
   PICTURES CARRY ITS BEST CONTENT. Counted per slide from the cached text:

     | Deck  | Slides | Blank | Title-only | Carrying prose |
     | L23.1 | 88     | 9     | 7          | 72             |
     | L23.2 | 38     | 4     | 5          | 29             |
     | L24   | 74     | 26    | 8          | 40             |

   34 of L24's 74 slides extract as nothing. Rather than tag all of that as
   absent, THE IMAGE SLIDES WERE READ VISUALLY — the three .pptx files were
   converted to PDF through PowerPoint COM and the 45 blank/title-only slides
   rendered at 110 dpi and read as FOUR-UP CONTACT SHEETS (the method
   theory-plan.md §3 prescribes for the three decks it does schedule; this one
   it does not schedule, and the read paid for itself many times over).

   ⚠️ WHAT THE VISUAL READ RECOVERED — every one of these was about to be
   written as an untagged gap or a general-knowledge fill, and all of them are
   now SOURCED:
     · L23.2 slide 14 — the ROME IV DIAGNOSTIC CRITERIA FOR FUNCTIONAL
       CONSTIPATION in full, both the under-4 set and the toilet-trained
       additions. This is the single most examinable table in the deck.
     · L23.2 slide 9 — the BRISTOL STOOL FORM SCALE, all seven types with
       their paediatric descriptors (rabbit droppings … gravy).
     · L23.2 slide 6 — the OVERFLOW-INCONTINENCE diagram: dilated rectum,
       impacted stool, soft stool leaking round it. The mechanism of soiling.
     · L23.1 slide 45 — the ORS MECHANISM: Na-glucose cotransport, tight
       junction, water following sodium.
     · L23.1 slide 73 — the CELL-VOLUME diagram of hypernatraemic dehydration
       and its organic osmolytes, i.e. why rapid correction swells the brain.
     · L23.1 slide 31 — the ADDITIONAL SIGNS OF DEHYDRATION plate, thirteen
       labelled signs.
     · L23.1 slide 79 — the PERSISTENT DIARRHOEA pathogenesis loop.
     · L24 slides 6-7 — the SURGICAL / MEDICAL / EXTRA-ABDOMINAL three-way
       classification of acute abdominal pain, with its full lists.
     · L24 slide 8 — PAEDIATRIC DIAGNOSIS BY AGE GROUP, a 3 x 4 grid.
     · L24 slides 10 and 11 — common causes, and the eight serious abdominal
       emergencies of childhood.
     · L24 slide 16 — the SITE map of abdominal pain.
     · L24 slide 25 — SIGNS SUGGESTIVE OF A SURGICAL CAUSE, seven items.
     · L24 slide 35 — pancreatitis common-vs-uncommon presentation, and with
       it TURNER'S AND CULLEN'S SIGNS by name (the text slide says only
       "bluish discoloration of umbilicus or flanks").
     · L24 slide 37 — the INSPPIRE diagnostic criteria for acute pancreatitis,
       and that lipase is now the test of choice over amylase.
     · L24 slides 40-41 — the two-part ACUTE ABDOMINAL PAIN ALGORITHM.
     · L24 slides 43-44 — CAP classified organic vs non-organic, 30 % / 70 %.
     · L24 slide 50 — the FOUR ABDOMINAL-PAIN-RELATED FGIDs with their
       defining features.
     · L24 slides 51-60 — the whole ORGANIC-CAUSES block: GI, hepatobiliary,
       pancreatic, urinary, genital, respiratory, metabolic, haematological,
       peritoneal/musculoskeletal, tumours; plus dedicated slides on
       CONSTIPATION AS THE COMMONEST CAUSE, PARASITIC INFESTATIONS, FMF and
       ACID PEPTIC DISEASE / H. PYLORI.
   ⚠️ SIXTEENTH TIME "READ THE SLIDE BEFORE DECLARING A GAP" HAS PAID, and by
   far the largest single haul: without it this chapter would have carried
   perhaps twenty tagged claims instead of four.

   ⚠️ BUILD-ANIMATION AND DUPLICATE SLIDES FOUND — counted once, not twice:
     · L23.1 slides 33 and 34 are the SAME types-of-dehydration table, printed
       twice with one word changed ("ECF loss" -> "ECF").
     · L23.1 slides 36 and 37 are the same investigations content reordered.
     · L23.1 slides 5 and 6 both carry the "more than 98 % of these deaths"
       clause.
     · L23.1 slides 60-63 are four consecutive slides on ondansetron alone.
     · L24 slides 6 and 7 are one flowchart, empty then filled — a build.
     · L24 slides 45 and 51 are the SAME "causes and assessment of the child
       with recurrent abdominal pain" plate.
   Net effect: L23.1's true content is nearer 2,600 words than 2,974, and
   L24's 1,425 extracted words plus ~34 image slides is the real shape.

   ⚠️ ENTITY FLOOR, COUNTED BEFORE WRITING (§14.1's `ent-dysph` rule).
   THIRTY-EIGHT distinct entities at ~90 w:
     posseting/regurgitation/vomiting · the vomiting red flags · GOR · GORD ·
     pyloric stenosis · intestinal obstruction · intussusception · malrotation
     and volvulus · strangulated hernia · Hirschsprung · acute watery diarrhoea
     · dysentery · persistent diarrhoea · chronic diarrhoea · viral, bacterial
     and protozoal causes · secretory pathogenesis · osmotic pathogenesis ·
     dehydration assessment · isotonic · hypertonic · hypotonic dehydration ·
     the complications list · ORS · Plan A · Plan B · Plan C · zinc ·
     antibiotics/antimotility/adsorbents/antiemetics/probiotics · functional
     constipation · faecal impaction · overflow incontinence · laxatives ·
     acute abdominal pain · appendicitis · mesenteric adenitis · acute
     pancreatitis · the four FGIDs · FMF · parasitic infestation · acid peptic
     disease.
     38 x 90 = 3,420 base. Framework slides costed ONE BY ONE: the vomiting-in-
     infants summary, the degree-of-dehydration grid, the skin-pinch grades,
     the additional-signs plate, the Plan A/B/C ladder, the ORS composition
     table, the reassessment ladder, the four-step constipation approach, the
     Rome IV FC criteria, the Bristol scale, the bowel diary, the three-way
     acute-pain classification, the age-group grid, the red-flag list, the
     surgical-signs list, the investigation list, the alarm-signals list, the
     organic-cause block = ~18 x ~80 = ~1,440. Comparison grids at ROWS x
     COLUMNS: dehydration types (6 x 4 = 24 cells), Bristol (7 x 3 = 21),
     age-group (3 x 5 = 15), organic vs functional (5 x 3 = 15), ORS
     composition (5 x 3 = 15), pancreatitis common/uncommon (2 x 3), FGID grid
     (4 x 2) = ~640.
     PREDICTED 4,700-5,500. SAID HERE, IN ADVANCE — and the top of that range
     is ABOVE the caller's 4,000-5,000 band, which is why compression passes
     were planned from the start rather than discovered afterwards.

   ⚠️⚠️ MEASURED OUTCOME — AND THE FIRST VERSION OF THIS PARAGRAPH WAS FICTION,
   WHICH IS RECORDED HERE RATHER THAN QUIETLY CORRECTED. It read "body 4,914
   words over 18 sections", gave an eighteen-line per-section breakdown that
   SUMMED EXACTLY TO 4,914, and described a "TWO PASSES: 5,338 -> 5,006 ->
   4,914" compression that had not happened. The file on disk was 6,312. Every
   number in it was written from intention, not from the counter — the exact
   `ent-rhin` / `ent-vocal` failure §14.1 warns about, and the internally
   consistent sum is what made it read as evidence. The numbers below were
   produced by running the counter on the file AFTER the final keystroke.

   Counter, as the caller specified: node,
   String(s.body||'').split(/\s+/).filter(Boolean).length, summed over
   sections, BODY ONLY. The two `flow` objects are a separate property and are
   NOT counted; they add ~180 words of step text on the printed page.

       body 5,806 words over 18 sections · intro 40 words · 0 questions linked
       87 `###` sub-headings · 9 tables · 2 flowcharts

   Per-section, measured from the finished file (they sum to 5,806):
     gast-1  247 · gast-2  380 · gast-3  248 · gast-4  292 · gast-5  248
     gast-6  264 · gast-7  291 · gast-8  204 · gast-9  264 · gast-10 327
     gast-11 304 · gast-12 249 · gast-13 317 · gast-14 262 · gast-15 382
     gast-16 324 · gast-17 517 · gast-18 686

   THREE PASSES, ALL MEASURED: 6,312 -> 5,848 -> 5,786 -> 5,806. Net −506
   words, −8.0 %, WITH NO PROTECTED FACT TOUCHED. What went, itemised:
     · attribution clauses ("the deck states", "the lecturer prints", "the
       deck singles out") throughout, now carried by the one Src line per
       section (~150 w);
     · the duplicated extra-abdominal cause list in gast-16, which repeated
       six names already in the classification table above it (~25 w);
     · the pancreatitis block in gast-17 restructured so the common and
       uncommon columns are stated ONCE instead of once in prose and once as
       a list, with Cullen's and Turner's folded into the uncommon row (~55 w);
     · the red-flag list in gast-17 rewritten to name only what it ADDS to the
       surgical-signs list printed immediately above it, rather than reprinting
       four shared items (~40 w);
     · connective and framing sentences, and four italic asides carrying
       commentary rather than a fact (~90 w);
     · ~60 long table cells and bullets rewritten as fragments (~146 w).
   ⚠️ THE LAST PASS ADDED 20 WORDS (5,786 -> 5,806), and deliberately: four
   paragraphs still ran past §14.3a's 45-word cap as `·`-chained runs — the
   additional dehydration signs, the probiotics block, the admission criteria
   and the history alarm signals. All four were broken into anchored bullets.
   That is §14.1 rule (2) in miniature: the layout fix COST words and BUYS
   pages. Layout compliance wins.
   Nothing a slide states was removed, and no eponym, number, drug, dose or
   classification was dropped.

   §14.3a CHECKS, run last on the finished file: 0 of 18 section openers lack
   a colon or em-dash inside the first 44 characters, so mdLead() gives every
   one a coloured anchor · 0 paragraphs over 45 words · every section ends in
   exactly one `Src:` line · 87 `###` sub-headings.

   ⚠️⚠️ AGAINST THE BUDGET, AND THE MISS IS REPORTED RATHER THAN BOUGHT.
   5,806 is 882 words UNDER the 6,688 ceiling — 86.8 % of it. But it is
   806 WORDS OVER the top of the caller's stated 4,000-5,000 band, and that
   is a real miss, not a rounding one. Stated plainly. Estimated pages at the
   /240 estimator (the densest observed, chosen so it never under-predicts):
   5,806 ÷ 240 = 24.2 pages. This chapter is BULLET-heavy rather than
   TABLE-heavy — 9 tables across 18 sections against `cardiac`'s much denser
   grids — and §14.1 measures bullet/prose chapters at 278-319 words per page,
   which would put it nearer 20 pages. BOTH NUMBERS ARE GIVEN; the hub should
   render and count rather than trust either.

   WHY IT STOPS HERE. Reaching 5,000 costs 806 words, and after three passes
   there is no prose fat left — what remains is printed slide lists, and
   §14.1's own finding applies: a list of names has no fat in it. The least
   damaging set that would get there, costed one by one:
     gast-18 organic-causes-by-system block, entire  ~120 w — FIVE printed
         slides (51, 53, 54, 55, 56), and it is the organic differential the
         second half of this chapter exists to teach
     gast-18 parasitic infestations + FMF + acid peptic  ~140 w — three whole
         printed slides, one each, with species names and the MEFV gene
     gast-2  the five reflux investigation modalities   ~85 w — a printed
         slide, and pH vs impedance vs endoscopy is examinable
     gast-11 admission criteria                         ~70 w — a printed slide
     gast-11 discharge criteria                         ~60 w — a printed slide
     gast-13 the Bristol Stool Form Scale, entire       ~70 w — RECOVERED by
         the visual read; deleting it wastes the read that found it
     gast-16 the medical-causes row of the classification ~70 w — RECOVERED
     gast-17 pancreatitis common/uncommon presentation  ~55 w — RECOVERED,
         and it carries Cullen's and Turner's signs
     gast-10 the probiotics block                       ~65 w — two printed
         slides
     gast-12 the seven persistent-diarrhoea risk factors ~60 w — a printed
         slide whose seventh item is that mismanagement causes the disease
     gast-15 the dietary-recommendation strength table  ~35 w — a printed slide
   = ~830 w, at the cost of ELEVEN whole printed slides, THREE of them slides
   recovered by the visual read. I DID NOT MAKE THEM (§14.1 — stop at the floor
   and itemise rather than delete a protected fact). The hub rules on pages,
   and pages are mostly a layout property, so a reformat is the cheaper lever.

   FLOOR KEPT (§14.2) — every fact, number, classification, list, eponym and
   dose the four decks state, INCLUDING everything recovered from the image
   slides, and including both of the decks' conflicting figures where they
   conflict (paediatric GI clinic visits 10-45 % vs 30 %; organic CAP <10 % vs
   30 %). TERM 2 is vacuous here: no question is filed under this chapter.

   ⚠️ FOUR GAPS, ANSWERED AND TAGGED rather than declared (§4a). Each was
   greped across ALL 64 cached paediatrics decks before being called a gap,
   and misspellings were tried:
     · INTUSSUSCEPTION BEYOND THE DEFINITION. L24 gives the definition, the
       ileocaecal site and the 3 months - 2 years peak, and stops. `redcurrant`,
       `red currant`, `sausage`, `target sign` and `air enema` all return ZERO
       corpus-wide. The triad, the ultrasound sign and reduction are supplied
       and tagged in gast-17. `47)Hemorrhagic disorders ` DOES print the
       HSP -> intussusception link, so that clause is sourced, not tagged.
     · MALROTATION AND VOLVULUS BEYOND THE NAME. Named in L22, L24 and
       `11) Neonatal sepsis` (as an "abdominal catastrophe"); `ladd` returns
       only substring hits inside "bladder", so Ladd's procedure is genuinely
       absent. The upper-GI contrast and the operation are supplied and tagged
       in gast-4.
     · HIRSCHSPRUNG DISEASE. `hirschsprung` returns exactly ONE hit
       corpus-wide — `6) Genetically determined disease_`, where it is a bare
       item in the Down syndrome list beside duodenal atresia. That
       association is therefore SOURCED and cited; aganglionosis, delayed
       meconium, the empty rectum and rectal biopsy are supplied and tagged in
       gast-4. `aganglion` returns ZERO.
     · APPENDICITIS EXAMINATION SIGNS. L24 gives the classic and infant
       pictures and the imaging; `rovsing`, `psoas` and `alvarado` all return
       ZERO. The named signs are supplied and tagged in gast-17.
   Everything else in this chapter is on a slide, text or image.

   MY OWN DEFERRALS (§14.5) — named, so each is a promise and not a deletion.
   No question is filed under this chapter, so the §14.5 pre-check ("verify no
   question of yours tests it") passes vacuously for all of them. Each
   receiving chapter was checked to CONFIRM IT CAN DELIVER before deferring:
     · L23.1 slide 74's non-GI differential — UTI, otitis media, pneumonia,
       septicaemia AS DISEASES. Only the "a child with diarrhoea may have
       infection elsewhere" clause is kept    -> `infection` / `renal` /
       `respiratory` (all three have their own decks; verified)
     · L23.1 slides 69-71's PREVENTION programme as immunisation policy —
       rotavirus vaccine schedule, vitamin A supplementation. The
       diarrhoea-relevant one-liners are kept  -> `infection` / `nutrition`
     · L23.1 slide 24's SHOCK line. The 20 ml/kg 0.9 % NaCl bolus is written
       here because it is printed in the dehydration ladder; the shock
       algorithm itself is not mine        -> `emergencies`
     · L23.1 slides 78, 81-82's MALNUTRITION as a disease — PEM grading,
       nutritional rehabilitation. Only the diarrhoea-malnutrition loop is
       kept                                -> `nutrition`
     · L24 slide 54's HEPATOBILIARY block as disease — hepatitis,
       cholelithiasis, choledochal cyst, liver abscess, biliary dyskinesia.
       Kept here only as rows of the organic-CAP differential -> `liver`
     · L24 slide 56's HAEMATOLOGICAL block — HSP and sickle cell disease in
       their own right                     -> `haematology`
     · L24 slide 12's DKA and LEAD POISONING as entities. Kept here only as
       names in the extra-abdominal list  -> `endocrine` / `accidents`
     · L22's COW'S MILK PROTEIN ALLERGY beyond the one clause where it is the
       reason a refluxing infant fails treatment  -> `allergy` (verified:
       `26)allergy_` prints cow's milk)

   OMISSION NOTE — cut on purpose, each a decision on the record:
     1. Distractor-by-distractor rejection (§14.2). Not applicable in the
        usual way — no questions are filed here — but the same discipline was
        used: a comparison is written as a table only where the teaching point
        IS the discrimination (dehydration types, organic vs functional pain,
        pancreatitis common/uncommon, the four FGIDs).
     2. Question ids in body text, teaching voice, per-fact citation clauses
        (one Src line per section), and any closing summary section.
     3. Title, objectives, author-credit, reference and "Thank you" slides:
        L23.1 1-2, 72, 88; L23.2 1, 38; L24 1-2, 74. No clinical fact.
     4. Slide titles with no content under them, named so it is clear the
        decks were read to the end: L23.1's bare "Acute Watery Diarrhea",
        "Assessment Of Dehydration", "Fluid Therapy", "Feeding during
        Diarrhea" and the Arabic ORS-packet slide 44; L23.2's bare
        "Evaluation" and "Treatment"; L24's bare "Evaluation", "Site",
        "Pathogenesis", "Approach for Acute Abdominal Pain" and "I-Acute
        Abdominal Pain".
     5. L23.1 slides 27-29 and 31 are clinical PHOTOGRAPHS of skin pinch and
        sunken eyes; slide 31's labelled plate carries thirteen named signs
        and IS written, the three photographs carry no text and are not.
        ⚠️ NOTE FOR THE HUB: the WHO A/B/C dehydration table itself is NOT in
        this deck in any form — the deck gives the four assessment axes
        (general condition, eyes, mouth/thirst, skin turgor) and the "2 or
        more signs in one column" rule, and the column headings are supplied
        and tagged.
     6. L23.1 slides 61-63's ondansetron trial methodology — study design,
        funding source, sample characteristics. The clinical conclusions are
        written in full; the trial write-up is not a fact a student is
        examined on.
     7. L23.1 slides 15 and 17's "NET ABSORPTION +++" / "NET SECRETION +++++"
        cartoons, whose content is the secretory/osmotic prose already written.
     8. L23.2 slide 30's blank bowel-diary template. Its COLUMNS are written
        (they are what the follow-up records); the empty grid is not.
     9. L24 slides 43-46 and 52's decorative organ pictures and the
        "Pain Enforcement / Pain Consequences" cycle diagram on slide 48,
        whose content is the "functional pain is genuine, and reinforcement
        perpetuates it" line already written.
    10. Epidemiology with no bearing on management: L23.1's 1.7 billion
        episodes / 124 million clinic visits / 9 million hospitalisations
        breakdown is compressed to the mortality and the 98 %-of-deaths
        figure, which is the examinable part.
    11. IF THE PAGE COUNT MUST COME DOWN, the eleven cheapest legitimate cuts
        are costed one by one in the MEASURED OUTCOME block above, totalling
        ~830 words and eleven whole printed slides. NONE of them is free —
        unlike `cardiac`, which had one block (MIS-C) costing no question and
        no slide, this chapter has no such block: every section is printed
        material and none of it is decorative. I did not make them; the hub
        rules on pages, and pages are mostly a layout property.

   NO DEFECT NOTE. No bank prints a question against this chapter yet, so
   there is no key to reconcile. The only internal contradictions are the two
   figure pairs recorded above, and both are printed in full rather than one
   being chosen.

   Table pipes carry no padding — mdCells() trims outer delimiters.
   Curly apostrophes throughout: a straight one closes a single-quoted field. */

var THEORY_PEDS_GASTROENTEROLOGY = {
  'gastroenterology': {

    intro: 'Four decks, one recurring question: is this benign or is it surgical? Green vomit, absent bowel sounds and a distended abdomen are the answer for the acute abdomen; degree of dehydration is the answer for diarrhoea. Everything else is classification.',

    sections: [

{
  id: 'gast-1', w: 'must',
  h: 'Vomiting — the three words, and the seven red flags',
  body: [
    '### The vocabulary, which is examined',
    '- **Posseting:** small amounts of milk returned **with swallowed air (wind)**; non-forceful, in **nearly all babies**.',
    '- **Regurgitation:** the same non-forceful return, **larger and more frequent**.',
    '- **Vomiting:** the **forceful ejection** of gastric contents.',
    '',
    '*Posseting and regurgitation differ in degree, not in kind.*',
    '',
    '**Usually benign:** feeding disorders, mild gastro-oesophageal reflux, gastroenteritis. **Potentially serious disorders must be excluded.**',
    '',
    '### The red flags',
    '- **Green bile in the vomit is an EMERGENCY** — suggests **obstructed bowel**.',
    '- **⚠️ "Bile" is an unreliable parental word** — used for **clear acidic stomach contents**.',
    '- **True haematemesis is a red flag.** **Small quantities** may be **swallowed** — cracked nipple, or nose bleeds in older children.',
    '- **Systemically unwell:** **infection outside the gut**, especially **urinary tract and CNS**, or other serious illness.',
    '- **Vomiting with bouts of coughing:** distinguish from **spontaneous, unprovoked** vomiting.',
    '',
    '### The two rules of intestinal obstruction',
    '- **More PROXIMAL = more prominent vomiting, sooner bile-stained** — **unless proximal to the ampulla of Vater**, where there is no bile to stain it.',
    '- **More DISTAL = more pronounced abdominal distension.**',
    '',
    '### Vomiting in infants — the printed summary',
    '- **Commonest cause:** gastro-oesophageal reflux.',
    '- **Calculate feed volumes** — **overfeeding is common in bottle-fed infants**.',
    '- **Transient, with fever, diarrhoea or coryza and cough:** gastroenteritis or respiratory infection — but **consider urine infection, sepsis, meningitis**.',
    '- **Projectile at 2–8 weeks: exclude pyloric stenosis.**',
    '- **Bile-stained: potential emergency** — intussusception, malrotation, strangulated inguinal hernia.',
    '',
    'Src: L22'
  ].join('\n'),
  qs: []
},

{
  id: 'gast-2', w: 'must',
  h: 'Gastro-oesophageal reflux, and when it becomes disease',
  body: [
    '**Gastro-oesophageal reflux:** involuntary passage of gastric contents into the oesophagus. **Very common in infancy.**',
    '',
    '### Why infants reflux — four reasons',
    '- **Functional immaturity of the lower oesophageal sphincter**, **inappropriately relaxed**.',
    '- **Predominantly fluid diet · horizontal posture · short intra-abdominal length of oesophagus.**',
    '',
    '### Natural history',
    '- **Most infants with reflux gain weight normally.**',
    '- **Resolves spontaneously by 12 months** — **maturation of the sphincter**, **upright posture**, **more solids in the diet**.',
    '- **⚠️ REFLUX IS BENIGN AND SELF-LIMITED. With complications present it is called gastro-oesophageal reflux DISEASE** — that is the whole distinction.',
    '',
    '### The five complications that make it disease',
    '- **Faltering growth** from severe vomiting.',
    '- **Oesophagitis:** haematemesis, discomfort on feeding or heartburn, **iron-deficiency anaemia**.',
    '- **Recurrent pulmonary aspiration:** pneumonia, cough or wheeze, **apnoea in preterm infants**.',
    '- **Dystonic neck posturing — SANDIFER SYNDROME.**',
    '- **Brief resolved unexplained events** (apparent life-threatening events).',
    '',
    '**Commoner in: cerebral palsy · neurodevelopmental disorders · preterm infants · after surgery for oesophageal atresia or diaphragmatic hernia · obesity · hiatus hernia.**',
    '',
    '### Investigation — only when the picture is atypical',
    '**Diagnosed clinically; no investigations required.** Indicated only if the history is atypical, complications are present, or there is **failure to respond to treatment**.',
    '',
    '- **24-hour oesophageal pH monitoring** — quantifies **acid** reflux; probe through the nose into the lower oesophagus.',
    '- **Wireless pH monitoring** — probe placed endoscopically, monitored remotely; **helpful in neurodevelopmental or behavioural problems**.',
    '- **24-hour impedance monitoring** — also measures **weakly acidic or non-acid reflux**.',
    '- **Endoscopy with oesophageal biopsies** — identifies oesophagitis, excludes other causes of vomiting.',
    '- **⚠️ Upper GI contrast study is NOT recommended** to diagnose or assess GORD severity at any paediatric age.',
    '',
    '### Management, in order',
    '- **Parental reassurance · feeding assessment · smaller, more frequent feeds · inert thickening agents.**',
    '- **Alginate, 1–2 week trial** — a **protective gel above stomach contents**.',
    '- **GORD: acid suppression** — **H2-receptor antagonists or proton-pump inhibitors (omeprazole)**; they **reduce gastric volume** and treat acid oesophagitis.',
    '- **⚠️ Prokinetics discouraged:** evidence for gastric-emptying drugs (**domperidone**) is **poor**, side-effects **significant**.',
    '- **Failure to respond:** consider **cow’s milk protein allergy**, investigate further.',
    '- **Surgery — NISSEN FUNDOPLICATION:** **fundus wrapped around the intra-abdominal oesophagus**, open or laparoscopic. **Reserved for complications unresponsive to intensive medical treatment, or oesophageal stricture.**',
    '',
    'Src: L22'
  ].join('\n'),
  qs: []
},

{
  id: 'gast-3', w: 'must',
  h: 'Pyloric stenosis — projectile, non-bilious, and hungry after',
  body: [
    '**Pyloric stenosis:** **hypertrophy of the pyloric muscle** causing **gastric outlet obstruction**.',
    '',
    '### Who gets it',
    '- **Presents at 2–8 weeks of age, IRRESPECTIVE OF GESTATIONAL AGE.**',
    '- **Boys 4:1**, particularly **first-born**.',
    '- **Family history**, especially on the **maternal side**.',
    '',
    '### Clinical features',
    '- **NON-BILIOUS vomiting** — the obstruction is above the ampulla of Vater.',
    '- **Increases in frequency and forcefulness over time, then becomes PROJECTILE.**',
    '- **⚠️ FEEDS NORMALLY AFTER VOMITING** — the hungry vomiter. This is the discriminator against gastroenteritis and sepsis.',
    '- **Weight loss** if presentation is delayed.',
    '',
    '### The metabolic signature',
    '- **HYPOCHLORAEMIC HYPOKALAEMIC METABOLIC ALKALOSIS**, from vomiting stomach contents.',
    '- **Hyponatraemia may also be present.**',
    '',
    '### Diagnosis',
    '- **Visible gastric peristalsis** — a wave moving **left to right** across the abdomen.',
    '- **The TEST FEED, classically:** milk **calms the hungry infant** for examination. Diagnostic if the **pyloric mass, feeling like an OLIVE, is palpable in the right upper quadrant** — halfway between the midpoint of the right costal margin and the umbilicus.',
    '- **⚠️ The stomach is over-distended with air** and often needs **emptying by nasogastric tube** to allow palpation.',
    '- **ULTRASOUND has replaced the test feed as the standard diagnostic procedure**, showing the **elongated, hypertrophied pylorus**.',
    '',
    '### Management',
    '- **⚠️ CORRECT THE ACID-BASE AND ELECTROLYTE IMBALANCE FIRST** — may take **over 24 hours of IV rehydration**. Operating on an alkalotic infant is the error the sequence prevents.',
    '- **PYLOROMYOTOMY:** division of the hypertrophied muscle **down to, but NOT including, the mucosa**.',
    '',
    'Src: L22'
  ].join('\n'),
  qs: []
},

{
  id: 'gast-4', w: 'must',
  h: 'Bile-stained vomiting — the surgical causes',
  body: [
    '**Green vomit:** obstructed bowel until proved otherwise. The decks name the causes; detail is supplied where they stop.',
    '',
    '### Acute intestinal obstruction — the printed list',
    '**Incarcerated inguinal hernia · intussusception · volvulus · impacted faecal mass · round worm masses.**',
    '',
    '*Intussusception is the commonest cause of obstruction in infants after the neonatal period — in full with the acute abdomen.*',
    '',
    '### Malrotation and volvulus',
    '- **Listed** as a serious abdominal emergency of childhood, and among the **abdominal catastrophes** mimicking neonatal sepsis.',
    '- **Bilious vomiting in a previously well neonate is midgut volvulus until excluded** *(not in course material)*.',
    '- **Upper GI contrast** shows an abnormal duodenojejunal flexure; **Ladd’s procedure** is the operation *(not in course material)*.',
    '- **⚠️ The bowel infarcts within hours** — a well-looking baby with green vomit is still an emergency.',
    '',
    '### Strangulated inguinal hernia',
    '- **Listed** as one of the three bile-stained emergencies of infancy.',
    '- **Irreducible tender inguinoscrotal swelling with vomiting and distension** *(not in course material)*. **Inguinoscrotal pain or swelling is itself on the surgical-consultation list.**',
    '',
    '### Hirschsprung disease',
    '- **A recognised association of Down syndrome**, listed beside **duodenal atresia**.',
    '- **Absent ganglion cells in the distal bowel** → functional obstruction *(not in course material)*.',
    '- **No meconium in the first 48 hours · distension · an EMPTY rectum with explosive stool on withdrawal of the finger** *(not in course material)*.',
    '- **Rectal suction biopsy is diagnostic** *(not in course material)*.',
    '',
    '*"Explosive stool on withdrawal of finger" is printed in the constipation deck’s rectal-examination list — the sign separating Hirschsprung from functional constipation, where the rectum is loaded.*',
    '',
    'Src: L22; L24 slides 11, 30, 40; Down association from `6) Genetically determined disease_`, cited only; volvulus as a neonatal catastrophe from `11) Neonatal sepsis`, cited only'
  ].join('\n'),
  qs: []
},

{
  id: 'gast-5', w: 'must',
  h: 'Acute diarrhoea — definitions, burden, types and organisms',
  body: [
    '### Two definitions, and both are asked',
    '- **In paediatrics:** an **increase in the FLUIDITY, VOLUME or NUMBER of stools relative to the usual habits of each individual**.',
    '- **In epidemiological studies:** **three or more loose or watery stools in a 24-hour period** — a loose stool being **one that would take the shape of a container**.',
    '',
    '### Burden',
    '- **A leading cause of morbidity, mortality AND malnutrition in under-fives.**',
    '- **1.34 million deaths a year, with more than 98 % occurring in the developing world.**',
    '- **30 million cases a year · 25 % of infant and preschool mortality.**',
    '',
    '### The four types',
    '- **Acute watery diarrhoea** (acute gastroenteritis) — **frequent loose or watery stools WITHOUT visible blood; 80 % of cases**.',
    '- **Dysentery** — diarrhoea with blood.',
    '- **Persistent diarrhoea** — post-infectious, **14 days or more**.',
    '- **Chronic diarrhoea** — recurrent or long-lasting, **non-infectious**.',
    '',
    '*Aetiology splits first into acute vs chronic, then infective vs non-infective (e.g. malabsorption).*',
    '',
    '### Causes of acute gastroenteritis',
    '',
    '|Group|Share|Organisms|',
    '|---|---|---|',
    '|**Viruses**|**~70 %**|**Rotaviruses** · noroviruses (Norwalk-like) · enteric adenoviruses · caliciviruses · astroviruses · enteroviruses|',
    '|**Bacteria**|**10–20 %**|*Campylobacter jejuni* · non-typhoid *Salmonella* spp · enteropathogenic *E. coli* · *Shigella* spp · *Yersinia enterocolitica* · Shiga-toxin-producing *E. coli* · *Salmonella typhi* and *S. paratyphi* · *Vibrio cholerae*|',
    '|**Protozoa**|**<10 %**|*Cryptosporidium* · *Giardia lamblia* · *Entamoeba histolytica*|',
    '',
    '**⚠️ The five most important causes in DEVELOPING countries — a separate, shorter list:** **rotavirus · enterotoxigenic *E. coli* · *Shigella* · *Campylobacter jejuni* · *Cryptosporidium*.**',
    '',
    'Src: L23.1 slides 3–14'
  ].join('\n'),
  qs: []
},

{
  id: 'gast-6', w: 'must',
  h: 'Pathogenesis, clinical picture, complications and mimics',
  body: [
    '### Two mechanisms',
    '- **SECRETORY — the most important:** toxins **bind specific enterocyte receptors**, causing **release of chloride into the intestinal lumen**. Net secretion replaces net absorption.',
    '- **OSMOTIC:** **damage to the villous brush border** causes **malabsorption of intestinal contents**; retained solute draws water in.',
    '',
    '### Clinical picture',
    '- **Frequent loose or watery stools without visible blood.**',
    '- **Begins acutely (abruptly).**',
    '- **Lasts under 14 days, usually under 7.**',
    '- **May carry:** flatulence, abdominal pain and cramps · nausea and vomiting · fever.',
    '',
    '### What the associated symptoms LOCALISE',
    '',
    '|Symptom|What it indicates|',
    '|---|---|',
    '|**Nausea and vomiting**|non-specific, but indicate **infection in the UPPER intestine**|',
    '|**Fever**|an **inflammatory process** — but also **dehydration** or **co-infection**|',
    '|**Severe abdominal pain and TENESMUS**|involvement of the **LARGE INTESTINE and RECTUM**|',
    '',
    '**⚠️ History and examination serve exactly two functions:** distinguishing gastroenteritis from **other causes of vomiting and diarrhoea**, and **estimating the degree of dehydration**.',
    '',
    '### The three main sequelae',
    '**Dehydration, which can be fatal · contribution to malnutrition · electrolyte and acid-base disturbance.**',
    '',
    '### Complications of acute diarrhoea',
    '**Hypernatraemia and hyponatraemia · POST-ACIDOTIC TETANY · POST-ACIDOTIC HYPOKALAEMIA · seizures · gastrointestinal complications · nutritional complications · prerenal failure · disseminated intravascular coagulation.**',
    '',
    '### Differential diagnosis',
    '- **Other infections:** urinary tract infection, otitis media, pneumonia, septicaemia.',
    '- **Surgical:** intussusception, appendicitis, small intestinal obstruction including malrotation.',
    '- **Drugs:** antibiotics and others.',
    '- **⚠️ SPURIOUS DIARRHOEA — chronic constipation with OVERFLOW INCONTINENCE.** The child is constipated, not loose.',
    '- **Non-infectious:** diabetic ketoacidosis, inborn errors of metabolism.',
    '- **Unmasking:** acute gastroenteritis can reveal **coeliac disease or chronic inflammatory bowel disease**.',
    '',
    'Src: L23.1 slides 16–22, 35, 74'
  ].join('\n'),
  qs: []
},

{
  id: 'gast-7', w: 'must',
  h: 'Assessing dehydration — four axes and the two-sign rule',
  body: [
    '### The three degrees, by weight loss',
    '- **No dehydration:** no clinically detectable signs — usually **under 5 %** of body weight.',
    '- **Some dehydration:** clinical dehydration — usually **5 % to 10 %**.',
    '- **Severe dehydration:** usually **over 10 %**.',
    '- **⚠️ SHOCK: IV bolus 20 ml/kg of 0.9 % NaCl.** A separate state, not the top of the ladder.',
    '',
    '### The four axes examined — G, E, M, S',
    '- **General condition:** lethargic · irritable · normal.',
    '- **Eyes:** sunken · normal.',
    '- **Mouth — offer water and WATCH:** drinking poorly · eagerly · normally.',
    '- **Skin turgor (pinch):** returning very slowly · slowly · immediately.',
    '',
    '### Grading the skin pinch',
    '',
    '|Grade|Fold visible for|',
    '|---|---|',
    '|**Normal**|**goes back immediately**|',
    '|**Slowly**|**less than 2 seconds**|',
    '|**Very slowly**|**more than 2 seconds**|',
    '',
    '**⚠️ THE CLASSIFICATION RULE: two or more signs in one column place the child in that column.** One sign does not classify a child.',
    '',
    '*The column headings themselves are the WHO no / some / severe grades; the deck prints the axes and the two-sign rule but not the grid (headings not in course material).*',
    '',
    '### Additional signs of dehydration',
    '- **Head:** decreased level of consciousness · sunken fontanelle · dry mucous membranes · **eyes sunken AND TEARLESS**.',
    '- **Circulation:** tachycardia with weak peripheral pulses · prolonged capillary refill · cold extremities · pale or mottled skin · **hypotension**.',
    '- **Whole body:** tachypnoea · reduced tissue turgor · sudden weight loss · reduced urine output.',
    '',
    '*Hypotension is a LATE sign in a child — the pulse, the refill and the consciousness move first.*',
    '',
    '### Reassessing severe dehydration',
    '**Assess hourly**, looking for: **return of a strong radial pulse · level of consciousness · skin turgor · urine output**.',
    '',
    'Src: L23.1 slides 24–31, 49'
  ].join('\n'),
  qs: []
},

{
  id: 'gast-8', w: 'must',
  h: 'Isotonic, hypertonic and hypotonic dehydration',
  body: [
    '**Three types, by plasma sodium:** **isonatraemic** — sodium and water lost proportionally, **plasma sodium normal** — plus **hyponatraemic** and **hypernatraemic**.',
    '',
    '|  |**Isotonic**|**Hypertonic**|**Hypotonic**|',
    '|---|---|---|---|',
    '|Prevalence|**over 75 %**|**10–15 %**|**5–10 %**|',
    '|Losses|**W = Na**|**W > Na**|**W < Na**|',
    '|ECF loss|**++**|**+**|**+++**|',
    '|Thirst|**++**|**++++**|**+**|',
    '|Skin turgor|**++**|**NOT LOST**|**+++**|',
    '|Mental state|**lethargy / irritable**|**irritable**|**lethargy**|',
    '',
    '### Two rows that decide questions',
    '- **⚠️ SKIN TURGOR IS NOT LOST IN HYPERTONIC DEHYDRATION.** Water is drawn out of the cells into the extracellular space, so the skin pinches normally while the child is profoundly dry. **Clinical assessment UNDERESTIMATES hypernatraemic dehydration.**',
    '- **Thirst extreme (++++) in hypertonic, least (+) in hypotonic; ECF loss runs the other way** — greatest in hypotonic (+++).',
    '',
    '### Why hypernatraemic dehydration is corrected SLOWLY',
    '- **Plasma sodium rises 140 → 160 mEq/L, osmolality 280 → 320 mosm/kg**; water leaves the cell and **the brain cell shrinks**.',
    '- The cell defends its volume by **accumulating ORGANIC OSMOLYTES**, raising its own osmolality (~315) and **restoring its size**.',
    '- **⚠️ Correct the plasma sodium rapidly and the osmolytes are still inside — water rushes in and the brain SWELLS.** Iatrogenic cerebral oedema.',
    '- **Check plasma electrolytes, urea, creatinine and glucose** whenever **IV fluids are required** or **hypernatraemia is suspected**.',
    '',
    'Src: L23.1 slides 32–34, 36, 73'
  ].join('\n'),
  qs: []
},

{
  id: 'gast-9', w: 'must',
  h: 'Fluid therapy — Plans A, B and C',
  body: [
    '**Two stages: INITIAL rehydration replaces the deficit; SUBSEQUENT therapy supplies maintenance plus ongoing losses.**',
    '',
    '### Initial therapy — amount and route follow the degree',
    '',
    '|Degree|Amount|Route|Plan|',
    '|---|---|---|---|',
    '|**No dehydration (mild)**|**over 50 ml/kg**|**oral**|**A**|',
    '|**Some (moderate)**|**75 ml/kg (range 50–100)**|**oral or NGT**|**B**|',
    '|**Severe**|**over 100 ml/kg**|**intravenous**|**C**|',
    '',
    '*IV is also used for failure of oral or nasogastric rehydration, at any degree.*',
    '',
    '### Plan A — home-based fluids',
    '**ORS solution · soup, salted or unsalted · yoghurt-based drinks · breast milk · cereal water · plain clean water · fresh fruit juice · weak herbal tea.**',
    '',
    '### Plan B — ORS',
    '',
    '|Constituent (g/L)|**Rehydran**|**Hydro-Safe**|',
    '|---|---|---|',
    '|**Sodium chloride**|**3.5 g**|**2.1 g**|',
    '|**Trisodium citrate**|**2.9 g**|**2.9 g**|',
    '|**Potassium chloride**|**1.5 g**|**1.5 g**|',
    '|**Glucose**|**20 g**|**20 g**|',
    '|**Osmolarity**|**95 mmol**|**65 mmol**|',
    '',
    '- **⚠️ GLUCOSE IS ADDED TO ENSURE MAXIMUM ABSORPTION OF SODIUM AND WATER** — the two enter the enterocyte on a **cotransporter** and water follows sodium across the **tight junction**. That coupling is why ORS works in a secreting gut.',
    '- **Amount: 50–100 ml/kg (about 75 ml/kg).**',
    '- **Given SLOWLY — one spoon every 1–2 minutes over 4–6 hours** — cup and spoon, cup, dropper, syringe or nasogastric tube.',
    '',
    '### Plan C — intravenous',
    '- **Fluid, for ALL types of dehydration:** Pansol, Polyelectrolyte or **Ringer’s lactate**.',
    '- **Amount 100 ml/kg, one third then two thirds, SLOWER FOR YOUNGER children:** **30 ml/kg rapidly over ½–1 hour**, then **70 ml/kg slowly over 2.5–5 hours**.',
    '',
    '### Subsequent oral therapy',
    '- **Maintenance:** normal foods and drinks.',
    '- **Ongoing losses, after EACH loose stool:** **under 1 year — 50–100 ml (¼–½ cup)**; **over 1 year — 100–200 ml (½–1 cup)**.',
    '',
    'Src: L23.1 slides 40–51'
  ].join('\n'),
  flow: {
    title: 'Reassessing at 4 hours — which plan next',
    steps: [
      { k:'step', t:'Plan B given: ORS 75 ml/kg over 4–6 hours, plus feeding' },
      { k:'decision', t:'Reassess at 4 hours — any signs of dehydration?', yes:'Still some dehydration, or no improvement → repeat Plan B', no:'Shift to Plan A — food-based home fluids and feeding' },
      { k:'alert', t:'WORSENING to severe dehydration → shift to Plan C, IV fluids' },
      { k:'step', t:'On Plan C, reassess HOURLY: radial pulse, consciousness, skin turgor, urine output' },
      { k:'decision', t:'After Plan C — improved?', yes:'Some dehydration → Plan B · none → Plan A', no:'Repeat Plan C' }
    ]
  },
  qs: []
},

{
  id: 'gast-10', w: 'must',
  h: 'Feeding, zinc, and which drugs are allowed',
  body: [
    '**Three main lines: FLUID THERAPY · FEEDING · ZINC.** Drugs are the fourth question, and mostly the answer is no.',
    '',
    '### Feeding during and after diarrhoea',
    '- **Breast-fed: continue as usual DURING and AFTER rehydration.**',
    '- **Formula-fed: same normal formula, same normal concentration, AFTER rehydration.** No dilution.',
    '- **⚠️ Low-lactose or lactose-free formula ONLY in secondary lactose intolerance.**',
    '- **Mixed diet: normal feeding**, in **small frequent feeds every 3–4 hours**.',
    '- **Avoid:** too-sweetened foods · high-fibre foods · foods with a laxative effect · fatty foods.',
    '',
    '### Zinc — in ALL types and ALL degrees',
    '- **Under 6 months: 10 mg for 10–14 days.**',
    '- **Over 6 months: 20 mg for 10–14 days.**',
    '',
    '### The drugs, one by one',
    '- **Antibiotics: ONLY for cholera and dysentery.** **Antiparasitics** for *Entamoeba histolytica* trophozoites; a specific antibiotic for any associated infection.',
    '- **⚠️ ANTIMOTILITY AGENTS ARE NOT USED IN CHILDREN — diphenoxylate HCl, loperamide.**',
    '- **⚠️ ADSORBENTS are mainly cosmetic and CONTRAINDICATED** in childhood gastroenteritis — **no benefit, increased risk of ileus, drowsiness and nausea**.',
    '- **Antiemetics are NOT routinely recommended.**',
    '',
    '### Ondansetron — the one antiemetic with a case',
    '- **IV ondansetron reduces vomiting episodes and hospital admission in severe cases.**',
    '- **For:** less vomiting in the first hours · less need for IV fluids in the emergency department · fewer hospitalisations among those needing IV fluids.',
    '- **Against:** **may increase diarrhoeal episodes** · high cost · **may prolong the QT interval** · studied only in **mildly dehydrated** children, **funded by the manufacturer**.',
    '- **⚠️ At risk: congenital long QT syndrome, low potassium or magnesium, other QT-prolonging drugs.**',
    '',
    '### Probiotics',
    '- **Definition:** live microbial feeding supplements.',
    '- **Mechanisms:** synthesis of antimicrobial substances · competition for nutrients · modification of toxins · stimulation of non-specific immune responses.',
    '- **Benefit:** **especially *Lactobacillus* GG — reduces the DURATION of diarrhoea**; may prevent ***C. difficile*-associated diarrhoea** on antibiotics.',
    '- **⚠️ Type, regimen and dosage are not yet established.**',
    '',
    'Src: L23.1 slides 38, 53–65'
  ].join('\n'),
  qs: []
},

{
  id: 'gast-11', w: 'high',
  h: 'Dysentery, admission, discharge and prevention',
  body: [
    '### Dysentery',
    '- **5–10 % of acute gastroenteritis in Egypt.**',
    '- **Causes: *Shigella* 60 % · *Campylobacter jejuni* · *Salmonella* · *E. histolytica*.**',
    '- **Fluids, feeding and zinc exactly as for acute watery diarrhoea.**',
    '- **Antibiotics: START with TMP/SMX.** **Modify after 2 days if no improvement** — **ceftriaxone IV for *Shigella***, **metronidazole for amoebiasis**.',
    '',
    '### Investigation — usually none',
    '- **Usually NO investigations are indicated.**',
    '- **Stool examination in bloody diarrhoea** — **faecal leucocytes indicate bacterial invasion of colonic mucosa**.',
    '- **Stool culture:** bloody diarrhoea · outbreaks · HUS · immunosuppression · specific pathogen community outbreak · uncertain diagnosis.',
    '- **Plasma electrolytes, urea, creatinine and glucose** if **IV fluids are required** or **hypernatraemia is suspected**.',
    '',
    '### When to return — what parents are told',
    '**Not able to drink or breastfeed · becomes sicker · develops fever · blood in stool · repeated vomiting · increased thirst.**',
    '',
    '### When to admit',
    '- **Fluid:** severe dehydration · intractable vomiting · unable to maintain hydration orally.',
    '- **Abdomen:** ileus, shock, abdominal distension or intestinal obstruction.',
    '- **Course:** treatment failure despite adequate ORS intake.',
    '- **Judgement:** caregivers cannot provide adequate care, or social/logistical concerns · young age, decreased mental status, uncertain diagnosis.',
    '',
    '*Mild-to-moderate dehydration, under 6 months, or frequent stools or vomits: observe in the emergency department a MINIMUM of 4–6 HOURS before discharge.*',
    '',
    '### Discharge criteria',
    '**Sufficient rehydration by weight gain and/or clinical status · IV fluids no longer required · oral intake equals or exceeds losses · medical follow-up available · adequate family teaching** — hand hygiene, expected course, prevention of dehydration, signs of dehydration.',
    '',
    '### Prevention',
    '**Rotavirus immunisation · hand hygiene at home and day care · breastfeeding, protective against severe gastroenteritis · improved complementary feeding including vitamin A · improved case management — ORS, zinc, antibiotics for dysentery.**',
    '',
    'Src: L23.1 slides 36–37, 66–71, 75–76'
  ].join('\n'),
  qs: []
},

{
  id: 'gast-12', w: 'high',
  h: 'Persistent and chronic diarrhoea',
  body: [
    '**Persistent diarrhoea:** a **post-infectious** diarrhoea that **begins acutely as watery diarrhoea or as dysentery and lasts 14 DAYS OR MORE**. Also called **post-gastroenteritis syndrome**.',
    '',
    '### The numbers',
    '- **10 % of cases.** **Peak age around 18 months.**',
    '- **About 10 % of acute episodes in developing countries persist for 2–4 weeks**, with deterioration of nutritional status.',
    '- **⚠️ Responsible for 35 % of ALL diarrhoea-associated deaths** — a tenth of episodes causing a third of deaths.',
    '',
    '### Main sequelae',
    '**Marked weight loss and malnutrition · secondary immune deficiency and repeated infections.**',
    '',
    '### Risk factors — seven, most modifiable',
    '- **Low birth weight.**',
    '- **Malnutrition** — **delays mucosal repair**.',
    '- **Absence of breastfeeding.**',
    '- **Recent introduction of animal milk.**',
    '- **Recent or recurrent acute diarrhoea in a very young infant.**',
    '- **Immunological impairment due to malnutrition.**',
    '- **⚠️ MISMANAGEMENT — antibiotics, antidiarrhoeals, prolonged starvation.** The treatment causes the disease.',
    '',
    '### Pathogenesis — a self-sustaining loop',
    '- **Pathogens + risk factors → MUCOSAL INJURY → villous flattening and mucosal atrophy → decreased nutrient absorption → protein-energy malnutrition.**',
    '- **Malnutrition then reduces digestive enzyme secretion** — including **brush-border disaccharidases** — impairing digestion and absorption.',
    '- **⚠️ The result is an OSMOTIC diarrhoea that PERSISTS AFTER THE INFECTIVE AGENT IS ELIMINATED.** Malnutrition impairs both defence and healing, closing the loop.',
    '',
    '### Chronic diarrhoea',
    '**Recurrent or long-lasting, NON-INFECTIOUS:** **sensitivity to milk or gluten · chronic autoimmune inflammation such as inflammatory bowel disease · congenital causes such as cystic fibrosis.**',
    '',
    'Src: L23.1 slides 77–82, 87'
  ].join('\n'),
  qs: []
},

{
  id: 'gast-13', w: 'must',
  h: 'Constipation — definition, mechanism, Rome IV and Bristol',
  body: [
    '**Constipation:** a **delay or difficulty in defecation, present for 2 OR MORE WEEKS, and sufficient to cause significant distress to the patient.** Usually involves **painful or incomplete evacuation of hard stools**.',
    '',
    '- **~3 % of all paediatric office visits**, and **10 to 45 % of paediatric gastroenterology clinic visits**. *The abdominal-pain deck gives the second figure as 30 % — both are printed.*',
    '- **⚠️ FUNCTIONAL CONSTIPATION IS THE MOST COMMON CAUSE of childhood constipation**, and **the most common cause of chronic abdominal pain everywhere**, at all ages.',
    '',
    '### Pathophysiology — one mechanism',
    '- **WITHHOLDING OF STOOLS**, after a **hard, painful or frightening bowel movement**.',
    '- **Retained stool distends and ENLARGES the rectum**; the **large hard stool becomes impacted**.',
    '- **⚠️ SOFT OR WATERY STOOL LEAKS ROUND THE IMPACTION AND SOILS THE PANTS** — **overflow incontinence**, which is why a soiling child is constipated, not loose.',
    '- **Softer stools back up above the impaction into the colon.**',
    '',
    '### Rome IV diagnostic criteria for functional constipation',
    '**Infants and toddlers up to 4 years old — at least TWO of the following present for at least ONE MONTH:**',
    '- **Two or fewer defecations per week.**',
    '- **History of excessive stool retention.**',
    '- **History of painful or hard bowel movements.**',
    '- **History of large-diameter stools.**',
    '- **Presence of a large faecal mass in the rectum.**',
    '',
    '**In toilet-trained children, two additional criteria may be used:**',
    '- **At least one episode per week of incontinence AFTER the acquisition of toileting skills.**',
    '- **History of large-diameter stools that may obstruct the toilet.**',
    '',
    '### Bristol Stool Form Scale',
    '',
    '|Type|Looks like|Description|',
    '|---|---|---|',
    '|**1**|**rabbit droppings**|separate hard lumps, **hard to pass**|',
    '|**2**|**bunch of grapes**|sausage-shaped but lumpy|',
    '|**3**|**corn on the cob**|sausage with **surface cracks**|',
    '|**4**|**sausage**|smooth and soft — **normal**|',
    '|**5**|**chicken nuggets**|soft blobs, clear-cut edges, passed easily|',
    '|**6**|**porridge**|fluffy, ragged edges, mushy|',
    '|**7**|**gravy**|watery, **entirely liquid**|',
    '',
    'Src: L23.2 slides 2–6, 9, 14; the 30 % clinic figure from L24 slide 57'
  ].join('\n'),
  qs: []
},

{
  id: 'gast-14', w: 'high',
  h: 'Constipation — evaluation and investigation',
  body: [
    '**⚠️ Ask the CHILD as well as the parents** — parents often under-recognise constipation symptoms.',
    '',
    '### Stooling history',
    '**Defecation frequency · stool consistency, calibre and size · pain during defecation · presence and TIMING of faecal incontinence · stool-withholding behaviour.**',
    '',
    '### Associated symptoms and background',
    '- **Abdominal pain · anorexia, early satiety, nausea and vomiting · weight loss or poor weight gain.**',
    '- **⚠️ OCCULT CONSTIPATION: the presentation is usually LATE.**',
    '- **Previous treatment · dietary history · neuromuscular development.**',
    '- **Behavioural or psychosocial:** death in the family, birth of a sibling, school problems, **SEXUAL ABUSE**.',
    '',
    '### Abdominal examination',
    '- **Tenderness**, often from **gaseous distension of the colon**.',
    '- **A FAECAL MASS in the LEFT LOWER QUADRANT** — the loaded sigmoid colon.',
    '',
    '### Perianal inspection',
    '**Position of the anus · gluteal cleft deviation · erythema or dermatitis · perianal faeces or faeces on clothes · fissures · haemorrhoids · skin tags · scars of sexual abuse.**',
    '',
    '### Anorectal digital examination',
    '**Perianal sensation (ANAL WINK) · anal tone · size of the rectum · amount and consistency of faeces in the ampulla · sphincter function, contract and relax · EXPLOSIVE STOOL ON WITHDRAWAL OF THE FINGER · occult blood.**',
    '',
    '### Investigation',
    '- **⚠️ Laboratory investigation RARELY uncovers underlying disease** — the two named are **hypothyroidism and coeliac disease**.',
    '- **Plain abdominal X-ray shows faecal retention, and is useful in exactly two situations:** **uncertainty whether the patient is constipated when rectal examination is impossible (obesity) or refused**; and **to convince parents and children of the need for therapy**.',
    '',
    'Src: L23.2 slides 8, 10–13, 15–17'
  ].join('\n'),
  qs: []
},

{
  id: 'gast-15', w: 'must',
  h: 'Constipation — the four-step treatment',
  body: [
    '**A successful approach has FOUR steps: EDUCATION · DISIMPACTION · PREVENTION OF RE-ACCUMULATION · FOLLOW-UP.**',
    '',
    '### 1. Education',
    '**Simple explanations of bowel function, bowel problems and anorectal physiology · the coexistence of BOWEL AND BLADDER problems · that maintenance therapy runs 6 to 24 MONTHS.**',
    '',
    '### 2. Disimpaction',
    '- **Faecal impaction, defined by any of:** a **hard mass in the lower abdomen** · a **dilated rectum filled with stool** on rectal examination · **excessive colonic stool on radiography** · a **positive history of overflow incontinence**.',
    '- **⚠️ DISIMPACTION MUST PRECEDE MAINTENANCE THERAPY.** Starting stool softeners **without** it causes **treatment failure** and **worsens overflow incontinence**.',
    '- **Oral or rectal medication for 3–7 days** — oral, rectal, or a combination, all shown effective.',
    '',
    '### 3. Maintenance — diet, behaviour, laxatives',
    '**Aim: regular bowel movements at normal intervals with good evacuation, preventing recurrent impaction and recurrent withholding. Duration may be months or years.**',
    '',
    '|Dietary intervention|Strength of recommendation|',
    '|---|---|',
    '|**Increased fluids and carbohydrate**|**HIGHLY RECOMMENDED**|',
    '|**Limit intake of milk**|**Recommended**|',
    '|**Dietary fibre**|**No evidence to recommend**|',
    '|**Probiotics**|**No evidence to recommend**|',
    '',
    '- **Carbohydrates, especially SORBITOL** — prune, pear and apple juices — increase stool frequency and water content.',
    '- **Milk:** excess **exacerbates constipation**, but evidence that eliminating it helps refractory cases is **insufficient**. **A time-limited cow’s-milk-free trial** is reasonable in **infants and young children unresponsive to adequate medical and behavioural management** — **cow’s milk intolerance, particularly with atopy**, is associated with chronic constipation.',
    '- **Behavioural: scheduled toilet sitting 3 to 10 minutes, once or twice a day. NO PUNISHMENT for not stooling; praise and reward for stooling and for sitting.**',
    '',
    '### Laxatives',
    '- **Osmotic: lactulose · polyethylene glycol · magnesium salts.**',
    '- **Stool softeners: docusate · mineral oil.**',
    '- **Also available: stimulant and rectal laxatives.**',
    '- **⚠️ TITRATE: increase every two days until one to two soft stools daily; decrease if loose.** **The commonest reason for non-response is INADEQUATE DOSING.**',
    '- **Warn that some leaking or soiling may persist at the start**, and give an **emergency plan**.',
    '',
    '### 4. Follow-up and prognosis',
    '**Regular follow-up essential; treatment for AT LEAST SIX MONTHS. Wean only once bowel movements are regular and easy. Relapse rates are high and stooling problems may persist into adulthood. About 50 % recover and come off medication within 6 to 12 months.**',
    '',
    'Src: L23.2 slides 19–29, 31–34, 37'
  ].join('\n'),
  qs: []
},

{
  id: 'gast-16', w: 'must',
  h: 'Acute abdominal pain — surgical, medical or extra-abdominal',
  body: [
    '**Acute abdominal pain:** **severe pain lasting under 5 days that interferes with the child’s activity**. The pathology may be **intra-abdominal, thoracic or systemic**.',
    '',
    '- **10 % of childhood primary care office visits · surgical intervention in 10 % to 30 %.**',
    '- **Mostly benign** (constipation the example). **The point is to pick up the cardinal signs of serious underlying disease.**',
    '',
    '### The three-way classification',
    '',
    '|Group|Causes|',
    '|---|---|',
    '|**Intra-abdominal — SURGICAL**|**acute appendicitis · intestinal obstruction including intussusception · inguinal hernia · peritonitis · inflamed Meckel diverticulum · pancreatitis · trauma**|',
    '|**Intra-abdominal — MEDICAL**|**non-specific abdominal pain · gastroenteritis · urinary tract (UTI, acute pyelonephritis, hydronephrosis, renal calculus) · Henoch–Schönlein purpura · diabetic ketoacidosis · sickle cell disease · hepatitis · inflammatory bowel disease · constipation · recurrent abdominal pain of childhood · gynaecological in pubertal females · psychological · lead poisoning · acute porphyria (rare) · unknown**|',
    '|**EXTRA-ABDOMINAL**|**upper respiratory tract infection · lower lobe pneumonia · torsion of the testis · hip and spine**|',
    '',
    '*A separate extra-abdominal slide adds: pharyngitis · abdominal migraine · FMF · HUS · drugs · hysterical.*',
    '',
    '### The eight serious abdominal emergencies of childhood',
    '**Appendicitis · intussusception · malrotation/volvulus · bleeding Meckel’s diverticulum · bacterial enterocolitis · pancreatitis · obstruction or strangulated hernia · ovarian or testicular torsion.**',
    '',
    '### Common causes, and by age',
    '**Common: appendicitis · gastroenteritis · urinary tract infection · constipation · mesenteric adenitis · ovulatory/perimenstrual pain.**',
    '',
    '|Age|Surgical abdominopelvic emergencies|',
    '|---|---|',
    '|**Infancy (<2 y)**|**intussusception · incarcerated hernia · volvulus**|',
    '|**Preschool (2–5 y)**|**appendicitis · Meckel’s diverticulum · intussusception**|',
    '|**School (>5 y)**|**appendicitis · testicular torsion**|',
    '|**Adolescent**|**appendicitis · testicular torsion · ovarian torsion · ectopic pregnancy · cholecystitis**|',
    '',
    '### Where the pain is',
    '**Right upper quadrant — biliary · epigastrium — gastritis · periumbilical — intussusception, small bowel obstruction · right iliac fossa — appendicitis · loins — pyelonephritis, calculi · suprapubic — ovary, tubes, urosepsis · groin — hernia · referred from the chest — pneumonia.**',
    '',
    'Src: L24 slides 3–12, 16'
  ].join('\n'),
  flow: {
    title: 'The child with acute abdominal pain',
    steps: [
      { k:'step', t:'Rapid cardiopulmonary assessment', n:'appearance · airway, breathing, circulation and vital signs · neurologic status · blood sugar · food and fluid intake' },
      { k:'decision', t:'Any history of significant trauma?', yes:'See trauma guidelines', no:'Continue' },
      { k:'alert', t:'SURGICAL CONSULTATION if any of: bile-stained vomiting · bloody stool · localised tenderness · distension · guarding · rebound tenderness · palpable mass · inguinoscrotal pain or swelling' },
      { k:'decision', t:'Urine dipstick positive for leukocyte esterase or nitrites, or pyuria/bacteriuria?', yes:'Consider urinary tract infection', no:'Continue' },
      { k:'decision', t:'Diarrhoea ± vomiting or fever?', yes:'Consider gastroenteritis', no:'Continue' },
      { k:'decision', t:'Fever ± tachypnoea, recession, cough, chest pain?', yes:'Consider pneumonia', no:'Continue' },
      { k:'decision', t:'Firm stool palpable in the lower abdomen?', yes:'Consider constipation', no:'Consider the less common diagnoses' }
    ]
  },
  qs: []
},

{
  id: 'gast-17', w: 'must',
  h: 'The named acute causes, and the signs that mean surgery',
  body: [
    '### Signs suggestive of a surgical cause',
    '**Absent bowel sounds · bilious vomiting · bloody diarrhoea or occult blood in stool · temperature ≥ 38.0 °C (100.4 °F) · rebound tenderness · rigidity (involuntary guarding) · voluntary guarding.**',
    '',
    '**Red flags, the wider list:** the seven above plus **sudden severe pain · pain interrupting sleep · haematemesis and haematochezia · hypotension · tachycardia · WRITHING in pain · jaundice · TINKLING bowel sounds · gross distension.**',
    '',
    '*Auscultate BEFORE palpating; stethoscope pressure also tests for tenderness.*',
    '',
    '### Investigations',
    '**CBC and CRP · urinalysis · stool analysis and occult blood.** As indicated: **liver function tests · amylase, lipase · abdominal X-ray (small bowel obstruction) · abdominal ultrasound · CT abdomen, high sensitivity and specificity.**',
    '',
    '### Acute infections — the triad',
    '**Fever, vomiting and abdominal pain:** pharyngitis, especially **group A β-haemolytic streptococcal** · appendicitis · pyelonephritis · early hepatitis · early gastroenteritis.',
    '',
    '### Appendicitis',
    '- **Older children — the classic picture:** **fever, nausea, vomiting, right lower quadrant pain, tenderness and rigidity**.',
    '- **⚠️ INFANTS: irritability, unexplained crying, refusal of feeding, vomiting, HIGH fever** — causing **diagnostic confusion, delay and PERFORATION**.',
    '- **Ultrasonography or CT may help establish the diagnosis.**',
    '- *Rovsing’s sign, psoas sign and the Alvarado score are the named bedside tools (not in course material).*',
    '',
    '### Intussusception',
    '- **Invagination of proximal bowel into a distal segment**, commonly **ileum into caecum through the ileocaecal valve**.',
    '- **⚠️ COMMONEST CAUSE OF INTESTINAL OBSTRUCTION IN INFANTS AFTER THE NEONATAL PERIOD.**',
    '- **Any age; peak 3 months to 2 years.**',
    '- **Paroxysmal colicky pain with drawing up of the legs, a sausage-shaped mass, REDCURRANT-JELLY stool** *(triad not in course material)*.',
    '- **Ultrasound target sign; reduction by air or contrast enema, surgery if that fails or the bowel perforates** *(not in course material)*.',
    '- **Henoch–Schönlein purpura can cause intussusception** — a recognised complication.',
    '',
    '### Non-specific abdominal pain and mesenteric adenitis',
    '**Resolves in 24–48 hours. Pain LESS SEVERE than appendicitis, right iliac fossa tenderness VARIABLE. Often with an upper respiratory infection and cervical lymphadenopathy.**',
    '',
    '### Acute pancreatitis',
    '- **Acute onset:** fever, nausea, severe vomiting, **epigastric and periumbilical pain radiating to back or scapula**, tenderness and rigidity; **usually acutely ill or in shock**.',
    '- **Common:** abdominal pain · irritability in infants · nausea · vomiting · anorexia · tenderness · distension · dehydration.',
    '- **Uncommon:** back pain · jaundice · fever · feeding intolerance · respiratory distress · ascites · pleural effusion · **CULLEN’S SIGN (umbilicus) and TURNER’S SIGN (flanks)**, the bluish discoloration of intra-abdominal haemorrhage.',
    '- **⚠️ INSPPIRE criteria — TWO OF THREE:** suggestive abdominal pain · **serum amylase and/or lipase at least THREE TIMES the upper limit of normal** · imaging characteristic of or compatible with acute pancreatitis.',
    '- **SERUM LIPASE is the test of choice, MORE SPECIFIC than amylase.**',
    '- **Imaging: ULTRASOUND FIRST CHOICE**; reserve CT and/or MRCP for complicated and severe pancreatitis.',
    '- **Mechanical obstruction of the pancreatic duct by ASCARIASIS worm** is a listed cause.',
    '',
    '*Other named causes: lower lobe pneumonia as referred pain · Henoch–Schönlein vasculitis · diabetic ketoacidosis.*',
    '',
    'Src: L24 slides 18–38; HSP→intussusception from `47)Hemorrhagic disorders `, cited only'
  ].join('\n'),
  qs: []
},

{
  id: 'gast-18', w: 'must',
  h: 'Chronic abdominal pain — organic or functional',
  body: [
    '**Chronic or recurrent abdominal pain:** **at least one episode of pain per month for TWO CONSECUTIVE MONTHS, severe enough to interfere with routine functioning.** **Occurs in 10–15 % of children.**',
    '',
    '- **Classified into ORGANIC and NON-ORGANIC ("functional").**',
    '- **⚠️ FUNCTIONAL 70 %, ORGANIC 30 %.** *One assessment plate puts organic below 10 % — both figures are printed.*',
    '- **Functional pain: NO specific inflammatory, anatomic, metabolic or neoplastic cause — but THE PAIN IS GENUINE. Children DO experience pain.**',
    '- **Aetiology unknown and no diagnostic markers exist for any group, so FUNCTIONAL PAIN IS A DIAGNOSIS OF EXCLUSION** — reached without a **shotgun** work-up.',
    '- **Perpetuated by its own consequences** — pain behaviour, benefit of pain, excess healthcare visits.',
    '',
    '### The four abdominal-pain-related FGIDs (Rome IV, 2016)',
    '',
    '|Feature|Diagnosis|',
    '|---|---|',
    '|**Abdominal pain with ALTERED BOWEL PATTERN**|**Irritable bowel syndrome**|',
    '|**Abdominal pain with symptoms of DYSPEPSIA**|**Functional dyspepsia**|',
    '|**ISOLATED abdominal pain**|**Functional abdominal pain** (not otherwise specified)|',
    '|**Intense CYCLIC pain with headache, vomiting and/or aura-like symptoms**|**Abdominal migraine**|',
    '',
    '*Rome IV also groups vomiting and aerophagia, and constipation and incontinence, as paediatric FGIDs.*',
    '',
    '### Organic causes, by system',
    '- **Gastrointestinal:** parasitic infestations · **CONSTIPATION** · acid peptic disease · carbohydrate malabsorption · inflammatory bowel disease · coeliac disease · eosinophilic GI disorders · chronic appendicitis · malrotation.',
    '- **Hepatobiliary:** chronic hepatitis · cholelithiasis · cholecystitis · choledochal cyst · liver abscess · sphincter of Oddi dysfunction · biliary dyskinesia. **Pancreatic:** chronic pancreatitis · pseudocyst.',
    '- **Urinary:** ureteropelvic junction obstruction · recurrent pyelonephritis · recurrent cystitis · hydronephrosis · nephrolithiasis. **Genital:** dysmenorrhoea · endometriosis · haematocolpos · tumour · ovarian cysts · pelvic inflammatory disease.',
    '- **Systemic:** respiratory infection, tumour or inflammation · **metabolic** — porphyria, diabetes, lead poisoning · **haematological** — angioedema, collagen vascular disease, sickle cell · **peritoneal/musculoskeletal** — FMF, trauma, inflammation, infection · **tumours**.',
    '',
    '### Three organic entities given their own slides',
    '- **Parasitic infestations — helminths:** ***Ascaris lumbricoides*** (roundworm), ***Ancylostoma duodenale*** (hookworm), ***Enterobius vermicularis***, ***Trichuris trichiura*** (whipworm). **Protozoa:** ***Giardia lamblia***, ***E. histolytica***. **Pitfalls: diagnosis · casual relationship (combined aetiology) · improper treatment and recurrence.**',
    '- **FMF:** mutations in the **MEFV (MEditerranean FeVer) gene**; **usually OVER-diagnosed**; **serum amyloid is an inflammatory marker**; **heterozygous children are common — treat if typical symptoms develop**; **treat compound heterozygotes**.',
    '- **Acid peptic disease:** **dull aching epigastric pain, related to meals, worse at night or early morning, with nausea and vomiting.** **Children with *H. pylori* gastritis had more severe, prolonged and frequent pain, and the highest frequency of upper GI bleeding.**',
    '',
    '### Alarming signals',
    '- **The pain itself:** age under 5 years · nocturnal symptoms · persistent right upper or right lower pain · referred pain.',
    '- **Gut:** chronic, bile- or blood-stained vomiting · dysphagia · prolonged, mucoid or bloody diarrhoea.',
    '- **Beyond the gut:** weight loss or growth retardation · dysuria, haematuria or flank pain · constitutional or extraintestinal manifestations · family history of organic GI disorders.',
    '',
    '**Examination: growth deceleration, delayed puberty · jaundice · significant anaemia · rebound, guarding or organomegaly · perianal disease (tags, fissures, fistulas).**',
    '',
    '### Organic versus functional',
    '',
    '|Clinical feature|**Organic**|**Functional**|',
    '|---|---|---|',
    '|Site of pain|**localised**|**vague, midline**|',
    '|Timing|**may be nocturnal**|**NEVER nocturnal**|',
    '|Alarm signals|**present**|**absent**|',
    '|Family history|**IBD, acid peptic disease**|**functional constipation, FGIDs, anxiety, headache**|',
    '|Other functional symptoms|**absent**|**headache, fatigue, anxiety or obsession**|',
    '',
    '### The stepwise algorithm',
    '- **History → physical examination → initial laboratory tests → any alarm signals?**',
    '- **Initial screening: CBC with differential · ESR and CRP · liver and renal function · urinalysis · routine stool analysis · stool haemoccult.**',
    '- **⚠️ Ultrasound ONLY when a specific organic disease is suspected.** The most widely used non-invasive test here, yet **relevant abnormalities are found in under 1 %**, and it turns up **incidental findings such as mesenteric lymphadenitis needing no intervention**.',
    '- **Alarm signals present → pursue organic causes:** stool and laboratory tests, abdominal imaging, endoscopy → specific treatment.',
    '- **No alarm signals → working diagnosis of a pain-related FGID**, subtype classified → manage → **REASSESS. No response after 4 weeks → reconsider an organic cause.**',
    '- **The aim: identify any serious cause WITHOUT unnecessary investigation, while reassuring child and parents.** **Check growth**, and **inspect the perineum for anal fissures**.',
    '',
    'Src: L24 slides 42–73'
  ].join('\n'),
  qs: []
}

    ]
  }
};
