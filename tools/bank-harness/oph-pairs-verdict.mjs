import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const require = createRequire(import.meta.url);
const fs = require('node:fs');
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const DATA = ROOT.replace(/\\/g, '/') + '/app/data/';
function load(f, v) { const c = {}; vm.createContext(c); vm.runInContext(readFileSync(DATA + f, 'utf8') + ';this.__r=' + v + ';', c); return c.__r; }
const H = load('questions.ophtho.js', 'Q_OPHTHO');
const E = load('questions.ophtho.ep.js', 'Q_OPHTHO_EP').concat(load('questions.ophtho.ep2.js', 'Q_OPHTHO_EP2'));
const by = new Map(H.concat(E).map(q => [q.id, q]));
const outDir = resolve(ROOT, 'content/ophtho/qb-pages/_close-work');
const pairs = JSON.parse(readFileSync(resolve(outDir, process.env.PAIRS || 'pairs.json'), 'utf8')).pairs;
const SH = (process.env.SHARD || '').split('/').map(Number);
const outFile = resolve(outDir, process.env.PAIRS ? 'pairs-verdict.extra.json' : SH.length === 2 ? 'pairs-verdict.shard' + SH[0] + '.json' : 'pairs-verdict.json');
const seedFile = resolve(outDir, 'pairs-verdict.json');
const dry = process.argv.includes('--dry');
function show(q) { return `Stem: ${q.stem}\nOptions:\n${q.options.map((x, i) => `${i + 1}. ${x}`).join('\n')}\nPrinted correct option: ${q.answer + 1}. ${q.options[q.answer]}`; }
function prompt(a, b) { return `Compare these two medical multiple-choice questions. Return strict JSON only, exactly {"same_question":true|false,"same_key":true|false,"difference":"<max 20 words, empty if none>"}. same_question means the same clinical fact tested and same answer content, ignoring wording, option order, and filler options.\n\nQuestion A (endpoint):\n${show(a)}\n\nQuestion B (House):\n${show(b)}`; }
if (dry) { const p = pairs[0]; if (!p) throw new Error('no pairs'); console.log(prompt(by.get(p.ep), by.get(p.house))); process.exit(0); }
const VAR = 'OMNIROUTE_API_KEY';
const key = process.env[VAR] || execFileSync('reg', ['query', 'HKCU\\Environment', '/v', VAR], { encoding: 'utf8' }).match(/REG_(?:EXPAND_)?SZ\s+(.+)/)[1].trim();
let verdicts = existsSync(outFile) ? JSON.parse(readFileSync(outFile, 'utf8')) : [];
if (SH.length === 2 && existsSync(seedFile)) verdicts = verdicts.concat([]);
const done = new Set(verdicts.concat(SH.length === 2 && existsSync(seedFile) ? JSON.parse(readFileSync(seedFile, 'utf8')) : []).map(v => `${v.ep}\u0000${v.house}`)); mkdirSync(outDir, { recursive: true });
let gap = 2000, failures = 0;
const wait = ms => new Promise(r => setTimeout(r, ms));
for (const [pi, pair] of pairs.entries()) {
  if (SH.length === 2 && pi % SH[1] !== SH[0]) continue;
  if (done.has(`${pair.ep}\u0000${pair.house}`)) continue;
  const a = by.get(pair.ep), b = by.get(pair.house); if (!a || !b) throw new Error(`live question missing: ${pair.ep} / ${pair.house}`);
  for (;;) {
    let status = 0, body = '', response;
    try { response = await fetch('http://localhost:20128/v1/chat/completions', { method: 'POST', headers: { 'content-type': 'application/json', Authorization: 'Bearer ' + key, 'x-omniroute-no-cache': 'true' }, body: JSON.stringify({ model: process.env.VERDICT_MODEL || 'work-text', max_tokens: 800, messages: [{ role: 'user', content: prompt(a, b) }] }), signal: AbortSignal.timeout(180000) }); status = response.status; body = await response.text(); }
    catch (e) { body = e.message; }
    if (status === 429) { gap = Math.min(gap * 2, 60000); console.error(`429 for ${pair.ep} / ${pair.house}; retrying after ${gap} ms`); await wait(gap); continue; }
    if (status !== 200) { failures++; console.error(`failure ${failures}: HTTP ${status}: ${body.slice(0, 200)}`); if (failures >= 2) process.exitCode = 1; if (failures >= 2) break; await wait(gap); continue; }
    try {
      let text = (JSON.parse(body).choices?.[0]?.message?.content || '').trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '');
      const v = JSON.parse(text); if (typeof v.same_question !== 'boolean' || typeof v.same_key !== 'boolean' || typeof v.difference !== 'string') throw new Error('bad verdict schema');
      verdicts.push({ ep: pair.ep, house: pair.house, same_question: v.same_question, same_key: v.same_key, difference: v.difference.split(/\s+/).slice(0, 20).join(' '), servedBy: JSON.parse(body).model || response.headers.get('x-served-by') || '' });
      writeFileSync(outFile, JSON.stringify(verdicts, null, 2) + '\n'); failures = 0; await wait(gap); break;
    } catch (e) { failures++; console.error(`failure ${failures}: ${e.message}`); if (failures >= 2) { process.exitCode = 1; break; } await wait(gap); }
  }
  if (failures >= 2) break;
}
