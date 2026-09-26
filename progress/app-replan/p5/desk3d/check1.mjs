// Majors 1-4: mouse click on page targets, click-outside close, no pop, tab order/a11y.
import { withPage, HELP, OUT } from './lib.mjs';

const r = await withPage(1280, 800, {}, async a => {
  await a.ev(HELP);
  const o = {};

  // --- major 1: mouse can click the three page targets ---
  const ent = await a.ev(`__rect('.bk[data-id="ent"]')`);
  await a.mouse('mouseMoved', ent.x + ent.w / 2, ent.y + ent.h / 2);
  await a.sleep(500); // let the hover tween settle before the click (major 4 check needs a real hovered start)
  await a.shot('c1-hover-ent');
  await a.click(ent.x + ent.w / 2, ent.y + ent.h / 2);
  await a.sleep(1900);
  await a.shot('c1-open-ent');
  o.hitTest = {
    lect: await a.ev(`__hit('#lectBtn')`),
    quest: await a.ev(`__hit('#questBtn')`),
    mocks: await a.ev(`__hit('#mocksBtn')`)
  };
  const lect = await a.ev(`__rect('#lectBtn')`);
  await a.click(lect.x + lect.w / 2, lect.y + lect.h / 2);
  await a.sleep(150);
  o.lectClickLog = a.logs.slice();

  const mocks = await a.ev(`__rect('#mocksBtn')`);
  await a.click(mocks.x + mocks.w / 2, mocks.y + mocks.h / 2);
  await a.sleep(700);
  await a.shot('c1-mocks-out-ent');
  o.mocksHit2 = await a.ev(`__hit('#mocksBtn')`);

  // --- major 3: click outside closes ---
  await a.click(30, 30);
  await a.sleep(2800);
  o.phaseAfterOutsideClick = await a.ev(`__debug().books.map(b=>b.phase).join()`);
  await a.shot('c1-after-click-outside');

  // --- major 2: tab order only visits VISIBLE targets, closed state ---
  o.closedTabs = [];
  const ae = `(()=>{const e=document.activeElement;return (e.id||e.className)+'|hidden:'+e.hidden})()`;
  for (let i = 0; i < 8; i++) { await a.key('Tab'); await a.sleep(100); o.closedTabs.push(await a.ev(ae)); }

  // --- major 4: no one-frame pop -- reopen from a fresh hover and sample posY continuously ---
  await a.ev(`document.body.blur && document.body.blur()`);
  const peds = await a.ev(`__rect('.bk[data-id="peds"]')`);
  await a.mouse('mouseMoved', peds.x + peds.w / 2, peds.y + peds.h / 2);
  await a.sleep(200); // mid-hover-tween, NOT settled -- this is the exact case that popped before
  await a.ev(`window.__rec2=[]; window.__rec2On=true; (function loop(){requestAnimationFrame(loop); if(!window.__rec2On)return; var b=window.__books.filter(x=>x.subject.id==='peds')[0]; window.__rec2.push([performance.now()|0, +b.posY.toFixed(4), +b.posZ.toFixed(4)]);})();`);
  await a.click(peds.x + peds.w / 2, peds.y + peds.h / 2);
  await a.sleep(1900);
  await a.ev(`window.__rec2On=false`);
  const rec = await a.ev(`JSON.stringify(window.__rec2)`);
  const arr = JSON.parse(rec);
  let maxJump = 0;
  for (let i = 1; i < arr.length; i++) {
    const dy = Math.abs(arr[i][1] - arr[i - 1][1]);
    if (dy > maxJump) maxJump = dy;
  }
  o.maxPosYFrameJump = maxJump;
  await a.shot('c1-open-peds');

  o.errs = a.errs;
  return o;
});
console.log(JSON.stringify(r, null, 1));
