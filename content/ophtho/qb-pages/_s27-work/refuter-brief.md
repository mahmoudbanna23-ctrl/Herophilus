# s27 Summer Exam — refuter brief (report-only)

You are an independent REFUTER. Codex (gpt-5.6-terra, another house) wrote the 77 draft entries. Your job: try to refute them, re-run the checks yourself, report defects with exact fixes. Never trust a "done" claim. You do NOT edit `draft-A.txt`, the array, the parts, or any app file. You DO write two report files (below) with Bash.

## Files (all under `D:\claude os\Medical school\Herophilus\content\ophtho\`)
- `qb-pages/_s27-work/draft-A.txt` — the 77 entries under review (JS object literals, one per question, `id:"ophep2-summer-exam-<n>"`). Read ONLY your range with offset/limit; locate entries with Grep `id:"ophep2-summer-exam-` -n.
- `qb-pages/oph-ep-p2-s27-summer-exam.array.js` — the transcribed source rows (`n`, stem, opts, key = 0-based index of the printed answer, `expl` = printed box text if any, `p`/`mp` PDF pages). The stem, options and `answer` in the draft are copied from here by script. **The printed key is the bank's and is NEVER disputed.**
- `lectures/*.txt` — the course lectures (the only source of sourced facts). Header-slide files (cite "slide N"): L1,2 L3,4 L5 L6 L7,8 L9 L10 L13,14 L20 L21 L22 L24 L25 L27,28 L29 L30 L31,32. Form-feed files (cite "page N", page = form-feed count): L11 L12 L15,16 L17 L18 L19.1 L19.2 L23 L26 L33,34 L35,36 L37. Cite form `(L<key>, slide N)` or `(L<key>, page N)`.
- `qb-pages/_s27-work/s27.verify-residual.txt` — output of the machine layer (`verify-quotes.js`, same folder; run `node verify-quotes.js`) AFTER a scripted repair. It flags a quoted string not found in the cited lecture, or on a different slide/page than cited, and cites to a nonexistent slide/page. Some flags are false positives (a quote split on " / ", a citation form inside a quote). Re-run it yourself after judging each.
- `qb-pages/_s26-work/` — finished sibling section for tone/shape reference (its draft-A.txt).

## What to check on every entry in your range
1. **Every quotation mark is a verbatim quote** from the cited lecture and on the cited slide/page. Paraphrase inside quotation marks is a defect: fix by removing the quote marks or replacing with the true verbatim text. Wrong slide/page number: correct it. Wrong lecture: correct it.
2. **Medical correctness** of the explanation against the lectures. Numbers, units, doses exact.
3. **The printed key is never disputed.** If the lectures contradict the key, keep the answer, and add a note in the explanation recording what the bank printed vs what the lecture says (cite the slide/page). Known/suspected key conflicts to examine: n6, n10, n60 (n1-38 refuter: n6, n10; n39-77 refuter: n60).
4. **Every distractor explained** (why each wrong option is wrong).
5. **Outside knowledge is tagged**: any claim not from the lectures ends with the tag `not taken from the course material`. Before tagging an absence, GREP the WHOLE `lectures/` folder for the sign/term (not just the cited file); a fact that IS in some lecture must be cited instead of tagged. A tag on a fact that is in a lecture is a defect.
6. **Chapter id fits** the question (valid ids appear in `app/data/modules.js`; check if unsure).
7. Special rows: n27 (cites a nonexistent "L20 #20"), n63 (cites nonexistent "L18 #12"; also check near-neighbour options), n38 (very short entry — is it enough?), n65 (page 2305 vs 2304 whitespace: check the array row's `p`/`mp` vs the entry `source`), n19 (quote found only in L37) and n31 (quote found only in L18) are cited to the wrong lecture.
8. Lecture-cite convention: L11, L12, L15,16 have NO slide headers — cite `page N`.

## Report format (write both files from Bash; no backslashes, no backticks in the text)
Write with `cat > <file> <<'EOF' ... EOF`, ONE section per call, each call under ~6 KB (append with `>>` for later sections).

1. `qb-pages/_s27-work/s27.refuter-<A>.md` — per row in your range: `n<N>: CLEAN` or `n<N>: <defects>` in one or two lines. End with a one-paragraph summary: rows clean, rows fixed, rows that still need the orchestrator (say why).
2. `qb-pages/_s27-work/s27.fixes-<A>.txt` — the fixes, exact-substring pairs in this plain-text format (blocks separated by a blank line):

```
@@ n12
OLD: <exact substring of the draft-A.txt explanation text, one line, plain characters as they appear in the entry's string, no backslashes>
NEW: <replacement, one line>
```

Rules for a pair: OLD must appear EXACTLY ONCE in `draft-A.txt` — Grep with -F to confirm before you write it; make it long enough to be unique. Note the draft file holds JS strings, so a double quote inside an explanation appears in the file as a backslash + quote; write OLD/NEW in PLAIN form with a bare `"` and NO backslash — the applier re-escapes. If an OLD span would need to contain a backslash character, choose a shorter span that avoids it. To append, add a new `@@` block; never rewrite a block.

## Budget
Hard cap ~70 tool calls. Report by call 60, stop by 70 even if rows remain — list the unreviewed rows in your summary. A partial pass reported honestly is a success. Write the report and fixes to disk as you go, so a replacement can resume from the files. Your final message: the file paths written plus a summary of at most 120 words. No dumps.
