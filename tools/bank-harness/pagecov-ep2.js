// PAGE COVERAGE — the closing test for the peds ENDPOINT PART 2 bank.
//
//   node tools/bank-harness/pagecov-ep2.js
//
// Run from the repo root. Read-only: it opens the three live peds banks and the OCR page index and
// writes nothing.
//
// WHAT IT ASKS, AND WHY NOTHING ELSE ASKS IT
// -----------------------------------------
// Every other instrument in this harness checks the bank against the bank. The validator checks a
// draft against its staging array, the splicer checks the array it just wrote, and the sweeps
// compare entries with each other. None of them reads the book. This test does the one thing they
// cannot: it takes every page the OCR classifier marked `answered` — a page with a highlighted key
// printed on it — and asks whether any live entry cites it.
//
// ⚠️ AN ADJUDICATION IS NOT A CITATION. This is the finding that closed part 2, and it is the
// reason to keep running this. Six pages had been read, compared and ruled reprints during their
// section passes, with the ruling written into progress/resume-peds-endpoint-part2.md or into
// content/peds/qb-pages/endpoint-p2-s15-fold-adjudication-D.md — and then never appended to the
// surviving entry's `source`. The work was done and the record of it was not. A validator cannot
// see that, because an adjudication note is not one of its inputs.
//
// ⚠️⚠️ THE FIRST TWO VERSIONS OF THIS TEST WERE BOTH WRONG, IN THE SAME DIRECTION — THEY
// UNDERSTATED COVERAGE AND MANUFACTURED A CRISIS. Written down because the next stream will write
// this test again and will reach for the same two shortcuts:
//
//   1. Matching only the literal "part2.pdf p.<n>" reported 451 uncited pages. A `source` names the
//      book once and then lists further pages bare — "(reprinted at p.1024)", "; reprinted p.137" —
//      so the WHOLE source field has to be scanned for page numbers, not just the run after the
//      filename.
//   2. Reading only questions.peds.ep2.js still understated it. A part-1/part-2 duplicate is a
//      WITHIN-bank fold — both files carry bank:'endpoint', the split is two source PDFs and not two
//      banks — so the part-2 citation is appended to whichever entry already existed, and for those
//      it lives in questions.peds.ep.js. 23 `part2` mentions there, 0 in House.
//
// So: every page number in an ep2 source is a part-2 page, and in the other two files only the page
// numbers in the span following a "part2.pdf" mention are, stopping at the next .pdf named in the
// same source.
//
// HOW TO READ THE RESULT
// ----------------------
// The two residual lists below are MEASURED CLASSIFIER ERROR, running in both directions, and every
// page in them was opened on the image. They are not debt. A run that reproduces them exactly is a
// clean run. A page appearing that is NOT in them is the finding — either an entry lost a citation,
// or the book prints a question no entry carries.
const fs = require('fs');
const vm = require('vm');

// Uncited and classified `answered`: revision-notes prose carrying a stray highlight. Read on the
// images: p.87 types of cerebral palsy · 157/159/161/162 chromosomal and Mendelian inheritance ·
// 255/256/257 haemoglobinopathies · 613/617/618/619 ASD, TOF, TGA, Eisenmenger · 1082 T1DM
// management · 1977/1984 the HUS and DIC review prose.
// ⚠️ A page is `answered` because a highlighted key is visible on it, never because the index says
// so — a lettered summary slide carries yellow and reads as options.
const KNOWN_UNCITED = [87, 157, 159, 161, 162, 255, 256, 257, 613, 617, 618, 619, 1082, 1977, 1984];

// Cited but classified `notes` or `question`: the same defect running the other way, and the
// expensive direction — an undercount of question pages is invisible unless something else finds
// the question. Part 1 measured the same shape at pp.1889/1890.
const KNOWN_EXTRA = [20, 179, 312, 321, 636, 689, 962, 1037, 1098, 1129, 1175, 1204, 1207, 1531];

const IDX = 'content/peds/qb-pages/ocr/ep2/index.json';
const BANKS = [
  { file: 'app/data/questions.peds.ep2.js', svar: 'Q_PEDS_EP2', tag: 'ep2', whole: true },
  { file: 'app/data/questions.peds.ep.js', svar: 'Q_PEDS_EP', tag: 'ep1-fold', whole: false },
  { file: 'app/data/questions.peds.js', svar: 'Q_PEDS', tag: 'house-fold', whole: false },
];

const idx = JSON.parse(fs.readFileSync(IDX, 'utf8'));
const byPage = new Map(idx.map(r => [r.page, r]));
const answered = new Set(idx.filter(r => r.answered).map(r => r.page));

// "p.1024", "pp.1157-1804" and the en-dash form all name pages; a range names all of them.
const PAGE = /pp?\.\s*(\d+)(?:\s*[-–]\s*(\d+))?/g;
const cited = new Map();               // page -> the file that cited it

function addPages(text, tag) {
  PAGE.lastIndex = 0;
  let m;
  while ((m = PAGE.exec(text)) !== null) {
    const a = +m[1], b = m[2] ? +m[2] : +m[1];
    for (let p = a; p <= b; p++) if (!cited.has(p)) cited.set(p, tag);
  }
}

const ctx = {};
vm.createContext(ctx);
let ep2Entries = 0;

for (const B of BANKS) {
  vm.runInContext(fs.readFileSync(B.file, 'utf8'), ctx);
  const A = ctx[B.svar];
  if (!Array.isArray(A)) { console.error('FAIL: ' + B.svar + ' did not load from ' + B.file); process.exit(1); }
  // ⚠️ Array.filter SKIPS SPARSE HOLES. Index-walk, always.
  for (let i = 0; i < A.length; i++) {
    if (!(i in A)) continue;
    const s = A[i].source || '';
    if (B.whole) { ep2Entries++; addPages(s, B.tag); continue; }
    let at = s.indexOf('part2.pdf');
    while (at !== -1) {
      const rest = s.slice(at + 'part2.pdf'.length);
      const nextBook = rest.indexOf('.pdf');
      addPages(nextBook === -1 ? rest : rest.slice(0, nextBook), B.tag);
      at = s.indexOf('part2.pdf', at + 1);
    }
  }
}

const from = t => [...cited.values()].filter(v => v === t).length;
const miss = [...answered].filter(p => !cited.has(p)).sort((x, y) => x - y);
const missQ = miss.filter(p => (byPage.get(p) || {}).kind === 'answered');
const missN = miss.filter(p => (byPage.get(p) || {}).kind !== 'answered');
const extra = [...cited.keys()].filter(p => !answered.has(p)).sort((x, y) => x - y);

console.log('ep2 entries ' + ep2Entries);
console.log('part-2 pages cited: ' + cited.size +
            '  (from ep2 ' + from('ep2') +
            ', folded into part 1 ' + from('ep1-fold') +
            ', folded into House ' + from('house-fold') + ')');
console.log('classifier `answered` pages: ' + answered.size);
console.log('');
console.log('UNCITED, classifier kind "answered": ' + missQ.length + '  ' + JSON.stringify(missQ));
console.log('UNCITED, classifier kind "notes" (prose with a highlight): ' + missN.length);
console.log('cited but not classified answered: ' + extra.length + '  ' + JSON.stringify(extra));

// The verdict. Only a page outside the two measured lists is a finding.
const same = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);
const newUncited = missQ.filter(p => KNOWN_UNCITED.indexOf(p) === -1);
const goneUncited = KNOWN_UNCITED.filter(p => missQ.indexOf(p) === -1);
const newExtra = extra.filter(p => KNOWN_EXTRA.indexOf(p) === -1);

console.log('');
if (same(missQ, KNOWN_UNCITED) && same(extra, KNOWN_EXTRA)) {
  console.log('CLEAN -- both residual lists match the pages that were opened and read. Part 2 is covered.');
  process.exit(0);
}
if (newUncited.length)
  console.log('FINDING: answered pages cited by no entry and never read: ' + JSON.stringify(newUncited) +
              '\n  Render each one. It is a lost citation or a question the bank does not carry.');
if (goneUncited.length)
  console.log('CHANGED: pages that were uncited and now are cited: ' + JSON.stringify(goneUncited) +
              '\n  Expected only if someone deliberately cited them. Update KNOWN_UNCITED with the reason.');
if (newExtra.length)
  console.log('CHANGED: newly cited pages the classifier did not call answered: ' + JSON.stringify(newExtra) +
              '\n  The cheap direction, but check the citation names a real page.');
process.exit(1);
