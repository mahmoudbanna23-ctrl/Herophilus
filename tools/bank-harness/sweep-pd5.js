const fs=require('fs');
const N=require(process.argv[2]+'/norm.js');
const P='D:/claude os/Medical school/Herophilus/';
global.window={};
const S=eval(fs.readFileSync(P+'content/peds/qb-pages/house-ch05-genetics.array.js','utf8')+';PEDHD_GEN_STAGED');

// live corpus: every module data file
const files=['questions.peds.js','questions.neuro.js','questions.ent.js','questions.ophtho.js'];
let live=[];
for(const f of files){
  try{ const src=fs.readFileSync(P+'app/data/'+f,'utf8');
    const v='Q_'+f.split('.')[1].toUpperCase();
    const a=eval(src+';typeof '+v+'!=="undefined"?'+v+':(window.'+v+'||[])');
    a.forEach(q=>{ if(q&&q.stem) live.push(q); });
  }catch(e){ console.log('LOAD FAIL',f,e.message); }
}
console.log('staged',S.length,'live corpus',live.length);

const tok=s=>{const w=N.words(s||'').split(' ').filter(Boolean);return new Set(w);};
const dice=(a,b)=>{let i=0;for(const x of a) if(b.has(x)) i++;return a.size+b.size?2*i/(a.size+b.size):0;};
const stop=new Set('a an the of in on at to for with and or is are was were which what most likely following one his her he she year old years month months boy girl child infant patient you your this that it be by from as has have had not do does'.split(' '));
const content=s=>{const t=tok(s);const o=new Set();for(const x of t) if(!stop.has(x)&&x.length>2) o.add(x);return o;};

const Sx=S.map(q=>({k:'ch5-Q'+q.n,q,t:tok(q.stem),c:content(q.stem),tt:N.tight(q.stem),
  om:q.opts.map(o=>N.tight(o)).sort().join('|'), ans:q.opts['ABCDE'.indexOf(q.key)]}));
const Lx=live.map(q=>({k:q.id,q,t:tok(q.stem),c:content(q.stem),tt:N.tight(q.stem),
  om:(q.options||[]).map(o=>N.tight(o)).sort().join('|'), ans:(q.options||[])[q.answer]}));


// ch.4 drafts are not spliced yet - add them to the live pool
for(const [f,v] of [['draft-A.js','PEDHD_HAEM_DRAFT_A'],['draft-B.js','PEDHD_HAEM_DRAFT_B']]){
  try{ const src=fs.readFileSync(P+'content/peds/qb-pages/house-ch04-haem.'+f,'utf8');
    eval(src+';'+v).forEach(q=>{ if(q&&q.stem) live.push(q); }); }
  catch(e){ console.log('CH4 LOAD FAIL',f,e.message); }
}
function rank(pairs,n){return pairs.sort((a,b)=>b[0]-a[0]).slice(0,n);}

// ---- A exact tight stem
let A=[];
for(const s of Sx){ for(const l of Lx) if(s.tt===l.tt) A.push([1,s.k,l.k]);
  for(const s2 of Sx) if(s!==s2 && s.tt===s2.tt && s.k<s2.k) A.push([1,s.k,s2.k]); }
console.log('\n== A exact tight stem ==', A.length?A:'0');

// ---- B normalised-word stem, Levenshtein tolerant (<=3% of length)
let B=[];
for(const s of Sx){ const sw=N.words(s.q.stem);
  for(const l of Lx){ const lw=N.words(l.q.stem);
    if(Math.abs(sw.length-lw.length)>6) continue;
    const d=N.lev(sw,lw); if(d<=Math.max(3,Math.round(sw.length*0.03))) B.push([d,s.k,l.k]); } }
console.log('== B normalised stem (lev tolerant) ==', B.length?B:'0');

// ---- C stem content-token Dice, FULL RANKING top 12
let C=[];
for(const s of Sx){ for(const l of Lx) C.push([dice(s.c,l.c),s.k,l.k,l.q.chapter]);
  for(const s2 of Sx) if(s.k<s2.k) C.push([dice(s.c,s2.c),s.k,s2.k,'(self)']); }
console.log('== C stem content Dice — top 12 of '+C.length+' pairs ==');
rank(C,12).forEach(r=>console.log('   '+r[0].toFixed(3)+'  '+r[1]+'  vs  '+r[2]+'   ['+r[3]+']'));
console.log('   >=0.60 :', C.filter(r=>r[0]>=0.60).length);

// ---- D identical option menu (PAIRS, never folds)
let D=[];
for(const s of Sx){ for(const l of Lx) if(s.om&&s.om===l.om) D.push([1,s.k,l.k]);
  for(const s2 of Sx) if(s.k<s2.k && s.om===s2.om) D.push([1,s.k,s2.k]); }
console.log('== D identical option menu ==', D.length?D:'0');
let Dr=[];
for(const s of Sx){ const so=new Set(s.q.opts.map(o=>N.tight(o)));
  for(const l of Lx){ const lo=new Set((l.q.options||[]).map(o=>N.tight(o))); Dr.push([dice(so,lo),s.k,l.k]); }
  for(const s2 of Sx) if(s.k<s2.k){ const lo=new Set(s2.q.opts.map(o=>N.tight(o))); Dr.push([dice(so,lo),s.k,s2.k+' (self)']); } }
console.log('   option-set Dice top 8:');
rank(Dr,8).forEach(r=>console.log('   '+r[0].toFixed(3)+'  '+r[1]+'  vs  '+r[2]));

// ---- E same keyed answer text + stem Dice >= 0.45
let E=[];
for(const s of Sx){ for(const l of Lx) if(s.ans&&l.ans&&N.tight(s.ans)===N.tight(l.ans)){ const d=dice(s.c,l.c); if(d>=0.45) E.push([d,s.k,l.k,s.ans]); }
  for(const s2 of Sx) if(s.k<s2.k && s.ans&&s2.ans&&N.tight(s.ans)===N.tight(s2.ans)){ const d=dice(s.c,s2.c); if(d>=0.45) E.push([d,s.k,s2.k+' (self)',s.ans]); } }
console.log('== E same keyed answer + stem Dice>=0.45 ==', E.length?'':'0');
rank(E,10).forEach(r=>console.log('   '+r[0].toFixed(3)+'  '+r[1]+'  vs  '+r[2]+'   key="'+r[3]+'"'));

// ---- F within-chapter neighbours (boxed second printing / reprint shape)
console.log('== F within-chapter adjacent-pair Dice, top 8 ==');
let F=[];
for(let i=0;i<Sx.length-1;i++) F.push([dice(Sx[i].c,Sx[i+1].c),Sx[i].k,Sx[i+1].k]);
rank(F,8).forEach(r=>console.log('   '+r[0].toFixed(3)+'  '+r[1]+'  vs  '+r[2]));
