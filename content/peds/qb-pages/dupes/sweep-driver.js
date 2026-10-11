'use strict';
// Re-runnable pediatrics duplicate sweep. Writes only beside this driver.
const fs = require('fs'), path = require('path'), vm = require('vm');
const cp = require('child_process');
const ROOT = path.resolve(__dirname, '..', '..', '..', '..');
const L = require(path.join(ROOT, 'tools/qb-pipeline/lib.js'));
const OUT = __dirname, SWEEP = path.join(ROOT, 'tools/qb-pipeline/sweep.js');
const specs = [
  ['peds', 'app/data/questions.peds.js', 'Q_PEDS'],
  ['ep', 'app/data/questions.peds.ep.js', 'Q_PEDS_EP'],
  ['ep2', 'app/data/questions.peds.ep2.js', 'Q_PEDS_EP2'],
  ['sa', 'app/data/questions.peds.sa.js', 'Q_PEDS_SA']
];
const write = (f, v) => fs.writeFileSync(f, typeof v === 'string' ? v.replace(/\r\n/g, '\n') : JSON.stringify(v, null, 2) + '\n', 'utf8');
function load(rel, name) { const c = vm.createContext({}); vm.runInContext(fs.readFileSync(path.join(ROOT, rel), 'utf8') + ';this.OUT=' + name, c); return c.OUT; }
function stageRows(incoming, corpus) {
  const rows = [];
  for (const q of incoming) for (const c of corpus) {
    const qn = L.norm(L.stemOf(q)), cn = L.norm(L.stemOf(c)); if (!qn || !cn) continue;
    const qm = L.menuKey(q), qo = L.orderKey(q);
    if (qn === cn) {
      const sameOrder = qo === L.orderKey(c), sameChapter = q.chapter && c.chapter && q.chapter === c.chapter;
      rows.push({stage: sameOrder ? (sameChapter ? 'A exact' : 'E cross-chapter exact') : (qm === L.menuKey(c) ? 'C REORDERED' : 'A exact stem'), q, c}); continue;
    }
    if (L.loose(L.stemOf(q)) === L.loose(L.stemOf(c))) { rows.push({stage:'B respelled',q,c}); continue; }
    const d = L.dice(L.stemOf(q), L.stemOf(c));
    if (d >= .72) { rows.push({stage:(q.options || q.opts || []).length !== (c.options || c.opts || []).length ? 'F reworded + option dropped' : 'D near stem',q,c}); continue; }
    if (qm && qm === L.menuKey(c)) rows.push({stage:'! shared menu (PAIR, not a fold)',q,c});
  }
  return rows;
}
const rank = {'A exact':100,'E cross-chapter exact':95,'C REORDERED':90,'B respelled':80,'A exact stem':75,'F reworded + option dropped':70,'D near stem':60,'! shared menu (PAIR, not a fold)':10};
fs.mkdirSync(path.join(OUT, 'sweep'), {recursive:true}); fs.mkdirSync(path.join(OUT, '_arrays'), {recursive:true});
const files = specs.map(([label, rel, varName]) => { const array = load(rel, varName); return {label,rel,array, ids:new Set(array.map(q => q.id))}; });
const arrays = {};
for (const f of files) { arrays[f.label] = {length:f.array.length, holes:Array.from({length:f.array.length},(_,i)=>i).filter(i => !(i in f.array))}; write(path.join(OUT, '_arrays', f.label + '.array.js'), 'var ' + f.label.toUpperCase() + '_STAGING = ' + JSON.stringify(f.array) + ';\n'); }
const pairCounts = {}, all = new Map(), stageCounts = {};
for (let i=0;i<files.length;i++) for (let j=i;j<files.length;j++) {
  const A=files[i], B=files[j], name=A.label+'-vs-'+B.label;
  const r=cp.spawnSync(process.execPath,[SWEEP,path.join(ROOT,A.rel),path.join(ROOT,B.rel)],{encoding:'utf8'});
  if (r.status !== 0) throw new Error(name + ': ' + r.stderr);
  write(path.join(OUT,'sweep',name+'.txt'),r.stdout);
  const rows=stageRows(A.array,B.array); let local=new Set();
  for (const x of rows) {
    if (x.q.id === x.c.id) continue;
    const ids=[x.q.id,x.c.id].sort(), key=ids.join('\u0000');
    if (A === B && local.has(key)) continue;
    local.add(key);
    const left=ids[0]===x.q.id ? x.q : x.c, right=ids[1]===x.q.id ? x.q : x.c;
    if (!all.has(key)) all.set(key,{a:ids[0],b:ids[1],fileA:files.find(f=>f.ids.has(ids[0])).rel,fileB:files.find(f=>f.ids.has(ids[1])).rel,chapterA:left.chapter,chapterB:right.chapter,stages:new Set(),score:0,sameFile:A===B,examA:/^pedep2?-mf/.test(ids[0]),examB:/^pedep2?-mf/.test(ids[1])});
    const o=all.get(key); o.stages.add(x.stage); o.score=Math.max(o.score,rank[x.stage]); stageCounts[x.stage]=(stageCounts[x.stage]||0)+1;
  }
  pairCounts[name]=local.size;
}
const candidates=Array.from(all.values()).map(o=>({...o,stages:Array.from(o.stages).sort()})).sort((x,y)=>y.score-x.score||x.a.localeCompare(y.a)||x.b.localeCompare(y.b));
for (const o of candidates) { if (!files.some(f=>f.ids.has(o.a)) || !files.some(f=>f.ids.has(o.b)) || o.a===o.b) throw new Error('candidate verification failed'); }
if (new Set(candidates.map(o=>[o.a,o.b].sort().join('\u0000'))).size !== candidates.length) throw new Error('duplicate candidate');
// Positive control: four deliberately shaped copies of live entries, plus an unrelated target check.
const pool=files.flatMap(f=>f.array).filter(q=>q.id && q.stem && (q.options||q.opts||[]).length>1);
const pick=(test)=>pool.find(test);
const exact=pick(q=>String(q.stem).length>80), spell=pick(q=>/paediatric|haemoglobin|oedema/i.test(String(q.stem))) || exact;
const reorder=pick(q=>q!==exact && q!==spell), reword=pick(q=>q!==exact && q!==spell && q!==reorder && /most likely/i.test(String(q.stem))) || reorder;
const clone=(q,id)=>JSON.parse(JSON.stringify({...q,id}));
const ctl=[clone(exact,'ctl-exact'),clone(spell,'ctl-respelled'),clone(reorder,'ctl-reordered'),clone(reword,'ctl-reworded')];
ctl[1].stem=String(ctl[1].stem).replace(/paediatric/ig,'pediatric').replace(/haemoglobin/ig,'hemoglobin').replace(/oedema/ig,'edema');
const op=ctl[2].options || ctl[2].opts; [op[0],op[1]]=[op[1],op[0]];
ctl[3].stem=String(ctl[3].stem).replace(/most likely/ig,'most probable') + ' Choose the best answer.';
const base=pool, controlFile=path.join(OUT,'_arrays','control.array.js'); write(controlFile,'var CONTROL = '+JSON.stringify(ctl)+';\n');
const baseFile=path.join(OUT,'_arrays','control-corpus.array.js'); write(baseFile,'var CONTROL_CORPUS = '+JSON.stringify(base)+';\n');
const controlRun=cp.spawnSync(process.execPath,[SWEEP,controlFile,baseFile],{encoding:'utf8'}); if(controlRun.status!==0) throw new Error(controlRun.stderr);
write(path.join(OUT,'sweep','control.txt'),controlRun.stdout);
const controlRows=stageRows(ctl,base), fired=id=>controlRows.some(r=>r.q.id===id);
const targeted=new Set(ctl.map(q=>q.id)); const unrelated=base.find(q=>!controlRows.some(r=>r.c.id===q.id));
const control={exact:{fired:fired('ctl-exact')},respelled:{fired:fired('ctl-respelled')},optionsReordered:{fired:fired('ctl-reordered')},rewordedStem:{fired:fired('ctl-reworded')},unrelated:{id:unrelated&&unrelated.id,fired:unrelated ? controlRows.some(r=>r.c.id===unrelated.id) : null}};
if (!unrelated) throw new Error('no unrelated control target');
const overlapSum=Object.values(pairCounts).reduce((a,b)=>a+b,0);
write(path.join(OUT,'candidates.json'),candidates);
write(path.join(OUT,'summary.json'),{arrays,pairsPerPairing:pairCounts,totalUniquePairs:candidates.length,countsByStage:stageCounts,control,perPairingSum:overlapSum,overlapAccounting:'Per-pairing counts include a pair in every pairing where it occurs; totalUniquePairs de-duplicates unordered ids across pairings.'});
const exams=candidates.filter(o=>o.examA||o.examB).length;
const report=['VERDICT: done','Arrays: peds '+arrays.peds.length+' (holes '+arrays.peds.holes.length+'), ep '+arrays.ep.length+' (holes '+arrays.ep.holes.length+'), ep2 '+arrays.ep2.length+' (holes '+arrays.ep2.holes.length+'), sa '+arrays.sa.length+' (holes '+arrays.sa.holes.length+').','Pairs: '+Object.entries(pairCounts).map(([k,v])=>k+' '+v).join('; ')+'.','Total unique pairs: '+candidates.length+'; model-exam involved: '+exams+'. Per-pairing sum '+overlapSum+'; overlaps are counted per pairing, then unordered ids are de-duplicated globally.','Control: exact '+control.exact.fired+', respelled '+control.respelled.fired+', reordered '+control.optionsReordered.fired+', reworded '+control.rewordedStem.fired+', unrelated '+control.unrelated.fired+'.'].join('\n')+'\n';
write(path.join(OUT,'report-1.txt'),report);
