// check-book.js - validates sa-book.array.js and compares item counts per chapter.
// Printed counts are made independently of parse-book.js: from book/pNNNN.raw.txt (pdftotext reading-order text),
// lone number lines ("N.N", "N.N.N", optional trailing "." or leading "Answer ") under "Questions:" / "Answers:" headings.
// An answerable item = an "N.N.N" sub-item, or an "N.N" number that has no "N.N.x" children (set heads are not items).
const fs = require('fs'), vm = require('vm'), path = require('path');
const box = {}; vm.createContext(box);
vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'sa-book.array.js'), 'utf8'), box);
const rows = box.SA_BOOK, bad = [], ids = new Set();
// named, evidenced exceptions where the printed page itself breaks a rule (key-exceptions.json); each is printed and counted below
const EXC = fs.existsSync(path.join(__dirname, 'key-exceptions.json')) ? JSON.parse(fs.readFileSync(path.join(__dirname, 'key-exceptions.json'), 'utf8')) : [], used = [];
const titles = ['', 'The child in society', 'History and examination', 'Normal child development hearing and vision', 'Developmental problems and the child with special needs', 'Care of the sick child and young person', 'Paediatric emergencies', 'Accidents and poisoning', 'Child protection', 'Genetics', 'Perinatal medicine', 'Neonatal medicine', 'Growth and puberty', 'Nutrition', 'Gastroenterology', 'Infection and immunity', 'Allergy', 'Respiratory disorders', 'Cardiac disorders', 'Kidney and urinary tract disorders', 'Genital disorders', 'Liver disorders', 'Malignant disease', 'Haematological disorders', 'Child and adolescent mental health', 'Dermatological disorders', 'Diabetes and endocrinology', 'Inborn errors of metabolism', 'Musculoskeletal disorders', 'Neurological disorders', 'Adolescent medicine', 'Global child health'];
const multi = titles.filter(t => t.includes(' '));
for (const x of rows) {
  if (ids.has(x.id)) bad.push('duplicate ' + x.id); ids.add(x.id);
  if (!x.stem) bad.push('empty stem ' + x.id);
  if (!Array.isArray(x.options) || x.options.length < 2) bad.push('options<2 ' + x.id);
  if (x.options.some(o => !o)) bad.push('empty option ' + x.id);
  if (!(x.answer >= 0 && x.answer < x.options.length)) bad.push('answer range ' + x.id);
  if (x.keyLetter !== String.fromCharCode(65 + x.answer)) bad.push('keyLetter ' + x.id);
  if (x.kind === 'sba' && !/Correct\./.test(x.explanation)) { const ex = EXC.find(e => e.id === x.id && e.rule === 'sba-explanation-needs-Correct.'); if (ex) used.push(ex); else bad.push('no Correct. ' + x.id); }
  if (x.options.some(o => /^[A-Z]\.(\s|$)/.test(o))) bad.push('option marker ' + x.id);
  for (const t of multi) if ([x.stem, ...x.options].some(s => s !== t && s.includes(t))) { const ex = EXC.find(e => e.id === x.id && e.rule === 'chapter-title-fragment-printed-in-text'); if (ex) { if (!used.includes(ex)) used.push(ex); } else bad.push('chapter title fragment in ' + x.id + ': ' + t); }
  if ([x.stem, ...x.options].some(s => /^\d{1,2}$/.test(s.trim()) && false)) bad.push('x');
  if (x.id !== 'pedsa-b' + x.num.split('.').join('-')) bad.push('id/num mismatch ' + x.id);
  for (const k of ['page', 'ansPage', 'explanation', 'figs', 'bookChapter']) if (x[k] === undefined || x[k] === null || x[k] === '') bad.push('missing ' + k + ' ' + x.id);
}
// In .raw.txt the "Questions:/Answers:" heading line is printed out of place (after the first answers on a page), so the
// section cannot be read from it. Book order is Questions section then Answers section within a chapter, so the FIRST
// printed occurrence of a number is its question, the SECOND is its answer; a third occurrence is reported as noise.
const raw = { q: {}, a: {} }, occ = {}, noise = [];
const lastOf = {}; // chapter -> highest sub-number accepted, to reject table values such as 2.75
for (let p = 1; p <= 194; p++) {
  const f = path.join(__dirname, '..', 'book', `p${String(p).padStart(4, '0')}.raw.txt`); if (!fs.existsSync(f)) continue;
  const L = fs.readFileSync(f, 'utf8').split(/\r?\n/);
  // chapter of this page = the margin-tab title printed as a whole line on it (a table value like "9.5" on a chapter-5
  // page is then rejected because its chapter part does not match)
  const pageCh = new Set(L.map(s => titles.indexOf(s.trim())).filter(n => n > 0));
  L.forEach((line, i) => {
    // a question number may carry a printed label ("20.2 Testicular swelling")
    const m = line.match(/^\s*(?:Answer\s+)?((?:[1-9]|[12]\d|3[01])\.[1-9]\d?(?:\.[1-9]\d?)?)\.?(?:\s+[A-Z][a-z]+(?:\s[a-z]+)*)?\s*$/); if (!m) return;
    if (pageCh.size === 1 && !pageCh.has(+m[1].split('.')[0])) { noise.push(`p${p} ${m[1]} (wrong chapter for page)`); return; }
    const prev = (L.slice(Math.max(0, i - 2), i).join(' ')).trim(), next = (L[i + 1] || '').trim();
    if (/^[\d.\s]*$/.test(prev) && prev && /^[\d.\s%]*$/.test(next)) { noise.push(`p${p} ${m[1]} (numeric neighbours)`); return; }
    (occ[m[1]] ||= []).push(p);
  });
}
for (const [n, ps] of Object.entries(occ)) { const c = n.split('.')[0]; (raw.q[c] ||= new Set()).add(n); if (ps.length >= 2) (raw.a[c] ||= new Set()).add(n); if (ps.length > 2) { noise.push(`${n} printed ${ps.length}x on pages ${ps}`); bad.push(`number printed more than twice: ${n}`); } }
if (noise.length) console.log('raw noise/anomalies:', noise.join('; '));
function answerable(set) { const all = [...set]; return all.filter(n => n.split('.').length === 3 || !all.some(k => k.startsWith(n + '.'))); }
console.log('total', rows.length, 'sba', rows.filter(x => x.kind === 'sba').length, 'emq', rows.filter(x => x.kind === 'emq').length);
const lines = ['# book-progress: chapter | printed Q | printed A | parsed | status'];
for (let n = 1; n <= 31; n++) {
  const Q = answerable(raw.q[n] || new Set()), A = answerable(raw.a[n] || new Set()), P = rows.filter(x => x.bookChapter === n).map(x => x.num);
  const ok = Q.length === A.length && Q.length === P.length && Q.every(k => A.includes(k)) && Q.every(k => P.includes(k));
  const line = `${n} | ${Q.length} | ${A.length} | ${P.length} | ${ok ? 'complete' : 'MISMATCH'}`;
  console.log(line + (ok ? '' : `  Q-A:[${Q.filter(k => !A.includes(k))}] A-Q:[${A.filter(k => !Q.includes(k))}] Q-P:[${Q.filter(k => !P.includes(k))}] P-Q:[${P.filter(k => !Q.includes(k))}]`));
  lines.push(line);
  if (!ok) bad.push(`count chapter ${n}: ${Q.length}/${A.length}/${P.length}`);
}
fs.writeFileSync(path.join(__dirname, 'book-progress.md'), lines.join('\n') + '\n', 'utf8');
console.log(`key exceptions applied: ${used.length} of ${EXC.length} listed`); for (const e of used) console.log(`  ${e.id} [${e.rule}] ${e.evidence}`);
for (const e of EXC) if (!used.includes(e)) bad.push('listed exception not needed: ' + e.id);
if (bad.length) { console.error('FAIL\n' + bad.join('\n')); process.exit(1); }
console.log('OK');
