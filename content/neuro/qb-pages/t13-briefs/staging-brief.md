Topic 13 "CNS Infections" — staging transcription brief

GOAL: transcribe verbatim, from the attached page images, every question and its printed
answer key for topic 13 "CNS Infections" into a new file:

  content/neuro/qb-pages/gg-nr-t13.array.js

SCOPE: Grade Gain "neuropsychiatry & neurosurgery qb.pdf". Book pp.57-60 = PDF 062-065
(neuropsychiatry offset: PDF page = book page + 5, confirmed across this whole bank — do not
recompute it). Contents-page promised count: 20 questions. CONFIRMED THIS SESSION by a direct
page read: the section runs Q296-315 exactly, 20 questions — one of the rare topics where the
contents page is exactly right, but still COUNT WHAT IS ACTUALLY PRINTED rather than trusting
this brief; say so if the pages disagree.

⚠️ KNOWN PRINTING DEFECT IN THIS BOOK: the running header at the top corner of each page LAGS
the true section by about one page and CANNOT be used to identify section boundaries or topic
identity. The only reliable section markers are (a) the BOXED section-title banner that appears
once at the true start of a section, and (b) the actual clinical content of the question stems.
Topic 13's boxed banner reads "CNS Infections / Questions" on PDF 062 (printed p.57), first
question Q296 (about TB-meningitis treatment duration). Its answer key has its own boxed banner,
"CNS Infections / Answers", on PDF 065 (printed p.60) — this page is ANSWERS ONLY, no question
tail (unlike topic 12's mixed page).

Attached images: pg-062.png through pg-065.png (PDF pages, 4 total).
- pg-062 (printed p.57): boxed "CNS Infections / Questions" banner, Q296-303.
- pg-063 (printed p.58): Q304-308.
- pg-064 (printed p.59): Q309-315 (end of questions).
- pg-065 (printed p.60): boxed "CNS Infections / Answers" banner, answers 296-315, all of them.
If any of these pages actually holds content outside Q296-315, or the boxed "Back and Lower
limb pain / Questions" banner (confirmed to start at Q316 on PDF 066, printed p.61, NOT included
here) appears earlier than expected, stop and flag it rather than transcribing past the boundary.

OUTPUT FORMAT — mirror content/neuro/qb-pages/gg-nr-t12.array.js byte-for-byte in structure:
- A leading /* ... */ header comment: bank name, section/topic line, book/PDF page range for
  questions and for answers, the offset math, banner text confirmation, the running-header-lag
  caveat above, and anything else worth flagging (same style as t11/t12's header).
- `var GG_NR_T13_STAGED = [` then one object per question, blank line between entries, ending `];`.
- Each entry: `{ n:<int>, p:<book page int>, key:'<letter>', keyName:<string or null>,\n  stem:'<verbatim stem>',\n  opts:['<verbatim option>', ...],\n  box:<null, or the verbatim printed explanation box as a string if one is printed> },`
  (note: no trailing comma after the LAST entry's closing `}`, matching t11/t12).
- `n` continues the running numbering from topic 12's last id (npqb-nr-295), so topic 13 starts
  at n:296.
- `key` is the letter the bank actually prints for that question, taken from the answer page —
  never inferred, never guessed. If a key is ambiguous, illegible, or missing on the page, set
  key to null and say so in the header comment, naming the question number.
- `keyName` is the option's own printed name/text if the answer page prints it next to the
  letter (rare); otherwise null. Do not fabricate one.
- `box` is a VERBATIM printed explanation, exactly as printed, if the bank prints one under
  the answer; otherwise null. Never paraphrase a printed box into your own words here — this
  stage only captures what is printed, it does not write new explanations.
- Options print in whatever order the page shows them; do not reorder.
- Every string is single-quoted, matching t11/t12. Escape internal single quotes as \'.
- No blank/placeholder entries. If a question is genuinely illegible even at this resolution,
  say so in the header comment by number rather than inventing content.

RULES:
- This is a TRANSCRIPTION stage only. Do not write clinical explanations of your own, do not
  correct anything the bank prints, do not skip anything because it looks like an error — GG
  house rule is a defective key is recorded, never disputed; note it in the header instead.
- Cite nothing from outside knowledge here — that only happens in a later drafting stage.
- Do not touch, rename, or delete any other file in this repo. Write ONLY
  content/neuro/qb-pages/gg-nr-t13.array.js.
- If a command fails, say FAILED and quote the error. Do not report success without having
  actually written and verified the output file exists and is non-empty.
- When done, print: the final entry count, the n range you produced, and a one-line summary of
  anything you flagged (illegible key, page overrun, mixed page, etc.) or "nothing flagged".
