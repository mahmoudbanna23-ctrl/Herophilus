/* Whole-bank validator.  Uses the same classic-script order as app/index.html. */
'use strict';
const fs=require('fs'), path=require('path'), vm=require('vm');
const ROOT=path.resolve(__dirname,'..','..');
const APP=path.join(ROOT,'app');
const KNOWN_BANKS=new Set(['endpoint','house','gradegain']);
function dataScripts(root){
 const html=fs.readFileSync(path.join(root,'index.html'),'utf8'), out=[];
 for(const m of html.matchAll(/<script\s+src=["']data\/([^"']+)["']/g)) out.push(m[1]);
 return out;
}
function load(root){
 const sandbox={window:null,console,document:{head:{appendChild(){}},createElement(){return {appendChild(){},style:{}}},createTextNode(){return {}}},setTimeout(){}};
 sandbox.window=sandbox; vm.createContext(sandbox); const files=dataScripts(root);
 for(const name of files){
  const file=path.join(root,'data',name); let source=fs.readFileSync(file,'utf8');
  if(name==='modules.js') source+='\n;globalThis.__MODULES=MODULES;globalThis.__TERMS=TERMS;';
  try{vm.runInContext(source,sandbox,{filename:file});}catch(e){throw new Error('syntax/load '+name+': '+e.message);}
 }
 return {sandbox,files};
}
function validate(root=APP){
 let x; try{x=load(root)}catch(e){return {ok:false,checks:0,passed:0,errors:[e.message],counts:{}}}
 const {sandbox:s,files}=x, errors=[]; let checks=0, passed=0;
 const fail=(file,id,msg)=>errors.push(file+(id?' '+id:'')+': '+msg);
 const check=(good,file,id,msg)=>{checks++;if(good)passed++;else fail(file,id,msg)};
 const modules=s.__MODULES||[], chapters=new Map(), moduleIds=new Set(modules.map(m=>m.id));
 for(const m of modules){check(m&&typeof m.id==='string'&&Array.isArray(m.groups),'modules.js',m&&m.id,'module needs id and groups');
  for(const g of m.groups||[]){check(Array.isArray(g.chapters),'modules.js',m.id,'group needs chapters array'); for(let i=0;i<(g.chapters||[]).length;i++){const c=g.chapters[i];check(i in g.chapters,'modules.js',m.id,'sparse chapter hole '+i);check(Array.isArray(c)&&typeof c[0]==='string'&&typeof c[1]==='string','modules.js',m.id,'invalid chapter tuple '+i);if(c)chapters.set(c[0],m.id)}}
 }
 const collections=[];
 /* Only globals declared by each source file count.  Aggregators expose Q_ALL
    and T_ALL too, but they are views, not separate banks. */
 for(const f of files){const source=fs.readFileSync(path.join(root,'data',f),'utf8');
  for(const m of source.matchAll(/\bvar\s+((?:Q|C|T)_[A-Z0-9_]+)\s*=/g)){const k=m[1],v=s[k];
   if(Array.isArray(v))collections.push({file:f,name:k,v,type:k.startsWith('C_')?'case':'question'});
   else if(k.startsWith('T_')&&v&&typeof v==='object')collections.push({file:f,name:k,v,type:'theory'});
  }
 }
 const ids=new Map(), questions=[], counts={};
 for(const c of collections){
  const n=Array.isArray(c.v)?c.v.length:Object.keys(c.v).length; counts[c.file]=(counts[c.file]||0)+n;
  if(Array.isArray(c.v))for(let i=0;i<c.v.length;i++){
   check(i in c.v,c.file,c.name,'sparse hole '+i); if(!(i in c.v))continue; const q=c.v[i], id=q&&q.id;
   check(q&&typeof q==='object',c.file,id,'entry must be an object'); if(!q)continue;
   for(const f of (c.type==='case'?['id','bank','module','chapter','type','stem','answer','keys','explanation','objective','source']:['id','bank','module','chapter','stem','options','answer','explanation','objective','source'])) check(q[f]!==undefined&&q[f]!=='',c.file,id,'missing '+f);
   check(typeof id==='string',c.file,id,'id must be a string'); if(typeof id==='string'){if(ids.has(id))fail(c.file,id,'duplicate id (first in '+ids.get(id)+')');else ids.set(id,c.file)}
   check(moduleIds.has(q.module),c.file,id,'unknown module '+q.module); check(chapters.has(q.chapter),c.file,id,'unknown chapter '+q.chapter); if(chapters.has(q.chapter))check(chapters.get(q.chapter)===q.module,c.file,id,'chapter belongs to another module');
   check(KNOWN_BANKS.has(q.bank),c.file,id,'unknown bank '+q.bank); check(!q.alsoIn||Array.isArray(q.alsoIn)&&q.alsoIn.every(b=>KNOWN_BANKS.has(b)),c.file,id,'invalid alsoIn bank');
   if(c.type==='case'){check(q.type==='case',c.file,id,'case type must be case');check(Array.isArray(q.keys)&&q.keys.length>0,c.file,id,'case needs keys');}
   else {check(Array.isArray(q.options)&&q.options.length>=2,c.file,id,'options must contain at least two values');check(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<(q.options||[]).length,c.file,id,'answer out of range');}
   if(q.image!==undefined){check(typeof q.imgAlt==='string'&&q.imgAlt.trim()!=='',c.file,id,'image needs imgAlt');check(fs.existsSync(path.join(root,'assets','q',q.image+'.jpg')),c.file,id,'image file missing: '+q.image+'.jpg');}
   questions.push({q,file:c.file});
  }
  else for(const [chapter,t] of Object.entries(c.v)){check(chapters.has(chapter),c.file,chapter,'theory chapter does not resolve');check(t&&typeof t.intro==='string'&&Array.isArray(t.sections),c.file,chapter,'theory needs intro and sections');for(const sec of (t&&t.sections)||[]){for(const f of ['id','w','h','body','qs'])check(sec&&sec[f]!==undefined&&sec[f]!=='',c.file,chapter,'theory section missing '+f);check(Array.isArray(sec&&sec.qs),c.file,chapter,'theory section qs must be array');}}
 }
 const qids=new Set(questions.map(x=>x.q.id));
 for(const c of collections.filter(c=>c.type==='theory'))for(const [chapter,t] of Object.entries(c.v))for(const sec of t.sections||[])for(const id of sec.qs||[])check(qids.has(id),c.file,chapter,'qs id not found: '+id);
 const expectedPath=path.join(__dirname,'counts.json'); if(fs.existsSync(expectedPath)){const expected=JSON.parse(fs.readFileSync(expectedPath,'utf8'));for(const [f,n] of Object.entries(expected))check(counts[f]===n,f,'','count '+counts[f]+' differs from expected '+n);for(const f of Object.keys(counts))check(Object.prototype.hasOwnProperty.call(expected,f),f,'','missing expected count');
  /* app/smoke.js cannot fetch counts.json under file://, so it pins its own
     EXPECTED_TOTAL.  Catch drift here instead: fail the gate if that number
     stops matching the question+case total this file computed from counts.json. */
  const smokePath=path.join(root,'smoke.js');
  if(fs.existsSync(smokePath)){
   const smokeSrc=fs.readFileSync(smokePath,'utf8'), m=smokeSrc.match(/EXPECTED_TOTAL\s*=\s*(\d+)/);
   const countsTotal=Object.entries(expected).filter(([f])=>!f.startsWith('theory.')).reduce((sum,[,n])=>sum+n,0);
   check(m&&Number(m[1])===countsTotal,'smoke.js','','EXPECTED_TOTAL '+(m?m[1]:'not found')+' differs from counts.json total '+countsTotal);
  }
 }
 return {ok:!errors.length,checks,passed,errors,counts,total:questions.length};
}
if(require.main===module){const rootArg=process.argv.find(a=>a.startsWith('--root='));const r=validate(rootArg?path.resolve(rootArg.slice(7)):APP);r.errors.forEach(e=>console.error('FAIL  '+e));console.log(r.passed+' of '+r.checks+' checks passed'+(r.ok?'':'; '+r.errors.length+' failed'));process.exit(r.ok?0:1)}
module.exports={validate,load,dataScripts};
