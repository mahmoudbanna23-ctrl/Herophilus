/* Six-stage duplicate sweep + validator for the Pediatrics hub.
   START-HERE.md §6 (sweep) and §7 (validation) in one runnable file.

   Usage, from the repo root:
     node content/peds/tools/sweep.js                       -> validate the live corpus only
     node content/peds/tools/sweep.js <draft.js>            -> sweep a draft against the live corpus

   The draft file is entry objects only, comma-separated, no wrapper — exactly what a
   subagent returns — so it is read by wrapping it in an array literal here.

   ⚠️ WHY THIS EXISTS AS A FILE: ENT lost real work three times to sweeps run slightly
   differently between batches. One definition, in one place, run every time. */

const fs = require('fs'), vm = require('vm'), path = require('path');
const ROOT = process.cwd();

/* ---------- load the live corpus ---------------------------------------- */
function loadCorpus() {
  const c = { window: {}, console }; c.window = c; vm.createContext(c);
  const files = ['questions.ent.js','questions.peds.js','questions.ophtho.js','questions.neuro.js',
                 'cases.ent.js','cases.peds.js','cases.ophtho.js','cases.neuro.js','questions.js'];
  for (const f of files) {
    try { vm.runInContext(fs.readFileSync(path.join(ROOT,'app/data',f),'utf8'), c) }
    catch (e) { console.log('PARSE FAIL ' + f + ': ' + e.message); process.exit(1) }
  }
  vm.runInContext(fs.readFileSync(path.join(ROOT,'app/data/modules.js'),'utf8'), c);
  return { M: vm.runInContext('MODULES', c), Q: vm.runInContext('QUESTIONS', c) };
}

/* ---------- normalisation ------------------------------------------------
   Lowercase, strip punctuation, collapse space. Options are SORTED, because a
   bank reprinting a question freely reorders its option list. */
const norm = s => String(s || '').toLowerCase()
  .replace(/[‘’“”]/g, "'")
  .replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();

const optSet  = q => (q.options || []).map(norm).sort().join(' | ');
const keyText = q => norm((q.options || [])[q.answer]);

/* Tokens for the ranking stages. Words of 3 characters or fewer are dropped —
   ⚠️ which is a KNOWN BLIND SPOT, not an oversight: short-code option sets
   ("CHL/SNHL/Mixed", "Grade I/II/III/IV") score 0 or 1.00 for the wrong reason.
   The ranked list is a shortlist to READ, never a verdict. */
const toks = s => new Set(norm(s).split(' ').filter(w => w.length > 3));
function jaccard(a, b) {
  if (!a.size || !b.size) return 0;
  let hit = 0; for (const t of a) if (b.has(t)) hit++;
  return hit / (a.size + b.size - hit);
}

/* ---------- the six stages ---------------------------------------------- */
function sweep(draft, corpus) {
  const rows = [];
  const cIdx = corpus.map(q => ({
    q, stem: norm(q.stem), opts: optSet(q), key: keyText(q),
    n: (q.options || []).length, st: toks(q.stem), ot: toks((q.options || []).join(' '))
  }));

  for (const d of draft) {
    const D = { stem: norm(d.stem), opts: optSet(d), key: keyText(d),
                n: (d.options || []).length, st: toks(d.stem), ot: toks((d.options || []).join(' ')) };
    const hits = [];
    for (const c of cIdx) {
      const stages = [];
      if (D.stem === c.stem && D.opts === c.opts)          stages.push('A');   // stem + option set
      if (D.opts === c.opts && D.key === c.key)            stages.push('B');   // option set + key
      if (D.key === c.key && D.n === c.n)                  stages.push('C');   // key + option count
      /* D: <=1 differing token in the key, by symmetric difference */
      const ka = new Set(D.key.split(' ')), kb = new Set(c.key.split(' '));
      let diff = 0; for (const t of ka) if (!kb.has(t)) diff++;
      for (const t of kb) if (!ka.has(t)) diff++;
      if (diff <= 1 && D.key && c.key)                     stages.push('D');
      const E = jaccard(D.st, c.st), F = jaccard(D.ot, c.ot);
      if (stages.length || E >= 0.60 || F >= 0.60)
        hits.push({ id: c.q.id, ch: c.q.chapter, bank: c.q.bank, stages: stages.join('') || '-',
                    E: E.toFixed(2), F: F.toFixed(2), score: stages.length * 10 + E + F });
    }
    hits.sort((a, b) => b.score - a.score);
    if (hits.length) rows.push({ id: d.id, top: hits.slice(0, 5) });
  }
  return rows;
}

/* ---------- validation --------------------------------------------------- */
function validate(M, Q) {
  const chaps = new Set();
  for (const m of M) for (const g of m.groups) for (const ch of g.chapters) chaps.add(ch[0]);
  const mods = new Set(M.map(m => m.id)), ids = new Set();
  let bad = 0;
  for (const q of Q) {
    const e = [];
    if (!mods.has(q.module))  e.push('module ' + q.module);
    if (!chaps.has(q.chapter)) e.push('chapter ' + q.chapter);
    if (ids.has(q.id)) e.push('DUPLICATE id'); ids.add(q.id);
    if (q.type !== 'case') {
      if (!Array.isArray(q.options) || q.options.length < 2) e.push('options');
      if (!(q.answer >= 0 && q.answer < (q.options || []).length)) e.push('answer out of range');
    }
    if (!q.source) e.push('no source');
    if (!q.explanation) e.push('no explanation');
    if (q.image && !q.imgAlt) e.push('image without imgAlt');
    if (e.length) { bad++; console.log('  ' + q.id + ': ' + e.join(', ')) }
  }
  const txt = Q.map(q => [q.stem, q.explanation, q.objective, q.source].join(' ')).join(' ');
  const refs = new Set((txt.match(/`[a-z]{2,6}(?:ep|hd|qb|mcq)[a-z0-9-]*[0-9]`/g) || []).map(s => s.slice(1, -1)));
  const dead = [...refs].filter(r => !ids.has(r));
  return { bad, dead, ids };
}

/* ---------- the marker count -------------------------------------------
   ⚠️ THE STRIP IS NOT OPTIONAL. Older ENT entries italicise the marker and newer
   ones do not; a probe without .replace(/\*+$/,'') under-counted by 239 there and
   looked like catastrophic content loss. And the question is "does explanation END
   with it", never "does the entry contain it" — that distinction is what exposed
   fourteen entries carrying the marker in `source` instead. */
const MARK = /prints no explanation here/;
function markers(Q) {
  const P = Q.filter(q => q.module === 'pediatrics');
  const end = P.filter(q => MARK.test(String(q.explanation || '').replace(/\*+$/, '').trim())).length;
  const src = P.filter(q => MARK.test(String(q.source || ''))).length;
  return { total: P.length, end, src };
}

/* ---------- run ---------------------------------------------------------- */
const { M, Q } = loadCorpus();
console.log('=== VALIDATION ===');
const v = validate(M, Q);
const mk = markers(Q);
console.log('QUESTIONS total: ' + Q.length + ' | bad: ' + v.bad + ' | dead backticked ids: ' + v.dead.length +
            (v.dead.length ? ' -> ' + v.dead.slice(0, 20).join(' ') : ''));
console.log('PEDIATRICS: ' + mk.total + ' | marker at end of explanation: ' + mk.end +
            ' | ⚠️ marker misplaced into source: ' + mk.src);
const byCh = {}; for (const q of Q) if (q.module === 'pediatrics') byCh[q.chapter] = (byCh[q.chapter] || 0) + 1;
console.log('by chapter:', JSON.stringify(byCh));

const arg = process.argv[2];
if (arg) {
  const raw = fs.readFileSync(arg, 'utf8');
  let draft;
  try { draft = vm.runInNewContext('[' + raw.replace(/,\s*$/, '') + ']') }
  catch (e) { console.log('\nDRAFT PARSE FAIL: ' + e.message); process.exit(1) }
  console.log('\n=== SWEEP: ' + path.basename(arg) + ' (' + draft.length + ' drafted) ===');

  /* within-batch first — a bank reprints itself, and that fold takes NO alsoIn */
  console.log('\n-- within batch --');
  const wb = sweep(draft, draft).filter(r => r.top.some(t => t.id !== r.id));
  let wbn = 0;
  for (const r of wb) {
    const t = r.top.filter(x => x.id !== r.id);
    if (!t.length) continue;
    wbn++;
    console.log('  ' + r.id + ' -> ' + t.map(x => x.id + '[' + x.stages + ' E' + x.E + ' F' + x.F + ']').join('  '));
  }
  if (!wbn) console.log('  (nothing)');

  console.log('\n-- against the live corpus --');
  const rows = sweep(draft, Q);
  if (!rows.length) console.log('  (nothing)');
  for (const r of rows)
    console.log('  ' + r.id + ' -> ' + r.top.map(x => x.id + '(' + x.bank + '/' + x.ch + ')[' + x.stages + ' E' + x.E + ' F' + x.F + ']').join('  '));

  console.log('\n⚠️ THE RANKED LIST IS A SHORTLIST TO READ, NOT A VERDICT.');
  console.log('   A-D key on the ANSWER, so a re-optioned reprint passes all four.');
  console.log('   E reads only the stem; F only the options. In three ENT chapters the real');
  console.log('   fold reached neither A nor B, and one folded at F = 0.13.');
  console.log('   Fold test: same stem + same key + a DROPPED or ADDED distractor = reprint.');
  console.log('   A REPLACED distractor, or same options + different stem = hold both.');
  console.log('   Cross-bank fold -> add alsoIn. Within-bank reprint -> hold once, NO alsoIn.');
}
