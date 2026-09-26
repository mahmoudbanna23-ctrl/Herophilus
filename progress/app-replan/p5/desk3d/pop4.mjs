// Page-label pop probe (fix-4): every animation frame, samples the computed opacity and the on-screen
// centre of Lectures / Questions / Mocks across a real-click open, Mocks out, in, out again, then Esc
// close with the paper out. Reports per label: max opacity step between frames (must be <= 0.35),
// max per-frame move while visible, and the max change in that move (a jump shows as a spike).
// usage: DESK_OUT=D:/tmp-desk3d-fix4/ node pop4.mjs 1280x800 390x844 [bookId]
import { withPage } from './lib2.mjs';
const sizes = process.argv.slice(2).filter(a => /x/.test(a));
const id = process.argv.slice(2).find(a => !/x/.test(a)) || 'ent';
const PAGES = ['lectBtn', 'questBtn', 'mocksBtn'];
for (const s of sizes) {
  const [w, h] = s.split('x').map(Number);
  const tag = `p4-${w}x${h}-${id}`;
  const r = await withPage(w, h, {}, async api => {
    await api.ev(`(function(){window.__P=[];var t0=performance.now();(function f(){var row={t:performance.now()-t0,p:[],ti:[]};
      ${JSON.stringify(PAGES)}.forEach(function(k){var e=document.getElementById(k),b=e.getBoundingClientRect();
        row.p.push([+getComputedStyle(e).opacity,b.x+b.width/2,b.y+b.height/2]);});
      document.querySelectorAll('.lbl.title').forEach(function(e){row.ti.push(+getComputedStyle(e).opacity);});
      __P.push(row); if(performance.now()-t0<12000) requestAnimationFrame(f);})();return 1;})()`);
    const c = await api.ev(`__coverCentre('${id}')`);
    await api.click(c.x, c.y); await api.sleep(2600); await api.shot(tag + '-open'); console.log('  pageRGB', JSON.stringify(await api.ev('__pageRGB()')), 'peek', JSON.stringify(await api.ev("__peek('" + id + "')")));
    const mid = async () => { const m = await api.ev(`(function(){var r=document.getElementById('mocksBtn').getBoundingClientRect();return [r.x+r.width/2,r.y+r.height/2];})()`); return m; };
    let m = await mid(); await api.click(m[0], m[1]); await api.sleep(1000); await api.shot(tag + '-mocks-out');
    m = await mid(); await api.click(m[0], m[1]); await api.sleep(1000); await api.shot(tag + '-mocks-in');
    m = await mid(); await api.click(m[0], m[1]); await api.sleep(1000);
    await api.key('Escape'); await api.sleep(3400); await api.shot(tag + '-closed');
    return { P: await api.ev('__P'), errs: api.errs, logs: api.logs };
  });
  const out = PAGES.map((k, j) => {
    let stepDt = 0, step = 0, move = 0, spike = 0, prevD = null, shown = 0;
    for (let i = 1; i < r.P.length; i++) {
      const a = r.P[i - 1].p[j], b = r.P[i].p[j];
      { const so = Math.abs(b[0] - a[0]); if (so > step) { step = so; stepDt = r.P[i].t - r.P[i - 1].t; } }
      if (a[0] > 0.02 && b[0] > 0.02) {
        const d = Math.hypot(b[1] - a[1], b[2] - a[2]) / Math.max(1, r.P[i].t - r.P[i - 1].t) * 16.7; move = Math.max(move, d);
        if (prevD !== null) spike = Math.max(spike, Math.abs(d - prevD)); prevD = d;
      } else prevD = null;
      if ((a[0] > 0.5) !== (b[0] > 0.5)) shown++;
    }
    return `${k} step ${step.toFixed(2)} (frame dt ${stepDt.toFixed(0)}ms) move ${move.toFixed(1)}px/16.7ms spike ${spike.toFixed(1)} crossings ${shown}`;
  });
  let tsnap = 0, tstep = 0;
  for (let i = 1; i < r.P.length; i++) r.P[i].ti.forEach((o, k) => { const d = Math.abs(o - r.P[i - 1].ti[k]); tstep = Math.max(tstep, d); if (d > 0.9) tsnap++; });
  const gaps = r.P.slice(1).map((p, i) => p.t - r.P[i].t).sort((a, b) => a - b);
  console.log(s, id, 'frames', r.P.length, 'median dt', gaps[gaps.length >> 1].toFixed(1), 'errs', r.errs.length,
    '| logs', r.logs.filter(l => /mocks|lect|quest/.test(l)).join(','), '\n  ' + out.join('\n  '),
    `\n  titles maxStep ${tstep.toFixed(2)} occlusion snaps ${tsnap}`);
}
