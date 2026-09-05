# Endpoint Part 2, Section 13 "Model Final Exam 2" — fold adjudication, n31-n60

Run against: the staged section-13 entries n31-n60 (read verbatim through the brief's `dump13.js`
helper, which prints the staged record and the live entry from whichever endpoint file holds it) vs
`app\data\questions.peds.ep2.js` (live `Q_PEDS_EP2`) and `app\data\questions.peds.ep.js` (live
`Q_PEDS_EP` — part 1). Candidate list: `…\scratchpad\cand13-B.txt`. Candidates outside n31-n60 were
ignored except where a row pairs an out-of-range n with one of mine (`n8 == n37`), which is
adjudicated below.

**The part-1 leg was adjudicated, not merely recorded.** The sweep output labels `[LIVE PART 1]`
"another chat writes that file: RECORD ONLY"; per the brief that label is stale — part 1 closed and
folded against part 2 earlier today, both files carry `bank:'endpoint'`, and the split is two source
PDFs rather than two banks. All four REPRINT calls in this range are in fact part-1 matches.

Page images opened, one per REPRINT call, from `…\scratchpad\ep2-index\native\`:
**p.1506 (n37), p.1508 (n38), p.1514 (n41), p.1516 (n42)** — all four native JPEGs read cleanly, no
fall-back to `hires`. No live-side page was rendered (out of range, per brief). No image was opened
for a NOT-A-REPRINT call and none was needed: every one of those was settled on the clinical subject
of the stem, which differs outright.

**The dominant finding in this range is trap 1.** Section 13 runs two very large shared-option /
shared-frame templates — `Which of the following is the most common cause of <X>?` and
`Which of the following is true regarding <X>?` — and they account for **every** low-similarity row
in the candidate file (n33, n35, n39, n47, n53, n60, and the whole `n2/n13/n14/n15/n76` within-section
cluster). Each printing asks about a different `<X>` with a different key, so they **pair, they do not
fold**. Not one of them yielded a discriminating token, because there is none to name.

**Only the sim-1.000 rows were reprints**, and all four were exact: same stem, same option ladder in
the same order, same key index, same printed box.

---

## n33 == pedep-inf-25 / pedep-mf3-50 / pedep-mf4-21 / pedep2-hem-65 / pedep2-res-31 / pedep2-car-2 / pedep2-mal-23, and n2 / n13 / n14 / n15 / n39 / n47 / n76 (p.1498)

**NOT A REPRINT — any of them.** No image opened (no REPRINT call).

n33 asks `Which of the following is the most common cause of febrile convulsions in children?`, key
index 1 **"Human herpesvirus 6 (HHV-6)"**. No discriminating token can be named against any candidate,
because no candidate asks about febrile convulsions at all. The eleven partners in full:

| candidate | its `<X>` | its key |
|---|---|---|
| `pedep-inf-25` | most common causative organism of acute otitis media | Streptococcus pneumoniae |
| `pedep-mf3-50` | most common cause of paediatric cardiopulmonary arrest | Respiratory problems |
| `pedep-mf4-21` | most common complication of meconium aspiration | Pneumothorax |
| `pedep2-hem-65` | most common cause of aplastic crisis in sickle cell disease | Human parvovirus B19 |
| `pedep2-res-31` | most common cause of pneumonia in infants/young children | Viruses |
| `pedep2-car-2` | most common congenital heart disease | Ventricular septal defect (VSD) |
| `pedep2-mal-23` | most common malignant tumor in children | Leukemia |
| `n2` (p.1436) | most common cause of haematuria in children | Urinary tract infection |
| `n13` (p.1458) | most common causative organism of infective endocarditis | Streptococcus viridans |
| `n14` (p.1460) | most common cause of chronic wet (productive) cough | Persistent bacterial bronchitis |
| `n15` (p.1462) | most common malignant tumor in children | Leukemia |
| `n39` (p.1510) | most common cause of heart failure in the first week of life | Hypoplastic left heart syndrome |
| `n47` (p.1526) | most common solid tumor in children | Brain tumors |
| `n76` (p.1585) | most common cause of anaemia in school-age children | Iron deficiency anaemia |

The similarity the sweep measured is the sixteen-character frame `Which of the following is the most
common`, nothing else — the option ladders share no member across any of these pairs. `n33` is drafted
as a new entry.

## n35 == pedep2-hem-67 (p.1502)

**NOT A REPRINT.** No image opened.

n35: `most likely cause of cyanosis in a newborn that improves with crying`, key index 1 **"Choanal
atresia"**, ladder Tricuspid atresia / Choanal atresia / Tetralogy of Fallot / Transposition of the
great arteries / Pulmonary atresia (5 options). `pedep2-hem-67` (part2 p.403): `most likely cause of
acute onset of purpura and ecchymosis in a child`, key index 2 **"Immune thrombocytopenic purpura
(ITP)"**, ladder HSP / Acute leukemia / ITP / Hemophilia (4 options). Shared frame `Which of the
following is the most likely cause of` and nothing else — no option appears on both sides. `n35` is
drafted.

## n37 == pedep-mf3-29 (p.1506), and n8 == n37

**REPRINT — and this is now the *fourth* recorded printing of the question.**

Discriminating token: the milestone triad **"can sit without support, roll over and crawl but cannot
stand alone"** with the ceiling set by *cannot stand alone*, keyed **"9 months"**. Staged key index 2
(text "9 months"); live `pedep-mf3-29` `answer:2`, text "9 months" at that index — same index, same
text. Fold shape: **exact**. The stem is word-for-word identical to the live stem, and the option
ladder is identical member-for-member and in the same order: **4 months / 6 months / 9 months / 13
months / 16 months**. The staged printed box is also word-for-word the live box ("Sitting, rolling,
and crawling without standing corresponds to around 9 months of age.").

Image (p.1506) confirms: item numbered 37, highlighted key **"C. 9 months"**, the five options exactly
as above, box as quoted, no figure. Nothing on the page contradicts the live entry.

**`n8 == n37` (sim 1.000, within-section).** Both are printings of this same question, so **neither is
drafted as a new entry** — the live `pedep-mf3-29` is the survivor and both staged pages fold into it.
If a choice between the two staged printings were ever forced, **keep n37**: it is the exact match to
the live entry, whereas n8 (p.1448) is a rebuilt-ladder printing. The ladders differ numerically and
are recorded exactly: **n8 prints 3 / 6 / 9 / 12 / 15 months; n37 and the live entry print 4 / 6 / 9 /
13 / 16 months.** Both key "9 months" at index 2. The boxes also differ: n8's reads "The median age
for crawling is 8–9 months, while that for standing independently is about 10 months." n8 is outside
my range — flagged here so its adjudicator does not draft it.

Live `source` will need: `Pediatrics endpoint part1.pdf p.1541 (also printed in Pediatrics endpoint
part2.pdf p.1296, respelled; the options and the key are unchanged); reprinted p.1506` — and, subject
to n8's own adjudication, `; reprinted p.1448, where the option ladder is rebuilt to 3/6/9/12/15
months with the key unchanged`.

## n38 == pedep-mf3-31 (p.1508)

**REPRINT.**

Discriminating token: **"severe croup"** in the ER keyed to **"Nebulized Epinephrine"** *against a
menu that contains "IV epinephrine" as its own distractor* — the route, not the drug, is what the
question turns on, and both printings set the same trap. Staged key index 3 (text "Nebulized
Epinephrine"); live `answer:3`, same text at that index. Fold shape: **exact** — identical stem,
identical five options in the same order (Suction of the pharynx / IV epinephrine / Oral ampicillin /
Nebulized Epinephrine / Immediate intubation), identical box.

Image (p.1508) confirms: item numbered 38, highlighted key **"D. Nebulized Epinephrine"** (capital E
as printed), the five options as above, box reading "Nebulized epinephrine reduces airway swelling
rapidly and is first-line emergency treatment for severe croup." No figure.

Live `source` will need: `Pediatrics endpoint part1.pdf p.1545; reprinted in Pediatrics endpoint
part2.pdf p.1508`. The box adds nothing new — it is the same sentence the live explanation already
quotes as the endpoint file's own.

## n41 == pedep-mf3-34 (p.1514)

**REPRINT.**

Discriminating token: the pairing of the **18-month red-flag age for walking unsupported** with the
**97.5%** limit-age convention — a percentage that appears nowhere else in either bank's option
ladders. Staged key index 3 (text "97.5%"); live `answer:3`, same text. Fold shape: **exact** —
identical stem including the quoted phrase "red-flag age", identical **four**-option ladder in the
same order, identical box.

Numbers, both printings, identical and reported exactly: options **27% / 57% / 77% / 97.5%**; key
**97.5%**; red-flag age **18 months**.

Image (p.1514) confirms: item numbered 41, four options only (no E), highlighted key **"D. 97.5%"**,
box reading "About 97.5% of normal children can walk unsupported by 18 months; delayed walking beyond
this is a red flag." No figure. The staged note records an unanswered twin at p.1513 matching
verbatim, which is the section's usual unanswered/answered page pair, not a separate printing.

Live `source` will need: `Pediatrics endpoint part1.pdf p.1551; reprinted in Pediatrics endpoint
part2.pdf p.1514`. **Nothing about the divergence already recorded in the live explanation changes**
— the live entry notes that `Lec 1 Normal development_.txt` defines the limit age as ~90-95% while the
book keys 97.5%; this second printing prints 97.5% too, so the divergence stands exactly as recorded
and the key does not move.

## n42 == pedep-mf3-37 (p.1516)

**REPRINT — a third printing.** The live entry's own `source` already records a second printing at
part2 p.1362 ("the stem and the options are identical apart from punctuation; the key is unchanged").

Discriminating token: **grunting appearing in a 3-month-old with worsening bronchiolitis**, keyed to
**"Grunting increases end expiratory pressure and promotes gas exchange"** — and specifically against
the distractor "During grunting lung volume increases as more air moves through the conducting
airways", the inspiration/expiration confusion both printings set. Staged key index 2; live
`answer:2`, same text at that index. Fold shape: **exact** — identical stem, identical four options in
the same order, identical box.

Image (p.1516) confirms: item numbered 42, four options only, highlighted key **"C. Grunting increases
end expiratory pressure and promotes gas exchange"**, box reading "Grunting increases end-expiratory
pressure, helping keep alveoli open and improving gas exchange." No figure. Staged note records the
unanswered twin at p.1515.

Live `source` will need: `Pediatrics endpoint part1.pdf p.1557 (also printed in Pediatrics endpoint
part2.pdf p.1362, where the stem and the options are identical apart from punctuation; the key is
unchanged); reprinted p.1516`.

## n46 == pedhd-devp-18 (p.1524)

**NOT A REPRINT within the endpoint bank — cross-bank match only, never folded.** `pedhd-*` is the
House bank. Recorded in the cross-bank section at the foot of this file; `n46` is drafted as a normal
new endpoint entry. No image opened for it beyond the staged record (per brief, cross-bank rows get no
page renders).

## n47 == pedep2-mal-23 / pedep-mf1-80 / pedep-inf-25 / pedep-mf3-50 / pedep-mf4-21 / pedep2-car-2, and n2 / n13 / n14 / n15 / n33 / n76 (p.1526)

**NOT A REPRINT — any of them.** No image opened.

This is the most dangerous row in the range and it is a near miss, not a match. n47 asks
`Which of the following is the most common **solid** tumor in children?`, key index 2 **"Brain
tumors"**, ladder Wilm's tumor / Retinoblastoma / Brain tumors / Kaposi sarcoma / Lymphomas.

- **`n15` (p.1462), sim 0.818** — asks `most common **malignant** tumor in children`, key index 0
  **"Leukemia"**, and prints only **four** options (Leukemia / Lymphoma / Kaposi sarcoma / Wilms
  tumor). Different adjective, different key, different ladder length. Two option texts overlap
  (Kaposi sarcoma, Wilm's/Wilms tumor) — that overlap is the whole of the 0.818.
- **`pedep2-mal-23` (part2 p.1268), sim 0.818** — is the *live* form of that same "most common
  malignant tumor" question, four options, key "Leukemia". Not n47's question.
- **`pedep-mf1-80` (part1 p.1320), sim 0.720** — asks `most common **abdominal** solid tumor in
  infancy and childhood`, key index 0 **"Neuroblastoma"**, ladder Neuroblastoma / Wilms tumor /
  Sarcoma / Teratoma. The word *abdominal* changes the answer outright: unqualified "solid tumor in
  children" keys brain tumours, "abdominal solid tumour" keys neuroblastoma. Folding these two would
  have merged two questions with two different correct answers.
- The rest (`pedep-inf-25`, `pedep-mf3-50`, `pedep-mf4-21`, `pedep2-car-2`, `n2`, `n13`, `n14`, `n33`,
  `n76`) are the "most common cause of `<X>`" frame, tabulated under n33 above.

No discriminating token exists in any direction. `n47` is drafted.

## n53 == pedep2-neu-56 and nineteen others (p.1539)

**NOT A REPRINT — any of them.** No image opened.

n53 asks `Which of the following is true regarding Guillain-Barré syndrome?`, key index 1 **"Sensory
symptoms are less striking than the weakness"**, four options.

The only candidate that is even about the same disease is **`pedep2-neu-56`** (part2 p.1069, sim
0.625): `The following is RIGHT regarding Guillain-Barre Syndrome:`, key index 1 **"Dysphagia,
aspiration, and respiratory failure may occur"**, five options — CSF is diagnostic in early cases /
Dysphagia, aspiration, and respiratory failure may occur / Mild cases at presentation could be home
treated / Residual neurologic damage commonly occurs in children / Bilateral asymmetrical ascending
paralysis is characteristic. **Not one option text is shared with n53's ladder**, and the true
statement being tested is a different fact about the same disease. Same topic, different question:
this is a pair, not a fold, and the matching key *index* (1 on both sides) is exactly the coincidence
trap 2 warns about in reverse — same index, different key text.

The other nineteen (`pedep-emg-32`, `pedep-per-18`, `pedep-neo-49`, `pedep-inf-31`, `pedep-mf1-73`
gastroschisis, `pedep-mf1-78`, `pedep-mf3-25`, `pedep-mf3-43`, `pedep-mf3-75`, `pedep-mf3-76` duodenal
atresia, `pedep-mf3-80`, `pedep-mf4-30` vaccination, `pedep-mf4-50` breast milk jaundice,
`pedep-mf4-65` cryptorchidism, `pedep2-hem-83` thalassemia, `pedep2-neu-28` and `pedep2-neu-32`
antiepileptic drugs, `pedep2-liv-11` hepatitis A, `pedep2-liv-20` acute viral hepatitis) all share only
the frame `Which of the following is true/TRUE regarding <X>` over a different disease. `n53` is
drafted.

## n60 == pedep-inf-34 (p.1553)

**NOT A REPRINT.** No image opened.

n60: `Which of the following laboratory findings is **not** consistent with disseminated intravascular
coagulation (DIC)?`, key index 0 **"Thrombocytosis"**, four options (Thrombocytosis / Elevated D-dimer
/ Prolonged PT / Reduced fibrinogen). `pedep-inf-34` (part1 p.1033): `Which of the following findings
is **not** consistent with Hirschsprung's disease?`, key index 4 **"Spontaneous resolution"**, five
options. Shared frame `is not consistent with`, different disease, no shared option. `n60` is drafted.

## n31, n32, n34, n36, n40, n43, n44, n45, n48, n49, n50, n51, n52, n54, n55, n56, n57, n58, n59

**No candidate.** `n48`, `n50` and `n57` appear in `cand13-B.txt` as bare headers with no rows beneath
them; the remaining sixteen do not appear at all. Either way the sweep returned nothing to adjudicate,
and all nineteen are drafted as new entries.

---

## Verdict roster (n31-n60)

```
n31 no candidate
n32 no candidate
n33 not a reprint
n34 no candidate
n35 not a reprint
n36 no candidate
n37 REPRINT of pedep-mf3-29
n38 REPRINT of pedep-mf3-31
n39 not a reprint
n40 no candidate
n41 REPRINT of pedep-mf3-34
n42 REPRINT of pedep-mf3-37
n43 no candidate
n44 no candidate
n45 no candidate
n46 not a reprint (cross-bank House match only, recorded below)
n47 not a reprint
n48 no candidate
n49 no candidate
n50 no candidate
n51 no candidate
n52 no candidate
n53 not a reprint
n54 no candidate
n55 no candidate
n56 no candidate
n57 no candidate
n58 no candidate
n59 no candidate
n60 not a reprint
```

**REPRINT 4 · NOT A REPRINT 7 · UNCERTAIN 0** (plus 19 with no candidate; 30 staged n accounted for).

All four REPRINTs are part-1 matches; the staged entries n37, n38, n41, n42 are **not drafted**, and
the four live part-1 entries take the exam page into `source` as set out in their blocks above. n8
(outside this range) is a further printing of the n37/`pedep-mf3-29` question and must not be drafted
either — flagged for its own adjudicator.

## Cross-bank, recorded for the end-of-stream sweep

House (`pedhd-*`) is a different bank. **Never folded, never deleted, no verdict given.** One row in
this range:

| staged | House id | sim | keys | chapter |
|---|---|---|---|---|
| `n46` (p.1524) | `pedhd-devp-18` | 1.000 | key 2 / answer 2 | `dev-nd` |

n46 is the 4-year-old boy referred by his nursery teacher — delayed speech with a handful of words,
poor imaginative play, plays alone, distressed by change of routine, no eye contact, no dysmorphic
features — keyed index 2 **"Autism"**, options Selective mutism / Normal development / Autism / Speech
delay / Fragile X. A sim of 1.000 against a House entry means the endpoint model exam and the House
bank print the same question; under the standing rule that is an `alsoIn` candidate for the
end-of-stream cross-bank sweep, not a fold, and n46 is drafted as a normal endpoint entry now.
