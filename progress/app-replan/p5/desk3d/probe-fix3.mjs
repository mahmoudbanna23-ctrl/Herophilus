// Fix-3 probe: contrast (idle, open, mocks out), peek fraction, and stills. REAL CDP input only.
// usage: DESK_OUT=D:/tmp-desk3d-fix3/ node probe-fix3.mjs 1280x800 390x844 ...
import fs from 'node:fs';
import { withPage, OUT } from './lib2.mjs';
const all = {};
for (const s of process.argv.slice(2)) {
  const [w, h] = s.split('x').map(Number), tag = 'p' + s;
  all[s] = await withPage(w, h, {}, async api => {
    const { ev, click, mouse, sleep, shot } = api, r = { contrast: {} };
    r.contrast.idle = await ev('__contrast()');
    await shot(tag + '-idle');
    for (const id of ['ent', 'peds']) {
      const c = await ev(`__coverCentre('${id}')`); await click(c.x, c.y); await sleep(2300);
      await mouse('mouseMoved', 1, 1); await sleep(300);
      r.contrast['open-' + id] = await ev('__contrast()');
      r['peek-' + id] = await ev(`__peek('${id}')`);
      await shot(`${tag}-open-${id}`);
      const M = await ev(`(function(){var e=document.getElementById('mocksBtn').getBoundingClientRect();return {x:e.left+e.width/2,y:e.top+e.height/2};})()`);
      await click(M.x, M.y); await sleep(1000); await mouse('mouseMoved', 1, 1); await sleep(300);
      r.contrast['mocks-' + id] = await ev('__contrast()');
      await shot(`${tag}-mocks-${id}`);
      await api.key('Escape'); await sleep(2600);
    }
    r.errs = api.errs; r.net = api.net;
    return r;
  });
  const r = all[s], mins = [];
  for (const [k, v] of Object.entries(r.contrast)) for (const [id, c] of Object.entries(v)) mins.push(`${k}:${id}=${c.min}`);
  console.log(s, 'errs', r.errs.length, 'net', r.net.length, 'peek', JSON.stringify(r['peek-ent']), '\n  ', mins.join(' '));
}
fs.writeFileSync(OUT + 'probe-out.json', JSON.stringify(all, null, 1));
