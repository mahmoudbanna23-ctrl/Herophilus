const fs=require('fs'),vm=require('vm'),path=require('path');
const root=path.resolve(__dirname,'..'); const files=process.argv.slice(2); if(!files.length)files.push('sa-p1.array.js','sa-p2.array.js');
function array(file){const c={};vm.createContext(c);vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),c);return c[file.includes('p1')?'SA_P1':file.includes('p2')?'SA_P2':'SA_BOOK'];}
let MODULES=eval(fs.readFileSync(path.resolve(root,'../../../../app/data/modules.js'),'utf8')+';MODULES'); const allowed=new Set(MODULES.find(m=>m.id==='pediatrics').groups.flatMap(g=>g.chapters.map(c=>c[0])));
const items=files.flatMap(array), data=JSON.parse(fs.readFileSync(path.join(root,'sa-chapters.json'),'utf8')), ids=new Set(items.map(x=>x.id)); let bad=[];
for(const id of ids)if(!data[id])bad.push('missing '+id); for(const id of Object.keys(data))if(!ids.has(id)&&files.length===2){} else if(!ids.has(id)&&files.length!==2)bad.push('extra '+id);
for(const[id,v]of Object.entries(data))for(const k of ['chapter','secondary'])if(v[k]&&!allowed.has(v[k]))bad.push(`invalid ${k} ${id}: ${v[k]}`);
if(bad.length){console.error(bad.join('\n'));process.exit(1)} const counts={};for(const id of ids){const c=data[id].chapter;counts[c]=(counts[c]||0)+1}console.log(Object.entries(counts).map(([k,v])=>`${k}: ${v}`).join(', '));console.log('outOfCourse:',items.filter(x=>data[x.id].outOfCourse).length);
