// Apply approved cross-bank ophthalmology merges.  Dry-run is the default.
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const cp = require('child_process');

const ROOT = path.resolve(__dirname, '..', '..');
const fixtureArg = process.argv.indexOf('--fixture');
const FIXTURE = fixtureArg < 0 ? null : process.argv[fixtureArg + 1];
if (fixtureArg >= 0 && !FIXTURE) throw new Error('--fixture needs a directory');
const DATA = FIXTURE ? path.resolve(FIXTURE) : path.join(ROOT, 'app', 'data');
const CLOSE = FIXTURE ? DATA : path.join(ROOT, 'content', 'ophtho', 'qb-pages', '_close-work');
const WRITE = process.argv.includes('--write');
const FILES = [
  ['questions.ophtho.js', 'Q_OPHTHO'],
  ['questions.ophtho.ep.js', 'Q_OPHTHO_EP'],
  ['questions.ophtho.ep2.js', 'Q_OPHTHO_EP2']
];
const filePath = n => path.join(DATA, n);
const read = f => fs.readFileSync(f, 'utf8');
const die = s => { throw new Error(s); };
function load(file, variable) {
  const c = {}; vm.createContext(c);
  vm.runInContext(read(file) + ';this.__mergeResult=' + variable + ';', c, { filename: file });
  if (!Array.isArray(c.__mergeResult)) die(file + ' did not define ' + variable);
  return c.__mergeResult.filter(Boolean);
}
function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function escString(v, quote) { return String(v).replace(/\\/g, '\\\\').replace(new RegExp(escRe(quote), 'g'), '\\' + quote).replace(/\r/g, '\\r').replace(/\n/g, '\\n'); }
function literal(value, quote) { return quote + escString(value, quote) + quote; }
function balanceEnd(text, open) { // object end; strings and comments are ignored
  let depth = 0, quote = null, slash = false, line = false, block = false;
  for (let i = open; i < text.length; i++) { const ch = text[i], nx = text[i + 1];
    if (line) { if (ch === '\n') line = false; continue; }
    if (block) { if (ch === '*' && nx === '/') { block = false; i++; } continue; }
    if (quote) { if (slash) slash = false; else if (ch === '\\') slash = true; else if (ch === quote) quote = null; continue; }
    if (ch === '/' && nx === '/') { line = true; i++; continue; }
    if (ch === '/' && nx === '*') { block = true; i++; continue; }
    if (ch === '\'' || ch === '"' || ch === '`') { quote = ch; continue; }
    if (ch === '{') depth++; else if (ch === '}' && --depth === 0) return i + 1;
  } die('unclosed object');
}
function blockFor(text, id) {
  const re = new RegExp('(?:["\\\']?id["\\\']?\\s*:\\s*)(["\\\'])' + escRe(id) + '\\1');
  const m = re.exec(text); if (!m) return null;
  const open = text.lastIndexOf('{', m.index); if (open < 0) die(id + ': no opening brace');
  const end = balanceEnd(text, open);
  return { open, end, block: text.slice(open, end) };
}
function field(block, name) {
  const re = new RegExp('(["\\\']?' + escRe(name) + '["\\\']?\\s*:\\s*)(["\\\'])((?:\\\\.|(?!\\2)[\\s\\S])*)\\2');
  const m = re.exec(block); if (!m) return null;
  // Evaluate only a string literal, preserving the source spelling elsewhere.
  const value = vm.runInNewContext(m[2] + m[3] + m[2]);
  return { match: m[0], prefix: m[1], quote: m[2], value };
}
function replaceField(block, name, value) {
  const f = field(block, name); if (!f) die(name + ' field missing');
  return block.replace(f.match, f.prefix + literal(value, f.quote));
}
function alsoIn(block) {
  const m = block.match(/["']?alsoIn["']?\s*:\s*\[([^\]]*)\]/); if (!m) return null;
  return [...m[1].matchAll(/["']([^"']+)["']/g)].map(x => x[1]);
}
function setAlsoIn(block, banks) {
  const existing = block.match(/(["']?alsoIn["']?\s*:\s*)\[\s*(["'])/);
  if (existing) return block.replace(/["']?alsoIn["']?\s*:\s*\[[^\]]*\]/, existing[1] + '[' + banks.map(x => existing[2] + x + existing[2]).join(',') + ']');
  const m = block.match(/(\n)([ \t]*)(["']?bank["']?\s*:\s*)(["'])((?:\\.|(?!\4)[\s\S])*)\4(,?)/);
  if (m) return block.replace(m[0], m[0] + m[1] + m[2] + 'alsoIn:[' + banks.map(x => m[4] + x + m[4]).join(',') + '],');
  // bank shares a line with other fields (id:"..", bank:"endpoint", module:...): insert inline
  const n = block.match(/(["']?bank["']?\s*:\s*)(["'])((?:\\.|(?!\2)[\s\S])*)\2,/);
  if (!n) die('bank field missing for alsoIn insertion');
  return block.replace(n[0], n[0] + ' alsoIn:[' + banks.map(x => n[2] + x + n[2]).join(',') + '],');
}
function removeBlock(text, b) {
  let end = b.end, k = end;
  while (k < text.length && /\s/.test(text[k])) k++; // the separating comma may sit on its own line
  if (text[k] === ',') end = k + 1;
  if (text.slice(end, end + 2) === '\r\n') end += 2; else if (text[end] === '\n') end++;
  return text.slice(0, b.open) + text.slice(end);
}
function deep(x) { return JSON.parse(JSON.stringify(x)); }
function bankFromId(id) { return id.startsWith('opmcq-') ? 'house' : id.startsWith('opqb-') ? 'gradegain' : null; }
function title(bank) { return bank === 'house' ? 'House' : 'Grade Gain'; }
function dataFiles() { return FILES.map(([n, v]) => ({ name:n, variable:v, path:filePath(n) })); }
function allJsFiles() { return fs.readdirSync(DATA).filter(n => n.endsWith('.js')).map(n => filePath(n)); }
// whole-id match: `opmcq-c12-1` must not hit inside `opmcq-c12-19`
function idRe(id) { return new RegExp('(?<![A-Za-z0-9_-])' + escRe(id) + '(?![A-Za-z0-9_-])', 'g'); }
function replaceRefs(text, oldId, survivor) {
  // qs lists get de-duplicated while retaining their original quote convention.
  text = text.replace(/qs\s*:\s*\[([\s\S]*?)\]/g, (whole, inside) => {
    const ids = [...inside.matchAll(/(["'])([^"']+)\1/g)];
    if (!ids.some(x => x[2] === oldId)) return whole;
    const out = [], seen = new Set();
    for (const x of ids) { const id = x[2] === oldId ? survivor : x[2]; if (!seen.has(id)) { seen.add(id); out.push(x[1] + id + x[1]); } }
    return whole.replace(inside, out.join(','));
  });
  return text.replace(idRe(oldId), survivor);
}

const decisionsPath = path.join(CLOSE, 'merge-decisions.json');
const decisions = JSON.parse(read(decisionsPath));
if (!Array.isArray(decisions.merges)) die('merge-decisions.json needs merges array');
const beforeFiles = dataFiles();
const beforeArrays = new Map(beforeFiles.map(f => [f.name, load(f.path, f.variable)]));
const live = new Map();
for (const [name, rows] of beforeArrays) for (const q of rows) { if (live.has(q.id)) die('duplicate id: ' + q.id); live.set(q.id, { q, name }); }
const usedTwins = new Set(), groups = new Map(), skipped = [];
for (const d of decisions.merges) {
  if (!d || typeof d.survivor !== 'string' || !Array.isArray(d.twins)) die('bad merge decision');
  const s = live.get(d.survivor);
  if (!s || s.q.bank !== 'endpoint') die('survivor is not a live endpoint id: ' + d.survivor);
  const g = groups.get(d.survivor) || { survivor:d.survivor, twins:[], notes:[] }; groups.set(d.survivor, g);
  if (d.note !== undefined && typeof d.note !== 'string') die('note must be a string'); if (d.note) g.notes.push(d.note);
  for (const id of d.twins) {
    if (usedTwins.has(id)) die('twin used twice: ' + id); usedTwins.add(id);
    const inferred = bankFromId(id), t = live.get(id), listed = Array.isArray(s.q.alsoIn) && s.q.alsoIn.includes(inferred);
    if (!t) { if (inferred && listed) { skipped.push(id); continue; } die('missing twin or half-applied state: ' + id); }
    if (!inferred || !['house','gradegain'].includes(t.q.bank) || t.q.bank !== inferred) die('twin is not live House/Grade Gain: ' + id);
    g.twins.push({ id, bank:t.q.bank, source:String(t.q.source || ''), name:t.name });
  }
}
const active = [...groups.values()].filter(g => g.twins.length);
const plan = [], expected = new Map();
for (const g of active) {
  const s = live.get(g.survivor).q, banks = ['house','gradegain'].filter(b => (s.alsoIn || []).includes(b) || g.twins.some(t => t.bank === b));
  expected.set(g.survivor, { banks, source:String(s.source || '') + g.twins.map(t => '; also printed in ' + title(t.bank) + ' bank, ' + t.source).join(''), explanation:String(s.explanation || '') + (g.notes.length ? ' ' + g.notes.join(' ') : '') });
  plan.push(g.survivor + ' | ' + g.twins.map(t => t.id).join(', ') + ' | ' + banks.join(',') + ' | ' + g.twins.map(t => title(t.bank)).join(', ') + ' | note ' + (g.notes.length ? 'yes' : 'no') + ' | repoints pending');
}
const planPath = path.join(CLOSE, 'merge.plan.md');
fs.writeFileSync(planPath, plan.join('\n') + '\n\nTotals: merges ' + active.length + '; twins removed ' + active.reduce((n,g)=>n+g.twins.length,0) + '; repoints pending.\n', 'utf8');
console.log('plan: ' + planPath); if (skipped.length) console.log('idempotent skips: ' + skipped.join(', '));
if (!WRITE) process.exit();

const originals = new Map(allJsFiles().map(f => [f, read(f)]));
let texts = new Map(originals);
for (const g of active) {
  const sf = live.get(g.survivor).name, p = filePath(sf), b = blockFor(texts.get(p), g.survivor), e = expected.get(g.survivor);
  let changed = setAlsoIn(b.block, e.banks); changed = replaceField(changed, 'source', e.source); if (g.notes.length) changed = replaceField(changed, 'explanation', e.explanation);
  texts.set(p, texts.get(p).slice(0,b.open) + changed + texts.get(p).slice(b.end));
}
for (const g of active) for (const t of g.twins) { const p = filePath(t.name), b = blockFor(texts.get(p), t.id); if (!b) die('twin disappeared before removal: ' + t.id); texts.set(p, removeBlock(texts.get(p), b)); }
let repoints = 0;
for (const g of active) for (const t of g.twins) for (const [p, old] of texts) { const next = replaceRefs(old, t.id, g.survivor); if (next !== old) { repoints += (old.match(idRe(t.id)) || []).length; texts.set(p,next); } }
for (const [p, text] of texts) fs.writeFileSync(p, text, 'utf8');
fs.writeFileSync(planPath, plan.map(x => x.replace('repoints pending', 'repoints applied')).join('\n') + '\n\nTotals: merges ' + active.length + '; twins removed ' + active.reduce((n,g)=>n+g.twins.length,0) + '; repoints ' + repoints + '.\n', 'utf8');

// Twin ids quoted inside a survivor's own text were repointed too, so the expectation is repointed the same way.
const rp = str => active.reduce((acc, g) => g.twins.reduce((x, t) => replaceRefs(x, t.id, g.survivor), acc), String(str));
// Post-write proof.
const after = new Map(); for (const f of dataFiles()) for (const q of load(f.path,f.variable)) after.set(q.id,q);
for (const [name, rows] of beforeArrays) { const removed = active.flatMap(g=>g.twins).filter(t=>t.name===name).length; if (afterArraysLength(name) !== rows.length-removed) die('count mismatch: '+name); }
function afterArraysLength(name) { const f = dataFiles().find(x=>x.name===name); return load(f.path,f.variable).length; }
for (const g of active) { const e=expected.get(g.survivor), old=live.get(g.survivor).q, now=after.get(g.survivor); if (!now || JSON.stringify(now.alsoIn)!==JSON.stringify(e.banks) || now.source!==rp(e.source) || now.explanation!==rp(e.explanation) || !now.source.startsWith(rp(old.source)) || !now.explanation.startsWith(rp(old.explanation))) die('survivor verification failed: '+g.survivor); for(const k of new Set([...Object.keys(old),...Object.keys(now)])) if (!['alsoIn','source','explanation'].includes(k) && JSON.stringify(old[k])!==JSON.stringify(now[k])) die('unexpected survivor change: '+g.survivor+'.'+k); }
for (const [id,x] of live) if (!usedTwins.has(id) && !expected.has(id) && JSON.stringify(after.get(id))!==JSON.stringify(x.q)) {
  const now=after.get(id), changed=[...new Set([...Object.keys(x.q),...Object.keys(now)])].filter(k=>JSON.stringify(x.q[k])!==JSON.stringify(now[k]));
  if (!changed.length || changed.some(k=>!['source','explanation','qs'].includes(k))) die('untouched entry changed: '+id);
}
for (const t of active.flatMap(g=>g.twins)) if (after.has(t.id)) die('removed id remains: '+t.id);
for (const f of dataFiles()) { const r=cp.spawnSync(process.execPath,['--check',f.path],{encoding:'utf8'}); if(r.status) die('--check failed: '+f.name); }
for (const t of active.flatMap(g=>g.twins)) for (const [p,txt] of texts) { let scrub=txt; for(const g of active) if (g.twins.some(x=>x.id===t.id)) { const b=blockFor(scrub,g.survivor); if(b) scrub=scrub.slice(0,b.open)+replaceField(b.block,'source','')+scrub.slice(b.end); } if(scrub.search(idRe(t.id))>=0) die('removed id remains outside source suffix: '+t.id+' in '+p); }
console.log('write verification passed; repoints ' + repoints);
