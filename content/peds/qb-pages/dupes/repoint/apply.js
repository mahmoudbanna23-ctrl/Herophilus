// Applies repoint/verdicts.json to the four Pediatrics question files, BEFORE the splice.
// Usage (from the Herophilus root): node content/peds/qb-pages/dupes/repoint/apply.js [--write]
// Dry run writes the patched files to repoint/out/; --write copies them over app/data/ after every check passes.
// Each touched field is rebuilt at the decoded level and written back as one JSON string literal, then the
// patched file is loaded again and compared entry by entry: only the listed fields may differ.
const fs = require('fs'), path = require('path'), vm = require('vm');
const D = __dirname, root = path.resolve(D, '..', '..', '..', '..', '..'), dataDir = path.join(root, 'app', 'data'), outDir = path.join(D, 'out');
const FILES = [['questions.peds.js', 'Q_PEDS'], ['questions.peds.ep.js', 'Q_PEDS_EP'], ['questions.peds.ep2.js', 'Q_PEDS_EP2'], ['questions.peds.sa.js', 'Q_PEDS_SA']];
const load = (t, n) => { const box = {}; vm.runInNewContext(t, box); return box[n]; };
const fail = [], BS = String.fromCharCode(92);
const vi = process.argv.indexOf('--verdicts'); // default repoint/verdicts.json
const verdicts = JSON.parse(fs.readFileSync(vi > -1 ? process.argv[vi + 1] : path.join(D, 'verdicts.json'), 'utf8'));
const keepOf = new Map(JSON.parse(fs.readFileSync(path.join(D, '..', 'merge-list.json'), 'utf8')).map(m => [m.dead, m.keep])), dead = new Set(keepOf.keys());
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, BS + '$&');
const idRe = id => new RegExp(esc(id) + '(?!-?[0-9])', 'g'); // never match inside a longer id (pedhd-inf-18 in pedhd-inf-180, pedsa-b2-9 in pedsa-b2-9-1)
const MARK = /\s*(?:Written for this bank\b|\*The expansion above this line)[^]*$/; // both closing-marker shapes

const texts = new Map(), E = new Map();
for (const [f, n] of FILES) { const t = fs.readFileSync(path.join(dataDir, f), 'utf8'); texts.set(f, t); load(t, n).forEach(q => E.set(q.id, { q, f })); }

// new decoded value per (entry id, field)
const next = new Map(), cur = (id, field) => next.has(id + '|' + field) ? next.get(id + '|' + field) : E.get(id).q[field];
const count = (s, x) => s.split(x).length - 1;
for (const v of verdicts) {
  const tag = `${v.carrier}.${v.field} (${v.dead})`;
  if (!E.has(v.carrier) || !E.has(v.keep)) { fail.push(tag + ': id not in the data files'); continue; }
  const s = cur(v.carrier, v.field);
  if (typeof s !== 'string') { fail.push(tag + ': field is not a string'); continue; }
  if (keepOf.get(v.dead) !== v.keep || !['explanation', 'objective', 'source'].includes(v.field)) { fail.push(tag + ': not a merge-list pair, or not a text field'); continue; }
  if (v.op === 'swap' || v.op === 'append-keeper') {
    if (!idRe(v.dead).test(s)) { fail.push(tag + ': removed id not in the field'); continue; }
    next.set(v.carrier + '|' + v.field, s.replace(idRe(v.dead), () => v.keep));
    if (v.op === 'append-keeper') {
      const k = cur(v.keep, 'explanation'), from = E.get(v.dead) && E.get(v.dead).q.explanation;
      if (typeof k !== 'string' || !v.append || !String(from).includes(v.append)) { fail.push(tag + ': append is not a verbatim passage of the removed copy'); continue; }
      if (!k.includes(v.append)) { const m = k.match(MARK); next.set(v.keep + '|explanation', m ? k.slice(0, m.index) + '\n\n' + v.append + m[0] : k + '\n\n' + v.append); }
    }
  } else if (v.op === 'reword') {
    if (count(s, v.find) !== 1) { fail.push(tag + ': find occurs ' + count(s, v.find) + ' times'); continue; }
    next.set(v.carrier + '|' + v.field, s.replace(v.find, () => v.replace));
  } else fail.push(tag + ': op ' + v.op + ' is not applied (judge it first)');
}

// write each new value back as one string literal inside its entry's span
const out = new Map(texts);
const byFile = new Map();
for (const [k, val] of next) { const [id, field] = k.split('|'); const f = E.get(id).f; if (!byFile.has(f)) byFile.set(f, []); byFile.get(f).push({ id, field, val }); }
for (const [f, edits] of byFile) {
  let t = out.get(f);
  const idAt = id => { const m = new RegExp('["\']?id["\']?\\s*:\\s*["\']' + esc(id) + '["\']').exec(t); return m ? m.index : -1; };
  for (const e of edits) {
    const a = idAt(e.id), nextId = /["']?id["']?\s*:\s*["']ped[a-z0-9]+-[a-z0-9]+-[0-9]+(?:-[0-9]+)?["']/g;
    if (a < 0) { fail.push(e.id + ': entry not found in ' + f); continue; }
    nextId.lastIndex = a + 4; const nm = nextId.exec(t), b = nm ? nm.index : t.length;
    const km = new RegExp('(["\']?)' + e.field + '\\1\\s*:\\s*').exec(t.slice(a, b));
    if (!km) { fail.push(e.id + '.' + e.field + ': key not found'); continue; }
    const p = a + km.index + km[0].length, q = t[p];
    if (!'\'"`'.includes(q)) { fail.push(e.id + '.' + e.field + ': value is not a plain string literal'); continue; }
    let i = p + 1; while (i < t.length && t[i] !== q) i += t[i] === BS ? 2 : 1;
    t = t.slice(0, p) + JSON.stringify(e.val) + t.slice(i + 1);
  }
  out.set(f, t);
}

// reload and compare: same entries, only the listed fields changed, each to the intended value
const isId = /ped[a-z0-9]+-[a-z0-9]+-[0-9]+(?:-[0-9]+)?/g;
let left = 0;
for (const [f, n] of FILES) {
  let A; try { A = load(out.get(f), n); } catch (e) { fail.push(f + ': patched file does not load: ' + e.message); continue; }
  const B = load(texts.get(f), n);
  if (A.length !== B.length) fail.push(f + ': entry count ' + B.length + ' -> ' + A.length);
  for (let i = 0; i < B.length; i++) {
    const a = A[i], b = B[i];
    if (!a || !b || a.id !== b.id) { fail.push(f + ': entry ' + i + ' moved or missing'); continue; }
    for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) {
      const want = next.has(b.id + '|' + k) ? next.get(b.id + '|' + k) : b[k];
      if (JSON.stringify(a[k]) !== JSON.stringify(want)) fail.push(b.id + '.' + k + ': patched value is not the intended one');
    }
    if (!dead.has(a.id)) left += (JSON.stringify(a).match(isId) || []).filter(x => x !== a.id && dead.has(x)).length;
  }
}
if (left) fail.push(left + ' pointer(s) to a removed id remain in surviving entries');

fs.mkdirSync(outDir, { recursive: true });
for (const [f] of FILES) fs.writeFileSync(path.join(outDir, f), out.get(f));
console.log('verdicts', verdicts.length, '| fields rewritten', next.size, '| pointers left', left, '| failed checks', fail.length);
if (fail.length) { console.log(fail.join('\n')); process.exit(1); }
if (process.argv.includes('--write')) { for (const [f] of FILES) fs.writeFileSync(path.join(dataDir, f), out.get(f)); console.log('written to app/data'); }
