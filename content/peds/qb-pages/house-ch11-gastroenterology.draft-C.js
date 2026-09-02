/* House — "Dr. HOUSE in pediatric medicine & surgery MCQs" (Semester 8\Pedo\Questions\pediatric .pdf)
 * Part I, chapter 11: GASTROENTEROLOGY — printed questions Q19 to Q26.
 *
 * DRAFT C. n:1-9 and n:10-18 are drafted separately in house-ch11-gastroenterology.draft-A.js and
 * -draft-B.js — neither was opened while writing this file, per the brief's rule against reading
 * another half's draft.
 *
 * Stems, options and keys are taken verbatim from the validated staging record
 * content\peds\qb-pages\house-ch11-gastroenterology.array.js. `stem` and `options` are byte-identical
 * to the staged entry. The book's own wording is preserved exactly and never commented on (curly
 * quotes, apostrophes, en dashes) per the 2026-09-02 ruling. The one exception is numbers, units,
 * doses and exponents, which are always reproduced exactly — none of this half's eight questions
 * carries a clinically load-bearing numeral in its options beyond ages/durations, which the staging
 * record re-rendered at 600 dpi.
 *
 * BOILER: absent on all eight questions in this half (Q19-Q26 sit inside the staged bit string's
 *   long false run) — `boiler` is a staging-only field and does not appear below, and no boiler line
 *   is added to or mentioned in any stem or explanation.
 *
 * KEYS IN THIS RANGE: A D C D E A D D -> answer 0 3 2 3 4 0 3 3 respectively (n:19..n:26).
 *   Every key in ch.11 prints as a BARE LETTER ("Answer: D.") with no option name — the
 *   letter-versus-name cross-check is UNAVAILABLE for all eight and was NOT performed; this is
 *   stated in every entry below rather than claimed passed.
 *
 * ZERO figures in this half (and in the whole chapter — a measured zero, see the staging header).
 *   No entry below carries `image` or `imgAlt`.
 *
 * TWO PAGE-BREAK STRADDLES IN THIS HALF: n:20 (p.87 -> p.88) and n:23 (p.88 -> p.89). Both file on
 *   the page the question NUMBER is printed on, per the staging record and the brief; each `source`
 *   carries the straddle detail inside the parentheses, semicolon-joined. For n:23, the staging
 *   header records a self-caught correction: an earlier 600 dpi crop appeared to cut off options D
 *   and E, but the full plain page shows all five options complete on p.88 — only the closing
 *   "Answer: E." straddles onto p.89. That correction is reflected in this entry's source line.
 *
 * NO SHARED OPTION MENUS in this half — all eight questions print their own option ladders. Instead,
 *   this half carries two IN-HALF cross-references, used the same way a shared-menu table is used
 *   elsewhere on this project: the fuller description is written once, and the later entry points at
 *   it rather than repeating it.
 *     - n:19 (vomiting-led presentation) and n:23 (constipation-led presentation) are both
 *       Hirschsprung disease. The disease description (aganglionosis mechanism, the deck's own
 *       triad) is written in full in n:19; n:23 points at pedhd-gastro-19 and confines itself to why
 *       suction rectal biopsy is the confirmatory investigation.
 *     - n:22 and n:26 are both functional gastrointestinal disorders under the deck's own Rome IV
 *       table. The general framework (alarm signals, the stepwise algorithm, diagnosis of exclusion)
 *       is written in full in n:22; n:26 points at pedhd-gastro-22 and confines itself to the
 *       discriminating feature — an altered bowel pattern — that separates irritable bowel syndrome
 *       from the isolated functional abdominal pain in n:22.
 *
 * FOUR of these eight questions ask for the next investigation or management step rather than a
 *   diagnosis (n:22, n:23, n:24, and n:19 arguably straddles the two): each explanation below states
 *   why the keyed step is right AND why every other listed step is premature, excessive or unfocused
 *   for what the stem is actually asking — not a differential-diagnosis shape.
 *
 * The bank prints ZERO explanation boxes in this chapter — every answer below is authored and
 *   carries the closing marker.
 *
 * Chapter assignment was made one question at a time, on what the stem is about (candidate ids per
 *   the brief, all verified to resolve in MODULES under `pediatrics`):
 *   n:19 -> gastroenterology  presenting complaint is vomiting after every feed; the deck's own
 *                             bile-stained-vomiting/surgical-causes section is where Hirschsprung
 *                             disease is taught (secondary: gi-diarrhoea, for the bowel-habit picture)
 *   n:20 -> gi-abdopain       intermittent colicky crying with a mass is the deck's named acute cause
 *   n:21 -> gi-diarrhoea      presenting complaint is a 6-month history of diarrhoea and weight loss
 *   n:22 -> gi-abdopain       chronic periumbilical pain with no alarm signals; the deck's own
 *                             organic-vs-functional chronic-pain section
 *   n:23 -> gi-diarrhoea      presenting complaint is constipation since birth (secondary:
 *                             gastroenterology, for the Hirschsprung disease content, see n:19)
 *   n:24 -> gi-abdopain       migratory right-iliac-fossa pain with peritonism; the deck's own
 *                             surgical-red-flags/appendicitis section
 *   n:25 -> gastroenterology  the deck's own pyloric-stenosis section is close to word-for-word here
 *   n:26 -> gi-abdopain       chronic episodic pain with an altered bowel pattern; same Rome IV table
 *                             as n:22
 *
 * Grounding is T_PEDS['gastroenterology'] (4 sections, gast-1..gast-4), T_PEDS['gi-diarrhoea'] (11,
 *   gast-5..gast-15) and T_PEDS['gi-abdopain'] (3, gast-16..gast-18) — section ids run continuously
 *   across all three GI chapters, confirmed off disk, not assumed from the task prompt. Sections are
 *   cited by their own id in each explanation.
 *
 * OUTSIDE-KNOWLEDGE TAGS in this range, each grepped against T_PEDS/the lecture caches before being
 *   called a gap:
 *   n:19/n:23  Hirschsprung disease itself is taught by the deck (`gastroenterology` gast-4: Down
 *       association, absent ganglion cells, the no-meconium/distension/empty-rectum triad, suction
 *       biopsy) but that whole entry is already flagged there as not taken from the course material
 *       — confirmed by grepping "hirschsprung" and "aganglion" across every lecture cache in
 *       content\peds\lectures\ (0 hits in Vomiting.txt, Constipation.txt, Abdominal pain.txt and
 *       Acute diarrhea.txt; the only hit anywhere is a one-line mention beside duodenal atresia in
 *       `6) Genetically determined disease_.txt` as a Down-syndrome association, no mechanism or
 *       diagnosis). Both entries below repeat that existing tag rather than re-deciding it.
 *   n:21  Coeliac disease's mechanism (gluten-triggered villous atrophy) and its link to microcytic
 *       anaemia are supplied as outside knowledge. The material names coeliac disease three times
 *       (gast-6 "unmasking", gast-12 "sensitivity to... gluten", gast-14 as one of two causes a
 *       constipation work-up rarely finds) without ever teaching villi, gluten or the anaemia
 *       mechanism; "Iron deficiency anemia pdf.txt" line 103 lists "celiac screen" as a work-up step
 *       for microcytic anaemia of a suspected non-dietary cause, which grounds the link without
 *       proving the mechanism, so the mechanism itself is tagged.
 *   n:20, n:22, n:24, n:25, n:26  none new — grounded in gi-abdopain / gastroenterology as cited in
 *       each entry; the one exception is intussusception's classic triad (paroxysmal colicky pain
 *       with drawing up the legs, redcurrant-jelly stool) in n:20, which the deck's own gast-17 entry
 *       already flags as "not in course material" — repeated as an existing tag, not a new finding.
 *
 * NO DIVERGENCE between the book's printed key and the material was found anywhere in this half; no
 *   defective-key note was needed.
 *
 * Every key prints as a bare letter; the letter-vs-name cross-check was NOT performed anywhere in
 *   this file, and that unavailability is stated in each entry rather than left silent.
 */


var PEDHD_GASTRO_DRAFT_C = [

{
  id:'pedhd-gastro-19', bank:'house', module:'pediatrics', chapter:'gastroenterology',
  stem:'A 2-month-old infant is brought to the GP by his mother. She is concerned that he vomits after every feed. She has noticed that his abdomen has become distended. On further questioning he opens his bowels infrequently every 3–4 days and did not pass meconium until 72 hours of age. Abdominal X-ray shows distended loops of bowel with no air in the rectum. The most likely diagnosis is which of the following?',
  options:['Hirschsprung\'s disease','Constipation due to dehydration','Pyloric stenosis','Cow\'s milk protein allergy','Intussusception'],
  answer:0,
  explanation:'**Hirschsprung disease is the diagnosis — the triad in the stem (delayed meconium beyond 48 hours, progressive abdominal distension, and a film showing distended proximal loops with NO air in the rectum) is exactly the picture the deck names** (`gastroenterology` gast-4): *\'No meconium in the first 48 hours · distension · an EMPTY rectum with explosive stool on withdrawal of the finger\'* — printed there, though the deck itself already flags this specific list as not taken from the course material.\n\n**The mechanism**, also not taken from the course material: Hirschsprung disease is caused by an absence of ganglion cells in the distal bowel (a failure of neural-crest cell migration), so the aganglionic segment cannot relax and propagate peristalsis; functional obstruction results proximal to it, and the film\'s distended loops with a gas-less rectum reflect exactly that distal block. gast-4 also records Hirschsprung disease as a recognised association of Down syndrome, alongside duodenal atresia. This baby\'s 3–4-day stooling interval and vomiting after every feed are the chronic partial-obstruction pattern that follows once the neonatal presentation is missed. `pedhd-gastro-23` in this same file (`pedhd-gastro-23`) covers the confirmatory investigation — suction rectal biopsy — in a baby presenting with the same disease from a constipation-led history; see that entry for the diagnostic step, not repeated here.\n\n**Why each distractor is wrong.**\n\n| Option | Why it does not fit |\n|---|---|\n| Constipation due to dehydration | Functional constipation from dehydration does not produce distended bowel loops with an AIRLESS rectum on X-ray, and gives no reason for a newborn to miss the 48-hour meconium window — the deck\'s own constipation-evaluation section (`gi-diarrhoea` gast-14) instead lists a LOADED (faecal-filled) rectum on digital exam as the finding, the opposite of Hirschsprung\'s empty one. |\n| Pyloric stenosis | Presents at 2–8 weeks with non-bilious, increasingly forceful vomiting and a right-upper-quadrant \'olive\' mass, but no distal bowel-gas abnormality and no history of delayed meconium (`gastroenterology` gast-3) — the presentation here is a distal, not gastric-outlet, obstruction. |\n| Cow\'s milk protein allergy | Typically produces vomiting, diarrhoea or blood/mucus in stool from a mucosal reaction to milk protein, not a mechanical distal obstruction with an airless rectum on imaging, and it does not explain a delayed first stool. |\n| Intussusception | The deck\'s own acute-causes section places its peak at 3 months to 2 years with an ACUTE colicky presentation and a palpable mass (`gi-abdopain` gast-17) — not a chronic history running back to a delayed first stool at birth. |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Recognise Hirschsprung disease in a 2-month-old with delayed meconium beyond 48 hours, progressive abdominal distension and a gas-less rectum on X-ray, against constipation due to dehydration, pyloric stenosis, cow\'s milk protein allergy and intussusception; cross-referenced to the suction-biopsy question later in this file.',
  source:'pediatric .pdf p.87 (Part I, ch.11 Q19)'
},

{
  id:'pedhd-gastro-20', bank:'house', module:'pediatrics', chapter:'gi-abdopain',
  stem:'A 7-month-old infant presents with a 12-hour history of intermittent inconsolable crying; he is mottled, has cool peripheries and has vomited several times. Examination reveals a mass in the right upper quadrant of the abdomen. What is the most likely cause of his symptoms?',
  options:['Colic','Incarcerated hernia','Gastroenteritis','Intussusception','Gastro-oesophageal reflux'],
  answer:3,
  explanation:'**Intussusception is the diagnosis — intermittent, inconsolable crying with vomiting, shock-like signs (mottled, cool peripheries) and a right-upper-quadrant mass is the deck\'s own acute-causes picture** (`gi-abdopain` gast-17): *\'Paroxysmal colicky pain with drawing up of the legs, a sausage-shaped mass, REDCURRANT-JELLY stool\'* — that specific triad is flagged there as not taken from the course material, but the deck DOES teach, as course fact, that intussusception is \'the COMMONEST CAUSE OF INTESTINAL OBSTRUCTION IN INFANTS AFTER THE NEONATAL PERIOD,\' peaking between 3 months and 2 years, and results from invagination of proximal bowel into a distal segment, most often ileum into caecum through the ileocaecal valve (gast-17; also `gastroenterology` gast-4, which lists it first among the printed causes of acute obstruction). At 7 months, with a 12-hour history and clinical shock, this infant sits squarely in that window; the right-upper-quadrant mass is where the leading (invaginated) segment has advanced to at the time of examination — its position varies with how far the intussusceptum has travelled, which is why the deck does not tie it to one fixed quadrant.\n\n**Why each distractor is wrong.**\n\n| Option | Why it does not fit |\n|---|---|\n| Colic | Infantile colic is excessive crying in an otherwise well, thriving infant with a normal examination — it does not produce mottling, cool peripheries or a palpable abdominal mass, all signs of a surgical emergency here. |\n| Incarcerated hernia | Listed among the deck\'s own acute intestinal obstructions (`gastroenterology` gast-4), but it presents as an irreducible, tender INGUINOSCROTAL swelling, not an abdominal mass — the stem gives no groin finding. |\n| Gastroenteritis | Would be expected to produce diarrhoea and a history of contact/illness, not intermittent colicky crying with a discrete abdominal mass; the deck\'s own differential for acute diarrhoea lists intussusception as a surgical mimic to be excluded before settling on gastroenteritis (`gi-diarrhoea` gast-6), not the reverse. |\n| Gastro-oesophageal reflux | A benign, self-limited cause of regurgitation in a thriving infant, with no mass, no shock and no colicky pain pattern (`gastroenterology` gast-2) — it does not explain any of this child\'s acute findings. |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Recognise intussusception in a 7-month-old with intermittent inconsolable crying, vomiting, shock signs and a right-upper-quadrant mass, against colic, incarcerated hernia, gastroenteritis and gastro-oesophageal reflux.',
  source:'pediatric .pdf p.87 (Part I, ch.11 Q20; the question straddles the page break, with option E and the closing "Answer: D." printed alone at the top of p.88)'
},

{
  id:'pedhd-gastro-21', bank:'house', module:'pediatrics', chapter:'gi-diarrhoea',
  stem:'A 9-year-old presents with a 6-month history of nonbloody diarrhoea associated with 4 kg of weight loss. His mother says he is less energetic than before and looks paler than normal. There is no history of foreign travel. Blood tests show a microcytic anaemia (Hb 8.9 g/dL, MCV 72) but normal inflammatory markers. What is the most likely diagnosis?',
  options:['Crohn\'s disease','Salmonella infection','Coeliac disease','Cow\'s milk protein allergy','Ulcerative colitis'],
  answer:2,
  explanation:'**Coeliac disease is the diagnosis — 6 months of non-bloody diarrhoea, weight loss, fatigue, pallor and a MICROCYTIC anaemia with NORMAL inflammatory markers together point away from an inflammatory bowel process and toward malabsorption.** The deck names coeliac disease three times as a real diagnostic entity without ever teaching its detail: acute gastroenteritis can \'unmask\' it (`gi-diarrhoea` gast-6), it is listed as a non-infectious cause of chronic diarrhoea alongside \'sensitivity to milk or gluten\' (gast-12), and it is one of only two conditions the deck names as a cause a constipation work-up rarely uncovers (gast-14) — so the material establishes coeliac disease firmly in this bank\'s differential without teaching the mechanism or the anaemia link used here.\n\n**The mechanism and the anaemia link are supplied here** — not taken from the course material: coeliac disease is an immune-mediated enteropathy triggered by dietary gluten, causing villous atrophy of the proximal small bowel; the resulting loss of absorptive surface classically causes an iron-deficiency-pattern microcytic anaemia (low Hb, low MCV) alongside chronic diarrhoea and weight loss, exactly as printed here (Hb 8.9 g/dL, MCV 72). The bank\'s own iron-deficiency-anaemia material comes closest to a course link, listing a \'coeliac screen\' as an investigation to send when a non-dietary cause of microcytic anaemia is suspected or iron therapy fails — grounding the link without itself teaching the mechanism.\n\n**Why each distractor is wrong.**\n\n| Option | Why it does not fit |\n|---|---|\n| Crohn\'s disease | An inflammatory bowel disease, and the deck\'s own organic-versus-functional framework expects raised inflammatory markers and often blood in stool with IBD (`gi-abdopain` gast-18) — this stem gives normal inflammatory markers and no blood, arguing against it. |\n| Salmonella infection | An acute bacterial gastroenteritis, not a 6-month illness — the deck defines acute diarrhoea as lasting under 14 days (`gi-diarrhoea` gast-5/gast-6) — six months of symptoms is far outside that window. |\n| Cow\'s milk protein allergy | Typically presents in infancy, not a previously well 9-year-old, and does not classically produce this degree of chronic weight loss with microcytic anaemia. |\n| Ulcerative colitis | Like Crohn\'s disease, an inflammatory bowel disease that would be expected to raise inflammatory markers and usually cause bloody diarrhoea — both are against it here (gast-18). |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Recognise coeliac disease in a 9-year-old with 6 months of non-bloody diarrhoea, weight loss and a microcytic anaemia with normal inflammatory markers, against Crohn\'s disease, Salmonella infection, cow\'s milk protein allergy and ulcerative colitis; supplies the villous-atrophy mechanism and the anaemia link, tagged as outside the course material.',
  source:'pediatric .pdf p.88 (Part I, ch.11 Q21)'
},

{
  id:'pedhd-gastro-22', bank:'house', module:'pediatrics', chapter:'gi-abdopain',
  stem:'An 8-year-old girl presents with a 6-month history of pain most days around the umbilicus which lasts for an hour and responds to paracetamol syrup. It does not occur at weekends usually. She opens her bowels daily and passes a soft stool. She is thriving with her weight and height on the 75th centile. Which of the following options is the appropriate next step?',
  options:['Abdominal radiograph','Referral to a paediatric gastroenterologist','Inflammatory markers and liver function tests','Reassurance and no further investigation','Prescription for laxatives'],
  answer:3,
  explanation:'**Reassurance with no further investigation is the correct next step — this vignette has NONE of the deck\'s own alarm signals, so it is a working diagnosis of a pain-related functional gastrointestinal disorder (FGID), managed without a \'shotgun\' work-up** (`gi-abdopain` gast-18). Point by point against the deck\'s alarm-signal list: age is over 5 years, the pain is never nocturnal (it is daytime, school-day-linked), there is no persistent localisation to the right upper or lower quadrant, no vomiting, dysphagia or blood/mucus in stool, no dysuria or flank pain, and no growth deceleration — she is thriving on the 75th centile. Examination gives no jaundice, anaemia, organomegaly, guarding or perianal disease. The deck states the diagnostic aim explicitly: \'identify any serious cause WITHOUT unnecessary investigation, while reassuring child and parents,\' after checking growth (present, and normal). The periumbilical site, response to simple analgesia and normal daily soft-stool bowel habit fit isolated functional abdominal pain within the deck\'s own Rome IV table, one of the four abdominal-pain-related FGIDs.\n\n**Why each other option is premature, excessive or useless here, since this is a management question, not a differential.**\n\n| Option | Why it is wrong as the NEXT step |\n|---|---|\n| Abdominal radiograph | The deck restricts imaging to when a specific organic disease is suspected — ultrasound turns up a relevant finding in under 1% of children investigated this way (gast-18), and nothing here suggests an organic cause to target. |\n| Referral to a paediatric gastroenterologist | Reserved for alarm signals or failure to improve after a trial of management (\'no response after 4 weeks -> reconsider an organic cause,\' gast-18) — this is the first assessment, and referral before that has been tried skips the deck\'s own stepwise algorithm. |\n| Inflammatory markers and liver function tests | Listed as INITIAL screening tests, but only pursued when alarm signals are present; with none here, sending them is the \'shotgun approach\' the deck explicitly warns against. |\n| Prescription for laxatives | Nothing in the stem suggests constipation — she opens her bowels daily and passes a soft stool — so laxatives treat a problem this child does not have. |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Identify reassurance with no further investigation as the correct next step for an 8-year-old with 6 months of periumbilical pain and no alarm signals (normal growth, no nocturnal pain, no blood, normal examination) — a working diagnosis of a pain-related functional GI disorder — against imaging, referral, blood tests and laxatives, each premature or irrelevant here.',
  source:'pediatric .pdf p.88 (Part I, ch.11 Q22)'
},

{
  id:'pedhd-gastro-23', bank:'house', module:'pediatrics', chapter:'gi-diarrhoea',
  stem:'A 6-month-old baby attends with a history of constipation since birth. Her mother has been using glycerine suppositories every 3 days to help her defecate. When she inserts the suppository a gush of liquid stool is passed. Her mother remembers she did not open her bowels until she was 3 days old. Which of the following investigations would confirm the diagnosis?',
  options:['Thyroid function tests','Barium enema','Bone profile','Abdominal film','Suction biopsy of the rectum'],
  answer:4,
  explanation:'**Suction biopsy of the rectum is the confirmatory investigation — this is Hirschsprung disease again, presenting this time through a constipation-led history rather than the vomiting-led one in `pedhd-gastro-19` (see that entry for the disease description, not repeated here).** Every feature matches: constipation since birth, meconium delayed to day 3, and a gush of liquid stool on suppository insertion — that gush is overflow around an underfilled, aganglionic segment, distinct from the loaded rectum of ordinary functional constipation.\n\n**Why suction biopsy is the confirming test** — not taken from the course material: it samples the submucosa of the distal rectum to look directly for the ganglion cells whose absence defines the disease; finding an aganglionic segment on histology confirms Hirschsprung disease, which no other listed test can do — the deck itself names \'rectal suction biopsy is diagnostic\' as part of the same Hirschsprung entry cited in `pedhd-gastro-19` (`gastroenterology` gast-4), flagged there as not taken from the course material.\n\n**Why each other investigation does not confirm the diagnosis.**\n\n| Option | Why it does not confirm Hirschsprung disease |\n|---|---|\n| Thyroid function tests | The deck lists hypothyroidism, alongside coeliac disease, as one of the only two conditions organic constipation work-up rarely uncovers (`gi-diarrhoea` gast-14) — relevant to a constipation work-up in general, but it does not test for aganglionosis. |\n| Barium enema | Can suggest the diagnosis by showing a transition zone between narrow aganglionic and dilated normal bowel, but it is a screening/supportive test, not the confirmatory one — histology from biopsy is what confirms it. |\n| Bone profile | Tests calcium, phosphate and related markers for metabolic bone disease — unrelated to bowel innervation and gives no information toward this diagnosis. |\n| Abdominal film | Can show non-specific dilated loops with an airless rectum, as in `pedhd-gastro-19`, but it cannot distinguish Hirschsprung disease from other causes of distal obstruction — it is suggestive, not confirmatory. |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Identify suction rectal biopsy as the investigation that confirms Hirschsprung disease in a 6-month-old with constipation since birth, delayed meconium and an overflow gush on suppository use, against thyroid function tests, barium enema, bone profile and plain abdominal film; cross-referenced to the diagnosis question earlier in this file.',
  source:'pediatric .pdf p.88 (Part I, ch.11 Q23; the question and all five options are printed complete on p.88, with only the closing "Answer: E." printed alone at the top of p.89)'
},

{
  id:'pedhd-gastro-24', bank:'house', module:'pediatrics', chapter:'gi-abdopain',
  stem:'A 9-year-old boy attends hospital with a 24-hour history of abdominal pain initially around the umbilicus and now in the right iliac fossa. His mother says he has not eaten today and has been listless. He finds it difficult to stand up straight. He is tender on palpation of his abdomen and guarding. What is the next step in management?',
  options:['Referral to surgical team','Abdominal radiograph','Intravenous antibiotics','Full septic screen','Admit to the ward for review on the ward round'],
  answer:0,
  explanation:'**Referral to the surgical team is the correct next step — this is the deck\'s own classic picture of appendicitis with the signs that mean surgery, and those signs demand a surgical opinion before anything else.** Pain migrating from the umbilicus to the right iliac fossa over a day, anorexia (not eaten today), listlessness and difficulty standing up straight are exactly the deck\'s \'older children\' presentation of appendicitis: \'fever, nausea, vomiting, right lower quadrant pain, tenderness and rigidity\' (`gi-abdopain` gast-17). On examination, TENDERNESS and GUARDING are named directly among the deck\'s own signs suggestive of a surgical cause, alongside rebound tenderness and rigidity (gast-17) — and appendicitis is listed as a surgical, intra-abdominal emergency in the deck\'s own three-way classification (gast-16). Once those surgical signs are present, the deck\'s teaching point is to act on them, not to keep investigating in medical settings.\n\n**Why each other option is premature, excessive or the wrong first move here, since this is a management question about sequencing, not a differential.**\n\n| Option | Why it is wrong as the NEXT step |\n|---|---|\n| Abdominal radiograph | Not the deck\'s listed first-line surgical-emergency investigation — ultrasonography or CT are what the deck names as helping establish the diagnosis of appendicitis (gast-17), and neither should delay the surgical referral itself, which drives further imaging. |\n| Intravenous antibiotics | Treats an already-established diagnosis of infection; starting antibiotics before a surgical opinion risks masking signs and delaying an operation this child may need, and the deck gives no course basis for antibiotics as a stand-alone next step in a possible acute abdomen. |\n| Full septic screen | A septic screen targets an unlocalised source of sepsis; this boy\'s findings are already localised to the right iliac fossa with peritoneal signs — a broad septic screen adds time without changing the immediate surgical question. |\n| Admit to the ward for review on the ward round | Guarding and rigidity are the deck\'s own red flags for a surgical cause (gast-17) — deferring assessment to a scheduled ward round, rather than referring now, is exactly the kind of delay the deck warns causes \'diagnostic confusion, delay and PERFORATION\' when appendicitis is missed early. |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Identify referral to the surgical team as the correct next step for a 9-year-old with migratory right-iliac-fossa pain, anorexia and peritoneal signs (tenderness and guarding) — the deck\'s own surgical red flags for appendicitis — against radiography, antibiotics, a septic screen and ward-round review, each a premature or unfocused alternative.',
  source:'pediatric .pdf p.89 (Part I, ch.11 Q24)'
},

{
  id:'pedhd-gastro-25', bank:'house', module:'pediatrics', chapter:'gastroenterology',
  stem:'A 6-week-old male infant presents with a week of worsening non-bilious vomiting. His mother reports the vomit is projectile in nature and seems to be getting gradually worse. He is eager to feed after the vomits but is having fewer wet nappies than usual. On examination he is afebrile, appears hungry and looks mildly dehydrated. What is the most likely diagnosis?',
  options:['Cow\'s milk protein intolerance','Gastroenteritis','Meningitis','Pyloric stenosis','Malrotation and volvulus'],
  answer:3,
  explanation:'**Pyloric stenosis is the diagnosis — a 6-week-old boy with worsening, projectile, NON-bilious vomiting who is hungry and eager to feed straight afterwards is the deck\'s own textbook description almost word for word.** Pyloric stenosis presents at 2–8 weeks of age irrespective of gestational age, is four times commoner in boys, and its vomiting is \'NON-BILIOUS... increases in frequency and forcefulness over time, then becomes PROJECTILE,\' with the infant \'FEEDS NORMALLY AFTER VOMITING — the hungry vomiter,\' which the deck names as the key discriminator against gastroenteritis and sepsis (`gastroenterology` gast-3). Fewer wet nappies and mild dehydration on examination reflect ongoing fluid loss from the obstructed feeds; the deck also teaches that the resulting hypochloraemic hypokalaemic metabolic alkalosis must be corrected with intravenous rehydration, sometimes for over 24 hours, before pyloromyotomy — not tested by this stem, but the reason mild dehydration is the expected finding here rather than shock.\n\n**Why each other option is wrong.**\n\n| Option | Why it does not fit |\n|---|---|\n| Cow\'s milk protein intolerance | Typically causes vomiting alongside diarrhoea, blood/mucus in stool or eczema/atopy from a reaction to milk protein, not isolated progressively projectile vomiting with a hungry, otherwise well infant. |\n| Gastroenteritis | Would be expected to bring diarrhoea and often fever, and the deck\'s own \'hungry vomiter\' sign is precisely what separates pyloric stenosis from gastroenteritis — this infant is afebrile with no diarrhoea mentioned. |\n| Meningitis | A systemic infection with vomiting as one feature among fever, lethargy and, in infants, non-specific signs; this stem gives an afebrile, hungry infant with a mechanical vomiting pattern, not a septic one. |\n| Malrotation and volvulus | Presents with BILIOUS (green) vomiting as a surgical emergency (`gastroenterology` gast-4) — this infant\'s vomit is explicitly NON-bilious, which argues directly against it. |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Recognise pyloric stenosis in a 6-week-old boy with worsening projectile non-bilious vomiting and hunger straight after each vomit (\'the hungry vomiter\'), against cow\'s milk protein intolerance, gastroenteritis, meningitis and malrotation/volvulus.',
  source:'pediatric .pdf p.89 (Part I, ch.11 Q25)'
},

{
  id:'pedhd-gastro-26', bank:'house', module:'pediatrics', chapter:'gi-abdopain',
  stem:'A 15-year-old girl attends clinic concerned about her episodic abdominal pain and loose stool over the last year. She dates it back to when she changed schools and says it occurs more often on school days. She describes crampy abdominal pain followed by the need to pass a stool which happens about twice a month. Her bowel habit is normal on the other days. There has never been any blood and she has not lost any weight. Which of the following is most likely to be the underlying cause of her symptoms?',
  options:['Cow\'s milk protein intolerance','Coeliac disease','Ulcerative colitis','Irritable bowel syndrome','Overflow diarrhoea secondary to constipation'],
  answer:3,
  explanation:'**Irritable bowel syndrome is the underlying cause — this is the second functional gastrointestinal disorder in this chapter, and the deck\'s own Rome IV table separates it from the isolated-pain picture in `pedhd-gastro-22` by exactly one feature: an ALTERED BOWEL PATTERN accompanying the pain** (`gi-abdopain` gast-18): *\'Abdominal pain with ALTERED BOWEL PATTERN -> Irritable bowel syndrome\'*, distinct from the same table\'s \'ISOLATED abdominal pain -> Functional abdominal pain\' entry that fit `pedhd-gastro-22`. Here the pattern is crampy pain followed by a need to defecate, occurring about twice a month, with normal bowel habit in between — an altered-pattern, pain-linked-to-defecation picture, not an isolated pain.\n\nThis vignette also carries none of the deck\'s alarm signals — no blood, no weight loss, a psychosocial trigger (the school change) and a symptom pattern tied to school days — so, exactly as in `pedhd-gastro-22`, the diagnostic route is the deck\'s stepwise algorithm reaching a working diagnosis of a pain-related FGID rather than pursuing organic causes (gast-18); see `pedhd-gastro-22` for that framework and the alarm-signal list in full, not repeated here.\n\n**Why each other option is wrong.**\n\n| Option | Why it does not fit |\n|---|---|\n| Cow\'s milk protein intolerance | Typically presents in infancy or early childhood with feed-related symptoms, not a 15-year-old with a year-long, school-linked, episodic pattern. |\n| Coeliac disease | Would be expected to bring weight loss and, per `pedhd-gastro-21`, a microcytic anaemia from malabsorption — both explicitly absent here. |\n| Ulcerative colitis | An inflammatory bowel disease, and the deck\'s organic-versus-functional table expects blood and often nocturnal symptoms with IBD (gast-18) — this girl has never had blood and her pattern is daytime/school-linked. |\n| Overflow diarrhoea secondary to constipation | The deck names this as \'spurious diarrhoea\' from chronic constipation with overflow incontinence (`gi-diarrhoea` gast-6) — but her bowel habit is explicitly normal between episodes, with no constipation history, which does not fit an overflow picture. |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Identify irritable bowel syndrome as the underlying cause of a 15-year-old\'s year-long episodic crampy pain with an altered bowel pattern (pain relieved by defecation) and a school-linked trigger, distinguished from the isolated-pain FGID in the earlier functional-pain entry, against cow\'s milk protein intolerance, coeliac disease, ulcerative colitis and overflow diarrhoea from constipation.',
  source:'pediatric .pdf p.89 (Part I, ch.11 Q26)'
},

];
