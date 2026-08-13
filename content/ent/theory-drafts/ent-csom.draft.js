/* THEORY DRAFT — ent-csom, "CSOM and complications" (ENT).
   Written 2026-08-13 backwards from the 93 transcribed questions in this chapter
   (85 MCQs + 8 free-text cases), grounded in:
     content\ent\lectures\L16) Chronic otitis media.txt      (the backbone)
     content\ent\lectures\L17,18) Otorrhea and otalgia.txt   (the otorrhoea table)
     content\ent\lectures\L22) Anatomy of  Ear Undergraduate.txt (walls, layers, attic)
     content\ent\lectures\L21.1) acute otitis media.txt, L21.2) Otitis media with effusion.txt
     content\ent\lectures\L4) PHARYNGEAL SUPPURATIONS.txt    (Bezold -> parapharyngeal)
     content\ent\examiner-patterns.md                        (weighting, w, intro)
   Claims not in the cached material carry the tag "not taken from the course material".

   ⚠️ SPLICE INSTRUCTIONS FOR THE HUB: copy the 'ent-csom': { … } property below into
   T_ENT in app\data\theory.ent.js. The wrapper variable exists only so this file
   parses standalone for checking; do not carry it across.

   ⚠️ RENDERER CONSTRAINTS OBSERVED (verified against app\index.html mdBlock/flowHTML/tableHTML):
     - body markdown supports ONLY paragraphs, "- " bullets, "> " quotes, **bold**, *italic*.
       Pipe tables and ### headings do NOT render — every table is in the `table` field.
     - one `table` and one `flow` per section, hence the section split.
     - table cells render **bold** only; flow step text is plain (escaped), no markdown.
*/
var T_DRAFT_ENT_CSOM = {

'ent-csom': {
  intro: 'This chapter is examined by **discrimination, not by recall** — and almost every question is one of five shapes.\n\n' +
    '- **Safe or unsafe?** The single most repeated discrimination in the whole ENT paper. You are given a discharge (smell, amount, pattern), a perforation (central, marginal, attic) or a photograph, and asked to name the type, the perforation, the X-ray, the organism or the treatment. Get the *four adjectives of the discharge* and the *annulus* and roughly a third of this chapter answers itself.\n' +
    '- **"All of the following EXCEPT."** One line in seven across the bank is a negative stem, and this chapter is full of them: all true about unsafe CSOM except, about tubotympanic CSOM except, about acute mastoiditis except, about Gradenigo except. **You must know why every wrong option is wrong**, not just which one is right.\n' +
    '- **Name the complication from one clinical sign.** Rigors -> lateral sinus. Neck rigidity -> meningitis. Vomiting and drowsiness -> raised pressure, brain abscess. Diplopia -> petrous apex. Vertigo -> labyrinth. The bank prints near-identical vignettes that differ by **one word**, deliberately (endpoint Cases 17 and 23 differ only in *vomiting* versus *neck rigidity*).\n' +
    '- **Gradenigo, asked from every angle.** Eighteen of the questions here are about petrositis: which complication gives the triad, which nerve gives the diplopia, which muscle, which nerve gives the pain, what the triad is, where the infection spread, what causes the discharge. It is the most over-tested topic in the chapter and the examiner’s cram sheet lists it three times.\n' +
    '- **Priority and sequence.** Which aim of surgery comes first; which ear is operated first; is treatment medical or surgical. The answer is always the same ranking: **safe, then dry, then hearing**.\n\n' +
    '**Two traps the bank sets repeatedly.** First, a Grade Gain option list that ends in *"all of the above"* or *"b & c"* — reading only as far as option b loses the mark. Second, an audiogram or a "most serious" option planted to pull you away from the danger: the deafer ear is not the one you operate first, and cholesteatoma is not the cause of pain.\n\n' +
    '**One flat statement to carry into the exam:** *chronic suppurative otitis media is not a painful condition.* Pain in a chronically discharging ear is a complication until proved otherwise.',

  sections: [

  /* ---------------------------------------------------------------- 01 */
  {
    id: 'csom-1', w: 'must',
    h: 'What CSOM is, and the two types you must separate',
    body: '**Definition, verbatim from the lecture** (*L16) Chronic otitis media.pdf*):\n\n' +
      '> Chronic suppurative otitis media is inflammatory change of the **mucoperiosteal lining of the middle ear cleft**, of **insidious onset and protracted course**, characterised by the development of **irreversible tissue pathology**.\n\n' +
      'Three phrases in that sentence are examinable in their own right. **Middle ear cleft** means the whole air-containing space — Eustachian tube, tympanic cavity, aditus, antrum and mastoid air cells — not just the space behind the drum; that is why mastoid disease is part of the same illness rather than a separate one. **Insidious and protracted** is what separates it from acute otitis media, which is a short, painful, febrile episode. **Irreversible tissue pathology** is why it does not simply resolve: a perforation that will not close, a cholesteatoma that keeps growing, ossicles that have been eaten away.\n\n' +
      '**The lecture then splits it in two, and this division is the spine of the entire chapter:**\n\n' +
      '- **Safe type — tubo-tympanic.** The disease is a **mucositis**: inflammation of living middle ear mucosa, reached through the Eustachian tube. No bone is destroyed.\n' +
      '- **Unsafe type — attico-antral.** The disease is an **osteitis**: bone is being dissolved, by a **cholesteatoma**. This is the type that produces the complications.\n\n' +
      '**"Safe" is a technical word, not a reassurance.** It means the annulus of the drum is intact, so squamous epithelium cannot enter the middle ear, so cholesteatoma cannot form, so bone is not eroded, so the complications that follow bone erosion cannot happen by that route. It does **not** mean the ear needs no treatment: untreated safe disease still gives a permanently discharging ear and a conductive hearing loss.\n\n' +
      '**Learn the table below as a pair of columns, not as fourteen separate facts.** Every line on the left follows from *mucositis* and every line on the right follows from *osteitis*, which is exactly how *L17,18) Otorrhea and otalgia.pdf* labels its own two columns. Roughly a third of this chapter’s questions are answered by reading one cell out of it.',
    table: {
      head: ['', 'SAFE — tubo-tympanic (mucositis)', 'UNSAFE — attico-antral (osteitis)'],
      rows: [
        ['Pathology', 'Inflammation of **living mucosa** of the middle ear cleft', '**Osteitis** — bone eroded by **cholesteatoma**'],
        ['Otorrhoea — character', '**Mucopurulent**', '**Purulent** (pure pus)'],
        ['Otorrhoea — amount', '**Profuse**', '**Scanty**'],
        ['Otorrhoea — pattern', '**Intermittent** — flares with a cold or after water', '**Continuous**'],
        ['Otorrhoea — smell', '**Odourless**', '**Foetid**'],
        ['Deafness', 'Mild to moderate, **conductive**', 'Moderate to severe, **conductive OR mixed**'],
        ['Pain', 'None — *CSOM is not a painful condition*', 'None either, until a complication appears'],
        ['Perforation', '**Central, in the pars tensa**', '**Attic or marginal**'],
        ['Granulations', '**Absent**', '**Common** — red, fleshy, usually posterosuperior'],
        ['Cholesteatoma', '**Absent**', '**Present** — attic or posterosuperior'],
        ['Mastoid X-ray', '**Cellular** mastoid', '**Acellular** mastoid **with a filling defect** (cholesteatoma shadow)'],
        ['Culture and sensitivity', 'The lecture states none', '**Gram-negative** organisms'],
        ['Complications', 'Rare — hence *safe*', 'This is the type that produces them — hence *unsafe*'],
        ['Treatment', 'Medical; cautery of margins; **myringoplasty**; tympanoplasty', '**ALWAYS SURGICAL** — tympano-mastoidectomy']
      ]
    },
    qs: ['entep-ear-199', 'entep-ear-232', 'entqb-ear4-110', 'entep-case-12', 'entep-case-15']
  },

  /* ---------------------------------------------------------------- 02 */
  {
    id: 'csom-2', w: 'must',
    h: 'Reading the discharge — the four adjectives, and why mucus matters',
    body: '**The single most useful sentence in this chapter comes from *L17,18) Otorrhea and otalgia.pdf*:**\n\n' +
      '> There are **no mucous glands in the external auditory canal**. Mucus always comes from the middle ear.\n\n' +
      'From that one anatomical fact, everything follows:\n\n' +
      '- A discharge containing **mucus** proves two things at once — the **site** is the middle ear, and the **mucosa is alive and secreting**. So a mucoid or mucopurulent discharge means either **safe tubo-tympanic CSOM** or **acute otitis media after the drum has perforated**. It can never be otitis externa.\n' +
      '- A discharge that is **pure pus** has no mucosal contribution. Either the mucosa has been **destroyed** (acute necrotising otitis media, where the promontory is laid bare), or the source is not mucosa at all but a **keratin sac and dead bone** (cholesteatoma), or the disease is in the **canal** (otitis externa).\n\n' +
      '**Now add the other three adjectives, and each one is a switch:**\n\n' +
      '- **Smell.** Fetor comes from **osteitis** — anaerobes growing on dead bone. It is the single most useful finding in a discharging ear, because it means bone is being destroyed and therefore that the ear is unsafe. *An odourless discharge is the most reassuring negative in otology.*\n' +
      '- **Amount.** A whole middle ear cleft of secreting mucosa makes a lot of discharge, so safe disease is **profuse**. A small pocket of keratin and granulation makes very little, so unsafe disease is **scanty**.\n' +
      '- **Pattern.** Safe disease is reached through the **Eustachian tube**, so it flares with every upper respiratory infection or after water enters, and dries up in between — **intermittent**. Unsafe disease is generated by a cholesteatoma that never stops growing, so it is **continuous**.\n\n' +
      '**The examiner uses those four adjectives as a complete question.** *"Profuse, mucopurulent, odourless, intermittent"* is a full diagnosis of safe tubo-tympanic disease before you have looked at the ear; *"scanty, purulent, foetid, continuous"* is a full diagnosis of cholesteatoma. Several questions in this chapter give nothing else.\n\n' +
      '**The wider classification of otorrhoea** in the same lecture is worth having whole, because the bank builds option lists out of it — *watery, mucoid, purulent, bloody, and combinations*. A **clear watery** discharge in a head-injured patient is **CSF**, confirmed by the **halo sign**, **beta-2 transferrin** or **beta trace protein**; **bloody** otorrhoea is **trauma or tumour** (skull base fracture, minor canal trauma, glomus tumour, carcinoma of the canal). Those two are covered properly in the Otorrhoea chapter, but they appear here as distractors.',
    table: {
      head: ['Type of discharge', 'Causes', 'The point'],
      rows: [
        ['**Watery / clear**', 'CSF otorrhoea — skull base fracture; after acoustic tumour removal', 'Confirm with the **halo sign**, **beta-2 transferrin**, **beta trace protein**'],
        ['**Mucoid / mucopurulent**', 'Safe (tubo-tympanic) CSOM; acute otitis media **after** perforation', 'Mucus proves a **middle ear** source with **living mucosa** — the canal has no mucous glands'],
        ['**Pure purulent**', 'Unsafe (attico-antral) CSOM with cholesteatoma; acute **necrotising** otitis media; otitis externa', 'No mucus = mucosa destroyed, or the source is a keratin sac and dead bone, or the disease is in the canal'],
        ['**Bloody**', 'Trauma — skull base fracture, minor canal trauma. Tumour — **glomus**, carcinoma of the EAC', 'Blood from an ear is trauma or tumour until proved otherwise'],
        ['**No discharge at all**', 'Otitis media with effusion; Eustachian tube dysfunction', 'The drum is **intact** — fluid never reaches the canal. The easiest distractor to eliminate']
      ]
    },
    qs: ['entep-ear-72', 'entep-ear-45', 'entep-ear-157', 'entep-enr-10', 'entqb-ear4-107', 'entqb-ear4-109', 'entqb-ear4-118', 'entqb-ear6-168', 'entqb-ear6-169']
  },

  /* ---------------------------------------------------------------- 03 */
  {
    id: 'csom-3', w: 'must',
    h: 'The perforation — central, marginal, attic, and why the annulus decides everything',
    body: '**"Central" is a statement about the ANNULUS, not about the middle of the drum.** This is the highest-yield single idea in the chapter, and it is where most marks are lost.\n\n' +
      '- A perforation is **central** when a rim of tympanic membrane survives **all the way round** it, so the fibrous **annulus is intact**. A central perforation can be very large — the bank prints one described as a *"large kidney-shaped perforation"* with a 45 dB gap — and still be central, and still be safe.\n' +
      '- A perforation is **marginal** when the defect **reaches and destroys part of the annulus**. Its usual site is **posterosuperior**.\n' +
      '- An **attic** perforation is one in the **pars flaccida**, the slack triangle above the lateral process of the malleus.\n\n' +
      '**Why the annulus is the whole story.** *L22) Anatomy of  Ear Undergraduate.pdf* gives the layers: the **pars tensa** is *skin + fibrous + mucous membrane*, and the **pars flaccida** is *skin + mucous membrane* only — it lacks the middle fibrous layer, which is why it is flaccid. Where the annular rim is intact, canal skin has no route inwards and the disease stays mucosal. Where the annulus is breached, or where the flaccid attic retracts, **squamous epithelium migrates into the middle ear** and becomes a cholesteatoma. **Annulus intact = safe. Annulus breached = unsafe.** That is the whole safe/unsafe distinction in one sentence.\n\n' +
      '**The shape of the hole tells you the mechanism** — a smaller point but the bank asks it. An **infective** perforation is *melted* out by inflammation and is **round, oval or kidney-shaped with a smooth edge**. A **traumatic** perforation is *torn* and is **triangular or slit-like with ragged edges**. A **total or subtotal** perforation, the whole pars tensa gone, is not ordinary chronic disease at all — it follows **acute necrotising otitis media**, in which streptococcal toxins thrombose the drum’s vessels and the central watershed sloughs.\n\n' +
      '**When the two signs disagree, believe the smell and look again.** A "central" perforation with a foul discharge is a contradiction; if the ear stinks, there is a breach of the annulus somewhere — look in the **attic** and the **posterosuperior quadrant**, because that is where the cholesteatoma will be.',
    table: {
      head: ['Perforation', 'Where', 'What it means'],
      rows: [
        ['**Central**', 'Pars tensa, rim of drum all round — **annulus intact**', '**Safe**, tubo-tympanic. Skin cannot migrate in'],
        ['**Marginal**', 'Reaches and destroys part of the annulus, usually **posterosuperior**', '**Unsafe**. The classic site for cholesteatoma'],
        ['**Attic**', 'Pars flaccida, above the lateral process of the malleus', '**Unsafe**. Hallmark of **primary acquired** cholesteatoma'],
        ['**Total / subtotal**', 'The whole pars tensa gone', 'Not ordinary chronic disease — follows **acute necrotising otitis media**'],
        ['Round, oval or **kidney-shaped**, smooth edge', 'Pars tensa', '**Infective** perforation — melted out by inflammation'],
        ['**Triangular or slit-like**, ragged edge', 'Anywhere', '**Traumatic** perforation — torn']
      ]
    },
    qs: ['entep-ear-6', 'entep-ear-71', 'entep-ear-92', 'entep-ear-200', 'entqb-ear4-91', 'entqb-ear4-100']
  },

  /* ---------------------------------------------------------------- 04 */
  {
    id: 'csom-4', w: 'must',
    h: 'Safe (tubo-tympanic) CSOM in full',
    body: '**Symptoms** — *L16) Chronic otitis media.pdf*, quoted:\n\n' +
      '> **Otorrhoea:** muco-purulent, odourless, profuse and intermittent.\n' +
      '> **Deafness:** mild to moderate; **conductive** hearing loss.\n\n' +
      '**Otoscopy:** a **central perforation in the pars tensa**; **cholesteatoma and granulations absent**.\n\n' +
      '**Investigations:** the mastoid X-ray shows a **cellular mastoid**. That finding is worth understanding rather than memorising. Mastoid pneumatisation develops through childhood and is **arrested by early, repeated middle ear inflammation** — so a well-pneumatised (cellular) mastoid is evidence that the ear was healthy while the mastoid was forming. An acellular, sclerotic mastoid means long-standing disease from early life, and is the unsafe pattern.\n\n' +
      '**A note on organisms.** The lecture prints *Gram-negative organisms* only on the **unsafe** side of the page. That is what makes *"caused by Gram-negative bacteria"* the false statement about tubo-tympanic disease. In real life *Pseudomonas* and other Gram-negatives are cultured from safe discharging ears too, especially after water exposure — the **examinable** association is with unsafe disease, because that is where the material puts it and because anaerobes and Gram-negatives in a keratin sac are what produce the fetor *(this qualification is not taken from the course material)*.\n\n' +
      '**Hearing.** A negative Rinne (bone conduction better than air) with **Weber lateralising to the affected ear** localises a conductive loss to that side — which is how the bank asks you to name which ear, before you think about the disease at all.\n\n' +
      '**Natural history if untreated.** Repeated attacks of mucopurulent discharge, and a conductive loss proportional to the size of the perforation and any ossicular erosion. **Not** progressive total deafness, **not** facial palsy, **not** intracranial spread, **not** septicaemia — all of those belong to the unsafe type. This is exactly the question the bank asks about a five-year history with a central kidney-shaped perforation.\n\n' +
      '**One printed key in this chapter is defective and you should know it.** Model Final Exam 6 asks *"all may be seen in the tubotympanic type EXCEPT"* and keys **"profuse odourless otorrhoea"** — which is the lecture’s own description of that type. The true exception in that option list is **"high incidence of complications"**, and the same bank keys it correctly elsewhere. **Answer "high incidence of complications" if you meet a full option set;** the entry records the printed key as the bank prints it, per the project’s standing rule.',
    flow: {
      title: 'Treatment of safe (tubo-tympanic) CSOM',
      steps: [
        { k: 'step', t: 'Aural toilet and strict water precautions', n: 'Keep the ear dry. The discharge flares after water entry or a cold' },
        { k: 'step', t: 'Medical treatment: antibiotherapy according to culture and sensitivity', n: 'The lecture names C&S explicitly. Topical drops with systemic cover for an acute flare' },
        { k: 'step', t: 'Treat the source in the nose and nasopharynx', n: 'Safe disease is reached through the Eustachian tube, so every cold reseeds the middle ear (not taken from the course material)' },
        { k: 'step', t: 'Chemical cautery of the perforation margins', n: 'For a small dry perforation, to encourage the edges to heal' },
        { k: 'decision', t: 'Ear dry — are the ossicles intact?', yes: 'Myringoplasty: graft the perforation, usually with tragal perichondrium', no: 'Tympanoplasty: myringoplasty PLUS ossiculoplasty, done if the ossicles are damaged' },
        { k: 'alert', t: 'Safe does NOT mean no treatment needed', n: 'Untreated, safe disease still gives a permanently discharging ear and a conductive hearing loss. What it does not do is erode bone' }
      ]
    },
    qs: ['entep-ear-59', 'entep-ear-205', 'entep-ear-214', 'entep-ear-248', 'entqb-ear4-111', 'entep-mfe6-1']
  },

  /* ---------------------------------------------------------------- 05 */
  {
    id: 'csom-5', w: 'must',
    h: 'Cholesteatoma — what it is, and the four things it is not',
    body: '**The definition, verbatim, and worth learning word for word** (*L16) Chronic otitis media.pdf*):\n\n' +
      '> Cholesteatoma is a **destructive and expanding keratinizing stratified squamous epithelium** (containing **cholesterol crystals** and **proteolytic enzymes**), in the **middle ear and/or mastoid process**.\n\n' +
      'The lecture summarises the pathology in four words — **"skin in the middle ear"** — and illustrates it as **a sac with a narrow neck, lined by skin**. That picture explains the whole disease. Skin sheds keratin; a sac with a narrow neck cannot clear what it sheds; the trapped keratin accumulates, the sac enlarges, and the **proteolytic enzymes** dissolve whatever bone lies in the way.\n\n' +
      '**Four errors the bank plants, each instructive:**\n\n' +
      '- **"It is a benign tumour of the middle ear."** It is **not a neoplasm at all** — there is no clonal proliferation of abnormal cells. It behaves like a tumour (it expands, destroys and recurs if incompletely removed) but it is **normal skin in an abnormal place**. The name is doubly misleading: it is not a *-oma*, and cholesterol crystals are an incidental content rather than its defining feature.\n' +
      '- **"It may metastasise"** / **"it is malignant."** It cannot. Its danger is entirely **local**, and entirely mechanical-enzymatic.\n' +
      '- **"It can be left untreated"** or **"it is treated medically."** No drug removes misplaced keratinising epithelium, and nothing arrests it. Antibiotics may dry the discharge temporarily and thereby **disguise** the problem, which is worse than doing nothing. The lecture’s treatment line for this type is three words: **always surgical**.\n' +
      '- **"Congenital cholesteatoma is an autosomal inherited trait."** *Congenital* here means **present from birth**, not **inherited**. There is no Mendelian pattern.\n\n' +
      '**What makes it dangerous is that it is silent.** Cholesteatoma is painless. It erodes bone slowly and without symptoms, so the ear that most urgently needs surgery is often the one that troubles the patient least — until it has destroyed the ossicles, the labyrinth, the facial canal, the tegmen or the sinus plate.\n\n' +
      '**And it defines the unsafe type.** *"Cholesteatoma is most commonly associated with…"* is answered **unsafe (attico-antral) CSOM** every time. Marginal or attic perforation, bone erosion, and the risk of intracranial complications are the same fact described from four directions.',
    table: {
      head: ['Statement about cholesteatoma', 'True?', 'Why'],
      rows: [
        ['It consists of **keratinising stratified squamous epithelium**', '**True**', 'The lecture’s own definition — skin in the middle ear'],
        ['It contains **cholesterol crystals and proteolytic enzymes**', '**True**', 'The enzymes are what dissolve bone'],
        ['It may be complicated by an **extradural abscess**', '**True**', 'It erodes the **tegmen tympani**; pus collects between bone and dura'],
        ['It is a **benign tumour** of the middle ear', '**False**', 'Not a neoplasm at all — normal skin in an abnormal place'],
        ['It is **malignant** / may **metastasise**', '**False**', 'Its danger is purely local'],
        ['It may be **left untreated**', '**False**', 'Erosion is what produces facial palsy, fistula, meningitis, brain abscess'],
        ['It is **treated medically**', '**False**', 'Treatment is **always surgical**. Antibiotics only mask it'],
        ['**Congenital** cholesteatoma is an **inherited** trait', '**False**', 'Congenital = **ectodermal cell rests**, present at birth, not inherited'],
        ['**Primary acquired** cholesteatoma sits in the **hypotympanum**', '**False**', 'It sits in the **attic (epitympanum)** — it is an attic retraction']
      ]
    },
    qs: ['entep-ear-138', 'entqb-ear4-119', 'entep-mfe5-44']
  },

  /* ---------------------------------------------------------------- 06 */
  {
    id: 'csom-6', w: 'must',
    h: 'How can the skin reach the middle ear? — the classification of cholesteatoma',
    body: '**The lecture poses this as a question and answers it in four lines**, and the bank turns those four lines straight into a four-option list. Learn the categories with their mechanisms attached, because every distractor in this group is a *real* category under the *wrong* name.\n\n' +
      '**Congenital** — *ectodermal cell rests in the middle ear.* Squamous epithelium left behind during embryological development. It presents as a **white pearl behind an intact drum** in a child with **no history of ear infection and no perforation**. That combination — white mass, intact drum, otherwise healthy ear — is the exam’s signature for it, and it is why the differential from a middle ear effusion (amber or dull, not pearly white) and from a glomus tumour (red, pulsatile, behind the drum) matters.\n\n' +
      '**Acquired, primary** — *attic retraction cholesteatoma.* **"Primary" means no perforation came first.** The pars flaccida lacks the fibrous middle layer, so under chronic **negative middle ear pressure** it does not tear — it **retracts**, forming a pocket in the attic. A pocket with a narrow neck cannot shed its own keratin; the keratin accumulates; the pocket becomes a sac. This is the commonest cholesteatoma and the one most often missed, because the otoscopy is a **crusted or retracted attic with a normal-looking pars tensa** rather than a frank hole.\n\n' +
      '**Acquired, secondary — migrational theory.** Canal epithelium **migrates inwards** through an existing **marginal** perforation. The epithelial route already existed; the disease simply used it.\n\n' +
      '**Acquired, secondary — metaplastic theory.** Middle ear **mucosa undergoes squamous metaplasia** under chronic inflammation. No migration is needed; the lining changes in situ.\n\n' +
      '**Two more mechanisms appear as distractors** and are worth naming: **implantation** of squamous epithelium after myringotomy or previous surgery (an iatrogenic secondary form), and cholesteatoma developing *in* a **traumatic** perforation *(both not taken from the course material)*.\n\n' +
      '**What the classification does and does not change.** It explains the **otoscopy** — attic crust versus frank marginal perforation versus white pearl behind an intact drum — and it explains why primary disease is easy to miss. It changes **nothing** about treatment: all of them are destructive and expanding keratinising epithelium, and all of them are removed surgically.',
    table: {
      head: ['Category', 'Mechanism (the lecture’s own words)', 'How it presents'],
      rows: [
        ['**Congenital**', '**Ectodermal cell rests** in the middle ear', 'A **white pearl behind an INTACT drum** in a child with no history of ear infection. Not inherited'],
        ['**Acquired — PRIMARY**', '**Attic retraction cholesteatoma**', 'A **crusted or retracted attic**; pars tensa often normal. No pre-existing perforation. Easily missed'],
        ['**Acquired — secondary, migrational theory**', 'Canal epithelium **migrates in through a perforation**', 'A frank **marginal** perforation with skin creeping through it'],
        ['**Acquired — secondary, metaplastic theory**', 'Middle ear mucosa undergoes **squamous metaplasia**', 'Chronic inflammation with squamous change; no migration route needed'],
        ['*(distractor)* **Implantation**', 'Epithelium implanted at **myringotomy** or previous surgery', 'Iatrogenic; a secondary acquired form *(not taken from the course material)*']
      ]
    },
    qs: ['entep-ear-35', 'entep-mfe4-4', 'entqb-ear4-114']
  },

  /* ---------------------------------------------------------------- 07 */
  {
    id: 'csom-7', w: 'must',
    h: 'Unsafe (attico-antral) CSOM in full',
    body: '**Symptoms** — *L16) Chronic otitis media.pdf*, quoted:\n\n' +
      '> **Otorrhoea:** purulent, **foetid**, scanty and continuous.\n' +
      '> **Deafness:** moderate to severe; **conductive or mixed**.\n\n' +
      'And on the same slide, flat and unqualified: **"ChSOM is not a painful condition."**\n\n' +
      '**Otoscopy** — three findings, all in the same place:\n\n' +
      '- **Perforation:** **attic, or marginal**.\n' +
      '- **Granulations:** **common, red and fleshy, usually posterosuperior**. A granulation polyp emerging from the ear (an *aural polyp*) is this, and an aural polyp in a chronically discharging ear should be treated as cholesteatoma until proved otherwise.\n' +
      '- **Cholesteatoma:** **attic or posterosuperior** — whitish, greasy keratin debris.\n\n' +
      '**Investigations.** The X-ray line is the one most often asked, and it carries **two** findings that say **different** things — which is why the bank keys *"b & c"* and not either alone.\n\n' +
      '**What is "diagnostic".** Read that word carefully when it appears in a stem. An **irregular, non-anatomical cavity containing bone sequestra** on imaging is diagnostic, because cholesteatoma expands by dissolving whatever bone is in its way, so the cavity it leaves **follows no normal anatomical boundary** and contains dead fragments of stranded bone. Nothing else does that. By contrast a **35 dB air-bone gap** occurs in glue ear, otosclerosis, a perforation or ossicular disease; ***Pseudomonas* and *Bacteroides*** colonise any chronically discharging ear; and an **offensive discharge** is the classic *pointer* to unsafe disease but is a symptom, not proof.\n\n' +
      '**Treatment: always surgical.** The lecture gives the operation as an equation — **tympano-mastoidectomy = tympanoplasty + mastoidectomy**. Nothing less works, and each of the alternatives the bank offers actively harms: antibiotics dry the ear and hide the fetor while the sac grows; **myringoplasty grafts a lid over the disease and seals it inside**; tympanoplasty reconstructs hearing into an ear that still contains cholesteatoma.',
    table: {
      head: ['Investigation', 'Safe (tubo-tympanic)', 'Unsafe (attico-antral)'],
      rows: [
        ['**Plain mastoid X-ray**', '**Cellular** mastoid', '**Acellular (sclerotic)** mastoid **AND a filling defect** — the cholesteatoma shadow'],
        ['What the acellular mastoid means', 'Pneumatisation completed — the ear was healthy while the mastoid formed', 'Pneumatisation **arrested in early childhood** by repeated inflammation. A marker of **DURATION**'],
        ['What the filling defect means', '—', 'A **rounded cavity with a sclerotic margin** where bone has been eaten. A marker of **DESTRUCTION** — the disease itself, made visible'],
        ['**Culture and sensitivity**', 'The lecture states none', '**Gram-negative organisms.** The bank’s own cram sheet names **Pseudomonas, Proteus, Klebsiella**'],
        ['**HRCT of the temporal bone**', 'Not required', 'Modern practice: extent of disease, ossicles, tegmen, sinus plate, fallopian canal *(not taken from the course material)*'],
        ['**Audiogram**', 'Mild-moderate conductive', 'Moderate-severe conductive; **mixed** once the labyrinth is breached'],
        ['**"Diagnostic" imaging finding**', '—', '**Irregular, NON-ANATOMICAL cavity with bone sequestra**. Not the air-bone gap, not the culture, not the smell']
      ]
    },
    qs: ['entep-ear-16', 'entep-ear-144', 'entep-ear-184', 'entqb-ear4-112', 'entqb-ear6-170']
  },

  /* ---------------------------------------------------------------- 08 */
  {
    id: 'csom-8', w: 'high',
    h: 'Hearing loss in CSOM — the site decides the type',
    body: '**One rule resolves every question in this group: external canal or middle ear -> CONDUCTIVE; cochlea, labyrinth or VIII nerve -> SENSORINEURAL.** The bank builds a whole question by attaching the *wrong* type of loss to three real mechanisms.\n\n' +
      '**Why safe and unsafe differ in degree.** The lecture grades safe disease as *"mild to moderate; conductive"* and unsafe disease as *"moderate to severe; **conductive or mixed**"*. The extra severity comes from **ossicular erosion**: cholesteatoma’s proteolytic enzymes dissolve bone, and the **long process of the incus** is the thinnest and most poorly perfused ossicle, so it goes first. Losing ossicular continuity gives a **large air-bone gap**, often 40 dB or more *(the incus detail and the figure are not taken from the course material)*.\n\n' +
      '**Where the word "mixed" comes from.** The **lateral semicircular canal** is the part of the labyrinth lying closest to the attic, and it is the classic site of a **labyrinthine fistula**. Erode it and the inner ear is opened: a **sensorineural** component is added to the existing conductive loss, and the patient gets **vertigo**, often provoked by pressing on the tragus — a positive **fistula sign** *(the fistula sign is not taken from the course material)*.\n\n' +
      '**The practical reading, and it is a genuine clinical rule:** a purely conductive loss in unsafe CSOM means the disease is still in the middle ear. **The moment the loss becomes mixed, or the patient reports vertigo, the labyrinth has been breached** — and vertigo in a cholesteatoma ear is an alarm, never a symptom to reassure.\n\n' +
      '**One more discrimination the bank asks in the Gradenigo group:** the hearing loss accompanying petrositis is **conductive**, from the otitis media underneath it. Students expect a sensorineural loss from something so deep, and *"associated with conductive hearing loss"* is keyed as the **false** statement about Gradenigo’s precisely for that reason — hearing loss is **not part of the triad at all**.',
    table: {
      head: ['Mechanism', 'Site', 'Type of loss'],
      rows: [
        ['Perforation of the tympanic membrane', 'Tympanic membrane', '**Conductive**'],
        ['Restricted movement of the drum (retraction, tympanosclerosis, adhesions)', 'Tympanic membrane', '**Conductive**'],
        ['**Erosion of the ossicles** — long process of the incus first', 'Middle ear', '**Conductive**, often a 40 dB or larger air-bone gap'],
        ['**Erosion of the lateral semicircular canal** (labyrinthine fistula)', '**Inner ear**', '**SENSORINEURAL**, added to the existing conductive loss = a **MIXED** loss'],
        ['Suppurative labyrinthitis', 'Inner ear', '**Sensorineural**, with severe vertigo'],
        ['The otitis media underlying **petrositis**', 'Middle ear', '**Conductive** — and hearing loss is **not** part of Gradenigo’s triad']
      ]
    },
    qs: ['entqb-ear4-108']
  },

  /* ---------------------------------------------------------------- 09 */
  {
    id: 'csom-9', w: 'high',
    h: 'Pain in CSOM is a red flag, not a symptom',
    body: '**The lecture states it flatly: "ChSOM is not a painful condition."** Chronic disease has a perforation, so nothing is under pressure, and pain has no mechanism.\n\n' +
      '**Therefore pain in a chronically discharging ear means one of two things**, and the bank prints both:\n\n' +
      '- **An acute exacerbation** — a fresh **acute otitis media superimposed on the chronic disease**. Pus builds up faster than the perforation can drain it, and the ear hurts again.\n' +
      '- **A complication** — mastoiditis, petrositis, an extradural or brain abscess, lateral sinus thrombophlebitis. Here the pain is the **first warning that the disease has left the middle ear cleft**.\n\n' +
      '**Why cholesteatoma is the tempting wrong answer.** It is the most *serious* item in the option list and it is the definition of unsafe disease — but **it is painless**. A keratin sac erodes bone slowly and silently. Cholesteatoma causes pain only once it has produced a complication, at which point the answer is *the complication*, not the cholesteatoma.\n\n' +
      '**Nor is "severe ear pain present in all patients" ever true of unsafe CSOM** — that is the keyed false statement in one of the endpoint questions here.\n\n' +
      '**The other causes of otalgia in a middle ear context**, from *L17,18) Otorrhea and otalgia.pdf*, are worth having beside this: **acute suppurative otitis media before the drum perforates** (pressure), **complicated CSOM, e.g. acute mastoiditis**, and **tympanic plexus neuralgia** — in which the pain is abolished by intratympanic injection of xylocaine. Impacted wax and sinus infection, both offered as distractors, are not causes of pain *in CSOM*: wax muffles and obstructs, and sinus disease refers pain to the face and forehead, not into the middle ear cleft.\n\n' +
      '**The instruction to carry into clinic:** *a chronically discharging ear that starts to hurt has changed. Re-examine it for a complication rather than issuing another course of drops.*',
    qs: ['entqb-ear4-106']
  },

  /* ---------------------------------------------------------------- 10 */
  {
    id: 'csom-10', w: 'must',
    h: 'Surgery — the ranked aims, and the six operations',
    body: '**The aims of chronic ear surgery are RANKED, and the ranking is the answer to at least four questions in this chapter: SAFE first, DRY second, HEARING last.**\n\n' +
      '- **Safe** means removing the disease that can kill — cholesteatoma eroding towards the labyrinth, the facial nerve, the sigmoid sinus and the meninges. A patient can live with a discharging ear or a hearing aid; they cannot live with a brain abscess.\n' +
      '- **Dry** means an ear that no longer discharges.\n' +
      '- **Hearing** comes last for a practical reason as well as a moral one: **rebuilding an ossicular chain into a cavity that still contains cholesteatoma simply buries the disease under a graft.** A surgeon will sacrifice hearing to clear disease — taking down the chain to reach the attic — and will never leave disease behind to preserve hearing.\n\n' +
      '*(The lecture states that treatment of unsafe disease is "always surgical" and gives the tympano-mastoidectomy equation, but it does not print the aims as a ranked list; the ranking itself is not taken from the course material, although the bank tests it repeatedly.)*\n\n' +
      '**Applying the ranking: which ear do you operate first?** Given a right ear with an **attic perforation and offensive discharge** but only a 20 dB gap, and a left ear with a **large kidney-shaped (central) perforation** and a 45 dB gap, the instinct is to treat the deafer ear. **That is exactly backwards.** Read the two ears for **danger**, not for hearing: the right ear has cholesteatoma and is at risk of facial palsy, fistula, meningitis and abscess; the left has safe disease that is deafer only because the hole is bigger, and a large hole is not a dangerous one. **Operate the right ear first.** Both ears are not operated at the same sitting in chronic ear surgery, and "no surgery" ignores active cholesteatoma.\n\n' +
      '**The one operative detail the bank asks by name:** **obliteration of the Eustachian tube** is part of a **radical mastoidectomy**, and of nothing else in the list. The whole middle ear is exteriorised and the tube is closed off so that nasopharyngeal secretions cannot reflux into the open cavity; the price is total loss of hearing in that ear *(the individual operations are not described on any cached slide, which states only "always surgical" and the tympano-mastoidectomy equation — this section is not taken from the course material except where quoted)*.',
    table: {
      head: ['Operation', 'What is done', 'Drum and ossicles', 'Hearing'],
      rows: [
        ['**Myringoplasty**', 'Repair of the perforation alone, usually with **tragal perichondrium**', 'Drum repaired', 'Improved'],
        ['**Tympanoplasty**', 'Myringoplasty **+ ossiculoplasty**', 'Drum repaired, chain reconstructed', 'Improved'],
        ['**Cortical (simple / complete) mastoidectomy**', 'Exenteration of the **mastoid air cells only**', '**Untouched**', 'Unchanged — this is the operation for an acute mastoid abscess'],
        ['**Bondy’s operation**', 'The cholesteatoma sac is **exteriorised**', '**Completely intact**', 'Preserved — the most conservative open procedure'],
        ['**Modified radical mastoidectomy**', 'Attic and antrum exteriorised into the canal', '**Drum remnant and ossicles preserved**', 'Preserved'],
        ['**Radical mastoidectomy**', 'Whole middle ear exteriorised; drum remnant, malleus and incus removed; **EUSTACHIAN TUBE OBLITERATED**', 'Removed', '**Sacrificed** — for extensive or unresectable disease'],
        ['**Tympano-mastoidectomy**', 'The lecture’s own equation: **tympanoplasty + mastoidectomy** — the operation for unsafe CSOM', 'Reconstructed after clearance', 'Secondary to clearance']
      ]
    },
    qs: ['entep-ear-43', 'entep-ear-123', 'entep-ear-136', 'entep-ear-187', 'entep-ear-243', 'entqb-ear4-92']
  },

  /* ---------------------------------------------------------------- 11 */
  {
    id: 'csom-11', w: 'must',
    h: 'Complications — definition, predisposing factors, and the pathways in',
    body: '**Definition** (*L16) Chronic otitis media.pdf*):\n\n' +
      '> Extension of the inflammatory process **beyond the confines of the middle ear cleft**.\n' +
      '> **Mostly in the course of chronic suppurative otitis media of the unsafe type with cholesteatoma.**\n\n' +
      'That second line is the reason the two types have the names they do, and it is the premise behind roughly half the questions in this chapter.\n\n' +
      '**Predisposing factors — three, and the lecture lists exactly three:**\n\n' +
      '- **Virulent organisms.**\n' +
      '- **Low resistance of the patient** — diabetes, immunosuppression, malnutrition, extremes of age.\n' +
      '- **A preformed pathway.**\n\n' +
      '**Pathways of infection.** Complications occur *"when the normal defence barriers of the middle ear are overcome"*, and the lecture separates two mechanisms:\n\n' +
      '- **The commonest way is BONE EROSION BY A CHOLESTEATOMA.** If you remember one sentence about how complications happen, this is it.\n' +
      '- **Preformed pathways** — four of them, named: **congenital dehiscences** (of the fallopian canal, the tegmen or the sinus plate), **fracture lines**, the **round window membrane**, and **dehiscences due to previous surgery**.\n\n' +
      '**Why the anatomy makes this inevitable.** *L22) Anatomy of  Ear Undergraduate.pdf* gives the walls of a box whose every side abuts something that must not be infected: the **superior wall is the tegmen tympani**, a paper-thin plate with the **middle cranial fossa and temporal lobe** above it; the **posterior wall** carries the **aditus ad antrum** into the mastoid and the **vertical (mastoid) part of the facial nerve** in its bony canal; the **inferior wall** is a thin bony plate over the **internal jugular vein**; the **medial wall** separates the middle ear from the **labyrinth**; and immediately behind the mastoid air cells lies the **sigmoid sinus** on its sinus plate. *L16* draws the same relations: **superior — temporal lobe; posterior — cerebellum and sigmoid sinus; inferior — jugular bulb; anterior — carotid artery; medial — inner ear and facial nerve.**\n\n' +
      '**So the middle ear is a small air-filled space surrounded on every side by dura, brain, great vessels, the facial nerve and the labyrinth, separated from all of them only by bone** — and cholesteatoma is a disease whose entire mechanism is dissolving bone. That is the whole of this topic in one sentence.',
    qs: []
  },

  /* ---------------------------------------------------------------- 12 */
  {
    id: 'csom-12', w: 'must',
    h: 'The three-tier classification of complications',
    body: '**The lecture sorts every complication into three tiers, and a striking number of questions are simply a test of that sorting.** The grouping is not arbitrary — **it names the anatomical barrier the infection has crossed.**\n\n' +
      '- **Cranial (intratemporal)** — the infection is **still inside bone**, within the temporal bone, outside the cranial cavity.\n' +
      '- **Intracranial** — the **dura has been breached**; the infection is inside the cranial cavity.\n' +
      '- **Extracranial** — the infection has **escaped into the soft tissues of the neck**.\n\n' +
      '**Two facts from this list that the bank asks directly:**\n\n' +
      '- **Acute mastoiditis and mastoid abscess are the MOST COMMON complication of otitis media** — and they are **cranial**, not intracranial.\n' +
      '- **Labyrinthitis is CRANIAL**, not intracranial. The labyrinth sits in the petrous bone alongside the middle ear; infection reaching it has not crossed the dura. This is the keyed exception in the classic *"all of the following are intracranial complications except"* question.\n\n' +
      '**A caution about the word "extra-cranial", because one endpoint question uses it loosely.** That question asks which is **not** an extra-cranial complication and keys **sigmoid sinus thrombosis** — correctly, because the sinus is inside the cranial cavity — while offering facial palsy, mastoid abscess, labyrinthitis and hearing loss as the alternatives. Under the lecture’s **three-way** scheme those four are *cranial*, not *extracranial*; the question is using "extra-cranial" in the looser sense of **"outside the cranial cavity"**. Under either reading, sigmoid sinus thrombosis is the odd one out. **Read the option list to see which scheme a stem is using.**\n\n' +
      '**The lecture prints "extradural abscess" first on the intracranial list**, and it is worth knowing that it is also the **commonest** of the intracranial complications and is often **silent**, discovered at surgery when the tegmen or posterior fossa plate is found eroded and granulations sit on exposed dura *(the commonness and silence are not taken from the course material)*.',
    table: {
      head: ['Tier', 'Members', 'Barrier crossed'],
      rows: [
        ['**CRANIAL (intratemporal)**', '**Acute mastoiditis and mastoid abscess — the MOST COMMON complication of all**; **petrositis**; **labyrinthitis**; **facial paralysis**', 'Still **inside bone** — within the temporal bone'],
        ['**INTRACRANIAL**', '**Extradural abscess**; **meningitis**; **subdural abscess**; **brain abscess**; **lateral (sigmoid) sinus thrombosis**', '**Dura breached** — inside the cranial cavity'],
        ['**EXTRACRANIAL**', '**External otitis**; **retropharyngeal abscess**; **parapharyngeal abscess**; **cervical lymphadenitis** (and Bezold’s / Citelli’s abscess by the same route)', 'Escaped into the **soft tissues of the neck**']
      ]
    },
    qs: ['entep-ear-124', 'entep-ear-228', 'entqb-ear3-65']
  },

  /* ---------------------------------------------------------------- 13 */
  {
    id: 'csom-13', w: 'must',
    h: 'The compass — the direction of spread decides the complication',
    body: '**Grade Gain builds a whole run of questions on one idea: name the DIRECTION in which pus leaves the mastoid, and the complication follows automatically.** Five separate questions in this chapter are one arm of the compass each, so learning the table below answers all of them and several endpoint questions besides.\n\n' +
      '**One point of confusion to fix before reading it.** The direction named is **the direction the pus travels out of the mastoid**, not the position of the structure on the drum. The mastoid antrum lies **behind** the ear canal, so pus moving **forwards (anteriorly)** out of it arrives at the **back and top** of the bony canal — the **posterosuperior** wall. That is why *"the posterosuperior bony canal is affected by the ANTERIOR spread of mastoiditis"* reads backwards until you fix the reference point.\n\n' +
      '**The three arms with the highest yield:**\n\n' +
      '- **Superior, through the tegmen tympani** -> extradural abscess, then a **temporal lobe abscess**. *"The most common cause of a temporal lobe abscess"* is **direct spread from a middle ear infection**, for the purely anatomical reason that nothing else sits that close. Haematogenous abscesses are multiple and sit at the grey-white junction; trauma needs a penetrating injury; a **frontal** sinus infection spreads to the **frontal** lobe.\n' +
      '- **Anterior** -> the posterosuperior bony canal wall (**sagging**) and the **fallopian canal** (**facial palsy**). Sagging appears **before** any post-auricular swelling, which makes it an early sign worth hunting for on otoscopy.\n' +
      '- **Medial** -> the **petrous apex** -> **petrositis** and Gradenigo’s triad.\n\n' +
      '**And the trap the bank sets twice in this group:** the *lateral* spread question keys **"c & d"**, because **Bezold’s and Citelli’s abscesses are INFERIOR**, through the mastoid tip, while post-auricular and zygomatic abscesses are lateral. **When a Grade Gain option list ends in a combination, read to the end of it.**\n\n' +
      '*(The compass taxonomy itself, Citelli’s abscess and the zygomatic abscess appear on no cached ENT slide. The lecture gives acute mastoiditis, the post-auricular abscess, sagging, petrositis and Gradenigo’s triad, but not the directional scheme — that framing is not taken from the course material, although the bank tests it heavily.)*',
    table: {
      head: ['Direction out of the mastoid', 'Structure reached', 'Result'],
      rows: [
        ['**SUPERIOR**', '**Tegmen tympani** -> middle cranial fossa', 'Extradural abscess, then **TEMPORAL LOBE ABSCESS**'],
        ['**LATERAL** (through the outer cortex)', 'Subperiosteal plane', '**Post-auricular abscess** — the commonest form; auricle pushed **outwards and downwards**'],
        ['**LATERAL, forwards**', 'Root of the zygoma', '**Zygomatic abscess**'],
        ['**INFERIOR**, through the tip', 'Sheath of **sternomastoid**', '**Bezold’s abscess** — a tender swelling in the upper neck'],
        ['**INFERIOR**, through the medial wall of the tip', '**Posterior belly of digastric**', '**Citelli’s abscess**'],
        ['**ANTERIOR**', 'Posterosuperior bony canal wall; **fallopian canal**', '**SAGGING** of the canal wall; **FACIAL PALSY**'],
        ['**POSTERIOR**', '**Sinus plate** -> sigmoid sinus', '**Lateral (sigmoid) sinus thrombophlebitis**'],
        ['**POSTERIOR**, into the posterior fossa', 'Cerebellum', '**Cerebellar abscess**'],
        ['**MEDIAL**', '**Petrous apex**', '**PETROSITIS** -> Gradenigo’s triad'],
        ['**INWARDS**', 'Lateral semicircular canal; round window', '**Labyrinthitis / labyrinthine fistula**']
      ]
    },
    qs: ['entqb-ear1-15', 'entqb-ear1-27', 'entqb-ear3-60', 'entqb-ear3-63', 'entqb-ear3-64']
  },

  /* ---------------------------------------------------------------- 14 */
  {
    id: 'csom-14', w: 'must',
    h: 'Acute mastoiditis — pathology and clinical picture',
    body: '**Definition:** acute infection of the **mastoid antrum and air cells**. It is the **commonest complication of otitis media**.\n\n' +
      '**Two facts about who gets it, and the bank asks them as an EXCEPT question every time.** The lecture puts them in one sentence: *"Acute mastoiditis usually occurs in **well pneumatized mastoids** and is **more common in children**."*\n\n' +
      '**Pneumatisation is the whole explanation for the age distribution.** The mastoid fills with air cells during childhood, so a child’s mastoid offers the largest volume of mucosa-lined cells for infection to occupy. Repeated middle ear disease in early life **arrests** pneumatisation, so the adults most likely to have chronic ear disease are precisely the ones with **sclerotic, acellular** mastoids and little for an acute mastoiditis to fill. Add the child’s **shorter, wider, more horizontal Eustachian tube** (*L22*) and a far higher rate of acute otitis media, and the pattern follows. **"More common in adults" is therefore the classic false statement.**\n\n' +
      '**Symptoms:** **fever**, **increasing earache**, **profuse mucopurulent discharge**.\n\n' +
      '**Signs, in the stage of acute mastoiditis** — quoted:\n\n' +
      '- **Profuse mucopurulent discharge which may exhibit a positive RESERVOIR SIGN**, *i.e. rapid re-accumulation of discharge after cleaning of the ear.*\n' +
      '- **Tenderness and redness over the mastoid.**\n' +
      '- **Sagging (oedema) of the postero-superior wall of the bony external ear canal, due to periosteitis.**\n\n' +
      '**The reservoir sign is worth understanding, not memorising.** Behind a small perforation lies a **large reservoir of pus under pressure** — the whole coalesced air cell system. Mop the canal dry and it refills within moments, because the volume behind the hole is far greater than the volume of the canal. **The sign measures the size of the space upstream**, which is exactly why it separates acute mastoiditis from a resolving acute otitis media (whose discharge tails off) and from otitis externa (where there is no space behind anything). Its mirror image is diagnostic too: a **scanty, foetid discharge that does not re-accumulate** is attico-antral disease with cholesteatoma.\n\n' +
      '**The discharge is also described as PULSATILE**, throbbing with the arterial pulse — pus under pressure escaping through a small opening *(the term and the mechanism are not stated on the cached slide and are not taken from the course material)*.\n\n' +
      '**What acute mastoiditis is NOT.** **Granulations on the floor of the external auditory meatus** belong to **malignant (necrotising) otitis externa** — granulation tissue at the bony-cartilaginous junction in an elderly, poorly controlled diabetic — and they sit in the **canal**, not in the middle ear cleft. That is the keyed exception in one of the endpoint questions here.',
    flow: {
      title: 'How acute mastoiditis evolves',
      steps: [
        { k: 'step', t: 'Acute suppurative otitis media', n: 'Usually a child with a well-pneumatised mastoid; often untreated or inadequately treated' },
        { k: 'step', t: 'Impeded drainage', n: 'Pus cannot escape through the drum or the Eustachian tube' },
        { k: 'step', t: 'Pus accumulates under pressure inside the mastoid air cells' },
        { k: 'step', t: 'Pressure necrosis of the cell walls; the cells coalesce = COALESCENT MASTOIDITIS', n: 'Fever, increasing earache, profuse mucopurulent discharge with a positive reservoir sign, tenderness and redness over the mastoid, sagging of the posterosuperior bony canal wall' },
        { k: 'alert', t: 'The outer table of the mastoid is eroded: POST-AURICULAR SUBPERIOSTEAL ABSCESS (the commonest form)', n: 'Fluctuant post-auricular swelling; the auricle is pushed OUTWARDS AND DOWNWARDS; the postauricular sulcus is now obliterated. This is the point at which surgery is required' },
        { k: 'step', t: 'The abscess ruptures through the skin: MASTOID FISTULA', n: 'Draining mucopus' }
      ]
    },
    qs: ['entep-ear-81', 'entep-ear-222', 'entqb-ear3-66', 'entqb-ear4-117', 'entqb-ear4-121']
  },

  /* ---------------------------------------------------------------- 15 */
  {
    id: 'csom-15', w: 'must',
    h: 'Mastoid abscess versus furunculosis with a post-auricular node',
    body: '**The lecture names this pair itself: "The main differential diagnosis is from FURUNCULOSIS OF THE EXTERNAL EAR WITH POST-AURICULAR LYMPHADENITIS."** Both give a tender swelling behind the ear in a patient with a sore, discharging ear, and getting it wrong sends a child either to an unnecessary operation or home with an untreated intracranial risk.\n\n' +
      '**Each criterion separates them by a different route:**\n\n' +
      '- **Displacement of the pinna.** Pushing the whole auricle **outwards and downwards** requires pus **under the periosteum over the mastoid**, lifting the ear off the skull. A lymph node, however tender, is a discrete mobile lump that does not displace anything. *(Grade Gain writes "forwards and downwards" where the lecture writes "outwards and downwards" — the same displacement described from a different angle.)*\n' +
      '- **Mucus.** Mucus can only come from **secreting middle ear and mastoid mucosa**. Mastoiditis gives **profuse mucopurulent** discharge with a **positive reservoir sign**. A furuncle is a **staphylococcal abscess of a hair follicle in the cartilaginous outer third of the canal** — and the canal has **no mucous glands**, so its discharge is scanty, purulent and **never mucoid**.\n' +
      '- **The tragus sign.** Pressing the tragus moves the **cartilaginous** outer canal. That hurts sharply when a furuncle sits in it, and does nothing in mastoiditis, where the disease is deep to the drum.\n\n' +
      '**The postauricular sulcus, and a genuine subtlety the examiner’s cram sheet exposes.** The bank prints *"postauricular redness and oedema with a **preserved** sulcus -> acute mastoiditis"*, whereas the sign usually taught is the **obliterated** sulcus. **Both are true, at different stages, and the lecture separates them:** in *"the stage of acute mastoiditis"* there is tenderness and redness over the mastoid — the sulcus is still there. The sulcus is **obliterated when the SUBPERIOSTEAL ABSCESS forms**, at which point the pinna is also pushed out and down. **Read the stem for which stage it describes.**\n\n' +
      '**Two extra discriminators the option lists do not carry:** the furuncle **hurts on chewing**, because the anterior canal wall abuts the temporomandibular joint; and mastoiditis shows **sagging of the posterosuperior BONY canal wall**, whereas furunculosis shows a visible swelling in the **outer, cartilaginous** meatus.\n\n' +
      '**And the treatments diverge completely:** a mastoid abscess needs a **cortical mastoidectomy**; a canal furuncle needs systemic antistaphylococcal antibiotics and analgesia, and specifically **should not be incised**, because of the risk of **perichondritis**.',
    table: {
      head: ['', 'Acute mastoiditis / mastoid abscess', 'Furunculosis + post-auricular lymphadenitis'],
      rows: [
        ['Discharge', '**Mucopurulent, profuse**, positive **reservoir sign**', 'Scanty, purulent, **never mucoid**'],
        ['Pinna', 'Pushed **outwards and downwards**', 'Not displaced'],
        ['Postauricular sulcus', '**Preserved** in the early stage; **obliterated** once the subperiosteal abscess forms', 'Preserved — the node is a discrete mobile lump'],
        ['Tragus', '**Free** — pressing it does not hurt', '**Tender — the TRAGUS SIGN**'],
        ['Pain on chewing', 'No change', '**Worse** — the anterior canal wall abuts the TMJ'],
        ['Canal', '**Sagging** of the posterosuperior **bony** wall, deep', 'Furuncle visible in the **cartilaginous (outer)** meatus'],
        ['Drum', 'Perforated and discharging', 'Normal, if it can be seen past the furuncle'],
        ['Treatment', 'Antibiotics; **cortical mastoidectomy** if an abscess has formed', 'Systemic antistaphylococcal antibiotic + analgesia; **avoid incision** — perichondritis']
      ]
    },
    qs: ['entqb-ear4-93', 'entqb-ear4-120', 'entep-case-19']
  },

  /* ---------------------------------------------------------------- 16 */
  {
    id: 'csom-16', w: 'must',
    h: 'Treatment of acute mastoiditis — medical first, surgery for the abscess',
    body: '**The lecture gives the rule in two lines:**\n\n' +
      '> **Acute mastoiditis -> Medical treatment: antibiotics.**\n' +
      '> **Mastoid abscess -> Surgical: cortical mastoidectomy.**\n\n' +
      '**So the trigger for surgery is the ABSCESS, not the mastoiditis.** Grade Gain prints the same rule as a box, and it is the source of a classic EXCEPT question: *"the majority resolve by antibiotics"* is **true**, and *"the majority require surgery"* is **false**. When an option list offers a statement and its exact opposite, the answer is one of the two.\n\n' +
      '**Why medical treatment wins in most cases.** Acute mastoiditis is infection of the *mucosa lining air cells*, not yet an abscess. If the pus can drain — spontaneously through a perforation, or through a **myringotomy** if the drum is still intact — and the organism is covered by an adequate systemic antibiotic, the air cells re-aerate and the disease resolves without a chisel. **Myringotomy in an intact drum is not optional here; it is the drainage the antibiotics need in order to work.**\n\n' +
      '**The three indications for surgery**, from the bank’s own printed box:\n\n' +
      '- **Failure** — pain, fever or otorrhoea persisting after **2 to 4 weeks** of adequate medical management.\n' +
      '- **A mastoid or neck abscess** — pus has left the air cells and is under the periosteum or in the neck.\n' +
      '- **Any cranial or intracranial complication** — facial palsy, labyrinthitis, petrositis, meningitis, sinus thrombosis, brain abscess.\n\n' +
      '**The operation is a complete simple (cortical) mastoidectomy** — every air cell exenterated, the **middle ear and drum left alone**. That is precisely what distinguishes it from the radical and modified radical operations of unsafe chronic disease, which take down the posterior canal wall.\n\n' +
      '**Where the exam turns this into a management question.** A child with long-standing ear trouble who now has **fever and a warm, tender mastoid** needs **urgent referral to ENT**, not eardrops, not reassurance, not routine referral. Eardrops cannot reach the mastoid; oral antibiotics alone will not drain coalesced pus; and routine referral wastes exactly the interval in which the complication develops. **Note the difference in wording that the bank exploits:** *"may require surgery in severe cases"* is **true**, while *"the majority require surgery"* is **false**.',
    flow: {
      title: 'Managing acute mastoiditis',
      steps: [
        { k: 'step', t: 'Acute mastoiditis diagnosed', n: 'Fever, increasing earache, profuse mucopurulent discharge with a positive reservoir sign, mastoid tenderness and redness, sagging canal wall' },
        { k: 'decision', t: 'Is the tympanic membrane still intact?', yes: 'MYRINGOTOMY — the pus must have a way out before antibiotics can work', no: 'The existing perforation is already draining' },
        { k: 'step', t: 'Systemic antibiotics: the majority resolve completely', n: 'Acute mastoiditis is treated MEDICALLY. Most cases never need an operation' },
        { k: 'decision', t: 'Mastoid or neck abscess? Any cranial or intracranial complication? Or pain, fever or otorrhoea persisting after 2-4 weeks of adequate treatment?', yes: 'COMPLETE SIMPLE (CORTICAL) MASTOIDECTOMY — every air cell exenterated, middle ear and drum left alone', no: 'Continue medical treatment to resolution' },
        { k: 'alert', t: 'Facial palsy, vertigo, meningism, drowsiness or a swinging fever converts this into an emergency', n: 'Image and operate. Do not wait out the 2-4 weeks' }
      ]
    },
    qs: ['entep-ear-112', 'entqb-ear3-67']
  },

  /* ---------------------------------------------------------------- 17 */
  {
    id: 'csom-17', w: 'must',
    h: 'Petrositis — the lesion at the petrous apex',
    body: '**Definition:** *"Spread of infection to the **petrous apex air cells**."*\n\n' +
      '**Pathology, quoted, and every clause is examinable:**\n\n' +
      '> It occurs **only in pneumatized petrous bone** and has a **similar pathology to acute mastoiditis**. However, it is **much less common** than acute mastoiditis and, on the other hand, **more serious**, because it has a **greater tendency toward intracranial extension**.\n\n' +
      '**Read that as four separate facts.** *Only in pneumatised petrous bone* explains why petrositis is uncommon even though otitis media is not — only some people have air cells that far medially. *Similar pathology to acute mastoiditis* means it is the same process — pus under pressure in air cells, coalescing — happening in a different, deeper set of cells. *Less common but more serious* is the comparison the bank asks directly. And *greater tendency toward intracranial extension* is the reason it matters at all.\n\n' +
      '**How it is reached: MEDIAL spread**, from the mastoid or middle ear inwards along the pneumatised tract to the apex. That is the arm of the compass this complication occupies.\n\n' +
      '**What is at the apex, and why the syndrome exists.** Two structures rest on that one small piece of bone:\n\n' +
      '- the **trigeminal (Gasserian) ganglion**, in a dural pouch called **Meckel’s cave**;\n' +
      '- the **abducent (VI) nerve**, running through **Dorello’s canal** beneath the petroclinoid ligament.\n\n' +
      '*(Meckel’s cave and Dorello’s canal are named in neither cached slide; the lecture states only that the retrobulbar pain is "due to irritation of the trigeminal ganglion" and the diplopia is "due to ipsilateral VI nerve (abducent) palsy". The named anatomy is not taken from the course material.)*\n\n' +
      '**So the triad is pure topography.** An abscess at the apex announces itself as an ear that discharges, an eye that aches behind, and an eye that cannot abduct — because those are the only three things in reach. **Nowhere else in the temporal bone produces that combination**, which is what makes the triad diagnostic of the *site*.\n\n' +
      '**The distractors the bank uses, and why each fails.** **Mastoiditis** is the *origin* of the spread, not its destination, and gives local signs behind the ear. **Sigmoid sinus thrombophlebitis** is *posterior* spread and gives a swinging fever, not eye signs. A **temporal lobe abscess** gives headache, drowsiness, hemiparesis and hemianopia, not an isolated sixth nerve palsy. The **orbit** cannot be reached from the ear at all — orbital cellulitis is a complication of **sinusitis**. The **vestibular labyrinth** gives severe vertigo and sensorineural hearing loss. And **meningitis**, though it is the commonest intracranial complication, gives headache, fever, neck stiffness and photophobia — not isolated diplopia.\n\n' +
      '**Finally, the otorrhoea in Gradenigo’s is not a new event.** It is the underlying otitis media, the **oldest** symptom the patient has; the two eye symptoms are what turn a discharging ear into a named diagnosis. That ordering is the clinically useful part: *a chronically discharging ear that begins to ache behind the eye has extended medially.*',
    qs: ['entep-ear-27', 'entep-ear-37', 'entep-ear-201', 'entep-mfe1-1', 'entep-mfe4-1', 'entqb-ear3-62', 'entqb-ear4-99', 'entqb-ear4-104']
  },

  /* ---------------------------------------------------------------- 18 */
  {
    id: 'csom-18', w: 'must',
    h: 'Gradenigo’s triad, element by element — the most over-tested topic in the chapter',
    body: '**The triad, verbatim from *L16) Chronic otitis media.pdf*:**\n\n' +
      '> **Gradenigo’s syndrome / triad:**\n' +
      '> **Otorrhoea.**\n' +
      '> **Retrobulbar pain** — i.e. pain behind the eye, due to **irritation of the trigeminal ganglion**.\n' +
      '> **Diplopia**, due to **ipsilateral VI nerve (abducent) palsy**.\n\n' +
      '**Eighteen questions in this chapter are about this triad**, and they come at it from seven different angles: *which complication produces it, which nerve causes the diplopia, which muscle is affected, which nerve causes the pain, what the three elements are, where the infection spread to, and what causes the discharge.* Learn the table below in both directions and all eighteen fall out of it.\n\n' +
      '**The diplopia, in detail, because the bank asks it four separate ways.** The abducent nerve supplies **one** muscle — the **lateral rectus**, the only abductor of the eye. Paralyse it and the eye cannot turn outwards, so the **unopposed medial rectus pulls it inwards**: a **CONVERGENT (esotropic) PARALYTIC squint**, with horizontal diplopia **worst on looking towards the affected side**. It is **unilateral**, because the infection is on one side. Older question stems describe it exactly as *"convergent paralytic squint"*.\n\n' +
      '**Which makes the medial rectus the classic trap:** it is the muscle that produces the visible deviation, but it is working normally. The muscle **affected** is the **lateral rectus**.\n\n' +
      '**The rule that settles every "which nerve, which muscle" question — LR6, SO4, all the rest 3:** the **lateral rectus** is **VI**, the **superior oblique** is **IV**, everything else is **III**. So: **oculomotor (III)** palsy gives **ptosis, a dilated pupil and a "down and out" eye** — none of which belongs to Gradenigo’s. **Trochlear (IV)** palsy gives **vertical or torsional** diplopia, worst on looking down, with a head tilt. **Raised intracranial pressure** can stretch the sixth nerve and give a **false localising** palsy, which is why it is a tempting option — but it is a late event, usually bilateral, and comes with headache, vomiting and papilloedema; in Gradenigo’s the palsy is **ipsilateral and direct**. *(The muscle mapping and the palsy patterns are standard neuro-anatomy and are not taken from the course material.)*\n\n' +
      '**The pain, and why it is felt behind the eye.** The trigeminal ganglion sits on the petrous apex; the pain is **referred trigeminal pain**, felt in the **ophthalmic (V1)** territory. It is **not** the facial nerve — the facial nerve is overwhelmingly motor and produces **palsy, not pain**.\n\n' +
      '**Two things that are NOT in the triad, and both are keyed as exceptions:**\n\n' +
      '- **Hearing loss.** It is not part of the definition at all. Whatever deafness the patient has belongs to the otitis media underneath, and it is **conductive** — which is why *"associated with conductive hearing loss"* is keyed as the **false** statement in one endpoint question, and why students who expect a sensorineural loss get it wrong.\n' +
      '- **Facial oedema**, **hemifacial spasm**, and a **divergent** or **bilateral** squint. Each appears in a distractor option and each is wrong for a specific reason: hemifacial spasm is an irritative facial nerve phenomenon; a divergent squint is the opposite of an abducent palsy; the lesion is unilateral. The discharge must also be **purulent**, not serous — this is suppurative middle ear disease.\n\n' +
      '**A shorthand that works: ONE ear symptom and TWO EYE symptoms.** *(Grade Gain prints the mnemonic as "1 ear + 2 nose", which does not survive inspection — the two non-otological elements are orbital, not nasal. Transcribed as printed and flagged; the correction is not part of the source.)*\n\n' +
      '**Do not confuse it with the other named triads.** **Trotter’s triad** — conductive deafness, ipsilateral immobility of the soft palate and trigeminal neuralgia of the mandibular division — is **nasopharyngeal carcinoma**. **Griesinger’s sign** is lateral sinus thrombosis. **Pott’s puffy tumour** is frontal sinusitis. All three are offered as distractors.',
    table: {
      head: ['Element of the triad', 'Structure at the petrous apex', 'Nerve', 'What you see'],
      rows: [
        ['**Otorrhoea**', 'The middle ear underneath', '—', 'The discharging ear the patient has had all along — the **oldest** symptom, not a new one. Purulent, not serous'],
        ['**Retrobulbar / retro-orbital pain**', '**Meckel’s cave**, holding the trigeminal (Gasserian) ganglion', '**V — trigeminal**', 'Deep pain **behind the eye** and in the face, in the **ophthalmic (V1)** territory. Referred, not local'],
        ['**Diplopia**', '**Dorello’s canal**, beneath the petroclinoid ligament', '**VI — abducent**', '**Lateral rectus** palsy: the eye will not abduct; the unopposed **medial rectus** turns it in — a **CONVERGENT PARALYTIC squint**, unilateral, diplopia worst on gaze towards the lesion'],
        ['*(NOT in the triad)* Hearing loss', 'The otitis media underneath', '—', 'If present it is **CONDUCTIVE**, and it belongs to the underlying disease, not to Gradenigo’s'],
        ['*(NOT in the triad)* Facial palsy or spasm', 'Fallopian canal — a different, **anterior** route', 'VII', 'Facial nerve involvement is its own complication, not part of this syndrome']
      ]
    },
    qs: ['entep-ear-79', 'entep-ear-133', 'entep-ear-139', 'entep-ear-192', 'entep-ear-202', 'entqb-ear4-101', 'entqb-ear4-102', 'entqb-ear4-103', 'entqb-ear4-105', 'entep-case-18']
  },

  /* ---------------------------------------------------------------- 19 */
  {
    id: 'csom-19', w: 'high',
    h: 'Labyrinthitis',
    body: '**Clinical picture, and the lecture gives exactly two features:**\n\n' +
      '> **Severe vertigo. Sensorineural hearing loss.**\n\n' +
      'To those two, add **nystagmus** and, in the acute phase, **nausea and vomiting**. It is a **cranial (intratemporal)** complication — the labyrinth is inside the petrous bone, not inside the skull cavity — which is the point tested by the *"all of the following are intracranial complications except"* question.\n\n' +
      '**Why it matters more than its position in the list suggests.** It is the **one complication that converts a conductive hearing loss into a sensorineural one**, and it can be the road by which infection reaches the meninges. **Vertigo appearing in a long-standing foul-smelling discharging ear is never benign** — it means the inner ear has been breached.\n\n' +
      '**The word that decides the classic EXCEPT question is "SUPPURATIVE".** Suppurative labyrinthitis requires **pus**. **Otitis media with effusion is non-suppurative by definition** — the fluid behind an intact drum contains no pus — so it cannot cause it. That is the keyed exception.\n\n' +
      '**The three routes that CAN**, and the third is the one worth remembering because it runs the other way:\n\n' +
      '- **Cholesteatoma erodes the lateral semicircular canal.** This is the commonest route and the classic site: the lateral canal is the part of the labyrinth closest to the attic. The result is a **labyrinthine fistula**, which opens the inner ear directly.\n' +
      '- **Acute suppurative otitis media**, through the **round window membrane** or the oval window, especially in a fulminant attack. Note that the round window is one of the lecture’s own named **preformed pathways**.\n' +
      '- **Meningitis, working inwards.** Infection descends from the subarachnoid space along the **internal auditory meatus and the cochlear aqueduct**. This is the route that makes post-meningitic deafness in children so common and so severe *(the meningogenic route is not taken from the course material)*.\n\n' +
      '**That two-way traffic is the point to keep:** the labyrinth can be infected from the middle ear outwards, or from the meninges inwards.\n\n' +
      '**Two clinical additions.** A **positive fistula sign** — vertigo and nystagmus provoked by pressing on the tragus or by pneumatic otoscopy — indicates a labyrinthine fistula and is a strong argument for surgery. And a **serous (toxic) labyrinthitis**, in which toxins rather than organisms cross into the inner ear, is reversible, whereas true **suppurative** labyrinthitis ends in a **dead labyrinth**: total sensorineural deafness and permanent loss of vestibular function on that side *(both not taken from the course material)*.',
    table: {
      head: ['Route into the labyrinth', 'Mechanism', 'Typical setting'],
      rows: [
        ['**Cholesteatoma erodes the LATERAL semicircular canal**', 'A **labyrinthine fistula** opens the inner ear directly', 'Unsafe CSOM. Vertigo, often provoked by pressing the tragus — a positive **fistula sign**'],
        ['**Round window / oval window membrane**', 'Toxins, then organisms, cross from the middle ear', '**Acute suppurative otitis media**, fulminant. The round window is a named **preformed pathway**'],
        ['**Meningogenic — from the meninges INWARDS**', 'Descends along the **internal auditory meatus** and **cochlear aqueduct**', 'Meningitis. The reason post-meningitic deafness in children is so severe *(not taken from the course material)*'],
        ['**Otitis media with EFFUSION**', '**Cannot** cause suppurative labyrinthitis', 'OME is **non-suppurative** — there is no pus. This is the keyed exception']
      ]
    },
    qs: ['entep-ear-156', 'entep-case-16']
  },

  /* ---------------------------------------------------------------- 20 */
  {
    id: 'csom-20', w: 'high',
    h: 'Facial paralysis as a complication of otitis media',
    body: '**The lecture lists facial paralysis among the CRANIAL complications of otitis media**, and the anatomy behind it is given in *L22) Anatomy of  Ear Undergraduate.pdf*: the **vertical (third, mastoid) part of the facial nerve runs in a bony canal in the POSTERIOR WALL of the middle ear**, leaving through the **stylomastoid foramen**. The lecture also notes that the nerve *"runs in the walls of the middle ear"* and *"could be injured during bone drilling"* — surgery is a cause as well as a treatment.\n\n' +
      '**Two quite different mechanisms, and they demand different management** *(the mechanisms and the management below are not taken from the course material, which lists facial paralysis without describing it)*:\n\n' +
      '- **In ACUTE otitis media**, the nerve is usually exposed by a **congenital dehiscence of the fallopian canal** — one of the lecture’s own named preformed pathways. Inflammatory oedema compresses the exposed nerve. The palsy is usually **incomplete** and recovers, and the treatment is **urgent myringotomy** to decompress the middle ear, plus systemic antibiotics. **Myringotomy comes first** — ahead of intravenous antibiotics alone, lumbar puncture or steroids.\n' +
      '- **In CHRONIC disease (unsafe CSOM)**, the **cholesteatoma has eroded the fallopian canal**. This is destruction, not oedema. Treatment is **surgical removal of the disease with decompression of the nerve**, and recovery is far less certain.\n\n' +
      '**It is a LOWER motor neurone palsy**, so the **forehead is involved** and the eye cannot close on that side — which distinguishes it from an upper motor neurone (stroke) palsy that spares the forehead. The exposed cornea needs protecting.\n\n' +
      '**Where it sits in the compass:** facial palsy is **ANTERIOR** spread from the mastoid, in the same direction as the sagging of the posterosuperior bony canal wall. A patient with mastoiditis who develops facial weakness has had pus travel forwards to the fallopian canal.\n\n' +
      '**And it is one of the three absolute indications for surgery in acute mastoiditis**, alongside an abscess and failure of medical treatment. **A facial palsy in a discharging ear is never watched.**',
    qs: []
  },

  /* ---------------------------------------------------------------- 21 */
  {
    id: 'csom-21', w: 'must',
    h: 'Otogenic meningitis, and the extradural and subdural abscess',
    body: '**Meningitis is the intracranial complication students are asked to recognise most often, and it is recognised by ONE sign group: meningeal irritation.**\n\n' +
      '- **Headache, fever, photophobia, neck rigidity**, and a positive **Kernig** and **Brudzinski** sign.\n' +
      '- **No focal neurological deficit.** That absence is the whole discrimination against a brain abscess.\n\n' +
      '**The bank teaches this by printing two vignettes that are nearly word for word identical.** One 40-year-old man with foul ear discharge and attic granulations develops *"severe headache and fever followed by VOMITING"*; another develops *"severe headache and fever associated with NECK RIGIDITY"*. **The first is raised intracranial pressure — a brain abscess. The second is meningitis.** Nothing else in the two stems differs. **The examiner is testing one discrimination: raised pressure versus meningeal irritation.**\n\n' +
      '**Extradural abscess.** Pus collecting between the eroded bone — the **tegmen tympani** above, or the **posterior fossa plate** behind — and the **dura**. It is the **commonest** of the intracranial complications and it is frequently **silent**, found at operation when granulations are seen sitting on exposed dura *(the commonness and the silence are not taken from the course material; the lecture lists extradural abscess first among the intracranial complications without describing it)*.\n\n' +
      '**But it has one classic clinical clue, and the bank asks it as a vignette:** a **PULSATING discharge**. A discharge that pulses in time with the arterial pulse is the **lighthouse sign**, and it means the discharge is being transmitted from a space sharing the intracranial pulse — the dura has been exposed, or an extradural abscess has formed. **In a 35-year-old with offensive otorrhoea and a marginal perforation, "cholesteatoma" is close but wrong; the word *pulsating* forces the answer to "cholesteatoma WITH an intracranial complication."** That patient needs imaging and surgery, not ear drops *(the pulsating / lighthouse sign is not taken from the course material)*.\n\n' +
      '**Subdural abscess (empyema)** lies between dura and arachnoid. It is rarer, spreads rapidly over the convexity, and typically presents with **rapid deterioration, seizures and hemiplegia** rather than a slowly evolving picture *(not taken from the course material — the lecture names it in the list only)*.\n\n' +
      '**Management principle for all three, and for meningitis:** high-dose intravenous antibiotics **plus** surgical eradication of the ear disease. **Treating the meningitis without removing the source leaves the source.**',
    qs: ['entep-ear-56', 'entep-ear-178', 'entep-case-23']
  },

  /* ---------------------------------------------------------------- 22 */
  {
    id: 'csom-22', w: 'must',
    h: 'Otogenic brain abscess — temporal lobe versus cerebellum',
    body: '**Focal neurological signs in a patient with a discharging ear mean a FOCAL lesion, and that means a brain abscess.** This is the discrimination the bank tests with its longest vignette in the chapter.\n\n' +
      '**Read that vignette once, because it is the whole topic:** an adult with **three years of continuous, purulent, offensive** discharge — unsafe disease — develops **headache, fever and vomiting**, then **severe headache and drowsiness**, then **difficulty going up and down stairs**, and finally **hemianopia and weakness of the left arm and leg**. Otoscopy shows an **attic perforation**. The answer to *"which perforation"* is **attic**; the answer to *"which complication"* is **temporal lobe abscess**.\n\n' +
      '**The localising signs decide it.** Contralateral **hemianopia** (optic radiation) and contralateral **arm and leg weakness** (internal capsule / motor pathway), on top of raised intracranial pressure, place the lesion in **one cerebral hemisphere** — and the temporal lobe sits directly above the middle ear, separated only by the thin **tegmen tympani**. A **cerebellar abscess** would give **ataxia, nystagmus and incoordination** instead. **Meningitis** gives neck stiffness without focal limb signs. **Mastoiditis** is extracranial to the cranial cavity and cannot produce hemianopia. **Lateral sinus thrombosis** gives a swinging fever, which is systemic rather than focal.\n\n' +
      '**The evolution matters as much as the signs**, and it is what makes a brain abscess dangerous to manage:\n\n' +
      '- an initial **encephalitic** stage with headache and fever;\n' +
      '- a **quiet latent period** that is falsely reassuring;\n' +
      '- **raised intracranial pressure** — headache, vomiting, drowsiness, **bradycardia**, papilloedema;\n' +
      '- and only then the **focal deficit**.\n\n' +
      '**So drowsiness precedes paralysis.** *A patient with chronic otorrhoea who becomes drowsy has an intracranial complication until imaged* — you do not wait for the hemiparesis *(the staging is not taken from the course material; the lecture lists brain abscess among the intracranial complications without describing its course)*.\n\n' +
      '**And note which ear disease does this: the UNSAFE, attico-antral type.** A cholesteatoma erodes the tegmen; safe tubo-tympanic disease does not. That is the entire reason for the two names.\n\n' +
      '**"Most common cause of a temporal lobe abscess" = direct spread from a middle ear infection**, usually through an extradural abscess first. Haematogenous abscesses are multiple and sit at the grey-white junction from lung or cardiac sources; trauma needs a penetrating injury; a frontal sinus infection gives a **frontal** lobe abscess.',
    table: {
      head: ['', 'Temporal lobe abscess', 'Cerebellar abscess'],
      rows: [
        ['Route', '**SUPERIOR**, through the **tegmen tympani**', '**POSTERIOR**, through the mastoid into the posterior fossa'],
        ['Focal signs', '**Contralateral hemiparesis**; **contralateral homonymous hemianopia**; nominal aphasia if the dominant lobe', '**Ipsilateral** ataxia, past-pointing, intention tremor, **nystagmus** towards the lesion, hypotonia'],
        ['Classic clue in a stem', 'Weakness of the arm and leg on one side; difficulty on stairs; hemianopia', 'Falls towards the side of the lesion; incoordination; unsteadiness'],
        ['Shared with the other', 'Headache, fever, vomiting, **drowsiness**, bradycardia — raised intracranial pressure', 'The same raised-pressure picture'],
        ['Which ear disease', '**Unsafe (attico-antral) CSOM with cholesteatoma**', '**Unsafe (attico-antral) CSOM with cholesteatoma**']
      ]
    },
    qs: ['entep-ear-93', 'entqb-ear4-116', 'entep-case-17']
  },

  /* ---------------------------------------------------------------- 23 */
  {
    id: 'csom-23', w: 'must',
    h: 'Lateral (sigmoid) sinus thrombophlebitis',
    body: '**RIGORS MEAN BACTERAEMIA, and in an ear patient bacteraemia means infected thrombus in a venous sinus.** If a stem gives you *"intermittent fever with rigors"*, *"swinging pyrexia"* or *"remittent, spiking fever"* in someone with a discharging ear, the answer is this and nothing else.\n\n' +
      '**The anatomy is simple and decides the direction of spread.** The **sigmoid sinus lies immediately BEHIND the mastoid air cells**, separated from them by a thin shell of bone — the **sinus plate**. Erode that plate and the infection is in the venous sinus. So the spread is **POSTERIOR**, and *"sinus thrombophlebitis is caused by the ______ spread of mastoiditis"* is answered **posterior** by pure anatomy.\n\n' +
      '**What happens next.** Infected thrombus forms in the sigmoid sinus and **sheds septic emboli into the circulation in showers**. Each shower produces a spike of fever with a **rigor**, and the temperature then falls again — the classical **picket-fence (swinging, remittent) pyrexia**. The thrombus can propagate into the **internal jugular vein**, giving a tender cord in the neck.\n\n' +
      '**Why it can only be cholesteatoma among the usual option list.** Cholesteatoma is the only disease offered that **destroys bone**. **Otitis media with effusion** and **adhesive otitis media** are **non-suppurative** — fluid and retraction, with no pus to spread and no bone destruction. **External otitis** is confined to the canal, on the wrong side of the drum entirely.\n\n' +
      '**It is an INTRACRANIAL complication**, grouped by the lecture with meningitis, brain abscess and extradural abscess. That grouping is exactly what makes *"which of these is not an extra-cranial complication"* answerable.\n\n' +
      '**How the fever patterns separate the complications** — this is the discrimination the bank actually wants:\n\n' +
      '- **Lateral sinus thrombosis** — **swinging fever WITH RIGORS**. Systemic.\n' +
      '- **Acute mastoiditis** — a **continuous** low-to-moderate fever with **local** signs (mastoid tenderness and redness, sagging canal wall, profuse discharge with a positive reservoir sign). No rigors.\n' +
      '- **Labyrinthitis** — vertigo, nystagmus, sensorineural loss. A labyrinthine event, not a systemic one.\n' +
      '- **Cholesteatoma itself** — the underlying **disease**, not a complication, and painless and afebrile until it produces one.\n\n' +
      '**Management is not conservative:** intravenous antibiotics, anticoagulation where indicated, and **surgical exploration of the sinus with a mastoidectomy** to remove the source. **A swinging fever in a discharging ear is an emergency.**',
    table: {
      head: ['Finding', 'Why it happens'],
      rows: [
        ['**Picket-fence (swinging, remittent) pyrexia WITH RIGORS**', 'Septic emboli showered off an infected thrombus. **Rigors mean bacteraemia**'],
        ['**Griesinger’s sign** — oedema and tenderness over the mastoid emissary vein', 'Thrombus has propagated into the emissary vein *(not taken from the course material)*'],
        ['**Tobey-Ayer test**', 'Compressing the **normal** jugular vein raises the CSF pressure; compressing the **affected** side does not *(not taken from the course material)*'],
        ['Tender cord along the internal jugular vein in the neck', 'Thrombus propagating down the IJV *(not taken from the course material)*'],
        ['Headache and papilloedema without focal signs', '**Otitic hydrocephalus**, if the dominant sinus is occluded *(not taken from the course material)*'],
        ['**Direction of spread: POSTERIOR**', 'Through the **sinus plate**, the thin bone between the mastoid air cells and the sigmoid sinus']
      ]
    },
    qs: ['entep-ear-25', 'entep-ear-151', 'entqb-ear4-115', 'entep-case-21']
  },

  /* ---------------------------------------------------------------- 24 */
  {
    id: 'csom-24', w: 'high',
    h: 'Extracranial complications, and the ear disease that presents as a neck lump',
    body: '**The lecture’s extracranial list, quoted:** **external otitis; retropharyngeal abscess; parapharyngeal abscess; cervical lymphadenitis.**\n\n' +
      '- **External otitis.** The simplest of them. A chronically discharging ear macerates the canal skin, and a secondary diffuse otitis externa follows. It is worth naming because it is the reverse of the usual reasoning: here the *middle* ear disease has caused the *outer* ear disease.\n' +
      '- **Cervical lymphadenitis.** Enlarged, tender upper deep cervical and post-auricular nodes draining the infected ear.\n' +
      '- **Retropharyngeal and parapharyngeal abscess.** These are the two the lecture names and the ones with real consequences.\n\n' +
      '**Bezold’s abscess is the link, and it is why an ear disease can present as a throat problem.** *L4) PHARYNGEAL SUPPURATIONS.pdf* lists *"middle ear infections with bony destruction of the mastoid tip (Bezold’s abscess)"* among the causes of a **parapharyngeal abscess**. Pus escapes **inferiorly** through the mastoid tip, tracks along the **sternomastoid** sheath into the deep neck, and the patient presents with a **tender neck swelling, fever and odynophagia**.\n\n' +
      '**The clinical warning that follows from that:** once the pus is in the neck, **the mastoid tenderness that would have made the diagnosis may be gone.** A deep neck abscess with a history of ear discharge is an otological problem until the ear has been examined.\n\n' +
      '**Citelli’s abscess** is the same inferior escape through the **medial** wall of the mastoid tip, tracking along the **posterior belly of digastric** into the posterior triangle. Bezold and Citelli differ only in which wall of the tip the pus breaks through, and therefore in which muscle plane it follows *(both abscesses are named in the bank but on no cached slide — not taken from the course material)*.\n\n' +
      '**Note the classification point the bank exploits:** these neck abscesses are **extracranial**, not cranial and not intracranial, because the infection has escaped into the **soft tissues of the neck**. That is what makes **Bezold’s abscess** a keyed wrong answer in the *"which is an intracranial complication"* question.',
    qs: []
  },

  /* ---------------------------------------------------------------- 25 */
  {
    id: 'csom-25', w: 'must',
    h: 'Revision table — naming the complication from one clinical sign',
    body: '**This is the single most useful page in the chapter for the exam**, because the bank’s commonest question shape is a discharging ear plus **one** new finding, and a demand for the name of the complication.\n\n' +
      '**Work through it in the order the disease travels.** Signs that are **local and behind the ear** mean the infection is still in bone (cranial). Signs that are **systemic with rigors** mean it is in a venous sinus. Signs that are **diffuse and meningeal** mean it has crossed the dura. Signs that are **focal and neurological** mean it is in brain. Signs in the **eye** mean the petrous apex. Signs in the **neck** mean it has escaped downwards.\n\n' +
      '**Two pairs are deliberately printed as near-identical vignettes and are worth memorising as pairs:**\n\n' +
      '- **Vomiting** (raised intracranial pressure -> brain abscess) versus **neck rigidity** (meningeal irritation -> meningitis), everything else the same.\n' +
      '- **Continuous fever with local mastoid signs** (mastoiditis) versus **intermittent fever with rigors** (lateral sinus thrombosis).\n\n' +
      '**And one sign trumps all of the above:** **pain**. Chronic suppurative otitis media does not hurt, so pain in a chronically discharging ear means either a superimposed acute otitis media or one of the complications below.',
    table: {
      head: ['New finding in a patient with a discharging ear', 'Complication'],
      rows: [
        ['Fever, **increasing** earache, mastoid tenderness and redness, profuse discharge with a positive **reservoir sign**, sagging canal wall', '**Acute mastoiditis** (cranial — and the commonest of all)'],
        ['Fluctuant post-auricular swelling, auricle pushed **out and down**, sulcus obliterated', '**Mastoid (subperiosteal) abscess** — operate'],
        ['Tender swelling in the **upper neck** under sternomastoid; odynophagia', '**Bezold’s abscess** -> parapharyngeal abscess (extracranial)'],
        ['**Retro-orbital pain + diplopia** with a convergent squint', '**Petrositis — Gradenigo’s triad** (cranial, medial spread)'],
        ['**Severe vertigo + sensorineural hearing loss**, nystagmus', '**Labyrinthitis** (cranial). Vertigo on tragal pressure = **fistula**'],
        ['Sudden **facial weakness** on the same side, forehead involved', '**Facial paralysis** — erosion of the fallopian canal (cranial, anterior spread)'],
        ['**Headache, fever, neck rigidity**, positive Kernig and Brudzinski, **no focal signs**', '**Meningitis** (intracranial)'],
        ['Headache, fever, **vomiting, drowsiness**, bradycardia — later **hemiparesis and hemianopia**', '**Temporal lobe abscess** (intracranial, superior spread)'],
        ['Ataxia, nystagmus, past-pointing, incoordination', '**Cerebellar abscess** (intracranial, posterior spread)'],
        ['**Intermittent / swinging fever WITH RIGORS**', '**Lateral (sigmoid) sinus thrombophlebitis** (intracranial, posterior spread)'],
        ['**PULSATING** discharge through a marginal perforation', 'Dura exposed / **extradural abscess** — the lighthouse sign'],
        ['**Pain**, in an ear that has discharged painlessly for years', 'A superimposed **acute otitis media**, or **any** complication above. CSOM is not painful']
      ]
    },
    qs: []
  },

  /* ---------------------------------------------------------------- 26 */
  {
    id: 'csom-26', w: 'high',
    h: 'The named signs and eponyms, collected',
    body: '**Eponyms are what multiple-choice papers are built from**, and this chapter carries more of them than any other in the ear syllabus. Several appear only as *distractors* — which means you must know what they actually belong to in order to reject them.\n\n' +
      '**Only two of these are printed in the cached lectures:** **Gradenigo’s syndrome/triad** and the **reservoir sign**. **Everything else in the table is not taken from the course material**, though the bank asks several of them directly and Bezold’s abscess is named in the pharyngeal suppurations lecture as a cause of parapharyngeal abscess.\n\n' +
      '**The two that are most often confused with Gradenigo’s, because both are triads and both are ENT:** **Trotter’s triad** is **nasopharyngeal carcinoma** — a malignancy, not an infection — and **Pott’s puffy tumour** is **frontal sinusitis**, not ear disease at all.',
    table: {
      head: ['Name', 'What it is', 'What it belongs to'],
      rows: [
        ['**Gradenigo’s triad**', 'Otorrhoea + retro-orbital pain + diplopia', '**Petrositis** *(the only eponym printed in the lecture)*'],
        ['**Reservoir sign**', 'Discharge re-accumulates as fast as the canal is mopped dry', '**Acute mastoiditis** *(defined verbatim in the lecture)*'],
        ['**Griesinger’s sign**', 'Oedema and tenderness over the mastoid emissary vein', '**Lateral sinus thrombosis**'],
        ['**Tobey-Ayer test**', 'CSF pressure rises on compressing the **normal** jugular vein only', '**Lateral sinus thrombosis**'],
        ['**Bezold’s abscess**', 'Pus through the mastoid tip along **sternomastoid**', 'Extracranial spread; can present as a **parapharyngeal abscess**'],
        ['**Citelli’s abscess**', 'Pus through the medial wall of the tip along the **posterior belly of digastric**', 'Extracranial spread'],
        ['**Lighthouse / pulsating sign**', 'Discharge pulsating in time with the arterial pulse', 'Dura exposed — an **intracranial** complication (extradural abscess)'],
        ['**Fistula sign**', 'Vertigo and nystagmus on pressing the tragus', '**Labyrinthine fistula** in cholesteatoma'],
        ['**Tragus sign**', 'Sharp pain on pressing the tragus', '**Furunculosis / otitis externa** — NOT mastoiditis'],
        ['**Trotter’s triad**', 'Conductive deafness + immobile soft palate + trigeminal neuralgia (V3)', '**Nasopharyngeal carcinoma** — a distractor here'],
        ['**Pott’s puffy tumour**', 'Subperiosteal abscess over the frontal bone', '**Frontal sinusitis** — a distractor here'],
        ['**Meckel’s cave / Dorello’s canal**', 'The trigeminal ganglion, and the abducent nerve, at the petrous apex', 'The anatomy behind **Gradenigo’s**']
      ]
    },
    qs: []
  },

  /* ---------------------------------------------------------------- 27 */
  {
    id: 'csom-27', w: 'high',
    h: 'Putting it together — approaching a discharging ear',
    body: '**Everything in this chapter reduces to one clinical sequence.** Run it in order and you will not miss the ear that needs an operation.\n\n' +
      '**The two questions that decide everything are: does it smell, and is the annulus intact?** The first is answered at the bedside without instruments; the second needs the canal cleaned and the **whole** drum inspected — **especially the attic**, which is where primary acquired cholesteatoma hides behind a crust while the pars tensa looks normal.\n\n' +
      '**Then look for the complication.** Chronic suppurative otitis media is painless and afebrile. **Pain, fever, vertigo, facial weakness, headache, vomiting, drowsiness, rigors or double vision are all abnormal in this disease**, and each of them names a specific complication (see the revision table two sections above).',
    flow: {
      title: 'Approach to the chronically discharging ear',
      steps: [
        { k: 'step', t: 'History: how long, continuous or intermittent, profuse or scanty, and does it SMELL?', n: 'Four adjectives are close to a diagnosis on their own' },
        { k: 'decision', t: 'Is the discharge FOETID, scanty, purulent and continuous?', yes: 'Osteitis: suspect UNSAFE attico-antral disease with cholesteatoma', no: 'Profuse, mucopurulent, odourless and intermittent suggests SAFE tubo-tympanic disease' },
        { k: 'step', t: 'Clean the canal and examine the WHOLE drum, especially the attic', n: 'A central perforation with an intact rim of drum all round = safe. An attic or marginal defect, crusting, keratin debris or red fleshy granulations = unsafe' },
        { k: 'alert', t: 'Any PAIN, vertigo, facial weakness, headache, fever, vomiting, drowsiness or rigors?', n: 'CSOM is NOT a painful condition. Any of these means a complication until proved otherwise: image and refer urgently' },
        { k: 'step', t: 'Tuning forks and pure tone audiogram', n: 'A conductive loss is expected. A sensorineural or MIXED loss means the labyrinth has been breached' },
        { k: 'step', t: 'Imaging: plain mastoid X-ray in the syllabus; HRCT of the temporal bone in practice', n: 'Cellular mastoid = safe. Acellular mastoid PLUS a filling defect = cholesteatoma. A non-anatomical irregular cavity with bone sequestra is diagnostic' },
        { k: 'decision', t: 'Is there a cholesteatoma?', yes: 'ALWAYS SURGICAL: tympano-mastoidectomy. Make the ear SAFE first, DRY second, HEARING last', no: 'Medical treatment, aural toilet, water precautions, treat the nose; then myringoplasty, or tympanoplasty if the ossicles are eroded' },
        { k: 'alert', t: 'Bilateral disease: operate the DANGEROUS ear first, not the deafer one', n: 'An attic perforation with offensive discharge and a 20 dB gap outranks a large central perforation with a 45 dB gap' }
      ]
    },
    qs: []
  },

  /* ---------------------------------------------------------------- 28 */
  {
    id: 'csom-28', w: 'know',
    h: 'What these notes deliberately leave out',
    body: '**Recorded so that a gap is a decision rather than an accident**, as the project’s rules require.\n\n' +
      '- **Drug names, doses and durations.** The lecture says *"antibiotherapy according to culture and sensitivity"* and nothing more. No antibiotic, dose or course length is stated anywhere in the cached ENT material for CSOM, and none has been invented here. The one duration the material does give — **2 to 4 weeks** of adequate medical treatment before declaring failure in acute mastoiditis — is kept, because Grade Gain prints it.\n' +
      '- **Operative technique.** Surgical steps, approaches, canal-wall-up versus canal-wall-down reconstruction, graft materials beyond tragal perichondrium, and second-look surgery are all omitted. The bank asks *which* operation and *why*, never *how*.\n' +
      '- **Epidemiology.** Incidence and prevalence figures for CSOM and cholesteatoma have no bearing on any answer and are not stated in the material.\n' +
      '- **Molecular mechanism.** Which proteolytic enzymes, which cytokines, and the biology of keratinocyte migration all go deeper than the material goes. The lecture says *"proteolytic enzymes"* and that is the level at which it is examined.\n' +
      '- **Microbiology in detail.** The lecture gives only *"Gram-negative organisms"* for unsafe disease; the bank’s cram sheet adds *Pseudomonas, Proteus, Klebsiella*, and both are recorded above. Anaerobic speciation, sensitivity patterns and biofilm are not covered.\n' +
      '- **Tuberculous and other specific chronic otitis media.** Multiple perforations, painless profuse discharge and pale granulations in tuberculous otitis media are a real entity but appear nowhere in the cached lectures and in none of the 93 questions.\n' +
      '- **Adhesive otitis media, tympanosclerosis and retraction pocket staging** are named here only where a question uses them as distractors; they are the business of the AOM and effusion chapter.\n' +
      '- **Otitic hydrocephalus** and **cavernous sinus thrombosis** are mentioned in a single line each; neither is on any slide nor in any question in this chapter.\n\n' +
      '**Which pass this was written in.** These notes were written in the **theory-first sprint of August 2026**, while three of the four ENT question banks were still being transcribed. **All 93 questions that existed in this chapter on 2026-08-13 are linked in the sections above.** When the House bank and the remainder of Grade Gain close, this chapter must be re-checked against its new questions and patched — that reconciliation pass is mandatory and is recorded in the project brief.',
    qs: []
  }

  ]
}

};
