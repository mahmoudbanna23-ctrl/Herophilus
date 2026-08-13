/* ent-stridor v2 — "Stridor and tracheostomy", ENT.
   Rewritten 2026-08-13 under START-HERE.md §14 (slide-density revision notes).
   v1 was 19,693 body words over 24 sections; this is 14 sections.
   Lectures: L6 2,289 w (this chapter's own) · L12 882 · L11 560.

   FLOOR KEPT BOTH WAYS — every fact, number, list, classification, eponym and
   sign L6 states, plus what L12/L11 add here, and every linked question's KEY
   and DISCRIMINATOR as a line or a table cell. All 113 question ids preserved.

   OMISSION NOTE — what was cut, so each is a decision on the record:
     1. Distractor-by-distractor rejection. It already lives in every question's
        own `explanation`, one tap away through the qs links (§14.2).
     2. Question ids in body text, teaching voice, bank meta-commentary, long
        block quotes, per-fact citation clauses (one Src line per section now).
     3. Every mechanism-of-why passage that is not itself a tested discriminator
        — the Bernoulli/laryngomalacia chain, tripod biomechanics, perichondrial
        blood supply, the chemoreceptor account of post-tracheostomy apnoea, the
        tracheo-innominate herald bleed, pleural-dome anatomy in detail.
     4. Three L6 slides owned by OTHER chapters and untested by these 113
        questions: the JORRP slides (ent-paedlar), the benign-laryngeal-tumour
        list, and the causes-of-laryngeal-paralysis list (ent-vocal). The
        cord-palsy facts these questions DO test are kept, in strid-3 and 14.
     5. Treatment option-lists for laryngeal web / subglottic stenosis /
        subglottic haemangioma trimmed to their headline modalities; the full
        paediatric detail belongs to ent-paedlar.
   Table pipes carry no padding — mdCells() trims outer delimiters. */

var THEORY_ENT_STRIDOR = {
  'ent-stridor': {

    intro: 'Three topics in one: the **sign** (phase locates the level), the **causes** (congenital, infective, foreign body, trauma, tumour) and the **operation** (tracheostomy — levels, tubes, three timed complication lists). One lecture carries almost all of it, and its numbers are examined verbatim.',

    sections: [

{
  id: 'strid-1', w: 'must',
  h: 'Stridor, stertor, wheeze, and the phase-to-site rule',
  body: [
    '**Stridor** = noisy breathing, **partial** obstruction **at or immediately below the larynx**; inspiratory / biphasic / expiratory. **Not a disease** — the cardinal symptom *and* sign of airway obstruction. Needs flow: **complete obstruction is silent**.',
    '',
    '||Stertor|Stridor|Wheeze|',
    '|---|---|---|---|',
    '|Pitch|**Low**, snoring|High, harsh, crowing|Whistling|',
    '|Phase|**Always inspiratory**|Varies with level|**Mainly expiratory**|',
    '|Level|**Nose / pharynx**|**At or just below larynx**|Lower airway: asthma, COD, tracheal FB|',
    '|Loudest|Face, mouth|**Neck**|**Chest**|',
    '',
    '**Phase locates the lesion:** inspiratory = **supraglottic + glottic** · **biphasic = subglottic + tracheal** · expiratory = **bronchial**.',
    '',
    '|Level|Stridor|Voice|Examples|',
    '|---|---|---|---|',
    '|Supra-laryngeal|Stertor|**Muffled, hot-potato**|Quinsy, tongue base, adenoids|',
    '|Supraglottic|**Inspiratory**|**Muffled**|Epiglottitis, supraglottic cancer, laryngomalacia|',
    '|Glottic|**Inspiratory**|**Hoarse**|Glottic cancer, bilateral abductor palsy, web, papillomatosis, cord spasm|',
    '|Subglottic|**Biphasic**|**Normal**; barking / brassy cough|Croup, subglottic stenosis or haemangioma, scleroma|',
    '|Cervical trachea|**Biphasic**|Normal, brassy|Post-intubation stenosis, tracheal FB, tracheomalacia|',
    '|Bronchi|**Expiratory** (wheeze)|Normal|Asthma, COD, bronchial FB|',
    '',
    '- **Biphasic = a FIXED lesion** (cricoid = the only complete ring).',
    '- **Muffled = above the cords · hoarse = at them · normal voice + stridor = BELOW them.**',
    '- Glottic and supraglottic cancer → **late** stridor; **subglottic → early**.',
    '- **Poiseuille: resistance ∝ 1/r⁴** (*Effect of Edema*) — 1 mm of oedema in a 4.5 mm infant subglottis is catastrophic. **Venturi** = velocity rises · **Bernoulli** = pressure falls, walls sucked in · **Boyle** = a sealed gas *(these three not in course material)*.',
    '- Defects, keyed as printed: barking cough keyed **supraglottic** (no subglottic option) · hot-potato voice keyed **supra-laryngeal**, **supraglottic** in the box · RLN-palsy stridor called **biphasic** · “narrowing increases airflow” keyed **Venturi**.',
    '',
    'Src: L6'
  ].join('\n'),
  qs: ['entqb-thr8-382','entqb-thr8-383','entqb-thr8-434','entqb-thr8-438','entqb-thr8-440','entqb-thr8-390','entep-throat-96','entep-throat-90','entep-throat-15','entep-throat-34','entep-throat-65','entqb-thr8-384','entqb-thr8-391','entqb-thr8-422','entqb-thr8-423','entqb-thr8-425','entqb-thr8-432','entqb-thr8-388','entqb-thr8-389','entep-throat-case-20','entqb-thr8-380','entqb-thr8-381']
},

{
  id: 'strid-2', w: 'must',
  h: 'Grading, the signs, and management of airway obstruction',
  body: [
    '||**I mild**|**II moderate**|**III severe**|',
    '|---|---|---|---|',
    '|Retractions|Supraclavicular + suprasternal|**+ intercostal**|**+ intercostal & epigastric**|',
    '|Pulse|Tachycardia|Rapid|**Rapid and IRREGULAR**|',
    '|Dyspnoea|**None**; alae nasi, tachypnoea|Variable; shallow rapid respiration|**Severe + CYANOSIS**, air hunger|',
    '|State|—|Irritable, sweating|Irritable, air hunger|',
    '|Gases|**PO2 > 95 %, PCO2 < 35 %**|**PO2 < 85 %, PCO2 35–40 %**|—|',
    '',
    '- Retractions march **downward**; pulse tachycardia → rapid → **irregular** → **bradycardia**. The full retraction set is **grade III, not mild**.',
    '- **Signs of upper airway obstruction:** **tripod / “barking dog” position** · open mouth, acting alae nasi · accessory muscles · **congested neck veins on expiration** · retractions (suprasternal, supraclavicular, intercostal, epigastric) · tachycardia · irritability, restlessness, sweating · **cyanosis and bradycardia = LATE**.',
    '- **Hoarseness is not a sign of obstruction.** Never lay the child flat.',
    '- **By grade:** mild → conservative · moderate → **improving conservative, PROGRESSIVE establish an airway** · severe → establish an airway.',
    '- **Conservative:** semi-sitting · humidified oxygen · corticosteroids · racemic epinephrine · subcutaneous adrenaline · antibiotics and mucolytics · anti-inflammatories.',
    '- **Airway:** intubation · **transcricothyroid needle ventilation (> 16 g)** · cricothyrotomy · tracheotomy.',
    '- **Treat the cause first in: tetany (calcium)** · laryngitis · **FB (extraction)** · angioneurotic oedema · **retro- and parapharyngeal abscess (drainage)**.',
    '- **Indications:** severe stridor · progressive moderate stridor · obstructing tumour · **PO2 < 60 mmHg** (N 100) · **PCO2 > 50 mmHg** (N 40) · **pH < 7.2** (a distractor prints 7.3).',
    '',
    'Src: L6'
  ].join('\n'),
  qs: ['entqb-thr8-385','entqb-thr8-386','entqb-thr8-387','entqb-thr8-396','entqb-thr8-433','entqb-thr8-438','entqb-thr8-401']
},

{
  id: 'strid-3', w: 'must',
  h: 'Causes by age, and the infantile larynx',
  body: [
    '**Classification:** febrile / afebrile · intrinsic / extrinsic · **congenital** (laryngomalacia, web, stenosis) · **trauma** (external, FB, intubation, iatrogenic) · **infection** (LTB, croup, abscess) · **developmental** (laryngocele, saccular cyst) · **neurological** (VC paralysis) · **vascular** (haemangioma, vascular ring) · **neoplasm** (RRP, sarcoma, cystic hygroma).',
    '',
    '|**Neonates**|**Children**|**Adults**|',
    '|---|---|---|',
    '|Laryngomalacia · VC paralysis · congenital subglottic stenosis · subglottic haemangioma · vascular ring · other congenital anomalies · **laryngeal spasm**|Acute non-specific laryngitis · epiglottitis · croup · **FB and corrosive ingestion** · **retropharyngeal abscess** · congenital laryngeal diseases · **laryngeal papillomatosis** · **angioneurotic oedema**|Laryngeal tumours (**malignant > benign**) · granulomas (**scleroma**) · **bilateral abductor paralysis, post-thyroidectomy** · laryngeal trauma · **post-intubation stenosis**|',
    '',
    '- **Onset dates it:** *immediate* = subglottic stenosis, congenital VC paralysis · *delayed* = **laryngomalacia (1st week)**, **haemangioma (1st 6 months)**. History: prematurity, prior intubation.',
    '- Congenital **extralaryngeal**: cystic hygroma · congenital goitre · thymic remnants and cysts · mediastinal teratoma · tracheal stenosis · tracheomalacia · **vascular ring** · dermoid cyst. Extralaryngeal **tumours**: tracheal · **thyroid** · hypopharyngeal · upper oesophageal · mediastinal.',
    '- **Infantile larynx:** smaller absolutely and relatively · **higher, C3–4** · epiglottis **long, tubular, folded** · **softer cartilage** · **loose submucosa → rapid oedema** · funnel-shaped, **subglottis 4.5 mm** · **big arytenoids, short cords** · **premature cough reflex → FB aspiration** · **premature neuromuscular control → cord spasm**. **4th arch → supraglottis · 6th arch → glottis and subglottis**; embryonic 0–8 weeks, fetal 9 weeks–7 months. Keyed falsehood: “**less** elastic cartilage” — it is **softer**.',
    '- **Congenital presentations:** *stridor* — laryngomalacia, congenital SG stenosis, bilateral **abductor** palsy, thick web · *abnormal / weak cry* — web, VC paralysis · *aspiration* — bilateral **adductor** palsy, severe laryngomalacia, **posterior laryngeal cleft**. “Abnormal cry in all except” → **laryngomalacia**.',
    '- Rankings follow the adjective: congenital / infantile = **laryngomalacia** · infectious = **croup** · home death under 6 = **FB** · tracheostomy = **prolonged intubation**. Defect: “second commonest in children” keyed **FB**; no lecture ranks beyond first.',
    '',
    'Src: L6; L12'
  ].join('\n'),
  qs: ['entep-mfe4-6','entqb-thr5-272','entqb-thr8-438','entep-throat-96','entqb-thr7-338','entqb-thr5-288']
},

{
  id: 'strid-4', w: 'must',
  h: 'The congenital laryngeal lesions',
  body: [
    'Order of incidence: **laryngomalacia · congenital VC paralysis · congenital subglottic stenosis · laryngeal web · posterior laryngeal cleft.**',
    '',
    '|Lesion|Presentation and facts|Treatment|',
    '|---|---|---|',
    '|**Laryngomalacia** — abnormal flaccidity, inspiratory collapse of epiglottis, AE folds, arytenoids|**Inspiratory stridor**, first days–weeks, harsh, crowing; worse **crying, feeding, supine, neck flexion**; better **prone, neck extension, mandible lifted**; **cry, feeding, health normal**. **Commonest congenital laryngeal anomaly, 60 %; commonest cause of infantile and chronic stridor**; **M:F 2:1**; prematures; **GERD 80–90 %**; scope — **omega epiglottis, short AE folds, redundant arytenoid mucosa**; **resolves 18–24 months in 80–90 %**|Reassurance · anti-reflux · monitor growth. **Surgery for** severe stridor with **failure to thrive**, weight loss, **pectus excavatum**, **cyanotic attacks**, **cor pulmonale**, hypoxaemia, hypercapnia → **supraglottoplasty** (AE-fold division, epiglottis trimming, arytenoid mucosa removal) or tracheostomy|',
    '|**Congenital VC paralysis**|**Bilateral** — severe inspiratory stridor **immediately after birth**, better asleep, worse on activity. **Unilateral** — **weak breathy cry**, aspiration. **10 % of congenital laryngeal lesions; bilateral : unilateral = 1 : 4.** Unilateral (**Lt > Rt**) — VSD, Fallot, PDA, surgery for T-E fistula, heart, oesophagostomy. Bilateral — **central** (meningomyelocele, Arnold-Chiari, bulbar palsy), **birth trauma** (prolonged 2nd stage, forceps), rarely hereditary|Unilateral **none, resolves**. Bilateral **tracheotomy**, arytenoidectomy or cordotomy|',
    '|**Congenital subglottic stenosis**|Severe — **stridor and cyanosis immediately after birth**. Mild–moderate — **persistent croup, stridor > 3 weeks**, difficult intubation, **difficult decannulation**. **< 4 mm at term, < 3 mm preterm** (normal **4.5 mm**). **3rd commonest, THE MOST SERIOUS.** Cartilaginous or soft tissue|Conservative for mild · **tracheotomy** · endoscopic|',
    '|**Laryngeal web** — incomplete recanalisation|Distress only with a **thick large web** or SG stenosis (**1 : 3**); **abnormal cry**; feeding normal. Thin membranous / fibrous / cartilaginous. **Glottic commonest** · interarytenoid · subglottic + SG stenosis · supraglottic (rare)|Dilatation · laser or MLS + **keel** · laryngofissure|',
    '|**Subglottic haemangioma**|**Inspiratory stridor at ~6 months.** From **mesodermal rests**; **50 % have other head-and-neck haemangiomas**; **F : M = 2 : 1**|**Tracheotomy, follow-up for spontaneous regression 2–4 years** · corticosteroids · laser · interferon · cryosurgery · irradiation · excision|',
    '',
    'Keyed falsehood: “haemangioma can **only** be congenital” — the subglottic one appears at 6 months, and acquired adult forms exist *(not in course material)*.',
    '',
    'Src: L6; L12'
  ].join('\n'),
  qs: ['entep-mfe4-6','entqb-thr5-288']
},

{
  id: 'strid-5', w: 'high',
  h: 'Work-up',
  body: [
    '|Laboratory|**ABG (PaO2, PaCO2)** · **blood pH** · serum proteins · **blood culture (epiglottitis)**|',
    '|---|---|',
    '|Endoscopy|**Flexible nasopharyngo-laryngoscopy** · rigid nasal endoscopy · **rigid laryngoscopy** · **rigid bronchoscopy**|',
    '|Plain film|Lateral soft-tissue **neck and thorax** · chest PA **expiratory, inspiratory, decubitus** · mediastinum PA high-kV **“Cincinnati”**|',
    '|Other|**Fluoroscopy** · **CT / CTA**, 3D reconstruction, **virtual bronchoscopy** · **MRI / MRA**|',
    '',
    '- **Thumb (“cucumber”) sign** = epiglottitis · **steeple sign** = croup.',
    '- **Laryngeal trauma → CT** — only CT shows cartilage.',
    '- **Vascular anomaly → all of** chest X-ray (**right-sided arch**), **barium swallow** (**posterior indentation**) and **MRI / MRA**; bronchoscopy shows **pulsatile compression**; biphasic stridor worse on feeding **plus dysphagia** *(not in course material)*.',
    '- **The airway precedes the investigation.**',
    '',
    'Src: L6'
  ].join('\n'),
  qs: ['entqb-thr8-397','entqb-thr7-357','entep-throat-5','entep-enr-26']
},

{
  id: 'strid-6', w: 'must',
  h: 'Foreign body — numbers, and why children',
  body: [
    '- **Commonest cause of death in the home under 6 years** · **1–3 years = 75 %** · **M : F = 2 : 1** · **mortality 20 % before endoscopy, under 2 % after** · **over 60 % of inhaled bodies in children aged 4 or under**.',
    '- **Impaction: right bronchus 57 % · left 33 % · trachea 6 % · larynx 4 %** (right wider, shorter, more vertical). **Commonest site is not the lethal site** — the 4 % at the larynx obstruct the only airway there is.',
    '- **Why children** (six): **larynx higher** · **explore with the mouth** · **cannot chew properly** · **play while eating** · **premature cough reflex** · **lack posterior dentition**. Keyed falsehood: “**mature** cough reflex”.',
    '- **Organic** (peanut, seed) — **swells**, chemical bronchitis, granulation, **radiolucent**, neglected → **HAEMOPTYSIS**. **Inorganic** (coin, bead) — inert, radio-opaque, neglected → collapse or infection, **no bleeding**. Keyed falsehood: haemoptysis with an **inorganic** neglected FB.',
    '- Inhaled types **vegetable / inorganic metal**. **Swallowed** — fish bone, meat lump, coins at **vallecula, pyriform fossa, post-cricoid**: fever, dysphagia, stridor, tender neck, emphysema.',
    '- The bank asserts the commonest adult FB is the **veil pin** — regional, on no slide.',
    '',
    'Src: L6; L12'
  ].join('\n'),
  qs: ['entqb-thr5-281','entqb-thr5-285','entqb-thr5-288','entqb-thr5-283','entqb-thr5-272','entqb-thr7-370']
},

{
  id: 'strid-7', w: 'must',
  h: 'Foreign body — phases, the film, and management',
  body: [
    '- **Acute:** stridor, respiratory difficulty · **pain in the root of the neck** · change of voice, cough. **Late (neglected):** **repeated or persistent chest infection not responding to treatment** · **haemoptysis (organic)** · chronic cough.',
    '- **Three phases: choking episode** → **SILENT INTERVAL** (days or weeks looking well) → **complication phase** — cough, tachypnoea, **unilateral decreased air entry**, collapse, infection.',
    '- “Improves on antibiotics then returns worse”, and **pneumonia recurring in the same segment**, mean obstruction: an FB is **sudden, recurrent, focal**.',
    '- **Valves:** *bypass* — normal film, commonest and most missed · **CHECK** (in, not out) — **hyperinflation, mediastinum PUSHED AWAY** · **STOP** (complete) — **atelectasis, mediastinum PULLED TOWARDS** · *ball* — progressive collapse.',
    '- **X-ray in EXPIRATION** — hyperinflation, mediastinal shift, infection, collapse, ± radio-opaque shadow; decubitus if uncooperative. **A normal film excludes nothing.** Keyed falsehood in that list: **pneumothorax**.',
    '- Defect: the “classic triad” prints cough, wheeze, **dyspnoea**, excluding stridor.',
    '- **Bilaterally** diminished air entry, **no choking history**, **increased bronchovascular markings** → **medical treatment** with follow-up.',
    '- **Extraction through a RIGID bronchoscope under GA** — it ventilates and it grips. **History, not film, is the threshold.** Dangerous: **sedation** · **Trendelenburg**.',
    '- Defect: “contraindicated in partial obstruction” keyed **chest physiotherapy**, where most teaching keys the **Heimlich**.',
    '- **Button battery** *(not in course material)*: **electrolysis makes hydroxide at the negative pole** (the “alkali secretion”), **injury by 2 h, perforation by 6**, removed ahead of every other FB; mimics a coin — look for the **halo**.',
    '',
    'Src: L6; L12 *(valves not in course material)*'
  ].join('\n'),
  flow: {
    title: 'The choking child',
    steps: [
      { k:'decision', t:'Can the child cough, cry or speak?', yes:'Encourage coughing, keep upright, arrange urgent rigid bronchoscopy', no:'Back blows then thrusts by age; CPR if unconscious' },
      { k:'alert', t:'Never chest physiotherapy with a partially obstructing bronchial body', n:'A dislodged object can obstruct both lungs' },
      { k:'step', t:'Definitive treatment in every case', n:'Rigid bronchoscopy under GA. Mortality 20% before endoscopy, under 2% after' }
    ]
  },
  qs: ['entep-throat-13','entep-throat-98','entqb-thr5-300','entqb-thr7-347','entqb-thr7-348','entqb-thr7-354','entqb-thr7-371','entqb-thr5-283','entep-ear-29','entqb-thr7-349','entqb-thr5-286','entqb-thr7-370']
},

{
  id: 'strid-8', w: 'must',
  h: 'Croup versus epiglottitis',
  body: [
    '||**CROUP** (laryngotracheobronchitis)|**EPIGLOTTITIS** (supraglottitis)|',
    '|---|---|---|',
    '|Level|**Subglottic**|**Supraglottic**|',
    '|Organism|**Viral — parainfluenza** (also RSV)|**H. influenzae type b, 90 %**|',
    '|Age|**6 months – 3 years**|**3–7 y (L6) · 2–6 y (L12)**|',
    '|Onset|**Gradual, days**|**RAPIDLY PROGRESSIVE, hours**|',
    '|Fever|Low grade|**> 38.5 °C**|',
    '|Cough|**BARKING**|**ABSENT**|',
    '|Voice|**Hoarse**|**MUFFLED**|',
    '|Drooling|No|**Yes**, severe odynophagia|',
    '|Posture|Ordinary|**Sitting, irritable, raised chin, open mouth**|',
    '|Stridor|**Biphasic**|**Inspiratory**|',
    '|X-ray|**STEEPLE sign** — ballooning hypopharynx, narrowed subglottis|**THUMB / cucumber sign**|',
    '|Treatment|Hydration · humidification · **nebulised racemic epinephrine** · **steroids, systemic and nebulised** · antipyretics · antibiotics; severe (rare) **ETI, tracheostomy**|**EMERGENCY. Massive-dose steroids** · **ceftriaxone** · analgesics, fluids, observation; severe stridor **ETI, tracheostomy**|',
    '|Note|**Commonest infectious cause of airway obstruction in children**; mucosal oedema, mucus plugs|**LARYNGOSCOPY CONTRAINDICATED** · blood culture · **Hib vaccine cut incidence > 90 %**|',
    '',
    '- L6 writes “Group B Haemophilus influenzae”; it is **type b**, a capsular serotype.',
    '- **Suspected epiglottitis:** do not examine the throat · do not lie flat · do not separate from the parent · do not send to radiology · never unescorted. Keyed next step: **escorted transfer to theatre to secure the airway**, before antibiotics and films. **Mild stridor here is the last warning.**',
    '- **Acute viral laryngitis** — rhinovirus, RSV, parainfluenza, adenovirus; dysphonia, hoarseness, **stridor only under 1 year**, low fever; **conservative, NO antibiotic** (antipyretics, humidification, decongestants, voice rest).',
    '- **Retropharyngeal abscess** — stridor, dysphagia, torticollis; **drainage**, airway first.',
    '',
    'Src: L6; L12'
  ].join('\n'),
  qs: ['entep-throat-26','entep-throat-51','entqb-thr8-388','entqb-thr8-432']
},

{
  id: 'strid-9', w: 'must',
  h: 'Laryngeal and neck trauma — mechanisms and injuries',
  body: [
    '- **External — OPEN:** gunshot, cut throat, stab wound, surgical. **CLOSED:** blunt trauma, hanging. **Internal — mechanical:** FB, intubation, **cuff injury**, endoscopy; **physical:** thermal, blast, irradiation; **chemical:** fumes, potash.',
    '- **Penetrating = the missile injury**; MVA, hanging and crushing are closed. Penetrating kills by **exsanguination**; blunt by airway loss and **intimal tear → delayed thrombosis**, and **declares itself hours later** behind normal skin.',
    '- **Zones** *(not in course material)*: **I** inlet → **cricoid** (great vessels, apices; image first) · **II** cricoid → **angle of mandible** — **commonest injured, easiest to expose** · **III** → **skull base** (distal carotid; angiography). Never probe a wound breaching **platysma**.',
    '',
    '|Injury|Mechanism|',
    '|---|---|',
    '|**Hyoid fracture**|**STRANGULATION**, greater horns driven medially; cartilaginous in the young, so absence excludes nothing|',
    '|**Thyroid cartilage fracture**|Anterior blunt blow; **commonest**; **loss of the laryngeal prominence**|',
    '|**Cricoid fracture**|Greater force; **only complete ring**, so collapse obstructs the subglottis|',
    '|**Arytenoid dislocation**|Almost always **iatrogenic**, intubation|',
    '|**Cricotracheal separation**|Most severe blunt injury, **grade 5**; trachea avulsed, **retracts into the mediastinum**. Complications, all of them: **bilateral RLN avulsion**, **cord paralysis**, late **tracheal stenosis**. **Never blind orotracheal intubation**|',
    '',
    '**Signs of serious injury:** loss of the laryngeal prominence · **surgical emphysema** (lumen breached, or the oesophagus) · stridor · hoarseness or aphonia · **cord immobility** · **cannot lie flat**. The strangulation survivor obstructs **late** — observe, never discharge.',
    '',
    'Src: L6'
  ].join('\n'),
  qs: ['entqb-thr7-369','entqb-thr7-335','entqb-thr7-337','entqb-thr7-352','entqb-thr7-338']
},

{
  id: 'strid-10', w: 'must',
  h: 'Grading and management of laryngeal trauma',
  body: [
    '**Schaefer-Fuhrman** *(on no cached slide; not in course material)*:',
    '',
    '|Grade|Findings|Management|',
    '|---|---|---|',
    '|**1**|Minor haematoma or laceration, **no fracture**|**Medical**|',
    '|**2**|Oedema, haematoma, **minor mucosal disruption WITHOUT exposed cartilage**, **NON-DISPLACED** fracture|**Medical**, admitted|',
    '|**3**|**Massive oedema · tear with EXPOSED CARTILAGE · DISPLACED fracture · CORD IMMOBILITY**|**Surgical exploration**|',
    '|**4**|As 3 but **unstable — COMMINUTED, ≥ 2 fracture lines**|Exploration **+ endolaryngeal stent**|',
    '|**5**|**Complete laryngotracheal separation**|Surgical, airway first|',
    '',
    '- **1–2 medical; 3 and above explored within 24 hours.** **Oedema alone never immobilises a cord** — immobility means joint disruption, RLN injury or tethering. **3 vs 4 is stability, not severity.**',
    '- Stable and speaking → **look first** (flexible laryngoscopy); unstable → **secure first**. Saturation reassures far too late.',
    '- Flexible transnasal **bypasses the jaw** — the answer with **trismus or mandibular fracture**; the mirror suffices with an intact jaw *(the bank keys both; the unstated clause is trismus)*. **Never sedate a stridulous patient.**',
    '- **CT** = cartilage · **endoscopy** = mucosa and cords · **gastrografin swallow** = oesophagus, where there is emphysema (leaked barium = permanent mediastinitis; aspirated gastrografin = chemical pneumonitis) · angiography = vessels.',
    '- **Airway: TRACHEOSTOMY UNDER LOCAL, awake, sitting, below the injury** — blind intubation makes a **false passage** or **completes a separation**. **Cricothyroidotomy is a seconds-to-spare rescue.** A **mandibular fracture** with an intact neck also keys **tracheostomy** (the jaw will be wired; **maxillofacial operations** are a prophylactic indication).',
    '- **Medical (1–2): corticosteroids**, keyed the most important step **because oedema closes the airway** · humidification · semi-sitting · antibiotics · **voice rest** (the voice, not the airway) · anti-reflux · **observation 24–48 hours**.',
    '- **Operation: laryngofissure → close every mucosal tear so no cartilage is bare → reduce and fix → restore the anterior commissure → stent if comminuted.** Tracheostomy alone concedes airway and voice. Fixation keyed **stainless steel wire**; defect — modern practice often uses **titanium miniplates**.',
    '- **Explore within 24 hours.** “Delay to 48 h”, “timing does not affect prognosis” and “medical management can never be used” are all false.',
    '',
    'Src: L6 gives the airway framework only'
  ].join('\n'),
  flow: {
    title: 'Blunt or penetrating laryngeal trauma',
    steps: [
      { k:'decision', t:'Airway compromised — severe stridor, surgical emphysema, cannot lie flat?', yes:'Tracheostomy under local, awake and sitting, below the injury', no:'Stable — look first' },
      { k:'step', t:'Flexible transnasal laryngoscopy, then fine-cut CT', n:'CT shows cartilage, endoscopy shows mucosa and cords; add gastrografin if emphysema' },
      { k:'decision', t:'Grade 3 or above?', yes:'Surgical exploration within 24 hours', no:'Medical, admit and observe 24-48 h' }
    ]
  },
  qs: ['entqb-thr7-345','entqb-thr7-355','entqb-thr7-374','entqb-thr7-375','entqb-thr7-350','entqb-thr7-352','entqb-thr7-346','entqb-thr7-351','entqb-thr7-353','entqb-thr7-356','entqb-thr7-357','entqb-thr7-358','entqb-thr7-359','entqb-thr7-372','entqb-thr7-373','entqb-thr7-368','entep-throat-61','entep-throat-107','entqb-thr7-338']
},

{
  id: 'strid-11', w: 'high',
  h: 'Inhalation and caustic injury',
  body: [
    '- L6 gives only the categories — **physical: thermal, blast, irradiation; chemical: fumes and potash**. *The rest is not in course material.*',
    '- **Inhalation:** the **glottic closure reflex** and upper-airway heat exchange keep dry heat **above the cords** — so “supraglottic injury commonly extends to the trachea” is the keyed falsehood. **Steam is the exception**, as are chemical products of combustion.',
    '- Early: erythema, **carbonaceous sputum**, singed vibrissae, facial burns, hoarseness. **It progresses to obstruction over hours — intubate early on suspicion.**',
    '- **Acid = COAGULATIVE necrosis**, eschar barrier, **self-limiting**, worst in the **stomach**. **Alkali = LIQUEFACTIVE**, **progressive, deepens with time**, worst in pharynx and **oesophagus** (drain cleaner, caustic soda, **potash**, button batteries).',
    '- “Alkali is worse” **true**; “acids cause liquefactive necrosis” **false**. Injury is **not limited to the oesophagus**; the larynx is burned **twice — on ingestion and on regurgitation** — so **never induce vomiting, never neutralise**.',
    '- **Early killer: supraglottic oedema over hours. Late: oesophageal stricture** — endoscopy at 24–48 h, gastrografin if perforation is possible.',
    '',
    'Src: L6 categories only'
  ].join('\n'),
  qs: ['entqb-thr7-339','entqb-thr7-340','entqb-thr7-342','entqb-thr5-286']
},

{
  id: 'strid-12', w: 'must',
  h: 'Tracheostomy — indications, functions, levels',
  body: [
    '**Tracheotomy = a TEMPORARY artificial opening between trachea and skin; tracheostomy = a PERMANENT one.** Definition: an artificial opening in the trachea to secure and maintain the airway. By timing: **emergency or elective**. Indications: **obstruction at or above the larynx** · **respiratory failure needing prolonged ventilation** · **protection from bronchial secretion or aspiration**.',
    '',
    '|**Obstructive**|Obstruction **at, below or above** the larynx|',
    '|---|---|',
    '|**Non-obstructive**|**Respiratory insufficiency** (central or peripheral) · **secretional obstruction** — **prolonged coma, flail chest, thoracic surgery** · **prophylactic** — **neck burn, radiotherapy of a big laryngeal tumour, maxillofacial operations** · **part of an operation** — laryngofissure, partial laryngectomy, **total laryngectomy**, laryngopharyngectomy|',
    '',
    '- **Prolonged intubation is non-obstructive, and is the commonest indication today** *(the shift is not in course material)*.',
    '- **Eight functions:** bypass an upper airway obstruction · **decrease dead space (70–100 ml) by 10–50 %** · decrease resistance · **access for suction** · pathway for medication and humidification · **protection against aspiration** · swallowing without reflex apnoea · **decrease power of the cough** (a cost — a cough needs a closed glottis).',
    '- The **deeply comatose** patient is not obstructed but has lost cough, gag and swallow: the operation offers **protection against aspiration**. It is a conduit, not a ventilator.',
    '',
    '|Level|Rings|Against|Risk|',
    '|---|---|---|---|',
    '|**HIGH**|**1st & 2nd**|**Cricoid**|**Perichondritis → SUBGLOTTIC STENOSIS**, difficult decannulation|',
    '|**MID**|**3rd & 4th**|Thyroid **isthmus**|**The most DIFFICULT**, a vascular field|',
    '|**LOW**|**5th & 6th**|**Thoracic inlet**|**Pleural dome → PNEUMOTHORAX**; innominate artery, thyroidea ima|',
    '',
    '- **Mid is the standard elective level — difficult, not dangerous.**',
    '- **HIGH is keyed for laryngeal cancer** (that segment is excised at laryngectomy, the tract goes en bloc, the low trachea is kept for the end stoma); **LOW for big thyroid cancer** (isthmus and lobes overlie rings 2–4). **Enter the airway where the disease is not** *(not in course material)*.',
    '- Defect: “innominate vessel injury in women and infants” is also true of a low tracheostomy, but the **pleural dome** is keyed.',
    '',
    'Src: L6'
  ].join('\n'),
  qs: ['entqb-thr7-344','entep-mfe4-12','entqb-thr8-439','entqb-thr8-412','entqb-thr8-413','entqb-thr8-416','entqb-thr8-418','entep-throat-83']
},

{
  id: 'strid-13', w: 'must',
  h: 'The tube, the care, and the complications',
  body: [
    '- **Three parts: outer cannula, inner cannula, obturator.** Choices: **Portex or metal · single or double · cuffed or non-cuffed · fenestrated or non-fenestrated**. **Ideal tube: inert, double cannula, inner cannula longer, cuffed, fenestrated.**',
    '- **Outer cannula stays in all the time except for changing — undisturbed ~5 days, which forms the tract. Inner cannula is the safety valve, cleaned several times a day.** The bank inverts it: “the **inner** tube cleaned after 5 days” is false. Keyed true beside it: **semi-sitting**, **suction under 15 seconds**, **cuff pressure below tracheal capillary perfusion** *(bank numbers)*.',
    '- **Care of tube, stoma and patient:** **humidity · saline instillation · skin care · suctioning · inner cannula care · changing · securing · cleaning · resuming activities.** The stoma bypasses the nose, so air loses its **warming, moistening and filtering** — **humidification replaces moistening**, **suction prevents tube obstruction**. Stoma skin checked **around, above, below and behind**; wet dressings changed; **tapes daily**. Patient: **physiotherapy, resuming activities, communication**. “All except” → **prone position** (trap: prone is right for **laryngomalacia**).',
    '- **OPERATIVE: 1. Primary bleeding** — anterior jugular vein, jugular arch, inferior thyroid vein, thyroid gland, thyroidea ima artery, **innominate artery**. **2. Apnoea. 3. Surgical injury** — oesophagus, recurrent laryngeal nerve, **pleura**, cricoid cartilage.',
    '- **EARLY POSTOPERATIVE (nine):** surgical emphysema · bleeding (reactionary and secondary) · **pneumothorax and pneumomediastinum** · **tube obstruction** · **tube displacement** · early tracheo-oesophageal fistula · infection · recurrent laryngeal nerve paralysis · aspiration of gastric contents.',
    '- **LATE POSTOPERATIVE (nine):** difficult decannulation · **delayed haemorrhage after 5 days, innominate artery erosion** · late tracheo-oesophageal fistula · atelectasis or pulmonary infection · tracheal granulation · **tracheal or laryngeal stenosis** · tracheomalacia · persistent tracheocutaneous fistula · tracheostomy scar.',
    '- **Commonest operative = bleeding. Commonest early = tube obstruction.** **Apnoea on opening the trachea** removes **both** the CO2 and the hypoxic drive. **Bleeding after day 5 = innominate erosion**; the others bleed at operation.',
    '- **Two hours = displaced tube** (no tract yet, a false passage). “Early distress except” = **pneumonia**, which is late. Commoner in **children** = **aerophagia** — distension splints the diaphragm, dyspnoea **restrictive**, treat with a **nasogastric tube**.',
    '- **Unilateral** decreased air entry, tube clean and correctly sited = **PNEUMOTHORAX** (pleural domes arch above the clavicle — the price of a **low** tracheostomy). **Both sides quiet** = the tube: **obstructed** if a catheter will not pass, **displaced** if the neck inflates. Fever and purulent secretions days later = **pneumonia / atelectasis**, late list. **“Immediate”** distress = pneumothorax. If **stable**, **portable chest X-ray**; a **tension** pneumothorax is needled, not imaged.',
    '',
    'Src: L6'
  ].join('\n'),
  qs: ['entqb-thr8-442','entqb-thr8-443','entqb-thr8-419','entqb-thr8-410','entqb-thr8-420','entqb-thr8-406','entqb-thr8-402','entqb-thr8-409','entqb-thr8-403','entqb-thr8-441','entqb-thr8-408','entqb-thr8-407','entqb-thr8-414','entep-throat-72','entep-throat-8','entep-throat-39','entep-ear-52','entqb-thr8-431','entqb-thr8-417','entqb-thr8-424']
},

{
  id: 'strid-14', w: 'must',
  h: 'Intubation trauma, and the airway after thyroid surgery',
  body: [
    '- **IMMEDIATE: arytenoid dislocation** — the blade or tube levers the shallow cricoarytenoid joint out; **mimics an RLN palsy**, separated by **laryngeal EMG** and passive mobility; **early reduction works before ankylosis**.',
    '- **DELAYED, commonest: intubation granuloma** — pressure on the **vocal process**, **hoarseness weeks later**.',
    '- **DELAYED, most dangerous: post-intubation subglottic / tracheal stenosis** — **cuff pressure above capillary perfusion → ischaemic ulcer → circumferential scar → contracture over weeks to months**, worst inside the cricoid *(split not in course material)*.',
    '- The stem: **weeks of cuffed ventilation, extubated successfully, then biphasic stridor** over months. **Laryngeal oedema** settles in days · **bilateral cord paralysis** gives stridor with a **normal voice** at extubation · **granuloma** gives hoarseness. Defect: one vignette calls the narrowing **subglottic** and keys **tracheal stenosis** (no subglottic option). Prevention: convert prolonged ventilation to **tracheostomy**, moving the cuff below the larynx.',
    '',
    '||**RLN injury**|**Hypocalcaemia**|',
    '|---|---|---|',
    '|Mechanism|RLN supplies every intrinsic muscle **except cricothyroid**, including the **posterior cricoarytenoid, the only ABDUCTOR**; **bilateral** injury leaves neither cord open|Parathyroids removed or devascularised → **tetany**, including **laryngeal spasm**|',
    '|Timing|**On waking**|**Hours to days**|',
    '|Presents|**Stridor with a good voice**|Perioral numbness, tingling, cramps, carpopedal spasm|',
    '|Signs|Poor glottic air entry|**Chvostek**, **Trousseau**|',
    '|Treatment|**An airway** — intubation, then **tracheostomy**|**IV calcium**|',
    '',
    '- The **superior** laryngeal nerve (external branch) supplies only the **cricothyroid**, the tensor that sets **pitch** — it cannot narrow the airway. **RLN injury fixes the cord PARAMEDIAN; vagal injury fixes it CADAVERIC.** **Abductor** palsy = cord near the midline (**stridor, normal voice**); **adductor** palsy = cord away (**aspiration, dysphonia**).',
    '- Two questions print the **same four options** — subcutaneous adrenaline · endoluminal procedure · tracheostomy · calcium infusion — and key opposites: **swollen face, lips, tongue in minutes, non-pitting oedema, gut cramps, low BP → angioneurotic oedema → SUBCUTANEOUS ADRENALINE**; **cramps, perioral numbness, Chvostek, Trousseau → CALCIUM INFUSION**. **Swollen and minutes → adrenaline; tingling and days → calcium.**',
    '- Laryngeal spasm over an electrolyte menu = **hypocalcaemia**. Defect: the box says “bilateral **or unilateral**” (only bilateral obstructs) and calls the stridor **biphasic**.',
    '',
    'Src: L6; L11'
  ].join('\n'),
  qs: ['entqb-thr7-343','entqb-thr7-341','entqb-thr7-365','entqb-thr7-376','entep-mfe5-9','entep-throat-case-26','entep-throat-62','entqb-thr8-405','entqb-thr8-415','entqb-thr8-399']
}

    ]
  }
};
