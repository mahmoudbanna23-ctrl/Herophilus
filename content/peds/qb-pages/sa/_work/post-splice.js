// Parse probe after the splice: every Pediatrics data file loads, no sparse holes, alsoIn counts.
const fs=require('fs'),vm=require('vm'),p=require('path');const D=p.join(__dirname,'../../../../../app/data');
let total=0,tagged=0;
for(const [f,n] of [['questions.peds.js','Q_PEDS'],['questions.peds.ep.js','Q_PEDS_EP'],['questions.peds.ep2.js','Q_PEDS_EP2'],['questions.peds.sa.js','Q_PEDS_SA']]){
  const c={};vm.createContext(c);const src=fs.readFileSync(p.join(D,f),'utf8');
  const m=src.match(/var\s+(Q_[A-Z0-9_]+)\s*=/);vm.runInContext(src+';this.__x='+m[1],c);const a=c.__x;
  let holes=0;for(let i=0;i<a.length;i++)if(!(i in a))holes++;
  const t=a.filter(q=>(q.alsoIn||[]).includes('selfassess')).length;total+=a.length;tagged+=t;
  console.log(f,m[1],'n',a.length,'holes',holes,'alsoIn selfassess',t,'bank selfassess',a.filter(q=>q.bank==='selfassess').length,'CR',(src.match(/\r/g)||[]).length);
}
console.log('peds total',total,'tagged',tagged);
