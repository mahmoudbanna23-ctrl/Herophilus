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
    "intro": "This is the **largest chapter in the ENT bank — 117 transcribed questions** — and the examiner asks it in a very narrow set of shapes. Learn the shapes and the chapter collapses to a manageable size.\n\n**1. Timing questions.** More questions turn on *when* something happened than on anything else. Post-tonsillectomy bleeding alone is asked **eighteen separate ways** across the two banks — *during surgery / 2 hours / 12 hours / 20 hours / 24 hours / 5 days / 6 days / 7 days / 10 days / 4 weeks* — and every one of them is answered by the same three-line table (primary · reactionary · secondary). The examiner-pattern file records *\"post-tonsillectomy bleeding — 2 hours vs 1 week\"* on four of twenty-five revision pages. **Memorise the three windows and their three causes and you have collected roughly one question in six of this chapter.**\n\n**2. \"All of the following EXCEPT.\"** One line in seven of the whole ENT paper is a negative stem, and in this chapter the proportion is higher still — adenoid facies *except*, indications of adenoidectomy *except*, true about diphtheria *except*, may be injured during adenoidectomy *except*, sure signs of chronic tonsillitis *except*. **You cannot answer these by knowing the right answer; you have to know all four options.** That is why every list below is given complete, and why the wrong options are explained as carefully as the keys.\n\n**3. The membrane differential.** *A white/grey coating on the tonsil* is the single richest vein in the chapter — diphtheria, infectious mononucleosis, Vincent’s angina, candida, agranulocytosis/leukaemia, follicular tonsillitis, and the trap option (peritonsillar abscess, which **displaces** the tonsil instead of coating it). Both banks print this list, forwards and inverted. **One table answers all of them.**\n\n**4. One-line vignettes decided by a single finding.** The banks print look-alike vignettes in rows — same age, same sore throat, same fever — where *one* clause decides the answer: *pus* → bacterial tonsillitis; *membrane + palatal petechiae + hepatosplenomegaly* → mononucleosis; *vesicles on the soft palate* → herpangina; *strawberry tongue + desquamation* → scarlet fever; *unilateral punched-out ulcer + foul breath* → Vincent’s; *trismus + uvula pushed across* → quinsy. **Read the vignette for the discriminating clause, not for the general picture.**\n\n**5. The three-vignette ladder.** Grade Gain prints identical adenoid vignettes with one clause changed and expects three different answers: 2-year-old → wait; 2-year-old **plus snoring and daytime sleepiness** → operate now; 4-year-old **plus a cleft palate** → partial adenoidectomy only. **The age rule, the OSA override and the cleft exception are the whole teaching point.**\n\n**6. Numbers.** 7 / 5 / 3 attacks. 5–7 years. 2–6 years. 8–30 crypts. 5–10 days. 24 hours. 40–70 °C. 2–3 weeks. 5–15 years. **The bank tests numbers directly and it does not paraphrase them.**\n\n**7. One nerve, asked repeatedly.** Referred otalgia in tonsillitis and after tonsillectomy is **glossopharyngeal**, and it is asked three times because the glossopharyngeal nerve *lies in the tonsillar bed*. The vagus is the distractor every time.",
    "sections": [
      {
        "id": "tons-a1",
        "w": "must",
        "h": "Waldeyer’s ring — what it is and its five components",
        "body": "**Definition (L3, opening slide, verbatim):** *\"Waldeyer’s ring is a discontinuous ring of lymphoid tissue in the pharynx, functioning as a **primary immune defense against inhaled or ingested pathogens**, surrounding the naso- & oropharynx.\"*\n\n`L1.2) Anatomy of the pharynx.pdf` adds the function in the same words the exam uses: it plays *\"an important role in **early recognition of pathogenic microorganisms & initiation of an immune response**.\"*\n\n**THE FIVE COMPONENTS — learn them as a list, because the bank asks for the one that is NOT a member:**\n\n1. **Nasopharyngeal tonsil (the ADENOID)** — single, midline, in the roof/posterior wall of the nasopharynx.\n2. **Tubal tonsils** — around the Eustachian tube orifices (Gerlach’s tonsil).\n3. **Palatine tonsils** — the paired \"tonsils\" of everyday speech, in the oropharynx.\n4. **Lingual tonsils** — on the posterior third (base) of the tongue.\n5. **Lateral pharyngeal bands** — the vertical lymphoid ridges behind the posterior pillars.\n\n**⚠️ THE CLASSIC DISTRACTOR: HENLE’S LYMPH NODES ARE NOT PART OF WALDEYER’S RING.** The examiner-pattern file records this exact stem — *\"components of Waldeyer’s ring, all EXCEPT → Henle’s lymph node / Delphian lymphoid tissue\"* — on two separate revision pages. Henle’s glands are the **retropharyngeal** lymph nodes lying on either side of the midline behind the pharynx; they are ordinary lymph nodes, not part of the ring, and `L4) PHARYNGEAL SUPPURATIONS.pdf` describes them separately as the source of the acute retropharyngeal abscess (*\"they tend to atrophy about the fifth year of age\"* — which is why that abscess is a disease of infants). The **Delphian node** is a pretracheal node above the thyroid isthmus, also unrelated.\n\n**Why \"discontinuous\" matters.** The ring is not a closed circle of tissue — it is a set of aggregations at the two portals of entry (nose and mouth) meeting at the pharynx. All of it is **non-encapsulated mucosa-associated lymphoid tissue with no afferent lymphatics** — antigen reaches it directly across the epithelium rather than arriving by lymph, which is what distinguishes it from a lymph node and is asked directly (see the adenoid section).\n\n**Immunoglobulin output.** The ring produces **IgG, IgM, IgA (especially secretory IgA) and IgE**. It does **not** secrete **IgD** — IgD functions as a membrane-bound antigen receptor on naive B cells, not as a secreted antibody. *(The isotype list is not taken from the course material — no cached ENT slide discusses immunoglobulin classes; the Waldeyer function statement above is.)*\n\n**Clinical bottom line.** The ring is at its most active between **4 and 10 years**, which is precisely when tonsillitis and adenoid hypertrophy peak — the tissue is doing its job, and hypertrophy is a *response*, not a disease in itself. This is also the honest answer to the parent who asks whether removing tonsils harms immunity: the rest of the ring compensates, and no clinically important immunodeficiency follows.",
        "qs": [
          "entqb-thr4-247",
          "entqb-thr4-168",
          "entqb-thr4-150"
        ]
      },
      {
        "id": "tons-a2",
        "w": "must",
        "h": "The palatine tonsil — surface, crypts, capsule and bed",
        "body": "From `L1.2) Anatomy of the pharynx.pdf`, quoted:\n\n- *\"A pair of lymphoid tissue masses lying on either side of the oropharynx.\"*\n- *\"**Normal tonsils are flush with the edges of the fauces**\"* — i.e. a normal tonsil does not project past the pillars. This is the baseline against which \"hypertrophy\" is judged.\n- *\"Medial surface is covered by mucous membrane showing **8–30 depressions (crypts)**.\"*\n- *\"The largest crypt (**crypta magna**) separates the upper pole from the tonsillar body.\"*\n- *\"Its lateral (deep) surface is bounded by a **fibrous tissue capsule**, which separates the tonsil from its bed.\"*\n- *\"The lower pole may extend to the BOT [base of tongue] & become continuous with the **lingual tonsil**.\"*\n\n**THE TONSILLAR BED — four structures, and the deck names them exactly:**\n\n| Layer | Structure | Why it is asked |\n|---|---|---|\n| Muscle | **Superior constrictor** | ⚠️ **SUPERIOR, never middle.** Extracapsular tonsillectomy exposes it |\n| Nerve | **Glossopharyngeal nerve** | The whole basis of referred otalgia and of the gag reflex |\n| Artery | **Facial artery** | Its tonsillar branch is the main supply |\n| Fascia | **Buccopharyngeal fascia** | The plane the dissection follows |\n\n**⚠️ The crypta magna is the door quinsy comes through.** `L4) PHARYNGEAL SUPPURATIONS.pdf` states that peritonsillar abscess *\"usually follows an attack of acute tonsillitis when infection travels to the peritonsillar space **via the crypta magna**\"* — so the largest crypt is not an anatomical curiosity but the anatomical explanation of the commonest suppurative complication.\n\n**Why the tonsil is almond-shaped and lymphoid-dense.** The bank describes it as *\"almond shaped compact bodies of dense lymphoid tissue\"* and keys that as **true**. The crypts multiply the surface area available to sample antigen; they are also where debris, keratin and bacteria accumulate to form **tonsilloliths**, and where the pus plugs of follicular tonsillitis sit.\n\n**⚠️ The internal carotid artery lies about 2.5 cm behind and lateral to the tonsil** (the figure is Grade Gain’s own, printed in its explanation box), separated from it only by the capsule, the superior constrictor and the buccopharyngeal fascia. Nothing else in this chapter kills as quickly. Deep cautery, deep suturing or dissection outside the capsule in the lateral fossa can injure it — see the complications section.",
        "qs": [
          "entqb-thr4-168",
          "entqb-thr4-224",
          "entqb-thr4-196",
          "entqb-thr4-172"
        ]
      },
      {
        "id": "tons-a3",
        "w": "must",
        "h": "Blood supply, lymphatic drainage and nerve supply — and referred otalgia",
        "body": "**ARTERIAL SUPPLY** (`L1.2`, the *\"Blood supply of palatine tonsils\"* slide, in the deck’s own order):\n\n1. **Tonsillar branch of the FACIAL artery — the main supply.** ⚠️ This is a directly-asked fact; the examiner-pattern file logs *\"main arterial supply of the (palatine) tonsils → facial artery\"* on two revision pages.\n2. Ascending palatine artery (also facial).\n3. Dorsalis linguae artery (lingual).\n4. Descending palatine artery (maxillary).\n5. Ascending pharyngeal artery (external carotid).\n\nAll five are branches of the **external carotid** system, directly or indirectly — which is why tonsillar bleeding is arterial, brisk, and why the *internal* carotid is a surgical hazard rather than a source of ordinary bleeding. The deck also labels the **paratonsillar vein**, a common source of venous ooze at the upper pole.\n\n**LYMPHATIC DRAINAGE** — `L1.2`, verbatim: *\"**Upper deep cervical LNs (esp. the Jugulo-diagastric LN)**\"* (printed \"diagastric\"). The **jugulodigastric node** — also called the **tonsillar node**, at **level II**, below and behind the angle of the mandible where the posterior belly of digastric crosses the internal jugular vein — is the node that enlarges in every tonsillar infection.\n\n> **THE NODE RULE, AND THE BANK TESTS BOTH HALVES:**\n> - **TENDER** enlarged jugulodigastric nodes → **acute** infection (acute tonsillitis, quinsy, diphtheria — where they are so large the deck calls it a **\"bull neck\"**).\n> - **FIRM, NON-TENDER, persistent** jugulodigastric nodes → **chronic** tonsillitis in a child.\n> - **The same painless firm node in an ADULT is a red flag for malignancy** until proved otherwise — a metastasis from a head-and-neck primary, and the tonsil itself is one of the primaries to look at. *(The adult red-flag rule is not taken from the course material.)*\n\n**NERVE SUPPLY — GLOSSOPHARYNGEAL (IX).** The glossopharyngeal nerve lies **in the tonsillar bed** (`L1.2`), and this single fact answers three separate questions in this chapter.\n\n**REFERRED OTALGIA.** `L17,18) Otorrhea and otalgia.pdf` and `L19.2) Tinnitus.pdf` both print the same slide: otalgia is **local in 95 %** and **referred in 5 %** — *\"lesion in a remote area having the same N.S.\"* — and the four nerves that can carry it are:\n\n| Nerve | Territory that refers to the ear | The ear pathway |\n|---|---|---|\n| **Trigeminal (V)** | Teeth, TMJ, oral cavity, anterior tongue | Auriculotemporal nerve |\n| **Glossopharyngeal (IX)** | **Tonsil, tonsillar fossa, soft palate, posterior tongue, nasopharynx** | **Jacobson’s tympanic branch** |\n| **Vagus (X)** | Vallecula, epiglottis, larynx, hypopharynx, oesophagus | Arnold’s auricular branch |\n| **C2 and C3** | Neck, cervical spine | Great auricular, lesser occipital |\n\n**So: sore throat from the TONSIL refers along IX; sore throat from the PYRIFORM FOSSA or SUPRAGLOTTIS refers along X.** `L1.2` puts the vagal territory precisely — the vallecular/epiglottic region is supplied *\"via the **internal branch of the superior laryngeal nerve**\"*, **not** the recurrent laryngeal nerve.\n\n**Clinical bottom line.** Earache after tonsillectomy is **expected**, not a complication — it is IX pain referred from the raw bed, worst around days 5–7 as the slough separates. The ear is normal on otoscopy. It is treated with analgesia, and the reason to treat it properly is that **a child who will not swallow because of ear pain becomes dehydrated**, which the lecture lists as a complication in its own right.",
        "qs": [
          "entep-throat-109",
          "entqb-thr4-201",
          "entqb-thr1-30",
          "entqb-thr4-168",
          "entqb-thr4-225"
        ]
      },
      {
        "id": "tons-a4",
        "w": "must",
        "h": "The adenoid — anatomy, the growth curve, and how it differs from the palatine tonsil",
        "body": "`L3) DISEASES OF THE TONSILS & ADENOIDS.pdf`, verbatim:\n\n- *\"**Hypertrophied nasopharyngeal lymphoid tissue.**\"*\n- *\"**Very common in children aged 2-6 yrs.**\"*\n- *\"Caused by **infections or allergies**.\"*\n- *\"**Can shrink naturally after 6-8 years.**\"*\n- *\"Adenoids usually appear as a **smooth soft cushion showing many longitudinal ridges**.\"*\n\n**THE GROWTH CURVE — the bank asks each point on it separately:**\n\n| Age | State |\n|---|---|\n| Birth | Present as a **submucosal** organ |\n| **2–6 years** | **Peak size** — and the age of maximal symptoms |\n| **After 6–8 years** | Begins to **shrink naturally** |\n| **~11 years (puberty)** | **Involutes** ⚠️ *(this figure is the bank’s; the lecture states only the 6–8 year shrinkage — see the note below)* |\n| Adult | **Adenoidal tissue in an adult is a RED FLAG, not a normal finding** — think nasopharyngeal carcinoma, lymphoma, or HIV-associated lymphoid hyperplasia *(not taken from the course material)* |\n\n> **⚠️ RECORDED, NOT DISPUTED:** Grade Gain keys adenoid involution at **11 years** and that is the answer to give it. No cached ENT slide states an involution age at all — `L3` gives only *\"can shrink naturally after 6-8 years\"*. Both numbers are consistent with each other (shrinkage begins at 6–8, completes around puberty); learn both.\n\n**THE ADENOID vs THE PALATINE TONSIL — six differences, and five of them are asked:**\n\n| | **Adenoid** (nasopharyngeal tonsil) | **Palatine tonsil** |\n|---|---|---|\n| Number | **Single, midline** pyramidal mass | **Paired**, lateral |\n| **Capsule** | **⚠️ NO CAPSULE** | **Has a definite fibrous capsule** |\n| Surface | **Longitudinal ridges / clefts** — a *\"smooth soft cushion\"* | **8–30 crypts** + crypta magna |\n| Epithelium | **Pseudostratified columnar ciliated** (respiratory) | Stratified squamous |\n| Afferent lymphatics | **None** (as all Waldeyer tissue) | **None** |\n| Drainage | **Upper deep cervical** + retropharyngeal nodes | **Upper deep cervical**, esp. jugulodigastric |\n\n**⚠️ \"IT HAS A DISTINCT CAPSULE\" IS THE FALSE STATEMENT, AND THE ABSENCE OF A CAPSULE EXPLAINS THREE THINGS AT ONCE:**\n\n1. **Adenoidectomy is a CURETTAGE, not a dissection** — there is no plane to dissect in.\n2. **Regrowth is a recognised complication**, especially in very young children, because \"complete removal\" has no anatomical endpoint.\n3. **Residual adenoid tissue is the commonest cause of primary bleeding** — a vascular capsule-less tag with nothing to clot against.\n\n**⚠️ \"It has afferent lymphatic vessels\" is FALSE.** Waldeyer tissue samples antigen directly through its epithelium; it has efferent lymphatics only. **\"It has vertical crypts\" is FALSE** — crypts belong to the palatine tonsil; the adenoid has longitudinal ridges. **\"It drains into upper deep cervical nodes\" is TRUE.**",
        "qs": [
          "entqb-thr4-149",
          "entqb-thr4-150",
          "entqb-thr4-151",
          "entqb-thr4-166",
          "entqb-thr4-173"
        ]
      },
      {
        "id": "tons-b1",
        "w": "must",
        "h": "Pharyngitis — the classification the examiner actually uses",
        "body": "`L3` splits pharyngitis on its very first content slide, and the bank asks this split from at least six angles.\n\n**BY ORGANISM (`L3`, \"PHARYNGITIS\" slide, complete):**\n\n| **VIRAL** | **BACTERIAL** |\n|---|---|\n| Rhinovirus · Adenovirus · **Coxsackievirus** · Parainfluenza virus · Coronavirus · **Epstein-Barr virus (EBV)** · **HIV** · Cytomegalovirus (CMV) | *\"Most important is: **Group A beta-haemolytic streptococci (GABHS)**\"* |\n\n**THE TWO NUMBERS, VERBATIM AND EXAMINABLE:** GABHS is *\"most common cause in **children (1/3 of cases)** & about **10 % in adults**.\"*\n\n> **⚠️ THE APPARENT CONTRADICTION THE BANK EXPLOITS — read the stem word for word.**\n> - *\"Most common **cause** of acute tonsillopharyngitis\"* → **VIRAL.** Two thirds of children and nine tenths of adults.\n> - *\"Commonest causative **ORGANISM** in acute tonsillitis\"* → **Streptococcus haemolyticus (GABHS / S. pyogenes).** No single virus comes close to it individually, and it is the one you treat.\n>\n> **Both keys are correct. The stems ask different questions.** Endpoint keys \"viral\" at one printing and \"streptococcus haemolyticus\" at another; Grade Gain does the same. This is the single most common source of confusion in the chapter.\n\n**BY SPECIFICITY** — Grade Gain organises the whole topic this way, so learn the grid:\n\n| | **Acute** | **Chronic** |\n|---|---|---|\n| **Non-specific** | Ordinary viral or bacterial pharyngitis/tonsillitis | Chronic pharyngitis (catarrhal, hypertrophic/granular, atrophic), chronic adenoiditis |\n| **Specific** | **Diphtheria · Scarlet fever · Vincent’s angina · Herpangina · Infectious mononucleosis · Candidiasis** | **Syphilis · Tuberculosis** *(and scleroma, leprosy)* |\n\n**⚠️ \"Which is a chronic SPECIFIC bacterial infection?\" → SYPHILIS.** Diphtheria and scarlet fever are specific but **acute**; adenoiditis is chronic but **non-specific**. Syphilis and TB of the pharynx are the two chronic specific infections, and both are **mimics of malignancy** — a chronic pharyngeal ulcer that will not heal needs a **biopsy**, not another course of antibiotics. Tertiary syphilis gives a punched-out gumma with a \"wash-leather\" slough on the soft palate and can perforate it; pharyngeal TB gives shallow, exquisitely painful ulcers with undermined edges, usually with pulmonary disease. *(The staging, the individual lesion morphology and the malignancy caution are not taken from the course material — pharyngeal syphilis and TB appear in no cached ENT slide.)*\n\n**BY WHAT DETERMINES THE CLINICAL PICTURE.** The bank asks which factors decide *the type* a tonsillitis takes, and the answer is all three together: **(1) the host’s immune mechanism, (2) the invading organism and its toxins, (3) the tissue response.** The same organism can produce a catarrhal, follicular, membranous or parenchymatous picture in different patients — which is why **the appearance of the tonsil does not reliably name the organism**, and why the lecture says bluntly: *\"**Throat swab generally not helpful!**\"* *(The three-factor list is not taken from the course material.)*\n\n**FUNGAL PHARYNGITIS** is given its own slide and is covered in full in the candida section below.",
        "qs": [
          "entep-throat-60",
          "entep-throat-73",
          "entqb-thr4-174",
          "entqb-thr4-176",
          "entqb-thr4-177",
          "entqb-thr4-179",
          "entqb-thr4-208",
          "entqb-thr4-178"
        ]
      },
      {
        "id": "tons-b2",
        "w": "must",
        "h": "The four clinical types of tonsillitis — catarrhal, follicular, membranous, parenchymatous",
        "body": "`L3` prints a picture slide headed **\"CLINICAL TYPES OF TONSILLITIS\"** naming *Acute CATARRHAL, Acute FOLLICULAR, Acute MEMBRANOUS* and *CHRONIC Tonsillitis*. It names them without describing them, and the bank asks for the descriptions — so the table below is assembled from the clinical picture the slides do give, and the descriptive detail is tagged.\n\n| Type | What the tonsil looks like | Depth | Typical organism |\n|---|---|---|---|\n| **Catarrhal (superficial)** | Diffuse congestion of the **surface epithelium only**; thin mucus exudate; **tonsil NOT enlarged** | Surface | Usually **viral** |\n| **Follicular** | **Discrete yellowish-white pus plugs at the crypt mouths** on a congested tonsil — the \"spotted\" tonsil | Crypts | **Bacterial (GABHS)** |\n| **Membranous** | The crypt exudate **coalesces into a sheet** covering the tonsil | Surface, confluent | Bacterial, or specific (diphtheria, EBV, Vincent’s) |\n| **Parenchymatous** | The **whole substance** of the tonsil is inflamed — **uniformly enlarged and congested, no surface exudate** | Whole organ | Either |\n\n*(The morphological descriptions and the depth column are not taken from the course material; `L3` names the four types on a picture slide only.)*\n\n**⚠️ THE DISCRIMINATOR THE BANK TESTS: DOES THE TONSIL ENLARGE?**\n- In **superficial (catarrhal/membranous)** disease only the surface epithelium is inflamed, so the **tonsil does NOT increase in size**. Congestion, fever, dysphagia and a thick mucus exudate are all present — but not enlargement. *\"Tonsils will increase in size\" is therefore the FALSE statement.*\n- **Enlargement of the tonsil substance is what defines the PARENCHYMATOUS type** — uniformly enlarged and congested.\n\n**⚠️ FOLLICULAR TONSILLITIS IS A BACTERIAL PATTERN.** The bank keys *\"non-specific infective **viral** pharyngitis can present with follicular tonsillitis\"* as the FALSE statement. Purulent plugs filling the crypt mouths mean pus, and pus means bacteria; viral disease gives catarrhal, membranous or **vesicular** pictures instead. (The vesicular picture is herpangina/HSV — see below.)\n\n**⚠️ A DEFECT TO EXPECT:** one Grade Gain question offers *\"catarrhal\"* and *\"superficial\"* as two separate options when they are synonyms, and another asks an *\"all except\"* stem while keying *\"all of the above\"*. Both are recorded as printed. **Answer as the bank keys and do not try to repair the logic in the exam room.**",
        "qs": [
          "entqb-thr4-175",
          "entqb-thr4-177",
          "entqb-thr4-180",
          "entqb-thr4-179",
          "entqb-thr3-97",
          "entep-throat-case-4"
        ]
      },
      {
        "id": "tons-b3",
        "w": "must",
        "h": "Acute tonsillitis — the clinical picture, verbatim",
        "body": "`L3) DISEASES OF THE TONSILS & ADENOIDS.pdf`, the \"ACUTE TONSILLITIS\" slide, complete:\n\n- *\"Common condition.\"*\n- *\"Predominantly affecting **CHILDREN (peak 5-7 yrs.)** & young adults.\"*\n- *\"**Viral or Bacterial – Throat swab generally not helpful!**\"*\n- **Manifestations:**\n  - *\"Acute **sore throat, fever & malaise** +/- **referred otalgia**.\"*\n  - *\"Severe **odynophagia** may lead to **dehydration**.\"*\n  - *\"**Tender BILATERAL cervical lymphadenopathy**.\"*\n  - *\"Tonsils are **red & inflamed** +/- generalized pharyngitis.\"*\n- *\"**Recurrence can lead to CHRONIC TONSILLITIS.**\"*\n\n**THE EXAM PATTERN — five clauses, and the bank prints the same five over and over:**\n\n> *Child, 5–15 years · abrupt fever 38.5–39 °C · severe sore throat and odynophagia · **tonsils enlarged, erythematous, with white pus/exudate** · **tender enlarged jugulodigastric (cervical) nodes** · **NO cough, NO rash, NO hoarseness*** → **acute bacterial (streptococcal) tonsillitis.**\n\n**⚠️ \"NO COUGH\" IS A DELIBERATE CLAUSE, NOT SCENE-SETTING.** Cough and coryza point **away** from streptococcus and towards a virus. This is the **Centor / McIsaac** pattern — fever >38 °C, tonsillar exudate, tender anterior cervical nodes, **absence of cough**, and age 3–14 — where each feature scores a point and a high score justifies treating for streptococcus. *(Centor/McIsaac is not taken from the course material; the individual features all are.)*\n\n**Referred otalgia** appears in the lecture’s own symptom list — *\"+/- referred otalgia\"* — and is glossopharyngeal (see the anatomy section). A child brought in for **earache with a normal ear drum** may have tonsillitis.\n\n**Dehydration is the complication that admits the child**, and the lecture names it explicitly: severe odynophagia → the child will not drink → dehydration. Treat the pain so the child drinks.\n\n**THE FOUR-WAY BEDSIDE SIEVE — every acute vignette in this chapter is decided by one of these:**\n\n| Finding | Diagnosis |\n|---|---|\n| **Pus / follicles on bilaterally red tonsils, tender local nodes, no cough** | **Acute bacterial tonsillitis** |\n| **Grey membrane + palatal petechiae + generalised nodes + hepatosplenomegaly + atypical lymphocytes**, teenager | **Infectious mononucleosis** |\n| **Vesicles/shallow ulcers on soft palate and uvula**, young child, summer | **Herpangina** |\n| **Trismus, uvula pushed to the opposite side, muffled voice, unilateral**, adult | **Quinsy (peritonsillar abscess)** |\n\n*(The full peritonsillar-abscess picture belongs to the `ent-pharsupp` chapter; only the discriminating clause is given here.)*",
        "qs": [
          "entep-throat-111",
          "entqb-thr4-203",
          "entqb-thr4-222",
          "entqb-thr4-230",
          "entqb-thr3-97",
          "entep-throat-case-4",
          "entqb-thr1-30"
        ]
      },
      {
        "id": "tons-b4",
        "w": "must",
        "h": "Treatment of acute tonsillitis — and what to do when penicillin fails",
        "body": "`L3`, \"TREATMENT OF ACUTE TONSILLITIS\", complete and verbatim:\n\n1. *\"**Rest & plenty of fluids.**\"*\n2. *\"**Symptomatic treatment for viral tonsillitis.**\"*\n3. *\"**Bacterial tonsillitis requires antibiotics (Penicillin V or Ampicillin/Clavulanic acid).**\"*\n4. *\"**TONSILLECTOMY for recurrent acute tonsillitis (Chronic tonsillitis).**\"*\n\n**⚠️ FIRST LINE IS PENICILLIN, AND THE REASON IS NOT THE SORE THROAT.** Group A streptococcus has **never developed penicillin resistance**, so penicillin V remains first-line. The purpose of treatment is **eradication to prevent rheumatic fever and acute glomerulonephritis** — not to shorten a sore throat that would settle anyway. *(The absence of penicillin resistance is not taken from the course material; the antibiotic choice and both complications are.)*\n\n**⚠️ SECOND LINE, WHEN PENICILLIN FAILS TO ERADICATE: AMOXICILLIN-CLAVULANATE — NOT A BIGGER DOSE OF PENICILLIN.** The reason is **indirect pathogenicity**: beta-lactamase-producing commensals living in the tonsillar crypts (staphylococci, *Haemophilus*, anaerobes) destroy penicillin in the neighbourhood of the streptococcus without being pathogens themselves. **Protect the drug with a beta-lactamase inhibitor; raising the dose does not help because the drug is being destroyed, not out-competed.** *(Indirect pathogenicity is not taken from the course material; the clavulanate option is on the slide.)*\n\n**Before calling it treatment failure, check three things** *(not taken from the course material)*: **compliance** (a ten-day course in a well child is often abandoned at day three), **the diagnosis** (mononucleosis will not respond to any antibiotic, and an aminopenicillin will produce a rash), and **a complication** (a quinsy will not resolve on oral antibiotics — it needs drainage).\n\n**If truly penicillin-allergic:** a macrolide. *(Not taken from the course material.)*\n\n**⚠️ AMPICILLIN/AMOXICILLIN IS CONTRAINDICATED IN INFECTIOUS MONONUCLEOSIS** — see the mononucleosis section. In a teenager with a sore throat this is a real prescribing decision, and it is why **penicillin V is preferred to amoxicillin in adolescents.**\n\n**Duration.** The standard course is **10 days of penicillin V**. ⚠️ **Grade Gain keys \"penicillin for 2 weeks\" for scarlet fever** and that is the answer to give it; **no cached slide states any course length**, so the discrepancy is recorded rather than corrected. *(Both durations are outside the course material.)*\n\n**Tonsillectomy is treatment #4, not #1.** It treats *recurrence*, never the acute attack — and operating during an acute attack is contraindicated (see contraindications).",
        "qs": [
          "entqb-thr4-240",
          "entqb-thr4-241",
          "entqb-thr4-200",
          "entqb-thr4-244",
          "entqb-thr4-176"
        ]
      },
      {
        "id": "tons-b5",
        "w": "must",
        "h": "Complications of acute tonsillitis — quinsy, rheumatic fever, glomerulonephritis",
        "body": "`L3` gives these a slide of their own, with numbers. **Learn the numbers — the bank prints them.**\n\n**1. PERITONSILLAR ABSCESS (QUINSY)** — the suppurative complication. From `L4) PHARYNGEAL SUPPURATIONS.pdf`: pus in the peritonsillar space *\"between the capsule of the tonsil and the adjacent lateral pharyngeal wall\"*, reached *\"via the **crypta magna**\"*; **most frequently in adult males**, **usually unilateral**, organism *\"usually **streptococcus haemolyticus**\"*. Its four examinable signs: **trismus** (masseter/pterygoid spasm), **the soft palate swollen above and lateral to the tonsil with the tonsil pushed downwards and medially and the uvula pushed to the opposite side**, **marked dysphagia — unable to swallow even his own saliva**, and **torticollis towards the affected side**. A **pale yellowish point** on the swelling means the abscess has matured and can be drained. **Peritonsillar abscess is itself an indication for tonsillectomy** (`L3`), performed *\"one month later after all acute manifestations subside\"* (`L4`).\n\n> **⚠️ CHAPTER BOUNDARY.** Quinsy, parapharyngeal abscess, retropharyngeal abscess and Ludwig’s angina are taught in full in the **`ent-pharsupp`** chapter. What belongs *here* is: quinsy is a complication of acute tonsillitis, it is an indication for tonsillectomy, and **it DISPLACES the tonsil rather than coating it** — which is how it is used as a distractor in the membrane differential.\n\n**2. RHEUMATIC FEVER** — `L3`, verbatim:\n- *\"primarily affects **children 5-15 years**.\"*\n- *\"Caused by: **overreaction of immune system to group A Beta hemolytic streptococci (GABHS)** – typically **2-3 weeks after a strept sore throat**.\"*\n- *\"Symptoms include: **Fever, polyarthritis, jerky movements (Chorea)**.\"*\n- *\"Prevention to prevent permanent heart damage (**Rheumatic Ht. Disease**).\"*\n\n**3. ACUTE GLOMERULONEPHRITIS** — `L3`, verbatim:\n- *\"Causes: **Hematuria, Proteinuria, Oliguria, high BP & generalized oedema**.\"*\n- *\"**Most children recover fully in weeks, 30 % of adults may progress to chronic kidney disease**.\"*\n\n| | **Rheumatic fever** | **Acute glomerulonephritis** |\n|---|---|---|\n| Age | **5–15 years** | Children mostly |\n| Latency | **2–3 weeks** after the sore throat | ~1–2 weeks after throat (or skin) infection |\n| Mechanism | **Immune overreaction to GABHS** | Immune-complex deposition |\n| Picture | Fever, **polyarthritis**, **chorea**, carditis | **Haematuria, proteinuria, oliguria, hypertension, generalised oedema** |\n| Outcome | **Permanent valve damage (RHD)** | **Children recover; 30 % of ADULTS → CKD** |\n| Prevented by | **Eradicating the streptococcus with penicillin** | Same |\n\n**⚠️ Rheumatic fever is a CONSEQUENCE of streptococcal tonsillitis, never a CAUSE of tonsillitis.** Endpoint offers it as a distractor to *\"most common cause of acute tonsillopharyngitis\"* and it is wrong for that reason alone.\n\n**Clinical bottom line.** These two complications are the entire justification for antibiotics in a self-limiting sore throat, and they are why a *documented* streptococcal tonsillitis is treated for a full course rather than until the child feels better.",
        "qs": [
          "entqb-thr4-176",
          "entqb-thr4-240",
          "entqb-thr4-244",
          "entep-throat-60"
        ]
      },
      {
        "id": "tons-c1",
        "w": "must",
        "h": "⭐ Membrane over the tonsil — the master differential table",
        "body": "**This table answers more questions in this chapter than any other single item except the haemorrhage table.** Both banks print the list forwards (*\"differential diagnosis of membranous tonsillitis\"*) and inverted (*\"all of the following cause a membrane EXCEPT\"*), five separate times.\n\n**FIRST, THE ONE DISTINCTION EVERYTHING HANGS ON:**\n\n> **A TRUE MEMBRANE is fused with the necrotic epithelium beneath it — it is ADHERENT, it BLEEDS when you peel it, and it RE-FORMS. Only DIPHTHERIA makes one.**\n> **A FALSE (pseudo)membrane sits on the surface — it WIPES OFF CLEANLY, leaving intact mucosa.** Candida, mononucleosis and follicular exudate all make false membranes.\n> *(The histological basis of the distinction is not taken from the course material; the phrase \"thick gray **true** membrane\" for diphtheria is verbatim from `L3`.)*\n\n| Cause | Membrane | Where | The clinching feature | Fever | Treatment |\n|---|---|---|---|---|---|\n| **Diphtheria** | **TRUE — thick, grey, adherent, BLEEDS on removal, extends BEYOND the tonsil onto pillars/palate/uvula** | Bilateral, spreading | **BULL NECK** (extreme bilateral cervical LN swelling) + marked toxaemia with only **LOW-grade** fever | **Low** | **Isolation + ANTITOXIN EARLY + antibiotics** |\n| **Infectious mononucleosis** | **False — grey membranous exudate, wipes off** | Bilateral (may look unilateral) | **Extreme fatigue · GENERALISED lymphadenopathy · hepatosplenomegaly · atypical lymphocytes · palatal petechiae** | High | **Supportive. ⚠️ NO AMPICILLIN** |\n| **Vincent’s angina** | **False — grey slough over a PUNCHED-OUT, RAGGED ULCER, wipes off leaving a bleeding base** | **UNILATERAL**, tonsil + gums | **Foul metallic breath · bleeding painful gums · poor oral hygiene · patient barely ill** | Low/none | **Penicillin + metronidazole** + oral hygiene |\n| **Candidiasis (moniliasis)** | **False — white patches, \"easily scraped off\"** | Patchy, tongue/palate/tonsils | **Denture wearer · recent ANTIBIOTICS · immunocompromised · NO fever, NO pus** | None | Topical + systemic **antifungal** |\n| **Agranulocytosis / leukaemia** | Greyish necrotic slough over ulcers | Often bilateral, necrotic | **Systemically ill, bleeding, pallor; the BLOOD FILM makes the diagnosis** | Variable | Treat the haematological disease |\n| **Acute follicular tonsillitis** | Confluent pus plugs that can look membranous | Bilateral | Discrete plugs at crypt mouths, tender **local** nodes, high fever, no cough | **High** | Penicillin |\n| **Trauma / post-tonsillectomy slough** | White slough on the beds at 5–15 days | The tonsillar fossae | **NORMAL HEALING by secondary intention — do not treat the slough** | None | Reassure; treat only if febrile/foul |\n\n**⚠️ THE TWO ANSWERS TO \"ALL OF THESE CAUSE A MEMBRANE EXCEPT\":**\n\n1. **PERITONSILLAR ABSCESS (QUINSY)** — because it **DISPLACES the tonsil rather than coating it**. Pus lies *beside* the tonsil; the tonsil surface is normal, the soft palate bulges, the uvula is pushed across, and there is trismus. This is endpoint’s key in one printing.\n2. **HERPETIC (herpes simplex) PHARYNGITIS** — because herpes makes **VESICLES that break into shallow ulcers**, never a sheet. This is endpoint’s key in the other printing.\n3. **SCARLET FEVER** — Grade Gain’s key in its version: scarlet fever gives a **rash and a strawberry tongue**, not a membrane.\n\n**Read which options are on the paper before answering — the three printings key three different odd-ones-out, and each is correct against its own list.**\n\n**⚠️ NOMENCLATURE WARNING.** Grade Gain prints **\"trench fever\"** where it means **Vincent’s angina**; the historical name is **trench MOUTH**. Trench *fever* is a louse-borne *Bartonella* illness and has nothing to do with the throat. **Recorded as printed — if the paper offers \"trench fever\" among tonsillar membranes, it means Vincent’s angina.**",
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
        "id": "tons-c2",
        "w": "must",
        "h": "Diphtheria",
        "body": "`L3) DISEASES OF THE TONSILS & ADENOIDS.pdf`, the whole slide, verbatim:\n\n- *\"Caused by: **Corynebacterium diphtheriae**.\"*\n- *\"Contagious disease with spread by **respiratory droplets (Coughing/Sneezing)**.\"*\n- *\"**Prevention by vaccination (DPT vaccine)**.\"*\n- *\"Manifests by: **Thick gray true membrane in the throat**. **Extreme bilateral cervical LN swelling (Bull neck)**. Bacteria **exotoxin** causes **low grade fever**, sore throat and **breathing difficulties**. Can cause **skin sores & rash**.\"*\n- *\"Treatment: Patients require **isolation & hospital care**. **Diphtheria antitoxin (start early)** + Antibiotics.\"*\n\n**THE ORGANISM.** *Corynebacterium diphtheriae* — a **GRAM-POSITIVE BACILLUS** (club-shaped, Chinese-letter arrangement). The bank keys *\"caused by gram positive bacilli\"* as **TRUE**.\n\n**⚠️ THE MOST IMPORTANT CHARACTERISTIC OF THE MEMBRANE IS THAT IT BLEEDS WHEN REMOVED.** Grade Gain asks exactly this and keys exactly that. Grey-white colour, extension beyond the tonsil, and accompanying lymphadenopathy are all real features of diphtheria, but **none of them is specific** — mononucleosis is greyish too, Vincent’s extends onto the gums, and every tonsillitis has nodes. **Only diphtheria makes a TRUE membrane fused to the underlying necrotic epithelium, so only diphtheria bleeds when peeled and re-forms afterwards.**\n\n> **⚠️ RECORDED DEFECT:** one Grade Gain option describes the diphtheritic membrane as **\"well-defined\"**. The standard description is a **spreading, ill-defined** membrane extending beyond the tonsil onto pillars, palate and uvula. Keyed as printed; the discrepancy is noted rather than corrected.\n\n**THE TOXIN IS THE DISEASE.** The exotoxin, not the local infection, causes the illness: **marked toxaemia with only a LOW-GRADE fever** — a patient far sicker than the temperature suggests. The bank exploits this: **high fever with pus = ordinary bacterial tonsillitis; low fever with a spreading membrane and a toxic-looking patient = diphtheria.** Systemically the toxin causes **myocarditis** and **peripheral neuropathy (classically palatal palsy with nasal regurgitation)**. *(The systemic sequelae are not taken from the course material.)*\n\n**THE COUGH.** The bank keys *\"it causes HOV [hoarseness of voice] and **wet** cough\"* as the FALSE statement. Laryngeal diphtheria gives hoarseness with a **DRY, brassy, croupy cough** and progressive airway obstruction from the membrane in the larynx — the historic reason for emergency tracheostomy. *(The dry/brassy quality is not taken from the course material; \"breathing difficulties\" is on the slide.)*\n\n**⚠️ AIRWAY.** *Do not dislodge the membrane at the bedside.* It can be aspirated whole and obstruct the airway.\n\n**CONTACTS.** The bank keys *\"contacts should receive **active** immunization\"* as **TRUE** — the DPT vaccine, exactly as the slide states prevention is by vaccination. *(In practice contacts also receive antibiotic prophylaxis and surveillance; not taken from the course material.)*\n\n**TREATMENT ORDER MATTERS AND IS EXAMINABLE: ISOLATE → SECURE THE AIRWAY → GIVE ANTITOXIN EARLY → THEN ANTIBIOTICS.** Antitoxin neutralises only *circulating* toxin, so every hour of delay is toxin already bound and irreversible. Antibiotics stop further toxin production and clear carriage; they do not treat the toxin already released.",
        "qs": [
          "entqb-thr4-182",
          "entqb-thr4-221",
          "entqb-thr4-181",
          "entep-throat-134",
          "entqb-thr4-222"
        ]
      },
      {
        "id": "tons-c3",
        "w": "must",
        "h": "Infectious mononucleosis (glandular fever)",
        "body": "`L3`, verbatim and complete:\n\n- *\"Caused by: **Epstein Barr virus (EBV)**.\"*\n- *\"**COMMON contagious illness.**\"*\n- *\"Manifests by: **Extreme fatigue, sore throat & largely swollen neck lymph nodes.** **Rash + Swollen spleen or liver** (less common).\"*\n- *\"**Primarily affects teenagers & young adults.**\"*\n- *\"Spread usually via saliva **‘Kissing disease’**.\"*\n- *\"Treatment: **Supportive** – Fever medications (**Paracetamol**) – **Avoid contact sports to avoid spleen rupture**.\"*\n\n**THE FIVE-CLAUSE VIGNETTE THE BANK PRINTS, and every clause is a discriminator:**\n\n| Clause | Why it points to mononucleosis and not bacterial tonsillitis |\n|---|---|\n| **Teenager or young adult** | The lecture’s own age group; bacterial tonsillitis peaks at 5–7 |\n| **Extreme fatigue, illness for 5+ days** | Bacterial tonsillitis is abrupt and short |\n| **Grey membranous exudate on markedly enlarged tonsils** | A membrane, not discrete pus plugs |\n| **GENERALISED lymphadenopathy + hepatosplenomegaly** | ⚠️ **THE KEY DISCRIMINATOR.** Bacterial tonsillitis gives **LOCAL, tender jugulodigastric** nodes only |\n| **Lymphocytosis with ATYPICAL lymphocytes** | The blood film clinches it |\n\n**⚠️ PALATAL PETECHIAE** on the soft palate are a classic sign and Grade Gain uses them as the deciding clause in one vignette. *(Palatal petechiae appear in no cached ENT slide — not taken from the course material.)*\n\n**THE ATYPICAL LYMPHOCYTES ARE NOT THE INFECTED CELLS.** EBV infects **B lymphocytes**; the large atypical (Downey) cells on the film are the **reactive cytotoxic T cells** attacking them. *(Not taken from the course material.)*\n\n**DIAGNOSIS — THE PAUL-BUNNELL TEST.** The heterophile antibody test (its modern slide version is the **Monospot**) detects a **non-specific IgM heterophile antibody** thrown up by the immune storm — it is *not* an anti-EBV antibody. **It is often falsely negative in the first week and in children under about four**, where EBV-specific serology (VCA IgM) is needed instead. **A throat swab is not the answer**, and the lecture already says *\"throat swab generally not helpful!\"* for tonsillitis generally. *(The Paul-Bunnell test, its mechanism and its limitations are not taken from the course material — no cached ENT slide names any diagnostic test for mononucleosis.)*\n\n**⚠️⚠️ AMPICILLIN / AMOXICILLIN IS CONTRAINDICATED.** Giving an aminopenicillin in EBV mononucleosis produces a **florid, itchy, maculopapular rash in the great majority of patients**. **This is NOT penicillin allergy** — it is an immune-complex phenomenon of the acute EBV illness — and the single most important practical consequence is: **do not label the patient penicillin-allergic for life on the strength of it.** *(The mechanism and the mislabelling caution are not taken from the course material; the disease and its supportive treatment are.)*\n\n**⚠️ SPLENIC RUPTURE is the reason for the sports restriction**, and the lecture says so outright. Avoid contact sports for **at least 3–4 weeks** *(the interval is not taken from the course material)*.\n\n**CORTICOSTEROIDS** have one legitimate indication: **airway obstruction from massive tonsillar swelling**. They are not routine. *(Not taken from the course material.)*\n\n> **⚠️ TWO DEFECTS RECORDED IN THIS BLOCK, BOTH KEYED AS PRINTED:**\n> - One Grade Gain treatment question offers **four options that all contain an antibiotic**, none of which treats EBV, and levofloxacin has no role at all. **No option is correct in principle; the key is the least wrong.**\n> - One vignette gives a **one-day history with a unilateral membrane** and keys mononucleosis — both atypical (the illness is indolent and bilateral). The palatal petechiae are what the examiner intends you to read.",
        "qs": [
          "entqb-thr4-204",
          "entqb-thr4-205",
          "entqb-thr4-206",
          "entqb-thr4-207",
          "entqb-thr4-200",
          "entqb-thr4-228",
          "entep-throat-case-5",
          "entqb-thr4-181"
        ]
      },
      {
        "id": "tons-c4",
        "w": "must",
        "h": "Vincent’s angina — a whole entity the slides never mention",
        "body": "> **⚠️ THIS ENTITY APPEARS IN NO CACHED ENT LECTURE — all 34 files were searched. Everything below is answered from general medical knowledge and tagged accordingly, because the bank asks it FOUR times and a blank here loses four marks.** *(Not taken from the course material.)*\n\n**WHAT IT IS.** An acute ulcerative infection of the tonsil, gums and oropharynx caused by a **fusospirochaetal SYMBIOSIS** — two organisms that are harmless separately and destructive together:\n\n- **Fusiform bacilli** (*Fusobacterium* — anaerobes), and\n- **Borrelia vincentii** (a spirochaete).\n\n**Both organisms are normal mouth commensals.** They become pathogenic only when local or general resistance falls, which is why the predisposing factors are the diagnosis as much as the organisms are.\n\n**PREDISPOSING FACTORS:** **poor oral hygiene**, **smoking**, malnutrition, immunosuppression, stress and debilitating illness. (Its historical name — **trench MOUTH** — comes from the First World War trenches, where every one of those was present at once.)\n\n**CLINICAL PICTURE — the five clauses the bank prints:**\n\n1. **UNILATERAL severe sore throat** (bacterial tonsillitis is bilateral).\n2. **PUNCHED-OUT, RAGGED ULCERS** on the tonsil and the **interdental gingivae**, covered with a **greyish membranous slough that wipes off leaving a bleeding base**.\n3. **Painful, bleeding gums.**\n4. **FOUL, offensive breath with a metallic taste** — often the first thing noticed.\n5. **The patient is remarkably WELL for the appearance of the throat** — little or no fever, minimal systemic upset. That mismatch is the diagnosis.\n\n**⚠️ THE ULCER EDGE IS AN EXAM POINT IN ITSELF** *(not taken from the course material)*:\n\n| Edge of a pharyngeal/oral ulcer | Suggests |\n|---|---|\n| **Punched-out and RAGGED**, grey slough | **Vincent’s angina** |\n| Punched-out but **clean, well-defined, \"wash-leather\" base** | **Syphilitic gumma** |\n| **Raised, everted, indurated** | **Malignancy — biopsy** |\n| Shallow, undermined, exquisitely painful | **Tuberculosis** |\n\nThe bank keys *\"it causes punched-**in** and **defined** ulcers\"* as the FALSE statement for exactly this reason.\n\n**DIAGNOSIS.** Clinical, supported by a smear from the ulcer showing fusiform bacilli and spirochaetes on Gram stain or dark ground. *(Not taken from the course material.)*\n\n**⚠️ TREATMENT — BOTH DRUGS, AND THE BANK ASKS WHY.**\n\n> **PENICILLIN + METRONIDAZOLE.** Penicillin covers *Borrelia vincentii* and the streptococcal flora; **metronidazole covers the ANAEROBIC fusiform bacilli**, which penicillin alone does not reliably clear. Add **oral hygiene, chlorhexidine mouthwash, debridement, analgesia** — and **look for the predisposing cause**, because an unexplained Vincent’s angina in a young adult should raise the question of immunosuppression.\n>\n> **⚠️ THE BANK’S OWN EXPLANATION BOX STATES THAT METRONIDAZOLE COVERS \"anaerobic AND aerobic organisms.\" IT DOES NOT — metronidazole is active against ANAEROBES ONLY.** Recorded as printed and corrected here per the standing ruling on defective source statements.\n\n**⚠️ NOMENCLATURE.** Grade Gain prints **\"trench fever\"** for this condition twice. It means **trench MOUTH / Vincent’s angina**. Answer accordingly.\n\n**DIFFERENTIAL ONE-LINERS:** scarlet fever = GABHS + rash; herpangina = Coxsackie A vesicles; glandular fever = EBV. All three are offered as distractors to *\"which is caused by fusiform bacilli?\"*",
        "qs": [
          "entep-throat-76",
          "entqb-thr4-183",
          "entqb-thr4-184",
          "entqb-thr4-242",
          "entqb-thr4-181",
          "entqb-thr4-178"
        ]
      },
      {
        "id": "tons-c5",
        "w": "high",
        "h": "Scarlet fever",
        "body": "> **⚠️ Scarlet fever itself appears in no cached ENT slide — only its cause (GABHS) and its sequelae (rheumatic fever, glomerulonephritis) are on `L3`. The description below is answered from general medical knowledge and tagged.** *(Not taken from the course material, except where marked.)*\n\n**WHAT IT IS.** **Streptococcal tonsillitis PLUS a rash** — the same GABHS infection, in a patient with no immunity to the **erythrogenic (pyrogenic) exotoxin** the strain produces. There is no separate organism to learn: **throat culture is positive for group A streptococci**, which the bank keys as **TRUE**.\n\n**THE PICTURE, in the order it appears:**\n\n1. **ABRUPT onset — fever, headache, sore throat, dysphagia, vomiting.** (The bank keys *\"the onset is abrupt with fever, headache and dysphagia\"* as TRUE.)\n2. **Tonsillitis** — inflamed tonsils, often with exudate; tender cervical nodes.\n3. **THE ENANTHEM (inside the mouth): the tongue is first coated white with red papillae showing through — the \"WHITE STRAWBERRY TONGUE\" — and by about day 4-5 the coat desquamates to leave the \"RED STRAWBERRY TONGUE.\"** The strawberry tongue is the single most examined feature.\n4. **THE EXANTHEM (the skin rash):** a **fine punctate erythema with a sandpaper texture**, beginning on the neck and upper trunk, sparing the palms and soles, with **circumoral pallor** (a white ring around the mouth) and **Pastia’s lines** (accentuation in the skin creases).\n5. **RESOLUTION: the RASH fades in 3–4 days and is followed about a WEEK later by DESQUAMATION (peeling), classically of the fingertips and toes.**\n\n**⚠️ THE EXAM TRAP — EXANTHEM vs ENANTHEM.** Grade Gain keys *\"**enanthem** resolves in 3-4 days\"* as the FALSE statement. **It is the EXANTHEM (the skin rash) that fades in 3–4 days and then desquamates; the ENANTHEM (the strawberry tongue) evolves white → red and OUTLASTS it.** Get the two words the right way round or the question is unanswerable.\n\n**⚠️ THE VIGNETTE CLAUSE THAT DECIDES IT: \"peeling of skin that started 7 days after the skin rash.\"** No other cause of tonsillitis in this chapter desquamates.\n\n**TREATMENT — a FULL course of penicillin, not symptomatic care.** The illness is self-limiting, but the point of treating it is identical to any streptococcal sore throat: **eradication prevents rheumatic fever (5–15 years, 2–3 weeks later) and acute glomerulonephritis** — both of which `L3` prints in full. ⚠️ **Grade Gain keys \"penicillin for 2 weeks\"**; the standard course is **10 days of penicillin V**. Keyed as printed, discrepancy noted. **The patient is non-infectious after about 24 hours of antibiotics.**\n\n**Why it is NOT in the membrane differential:** scarlet fever produces a **rash and a strawberry tongue**, not a tonsillar membrane — which is the answer to Grade Gain’s *\"differential of membranous tonsillitis, all EXCEPT.\"*",
        "qs": [
          "entqb-thr4-185",
          "entqb-thr4-243",
          "entqb-thr4-244",
          "entqb-thr4-181",
          "entqb-thr4-178"
        ]
      },
      {
        "id": "tons-c6",
        "w": "high",
        "h": "The viral group — herpangina, herpes simplex, herpes zoster",
        "body": "All three are on `L3` with their own slides, and the bank asks all three. **The unifying rule: VIRUSES MAKE VESICLES; the site and the season tell you which virus.**\n\n**HERPANGINA** — `L3`, verbatim:\n- *\"Caused by: **Coxsackievirus**.\"* (Coxsackie **A**, an enterovirus.)\n- *\"**Fever, sore throat & pain.**\"*\n- *\"Causes: **sores, blisters or ulcers on soft palate, tonsils or back of throat**.\"*\n- *\"**Typically occurs in summer.**\"*\n- *\"Treatment: **Symptomatic**.\"*\n\n**⚠️ THE VIGNETTE:** *young child · fever and sore throat · **small vesicular lesions on the soft palate and uvula*** → **herpangina**. The **posterior** location is the whole discriminator. Being an enterovirus explains the **summer timing** and **faecal-oral spread**. **Dehydration from painful swallowing is the only real risk.** **Check the hands and feet** — the same virus family causes **hand, foot and mouth disease**, which is herpangina plus a peripheral vesicular rash. *(The enterovirus properties and hand-foot-and-mouth are not taken from the course material.)*\n\n**HERPES SIMPLEX** — `L3`, verbatim:\n- *\"Caused by: **Herpes simplex virus**.\"*\n- *\"**Fever, sore throat & pain.**\"*\n- *\"HSV (**gingivostomatitis**) causes lesions on; **gums, lips, tongue and inner cheeks**.\"*\n- *\"**Has no seasonal preference.**\"*\n- *\"Treatment: **Antiviral medications (Aciclovir)**.\"*\n\n> **⚠️ HERPANGINA vs HERPES SIMPLEX — three clean differences, and the bank uses all three:**\n>\n> | | **Herpangina** | **Herpes simplex** |\n> |---|---|---|\n> | Virus | **Coxsackie A** | **HSV** |\n> | **Site** | **POSTERIOR — soft palate, uvula, tonsils, back of throat** | **ANTERIOR — gums, lips, tongue, inner cheeks (gingivostomatitis)** |\n> | **Season** | **Summer** | **No seasonal preference** |\n> | Treatment | **Symptomatic** | **Aciclovir** |\n\n**⚠️ HERPETIC PHARYNGITIS IS THE ANSWER TO \"DIFFERENTIAL OF A TONSILLAR MEMBRANE, ALL EXCEPT\"** in one endpoint printing — herpes makes **vesicles and shallow ulcers**, never a membrane.\n\n**HERPES ZOSTER** — `L3`, verbatim:\n- *\"**Reactivation** of: **Varicella-Zoster virus**.\"*\n- *\"In **glossopharyngeal (IX) & Vagus (X)** CNs (pharyngitis) is **RARE**, more common is affection of **Trigeminal (V)**.\"*\n- *\"**UNILATERAL** sore throat, **painful vesicles along distribution of affected nerve**.\"*\n- *\"Treatment: **Early antiviral (Famciclovir)** to avoid long-term pain (**post-herpetic neuralgia**).\"*\n\n**⚠️ ZOSTER NEVER CROSSES THE MIDLINE — that is the keyed false statement.** The virus lies dormant in **ONE sensory ganglion** and the eruption is confined to that one dermatome, which is why it is strictly unilateral. *(The single-ganglion mechanism is not taken from the course material; \"UNILATERAL\" is capitalised on the slide.)*\n\n**Ramsay Hunt syndrome** is zoster of the **geniculate ganglion**: facial palsy + vesicles in the concha/external canal + severe otalgia, often with hearing loss and vertigo — consistent with `L15) Facial nerve disorders.pdf`. The bank keys the Ramsay Hunt association as **TRUE**.\n\n**⚠️ \"EARLY\" is the operative word in the treatment.** Antivirals started within about 72 hours reduce the risk of **post-herpetic neuralgia**, which is the complication that ruins the patient’s year. Started late they do very little.",
        "qs": [
          "entqb-thr4-187",
          "entqb-thr4-245",
          "entqb-thr4-246",
          "entqb-thr4-189",
          "entep-throat-75",
          "entqb-thr4-178"
        ]
      },
      {
        "id": "tons-c7",
        "w": "high",
        "h": "Fungal pharyngitis — candidiasis (moniliasis)",
        "body": "`L3`, \"FUNGAL PHARYNGITIS\", verbatim and complete:\n\n- *\"Most commonly by: **Candida Albicans**.\"*\n- *\"More common in: **Denture wearers** – **Antibiotics treatment** – **Immunocompromised after chemoradiotherapy**.\"*\n- *\"**White patches easily scraped off.**\"*\n- *\"**Topical & systemic antifungal treatment.**\"*\n\n**⚠️ \"WHITE PATCHES EASILY SCRAPED OFF\" IS THE WHOLE DIAGNOSIS AND THE WHOLE DIFFERENTIAL.**\n\n| White lesion in the mouth | Scrapes off? | What it is |\n|---|---|---|\n| **Candidiasis** | **YES — leaving a red, sometimes bleeding, base** | Fungal infection |\n| **Leukoplakia** | **NO — it is adherent and cannot be wiped away** | **A potentially malignant lesion — biopsy it** |\n| **Diphtheritic membrane** | **NO — adherent, bleeds when peeled, re-forms** | True membrane |\n| Lichen planus | No | Lacy white striae |\n\n*(The leukoplakia and lichen planus contrasts are not taken from the course material; the candida line is verbatim.)*\n\n**⚠️ CANDIDA IS AN OPPORTUNIST, AND THAT IS THE EXAM POINT.** *Candida albicans* is a **harmless commensal of the normal mouth**. It causes disease only when the local or systemic defences fail — which is exactly what the lecture’s three predisposing settings describe:\n\n1. **Denture wearers** — a warm, moist, poorly cleaned surface the saliva never washes.\n2. **Antibiotic treatment** — the bacterial flora that normally competes with it is wiped out.\n3. **Immunocompromise, particularly after chemoradiotherapy** — and by the same logic **HIV**, which `L3` itself lists among the viral causes of pharyngitis.\n\n> **⚠️ CLINICAL BOTTOM LINE — the reason this is worth a whole slide: UNEXPLAINED ORAL THRUSH IN AN ADULT WHO IS NOT A DENTURE WEARER AND NOT ON ANTIBIOTICS IS A REASON TO THINK ABOUT HIV, DIABETES OR AN OCCULT MALIGNANCY.** It is one of the classic oral markers of HIV infection, alongside oral hairy leukoplakia and Kaposi’s sarcoma. *(The HIV markers and the diabetes prompt are not taken from the course material; HIV as a cause of pharyngitis is on the slide.)*\n\n**⚠️ THE FREE-TEXT CASE PATTERN:** *\"4-year-old · dysphagia · **NO fever** · **on antibiotics for the last 10 days** · **white-coated tongue** · **no pus or suppuration**\"* → **moniliasis (oral candidiasis)**. **Every clause is a negative that excludes bacterial tonsillitis: no fever, no pus.** The antibiotic history is the cause, not an incidental.\n\n**Treatment:** topical antifungal (nystatin suspension, miconazole gel) and systemic antifungal (fluconazole) where the disease is extensive or the patient immunocompromised — **plus removing the cause** (denture hygiene, stopping the unnecessary antibiotic). *(The drug names are not taken from the course material; \"topical & systemic antifungal\" is.)*",
        "qs": [
          "entqb-thr4-188",
          "entqb-thr4-202",
          "entep-throat-case-1",
          "entqb-thr4-177",
          "entep-throat-75"
        ]
      },
      {
        "id": "tons-d1",
        "w": "must",
        "h": "⚠️ Chronic tonsillitis — the definition, the signs, and a genuine cross-bank disagreement",
        "body": "**THE DEFINITION IS THE ANSWER TO MOST OF THESE QUESTIONS.** `L3` never describes an appearance; it defines chronic tonsillitis by **recurrence**, twice:\n\n- *\"**Recurrence can lead to CHRONIC TONSILLITIS.**\"*\n- and in the indications for surgery: *\"**Recurrent acute tonsillitis (Chronic tonsillitis)**\"* followed immediately by the three episode thresholds.\n\n> **CHRONIC TONSILLITIS MEANS RECURRENT ATTACKS OF ACUTE TONSILLITIS.** It is **not** a continuously sore throat, **not** a single quinsy, and **not** recurrent rheumatic fever. It is a diagnosis made by **counting documented episodes**, not by looking at the tonsil.\n\n**THE SIGNS OF CHRONICITY** — asked four times, and the option lists differ each time.\n\n| Sign | Why |\n|---|---|\n| **Cheesy material oozing from the crypts on pressure over the anterior pillar** | Retained debris in obstructed crypts — the most specific single sign |\n| **Congestion of the ANTERIOR PILLAR** | Persistent local inflammation over the tonsil bed |\n| **FIRM, ENLARGED, NON-TENDER jugulodigastric lymph nodes** | Chronic reactive nodes; **tender** nodes mean an acute process |\n| **Irregularity in size and shape of the tonsil; irregular enlarged crypts** | Scarring from repeated infection |\n| Hypertrophy or, conversely, a small fibrotic \"septic\" tonsil | Size alone means little — both extremes occur |\n\n**⚠️ THE SUBMANDIBULAR SALIVARY GLAND IS NOT A SIGN OF TONSILLAR CHRONICITY.** The tonsil drains to the **jugulodigastric / upper deep cervical nodes**, not to the submandibular gland. Endpoint keys *\"submandibular gland enlargement\"* as the odd one out in one printing, and that is unambiguous.\n\n> **⚠️⚠️ A GENUINE CROSS-BANK DIVERGENCE — READ THE OPTION LIST BEFORE ANSWERING. THIS IS THE ONE PLACE IN THE CHAPTER WHERE THE TWO BANKS KEY THE SAME FOUR OPTIONS DIFFERENTLY, AND THE WHOLE DIFFERENCE IS ONE WORD.**\n>\n> | | Options offered | Keyed as NOT a sign |\n> |---|---|---|\n> | **Endpoint** | Enlarged tonsillar crypts · non-tender jugulodigastric nodes · cheesy material on pressure · **congestion of the anterior pillar** | **Congestion of the anterior pillar** |\n> | **Grade Gain** | Cheesy material on pressure · anterior pillar congestion · firm non-tender jugulodigastric nodes · **enlarged REGULAR tonsillar crypts** | **Enlarged REGULAR tonsillar crypts** |\n>\n> **Grade Gain adds the qualifier \"regular\", and that word decides it: enlarged but REGULAR crypts are within normal variation, whereas enlarged IRREGULAR crypts oozing cheesy material are a sign of chronicity.** With the qualifier present, the crypt option is the odd one out and anterior pillar congestion is a real sign — which is also standard teaching. Without the qualifier, endpoint’s list contains two arguable candidates and it keys the other one.\n>\n> **⚠️ Endpoint has reprinted its key three times, including in its own \"Recently Edited Questions\" errata section — so it is that bank’s settled position, not a slip. Answer each bank its own way, and note that no cached slide lists the definite signs of chronic tonsillitis at all.** *(The sign list above is not taken from the course material; the definition by recurrence is.)*\n\n**⚠️ THE PAEDIATRIC vs ADULT NODE RULE, asked directly:** **bilateral, firm, NON-TENDER jugulodigastric nodes in an eight-year-old = chronic tonsillitis.** Diphtheria, quinsy and Vincent’s all give **tender** nodes. *(In an adult, the same painless firm node is a cancer until proved otherwise — not taken from the course material.)*",
        "qs": [
          "entep-throat-77",
          "entqb-thr4-224",
          "entqb-thr4-223",
          "entqb-thr4-225",
          "entep-mfe4-26",
          "entqb-thr3-98"
        ]
      },
      {
        "id": "tons-d2",
        "w": "know",
        "h": "Chronic pharyngitis — the granular pharynx",
        "body": "> *(No cached ENT slide describes chronic pharyngitis or its types; the classification below is answered from general medical knowledge and tagged. The CAUSES are all on `L3`, in the adenoid clinical picture.)*\n\n**THE FOUR TYPES** *(not taken from the course material)*:\n\n| Type | Appearance |\n|---|---|\n| **Chronic catarrhal** | Diffusely congested, boggy mucosa with excess mucus |\n| **⚠️ Chronic HYPERTROPHIC (granular)** | **A GRANULAR posterior pharyngeal wall — discrete hypertrophied lymphoid follicles standing out as red granules**, often with hypertrophied lateral pharyngeal bands |\n| **Chronic atrophic** | The opposite: **dry, thin, glazed, shiny mucosa** with crusting; often with atrophic rhinitis |\n| **Chronic follicular** | Overlaps with hypertrophic; follicles prominent |\n\n**⚠️ \"GRANULAR APPEARANCE OF THE PHARYNGEAL WALL\" → CHRONIC HYPERTROPHIC.** The granules are hypertrophied lymphoid follicles responding to chronic irritation.\n\n**THE CAUSES ARE THE PART THE LECTURE DOES GIVE**, in the adenoid section: chronic **MOUTH BREATHING** with *\"**Dry lips, tongue & pharynx**\"*, and *\"chronic nasal discharge & **post-nasal drip**\"* — an adenoidal or obstructed child breathing unconditioned, cold, dry, unfiltered air over the pharynx all night, with infected secretions running over it. Add smoking, occupational dust and gastro-oesophageal reflux. *(Smoking and reflux are not taken from the course material.)*\n\n**Clinical bottom line: treat the CAUSE, not the pharynx.** Relieve the nasal obstruction, stop the smoking, treat the reflux — topical treatment of the pharyngeal wall achieves nothing while unconditioned air keeps crossing it. This is exactly why chronic sore throat with a granular pharynx in a mouth-breathing child is an argument for dealing with the **adenoid**.",
        "qs": [
          "entqb-thr4-191",
          "entqb-thr4-208"
        ]
      },
      {
        "id": "tons-d3",
        "w": "must",
        "h": "Tonsillar hypertrophy, kissing tonsils, and the unilateral tonsil",
        "body": "**HYPERTROPHY IS A SIZE FINDING, INDEPENDENT OF INFLAMMATION.** `L3` prints a picture slide headed **\"KISSING TONSILS\"** and lists as an indication for surgery: *\"**Bilateral tonsillar hypertrophy (causing airway obstruction, difficulty in deglutition &/or interference with speech)**.\"*\n\n**⚠️ \"KISSING TONSILS\" = TONSILS THAT TOUCH EACH OTHER IN THE MIDLINE FROM HYPERTROPHY = GRADE 4.** Not tonsils that are inflamed, not tonsils with deep crypts, not tonsils with cysts. The bank asks this in as many words.\n\n**THE BRODSKY GRADING SCALE** *(not taken from the course material — no cached ENT slide grades the tonsil; the \"grade four = kissing tonsils\" equation is the bank’s own and it keys it as true)*:\n\n| Grade | Proportion of the oropharyngeal airway occupied |\n|---|---|\n| 0 | Tonsils within the tonsillar fossa |\n| 1 | < 25 % |\n| 2 | 25–50 % |\n| 3 | 50–75 % |\n| **4** | **> 75 % — meeting in the midline: \"KISSING TONSILS\"** |\n\n**⚠️ THE GRADE NEVER DECIDES THE OPERATION — THE SYMPTOMS DO.** The lecture’s indication is not \"grade 4 tonsils\"; it is *hypertrophy **causing** airway obstruction, difficulty in deglutition, or interference with speech*. A grade 4 tonsil in a child who sleeps and eats normally is not an indication; a grade 3 tonsil in a child with witnessed apnoeas is.\n\n**THE CHRONIC HYPERTROPHIC PICTURE**, as the bank prints it: *\"dysphagia, sleep apnea, and enlarged tonsils touching the midline\"*, **with no fever** → **chronic hypertrophic tonsillitis**, not an acute infection. Snoring and obstructive sleep-disordered breathing come with it — `L9) Snoring & OSA.pdf` lists *\"Adenoid (**most common cause in children**), **Tonsillar hypertrophy**, bulky base of tongue…\"* among the causes of pharyngeal obstruction, and its surgical answer to tonsillar hypertrophy is *\"**Tonsillectomy**\"* or *\"**Laser Tonsillotomy**\"*.\n\n**⚠️⚠️ UNILATERAL TONSILLAR ENLARGEMENT IS A DIFFERENT PROBLEM ENTIRELY — IT IS CANCER UNTIL BIOPSY SAYS OTHERWISE.** `L3` lists as its sixth indication for tonsillectomy: *\"**Suspicion of tonsillar malignancy (Unilateral enlarged tonsil – lymphoma or epidermoid carcinoma)**\"*, with a picture slide headed *\"TONSIL LYMPHOMA / TONSIL CARCINOMA\"*. **The tonsillectomy here is the biopsy.**\n\n| Tonsillar tumour | Nature |\n|---|---|\n| **Squamous cell (epidermoid) carcinoma** | **Malignant** — the commonest; smoking, alcohol, HPV |\n| **Lymphoma** | **Malignant** — the other one `L3` names |\n| **Lymphoepithelioma** | **Malignant** — undifferentiated carcinoma with lymphoid stroma |\n| **Adenocarcinoma** | **Malignant** — from minor salivary glands |\n| **⚠️ Schwannoma** | **BENIGN** — a smooth submucosal nerve-sheath tumour |\n\n*(Schwannoma and lymphoepithelioma are not taken from the course material; the lymphoma/epidermoid carcinoma pairing is verbatim from `L3`.)*\n\n**TONSILLOLITHS** get their own picture on the same slide and their own indication: *\"**Tonsilloliths with unpleasant halitosis**\"* — calcified debris impacted in the crypts, harmless but socially disabling, and a legitimate reason to operate when halitosis is the complaint.",
        "qs": [
          "entqb-thr4-172",
          "entqb-thr4-168",
          "entqb-thr4-197",
          "entqb-thr3-98"
        ]
      },
      {
        "id": "tons-e1",
        "w": "must",
        "h": "⭐ Indications for tonsillectomy — the six, with the numbers",
        "body": "`L3`, \"INDICATIONS OF TONSILLECTOMY\", complete and verbatim. **Learn all six and learn the numbers exactly — they are asked directly and the distractors are near-misses.**\n\n**1. RECURRENT ACUTE TONSILLITIS (CHRONIC TONSILLITIS):**\n   - *\"**7 or more documented episodes in ONE year**\"* **or**\n   - *\"**5 episodes or more for 2 YEARS**\"* (i.e. 5+ per year, two years running) **or**\n   - *\"**3 episodes or more for 3 YEARS**\"* (3+ per year, three years running).\n\n**2. PERITONSILLAR ABSCESS (QUINSY).**\n\n**3. TONSILLITIS CAUSING FEBRILE SEIZURES.**\n\n**4. BILATERAL TONSILLAR HYPERTROPHY** *\"(causing **airway obstruction, difficulty in deglutition &/or interference with speech**)\"*.\n\n**5. TONSILLOLITHS WITH UNPLEASANT HALITOSIS.**\n\n**6. SUSPICION OF TONSILLAR MALIGNANCY** *\"(**Unilateral enlarged tonsil** – lymphoma or epidermoid carcinoma)\"*.\n\n> **⚠️ THE 7/5/3 RULE IS A TRAP BECAUSE THE DURATION MATTERS AS MUCH AS THE COUNT.** The bank offers *\"4 episodes per year\"*, *\"5 episodes per year\"* (with no duration) and *\"2 episodes per year for 3 years\"* as distractors, and keys **\"6 episodes per year for two years\"** — because 6 ≥ 5 and it has run for two years. **Five attacks in a single year does NOT qualify.** Test each option against all three thresholds before choosing.\n\n**⚠️ \"DOCUMENTED\" IS DOING REAL WORK.** The count must be of episodes **recorded by a clinician** — with sore throat, fever, exudate, adenopathy or a positive culture — not remembered by a parent. *(The elaboration of \"documented\" is not taken from the course material; the word is on the slide.)*\n\n**⚠️ EVERY INDICATION IS FRAMED AS A CONSEQUENCE, NEVER AS TONSIL SIZE.** Apnoea, dysphagia, speech interference, ear disease, halitosis, suspected cancer, seizures. **\"The tonsils are big\" is not an indication. \"Loss of appetite\" is not an indication** (the bank keys it as the odd one out) — it is an *association* of adenotonsillar disease.",
        "flow": {
          "title": "Should this tonsil come out?",
          "steps": [
            {
              "k": "decision",
              "t": "Is the tonsil UNILATERALLY enlarged, or is there any suspicion of malignancy?",
              "yes": "⚠️ TONSILLECTOMY AS A BIOPSY — lymphoma or epidermoid carcinoma until proved otherwise",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Is there obstruction — sleep apnoea, difficulty swallowing, or interference with speech?",
              "yes": "TONSILLECTOMY (± adenoidectomy) for obstruction",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Has there been a peritonsillar abscess (quinsy), or a febrile seizure with tonsillitis?",
              "yes": "TONSILLECTOMY — quinsy is operated one month after the acute episode settles",
              "no": "Continue"
            },
            {
              "k": "step",
              "t": "Count DOCUMENTED episodes of acute tonsillitis",
              "n": "7 in one year · OR 5+/year for 2 years · OR 3+/year for 3 years"
            },
            {
              "k": "decision",
              "t": "Does the count reach any one of the three thresholds?",
              "yes": "TONSILLECTOMY for chronic (recurrent acute) tonsillitis",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Tonsilloliths with disabling halitosis?",
              "yes": "TONSILLECTOMY",
              "no": "NO indication — treat medically and keep a documented record"
            },
            {
              "k": "alert",
              "t": "⚠️ NEVER OPERATE DURING AN ACUTE ATTACK",
              "n": "Defer 3–6 weeks. Friable hyperaemic tissue, spreading sepsis and a harder airway"
            },
            {
              "k": "alert",
              "t": "⚠️ CHECK FOR A BLEEDING DISORDER FIRST",
              "n": "Haemophilia is the ABSOLUTE contraindication. The mandatory investigation is a CBC"
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
        "id": "tons-e2",
        "w": "must",
        "h": "Contraindications and the pre-operative work-up",
        "body": "> **⚠️ NO CACHED ENT SLIDE LISTS THE CONTRAINDICATIONS TO TONSILLECTOMY. The list below is answered from general medical knowledge and from what `L3` does say about bleeding, and is tagged.** *(Not taken from the course material, except the bleeding facts marked.)*\n\n**⚠️ THE ABSOLUTE CONTRAINDICATION IS A BLEEDING DISORDER — HAEMOPHILIA IS THE ANSWER BOTH BANKS KEY.**\n\n**Why it is absolute, and the reason is anatomical:** `L3` states that the tonsillar beds heal **by SECONDARY INTENTION** with a white slough over 5, 10 and 15 days. **There is no wound to close.** The bed is a raw, vascular, uncompressible surface exposed to swallowed saliva and food for two weeks. A patient who cannot clot has no way to survive that. `L3` also names *\"Blood disease e.g. **hemophilia, leukemia**\"* among the causes of haemorrhage, and records that *\"**Anesthesia complications & hemorrhage account for majority of deaths**\"* from this surgery.\n\n**THE CONTRAINDICATION LIST:**\n\n| | Contraindication | Why |\n|---|---|---|\n| **ABSOLUTE** | **Bleeding disorder — haemophilia, leukaemia, thrombocytopenia, uncorrected coagulopathy** | The bed heals by secondary intention over ~2 weeks; ⚠️ **verbatim on `L3` as a cause of haemorrhage** |\n| **ABSOLUTE** | **Overt or submucous CLEFT PALATE** (relative in some units; the adenoid rule is stricter — see adenoidectomy) | The tonsils and posterior pillars contribute to velopharyngeal closure; removal risks permanent hypernasality |\n| **RELATIVE / TEMPORARY** | **⚠️ ACUTE TONSILLITIS OR ANY ACUTE INFECTION** | Friable, hyperaemic, oedematous tissue bleeds far more; risk of spreading sepsis; a more difficult airway. **DEFER 3–6 WEEKS.** (The exception is \"hot\" tonsillectomy performed deliberately for quinsy in experienced hands) |\n| **RELATIVE** | Uncontrolled systemic disease — poorly controlled diabetes, uncontrolled hypertension, active cardiac or respiratory disease | Anaesthetic and healing risk. **⚠️ WELL-CONTROLLED diabetes is NOT a contraindication** — the bank offers it as a distractor |\n| **RELATIVE** | Epidemic of poliomyelitis; the immediate post-vaccination period | Historical, still printed in some texts |\n| **RELATIVE** | Age under about 3 years | Anaesthetic risk and blood volume; **overridden by OSA** |\n\n**⚠️ THE TRAP: CHRONIC TONSILLITIS AND QUINSY ARE INDICATIONS, NOT CONTRAINDICATIONS.** Both banks offer them as distractors in a \"contraindicated in\" stem. Likewise **\"below 5 years\"** is not a bar — young age is often the *reason* to operate, because that is when obstructive hypertrophy is worst.\n\n**⚠️ THE MANDATORY PRE-OPERATIVE INVESTIGATION IS A CBC (COMPLETE BLOOD COUNT).** Endpoint asks this directly and offers ESR, CRP and ASOT as distractors.\n\n> **Why CBC and not the others:** haemorrhage is the complication that kills, so the pre-operative test must answer *\"can this patient bleed, and can they afford to?\"* — **haemoglobin** (baseline and anaemia) and **platelet count**. ESR and CRP are inflammatory markers that tell you nothing about safety; **ASOT (anti-streptolysin O titre)** records past streptococcal exposure and does not change the operation. Add a **coagulation screen** where the history suggests it, and **always take a bleeding history — of the patient AND the family** *(the coagulation screen and family history are not taken from the course material)*.\n\n**Also pre-operatively:** stop **aspirin and NSAIDs** (Grade Gain keys *\"no aspirin for 10 days prior to surgery\"* as a correct statement), treat congenital heart disease as high-risk requiring intensive monitoring, and **examine the palate for a bifid uvula or a notched hard palate** before any pharyngeal surgery.",
        "qs": [
          "entep-throat-124",
          "entqb-thr4-192",
          "entqb-thr4-226",
          "entep-throat-59",
          "entqb-thr4-162",
          "entqb-thr4-164"
        ]
      },
      {
        "id": "tons-e3",
        "w": "high",
        "h": "Tonsillectomy — techniques, and extracapsular vs intracapsular",
        "body": "`L3`, \"TONSILLECTOMY TECHNIQUES\", all five, verbatim with the trade-offs the bank tests:\n\n| # | Technique | The lecture’s own trade-off |\n|---|---|---|\n| **1** | **Cold dissection / ligation** — *\"the traditional method using a **scissors, scalpel or snare** (without heat)\"* | *\"**minimizing tissue damage but MORE INTRAOPERATIVE BLEEDING**\"* |\n| **2** | **Electrocautery (diathermy)** — *\"uses high-frequency electrical current to cut tissues & seal blood vessels\"* | *\"**reduces intraoperative bleeding but can INCREASE POSTOPERATIVE PAIN**\"* |\n| **3** | **Coblation (cold ablation)** — *\"employs **bipolar radiofrequency** energy to create a **plasma field** that dissolves tissue at lower temp (**40-70 °C**)\"* | *\"**less tissue damage & faster recovery**\"* |\n| **4** | **Microdebrider** — *\"uses **powered rotatory shaver**… used for **PARTIAL tonsillectomy (tonsillotomy)** to treat **airway obstruction in children**\"* | *\"**faster recovery & less pain**\"* |\n| **5** | **Others** | *\"**LASER** tonsillectomy & **Harmonic scalpel** tonsillectomy\"* |\n\n**⚠️ THE TWO TEMPERATURES ARE EXAMINABLE: COBLATION 40–70 °C · CAUTERY ~400 °C.** `L3` prints both figures (the 400 °C comparison is on the adenoidectomy slide). **That ten-fold difference in thermal injury is the entire argument for coblation.**\n\n**⚠️ THE CENTRAL TRADE-OFF, AND THE BANK ASKS IT BOTH WAYS: HEAT vs BLOOD vs PAIN.**\n\n> **COLD dissection → less thermal damage but MORE bleeding on the table.**\n> **HOT (diathermy) → less bleeding on the table but MORE pain afterwards.**\n> **Neither is simply better; they trade one problem for the other.**\n\n**TYPES OF TONSILLECTOMY** — `L3`, verbatim:\n\n| | **EXTRACAPSULAR (TOTAL)** | **INTRACAPSULAR (PARTIAL / tonsillotomy)** |\n|---|---|---|\n| What is removed | *\"**Entire tonsil and capsule** are removed, **exposing the superior constrictor muscle**\"* | *\"**Majority of tonsil is removed but capsule is left behind** to protect underlying muscle\"* |\n| Post-op pain | More | *\"**reduces PO pain**\"* — and less bleeding |\n| Suits | **Recurrent INFECTION** — no tonsil tissue left to reinfect | **OBSTRUCTION** — enough bulk removed to open the airway |\n| Drawback | Pain, bleeding risk from an exposed muscle bed | ⚠️ **Residual tissue can REGROW and can still become infected** |\n\n**⚠️ THE QUESTION \"which technique is LEAST associated with postoperative pain and haemorrhage?\" IS ANSWERED BY THE PRINCIPLE, NOT THE INSTRUMENT: a SUBTOTAL / PARTIAL (intracapsular) procedure**, whatever tool performs it, **because the capsule is left covering the superior constrictor** — the raw muscle bed is never exposed. Cold dissection with a snare bleeds more; electrocautery hurts more; the harmonic scalpel is simply an alternative energy source. *(The regrowth caveat is not taken from the course material.)*",
        "qs": [
          "entqb-thr4-194",
          "entqb-thr4-163",
          "entqb-thr4-172"
        ]
      },
      {
        "id": "tons-e4",
        "w": "must",
        "h": "⭐⭐ Post-tonsillectomy and post-adenoidectomy HAEMORRHAGE — the most examined table in ENT",
        "body": "**Eighteen of this chapter’s 117 questions are answered by the three lines below.** `L3` prints them verbatim under \"COMPLICATIONS OF TONSILLECTOMY\":\n\n> *\"**HEMORRHAGE (in less than 5 % of cases)** – Types:*\n> - *__Primary__: **during time of surgery**.*\n> - *__Reactionary__: **within first 24-hours** (dt. **High BP** or **slipped ligature** or **dislodged clot**).*\n> - *__Secondary__: due to **2ry infection** (usually **5-10 days PO**).\"*\n\n| | **PRIMARY** | **REACTIONARY** | **SECONDARY** |\n|---|---|---|---|\n| **WHEN** | **During the operation** | **Within the first 24 HOURS** (classically 6–12 h) | **5–10 DAYS** after surgery (the bank also prints 6 days, 7 days, \"one week\", 10 days) |\n| **WHY — tonsillectomy** | Surgical trauma to vessels; a bleeding disorder | **High BP returning to baseline · SLIPPED LIGATURE · DISLODGED CLOT** | **INFECTION of the granulating bed → the protective SLOUGH SEPARATES off an unsealed surface** |\n| **WHY — adenoidectomy** | **⚠️ REMNANT / RESIDUAL ADENOID TISSUE** (no capsule, nothing to clot against); blood disease; wrong diagnosis (**angiofibroma**); injury to a prominent atlas | **⚠️ DISLODGED CLOT** — *nothing is ligated in an adenoidectomy, so a \"slipped ligature\" cannot be the cause* | Infection, as for tonsillectomy |\n| **MANAGEMENT** | Control on the table — pressure, ligature, cautery | **Return to theatre** if brisk: examine the fossa, remove clot, secure the bleeder | **ADMIT · OBSERVE · IV ANTIBIOTICS · IV FLUIDS.** Surgery only for heavy or persistent bleeding |\n\n**⚠️ THE FIVE PATTERNS THE BANK PRINTS, AND THE ANSWER TO EACH:**\n\n| Vignette | Answer |\n|---|---|\n| Bleeding **within 2 hours** of tonsillectomy | **Reactionary — SLIPPED LIGATURE** (mechanical; back to theatre) |\n| **Rapid pulse at 20 hours**, no visible bleeding | **⚠️ REACTIONARY — the child is SWALLOWING blood** |\n| Bleeding **12 hours** after adenoidectomy | **REACTIONARY** (and after adenoidectomy: a **dislodged clot**) |\n| Bleeding at **6–10 days / \"one week\"** | **SECONDARY — wound INFECTION** |\n| **Fever, worsening pain, foul breath at 7 days** (no bleeding yet) | **SECONDARY INFECTION — the direct precursor of secondary haemorrhage** |\n\n**⚠️⚠️ A RISING PULSE IS THE FIRST SIGN OF A CHILD SWALLOWING BLOOD.** Endpoint keys a question on exactly this. **Falling blood pressure is a LATE sign in children** — they compensate until they suddenly do not. Look **in the mouth**; do not wait for visible bleeding. *(The compensation physiology is not taken from the course material; the reactionary window is.)*\n\n**⚠️ ADMIT EVERY SECONDARY BLEED, EVEN A SMALL ONE.** Grade Gain and endpoint both print the vignette of a child spitting *\"a few blood drops\"* that then progresses. **A herald bleed can be followed by a large one**, the blood loss is invisible because it is swallowed, and the haemoglobin is a poor early guide. A near-normal Hb (11.5) means **no transfusion is needed**, not that the child can go home. *(The herald-bleed rule is not taken from the course material.)*\n\n**⚠️ \"DELAYED HAEMORRHAGE\" IS NOT A CATEGORY.** The three are primary, reactionary and secondary. It is offered as a distractor.\n\n**⚠️ THE WHITE SLOUGH AT ONE WEEK IS NORMAL HEALING.** `L3`: *\"Healing is by **SECONDARY INTENTION** of tonsillar beds with the appearance of a **white slough**\"*, illustrated at **5, 10 and 15 days**. **Do not treat the slough — treat the patient.** Fever, worsening pain and halitosis mean infection; a clean white slough in a comfortable child means healing on schedule.\n\n**THE FIRST POSTOPERATIVE PRIORITY** is detecting reactionary haemorrhage in the first 24 hours: **monitor the pulse and blood pressure, watch for repeated swallowing, look for pallor and restlessness, and nurse the child in the recovery (lateral, head-down) position so blood drains out rather than down.** *(The observation list and nursing position are not taken from the course material; the reactionary window and its causes are verbatim.)*",
        "flow": {
          "title": "Bleeding after tonsillectomy or adenoidectomy — which type, and what now?",
          "steps": [
            {
              "k": "decision",
              "t": "Is the bleeding happening DURING the operation?",
              "yes": "PRIMARY — control on the table (pressure, ligature, cautery). After adenoidectomy think RESIDUAL ADENOID TISSUE",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Is it WITHIN 24 HOURS of surgery?",
              "yes": "REACTIONARY — high BP, slipped ligature (tonsillectomy) or dislodged clot (adenoidectomy)",
              "no": "Continue — this is 5–10 days: SECONDARY"
            },
            {
              "k": "alert",
              "t": "⚠️ A RISING PULSE WITH NO VISIBLE BLEEDING IS A SWALLOWED BLEED",
              "n": "Look in the mouth. Falling BP is a LATE sign in a child"
            },
            {
              "k": "step",
              "t": "REACTIONARY — resuscitate, examine the fossa, remove clot",
              "n": "Return to theatre if brisk or continuing"
            },
            {
              "k": "step",
              "t": "SECONDARY (5–10 days) — ADMIT, OBSERVE, IV ANTIBIOTICS, IV FLUIDS",
              "n": "It is an infection problem before it is a surgical one"
            },
            {
              "k": "decision",
              "t": "Is the secondary bleed heavy, or continuing despite treatment?",
              "yes": "THEATRE — examine under GA, secure the bleeding point",
              "no": "Continue antibiotics and observation. Group and save; transfuse only for a genuinely low Hb"
            },
            {
              "k": "alert",
              "t": "⚠️ ADMIT EVERY SECONDARY BLEED, HOWEVER SMALL",
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
          "entep-throat-case-18"
        ]
      },
      {
        "id": "tons-e5",
        "w": "must",
        "h": "The other nine complications of tonsillectomy — and normal healing",
        "body": "`L3`, \"COMPLICATIONS OF TONSILLECTOMY\", items 2–10, verbatim. **The bank asks several of these directly and uses the rest as distractors, so the whole list is needed.**\n\n**2. DEHYDRATION** — *\"due to **poor fluid intake caused by PAIN**.\"* The commonest reason a child comes back to hospital. **Treat the pain so the child drinks.**\n\n**3. DENTAL INJURY** — *\"from **intubation or mouth gag insertion**.\"* Document loose teeth before the operation.\n\n**4. LINGUAL NERVE PALSY** — *\"caused by **prolonged mouth gag tongue blade pressure** (**usually temporary**).\"* Numbness and loss of taste on the anterior tongue.\n\n**5. ⚠️ INTERNAL CAROTID ARTERY INJURY** — *\"**Catastrophic** – due to **deep tonsillar bed cautery, suturing or dissection**.\"*\n\n> **The anatomy that makes this possible:** the ICA lies about **2.5 cm behind and lateral to the tonsil** (Grade Gain’s own figure), separated from the tonsillar fossa only by the capsule, the **superior constrictor** and the buccopharyngeal fascia. **In some patients the vessel is tortuous and lies closer still, and can even be seen pulsating in the lateral fossa.** Any instrument that goes *outside* the capsule in the lateral fossa can reach it. **Stay in the plane; never cauterise deeply in the lateral fossa.** *(Carotid tortuosity is not taken from the course material; the complication and its three causes are verbatim.)*\n\n**6. UVULAR OEDEMA** — *\"dt. **bilateral obstruction of uvular veins** - may cause **respiratory obstruction**.\"*\n\n**7. VELOPHARYNGEAL INCOMPETENCE** — *\"leading to **regurgitation of fluid from nose & nasal tone of voice** (usually temporary dt. **palatal paresis** but **may be permanent** due to **palatal shortening from fibrosis**).\"* More often a complication of adenoidectomy — see that section.\n\n**8. OROPHARYNGEAL STENOSIS** — *\"due to **excessive cautery tissue injury**, which is **very difficult to treat**.\"* The argument against over-using diathermy.\n\n**9. CHEST COMPLICATIONS \"including pneumonia\"** — *\"from **aspiration during or immediately after surgery**.\"*\n\n**10. ⚠️ ANAESTHESIA COMPLICATIONS & HAEMORRHAGE ACCOUNT FOR THE MAJORITY OF DEATHS.** This sentence is printed on the slide and appears in four separate question explanations. **It is the sentence that justifies the whole pre-operative work-up and the whole of the observation protocol.**\n\n**NORMAL HEALING — a slide of its own, and worth knowing so you do not treat it as a complication:**\n\n> *\"Healing is by **SECONDARY INTENTION** of tonsillar beds with the appearance of a **white slough**.\"* — illustrated at **5 days · 10 days · 15 days**.\n\n**⚠️ PAIN CLASSICALLY WORSENS AROUND DAYS 5–7, NOT IMPROVES**, as the slough separates and the referred (glossopharyngeal) otalgia peaks. Warn the patient, or they will believe something has gone wrong. *(The pain trajectory is not taken from the course material.)*\n\n**⚠️ NEGATIVE-PRESSURE PULMONARY OEDEMA** — pulmonary oedema occurring shortly after relief of a long-standing upper airway obstruction, seen after adenotonsillectomy for severe OSA. It is why a severely obstructed child is monitored rather than discharged. *(Not taken from the course material — offered as a distractor by the bank.)*",
        "qs": [
          "entqb-thr4-196",
          "entqb-thr4-192",
          "entqb-thr4-229",
          "entqb-thr4-199",
          "entep-throat-109",
          "entqb-thr4-233"
        ]
      },
      {
        "id": "tons-f1",
        "w": "must",
        "h": "⭐ Clinical picture of adenoid hypertrophy — the two consequences and everything under them",
        "body": "`L3` builds the whole clinical picture from **TWO obstructions**. Learn it in that shape, because every question is somewhere inside it.\n\n---\n\n## 1. CHRONIC NASAL OBSTRUCTION\n\n**→ MOUTH BREATHING**, associated with (verbatim):\n- *\"**SNORING +/- Sleep apnea**.\"*\n- *\"**Dry bleeding gums**.\"*\n- *\"**Dry lips, tongue & pharynx**.\"*\n- *\"**DENTAL CARIES**.\"*\n\n**→ CHRONIC NASAL DISCHARGE & POST-NASAL DRIP**, which *\"leads to **chronic irritant cough** and even **Laryngismus stridulus**.\"*\n\n**→ ⚠️ CHRONIC CO₂ RETENTION (HYPERCAPNIA)**, which *\"leads to **lassitude, dullness, nightmares, NOCTURNAL ENURESIS**.\"*\n\n**→ NASAL TONE OF VOICE** (rhinolalia clausa — the closed, blocked-nose voice).\n\n**→ RETARDED GENERAL GROWTH.**\n\n**→ ⚠️ ADENOID FACIES**, characterised by (verbatim, all eight):\n1. **Open mouth**\n2. **Thick lips**\n3. **Hitched-up upper lip**\n4. **Protruding upper incisors**\n5. **Receding chin**\n6. **⚠️ INACTIVE ala nasi**\n7. **Absent nasolabial folds**\n8. **High arched palate**\n\n---\n\n## 2. EUSTACHIAN TUBE OBSTRUCTION\n\n(verbatim, all four):\n- *\"**Frequent ear infections (AOM)**.\"*\n- *\"**Intermittent earaches**.\"*\n- *\"**Conductive hearing loss**.\"*\n- *\"**Chronic middle ear effusion (OME)**.\"*\n\n---\n\n**⚠️ FIVE TRAPS THE BANK SETS INSIDE THIS LIST:**\n\n1. **\"ACTIVE ala nasi\" is the FALSE item in adenoid facies — it is INACTIVE.** The child breathes through the mouth, so the nasal alae are never used and the muscles waste. **Dental caries IS part of the picture** (through the mouth-breathing branch) and is offered as a tempting \"except\" answer.\n2. **HYPERCAPNIA → NOCTURNAL ENURESIS**, specifically. Snoring, sleep apnoea and malocclusion are **mechanical** consequences of the obstruction, not consequences of the CO₂. The bank asks *\"hypercapnia with adenoiditis leads to which of the following?\"* and every distractor is a real feature of adenoid disease — **only enuresis comes through the hypercapnia route.**\n3. **ADENOID FACIES IS THE FACE OF LONGSTANDING BILATERAL NASAL OBSTRUCTION FROM ANY CAUSE** — allergic rhinitis, nasal polyposis and gross septal deviation produce it too. **It is not specific to the adenoid, and it is not a craniofacial malformation.** The bank keys exactly this.\n4. **⚠️ THE SKELETAL CHANGES DO NOT REVERSE.** A high-arched palate, protruding incisors and a receding chin are **growth** changes laid down while the child breathes through the mouth — removing the adenoid at ten does not undo the face. **That irreversibility is itself an indication to operate early**, and `L3` lists *\"Orofacial/Dental changes (from persistent mouth breathing)\"* as an indication for adenoidectomy. *(The disuse and growth mechanisms are not taken from the course material.)*\n5. **ORTHODONTIC COMPLICATIONS — the except question.** Caries, overcrowding, protruding incisors, high-arched palate and malocclusion are all adenoidal. **⚠️ HUTCHINSON’S NOTCHED INCISORS ARE NOT** — they belong to **congenital syphilis** (with interstitial keratitis and sensorineural deafness: **Hutchinson’s triad**). *(Hutchinson’s incisors appear in no cached ENT slide — not taken from the course material.)*\n\n**LARYNGISMUS STRIDULUS** — the lecture names it but does not define it. It is a **paroxysmal reflex adductor spasm of the larynx**, typically nocturnal, producing sudden stridor and apnoea that terrifies the parents and settles spontaneously. In the adenoidal child **post-nasal drip irritating the larynx, hypercapnia, and cold dry unconditioned mouth-breathed air can each trigger it** — so a question offering all of those and \"all of the above\" keys **all of the above**. *(The definition and the reflex arc are not taken from the course material; the post-nasal-drip mechanism is on the slide.)*\n\n**⚠️ THE INFANT VIGNETTE:** *10-month-old · **mouth breathing** · **sleep apnoea** · **difficult suckling*** → **adenoid hypertrophy**. **Infants are obligate nasal breathers**, so a blocked nasopharynx shows as feeding failure before anything else. Distinguish from: **bilateral choanal atresia** (presents **at birth** with cyclical cyanosis relieved by crying), **antrochoanal polyp** (older child, **unilateral**), and **nasopharyngeal angiofibroma** (**adolescent male, with epistaxis**). *(The obligate-nasal-breathing physiology is not taken from the course material.)*",
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
          "entqb-thr4-191"
        ]
      },
      {
        "id": "tons-f2",
        "w": "must",
        "h": "Adenoids and the ear — why adenoid disease is an ear disease",
        "body": "**This is the single most clinically important idea in the adenoid half of the chapter, and the bank asks it three separate ways.**\n\n**THE MECHANISM.** The adenoid sits in the **midline roof and posterior wall of the nasopharynx**, immediately behind and between the **two Eustachian tube orifices** (each about **1.5 cm behind the posterior end of the inferior turbinate**, per `L1.2`). A single midline mass therefore obstructs **BOTH tubes at once**, and it does so in two ways:\n\n1. **Mechanical obstruction** of the tubal orifices and of the nasopharyngeal airway.\n2. **⚠️ AS AN INFECTED RESERVOIR** — chronically infected adenoid tissue seeds both middle ears repeatedly, and harbours **biofilm** that oral antibiotics penetrate poorly. **This is why the ear infections recur after every apparently adequate course.** *(The biofilm and reservoir mechanisms are not taken from the course material; the Eustachian consequences are verbatim from `L3`.)*\n\n**THE CONSEQUENCES** — `L3`, verbatim: *\"**Frequent ear infections (AOM) · Intermittent earaches · Conductive hearing loss · Chronic middle ear effusion (OME)**.\"*\n\n**⚠️ THE VIGNETTE AND ITS KEY: \"recurrent BILATERAL acute otitis media in a child that FAILS TO RESOLVE with adequate medical treatment\" → ADENOID HYPERTROPHY.**\n\n> **Three clauses, three reasons:**\n> - **BILATERAL** → a **midline** cause obstructing both tubes. Nasal allergy can do it, but the adenoid is commoner and is the surgically treatable one.\n> - **RECURRENT** → a persistent source, not a single infection.\n> - **FAILS ADEQUATE MEDICAL TREATMENT** → the reservoir is not reachable by antibiotics; **the answer is surgical.**\n>\n> **Distractors:** *acute mastoiditis* is a complication of a single AOM, not a cause of recurrence; *adhesive otitis media* is an end-stage sequel, not a cause; *nasal allergy* is a genuine contributor but is treated medically and does not explain failure of medical treatment.\n\n**TWO OF THE FIVE INDICATIONS FOR ADENOIDECTOMY ARE EAR INDICATIONS** (`L3`, verbatim):\n- *\"**Recurrent/Chronic Otitis Media (5+ times in a year or 3+ per year over two years)**.\"*\n- *\"**Otitis Media with effusion (adenoidectomy + Ear tube insertion)**.\"*\n\n**⚠️ NOTE THE COMBINED OPERATION.** For OME the lecture pairs **adenoidectomy WITH grommet (ventilation tube) insertion** — removing the obstruction *and* ventilating the ear. The grommet fixes the ear now; the adenoidectomy stops it happening again.\n\n**CONDUCTIVE HEARING LOSS IN THE OBSTRUCTED CHILD IS EASY TO MISS AND EXPENSIVE TO MISS** — it presents as inattention, poor school performance, turning the television up, or apparent behavioural difficulty, at exactly the age when speech and language are being acquired. **Any child with recurrent ear disease and mouth breathing needs their hearing tested.** *(The developmental consequence is not taken from the course material.)*\n\n**⚠️ THE FLIP SIDE — DO NOT CAUTERISE THE TORUS TUBARIUS.** The **torus tubarius** is the cartilaginous lip of the Eustachian tube orifice, labelled in `L1.2`. Cauterising or curetting it during adenoidectomy scars the tube and produces a **permanent middle-ear effusion** — the very problem the operation was done to relieve. `L3` lists *\"**Eustachian tube injury**\"* among the complications of adenoidectomy for this reason.",
        "qs": [
          "entqb-thr4-220",
          "entqb-thr4-155",
          "entqb-thr4-167",
          "entqb-thr4-160"
        ]
      },
      {
        "id": "tons-f3",
        "w": "must",
        "h": "Diagnosis of the adenoid — and the imaging question the banks disagree about",
        "body": "`L3`, \"DIAGNOSIS OF ADENOIDS\", complete and in the lecture’s own order:\n\n1. *\"**Clinical picture.**\"*\n2. *\"**Endoscopic (flexible or rigid) examination.**\"*\n3. *\"**Plain X-ray nasopharynx - LATERAL VIEW.**\"*\n\n**⚠️⚠️ THIS ORDERING IS THE KEY TO A GROUP OF QUESTIONS THAT LOOK CONTRADICTORY AND ARE NOT. READ WHETHER THE STEM SAYS \"IMAGING\".**\n\n| If the stem asks… | The answer is… | Because |\n|---|---|---|\n| *\"the best **IMAGING** modality\"* / *\"best radiological investigation\"* | **⚠️ PLAIN LATERAL X-RAY of the nasopharynx** | Among *imaging* tests, the lateral plain film wins outright |\n| *\"the optimum **MODALITY** to assess the adenoids\"* — with **flexible nasopharyngoscopy on the option list** | **⚠️ FLEXIBLE NASOPHARYNGOSCOPY** | The slide ranks **endoscopy above plain film**, and only endoscopy grades how obstructive the pad actually is |\n\n**This is a changed option set legitimately moving the key — not a contradiction and not a mis-key.** Endpoint prints both versions; the examiner-pattern file records *\"best imaging modality for adenoids → plain X-ray\"* on two revision pages, and a separate printing that drops the word \"imaging\" and adds a non-imaging option keys endoscopy. **Check the option list first, every time.**\n\n**WHY THE LATERAL VIEW AND NOT THE AP:** the adenoid is a **soft-tissue pad on the posterior nasopharyngeal wall**, and only the **lateral** projection silhouettes it against the **air column** of the nasopharynx, giving natural contrast and allowing the adenoid-to-nasopharynx ratio to be judged. **On an AP film it is superimposed on the skull base and cervical spine and cannot be seen at all.** A frontal view of the paranasal sinuses does not show the nasopharynx. *(The projection reasoning is not taken from the course material; the \"lateral view\" specification is verbatim.)*\n\n**WHY NOT THE OTHERS:**\n\n| Modality | Why it is wrong for a routine adenoid |\n|---|---|\n| **CT** | Substantial radiation to a child’s orbits and thyroid for information a single plain film already gives. Reserved for suspected malignancy, bony disease or complicated sinus disease |\n| **MRI** | No radiation, but expensive, slow, and **needs a still child — often sedation or GA**. Reserved for a suspected **nasopharyngeal mass** (angiofibroma, carcinoma, lymphoma) |\n| **Ultrasound** | **Cannot cross an air-filled cavity.** The nasopharynx is full of air; there is nothing to image |\n| **Examination under GA** | Disproportionate — an anaesthetic to answer a question a mirror or an endoscope answers awake |\n\n*(The comparative reasoning is not taken from the course material; the three-step diagnosis is verbatim.)*\n\n**GRADING THE ADENOID** — ⚠️ **no cached ENT slide grades the adenoid at all** (all 34 files searched). Grade Gain keys **\"adenoid in contact with the soft palate = GRADE 3\"**, with grade 4 being complete choanal obstruction. **⚠️ The competing Parikh system calls that same finding grade 4.** *Answer as this bank keys it.* **And remember that the grade never decides the operation — the symptoms do.** *(Both grading systems are outside the course material.)*",
        "qs": [
          "entep-nose-56",
          "entep-nose-75",
          "entep-throat-110",
          "entep-enr-11",
          "entqb-thr4-232",
          "entqb-thr4-159",
          "entqb-thr4-219"
        ]
      },
      {
        "id": "tons-f4",
        "w": "must",
        "h": "⭐ Adenoidectomy — indications, and the three-vignette ladder the bank builds on them",
        "body": "`L3`, \"INDICATIONS OF ADENOIDECTOMY\", complete and verbatim:\n\n1. *\"**Obstructive sleep-disordered breathing (MOST COMMON)**.\"*\n2. *\"**Recurrent/Chronic Otitis Media (5+ times in a year or 3+ per year over two years)**.\"*\n3. *\"**Otitis Media with effusion (adenoidectomy + Ear tube insertion)**.\"*\n4. *\"**Chronic adenoiditis/sinusitis (symptoms lasting over 3 months not responding to antibiotic therapy)**.\"*\n5. *\"**Orofacial/Dental changes (from persistent mouth breathing)**.\"*\n\n**⚠️ THE COMMONEST INDICATION IS OBSTRUCTIVE SLEEP-DISORDERED BREATHING**, and `L9) Snoring & OSA.pdf` agrees from the other direction, naming *\"**Adenoid (most common cause in children)**\"* at the head of its causes of pharyngeal obstruction, with **adenoidectomy** as its nasopharyngeal surgical answer.\n\n**⚠️ ALLERGIC RHINITIS IS NOT AN INDICATION** — endpoint keys it as the odd one out. It is a **medical** problem treated with intranasal steroids and antihistamines; removing the adenoid does not treat the nasal mucosa. **⚠️ Nor is \"loss of appetite\"** (Grade Gain’s odd one out) — an association, not an indication. **⚠️ Nor is adenoid SIZE by itself.** Every one of the five indications is a **consequence**.\n\n---\n\n## ⚠️⚠️ THE THREE-VIGNETTE LADDER — the same stem three times, three different answers\n\nGrade Gain prints an identical vignette three times, changing one clause each time, and expects three different management decisions. **This is the highest-yield teaching block in the adenoid half of the chapter.**\n\n| | The vignette | Answer | The rule being tested |\n|---|---|---|---|\n| **1** | **2-year-old** · dental abnormalities · recurrent earaches · recurrent rhinosinusitis · mucus plug behind the soft palate | **⚠️ CONSERVATIVE management until age 3** | **The under-3 rule** |\n| **2** | The same **2-year-old**, **PLUS frequent night snoring and daytime sleepiness** | **⚠️ ADENOIDECTOMY NOW** | **OSA OVERRIDES the age rule** |\n| **3** | A **4-year-old**, same picture, but the **soft palate is CLEFT into two halves** | **⚠️ PARTIAL (superior) ADENOIDECTOMY only** | **The cleft-palate exception** |\n\n**WHY WAIT UNDER 3?** Three reasons: **regrowth** is likeliest at this age (the tissue is still in its 2–6 year growth phase and has **no capsule** to define complete removal), **natural involution** may make surgery unnecessary (*\"can shrink naturally after 6-8 years\"*), and **anaesthetic risk** is highest in the smallest children. Meanwhile treat the predisposing factors. ⚠️ *The 3-year cut-off itself appears in no cached slide and is the bank’s own — not taken from the course material.*\n\n**WHY OSA OVERRIDES IT.** Waiting is only reasonable while nothing irreversible is happening. **In obstructive sleep apnoea, harm is accruing every night**: nocturnal hypoxia, sleep fragmentation, **failure to thrive** (`L3` lists *\"Retarded general growth\"*), irreversible **orofacial change**, behavioural and learning consequences, and in severe untreated cases **cor pulmonale and pulmonary hypertension**. The bank prints the rule in its own explanation box: adenoidectomy under 3 is done *\"only if the patient had OSA.\"* *(Cor pulmonale is not taken from the course material.)*\n\n**WHY PARTIAL WITH A CLEFT — see the complications section.** Remove only the **superior** part of the pad, relieving choanal and Eustachian obstruction, and **leave the inferior pad for the palate to close against**.\n\n**⚠️ A severely obstructed child is monitored postoperatively rather than discharged the same afternoon** — the airway can worsen before it improves, and negative-pressure pulmonary oedema is described after relief of long-standing obstruction. *(Not taken from the course material.)*",
        "flow": {
          "title": "A child with an obstructing adenoid — operate, wait, or do a partial?",
          "steps": [
            {
              "k": "decision",
              "t": "Is there a cleft palate, a SUBMUCOUS cleft, a bifid uvula or a notched hard palate?",
              "yes": "⚠️ PARTIAL (SUPERIOR) ADENOIDECTOMY ONLY — leave the inferior pad, or velopharyngeal insufficiency follows",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Is there obstructive sleep apnoea — witnessed apnoeas, snoring with daytime sleepiness, failure to thrive?",
              "yes": "⚠️ ADENOIDECTOMY NOW, WHATEVER THE AGE — OSA overrides the under-3 rule",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Is the child under 3 years old?",
              "yes": "CONSERVATIVE — treat predisposing factors, review. Regrowth, natural involution and anaesthetic risk all argue for waiting",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Recurrent/chronic otitis media (5+/yr, or 3+/yr for 2 yrs), or OME?",
              "yes": "ADENOIDECTOMY — and ADD GROMMETS if there is an effusion",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Chronic adenoiditis/sinusitis over 3 months not responding to antibiotics, or established orofacial/dental change?",
              "yes": "ADENOIDECTOMY",
              "no": "No indication — adenoid SIZE alone is never one"
            },
            {
              "k": "alert",
              "t": "⚠️ ALLERGIC RHINITIS IS A MEDICAL PROBLEM",
              "n": "It is NOT an indication for adenoidectomy, however blocked the nose is"
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
          "entqb-thr4-219"
        ]
      },
      {
        "id": "tons-f5",
        "w": "high",
        "h": "Adenoidectomy — techniques, anaesthesia and pre-operative points",
        "body": "`L3`, \"ADENOIDECTOMY TECHNIQUES\", all five, verbatim:\n\n| # | Technique | The lecture’s own comment |\n|---|---|---|\n| **1** | **Conventional curettage (adenoid curette)** — *\"a sharp, spoon-shaped instrument (curette) to scrape adenoid tissue from nasopharynx\"* | *\"**Fast but relies on BLIND techniques or mirror visualization, which may leave RESIDUAL TISSUE**\"* |\n| **2** | **Suction diathermy (cautery)** — *\"specialized suction tool with an electric electrode to **vaporize** adenoid tissue, simultaneously removing it while controlling bleeding\"* | *\"**reduces intraoperative bleeding**\"* |\n| **3** | **Coblation** — *\"radiofrequency **cold ablation** – dissolves tissue at **40-70 °C** compared to **cautery (400 °C)**\"* | *\"**reducing thermal damage**\"* |\n| **4** | **Microdebrider-assisted** — *\"a **powered rotating blade** for precise thin-layer resection of tissue\"* | *\"**under DIRECT VISUALIZATION**\"* |\n| **5** | **Endoscopic-guided removal** — *\"a camera endoscope to directly visualize the nasopharynx (either **transorally or transnasally**) during **ANY of the above** techniques\"* | Adds vision to any of the others |\n\n**⚠️ THE MICRODEBRIDER WORKS UNDER ENDOSCOPIC DIRECT VISION**, which is the answer to *\"which technique uses a microdebrider for more precise removal?\"* — the keyed option being **endoscopic-guided**. **⚠️ Note the printed defect: \"microdebrider-assisted\" is itself a technique on the slide and is not among that question’s options; the key is the best option offered.**\n\n**⚠️ CURETTAGE IS BLIND, AND THAT IS THE WHOLE POINT OF THE ALTERNATIVES.** Blind curettage is quick and cheap, but it **leaves residual tissue** — which causes **primary bleeding** (the commonest cause), **persistent symptoms** and **recurrence**. Every other technique on the list exists to add either **vision** (endoscope, microdebrider) or **haemostasis** (suction diathermy, coblation).\n\n**⚠️ ANAESTHESIA: GENERAL ANAESTHESIA, ALWAYS.** The bank asks it directly. **Never local, never regional, never spinal.** The reasons are: a **small child** who cannot cooperate; a **shared airway** between surgeon and anaesthetist; and **blood draining backwards onto the laryngeal inlet** — the airway must be protected by a cuffed tube with a pharyngeal pack. `L3` lists *\"Chest complications ‘including pneumonia’: from **aspiration during or immediately after surgery**\"* and records that **anaesthesia and haemorrhage together account for most deaths**.\n\n**PRE-OPERATIVE POINTS** the bank keys as **correct**:\n- **No aspirin for 10 days before surgery** (and NSAIDs likewise).\n- **Congenital heart disease requires intensive/high-dependency care.**\n- **A submucous cleft requires a PARTIAL adenoidectomy** — not a full one.\n\n**⚠️ AND THE ONE KEYED AS *NOT* TRUE: \"we start with tonsillectomy then adenoidectomy.\"** In a combined **adenotonsillectomy** the **ADENOID IS REMOVED FIRST** and the nasopharynx packed while the tonsils are dissected — so the pack tamponades the adenoid bed throughout the rest of the operation and blood does not obscure the field. *(The order is stated in no cached slide — not taken from the course material.)*\n\n**⚠️ DISCHARGE.** Adenoidectomy is a **day-case** operation. **Grade Gain keys discharge at 3 hours** and that is the answer to give it. ⚠️ **No cached slide states any discharge time**; most units observe **4–6 hours**, and **admit** children with **OSA, a bleeding tendency, significant comorbidity, or age under 3** — because reactionary haemorrhage occurs within 24 hours and the blood is swallowed rather than seen. Keyed as printed, discrepancy noted. *(The 4–6 hour practice and the admission criteria are not taken from the course material.)*",
        "qs": [
          "entqb-thr4-163",
          "entqb-thr4-233",
          "entqb-thr4-162",
          "entqb-thr4-237",
          "entqb-thr4-164",
          "entqb-thr4-173"
        ]
      },
      {
        "id": "tons-f6",
        "w": "must",
        "h": "⭐ Complications of adenoidectomy — including Grisel’s syndrome and VPI",
        "body": "`L3`, \"COMPLICATIONS OF ADENOIDECTOMY\", complete and verbatim:\n\n**1. ⚠️ HAEMORRHAGE (MOST COMMON)** — *\"as tonsillectomy could also be **primary, reactionary or secondary**.\"* **Its four causes, verbatim:**\n   - *\"**Incomplete removal of adenoid tissue.**\"* ← **the commonest cause of PRIMARY bleeding**\n   - *\"**Blood disease e.g. hemophilia, leukemia.**\"*\n   - *\"**Wrong diagnosis e.g. nasopharyngeal ANGIOFIBROMA.**\"*\n   - *\"**Injury to cervical vertebrae: dt. prominent atlas.**\"*\n\n> **⚠️ \"WRONG DIAGNOSIS e.g. NASOPHARYNGEAL ANGIOFIBROMA\" IS THE MOST FRIGHTENING LINE ON THE SLIDE.** Curetting a **juvenile nasopharyngeal angiofibroma** in the belief that it is an adenoid causes torrential, potentially fatal haemorrhage. **The patient at risk is an ADOLESCENT MALE with nasal obstruction AND EPISTAXIS** — an adenoid does not bleed spontaneously. **This is why the pre-operative evaluation confirms what the mass is, and why endoscopy or a lateral film before operating is not a formality.**\n\n> **⚠️ THE PRIMARY GOAL OF PRE-OPERATIVE EVALUATION IS BLEEDING RISK** — the bank asks this directly and keys *\"bleeding tendencies\"* over nasal obstruction, hearing levels and sleep apnoea severity. All three of those are why you are operating; **bleeding risk is whether you safely can.** It means: coagulation history (personal and family), antiplatelet drugs, and confirming the mass is an adenoid and not an angiofibroma.\n\n> **⚠️ AND: A SLIPPED LIGATURE CANNOT CAUSE BLEEDING AFTER AN ADENOIDECTOMY, BECAUSE NOTHING IS LIGATED.** That is why **primary** bleeding here means **residual tissue** or a **blood disease**, and **reactionary** bleeding means a **dislodged clot**.\n\n**2. INFECTION** — *\"local or **descending**.\"*\n\n**3. DENTAL INJURY** — *\"from **intubation or mouth gag insertion**.\"*\n\n**4. ⚠️ EUSTACHIAN TUBE INJURY** — from cautery or curettage of the **torus tubarius**, the cartilaginous lip of the tube orifice. Scarring gives a **permanent middle-ear effusion** — the very problem the operation is often done to cure.\n\n**5. ⚠️ RECURRENCE** — *\"in **very young children** or **incomplete removal** (**adenoids have NO CAPSULE**).\"* The absence of a capsule is the reason there is no anatomical endpoint to \"complete\" removal, and the reason regrowth is the **age-specific** complication of operating on a 2-year-old.\n\n**6. ⚠️⚠️ VELOPHARYNGEAL INSUFFICIENCY** — *\"especially if done in cases of **unnoticed SUBMUCOUS CLEFT PALATE**.\"*\n\n> **THE MECHANISM, and it needs `L1.2`.** The **velopharyngeal sphincter** closes the nasopharynx off from the oropharynx for speech and swallowing, by *\"postero-superior movement of the **soft palate**, medial movement of the **lateral pharyngeal walls**, and slight anterior movement of the posterior pharyngeal wall (**Passawnt’s bridge**)\"* — and *\"the **uvula** plays an important role in the perfection of this closure.\"*\n>\n> **THE ADENOID PAD IS PART OF THE SURFACE THE SOFT PALATE CLOSES AGAINST.** In a child whose palate is short, cleft, or **submucously** cleft, the palate has been reaching the adenoid rather than the posterior wall. **Remove the pad and you open a gap the palate cannot bridge** — giving **hypernasal (rhinolalia aperta) speech and nasal regurgitation of fluids**.\n>\n> **⚠️ THE WORD \"UNNOTICED\" IS THE WARNING.** A **submucous cleft** has an intact mucosa and is easy to miss. **LOOK FOR: a BIFID UVULA, a BLUE MIDLINE TRANSLUCENT ZONE in the soft palate, and a NOTCH in the posterior border of the hard palate — examine every palate before every adenoidectomy.** *(The three signs are not taken from the course material; the submucous-cleft warning is verbatim.)*\n>\n> **THE ANSWER IS A PARTIAL (SUPERIOR) ADENOIDECTOMY** — remove only the upper part of the pad, relieving choanal and Eustachian obstruction, and **leave the inferior pad for the palate to close against.**\n\n---\n\n**⚠️ GRISEL’S SYNDROME** — asked directly, and **it appears in no cached ENT slide** (all 34 files searched). `L3` gives only the raw material: *\"Injury to cervical vertebrae: dt. prominent atlas.\"* *(Everything in this block is not taken from the course material.)*\n\n> **DEFINITION: NON-TRAUMATIC ATLANTO-AXIAL SUBLUXATION following an upper respiratory tract infection or adenoidectomy.**\n>\n> **Mechanism:** inflammation spreads from the nasopharynx to the upper cervical region **through the pharyngovertebral venous plexus**, causing hyperaemia and laxity of the **transverse ligament of the atlas**, which then allows C1 to sublux on C2.\n> **Who:** almost always **children**, in the days to fortnight after adenoidectomy or a URTI.\n> **Presentation:** **painful TORTICOLLIS** — the head held tilted and rotated (\"cock-robin\" position) — with neck pain, refusal to move the neck, and reduced range of movement. **⚠️ It is easily dismissed as a stiff neck or muscle spasm.**\n> **Investigation:** CT of the craniocervical junction (dynamic where indicated); MRI for cord and ligament.\n> **Treatment:** early — rest, analgesia, anti-inflammatories, a soft collar and antibiotics if infection persists; established or unstable — **traction and immobilisation**, and surgical fusion in the rare irreducible case.\n> **⚠️ WHY IT MATTERS: UNRECOGNISED ATLANTO-AXIAL SUBLUXATION CAN COMPRESS THE SPINAL CORD.** Torticollis after adenoidectomy is imaged, not observed.\n\n---\n\n**⚠️ WHAT CANNOT BE INJURED: THE NASAL SEPTUM.** Adenoidectomy is a **transoral** operation. **Teeth** (mouth gag), the **Eustachian tube** (lateral cautery), the **soft palate**, and even the **atlas** are all at risk. The septum is reached only through the nose and is not.",
        "qs": [
          "entqb-thr4-162",
          "entqb-thr4-166",
          "entqb-thr4-167",
          "entqb-thr4-173",
          "entqb-thr4-213",
          "entqb-thr4-215",
          "entqb-thr4-216",
          "entqb-thr4-236",
          "entqb-thr4-238",
          "entqb-thr4-164",
          "entep-nose-51",
          "entep-mfe4-25",
          "entqb-thr4-231",
          "entqb-thr4-237"
        ]
      },
      {
        "id": "tons-g1",
        "w": "high",
        "h": "The one-page sieve — every vignette pattern in this chapter",
        "body": "**Revise from this table last. Every clinical vignette in the 117 questions resolves to one line of it.**\n\n| The deciding clause in the stem | Diagnosis / answer |\n|---|---|\n| Child 5–7 yrs · fever · **pus/follicles on bilaterally red tonsils** · **tender local jugulodigastric nodes** · **NO cough** | **Acute bacterial (streptococcal) tonsillitis** → penicillin |\n| Teenager · 5 days · **extreme fatigue** · **grey membrane** · **GENERALISED nodes + hepatosplenomegaly** · **atypical lymphocytes** · **palatal petechiae** | **Infectious mononucleosis** → supportive; ⚠️ NO ampicillin; Paul-Bunnell |\n| **Thick grey membrane that BLEEDS on removal**, spreading beyond the tonsil · **BULL NECK** · **LOW-grade fever**, toxic | **Diphtheria** → isolate, airway, **antitoxin EARLY**, antibiotics |\n| **UNILATERAL** · **punched-out RAGGED ulcer** on tonsil and gums · grey slough · **foul metallic breath** · **bleeding gums** · patient not very ill | **Vincent’s angina** → **penicillin + metronidazole** + oral hygiene |\n| **Strawberry tongue** · punctate rash · **desquamation ~7 days after the rash** · circumoral pallor | **Scarlet fever** → full course of penicillin |\n| Young child · summer · **vesicles/shallow ulcers on the SOFT PALATE, uvula, posterior oropharynx** | **Herpangina (Coxsackie A)** → symptomatic; check hands and feet |\n| **Vesicles on GUMS, LIPS, TONGUE, INNER CHEEKS**; no seasonal pattern | **Herpes simplex gingivostomatitis** → aciclovir |\n| **UNILATERAL** painful vesicles along one nerve, **never crossing the midline** | **Herpes zoster** → early famciclovir (prevents post-herpetic neuralgia) |\n| **White patches that SCRAPE OFF** · **NO fever, NO pus** · recent **antibiotics** / denture / immunocompromised | **Candidiasis (moniliasis)** → antifungal + remove the cause |\n| **TRISMUS** · **uvula pushed to the opposite side** · tonsil pushed down and medially · cannot swallow saliva · adult male | **Quinsy** → drainage; tonsillectomy 1 month later *(taught in `ent-pharsupp`)* |\n| **Bilateral FIRM NON-TENDER** jugulodigastric nodes in a child, no fever | **Chronic tonsillitis** |\n| Snoring · sleep apnoea · dysphagia · **tonsils touching the midline**, no fever | **Chronic hypertrophic tonsillitis (kissing tonsils, grade 4)** |\n| **UNILATERAL** enlarged tonsil in an adult | **⚠️ MALIGNANCY — lymphoma or epidermoid carcinoma. Tonsillectomy = biopsy** |\n| Infant/toddler · **mouth breathing · snoring · difficult suckling · sleep apnoea** | **Adenoid hypertrophy** |\n| **RECURRENT BILATERAL AOM failing adequate medical treatment** | **Adenoid hypertrophy** → adenoidectomy (+ grommets for effusion) |\n| **Nocturnal enuresis, nightmares, dullness** in a mouth-breathing child | **Chronic CO₂ retention (hypercapnia) from adenoid obstruction** |\n| Adolescent **MALE** · nasal obstruction · **EPISTAXIS** | **⚠️ NASOPHARYNGEAL ANGIOFIBROMA — NEVER curette it** |\n| **Painful torticollis days after adenoidectomy or a URTI** | **⚠️ GRISEL’S SYNDROME — image the craniocervical junction** |\n| Bleeding **during** surgery | **PRIMARY** (adenoid: **residual tissue**) |\n| Bleeding **< 24 h** (2 h, 12 h, 20 h) | **REACTIONARY** — 2 h: **slipped ligature**; adenoid: **dislodged clot**; **rising pulse = swallowed blood** |\n| Bleeding **5–10 days / \"one week\"** | **SECONDARY — INFECTION.** Admit, observe, IV antibiotics |\n| **Fever + worsening pain + foul breath at 7 days**, no bleeding | **Secondary infection of the beds** — the precursor of secondary bleeding |\n| **White slough on the tonsillar beds at 5–15 days**, child comfortable | **NORMAL healing by secondary intention — reassure** |\n| **Severe earache after tonsillectomy**, ear normal | **Referred otalgia via the GLOSSOPHARYNGEAL nerve** — expected; analgesia |",
        "qs": [
          "entqb-thr4-203",
          "entqb-thr4-222",
          "entqb-thr4-228",
          "entqb-thr4-230",
          "entqb-thr4-242",
          "entqb-thr4-243",
          "entqb-thr4-245",
          "entqb-thr4-219",
          "entqb-thr4-220",
          "entqb-thr4-229",
          "entqb-thr4-238",
          "entep-throat-111",
          "entep-throat-case-1",
          "entep-throat-case-4",
          "entep-throat-case-5",
          "entep-throat-case-18",
          "entep-throat-109",
          "entqb-thr3-97",
          "entqb-thr3-98"
        ]
      }
    ]
  }
};
