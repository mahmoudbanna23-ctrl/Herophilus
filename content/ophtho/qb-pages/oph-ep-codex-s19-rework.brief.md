# Rework the section 19 draft — the first pass copied the printed box into the "expansion" and left the unboxed rows one line long

Working root: `D:\claude os\Medical school\Herophilus`. Read `content/ophtho/qb-pages/oph-ep-codex-s19-draft.brief.md` again first: every rule
in it still binds (write grant, sources, banned phrases, markers, tags, pairs, key rule). This file lists only what the first pass got wrong.

Edit ONLY `content/ophtho/qb-pages/oph-ep-p1-s19-ocular-systemic-diseases.draft.js`, in place, with `Edit`. Do not touch `id`, `stem`, `options`,
`answer`, `source` or `chapter` of any row; `objective` may be improved but stays one line. Do not run git.

## What is wrong

1. **Boxed rows n:1, 4-15 and 16: the authored expansion is a word-for-word copy of the printed box, then the box is quoted again.** The expansion
   must NOT repeat the box. Delete the copied sentence(s) and write what the lecture files teach around the printed box: why the keyed option is right
   in the lecture's own terms, and why EACH other option is wrong (name each option in words). A row's expansion = about 70-160 words of new,
   sourced teaching. The box below the expansion stays exactly as it is.
2. **Unboxed rows n:17-25 are a single sentence (29-58 words).** They are authored throughout, so they must teach: the keyed option with its
   lecture reason, then each other option in one clause. About 90-180 words each (up to about 250 for the n:17, 18, 20 vignettes).
3. **n:16 blockquote is broken.** The array `expl` has line breaks; every printed line must be its own line beginning `> ` (three lines of text in
   the array, so three `> ` lines inside one string joined by `\n`). Rebuild it from the array `expl`, splitting on line breaks and prefixing each
   non-empty line with `> `. The validator warned "quoted box differs from staging expl" on this row: it must stop warning.
4. **n:24 pairs with n:19** (validator warning "near-identical option menus n:19 and n:24"): the three treatments Focal laser / PRP / Anti-VEGF
   appear in both, but n:19 asks about new vessels on the retina and iris and n:24 asks about diabetic macular edema. n:24 must contain the plain-text id
   ophep-ocular-systemic-diseases-19 in an ordinary sentence and say in words what differs (which condition is being treated and therefore which treatment
   is the answer). Do not touch n:19's wording except to add teaching.
5. n:23 already points at n:16; keep that pointer, and add the explanation of why 50% and 80% are the other options (lecture figures only).
6. **Every clinical claim needs a lecture line, else delete it or tag it.** The first pass wrote things like "ptosis may also occur due to
   oculomotor nerve or sympathetic pathway involvement" (n:25) and "increased orbital inflammation and fibroblast activation" without a source. Open
   the lecture lines: L23 (systemic diseases), L19.1 and L19.2 (diabetic retinopathy and retinal vascular), L10 (orbit, thyroid eye disease), L21 and
   L22 (optic nerve, MS signs), L1,2, L17, L18, L11 as needed. Grep each claim (case-insensitive, several spellings). Sourced = no tag. Not stated in any of
   them = tag `(not taken from the course material)` right after the claim. Expect several tags across the section; a first pass reporting zero tags was wrong.
7. Row n:1 (Ageing EXCEPT ... key Epiphora): grep the lectures for ageing / aging / epiphora / tearing / cupping / presbyopia / macular degeneration.
   State what they say about each option. If a lecture ties epiphora to ageing (for example lacrimal or eyelid ageing changes), add a paragraph headed
   `Note on the printed key:` quoting that line; keep `answer:0`. Never argue the key is wrong.

## Order of work

Rows 1-8 first, then run `node tools/bank-harness/val-oph-ep.js --part 1 19`; then 9-16 and validate; then 17-25 and validate. Write after each
few rows so a dead session leaves a usable file. Never type a literal backtick or backslash-sequence into a shell heredoc.

## Report (under 150 words)

Row count (23); each row where a lecture contradicted the printed key; every row carrying a `(not taken from the course material)` tag with the
claim; the validator's final lines verbatim; word count per row.
