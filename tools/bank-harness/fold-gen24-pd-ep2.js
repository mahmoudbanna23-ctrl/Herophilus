// fold-gen24-pd-ep2.js — fold pedep2-car-25 into pedep2-gen-24, one question live twice.
//   node tools/bank-harness/fold-gen24-pd-ep2.js            (dry run -- prints, writes nothing)
//   node tools/bank-harness/fold-gen24-pd-ep2.js --write
//
// WHAT WAS FOUND, AND HOW. This pair was not turned up by a duplicate sweep. It surfaced while
// chapter-ruling section 14's undrafted questions: staged n33 (p.1661) prints the same Down-syndrome
// murmur vignette, and printing all its live neighbours in full showed two of them to be the same
// question as each other. pedep2-gen-24 (p.215, genetics) and pedep2-car-25 (p.678, cardiac) share
// their five options in the same order, share the key, and differ in the stem only by
//   - "a 38-year-old primiparous mother"  vs  "a primiparous mother aged 38"
//   - one added sentence, "The perinatal period was normal"
//   - "he is hypotonic"  vs  "the baby is hypotonic"
// Token overlap on the stems is 0.830 and the only tokens either has to itself are those rewordings.
// Both entries carry a printed explanation box, and the two boxes differ, so this is the
// boxed-second-printing shape crossed with the cross-chapter shape. Both are within-bank: a fold
// DELETES the lesser printing and folds its citation into the survivor. Nothing here takes alsoIn.
//
// WHY THE SURVIVOR IS THE GENETICS ENTRY, WHICH IS THE SHORTER ONE. The standing rule is to keep the
// fuller printing, and by expansion length that is pedep2-car-25. The chapter, though, is not a
// matter of taste and was measured rather than judged: of the five live entries in this corpus whose
// stem names a syndrome and whose key names a cardiac lesion, four sit in genetics and one in
// cardiac -- and the one is pedep2-car-25 itself, this duplicate. Remove it and the corpus is
// unanimous, including the House bank's own printing of this very vignette, which also sits in
// genetics. So the genetics entry survives and the cardiac entry's content is merged into it rather
// than lost: both boxes are quoted, the lecture anchors it cites are carried across, and its
// natural-history material is kept. Nothing pedep2-car-25 taught the reader is discarded.
//
// WHAT THIS OVERTURNS. endpoint-p2-s14-fold-adjudication-B.md rejected staged n33 as a reprint, and
// leaned on this pair to do it: it read gen-24 and car-25 as "two already-live, never-folded
// siblings," evidence that the bank deliberately reuses this vignette family as distinct entries.
// They were never adjudicated as siblings. They were staged by two different passes from two
// different sections and never compared to each other, because the within-bank comparison had not
// crossed chapter boundaries -- the gap already recorded in endpoint-p2-s13-missed-folds.md. The
// premise was an unexamined duplicate, so the argument built on it does not stand, and n33 is cited
// as a reprint by reprint-s14-pd-ep2.js in the same commit as this fold.
//
// The survivor's explanation is rewritten here, so this tool is NOT idempotent by clause the way the
// reprint passes are: it refuses to run if pedep2-car-25 is already gone.
//
// Written with the Write tool: the Bash heredoc collapses \\ to \ and would eat these strings.
const fs = require('fs'), vm = require('vm'), cp = require('child_process');
const R = 'D:/claude os/Medical school/Herophilus/';
const D = R + 'app/data/';
const WRITE = process.argv.includes('--write');

const EP2 = 'questions.peds.ep2.js';
const SURV = 'pedep2-gen-24', LOSER = 'pedep2-car-25';

// The merged explanation. Both printed boxes are quoted, in page order, and the closing marker stays
// singular -- it is a contract string that val-pd-ep2.js and the fold tools match on exactly.
const EXPL = [
  '**The endpoint file prints this explanation:**',
  '',
  '> This is the hallmark cardiac anomaly in infants with Down syndrome and presents early with a murmur.',
  '',
  'The second printing, in the cardiology section on p.678, prints a fuller box beside the same question:',
  '',
  '> The baby shows features suggestive of Down syndrome (hypotonia, single palmar crease, epicanthic folds). The most common congenital heart defect associated with Down syndrome is an atrioventricular septal defect (AVSD).',
  '',
  '---',
  '',
  'The dysmorphic features here -- hypotonia, single (simian) palmar crease and epicanthic folds, in a baby of an older (38-year-old) mother -- are the classic bedside picture of Down syndrome that `6) Genetically determined disease_.txt` lists among its craniofacial and other features, and advanced maternal age is itself a recognised risk factor for trisomy 21. The cached lecture on atrioventricular canal defects states the association directly: "AVCD \u2014 common in Down syndrome," describing it as a single, five-leaflet common valve stretching across the entire atrioventricular junction, which tends to leak and, because the defect is large, generates high pulmonary artery pressure early `33) Congenital acyanotic heart disease_.pptx`. That lecture also gives the natural history \u2014 cyanosis at birth is unusual, but heart failure typically develops between 2 weeks and 3 months of age, managed initially as for a large VSD before surgical repair at 3 to 6 months `33) Congenital acyanotic heart disease_.pptx`.',
  '',
  'That timing is what makes this presentation coherent. At 2 days old the baby is still feeding well, and the murmur is being picked up before symptoms have had time to develop \u2014 exactly the window in which early echocardiographic screening of babies with Down syndrome is meant to catch the lesion. The book prints the question a third time, in Model Final Exam 3 on p.1661, with the baby aged 3 months instead: the far end of that same window, by which point heart failure would usually have declared itself.',
  '',
  '**Why each distractor fails.** Atrial septal defect is a real, generally milder shunt lesion, but it is not the lesion the material specifically associates with Down syndrome, and an isolated ASD is usually a soft murmur that often escapes detection this early rather than presenting as the abnormality being reviewed on day 2. Aortic stenosis and coarctation of the aorta are structural left-heart lesions that are not the ones linked to trisomy 21 in the source material -- both are, if anything, more classically taught in association with Turner syndrome and with bicuspid aortic valve disease than with trisomy 21. Patent ductus arteriosus is common, especially in preterm infants, but this baby is not described as preterm, and PDA is not the defect the lecture names as the hallmark Down syndrome lesion.',
  '',
  'The book files its two printings of this question in two different chapters, this one among the genetic syndromes and the p.678 one among the congenital heart lesions. It is kept here because every other live entry in this corpus that puts a syndrome in the stem and asks for the cardiac lesion in the key sits in genetics, the House bank\u2019s printing of this same vignette included.',
  '',
  '*The expansion above this line is written for this bank; the box itself is the endpoint file\u2019s own.*',
].join('\n');

// The folded citation. Curly quotes throughout: a straight apostrophe would close the string this is
// spliced into, and curly is what these source strings already use.
const SRC = 'Pediatrics endpoint part2.pdf p.215 (reprinted in the cardiology section, p.678, with ' +
  '\u201ca 38-year-old primiparous mother\u201d reworded \u201ca primiparous mother aged 38\u201d, the sentence ' +
  '\u201cThe perinatal period was normal\u201d added and \u201che is hypotonic\u201d changed to \u201cthe baby is hypotonic\u201d; ' +
  'the options and the key are unchanged, and that printing carries the fuller of the two explanation ' +
  'boxes, quoted above)';

const MARK = '*The expansion above this line is written for this bank; the box itself is the endpoint file\u2019s own.*';

// Blocks are found structurally. Part 2 writes both "{ id: 'x'," on its own line and the one-line
// "{ id:'x', bank:'endpoint', ..." form, so a prefix match on either shape silently misses the other.
function entryBlock(lines, id) {
  const pats = ["id:'" + id + "'", 'id:"' + id + '"', "id: '" + id + "'", 'id: "' + id + '"'];
  let start = -1, end = -1, open = -1;
  for (let i = 0; i < lines.length; i++) {
    if (/^\{/.test(lines[i])) open = i;
    if (open !== -1 && pats.some(p => lines[i].indexOf(p) !== -1)) {
      if (start !== -1) throw new Error('id appears in two entries: ' + id);
      start = open;
      for (let j = start; j < lines.length; j++) if (/\},\s*$/.test(lines[j])) { end = j; break; }
      if (end === -1) throw new Error('no closing "}," found for ' + id);
      if (end < i) throw new Error('block for ' + id + ' closed before its id line');
    }
  }
  if (start === -1) throw new Error('entry not found: ' + id);
  return { start, end };
}

function loadLive(f, v) {
  vm.runInThisContext(fs.readFileSync(D + f, 'utf8'), { filename: f });
  const a = globalThis[v] || [], o = [];
  for (let i = 0; i < a.length; i++) if (i in a) o.push(a[i]);
  return { n: o.length, holes: a.length - o.length, all: o, ids: new Set(o.map(q => q.id)) };
}

// ---- measure the before-state ------------------------------------------------------------------
const before = loadLive(EP2, 'Q_PEDS_EP2');
console.log(EP2 + ': ' + before.n + ' entries, ' + before.holes + ' holes');
if (before.holes) { console.log('SPARSE HOLES. Nothing written.'); process.exit(1); }
if (!before.ids.has(SURV)) { console.log('survivor ' + SURV + ' not found. Nothing written.'); process.exit(1); }
if (!before.ids.has(LOSER)) { console.log(LOSER + ' is already gone -- this fold has already run.'); process.exit(1); }

const S = before.all.find(q => q.id === SURV), L = before.all.find(q => q.id === LOSER);

// The fold is only safe if the two really are the same question. Re-check on disk rather than
// trusting the adjudication above: identical option list, identical key, and a stem that differs
// only in the rewordings the citation names.
if (JSON.stringify(S.options) !== JSON.stringify(L.options))
  { console.log('OPTION LISTS DIFFER -- not the same question. Nothing written.'); process.exit(1); }
if (S.answer !== L.answer)
  { console.log('KEYS DIFFER -- not the same question. Nothing written.'); process.exit(1); }
const flat = t => String(t).replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"')
  .toLowerCase().replace(/[.,;:?!]/g, '').replace(/\s+/g, ' ').trim();
const wa = new Set(flat(S.stem).split(' ')), wb = new Set(flat(L.stem).split(' '));
const inter = [...wa].filter(w => wb.has(w)).length;
const jac = inter / (wa.size + wb.size - inter);
console.log('stem overlap: ' + jac.toFixed(3) + '  (only in ' + SURV + ': ' + [...wa].filter(w => !wb.has(w)).join(' ') +
            ' | only in ' + LOSER + ': ' + [...wb].filter(w => !wa.has(w)).join(' ') + ')');
if (jac < 0.75) { console.log('STEMS TOO FAR APART to fold. Nothing written.'); process.exit(1); }

// Both printed boxes must survive into the merged explanation, and the marker must stay singular.
const boxS = S.explanation.split('\n').find(l => l.startsWith('> '));
const boxL = L.explanation.split('\n').find(l => l.startsWith('> '));
for (const [tag, box] of [['p.215', boxS], ['p.678', boxL]]) {
  if (!box) { console.log('no printed box found on the ' + tag + ' entry. Nothing written.'); process.exit(1); }
  if (EXPL.indexOf(box) === -1) { console.log('the ' + tag + ' box is not carried into the merged explanation:\n  ' + box); process.exit(1); }
  console.log('carried the ' + tag + ' box: ' + box.slice(0, 78) + '...');
}
const marks = EXPL.split(MARK).length - 1;
if (marks !== 1) { console.log('the closing marker appears ' + marks + ' times, must be exactly 1. Nothing written.'); process.exit(1); }
if (!EXPL.endsWith(MARK)) { console.log('the closing marker is not the final line. Nothing written.'); process.exit(1); }

// Nothing else may point at the id about to be deleted. A folded id loses its backticks everywhere
// it is still mentioned; the staging draft files are historical record and are left alone.
const mentions = before.all.filter(q => q.id !== LOSER && JSON.stringify(q).indexOf(LOSER) !== -1);
console.log('live entries mentioning ' + LOSER + ': ' + mentions.length +
            (mentions.length ? ' -- ' + mentions.map(q => q.id).join(', ') : ''));
if (mentions.length) { console.log('REFIX needed before this fold can run. Nothing written.'); process.exit(1); }

// ---- build the edit ----------------------------------------------------------------------------
const lines = fs.readFileSync(D + EP2, 'utf8').split('\n');
const sb = entryBlock(lines, SURV);
let ei = -1, si = -1;
for (let i = sb.start; i <= sb.end; i++) {
  if (/^\s*explanation:/.test(lines[i])) ei = i;
  if (/^\s*source:/.test(lines[i])) si = i;
}
if (ei === -1 || si === -1) { console.log('survivor has no explanation or no source line. Nothing written.'); process.exit(1); }
// JSON.stringify produces a valid double-quoted JS literal with real newlines escaped to \n, which
// is exactly the shape these files already store, and it cannot be broken by an apostrophe.
lines[ei] = '  explanation: ' + JSON.stringify(EXPL) + ',';
lines[si] = '  source: ' + JSON.stringify(SRC);
console.log('rewrote the survivor\u2019s explanation (line ' + (ei + 1) + ') and source (line ' + (si + 1) + ')');

const lb = entryBlock(lines, LOSER);
let cut = lb.end - lb.start + 1;
if (lines[lb.end + 1] === '') cut++;          // take the blank separator with it
lines.splice(lb.start, cut);
console.log('dropped ' + LOSER + ' (' + cut + ' lines from ' + (lb.start + 1) + ')');

if (!WRITE) {
  console.log('');
  console.log('DRY RUN. Nothing written. Re-run with --write.');
  process.exit(0);
}

fs.writeFileSync(D + EP2, lines.join('\n'));
console.log('');
console.log('wrote ' + EP2);

// ---- verify from disk, not from memory ---------------------------------------------------------
const chk = cp.spawnSync(process.execPath, ['--check', D + EP2], { encoding: 'utf8' });
console.log('node --check: ' + (chk.status === 0 ? 'OK' : 'FAILED\n' + chk.stderr));
if (chk.status !== 0) process.exit(1);

const after = loadLive(EP2, 'Q_PEDS_EP2');
console.log('entries ' + before.n + ' -> ' + after.n + ', ' + after.holes + ' holes');
let bad = 0;
if (after.n !== before.n - 1) { console.log('FAIL entry count moved by ' + (after.n - before.n) + ', expected -1'); bad++; }
if (after.holes) { console.log('FAIL ' + after.holes + ' sparse holes'); bad++; }
if (after.ids.has(LOSER)) { console.log('FAIL ' + LOSER + ' is still live'); bad++; }
const F = after.all.find(q => q.id === SURV);
if (!F) { console.log('FAIL ' + SURV + ' is gone'); bad++; }
else {
  if (F.explanation !== EXPL) { console.log('FAIL the survivor\u2019s explanation did not land'); bad++; }
  if (F.source !== SRC) { console.log('FAIL the survivor\u2019s source did not land: ' + F.source); bad++; }
  if ((F.explanation.split(MARK).length - 1) !== 1) { console.log('FAIL the marker is not singular'); bad++; }
  if (F.explanation.indexOf(boxS) === -1 || F.explanation.indexOf(boxL) === -1) { console.log('FAIL a box is missing'); bad++; }
  if (F.chapter !== 'genetics') { console.log('FAIL the survivor left the genetics chapter: ' + F.chapter); bad++; }
}
console.log(bad === 0 ? 'fold verified on disk' : bad + ' CHECK(S) FAILED');
process.exit(bad === 0 ? 0 : 1);
