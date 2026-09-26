// Word-break / clip acceptance sweep (fix-3 decision 1): widths 320..1600 step 10 at heights 640, 844,
// 1180. Per size: line boxes per title (distinct Range client-rect rows), clipped titles, faded (gone)
// titles at idle, title overlaps, font sizes. Resizes via Emulation.setDeviceMetricsOverride.
// usage: DESK_OUT=D:/tmp-desk3d-fix3/ node wb-sweep.mjs
import fs from 'node:fs';
import { withPage, OUT } from './lib2.mjs';
const PROBE = `(function(){ var r=[]; document.querySelectorAll('.lbl.title').forEach(function(e){
  var rg=document.createRange(); rg.selectNodeContents(e); var rows={}; Array.from(rg.getClientRects()).forEach(function(q){ if(q.width>0) rows[Math.round(q.top)]=1; });
  var b=e.getBoundingClientRect();
  r.push({id:e.dataset.id, lines:Object.keys(rows).length, gone:e.classList.contains('gone')||e.hidden, fs:parseFloat(getComputedStyle(e).fontSize),
    x0:b.left,y0:b.top,x1:b.right,y1:b.bottom, text:e.textContent}); }); return r; })()`;
const res = [], bad = [];
for (const h of [640, 844, 1180]) {
  await withPage(320, h, {}, async api => {
    for (let w = 320; w <= 1600; w += 10) {
      await api.send('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: 1, mobile: w < 500 });
      await api.sleep(260);
      const t = await api.ev(PROBE);
      const clip = t.filter(q => q.x0 < 0 || q.y0 < 0 || q.x1 > w || q.y1 > h).map(q => q.id);
      const multi = t.filter(q => q.lines !== 1).map(q => q.id + ':' + q.lines);
      const gone = t.filter(q => q.gone).map(q => q.id);
      const over = [];
      for (let i = 0; i < t.length; i++) for (let j = i + 1; j < t.length; j++) {
        const a = t[i], b = t[j]; if (a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1) over.push(a.id + '/' + b.id);
      }
      const minFs = Math.min(...t.map(q => q.fs)), softHyphen = t.some(q => q.text.includes('\u00AD'));
      const row = { w, h, clip, multi, gone, over, minFs, fs: t.map(q => q.fs), softHyphen };
      const floor = w <= 560 ? 14 : 16;
      if (clip.length || multi.length || gone.length || over.length || minFs < floor || softHyphen) bad.push(row);
      res.push(row);
      if ((w === 1280 && h === 844) || (w === 390 && h === 844) || (w === 320 && h === 640) || (w === 820 && h === 1180)) await api.shot(`wb-${w}x${h}`);
    }
    if (api.errs.length) bad.push({ h, errs: api.errs });
  });
}
fs.writeFileSync(OUT + 'wb-out.json', JSON.stringify({ n: res.length, bad, res }, null, 1));
console.log('sizes', res.length, 'bad', bad.length, JSON.stringify(bad.slice(0, 8)));
console.log('fs range', Math.min(...res.map(r => r.minFs)), Math.max(...res.flatMap(r => r.fs)));
