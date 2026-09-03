// Reprint map for a peds ENDPOINT PART 2 section, run BEFORE the section is drafted.
//   node tools/bank-harness/reprint-pd-ep2.js <firstPage> <lastPage>
//
// Copied from reprint-pd-ep.js on 2026-09-04 and pointed at the part-2 index. Page numbers are
// PART 2's own -- they restart at 1 and mean nothing in part 1's index.
//
// Compares the OCR text of every `answered` page in the range against
//   (a) every question already live in app/data/questions.peds.ep2.js (this file's bank stream)
//   (b) every question live in app/data/questions.peds.ep.js          (endpoint part 1)
//   (c) every question live in app/data/questions.peds.js             (Chat B's House bank)
//   (d) the other answered pages inside the range itself              (within-section reprints)
// and prints the near matches. It RESOLVES NOTHING: (a) and (d) are folds for the drafter to
// judge; (b) and (c) are overlap that gets RECORDED in the journal and merged once, after every
// stream closes -- no chat may fold into another chat's live file, and that includes part 1.
//
// OCR is a search index only. A hit here is a candidate to look at on the page image; a miss
// is not proof of absence, because the OCR drops whole lines. Both reads of each page are used.
//
// ⚠⚠ AND A MISS IS NOT EVIDENCE OF ABSENCE FOR A SECOND, LARGER REASON -- MEASURED 2026-09-04.
// On section 2 this found 6 House matches. Comparing the STAGED VERBATIM STEMS against House
// instead found 19: the whole of House's `pedhd-devp` chapter, one for one, in page order. The
// thirteen misses were not noise -- they are the endpoint printing a CONDENSED REWRITE of the same
// vignette, same patient names, same numbers. House "who was born at term" against the endpoint
// "born at term"; House "because of unusual movements" against "due to unusual movements". The 8%
// tolerance in near() is calibrated for OCR DAMAGE, and an editor is not OCR damage.
//
// Raising the tolerance is not the fix: at 30% this starts matching questions that merely share a
// vignette shape, and a false pair costs a person a render. The fix is to run this BEFORE drafting
// for what it is good at -- one cheap step, exact reprints found -- and then measure the real
// overlap AFTER staging, off the staged text, where both sides are verbatim. Section 1's count was
// corrected from 18 to 19 the same way. Both numbers live in the section map, not here.
const fs = require('fs'), vm = require('vm'), path = require('path');
const R = 'D:/claude os/Medical school/Herophilus/';
const OCR = R + 'content/peds/qb-pages/ocr/ep2/';
const { tight, lev } = require('./norm.js');

// A prefix match has to tolerate OCR damage, because one side of every comparison IS OCR.
// Measured 2026-09-03 on section 1, whose 89 answered pages are exactly the 89 live entries:
// exact prefix alone recovered 82/89. The seven misses were all OCR noise inside the first
// 70 characters -- "growth chan" for "growth chart", "I." for "1.", "an I I -month-old" for
// "an 11-month-old". An 8% edit-distance tolerance took that to 88/89; the last miss was p.48,
// whose printed "10." both reads returned as "I O.", and the letter-shaped-digit strip in head()
// is what closes it to 89/89. Run `--self-test` to re-measure; it must stay at 89.
function near(a, b) {
  const n = Math.min(a.length, b.length);
  if (n < 20) return false;
  const x = a.slice(0, n), y = b.slice(0, n);
  return x === y || lev(x, y) <= Math.max(2, Math.floor(n * 0.08));
}

// --self-test replays a CLOSED part-2 section: every one of its answered pages must match its own
// live entry, so anything under 100% means the matcher has drifted on this book. A probe's zero
// is a claim about the probe first, which is the whole reason this exists.
//
// CALIBRATED 2026-09-04, the day section 1 was spliced: 28/28 pages in pp.5-75 matched their own
// live entry, first run, no tuning. Part 1's numbers (pp.5-210, 89 pages) do not transfer -- part
// 2's pages restart at 1 -- so this is part 2's own score and 28/28 is what it must stay at. A
// later run under 28 means the matcher has drifted on this book, or the live file has, and the
// reprint sweep is not to be trusted until that is explained. Re-run it after any edit to head(),
// near() or norm.js. If SELF_TEST_RANGE is ever cleared, --self-test refuses rather than scoring
// a meaningless zero against an empty file.
const SELF_TEST_RANGE = [5, 75];   // section 1, Normal Development -- spliced 2026-09-04, 28 live entries
const selfTest = process.argv.includes('--self-test');
if (selfTest && !SELF_TEST_RANGE) {
  console.error('--self-test is not calibrated for part 2 yet: no section is closed, so the live '
    + 'file it would score against is empty. Close a section, set SELF_TEST_RANGE to its page '
    + 'span, then re-run. Refusing rather than reporting a meaningless zero.');
  process.exit(2);
}
const first = selfTest ? SELF_TEST_RANGE[0] : parseInt(process.argv[2], 10);
const last = selfTest ? SELF_TEST_RANGE[1] : parseInt(process.argv[3], 10);
if (!first || !last) { console.error('usage: node reprint-pd-ep2.js <firstPage> <lastPage> | --self-test'); process.exit(2); }

function live(file, varName) {
  const p = R + 'app/data/' + file;
  if (!fs.existsSync(p)) return [];
  vm.runInThisContext(fs.readFileSync(p, 'utf8'), { filename: file });
  return globalThis[varName] || [];
}

// The stem's opening words are what survives a reprint; a reworded tail is the common shape.
// 70 normalised characters is roughly the first sentence and a half once spaces are gone.
//
// ⚠️ tight(), not base(): base() leaves punctuation and spacing in, and reprints do not preserve
// either (norm.js's own header records one printing losing a space that its twin keeps).
// ⚠️ And the leading printed NUMBER is stripped first. Measured 2026-09-03: with the number left
// on, this probe scored 0 matches over section 1 -- where all 89 pages ARE the 89 live entries --
// because every OCR stem starts "54." and no live stem does. `--self-test` is the guard against
// that class of silent zero: a probe's zero is a claim about the probe first.
// The leading number is stripped with a class that also covers the OCR's letter-shaped
// digits -- p.48 prints "10." and both reads returned "I O.", which a \d+ strip leaves in.
const head = s => tight(String(s || '').replace(/^[\s0-9IOloSB]{1,6}[.)]\s*/, '')).slice(0, 70);

const pool = [];
live('questions.peds.ep2.js', 'Q_PEDS_EP2').forEach(q => q && pool.push(['endpoint-p2 ' + q.id, head(q.stem)]));
live('questions.peds.ep.js', 'Q_PEDS_EP').forEach(q => q && pool.push(['ENDPOINT-P1 ' + q.id, head(q.stem)]));
live('questions.peds.js', 'Q_PEDS').forEach(q => q && pool.push(['HOUSE ' + q.id, head(q.stem)]));

const idx = JSON.parse(fs.readFileSync(OCR + 'index.json', 'utf8'));
const pages = idx.filter(r => r.kind === 'answered' && r.page >= first && r.page <= last).map(r => r.page);

// A page's stem is the text before its first option line, taken from whichever OCR read saw more
// of it -- the two reads drop different lines.
function stemOf(pn) {
  const t = fs.readFileSync(OCR + 'p' + String(pn).padStart(4, '0') + '.txt', 'utf8');
  const halves = t.split('--- 150dpi ---');
  let best = '';
  for (const h of halves) {
    const lines = h.trim().split(/\r?\n/).filter(x => x.trim() && x.trim() !== String(pn));
    const out = [];
    for (const L of lines) {
      if (/^\s*[a-eA-E][.)]\s/.test(L)) break;
      out.push(L.trim());
    }
    const s = out.join(' ');
    if (s.length > best.length) best = s;
  }
  return best;
}

const mine = pages.map(p => [p, stemOf(p)]);
console.log('answered pages in range: ' + pages.length);

let nCross = 0, nSelf = 0;
const epHit = new Set();
for (const [p, s] of mine) {
  const h = head(s);
  if (h.length < 20) { console.log('p.' + p + ': OCR stem too short to match (' + h.length + ' chars) -- read the page'); continue; }
  for (const [who, ph] of pool) {
    if (near(h, ph)) { if (!selfTest) console.log('p.' + p + '  ==  ' + who); if (who.startsWith('endpoint-p2 ')) epHit.add(p); nCross++; }
  }
  if (selfTest) continue;
  for (const [p2, s2] of mine) {
    if (p2 <= p) continue;
    if (near(h, head(s2))) { console.log('p.' + p + '  ==  p.' + p2 + '  (within section)'); nSelf++; }
  }
}
if (selfTest) {
  const missed = pages.filter(p => !epHit.has(p));
  console.log('self-test: ' + epHit.size + '/' + pages.length + ' pages in pp.' + first + '-' + last
    + ' matched their live part-2 entry'
    + (missed.length ? '  MISSED ' + missed.map(p => 'p.' + p).join(' ') : ''));
  process.exit(epHit.size === pages.length ? 0 : 1);
}
console.log('cross-file candidates ' + nCross + ' | within-section candidates ' + nSelf);
console.log('OCR is an index, not evidence -- confirm every hit on the page image before folding.');
