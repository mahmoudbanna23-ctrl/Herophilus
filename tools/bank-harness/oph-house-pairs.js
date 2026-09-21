const fs = require('fs');
const vm = require('vm');
const path = require('path');

const ROOT = path.resolve(__dirname, '../..');
const DATA = ROOT.replace(/\\/g, '/') + '/app/data/';
function load(f, v) { const c = {}; vm.createContext(c); vm.runInContext(fs.readFileSync(DATA + f, 'utf8') + ';this.__r=' + v + ';', c); return c.__r; }
const H = load('questions.ophtho.js', 'Q_OPHTHO');
const E1 = load('questions.ophtho.ep.js', 'Q_OPHTHO_EP');
const E2 = load('questions.ophtho.ep2.js', 'Q_OPHTHO_EP2');

function normal(s) { return String(s || '').toLowerCase().replace(/\*\*/g, '').replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim(); }
function jaccard(a, b) {
  const A = new Set(normal(a).split(' ').filter(Boolean)), B = new Set(normal(b).split(' ').filter(Boolean));
  const union = new Set([...A, ...B]); let both = 0;
  for (const x of A) if (B.has(x)) both++;
  return union.size ? both / union.size : 0;
}
function metrics(ep, house) {
  const eo = ep.options.map(normal), ho = house.options.map(normal);
  const smaller = eo.length <= ho.length ? eo : ho, other = eo.length <= ho.length ? ho : eo;
  const optOverlap = smaller.length ? smaller.filter(x => other.includes(x)).length / smaller.length : 0;
  const keyEp = normal(ep.options[ep.answer]), keyH = normal(house.options[house.answer]);
  const keyEq = !!keyEp && !!keyH && (keyEp === keyH || keyEp.includes(keyH) || keyH.includes(keyEp));
  return { stemJ: jaccard(ep.stem, house.stem), optOverlap, keyEq, nOptEp: eo.length, nOptH: ho.length, keyEp, keyH };
}
function qualifies(m) { return (m.stemJ >= .55 && m.keyEq) || m.stemJ >= .8 || (m.optOverlap >= .75 && m.stemJ >= .4 && m.keyEq); }
function round(m) { return { ...m, stemJ: Number(m.stemJ.toFixed(3)), optOverlap: Number(m.optOverlap.toFixed(3)) }; }

const endpoints = E1.concat(E2).filter(q => q && Array.isArray(q.options));
const houses = H.filter(q => q && Array.isArray(q.options));
const byEp = new Map(endpoints.map(q => [q.id, q]));
const byHouse = new Map(houses.map(q => [q.id, q]));
const found = new Map();
function add(ep, house, seed) {
  if (!byEp.has(ep) || !byHouse.has(house)) return;
  const k = ep + '\u0000' + house, e = byEp.get(ep), h = byHouse.get(house);
  const previous = found.get(k), m = metrics(e, h);
  found.set(k, { ep, house, houseBank: h.bank, ...round(m), seed: !!seed || !!previous?.seed });
}
for (const ep of endpoints) for (const house of houses) { const m = metrics(ep, house); if (qualifies(m)) add(ep.id, house.id, false); }

const qbase = path.join(ROOT, 'content/ophtho/qb-pages');
const reports = fs.readdirSync(qbase).filter(f => /^oph-ep-p1-s.*\.house-collisions\.md$/i.test(f)).map(f => path.join(qbase, f));
for (const dir of fs.readdirSync(qbase, { withFileTypes: true }).filter(x => x.isDirectory() && /^_s2.*-work$/i.test(x.name))) {
  for (const f of fs.readdirSync(path.join(qbase, dir.name))) if (/imgcheck.*\.md$/i.test(f)) reports.push(path.join(qbase, dir.name, f));
}
const unmapped = new Map();
for (const report of reports) for (const line of fs.readFileSync(report, 'utf8').split(/\r?\n/)) {
  const eps = [...line.matchAll(/\b(ophep2?-[\w-]+)\b/gi)].map(m => m[1]);
  const hs = [...line.matchAll(/\b(op(?:mcq|qb)-[\w-]+)\b/gi)].map(m => m[1]);
  for (const ep of eps) for (const house of hs) add(ep, house, true);
  if (!eps.length && hs.length) {
    const row = line.match(/\bn(\d+)\s+p\.?\d+\/\d+\b/i), section = report.match(/[\\/]_s(2[2-7])-work[\\/]/i);
    if (row && section && /reprint\s+MATCH\(/i.test(line)) for (const house of hs) if (byHouse.has(house)) unmapped.set(`s${section[1]}n${row[1]}\u0000${house}`, { row: `s${section[1]}n${row[1]}`, house });
  }
}
const pairs = [...found.values()].sort((a, b) => a.ep.localeCompare(b.ep) || a.house.localeCompare(b.house));
const output = path.join(qbase, '_close-work'); fs.mkdirSync(output, { recursive: true });
fs.writeFileSync(path.join(output, 'pairs.json'), JSON.stringify({ pairs, unmapped: [...unmapped.values()] }, null, 2) + '\n');
fs.writeFileSync(path.join(output, 'pairs.md'), pairs.map(p => `${p.ep} | ${p.house} | ${p.stemJ} | ${p.optOverlap} | ${p.keyEq} | ${p.seed}`).join('\n') + (pairs.length ? '\n' : ''));
const seedOnly = pairs.filter(p => p.seed && !qualifies(p)).length;
console.log('total pairs:', pairs.length);
console.log('keyEq true:', pairs.filter(p => p.keyEq).length);
console.log('keyEq false:', pairs.filter(p => !p.keyEq).length);
console.log('seed-only:', seedOnly);
console.log('distinct endpoint ids:', new Set(pairs.map(p => p.ep)).size);
console.log('unmapped:', unmapped.size);
