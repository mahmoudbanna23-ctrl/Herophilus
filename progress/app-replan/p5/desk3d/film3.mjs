// Fix-round-2 films, fps and reduced-motion/focus checks. REAL CDP input only.
// usage: node film3.mjs film 1280 800 | node film3.mjs fps 1280 800 6 | node film3.mjs rm 1280 800
import fs from 'node:fs';
import { spawnSync } from 'node:child_process';
import { withPage, OUT } from './lib2.mjs';

const FFMPEG = 'C:/Users/Alfa388/AppData/Local/Microsoft/WinGet/Packages/Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe/ffmpeg-8.1.2-full_build/bin/ffmpeg.exe';
const LBL = id => `(function(){var e=document.getElementById('${id}');var r=e.getBoundingClientRect();return {x:r.left+r.width/2,y:r.top+r.height/2,hidden:e.hidden,x0:r.left,y0:r.top,x1:r.right,y1:r.bottom};})()`;
const [mode, W, H, arg] = process.argv.slice(2);
const w = +W, h = +H;

async function openBy(api, id) { const c = await api.ev(`__coverCentre('${id}')`); await api.mouse('mouseMoved', c.x, c.y); await api.sleep(500); await api.click(c.x, c.y); }

if (mode === 'film') {
  const tag = `film-${w}x${h}`, frames = [];
  const r = await withPage(w, h, { onFrame: (p, send) => { frames.push({ t: p.metadata.timestamp, d: p.data }); send('Page.screencastFrameAck', { sessionId: p.sessionId }); } }, async api => {
    const { send, ev, click, mouse, key, sleep } = api;
    await send('Page.startScreencast', { format: 'png', everyNthFrame: 1, maxWidth: w, maxHeight: h });
    await sleep(800);
    await openBy(api, 'ent'); await sleep(2300);
    for (const b of ['lectBtn', 'questBtn', 'mocksBtn']) { const L = await ev(LBL(b)); if (!L.hidden) { await mouse('mouseMoved', L.x, L.y); await sleep(500); } }
    let M = await ev(LBL('mocksBtn')); await click(M.x, M.y); await sleep(1100);
    M = await ev(LBL('mocksBtn')); await click(M.x, M.y); await sleep(900);   // slide it back in
    const B = await ev(LBL('backBtn')); await click(B.x, B.y); await sleep(2600);
    await mouse('mouseMoved', 1, 1); await sleep(300);
    await openBy(api, 'peds'); await sleep(2300);
    await key('Escape'); await sleep(2600);
    await send('Page.stopScreencast', {});
    await sleep(300);
    return { errs: api.errs, net: api.net, logs: api.logs };
  });
  const dir = OUT + 'frames-' + tag + '/';
  fs.mkdirSync(dir, { recursive: true });
  let list = '';
  frames.forEach((f, i) => {
    const n = 'f' + String(i).padStart(5, '0') + '.png';
    fs.writeFileSync(dir + n, Buffer.from(f.d, 'base64'));
    const dur = i + 1 < frames.length ? Math.max(0.001, frames[i + 1].t - f.t) : 0.04;
    list += `file '${n}'\nduration ${dur.toFixed(4)}\n`;
  });
  fs.writeFileSync(dir + 'list.txt', list);
  const ff = spawnSync(FFMPEG, ['-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', dir + 'list.txt', '-vf', `fps=30,scale=${w - (w % 2)}:${h - (h % 2)}`,
    '-c:v', 'libx264', '-crf', '28', '-pix_fmt', 'yuv420p', OUT + tag + '.mp4']);
  const span = frames.length ? frames[frames.length - 1].t - frames[0].t : 0;
  console.log(JSON.stringify({ tag, frames: frames.length, seconds: +span.toFixed(1), ffmpeg: ff.status, fferr: String(ff.stderr).slice(0, 300), errs: r.errs, net: r.net, logs: r.logs }));
} else if (mode === 'fps') {
  const r = await withPage(w, h, {}, async api => {
    await api.send('Emulation.setCPUThrottlingRate', { rate: +arg });
    await api.sleep(1500);
    await openBy(api, 'ent'); await api.sleep(3000);
    return { rate: +arg, fps: await api.ev('window.__fps && window.__fps.mean'), errs: api.errs };
  });
  console.log(JSON.stringify(r));
} else if (mode === 'rm') {
  const r = await withPage(w, h, { reduce: true }, async api => {
    const { ev, key, mouse, click, sleep, shot } = api;
    const s0 = await ev('__debug()');
    const c = await ev(`__coverCentre('peds')`); await mouse('mouseMoved', c.x, c.y); await sleep(300);
    const hovPeds = (await ev('__debug()')).books.find(b => b.id === 'peds').hov;
    await click(c.x, c.y); await sleep(90);
    const d1 = await ev('__debug()'); const pb = d1.books.find(b => b.id === 'peds');
    await key('Escape'); await sleep(90);
    await mouse('mouseMoved', 1, 1); await sleep(200);
    const d2 = await ev('__debug()');
    let m = 0; s0.cam.concat(s0.look).forEach((v, i) => m = Math.max(m, Math.abs(v - d2.cam.concat(d2.look)[i])));
    s0.books.forEach((b, i) => b.m.forEach((v, j) => m = Math.max(m, Math.abs(v - d2.books[i].m[j]))));
    // focus ring at idle on the first title (ENT sits nearest the left edge)
    await click(2, h - 2); await sleep(80); await key('Tab'); await sleep(80);
    const f = await ev(`(function(){var e=document.activeElement;var r=e.getBoundingClientRect();return {id:e.dataset.id||e.id,x0:r.left,y0:r.top,x1:r.right,y1:r.bottom,outline:getComputedStyle(e).outlineStyle+' '+getComputedStyle(e).outlineWidth};})()`);
    await shot(`rm-${w}x${h}-focus-idle`);
    return { hovPeds, openAfter90ms: d1.open, pedsPhase: pb.phase, pedsPath: pb.path, pedsCover: pb.cover, closedAfter90ms: d2.open === null, returnDiff: m, focus: f, ringClear: f.x0 - 5 >= 0 && f.y0 - 5 >= 0 && f.x1 + 5 <= w && f.y1 + 5 <= h, errs: api.errs };
  });
  console.log(JSON.stringify(r));
}
