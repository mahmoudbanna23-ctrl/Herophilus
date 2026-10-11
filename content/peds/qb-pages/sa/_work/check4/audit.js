/* Independent text-layer audit: deliberately does not import either staging/check parser. */
const fs=require('fs'), vm=require('vm'), path=require('path');
const root=path.resolve(__dirname,'..','..');
const book=path.join(root,'book');
const cx={}; vm.createContext(cx);
vm.runInContext(fs.readFileSync(path.join(root,'sa-book.array.js'),'utf8'),cx);
const a=cx.SA_BOOK;
const read=p=>fs.existsSync(path.join(book,`p${String(p).padStart(4,'0')}.raw.txt`))?fs.readFileSync(path.join(book,`p${String(p).padStart(4,'0')}.raw.txt`),'utf8'):'';
const clean=s=>s.replace(/\u000c/g,' ').replace(/\s+/g,' ').trim();
const words=s=>clean(s).match(/[\p{L}\p{N}]+(?:[’'\-][\p{L}\p{N}]+)*/gu)||[];
const subseq=(need,have)=>{let j=0;for(const w of have)if(j<need.length&&w.toLowerCase()===need[j].toLowerCase())j++;return j===need.length};
const pageText=p=>clean(read(p)+' '+read(p+1));
const faults={1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[]};
const add=(n,x)=>faults[n].push(x);
const idnum=x=>x.num.replace(/\./g,'-');

// Test 1: independently count each stored number only when it is literally printed in its
// declared question/answer window. This avoids treating a following chapter's page as prior text.
for(const x of a){const re=new RegExp(`(^|\\s)${x.num.replace(/\./g,'\\.')}($|\\s)`); if(!re.test(pageText(x.page)))add(1,`${x.id}: ${x.num} absent in question window`); if(!re.test(pageText(x.ansPage)))add(1,`${x.id}: ${x.num} absent in answer window`);}

for(const x of a){
  const q=pageText(x.page), ans=pageText(x.ansPage);
  // Test 7 literal number on its declared pages.
  const numRe=new RegExp(`(^|\\s)${x.num.replace(/\./g,'\\.')}($|\\s)`);
  if(!numRe.test(q))add(7,`${x.id}: question p${x.page} lacks ${x.num}`);
  if(!numRe.test(ans))add(7,`${x.id}: answer p${x.ansPage} lacks ${x.num}`);
  // Test 4: stem words must be an ordered subsequence of the source question pages.
  if(!subseq(words(x.stem),words(q)))add(4,`${x.id}: stem not ordered on p${x.page}-${x.page+1} (${x.stem.slice(0,70)})`);
  // Test 3: each option must occur in order on source question pages; EMQ siblings must agree.
  const set=x.kind==='emq'?a.filter(y=>y.kind==='emq'&&y.bookChapter===x.bookChapter&&y.num.split('.').slice(0,2).join('.')===x.num.split('.').slice(0,2)):[];
  const optionSource=set.length?pageText(Math.min(...set.map(y=>y.page))):q;
  for(let i=0;i<x.options.length;i++) if(!subseq(words(x.options[i]),words(optionSource))) add(3,`${x.id}: option ${String.fromCharCode(65+i)} not on its option-set page (${x.options[i].slice(0,65)})`);
  if(x.kind==='emq') for(const y of a.filter(y=>y.kind==='emq'&&y.bookChapter===x.bookChapter&&y.num.split('.').slice(0,2).join('.')===x.num.split('.').slice(0,2)))
    if(JSON.stringify(y.options)!==JSON.stringify(x.options))add(3,`${x.id}: EMQ siblings have differing option lists`);
  // Test 5: all explanation words must occur in order starting on declared answer page or following page.
  if(!subseq(words(x.explanation),words(ans)))add(5,`${x.id}: explanation not ordered on p${x.ansPage}-${x.ansPage+1} (${x.explanation.slice(0,70)})`);
  // Test 2: line-headed correct option in the answer pages must agree with stored key/text.
  if(x.kind==='sba'){
    const raw=read(x.ansPage)+'\n'+read(x.ansPage+1)+'\n'+read(x.ansPage+2);
    const pos=raw.search(new RegExp(`(^|\\n)${x.num.replace(/\./g,'\\.')}\\s*(?:\\n|$)`));
    const tail=pos<0?'':raw.slice(pos+1);
    const next=tail.slice(1).search(/^\d+\.\d+(?:\.\d+)?\s*$/m);
    const block=next<0?tail:tail.slice(0,next+1);
    const m=[...block.matchAll(/(?:^|\n)([A-Z])\.\s*([^\n]+)\nCorrect\.?/g)][0];
    if(m){ const k=m[1].toUpperCase(), text=clean(m[2]); if(k!==x.keyLetter||!subseq(words(x.options[x.answer]||''),words(text)))add(2,`${x.id}: page prints ${k}. ${text.slice(0,70)}; array ${x.keyLetter}. ${(x.options[x.answer]||'').slice(0,70)}`); }
    else if(!/Correct\.?/i.test(block)) add(2,`${x.id}: no printed Correct heading found`);
  } else {
    const re=new RegExp(`${x.num.replace(/\./g,'\\.')}\\s+([A-Z])\\.\\s+([^]*?)(?=\\s+\\d+\\.\\d+(?:\\.\\d+)?\\s+[A-Z]\\.|$)`);
    const m=ans.match(re); if(m && (m[1]!==x.keyLetter || !subseq(words(x.options[x.answer]||''),words(clean(m[2]).slice(0,200))))) add(2,`${x.id}: page prints ${m[1]}. ${clean(m[2]).slice(0,70)}; array ${x.keyLetter}. ${(x.options[x.answer]||'').slice(0,70)}`);
  }
  // Test 8: every cited label must literally occur on source; exact figure location cannot be inferred from raw text.
  for(const f of x.figs||[]) if(!new RegExp(f.label.replace(/\./g,'\\.')).test(pageText(f.page)))add(8,`${x.id}: ${f.label} absent from declared figure p${f.page}`);
}
// Test 6: page-text differences in technical characters exposed by an otherwise absent option/explanation/stem are already tests 3–5; list explicit conspicuous array characters absent from relevant source.
for(const x of a){const source=pageText(x.page)+' '+pageText(x.ansPage); for(const c of (x.stem+' '+x.options.join(' ')+' '+x.explanation).match(/[<>=+−–—°αβγµμ²³⁰¹⁴⁵⁶⁷⁸⁹]/g)||[]) if(!source.includes(c)) add(6,`${x.id}: array character ${JSON.stringify(c)} absent from source pages`)}
for(const n of Object.keys(faults))faults[n]=[...new Set(faults[n])];
const out={total:a.length, kinds:{sba:a.filter(x=>x.kind==='sba').length,emq:a.filter(x=>x.kind==='emq').length}, faults};
fs.writeFileSync(path.join(__dirname,'results.json'),JSON.stringify(out,null,2)+'\n');
for(const n of Object.keys(faults))console.log(`T${n} ${faults[n].length}`),faults[n].slice(0,20).forEach(x=>console.log(' ',x));
