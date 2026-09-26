import { withPage, HELP } from './lib.mjs';
const sizes = [[390,844],[320,640]];
for (const [w,h] of sizes) {
  await withPage(w, h, {}, async a => {
    await a.ev(HELP);
    await a.sleep(500);
    const ent = await a.ev(`__rect('.bk[data-id="ent"]')`);
    await a.mouse('mouseMoved', ent.x+ent.w/2, ent.y+ent.h/2); await a.sleep(400);
    await a.click(ent.x+ent.w/2, ent.y+ent.h/2);
    await a.sleep(900);
    await a.shot('c3-midopen-'+w+'x'+h);
    await a.sleep(1000);
    await a.shot('c3-open-'+w+'x'+h);
    const hits = { lect: await a.ev(`__hit('#lectBtn')`), quest: await a.ev(`__hit('#questBtn')`), mocks: await a.ev(`__hit('#mocksBtn')`) };
    console.log(w+'x'+h, JSON.stringify(hits), 'errs:', a.errs.length);
  });
}
