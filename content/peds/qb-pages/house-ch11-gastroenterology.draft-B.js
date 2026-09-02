/* House — "Dr. HOUSE in pediatric medicine & surgery MCQs" (Semester 8\Pedo\Questions\pediatric .pdf)
 * Part I, chapter 11: GASTROENTEROLOGY — printed questions Q11 to Q18 (book pp.84-87).
 *
 * DRAFT B. n:1 to n:10 are drafted separately in house-ch11-gastroenterology.draft-A.js — NOT
 * opened, NOT read and NOT touched here. The two halves are merged by a byte-level splice
 * afterwards.
 *
 * Stems, options and keys are taken verbatim from the validated staging record
 * content\peds\qb-pages\house-ch11-gastroenterology.array.js (var PEDHD_GASTRO_STAGED, 26
 * entries), copied out of that array field by field, not retyped from a page. The book's own
 * spellings, dashes and diacritics are preserved and never corrected.
 *
 * KEYS IN THIS RANGE, n:11..n:18 = B E D B C A C A, read out of the staging array. `answer` is
 * 'ABCDE'.indexOf(key) in every case: 1 4 3 1 2 0 2 0.
 * ⚠️ Every answer line in ch.11 prints a BARE LETTER with no option name beside it (same as
 * ch.10). The letter-versus-name cross-check is UNAVAILABLE for the whole chapter and was NOT
 * performed — do not read its absence as a passed check.
 *
 * NO figure anywhere in the chapter — a MEASURED zero in the staging header (all nine pages
 * pp.81-89 rendered whole and examined). No entry below carries `image` or `imgAlt`.
 *
 * STRADDLES IN THIS RANGE — TWO, filed on the page the printed number is on:
 *   n:14 (p.85 -> p.86): stem and options A-D are on p.85; option E and "Answer: B." are the
 *     first thing printed on p.86.
 *   n:17 (p.86 -> p.87): stem and options A-C are on p.86; options D, E and "Answer: C." are the
 *     first thing printed on p.87.
 *
 * SHARED OPTION MENUS — the length lever for this half, per the drafting brief:
 *   Group 1, n:11 + n:12: Intussusception / Malrotation / Meningitis / Inflammatory bowel disease
 *     / Migraine, keys B and E. Comparative table written ONCE, in n:11; n:12
 *     points at it and names only its own token.
 *   Group 2, n:13-n:16: Constipation / Pneumonia / Appendicitis / Mesenteric adenitis / Functional
 *     abdominal pain, keys D, B, C, A. Comparative table written ONCE, in n:13
 *     (n:13); n:14, n:15 and n:16 point at it and name only their own token.
 *   Neither group is a fold — all eight stay separate entries, per the standing "a shared menu
 *   pairs, it never folds" rule.
 *
 * `id` PREFIX CHECKED: `grep -c "pedhd-gastro-" app\data\questions.peds.js` returned 0 — the
 * prefix is free, confirmed before writing.
 *
 * Chapter assignment was made one question at a time, on what the stem is about (brief §4):
 *   n:11  -> `gastroenterology`  bilious vomiting in a 36-hour-old neonate; the menu's own framing
 *                                is "the most likely cause of the VOMITING in that patient"
 *   n:12  -> `gastroenterology`  kept with n:11's menu and its identical "cause of the vomiting"
 *                                stem wording — AWKWARD, see below: the true diagnosis is a
 *                                primary headache disorder, not a GI one
 *   n:13  -> `gi-abdopain`       fever/coryza with mild generalised tenderness; the menu's framing
 *                                is "the most likely diagnosis" of an abdominal-pain presentation
 *   n:14  -> `gi-abdopain`       kept with n:13's abdominal-pain menu — AWKWARD, see below: the
 *                                true diagnosis is pneumonia, a chest disease, referred to the RUQ
 *                                (secondary chapter `resp-pneumonia`)
 *   n:15  -> `gi-abdopain`       migrating pain to the right iliac fossa — appendicitis, no
 *                                awkwardness
 *   n:16  -> `gi-abdopain`       kept with n:13's menu; true diagnosis constipation has its own
 *                                chapter (secondary `gi-diarrhoea`), presenting complaint wins
 *   n:17  -> `gastroenterology`  vomiting infant with the pyloric-stenosis clinical picture, whose
 *                                metabolic signature the question is testing — AWKWARD, see below:
 *                                the question tests acid-base INTERPRETATION, not a GI diagnosis
 *   n:18  -> `gi-abdopain`       AWKWARD, see below: groin/scrotal pain and testicular torsion,
 *                                assigned here because `gast-16` is the only candidate chapter
 *                                that files testicular torsion at all (as an extra-abdominal item
 *                                on the acute-abdominal-pain list), not because the presenting
 *                                complaint is abdominal
 *
 * Grounding is `T_PEDS['gastroenterology']` (gast-1..gast-4), `T_PEDS['gi-diarrhoea']`
 * (gast-5..gast-15) and `T_PEDS['gi-abdopain']` (gast-16..gast-18) — ⚠️ all three GI chapters
 * share ONE continuous section-id run, confirmed off disk, so a per-chapter prefix grep is not
 * meaningful — plus `T_PEDS['resp-pneumonia']` (resp-1..resp-8, used at resp-4) and
 * `T_PEDS['infection']` (inf-1..inf-15, used at inf-8) where a distractor or an exclusion lives
 * outside the GI block.
 */

var PEDHD_GASTRO_DRAFT_B = [

{
  id:'pedhd-gastro-11', bank:'house', module:'pediatrics', chapter:'gastroenterology',
  stem:'Amir was born by elective caesarean section for maternal pre-eclampsia. His birthweight was 3.3 kg. He is 36 hours old. He has started to establish breastfeeding but has been vomiting after every feed. The vomit is noted by the midwife to be green. On examination his temperature is 37.2°C. His abdomen is slightly distended. The rest of his examination is normal. Which of the following is the most likely cause of the vomiting in that patient?',
  options:['Intussusception','Malrotation','Meningitis','Inflammatory bowel disease','Migraine'],
  answer:1,
  explanation:'**Bilious (green) vomiting in a 36-hour-old neonate is malrotation with volvulus until excluded — a surgical emergency, not a colour to wait out.**\n\n**The material\'s own framing.** `gastroenterology` §`gast-4` opens: *"Green vomit: obstructed bowel until proved otherwise."* It lists **malrotation and volvulus** among the abdominal catastrophes of infancy and warns **"the bowel infarcts within hours — a well-looking baby with green vomit is still an emergency."** Amir is 36 hours old, vomiting green after every feed, with a slightly distended abdomen — exactly that picture. *(The mechanism — an abnormal duodenojejunal flexure diagnosed on upper GI contrast, treated by Ladd\'s procedure, and bilious vomiting in a well neonate being midgut volvulus until excluded — is marked in the cached theory as not printed in the course material; supplied because the printed list names the diagnosis without spelling out why it is picked over its siblings.)*\n\nThis entry carries the comparative table for the shared option menu that also prints on `pedhd-gastro-12` (`pedhd-gastro-12`), which points back here and names only its own token.\n\n| Option | Discriminating token in THIS stem |\n|---|---|\n| Intussusception | Peak age 3 months-2 years (`gi-abdopain` §`gast-17`); a 36-hour-old is far too young, and the vomiting here is bilious, not the paroxysmal colic/redcurrant-jelly picture |\n| **Malrotation** (key) | Bilious vomiting from birth in a well term neonate with a soft-to-slightly-distended abdomen — the printed emergency `gast-4` names |\n| Meningitis | No lethargy, irritability or fever beyond 37.2°C; `infection` §`inf-8` puts a bulging fontanelle, altered mental status and nuchal rigidity in the neurologic group, none present |\n| Inflammatory bowel disease | A disease of later childhood presenting with chronic diarrhoea and weight loss, not a 36-hour-old\'s first feeds |\n| Migraine | The `pedhd-gastro-12` answer — a teenager\'s unilateral headache picture, not a neonate\'s green vomit |\n\n**Bottom line:** the age and the colour of the vomit are the whole question; nothing else in the stem needs weighing.\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Recognise bilious vomiting in a well term neonate as malrotation/volvulus, a surgical emergency, and use the shared option menu to exclude intussusception (too young), meningitis (no red flags), inflammatory bowel disease (wrong age) and migraine (the `pedhd-gastro-12` answer).',
  source:'pediatric .pdf p.84 (Part I, ch.11 Q11)'
},

{
  id:'pedhd-gastro-12', bank:'house', module:'pediatrics', chapter:'gastroenterology',
  stem:'Jennifer, a 14-year-old girl, presents to the emergency department with a severe headache for the last 6 hours, mainly affecting the left side of her head. She just wants to lie still in the dark and dislikes being disturbed, but her mother is concerned as she has never had such an episode before and is normally a very lively girl who is doing well at school. She has been vomiting for the last 2 hours and cannot keep anything down and is also complaining of tummy pain. On examination she is distressed by her headache and dislikes having the examination light shone on her. Her temperature is 37.2°C. She does not have neck stiffness or papilloedema. The rest of her examination is normal. Which of the following is the most likely cause of the vomiting in that patient?',
  options:['Intussusception','Malrotation','Meningitis','Inflammatory bowel disease','Migraine'],
  answer:4,
  explanation:'**Migraine. The comparative table for this shared menu (Intussusception / Malrotation / Meningitis / Inflammatory bowel disease / Migraine) is written once, in `pedhd-gastro-11`; only this entry\'s own discriminating token is added here.**\n\nJennifer is 14, with a **unilateral, throbbing headache** for 6 hours, photophobia (**dislikes the examination light**), a first such episode in a normally well girl, and — the two features doing the ruling-out — **no neck stiffness and no papilloedema**. `infection` §`inf-8` puts nuchal rigidity, altered mental status and bulging signs in the neurologic group for meningitis; none is present, so the answer is reached by excluding those red flags rather than from a positive migraine criterion printed anywhere in the cached theory. *(Classic migraine — unilateral throbbing headache with photophobia/phonophobia and vomiting — is not taught in the material; the nearest printed entity, `gi-abdopain` §`gast-18`\'s Rome IV "abdominal migraine" (cyclic pain with headache, vomiting and/or aura-like symptoms), is a related but distinct FGID centred on recurrent abdominal pain rather than on headache. Both statements not taken from the course material.)*\n\n⚠️ **Flagged, not silently folded in:** this is a migraine diagnosis printed and answered inside the chapter\'s "cause of vomiting" menu — the stem ends with the identical wording to `pedhd-gastro-11`, *"the most likely cause of the vomiting in that patient"* — kept with `pedhd-gastro-11` under the presenting-problem rule because the book poses both as the same differential question, even though the correct diagnosis here is a primary headache disorder, not a GI one.\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Diagnose migraine in an adolescent from a unilateral throbbing headache with photophobia and vomiting, excluded from meningitis by the absence of neck stiffness and papilloedema, and recognise this entry\'s awkward placement inside a GI chapter\'s "cause of vomiting" menu.',
  source:'pediatric .pdf p.85 (Part I, ch.11 Q12)'
},

{
  id:'pedhd-gastro-13', bank:'house', module:'pediatrics', chapter:'gi-abdopain',
  stem:'Max, aged 9 years, has been brought to the Emergency Department as he is crying and saying his tummy hurts. He has had a 2-day history of fever and coryza. He has been drinking orange juice but has only eaten some jelly and yogurt. He has not opened his bowels. His temperature is 38.2°C. His throat is red and he has tender cervical lymph nodes. He is not dehydrated. He has mild generalized tenderness of the abdomen, with no guarding. Which of the following is the most likely diagnosis of that patient?',
  options:['Constipation','Pneumonia','Appendicitis','Mesenteric adenitis','Functional abdominal pain'],
  answer:3,
  explanation:'**Fever and coryza with a red throat and tender cervical nodes, plus only MILD, generalised abdominal tenderness with no guarding, is mesenteric adenitis — reactive lymphadenopathy from the same viral URTI, not a surgical abdomen.**\n\n`gi-abdopain` §`gast-17` states it directly: **non-specific abdominal pain and mesenteric adenitis resolves in 24-48 hours, pain LESS SEVERE than appendicitis, right iliac fossa tenderness VARIABLE, often with an upper respiratory infection and cervical lymphadenopathy.** Max\'s picture matches point for point — 2-day fever/coryza, red throat, tender cervical nodes, generalised (not focal, not guarded) tenderness.\n\nThis entry carries the comparative table for the shared option menu that also prints on `pedhd-gastro-14`, `pedhd-gastro-15` and `pedhd-gastro-16` (`pedhd-gastro-14`, `-15`, `-16`) — same five options, same order, four different keys; each sibling points back here and names only its own token.\n\n| Option | Discriminating token, across the four stems |\n|---|---|\n| **Constipation** (`pedhd-gastro-16`\'s key) | Not opened bowels for 2 days AND an indentable mass on the LEFT side — `gi-diarrhoea` §`gast-14` locates the loaded sigmoid as a **faecal mass in the LEFT LOWER QUADRANT** |\n| Pneumonia (`pedhd-gastro-14`\'s key) | Fever/coryza/cough with RIGHT UPPER QUADRANT tenderness — `resp-pneumonia` §`resp-4`: *"consider pneumonia in a child with acute abdominal pain — lower-lobe pneumonia mimicking an abdomen"* |\n| Appendicitis (`pedhd-gastro-15`\'s key) | Pain migrating to the lower right abdomen, unable to stand up straight — `gi-abdopain` §`gast-17`\'s classic older-child picture |\n| **Mesenteric adenitis** (this key) | URTI symptoms plus cervical lymphadenopathy, mild generalised tenderness, no guarding — as above |\n| Functional abdominal pain | None of the four vignettes fits it: each has an acute febrile or surgical trigger, not the chronic, non-organic pattern of `gast-18` |\n\n**Bottom line:** the throat and neck nodes are doing the discriminating, not the abdomen.\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Diagnose mesenteric adenitis from fever, coryza, a red throat and tender cervical nodes with only mild generalised, non-guarded abdominal tenderness, using the shared option menu to separate it from constipation, pneumonia, appendicitis and functional pain.',
  source:'pediatric .pdf p.85 (Part I, ch.11 Q13)'
},

{
  id:'pedhd-gastro-14', bank:'house', module:'pediatrics', chapter:'gi-abdopain',
  stem:'Pete, aged 4 years, is brought by his mother to the Emergency Department as he is crying and saying his tummy hurts. He has had a 2-day history of fever, coryza and cough. He is sitting quietly on his mother\'s lap, and is reluctant to play. He has a temperature of 38.2°C and a respiratory rate of 50 beats/min. On examination, his throat is red and he has tender cervical lymph nodes. He complains of tenderness on palpation of the right upper quadrant of the abdomen. Which of the following is the most likely diagnosis of that patient?',
  options:['Constipation','Pneumonia','Appendicitis','Mesenteric adenitis','Functional abdominal pain'],
  answer:1,
  explanation:'**Fever, coryza and cough with tenderness on right-upper-quadrant palpation, in a tachypnoeic child, is lower-lobe pneumonia referred to the abdomen. The shared-menu table is written once in `pedhd-gastro-13`; only Pete\'s own token is added here.**\n\n`resp-pneumonia` §`resp-4` states the trap by name: **"consider pneumonia in a child with ACUTE ABDOMINAL PAIN — lower-lobe pneumonia mimicking an abdomen."** Pete\'s respiratory rate crosses the WHO tachypnoea threshold for **12 months-5 years (>40/min)**, printed in the same section, and `gi-abdopain` §`gast-16` lists **"referred from the chest — pneumonia"** among its site-of-pain rules for acute abdominal pain, and pneumonia among the extra-abdominal causes overall. His fever, coryza, cough and tender cervical nodes are the chest infection; the right-upper-quadrant tenderness is referred, not local pathology.\n\n⚠️ **Why this sits in an abdominal-pain chapter:** this entry keeps the presenting complaint ("tummy hurts") of the shared abdominal-pain menu, but its correct answer is a chest diagnosis. Assigned to `gi-abdopain`, with `resp-pneumonia` as the secondary chapter, because the printed stem and option ladder frame it as one abdominal-pain differential with Q13, Q15 and Q16, and `gast-16`/`resp-4` are what teach *why* a chest infection belongs on that list at all.\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Recognise lower-lobe pneumonia presenting as right-upper-quadrant abdominal tenderness with fever, coryza, cough and tachypnoea — a chest diagnosis reached through a shared abdominal-pain option menu.',
  source:'pediatric .pdf p.85 (Part I, ch.11 Q14; the question straddles the page break, with option E and the answer line printed alone at the top of p.86)'
},

{
  id:'pedhd-gastro-15', bank:'house', module:'pediatrics', chapter:'gi-abdopain',
  stem:'Molly, aged 10 years, is brought to the Paediatric Assessment Unit as she has been vomiting and had central abdominal pain for 2 days. She has also had some diarrhoea. She has only had apple juice and no food for the last day. Her pain is getting worse. On examination, she has a temperature of 38.2°C and a heart rate of 110 beats/min. She has mild dehydration. There is tenderness in the lower right abdomen, but no guarding. When asked to walk, she is unable to stand up straight because of pain. Which of the following is the most likely diagnosis of that patient?',
  options:['Constipation','Pneumonia','Appendicitis','Mesenteric adenitis','Functional abdominal pain'],
  answer:2,
  explanation:'**Migrating pain now localised to the lower right abdomen, worsening over 2 days, in a child unable to stand up straight, is appendicitis. The shared-menu table is in `pedhd-gastro-13`; only Molly\'s own token is added here.**\n\n`gi-abdopain` §`gast-17` gives the classic older-child picture as **fever, nausea, vomiting, right lower quadrant pain, tenderness and rigidity**; Molly\'s fever (38.2°C), tachycardia (110/min), central-then-right-lower-quadrant pain and inability to stand straight from pain match it directly, even though rigidity/guarding is not yet described — an early presentation. §`gast-16`\'s age table places **appendicitis** as a surgical abdominopelvic emergency at her age band (school age, >5 years).\n\nHer mild dehydration and reduced oral intake are the systemic response to peritoneal irritation, not a separate diagnosis on the list.\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Diagnose appendicitis from migrating, worsening right-lower-quadrant pain with fever and tachycardia in a 10-year-old, before rigidity or guarding has developed.',
  source:'pediatric .pdf p.86 (Part I, ch.11 Q15)'
},

{
  id:'pedhd-gastro-16', bank:'house', module:'pediatrics', chapter:'gi-abdopain',
  stem:'Ted, aged 2 years, has had a 2-day history of low-grade fever and coryza. His mother has brought him to the Emergency Department as he is crying inconsolably. She thinks his tummy is hurting him. He has not opened his bowels for 2 days. He appears reasonably well, has minimal abdominal tenderness but has an indentable mass on the left side of the abdomen. Which of the following is the most likely diagnosis of that patient?',
  options:['Constipation','Pneumonia','Appendicitis','Mesenteric adenitis','Functional abdominal pain'],
  answer:0,
  explanation:'**Not opened his bowels for 2 days, minimal tenderness, and an indentable mass on the LEFT side of the abdomen, is constipation with a loaded, palpable colon. The shared-menu table is in `pedhd-gastro-13`; only Ted\'s own token is added here.**\n\n`gi-diarrhoea` §`gast-14` locates the sign exactly: **"a FAECAL MASS in the LEFT LOWER QUADRANT — the loaded sigmoid colon"** on abdominal examination for constipation, and §`gast-13` gives the Rome IV criteria of **two or fewer defecations per week** and **presence of a large faecal mass in the rectum**. An indentable (soft, doughy) mass distinguishes retained stool from the firmer, tender mass of an inflammatory or surgical process — Ted "appears reasonably well" with only minimal tenderness, not the guarding or rigidity `gast-17` lists as surgical red flags.\n\nSecondary chapter: `gi-diarrhoea`, which carries the full Rome IV and evaluation material this answer is built on; kept in `gi-abdopain` as primary because the stem is one of the shared "tummy hurts" menu with `pedhd-gastro-13`-`pedhd-gastro-15`.\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Diagnose constipation from infrequent defecation and an indentable left-sided abdominal mass (the loaded sigmoid), distinguishing it from the firmer, guarded mass of a surgical abdomen.',
  source:'pediatric .pdf p.86 (Part I, ch.11 Q16)'
},

{
  id:'pedhd-gastro-17', bank:'house', module:'pediatrics', chapter:'gastroenterology',
  stem:'A 5-week-old baby boy is brought into the emergency department with a 48-hour history of projectile vomiting. The infant is hungry after vomiting and has not opened his bowels in 3 days. Clinical examination reveals a mass in the left upper quadrant region. A blood gas is performed: pH 7.50, pCO2 5.5 kPa and bicarbonate 30 mmol/L. What does this blood gas represent?',
  options:['Normal findings','Metabolic acidosis','Metabolic alkalosis','Respiratory acidosis','Respiratory alkalosis'],
  answer:2,
  explanation:'**pH 7.50, pCO2 5.5 kPa, bicarbonate 30 mmol/L is metabolic alkalosis with partial respiratory compensation — the "hypochloraemic hypokalaemic metabolic alkalosis, from vomiting stomach contents" that `gastroenterology` §`gast-3` prints for pyloric stenosis.**\n\n**Reading the gas as printed, with no value converted.** The **pH is 7.50** — alkalaemic (normal ~7.35-7.45). The **bicarbonate is 30 mmol/L**, raised above the normal ~22-26 mmol/L range: this is the metabolic (primary) abnormality driving the alkalosis. The **pCO2 is 5.5 kPa**, at the upper edge of the normal range (~4.7-6.0 kPa) rather than reduced — a raised bicarbonate met by a FALL in pCO2 would point to the lungs as the primary problem, but here pCO2 has not fallen; it sits high-normal, the expected RESPIRATORY COMPENSATION for a metabolic alkalosis (hypoventilation, retaining CO2 to partly correct the pH back toward normal). *(The direction of expected compensation for a given primary disturbance is standard acid-base physiology, not printed in the cached theory as such — not taken from the course material; the disease mechanism below is.)*\n\n**The clinical picture supplies the mechanism.** A 5-week-old boy with **projectile vomiting**, **hungry after vomiting**, and an abdominal mass, is `gast-3`\'s pyloric stenosis, printed with exactly this metabolic signature. Vomiting gastric HCl loses hydrogen and chloride; the chloride-depleted kidney reabsorbs bicarbonate to maintain electroneutrality, entrenching the alkalosis (paradoxical aciduria) even as the lungs try to compensate.\n\n⚠️ Note: this entry tests gas INTERPRETATION rather than the diagnosis itself, and its mass is described as **left upper quadrant** — read and reproduced exactly as printed, not normalised to the textbook right-upper-quadrant "olive", since Q20 of this chapter places its mass differently again and both are transcribed as printed.\n\n**Why the other four are wrong**\n\n| Option | Why it does not fit |\n|---|---|\n| Normal findings | A pH of 7.50 is frankly outside the normal range, not normal |\n| Metabolic acidosis | Acidosis means a LOW pH; this pH is high |\n| Respiratory acidosis | Acidosis means a LOW pH, and would need a RAISED, not high-normal, pCO2 driving it down |\n| Respiratory alkalosis | Would need a LOW pCO2 (hyperventilation) as the primary driver, with bicarbonate low-normal or falling in renal compensation — the opposite pattern to the raised bicarbonate printed here |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Interpret an arterial blood gas with a high pH, raised bicarbonate and high-normal pCO2 as metabolic alkalosis with respiratory compensation, and link it to the hypochloraemic hypokalaemic metabolic alkalosis of pyloric stenosis from vomited gastric acid.',
  source:'pediatric .pdf p.86 (Part I, ch.11 Q17; the question straddles the page break, with options D, E and the answer line printed alone at the top of p.87)'
},

{
  id:'pedhd-gastro-18', bank:'house', module:'pediatrics', chapter:'gi-abdopain',
  stem:'A 12-year-old boy presents to accident and emergency with a history of groin pain for the past 4 hours. He is complaining of nausea and has vomited twice. On examination there is tenderness and swelling of the scrotum and right testicle, with absence of the cremasteric reflex on that side. There is no fever or erythema. Routine blood tests are normal. He describes several previous episodes of pain which were short lived. What is the most likely diagnosis?',
  options:['Testicular torsion','Torsion of the hydatid of Morgagni','Inguinal hernia','Renal stone','Epididymo-orchitis'],
  answer:0,
  explanation:'**Acute groin/scrotal pain with tenderness, swelling and an ABSENT cremasteric reflex, plus previous short-lived episodes of pain, is testicular torsion — repeated intermittent torsion-detorsion until this episode did not resolve on its own.**\n\n`gi-abdopain` §`gast-16` names it directly, twice: **torsion of the testis** is listed among the **EXTRA-ABDOMINAL** causes of acute abdominal pain, and the age-banded surgical-emergencies table places **testicular torsion** alongside appendicitis for **School age (>5 y)** and again for **Adolescent** — this boy is 12, in both bands. §`gast-16`\'s **"eight serious abdominal emergencies of childhood"** also lists **ovarian or testicular torsion** among them.\n\n⚠️ **Why this sits in an abdominal-pain chapter:** the presenting complaint is groin/scrotal pain, not abdominal pain, and no candidate chapter is titled for urology; assigned to `gi-abdopain` because that is the only chapter in the material that files testicular torsion at all — as an extra-abdominal item on the acute-abdominal-pain list — rather than `emergencies`, which in this material teaches resuscitation, arrest and shock, not this diagnosis.\n\n**The bedside signs.** *(Not printed in `gast-16`, which names the diagnosis but not its examination findings; supplied here because the stem is built around them — not taken from the course material.)* An **absent cremasteric reflex** is the most reliable bedside sign of torsion; short-lived PRIOR episodes describe intermittent torsion that has spontaneously detorsed before, a recognised precursor to a fixed torsion; absence of fever or erythema argues against an infective cause.\n\n**Why the other four are wrong**\n\n| Option | Why it does not fit |\n|---|---|\n| Torsion of the hydatid of Morgagni | A vestigial appendage twists, not the testis itself — classically a normal cremasteric reflex and a tender nodule at the upper pole, not the diffuse testicular swelling with an absent reflex described here *(not taken from the course material)* |\n| Inguinal hernia | Listed in `gast-16`\'s intra-abdominal surgical group and by groin site of pain, but an incarcerated hernia is a groin/inguinal swelling, not scrotal and testicular, and there is no history of a reducible lump |\n| Renal stone | `gast-16` places renal calculus pain in the LOINS, radiating toward the groin, not as scrotal swelling with an absent reflex |\n| Epididymo-orchitis | Usually accompanied by fever and erythema, both explicitly absent here; recurrent SHORT-LIVED episodes are the torsion history, not the infective one |\n\nWritten for this bank — pediatric .pdf prints no explanation here.',
  objective:'Diagnose testicular torsion from acute scrotal pain and swelling with an absent cremasteric reflex and prior short-lived episodes, and exclude the hydatid of Morgagni, inguinal hernia, renal stone and epididymo-orchitis.',
  source:'pediatric .pdf p.87 (Part I, ch.11 Q18)'
},

];
