# Spec — the eight edits to SHIPPED entries that ride in the Final/Tutorial splice pass

Written 2026-09-02. These are edits to entries **already in `app\data\questions.ophtho.js`**, made
necessary by the Grade Gain "Final Exam" section (`opqb-t28-*`) reprinting them. They are separate
from, and applied in the same pass as, the 38 fold citations in `foldmap.json` (`applyfolds.js --go`),
which only ever append to `source`.

**Every `source:` addition listed under the fold ids below is already handled by `applyfolds.js`.
Do not add it twice.** What this file specifies is the *option-list*, *stem*, *answer* and
*explanation* work that `applyfolds.js` deliberately does not touch.

Six of the eight are folds (`-61 -63 -66 -68 -45 -20`). Two are **not** folds — `opqb-t28-13` and
`opqb-t28-37` both ship in `splice-part1.draft.js` alongside their shipped twins, because their keys
contradict. Their `source` fields already carry the cross-reference; what is missing is the
reciprocal note on the shipped side.

---

## A. Fuller printing adopted — option added, key unchanged (3)

### A1 · `opqb-t5-215` ← `opqb-t28-61` (fold)

- **`options`**: append `"Systemic steroids"` as a fifth option (index 4).
- **`answer`**: stays `0` (Systemic and local antibiotics).
- **`explanation`**: append a note before the marker —

  > *The Final Exam section prints this question with a fifth option, **E. Systemic steroids**,
  > which is added here. It does not disturb the key: a chalazion that has become red and painful
  > is secondarily infected, and steroids into an infected lid are the wrong first move — intralesional
  > steroid is a treatment for a **quiet**, persistent chalazion, not an inflamed one
  > (**not taken from the course material** — `L5) Eyelids` gives incision and curettage for the
  > persistent lesion and antibiotics for the infected one, without discussing intralesional steroid).*

### A2 · `opqb-t3-138` ← `opqb-t28-63` (fold)

- **`options`**: append `"Optic nerve glioma"` as a fifth option (index 4).
- **`answer`**: stays `0` (Thyroid eye disease).
- **`explanation`**: append a note before the marker —

  > *The Final Exam section prints a fifth option, **E. Optic nerve glioma**, added here. It is
  > excluded by the same two facts that carry the key: glioma is a disease of the **first decade**,
  > not of a 30-year-old, and it produces a slowly progressive axial proptosis with early optic
  > atrophy — not chemosis, congestion, and weight loss with a good appetite.*

Note for the record: the *shipped* explanation is the longer of the two (4,933 chars vs 3,566).
"Fuller printing" here refers to the **option list**, not the essay.

### A3 · `opqb-t9-393` ← `opqb-t28-66` (fold)

- **`stem`**: adopt the Final's fuller wording. Replace

  `"The **commonest complication of aphakia after congenital cataract** is:"`

  with

  `"The **commonest complication of unilateral aphakia after congenital cataract surgery** is:"`

  Both added words are load-bearing: **unilateral** is what makes the amblyopia dense (one clear
  image competing with one blurred one), and **surgery** places the aphakia after lensectomy rather
  than describing a congenital absence of lens.
- **`options`**: append `"Corneal opacity"` as a fifth option (index 4).
- **`answer`**: stays `2` (Amblyopia).
- **`explanation`**: append a note before the marker —

  > *The Final Exam section prints this question with the fuller stem adopted here — **unilateral**
  > aphakia after congenital cataract **surgery** — and a fifth option, **E. Corneal opacity**.
  > Neither moves the key; both sharpen it. Corneal opacity is a complication of the **operation**
  > (a wound, endothelial trauma), not of the aphakic state that follows it, and it is not the
  > commonest.*

## B. Fuller printing adopted — option inserted, ANSWER MOVES (1)

### B1 · `opqb-t13-559` ← `opqb-t28-68` (fold) — **user ruling, 2026-09-02: adopt the fuller printing**

- **`options`**: insert `"Senile ptosis"` at **index 3**, so the list becomes
  `["Senile enophthalmos.", "Arcus senilis.", "Senile cataract.", "Senile ptosis", "Senile macular degeneration."]`
- **`answer`**: **`3` → `4`.** This is the only `answer` change in the whole pass. It is not a key
  change — the keyed *option* is Senile macular degeneration in both printings; the inserted option
  pushes its index by one.
- **`explanation`**: append a note before the marker —

  > *The Final Exam section prints a fourth distractor, **D. Senile ptosis**, which moves senile
  > macular degeneration to **E**. The printed key moves with it — the answer is the same lesion in
  > both printings. Senile ptosis joins the other three as a senile change whose effect on vision is
  > **reversible**: it obstructs the visual axis mechanically and is corrected by surgery, exactly as
  > senile cataract is, whereas macular degeneration destroys photoreceptors and does not come back.*

⚠️ **This edit and the `applyfolds.js` citation both touch `opqb-t13-559`.** Apply the fold citations
first, then this edit, or verify afterwards that both landed.

## C. Key contradictions — both printings ship, cross-cite (2)

Neither of these is a fold. `opqb-t28-13` and `opqb-t28-37` are in `splice-part1.draft.js`; their
`source` fields already name the shipped twin. **The `answer` never moves on either side.**

### C1 · `opqb-t9-360` (keys **D**, All of the above) ↔ `opqb-t28-13` (keys **C**)

Same stem, same four options in the same order, on the myopic shift of nuclear sclerosis.

- **`explanation`**: append before the marker —

  > *The same question is printed again in the Final Exam section as `opqb-t28-13`, with the same
  > four options in the same order, but keyed **C** (increase in the refractive index of the nucleus)
  > rather than **D** (all of the above). Both printings ship as printed; the discrepancy is recorded,
  > not adjudicated. `L18) Cataract II` states the index mechanism and nothing about lens curvature
  > or iris–lens diaphragm displacement, which is what the Final's narrower key rests on.*

### C2 · `opqb-t6-244` (keys **C**, Trachomatous pannus) ↔ `opqb-t28-37` (keys **B**, Catarrhal corneal ulcer)

Same stem — a clear zone between the lesion and the limbus is **not** present in — same four options
in the same order.

- **`explanation`**: append before the marker —

  > *The same question is printed again in the Final Exam section as `opqb-t28-37`, same options in
  > the same order, keyed **B** (catarrhal corneal ulcer) instead of **C**. Both ship as printed.
  > The clear-zone criterion itself is a gap in the material — **"clear zone" and "lucid interval"
  > return zero hits across all 29 cached lecture decks and 13 cached book chapters** — so the
  > discriminator has to come from outside it: trachomatous pannus **grows down across the limbus
  > from the superior conjunctiva**, so by definition no clear zone separates it from the limbus
  > (`L6) Conjunctiva` sl.28 shows the vessels crossing the limbus from above), whereas the catarrhal
  > (marginal) ulcer, arcus senilis and Fleischer's ring all sit with clear cornea between them and
  > the limbus (**not taken from the course material**). On that reading the shipped key **C** is the
  > coherent one and the Final's **B** is defective — recorded here, never corrected there.*

## D. Divergences noted only — no structural change (2)

### D1 · `opqb-t4-148` ← `opqb-t28-45` (fold) — **flipped negation in option B**

Shipped prints `"There is probably no common canalicular obstruction"`; the Final prints
`"There is probably a common canalicular obstruction"`. Key is **D** (DCR) in both.

This is more than a typo, and it is the reason this one is written down rather than folded silently.
Regurgitation from the **upper** canaliculus on irrigating the **lower** one proves the fluid crossed
the common canaliculus — the common canaliculus is **patent**, and the block is below it, at the
sac/duct. So the *shipped* wording ("probably **no** common canalicular obstruction") is a **true**
statement, which gives that printing two true options against a stem asking for one. The Final's
wording is the internally coherent printing.

- **`options`**: **unchanged** — the shipped entry keeps what its own page printed.
- **`answer`**: unchanged (`3`).
- **`explanation`**: append before the marker —

  > *The Final Exam section prints option B with the negation reversed — "There is probably **a**
  > common canalicular obstruction" (`opqb-t28-45`). The difference matters. Regurgitation from the
  > **upper** canaliculus after irrigating the **lower** one proves that fluid crossed the common
  > canaliculus, so the common canaliculus is patent and the obstruction lies below it — which makes
  > the wording on **this** page ("probably no common canalicular obstruction") a **true** statement
  > standing beside the true key, and the Final's wording the coherent one. Both are transcribed as
  > printed; the key is D either way, because a patent canalicular system draining into a blocked
  > sac is precisely the DCR indication.*

### D2 · `opqb-t16-683` ← `opqb-t28-20` (fold) — **substituted option C**

Shipped prints `"Exenteration"` as option C; the Final prints `"Chemotherapy"`. Key is **B**
(Evisceration) in both, and the substitution does not touch it.

- **`options`**: **unchanged.**
- **`explanation`**: append before the marker —

  > *The Final Exam section prints option C as **Chemotherapy** rather than **Exenteration**
  > (`opqb-t28-20`). Both are real management options for retinoblastoma and neither is the answer:
  > chemoreduction is a first-line globe-preserving treatment and exenteration is reserved for
  > orbital extension. Evisceration remains the excluded option in both printings, because it leaves
  > the sclera and the optic nerve stump behind and seeds tumour.*
- **⚠️ Also append the missing provenance marker.** This entry's explanation ends without
  `Written for this bank — ophthalmology qb.pdf prints no explanation here.` See the debt below.

---

## Debt found while doing this — 144 shipped `opqb-*` entries carry no provenance marker

Measured 2026-09-02 by loading the array:

| | count |
|---|---|
| `opqb-*` entries shipped | 945 |
| carrying `Written for this bank …` | 791 |
| carrying `*(Printed explanation box — transcribed from …)*` instead | 10 |
| **carrying neither** | **144** |

**136 of the 144 cite a lecture deck or `ophthalmology.pdf` inside the explanation**, which a
transcribed bank box would not do — so these are written-for-this-bank explanations missing the
mandatory marker, not printed boxes. Explanation lengths: median 3,238 chars, min 134, max 4,789.

This is a provenance defect, not a clinical one — no answer or option is affected. The fix is
mechanical (append the marker) but should **not** be applied blind: the 8 entries that cite no cache,
and the 134-char shortest one, want an eyeball first. Full id list is reproducible with:

```bash
node -e "const fs=require('fs'),vm=require('vm');vm.runInThisContext(fs.readFileSync('app/data/questions.ophtho.js','utf8'));console.log(Q_OPHTHO.filter(q=>/^opqb-/.test(q.id)&&!(q.explanation||'').includes('Written for this bank')&&!/Printed explanation box/i.test(q.explanation)).map(q=>q.id).join(' '))"
```

Only `opqb-t16-683` is fixed in this pass, because it is being edited anyway. The other 143 are
carried as a debt.
