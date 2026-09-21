// Neuro endpoint: second pass over finished chapters. Re-runs the independent key read for every answer page it missed
// (gateway 503 "capacity busy" is transient), then rebuilds the draft and its machine checks.
// usage (from the repo root): node tools/bank-harness/npep-finish.mjs <queue.json> <token> [<token> ...]      (or "all")
import fs from 'node:fs';
import { spawn } from 'node:child_process';

const [QUEUE, ...WANT] = process.argv.slice(2);
if (!QUEUE || !WANT.length) throw new Error('usage: node tools/bank-harness/npep-finish.mjs <queue.json> <token...|all>');
const W = 'content/neuro/qb-pages/_ep-work';
const H = 'tools/bank-harness';
const queue = JSON.parse(fs.readFileSync(QUEUE, 'utf8')).filter(c => WANT[0] === 'all' || WANT.includes(c.token));
const run = (args, logFile) => new Promise(res => {
  const fd = fs.openSync(logFile, 'a');
  const c = spawn('node', args, { stdio: ['ignore', fd, fd] });
  c.on('close', code => { fs.closeSync(fd); res(code); });
});
for (const ch of queue) {
  const dir = `${W}/${ch.token}`;
  if (!fs.existsSync(`${dir}/pairs.json`)) { console.log(`[${ch.token}] no pairs.json, skipped`); continue; }
  await run([`${H}/npep-keyread.mjs`, W, `${dir}/pairs.json`, `${dir}/keyread.json`], `${dir}/keyread.log`);
  await run([`${H}/npep-build.mjs`, ch.token, ch.chapter, ch.name, `${dir}/rows`, `${dir}/keyread.json`, W, `content/neuro/qb-pages/np-ep-${ch.token}.draft.js`, `${dir}/checks.md`], `${dir}/build.log`);
  const checks = fs.readFileSync(`${dir}/checks.md`, 'utf8');
  const flagged = (checks.match(/^- n\d+/gm) || []).length;
  const nokey = (checks.match(/no independent key read/g) || []).length;
  const disagree = (checks.match(/KEY DISAGREE/g) || []).length;
  console.log(`[${ch.token}] rebuilt: flagged ${flagged}, no key read ${nokey}, key disagree ${disagree}`);
}
