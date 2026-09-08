// OPHTHALMOLOGY ENDPOINT ONLY — BYTE-LEVEL LIVE DATA WRITER.
//   node tools/bank-harness/splice-oph-ep.js --part <1|2> <section>          # dry run
//   node tools/bank-harness/splice-oph-ep.js --part <1|2> <section> --write  # live splice
// DANGER: neighbouring pediatrics splicers write DIFFERENT LIVE FILES.
// --part 1 can write ONLY app/data/questions.ophtho.ep.js  / Q_OPHTHO_EP  / ophep-
// --part 2 can write ONLY app/data/questions.ophtho.ep2.js / Q_OPHTHO_EP2 / ophep2-
// No target/path override, default part, or validator bypass exists.
// Never run a pediatrics splicer for this bank. A wrong target corrupts another chat.
// Adapted from splice-pd-ep2.js; written with the file-writing tool, not a shell
// heredoc (which can collapse \\ to \ and silently destroy regexes).
//
// Split drafts (-A.js, -B.js, ...) or one .js retain the pediatrics CLI/discovery
// shape. EVERY half must exit 0 from val-oph-ep.js with the SAME --part.
// Raw entry text is retained; vm evaluation catches holes and count changes.
// A fold/reprint means staged but deliberately not drafted, NEVER an inferred
// count shortfall. Optional reprint proof remains; no peds adjudications apply.
// ans/chapter from sec-oph.js are documentation, never counts or chapter gates.
'use strict';
const fs = require('fs'), vm = require('vm'), path = require('path');
const { R, BOOK, TARGETS, parseArgs, script, dense, loadDraft, loadArray } = require('./val-oph-ep.js');
const { SEC_P1, SEC_P2 } = require('./sec-oph.js');

function main(argv) {
  const { target, part, cfg, secNum, write: doWrite } = parseArgs(argv, 'splice');
  if (cfg !== (part === '1' ? SEC_P1 : SEC_P2)[secNum]) throw new Error('section table mismatch');
  const LIVE = path.join(R, 'app/data', target.file), LIVE_VAR = target.svar;
  const QB = path.join(R, 'content/ophtho/qb-pages');
  const HEADER = '/* Ophthalmology ENDPOINT PART ' + part + ' (' + BOOK + ').\n' +
    '   Own live file; classic var is required by the app aggregator. */\nvar ' + LIVE_VAR + ' = [];\n';
  console.log('WARNING — OPHTHALMOLOGY ONLY: part ' + part + ', section ' + secNum +
    ' -> ' + LIVE + ' / ' + LIVE_VAR + (doWrite ? ' [LIVE WRITE REQUESTED]' : ' [DRY RUN]'));

  // Reject redirected live targets (including hard links) before any possible write.
  // The only file path used for writing is built above from the frozen allowlist.
  function assertTarget() {
    const parent = path.dirname(LIVE);
    if (path.resolve(fs.realpathSync(parent)).toLowerCase() !== path.resolve(parent).toLowerCase())
      throw new Error('REFUSED: live directory is redirected: ' + parent);
    try {
      const st = fs.lstatSync(LIVE);
      if (!st.isFile() || st.isSymbolicLink() || st.nlink !== 1 ||
          path.resolve(fs.realpathSync(LIVE)).toLowerCase() !== path.resolve(LIVE).toLowerCase())
        throw new Error('REFUSED: live target is redirected, linked, or not a regular file: ' + LIVE);
    } catch (e) { if (e.code !== 'ENOENT') throw e; }
  }
  assertTarget();

  const base = path.basename(cfg.draft);
  let files = fs.readdirSync(QB)
    .filter(f => f.startsWith(base + '-') && /^-[A-Z]\.js$/.test(f.slice(base.length))).sort();
  const single = fs.existsSync(path.join(QB, base + '.js'));
  if (files.length && single) throw new Error('AMBIGUOUS DRAFTS: both single and split drafts exist for ' + base);
  if (!files.length && single) files = [base + '.js'];
  if (!files.length) throw new Error('no draft found matching ' + cfg.draft + '[-X].js');
  const halves = files.map(f => (f.slice(base.length).match(/^-([A-Z])\.js$/) || [,''])[1]);

  // Snapshot inputs before the gate. Reject changes while a child validator runs.
  const stagePath = path.join(QB, cfg.file);
  const stageText = fs.readFileSync(stagePath, 'utf8');
  const modulePath = path.join(R, 'app/data/modules.js');
  const moduleText = fs.readFileSync(modulePath, 'utf8');
  const snapshots = files.map(f => fs.readFileSync(path.join(QB, f), 'utf8'));
  for (const h of halves) {
    const args = [path.join(__dirname, 'val-oph-ep.js'), '--part', part, secNum];
    if (h) args.push(h);
    const v = require('child_process').spawnSync(process.execPath, args, { encoding: 'utf8', cwd: R });
    const who = 'part ' + part + ', section ' + secNum + (h ? ', half ' + h : '');
    if (v.error || v.status !== 0)
      throw new Error('VALIDATOR FAILED for ' + who + ' (exit ' + v.status + '):\n' +
        (v.error ? v.error.message + '\n' : '') + (v.stdout || '') + (v.stderr || ''));
    // Keep warnings and human-reading notes visible, not merely the child's exit code.
    console.log(v.stdout || '');
    if (v.stderr) console.error(v.stderr);
    console.log('validator exited 0 for ' + who);
  }
  function unchangedInputs() {
    if (fs.readFileSync(stagePath, 'utf8') !== stageText || fs.readFileSync(modulePath, 'utf8') !== moduleText ||
        files.some((f, i) => fs.readFileSync(path.join(QB, f), 'utf8') !== snapshots[i]))
      throw new Error('INPUT CHANGED during validation/splice; run the gate again');
  }
  unchangedInputs();
  const S = dense(script(stageText, stagePath).ctx[cfg.svar], cfg.svar);
  const REPRINTS = new Set(cfg.reprints || []), FOLDED = new Set(cfg.folded || []);
  const SKIP = new Set([...REPRINTS, ...FOLDED]);
  for (const n of SKIP) if (!S.some(s => s.n === n)) throw new Error('discard n:' + n + ' has no staging row');
  const wantIds = S.filter(s => !SKIP.has(s.n)).map(s => cfg.prefix + s.n);

  // Isolate a declared array without rewriting its objects. The original searched
  // for "\n{" and "\n];", rejecting inline empty stubs. Locate the named declaration
  // and terminal bracket instead, then independently evaluate the carved body.
  function arraySpan(text, name, label) {
    const match = new RegExp('\\bvar\\s+' + name + '\\s*=\\s*\\[').exec(text);
    if (!match) throw new Error(label + ': expected classic var ' + name + ' = [...]');
    const start = match.index + match[0].length;
    const end = text.lastIndexOf(']');
    if (end < start || !/^\s*;?\s*(?:(?:\/\*[\s\S]*?\*\/|\/\/[^\n]*(?:\n|$))\s*)*$/.test(text.slice(end + 1)))
      throw new Error(label + ': cannot isolate terminal array safely');
    return { start, end, body: text.slice(start, end) };
  }
  function carve(file, i) {
    const t = snapshots[i];
    const { arr, vn } = loadDraft(t, file);
    let block;
    if (vn !== '(bare fragment)') block = arraySpan(t, vn, file).body;
    else block = t.replace(/^\s*(?:\/\*[\s\S]*?\*\/\s*|\/\/[^\n]*\n\s*)*/, '');
    block = block.replace(/,\s*$/, '').trim();
    if (arr.length && !block.startsWith('{')) throw new Error(file + ': entry block does not start with "{"');
    const carved = dense(script('[\n' + block + '\n]', file + ' (carved)').value, file);
    if (JSON.stringify(carved) !== JSON.stringify(arr))
      throw new Error(file + ': carved text and loaded array differ');
    const textCount = arr.length ? (block.match(/\n\{/g) || []).length + 1 : 0;
    if (textCount !== arr.length)
      throw new Error(file + ': carved text holds ' + textCount + ' entries but the array parses ' + arr.length);
    return { block, arr, file };
  }
  const parts = files.map(carve);
  const drafted = [].concat(...parts.map(p => p.arr));
  const fail = [], seen = new Map();
  drafted.forEach(q => seen.set(q.id, (seen.get(q.id) || 0) + 1));
  wantIds.forEach(id => { if (!seen.has(id)) fail.push('MISSING: ' + id + ' is staged but not drafted'); });
  drafted.forEach(q => {
    if (!wantIds.includes(q.id)) fail.push('EXTRA: ' + q.id + ' is drafted but not wanted from staging');
    if (q.bank !== 'endpoint' || q.module !== 'ophtho' || typeof q.id !== 'string' ||
        !q.id.startsWith(target.prefix) || !q.id.startsWith(cfg.prefix))
      fail.push('WRONG TARGET: ' + q.id + ' is not an ophthalmology endpoint entry for part ' + part + ', section ' + secNum);
  });
  for (const [id, n] of seen) if (n > 1) fail.push('DUPLICATE: ' + id + ' drafted ' + n + ' times');
  if (drafted.length !== S.length - SKIP.size)
    fail.push('COUNT: drafts ' + drafted.length + ', staging ' + S.length + ', adjudicated discards ' + SKIP.size);

  // Preserve optional reprint-pass proof, restricted to the TWO ophthalmology
  // endpoint files. No arbitrary filename or pediatrics target can enter this path.
  if (REPRINTS.size) {
    const marks = cfg.reprintMarks || [{ file: target.file, mark: cfg.reprintMark, expect: REPRINTS.size }];
    if (!marks.length || !cfg.reprintPass || marks.reduce((n, m) => n + m.expect, 0) !== REPRINTS.size)
      fail.push('REPRINT PROOF: missing pass or mark counts do not cover the adjudicated reprints');
    for (const M of marks) {
      const bank = Object.values(TARGETS).find(t => t.file === M.file);
      if (!bank || typeof M.mark !== 'string' || !M.mark.trim() || !Number.isInteger(M.expect) || M.expect < 1)
        throw new Error('REPRINT PROOF: invalid ophthalmology file/mark/count');
      const f = path.join(R, 'app/data', bank.file);
      const arr = fs.existsSync(f) ? loadArray(f, bank.svar) : [];
      const n = arr.reduce((total, q) => total + (String(q.source || '').split(M.mark).length - 1), 0);
      if (n < M.expect) fail.push('REPRINT PASS HAS NOT RUN: ' + n + ' of ' + M.expect + ' source marks in ' + M.file);
    }
  }

  const exists = fs.existsSync(LIVE), live = exists ? fs.readFileSync(LIVE, 'utf8') : HEADER;
  function evaluate(text, label) {
    const arr = dense(script(text, label).ctx[LIVE_VAR], label + ' / ' + LIVE_VAR);
    const ids = new Set();
    for (const q of arr) {
      if (q.module !== 'ophtho' || q.bank !== 'endpoint' || typeof q.id !== 'string' || !q.id.startsWith(target.prefix))
        throw new Error(label + ': WRONG TARGET entry ' + q.id + ' for part ' + part);
      if (ids.has(q.id)) throw new Error(label + ': duplicate live id ' + q.id);
      ids.add(q.id);
    }
    return arr;
  }
  const before = evaluate(live, target.file);
  const liveIds = new Set(before.map(q => q.id));
  wantIds.forEach(id => {
    // Retain the original textual guard too: an exact quoted reference merits review.
    if (liveIds.has(id) || live.includes("'" + id + "'") || live.includes('"' + id + '"'))
      fail.push('ALREADY LIVE: ' + id + ' in ' + target.file);
  });
  console.log('part ' + part + ', section ' + secNum + ': ' +
    files.map((f, i) => f + ':' + parts[i].arr.length).join(' ') + ' = ' + drafted.length + ', staged ' + S.length);
  if (fail.length) throw new Error('PRE-SPLICE FAILURES:\n  ' + fail.join('\n  '));
  // Empty drafts must still undergo EXTRA/count/reprint/live checks. The peds early
  // return skipped these, accepting a drafted discard in an all-discard section.
  if (!drafted.length) { console.log('Nothing to splice; all pre-splice checks passed. No write.'); return; }

  const span = arraySpan(live, LIVE_VAR, target.file);
  const oldBody = span.body.replace(/,\s*$/, '').trimEnd();
  const isolated = dense(script('[\n' + span.body + '\n]', target.file + ' (body)').value, target.file);
  if (JSON.stringify(isolated) !== JSON.stringify(before)) throw new Error('live array body differs from loaded array');
  const blocks = parts.filter(p => p.arr.length).map(p => p.block).join(',\n\n');
  const out = live.slice(0, span.start) + oldBody + (before.length ? ',\n\n' : '\n') +
    blocks + '\n' + live.slice(span.end);
  const after = evaluate(out, target.file + ' (spliced in memory)');
  if (after.length !== before.length + drafted.length) throw new Error('POST-SPLICE COUNT WRONG');
  if (JSON.stringify(after) !== JSON.stringify(before.concat(drafted)))
    throw new Error('POST-SPLICE CONTENT WRONG: existing entries or new drafts changed');
  if (!doWrite) {
    console.log('DRY RUN. live ' + before.length + ' entries, ' + live.length + ' chars -> would be ' +
      after.length + ' entries, ' + out.length + ' chars. Re-run with --write.');
    return;
  }
  unchangedInputs();
  assertTarget();
  if (fs.existsSync(LIVE) !== exists || (exists && fs.readFileSync(LIVE, 'utf8') !== live))
    throw new Error('LIVE CHANGED since pre-splice checks; refusing to overwrite another run');
  fs.writeFileSync(LIVE, out, { encoding: 'utf8', flag: exists ? 'w' : 'wx' });
  const saved = fs.readFileSync(LIVE, 'utf8'), check = evaluate(saved, target.file + ' (read back)');
  if (saved !== out || check.length !== after.length) throw new Error('POST-WRITE CONTENT/COUNT WRONG');
  console.log('spliced ' + target.file + ': chars ' + live.length + ' -> ' + saved.length +
    ' | entries ' + before.length + ' -> ' + check.length + ' | holes 0');
}
if (require.main === module) {
  try { main(process.argv.slice(2)); }
  catch (e) { console.error('SPLICE REFUSED: ' + e.message); process.exitCode = 1; }
}

