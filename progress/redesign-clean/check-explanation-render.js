// Render-rule check: runs explanationHTML from quiz.js over every bank explanation.
const fs=require('fs'),vm=require('vm');const R=process.argv[2];
const ctx={};ctx.window=ctx;ctx.document={};vm.createContext(ctx);
for(const f of fs.readdirSync(R+'/data').filter(f=>/^questions\..*\.js$/.test(f)))
  try{vm.runInContext(fs.readFileSync(R+'/data/'+f,'utf8'),ctx)}catch(e){console.log('LOAD FAIL',f,e.message)}
vm.runInContext(fs.readFileSync(R+'/js/utils.js','utf8'),ctx);
vm.runInContext(fs.readFileSync(R+'/js/ui-icons.js','utf8'),ctx);
try{vm.runInContext(fs.readFileSync(R+'/js/theory.js','utf8'),ctx)}catch(e){console.log('theory.js top-level:',e.message)}
const src=fs.readFileSync(R+'/js/quiz.js','utf8');
const i=src.indexOf('function explanationHTML(');let d=0,end=0;
for(let k=src.indexOf('{',i);k<src.length;k++){if(src[k]=='{')d++;else if(src[k]=='}'&&--d==0){end=k+1;break}}
vm.runInContext(src.slice(i,end)+';this.X=explanationHTML;',ctx);
const all=[];for(const k of Object.keys(ctx))if(/^Q_/.test(k)&&Array.isArray(ctx[k]))for(let j=0;j<ctx[k].length;j++)if(j in ctx[k])all.push(ctx[k][j]);
const strip=h=>h.replace(/<\/?p>/g,'');
for(const q of all.filter(x=>x&&x.explanation&&x.explanation.includes('COULD NOT DETECT ASPIRATION'))){
  const h=ctx.X(q.explanation);const a=h.indexOf('<blockquote>');
  console.log('id',q.id,'| quotes',(h.match(/<blockquote>/g)||[]).length);
  console.log(strip(h.slice(a,h.indexOf('</blockquote>',a)+13)).slice(0,700));
}
let n=0,emptyLi=0,bulletLi=0,thrown=0,rawWarn=0,swapped=0,leftWarn=0;
for(const q of all){if(!q||!q.explanation)continue;n++;
  try{const h=ctx.X(q.explanation);rawWarn+=(q.explanation.match(/⚠️?/g)||[]).length;swapped+=(h.match(/class="warn-ico"/g)||[]).length;leftWarn+=(h.match(/⚠/g)||[]).length;if(/<li>\s*(<p>)?\s*(<\/p>)?\s*<\/li>/.test(h))emptyLi++;if(/<li>(<p>)?(&quot;)?•/.test(h))bulletLi++}
  catch(e){thrown++;if(thrown<4)console.log('THROW',q.id,e.message)}}
console.log('explanations',n,'| empty items',emptyLi,'| items opening with a bullet',bulletLi,'| throws',thrown);
console.log('warning signs in stored text',rawWarn,'| swapped for the icon',swapped,'| left as emoji',leftWarn);
