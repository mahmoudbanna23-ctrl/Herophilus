/* ent-septum — "Septum diseases and nasal trauma", ENT. Written from scratch
   2026-08-14 under START-HERE.md §14 (slide-density revision notes). No v1
   existed.

   BUDGET — §14.1 rule, budget = max(summed lecture words, 25 x linked question
   count), floor 600, cap 3,000. BOTH TERMS STATED:

     TERM 1 — summed words of the lectures this chapter RESTS ON:
       L24) diseases of the nasal septum      527 w  (WHOLE deck, backbone —
       measured by `wc -w`. The deck is titled "NASAL SEPTUM DESEASES &
       Fracture Nasal Bones" and every slide in it is this chapter: the ILOs,
       development, the septal-disease list, the three-part anatomy, the
       arterial supply, the whole nasal-bone-fracture block — aetiology,
       classification, signs, investigation, closed and open reduction — and
       the whole DNS block. Its arterial-supply slide is shared subject matter
       with `ent-noseanat` and `ent-epistaxis`, but it is L24’s own stated ILO
       ("Blood supply of the nasal septum") and is counted here.)
       = 527 words
     TERM 2 — 25 x 65 linked questions = 1,625 words

     max(527 · 1,625) = 1,625. TERM 2 GOVERNS, by 1,098 words.

   DIAGRAM-DECK CHECK, as §14.1 requires it be stated. L24 measures
   527 w / 127 non-blank lines = 4.15 words per line — well ABOVE the ~2 that
   marks a labelled-diagram file. It is an ordinary prose deck, no correction
   applies. (For contrast, L22 — the diagram deck that forced the second term
   into existence — runs 1.2 w/line.) The question term governs here regardless.

   NOT COUNTED, CITED ONLY — each contributes a line or two, and claiming its
   words would make the budget meaningless:
     · L26) nasal masses — the septal-haematoma DEFINITION, quoted verbatim in
       sept-8, and the midline/unilateral/bilateral placement. Its 676 w are
       already claimed by `ent-nasalmass`’s budget; counting them twice would
       be double-billing.
     · L25.1) epistaxis — two items only: "Structural" as a local cause of
       epistaxis (line 177) and "Endoscopic resection of septal spur"
       (line 489). Its 1,368 w belong to `ent-epistaxis`.
     · L25.2) smell — the cribriform-shearing basis of post-traumatic
       sensorineural hyposmia, one clause in sept-10. Belongs to
       `ent-epistaxis` (the chapter is "Epistaxis and smell disorders").
     · L23) Anatomy of the Nose — its septum slide (lines 38–42) is a strictly
       shorter restatement of L24’s own, and Little’s area (lines 43–48) is not
       tested by any question here. Belongs to `ent-noseanat`.

   MEASURED OUTCOME: 1,785 body words over 12 sections — 160 over the 1,625
   budget, 9.8 %, inside §14.1’s 10 % tolerance. Two compression passes took it
   there from 2,098; nothing protected was cut, only connective sentences,
   duplicated clauses, verbose tag phrases and distractor-rejection prose (the
   "irrigation and antibiotics treat neither" clause on the perforation graft,
   and "the septum travels with the pyramid" on the boxing question, both of
   which are said elsewhere or live in the question’s own explanation).

   FLOOR KEPT BOTH WAYS — every fact, list, number, eponym, instrument and
   classification L24 states, plus every one of the 65 linked questions’ KEY
   and DISCRIMINATOR as a line or a table cell. All 65 ids linked, none dropped.

   ⚠️ DEFERRAL COLLECTED (§14.5). `ent-nasalmass` deferred "SEPTAL HAEMATOMA
   beyond L26’s definition — drainage, septal abscess, cartilage necrosis and
   saddle nose -> `ent-septum`". It is DELIVERED in sept-8, which carries the
   definition, the bilateral-after-severe-trauma point, the haematoma-vs-abscess
   table, the 3-day rule verbatim, incision + evacuation + compression packing,
   the abscess drainage and antibiotics, cartilage necrosis, saddle nose,
   perforation and the cavernous-sinus route — plus the avascular-cartilage
   mechanism in sept-1 that all of it turns on. Nothing from `nmass-1` or
   `nmass-10` is repeated except the one-sentence definition, which sept-8
   needs as its own opening.

   OMISSION NOTE — cut on purpose, each a decision on the record:
     1. Distractor-by-distractor rejection. It lives in every question’s own
        `explanation`, one tap away through the qs links (§14.2). Kept only
        where the teaching point IS the discrimination — the deviation-type
        table (sept-3), the SMR/septoplasty table (sept-6), the perforation
        cause table (sept-7), the haematoma-vs-abscess table (sept-8), the
        blow-direction and Type 1/2/3 tables (sept-9), and the timing table
        (sept-11).
     2. Question ids in body text, teaching voice, bank meta-commentary beyond
        the two one-line defect notes §4 requires, per-fact citation clauses
        (one Src line per section), closing summary.
     3. L24’s "Development" slide — a bare heading with no content under it.
     4. Drug doses, antibiotic choices, packing materials and operative steps
        the material does not state.
     5. Nasal-fracture epidemiology and the paediatric growth-centre argument
        for early referral — no question reaches either and no slide states it.

   CROSS-CHAPTER DEFERRALS (§14.5) — named, so each is a promise not a deletion.
   Each was checked against all 65 of this chapter’s questions: NONE tests it.
     · Little’s area / Kiesselbach’s plexus and Woodruff’s plexus, and the
       full local + systemic aetiology of epistaxis (L25.1 lines 170–195),
       cautery, packing and the arterial ligations. Only the septal spur as a
       structural cause, and its cure by septoplasty or endoscopic resection,
       are kept                                            -> `ent-epistaxis`
     · Post-traumatic anosmia as a subject — the conductive/sensorineural
       split, prognosis and testing. Only the one hyposmia clause is kept
                                                           -> `ent-epistaxis`
     · The general work-up of nasal obstruction — mucosal vs structural
       aetiology lists, turbinate hypertrophy in its own right, NOSE and
       SNOT-22, rhinomanometry, acoustic rhinometry, the decongestant rules.
       Only the deviation’s own drug signature is kept       -> `ent-nasalobs`
     · Nasal valve anatomy in full — the boundaries of the internal and
       external valve, valve reconstruction, spreader and batten grafts. Only
       the Cottle test and the "greatest obstruction" line are kept, since L24
       prints them                          -> `ent-nasalobs` (secondary chapter
       already recorded on the Cottle question)
     · Wegener’s granulomatosis as an entity — ANCA, the triad, the systemic
       disease. Only its appearance in the saddle-nose and perforation lists
       is kept                                                     -> `ent-rhin`
     · The septum’s arterial supply as vascular anatomy — the internal-vs-
       external carotid territories and the anastomoses. Kept here only as
       L24’s four named vessels                              -> `ent-noseanat`
     · CSF rhinorrhoea after mid-facial trauma — halo sign, beta-2
       transferrin, management. Only "clear watery discharge means CSF" is
       kept, as the discriminator one question turns on   -> `ent-nasalobs`

   DEFECT NOTES (§4 — a printed key is recorded, never disputed), both kept to
   one line in the body:
     · DNS prevalence — one key gives Caucasians 92 % vs Africans 40 % while
       its own option "more common in males" is also true and is what L24
       states (80 % of the population, more in males). Noted in sept-2.
     · Saddle nose — one Grade Gain printing offers Wegener’s and neglected
       septal haematoma and keys "Both"; the same bank’s other printing keys
       Wegener’s alone over a menu that never offers the haematoma. Both keys
       are sound on their own option lists. Noted in sept-8.
     · Initial imaging after mid-facial trauma — one key names plain AP and
       lateral X-ray. Noted in sept-10.

   Table pipes carry no padding — mdCells() trims outer delimiters.
   Curly apostrophes throughout: a straight one closes a single-quoted field. */

var THEORY_ENT_SEPTUM = {
  'ent-septum': {

    intro: 'Two clocks and one cavity. The trauma half asks when to reduce — oedema decides, never the calendar. The septum half asks which lesion: deviation blocks, perforation whistles, haematoma is soft and afebrile, abscess is febrile. Drain the haematoma the day you find it.',

    sections: [

{
  id: 'sept-1', w: 'must',
  h: 'Three parts, four arteries, and one cartilage with no blood supply',
  body: [
    '**Three parts:** **membranous** · **cartilaginous** — the **quadrilateral (septal) cartilage**, **3–4 mm thick**, partitioning the two cavities **and supporting the tip and dorsum** · **bony** — mainly **perpendicular plate of the ethmoid** + **vomer**, continuous above with the **cribriform plate and crista galli**.',
    '',
    '**Vomer:** inferior border articulates with the **nasal crest of the maxillae and palatine bones**; anterior border with the **perpendicular plate** above and **septal cartilage** below; **posterior border is the free edge**.',
    '',
    '**Arterial supply — both carotid systems:** **sphenopalatine** → posteroinferior · **greater palatine** → anteroinferior · **superior labial**, from the **facial** · **anterior and posterior ethmoidal**.',
    '',
    '- **The septal cartilage has no vessels of its own — it feeds through the mucoperichondrium.** Anything that lifts that layer off — haematoma, abscess, an SMR — starves it *(not in course material)*.',
    '',
    '**Septal diseases:** deviated septum · septal perforation · septal fractures · involvement in systemic diseases.',
    '',
    'Src: L24'
  ].join('\n'),
  qs: ['entqb-nose8-239']
},

{
  id: 'sept-2', w: 'must',
  h: 'Deviated nasal septum — prevalence and aetiology',
  body: [
    '**Extremely common: 80 % of the population, more in males.**',
    '',
    '|Cause|Detail|',
    '|---|---|',
    '|**Trauma** — with or without nasal bone fracture|**commonest cause of symptomatic deviation** *(slide does not rank)*|',
    '|**Developmental**|**birth moulding theory** · **abnormal intrauterine posture**, compression forces on nose and upper jaws · **post-natal trauma**|',
    '|**Racial (hereditary)**|—|',
    '|**Mass effect**|a lesion displacing the septum across|',
    '',
    '⚠️ One key states a racial prevalence — **Caucasians 92 % vs Africans 40 %** — ; its own option *"more common in males"* is also true and is what the slide prints. Read the option list.',
    '',
    'Src: L24'
  ].join('\n'),
  qs: ['entqb-nose8-241','entqb-nose8-242']
},

{
  id: 'sept-3', w: 'must',
  h: 'The types of deviation, and which side they block',
  body: [
    '**Cartilaginous or bony**, **vertical or horizontal plane**. Obstruction column *(not in course material)* except the compensatory turbinate.',
    '',
    '|Type|Shape|Obstruction|',
    '|---|---|---|',
    '|**C-shaped**|single curve — **commonest type**|**bilateral** once the roomy side hypertrophies its turbinate|',
    '|**S-shaped**|curve reverses, both cavities narrowed|**bilateral**|',
    '|**Thickened septum**|broad, not curved|**bilateral**|',
    '|**Spur**|**localised ridge**, cartilaginous or bony|**unilateral** — a ridge cannot block the other side|',
    '|**Anterior dislocation**|**cartilage straight**, displaced off the maxillary crest|**unilateral**, out of proportion — it sits in the nasal valve|',
    '',
    '- **Anterior dislocation is not a curve** — the slide lists it as its own category, beside the C- and S-shaped deviations and the spur.',
    '- **The spur is the bleeder:** mucosa stretched thin over the ridge and dried by turbulent flow → **recurrent unilateral anterior epistaxis from one fixed point** *(not in course material)*.',
    '',
    'Src: L24; L25.1 (structural causes of epistaxis)'
  ].join('\n'),
  qs: ['entqb-nose8-243','entqb-nose8-244','entqb-nose8-256']
},

{
  id: 'sept-4', w: 'must',
  h: 'What deviation causes — and what it never causes',
  body: [
    '**Nasal obstruction — same side as the deviation OR the opposite side**, from **hypertrophic changes in the turbinate** on the roomy side. **So it is often bilateral; "strictly unilateral" is wrong.**',
    '',
    '**Also:** **snoring** · **mucosal changes** — dryness, crusting, **epistaxis** · **headache** from pressure on adjacent sensory nerves — **anterior ethmoidal nerve syndrome**, classically frontal and worse in the morning · **sinusitis** · **hyposmia**, obstructive *(not in course material)* · **middle ear infection**.',
    '',
    '**NOT caused by deviation:** **cacosmia** — needs infected or retained material (chronic rhinosinusitis, atrophic rhinitis, foreign body) · **septal haematoma** — trauma or a bleeding disorder.',
    '',
    '- **The drug response is the diagnosis.** Bilateral obstruction **improving only slightly and temporarily with decongestants and not at all with topical steroids** is **structural** — mucosal disease answers to both, a deviated septum to neither. Only surgery corrects it.',
    '',
    'Src: L24'
  ].join('\n'),
  qs: ['entep-nose-26','entep-nose-77','entep-mfe4-27','entqb-nose8-252','entqb-nose8-255','entqb-nose8-257','entqb-nose2-82']
},

{
  id: 'sept-5', w: 'high',
  h: 'The nasal valve and the Cottle test',
  body: [
    '**"Deviations in region of nasal valve cause greatest obstruction : cottle test."** The valve is the narrowest part of the airway, so a small deviation there blocks more than a large one further back.',
    '',
    '- **Cottle test** — draw the cheek laterally and ask the patient to breathe in *(manoeuvre and valve boundaries not in course material; the slide prints the link and the name)*.',
    '- **Positive, breathing improves = obstruction at the internal nasal valve** — valve collapse, or a deviation / anterior dislocation within it.',
    '- **Negative** points elsewhere: hypertrophied turbinates, polyps, mucosal disease.',
    '',
    'Src: L24'
  ].join('\n'),
  qs: ['entqb-nose8-245']
},

{
  id: 'sept-6', w: 'must',
  h: 'The two operations — SMR vs septoplasty',
  body: [
    '|Operation|What it does|Consequence|',
    '|---|---|---|',
    '|**SMR (submucous resection)**|**resects the septal cartilage** from between the two mucoperichondrial flaps|mucosa left on mucosa → **septal perforation**, **bad odour**, crusting, paradoxical **functional nasal obstruction**; lost dorsal support risks **saddle nose** *(not in course material)*|',
    '|**Septoplasty**|**conserves and repositions** the cartilage|**gold standard and treatment of choice**|',
    '',
    '- **Surgery is not contraindicated for fear of perforation** — septoplasty exists to avoid it. **Operate for symptoms**, not for the deviation seen on examination.',
    '- **Septal perforation is the commonest complication of septal surgery**, either operation. Also **synechiae**, bleeding, saddle nose.',
    '- **No drug straightens cartilage** — decongestants, antihistamines, intranasal steroids cannot treat DNS.',
    '- **A bleeding spur is cured by septoplasty** or **endoscopic resection of the spur** — both remove the cause; packing and cautery stop the episode only.',
    '',
    'Src: L24; L25.1 (endoscopic spur resection)'
  ].join('\n'),
  qs: ['entep-nose-90','entqb-nose9-261','entqb-nose9-265','entqb-nose8-250','entqb-nose2-83']
},

{
  id: 'sept-7', w: 'must',
  h: 'Septal perforation',
  body: [
    '|Cause|Rank|',
    '|---|---|',
    '|**Iatrogenic — after SMR / septal surgery**|**commonest**|',
    '|**Cocaine abuse**|**second commonest**|',
    '|Trauma, including digital (nose-picking)|—|',
    '|Infection — tuberculosis, syphilis, **fungal**|—|',
    '|Granulomatous — **Wegener’s granulomatosis**|—|',
    '|Chemical and industrial irritants|—|',
    '|**Hypertension — NOT a cause.** It causes epistaxis|—|',
    '',
    '- Ranking *(not in course material)*.',
    '- **Mechanism: two opposing mucoperichondrial tears at the same point** with the cartilage resected between them — nothing left to heal across *(not in course material)*. **Cocaine** does it by **ischaemic necrosis of the mucoperichondrium and cartilage**.',
    '- **Triad: crusting · recurrent epistaxis · whistling**, all from turbulent airflow across the defect. **Whistling means a SMALL perforation.** After septal surgery: **crusty discharge with bleeding on removing the crusts**. In a cocaine user, constant sniffing with epistaxis and obstruction is this one lesion.',
    '',
    '**Treatment:** small or asymptomatic → **douching, humidification, ointment**. **Large with crusting → a cartilage GRAFT** — a scaffold, with mucosal advancement for lining. A flap alone gives lining without support *(not in course material)*.',
    '',
    'Src: L24'
  ].join('\n'),
  qs: ['entqb-nose8-249','entqb-nose9-259','entqb-nose8-253','entqb-nose8-258','entep-nose-79','entep-nose-83','entep-mfe5-40','entep-nose-case-11']
},

{
  id: 'sept-8', w: 'must',
  h: 'Septal haematoma and septal abscess',
  body: [
    '**Definition:** *"the collection of blood under the mucoperichondrium or mucoperiosteum of nasal septal cartilage or bone"*. **Unilateral or bilateral, the latter more frequent in the setting of severe trauma** — bilateral strips the cartilage of its supply from both sides at once.',
    '',
    '**Invisible from outside** — *"Look for septal hematoma, abscess"* on every injured nose: **anterior rhinoscopy the same day**, even with straight nasal bones and no facial fracture.',
    '',
    '||Haematoma|Abscess|',
    '|---|---|---|',
    '|Interval|hours to a few days|**more than ~3 days** untreated|',
    '|Fever, malaise|**absent**|**present**|',
    '|Septum|**soft, fluctuant, bluish or reddish**, smooth, often **bilateral**|**fluctuant**, mucosa red and inflamed|',
    '|External nose|injury swelling|**dorsum swollen and tender**|',
    '|Treatment|**immediate incision and evacuation + compression packing**, antibiotic cover|**incise, drain, systemic antibiotics**|',
    '',
    '**"Any hematoma more than 3 days = infection. Any infection = abscess = necrosis of cartilage."**',
    '',
    '- **Never:** watchful waiting, decongestants, antihistamines, corticosteroids, antibiotics alone, or resecting the septum.',
    '- **Complications: cartilage necrosis → saddle nose** · **septal perforation** · nasal deformity · **meningitis and cavernous sinus thrombosis** by the valveless facial veins. **Epistaxis is not one of them.**',
    '- **Saddle nose = loss of dorsal support.** A **neglected septal haematoma** starves the avascular cartilage; **Wegener’s** destroys it by vasculitis. ⚠️ One printing offers both and keys **"Both"**; another keys **Wegener’s** alone over a menu that never offers the haematoma. Read the option list.',
    '',
    'Src: L24; L26 (definition, laterality)'
  ].join('\n'),
  qs: ['entep-nose-8','entep-nose-25','entep-nose-88','entep-nose-101','entqb-nose7-210','entqb-nose8-246','entqb-nose8-247','entqb-nose8-248','entqb-nose8-251','entqb-nose6-191','entep-nose-case-12']
},

{
  id: 'sept-9', w: 'must',
  h: 'Fracture of the nasal bones and septum — mechanism and pattern',
  body: [
    '**Aetiology: trauma (RTA, sports), inflicted from the front, the side or below.** The septum and nasal bones may **buckle on themselves, fracture vertically or horizontally, or be crushed**. **Fracture or dislocation of the septal cartilage can occur without any nasal bone fracture** when the blow lands on the lower nose.',
    '',
    '**Three axes of classification: nature of injury · extent of deformity · pattern of fracture.** The **angulated / wing / open-book** names below are *(not in course material)*; the directions of force are the slide’s own.',
    '',
    '|Direction of blow|Result|',
    '|---|---|',
    '|**Lateral**|**angulated (deviated) nose** — including the **wing fracture**, one nasal bone driven in; commonest pattern, often needs intranasal packing after reduction|',
    '|**Mild frontal**|no fracture|',
    '|**Moderate frontal**|**depressed** (flattened) nose|',
    '|**Severe frontal**|**open book** — both nasal bones splayed at the midline; image for naso-orbito-ethmoid, orbital and cribriform injury|',
    '',
    '- **A lateral blow deviates the nose AWAY from the side struck.** Right-handed opponents hit the **left** sidewall, so a boxer’s nose ends deviated to the **right**.',
    '',
    '**Septal fracture types** *(numbering not in course material)*:',
    '',
    '|Type|Fracture line|Stability|',
    '|---|---|---|',
    '|**1**|single, **does NOT cross** the osteocartilaginous junction|**most stable, lowest complication rate**|',
    '|**2**|single, **crosses** the junction|**less stable** than Type 1|',
    '|**3**|**multiple** lines, may cross the junction|**least stable, highest complication rate**; most likely to need open reduction|',
    '',
    'Src: L24'
  ].join('\n'),
  qs: ['entqb-nose6-192','entqb-nose6-193','entqb-nose6-194','entqb-nose6-199','entqb-nose8-236','entqb-nose8-237','entqb-nose8-238','entqb-nose8-239','entqb-nose8-240']
},

{
  id: 'sept-10', w: 'must',
  h: 'Assessing the injured nose',
  body: [
    '**Signs — the slide’s own list.** External deformity is **difficult to examine in the acute condition** (facial deformity, contusions) and **better seen after the oedema has reduced**. **Look for movements of the eye.** **Palpate for deformity, deviation, crepitus, mobility, tenderness.** **Look for septal haematoma and abscess.**',
    '',
    '**Symptoms: bloody rhinorrhoea** · **nasal obstruction** · **hyposmia** — conductive, or sensorineural if the cribriform plate shears. **Purulent rhinorrhoea is NOT part of a nasal fracture** — after trauma it means **septal abscess**; **clear watery discharge means CSF**.',
    '',
    '|Question|Answer|',
    '|---|---|',
    '|**How is it diagnosed?**|**Clinically** — inspection and palpation. Re-examine at **3–5 days** once swelling settles|',
    '|**Most informative imaging**|**3D CT.** Plain films unreliable, MRI misses cortical bone, ultrasound cannot see it|',
    '|**What the slide orders**|**X-ray nasal bone**; **in severe facial injury, CT nose and PNS**|',
    '|**Why the plain film at all**|**Medico-legal documentation** — assault, RTA, sport. **True.** It neither confirms nor excludes a fracture and never overrides the clinical decision to reduce *(not in course material)*|',
    '',
    '⚠️ One key names **plain AP and lateral radiographs as the INITIAL modality** after mid-facial trauma, reserving CT for complex or orbital injury. Answer as printed.',
    '',
    'Src: L24; L25.2 (cribriform shearing and hyposmia)'
  ].join('\n'),
  qs: ['entqb-nose6-195','entqb-nose6-196','entqb-nose6-197','entqb-nose6-198','entep-mfe4-16','entep-nose-case-1']
},

{
  id: 'sept-11', w: 'must',
  h: 'When to reduce — oedema decides, not the calendar',
  body: [
    '**Most patients need no active treatment in a mild condition — just observation.**',
    '',
    '|Presentation|Management|',
    '|---|---|',
    '|**Minutes to hours, no or minimal oedema**|**Reduce NOW** — digital / manual reduction at the bedside, no anaesthesia; intranasal packing to support a wing fracture; splint|',
    '|**Oedema established, within ~2 weeks**|**Anti-oedema measures first**, then **closed reduction at 5–10 days (about a week)** under LA or GA. **Never reduce through peak swelling**, never leave it past 2 weeks|',
    '|**Beyond ~2 weeks — 3–4 weeks, 1 month**|**United; reduction no longer possible.** Wait to about **6 months from injury** for the soft tissue to settle, then **open reduction — rhinoplasty with osteotomy** (deliberate re-fracture) **plus a splint**|',
    '',
    '- **Principle of reduction: mobilise the fragments first, by increasing and then decreasing the degree of deformity.** **Instruments: Freer · Ashe · Walsham forceps. Splints may be necessary.**',
    '- **Open reduction (septorhinoplasty)** — for **fractures with dislocation of the nasal dorsum and significant septal deformity**. Deviation **with obstruction** means the septum is involved, so the operation is a **septorhinoplasty**.',
    '- **Whatever the timing, the first visit still clears the clots and excludes a septal haematoma and a CSF leak.**',
    '',
    'Src: L24'
  ].join('\n'),
  qs: ['entep-nose-12','entep-nose-50','entep-nose-74','entep-nose-97','entep-nose-112','entep-mfe5-14','entep-mfe5-15','entep-enr-12','entqb-nose6-200','entqb-nose6-201','entqb-nose6-202','entqb-nose6-203']
},

{
  id: 'sept-12', w: 'know',
  h: 'Nasal synechiae',
  body: [
    '**Fibrous adhesions between the nasal septum and a turbinate**, formed when **two opposing raw surfaces heal in contact** — after septal surgery, packing or cautery. Fixed obstruction. Not an infection, a growth, or thickened mucosa.',
    '',
    '- **Treated by dividing the adhesion and interposing a spacer or splint** until both surfaces re-epithelialise *(not in course material)*.',
    '',
    'Src: L24'
  ].join('\n'),
  qs: ['entqb-nose8-254']
}

    ]
  }
};
