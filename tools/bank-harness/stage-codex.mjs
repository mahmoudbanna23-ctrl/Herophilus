// Stage already-rendered pages through Codex (own login), one `codex exec -i` call per page.
// usage: node stage-codex.mjs <first> <last> <renderFolder> <out.json>
// Resume-safe: pages already in out.json are skipped; out.json is rewritten after every page.
// ponytail: serial, ~30 s a page. Parallelise only if an hour per section becomes the bottleneck.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';

const [first, last, folder, outJson] = [+process.argv[2], +process.argv[3], process.argv[4], process.argv[5]];
const MODEL = process.env.CODEX_MODEL || 'gpt-5.6-terra';
// Same prompt the gateway stager uses, read out of its source so the two never drift.
const src = readFileSync('D:/claude os/Tools/omniroute/stage-pages.mjs', 'utf8');
const PROMPT = src.slice(src.indexOf('const PROMPT = `') + 16).split('`;')[0];
if (PROMPT.length < 200) throw new Error('could not lift PROMPT from stage-pages.mjs');

const results = existsSync(outJson) ? JSON.parse(readFileSync(outJson, 'utf8')) : [];
const have = new Set(results.map(r => r.pdf_page));
let failsInRow = 0;

for (let page = first; page <= last; page++) {
  if (have.has(page)) continue;
  const png = join(folder, `p-${page}.png`);
  if (!existsSync(png)) { console.log(`p.${page}  NO RENDER`); continue; }
  const lastMsg = join(folder, `_codex-${page}.txt`);
  const r = spawnSync('codex', ['exec', '-m', MODEL, '-s', 'read-only', '--skip-git-repo-check', '-i', png, '-o', lastMsg, '-'],
    { input: PROMPT + `\n\nThe PDF page number of this image is ${page}. Set pdf_page to ${page}. Your final message must be the JSON object and nothing else: no greeting, no "AGENTS.md loaded" line.`, shell: true, encoding: 'utf8', timeout: 240000 });
  const parse = () => {
    try {
      const t = readFileSync(lastMsg, 'utf8');
      return JSON.parse(t.slice(t.indexOf('{'), t.lastIndexOf('}') + 1));
    } catch (e) { return null; }
  };
  let obj = parse();
  if (!obj && process.env.SKIP_PAGES !== '1') {
    // One retry, as stage-pages.mjs does: Codex now and then answers with only its greeting line.
    spawnSync('codex', ['exec', '-m', MODEL, '-s', 'read-only', '--skip-git-repo-check', '-i', png, '-o', lastMsg, '-'],
      { input: PROMPT + `\n\nThe PDF page number of this image is ${page}. Set pdf_page to ${page}. Reply with the JSON object only.`, shell: true, encoding: 'utf8', timeout: 240000 });
    obj = parse();
  }
  if (obj && obj.page_type) {
    obj.pdf_page = page; obj.staged_by = 'codex ' + MODEL;
    results.push(obj); results.sort((a, b) => a.pdf_page - b.pdf_page);
    writeFileSync(outJson, JSON.stringify(results, null, 2));
    failsInRow = 0;
    console.log(`p.${page}  OK  ${obj.page_type}`);
  } else {
    failsInRow++;
    console.log(`p.${page}  FAIL  exit ${r.status}  ${(r.stderr || '').slice(-200).replace(/\s+/g, ' ')}`);
    if (failsInRow >= 2) { console.log('two failures in a row, stopping (no retry loop).'); break; }
  }
}
console.log(`${results.length} rows in ${outJson}`);
