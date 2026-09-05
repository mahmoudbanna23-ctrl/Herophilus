// Merge a peds ENDPOINT section's staging halves into the one array file the harness reads.
//   node tools/bank-harness/merge-parts-ep.js <section>            # dry run
//   node tools/bank-harness/merge-parts-ep.js <section> --write
//
// The halves are written by drafting agents as a bare run of object literals separated by a
// blank line and NOT comma-joined -- one agent per half, each appending incrementally, so
// neither can know whether it owns the last entry in the file. This tool is what turns that
// into a valid array: it splits on the blank line between a closing `}` and the next opening
// `{`, re-joins with commas, and wraps the result in the section's staging var.
//
// ⚠️ The halves are NOT parsed by simply eval'ing the file -- without the commas that is a
// syntax error, and a half that "fails to load" is nearly always this and not a real fault.
//
// Written with the Write tool, not a heredoc: the heredoc collapses \\ to \ and would eat the
// character codes below.
const fs = require('fs');
const R = 'D:/claude os/Medical school/Herophilus/';
const QB = R + 'content/peds/qb-pages/';

const NL = String.fromCharCode(10);
const BLANK = NL + NL;

const SEC = {
  3: { base: 'endpoint-s03-gastro', svar: 'PEDEP_S03_STAGED', title: 'SECTION 3: "Gastroenterology"',
       pages: '393-549', expect: 67 },
  4: { base: 'endpoint-s04-accidents', svar: 'PEDEP_S04_STAGED', title: 'SECTION 4: "Accidents"',
       pages: '550-562', expect: 3 },
  // ⚠️ 61, not the 60 the contents page and the pre-map both print. p.584 is an answered page the
  // index filed as `question`: its yellow measure is 748 against a 520 baseline, under the
  // classifier's threshold, because the highlight covers the two characters "B. 9". Read on the
  // image 2026-09-03 and settled. Trust no printed count.
  5: { base: 'endpoint-s05-emergencies', svar: 'PEDEP_S05_STAGED', title: 'SECTION 5: "Pediatrics Emergencies"',
       pages: '563-702', expect: 61 },
  // ⚠️ 23 answered pages, and the contents page also says 23 -- but the index files p.741 as
  // `other`, not `question`, which is what breaks the otherwise perfect odd-question / even-answer
  // alternation across pp.727-772. 741 is 742's question page. Read it on the image before staging.
  // ⚠️ p.768 is expected to reprint `pedep-gp-70`. It is STAGED ANYWAY -- a staging file short of
  // its page count fails the splice gate, and folds are always a separate pass afterwards.
  6: { base: 'endpoint-s06-perinatal', svar: 'PEDEP_S06_STAGED', title: 'SECTION 6: "Perinatal"',
       pages: '703-773', expect: 23 },
  // The cleanest section in the book so far: the index's `answered` count, its `question` count and
  // the contents page all say 53, and the alternation is perfect -- p.797, then every even page
  // from 800 to 902. pp.774-795 are a 22-page teaching preamble with no questions in them, and
  // p.903 is the closing divider (4 words). Two pages still need an eye on the image before the
  // staging is believed: p.797 is flagged `few-options` (OCR read A, B, D and no C), and p.798 is
  // a 34-word notes page sitting immediately after an answered page, so it is a box-overflow
  // candidate rather than a page of its own.
  7: { base: 'endpoint-s07-neonatology', svar: 'PEDEP_S07_STAGED', title: 'SECTION 7: "Neonatology"',
       pages: '774-903', expect: 53 },

  // Section 8 is the smallest in part 1 and the most regular: pp.910-927 alternate strictly
  // question / answered, even / odd, nine pairs with no exception. The index puts the answered
  // pages at 911, 913, 915, 917, 919, 921, 923, 925, 927 -- nine, which is what the contents page
  // prints, and the two agreeing is rare enough to be worth writing down rather than trusted.
  // p.904 and p.928 are thin dividers (1 and 3 words); pp.905-909 are five HIGHLIGHTED PROSE pages
  // (69-95 words, yellow 1044-2980, NO lettered options) sitting between the divider and the first
  // question -- an allergy preamble, not questions, but LOOK at one before accepting that.
  // ⚠️ `options-differ` on p.921 (BCDE), p.925 and p.927 (ACDE): OCR dropped an option letter on
  // one pass. It drops a different line at each resolution, so read the page, not the index.
  8: { base: 'endpoint-s08-allergy', svar: 'PEDEP_S08_STAGED', title: 'SECTION 8: "Allergy"',
       pages: '904-928', expect: 9 },

  // The last content section of part 1, and the largest after section 3. Measured off the index
  // 2026-09-03: pp.929-1156 hold 96 `answered`, 95 `question` and 37 `notes` pages.
  //
  // ⚠️ 95, NOT THE 96 THE INDEX COUNTS -- SETTLED ON THE IMAGES 2026-09-03, DO NOT RE-OPEN.
  // The index scored 96 `answered` against 95 `question` pages, and the whole discrepancy was
  // ONE page: p.938, sitting alone inside a 37-page prose block (pp.929-937 before it, 939-965
  // after it), 29 pages before the first real question. pp.936-939 were rendered and read:
  // p.936 is meningitis treatment/complications/prophylaxis, p.937 viral meningitis, p.938
  // ENCEPHALITIS, p.939 specific bacterial infections -- one continuous run of highlighted study
  // notes, and NOT ONE of them prints a lettered option. p.938 is a prose page the yellow-measure
  // classifier called `answered`; its `few-options` flag was the honest signal, since a page with
  // no options at all looks like a page missing most of them.
  // With p.938 out, the section is perfectly regular: pp.967-1155 alternate question/answered on
  // a +2 with no exception -- 95 answered pages, exactly the `question` count. p.967 was rendered
  // and confirmed as a real answered question page, so the run's start is proved, not assumed.
  // p.1156 is the closing divider.
  //
  // ⚠️ 22 of the answered pages carry `options-differ` and 3 carry `few-options`. In section 8
  // every such flag was OCR dropping a line at one resolution, not the book. HERE IT IS DIFFERENT:
  // part A alone found SEVEN pages that genuinely print only four options (pp.967, 971, 973, 979,
  // 991, 999, 1013). The flag still means "look at that page" and never "there is a fault" -- but
  // in this section looking sometimes confirms it. 4-option entries are legitimate; the app holds
  // 2 to 10.
  9: { base: 'endpoint-s09-infection', svar: 'PEDEP_S09_STAGED', title: 'SECTION 9: "Infection and Immunity"',
       pages: '929-1156', expect: 95 },

  // ⚠️ SECTION 10 IS A MODEL EXAM, NOT A CONTENT SECTION, and three things about it differ.
  //   1. EVERY QUESTION IS PRINTED TWICE -- once blank in the paper, once with the yellow key in
  //      the answer section. `index.json` classes them `question` and `answered` respectively.
  //      STAGE FROM THE `answered` PAGE ONLY. Staging the blank printing loses the key.
  //   2. IT IS MIXED-TOPIC. Entries land across many chapters, so `chapter` below is a label, not
  //      a constraint -- val-pd-ep.js validates each entry's chapter against modules.js and does
  //      not read this field.
  //   3. MUCH OF IT REPRINTS THE BODY. Measured 2026-09-03 over all 379 exam pages by OCR token
  //      overlap against the 445 live stems: 114 score >=0.90, 172 >=0.70, 207 BELOW 0.70. The
  //      expected reprint rate is real but it is NOT "mostly", which is what the record said
  //      before it was measured. `expect` below is the answered-page count, an upper bound on
  //      questions -- an explanation that overflows onto its own page carries yellow and is
  //      counted here as answered (p.1811 is a confirmed instance). Read the pages; trust no count.
  10: { base: 'endpoint-s10-mfe1', svar: 'PEDEP_S10_STAGED', title: 'MODEL FINAL EXAM 1',
        pages: '1157-1321', expect: 80 },

  // Model Final Exam 2. All three notes above apply unchanged. Band measured from index.json on
  // 2026-09-04, not copied from the journal, which had both ends off by one: the exam's first
  // `question` sheet is p.1323 and its last `answered` sheet is p.1481, with MFE 3 opening at
  // p.1484. 79 answered / 79 question / one `notes` interruption at p.1471. Option counts on the
  // answered pages run 4:22, 5:57 -- so a five-option ladder is the norm here, unlike §10.
  11: { base: 'endpoint-s11-mfe2', svar: 'PEDEP_S11_STAGED', title: 'MODEL FINAL EXAM 2',
        pages: '1323-1483', expect: 79 },

  // Model Final Exam 3. All three notes on Section 10 apply unchanged. Band measured from
  // index.json on 2026-09-04: 161 pages from p.1483 to p.1643 hold 79 `question`, 80 `answered`
  // and 2 `notes`. ANSWERED IS ONE HIGHER THAN QUESTION, AND THE EXTRA SHEET IS AN EXTRA QUESTION,
  // NOT AN OVERFLOWING BOX. That inference was made from the index on 2026-09-04 and CORRECTED
  // FROM THE PAGES on 2026-09-05: p.1605 and p.1606 are two complete, unrelated questions, each
  // with its own stem, its own ladder, its own yellow key and its own closed box. Nothing overflows
  // anywhere in this section and no row here takes `box`. What p.1606 lacks is a BLANK twin --
  // p.1607 is the blank printing of the p.1608 question -- so one question of the eighty is printed
  // once instead of twice, which is exactly why `answered` exceeds `question` by one.
  // THE SECTION HOLDS 80 QUESTIONS and `expect` is the answered-sheet count. The printed numbering
  // proves it from both ends: the answered run skips 52 (p.1585 prints 51, p.1587 prints 53, and
  // blank p.1586 carries that question as 52), then prints 63 TWICE (p.1606 duodenal atresia,
  // p.1608 neonatal obstruction), which closes the offset so that p.1642 prints 80 as the eightieth
  // question. An older plan predicted 80 for reasons nobody had measured; it was right by accident.
  // p.1643 is not a divider in any useful sense -- it is a full-bleed photograph carrying an Arabic
  // poem, and p.1644 is the Model Final Exam 4 title page.
  12: { base: 'endpoint-s12-mfe3', svar: 'PEDEP_S12_STAGED', title: 'MODEL FINAL EXAM 3',
        pages: '1484-1643', expect: 80 },

  // Model Final Exam 4. All three notes on Section 10 apply unchanged. Band measured from
  // index.json on 2026-09-05: 161 pages from p.1644 to p.1804 hold 80 `question`, 80 `answered`
  // and 1 `notes`. THIS SECTION IS PERFECTLY REGULAR WHERE 12 WAS NOT: p.1644 is the exam's title
  // page, p.1645 is the first blank printing, p.1646 the first answered sheet, and every one of the
  // 79 gaps between consecutive answered pages is exactly 2 -- so every question is printed twice,
  // question and answered counts agree, and the last answered sheet is p.1804. Nothing here needs
  // the "extra answered sheet" reasoning that section 12 required.
  // ⚠️ THE INDEX IS THE INSTRUMENT AND IT HAS BEEN CHECKED AGAINST THE THREE SECTIONS ALREADY
  // CLOSED: it returns 80 answered for §10 (staged 80), 79 for §11 (staged 79) and 80 for §12
  // (staged 80). It has never yet been wrong on this book. That is a reason to start from it, not
  // a reason to skip reading the pages -- §12's printed numbering skipped 52 and printed 63 twice
  // without the index noticing either, because the index counts sheets and not numbers.
  13: { base: 'endpoint-s13-mfe4', svar: 'PEDEP_S13_STAGED', title: 'MODEL FINAL EXAM 4',
        pages: '1644-1804', expect: 80 },
};

const secNum = process.argv[2];
const doWrite = process.argv.includes('--write');
const cfg = SEC[secNum];
if (!cfg) { console.error('usage: node merge-parts-ep.js <' + Object.keys(SEC).join('|') + '> [--write]'); process.exit(2); }

// ---- find the halves ----
const parts = fs.readdirSync(QB)
  .filter(f => f.startsWith(cfg.base + '.part-') && f.endsWith('.js'))
  .sort();
if (!parts.length) { console.error('no ' + cfg.base + '.part-X.js found'); process.exit(2); }
console.log('halves: ' + parts.join(', '));

// ---- load each half, commas restored ----
const all = [];
const bodies = [];
for (const f of parts) {
  const raw = fs.readFileSync(QB + f, 'utf8').trim();
  const body = raw.split('}' + BLANK + '{').join('},' + BLANK + '{');
  let arr;
  try { arr = (new Function('return [' + body + ']'))(); }
  catch (e) { console.error(f + ' DOES NOT PARSE: ' + e.message); process.exit(2); }
  console.log('  ' + f + ': ' + arr.length + ' entries, n ' + arr[0].n + '..' + arr[arr.length - 1].n);
  bodies.push(body);
  all.push(...arr);
}

// ---- the checks that have caught something before ----
const fail = [];
if (all.length !== cfg.expect) fail.push('merged ' + all.length + ' entries, section expects ' + cfg.expect);
all.forEach((q, i) => {
  const at = 'n=' + q.n + ' (p.' + q.p + ')';
  if (q.n !== i + 1) fail.push(at + ': n is not the position, expected ' + (i + 1));
  if (!Array.isArray(q.opts) || q.opts.length < 2) fail.push(at + ': ' + (q.opts || []).length + ' options');
  // ⚠️ `key` is a ZERO-BASED index, matching the app's own `answer` and sections 1 and 2.
  // Section 3 was first staged 1-based -- the brief said so and both agents complied -- and was
  // converted here on 2026-09-03. val-pd-ep.js compares q.answer to the staged key with NO
  // conversion, so a 1-based staging file drafts every answer one option too far AND PASSES
  // EVERY CHECK: nothing in the harness knows which option is actually correct. There is no
  // sentinel for "no highlight" -- 0 is the first option. A page with nothing highlighted is
  // an adjudication, recorded in `note`, not a magic key value.
  if (typeof q.key !== 'number') fail.push(at + ': key is not numeric -- it must be a 0-based index, never a letter');
  else if (q.key < 0 || q.key >= q.opts.length) fail.push(at + ': key ' + q.key + ' out of range 0..' + (q.opts.length - 1));
  if (typeof q.stem !== 'string' || q.stem.length < 15) fail.push(at + ': stem missing or too short');
  if (typeof q.expl !== 'string') fail.push(at + ': expl must be a string ("" where the page prints no box)');
  if (typeof q.p !== 'number') fail.push(at + ': p must be the numeric PDF page');
  // ⚠️ `/^[A-J][.)]\s/` alone is WRONG on a microbiology bank: it fires on every abbreviated
  // genus whose initial happens to fall in A-J -- "H. influenzae", "E. coli", "C. difficile",
  // "B. pertussis". Section 9 tripped it at n=76 opt 2 on a perfectly correct option list.
  // The discriminator is POSITION: a printed option letter is the letter for that option's own
  // slot (A at index 0, B at index 1, ...). A genus initial almost never coincides with its slot,
  // and when it does the following word is a lowercase species epithet. Both tests must pass
  // before this is called a stray prefix.
  (q.opts || []).forEach((o, k) => {
    const m = /^([A-J])[.)]\s+(.)/.exec(o);
    if (!m) return;
    const positional = m[1] === String.fromCharCode(65 + k);
    const speciesEpithet = m[2] === m[2].toLowerCase() && m[2] !== m[2].toUpperCase();
    if (positional && !speciesEpithet) fail.push(at + ' opt ' + (k + 1) + ': carries a printed letter prefix, strip it');
  });
  if (q.fig && !q.figAlt) fail.push(at + ': fig without figAlt');
});
// pages must be strictly increasing -- a repeated or out-of-order page means a half was misassembled
for (let i = 1; i < all.length; i++) {
  if (all[i].p <= all[i - 1].p) fail.push('page order breaks at n=' + all[i].n + ': p.' + all[i].p + ' follows p.' + all[i - 1].p);
}
if (fail.length) { console.error(NL + 'FAILED:'); fail.forEach(f => console.error('  ' + f)); process.exit(1); }

console.log(NL + 'merged ' + all.length + ' entries, n 1..' + all.length + ', pp.' + all[0].p + '-' + all[all.length - 1].p);
console.log('no printed box (expl:""): ' + (all.filter(q => q.expl === '').map(q => 'n' + q.n).join(' ') || 'none'));
console.log('pr != n: ' + (all.filter(q => q.pr !== q.n).map(q => 'n' + q.n + ' prints ' + q.pr).join(', ') || 'none'));
console.log('boxes on their own page: ' + (all.filter(q => q.box).map(q => 'n' + q.n + ' -> p.' + q.box).join(', ') || 'none'));
console.log('figures: ' + (all.filter(q => q.fig).map(q => 'n' + q.n).join(' ') || 'none'));
console.log('notes set on: ' + (all.filter(q => q.note).map(q => 'n' + q.n).join(' ') || 'none'));
console.log('option counts: ' + JSON.stringify(all.reduce((m, q) => { m[q.opts.length] = (m[q.opts.length] || 0) + 1; return m; }, {})));

if (!doWrite) { console.log(NL + 'DRY RUN -- nothing written'); process.exit(0); }

const header = '/* ===========================================================================' + NL +
  '   ENDPOINT - Pediatrics endpoint part1.pdf - ' + cfg.title + NL +
  '   Verbatim staging record. PDF pages ' + cfg.pages + '; PDF page = printed page, offset zero.' + NL +
  '   Merged from ' + parts.join(' + ') + ' by merge-parts-ep.js.' + NL +
  '   ' + NL +
  '   Every question is printed TWICE: an unanswered page, then the ANSWERED page with the key' + NL +
  '   highlighted in yellow and (usually) a bordered explanation box. Only answered pages are' + NL +
  '   staged. `n` is the true sequential index, `pr` what the page prints, `p` the PDF page,' + NL +
  '   `key` a ZERO-BASED INDEX into `opts` (never a letter), matching the app field `answer`,' + NL +
  '   `expl` the printed box verbatim or "".' + NL +
  '   =========================================================================== */' + NL +
  'var ' + cfg.svar + ' = [' + NL + NL;

const out = header + bodies.join(',' + BLANK) + NL + NL + '];' + NL;

// prove it before writing
try { const m = {}; (new Function('m', out + ';m.a = ' + cfg.svar + ';'))(m); if (m.a.length !== all.length) throw new Error('array holds ' + m.a.length); }
catch (e) { console.error('OUTPUT DOES NOT PARSE: ' + e.message); process.exit(2); }

fs.writeFileSync(QB + cfg.base + '.array.js', out);
console.log(NL + 'written: ' + cfg.base + '.array.js (' + out.length + ' chars, ' + all.length + ' entries)');
