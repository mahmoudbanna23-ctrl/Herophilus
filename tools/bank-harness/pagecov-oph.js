// OPHTHALMOLOGY ENDPOINT ONLY — PAGE-COVERAGE CLOSING TEST (read-only).
//   node tools/bank-harness/pagecov-oph.js --part <1|2> [--flip <pdfpage>]
// WARNING: neighbouring peds tools target DIFFERENT LIVE BANKS. Never substitute
// pagecov-ep2.js, val-pd-ep2.js, or splice-pd-ep2.js for the ophthalmology chain.
// --part 1 selects Q_OPHTHO_EP / questions.ophtho.ep.js / PDF 6-1390.
// --part 2 selects Q_OPHTHO_EP2 / questions.ophtho.ep2.js / PDF 1391-2442.
// Both endpoint files are read: a cross-part fold cites the surviving entry.
// The existing Q_OPHTHO bank is also read for explicitly attributed book spans,
// preserving the peds test's protection against citations folded into an older file.
// Nothing here writes any file, especially a pediatrics bank.
//
// AN ADJUDICATION IS NOT A CITATION. Six peds reprints were adjudicated but never
// appended to their survivors' sources. Scan EVERY p./pp. in a book's source span,
// including bare reprint citations and ranges, not just the page after its filename.
// The classifier errs BOTH ways: prose tagged answered, and real question pages
// tagged notes/question. The latter can silently hide questions. Two curated lists
// start EMPTY; every exception needs a PDF page, reason and evidence record, and
// every exception is printed on every run. An unadjudicated mismatch FAILS.
// This test cannot discover uncited questions also missed by the classifier.
// Unlike the original, answered:true with kind:"notes" is NOT silently excused.
//
// NUMBERING CONTRACT: OCR row.page is the one-based PDF page; source p./pp. names
// the PRINTED number. Through PDF 2150 they agree. At an unpinned first PDF page
// in 2151-2170, printed = PDF + 1. Comparing them without that flip is meaningless.
// --part 2 therefore REFUSES the whole closing score by default, even for stubs.
// --flip F asserts that F is the FIRST PDF page with the +1 offset; it does not
// measure or adjudicate F. printed F is absent; printed F+1 maps back to PDF F.
// Expand printed ranges then map EACH page; a range spanning the flip skips the
// nonexistent printed number F. An explicit singleton p.F is an error.
// Part 1 always has offset zero (brief's reference samples: PDF 6, 880, 1391).
//
// One continuous book => one shared OCR index, not one index per part:
// content/ophtho/qb-pages/ocr/ep/index.json (array of {page, answered, kind?, ...}).
// Missing/duplicate rows fail: an empty or partial OCR index cannot close a bank.
// Figure crops elsewhere in this chain use q-oph-ep-<page> for BOTH parts:
// peds part 2 restarts at 1, whereas this book's disjoint ranges never collide.
// Written using the file-writing tool, never a heredoc that can eat \\ and \s+.
'use strict';
const fs = require('fs'), path = require('path');
const { R, BOOK, TARGETS, parseArgs, loadArray } = require('./val-oph-ep.js');
const { SEC_P1, SEC_P2 } = require('./sec-oph.js');

// Each future record: { page: <PDF page>, reason: <specific classifier error>,
// evidence: <path/reference to the human page adjudication> }. No guessed exemptions.
const KNOWN_UNCITED = [];
const KNOWN_EXTRA = [];

function main(argv) {
  // --cites-pdf: every `source` page is already a PDF page (resume-ophtho-endpoint-B-exams.md, flip pin), so no
  // printed->PDF shift is applied.  Without it, the +1 flip pinned by --flip is applied to printed citations.
  const citesPdf = argv.includes('--cites-pdf');
  const { target, part, flip: pinned } = parseArgs(argv.filter(a => a !== '--cites-pdf'), 'pagecov');
  const flip = citesPdf ? Infinity : pinned;
  const SEC = part === '1' ? SEC_P1 : SEC_P2;
  const low = Math.min(...Object.values(SEC).map(s => s.pages[0]));
  const high = Math.max(...Object.values(SEC).map(s => s.pages[1]));
  if (low !== target.pages[0] || high !== target.pages[1]) throw new Error('part range and section table disagree');
  console.log('OPHTHALMOLOGY ONLY: part ' + part + ', PDF ' + low + '-' + high +
    ', selected bank ' + target.file + ' / ' + target.svar + ' (read-only)');
  if (part === '2' && flip === undefined)
    throw new Error('REFUSING TO SCORE ANY PAGE ABOVE 2150: printed and PDF page numbers disagree by one ' +
      'past an unpinned flip in PDF 2151-2170, so coverage comparison there is meaningless. ' +
      'Pin the FIRST shifted PDF page, then supply --part 2 --flip <pdfpage>. No partial closing score is reported.');
  console.log('Numbering: source = printed; index = PDF; ' +
    (part === '1' ? 'offset 0 throughout part 1.' : citesPdf ? 'citations are PDF pages (no shift).' : 'printed = PDF + 1 from PDF ' + flip + ' inclusive.'));

  // Part 2 has no OCR pass; its index is built from staging by oph-p2-index.js.
  const IDX = path.join(R, 'content/ophtho/qb-pages/ocr/ep/' + (part === '2' ? 'index.part2.json' : 'index.json'));
  const idx = JSON.parse(fs.readFileSync(IDX, 'utf8'));
  if (!Array.isArray(idx)) throw new Error('OCR index must be an array of PDF page records: ' + IDX);
  const byPage = new Map(), answered = new Set();
  for (let i = 0; i < idx.length; i++) {
    const r = idx[i];
    if (!r || !Number.isSafeInteger(r.page) || r.page < 1 || r.page > 2442 || typeof r.answered !== 'boolean')
      throw new Error('invalid OCR record at index ' + i + '; need PDF page 1-2442 and boolean answered');
    if (byPage.has(r.page)) throw new Error('duplicate OCR PDF page ' + r.page);
    byPage.set(r.page, r);
    if (r.page >= low && r.page <= high && r.answered) answered.add(r.page);
  }
  const absent = [];
  for (let p = low; p <= high; p++) if (!byPage.has(p)) absent.push(p);
  if (absent.length) throw new Error('INCOMPLETE OCR INDEX: ' + absent.length + ' pages absent in part ' +
    part + '; first pages ' + JSON.stringify(absent.slice(0, 20)));

  const cited = new Map(); // PDF page -> every citing file/id/printed-page record
  const PAGE = /\bpp?\.\s*(\d+)(?:\s*[-–]\s*(\d+))?/g;
  function addPages(text, tag, id) {
    PAGE.lastIndex = 0;
    let m;
    while ((m = PAGE.exec(text)) !== null) {
      const a = Number(m[1]), b = m[2] ? Number(m[2]) : a;
      if (!Number.isSafeInteger(a) || !Number.isSafeInteger(b) || a < 1 || b > 2443 || b < a)
        throw new Error(tag + '/' + id + ': invalid printed page range ' + m[0]);
      for (let printed = a; printed <= b; printed++) {
        // Part 1 must not depend on the unpinned flip in the other half.
        if (part === '1' && (printed < low || printed > high)) continue;
        if (part === '2' && printed < low) continue;
        if (part === '2' && printed === flip) {
          if (a < flip && b > flip) continue;
          throw new Error(tag + '/' + id + ': printed p.' + printed + ' does not exist at --flip ' + flip);
        }
        const pdf = part === '2' && printed > flip ? printed - 1 : printed;
        if (pdf < low || pdf > high) continue;
        if (!cited.has(pdf)) cited.set(pdf, []);
        cited.get(pdf).push({ file: tag, id, printed });
      }
    }
  }
  const banks = [
    ...[target, TARGETS[part === '1' ? '2' : '1']].map(t => ({ ...t, whole: true })),
    { file: 'questions.ophtho.js', svar: 'Q_OPHTHO', whole: false }
  ];
  let selectedEntries = 0;
  for (const B of banks) {
    const A = loadArray(path.join(R, 'app/data', B.file), B.svar);
    // Index-walk: Array.filter skips holes; loadArray already rejects them.
    for (let i = 0; i < A.length; i++) {
      const q = A[i];
      if (typeof q.source !== 'string') throw new Error(B.file + ' entry ' + i + ': source must be text');
      // oph-house-merge.js appends "; also printed in <bank> bank, <other pdf> p.N" - that is not an endpoint page.
      const source = q.source.split('; also printed in ')[0];
      if (B.whole) {
        if (q.module !== 'ophtho' || q.bank !== 'endpoint' || typeof q.id !== 'string' || !q.id.startsWith(B.prefix))
          throw new Error(B.file + ': WRONG TARGET entry ' + q.id);
        if (!source.includes(BOOK)) throw new Error(B.file + '/' + q.id + ': source must name ' + BOOK);
        // Endpoint files share ONE source book. Reject unexplained other PDFs,
        // rather than assigning their bare page references to this book.
        if (/\.pdf/i.test(source.split(BOOK).join('')))
          throw new Error(B.file + '/' + q.id + ': ambiguous source names another PDF');
        if (B.part === part) selectedEntries++;
        addPages(source, B.file, q.id);
      } else {
        // Older ophthalmology banks: only spans explicitly naming this endpoint
        // book count; stop at the next .pdf mention, as in the pediatrics model.
        let at = source.indexOf(BOOK);
        while (at !== -1) {
          const rest = source.slice(at + BOOK.length), next = rest.search(/\.pdf/i);
          addPages(next === -1 ? rest : rest.slice(0, next), B.file, q.id);
          at = source.indexOf(BOOK, at + BOOK.length);
        }
      }
    }
  }
  const sorted = a => a.sort((a, b) => a - b);
  const miss = sorted([...answered].filter(p => !cited.has(p)));
  const missQ = miss.filter(p => byPage.get(p).kind === 'answered');
  const missN = miss.filter(p => byPage.get(p).kind !== 'answered');
  const extra = sorted([...cited.keys()].filter(p => !answered.has(p)));
  console.log('selected entries ' + selectedEntries + '; cited PDF pages ' + cited.size + '; classifier answered ' + answered.size);
  for (const B of banks)
    console.log('pages cited from ' + B.file + ': ' + [...cited.values()].filter(rows => rows.some(r => r.file === B.file)).length);
  console.log('UNCITED, kind answered: ' + JSON.stringify(missQ));
  console.log('UNCITED, other/missing kind (still answered:true): ' + JSON.stringify(missN));
  console.log('CITED BUT NOT CLASSIFIED ANSWERED: ' + JSON.stringify(extra));
  for (const p of extra) console.log('EXTRA PDF ' + p + ' citations: ' + JSON.stringify(cited.get(p)));

  function adjudications(records, label) {
    const seen = new Set(), applicable = [];
    for (const r of records) {
      if (!r || !Number.isSafeInteger(r.page) || r.page < 6 || r.page > 2442 ||
          typeof r.reason !== 'string' || !r.reason.trim() ||
          typeof r.evidence !== 'string' || !r.evidence.trim() || seen.has(r.page))
        throw new Error('invalid/duplicate ' + label + ' adjudication; require page, reason and evidence');
      seen.add(r.page);
      if (r.page >= low && r.page <= high) {
        console.log('ADJUDICATION ' + label + ': ' + JSON.stringify(r));
        applicable.push(r.page);
      }
    }
    return sorted(applicable);
  }
  const knownMiss = adjudications(KNOWN_UNCITED, 'UNCITED');
  const knownExtra = adjudications(KNOWN_EXTRA, 'EXTRA');
  const newMiss = miss.filter(p => !knownMiss.includes(p));
  const goneMiss = knownMiss.filter(p => !miss.includes(p));
  const newExtra = extra.filter(p => !knownExtra.includes(p));
  const goneExtra = knownExtra.filter(p => !extra.includes(p));
  if (newMiss.length) console.error('UNADJUDICATED UNCITED PDF PAGES: ' + JSON.stringify(newMiss));
  if (newExtra.length) console.error('UNADJUDICATED EXTRA PDF PAGES: ' + JSON.stringify(newExtra));
  if (goneMiss.length) console.error('CHANGED UNCITED ADJUDICATIONS: ' + JSON.stringify(goneMiss) + '; review and record why');
  if (goneExtra.length) console.error('CHANGED EXTRA ADJUDICATIONS: ' + JSON.stringify(goneExtra) + '; review and record why');
  if (newMiss.length || newExtra.length || goneMiss.length || goneExtra.length) return 1;
  console.log('Coverage comparison passed for part ' + part + '; both residual lists match recorded adjudications. Data awaits human check.');
  return 0;
}
if (require.main === module) {
  try { process.exitCode = main(process.argv.slice(2)); }
  catch (e) { console.error('PAGE COVERAGE REFUSED: ' + e.message); process.exitCode = 1; }
}
