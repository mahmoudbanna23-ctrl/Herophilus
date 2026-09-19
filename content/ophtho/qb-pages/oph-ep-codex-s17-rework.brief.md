# Rework the section 17 draft (Malignancies of Eye and Adnexa) — delta brief, fix the existing draft in place

Working root: `D:\claude os\Medical school\Herophilus`. Read `content/ophtho/qb-pages/oph-ep-codex-s17-draft.brief.md` first: every rule in it still binds
(shapes, markers, shared-menu rule, tag rule, no process language, no backticks, `answer` never moves). This brief only lists what an independent
reviewer found wrong with the first draft.

## Write grant

- Rewrite ONLY `content/ophtho/qb-pages/oph-ep-p1-s17-malignancies-eye-adnexa.draft.js` (same `var OPHEP_S17_DRAFT`, same 12 entries, same ids,
  stems, options, answers, sources). Nothing else. No git. Use `Write`/`Edit`, never a shell heredoc for the file.
- Keep the boxed rows n:1-n:4 exactly as they are structurally: authored expansion, blank line, `**The endpoint file prints this explanation:**`,
  the box as `> ` lines, blank line, the boxed marker. Unboxed rows end with the unboxed marker. Copy both markers from the current draft.
- Run `node tools/bank-harness/val-oph-ep.js --part 1 17` before you report. Fix every complaint. Warnings about near-identical menus are
  informational; the cross-references below already answer them.

## Depth: the first draft is far too thin

Every explanation runs 46 to 114 words. Target about 250 words for straight-recall rows and 400 to 520 for the vignettes n:5, n:6, n:8, counting
only the authored part (not the quoted box, not the marker). Explain why the keyed option is right and EVERY distractor individually, in
its own sentence. Use the lecture and book facts listed per row; open the files at those lines yourself. Sources:
`content/ophtho/lectures/L24) Ocular tumors..txt` (L24), `content/ophtho/lectures/L5) Eyelid disease.txt` (L5),
`content/ophtho/book/ch17-malignancies.txt` (ch17), `content/ophtho/book/ch16-paediatric.txt` (ch16), `content/ophtho/book/ch05-eyelids.txt` (ch05).
Never cite a filename or a line number inside an explanation.

## Defects to fix (found by an independent check; verified against the sources)

n:1
- "inflammation causing pain" has no source (L24:377 gives ocular inflammation, never pain). Remove it, or tag it `(not taken from the course material)`.
- "acute signs" for orbital cellulitis / cavernous sinus thrombosis, and congenital cataract "without pain, proptosis" are unsourced: tag them, or use
  the sourced line that retinoblastoma can mimic cellulitis (L24:393-396, ch16:219-220). Proptosis from orbital extension is sourced (L24:395-396).
- Enrich from L24:357, 372-378, 393-396 and ch16:219-225.

n:2
- "grows slowly" is only in the printed box: fine to keep, but the authored part must not lean on it alone. Add the sourced lid facts ch17:85, 95-106, 186.
  Add each distractor (SCC, sebaceous carcinoma, malignant melanoma) with its own sentence.
- Keep the plain-text pointer to `ophep-malignancies-eye-adnexa-10` and name what differs (this menu holds Malignant melanoma and no retinoblastoma;
  the other menu is five options and includes retinoblastoma and choroidal melanoma).

n:3
- "leading intraocular malignancy in children" drops "primary": the book makes secondaries the commonest intraocular malignancy overall (ch17:73), so
  every statement must say PRIMARY. Cover the Secondaries distinction with ch17:73-74, and each distractor (retinoblastoma, BCC, SCC) individually.

n:4
- "This shared option menu is also discussed in" is process language: remove it. Say instead what discriminates n:4 from `ophep-malignancies-eye-adnexa-3`
  (a child of 6 with a calcified mass, versus the adult stem there) and keep the plain-text id. Explain every distractor (choroidal melanoma, SCC, BCC).
  Note the age: a 6-year-old sits outside the "90 % under 3 years" figure (L24:357), so retinoblastoma is still the answer but the age is late.

n:5
- "chronic" contradicts the stem (5 weeks): remove it.
- "pearly" appears only in a photo description, not in the taught text: drop it (or tag it). Sourced: rolled edge and telangiectasia (ch17:101-102).
  For SCC use "flaky" (ch17:122) and everted (ch17:124). Do NOT say BCC is "rather than nodular": the sebaceous carcinoma figure is nodular
  (ch17:168-169).
- Enrich from ch17:157-158, 88-89, 96, and cover SCC, retinoblastoma and sebaceous carcinoma individually. This row is the ANCHOR of family (a) with n:8 and n:10.

n:6
- "severe diagnostic delays" and "recalcitrant" are unsourced: remove or tag. "Via biopsy" over-reaches: ch17:176-177 says the conjunctivitis should be
  "properly evaluated"; biopsy is stated for recurrent chalazion (ch17:174-175, ch05:368-370). Say exactly that.
- Explain each distractor individually, including the systemic-illness option (treat it as a plausible wrong answer and say why the sources point to a
  sebaceous carcinoma instead). Enrich from ch17:157-166 (age group: 74 years is the 8th decade) and ch05:368-370.

n:7
- Add a plain-text pointer to `ophep-malignancies-eye-adnexa-3` (same adult stem, different menu) and name the discriminating token: the fifth option
  "Secondaries from other sites" (ch17:73-74). Enrich from ch17:221-233. Say PRIMARY throughout.

n:8
- WRONG pointer: it names `ophep-malignancies-eye-adnexa-5`, the BCC lid-ulcer vignette. Point it at `ophep-malignancies-eye-adnexa-4` (also a child with a
  calcified mass) and, for the shared five-option family, at `ophep-malignancies-eye-adnexa-5`; state the discriminating token (age 5, leukocoria,
  calcified mass within the retina, keyed retinoblastoma).
- Enrich from L24:357, 372-378, 412, 423; ch16:219-225, 327-330; ch17:252-253. Explain each distractor including sebaceous carcinoma and choroidal melanoma.

n:9
- Points at n:3; correct that for the adult question but also name `ophep-malignancies-eye-adnexa-7`, the adult twin with the same stem frame and a
  fifth option. Explain each distractor.

n:10
- "building upon n:8" is wrong and names no discriminating token; drop the n:8 reference and point at `ophep-malignancies-eye-adnexa-5` (family a) and
  `ophep-malignancies-eye-adnexa-2` (same key, four-option menu). Name the token: key letter B, five options, retinoblastoma and choroidal melanoma present.
- Do NOT say retinoblastoma / choroidal melanoma "do not hold this rank for the eyelid": they are intraocular (ch17:75, 77). Say they are not eyelid tumours
  at all. Explain each distractor.

n:11
- Explain each distractor (upper lid & medial canthus; lower lid & medial canthus; lower lid & lateral canthus) in its own sentence. Enrich from
  ch17:97-106, 120-131, 143-147. Say what discriminates it from `ophep-malignancies-eye-adnexa-12`.

n:12
- Add a plain-text pointer to `ophep-malignancies-eye-adnexa-11` and name the discriminating token (basal cell versus squamous; nasal lower lid versus upper lid
  and lateral canthus). Explain each distractor. Enrich from ch17:97-106, 120-131, 143-147.

## Report

Under 200 words: row count (12), the row(s) where you added a tagged general-knowledge claim (with id), and the validator's final lines verbatim.
