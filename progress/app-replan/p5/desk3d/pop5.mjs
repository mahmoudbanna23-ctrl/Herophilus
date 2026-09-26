// Fix-5 probe. Every animation frame through open -> Mocks out -> Esc close of ALL FOUR books (real CDP
// clicks and keys), N runs per size. Reports:
//  titles: max opacity step between frames (<= 0.35), flicker = hide -> show -> hide inside 400 ms,
//          frames where the four titles differ in font size (must be 0)
//  pages : max opacity step of Lectures / Questions / Mocks
//  arc   : frames where any drawn arc point sits in front of the open book or its sheet (__arcOverlap)
// usage: DESK_OUT=D:/tmp-desk3d-fix5/ node pop5.mjs <runs> 1280x800 390x844
import { withPage } from './lib2.mjs';
const runs = +process.argv[2] || 1;
const IDS = ['ent', 'ophtho', 'neuro', 'peds'], PAGES = ['lectBtn', 'questBtn', 'mocksBtn'];
for (const s of process.argv.slice(3)) {
  const [w, h] = s.split('x').map(Number);
  for (let run = 1; run <= runs; run++) {
    const r = await withPage(w, h, {}, async api => {
      await api.ev(`(function(){window.__P=[];var t0=performance.now();(function f(){var row={t:performance.now()-t0,ti:[],fs:[],p:[],arc:__arcOverlap(),al:window.__arcLast||''};window.__arcLast='';
        document.querySelectorAll('.lbl.title').forEach(function(e){var c=getComputedStyle(e);row.ti.push(+c.opacity);row.fs.push(c.fontSize);});
        ${JSON.stringify(PAGES)}.forEach(function(k){row.p.push(+getComputedStyle(document.getElementById(k)).opacity);});
        __P.push(row); if(!window.__stop) requestAnimationFrame(f);})();return 1;})()`);
      const rgb = [];
      for (const id of IDS) {
        const c = await api.ev(`__coverCentre('${id}')`);
        await api.click(c.x, c.y); await api.sleep(2600);
        if (id === 'ent') { rgb.push(await api.ev('__pageRGB()')); if (run === 1) await api.shot(`p5-${w}x${h}-open-${id}`); }
        const m = await api.ev(`(function(){var r=document.getElementById('mocksBtn').getBoundingClientRect();return [r.x+r.width/2,r.y+r.height/2];})()`);
        await api.click(m[0], m[1]); await api.sleep(1100);
        if (run === 1) await api.shot(`p5-${w}x${h}-mocks-${id}`);
        await api.key('Escape'); await api.sleep(3600);
      }
      if (run === 1) await api.shot(`p5-${w}x${h}-idle-after`);
      await api.ev('window.__stop=1');
      return { P: await api.ev('__P'), errs: api.errs, rgb, logs: api.logs.filter(l => /mocks:/.test(l)).length };
    });
    const P = r.P;
    let tStep = 0, flick = 0, minRehide = Infinity, fsDiff = 0, arcFrames = 0, arcMax = 0;
    const pStep = PAGES.map(() => 0);
    const hides = IDS.map(() => []);
    for (let i = 1; i < P.length; i++) {
      P[i].ti.forEach((o, k) => {
        const a = P[i - 1].ti[k]; tStep = Math.max(tStep, Math.abs(o - a));
        if (a >= 0.5 && o < 0.5) hides[k].push(P[i].t);
      });
      P[i].p.forEach((o, k) => { pStep[k] = Math.max(pStep[k], Math.abs(o - P[i - 1].p[k])); });
      if (new Set(P[i].fs).size > 1) fsDiff++;
      if (P[i].arc > 0) arcFrames++; arcMax = Math.max(arcMax, P[i].arc);
    }
    hides.forEach(hs => { for (let j = 1; j < hs.length; j++) { const d = hs[j] - hs[j - 1]; minRehide = Math.min(minRehide, d); if (d < 400) flick++; } });
    const fsSeen = [...new Set(P.map(p => p.fs.join('/')))].slice(0, 6).join(' ');
    console.log(`${s} run${run} frames ${P.length} errs ${r.errs.length} mocksToggles ${r.logs}/4 | titles step ${tStep.toFixed(2)} flicker<400ms ${flick} minRehide ${minRehide === Infinity ? '-' : minRehide.toFixed(0) + 'ms'} fsUnequalFrames ${fsDiff} | pages step ${pStep.map(x => x.toFixed(2)).join('/')} | arcOverlapFrames ${arcFrames} (max pts ${arcMax}) | rgb ${JSON.stringify(r.rgb[0])}`);
    if (run === 1) console.log('   title sizes seen:', fsSeen);
    const al = [...new Set(P.filter(p => p.arc > 0).map(p => p.al))];
    if (al.length) console.log('   arc overlaps:', al.slice(0, 8).join(' | '));
    hides.forEach((hs, k) => { for (let j = 1; j < hs.length; j++) if (hs[j] - hs[j - 1] < 400) console.log('   flicker', IDS[k], 'hides at', hs[j - 1].toFixed(0), hs[j].toFixed(0)); });
  }
}
