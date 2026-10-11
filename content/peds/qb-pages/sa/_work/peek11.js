const fs=require('fs'),vm=require('vm'),p=require('path');const SA=p.join(__dirname,'..');
const c={};vm.createContext(c);vm.runInContext(fs.readFileSync(p.join(SA,'_build/questions.peds.sa.js'),'utf8')+';this.__x=Q_PEDS_SA',c);const b=c.__x;
const g=id=>b.find(q=>q.id===id);
console.log('n',b.length,'pictures',b.filter(q=>q.image).length,'maxExpl',Math.max(...b.map(q=>q.explanation.length)));
const a=g('pedsa-b31-3');console.log('b31-3',a.explanation.length,JSON.stringify(a.explanation.slice(-90)));
const d=g('pedsa-b25-2');console.log('b25-2',d.image,'|',d.imgAlt);
const e=g('pedsa-b25-10');console.log('b25-10',e.chapter,'|',e.objective,'|',e.stem.slice(0,400),'| KEY',e.options[e.answer]);
const f=g('pedsa1-1-1');console.log(JSON.stringify(f.explanation.slice(-150)),'|',f.objective);
console.log('opts>10',b.filter(q=>q.options.length>10).length,'max',Math.max(...b.map(q=>q.options.length)));
