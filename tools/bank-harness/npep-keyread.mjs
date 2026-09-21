// Neuro endpoint: independent key read. One single-shot gateway call per ANSWER page (work-vision combo, a different
// house from the Codex staging) asking only which option is visibly marked. Compared afterwards against Codex's key.
// usage: node npep-keyread.mjs <ocrDir> <pairs.json> <out.json>     (paths relative to the repo root)
// Resume-safe. Stops cleanly on 429. Never auto/*.
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const [OCR, PAIRS, OUT] = process.argv.slice(2);
if (!OCR || !PAIRS || !OUT) throw new Error('usage: node npep-keyread.mjs <ocrDir> <pairs.json> <out.json>');
const pad = p => String(p).padStart(4, '0');
const key = process.env.OMNIROUTE_API_KEY || execFileSync('reg', ['query', 'HKCU\\Environment', '/v', 'OMNIROUTE_API_KEY'], { encoding: 'utf8' }).match(/REG_(?:EXPAND_)?SZ\s+(.+)/)[1].trim();
const PROMPT = 'This is the ANSWER page of a scanned multiple-choice question bank. One option is visibly marked as the correct answer (highlighted, coloured, boxed, ticked or underlined). ' +
  'Transcribe the page exactly as printed and reply with ONLY a JSON object: {"marked":"a"|"b"|"c"|"d"|"e"|null,"printed_options":<number of options printed>,"how":"<short description of the mark>",' +
  '"stem":"<the question text, without its number>","options":["<option text without its letter>", ...],"box":"<the text of any printed explanation box or note, verbatim, or empty>"}. ' +
  'Use null for marked if you see no such mark; never guess from medical knowledge. Copy every number and unit exactly.';
const res = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : {};
for (const r of JSON.parse(fs.readFileSync(PAIRS, 'utf8'))) {
  const pk = r.pk || 'n' + r.n;
  if (res[pk] && res[pk].stem !== undefined) continue;   // an entry without `stem` is from the key-only version: read it again
  const url = 'data:image/png;base64,' + fs.readFileSync(`${OCR}/pages/p-${pad(r.a || r.q)}.png`).toString('base64');
  let status = 0, txt = '';
  for (let t = 0; t < 5 && !(status === 429 || (status === 200 && txt)); t++) {
    if (t) await new Promise(ok => setTimeout(ok, 8000 * t));   // 503 "capacity busy" is transient: back off 8/16/24/32 s
    try {
      const x = await fetch('http://localhost:20128/v1/chat/completions', {
        method: 'POST', headers: { 'content-type': 'application/json', Authorization: 'Bearer ' + key, 'x-omniroute-no-cache': 'true' },
        body: JSON.stringify({ model: 'work-vision', max_tokens: 1500, messages: [{ role: 'user', content: [{ type: 'text', text: PROMPT }, { type: 'image_url', image_url: { url } }] }] }),
        signal: AbortSignal.timeout(180000) });
      status = x.status; const j = await x.json().catch(() => ({}));
      txt = (j.choices?.[0]?.message?.content || '').trim();
    } catch (e) { status = 0; txt = ''; }
  }
  if (status === 429) { console.log('429 quota, stopping at ' + pk); break; }
  let d = null; try { d = JSON.parse(txt.slice(txt.indexOf('{'), txt.lastIndexOf('}') + 1)); } catch (e) {}
  if (!d) { console.log(pk, 'FAIL', status, txt.slice(0, 80)); continue; }
  res[pk] = { aPage: r.a || r.q, marked: d.marked, printed: d.printed_options, how: d.how, stem: String(d.stem ?? ''), options: Array.isArray(d.options) ? d.options.map(String) : [], box: String(d.box ?? '') };
  fs.writeFileSync(OUT, JSON.stringify(res, null, 1));
  console.log(pk, 'marked', d.marked, 'of', d.printed_options);
}
