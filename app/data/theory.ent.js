/* ENT theory, keyed by chapter id.
   Written in Phase 4 from lecture slides + questions + book. See CLAUDE.md. */
var T_ENT = {
  "ent-csom": {
    "intro": "This chapter is examined by **discrimination, not by recall** — and almost every question is one of five shapes.\n\n- **Safe or unsafe?** The single most repeated discrimination in the whole ENT paper. You are given a discharge (smell, amount, pattern), a perforation (central, marginal, attic) or a photograph, and asked to name the type, the perforation, the X-ray, the organism or the treatment. Get the *four adjectives of the discharge* and the *annulus* and roughly a third of this chapter answers itself.\n- **\"All of the following EXCEPT.\"** One line in seven across the bank is a negative stem, and this chapter is full of them: all true about unsafe CSOM except, about tubotympanic CSOM except, about acute mastoiditis except, about Gradenigo except. **You must know why every wrong option is wrong**, not just which one is right.\n- **Name the complication from one clinical sign.** Rigors -> lateral sinus. Neck rigidity -> meningitis. Vomiting and drowsiness -> raised pressure, brain abscess. Diplopia -> petrous apex. Vertigo -> labyrinth. The bank prints near-identical vignettes that differ by **one word**, deliberately (endpoint Cases 17 and 23 differ only in *vomiting* versus *neck rigidity*).\n- **Gradenigo, asked from every angle.** Eighteen of the questions here are about petrositis: which complication gives the triad, which nerve gives the diplopia, which muscle, which nerve gives the pain, what the triad is, where the infection spread, what causes the discharge. It is the most over-tested topic in the chapter and the examiner’s cram sheet lists it three times.\n- **Priority and sequence.** Which aim of surgery comes first; which ear is operated first; is treatment medical or surgical. The answer is always the same ranking: **safe, then dry, then hearing**.\n\n**Two traps the bank sets repeatedly.** First, a Grade Gain option list that ends in *\"all of the above\"* or *\"b & c\"* — reading only as far as option b loses the mark. Second, an audiogram or a \"most serious\" option planted to pull you away from the danger: the deafer ear is not the one you operate first, and cholesteatoma is not the cause of pain.\n\n**One flat statement to carry into the exam:** *chronic suppurative otitis media is not a painful condition.* Pain in a chronically discharging ear is a complication until proved otherwise.",
    "sections": [
      {
        "id": "csom-1",
        "w": "must",
        "h": "What CSOM is, and the two types you must separate",
        "body": "**Definition, verbatim from the lecture** (*L16) Chronic otitis media.pdf*):\n\n> Chronic suppurative otitis media is inflammatory change of the **mucoperiosteal lining of the middle ear cleft**, of **insidious onset and protracted course**, characterised by the development of **irreversible tissue pathology**.\n\nThree phrases in that sentence are examinable in their own right. **Middle ear cleft** means the whole air-containing space — Eustachian tube, tympanic cavity, aditus, antrum and mastoid air cells — not just the space behind the drum; that is why mastoid disease is part of the same illness rather than a separate one. **Insidious and protracted** is what separates it from acute otitis media, which is a short, painful, febrile episode. **Irreversible tissue pathology** is why it does not simply resolve: a perforation that will not close, a cholesteatoma that keeps growing, ossicles that have been eaten away.\n\n**The lecture then splits it in two, and this division is the spine of the entire chapter:**\n\n- **Safe type — tubo-tympanic.** The disease is a **mucositis**: inflammation of living middle ear mucosa, reached through the Eustachian tube. No bone is destroyed.\n- **Unsafe type — attico-antral.** The disease is an **osteitis**: bone is being dissolved, by a **cholesteatoma**. This is the type that produces the complications.\n\n**\"Safe\" is a technical word, not a reassurance.** It means the annulus of the drum is intact, so squamous epithelium cannot enter the middle ear, so cholesteatoma cannot form, so bone is not eroded, so the complications that follow bone erosion cannot happen by that route. It does **not** mean the ear needs no treatment: untreated safe disease still gives a permanently discharging ear and a conductive hearing loss.\n\n**Learn the table below as a pair of columns, not as fourteen separate facts.** Every line on the left follows from *mucositis* and every line on the right follows from *osteitis*, which is exactly how *L17,18) Otorrhea and otalgia.pdf* labels its own two columns. Roughly a third of this chapter’s questions are answered by reading one cell out of it.",
        "table": {
          "head": [
            "",
            "SAFE — tubo-tympanic (mucositis)",
            "UNSAFE — attico-antral (osteitis)"
          ],
          "rows": [
            [
              "Pathology",
              "Inflammation of **living mucosa** of the middle ear cleft",
              "**Osteitis** — bone eroded by **cholesteatoma**"
            ],
            [
              "Otorrhoea — character",
              "**Mucopurulent**",
              "**Purulent** (pure pus)"
            ],
            [
              "Otorrhoea — amount",
              "**Profuse**",
              "**Scanty**"
            ],
            [
              "Otorrhoea — pattern",
              "**Intermittent** — flares with a cold or after water",
              "**Continuous**"
            ],
            [
              "Otorrhoea — smell",
              "**Odourless**",
              "**Foetid**"
            ],
            [
              "Deafness",
              "Mild to moderate, **conductive**",
              "Moderate to severe, **conductive OR mixed**"
            ],
            [
              "Pain",
              "None — *CSOM is not a painful condition*",
              "None either, until a complication appears"
            ],
            [
              "Perforation",
              "**Central, in the pars tensa**",
              "**Attic or marginal**"
            ],
            [
              "Granulations",
              "**Absent**",
              "**Common** — red, fleshy, usually posterosuperior"
            ],
            [
              "Cholesteatoma",
              "**Absent**",
              "**Present** — attic or posterosuperior"
            ],
            [
              "Mastoid X-ray",
              "**Cellular** mastoid",
              "**Acellular** mastoid **with a filling defect** (cholesteatoma shadow)"
            ],
            [
              "Culture and sensitivity",
              "The lecture states none",
              "**Gram-negative** organisms"
            ],
            [
              "Complications",
              "Rare — hence *safe*",
              "This is the type that produces them — hence *unsafe*"
            ],
            [
              "Treatment",
              "Medical; cautery of margins; **myringoplasty**; tympanoplasty",
              "**ALWAYS SURGICAL** — tympano-mastoidectomy"
            ]
          ]
        },
        "qs": [
          "entep-ear-199",
          "entep-ear-232",
          "entqb-ear4-110",
          "entep-case-12",
          "entep-case-15"
        ]
      },
      {
        "id": "csom-2",
        "w": "must",
        "h": "Reading the discharge — the four adjectives, and why mucus matters",
        "body": "**The single most useful sentence in this chapter comes from *L17,18) Otorrhea and otalgia.pdf*:**\n\n> There are **no mucous glands in the external auditory canal**. Mucus always comes from the middle ear.\n\nFrom that one anatomical fact, everything follows:\n\n- A discharge containing **mucus** proves two things at once — the **site** is the middle ear, and the **mucosa is alive and secreting**. So a mucoid or mucopurulent discharge means either **safe tubo-tympanic CSOM** or **acute otitis media after the drum has perforated**. It can never be otitis externa.\n- A discharge that is **pure pus** has no mucosal contribution. Either the mucosa has been **destroyed** (acute necrotising otitis media, where the promontory is laid bare), or the source is not mucosa at all but a **keratin sac and dead bone** (cholesteatoma), or the disease is in the **canal** (otitis externa).\n\n**Now add the other three adjectives, and each one is a switch:**\n\n- **Smell.** Fetor comes from **osteitis** — anaerobes growing on dead bone. It is the single most useful finding in a discharging ear, because it means bone is being destroyed and therefore that the ear is unsafe. *An odourless discharge is the most reassuring negative in otology.*\n- **Amount.** A whole middle ear cleft of secreting mucosa makes a lot of discharge, so safe disease is **profuse**. A small pocket of keratin and granulation makes very little, so unsafe disease is **scanty**.\n- **Pattern.** Safe disease is reached through the **Eustachian tube**, so it flares with every upper respiratory infection or after water enters, and dries up in between — **intermittent**. Unsafe disease is generated by a cholesteatoma that never stops growing, so it is **continuous**.\n\n**The examiner uses those four adjectives as a complete question.** *\"Profuse, mucopurulent, odourless, intermittent\"* is a full diagnosis of safe tubo-tympanic disease before you have looked at the ear; *\"scanty, purulent, foetid, continuous\"* is a full diagnosis of cholesteatoma. Several questions in this chapter give nothing else.\n\n**The wider classification of otorrhoea** in the same lecture is worth having whole, because the bank builds option lists out of it — *watery, mucoid, purulent, bloody, and combinations*. A **clear watery** discharge in a head-injured patient is **CSF**, confirmed by the **halo sign**, **beta-2 transferrin** or **beta trace protein**; **bloody** otorrhoea is **trauma or tumour** (skull base fracture, minor canal trauma, glomus tumour, carcinoma of the canal). Those two are covered properly in the Otorrhoea chapter, but they appear here as distractors.",
        "table": {
          "head": [
            "Type of discharge",
            "Causes",
            "The point"
          ],
          "rows": [
            [
              "**Watery / clear**",
              "CSF otorrhoea — skull base fracture; after acoustic tumour removal",
              "Confirm with the **halo sign**, **beta-2 transferrin**, **beta trace protein**"
            ],
            [
              "**Mucoid / mucopurulent**",
              "Safe (tubo-tympanic) CSOM; acute otitis media **after** perforation",
              "Mucus proves a **middle ear** source with **living mucosa** — the canal has no mucous glands"
            ],
            [
              "**Pure purulent**",
              "Unsafe (attico-antral) CSOM with cholesteatoma; acute **necrotising** otitis media; otitis externa",
              "No mucus = mucosa destroyed, or the source is a keratin sac and dead bone, or the disease is in the canal"
            ],
            [
              "**Bloody**",
              "Trauma — skull base fracture, minor canal trauma. Tumour — **glomus**, carcinoma of the EAC",
              "Blood from an ear is trauma or tumour until proved otherwise"
            ],
            [
              "**No discharge at all**",
              "Otitis media with effusion; Eustachian tube dysfunction",
              "The drum is **intact** — fluid never reaches the canal. The easiest distractor to eliminate"
            ]
          ]
        },
        "qs": [
          "entep-ear-72",
          "entep-ear-45",
          "entep-ear-157",
          "entep-enr-10",
          "entqb-ear4-107",
          "entqb-ear4-109",
          "entqb-ear4-118",
          "entqb-ear6-168",
          "entqb-ear6-169"
        ]
      },
      {
        "id": "csom-3",
        "w": "must",
        "h": "The perforation — central, marginal, attic, and why the annulus decides everything",
        "body": "**\"Central\" is a statement about the ANNULUS, not about the middle of the drum.** This is the highest-yield single idea in the chapter, and it is where most marks are lost.\n\n- A perforation is **central** when a rim of tympanic membrane survives **all the way round** it, so the fibrous **annulus is intact**. A central perforation can be very large — the bank prints one described as a *\"large kidney-shaped perforation\"* with a 45 dB gap — and still be central, and still be safe.\n- A perforation is **marginal** when the defect **reaches and destroys part of the annulus**. Its usual site is **posterosuperior**.\n- An **attic** perforation is one in the **pars flaccida**, the slack triangle above the lateral process of the malleus.\n\n**Why the annulus is the whole story.** *L22) Anatomy of  Ear Undergraduate.pdf* gives the layers: the **pars tensa** is *skin + fibrous + mucous membrane*, and the **pars flaccida** is *skin + mucous membrane* only — it lacks the middle fibrous layer, which is why it is flaccid. Where the annular rim is intact, canal skin has no route inwards and the disease stays mucosal. Where the annulus is breached, or where the flaccid attic retracts, **squamous epithelium migrates into the middle ear** and becomes a cholesteatoma. **Annulus intact = safe. Annulus breached = unsafe.** That is the whole safe/unsafe distinction in one sentence.\n\n**The shape of the hole tells you the mechanism** — a smaller point but the bank asks it. An **infective** perforation is *melted* out by inflammation and is **round, oval or kidney-shaped with a smooth edge**. A **traumatic** perforation is *torn* and is **triangular or slit-like with ragged edges**. A **total or subtotal** perforation, the whole pars tensa gone, is not ordinary chronic disease at all — it follows **acute necrotising otitis media**, in which streptococcal toxins thrombose the drum’s vessels and the central watershed sloughs.\n\n**When the two signs disagree, believe the smell and look again.** A \"central\" perforation with a foul discharge is a contradiction; if the ear stinks, there is a breach of the annulus somewhere — look in the **attic** and the **posterosuperior quadrant**, because that is where the cholesteatoma will be.",
        "table": {
          "head": [
            "Perforation",
            "Where",
            "What it means"
          ],
          "rows": [
            [
              "**Central**",
              "Pars tensa, rim of drum all round — **annulus intact**",
              "**Safe**, tubo-tympanic. Skin cannot migrate in"
            ],
            [
              "**Marginal**",
              "Reaches and destroys part of the annulus, usually **posterosuperior**",
              "**Unsafe**. The classic site for cholesteatoma"
            ],
            [
              "**Attic**",
              "Pars flaccida, above the lateral process of the malleus",
              "**Unsafe**. Hallmark of **primary acquired** cholesteatoma"
            ],
            [
              "**Total / subtotal**",
              "The whole pars tensa gone",
              "Not ordinary chronic disease — follows **acute necrotising otitis media**"
            ],
            [
              "Round, oval or **kidney-shaped**, smooth edge",
              "Pars tensa",
              "**Infective** perforation — melted out by inflammation"
            ],
            [
              "**Triangular or slit-like**, ragged edge",
              "Anywhere",
              "**Traumatic** perforation — torn"
            ]
          ]
        },
        "qs": [
          "entep-ear-6",
          "entep-ear-71",
          "entep-ear-92",
          "entep-ear-200",
          "entqb-ear4-91",
          "entqb-ear4-100"
        ]
      },
      {
        "id": "csom-4",
        "w": "must",
        "h": "Safe (tubo-tympanic) CSOM in full",
        "body": "**Symptoms** — *L16) Chronic otitis media.pdf*, quoted:\n\n> **Otorrhoea:** muco-purulent, odourless, profuse and intermittent.\n> **Deafness:** mild to moderate; **conductive** hearing loss.\n\n**Otoscopy:** a **central perforation in the pars tensa**; **cholesteatoma and granulations absent**.\n\n**Investigations:** the mastoid X-ray shows a **cellular mastoid**. That finding is worth understanding rather than memorising. Mastoid pneumatisation develops through childhood and is **arrested by early, repeated middle ear inflammation** — so a well-pneumatised (cellular) mastoid is evidence that the ear was healthy while the mastoid was forming. An acellular, sclerotic mastoid means long-standing disease from early life, and is the unsafe pattern.\n\n**A note on organisms.** The lecture prints *Gram-negative organisms* only on the **unsafe** side of the page. That is what makes *\"caused by Gram-negative bacteria\"* the false statement about tubo-tympanic disease. In real life *Pseudomonas* and other Gram-negatives are cultured from safe discharging ears too, especially after water exposure — the **examinable** association is with unsafe disease, because that is where the material puts it and because anaerobes and Gram-negatives in a keratin sac are what produce the fetor *(this qualification is not taken from the course material)*.\n\n**Hearing.** A negative Rinne (bone conduction better than air) with **Weber lateralising to the affected ear** localises a conductive loss to that side — which is how the bank asks you to name which ear, before you think about the disease at all.\n\n**Natural history if untreated.** Repeated attacks of mucopurulent discharge, and a conductive loss proportional to the size of the perforation and any ossicular erosion. **Not** progressive total deafness, **not** facial palsy, **not** intracranial spread, **not** septicaemia — all of those belong to the unsafe type. This is exactly the question the bank asks about a five-year history with a central kidney-shaped perforation.\n\n**One printed key in this chapter is defective and you should know it.** Model Final Exam 6 asks *\"all may be seen in the tubotympanic type EXCEPT\"* and keys **\"profuse odourless otorrhoea\"** — which is the lecture’s own description of that type. The true exception in that option list is **\"high incidence of complications\"**, and the same bank keys it correctly elsewhere. **Answer \"high incidence of complications\" if you meet a full option set;** the entry records the printed key as the bank prints it, per the project’s standing rule.",
        "flow": {
          "title": "Treatment of safe (tubo-tympanic) CSOM",
          "steps": [
            {
              "k": "step",
              "t": "Aural toilet and strict water precautions",
              "n": "Keep the ear dry. The discharge flares after water entry or a cold"
            },
            {
              "k": "step",
              "t": "Medical treatment: antibiotherapy according to culture and sensitivity",
              "n": "The lecture names C&S explicitly. Topical drops with systemic cover for an acute flare"
            },
            {
              "k": "step",
              "t": "Treat the source in the nose and nasopharynx",
              "n": "Safe disease is reached through the Eustachian tube, so every cold reseeds the middle ear (not taken from the course material)"
            },
            {
              "k": "step",
              "t": "Chemical cautery of the perforation margins",
              "n": "For a small dry perforation, to encourage the edges to heal"
            },
            {
              "k": "decision",
              "t": "Ear dry — are the ossicles intact?",
              "yes": "Myringoplasty: graft the perforation, usually with tragal perichondrium",
              "no": "Tympanoplasty: myringoplasty PLUS ossiculoplasty, done if the ossicles are damaged"
            },
            {
              "k": "alert",
              "t": "Safe does NOT mean no treatment needed",
              "n": "Untreated, safe disease still gives a permanently discharging ear and a conductive hearing loss. What it does not do is erode bone"
            }
          ]
        },
        "qs": [
          "entep-ear-59",
          "entep-ear-205",
          "entep-ear-214",
          "entep-ear-248",
          "entqb-ear4-111",
          "entep-mfe6-1"
        ]
      },
      {
        "id": "csom-5",
        "w": "must",
        "h": "Cholesteatoma — what it is, and the four things it is not",
        "body": "**The definition, verbatim, and worth learning word for word** (*L16) Chronic otitis media.pdf*):\n\n> Cholesteatoma is a **destructive and expanding keratinizing stratified squamous epithelium** (containing **cholesterol crystals** and **proteolytic enzymes**), in the **middle ear and/or mastoid process**.\n\nThe lecture summarises the pathology in four words — **\"skin in the middle ear\"** — and illustrates it as **a sac with a narrow neck, lined by skin**. That picture explains the whole disease. Skin sheds keratin; a sac with a narrow neck cannot clear what it sheds; the trapped keratin accumulates, the sac enlarges, and the **proteolytic enzymes** dissolve whatever bone lies in the way.\n\n**Four errors the bank plants, each instructive:**\n\n- **\"It is a benign tumour of the middle ear.\"** It is **not a neoplasm at all** — there is no clonal proliferation of abnormal cells. It behaves like a tumour (it expands, destroys and recurs if incompletely removed) but it is **normal skin in an abnormal place**. The name is doubly misleading: it is not a *-oma*, and cholesterol crystals are an incidental content rather than its defining feature.\n- **\"It may metastasise\"** / **\"it is malignant.\"** It cannot. Its danger is entirely **local**, and entirely mechanical-enzymatic.\n- **\"It can be left untreated\"** or **\"it is treated medically.\"** No drug removes misplaced keratinising epithelium, and nothing arrests it. Antibiotics may dry the discharge temporarily and thereby **disguise** the problem, which is worse than doing nothing. The lecture’s treatment line for this type is three words: **always surgical**.\n- **\"Congenital cholesteatoma is an autosomal inherited trait.\"** *Congenital* here means **present from birth**, not **inherited**. There is no Mendelian pattern.\n\n**What makes it dangerous is that it is silent.** Cholesteatoma is painless. It erodes bone slowly and without symptoms, so the ear that most urgently needs surgery is often the one that troubles the patient least — until it has destroyed the ossicles, the labyrinth, the facial canal, the tegmen or the sinus plate.\n\n**And it defines the unsafe type.** *\"Cholesteatoma is most commonly associated with…\"* is answered **unsafe (attico-antral) CSOM** every time. Marginal or attic perforation, bone erosion, and the risk of intracranial complications are the same fact described from four directions.",
        "table": {
          "head": [
            "Statement about cholesteatoma",
            "True?",
            "Why"
          ],
          "rows": [
            [
              "It consists of **keratinising stratified squamous epithelium**",
              "**True**",
              "The lecture’s own definition — skin in the middle ear"
            ],
            [
              "It contains **cholesterol crystals and proteolytic enzymes**",
              "**True**",
              "The enzymes are what dissolve bone"
            ],
            [
              "It may be complicated by an **extradural abscess**",
              "**True**",
              "It erodes the **tegmen tympani**; pus collects between bone and dura"
            ],
            [
              "It is a **benign tumour** of the middle ear",
              "**False**",
              "Not a neoplasm at all — normal skin in an abnormal place"
            ],
            [
              "It is **malignant** / may **metastasise**",
              "**False**",
              "Its danger is purely local"
            ],
            [
              "It may be **left untreated**",
              "**False**",
              "Erosion is what produces facial palsy, fistula, meningitis, brain abscess"
            ],
            [
              "It is **treated medically**",
              "**False**",
              "Treatment is **always surgical**. Antibiotics only mask it"
            ],
            [
              "**Congenital** cholesteatoma is an **inherited** trait",
              "**False**",
              "Congenital = **ectodermal cell rests**, present at birth, not inherited"
            ],
            [
              "**Primary acquired** cholesteatoma sits in the **hypotympanum**",
              "**False**",
              "It sits in the **attic (epitympanum)** — it is an attic retraction"
            ]
          ]
        },
        "qs": [
          "entep-ear-138",
          "entqb-ear4-119",
          "entep-mfe5-44"
        ]
      },
      {
        "id": "csom-6",
        "w": "must",
        "h": "How can the skin reach the middle ear? — the classification of cholesteatoma",
        "body": "**The lecture poses this as a question and answers it in four lines**, and the bank turns those four lines straight into a four-option list. Learn the categories with their mechanisms attached, because every distractor in this group is a *real* category under the *wrong* name.\n\n**Congenital** — *ectodermal cell rests in the middle ear.* Squamous epithelium left behind during embryological development. It presents as a **white pearl behind an intact drum** in a child with **no history of ear infection and no perforation**. That combination — white mass, intact drum, otherwise healthy ear — is the exam’s signature for it, and it is why the differential from a middle ear effusion (amber or dull, not pearly white) and from a glomus tumour (red, pulsatile, behind the drum) matters.\n\n**Acquired, primary** — *attic retraction cholesteatoma.* **\"Primary\" means no perforation came first.** The pars flaccida lacks the fibrous middle layer, so under chronic **negative middle ear pressure** it does not tear — it **retracts**, forming a pocket in the attic. A pocket with a narrow neck cannot shed its own keratin; the keratin accumulates; the pocket becomes a sac. This is the commonest cholesteatoma and the one most often missed, because the otoscopy is a **crusted or retracted attic with a normal-looking pars tensa** rather than a frank hole.\n\n**Acquired, secondary — migrational theory.** Canal epithelium **migrates inwards** through an existing **marginal** perforation. The epithelial route already existed; the disease simply used it.\n\n**Acquired, secondary — metaplastic theory.** Middle ear **mucosa undergoes squamous metaplasia** under chronic inflammation. No migration is needed; the lining changes in situ.\n\n**Two more mechanisms appear as distractors** and are worth naming: **implantation** of squamous epithelium after myringotomy or previous surgery (an iatrogenic secondary form), and cholesteatoma developing *in* a **traumatic** perforation *(both not taken from the course material)*.\n\n**What the classification does and does not change.** It explains the **otoscopy** — attic crust versus frank marginal perforation versus white pearl behind an intact drum — and it explains why primary disease is easy to miss. It changes **nothing** about treatment: all of them are destructive and expanding keratinising epithelium, and all of them are removed surgically.",
        "table": {
          "head": [
            "Category",
            "Mechanism (the lecture’s own words)",
            "How it presents"
          ],
          "rows": [
            [
              "**Congenital**",
              "**Ectodermal cell rests** in the middle ear",
              "A **white pearl behind an INTACT drum** in a child with no history of ear infection. Not inherited"
            ],
            [
              "**Acquired — PRIMARY**",
              "**Attic retraction cholesteatoma**",
              "A **crusted or retracted attic**; pars tensa often normal. No pre-existing perforation. Easily missed"
            ],
            [
              "**Acquired — secondary, migrational theory**",
              "Canal epithelium **migrates in through a perforation**",
              "A frank **marginal** perforation with skin creeping through it"
            ],
            [
              "**Acquired — secondary, metaplastic theory**",
              "Middle ear mucosa undergoes **squamous metaplasia**",
              "Chronic inflammation with squamous change; no migration route needed"
            ],
            [
              "*(distractor)* **Implantation**",
              "Epithelium implanted at **myringotomy** or previous surgery",
              "Iatrogenic; a secondary acquired form *(not taken from the course material)*"
            ]
          ]
        },
        "qs": [
          "entep-ear-35",
          "entep-mfe4-4",
          "entqb-ear4-114"
        ]
      },
      {
        "id": "csom-7",
        "w": "must",
        "h": "Unsafe (attico-antral) CSOM in full",
        "body": "**Symptoms** — *L16) Chronic otitis media.pdf*, quoted:\n\n> **Otorrhoea:** purulent, **foetid**, scanty and continuous.\n> **Deafness:** moderate to severe; **conductive or mixed**.\n\nAnd on the same slide, flat and unqualified: **\"ChSOM is not a painful condition.\"**\n\n**Otoscopy** — three findings, all in the same place:\n\n- **Perforation:** **attic, or marginal**.\n- **Granulations:** **common, red and fleshy, usually posterosuperior**. A granulation polyp emerging from the ear (an *aural polyp*) is this, and an aural polyp in a chronically discharging ear should be treated as cholesteatoma until proved otherwise.\n- **Cholesteatoma:** **attic or posterosuperior** — whitish, greasy keratin debris.\n\n**Investigations.** The X-ray line is the one most often asked, and it carries **two** findings that say **different** things — which is why the bank keys *\"b & c\"* and not either alone.\n\n**What is \"diagnostic\".** Read that word carefully when it appears in a stem. An **irregular, non-anatomical cavity containing bone sequestra** on imaging is diagnostic, because cholesteatoma expands by dissolving whatever bone is in its way, so the cavity it leaves **follows no normal anatomical boundary** and contains dead fragments of stranded bone. Nothing else does that. By contrast a **35 dB air-bone gap** occurs in glue ear, otosclerosis, a perforation or ossicular disease; ***Pseudomonas* and *Bacteroides*** colonise any chronically discharging ear; and an **offensive discharge** is the classic *pointer* to unsafe disease but is a symptom, not proof.\n\n**Treatment: always surgical.** The lecture gives the operation as an equation — **tympano-mastoidectomy = tympanoplasty + mastoidectomy**. Nothing less works, and each of the alternatives the bank offers actively harms: antibiotics dry the ear and hide the fetor while the sac grows; **myringoplasty grafts a lid over the disease and seals it inside**; tympanoplasty reconstructs hearing into an ear that still contains cholesteatoma.",
        "table": {
          "head": [
            "Investigation",
            "Safe (tubo-tympanic)",
            "Unsafe (attico-antral)"
          ],
          "rows": [
            [
              "**Plain mastoid X-ray**",
              "**Cellular** mastoid",
              "**Acellular (sclerotic)** mastoid **AND a filling defect** — the cholesteatoma shadow"
            ],
            [
              "What the acellular mastoid means",
              "Pneumatisation completed — the ear was healthy while the mastoid formed",
              "Pneumatisation **arrested in early childhood** by repeated inflammation. A marker of **DURATION**"
            ],
            [
              "What the filling defect means",
              "—",
              "A **rounded cavity with a sclerotic margin** where bone has been eaten. A marker of **DESTRUCTION** — the disease itself, made visible"
            ],
            [
              "**Culture and sensitivity**",
              "The lecture states none",
              "**Gram-negative organisms.** The bank’s own cram sheet names **Pseudomonas, Proteus, Klebsiella**"
            ],
            [
              "**HRCT of the temporal bone**",
              "Not required",
              "Modern practice: extent of disease, ossicles, tegmen, sinus plate, fallopian canal *(not taken from the course material)*"
            ],
            [
              "**Audiogram**",
              "Mild-moderate conductive",
              "Moderate-severe conductive; **mixed** once the labyrinth is breached"
            ],
            [
              "**\"Diagnostic\" imaging finding**",
              "—",
              "**Irregular, NON-ANATOMICAL cavity with bone sequestra**. Not the air-bone gap, not the culture, not the smell"
            ]
          ]
        },
        "qs": [
          "entep-ear-16",
          "entep-ear-144",
          "entep-ear-184",
          "entqb-ear4-112",
          "entqb-ear6-170"
        ]
      },
      {
        "id": "csom-8",
        "w": "high",
        "h": "Hearing loss in CSOM — the site decides the type",
        "body": "**One rule resolves every question in this group: external canal or middle ear -> CONDUCTIVE; cochlea, labyrinth or VIII nerve -> SENSORINEURAL.** The bank builds a whole question by attaching the *wrong* type of loss to three real mechanisms.\n\n**Why safe and unsafe differ in degree.** The lecture grades safe disease as *\"mild to moderate; conductive\"* and unsafe disease as *\"moderate to severe; **conductive or mixed**\"*. The extra severity comes from **ossicular erosion**: cholesteatoma’s proteolytic enzymes dissolve bone, and the **long process of the incus** is the thinnest and most poorly perfused ossicle, so it goes first. Losing ossicular continuity gives a **large air-bone gap**, often 40 dB or more *(the incus detail and the figure are not taken from the course material)*.\n\n**Where the word \"mixed\" comes from.** The **lateral semicircular canal** is the part of the labyrinth lying closest to the attic, and it is the classic site of a **labyrinthine fistula**. Erode it and the inner ear is opened: a **sensorineural** component is added to the existing conductive loss, and the patient gets **vertigo**, often provoked by pressing on the tragus — a positive **fistula sign** *(the fistula sign is not taken from the course material)*.\n\n**The practical reading, and it is a genuine clinical rule:** a purely conductive loss in unsafe CSOM means the disease is still in the middle ear. **The moment the loss becomes mixed, or the patient reports vertigo, the labyrinth has been breached** — and vertigo in a cholesteatoma ear is an alarm, never a symptom to reassure.\n\n**One more discrimination the bank asks in the Gradenigo group:** the hearing loss accompanying petrositis is **conductive**, from the otitis media underneath it. Students expect a sensorineural loss from something so deep, and *\"associated with conductive hearing loss\"* is keyed as the **false** statement about Gradenigo’s precisely for that reason — hearing loss is **not part of the triad at all**.",
        "table": {
          "head": [
            "Mechanism",
            "Site",
            "Type of loss"
          ],
          "rows": [
            [
              "Perforation of the tympanic membrane",
              "Tympanic membrane",
              "**Conductive**"
            ],
            [
              "Restricted movement of the drum (retraction, tympanosclerosis, adhesions)",
              "Tympanic membrane",
              "**Conductive**"
            ],
            [
              "**Erosion of the ossicles** — long process of the incus first",
              "Middle ear",
              "**Conductive**, often a 40 dB or larger air-bone gap"
            ],
            [
              "**Erosion of the lateral semicircular canal** (labyrinthine fistula)",
              "**Inner ear**",
              "**SENSORINEURAL**, added to the existing conductive loss = a **MIXED** loss"
            ],
            [
              "Suppurative labyrinthitis",
              "Inner ear",
              "**Sensorineural**, with severe vertigo"
            ],
            [
              "The otitis media underlying **petrositis**",
              "Middle ear",
              "**Conductive** — and hearing loss is **not** part of Gradenigo’s triad"
            ]
          ]
        },
        "qs": [
          "entqb-ear4-108"
        ]
      },
      {
        "id": "csom-9",
        "w": "high",
        "h": "Pain in CSOM is a red flag, not a symptom",
        "body": "**The lecture states it flatly: \"ChSOM is not a painful condition.\"** Chronic disease has a perforation, so nothing is under pressure, and pain has no mechanism.\n\n**Therefore pain in a chronically discharging ear means one of two things**, and the bank prints both:\n\n- **An acute exacerbation** — a fresh **acute otitis media superimposed on the chronic disease**. Pus builds up faster than the perforation can drain it, and the ear hurts again.\n- **A complication** — mastoiditis, petrositis, an extradural or brain abscess, lateral sinus thrombophlebitis. Here the pain is the **first warning that the disease has left the middle ear cleft**.\n\n**Why cholesteatoma is the tempting wrong answer.** It is the most *serious* item in the option list and it is the definition of unsafe disease — but **it is painless**. A keratin sac erodes bone slowly and silently. Cholesteatoma causes pain only once it has produced a complication, at which point the answer is *the complication*, not the cholesteatoma.\n\n**Nor is \"severe ear pain present in all patients\" ever true of unsafe CSOM** — that is the keyed false statement in one of the endpoint questions here.\n\n**The other causes of otalgia in a middle ear context**, from *L17,18) Otorrhea and otalgia.pdf*, are worth having beside this: **acute suppurative otitis media before the drum perforates** (pressure), **complicated CSOM, e.g. acute mastoiditis**, and **tympanic plexus neuralgia** — in which the pain is abolished by intratympanic injection of xylocaine. Impacted wax and sinus infection, both offered as distractors, are not causes of pain *in CSOM*: wax muffles and obstructs, and sinus disease refers pain to the face and forehead, not into the middle ear cleft.\n\n**The instruction to carry into clinic:** *a chronically discharging ear that starts to hurt has changed. Re-examine it for a complication rather than issuing another course of drops.*",
        "qs": [
          "entqb-ear4-106"
        ]
      },
      {
        "id": "csom-10",
        "w": "must",
        "h": "Surgery — the ranked aims, and the six operations",
        "body": "**The aims of chronic ear surgery are RANKED, and the ranking is the answer to at least four questions in this chapter: SAFE first, DRY second, HEARING last.**\n\n- **Safe** means removing the disease that can kill — cholesteatoma eroding towards the labyrinth, the facial nerve, the sigmoid sinus and the meninges. A patient can live with a discharging ear or a hearing aid; they cannot live with a brain abscess.\n- **Dry** means an ear that no longer discharges.\n- **Hearing** comes last for a practical reason as well as a moral one: **rebuilding an ossicular chain into a cavity that still contains cholesteatoma simply buries the disease under a graft.** A surgeon will sacrifice hearing to clear disease — taking down the chain to reach the attic — and will never leave disease behind to preserve hearing.\n\n*(The lecture states that treatment of unsafe disease is \"always surgical\" and gives the tympano-mastoidectomy equation, but it does not print the aims as a ranked list; the ranking itself is not taken from the course material, although the bank tests it repeatedly.)*\n\n**Applying the ranking: which ear do you operate first?** Given a right ear with an **attic perforation and offensive discharge** but only a 20 dB gap, and a left ear with a **large kidney-shaped (central) perforation** and a 45 dB gap, the instinct is to treat the deafer ear. **That is exactly backwards.** Read the two ears for **danger**, not for hearing: the right ear has cholesteatoma and is at risk of facial palsy, fistula, meningitis and abscess; the left has safe disease that is deafer only because the hole is bigger, and a large hole is not a dangerous one. **Operate the right ear first.** Both ears are not operated at the same sitting in chronic ear surgery, and \"no surgery\" ignores active cholesteatoma.\n\n**The one operative detail the bank asks by name:** **obliteration of the Eustachian tube** is part of a **radical mastoidectomy**, and of nothing else in the list. The whole middle ear is exteriorised and the tube is closed off so that nasopharyngeal secretions cannot reflux into the open cavity; the price is total loss of hearing in that ear *(the individual operations are not described on any cached slide, which states only \"always surgical\" and the tympano-mastoidectomy equation — this section is not taken from the course material except where quoted)*.",
        "table": {
          "head": [
            "Operation",
            "What is done",
            "Drum and ossicles",
            "Hearing"
          ],
          "rows": [
            [
              "**Myringoplasty**",
              "Repair of the perforation alone, usually with **tragal perichondrium**",
              "Drum repaired",
              "Improved"
            ],
            [
              "**Tympanoplasty**",
              "Myringoplasty **+ ossiculoplasty**",
              "Drum repaired, chain reconstructed",
              "Improved"
            ],
            [
              "**Cortical (simple / complete) mastoidectomy**",
              "Exenteration of the **mastoid air cells only**",
              "**Untouched**",
              "Unchanged — this is the operation for an acute mastoid abscess"
            ],
            [
              "**Bondy’s operation**",
              "The cholesteatoma sac is **exteriorised**",
              "**Completely intact**",
              "Preserved — the most conservative open procedure"
            ],
            [
              "**Modified radical mastoidectomy**",
              "Attic and antrum exteriorised into the canal",
              "**Drum remnant and ossicles preserved**",
              "Preserved"
            ],
            [
              "**Radical mastoidectomy**",
              "Whole middle ear exteriorised; drum remnant, malleus and incus removed; **EUSTACHIAN TUBE OBLITERATED**",
              "Removed",
              "**Sacrificed** — for extensive or unresectable disease"
            ],
            [
              "**Tympano-mastoidectomy**",
              "The lecture’s own equation: **tympanoplasty + mastoidectomy** — the operation for unsafe CSOM",
              "Reconstructed after clearance",
              "Secondary to clearance"
            ]
          ]
        },
        "qs": [
          "entep-ear-43",
          "entep-ear-123",
          "entep-ear-136",
          "entep-ear-187",
          "entep-ear-243",
          "entqb-ear4-92"
        ]
      },
      {
        "id": "csom-11",
        "w": "must",
        "h": "Complications — definition, predisposing factors, and the pathways in",
        "body": "**Definition** (*L16) Chronic otitis media.pdf*):\n\n> Extension of the inflammatory process **beyond the confines of the middle ear cleft**.\n> **Mostly in the course of chronic suppurative otitis media of the unsafe type with cholesteatoma.**\n\nThat second line is the reason the two types have the names they do, and it is the premise behind roughly half the questions in this chapter.\n\n**Predisposing factors — three, and the lecture lists exactly three:**\n\n- **Virulent organisms.**\n- **Low resistance of the patient** — diabetes, immunosuppression, malnutrition, extremes of age.\n- **A preformed pathway.**\n\n**Pathways of infection.** Complications occur *\"when the normal defence barriers of the middle ear are overcome\"*, and the lecture separates two mechanisms:\n\n- **The commonest way is BONE EROSION BY A CHOLESTEATOMA.** If you remember one sentence about how complications happen, this is it.\n- **Preformed pathways** — four of them, named: **congenital dehiscences** (of the fallopian canal, the tegmen or the sinus plate), **fracture lines**, the **round window membrane**, and **dehiscences due to previous surgery**.\n\n**Why the anatomy makes this inevitable.** *L22) Anatomy of  Ear Undergraduate.pdf* gives the walls of a box whose every side abuts something that must not be infected: the **superior wall is the tegmen tympani**, a paper-thin plate with the **middle cranial fossa and temporal lobe** above it; the **posterior wall** carries the **aditus ad antrum** into the mastoid and the **vertical (mastoid) part of the facial nerve** in its bony canal; the **inferior wall** is a thin bony plate over the **internal jugular vein**; the **medial wall** separates the middle ear from the **labyrinth**; and immediately behind the mastoid air cells lies the **sigmoid sinus** on its sinus plate. *L16* draws the same relations: **superior — temporal lobe; posterior — cerebellum and sigmoid sinus; inferior — jugular bulb; anterior — carotid artery; medial — inner ear and facial nerve.**\n\n**So the middle ear is a small air-filled space surrounded on every side by dura, brain, great vessels, the facial nerve and the labyrinth, separated from all of them only by bone** — and cholesteatoma is a disease whose entire mechanism is dissolving bone. That is the whole of this topic in one sentence.",
        "qs": []
      },
      {
        "id": "csom-12",
        "w": "must",
        "h": "The three-tier classification of complications",
        "body": "**The lecture sorts every complication into three tiers, and a striking number of questions are simply a test of that sorting.** The grouping is not arbitrary — **it names the anatomical barrier the infection has crossed.**\n\n- **Cranial (intratemporal)** — the infection is **still inside bone**, within the temporal bone, outside the cranial cavity.\n- **Intracranial** — the **dura has been breached**; the infection is inside the cranial cavity.\n- **Extracranial** — the infection has **escaped into the soft tissues of the neck**.\n\n**Two facts from this list that the bank asks directly:**\n\n- **Acute mastoiditis and mastoid abscess are the MOST COMMON complication of otitis media** — and they are **cranial**, not intracranial.\n- **Labyrinthitis is CRANIAL**, not intracranial. The labyrinth sits in the petrous bone alongside the middle ear; infection reaching it has not crossed the dura. This is the keyed exception in the classic *\"all of the following are intracranial complications except\"* question.\n\n**A caution about the word \"extra-cranial\", because one endpoint question uses it loosely.** That question asks which is **not** an extra-cranial complication and keys **sigmoid sinus thrombosis** — correctly, because the sinus is inside the cranial cavity — while offering facial palsy, mastoid abscess, labyrinthitis and hearing loss as the alternatives. Under the lecture’s **three-way** scheme those four are *cranial*, not *extracranial*; the question is using \"extra-cranial\" in the looser sense of **\"outside the cranial cavity\"**. Under either reading, sigmoid sinus thrombosis is the odd one out. **Read the option list to see which scheme a stem is using.**\n\n**The lecture prints \"extradural abscess\" first on the intracranial list**, and it is worth knowing that it is also the **commonest** of the intracranial complications and is often **silent**, discovered at surgery when the tegmen or posterior fossa plate is found eroded and granulations sit on exposed dura *(the commonness and silence are not taken from the course material)*.",
        "table": {
          "head": [
            "Tier",
            "Members",
            "Barrier crossed"
          ],
          "rows": [
            [
              "**CRANIAL (intratemporal)**",
              "**Acute mastoiditis and mastoid abscess — the MOST COMMON complication of all**; **petrositis**; **labyrinthitis**; **facial paralysis**",
              "Still **inside bone** — within the temporal bone"
            ],
            [
              "**INTRACRANIAL**",
              "**Extradural abscess**; **meningitis**; **subdural abscess**; **brain abscess**; **lateral (sigmoid) sinus thrombosis**",
              "**Dura breached** — inside the cranial cavity"
            ],
            [
              "**EXTRACRANIAL**",
              "**External otitis**; **retropharyngeal abscess**; **parapharyngeal abscess**; **cervical lymphadenitis** (and Bezold’s / Citelli’s abscess by the same route)",
              "Escaped into the **soft tissues of the neck**"
            ]
          ]
        },
        "qs": [
          "entep-ear-124",
          "entep-ear-228",
          "entqb-ear3-65"
        ]
      },
      {
        "id": "csom-13",
        "w": "must",
        "h": "The compass — the direction of spread decides the complication",
        "body": "**Grade Gain builds a whole run of questions on one idea: name the DIRECTION in which pus leaves the mastoid, and the complication follows automatically.** Five separate questions in this chapter are one arm of the compass each, so learning the table below answers all of them and several endpoint questions besides.\n\n**One point of confusion to fix before reading it.** The direction named is **the direction the pus travels out of the mastoid**, not the position of the structure on the drum. The mastoid antrum lies **behind** the ear canal, so pus moving **forwards (anteriorly)** out of it arrives at the **back and top** of the bony canal — the **posterosuperior** wall. That is why *\"the posterosuperior bony canal is affected by the ANTERIOR spread of mastoiditis\"* reads backwards until you fix the reference point.\n\n**The three arms with the highest yield:**\n\n- **Superior, through the tegmen tympani** -> extradural abscess, then a **temporal lobe abscess**. *\"The most common cause of a temporal lobe abscess\"* is **direct spread from a middle ear infection**, for the purely anatomical reason that nothing else sits that close. Haematogenous abscesses are multiple and sit at the grey-white junction; trauma needs a penetrating injury; a **frontal** sinus infection spreads to the **frontal** lobe.\n- **Anterior** -> the posterosuperior bony canal wall (**sagging**) and the **fallopian canal** (**facial palsy**). Sagging appears **before** any post-auricular swelling, which makes it an early sign worth hunting for on otoscopy.\n- **Medial** -> the **petrous apex** -> **petrositis** and Gradenigo’s triad.\n\n**And the trap the bank sets twice in this group:** the *lateral* spread question keys **\"c & d\"**, because **Bezold’s and Citelli’s abscesses are INFERIOR**, through the mastoid tip, while post-auricular and zygomatic abscesses are lateral. **When a Grade Gain option list ends in a combination, read to the end of it.**\n\n*(The compass taxonomy itself, Citelli’s abscess and the zygomatic abscess appear on no cached ENT slide. The lecture gives acute mastoiditis, the post-auricular abscess, sagging, petrositis and Gradenigo’s triad, but not the directional scheme — that framing is not taken from the course material, although the bank tests it heavily.)*",
        "table": {
          "head": [
            "Direction out of the mastoid",
            "Structure reached",
            "Result"
          ],
          "rows": [
            [
              "**SUPERIOR**",
              "**Tegmen tympani** -> middle cranial fossa",
              "Extradural abscess, then **TEMPORAL LOBE ABSCESS**"
            ],
            [
              "**LATERAL** (through the outer cortex)",
              "Subperiosteal plane",
              "**Post-auricular abscess** — the commonest form; auricle pushed **outwards and downwards**"
            ],
            [
              "**LATERAL, forwards**",
              "Root of the zygoma",
              "**Zygomatic abscess**"
            ],
            [
              "**INFERIOR**, through the tip",
              "Sheath of **sternomastoid**",
              "**Bezold’s abscess** — a tender swelling in the upper neck"
            ],
            [
              "**INFERIOR**, through the medial wall of the tip",
              "**Posterior belly of digastric**",
              "**Citelli’s abscess**"
            ],
            [
              "**ANTERIOR**",
              "Posterosuperior bony canal wall; **fallopian canal**",
              "**SAGGING** of the canal wall; **FACIAL PALSY**"
            ],
            [
              "**POSTERIOR**",
              "**Sinus plate** -> sigmoid sinus",
              "**Lateral (sigmoid) sinus thrombophlebitis**"
            ],
            [
              "**POSTERIOR**, into the posterior fossa",
              "Cerebellum",
              "**Cerebellar abscess**"
            ],
            [
              "**MEDIAL**",
              "**Petrous apex**",
              "**PETROSITIS** -> Gradenigo’s triad"
            ],
            [
              "**INWARDS**",
              "Lateral semicircular canal; round window",
              "**Labyrinthitis / labyrinthine fistula**"
            ]
          ]
        },
        "qs": [
          "entqb-ear1-15",
          "entqb-ear1-27",
          "entqb-ear3-60",
          "entqb-ear3-63",
          "entqb-ear3-64"
        ]
      },
      {
        "id": "csom-14",
        "w": "must",
        "h": "Acute mastoiditis — pathology and clinical picture",
        "body": "**Definition:** acute infection of the **mastoid antrum and air cells**. It is the **commonest complication of otitis media**.\n\n**Two facts about who gets it, and the bank asks them as an EXCEPT question every time.** The lecture puts them in one sentence: *\"Acute mastoiditis usually occurs in **well pneumatized mastoids** and is **more common in children**.\"*\n\n**Pneumatisation is the whole explanation for the age distribution.** The mastoid fills with air cells during childhood, so a child’s mastoid offers the largest volume of mucosa-lined cells for infection to occupy. Repeated middle ear disease in early life **arrests** pneumatisation, so the adults most likely to have chronic ear disease are precisely the ones with **sclerotic, acellular** mastoids and little for an acute mastoiditis to fill. Add the child’s **shorter, wider, more horizontal Eustachian tube** (*L22*) and a far higher rate of acute otitis media, and the pattern follows. **\"More common in adults\" is therefore the classic false statement.**\n\n**Symptoms:** **fever**, **increasing earache**, **profuse mucopurulent discharge**.\n\n**Signs, in the stage of acute mastoiditis** — quoted:\n\n- **Profuse mucopurulent discharge which may exhibit a positive RESERVOIR SIGN**, *i.e. rapid re-accumulation of discharge after cleaning of the ear.*\n- **Tenderness and redness over the mastoid.**\n- **Sagging (oedema) of the postero-superior wall of the bony external ear canal, due to periosteitis.**\n\n**The reservoir sign is worth understanding, not memorising.** Behind a small perforation lies a **large reservoir of pus under pressure** — the whole coalesced air cell system. Mop the canal dry and it refills within moments, because the volume behind the hole is far greater than the volume of the canal. **The sign measures the size of the space upstream**, which is exactly why it separates acute mastoiditis from a resolving acute otitis media (whose discharge tails off) and from otitis externa (where there is no space behind anything). Its mirror image is diagnostic too: a **scanty, foetid discharge that does not re-accumulate** is attico-antral disease with cholesteatoma.\n\n**The discharge is also described as PULSATILE**, throbbing with the arterial pulse — pus under pressure escaping through a small opening *(the term and the mechanism are not stated on the cached slide and are not taken from the course material)*.\n\n**What acute mastoiditis is NOT.** **Granulations on the floor of the external auditory meatus** belong to **malignant (necrotising) otitis externa** — granulation tissue at the bony-cartilaginous junction in an elderly, poorly controlled diabetic — and they sit in the **canal**, not in the middle ear cleft. That is the keyed exception in one of the endpoint questions here.",
        "flow": {
          "title": "How acute mastoiditis evolves",
          "steps": [
            {
              "k": "step",
              "t": "Acute suppurative otitis media",
              "n": "Usually a child with a well-pneumatised mastoid; often untreated or inadequately treated"
            },
            {
              "k": "step",
              "t": "Impeded drainage",
              "n": "Pus cannot escape through the drum or the Eustachian tube"
            },
            {
              "k": "step",
              "t": "Pus accumulates under pressure inside the mastoid air cells"
            },
            {
              "k": "step",
              "t": "Pressure necrosis of the cell walls; the cells coalesce = COALESCENT MASTOIDITIS",
              "n": "Fever, increasing earache, profuse mucopurulent discharge with a positive reservoir sign, tenderness and redness over the mastoid, sagging of the posterosuperior bony canal wall"
            },
            {
              "k": "alert",
              "t": "The outer table of the mastoid is eroded: POST-AURICULAR SUBPERIOSTEAL ABSCESS (the commonest form)",
              "n": "Fluctuant post-auricular swelling; the auricle is pushed OUTWARDS AND DOWNWARDS; the postauricular sulcus is now obliterated. This is the point at which surgery is required"
            },
            {
              "k": "step",
              "t": "The abscess ruptures through the skin: MASTOID FISTULA",
              "n": "Draining mucopus"
            }
          ]
        },
        "qs": [
          "entep-ear-81",
          "entep-ear-222",
          "entqb-ear3-66",
          "entqb-ear4-117",
          "entqb-ear4-121"
        ]
      },
      {
        "id": "csom-15",
        "w": "must",
        "h": "Mastoid abscess versus furunculosis with a post-auricular node",
        "body": "**The lecture names this pair itself: \"The main differential diagnosis is from FURUNCULOSIS OF THE EXTERNAL EAR WITH POST-AURICULAR LYMPHADENITIS.\"** Both give a tender swelling behind the ear in a patient with a sore, discharging ear, and getting it wrong sends a child either to an unnecessary operation or home with an untreated intracranial risk.\n\n**Each criterion separates them by a different route:**\n\n- **Displacement of the pinna.** Pushing the whole auricle **outwards and downwards** requires pus **under the periosteum over the mastoid**, lifting the ear off the skull. A lymph node, however tender, is a discrete mobile lump that does not displace anything. *(Grade Gain writes \"forwards and downwards\" where the lecture writes \"outwards and downwards\" — the same displacement described from a different angle.)*\n- **Mucus.** Mucus can only come from **secreting middle ear and mastoid mucosa**. Mastoiditis gives **profuse mucopurulent** discharge with a **positive reservoir sign**. A furuncle is a **staphylococcal abscess of a hair follicle in the cartilaginous outer third of the canal** — and the canal has **no mucous glands**, so its discharge is scanty, purulent and **never mucoid**.\n- **The tragus sign.** Pressing the tragus moves the **cartilaginous** outer canal. That hurts sharply when a furuncle sits in it, and does nothing in mastoiditis, where the disease is deep to the drum.\n\n**The postauricular sulcus, and a genuine subtlety the examiner’s cram sheet exposes.** The bank prints *\"postauricular redness and oedema with a **preserved** sulcus -> acute mastoiditis\"*, whereas the sign usually taught is the **obliterated** sulcus. **Both are true, at different stages, and the lecture separates them:** in *\"the stage of acute mastoiditis\"* there is tenderness and redness over the mastoid — the sulcus is still there. The sulcus is **obliterated when the SUBPERIOSTEAL ABSCESS forms**, at which point the pinna is also pushed out and down. **Read the stem for which stage it describes.**\n\n**Two extra discriminators the option lists do not carry:** the furuncle **hurts on chewing**, because the anterior canal wall abuts the temporomandibular joint; and mastoiditis shows **sagging of the posterosuperior BONY canal wall**, whereas furunculosis shows a visible swelling in the **outer, cartilaginous** meatus.\n\n**And the treatments diverge completely:** a mastoid abscess needs a **cortical mastoidectomy**; a canal furuncle needs systemic antistaphylococcal antibiotics and analgesia, and specifically **should not be incised**, because of the risk of **perichondritis**.",
        "table": {
          "head": [
            "",
            "Acute mastoiditis / mastoid abscess",
            "Furunculosis + post-auricular lymphadenitis"
          ],
          "rows": [
            [
              "Discharge",
              "**Mucopurulent, profuse**, positive **reservoir sign**",
              "Scanty, purulent, **never mucoid**"
            ],
            [
              "Pinna",
              "Pushed **outwards and downwards**",
              "Not displaced"
            ],
            [
              "Postauricular sulcus",
              "**Preserved** in the early stage; **obliterated** once the subperiosteal abscess forms",
              "Preserved — the node is a discrete mobile lump"
            ],
            [
              "Tragus",
              "**Free** — pressing it does not hurt",
              "**Tender — the TRAGUS SIGN**"
            ],
            [
              "Pain on chewing",
              "No change",
              "**Worse** — the anterior canal wall abuts the TMJ"
            ],
            [
              "Canal",
              "**Sagging** of the posterosuperior **bony** wall, deep",
              "Furuncle visible in the **cartilaginous (outer)** meatus"
            ],
            [
              "Drum",
              "Perforated and discharging",
              "Normal, if it can be seen past the furuncle"
            ],
            [
              "Treatment",
              "Antibiotics; **cortical mastoidectomy** if an abscess has formed",
              "Systemic antistaphylococcal antibiotic + analgesia; **avoid incision** — perichondritis"
            ]
          ]
        },
        "qs": [
          "entqb-ear4-93",
          "entqb-ear4-120",
          "entep-case-19"
        ]
      },
      {
        "id": "csom-16",
        "w": "must",
        "h": "Treatment of acute mastoiditis — medical first, surgery for the abscess",
        "body": "**The lecture gives the rule in two lines:**\n\n> **Acute mastoiditis -> Medical treatment: antibiotics.**\n> **Mastoid abscess -> Surgical: cortical mastoidectomy.**\n\n**So the trigger for surgery is the ABSCESS, not the mastoiditis.** Grade Gain prints the same rule as a box, and it is the source of a classic EXCEPT question: *\"the majority resolve by antibiotics\"* is **true**, and *\"the majority require surgery\"* is **false**. When an option list offers a statement and its exact opposite, the answer is one of the two.\n\n**Why medical treatment wins in most cases.** Acute mastoiditis is infection of the *mucosa lining air cells*, not yet an abscess. If the pus can drain — spontaneously through a perforation, or through a **myringotomy** if the drum is still intact — and the organism is covered by an adequate systemic antibiotic, the air cells re-aerate and the disease resolves without a chisel. **Myringotomy in an intact drum is not optional here; it is the drainage the antibiotics need in order to work.**\n\n**The three indications for surgery**, from the bank’s own printed box:\n\n- **Failure** — pain, fever or otorrhoea persisting after **2 to 4 weeks** of adequate medical management.\n- **A mastoid or neck abscess** — pus has left the air cells and is under the periosteum or in the neck.\n- **Any cranial or intracranial complication** — facial palsy, labyrinthitis, petrositis, meningitis, sinus thrombosis, brain abscess.\n\n**The operation is a complete simple (cortical) mastoidectomy** — every air cell exenterated, the **middle ear and drum left alone**. That is precisely what distinguishes it from the radical and modified radical operations of unsafe chronic disease, which take down the posterior canal wall.\n\n**Where the exam turns this into a management question.** A child with long-standing ear trouble who now has **fever and a warm, tender mastoid** needs **urgent referral to ENT**, not eardrops, not reassurance, not routine referral. Eardrops cannot reach the mastoid; oral antibiotics alone will not drain coalesced pus; and routine referral wastes exactly the interval in which the complication develops. **Note the difference in wording that the bank exploits:** *\"may require surgery in severe cases\"* is **true**, while *\"the majority require surgery\"* is **false**.",
        "flow": {
          "title": "Managing acute mastoiditis",
          "steps": [
            {
              "k": "step",
              "t": "Acute mastoiditis diagnosed",
              "n": "Fever, increasing earache, profuse mucopurulent discharge with a positive reservoir sign, mastoid tenderness and redness, sagging canal wall"
            },
            {
              "k": "decision",
              "t": "Is the tympanic membrane still intact?",
              "yes": "MYRINGOTOMY — the pus must have a way out before antibiotics can work",
              "no": "The existing perforation is already draining"
            },
            {
              "k": "step",
              "t": "Systemic antibiotics: the majority resolve completely",
              "n": "Acute mastoiditis is treated MEDICALLY. Most cases never need an operation"
            },
            {
              "k": "decision",
              "t": "Mastoid or neck abscess? Any cranial or intracranial complication? Or pain, fever or otorrhoea persisting after 2-4 weeks of adequate treatment?",
              "yes": "COMPLETE SIMPLE (CORTICAL) MASTOIDECTOMY — every air cell exenterated, middle ear and drum left alone",
              "no": "Continue medical treatment to resolution"
            },
            {
              "k": "alert",
              "t": "Facial palsy, vertigo, meningism, drowsiness or a swinging fever converts this into an emergency",
              "n": "Image and operate. Do not wait out the 2-4 weeks"
            }
          ]
        },
        "qs": [
          "entep-ear-112",
          "entqb-ear3-67"
        ]
      },
      {
        "id": "csom-17",
        "w": "must",
        "h": "Petrositis — the lesion at the petrous apex",
        "body": "**Definition:** *\"Spread of infection to the **petrous apex air cells**.\"*\n\n**Pathology, quoted, and every clause is examinable:**\n\n> It occurs **only in pneumatized petrous bone** and has a **similar pathology to acute mastoiditis**. However, it is **much less common** than acute mastoiditis and, on the other hand, **more serious**, because it has a **greater tendency toward intracranial extension**.\n\n**Read that as four separate facts.** *Only in pneumatised petrous bone* explains why petrositis is uncommon even though otitis media is not — only some people have air cells that far medially. *Similar pathology to acute mastoiditis* means it is the same process — pus under pressure in air cells, coalescing — happening in a different, deeper set of cells. *Less common but more serious* is the comparison the bank asks directly. And *greater tendency toward intracranial extension* is the reason it matters at all.\n\n**How it is reached: MEDIAL spread**, from the mastoid or middle ear inwards along the pneumatised tract to the apex. That is the arm of the compass this complication occupies.\n\n**What is at the apex, and why the syndrome exists.** Two structures rest on that one small piece of bone:\n\n- the **trigeminal (Gasserian) ganglion**, in a dural pouch called **Meckel’s cave**;\n- the **abducent (VI) nerve**, running through **Dorello’s canal** beneath the petroclinoid ligament.\n\n*(Meckel’s cave and Dorello’s canal are named in neither cached slide; the lecture states only that the retrobulbar pain is \"due to irritation of the trigeminal ganglion\" and the diplopia is \"due to ipsilateral VI nerve (abducent) palsy\". The named anatomy is not taken from the course material.)*\n\n**So the triad is pure topography.** An abscess at the apex announces itself as an ear that discharges, an eye that aches behind, and an eye that cannot abduct — because those are the only three things in reach. **Nowhere else in the temporal bone produces that combination**, which is what makes the triad diagnostic of the *site*.\n\n**The distractors the bank uses, and why each fails.** **Mastoiditis** is the *origin* of the spread, not its destination, and gives local signs behind the ear. **Sigmoid sinus thrombophlebitis** is *posterior* spread and gives a swinging fever, not eye signs. A **temporal lobe abscess** gives headache, drowsiness, hemiparesis and hemianopia, not an isolated sixth nerve palsy. The **orbit** cannot be reached from the ear at all — orbital cellulitis is a complication of **sinusitis**. The **vestibular labyrinth** gives severe vertigo and sensorineural hearing loss. And **meningitis**, though it is the commonest intracranial complication, gives headache, fever, neck stiffness and photophobia — not isolated diplopia.\n\n**Finally, the otorrhoea in Gradenigo’s is not a new event.** It is the underlying otitis media, the **oldest** symptom the patient has; the two eye symptoms are what turn a discharging ear into a named diagnosis. That ordering is the clinically useful part: *a chronically discharging ear that begins to ache behind the eye has extended medially.*",
        "qs": [
          "entep-ear-27",
          "entep-ear-37",
          "entep-ear-201",
          "entep-mfe1-1",
          "entep-mfe4-1",
          "entqb-ear3-62",
          "entqb-ear4-99",
          "entqb-ear4-104"
        ]
      },
      {
        "id": "csom-18",
        "w": "must",
        "h": "Gradenigo’s triad, element by element — the most over-tested topic in the chapter",
        "body": "**The triad, verbatim from *L16) Chronic otitis media.pdf*:**\n\n> **Gradenigo’s syndrome / triad:**\n> **Otorrhoea.**\n> **Retrobulbar pain** — i.e. pain behind the eye, due to **irritation of the trigeminal ganglion**.\n> **Diplopia**, due to **ipsilateral VI nerve (abducent) palsy**.\n\n**Eighteen questions in this chapter are about this triad**, and they come at it from seven different angles: *which complication produces it, which nerve causes the diplopia, which muscle is affected, which nerve causes the pain, what the three elements are, where the infection spread to, and what causes the discharge.* Learn the table below in both directions and all eighteen fall out of it.\n\n**The diplopia, in detail, because the bank asks it four separate ways.** The abducent nerve supplies **one** muscle — the **lateral rectus**, the only abductor of the eye. Paralyse it and the eye cannot turn outwards, so the **unopposed medial rectus pulls it inwards**: a **CONVERGENT (esotropic) PARALYTIC squint**, with horizontal diplopia **worst on looking towards the affected side**. It is **unilateral**, because the infection is on one side. Older question stems describe it exactly as *\"convergent paralytic squint\"*.\n\n**Which makes the medial rectus the classic trap:** it is the muscle that produces the visible deviation, but it is working normally. The muscle **affected** is the **lateral rectus**.\n\n**The rule that settles every \"which nerve, which muscle\" question — LR6, SO4, all the rest 3:** the **lateral rectus** is **VI**, the **superior oblique** is **IV**, everything else is **III**. So: **oculomotor (III)** palsy gives **ptosis, a dilated pupil and a \"down and out\" eye** — none of which belongs to Gradenigo’s. **Trochlear (IV)** palsy gives **vertical or torsional** diplopia, worst on looking down, with a head tilt. **Raised intracranial pressure** can stretch the sixth nerve and give a **false localising** palsy, which is why it is a tempting option — but it is a late event, usually bilateral, and comes with headache, vomiting and papilloedema; in Gradenigo’s the palsy is **ipsilateral and direct**. *(The muscle mapping and the palsy patterns are standard neuro-anatomy and are not taken from the course material.)*\n\n**The pain, and why it is felt behind the eye.** The trigeminal ganglion sits on the petrous apex; the pain is **referred trigeminal pain**, felt in the **ophthalmic (V1)** territory. It is **not** the facial nerve — the facial nerve is overwhelmingly motor and produces **palsy, not pain**.\n\n**Two things that are NOT in the triad, and both are keyed as exceptions:**\n\n- **Hearing loss.** It is not part of the definition at all. Whatever deafness the patient has belongs to the otitis media underneath, and it is **conductive** — which is why *\"associated with conductive hearing loss\"* is keyed as the **false** statement in one endpoint question, and why students who expect a sensorineural loss get it wrong.\n- **Facial oedema**, **hemifacial spasm**, and a **divergent** or **bilateral** squint. Each appears in a distractor option and each is wrong for a specific reason: hemifacial spasm is an irritative facial nerve phenomenon; a divergent squint is the opposite of an abducent palsy; the lesion is unilateral. The discharge must also be **purulent**, not serous — this is suppurative middle ear disease.\n\n**A shorthand that works: ONE ear symptom and TWO EYE symptoms.** *(Grade Gain prints the mnemonic as \"1 ear + 2 nose\", which does not survive inspection — the two non-otological elements are orbital, not nasal. Transcribed as printed and flagged; the correction is not part of the source.)*\n\n**Do not confuse it with the other named triads.** **Trotter’s triad** — conductive deafness, ipsilateral immobility of the soft palate and trigeminal neuralgia of the mandibular division — is **nasopharyngeal carcinoma**. **Griesinger’s sign** is lateral sinus thrombosis. **Pott’s puffy tumour** is frontal sinusitis. All three are offered as distractors.",
        "table": {
          "head": [
            "Element of the triad",
            "Structure at the petrous apex",
            "Nerve",
            "What you see"
          ],
          "rows": [
            [
              "**Otorrhoea**",
              "The middle ear underneath",
              "—",
              "The discharging ear the patient has had all along — the **oldest** symptom, not a new one. Purulent, not serous"
            ],
            [
              "**Retrobulbar / retro-orbital pain**",
              "**Meckel’s cave**, holding the trigeminal (Gasserian) ganglion",
              "**V — trigeminal**",
              "Deep pain **behind the eye** and in the face, in the **ophthalmic (V1)** territory. Referred, not local"
            ],
            [
              "**Diplopia**",
              "**Dorello’s canal**, beneath the petroclinoid ligament",
              "**VI — abducent**",
              "**Lateral rectus** palsy: the eye will not abduct; the unopposed **medial rectus** turns it in — a **CONVERGENT PARALYTIC squint**, unilateral, diplopia worst on gaze towards the lesion"
            ],
            [
              "*(NOT in the triad)* Hearing loss",
              "The otitis media underneath",
              "—",
              "If present it is **CONDUCTIVE**, and it belongs to the underlying disease, not to Gradenigo’s"
            ],
            [
              "*(NOT in the triad)* Facial palsy or spasm",
              "Fallopian canal — a different, **anterior** route",
              "VII",
              "Facial nerve involvement is its own complication, not part of this syndrome"
            ]
          ]
        },
        "qs": [
          "entep-ear-79",
          "entep-ear-133",
          "entep-ear-139",
          "entep-ear-192",
          "entep-ear-202",
          "entqb-ear4-101",
          "entqb-ear4-102",
          "entqb-ear4-103",
          "entqb-ear4-105",
          "entep-case-18"
        ]
      },
      {
        "id": "csom-19",
        "w": "high",
        "h": "Labyrinthitis",
        "body": "**Clinical picture, and the lecture gives exactly two features:**\n\n> **Severe vertigo. Sensorineural hearing loss.**\n\nTo those two, add **nystagmus** and, in the acute phase, **nausea and vomiting**. It is a **cranial (intratemporal)** complication — the labyrinth is inside the petrous bone, not inside the skull cavity — which is the point tested by the *\"all of the following are intracranial complications except\"* question.\n\n**Why it matters more than its position in the list suggests.** It is the **one complication that converts a conductive hearing loss into a sensorineural one**, and it can be the road by which infection reaches the meninges. **Vertigo appearing in a long-standing foul-smelling discharging ear is never benign** — it means the inner ear has been breached.\n\n**The word that decides the classic EXCEPT question is \"SUPPURATIVE\".** Suppurative labyrinthitis requires **pus**. **Otitis media with effusion is non-suppurative by definition** — the fluid behind an intact drum contains no pus — so it cannot cause it. That is the keyed exception.\n\n**The three routes that CAN**, and the third is the one worth remembering because it runs the other way:\n\n- **Cholesteatoma erodes the lateral semicircular canal.** This is the commonest route and the classic site: the lateral canal is the part of the labyrinth closest to the attic. The result is a **labyrinthine fistula**, which opens the inner ear directly.\n- **Acute suppurative otitis media**, through the **round window membrane** or the oval window, especially in a fulminant attack. Note that the round window is one of the lecture’s own named **preformed pathways**.\n- **Meningitis, working inwards.** Infection descends from the subarachnoid space along the **internal auditory meatus and the cochlear aqueduct**. This is the route that makes post-meningitic deafness in children so common and so severe *(the meningogenic route is not taken from the course material)*.\n\n**That two-way traffic is the point to keep:** the labyrinth can be infected from the middle ear outwards, or from the meninges inwards.\n\n**Two clinical additions.** A **positive fistula sign** — vertigo and nystagmus provoked by pressing on the tragus or by pneumatic otoscopy — indicates a labyrinthine fistula and is a strong argument for surgery. And a **serous (toxic) labyrinthitis**, in which toxins rather than organisms cross into the inner ear, is reversible, whereas true **suppurative** labyrinthitis ends in a **dead labyrinth**: total sensorineural deafness and permanent loss of vestibular function on that side *(both not taken from the course material)*.",
        "table": {
          "head": [
            "Route into the labyrinth",
            "Mechanism",
            "Typical setting"
          ],
          "rows": [
            [
              "**Cholesteatoma erodes the LATERAL semicircular canal**",
              "A **labyrinthine fistula** opens the inner ear directly",
              "Unsafe CSOM. Vertigo, often provoked by pressing the tragus — a positive **fistula sign**"
            ],
            [
              "**Round window / oval window membrane**",
              "Toxins, then organisms, cross from the middle ear",
              "**Acute suppurative otitis media**, fulminant. The round window is a named **preformed pathway**"
            ],
            [
              "**Meningogenic — from the meninges INWARDS**",
              "Descends along the **internal auditory meatus** and **cochlear aqueduct**",
              "Meningitis. The reason post-meningitic deafness in children is so severe *(not taken from the course material)*"
            ],
            [
              "**Otitis media with EFFUSION**",
              "**Cannot** cause suppurative labyrinthitis",
              "OME is **non-suppurative** — there is no pus. This is the keyed exception"
            ]
          ]
        },
        "qs": [
          "entep-ear-156",
          "entep-case-16"
        ]
      },
      {
        "id": "csom-20",
        "w": "high",
        "h": "Facial paralysis as a complication of otitis media",
        "body": "**The lecture lists facial paralysis among the CRANIAL complications of otitis media**, and the anatomy behind it is given in *L22) Anatomy of  Ear Undergraduate.pdf*: the **vertical (third, mastoid) part of the facial nerve runs in a bony canal in the POSTERIOR WALL of the middle ear**, leaving through the **stylomastoid foramen**. The lecture also notes that the nerve *\"runs in the walls of the middle ear\"* and *\"could be injured during bone drilling\"* — surgery is a cause as well as a treatment.\n\n**Two quite different mechanisms, and they demand different management** *(the mechanisms and the management below are not taken from the course material, which lists facial paralysis without describing it)*:\n\n- **In ACUTE otitis media**, the nerve is usually exposed by a **congenital dehiscence of the fallopian canal** — one of the lecture’s own named preformed pathways. Inflammatory oedema compresses the exposed nerve. The palsy is usually **incomplete** and recovers, and the treatment is **urgent myringotomy** to decompress the middle ear, plus systemic antibiotics. **Myringotomy comes first** — ahead of intravenous antibiotics alone, lumbar puncture or steroids.\n- **In CHRONIC disease (unsafe CSOM)**, the **cholesteatoma has eroded the fallopian canal**. This is destruction, not oedema. Treatment is **surgical removal of the disease with decompression of the nerve**, and recovery is far less certain.\n\n**It is a LOWER motor neurone palsy**, so the **forehead is involved** and the eye cannot close on that side — which distinguishes it from an upper motor neurone (stroke) palsy that spares the forehead. The exposed cornea needs protecting.\n\n**Where it sits in the compass:** facial palsy is **ANTERIOR** spread from the mastoid, in the same direction as the sagging of the posterosuperior bony canal wall. A patient with mastoiditis who develops facial weakness has had pus travel forwards to the fallopian canal.\n\n**And it is one of the three absolute indications for surgery in acute mastoiditis**, alongside an abscess and failure of medical treatment. **A facial palsy in a discharging ear is never watched.**",
        "qs": []
      },
      {
        "id": "csom-21",
        "w": "must",
        "h": "Otogenic meningitis, and the extradural and subdural abscess",
        "body": "**Meningitis is the intracranial complication students are asked to recognise most often, and it is recognised by ONE sign group: meningeal irritation.**\n\n- **Headache, fever, photophobia, neck rigidity**, and a positive **Kernig** and **Brudzinski** sign.\n- **No focal neurological deficit.** That absence is the whole discrimination against a brain abscess.\n\n**The bank teaches this by printing two vignettes that are nearly word for word identical.** One 40-year-old man with foul ear discharge and attic granulations develops *\"severe headache and fever followed by VOMITING\"*; another develops *\"severe headache and fever associated with NECK RIGIDITY\"*. **The first is raised intracranial pressure — a brain abscess. The second is meningitis.** Nothing else in the two stems differs. **The examiner is testing one discrimination: raised pressure versus meningeal irritation.**\n\n**Extradural abscess.** Pus collecting between the eroded bone — the **tegmen tympani** above, or the **posterior fossa plate** behind — and the **dura**. It is the **commonest** of the intracranial complications and it is frequently **silent**, found at operation when granulations are seen sitting on exposed dura *(the commonness and the silence are not taken from the course material; the lecture lists extradural abscess first among the intracranial complications without describing it)*.\n\n**But it has one classic clinical clue, and the bank asks it as a vignette:** a **PULSATING discharge**. A discharge that pulses in time with the arterial pulse is the **lighthouse sign**, and it means the discharge is being transmitted from a space sharing the intracranial pulse — the dura has been exposed, or an extradural abscess has formed. **In a 35-year-old with offensive otorrhoea and a marginal perforation, \"cholesteatoma\" is close but wrong; the word *pulsating* forces the answer to \"cholesteatoma WITH an intracranial complication.\"** That patient needs imaging and surgery, not ear drops *(the pulsating / lighthouse sign is not taken from the course material)*.\n\n**Subdural abscess (empyema)** lies between dura and arachnoid. It is rarer, spreads rapidly over the convexity, and typically presents with **rapid deterioration, seizures and hemiplegia** rather than a slowly evolving picture *(not taken from the course material — the lecture names it in the list only)*.\n\n**Management principle for all three, and for meningitis:** high-dose intravenous antibiotics **plus** surgical eradication of the ear disease. **Treating the meningitis without removing the source leaves the source.**",
        "qs": [
          "entep-ear-56",
          "entep-ear-178",
          "entep-case-23"
        ]
      },
      {
        "id": "csom-22",
        "w": "must",
        "h": "Otogenic brain abscess — temporal lobe versus cerebellum",
        "body": "**Focal neurological signs in a patient with a discharging ear mean a FOCAL lesion, and that means a brain abscess.** This is the discrimination the bank tests with its longest vignette in the chapter.\n\n**Read that vignette once, because it is the whole topic:** an adult with **three years of continuous, purulent, offensive** discharge — unsafe disease — develops **headache, fever and vomiting**, then **severe headache and drowsiness**, then **difficulty going up and down stairs**, and finally **hemianopia and weakness of the left arm and leg**. Otoscopy shows an **attic perforation**. The answer to *\"which perforation\"* is **attic**; the answer to *\"which complication\"* is **temporal lobe abscess**.\n\n**The localising signs decide it.** Contralateral **hemianopia** (optic radiation) and contralateral **arm and leg weakness** (internal capsule / motor pathway), on top of raised intracranial pressure, place the lesion in **one cerebral hemisphere** — and the temporal lobe sits directly above the middle ear, separated only by the thin **tegmen tympani**. A **cerebellar abscess** would give **ataxia, nystagmus and incoordination** instead. **Meningitis** gives neck stiffness without focal limb signs. **Mastoiditis** is extracranial to the cranial cavity and cannot produce hemianopia. **Lateral sinus thrombosis** gives a swinging fever, which is systemic rather than focal.\n\n**The evolution matters as much as the signs**, and it is what makes a brain abscess dangerous to manage:\n\n- an initial **encephalitic** stage with headache and fever;\n- a **quiet latent period** that is falsely reassuring;\n- **raised intracranial pressure** — headache, vomiting, drowsiness, **bradycardia**, papilloedema;\n- and only then the **focal deficit**.\n\n**So drowsiness precedes paralysis.** *A patient with chronic otorrhoea who becomes drowsy has an intracranial complication until imaged* — you do not wait for the hemiparesis *(the staging is not taken from the course material; the lecture lists brain abscess among the intracranial complications without describing its course)*.\n\n**And note which ear disease does this: the UNSAFE, attico-antral type.** A cholesteatoma erodes the tegmen; safe tubo-tympanic disease does not. That is the entire reason for the two names.\n\n**\"Most common cause of a temporal lobe abscess\" = direct spread from a middle ear infection**, usually through an extradural abscess first. Haematogenous abscesses are multiple and sit at the grey-white junction from lung or cardiac sources; trauma needs a penetrating injury; a frontal sinus infection gives a **frontal** lobe abscess.",
        "table": {
          "head": [
            "",
            "Temporal lobe abscess",
            "Cerebellar abscess"
          ],
          "rows": [
            [
              "Route",
              "**SUPERIOR**, through the **tegmen tympani**",
              "**POSTERIOR**, through the mastoid into the posterior fossa"
            ],
            [
              "Focal signs",
              "**Contralateral hemiparesis**; **contralateral homonymous hemianopia**; nominal aphasia if the dominant lobe",
              "**Ipsilateral** ataxia, past-pointing, intention tremor, **nystagmus** towards the lesion, hypotonia"
            ],
            [
              "Classic clue in a stem",
              "Weakness of the arm and leg on one side; difficulty on stairs; hemianopia",
              "Falls towards the side of the lesion; incoordination; unsteadiness"
            ],
            [
              "Shared with the other",
              "Headache, fever, vomiting, **drowsiness**, bradycardia — raised intracranial pressure",
              "The same raised-pressure picture"
            ],
            [
              "Which ear disease",
              "**Unsafe (attico-antral) CSOM with cholesteatoma**",
              "**Unsafe (attico-antral) CSOM with cholesteatoma**"
            ]
          ]
        },
        "qs": [
          "entep-ear-93",
          "entqb-ear4-116",
          "entep-case-17"
        ]
      },
      {
        "id": "csom-23",
        "w": "must",
        "h": "Lateral (sigmoid) sinus thrombophlebitis",
        "body": "**RIGORS MEAN BACTERAEMIA, and in an ear patient bacteraemia means infected thrombus in a venous sinus.** If a stem gives you *\"intermittent fever with rigors\"*, *\"swinging pyrexia\"* or *\"remittent, spiking fever\"* in someone with a discharging ear, the answer is this and nothing else.\n\n**The anatomy is simple and decides the direction of spread.** The **sigmoid sinus lies immediately BEHIND the mastoid air cells**, separated from them by a thin shell of bone — the **sinus plate**. Erode that plate and the infection is in the venous sinus. So the spread is **POSTERIOR**, and *\"sinus thrombophlebitis is caused by the ______ spread of mastoiditis\"* is answered **posterior** by pure anatomy.\n\n**What happens next.** Infected thrombus forms in the sigmoid sinus and **sheds septic emboli into the circulation in showers**. Each shower produces a spike of fever with a **rigor**, and the temperature then falls again — the classical **picket-fence (swinging, remittent) pyrexia**. The thrombus can propagate into the **internal jugular vein**, giving a tender cord in the neck.\n\n**Why it can only be cholesteatoma among the usual option list.** Cholesteatoma is the only disease offered that **destroys bone**. **Otitis media with effusion** and **adhesive otitis media** are **non-suppurative** — fluid and retraction, with no pus to spread and no bone destruction. **External otitis** is confined to the canal, on the wrong side of the drum entirely.\n\n**It is an INTRACRANIAL complication**, grouped by the lecture with meningitis, brain abscess and extradural abscess. That grouping is exactly what makes *\"which of these is not an extra-cranial complication\"* answerable.\n\n**How the fever patterns separate the complications** — this is the discrimination the bank actually wants:\n\n- **Lateral sinus thrombosis** — **swinging fever WITH RIGORS**. Systemic.\n- **Acute mastoiditis** — a **continuous** low-to-moderate fever with **local** signs (mastoid tenderness and redness, sagging canal wall, profuse discharge with a positive reservoir sign). No rigors.\n- **Labyrinthitis** — vertigo, nystagmus, sensorineural loss. A labyrinthine event, not a systemic one.\n- **Cholesteatoma itself** — the underlying **disease**, not a complication, and painless and afebrile until it produces one.\n\n**Management is not conservative:** intravenous antibiotics, anticoagulation where indicated, and **surgical exploration of the sinus with a mastoidectomy** to remove the source. **A swinging fever in a discharging ear is an emergency.**",
        "table": {
          "head": [
            "Finding",
            "Why it happens"
          ],
          "rows": [
            [
              "**Picket-fence (swinging, remittent) pyrexia WITH RIGORS**",
              "Septic emboli showered off an infected thrombus. **Rigors mean bacteraemia**"
            ],
            [
              "**Griesinger’s sign** — oedema and tenderness over the mastoid emissary vein",
              "Thrombus has propagated into the emissary vein *(not taken from the course material)*"
            ],
            [
              "**Tobey-Ayer test**",
              "Compressing the **normal** jugular vein raises the CSF pressure; compressing the **affected** side does not *(not taken from the course material)*"
            ],
            [
              "Tender cord along the internal jugular vein in the neck",
              "Thrombus propagating down the IJV *(not taken from the course material)*"
            ],
            [
              "Headache and papilloedema without focal signs",
              "**Otitic hydrocephalus**, if the dominant sinus is occluded *(not taken from the course material)*"
            ],
            [
              "**Direction of spread: POSTERIOR**",
              "Through the **sinus plate**, the thin bone between the mastoid air cells and the sigmoid sinus"
            ]
          ]
        },
        "qs": [
          "entep-ear-25",
          "entep-ear-151",
          "entqb-ear4-115",
          "entep-case-21"
        ]
      },
      {
        "id": "csom-24",
        "w": "high",
        "h": "Extracranial complications, and the ear disease that presents as a neck lump",
        "body": "**The lecture’s extracranial list, quoted:** **external otitis; retropharyngeal abscess; parapharyngeal abscess; cervical lymphadenitis.**\n\n- **External otitis.** The simplest of them. A chronically discharging ear macerates the canal skin, and a secondary diffuse otitis externa follows. It is worth naming because it is the reverse of the usual reasoning: here the *middle* ear disease has caused the *outer* ear disease.\n- **Cervical lymphadenitis.** Enlarged, tender upper deep cervical and post-auricular nodes draining the infected ear.\n- **Retropharyngeal and parapharyngeal abscess.** These are the two the lecture names and the ones with real consequences.\n\n**Bezold’s abscess is the link, and it is why an ear disease can present as a throat problem.** *L4) PHARYNGEAL SUPPURATIONS.pdf* lists *\"middle ear infections with bony destruction of the mastoid tip (Bezold’s abscess)\"* among the causes of a **parapharyngeal abscess**. Pus escapes **inferiorly** through the mastoid tip, tracks along the **sternomastoid** sheath into the deep neck, and the patient presents with a **tender neck swelling, fever and odynophagia**.\n\n**The clinical warning that follows from that:** once the pus is in the neck, **the mastoid tenderness that would have made the diagnosis may be gone.** A deep neck abscess with a history of ear discharge is an otological problem until the ear has been examined.\n\n**Citelli’s abscess** is the same inferior escape through the **medial** wall of the mastoid tip, tracking along the **posterior belly of digastric** into the posterior triangle. Bezold and Citelli differ only in which wall of the tip the pus breaks through, and therefore in which muscle plane it follows *(both abscesses are named in the bank but on no cached slide — not taken from the course material)*.\n\n**Note the classification point the bank exploits:** these neck abscesses are **extracranial**, not cranial and not intracranial, because the infection has escaped into the **soft tissues of the neck**. That is what makes **Bezold’s abscess** a keyed wrong answer in the *\"which is an intracranial complication\"* question.",
        "qs": []
      },
      {
        "id": "csom-25",
        "w": "must",
        "h": "Revision table — naming the complication from one clinical sign",
        "body": "**This is the single most useful page in the chapter for the exam**, because the bank’s commonest question shape is a discharging ear plus **one** new finding, and a demand for the name of the complication.\n\n**Work through it in the order the disease travels.** Signs that are **local and behind the ear** mean the infection is still in bone (cranial). Signs that are **systemic with rigors** mean it is in a venous sinus. Signs that are **diffuse and meningeal** mean it has crossed the dura. Signs that are **focal and neurological** mean it is in brain. Signs in the **eye** mean the petrous apex. Signs in the **neck** mean it has escaped downwards.\n\n**Two pairs are deliberately printed as near-identical vignettes and are worth memorising as pairs:**\n\n- **Vomiting** (raised intracranial pressure -> brain abscess) versus **neck rigidity** (meningeal irritation -> meningitis), everything else the same.\n- **Continuous fever with local mastoid signs** (mastoiditis) versus **intermittent fever with rigors** (lateral sinus thrombosis).\n\n**And one sign trumps all of the above:** **pain**. Chronic suppurative otitis media does not hurt, so pain in a chronically discharging ear means either a superimposed acute otitis media or one of the complications below.",
        "table": {
          "head": [
            "New finding in a patient with a discharging ear",
            "Complication"
          ],
          "rows": [
            [
              "Fever, **increasing** earache, mastoid tenderness and redness, profuse discharge with a positive **reservoir sign**, sagging canal wall",
              "**Acute mastoiditis** (cranial — and the commonest of all)"
            ],
            [
              "Fluctuant post-auricular swelling, auricle pushed **out and down**, sulcus obliterated",
              "**Mastoid (subperiosteal) abscess** — operate"
            ],
            [
              "Tender swelling in the **upper neck** under sternomastoid; odynophagia",
              "**Bezold’s abscess** -> parapharyngeal abscess (extracranial)"
            ],
            [
              "**Retro-orbital pain + diplopia** with a convergent squint",
              "**Petrositis — Gradenigo’s triad** (cranial, medial spread)"
            ],
            [
              "**Severe vertigo + sensorineural hearing loss**, nystagmus",
              "**Labyrinthitis** (cranial). Vertigo on tragal pressure = **fistula**"
            ],
            [
              "Sudden **facial weakness** on the same side, forehead involved",
              "**Facial paralysis** — erosion of the fallopian canal (cranial, anterior spread)"
            ],
            [
              "**Headache, fever, neck rigidity**, positive Kernig and Brudzinski, **no focal signs**",
              "**Meningitis** (intracranial)"
            ],
            [
              "Headache, fever, **vomiting, drowsiness**, bradycardia — later **hemiparesis and hemianopia**",
              "**Temporal lobe abscess** (intracranial, superior spread)"
            ],
            [
              "Ataxia, nystagmus, past-pointing, incoordination",
              "**Cerebellar abscess** (intracranial, posterior spread)"
            ],
            [
              "**Intermittent / swinging fever WITH RIGORS**",
              "**Lateral (sigmoid) sinus thrombophlebitis** (intracranial, posterior spread)"
            ],
            [
              "**PULSATING** discharge through a marginal perforation",
              "Dura exposed / **extradural abscess** — the lighthouse sign"
            ],
            [
              "**Pain**, in an ear that has discharged painlessly for years",
              "A superimposed **acute otitis media**, or **any** complication above. CSOM is not painful"
            ]
          ]
        },
        "qs": []
      },
      {
        "id": "csom-26",
        "w": "high",
        "h": "The named signs and eponyms, collected",
        "body": "**Eponyms are what multiple-choice papers are built from**, and this chapter carries more of them than any other in the ear syllabus. Several appear only as *distractors* — which means you must know what they actually belong to in order to reject them.\n\n**Only two of these are printed in the cached lectures:** **Gradenigo’s syndrome/triad** and the **reservoir sign**. **Everything else in the table is not taken from the course material**, though the bank asks several of them directly and Bezold’s abscess is named in the pharyngeal suppurations lecture as a cause of parapharyngeal abscess.\n\n**The two that are most often confused with Gradenigo’s, because both are triads and both are ENT:** **Trotter’s triad** is **nasopharyngeal carcinoma** — a malignancy, not an infection — and **Pott’s puffy tumour** is **frontal sinusitis**, not ear disease at all.",
        "table": {
          "head": [
            "Name",
            "What it is",
            "What it belongs to"
          ],
          "rows": [
            [
              "**Gradenigo’s triad**",
              "Otorrhoea + retro-orbital pain + diplopia",
              "**Petrositis** *(the only eponym printed in the lecture)*"
            ],
            [
              "**Reservoir sign**",
              "Discharge re-accumulates as fast as the canal is mopped dry",
              "**Acute mastoiditis** *(defined verbatim in the lecture)*"
            ],
            [
              "**Griesinger’s sign**",
              "Oedema and tenderness over the mastoid emissary vein",
              "**Lateral sinus thrombosis**"
            ],
            [
              "**Tobey-Ayer test**",
              "CSF pressure rises on compressing the **normal** jugular vein only",
              "**Lateral sinus thrombosis**"
            ],
            [
              "**Bezold’s abscess**",
              "Pus through the mastoid tip along **sternomastoid**",
              "Extracranial spread; can present as a **parapharyngeal abscess**"
            ],
            [
              "**Citelli’s abscess**",
              "Pus through the medial wall of the tip along the **posterior belly of digastric**",
              "Extracranial spread"
            ],
            [
              "**Lighthouse / pulsating sign**",
              "Discharge pulsating in time with the arterial pulse",
              "Dura exposed — an **intracranial** complication (extradural abscess)"
            ],
            [
              "**Fistula sign**",
              "Vertigo and nystagmus on pressing the tragus",
              "**Labyrinthine fistula** in cholesteatoma"
            ],
            [
              "**Tragus sign**",
              "Sharp pain on pressing the tragus",
              "**Furunculosis / otitis externa** — NOT mastoiditis"
            ],
            [
              "**Trotter’s triad**",
              "Conductive deafness + immobile soft palate + trigeminal neuralgia (V3)",
              "**Nasopharyngeal carcinoma** — a distractor here"
            ],
            [
              "**Pott’s puffy tumour**",
              "Subperiosteal abscess over the frontal bone",
              "**Frontal sinusitis** — a distractor here"
            ],
            [
              "**Meckel’s cave / Dorello’s canal**",
              "The trigeminal ganglion, and the abducent nerve, at the petrous apex",
              "The anatomy behind **Gradenigo’s**"
            ]
          ]
        },
        "qs": []
      },
      {
        "id": "csom-27",
        "w": "high",
        "h": "Putting it together — approaching a discharging ear",
        "body": "**Everything in this chapter reduces to one clinical sequence.** Run it in order and you will not miss the ear that needs an operation.\n\n**The two questions that decide everything are: does it smell, and is the annulus intact?** The first is answered at the bedside without instruments; the second needs the canal cleaned and the **whole** drum inspected — **especially the attic**, which is where primary acquired cholesteatoma hides behind a crust while the pars tensa looks normal.\n\n**Then look for the complication.** Chronic suppurative otitis media is painless and afebrile. **Pain, fever, vertigo, facial weakness, headache, vomiting, drowsiness, rigors or double vision are all abnormal in this disease**, and each of them names a specific complication (see the revision table two sections above).",
        "flow": {
          "title": "Approach to the chronically discharging ear",
          "steps": [
            {
              "k": "step",
              "t": "History: how long, continuous or intermittent, profuse or scanty, and does it SMELL?",
              "n": "Four adjectives are close to a diagnosis on their own"
            },
            {
              "k": "decision",
              "t": "Is the discharge FOETID, scanty, purulent and continuous?",
              "yes": "Osteitis: suspect UNSAFE attico-antral disease with cholesteatoma",
              "no": "Profuse, mucopurulent, odourless and intermittent suggests SAFE tubo-tympanic disease"
            },
            {
              "k": "step",
              "t": "Clean the canal and examine the WHOLE drum, especially the attic",
              "n": "A central perforation with an intact rim of drum all round = safe. An attic or marginal defect, crusting, keratin debris or red fleshy granulations = unsafe"
            },
            {
              "k": "alert",
              "t": "Any PAIN, vertigo, facial weakness, headache, fever, vomiting, drowsiness or rigors?",
              "n": "CSOM is NOT a painful condition. Any of these means a complication until proved otherwise: image and refer urgently"
            },
            {
              "k": "step",
              "t": "Tuning forks and pure tone audiogram",
              "n": "A conductive loss is expected. A sensorineural or MIXED loss means the labyrinth has been breached"
            },
            {
              "k": "step",
              "t": "Imaging: plain mastoid X-ray in the syllabus; HRCT of the temporal bone in practice",
              "n": "Cellular mastoid = safe. Acellular mastoid PLUS a filling defect = cholesteatoma. A non-anatomical irregular cavity with bone sequestra is diagnostic"
            },
            {
              "k": "decision",
              "t": "Is there a cholesteatoma?",
              "yes": "ALWAYS SURGICAL: tympano-mastoidectomy. Make the ear SAFE first, DRY second, HEARING last",
              "no": "Medical treatment, aural toilet, water precautions, treat the nose; then myringoplasty, or tympanoplasty if the ossicles are eroded"
            },
            {
              "k": "alert",
              "t": "Bilateral disease: operate the DANGEROUS ear first, not the deafer one",
              "n": "An attic perforation with offensive discharge and a 20 dB gap outranks a large central perforation with a 45 dB gap"
            }
          ]
        },
        "qs": []
      },
      {
        "id": "csom-28",
        "w": "know",
        "h": "What these notes deliberately leave out",
        "body": "**Recorded so that a gap is a decision rather than an accident**, as the project’s rules require.\n\n- **Drug names, doses and durations.** The lecture says *\"antibiotherapy according to culture and sensitivity\"* and nothing more. No antibiotic, dose or course length is stated anywhere in the cached ENT material for CSOM, and none has been invented here. The one duration the material does give — **2 to 4 weeks** of adequate medical treatment before declaring failure in acute mastoiditis — is kept, because Grade Gain prints it.\n- **Operative technique.** Surgical steps, approaches, canal-wall-up versus canal-wall-down reconstruction, graft materials beyond tragal perichondrium, and second-look surgery are all omitted. The bank asks *which* operation and *why*, never *how*.\n- **Epidemiology.** Incidence and prevalence figures for CSOM and cholesteatoma have no bearing on any answer and are not stated in the material.\n- **Molecular mechanism.** Which proteolytic enzymes, which cytokines, and the biology of keratinocyte migration all go deeper than the material goes. The lecture says *\"proteolytic enzymes\"* and that is the level at which it is examined.\n- **Microbiology in detail.** The lecture gives only *\"Gram-negative organisms\"* for unsafe disease; the bank’s cram sheet adds *Pseudomonas, Proteus, Klebsiella*, and both are recorded above. Anaerobic speciation, sensitivity patterns and biofilm are not covered.\n- **Tuberculous and other specific chronic otitis media.** Multiple perforations, painless profuse discharge and pale granulations in tuberculous otitis media are a real entity but appear nowhere in the cached lectures and in none of the 93 questions.\n- **Adhesive otitis media, tympanosclerosis and retraction pocket staging** are named here only where a question uses them as distractors; they are the business of the AOM and effusion chapter.\n- **Otitic hydrocephalus** and **cavernous sinus thrombosis** are mentioned in a single line each; neither is on any slide nor in any question in this chapter.\n\n**Which pass this was written in.** These notes were written in the **theory-first sprint of August 2026**, while three of the four ENT question banks were still being transcribed. **All 93 questions that existed in this chapter on 2026-08-13 are linked in the sections above.** When the House bank and the remainder of Grade Gain close, this chapter must be re-checked against its new questions and patched — that reconciliation pass is mandatory and is recorded in the project brief.",
        "qs": []
      }
    ]
  },
  "ent-tonsils": {
    "intro": "Timing, lists and look-alikes. Post-tonsillectomy bleeding is asked by the clock, the “all except” stem demands every option, one table answers the whole membrane differential, and one clause decides each vignette. The numbers are examined verbatim.",
    "sections": [
      {
        "id": "tons-1",
        "w": "must",
        "h": "Waldeyer’s ring and the palatine tonsil",
        "body": "**Waldeyer’s ring** — **discontinuous ring of lymphoid tissue**, naso- + oropharynx; **primary immune defence against inhaled or ingested pathogens**. **Five: adenoid** (single, midline, nasopharyngeal roof + posterior wall) · **tubal tonsils of Gerlach** · **palatine** · **lingual** · **lateral pharyngeal bands**. Not members: **Henle’s nodes** (retropharyngeal; source of the acute retropharyngeal abscess; *“atrophy about the fifth year”* true, only membership false) · **Delphian** (pretracheal).\n\n- **Non-encapsulated MALT, NO AFFERENT LYMPHATICS.** Secretes **IgG, IgM, IgA, IgE**, **not IgD**. Peak **4–10 yrs**. Hypertrophy = a response; no immunodeficiency after removal. *(Not in course material.)*\n- **Palatine tonsil: almond-shaped compact dense lymphoid tissue, flush with the fauces** normally; **8–30 crypts**, largest **crypta magna** (quinsy’s route) → **tonsilloliths**; **fibrous capsule** laterally.\n- **Bed: superior constrictor** (never middle) · **IX** · **facial artery** · buccopharyngeal fascia. **Internal carotid ~2.5 cm posterolateral**, may be tortuous — reached by deep or lateral cautery.\n- **Arteries (5), all external carotid: tonsillar br. of the FACIAL = main** · ascending palatine · dorsalis linguae · descending palatine · ascending pharyngeal. **Paratonsillar vein** = upper-pole ooze.\n- **Lymph: upper deep cervical, esp. JUGULODIGASTRIC** (level II). **Tender = acute · firm non-tender bilateral child = chronic · painless firm adult = malignancy** *(last not in course material)*.\n\n- **Referred otalgia:** local 95 %, referred 5 %. Tonsillar otalgia = **IX**, never vagal. **Earache after tonsillectomy is expected, not a complication:** worst **days 5–7**, **drum normal**; untreated → **dehydration**.\n\n|Nerve|From|Ear branch|\n|---|---|---|\n|**V**|Teeth, TMJ, oral cavity, anterior tongue|Auriculotemporal|\n|**IX**|**Tonsil, fossa, soft palate, posterior tongue, nasopharynx**|**Jacobson’s**|\n|**X**|Vallecula, epiglottis, larynx, hypopharynx, oesophagus (**internal br. superior laryngeal**)|Arnold’s|\n|**C2, C3**|Neck, cervical spine|Great auricular, lesser occipital|\n\nSrc: L3; L1.2; L4; L17,18",
        "qs": [
          "entqb-thr4-247",
          "entqb-thr4-168",
          "entqb-thr4-150",
          "entqb-thr4-224",
          "entqb-thr4-196",
          "entqb-thr4-172",
          "entep-throat-109",
          "entqb-thr4-201",
          "entqb-thr1-30",
          "entqb-thr4-225"
        ]
      },
      {
        "id": "tons-2",
        "w": "must",
        "h": "The adenoid, and how it differs from the tonsil",
        "body": "**Enlarged adenoids** = **hypertrophied nasopharyngeal lymphoid tissue** · **very common 2–6 yrs** · from **infections or allergies** · **can shrink naturally after 6–8 years** · **smooth soft cushion, many longitudinal ridges**, single pink pyramid.\n\n- **Curve:** submucosal **at birth** (“submucosal at 4 years” false) → **peak 2–6** → shrinks **after 6–8** → involutes at puberty. **Adult adenoidal tissue = red flag: nasopharyngeal carcinoma, lymphoma, HIV** *(not in course material)*. Defect: GG keys involution at **11 years**; no slide states an age — key as printed.\n\n||**Adenoid**|**Palatine tonsil**|\n|---|---|---|\n|Number|**Single, midline** pyramid|**Paired**, lateral|\n|Capsule|**NONE**|**Definite fibrous capsule**|\n|Surface|**Longitudinal ridges**|**8–30 crypts** + crypta magna|\n|Epithelium|**Pseudostratified columnar ciliated**|Stratified squamous|\n|Afferents|**None**|**None**|\n|Drainage|**Upper deep cervical** + retropharyngeal|**Upper deep cervical**, esp. jugulodigastric|\n\n- **No capsule →** curettage, not dissection · **regrowth** in the very young · **residual tissue = commonest cause of primary bleeding**.\n\nSrc: L3",
        "qs": [
          "entqb-thr4-149",
          "entqb-thr4-150",
          "entqb-thr4-151",
          "entqb-thr4-166",
          "entqb-thr4-173"
        ]
      },
      {
        "id": "tons-3",
        "w": "must",
        "h": "Pharyngitis — classification and the four clinical types",
        "body": "**Viral (L3):** rhinovirus · adenovirus · **Coxsackie** · parainfluenza · coronavirus · **EBV** · **HIV** · CMV. **Bacterial: “most important is Group A beta-haemolytic streptococci (GABHS)”** = *Strep. pyogenes*, **“most common cause in children (1/3 of cases) & about 10 % in adults”**.\n\n- **Read the stem:** commonest **CAUSE** = **viral**; commonest **ORGANISM** = **Streptococcus haemolyticus**. Both keys right. **Rheumatic fever is a consequence, never a cause.**\n\n||**Acute**|**Chronic**|\n|---|---|---|\n|**Non-specific**|Ordinary viral or bacterial pharyngitis and tonsillitis|Chronic pharyngitis (catarrhal, hypertrophic/granular, atrophic); chronic adenoiditis|\n|**Specific**|**Diphtheria · scarlet fever · Vincent’s · herpangina · mononucleosis · candidiasis**|**Syphilis · tuberculosis** (also scleroma, leprosy)|\n\n- **Chronic specific bacterial → syphilitic gumma or pharyngeal TB** (ulcer edges in *Diphtheria, mononucleosis…* below); both mimic malignancy — **biopsy a non-healing ulcer**. A **second branchial cleft fistula** is no pharyngitis. **Type set by** host immunity · organism and toxins · tissue response — so appearance does not name the organism: **“throat swab generally not helpful!”** Defect: printed “all except”, keyed “all of the above”. *(Bullet not in course material.)*\n\n|Type|Appearance|Organism|\n|---|---|---|\n|**Catarrhal (superficial)**|Surface epithelium only, mucus exudate, **tonsil NOT enlarged**|Usually **viral**|\n|**Follicular**|**Discrete yellow-white pus plugs at the crypt mouths**|**Bacterial (GABHS)**|\n|**Membranous**|Crypt exudate **coalesces into a sheet**|Bacterial, or specific|\n|**Parenchymatous**|**Whole substance uniformly enlarged and congested, no exudate**|Either|\n\n- Keyed false: *“tonsils will increase in size”* of the superficial types · *“viral can present with follicular tonsillitis”* (viral = catarrhal, membranous or **vesicular**). Keyed true: non-infective → catarrhal or parenchymatous · non-specific bacterial → membranous · monilial is fungal. Defect: one list offers **catarrhal** and **superficial** separately though synonymous. *(Morphology not in course material.)*\n\nSrc: L3",
        "qs": [
          "entep-throat-60",
          "entep-throat-73",
          "entqb-thr4-174",
          "entqb-thr4-176",
          "entqb-thr4-177",
          "entqb-thr4-179",
          "entqb-thr4-208",
          "entqb-thr4-178",
          "entqb-thr4-175",
          "entqb-thr4-180",
          "entqb-thr3-97",
          "entep-throat-case-4"
        ]
      },
      {
        "id": "tons-4",
        "w": "must",
        "h": "Acute tonsillitis — picture, treatment, complications",
        "body": "**L3:** common; **children, peak 5–7 yrs**, + young adults; viral or bacterial. **Acute sore throat, fever, malaise ± referred otalgia · severe odynophagia → dehydration · tender BILATERAL cervical lymphadenopathy · tonsils red and inflamed ± generalised pharyngitis · recurrence → chronic tonsillitis.**\n\n- **Vignette:** 5–15 yrs · abrupt **38.5–39 °C** · **white pus on enlarged red tonsils** · **tender jugulodigastric nodes** · **no cough, no rash, no hoarseness** → **streptococcal tonsillitis**; “no cough” = the **Centor / McIsaac** clause *(score not in course material)*.\n\n**Treatment (L3): 1** rest + plenty of fluids · **2** symptomatic for viral · **3** bacterial needs antibiotics — **penicillin V or ampicillin/clavulanic acid** · **4 tonsillectomy for recurrent acute (chronic) tonsillitis**.\n\n- **Penicillin first: GABHS never resistant; eradication prevents rheumatic fever and glomerulonephritis.** Failure → **amoxicillin-clavulanate, not a bigger dose** (beta-lactamase crypt commensals — **indirect pathogenicity**); check compliance, diagnosis, complication; allergy → macrolide. Course **10 days**; GG keys **2 weeks** for scarlet fever — as printed, no slide gives a duration. *(Not in course material.)*\n- **Ampicillin contraindicated in mononucleosis** → penicillin V in adolescents.\n\n**Complications (L3): quinsy · rheumatic fever · acute glomerulonephritis.**\n\n- **Rheumatic fever** — **children 5–15 yrs**, **2–3 weeks** after a strept sore throat, **overreaction of the immune system to GABHS**; **fever, polyarthritis, jerky movements (chorea)**, carditis → **permanent heart damage (rheumatic heart disease)**.\n- **Acute glomerulonephritis** — **haematuria, proteinuria, oliguria, high BP, generalised oedema**; **children recover in weeks, 30 % of adults → chronic kidney disease**.\n- **Quinsy** (taught in `ent-pharsupp`): pus **between tonsillar capsule and lateral pharyngeal wall** via the **crypta magna**; **adult males, usually unilateral**, **streptococcus haemolyticus**. **Trismus · soft palate swollen above and lateral, tonsil pushed DOWN AND MEDIALLY, uvula to the OPPOSITE side · cannot swallow his own saliva · torticollis to the affected side · pale yellowish point = drainable.** **Tonsillectomy one month after the acute subsides.**\n\nSrc: L3; L4",
        "qs": [
          "entep-throat-111",
          "entqb-thr4-203",
          "entqb-thr4-222",
          "entqb-thr4-230",
          "entqb-thr3-97",
          "entep-throat-case-4",
          "entqb-thr1-30",
          "entqb-thr4-240",
          "entqb-thr4-241",
          "entqb-thr4-200",
          "entqb-thr4-244",
          "entqb-thr4-176",
          "entep-throat-60"
        ]
      },
      {
        "id": "tons-5",
        "w": "must",
        "h": "Membrane over the tonsil — the master differential",
        "body": "**True membrane** = fused with necrotic epithelium — **adherent, bleeds when peeled, re-forms. Only diphtheria.** **False (pseudo)membrane** wipes off. *(Histology not in course material; “thick gray true membrane” is L3.)*\n\n|Cause|Membrane|Clincher|Treatment|\n|---|---|---|---|\n|**Diphtheria**|**TRUE — thick, grey, adherent, BLEEDS, spreads beyond the tonsil**|**BULL NECK**, toxaemia, **LOW fever**|Isolation + **antitoxin early** + antibiotics|\n|**Mononucleosis**|False, grey, wipes off|**Fatigue · GENERALISED nodes · hepatosplenomegaly · atypical lymphocytes · palatal petechiae**; high fever|Supportive. **NO ampicillin**|\n|**Vincent’s angina**|False — grey slough over a **punched-out ragged ULCER**, bleeding base|**UNILATERAL, tonsil + gums · foul metallic breath · bleeding gums · barely ill**; little fever|**Penicillin + metronidazole**|\n|**Candidiasis**|False — **easily scraped off**|**No fever, no pus** (settings in *Viral group and fungal pharyngitis*)|Antifungal|\n|**Agranulocytosis / leukaemia**|Grey necrotic slough over ulcers|Ill, bleeding, pallor — the **blood film** decides|Treat the blood disease|\n|**Acute follicular tonsillitis**|Confluent pus plugs|Discrete crypt plugs, **tender LOCAL nodes**, no cough, **HIGH fever**|Penicillin|\n|**Post-tonsillectomy slough**|White slough on the beds, **5–15 days**|**Normal secondary-intention healing**|Reassure|\n\n- **“All cause a membrane EXCEPT” — three printings, three odd-ones-out, each right against its own list: peritonsillar abscess · herpetic pharyngitis · scarlet fever.** GG prints **“trench fever”** meaning **Vincent’s angina**; historical name **trench mouth**.\n\nSrc: L3; L4",
        "qs": [
          "entep-throat-75",
          "entep-throat-134",
          "entqb-thr4-181",
          "entqb-thr4-221",
          "entqb-thr4-228",
          "entqb-thr4-222"
        ]
      },
      {
        "id": "tons-6",
        "w": "must",
        "h": "Diphtheria, mononucleosis, Vincent’s, scarlet fever",
        "body": "*Clincher, fever, treatment: table above.*\n\n**DIPHTHERIA (L3): *Corynebacterium diphtheriae*, gram-positive bacillus** · **respiratory droplets** · **DPT vaccination** prevents · exotoxin → sore throat, **breathing difficulties**, **skin sores and rash**. **Never dislodge the membrane. Laryngeal: hoarseness + DRY brassy cough** (“wet cough” keyed false); toxin → **myocarditis, peripheral neuropathy with palatal palsy**. **Contacts get active immunisation** (keyed true). **Isolate → AIRWAY → antitoxin early → antibiotics.** Defect: an option calls the membrane **“well-defined”**. *(Cough quality, toxin effects not in course material.)*\n\n**MONONUCLEOSIS (L3): Epstein-Barr virus**, saliva — **“Kissing disease”** · **common contagious illness** · **teenagers and young adults** · **rash + swollen spleen or liver** less common · **paracetamol; no contact sports 3–4 weeks (spleen rupture)**. **Paul-Bunnell / Monospot** = **non-specific IgM heterophile antibody**, often negative **week 1 and under 4 years**. **Ampicillin → florid rash in the great majority; NOT penicillin allergy. Steroids only for airway obstruction.** Defects: a treatment stem whose four options all contain an antibiotic (key = the only pair avoiding ampicillin); a **one-day unilateral membrane** still keyed mononucleosis, on the petechiae. *(Serology, rash, steroids, interval, petechiae not in course material.)*\n\n**VINCENT’S ANGINA — fusospirochaetal symbiosis: fusiform bacilli (*Fusobacterium*, anaerobes) + *Borrelia vincentii***, both mouth commensals; **poor oral hygiene, smoking**, malnutrition, immunosuppression, stress; smear shows both. **Penicillin** (*Borrelia*, streptococci) **+ metronidazole** (**anaerobes**); oral hygiene, chlorhexidine, debridement. Defect: the box claims metronidazole covers **“anaerobic and aerobic”** — anaerobes only. *(Absent from all 34 ENT files — not in course material.)*\n- **Ulcer edge:** ragged, punched-out, grey slough = **Vincent’s** · **“wash-leather”**, punched-out, may perforate = **syphilitic gumma** · raised, everted, indurated = **malignancy, biopsy** · shallow, undermined, exquisitely painful, + lung disease = **TB**. **“Punched-in and defined ulcers” keyed false.**\n\n**SCARLET FEVER** — streptococcal tonsillitis **+ a rash**; **erythrogenic exotoxin**, no immunity to the strain; **throat culture positive for group A streptococci**. **Abrupt fever, headache, sore throat, dysphagia, vomiting** · **ENANTHEM: WHITE strawberry tongue** (coated, red papillae), desquamating **day 4–5** to the **RED** one · **EXANTHEM: fine punctate SANDPAPER erythema**, neck + upper trunk, **sparing palms and soles**, **circumoral pallor**, **Pastia’s lines**; fades **3–4 days**, then **desquamation ~a week later — the deciding clause**. **The EXANTHEM resolves in 3–4 days, not the enanthem** (keyed false). **Full penicillin course**; amoxicillin-clavulanate second line; non-infectious after **~24 h**. *(Not in course material beyond GABHS and its sequelae.)*\n\nSrc: L3",
        "qs": [
          "entqb-thr4-182",
          "entqb-thr4-221",
          "entqb-thr4-181",
          "entep-throat-134",
          "entqb-thr4-222",
          "entqb-thr4-204",
          "entqb-thr4-205",
          "entqb-thr4-206",
          "entqb-thr4-207",
          "entqb-thr4-200",
          "entqb-thr4-228",
          "entep-throat-case-5",
          "entep-throat-76",
          "entqb-thr4-183",
          "entqb-thr4-184",
          "entqb-thr4-242",
          "entqb-thr4-178",
          "entqb-thr4-185",
          "entqb-thr4-243",
          "entqb-thr4-244"
        ]
      },
      {
        "id": "tons-7",
        "w": "high",
        "h": "The viral group, and fungal pharyngitis",
        "body": "**Viruses make VESICLES. Site and season name the virus.** Both give fever, sore throat and pain.\n\n||**Herpangina**|**Herpes simplex**|\n|---|---|---|\n|Virus|**Coxsackievirus** (enterovirus)|**HSV** — gingivostomatitis|\n|Site|**POSTERIOR — soft palate, tonsils, back of throat**; sores, blisters or ulcers|**ANTERIOR — gums, lips, tongue, inner cheeks**|\n|Season|**Summer**|**None**|\n|Treatment|**Symptomatic**|**Aciclovir**|\n\n- Herpangina: **dehydration the only real risk**; **check hands and feet** for **hand, foot and mouth disease** *(not in course material)*. **Herpetic pharyngitis is the “membrane except” answer.**\n- **HERPES ZOSTER (L3): reactivation of varicella-zoster** · **IX and X RARE, trigeminal commoner** · **UNILATERAL sore throat, painful vesicles along the affected nerve** · **early antiviral (famciclovir)**, within ~72 h, to avoid **post-herpetic neuralgia**. **Zoster never crosses the midline** (keyed false): one sensory ganglion. **Ramsay Hunt** = geniculate zoster — facial palsy, vesicles in concha and canal, severe otalgia.\n- **CANDIDIASIS (L3): most commonly *Candida albicans*; commonest oral fungal infection** · **denture wearers, antibiotic treatment, immunocompromised after chemoradiotherapy** · **white patches easily scraped off** · **topical and systemic antifungal treatment**.\n- **Scrapes off** (red, sometimes bleeding base) **= candidiasis**; **adherent** = **leukoplakia** (potentially malignant — **biopsy**), the **diphtheritic membrane** or **lichen planus** (lacy striae). **Unexplained adult thrush raises HIV** — L3 lists it among the viral causes — **diabetes or occult malignancy**. *(Bullet not in course material.)*\n- **Free-text case:** 4-year-old · dysphagia · **no fever** · **antibiotics for 10 days** · **white-coated tongue** · no pus → **moniliasis**. Nystatin or miconazole topically, fluconazole if extensive, **remove the cause** *(drugs not in course material)*.\n\nSrc: L3; L15",
        "qs": [
          "entqb-thr4-187",
          "entqb-thr4-245",
          "entqb-thr4-246",
          "entqb-thr4-189",
          "entep-throat-75",
          "entqb-thr4-178",
          "entqb-thr4-188",
          "entqb-thr4-202",
          "entep-throat-case-1",
          "entqb-thr4-177"
        ]
      },
      {
        "id": "tons-8",
        "w": "must",
        "h": "Chronic tonsillitis and chronic pharyngitis",
        "body": "**Chronic tonsillitis = RECURRENT ATTACKS OF ACUTE TONSILLITIS** — L3 defines it by recurrence, never by appearance; not a continuously sore throat, not a single quinsy.\n\n- **Signs: cheesy material oozing from the crypts on pressure over the anterior pillar** (most specific) · **anterior pillar congestion** · **firm, enlarged, NON-TENDER jugulodigastric nodes** — **bilateral, in a child, this is the diagnosis** · **irregular size, shape and crypts** · hypertrophy **or** a small fibrotic “septic” tonsil — **size alone means little**. **The submandibular salivary gland is not a sign.** *(Sign list not in course material.)*\n- **Cross-bank divergence, one word.** Endpoint keys **pillar congestion** as not a sign; GG, whose list reads **enlarged REGULAR crypts**, keys that. **Regular** crypts = normal variation; **irregular** crypts oozing cheese = chronicity. **Answer each bank its own way.**\n- **Chronic pharyngitis, four types: catarrhal** — congested boggy mucosa, excess mucus · **hypertrophic (granular)** — **granular posterior wall, hypertrophied follicles as red granules**, ± hypertrophied lateral bands · **atrophic** — **dry, thin, glazed, shiny**, crusting · **follicular**. **“Granular pharyngeal wall” → chronic hypertrophic.** *(Classification not in course material.)*\n- **Causes (L3):** chronic **mouth breathing** with **dry lips, tongue and pharynx**; **chronic nasal discharge with post-nasal drip**; plus smoking, dust, reflux *(not in course material)*. **Treat the cause** — a granular pharynx in a mouth-breathing child argues for the **adenoid**.\n\nSrc: L3",
        "qs": [
          "entep-throat-77",
          "entqb-thr4-224",
          "entqb-thr4-223",
          "entqb-thr4-225",
          "entep-mfe4-26",
          "entqb-thr3-98",
          "entqb-thr4-191",
          "entqb-thr4-208"
        ]
      },
      {
        "id": "tons-9",
        "w": "must",
        "h": "Hypertrophy, kissing tonsils, the unilateral tonsil",
        "body": "**Hypertrophy is a size finding, independent of inflammation.** L3 prints a slide headed **“KISSING TONSILS”**.\n\n- **Kissing tonsils = touching in the midline = grade 4. Brodsky: 0** in the fossa · **1** <25 % · **2** 25–50 % · **3** 50–75 % · **4** >75 % *(grading not in course material; “grade 4 = kissing tonsils” is the bank’s own, keyed true)*. **The grade never decides the operation — the symptoms do.**\n- **Vignette:** dysphagia, sleep apnoea, tonsils touching the midline, **no fever** → **chronic hypertrophic tonsillitis**. L9: **adenoid (most common cause in children), tonsillar hypertrophy, bulky tongue base** obstruct the pharynx; answered by **tonsillectomy** or **laser tonsillotomy**.\n- **Unilateral enlargement = cancer until biopsy says otherwise; the tonsillectomy is the biopsy** (indication 6, next section). Malignant: **squamous (epidermoid) carcinoma** commonest — smoking, alcohol, HPV · **lymphoma** · lymphoepithelioma · adenocarcinoma. **BENIGN: schwannoma.** *(All but L3’s lymphoma/epidermoid pair not in course material.)*\n- **Tonsilloliths** = calcified crypt debris.\n\nSrc: L3; L9",
        "qs": [
          "entqb-thr4-172",
          "entqb-thr4-168",
          "entqb-thr4-197",
          "entqb-thr3-98"
        ]
      },
      {
        "id": "tons-10",
        "w": "must",
        "h": "Indications for tonsillectomy",
        "body": "**L3, complete — the numbers are examined verbatim.**\n\n1. **Recurrent acute tonsillitis (chronic tonsillitis)** — **7+ documented episodes in one year**, **or 5+ for 2 years**, **or 3+ for 3 years**.\n2. **Peritonsillar abscess (quinsy).**\n3. **Tonsillitis causing febrile seizures.**\n4. **Bilateral tonsillar hypertrophy** causing **airway obstruction, difficulty in deglutition and/or interference with speech**.\n5. **Tonsilloliths with unpleasant halitosis.**\n6. **Suspicion of tonsillar malignancy** — **unilateral enlarged tonsil**, lymphoma or epidermoid carcinoma.\n\n- **Duration matters as much as the count:** *6 a year for two years* qualifies; **five in a single year does not** (7 is the one-year threshold).\n- **“Documented” = recorded by a clinician** *(not in course material)*. **Every indication is a consequence, never tonsil size**; **loss of appetite is not one.**\n\nSrc: L3",
        "flow": {
          "title": "Should this tonsil come out?",
          "steps": [
            {
              "k": "decision",
              "t": "Unilaterally enlarged tonsil, or suspicion of malignancy?",
              "yes": "Tonsillectomy as a biopsy — lymphoma or epidermoid carcinoma until proved otherwise",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Obstruction — sleep apnoea, difficult swallowing, speech interference?",
              "yes": "Tonsillectomy, with adenoidectomy if indicated",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Quinsy, or a febrile seizure with tonsillitis?",
              "yes": "Tonsillectomy — quinsy one month after the acute episode settles",
              "no": "Continue"
            },
            {
              "k": "step",
              "t": "Count DOCUMENTED episodes of acute tonsillitis",
              "n": "7 in one year · OR 5+/year for 2 years · OR 3+/year for 3 years"
            },
            {
              "k": "decision",
              "t": "Does the count reach any one threshold?",
              "yes": "Tonsillectomy for chronic (recurrent acute) tonsillitis",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Tonsilloliths with disabling halitosis?",
              "yes": "Tonsillectomy",
              "no": "No indication — treat medically and keep a documented record"
            },
            {
              "k": "alert",
              "t": "Never operate during an acute attack",
              "n": "Defer 3–6 weeks: friable hyperaemic tissue, spreading sepsis, a harder airway"
            },
            {
              "k": "alert",
              "t": "Check for a bleeding disorder first",
              "n": "Haemophilia is the absolute contraindication. The mandatory investigation is a CBC"
            }
          ]
        },
        "qs": [
          "entqb-thr4-193",
          "entqb-thr4-161",
          "entqb-thr4-160",
          "entqb-thr4-172",
          "entqb-thr4-223",
          "entqb-thr4-197",
          "entep-throat-case-4",
          "entqb-thr3-98"
        ]
      },
      {
        "id": "tons-11",
        "w": "must",
        "h": "Tonsillectomy — contraindications, work-up, techniques",
        "body": "- **ABSOLUTE: a bleeding disorder — haemophilia is the key both banks give**, also leukaemia and thrombocytopenia; the beds heal **by secondary intention** over ~2 weeks. **ABSOLUTE: overt or submucous cleft palate** — tonsils and pillars aid velopharyngeal closure.\n- **RELATIVE: acute tonsillitis or any acute infection — defer 3–6 weeks** (except a deliberate “hot” tonsillectomy for quinsy) · **uncontrolled systemic disease**, though **well-controlled diabetes is NOT one** · **poliomyelitis epidemic or immediate post-vaccination** · **age under 3, overridden by OSA**. **Chronic tonsillitis, quinsy, septic atrophic tonsils and hypertrophy with sleep apnoea are INDICATIONS**; “below 5 years” is no bar. *(List not in course material beyond L3 on bleeding: blood disease e.g. haemophilia, leukaemia.)*\n- **Work-up, the same for adenoidectomy. Mandatory: CBC** — haemoglobin, platelets; **not** ESR, CRP or ASOT. Add a coagulation screen + **personal and family bleeding history**; **no aspirin for 10 days**; congenital heart disease → intensive monitoring; **examine the palate for a bifid uvula or notched hard palate**.\n\n\n|#|**Technique (L3)**|Trade-off|\n|---|---|---|\n|1|**Cold dissection / ligation** — scissors, scalpel or snare, no heat|**Minimises tissue damage but MORE intraoperative bleeding**|\n|2|**Electrocautery (diathermy)** — cuts and seals vessels|**Less bleeding but MORE postoperative pain**|\n|3|**Coblation** — bipolar radiofrequency plasma, **40–70 °C against cautery 400 °C**|Less damage, faster recovery|\n|4|**Microdebrider** — powered rotatory shaver; **partial tonsillectomy (tonsillotomy)** for **airway obstruction in children**|Faster recovery, less pain|\n|5|**LASER, harmonic scalpel**||\n\n- **EXTRACAPSULAR (total)** — entire tonsil + capsule, **exposing the superior constrictor**; for recurrent **infection**. **INTRACAPSULAR (partial)** — majority removed, **capsule left to protect the muscle**, less pain; for **obstruction**; **residual tissue can regrow**. **Least pain and haemorrhage = the partial procedure, whatever the instrument.** *(Regrowth not in course material.)*\n\nSrc: L3",
        "qs": [
          "entep-throat-124",
          "entqb-thr4-192",
          "entqb-thr4-226",
          "entep-throat-59",
          "entqb-thr4-162",
          "entqb-thr4-164",
          "entqb-thr4-194",
          "entqb-thr4-163",
          "entqb-thr4-172"
        ]
      },
      {
        "id": "tons-12",
        "w": "must",
        "h": "Post-operative haemorrhage, and the other nine complications",
        "body": "**L3: haemorrhage in less than 5 % of cases.**\n\n||**PRIMARY**|**REACTIONARY**|**SECONDARY**|\n|---|---|---|---|\n|When|**During the operation**|**Within 24 h** (classically 6–12 h)|**5–10 days**, from **2ry infection**|\n|Tonsil|Surgical trauma; bleeding disorder|**High BP · SLIPPED LIGATURE · dislodged clot**|**Infection of the granulating bed; the slough separates**|\n|Adenoid|**REMNANT ADENOID TISSUE**; blood disease; **wrong diagnosis — angiofibroma**; prominent atlas|**DISLODGED CLOT** — nothing is ligated in an adenoidectomy|Infection|\n|Do|Control on the table|**Theatre** if brisk: remove clot, secure the bleeder|**ADMIT · OBSERVE · IV ANTIBIOTICS · IV FLUIDS**; surgery only if heavy or persistent|\n\n- **Rising pulse = first sign of a child swallowing blood; falling BP is late** — **look in the mouth**. Pulse and BP = the **primary concern of postoperative care**; also repeated swallowing, pallor, restlessness; nurse lateral, head down. **Admit every secondary bleed, however small.** **“Delayed haemorrhage” is not a category.** *(Not in course material.)*\n- **The white slough at one week is normal healing** — L3: **secondary intention with a white slough**, at **5, 10 and 15 days**; **fever, worsening pain and halitosis mean infection**. **Pain worsens around days 5–7**; **negative-pressure pulmonary oedema** follows relief of long-standing obstruction after adenotonsillectomy for severe OSA. *(Both not in course material.)*\n\n|#|**L3’s complications 2–10**|Cause|\n|---|---|---|\n|2|**Dehydration**|Poor fluid intake **caused by PAIN**|\n|3|**Dental injury**|Intubation, mouth gag|\n|4|**Lingual nerve palsy**|Prolonged mouth gag tongue-blade pressure; usually temporary|\n|5|**Internal carotid artery injury — catastrophic**|Deep tonsillar bed cautery, suturing or dissection|\n|6|**Uvular oedema**|Bilateral obstruction of uvular veins; may obstruct respiration|\n|7|**Velopharyngeal incompetence** — nasal regurgitation, nasal tone|Palatal paresis (temporary); **palatal shortening by fibrosis (permanent)**|\n|8|**Oropharyngeal stenosis**|Excessive cautery injury; very difficult to treat|\n|9|**Chest complications “including pneumonia”**|Aspiration during or immediately after surgery|\n|10|**Anaesthesia complications + haemorrhage = the majority of deaths**||\n\nSrc: L3",
        "flow": {
          "title": "Bleeding after tonsillectomy or adenoidectomy",
          "steps": [
            {
              "k": "decision",
              "t": "Is the bleeding DURING the operation?",
              "yes": "Primary — control on the table. After adenoidectomy think residual adenoid tissue",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Is it WITHIN 24 HOURS?",
              "yes": "Reactionary — high BP, slipped ligature (tonsil) or dislodged clot (adenoid)",
              "no": "5–10 days means SECONDARY"
            },
            {
              "k": "alert",
              "t": "Rising pulse with no visible bleeding = a swallowed bleed",
              "n": "Look in the mouth. Falling BP is a late sign in a child"
            },
            {
              "k": "step",
              "t": "Reactionary — resuscitate, examine the fossa, remove clot",
              "n": "Theatre if brisk or continuing"
            },
            {
              "k": "step",
              "t": "Secondary — admit, observe, IV antibiotics, IV fluids",
              "n": "An infection problem before a surgical one"
            },
            {
              "k": "decision",
              "t": "Heavy, or continuing despite treatment?",
              "yes": "Theatre — examine under GA, secure the bleeding point",
              "no": "Continue antibiotics; group and save, transfuse only for a genuinely low Hb"
            },
            {
              "k": "alert",
              "t": "Admit every secondary bleed, however small",
              "n": "A few drops can herald a major bleed, and swallowed blood hides the loss"
            }
          ]
        },
        "qs": [
          "entep-throat-18",
          "entep-throat-87",
          "entep-throat-117",
          "entep-throat-132",
          "entep-throat-133",
          "entep-nose-51",
          "entep-mfe4-25",
          "entep-mfe5-37",
          "entep-mfe5-38",
          "entep-mfe5-39",
          "entqb-thr4-195",
          "entqb-thr4-198",
          "entqb-thr4-199",
          "entqb-thr4-229",
          "entqb-thr4-231",
          "entqb-thr4-173",
          "entqb-thr4-215",
          "entep-throat-case-18",
          "entqb-thr4-196",
          "entqb-thr4-192",
          "entep-throat-109",
          "entqb-thr4-233"
        ]
      },
      {
        "id": "tons-13",
        "w": "must",
        "h": "Adenoid hypertrophy — the two obstructions, and diagnosis",
        "body": "**Two obstructions (L3).**\n\n|Route|Consequences|\n|---|---|\n|**1. NASAL — mouth breathing**|**SNORING ± sleep apnoea · dry bleeding gums · dry lips, tongue and pharynx · DENTAL CARIES**|\n|**1. NASAL — discharge + post-nasal drip**|**Chronic irritant cough**, even **laryngismus stridulus**|\n|**1. NASAL — chronic CO₂ retention**|**Lassitude, dullness, nightmares, NOCTURNAL ENURESIS**|\n|**1. NASAL — other**|**Nasal tone of voice · retarded general growth**|\n|**ADENOID FACIES**|**Open mouth · thick lips · hitched-up upper lip · protruding upper incisors · receding chin · INACTIVE ala nasi · absent nasolabial folds · high arched palate**|\n|**2. EUSTACHIAN TUBE**|**Frequent ear infections (AOM) · intermittent earaches · conductive hearing loss · chronic middle ear effusion (OME)**|\n\n- One midline mass blocks **both** tubes, ~1.5 cm behind the posterior end of the inferior turbinate. **Keyed complication of chronic adenoiditis = recurrent otitis media; recurrent BILATERAL AOM failing adequate medical treatment → adenoid hypertrophy**, answered surgically. **Do not cauterise the torus tubarius** — scarring gives a **permanent middle-ear effusion**. **Recurrent ear disease + mouth breathing needs a hearing test** *(not in course material)*.\n- **Traps: dental caries genuinely belongs** · **only enuresis comes through the hypercapnia route** · **adenoid facies = longstanding bilateral nasal obstruction from ANY cause** · **the skeletal changes do not reverse**, so operate early · among orthodontic complications **Hutchinson’s notched incisors are the odd one out** — congenital syphilis, with interstitial keratitis and deafness (**Hutchinson’s triad**) *(last two not in course material)*.\n- **Laryngismus stridulus** — named, undefined on the slide: **paroxysmal reflex adductor spasm of the larynx**, nocturnal; **post-nasal drip, hypercapnia and cold dry mouth-breathed air** each trigger it, so a stem offering all three keys **all of the above** *(definition not in course material)*.\n- **Infant vignette:** 10-month-old · mouth breathing · sleep apnoea · **difficult suckling** → **adenoid hypertrophy** (infants are obligate nasal breathers). Not **bilateral choanal atresia** (at birth, cyclical cyanosis relieved by crying), **antrochoanal polyp** (older child, unilateral) or **angiofibroma** (adolescent male, epistaxis). Also **commonest cause of mouth breathing in a 5-year-old** *(not in course material)*.\n- **Diagnosis (L3, in its order): 1 clinical picture · 2 endoscopic (flexible or rigid) examination · 3 plain X-ray nasopharynx, LATERAL view.** Best **imaging** → **plain lateral X-ray**; optimum **modality** with **flexible nasopharyngoscopy** offered → the **endoscope**. **Lateral, not AP.** **CT** for bone or malignancy · **MRI** for a nasopharyngeal mass · **ultrasound cannot cross air** *(comparisons not in course material)*.\n- **Grading:** no slide grades the adenoid. GG keys **contact with the soft palate = grade 3**, grade 4 = complete choanal obstruction — give that; **Parikh calls the same finding grade 4**. *(Both systems not in course material.)*\n\nSrc: L3; L1.2; L9",
        "qs": [
          "entqb-thr4-156",
          "entqb-thr4-157",
          "entqb-thr4-158",
          "entqb-thr4-211",
          "entqb-thr4-217",
          "entqb-thr4-219",
          "entqb-thr4-155",
          "entqb-thr4-220",
          "entep-mfe1-3",
          "entqb-thr4-191",
          "entqb-thr4-167",
          "entqb-thr4-160",
          "entep-nose-56",
          "entep-nose-75",
          "entep-throat-110",
          "entep-enr-11",
          "entqb-thr4-232",
          "entqb-thr4-159"
        ]
      },
      {
        "id": "tons-14",
        "w": "must",
        "h": "Adenoidectomy — indications, techniques, complications",
        "body": "|#|**Indication (L3)**|**Technique (L3)**|**Complication (L3)**|\n|---|---|---|---|\n|1|**Obstructive sleep-disordered breathing — MOST COMMON**|**Curettage** — spoon-shaped curette; fast, but **BLIND or mirror-guided, may leave residual tissue** → primary bleeding, persistent symptoms, recurrence|**HAEMORRHAGE — most common**; causes in the table above|\n|2|Recurrent/chronic otitis media — **5+ a year, or 3+ a year over two years**|**Suction diathermy** — vaporises tissue, **less intraoperative bleeding**|**Infection**, local or descending|\n|3|OME — **adenoidectomy + ear tube insertion**|**Coblation** — temperatures in the previous section|**Dental injury** — intubation, mouth gag|\n|4|Chronic adenoiditis/sinusitis — **over 3 months, not responding to antibiotics**|**Microdebrider-assisted** — powered rotating blade, thin-layer resection **under direct visualisation**|**Eustachian tube injury**|\n|5|**Orofacial/dental changes** from persistent mouth breathing|**Endoscopic-guided** — camera endoscope, **transorally or transnasally, during any of the above**|**Recurrence** — very young, or incomplete removal (**no capsule**)|\n|6|||**Velopharyngeal insufficiency**, esp. **unnoticed submucous cleft palate**|\n\n- Persistent adenoiditis + recurrent URTIs + recurrent otitis media → **“all of the above”**. **Not indications: allergic rhinitis** (medical) · **loss of appetite** · **adenoid size**.\n- **Ladder. 2-year-old**, dental abnormalities, recurrent earaches, recurrent rhinosinusitis, mucus behind the soft palate → **conservative until age 3** · **+ night snoring and daytime sleepiness** → **adenoidectomy now** · **4-year-old, same picture + a soft palate cleft into two halves** → **partial (superior) adenoidectomy only**.\n- **Under 3, wait** — regrowth, natural involution, anaesthetic risk *(cut-off is the bank’s own, not in course material)*. **OSA overrides:** hypoxia, **failure to thrive**, irreversible orofacial change, cor pulmonale.\n- Defect: a microdebrider stem omits “microdebrider-assisted” — **endoscopic-guided** is the best offered.\n- **GA always**; work-up as for tonsillectomy. **Keyed NOT true: “tonsillectomy then adenoidectomy”** — **adenoid first**, then pack the nasopharynx. **Discharge** a day case; GG keys **3 hours** — as printed; most units observe 4–6 h, admitting for OSA, bleeding tendency, comorbidity or age under 3. *(Both not in course material.)*\n- **Nasal septum cannot be injured** (transoral); nasal stenosis is not a complication. **Angiofibroma:** curetting → torrential haemorrhage; at risk = **adolescent male, nasal obstruction AND epistaxis**. **Primary goal of pre-op evaluation = bleeding risk**, so **haemophilia** is the keyed cause of primary bleeding.\n- **VPI (L1.2): velopharyngeal sphincter** closes by **postero-superior movement of the soft palate, medial movement of the lateral pharyngeal walls, slight anterior movement of the posterior wall (Passawnt’s bridge)**, **uvula perfecting the closure**; **the adenoid pad is part of the surface the palate closes against** → removal in a short or cleft palate gives **hypernasality (rhinolalia aperta) and nasal regurgitation**. **“Unnoticed” is the warning:** look for **bifid uvula**, **blue midline translucent zone**, **notch in the posterior hard palate** *(signs not in course material)*. **Answer: partial (superior) adenoidectomy.**\n- **Grisel’s syndrome** — **non-traumatic atlanto-axial subluxation after a URTI or adenoidectomy**, **children**, days to a fortnight later; **painful torticollis** (“cock-robin”), dismissed as a stiff neck; **CT craniocervical junction**; rest, analgesia, collar, antibiotics, then traction or fusion; **unrecognised → spinal cord compression**. *(Not in course material; L3 gives only “injury to cervical vertebrae: dt. prominent atlas”.)*\n\nSrc: L3; L1.2; L9",
        "flow": {
          "title": "An obstructing adenoid — operate, wait, or do a partial?",
          "steps": [
            {
              "k": "decision",
              "t": "Cleft palate, submucous cleft, bifid uvula or notched hard palate?",
              "yes": "Partial (superior) adenoidectomy only — leave the inferior pad, or velopharyngeal insufficiency follows",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Obstructive sleep apnoea — witnessed apnoeas, snoring with daytime sleepiness, failure to thrive?",
              "yes": "Adenoidectomy now, whatever the age — OSA overrides the under-3 rule",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Is the child under 3 years old?",
              "yes": "Conservative — treat predisposing factors and review. Regrowth, natural involution and anaesthetic risk all argue for waiting",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Recurrent/chronic otitis media (5+/yr, or 3+/yr for 2 yrs), or OME?",
              "yes": "Adenoidectomy — add grommets if there is an effusion",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Chronic adenoiditis or sinusitis over 3 months not responding to antibiotics, or established orofacial change?",
              "yes": "Adenoidectomy",
              "no": "No indication — adenoid size alone is never one"
            },
            {
              "k": "alert",
              "t": "Allergic rhinitis is a medical problem",
              "n": "Not an indication for adenoidectomy, however blocked the nose is"
            }
          ]
        },
        "qs": [
          "entep-throat-35",
          "entqb-thr4-160",
          "entqb-thr4-161",
          "entqb-thr4-234",
          "entqb-thr4-235",
          "entqb-thr4-236",
          "entqb-thr4-155",
          "entqb-thr4-219",
          "entqb-thr4-163",
          "entqb-thr4-233",
          "entqb-thr4-162",
          "entqb-thr4-237",
          "entqb-thr4-164",
          "entqb-thr4-173",
          "entqb-thr4-166",
          "entqb-thr4-167",
          "entqb-thr4-213",
          "entqb-thr4-215",
          "entqb-thr4-216",
          "entqb-thr4-238",
          "entep-nose-51",
          "entep-mfe4-25",
          "entqb-thr4-231"
        ]
      }
    ]
  },
  "ent-aom": {
    "intro": "Two diseases separated by one clause: **pain = acute otitis media, painless hearing loss = effusion.** Then three rules the bank never tires of — the four stages, the three-month clock, and **unilateral effusion in an adult = nasopharyngeal carcinoma.** Ear trauma is filed here.",
    "sections": [
      {
        "id": "aom-1",
        "w": "must",
        "h": "The cleft, the tube, and the two halves of the drum",
        "body": "**Cleft = 4 parts: Eustachian tube · tympanic cavity · mastoid antrum · mastoid air cells.** Antrum = largest air cell, via the aditus.\n**Routes: 1) TUBE, commonest** — rhinitis, sinusitis, adenoiditis, milk, vomitus, nasal packing **· 2) perforated drum · 3) haematogenous**, rare, immunocompromised.\n**Tube** = middle ear → nasopharynx; ventilates and drains it. **Upper 1/3 BONY, always PATENT · lower 2/3 CARTILAGINOUS, potentially closed, OPENS ON YAWNING AND SWALLOWING** by **tensor + levator veli palatini**. **Child: SHORTER, WIDER, MORE HORIZONTAL** — infection commoner in infants.\n**Closed tube → gas absorbed → NEGATIVE intratympanic pressure → TRANSUDATION.**\n\n||**PARS TENSA**|**PARS FLACCIDA** (Shrapnell)|\n|---|---|---|\n|Layers|skin + **FIBROUS** + mucosa|skin + mucosa, **no fibrous layer**|\n|Site|below lateral process|attic, above it|\n|Pus, positive pressure|**PERFORATES FIRST**|—|\n|Negative pressure|late|**RETRACTS FIRST**|\n|Ends as|central, safe perforation|**attic pocket → cholesteatoma**|\n\n- AOM hole: **small · central · pars tensa · antero-inferior**, thinnest and most dependent. **Umbo and handle = attachment points. POSTERO-SUPERIOR = DANGEROUS**: incudostapedial joint, stapes, chorda tympani, facial nerve 2nd genu. *(Quadrants not in course material.)*\n- Defect: a box calls the **bony** end the muscle-opened end; it is the **cartilaginous** end.\n\nSrc: L21.1; L21.2; L22",
        "qs": [
          "entqb-ear1-16",
          "entqb-ear1-17",
          "entqb-ear3-51",
          "entqb-ear3-50",
          "enthd-ear-4",
          "enthd-ear-24",
          "entqb-ear3-57",
          "entqb-ear4-113",
          "entep-ear-237"
        ]
      },
      {
        "id": "aom-2",
        "w": "must",
        "h": "Acute otitis media — definition, organisms, aetiology",
        "body": "**Definition:** infection **involving the middle ear**; drum **inflamed and opaque**, vessels **dilate**, fluid accumulates; **inflammation confined to the mucoperiosteal layer of the cleft**. **SUPPURATIVE = bacterial**; disease of the **cleft**. **Acute < 3 weeks · subacute 3 weeks–3 months · chronic > 3 months** *(durations not in course material).*\n**BACTERIAL: β-haemolytic streptococcus · *Streptococcus pneumoniae* · *Haemophilus influenzae* · *Moraxella*. VIRAL: influenza · adenovirus · measles. Pneumococcus ≈ 50 %**; rank **pneumoniae > influenzae > Moraxella**; specific **“Pneumococci”** beats generic “Streptococcus”. ***Pseudomonas*, *Staph. aureus* (furuncle), *Aspergillus*/*Candida* = CANAL organisms.**\n**Aetiology: 1) pre-existing middle ear effusion** — adenoids · nasopharyngeal carcinoma · post-nasal packing · cleft palate · nasal allergy **· 2) faulty lactation technique · 3) gastro-oesophageal reflux.**\n- **First-year recurrent AOM → breast feeding FLAT.** **Recurrent BILATERAL AOM in a child → ADENOID**, midline between both orifices, **2–6 yrs** — AOM, earache, CHL, chronic effusion.\n- **HYPOnasal = adenoid · HYPERnasal + nasal regurgitation = CLEFT PALATE. Mastoiditis is a complication, not a cause.**\n\nSrc: L21.1; L21.2; L3",
        "qs": [
          "entqb-ear3-50",
          "entqb-ear3-51",
          "entqb-ear3-52",
          "entqb-ear3-84",
          "entep-ear-47",
          "entep-ear-147",
          "entep-ear-203",
          "enthd-ear-12",
          "entep-ear-233",
          "entep-case-13"
        ]
      },
      {
        "id": "aom-3",
        "w": "must",
        "h": "The four stages, and before versus after perforation",
        "body": "**1) Acute catarrhal — E.T. occlusion** (blocked feeling, dull or retracted drum, no pus) **· 2) A.S.O.M before perforation · 3) A.S.O.M after perforation · 4) resolution or complications.** **“Stage of salpingitis” is not one.**\n**Stage 2 pathology:** hyperaemia and swelling of the mucoperiosteum lining **the whole cleft**, signs confined to the tympanic cavity; **outpouring of serum from dilated subepithelial capillaries**; **exudate under tension**.\n\n||**BEFORE perforation**|**AFTER perforation**|\n|---|---|---|\n|Pain|**SEVERE, throbbing**|**“should disappear”**|\n|Fever|present, constitutional upset|**lessened**|\n|Hearing|**very slightly affected**|**loss INCREASES**|\n|Discharge|**none**|haemorrhagic → **serosanguineous** → mucopurulent|\n|Drum|injected → **BULGING, nippling**|small central pars tensa hole|\n|Infant|**pulling at the ear, irritability**|—|\n\n- **Perforation is RELIEF. Earache FOLLOWING a URTI** — cold, forceful nose-blowing, tonsillitis.\n- **“If myringotomy is not done, spontaneous perforation will occur”** — a ragged tear. **Pulsating (light-house) discharge** = active suppuration *(not in course material)*. **Pain returning, or never settling, = a complication.**\n\nSrc: L21.1",
        "qs": [
          "entep-ear-235",
          "entqb-ear3-53",
          "entep-ear-183",
          "entep-ear-104",
          "entep-ear-110",
          "entep-case-36",
          "entep-case-8",
          "entep-case-10"
        ]
      },
      {
        "id": "aom-4",
        "w": "must",
        "h": "Reading the drum and the discharge",
        "body": "*(AOM drum → the stage table above · effusion drum → the AOM-vs-OME table below. The rest:)*\n\n|Drum|Means|Pain|\n|---|---|---|\n|Attic/marginal hole, scanty **fetid** discharge|unsafe CSOM → `ent-csom`|no|\n|**Chalky white plaques**|tympanosclerosis|no|\n|**Blue-black**|haemotympanum, high jugular bulb|no|\n\n- **Severe pain + retracted is self-contradictory:** retraction = negative pressure = effusion = painless.\n- AOM discharge **mucopurulent AND odourless**; **odourless excludes cholesteatoma** (fetor = osteitis). **Mucoid proves the source — no mucous glands in the EAC. Pure purulent = mucosa destroyed. Profuse, re-accumulating after cleaning = reservoir sign → mastoiditis.**\n- **AOM hearing loss is CONDUCTIVE. SNHL or vertigo during AOM = labyrinthitis.**\n\nSrc: L21.1; L17,18",
        "qs": [
          "entqb-ear3-85",
          "entqb-ear3-55",
          "entqb-ear3-54"
        ]
      },
      {
        "id": "aom-5",
        "w": "must",
        "h": "Treatment of AOM, and myringotomy",
        "body": "**Medical: 1) antibiotics UNTIL RESOLUTION · 2) antihistaminics · 3) decongestant · 4) analgesic and antipyretics. Surgical: myringotomy ± grommet or T-tube.**\n- **48-h rule:** healthy child, **first uncomplicated** attack, **congested not bulging** drum → analgesia + antipyresis, **review at 48 h**; antibiotics if no improvement by **48–72 h**. **Excluded: < 6 months**, toxic, bilateral in the very young, perforated, recurrent, immunocompromised *(not in course material).*\n- **Non-resolution = inadequate antibiotic therapy**; **recurrence** = URTIs, nasal obstruction, low immunity. **AOM is CLINICAL** — image only a suspected complication.\n- Defect: GG keys **immediate antibiotics** while its own box describes **observe, treat if no improvement in 48–72 h** — keyed as printed.\n**Myringotomy = deliberate incision; RADIAL, ANTERO-INFERIOR, never postero-superior. Indications:** impending perforation (**bulging, nippling**) · **thick drum in a child** · **complication — facial palsy or labyrinthitis, myringotomy FIRST** · unresponsive AOM · **secretory OM after failed medical treatment** (operation of choice) · **atelectasis** · small inadequately draining or high attic perforation.\n- **Not indications:** a **CONGESTED drum** (no fluid under tension) · **OTOSCLEROSIS** (dry ear, normal drum).\n- **MYRINGOtomy makes a hole · MYRINGOplasty closes one · TYMPANOplasty = myringoplasty + ossiculoplasty · STAPEDECTOMY replaces a fixed stapes.** Tube complications: **residual perforation · tympanosclerosis · otorrhoea through the tube · early extrusion or blockage.**\n\nSrc: L21.1; L21.2; L15",
        "qs": [
          "entep-ear-2",
          "entqb-ear3-79",
          "entqb-ear3-56",
          "entep-ear-230",
          "entep-ear-142",
          "entep-ear-70",
          "entep-ear-87",
          "entep-ear-166",
          "entqb-ear3-86",
          "entep-ear-237"
        ]
      },
      {
        "id": "aom-6",
        "w": "must",
        "h": "Acute NECROTIC otitis media",
        "body": "*(Absent from all 34 cached ENT files — **not in course material**.)*\n\n||**Ordinary suppurative OM**|**ACUTE NECROTIC OM**|\n|---|---|---|\n|Organism|pneumococcus, H. influenzae|**GROUP A β-HAEMOLYTIC STREP**|\n|Setting|after a cold|**debilitated child during/after an exanthem — MEASLES, scarlet fever, influenza**|\n|Mechanism|mucosal inflammation|**exotoxins thrombose the drum’s vessels**|\n|Discharge|**mucopurulent, odourless, profuse**|**PURE PURULENT, scanty**|\n|Perforation|small, central|**LARGE, KIDNEY-SHAPED**, may take the annulus|\n|Middle ear|congested mucosa|**BARE PROMONTORY**|\n|Healing|spontaneous|**never — needs MYRINGOPLASTY**|\n\n- **First to die: the central kidney-shaped pars tensa; manubrium, annulus and pars flaccida resist longer.**\n- **Immediate step = antibiotics; treatment of the entity = MYRINGOPLASTY** — myringotomy is pointless.\n- **Name trap: otitis MEDIA** = group A strep, child, post-measles. **Malignant otitis EXTERNA** = ***Pseudomonas***, elderly uncontrolled diabetic, skull-base osteomyelitis, cranial nerve palsies, 3–6 months IV cover.\n\nSrc: L17,18 (externa only)",
        "qs": [
          "entep-ear-86",
          "entep-ear-158",
          "entqb-ear3-58",
          "entqb-ear3-59",
          "entqb-ear3-61",
          "entqb-ear3-81"
        ]
      },
      {
        "id": "aom-7",
        "w": "must",
        "h": "Complications of AOM — the boundary",
        "body": "**Complication = extension beyond the confines of the middle ear cleft. Cranial: acute mastoiditis and mastoid abscess — MOST COMMON**, by **continuity** through the aditus · petrositis · labyrinthitis · facial paralysis. **Intracranial and extracranial groups: `ent-csom`.**\n- **AOM + post-auricular redness and tenderness = ACUTE MASTOIDITIS**, pinna out and down; sulcus **preserved**, then **obliterated** with a subperiosteal abscess. **Mastoiditis → antibiotics; mastoid abscess → cortical mastoidectomy.**\n- Petrositis = **Gradenigo** (otorrhoea + retrobulbar V pain + VI palsy) · labyrinthitis = vertigo + SNHL · extradural abscess = no local sign.\n- Look-alike: **furunculosis with post-auricular lymphadenitis** — **tragal tenderness**, discrete mobile node, normal middle ear.\n\nSrc: L16",
        "qs": [
          "entep-ear-50",
          "entep-enr-9"
        ]
      },
      {
        "id": "aom-8",
        "w": "must",
        "h": "Otitis media with effusion — definition, AOM vs OME, causes",
        "body": "**“A NON-SUPPURATIVE middle ear fluid”** — no active infection: **no pain, no fever. Infants and young age, peak 6–24 MONTHS, rises in WINTER and SPRING.**\n\n||**ACUTE OTITIS MEDIA**|**EFFUSION** (glue ear, SOM, MEE)|\n|---|---|---|\n|Nature|**suppurative**|**NON-SUPPURATIVE**|\n|Onset|**rapid**, with a cold|**insidious**|\n|Pain / fever|**severe throbbing / present**|**NONE / absent**|\n|Drum|red → **BULGING** → perforates|**intact, DULL, umber-yellow, RETRACTED, landmarks lost**|\n|Complaint|pain; infant ear-pulling|**HEARING LOSS ONLY**|\n|Hearing|slight, then increases|**mild-to-moderate CONDUCTIVE, bilateral**|\n|Tympanogram|—|**FLAT, TYPE B**|\n\n**Three routes: 1) persistence of fluid after an AOM resolves** (commonest) **· 2) Eustachian tube malfunction · 3) air-pressure trauma — flight or scuba dive. Organisms: group A β-haemolytic streptococci, H. influenzae. Pathology:** dilated intercellular spaces, **disrupted basement membrane · PNL + lymphocytes + macrophages · histamine, leukotrienes. Fluid: SEROUS** (sterile, pale yellow, watery, translucent — the one that bubbles) **· MUCOID** (cloudy, cell secretion, glue, in SOM) **· PURULENT** (in ASOM).\n\n|Cause|Mechanism|\n|---|---|\n|**Adenoids, adenoiditis**|**obstruct the tubal orifice** + reservoir|\n|**Cleft palate**|**tensor and levator dysfunction · tube stenosis** → **T-tube**|\n|Allergic oedema|with adenoiditis, sinusitis, rhinitis|\n|Viral · immune deficiency · radiotherapy|tubal oedema · recurrent infection · fibrosis|\n|**Iatrogenic, post-adenoidectomy**|listed as cause **and** cure|\n|**Nasopharyngeal carcinoma**|adult, unilateral|\n|**Barotrauma**|**flight or scuba dive**; fullness **ON DESCENT**, retracted drum with bubbles|\n\n- **Barotrauma prevention = REGULAR SWALLOWING** (sweets, gum, drinking). Do not fly with a URTI. **Autoinflation: Valsalva, gum chewing.**\n\nSrc: L21.2; L21.1",
        "qs": [
          "entqb-ear3-68",
          "entep-ear-234",
          "entep-ear-141",
          "entep-case-11",
          "entep-case-24",
          "entep-throat-case-2",
          "entqb-ear3-75",
          "entep-ear-189",
          "entep-case-13",
          "entep-ear-233"
        ]
      },
      {
        "id": "aom-9",
        "w": "must",
        "h": "Otoscopy and investigation of an effusion",
        "body": "**Five drum findings: opaque UMBER-YELLOW · ABSENT LANDMARKS (cone of light, umbo) · RETRACTED · FLUID LEVEL, BUBBLING WITH VALSALVA · LIMITED MOBILITY.** Nose and nasopharynx **may reveal adenoid enlargement**.\n**History: decreased hearing · earaches · recurrent ASOM · adenoid or cleft-palate features** — though every key calls effusion painless: **new pain = superimposed AOM**.\n- **Most diagnostic: a hair-line FLUID LEVEL with BUBBLES.** Distorted cone of light, foreshortened handle, prominent short process = **retraction only**, no fluid (type C).\n**Investigations: PTA · tympanometry · plain X-ray for adenoids · CT nasopharynx.**\n\n|Curve|Pressure|Compliance|Cause|\n|---|---|---|---|\n|**A**|normal|normal|normal ear|\n|**As**|**normal**|**REDUCED**|**stiffness — tympanosclerosis, otosclerosis**|\n|**Ad**|normal|increased|ossicular discontinuity, lax drum|\n|**B**|—|**FLAT, no peak**|**FLUID**; also perforation or patent grommet (**high canal volume**)|\n|**C**|**NEGATIVE**|good|**tube dysfunction**, retraction without fluid|\n\n- **Tympanometry measures compliance and the acoustic (stapedial) reflex: ABSENT in CHL, IMPAIRED in SNHL.**\n- **Toddler: tympanogram beats PTA** — PTA **subjective**, tympanometry **objective**. Gold standard for a child’s hearing = **ABR**.\n- **Bilateral symmetrical effusion: Weber does NOT lateralise. Unilateral CHL → Weber to the AFFECTED ear, Rinne negative; SNHL → Weber to the better ear.**\n\nSrc: L21.2; L21.1; L13,14",
        "qs": [
          "entep-ear-177",
          "entqb-ear3-69",
          "entep-enr-29",
          "entep-case-9",
          "entep-ear-234",
          "entep-ear-4",
          "entep-ear-114",
          "entep-ear-101",
          "entqb-ear3-90",
          "entqb-ear3-89",
          "entep-ear-24"
        ]
      },
      {
        "id": "aom-10",
        "w": "must",
        "h": "Glue ear — commonest childhood deafness, presenting as behaviour",
        "body": "**OME = commonest cause of conductive, and of bilateral conductive, hearing loss in a child.**\n- **Painless, so missed** — presents as behaviour: **inattentive or thought naughty**, **TV up**, **missing consonants**, **delayed speech**, **falling behind at school**, **tugging the ears with recurrent colds, no fever, no pain**.\n- Look-alikes: **otosclerosis** (adult, As) · **congenital cholesteatoma** · **CSOM** · **adhesive OM** · **congenital deaf mutism** (from birth) · **noise** (SNHL) · **traumatic rupture** · **acute OM** · **wax, atresia** (visible).\n- **Autism trap:** recurrent URTIs, ear tugging and a **fluctuating** measurable loss point to the ear.\n- **Poor listening, inattention or delayed speech → tympanogram. Adenoids → test the hearing.**\n\nSrc: L21.2",
        "qs": [
          "entep-ear-122",
          "entep-ear-148",
          "entep-ear-245",
          "entep-ear-250",
          "entep-ear-213",
          "entep-case-14",
          "entep-ear-101"
        ]
      },
      {
        "id": "aom-11",
        "w": "must",
        "h": "Adult + unilateral effusion = nasopharyngeal carcinoma",
        "body": "**A unilateral middle ear effusion in an adult is nasopharyngeal carcinoma until the nasopharynx has been looked at** — and may be the **only** sign.\n- The tube opens at the **fossa of Rosenmüller**, also the **commonest site of origin of NPC**.\n- **Answer = LOOK: nasopharyngeal or nasal endoscopy, and BIOPSY** — CT and MRI stage, they give no tissue.\n- Defect: one printing keys **watchful waiting 3 months** — no age given, nasopharyngoscopy not offered; **the key is the best option on the list.**\n- Corroborating: **ipsilateral upper deep cervical node · epistaxis or blood-stained postnasal discharge.**\n\nSrc: L21.1; L21.2 *(NPC beyond that one line is not in course material)*",
        "qs": [
          "entqb-ear3-78",
          "entep-ear-49",
          "entep-ear-95",
          "entep-ear-159",
          "entep-ear-24",
          "entep-ear-66",
          "entep-mfe5-1",
          "entep-enr-5",
          "entep-throat-case-15",
          "entep-case-9",
          "entep-mfe5-23"
        ]
      },
      {
        "id": "aom-12",
        "w": "must",
        "h": "Management of an effusion — the three-month ladder, grommet or T-tube",
        "body": "**MEDICAL I: antibiotics · antihistaminics · corticosteroids. MEDICAL II: tubal ventilation — Valsalva, gum chewing. SURGICAL I: myringotomy + ventilatory tubes. SURGICAL II: related conditions, as adenoidectomy.** Plus decongestants, treat allergy and sinusitis.\n\n|Situation|Answer|\n|---|---|\n|**1 week**, after a cold|**conservative** — decongestants, nasal steroids|\n|**1 month**, development **normal**|**wait and see 2 more months**|\n|**1 month + LANGUAGE DELAY**|**IMMEDIATE myringotomy + ventilation tubes**|\n|After treated AOM, **CHL persists**|**wait and watch 3 months**|\n|**> 3 months / 90 days** despite medical treatment|**MYRINGOTOMY + GROMMET**|\n|**3 months + language delay**, or **6 months** bilateral|**bilateral myringotomy + grommets**|\n|**Recurrent, type B**|myringotomy + ventilation tubes|\n|**With adenoid hypertrophy**|**ADENOIDECTOMY *AND* VENTILATION TUBE, one sitting**|\n|**With cleft palate**|**T-TUBE**|\n|**Adult, unilateral**|**NASOPHARYNGOSCOPY FIRST**|\n\n- **Language delay overrides the clock. Myringotomy alone fails — the incision heals in 48–72 h.**\n\n||**GROMMET**|**T-TUBE**|\n|---|---|---|\n|Stays|**~6–12 months, extrudes itself**|**years**, removed deliberately|\n|For|**TEMPORARY** — adenoids, cold, allergy|**PERSISTENT** — **cleft palate**, craniofacial anomaly, post-irradiation, chronic tubal failure, recurrent extrusion|\n|Risk|extrusion, blockage|**persistent perforation**|\n\n*(Dwell times not in course material.)*\n- Defects, keyed as printed: **systemic steroids for 48 h** as initial treatment (slide gives corticosteroids, **no duration**); a box calls **hyposensitisation and Valsalva “the most important drugs”** — neither is a drug.\n\nSrc: L21.2",
        "flow": {
          "title": "The effusion ladder — precedence, not a list",
          "steps": [
            {
              "k": "decision",
              "t": "ADULT with a UNILATERAL effusion?",
              "yes": "STOP — nasopharyngeal endoscopy and biopsy first. Do not treat the ear",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Delayed language development, or a measurable developmental cost?",
              "yes": "Myringotomy + ventilation tubes NOW — the clock is overridden",
              "no": "Continue"
            },
            {
              "k": "step",
              "t": "MEDICAL — I) antibiotics, antihistaminics, corticosteroids · II) tubal ventilation: Valsalva, gum chewing",
              "n": "± decongestants; treat allergy and sinusitis"
            },
            {
              "k": "decision",
              "t": "Persisted 3 MONTHS (90 days) despite adequate medical treatment?",
              "yes": "MYRINGOTOMY + GROMMET — plus adenoidectomy in the same sitting if an adenoid obstructs",
              "no": "Keep watching, and do not repeat a failed medical course"
            },
            {
              "k": "alert",
              "t": "Permanent tubal failure — cleft palate, craniofacial anomaly, post-irradiation",
              "n": "Long-stay T-TUBE, not a grommet that will extrude"
            }
          ]
        },
        "qs": [
          "entqb-ear3-73",
          "entqb-ear3-75",
          "entqb-ear3-74",
          "entqb-ear3-72",
          "entqb-ear3-71",
          "entep-mfe5-26",
          "entep-mfe5-27",
          "entep-mfe5-24",
          "entep-mfe5-23",
          "entep-nose-36",
          "entep-ear-8",
          "entep-ear-41",
          "entep-ear-153",
          "entep-ear-197",
          "entep-ear-212",
          "entep-ear-249",
          "entqb-ear3-70",
          "entep-mfe5-25"
        ]
      },
      {
        "id": "aom-13",
        "w": "must",
        "h": "Sequelae of a neglected effusion",
        "body": "**Complications, all five in order: 1) developmental and behavioural changes · 2) atrophic tympanic membrane · 3) ossicular chain erosion · 4) chronic O.M. · 5) SNHL.**\n\n|Entity|What it is|Loss|\n|---|---|---|\n|**ADHESIVE OM**|**THE sequel of long-standing OME**, not CSOM; drum thins, loses its fibrous layer, **adheres to promontory and ossicles**|**permanent CONDUCTIVE**|\n|**ATELECTASIS**|before adhesion — collapsed, not yet stuck; **an indication for myringotomy + tube**|conductive|\n|**TYMPANOSCLEROSIS**|**chalky white plaques**, hyalinised often calcified collagen, sparing the handle|**none** until annulus or ossicles → **conductive**|\n|**BLUE EAR**|old effusion, dark cholesterol-laden fluid|conductive|\n\n- **Tympanosclerosis follows** repeated AOM, long-standing OME and **previous ventilation tube sites**. At the annulus → **conductive** loss, **Rinne negative, Weber to the worse ear, tympanogram TYPE As**. It **never crosses the oval or round window**: never SNHL, never mixed. **Otosclerosis leaves the drum NORMAL.**\n- Defect: one entry keys **SNHL** as the non-complication of effusion, while **`L21.2` lists SNHL as complication 5 of 5** — keyed as printed; know both lists.\n\nSrc: L21.2; L19.1",
        "qs": [
          "entep-ear-141",
          "entqb-ear3-83",
          "entqb-ear3-88",
          "entqb-ear3-89",
          "entqb-ear3-90",
          "entqb-ear3-86",
          "entep-ear-245"
        ]
      },
      {
        "id": "aom-14",
        "w": "must",
        "h": "Traumatic perforation of the drum",
        "body": "*(Slides carry ear trauma only as CSF otorrhoea — halo sign, β2-transferrin, β2-trace protein, head elevation — and bloody otorrhoea. The rest **not in course material**; `MODULES` has no trauma chapter.)*\n\n||**TRAUMATIC — a TEAR**|**INFECTIVE — a MELT**|\n|---|---|---|\n|Mechanism|splits along the **radial fibres**|pus **necroses the drum from within**|\n|**Shape — the only reliable discriminator**|**irregular, SLIT-LIKE or triangular**|**round, oval, kidney-shaped**|\n|Edges|**RAGGED, EVERTED**, blood clot|smooth, **rolled in**|\n|Discharge|**dry, or blood only**|**purulent**|\n|Middle ear|**normal**|**congested mucosa**|\n\n**Size, number and site do NOT separate them.**\n**Management is one number: THREE MONTHS.** Fresh, dry, uninfected — slap, blast, cotton bud, blow → **nothing in the ear + STRICT WATER PRECAUTIONS** (cotton wool with petroleum jelly for washing; no swimming, diving, **drops or syringing**). Most close spontaneously. **Still open at ~3 months, or 6 → MYRINGOPLASTY** — graft usually **temporalis fascia** or tragal perichondrium; with ossicular damage a **tympanoplasty**, on a **dry** ear, hearing measured.\n- **Drops, packs and syringing are harmful** — fluid through an open drum turns a self-limiting tear into CSOM; **clots separate on their own.**\n- **TEST THE HEARING.** Mild conductive loss expected, recovers. **Vertigo, or a sensorineural or severe loss → EXPLORATION** for ossicular disruption or a **perilymph fistula**.\n- **Iatrogenic: bleeding during syringing** = the jet tore the drum; **discharge on day 2 = secondary infection** (AOM).\n\nSrc: L17,18",
        "qs": [
          "entep-ear-127",
          "entep-ear-129",
          "entep-ear-196",
          "entep-ear-221",
          "entep-ear-242",
          "entep-ear-244",
          "entep-enr-18",
          "entqb-ear3-76",
          "entqb-ear3-77",
          "entep-case-2"
        ]
      }
    ]
  },
  "ent-stridor": {
    "intro": "Three topics in one: the **sign** (phase locates the level), the **causes** (congenital, infective, foreign body, trauma, tumour) and the **operation** (tracheostomy — levels, tubes, three timed complication lists). One lecture carries almost all of it, and its numbers are examined verbatim.",
    "sections": [
      {
        "id": "strid-1",
        "w": "must",
        "h": "Stridor, stertor, wheeze, and the phase-to-site rule",
        "body": "**Stridor** = noisy breathing, **partial** obstruction **at or immediately below the larynx**; inspiratory / biphasic / expiratory. **Not a disease** — the cardinal symptom *and* sign of airway obstruction. Needs flow: **complete obstruction is silent**.\n\n||Stertor|Stridor|Wheeze|\n|---|---|---|---|\n|Pitch|**Low**, snoring|High, harsh, crowing|Whistling|\n|Phase|**Always inspiratory**|Varies with level|**Mainly expiratory**|\n|Level|**Nose / pharynx**|**At or just below larynx**|Lower airway: asthma, COD, tracheal FB|\n|Loudest|Face, mouth|**Neck**|**Chest**|\n\n**Phase locates the lesion:** inspiratory = **supraglottic + glottic** · **biphasic = subglottic + tracheal** · expiratory = **bronchial**.\n\n|Level|Stridor|Voice|Examples|\n|---|---|---|---|\n|Supra-laryngeal|Stertor|**Muffled, hot-potato**|Quinsy, tongue base, adenoids|\n|Supraglottic|**Inspiratory**|**Muffled**|Epiglottitis, supraglottic cancer, laryngomalacia|\n|Glottic|**Inspiratory**|**Hoarse**|Glottic cancer, bilateral abductor palsy, web, papillomatosis, cord spasm|\n|Subglottic|**Biphasic**|**Normal**; barking / brassy cough|Croup, subglottic stenosis or haemangioma, scleroma|\n|Cervical trachea|**Biphasic**|Normal, brassy|Post-intubation stenosis, tracheal FB, tracheomalacia|\n|Bronchi|**Expiratory** (wheeze)|Normal|Asthma, COD, bronchial FB|\n\n- **Biphasic = a FIXED lesion** (cricoid = the only complete ring).\n- **Muffled = above the cords · hoarse = at them · normal voice + stridor = BELOW them.**\n- Glottic and supraglottic cancer → **late** stridor; **subglottic → early**.\n- **Poiseuille: resistance ∝ 1/r⁴** (*Effect of Edema*) — 1 mm of oedema in a 4.5 mm infant subglottis is catastrophic. **Venturi** = velocity rises · **Bernoulli** = pressure falls, walls sucked in · **Boyle** = a sealed gas *(these three not in course material)*.\n- Defects, keyed as printed: barking cough keyed **supraglottic** (no subglottic option) · hot-potato voice keyed **supra-laryngeal**, **supraglottic** in the box · RLN-palsy stridor called **biphasic** · “narrowing increases airflow” keyed **Venturi**.\n\nSrc: L6",
        "qs": [
          "entqb-thr8-382",
          "entqb-thr8-383",
          "entqb-thr8-434",
          "entqb-thr8-438",
          "entqb-thr8-440",
          "entqb-thr8-390",
          "entep-throat-96",
          "entep-throat-90",
          "entep-throat-15",
          "entep-throat-34",
          "entep-throat-65",
          "entqb-thr8-384",
          "entqb-thr8-391",
          "entqb-thr8-422",
          "entqb-thr8-423",
          "entqb-thr8-425",
          "entqb-thr8-432",
          "entqb-thr8-388",
          "entqb-thr8-389",
          "entep-throat-case-20",
          "entqb-thr8-380",
          "entqb-thr8-381"
        ]
      },
      {
        "id": "strid-2",
        "w": "must",
        "h": "Grading, the signs, and management of airway obstruction",
        "body": "||**I mild**|**II moderate**|**III severe**|\n|---|---|---|---|\n|Retractions|Supraclavicular + suprasternal|**+ intercostal**|**+ intercostal & epigastric**|\n|Pulse|Tachycardia|Rapid|**Rapid and IRREGULAR**|\n|Dyspnoea|**None**; alae nasi, tachypnoea|Variable; shallow rapid respiration|**Severe + CYANOSIS**, air hunger|\n|State|—|Irritable, sweating|Irritable, air hunger|\n|Gases|**PO2 > 95 %, PCO2 < 35 %**|**PO2 < 85 %, PCO2 35–40 %**|—|\n\n- Retractions march **downward**; pulse tachycardia → rapid → **irregular** → **bradycardia**. The full retraction set is **grade III, not mild**.\n- **Signs of upper airway obstruction:** **tripod / “barking dog” position** · open mouth, acting alae nasi · accessory muscles · **congested neck veins on expiration** · retractions (suprasternal, supraclavicular, intercostal, epigastric) · tachycardia · irritability, restlessness, sweating · **cyanosis and bradycardia = LATE**.\n- **Hoarseness is not a sign of obstruction.** Never lay the child flat.\n- **By grade:** mild → conservative · moderate → **improving conservative, PROGRESSIVE establish an airway** · severe → establish an airway.\n- **Conservative:** semi-sitting · humidified oxygen · corticosteroids · racemic epinephrine · subcutaneous adrenaline · antibiotics and mucolytics · anti-inflammatories.\n- **Airway:** intubation · **transcricothyroid needle ventilation (> 16 g)** · cricothyrotomy · tracheotomy.\n- **Treat the cause first in: tetany (calcium)** · laryngitis · **FB (extraction)** · angioneurotic oedema · **retro- and parapharyngeal abscess (drainage)**.\n- **Indications:** severe stridor · progressive moderate stridor · obstructing tumour · **PO2 < 60 mmHg** (N 100) · **PCO2 > 50 mmHg** (N 40) · **pH < 7.2** (a distractor prints 7.3).\n\nSrc: L6",
        "qs": [
          "entqb-thr8-385",
          "entqb-thr8-386",
          "entqb-thr8-387",
          "entqb-thr8-396",
          "entqb-thr8-433",
          "entqb-thr8-438",
          "entqb-thr8-401"
        ]
      },
      {
        "id": "strid-3",
        "w": "must",
        "h": "Causes by age, and the infantile larynx",
        "body": "**Classification:** febrile / afebrile · intrinsic / extrinsic · **congenital** (laryngomalacia, web, stenosis) · **trauma** (external, FB, intubation, iatrogenic) · **infection** (LTB, croup, abscess) · **developmental** (laryngocele, saccular cyst) · **neurological** (VC paralysis) · **vascular** (haemangioma, vascular ring) · **neoplasm** (RRP, sarcoma, cystic hygroma).\n\n|**Neonates**|**Children**|**Adults**|\n|---|---|---|\n|Laryngomalacia · VC paralysis · congenital subglottic stenosis · subglottic haemangioma · vascular ring · other congenital anomalies · **laryngeal spasm**|Acute non-specific laryngitis · epiglottitis · croup · **FB and corrosive ingestion** · **retropharyngeal abscess** · congenital laryngeal diseases · **laryngeal papillomatosis** · **angioneurotic oedema**|Laryngeal tumours (**malignant > benign**) · granulomas (**scleroma**) · **bilateral abductor paralysis, post-thyroidectomy** · laryngeal trauma · **post-intubation stenosis**|\n\n- **Onset dates it:** *immediate* = subglottic stenosis, congenital VC paralysis · *delayed* = **laryngomalacia (1st week)**, **haemangioma (1st 6 months)**. History: prematurity, prior intubation.\n- Congenital **extralaryngeal**: cystic hygroma · congenital goitre · thymic remnants and cysts · mediastinal teratoma · tracheal stenosis · tracheomalacia · **vascular ring** · dermoid cyst. Extralaryngeal **tumours**: tracheal · **thyroid** · hypopharyngeal · upper oesophageal · mediastinal.\n- **Infantile larynx:** smaller absolutely and relatively · **higher, C3–4** · epiglottis **long, tubular, folded** · **softer cartilage** · **loose submucosa → rapid oedema** · funnel-shaped, **subglottis 4.5 mm** · **big arytenoids, short cords** · **premature cough reflex → FB aspiration** · **premature neuromuscular control → cord spasm**. **4th arch → supraglottis · 6th arch → glottis and subglottis**; embryonic 0–8 weeks, fetal 9 weeks–7 months. Keyed falsehood: “**less** elastic cartilage” — it is **softer**.\n- **Congenital presentations:** *stridor* — laryngomalacia, congenital SG stenosis, bilateral **abductor** palsy, thick web · *abnormal / weak cry* — web, VC paralysis · *aspiration* — bilateral **adductor** palsy, severe laryngomalacia, **posterior laryngeal cleft**. “Abnormal cry in all except” → **laryngomalacia**.\n- Rankings follow the adjective: congenital / infantile = **laryngomalacia** · infectious = **croup** · home death under 6 = **FB** · tracheostomy = **prolonged intubation**. Defect: “second commonest in children” keyed **FB**; no lecture ranks beyond first.\n\nSrc: L6; L12",
        "qs": [
          "entep-mfe4-6",
          "entqb-thr5-272",
          "entqb-thr8-438",
          "entep-throat-96",
          "entqb-thr7-338",
          "entqb-thr5-288"
        ]
      },
      {
        "id": "strid-4",
        "w": "must",
        "h": "The congenital laryngeal lesions",
        "body": "Order of incidence: **laryngomalacia · congenital VC paralysis · congenital subglottic stenosis · laryngeal web · posterior laryngeal cleft.**\n\n|Lesion|Presentation and facts|Treatment|\n|---|---|---|\n|**Laryngomalacia** — abnormal flaccidity, inspiratory collapse of epiglottis, AE folds, arytenoids|**Inspiratory stridor**, first days–weeks, harsh, crowing; worse **crying, feeding, supine, neck flexion**; better **prone, neck extension, mandible lifted**; **cry, feeding, health normal**. **Commonest congenital laryngeal anomaly, 60 %; commonest cause of infantile and chronic stridor**; **M:F 2:1**; prematures; **GERD 80–90 %**; scope — **omega epiglottis, short AE folds, redundant arytenoid mucosa**; **resolves 18–24 months in 80–90 %**|Reassurance · anti-reflux · monitor growth. **Surgery for** severe stridor with **failure to thrive**, weight loss, **pectus excavatum**, **cyanotic attacks**, **cor pulmonale**, hypoxaemia, hypercapnia → **supraglottoplasty** (AE-fold division, epiglottis trimming, arytenoid mucosa removal) or tracheostomy|\n|**Congenital VC paralysis**|**Bilateral** — severe inspiratory stridor **immediately after birth**, better asleep, worse on activity. **Unilateral** — **weak breathy cry**, aspiration. **10 % of congenital laryngeal lesions; bilateral : unilateral = 1 : 4.** Unilateral (**Lt > Rt**) — VSD, Fallot, PDA, surgery for T-E fistula, heart, oesophagostomy. Bilateral — **central** (meningomyelocele, Arnold-Chiari, bulbar palsy), **birth trauma** (prolonged 2nd stage, forceps), rarely hereditary|Unilateral **none, resolves**. Bilateral **tracheotomy**, arytenoidectomy or cordotomy|\n|**Congenital subglottic stenosis**|Severe — **stridor and cyanosis immediately after birth**. Mild–moderate — **persistent croup, stridor > 3 weeks**, difficult intubation, **difficult decannulation**. **< 4 mm at term, < 3 mm preterm** (normal **4.5 mm**). **3rd commonest, THE MOST SERIOUS.** Cartilaginous or soft tissue|Conservative for mild · **tracheotomy** · endoscopic|\n|**Laryngeal web** — incomplete recanalisation|Distress only with a **thick large web** or SG stenosis (**1 : 3**); **abnormal cry**; feeding normal. Thin membranous / fibrous / cartilaginous. **Glottic commonest** · interarytenoid · subglottic + SG stenosis · supraglottic (rare)|Dilatation · laser or MLS + **keel** · laryngofissure|\n|**Subglottic haemangioma**|**Inspiratory stridor at ~6 months.** From **mesodermal rests**; **50 % have other head-and-neck haemangiomas**; **F : M = 2 : 1**|**Tracheotomy, follow-up for spontaneous regression 2–4 years** · corticosteroids · laser · interferon · cryosurgery · irradiation · excision|\n\nKeyed falsehood: “haemangioma can **only** be congenital” — the subglottic one appears at 6 months, and acquired adult forms exist *(not in course material)*.\n\nSrc: L6; L12",
        "qs": [
          "entep-mfe4-6",
          "entqb-thr5-288"
        ]
      },
      {
        "id": "strid-5",
        "w": "high",
        "h": "Work-up",
        "body": "|Laboratory|**ABG (PaO2, PaCO2)** · **blood pH** · serum proteins · **blood culture (epiglottitis)**|\n|---|---|\n|Endoscopy|**Flexible nasopharyngo-laryngoscopy** · rigid nasal endoscopy · **rigid laryngoscopy** · **rigid bronchoscopy**|\n|Plain film|Lateral soft-tissue **neck and thorax** · chest PA **expiratory, inspiratory, decubitus** · mediastinum PA high-kV **“Cincinnati”**|\n|Other|**Fluoroscopy** · **CT / CTA**, 3D reconstruction, **virtual bronchoscopy** · **MRI / MRA**|\n\n- **Thumb (“cucumber”) sign** = epiglottitis · **steeple sign** = croup.\n- **Laryngeal trauma → CT** — only CT shows cartilage.\n- **Vascular anomaly → all of** chest X-ray (**right-sided arch**), **barium swallow** (**posterior indentation**) and **MRI / MRA**; bronchoscopy shows **pulsatile compression**; biphasic stridor worse on feeding **plus dysphagia** *(not in course material)*.\n- **The airway precedes the investigation.**\n\nSrc: L6",
        "qs": [
          "entqb-thr8-397",
          "entqb-thr7-357",
          "entep-throat-5",
          "entep-enr-26"
        ]
      },
      {
        "id": "strid-6",
        "w": "must",
        "h": "Foreign body — numbers, and why children",
        "body": "- **Commonest cause of death in the home under 6 years** · **1–3 years = 75 %** · **M : F = 2 : 1** · **mortality 20 % before endoscopy, under 2 % after** · **over 60 % of inhaled bodies in children aged 4 or under**.\n- **Impaction: right bronchus 57 % · left 33 % · trachea 6 % · larynx 4 %** (right wider, shorter, more vertical). **Commonest site is not the lethal site** — the 4 % at the larynx obstruct the only airway there is.\n- **Why children** (six): **larynx higher** · **explore with the mouth** · **cannot chew properly** · **play while eating** · **premature cough reflex** · **lack posterior dentition**. Keyed falsehood: “**mature** cough reflex”.\n- **Organic** (peanut, seed) — **swells**, chemical bronchitis, granulation, **radiolucent**, neglected → **HAEMOPTYSIS**. **Inorganic** (coin, bead) — inert, radio-opaque, neglected → collapse or infection, **no bleeding**. Keyed falsehood: haemoptysis with an **inorganic** neglected FB.\n- Inhaled types **vegetable / inorganic metal**. **Swallowed** — fish bone, meat lump, coins at **vallecula, pyriform fossa, post-cricoid**: fever, dysphagia, stridor, tender neck, emphysema.\n- The bank asserts the commonest adult FB is the **veil pin** — regional, on no slide.\n\nSrc: L6; L12",
        "qs": [
          "entqb-thr5-281",
          "entqb-thr5-285",
          "entqb-thr5-288",
          "entqb-thr5-283",
          "entqb-thr5-272",
          "entqb-thr7-370"
        ]
      },
      {
        "id": "strid-7",
        "w": "must",
        "h": "Foreign body — phases, the film, and management",
        "body": "- **Acute:** stridor, respiratory difficulty · **pain in the root of the neck** · change of voice, cough. **Late (neglected):** **repeated or persistent chest infection not responding to treatment** · **haemoptysis (organic)** · chronic cough.\n- **Three phases: choking episode** → **SILENT INTERVAL** (days or weeks looking well) → **complication phase** — cough, tachypnoea, **unilateral decreased air entry**, collapse, infection.\n- “Improves on antibiotics then returns worse”, and **pneumonia recurring in the same segment**, mean obstruction: an FB is **sudden, recurrent, focal**.\n- **Valves:** *bypass* — normal film, commonest and most missed · **CHECK** (in, not out) — **hyperinflation, mediastinum PUSHED AWAY** · **STOP** (complete) — **atelectasis, mediastinum PULLED TOWARDS** · *ball* — progressive collapse.\n- **X-ray in EXPIRATION** — hyperinflation, mediastinal shift, infection, collapse, ± radio-opaque shadow; decubitus if uncooperative. **A normal film excludes nothing.** Keyed falsehood in that list: **pneumothorax**.\n- Defect: the “classic triad” prints cough, wheeze, **dyspnoea**, excluding stridor.\n- **Bilaterally** diminished air entry, **no choking history**, **increased bronchovascular markings** → **medical treatment** with follow-up.\n- **Extraction through a RIGID bronchoscope under GA** — it ventilates and it grips. **History, not film, is the threshold.** Dangerous: **sedation** · **Trendelenburg**.\n- Defect: “contraindicated in partial obstruction” keyed **chest physiotherapy**, where most teaching keys the **Heimlich**.\n- **Button battery** *(not in course material)*: **electrolysis makes hydroxide at the negative pole** (the “alkali secretion”), **injury by 2 h, perforation by 6**, removed ahead of every other FB; mimics a coin — look for the **halo**.\n\nSrc: L6; L12 *(valves not in course material)*",
        "flow": {
          "title": "The choking child",
          "steps": [
            {
              "k": "decision",
              "t": "Can the child cough, cry or speak?",
              "yes": "Encourage coughing, keep upright, arrange urgent rigid bronchoscopy",
              "no": "Back blows then thrusts by age; CPR if unconscious"
            },
            {
              "k": "alert",
              "t": "Never chest physiotherapy with a partially obstructing bronchial body",
              "n": "A dislodged object can obstruct both lungs"
            },
            {
              "k": "step",
              "t": "Definitive treatment in every case",
              "n": "Rigid bronchoscopy under GA. Mortality 20% before endoscopy, under 2% after"
            }
          ]
        },
        "qs": [
          "entep-throat-13",
          "entep-throat-98",
          "entqb-thr5-300",
          "entqb-thr7-347",
          "entqb-thr7-348",
          "entqb-thr7-354",
          "entqb-thr7-371",
          "entqb-thr5-283",
          "entep-ear-29",
          "entqb-thr7-349",
          "entqb-thr5-286",
          "entqb-thr7-370"
        ]
      },
      {
        "id": "strid-8",
        "w": "must",
        "h": "Croup versus epiglottitis",
        "body": "||**CROUP** (laryngotracheobronchitis)|**EPIGLOTTITIS** (supraglottitis)|\n|---|---|---|\n|Level|**Subglottic**|**Supraglottic**|\n|Organism|**Viral — parainfluenza** (also RSV)|**H. influenzae type b, 90 %**|\n|Age|**6 months – 3 years**|**3–7 y (L6) · 2–6 y (L12)**|\n|Onset|**Gradual, days**|**RAPIDLY PROGRESSIVE, hours**|\n|Fever|Low grade|**> 38.5 °C**|\n|Cough|**BARKING**|**ABSENT**|\n|Voice|**Hoarse**|**MUFFLED**|\n|Drooling|No|**Yes**, severe odynophagia|\n|Posture|Ordinary|**Sitting, irritable, raised chin, open mouth**|\n|Stridor|**Biphasic**|**Inspiratory**|\n|X-ray|**STEEPLE sign** — ballooning hypopharynx, narrowed subglottis|**THUMB / cucumber sign**|\n|Treatment|Hydration · humidification · **nebulised racemic epinephrine** · **steroids, systemic and nebulised** · antipyretics · antibiotics; severe (rare) **ETI, tracheostomy**|**EMERGENCY. Massive-dose steroids** · **ceftriaxone** · analgesics, fluids, observation; severe stridor **ETI, tracheostomy**|\n|Note|**Commonest infectious cause of airway obstruction in children**; mucosal oedema, mucus plugs|**LARYNGOSCOPY CONTRAINDICATED** · blood culture · **Hib vaccine cut incidence > 90 %**|\n\n- L6 writes “Group B Haemophilus influenzae”; it is **type b**, a capsular serotype.\n- **Suspected epiglottitis:** do not examine the throat · do not lie flat · do not separate from the parent · do not send to radiology · never unescorted. Keyed next step: **escorted transfer to theatre to secure the airway**, before antibiotics and films. **Mild stridor here is the last warning.**\n- **Acute viral laryngitis** — rhinovirus, RSV, parainfluenza, adenovirus; dysphonia, hoarseness, **stridor only under 1 year**, low fever; **conservative, NO antibiotic** (antipyretics, humidification, decongestants, voice rest).\n- **Retropharyngeal abscess** — stridor, dysphagia, torticollis; **drainage**, airway first.\n\nSrc: L6; L12",
        "qs": [
          "entep-throat-26",
          "entep-throat-51",
          "entqb-thr8-388",
          "entqb-thr8-432"
        ]
      },
      {
        "id": "strid-9",
        "w": "must",
        "h": "Laryngeal and neck trauma — mechanisms and injuries",
        "body": "- **External — OPEN:** gunshot, cut throat, stab wound, surgical. **CLOSED:** blunt trauma, hanging. **Internal — mechanical:** FB, intubation, **cuff injury**, endoscopy; **physical:** thermal, blast, irradiation; **chemical:** fumes, potash.\n- **Penetrating = the missile injury**; MVA, hanging and crushing are closed. Penetrating kills by **exsanguination**; blunt by airway loss and **intimal tear → delayed thrombosis**, and **declares itself hours later** behind normal skin.\n- **Zones** *(not in course material)*: **I** inlet → **cricoid** (great vessels, apices; image first) · **II** cricoid → **angle of mandible** — **commonest injured, easiest to expose** · **III** → **skull base** (distal carotid; angiography). Never probe a wound breaching **platysma**.\n\n|Injury|Mechanism|\n|---|---|\n|**Hyoid fracture**|**STRANGULATION**, greater horns driven medially; cartilaginous in the young, so absence excludes nothing|\n|**Thyroid cartilage fracture**|Anterior blunt blow; **commonest**; **loss of the laryngeal prominence**|\n|**Cricoid fracture**|Greater force; **only complete ring**, so collapse obstructs the subglottis|\n|**Arytenoid dislocation**|Almost always **iatrogenic**, intubation|\n|**Cricotracheal separation**|Most severe blunt injury, **grade 5**; trachea avulsed, **retracts into the mediastinum**. Complications, all of them: **bilateral RLN avulsion**, **cord paralysis**, late **tracheal stenosis**. **Never blind orotracheal intubation**|\n\n**Signs of serious injury:** loss of the laryngeal prominence · **surgical emphysema** (lumen breached, or the oesophagus) · stridor · hoarseness or aphonia · **cord immobility** · **cannot lie flat**. The strangulation survivor obstructs **late** — observe, never discharge.\n\nSrc: L6",
        "qs": [
          "entqb-thr7-369",
          "entqb-thr7-335",
          "entqb-thr7-337",
          "entqb-thr7-352",
          "entqb-thr7-338"
        ]
      },
      {
        "id": "strid-10",
        "w": "must",
        "h": "Grading and management of laryngeal trauma",
        "body": "**Schaefer-Fuhrman** *(on no cached slide; not in course material)*:\n\n|Grade|Findings|Management|\n|---|---|---|\n|**1**|Minor haematoma or laceration, **no fracture**|**Medical**|\n|**2**|Oedema, haematoma, **minor mucosal disruption WITHOUT exposed cartilage**, **NON-DISPLACED** fracture|**Medical**, admitted|\n|**3**|**Massive oedema · tear with EXPOSED CARTILAGE · DISPLACED fracture · CORD IMMOBILITY**|**Surgical exploration**|\n|**4**|As 3 but **unstable — COMMINUTED, ≥ 2 fracture lines**|Exploration **+ endolaryngeal stent**|\n|**5**|**Complete laryngotracheal separation**|Surgical, airway first|\n\n- **1–2 medical; 3 and above explored within 24 hours.** **Oedema alone never immobilises a cord** — immobility means joint disruption, RLN injury or tethering. **3 vs 4 is stability, not severity.**\n- Stable and speaking → **look first** (flexible laryngoscopy); unstable → **secure first**. Saturation reassures far too late.\n- Flexible transnasal **bypasses the jaw** — the answer with **trismus or mandibular fracture**; the mirror suffices with an intact jaw *(the bank keys both; the unstated clause is trismus)*. **Never sedate a stridulous patient.**\n- **CT** = cartilage · **endoscopy** = mucosa and cords · **gastrografin swallow** = oesophagus, where there is emphysema (leaked barium = permanent mediastinitis; aspirated gastrografin = chemical pneumonitis) · angiography = vessels.\n- **Airway: TRACHEOSTOMY UNDER LOCAL, awake, sitting, below the injury** — blind intubation makes a **false passage** or **completes a separation**. **Cricothyroidotomy is a seconds-to-spare rescue.** A **mandibular fracture** with an intact neck also keys **tracheostomy** (the jaw will be wired; **maxillofacial operations** are a prophylactic indication).\n- **Medical (1–2): corticosteroids**, keyed the most important step **because oedema closes the airway** · humidification · semi-sitting · antibiotics · **voice rest** (the voice, not the airway) · anti-reflux · **observation 24–48 hours**.\n- **Operation: laryngofissure → close every mucosal tear so no cartilage is bare → reduce and fix → restore the anterior commissure → stent if comminuted.** Tracheostomy alone concedes airway and voice. Fixation keyed **stainless steel wire**; defect — modern practice often uses **titanium miniplates**.\n- **Explore within 24 hours.** “Delay to 48 h”, “timing does not affect prognosis” and “medical management can never be used” are all false.\n\nSrc: L6 gives the airway framework only",
        "flow": {
          "title": "Blunt or penetrating laryngeal trauma",
          "steps": [
            {
              "k": "decision",
              "t": "Airway compromised — severe stridor, surgical emphysema, cannot lie flat?",
              "yes": "Tracheostomy under local, awake and sitting, below the injury",
              "no": "Stable — look first"
            },
            {
              "k": "step",
              "t": "Flexible transnasal laryngoscopy, then fine-cut CT",
              "n": "CT shows cartilage, endoscopy shows mucosa and cords; add gastrografin if emphysema"
            },
            {
              "k": "decision",
              "t": "Grade 3 or above?",
              "yes": "Surgical exploration within 24 hours",
              "no": "Medical, admit and observe 24-48 h"
            }
          ]
        },
        "qs": [
          "entqb-thr7-345",
          "entqb-thr7-355",
          "entqb-thr7-374",
          "entqb-thr7-375",
          "entqb-thr7-350",
          "entqb-thr7-352",
          "entqb-thr7-346",
          "entqb-thr7-351",
          "entqb-thr7-353",
          "entqb-thr7-356",
          "entqb-thr7-357",
          "entqb-thr7-358",
          "entqb-thr7-359",
          "entqb-thr7-372",
          "entqb-thr7-373",
          "entqb-thr7-368",
          "entep-throat-61",
          "entep-throat-107",
          "entqb-thr7-338"
        ]
      },
      {
        "id": "strid-11",
        "w": "high",
        "h": "Inhalation and caustic injury",
        "body": "- L6 gives only the categories — **physical: thermal, blast, irradiation; chemical: fumes and potash**. *The rest is not in course material.*\n- **Inhalation:** the **glottic closure reflex** and upper-airway heat exchange keep dry heat **above the cords** — so “supraglottic injury commonly extends to the trachea” is the keyed falsehood. **Steam is the exception**, as are chemical products of combustion.\n- Early: erythema, **carbonaceous sputum**, singed vibrissae, facial burns, hoarseness. **It progresses to obstruction over hours — intubate early on suspicion.**\n- **Acid = COAGULATIVE necrosis**, eschar barrier, **self-limiting**, worst in the **stomach**. **Alkali = LIQUEFACTIVE**, **progressive, deepens with time**, worst in pharynx and **oesophagus** (drain cleaner, caustic soda, **potash**, button batteries).\n- “Alkali is worse” **true**; “acids cause liquefactive necrosis” **false**. Injury is **not limited to the oesophagus**; the larynx is burned **twice — on ingestion and on regurgitation** — so **never induce vomiting, never neutralise**.\n- **Early killer: supraglottic oedema over hours. Late: oesophageal stricture** — endoscopy at 24–48 h, gastrografin if perforation is possible.\n\nSrc: L6 categories only",
        "qs": [
          "entqb-thr7-339",
          "entqb-thr7-340",
          "entqb-thr7-342",
          "entqb-thr5-286"
        ]
      },
      {
        "id": "strid-12",
        "w": "must",
        "h": "Tracheostomy — indications, functions, levels",
        "body": "**Tracheotomy = a TEMPORARY artificial opening between trachea and skin; tracheostomy = a PERMANENT one.** Definition: an artificial opening in the trachea to secure and maintain the airway. By timing: **emergency or elective**. Indications: **obstruction at or above the larynx** · **respiratory failure needing prolonged ventilation** · **protection from bronchial secretion or aspiration**.\n\n|**Obstructive**|Obstruction **at, below or above** the larynx|\n|---|---|\n|**Non-obstructive**|**Respiratory insufficiency** (central or peripheral) · **secretional obstruction** — **prolonged coma, flail chest, thoracic surgery** · **prophylactic** — **neck burn, radiotherapy of a big laryngeal tumour, maxillofacial operations** · **part of an operation** — laryngofissure, partial laryngectomy, **total laryngectomy**, laryngopharyngectomy|\n\n- **Prolonged intubation is non-obstructive, and is the commonest indication today** *(the shift is not in course material)*.\n- **Eight functions:** bypass an upper airway obstruction · **decrease dead space (70–100 ml) by 10–50 %** · decrease resistance · **access for suction** · pathway for medication and humidification · **protection against aspiration** · swallowing without reflex apnoea · **decrease power of the cough** (a cost — a cough needs a closed glottis).\n- The **deeply comatose** patient is not obstructed but has lost cough, gag and swallow: the operation offers **protection against aspiration**. It is a conduit, not a ventilator.\n\n|Level|Rings|Against|Risk|\n|---|---|---|---|\n|**HIGH**|**1st & 2nd**|**Cricoid**|**Perichondritis → SUBGLOTTIC STENOSIS**, difficult decannulation|\n|**MID**|**3rd & 4th**|Thyroid **isthmus**|**The most DIFFICULT**, a vascular field|\n|**LOW**|**5th & 6th**|**Thoracic inlet**|**Pleural dome → PNEUMOTHORAX**; innominate artery, thyroidea ima|\n\n- **Mid is the standard elective level — difficult, not dangerous.**\n- **HIGH is keyed for laryngeal cancer** (that segment is excised at laryngectomy, the tract goes en bloc, the low trachea is kept for the end stoma); **LOW for big thyroid cancer** (isthmus and lobes overlie rings 2–4). **Enter the airway where the disease is not** *(not in course material)*.\n- Defect: “innominate vessel injury in women and infants” is also true of a low tracheostomy, but the **pleural dome** is keyed.\n\nSrc: L6",
        "qs": [
          "entqb-thr7-344",
          "entep-mfe4-12",
          "entqb-thr8-439",
          "entqb-thr8-412",
          "entqb-thr8-413",
          "entqb-thr8-416",
          "entqb-thr8-418",
          "entep-throat-83"
        ]
      },
      {
        "id": "strid-13",
        "w": "must",
        "h": "The tube, the care, and the complications",
        "body": "- **Three parts: outer cannula, inner cannula, obturator.** Choices: **Portex or metal · single or double · cuffed or non-cuffed · fenestrated or non-fenestrated**. **Ideal tube: inert, double cannula, inner cannula longer, cuffed, fenestrated.**\n- **Outer cannula stays in all the time except for changing — undisturbed ~5 days, which forms the tract. Inner cannula is the safety valve, cleaned several times a day.** The bank inverts it: “the **inner** tube cleaned after 5 days” is false. Keyed true beside it: **semi-sitting**, **suction under 15 seconds**, **cuff pressure below tracheal capillary perfusion** *(bank numbers)*.\n- **Care of tube, stoma and patient:** **humidity · saline instillation · skin care · suctioning · inner cannula care · changing · securing · cleaning · resuming activities.** The stoma bypasses the nose, so air loses its **warming, moistening and filtering** — **humidification replaces moistening**, **suction prevents tube obstruction**. Stoma skin checked **around, above, below and behind**; wet dressings changed; **tapes daily**. Patient: **physiotherapy, resuming activities, communication**. “All except” → **prone position** (trap: prone is right for **laryngomalacia**).\n- **OPERATIVE: 1. Primary bleeding** — anterior jugular vein, jugular arch, inferior thyroid vein, thyroid gland, thyroidea ima artery, **innominate artery**. **2. Apnoea. 3. Surgical injury** — oesophagus, recurrent laryngeal nerve, **pleura**, cricoid cartilage.\n- **EARLY POSTOPERATIVE (nine):** surgical emphysema · bleeding (reactionary and secondary) · **pneumothorax and pneumomediastinum** · **tube obstruction** · **tube displacement** · early tracheo-oesophageal fistula · infection · recurrent laryngeal nerve paralysis · aspiration of gastric contents.\n- **LATE POSTOPERATIVE (nine):** difficult decannulation · **delayed haemorrhage after 5 days, innominate artery erosion** · late tracheo-oesophageal fistula · atelectasis or pulmonary infection · tracheal granulation · **tracheal or laryngeal stenosis** · tracheomalacia · persistent tracheocutaneous fistula · tracheostomy scar.\n- **Commonest operative = bleeding. Commonest early = tube obstruction.** **Apnoea on opening the trachea** removes **both** the CO2 and the hypoxic drive. **Bleeding after day 5 = innominate erosion**; the others bleed at operation.\n- **Two hours = displaced tube** (no tract yet, a false passage). “Early distress except” = **pneumonia**, which is late. Commoner in **children** = **aerophagia** — distension splints the diaphragm, dyspnoea **restrictive**, treat with a **nasogastric tube**.\n- **Unilateral** decreased air entry, tube clean and correctly sited = **PNEUMOTHORAX** (pleural domes arch above the clavicle — the price of a **low** tracheostomy). **Both sides quiet** = the tube: **obstructed** if a catheter will not pass, **displaced** if the neck inflates. Fever and purulent secretions days later = **pneumonia / atelectasis**, late list. **“Immediate”** distress = pneumothorax. If **stable**, **portable chest X-ray**; a **tension** pneumothorax is needled, not imaged.\n\nSrc: L6",
        "qs": [
          "entqb-thr8-442",
          "entqb-thr8-443",
          "entqb-thr8-419",
          "entqb-thr8-410",
          "entqb-thr8-420",
          "entqb-thr8-406",
          "entqb-thr8-402",
          "entqb-thr8-409",
          "entqb-thr8-403",
          "entqb-thr8-441",
          "entqb-thr8-408",
          "entqb-thr8-407",
          "entqb-thr8-414",
          "entep-throat-72",
          "entep-throat-8",
          "entep-throat-39",
          "entep-ear-52",
          "entqb-thr8-431",
          "entqb-thr8-417",
          "entqb-thr8-424"
        ]
      },
      {
        "id": "strid-14",
        "w": "must",
        "h": "Intubation trauma, and the airway after thyroid surgery",
        "body": "- **IMMEDIATE: arytenoid dislocation** — the blade or tube levers the shallow cricoarytenoid joint out; **mimics an RLN palsy**, separated by **laryngeal EMG** and passive mobility; **early reduction works before ankylosis**.\n- **DELAYED, commonest: intubation granuloma** — pressure on the **vocal process**, **hoarseness weeks later**.\n- **DELAYED, most dangerous: post-intubation subglottic / tracheal stenosis** — **cuff pressure above capillary perfusion → ischaemic ulcer → circumferential scar → contracture over weeks to months**, worst inside the cricoid *(split not in course material)*.\n- The stem: **weeks of cuffed ventilation, extubated successfully, then biphasic stridor** over months. **Laryngeal oedema** settles in days · **bilateral cord paralysis** gives stridor with a **normal voice** at extubation · **granuloma** gives hoarseness. Defect: one vignette calls the narrowing **subglottic** and keys **tracheal stenosis** (no subglottic option). Prevention: convert prolonged ventilation to **tracheostomy**, moving the cuff below the larynx.\n\n||**RLN injury**|**Hypocalcaemia**|\n|---|---|---|\n|Mechanism|RLN supplies every intrinsic muscle **except cricothyroid**, including the **posterior cricoarytenoid, the only ABDUCTOR**; **bilateral** injury leaves neither cord open|Parathyroids removed or devascularised → **tetany**, including **laryngeal spasm**|\n|Timing|**On waking**|**Hours to days**|\n|Presents|**Stridor with a good voice**|Perioral numbness, tingling, cramps, carpopedal spasm|\n|Signs|Poor glottic air entry|**Chvostek**, **Trousseau**|\n|Treatment|**An airway** — intubation, then **tracheostomy**|**IV calcium**|\n\n- The **superior** laryngeal nerve (external branch) supplies only the **cricothyroid**, the tensor that sets **pitch** — it cannot narrow the airway. **RLN injury fixes the cord PARAMEDIAN; vagal injury fixes it CADAVERIC.** **Abductor** palsy = cord near the midline (**stridor, normal voice**); **adductor** palsy = cord away (**aspiration, dysphonia**).\n- Two questions print the **same four options** — subcutaneous adrenaline · endoluminal procedure · tracheostomy · calcium infusion — and key opposites: **swollen face, lips, tongue in minutes, non-pitting oedema, gut cramps, low BP → angioneurotic oedema → SUBCUTANEOUS ADRENALINE**; **cramps, perioral numbness, Chvostek, Trousseau → CALCIUM INFUSION**. **Swollen and minutes → adrenaline; tingling and days → calcium.**\n- Laryngeal spasm over an electrolyte menu = **hypocalcaemia**. Defect: the box says “bilateral **or unilateral**” (only bilateral obstructs) and calls the stridor **biphasic**.\n\nSrc: L6; L11",
        "qs": [
          "entqb-thr7-343",
          "entqb-thr7-341",
          "entqb-thr7-365",
          "entqb-thr7-376",
          "entep-mfe5-9",
          "entep-throat-case-26",
          "entep-throat-62",
          "entqb-thr8-405",
          "entqb-thr8-415",
          "entqb-thr8-399"
        ]
      }
    ]
  },
  "ent-otalgia": {
    "intro": "Ninety-five per cent of ear pain is the ear; five per cent is a normal ear and a lesion elsewhere on V, IX, X or C2–C3. Examined three ways: the tragal sign, the diabetic whose drops fail, and which nerve refers what.",
    "sections": [
      {
        "id": "otal-1",
        "w": "must",
        "h": "The 95:5 split, and the sensory supply of the ear",
        "body": "**Otalgia = pain in the ear. LOCAL 95 %** — a lesion **in the ear or a nearby structure**. **REFERRED 5 %** — a lesion in a **remote area having the same nerve supply**.\n**Normal auricle, canal and drum with real pain = REFERRED**, until mouth, teeth, TMJ, tonsil, larynx, hypopharynx and cervical spine have been examined.\n\n|Part|Sensory supply|\n|---|---|\n|Auricle|branchial system — **great auricular + lesser occipital (C2–C3)**, **auriculotemporal (V)**, **auricular branch of vagus (X)**|\n|**External canal**|**V** and **X**|\n|**Tympanic membrane**|**V · IX · X**|\n|**Middle ear**|**IX** (Jacobson’s)|\n\n- **Four nerves reach the ear, so four territories can refer to it.** The vagal canal branch (**Arnold’s nerve**) is why **ear syringing or canal examination provokes cough** *(reflex not in course material)*.\n\nSrc: L17,18; L22",
        "qs": [
          "entep-ear-7",
          "entep-ear-28",
          "entep-ear-116",
          "entqb-ear6-157"
        ]
      },
      {
        "id": "otal-2",
        "w": "must",
        "h": "Referred otalgia — four nerves, four territories",
        "body": "|Nerve|Territory|Causes|\n|---|---|---|\n|**V trigeminal**|**oral cavity, teeth, nose, NASOPHARYNX, sinuses, TMJ**|**dental caries**, **floor-of-mouth ulcer**, oral or nasopharyngeal cancer, sinusitis, **TMJ disease**|\n|**IX glossopharyngeal**|**tonsil and oropharynx**, tongue base|**tonsillitis**, **quinsy**, **POST-TONSILLECTOMY**, tongue-base carcinoma|\n|**X vagus**|**larynx and hypopharynx**|**SUPRAGLOTTIC CARCINOMA**, **PYRIFORM FOSSA tumour**, laryngeal ulcer|\n|**C2–C3**|neck and **cervical spine**|**cervical spine trauma**, spondylosis, **disc prolapse**, neck nodes|\n\n- **Referred otalgia is the EARLY / initial symptom of supraglottic carcinoma** — the most repeated single line in the model exams. **Unilateral otalgia + a normal ear in an older or smoking adult → scope the larynx and hypopharynx.**\n- **NOT referred: any lesion of the ear itself** — acute serous otitis media, ASOM, mastoiditis are all **local**.\n- **The brain is never a source** — it has no somatic sensation. Neck, pharynx, nose and eye all are.\n- **Acoustic neuroma** hurts through the **FACIAL** nerve, not VIII, which carries no pain fibres: **Hitzelberger’s sign** — altered sensation or numbness over the **concha and postero-superior canal wall** *(eponym and anatomy not in course material)*.\n\nSrc: L17,18; L22",
        "qs": [
          "enthd-ear-3",
          "entep-ear-31",
          "entep-ear-53",
          "entep-throat-24",
          "entep-mfe5-42",
          "entqb-ear1-21",
          "entqb-ear1-22",
          "entqb-ear1-23",
          "entqb-ear6-158",
          "entqb-ear6-161",
          "entqb-ear6-162",
          "entqb-ear6-163",
          "entqb-ear6-177",
          "entqb-ear6-178",
          "entep-case-32",
          "entep-ear-116"
        ]
      },
      {
        "id": "otal-3",
        "w": "must",
        "h": "Local causes — the map, and the painless list",
        "body": "**EAR — external (pinna · EAC) and MIDDLE EAR. NEIGHBOURING STRUCTURES — TMJ · parotid gland · pre-auricular lymph nodes.**\n**Auricle: perichondritis · herpes zoster · gout. EAC: acute localized otitis externa (furunculosis) · acute diffuse otitis externa · otomycosis · herpes zoster · malignant external otitis · trauma · rarely HARD IMPACTED WAX and TUMOURS. Middle ear: ASOM before perforation · complicated CSOM · tympanic plexus neuralgia.**\n\n||**PAINFUL**|**PAINLESS**|\n|---|---|---|\n|Auricle|perichondritis, haematoma auris, herpes zoster, gout|—|\n|Canal|**furunculosis**, diffuse and **malignant** otitis externa, hard impacted wax|**OTOMYCOSIS** — pain means secondary bacterial infection · exostosis, osteoma, soft wax|\n|Drum|**bullous myringitis**|—|\n|Middle ear|**ASOM before perforation**, **complicated** CSOM, acute mastoiditis|**uncomplicated CSOM** — “is not a painful condition” · **effusion / glue ear**|\n|Inner ear|—|**LABYRINTHITIS** — no pain fibres in the inner ear|\n|Nearby|TMJ disease, parotitis, pre-auricular lymphadenitis|—|\n\n- **Labyrinthitis is the standing “except” answer** in any painful-condition list; it gives vertigo and hearing loss.\n- **Pain in a known CSOM is never the CSOM** — it means acute exacerbation, a complication, or malignancy.\n\nSrc: L17,18; L16",
        "qs": [
          "entep-ear-54",
          "entep-ear-76",
          "entep-ear-96",
          "entqb-ear6-157",
          "entqb-ear6-164",
          "enthd-ear-36",
          "entep-ear-7",
          "entep-ear-28"
        ]
      },
      {
        "id": "otal-4",
        "w": "high",
        "h": "The auricle — haematoma and perichondritis",
        "body": "**Perichondritis** — infection of the perichondrium following **trauma to CARTILAGE: a high (cartilaginous) piercing, laceration, surgery, burns, or incising a canal furuncle.** **The LOBULE is spared — it holds no cartilage**, which is why a lobule piercing is safe and an upper-auricle one is not. ***Pseudomonas* is the usual organism** *(organism not in course material)*.\n\n||**HAEMATOMA AURIS**|**PERICHONDRITIS**|\n|---|---|---|\n|After|**blunt lateral blow** — boxer, wrestler|piercing, laceration, burn, **an undrained haematoma**|\n|Feel|**cystic, fluctuant, PAINFUL but NOT tender**, not hot|**red, hot, diffusely swollen, exquisitely TENDER**|\n|Lesion|**subperichondrial blood strips the cartilage from its blood supply**|infection of the perichondrium itself|\n|Treatment|**EVACUATE early** + pressure dressing|**antibiotics WITH surgical incision and drainage**|\n|Untreated|→ **perichondritis** → cauliflower ear|→ **ABSCESS** → **CAULIFLOWER EAR**|\n\n- **Cartilage is avascular: it dies under any collection left sitting on it.** Both complications on the slide are **abscess** and **cauliflower ear**.\n- Defect: one printed box answers **haematoma** treatment under a **perichondritis** stem — key (antibiotics with surgical incision) kept as printed.\n- **Herpes zoster and gout** are the other two auricular causes.\n\nSrc: L17,18",
        "qs": [
          "entep-ear-14",
          "entep-ear-170",
          "entep-ear-223",
          "entqb-ear2-30",
          "entqb-ear2-31",
          "entqb-ear2-32",
          "entqb-ear2-46",
          "enthd-ear-40",
          "entep-case-1"
        ]
      },
      {
        "id": "otal-5",
        "w": "high",
        "h": "External otitis — the classification and its predisposing factors",
        "body": "**INFECTIOUS · REACTIVE.** Infectious splits three ways: **BACTERIAL** — localized (**furunculosis**), **diffuse**, **malignant** · **FUNGAL** — otomycosis · **VIRAL** — bullous myringitis, herpes zoster.\n**Predisposing factors, one list for all of them: HOT WEATHER · HUMIDITY · SWEATING · MANIPULATION · IMMUNE DEFICIENCY · ALLERGY · EAR DISCHARGE.**\n- **Hyperhidrosis and diabetes both belong to that list**, and **treating the predisposing factor is part of the cure** — it is step 3 of diffuse otitis externa’s own treatment.\n\nSrc: L17,18",
        "qs": [
          "enthd-ear-41",
          "entqb-ear2-37",
          "entep-ear-107"
        ]
      },
      {
        "id": "otal-6",
        "w": "must",
        "h": "Furunculosis — localized external otitis",
        "body": "**A *Staphylococcus aureus* infection of a HAIR FOLLICLE.** So it is confined to the **OUTER ONE THIRD of the canal — cartilaginous, hair-bearing.** The **inner two thirds are BONY and carry no hair follicles** and can never harbour one.\n**Symptom: ear pain. Signs: TENDERNESS ON THE TRAGUS AND ON PULLING THE AURICLE · LOCALIZED SWELLING in the canal ± discharge.** The **drum is normal and intact**. **Pain increases on MASTICATION** — the cartilaginous canal moves with the TMJ.\n**Treatment: SYSTEMIC ANTIBIOTICS + ANALGESIA.**\n\n|Sign at the bedside|Diagnosis|\n|---|---|\n|**Tragal tenderness, pain on pulling the auricle, localized canal swelling**|**FURUNCLE** — outer third|\n|Same tenderness but **diffuse** canal redness and debris, itch first|**diffuse otitis externa**|\n|**Deep** pain, fever, **bulging drum**, **tragus free**|**ASOM** before perforation|\n|**Painless** discharge through a perforation|**CSOM**|\n|**Pinna pushed OUT and DOWN**, post-auricular swelling **filling the sulcus**|**MASTOID ABSCESS** — not a node|\n|Tragal sign positive **plus** a discrete mobile post-auricular node|**furuncle with reactive lymphadenitis**|\n\n- **It is NOT self-limiting**, and **it must not be incised** — the blade seeds avascular cartilage and causes **perichondritis**. **Recurrent attacks → screen for diabetes** *(both not in course material)*.\n- Defect: the bank writes the mastoid pinna as “pushed forwards and downwards” where L16 writes “outwards and downwards” — the same displacement from a different angle.\n\nSrc: L17,18; L22; L16",
        "qs": [
          "enthd-ear-18",
          "enthd-ear-21",
          "enthd-ear-38",
          "enthd-ear-44",
          "entep-ear-39",
          "entep-ear-143",
          "entep-ear-152",
          "entep-ear-167",
          "entep-ear-168",
          "entep-ear-171",
          "entep-ear-217",
          "entep-ear-240",
          "entep-enr-2",
          "entep-enr-35",
          "entep-enr-36",
          "entqb-ear2-33",
          "entqb-ear2-38",
          "entqb-ear2-42",
          "entqb-ear4-96",
          "entqb-ear6-164",
          "entep-case-4"
        ]
      },
      {
        "id": "otal-7",
        "w": "high",
        "h": "Diffuse external otitis",
        "body": "**Itch first, then pain and fullness; the canal is exquisitely tender to examine.** **Signs: DIFFUSE HYPERAEMIA of the whole canal · DISCHARGE and DEBRIS** — often serous, with **no single localized swelling**.\n**Treatment: 1) AURAL TOILETTE · 2) TOPICAL ANTIBIOTIC WITH STEROID DROPS · 3) TREAT THE PREDISPOSING FACTOR.**\n- **Localized = one furuncle → SYSTEMIC antibiotics. Diffuse = the whole canal → TOPICAL drops.** That is the treatment difference the two names carry.\n- **Itch preceding pain** points to a fungal or scratched start with bacterial superinfection — treat both.\n\nSrc: L17,18",
        "qs": [
          "entep-ear-107",
          "enthd-ear-31",
          "enthd-ear-41"
        ]
      },
      {
        "id": "otal-8",
        "w": "must",
        "h": "Malignant otitis externa — necrotizing external otitis, skull base osteomyelitis",
        "body": "**Not a neoplasm — “malignant” names the behaviour; there are no mitotic figures.** **Serious and potentially fatal**, with **intracranial spread and cranial nerve palsies**.\n**Host: IMMUNOCOMPROMISED — uncontrolled DIABETES, classically ELDERLY · renal failure · HIV · haematologic or immune deficiency disease.** **Organism: *PSEUDOMONAS AERUGINOSA*.** **Microangiopathy → osteomyelitis of the skull base.**\n**Symptoms: PAIN — chronic, WORSE AT NIGHT, may become disabling, far beyond diffuse otitis externa · ear discharge · hearing loss · symptoms of cranial nerve palsies.** **Signs: GRANULATION TISSUE in the canal floor · discharge · CRANIAL NERVES.** The **drum is typically intact**.\n**Suspect it whenever an external otitis fails to improve on topical drops** — the standing vignette is a diabetic ~10 days into drops with no change.\n\n|Structure reached|Deficit|\n|---|---|\n|**Stylomastoid foramen**|**LMN FACIAL PALSY** — the marker that disease has left the canal|\n|**Petrous apex**|**FACIAL PAIN** — trigeminal|\n|**Jugular foramen**|IX, X, XI — dysphagia, hoarseness, shoulder weakness|\n\n**Investigations: CT · MRI · ISOTOPE SCANNING (Tc99, Ga67) · bacteriological testing · BIOPSY**, which also excludes carcinoma.\n**Treatment: 1) CONTROL THE CAUSATIVE FACTOR · 2) hospitalisation may be needed initially · 3) SYSTEMIC ANTI-PSEUDOMONAL ANTIBIOTICS FOR 3–6 MONTHS, usually an IV COMBINATION · 4) DEBRIDEMENT of canal granulations (plus biopsy) · 5) HYPERBARIC OXYGEN.** *(Quinolones are the bank’s named agent; the slide says only “against pseudomonas”.)*\n- **Most feared complication = INTRACRANIAL SPREAD.** A short oral course, watchful waiting and myringotomy are all wrong answers.\n- Defect: one bank keys **V, VI and VII** as the nerves affected; no lecture names any — the slide states only “cranial nerves”, and **VII is classically first**. Keyed as printed.\n- Two printed stems name no disease at all (“infection spreading to which structure…”); both sit in the malignant-otitis-externa block and are read that way.\n\nSrc: L17,18; L16",
        "qs": [
          "entep-ear-13",
          "entep-ear-69",
          "entep-ear-131",
          "entep-ear-220",
          "entep-ear-246",
          "entqb-ear2-39",
          "entqb-ear2-40",
          "entqb-ear2-41",
          "entqb-ear2-49",
          "enthd-ear-32",
          "enthd-ear-33",
          "enthd-ear-34",
          "enthd-ear-37",
          "enthd-ear-39",
          "enthd-ear-42",
          "entep-case-3"
        ]
      },
      {
        "id": "otal-9",
        "w": "high",
        "h": "Otomycosis",
        "body": "**PAINLESS.** **Itching** and blockage are the symptoms — **“otomycosis is painless; associated pain = associated bacterial infection”**, and scratching is what invites it.\n**Signs: FUNGAL HYPHAE OR DEBRIS, “WET NEWSPAPER-LIKE”.** *Aspergillus* and *Candida* *(organisms not in course material)*.\n**Treatment: 1) CLEAR THE FUNGAL DEBRIS — instrumentation, suction, ear wash, then DRY THOROUGHLY · 2) TOPICAL ANTIFUNGALS — CLOTRIMAZOLE drops, ear pack with CASTELLANI PAINT, BORIC ACID 4 %.**\n- **Itching for weeks, then a vigorous scratch, then a tender tragus = both diagnoses at once** — otomycosis with a superimposed bacterial otitis externa; treat both.\n\nSrc: L17,18",
        "qs": [
          "enthd-ear-31",
          "enthd-ear-36",
          "entqb-ear2-42"
        ]
      },
      {
        "id": "otal-10",
        "w": "know",
        "h": "The viral pair — bullous myringitis and Ramsay Hunt",
        "body": "**Bullous myringitis is the VIRAL member of the external otitis group** — the slide files it under Viral, and prints its headings with nothing under them. **Haemorrhagic blebs on the drum and deep canal, severe pain out of proportion to the signs, hearing near normal; analgesia, self-limiting, blebs may be de-roofed** *(all detail not in course material)*.\n**Herpes zoster oticus = RAMSAY HUNT SYNDROME: painful herpetic VESICLES of the auricle and EAC + FACIAL PARALYSIS + auditory and vestibular dysfunction.** Full treatment and prognosis sit in `ent-facial`.\n\nSrc: L17,18; L15",
        "qs": [
          "entqb-ear2-37"
        ]
      },
      {
        "id": "otal-11",
        "w": "know",
        "h": "The rest of the canal — wax, exostosis, osteoma, trauma",
        "body": "**Rare local canal causes: HARD IMPACTED WAX · TUMOURS · TRAUMA.** Soft wax is painless.\n\n||**EXOSTOSIS**|**OSTEOMA**|\n|---|---|---|\n|Number|**MULTIPLE**|**SINGLE**|\n|Side|**may be BILATERAL**|unilateral|\n|Base|**broad, sessile**|pedunculated|\n|Site|deep bony canal|bony–cartilaginous junction|\n|Cause|**COLD WATER** swimming or diving|none known|\n|Symptoms|**USUALLY ASYMPTOMATIC**|usually asymptomatic|\n\n- Symptoms appear only when the lesion **occludes the canal or traps wax and water** — and any obstruction of canal or middle ear gives a **CONDUCTIVE loss**, never sensorineural: the cochlea is untouched.\n\nSrc: **whole section not in course material** — neither exostosis nor osteoma appears in any of the 34 cached ENT lecture files; answered from general medical knowledge, and a candidate for the ENT book read.",
        "qs": [
          "entqb-ear2-47",
          "entqb-ear2-48",
          "entep-ear-7"
        ]
      },
      {
        "id": "otal-12",
        "w": "high",
        "h": "Middle ear and neighbouring structures",
        "body": "**Middle ear, three causes: 1) ASOM BEFORE tympanic membrane perforation** — severe throbbing pain, relieved by perforating **· 2) COMPLICATED CSOM, e.g. ACUTE MASTOIDITIS** — uncomplicated CSOM does not hurt **· 3) TYMPANIC PLEXUS NEURALGIA — pain is ABOLISHED AFTER INTRATYMPANIC INJECTION OF XYLOCAINE**, which is both the test and the treatment.\n**Neighbouring structures: TMJ · PAROTID GLAND · PRE-AURICULAR LYMPH NODES.**\n- **TMJ disease causes otalgia BOTH WAYS — LOCALLY**, because the joint abuts the anterior canal wall and is listed among the neighbouring structures, **AND BY REFERRAL** through the **auriculotemporal branch of V** *(the branch is not named in course material)*.\n- **TMJ arthritis: severe otalgia not preceded by a URTI, a completely normal ear, pain on MASTICATION and jaw movement, a TENDER joint and a CLICK on opening the mouth.**\n\nSrc: L17,18; L16",
        "qs": [
          "entqb-ear6-157",
          "entqb-ear6-178",
          "entep-case-32",
          "entep-ear-28",
          "entqb-ear4-96"
        ]
      }
    ]
  }
};
