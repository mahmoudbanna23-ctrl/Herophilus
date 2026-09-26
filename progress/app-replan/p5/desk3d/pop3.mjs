// Pop probe (fix-3 decision 3): samples every title's computed opacity on every animation frame across
// a real-click open and an Esc close. A pop = opacity moving >= 0.9 between two consecutive frames.
// usage: DESK_OUT=D:/tmp-desk3d-fix3/ node pop3.mjs 390x844 1280x800
import { withPage } from './lib2.mjs';
for (const s of process.argv.slice(2)) {
  const [w, h] = s.split('x').map(Number);
  const r = await withPage(w, h, {}, async api => {
    await api.ev(`(function(){window.__P=[];var t0=performance.now();(function f(){var row=[performance.now()-t0];
      document.querySelectorAll('.lbl.title').forEach(function(e){row.push(+getComputedStyle(e).opacity);});
      __P.push(row); if(performance.now()-t0<6500) requestAnimationFrame(f);})();return 1;})()`);
    const c = await api.ev(`__coverCentre('ent')`);
    await api.click(c.x, c.y); await api.sleep(2600);
    await api.key('Escape'); await api.sleep(3200);
    return { P: await api.ev('__P'), errs: api.errs };
  });
  const ids = ['ent', 'ophtho', 'neuro', 'peds'], out = [];
  ids.forEach((id, k) => {
    let maxJump = 0, fades = 0, lastT = 0, maxGap = 0;
    for (let i = 1; i < r.P.length; i++) {
      const d = Math.abs(r.P[i][k + 1] - r.P[i - 1][k + 1]); maxJump = Math.max(maxJump, d);
      if ((r.P[i - 1][k + 1] > 0.5) !== (r.P[i][k + 1] > 0.5)) fades++;
      maxGap = Math.max(maxGap, r.P[i][0] - r.P[i - 1][0]);
    }
    out.push(`${id} maxStep ${maxJump.toFixed(2)} crossings ${fades}`);
  });
  const gaps = r.P.slice(1).map((p, i) => p[0] - r.P[i][0]).sort((a, b) => a - b);
  console.log(s, 'frames', r.P.length, 'median dt', gaps[gaps.length >> 1].toFixed(1), 'errs', r.errs.length, '|', out.join(' | '));
}
