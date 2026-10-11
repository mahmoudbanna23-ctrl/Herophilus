/* Runs app/smoke.html headless from a temp copy (file://) and prints its result list.
 *   node content/peds/qb-pages/dupes/verify/smoke-run.js
 * Read-only: copies app/ to the OS temp dir, touches nothing in the repo.
 * NOTE: smoke.js pins EXPECTED_TOTAL; after the merge that line is EXPECTED to fail
 * (old total - removed). It is a tripwire, not a bug: compare "got" to the arithmetic. */
'use strict';
const fs = require('fs'), os = require('os'), path = require('path');
const { execFileSync } = require('child_process');
const ROOT = path.resolve(__dirname, '..', '..', '..', '..', '..');
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const browser = fs.existsSync(CHROME) ? CHROME : EDGE;
const WORK = path.join(os.tmpdir(), 'herophilus_smoke');
if (WORK.includes('--')) { console.error('REFUSING: path has "--"'); process.exit(1); }
function copyDir(a, b) { fs.mkdirSync(b, { recursive: true });
  for (const e of fs.readdirSync(a, { withFileTypes: true })) { const s = path.join(a, e.name), d = path.join(b, e.name); e.isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d); } }
fs.rmSync(WORK, { recursive: true, force: true });
copyDir(path.join(ROOT, 'app'), path.join(WORK, 'app'));
const url = 'file:///' + path.join(WORK, 'app', 'smoke.html').replace(/\\/g, '/');
let dom = '';
for (let a = 1; a <= 3 && !/<title>SMOKE /.test(dom); a++) {
  try { dom = execFileSync(browser, ['--headless=new', '--disable-gpu', '--no-sandbox', '--no-first-run', '--disable-extensions',
    '--allow-file-access-from-files', '--virtual-time-budget=20000', '--user-data-dir=' + path.join(WORK, 'prof' + a), '--dump-dom', url],
    { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024, timeout: 120000, stdio: ['ignore', 'pipe', 'pipe'] }); }
  catch (e) { dom = e.stdout || ''; }
}
const t = dom.match(/<title>(SMOKE [^<]*)<\/title>/);
(dom.match(/<li>[^<]*<\/li>/g) || []).forEach(l => console.log(l.replace(/<\/?li>/g, '')));
console.log(t ? t[1] : 'NO SMOKE RESULT');
fs.rmSync(WORK, { recursive: true, force: true });
process.exit(t && /PASS/.test(t[1]) ? 0 : 1);
