// Fix-round-2 sweep. REAL CDP input only (Input.dispatchMouseEvent / dispatchKeyEvent); the page's
// __debug/__coverCentre/__screenRects/__band/__ix are read-only probes, never used to drive input.
// usage: node check-fix2.mjs 1280x800 [390x844 ...]
import fs from 'node:fs';
import { withPage, OUT } from './lib2.mjs';

const IDS = ['ent', 'ophtho', 'neuro', 'peds'];
const CLOSE = { ent: 'esc', ophtho: 'back', neuro: 'outside', peds: 'esc' };
const LBL = `(function(){ var r={}; document.querySelectorAll('.lbl,#backBtn').forEach(function(e){ var b=e.getBoundingClientRect();
  r[e.dataset.id||e.id]={hidden:e.hidden||e.classList.contains('gone')||getComputedStyle(e).display==='none', inert:!!e.inert, fs:parseFloat(getComputedStyle(e).fontSize),
  x0:Math.round(b.left),y0:Math.round(b.top),x1:Math.round(b.right),y1:Math.round(b.bottom),cls:e.className}; }); return r; })()`;
const clipOf = (rects, w, h, only) => rects.filter(r => !only || only.includes(r.id))
  .filter(r => r.x0 < -1 || r.y0 < -1 || r.x1 > w + 1 || r.y1 > h + 1).map(r => r.id);
const lblClip = (L, w, h) => Object.entries(L).filter(([k, v]) => !v.hidden && (v.x0 < 0 || v.y0 < 0 || v.x1 > w || v.y1 > h)).map(([k]) => k);
const diff = (a, b) => { let m = 0; a.cam.concat(a.look).forEach((v, i) => m = Math.max(m, Math.abs(v - b.cam.concat(b.look)[i])));
  a.books.forEach((bk, i) => bk.m.forEach((v, j) => m = Math.max(m, Math.abs(v - b.books[i].m[j])))); return m; };

async function sweep(w, h) {
  const tag = `s${w}x${h}`;
  return withPage(w, h, {}, async api => {
    const { ev, click, key, shot, sleep, mouse } = api;
    const out = { size: tag, books: {} };
    const snap0 = await ev('__debug()');
    out.idleBand = await ev('__band()');
    out.camReport = await ev('__camReport()');
    out.idleLabels = await ev(LBL);
    out.idleClip = clipOf(await ev('__screenRects()'), w, h);
    out.idleLabelClip = lblClip(out.idleLabels, w, h);
    await shot(tag + '-1-idle');
    // Tab order at idle
    const tabs = [];
    for (let i = 0; i < 5; i++) { await key('Tab'); tabs.push(await ev('(document.activeElement.dataset.id||document.activeElement.id||document.activeElement.tagName)')); }
    out.idleTabs = tabs;
    await click(2, h - 2); await sleep(100); // blur via a real click on empty desk
    await mouse('mouseMoved', 1, 1); await sleep(450);
    for (const id of IDS) {
      const r = { };
      const cc = await ev(`__coverCentre('${id}')`);
      r.cc = [Math.round(cc.x), Math.round(cc.y)];
      r.under = await ev(`(function(){var e=document.elementFromPoint(${cc.x},${cc.y}); return e.dataset.id||e.id;})()`);
      await ev('window.__ix={on:true,frames:0,hitFrames:0,first:null}');
      await click(cc.x, cc.y);
      await sleep(120);
      r.opened = await ev('__debug().open');
      await sleep(480);
      if (id === 'ent' || id === 'peds') await shot(`${tag}-2-mid-${id}`);
      await sleep(1300);
      if (id === 'ent' || id === 'peds') await shot(`${tag}-3-open-${id}`);
      r.openLabels = await ev(LBL);
      r.openClip = clipOf(await ev('__screenRects()'), w, h, [id]);
      r.openLabelClip = lblClip(r.openLabels, w, h);
      r.openBand = await ev('__band()');
      const dbg = await ev('__debug()');
      r.camOpen = dbg.cam.map(v => +v.toFixed(3));
      // Lectures / Questions / Mocks by real clicks on their labels
      const logs0 = api.logs.length;
      for (const sel of ['lectBtn', 'questBtn']) { const L = r.openLabels[sel]; if (!L.hidden) { await click((L.x0 + L.x1) / 2, (L.y0 + L.y1) / 2); await sleep(80); } }
      const M = r.openLabels.mocksBtn;
      if (!M.hidden) {
        await mouse('mouseMoved', (M.x0 + M.x1) / 2, (M.y0 + M.y1) / 2); await sleep(400);
        if (id === 'ent') await shot(`${tag}-4-hover-mocks`);
        await click((M.x0 + M.x1) / 2, (M.y0 + M.y1) / 2); await sleep(800);
        if (id === 'ent' || id === 'peds') await shot(`${tag}-5-mocks-out-${id}`);
        r.mocksOutLabels = await ev(LBL);
        r.mocksOutClip = clipOf(await ev('__screenRects()'), w, h, [id]);
        r.mocksOutLabelClip = lblClip(r.mocksOutLabels, w, h);
      }
      r.logs = api.logs.slice(logs0);
      if (id === 'ent') { await key('Tab'); await sleep(60); await shot(`${tag}-6-focus-open`); r.focusOpen = await ev('document.activeElement.id'); }
      // close
      if (CLOSE[id] === 'esc') await key('Escape');
      else if (CLOSE[id] === 'back') { const B = (await ev(LBL)).backBtn; await click((B.x0 + B.x1) / 2, (B.y0 + B.y1) / 2); }
      else await click(w - 12, 12);
      await sleep(900);
      if (id === 'ent') await shot(`${tag}-7-mid-close-ent`);
      await sleep(1700);
      const s1raw = await ev('__debug()');
      await mouse('mouseMoved', 1, 1); await sleep(500);
      const s1 = await ev('__debug()');
      r.returnDiffCursorInPlace = diff(snap0, s1raw);
      r.closedOk = s1.open === null;
      r.returnDiff = diff(snap0, s1);
      r.ix = await ev('({frames:__ix.frames,hitFrames:__ix.hitFrames,first:__ix.first})');
      r.focusAfter = await ev('(document.activeElement.dataset.id||document.activeElement.id||document.activeElement.tagName)');
      await ev('window.__ix.on=false');
      await click(2, h - 2); await sleep(80); await mouse('mouseMoved', 1, 1); await sleep(450);
      out.books[id] = r;
    }
    out.errs = api.errs; out.net = api.net;
    return out;
  });
}

const res = [];
for (const s of process.argv.slice(2)) {
  const [w, h] = s.split('x').map(Number);
  const r = await sweep(w, h);
  fs.writeFileSync(OUT + `s${w}x${h}-out.json`, JSON.stringify(r, null, 1));
  const B = r.books;
  console.log(s, 'errs', r.errs.length, 'net', r.net.length, 'idleBand', JSON.stringify(r.idleBand), 'idleClip', r.idleClip, r.idleLabelClip, 'tabs', r.idleTabs.join(','));
  for (const id of IDS) {
    const b = B[id];
    const fsz = ['lectBtn', 'questBtn', 'mocksBtn'].map(k => b.openLabels[k].hidden ? 'H' : b.openLabels[k].fs).join('/');
    console.log(' ', id, 'under', b.under, 'opened', b.opened, 'clip', b.openClip, b.openLabelClip, (b.mocksOutClip || []), (b.mocksOutLabelClip || []),
      'band', b.openBand.emptyRows.toFixed(3), 'fs', fsz, 'logs', b.logs.join('|'), 'closed', b.closedOk, 'diff', b.returnDiff.toExponential(1),
      'ix', b.ix.hitFrames + '/' + b.ix.frames, b.ix.first || '', 'focus', b.focusAfter, b.focusOpen || '');
  }
  console.log('  cam', r.camReport.map(c => c.id + ' ' + c.dStart + '->' + c.dEnd + ' dot ' + c.towardDot).join(' | '));
  const t = r.idleLabels; console.log('  titles fs', IDS.map(i => t[i].hidden ? 'H' : t[i].fs + '(' + (t[i].x1 - t[i].x0) + 'w)').join(' '));
}
