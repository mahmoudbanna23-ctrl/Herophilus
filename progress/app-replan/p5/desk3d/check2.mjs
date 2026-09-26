// Majors 6/7 + clip sweep: idle framing at multiple sizes, legibility, and portrait 2x2 layout.
import { withPage, HELP, OUT } from './lib.mjs';

const sizes = [[1280,800],[1024,768],[820,1180],[390,844],[320,640]];
const out = {};
for (const [w,h] of sizes) {
  const r = await withPage(w, h, {}, async a => {
    await a.ev(HELP);
    await a.sleep(600);
    await a.shot('c2-idle-' + w + 'x' + h);
    const rects = {};
    for (const id of ['ent','ophtho','neuro','peds']) rects[id] = await a.ev(`__rect('.bk[data-id="${id}"]')`);
    return { rects, errs: a.errs };
  });
  out[w+'x'+h] = r;
}
console.log(JSON.stringify(out, null, 1));
