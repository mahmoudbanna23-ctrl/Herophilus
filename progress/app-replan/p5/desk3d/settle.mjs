// Settle probe: samples cover angle, path and camera distance every frame across a real-click open,
// reports overshoot as % of travel and the time from the overshoot peak back to rest.
import { withPage } from './lib2.mjs';
const [w, h] = (process.argv[2] || '1280x800').split('x').map(Number);
const r = await withPage(w, h, {}, async api => {
  const c = await api.ev(`__coverCentre('ent')`);
  await api.ev(`(function(){window.__S=[];var t0=performance.now();(function f(){var d=__debug(),b=d.books[0];
    __S.push([performance.now()-t0,b.cover,b.path,Math.hypot(d.cam[0]-d.look[0],d.cam[1]-d.look[1],d.cam[2]-d.look[2])]);
    if(performance.now()-t0<2600)requestAnimationFrame(f);})();return 1;})()`);
  await api.click(c.x, c.y);
  await api.sleep(2800);
  return api.ev('__S');
});
function settle(col, name) {
  const s = r.map(x => [x[0], x[col]]), v0 = s[0][1], v1 = s[s.length - 1][1], trav = v1 - v0, sgn = Math.sign(trav);
  let pk = 0; s.forEach((x, i) => { if ((x[1] - v1) * sgn > (s[pk][1] - v1) * sgn) pk = i; });
  const over = (s[pk][1] - v1) * sgn / Math.abs(trav) * 100;
  const rest = s.findIndex((x, i) => i > pk && Math.abs(x[1] - v1) < 1e-4);
  console.log(name, 'travel', trav.toFixed(3), 'overshoot %', over.toFixed(2), 'peak->rest ms', rest > 0 ? Math.round(s[rest][0] - s[pk][0]) : 'n/a');
}
settle(1, 'cover'); settle(2, 'path'); settle(3, 'camDist');
