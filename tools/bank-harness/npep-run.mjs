// Neuro endpoint: queue runner. One chapter at a time: pairs -> parallel Codex rows + independent Gemini key read -> draft + machine checks.
// usage (from the repo root): node tools/bank-harness/npep-run.mjs <queue.json> <token> [<token> ...]      (or "all")
// queue.json: [{ "token":"ms", "name":"Multiple sclerosis", "chapter":"nr-ms" | "AUTO", "first":283, "last":353 }, ...]
// Needs the whole-book prep done first (npep-prep.mjs): pages and OCR under content/neuro/qb-pages/_ep-work.
// Writes <work>/<token>/{pairs.json,pairs.log,rows/,keyread.json,checks.md,summary.json} and content/neuro/qb-pages/np-ep-<token>.draft.js.
// NPEP_K = parallel Codex drivers (default 8). A chapter with over half its rows missing after two passes is treated as a
// Codex usage limit: the queue stops there, never a retry loop.
import fs from 'node:fs';
import { spawn } from 'node:child_process';

const [QUEUE, ...WANT] = process.argv.slice(2);
if (!QUEUE || !WANT.length) throw new Error('usage: node tools/bank-harness/npep-run.mjs <queue.json> <token...|all>');
const W = 'content/neuro/qb-pages/_ep-work';
const K = +process.env.NPEP_K || 8;
const H = 'tools/bank-harness';
const pad = p => String(p).padStart(4, '0');
const queue = JSON.parse(fs.readFileSync(QUEUE, 'utf8')).filter(c => WANT[0] === 'all' || WANT.includes(c.token));
const say = s => console.log(new Date().toISOString().slice(11, 19), s);
const run = (args, logFile) => new Promise(res => {
  const fd = fs.openSync(logFile, 'a');
  const c = spawn('node', args, { stdio: ['ignore', fd, fd] });
  c.on('close', code => { fs.closeSync(fd); res(code); });
});
for (const ch of queue) {
  const dir = `${W}/${ch.token}`;
  fs.mkdirSync(`${dir}/rows`, { recursive: true });
  say(`[${ch.token}] ${ch.name} pp.${ch.first}-${ch.last}`);
  fs.writeFileSync(`${dir}/pairs.log`, '');
  await run([`${H}/npep-pairs.mjs`, W, String(ch.first), String(ch.last), `${dir}/pairs.json`], `${dir}/pairs.log`);
  if (!fs.existsSync(`${dir}/pairs.json`)) { say(`[${ch.token}] no pairs, skipped`); continue; }
  const pairs = JSON.parse(fs.readFileSync(`${dir}/pairs.json`, 'utf8'));
  const N = pairs.length;
  if (!N) { say(`[${ch.token}] 0 pairs, skipped`); continue; }
  const size = Math.ceil(N / K), chunks = [];
  for (let a = 0; a < N; a += size) chunks.push([a, Math.min(a + size - 1, N - 1)]);
  const have = () => pairs.filter(r => fs.existsSync(`${dir}/rows/${r.pk}.json`) || fs.existsSync(`${dir}/rows/${r.pk}.rejected.json`)).length;
  const keyJob = run([`${H}/npep-keyread.mjs`, W, `${dir}/pairs.json`, `${dir}/keyread.json`], `${dir}/keyread.log`);
  for (let pass = 1; pass <= 2 && have() < N; pass++) {
    await Promise.all(chunks.map(([a, b], i) => run([`${H}/npep-codex-rows.mjs`, W, `${dir}/pairs.json`, `${dir}/rows`, ch.chapter, String(a), String(b)], `${dir}/codex-p${pass}-${i}.log`)));
    say(`[${ch.token}] pass ${pass}: ${have()} of ${N} rows`);
  }
  await keyJob;
  const rows = have(), rejected = pairs.filter(r => fs.existsSync(`${dir}/rows/${r.pk}.rejected.json`)).length;
  await run([`${H}/npep-build.mjs`, ch.token, ch.chapter, ch.name, `${dir}/rows`, `${dir}/keyread.json`, W, `content/neuro/qb-pages/np-ep-${ch.token}.draft.js`, `${dir}/checks.md`], `${dir}/build.log`);
  const flagged = (fs.readFileSync(`${dir}/checks.md`, 'utf8').match(/^- n\d+:/gm) || []).length;
  const irregular = fs.readFileSync(`${dir}/pairs.log`, 'utf8').split('\n').filter(l => /^(p\.|Q\d|printed number)/.test(l)).length;
  const sum = { token: ch.token, name: ch.name, chapter: ch.chapter, pairs: N, rows: rows - rejected, rejectedSoft: rejected, missing: N - rows, flagged, irregularPages: irregular };
  fs.writeFileSync(`${dir}/summary.json`, JSON.stringify(sum, null, 1));
  say(`[${ch.token}] DONE pairs ${N} rows ${rows} missing ${N - rows} flagged ${flagged} irregular ${irregular}`);
  if (rows < N / 2) { say(`[${ch.token}] STOP: over half the rows missing, likely a Codex usage limit. Queue halted.`); break; }
}
say('queue finished');
