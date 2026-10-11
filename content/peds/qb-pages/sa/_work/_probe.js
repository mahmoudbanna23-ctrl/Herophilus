const fs=require('fs'),vm=require('vm');
const base='D:/claude os/Medical school/Herophilus/content/peds/qb-pages/sa/';
let all=[];
for(const [f,v] of [['sa-book.array.js','SA_BOOK'],['sa-p1.array.js','SA_P1'],['sa-p2.array.js','SA_P2']]){
 const ctx={};vm.createContext(ctx);vm.runInContext(fs.readFileSync(base+f,'utf8')+';this.X='+v,ctx);all=all.concat(ctx.X);}
const kinds={};for(const q of all){kinds[q.kind]=(kinds[q.kind]||0)+1}
console.log(all.length,kinds);
for(const k in kinds){const q=all.find(x=>x.kind==k);console.log(k,JSON.stringify(q).slice(0,900));}
