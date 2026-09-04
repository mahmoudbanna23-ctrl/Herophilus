// Merge a peds ENDPOINT PART 2 section's staging halves into the one array file the harness reads.
//   node tools/bank-harness/merge-parts-ep2.js <section>            # dry run
//   node tools/bank-harness/merge-parts-ep2.js <section> --write
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

// PART 2's SECTIONS. `pages` and `expect` are measured off content/peds/qb-pages/ocr/ep2/index.json
// and agreed with the user 2026-09-04; the reasoning behind each is in
// content/peds/qb-pages/endpoint-p2-section-map.md.
//
// ⚠️ `expect` IS THE ANSWERED-PAGE COUNT, WHICH IS AN UPPER BOUND ON QUESTIONS, NOT A QUESTION
// COUNT. A summary slide whose bullets are lettered ("A. Beta-Thalassemia") carries yellow and
// reads as options, so `answered` runs high; 15 such pages are listed in the section map. An
// explanation box that overflows onto its own page also carries yellow and is counted here.
// A section that merges short of `expect` is a page to LOOK AT, never automatically a fault --
// but it must be explained on the image before the merge is forced through.
const SEC = {
  1: { base: 'endpoint-p2-s01-normal-dev', svar: 'PEDEP2_S01_STAGED', title: 'SECTION 1: "Normal Development"',
       pages: '5-75', expect: 28 },
  // ⚠️ 29, NOT the index's 30. p.87 classifies as `answered` and has no unanswered twin; it was
  // read on the image twice -- once building the section map, once as the staging pass's first act
  // -- and both times it is a NOTES SLIDE, "Types of CP", whose lettered sub-bullets (B. Dyskinetic
  // CP, C. Ataxic CP, D. Mixed CP) carry yellow and read as options. No stem, no prompt. This is
  // the "`answered` over-counts" shape the header describes, caught on a real page: the number was
  // lowered because a page was looked at, never to make a merge pass.
  2: { base: 'endpoint-p2-s02-dev-problems', svar: 'PEDEP2_S02_STAGED', title: 'SECTION 2: "Developmental problems"',
       pages: '76-154', expect: 29 },
  // expect LOWERED 42 -> 38 on 2026-09-04, after four pages were read on the image and are
  // lettered SUMMARY SLIDES, not questions: p.157 Chromosomal Disorders, p.159 Turner Syndrome,
  // p.161 Mendelian Inheritance, p.162 Autosomal Recessive. 42 answered pages - 4 = 38.
  // The book's own printed numbering agrees independently: half A prints 1-16, half B prints
  // 17-36 with 24 and 25 each printed twice, so 36 distinct numbers + 2 repeats = 38.
  // Two instruments, one from the images and one from the page furniture, and they meet.
  3: { base: 'endpoint-p2-s03-genetics', svar: 'PEDEP2_S03_STAGED', title: 'SECTION 3: "Genetics"',
       pages: '155-244', expect: 38 },
  // ⚠️ 90, NOT the index's 95, LOWERED 2026-09-04 after all four staging parts closed. Every one
  // of the five is a page that was opened and named, not a shortfall that was waved through --
  // and between them they exhibit three of the four known structural causes:
  //   255, 256, 257  lettered content slides; their bullets carry yellow and read as options
  //   322            the index's own tag is WRONG -- no highlight, no box, an ordinary unanswered
  //                  printing of Q27. p.323 is the real answered page. A defect in the instrument,
  //                  not something printed on the page.
  //   420            the second half of the exact duplicate reprint at 419+420; staged once from
  //                  the fuller printing, per "record, never decide".
  // ⚠️ The two overflow boxes in this section (312, 321) are NOT in this list: the index classified
  // them `notes`, so they never inflated `expect` in the first place. Neither did p.309, the
  // teaching slide. The overflow cause is real but it does not show up here -- which is exactly why
  // a shortfall has to be reconciled page by page and never by subtracting a category.
  4: { base: 'endpoint-p2-s04-haematology', svar: 'PEDEP2_S04_STAGED', title: 'SECTION 4: "Hematological Disorders"',
       pages: '245-451', expect: 90 },
  5: { base: 'endpoint-p2-s05-respiratory', svar: 'PEDEP2_S05_STAGED', title: 'SECTION 5: "Respiratory disorders"',
       pages: '452-606', expect: 65 },
  // ⚠️ Section 6 was 85 until 2026-09-05 and 85 was WRONG -- it is the index's `answered` count, and
  // four of those pages are not questions. pp.613, 617, 618 and 619 sit inside the opening teaching
  // notes and carry no printed number, no stem and no lettered option list; they were rendered and
  // read against 612/614/615/616/620 and are outline slides in the same template. `answered` is only
  // a yellow-pixel threshold and this book's notes slides are yellow-heavy enough to cross it. They
  // are also the only four pages in the section with no unanswered twin, which is what raised it.
  // The section's two overflow boxes (636, 689) are a separate matter and never inflated `expect`:
  // the index called them `notes`, and both were found by the staging halves applying the brief's
  // §3a rule, not by any count. A shortfall is reconciled page by page, never by subtracting a
  // category -- that is how both of these were told apart from each other.
  6: { base: 'endpoint-p2-s06-cardiac', svar: 'PEDEP2_S06_STAGED', title: 'SECTION 6: "Cardiac disorders"',
       pages: '607-792', expect: 81 },
  7: { base: 'endpoint-p2-s07-renal', svar: 'PEDEP2_S07_STAGED', title: 'SECTION 7: "Kidney & Urinary Tract Disorders"',
       pages: '793-929', expect: 55 },
  8: { base: 'endpoint-p2-s08-neuro', svar: 'PEDEP2_S08_STAGED', title: 'SECTION 8: "Neurological disorders"',
       pages: '930-1078', expect: 60 },
  9: { base: 'endpoint-p2-s09-endocrine', svar: 'PEDEP2_S09_STAGED', title: 'SECTION 9: "Diabetes & Endocrinology"',
       pages: '1079-1145', expect: 27 },
  10: { base: 'endpoint-p2-s10-liver', svar: 'PEDEP2_S10_STAGED', title: 'SECTION 10: "Liver disorders"',
        pages: '1146-1210', expect: 20 },
  11: { base: 'endpoint-p2-s11-malignant', svar: 'PEDEP2_S11_STAGED', title: 'SECTION 11: "Malignant diseases"',
        pages: '1211-1269', expect: 23 },

  // ⚠️ SECTIONS 12-15 ARE THE FOUR MODEL FINAL EXAMS. Three things differ from a body section:
  //   1. They are MIXED-TOPIC -- an entry lands in whatever chapter its content belongs to.
  //   2. MUCH OF EACH REPRINTS THE BODY. Part 1's Model Final Exam 1 ran 30 reprints of 80.
  //      Run reprint-pd-ep2.js over the range BEFORE drafting; a reprint extends `source` and
  //      gets no new entry. It is STAGED ANYWAY -- a staging file short of its page count fails
  //      the splice gate, and folds are always a separate pass afterwards.
  //   3. `expect` is again the answered-page count, so an overflowed explanation box inflates it.
  12: { base: 'endpoint-p2-s12-mfe1', svar: 'PEDEP2_S12_STAGED', title: 'MODEL FINAL EXAM 1',
        pages: '1270-1431', expect: 80 },
  13: { base: 'endpoint-p2-s13-mfe2', svar: 'PEDEP2_S13_STAGED', title: 'MODEL FINAL EXAM 2',
        pages: '1432-1594', expect: 80 },
  14: { base: 'endpoint-p2-s14-mfe3', svar: 'PEDEP2_S14_STAGED', title: 'MODEL FINAL EXAM 3',
        pages: '1595-1756', expect: 80 },
  15: { base: 'endpoint-p2-s15-mfe4', svar: 'PEDEP2_S15_STAGED', title: 'MODEL FINAL EXAM 4',
        pages: '1757-1921', expect: 80 },

  // ⚠️ SECTIONS 16 AND 17 PRINT THE ANSWERED PAGE ONLY -- there is no unanswered twin. Verified
  // by eye on p.1923 and p.1949. So `expect` is a true question count here, and the missing twin
  // is not a defect in the index. Both are mixed-topic.
  16: { base: 'endpoint-p2-s16-recent-mod', svar: 'PEDEP2_S16_STAGED', title: 'RECENTLY MODIFIED QUESTIONS',
        pages: '1922-1940', expect: 18 },
  17: { base: 'endpoint-p2-s17-recent-add', svar: 'PEDEP2_S17_STAGED', title: 'RECENTLY ADDED QUESTIONS',
        pages: '1941-1949', expect: 8 },

  // SECTION 18, Exam Night Review, pp.1950-1992, HAS NO ENTRY AND MUST NOT GET ONE: 43 pages of
  // prose revision cards, no questions at all. The 2 pages that classify as `answered` (1977,
  // 1984) are revision cards with lettered bullets, read and confirmed. Leaving it out means
  // `node merge-parts-ep2.js 18` fails loudly instead of inviting a section that does not exist.
};

const secNum = process.argv[2];
const doWrite = process.argv.includes('--write');
const cfg = SEC[secNum];
if (!cfg) { console.error('usage: node merge-parts-ep2.js <' + Object.keys(SEC).join('|') + '> [--write]'); process.exit(2); }

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
  '   ENDPOINT - Pediatrics endpoint part2.pdf - ' + cfg.title + NL +
  '   Verbatim staging record. PDF pages ' + cfg.pages + '; PDF page = printed page, offset zero.' + NL +
  '   Merged from ' + parts.join(' + ') + ' by merge-parts-ep2.js.' + NL +
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
