# Drafting brief — Dr. HOUSE in ENT, NOSE section

You are writing question-bank entries for a medical revision app. **Accuracy and grounding matter
more than speed. A wrong clinical claim is worse than no claim.**

## Input / output

- **Input:** `content/ent/qb-pages/house-nose-batch<N>.array.js` — `HD_NOSE`, verbatim staging.
  `n` = printed question number, `p` = book page, `key` = 0-based index into `opts`.
  `ctx`, where present, is the antecedent case for a back-referencing stem.
  Folds are already removed; **every question in your file must be written.**
- **Output:** `content/ent/qb-pages/house-nose-batch<N>.draft.js` — **entry objects only,
  comma-separated, no wrapper, no `var`**. One object per input question, in `n` order.
- **`id` is `enthd-nose-<n>`.** The Nose section does **not** restart numbering — it runs straight
  on from the Ear section's 236, so `n` is unique across the bank and needs no offset.
- **Read `content/ent/qb-pages/house-ear-batch5.draft.js` first — it is your quality model.**
  A completed, accepted batch. Match its voice, depth, citation density, table use and structure.

## Schema — copy exactly

```
{ id:'enthd-nose-<n>', bank:'house', module:'ent', chapter:'<chapter-id>',
  stem:'<stem, markdown bold on the load-bearing clause>',
  options:['..','..','..','..'],
  answer:<0-based index — MUST equal the staged key>,
  explanation:'<see below>',
  objective:'<one sentence: the fact this question tests>',
  source:'Dr. HOUSE in ENT, End-of-round MCQs 2025, p.<book page>. <notes>' },
```

## Non-negotiable rules

1. **`answer` is ALWAYS the bank's printed key.** Never change it. Where the key is defensible only
   on a technicality, or is arguably wrong, say so **inside `explanation`** and keep the key.
   **Never dispute a key; record it.**
2. **Every entry ends with this exact sentence, as its own final paragraph:**
   `Written for this bank — d house ENT mcq prints no explanation here.`
   This bank prints **no explanation boxes anywhere** — verified across book pp.23–107. The marker
   is not optional and **must never appear in `source`.**
3. **No clinical fact without a citation.** Cite the cached lecture by filename and quote the
   slide's own words where you can. The Nose decks, all in `content/ent/lectures/`:
   `L23) Anatomy of the Nose` · `L24) diseases of the nasal septum` · `L25.1) epistaxis` ·
   `L25.2) smell` · `L26) nasal masses` · `L27.1) ACUTE rhinosinusitis` ·
   `L27.2) Chronic Sinusitis` · `L29) Rhinitis 1` · `L30) Rhinitis 2` ·
   `L31) nasal symptoms 1` · `L32) nasal symptoms 2` · `L9) Snoring & OSA`.
   ⚠️ **There is no L28.** A lecture-numbering gap means the professor withheld it — **fill and
   tag, never chase it.**
   ⚠️⚠️ **COMPLICATIONS OF RHINOSINUSITIS ARE TAUGHT NOWHERE IN THE CACHED DECKS — VERIFIED
   2026-08-23, AND THIS CORRECTS AN EARLIER VERSION OF THIS BRIEF.** `orbital`, `Pott` and
   `cavernous` return **zero** in `L27.1` and `L27.2`, and the deck set runs straight from `L27.2`
   to `L29`. An earlier version of this line sent drafters to `L30) Rhinitis 2` and
   `L32) nasal symptoms 2` **on the strength of a file-level `grep -l` that was never opened.**
   **All three hits are false leads:** `L30`:163 puts cavernous sinus thrombosis under **Acute
   Invasive Fungal Sinusitis**; `L32`:108 is **Cluster Headache**; `L32`:136 is **Tolosa-Hunt
   syndrome**. None of them teaches a complication of bacterial rhinosinusitis.
   ⚠️ **Adjudicate complications from the other banks' printed boxes** — `entqb-nose4-162` prints
   *"sinusitis is the commonest cause of frontal lobe abscess"* and *"complications occur in acute
   and chronic rhinosinusitis. But more on top of acute"*; `entqb-nose4-160` and `entep-nose-34`
   print the children-versus-adults point — and tag only the mechanism detail as outside knowledge.
   ⚠️⚠️ **THE LESSON, PAID BY THIS BRIEF'S OWN AUTHOR: A `grep -l` FILE-LEVEL HIT IS NOT EVIDENCE
   OF TEACHING. OPEN THE LINE.**
4. **READ THE SLIDE BEFORE DECLARING A GAP.** This project has paid for that mistake 16 times.
   Grep the **shortest stem** and the **misspelling** — this corpus really does print `ostio-`,
   `Wegner's`, `hear loss` and `caesarian`. A grep hit that you explain away unopened is worse
   than a miss, because it looks like evidence. **Open the hit.**
5. **A GAP IS ANSWERED, NOT DECLARED.** If the decks do not cover a point, supply it from general
   medical knowledge and tag it inline — *(not taken from the course material)* — as a short tag
   on the claim, never a dead-end sentence. **Prefer another bank's printed answer to outside
   knowledge** where one exists.
6. **Explain every distractor**, not just the key. A distractor is wrong for a reason and the
   reason is usually the teaching point.
7. **Never backtick an id you have not verified exists** in `app/data/questions.ent.js`. Grep for
   it first. You may freely reference other `enthd-nose-<n>` numbers inside your own batch range.

## Depth budget (adaptive — 2026-08-13 ruling)

- **~250 words** for straight slide-recall.
- **~520 words** for a clinical vignette, a defective or arguable key, a cross-bank divergence, or
  a gap you had to fill.
- Shared tables live in **one** entry; siblings point at it rather than repeating it.
- `source` is a **citation plus notes**, never a second explanation.

## House style for `explanation`

Open with a **bold one-sentence answer** stating why the key is right. Then the grounding, quoting
the slide. Then **why the others are wrong** — a compact markdown table is usually best. Close with
a **clinical bottom line** and any cross-references. Use `\n\n` between paragraphs (a literal
backslash-n pair inside the single-quoted JS string). Markdown tables render.

## Valid chapter ids — use ONE, exactly

`ent-noseanat` `ent-epistaxis` `ent-rhin` `ent-sinusitis` `ent-sinuscomp` `ent-septum`
`ent-nasalmass` `ent-nasalobs` `ent-facialpain` `ent-osa`

Chapter is assigned **by content**, not by which chapter of the book the question sits in:
anatomy, physiology and congenital anomalies → `ent-noseanat`; epistaxis and smell disorders →
`ent-epistaxis`; allergic, atrophic and other rhinitis → `ent-rhin`; acute and chronic
rhinosinusitis → `ent-sinusitis`; orbital and intracranial complications → `ent-sinuscomp`;
septal deviation, perforation, haematoma and fracture → `ent-septum`; polyps, tumours and
granulomatous disease → `ent-nasalmass`; obstruction as a symptom → `ent-nasalobs`; sinus headache
and facial pain → `ent-facialpain`. **A question that straddles gets the primary chapter, with the
secondary noted in `source`.** ⚠️ A few Nose-section questions are really ear or throat questions
(see the defect list) — chapter them by **content**, e.g. `ent-audio` or `ent-tonsils`, which are
also valid ids.

## ⚠️ Escaping — the project's most expensive problem

- Fields are **single-quoted JS strings**. Use the source's own **curly apostrophes** (’) rather
  than `\'` — more faithful and immune to the parse bug that has broken this file five times.
- A literal newline inside a field **ends the string**. Use the two-character `\n` sequence.
- **A backtick inside a double-quoted bash string is command substitution**, and every lecture
  filename and chapter id you write sits in backticks. Use a **quoted heredoc** (`<<'EOF'`) or the
  Write/Edit tool — **never `node -e "…"`** for content containing backticks.
- **A heredoc over ~9 KB fails to parse.** Append one small chunk per call.
- Do **not** write a lone backslash for any other purpose.
- **Write incrementally and check after every append:**
  `node -e "const fs=require('fs');new Function('return ['+fs.readFileSync('<yourfile>','utf8')+']')()"`
  **A file that does not parse ships nothing.**

## Defects and dependencies already recorded — honour them, do not re-litigate

Full adjudication in `content/ent/qb-pages/house-sweep-nose.md`.

- ⚠️ **Six questions back-reference a previous case** and cannot stand alone in a shuffled deck:
  **Q261, Q262** → Q260 · **Q318** → Q317 · **Q320** → Q319 · **Q339** → Q338 · **Q386** → Q385.
  Each carries a `ctx` field with the antecedent. **Restate enough of the case in your stem that
  the question is answerable on its own**, and keep the printed stem's wording visible.
- ⚠️ **Q339 keys *trigeminal* and that is correct.** Its case is Q338's **maxillary sinusitis**, so
  the otalgia refers along V. The corpus item `entep-throat-109` keys **glossopharyngeal** for
  **post-tonsillectomy** otalgia — a different pathway, not a divergence. Cross-reference the two
  and explain why the referral nerve changes with the source of the pain.
- ⚠️ **Q268 keys *ethmoid* as the most commonly infected paranasal sinus.** The commonly taught
  answer is maxillary. **Check `L27.1` before you write**, and if the deck disagrees with the key,
  **record the discrepancy in `explanation` and keep the key.**
- **Q331 and Q348 are the same vignette at 4 days and 10 days**, with identical menus, keyed
  **acute viral** and **acute bacterial** rhinosinusitis respectively. Explain the 10-day /
  double-worsening rule once and point the sibling at it. Q348's menu also prints *"Acute bacterial
  sinusitis"* next to *"Acute bacterial rhinosinusitis"*; the key is the latter, because the nasal
  and sinus mucosa are continuous — say so.
- **Q381 is a verbatim double-print** — the same "Hebra nose" question is printed again as Q382 on
  the next page. Only **Q381** is in your batch; Q382 is folded. If you write Q381, note the reprint.
- **Source typos, transcribed as printed and NOT corrected** — do not silently repeat them as fact:
  Q265 prints *"caesarian section"*; Q263 (folded) printed *"hear loss"* and *"external car"*;
  Q381/Q382 print *"Wegner's granuloma"* for **Wegener's**. Where a typo is in an option you must
  quote, keep it as printed and note the correct spelling once.
- **Q265 is a paediatric-cardiology vignette in a nose chapter** — cyanosis relieved by crying, with
  a VSD murmur. Chapter it by content and be careful: the murmur is a distractor from the airway
  diagnosis.
- **These are deliberate contrast pairs. Do NOT merge them, and say what the contrast is:**
  Q238/Q279 (olfactory vs respiratory epithelium) · Q240/Q242 (posterior vs anterior nasal opening)
  · Q243/Q244 (unilateral vs bilateral choanal atresia) · Q286/Q287 (most vs 2nd most common
  epistaxis in children) · Q302/Q303/Q304 (most / 2nd most common anosmia / most common
  sensorineural anosmia) · Q388/Q389 (Type 1 vs Type 2 septal fracture).

## Return

A compact text summary only: entries written, chapter spread, any question whose key you consider
defective (with the reason), any gap you filled and tagged, any cross-reference you verified, and
confirmation that your file parses. **Do not paste the draft into your reply — it is on disk.**
