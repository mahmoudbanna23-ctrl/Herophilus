// Build the page index pagecov-oph.js --part 2 reads: content/ophtho/qb-pages/ocr/ep/index.part2.json.
// Part 1 (PDF 6-1390) has an OCR index; part 2 (PDF 1391-2442) was staged by vision seats, so its
// index is derived from the six staging files (s22-s27).  A page is `answered` when a staged row
// says question_marked / question_single.  PDF 2330-2442 (s28, Night Review notes) was never staged
// (owner skipped it 2026-09-21): those pages are written answered:true, kind:'unstaged', so the
// coverage report lists them as an explicit deferral rather than passing them silently.
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const QB = path.join(ROOT, 'content', 'ophtho', 'qb-pages');
const OUT = path.join(QB, 'ocr', 'ep', 'index.part2.json');
const LOW = 1391, HIGH = 2442, STAGED_HIGH = 2329;

const pages = new Map();
for (const dir of fs.readdirSync(QB).filter(d => /^_s2[2-7]-work$/.test(d))) {
  for (const f of fs.readdirSync(path.join(QB, dir)).filter(f => /^oph-ep-p2-.*\.staging\.json$/.test(f))) {
    for (const r of JSON.parse(fs.readFileSync(path.join(QB, dir, f), 'utf8'))) {
      if (!Number.isInteger(r.pdf_page)) throw new Error(f + ': row without integer pdf_page');
      const marked = r.page_type === 'question_marked' || r.page_type === 'question_single';
      // Two sections share a boundary page (1857, 2023): answered if either run says so.
      pages.set(r.pdf_page, (pages.get(r.pdf_page) || false) || marked);
    }
  }
}

const index = [];
for (let p = LOW; p <= HIGH; p++) {
  const staged = p <= STAGED_HIGH;
  if (staged && !pages.has(p)) throw new Error('staging has no row for PDF page ' + p);
  const answered = staged ? pages.get(p) : true;
  index.push({
    page: p, yellow: answered && staged, answered, native_copy: false, words: 0, options: 0,
    flags: [staged ? 'from-staging' : 'unstaged'], kind: !staged ? 'unstaged' : answered ? 'answered' : 'other'
  });
}
fs.writeFileSync(OUT, JSON.stringify(index) + '\n', 'utf8');
console.log('wrote ' + OUT + ': ' + index.length + ' pages, ' + index.filter(r => r.kind === 'answered').length +
  ' answered, ' + index.filter(r => r.kind === 'unstaged').length + ' unstaged');
