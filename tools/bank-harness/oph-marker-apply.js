// Apply approved endpoint explanation boxes.  Dry-run is the default.
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const cp = require('child_process');

const ROOT = path.resolve(__dirname, '..', '..');
const fixtureAt = process.argv.indexOf('--fixture');
const FIXTURE = fixtureAt < 0 ? null : process.argv[fixtureAt + 1];
if (fixtureAt >= 0 && !FIXTURE) throw new Error('--fixture needs a directory');
const DATA = FIXTURE ? path.resolve(FIXTURE) : path.join(ROOT, 'app', 'data');
const DECISIONS = path.join(FIXTURE || path.join(ROOT, 'content', 'ophtho', 'qb-pages', '_close-work', 'marker-sweep'), 'apply-decisions.json');
const WRITE = process.argv.includes('--write');
const FILES = [['questions.ophtho.ep.js', 'Q_OPHTHO_EP'], ['questions.ophtho.ep2.js', 'Q_OPHTHO_EP2']];
const die = s => { throw new Error(s); };
const read = p => fs.readFileSync(p, 'utf8');
const filePath = n => path.join(DATA, n);
const escRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
function escString(value, quote) { return String(value).replace(/\\/g, '\\\\').replace(new RegExp(escRe(quote), 'g'), '\\' + quote).replace(/\r/g, '\\r').replace(/\n/g, '\\n'); }
const literal = (value, quote) => quote + escString(value, quote) + quote;
function load(file, variable) { const c = {}; vm.createContext(c); vm.runInContext(read(file) + ';this.__result=' + variable + ';', c, { filename:file }); if (!Array.isArray(c.__result)) die(file + ' did not define ' + variable); return c.__result.filter(Boolean); }
function balanceEnd(text, open) { let depth=0, quote=null, slash=false, line=false, block=false; for(let i=open;i<text.length;i++){ const ch=text[i], nx=text[i+1]; if(line){if(ch==='\n')line=false;continue;} if(block){if(ch==='*'&&nx==='/'){block=false;i++;}continue;} if(quote){if(slash)slash=false;else if(ch==='\\')slash=true;else if(ch===quote)quote=null;continue;} if(ch==='/'&&nx==='/'){line=true;i++;continue;} if(ch==='/'&&nx==='*'){block=true;i++;continue;} if(ch==='\''||ch==='"'||ch==='`'){quote=ch;continue;} if(ch==='{')depth++;else if(ch==='}'&&--depth===0)return i+1;} die('unclosed object'); }
function blockFor(text, id) { const re=new RegExp('(?:["\\\']?id["\\\']?\\s*:\\s*)(["\\\'])'+escRe(id)+'\\1'); const m=re.exec(text); if(!m)return null; const open=text.lastIndexOf('{',m.index); if(open<0)die(id+': no opening brace'); const end=balanceEnd(text,open); return {open,end,block:text.slice(open,end)}; }
function field(block, name) { const re=new RegExp('(["\\\']?'+escRe(name)+'["\\\']?\\s*:\\s*)(["\\\'])((?:\\\\.|(?!\\2)[\\s\\S])*)\\2'); const m=re.exec(block); if(!m)return null; return {match:m[0],prefix:m[1],quote:m[2],value:vm.runInNewContext(m[2]+m[3]+m[2])}; }
function replaceField(block, name, value) { const f=field(block,name); if(!f)die(name+' field missing'); return block.replace(f.match,f.prefix+literal(value,f.quote)); }

// Deliberately finite, anchored whitelist.  Add a new printed form here only after it is
// observed in the source; a near match must fail rather than silently rewrite an entry.
const MARKERS = [
  ['the endpoint file, italic', /\n\n\*Written for this bank — the endpoint file prints no explanation here\.\*$/],
  ['the endpoint file, plain', /\n\nWritten for this bank — the endpoint file prints no explanation here\.$/],
  ['Opthalmology endpoint.pdf, italic', /\n\n\*Written for this bank — Opthalmology endpoint\.pdf prints no explanation here\.\*$/],
  ['Opthalmology endpoint.pdf, plain', /\n\nWritten for this bank — Opthalmology endpoint\.pdf prints no explanation here\.$/],
  ['the endpoint PDF, italic', /\n\n\*Written for this bank — the endpoint PDF prints no explanation here\.\*$/],
  ['the endpoint PDF, plain', /\n\nWritten for this bank — the endpoint PDF prints no explanation here\.$/]
];
const BOX_HEADING = '**The endpoint file prints this explanation:**';
const BOX_CLOSING = '*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*';
function markerFor(value) { return MARKERS.find(([, re]) => re.test(value)) || null; }
function boxText(box) { return '\n\n' + BOX_HEADING + '\n' + String(box).split('\n').map(x => '> ' + x).join('\n') + '\n\n' + BOX_CLOSING; }
function dataFiles() { return FILES.map(([name, variable]) => ({name, variable, path:filePath(name)})); }
function indexRows(files) { const rows=new Map(), arrays=new Map(); for(const f of files){const a=load(f.path,f.variable); arrays.set(f.name,a); for(const q of a){if(rows.has(q.id))die('duplicate id: '+q.id); rows.set(q.id,{q,name:f.name});}} return {rows,arrays}; }
function markerCounts(rows) { const counts=new Map(MARKERS.map(([name])=>[name,0])); for(const {q} of rows.values()){const m=markerFor(String(q.explanation||''));if(m)counts.set(m[0],counts.get(m[0])+1);} return counts; }
function printForms(counts) { for(const [name,n] of counts) console.log('marker form: '+name+' | '+n); }

if (!fs.existsSync(DECISIONS)) die('decisions file missing: '+DECISIONS);
const decisionsDoc=JSON.parse(read(DECISIONS));
if(!Array.isArray(decisionsDoc.entries))die('apply-decisions.json needs entries array');
const beforeFiles=dataFiles(); const before=indexRows(beforeFiles); const formsBefore=markerCounts(before.rows); printForms(formsBefore);
const seen=new Set(), active=[], skips=[];
for(const d of decisionsDoc.entries){
  if(!d||typeof d.id!=='string'||typeof d.box!=='string'||typeof d.cite!=='string')die('bad apply decision');
  if(seen.has(d.id))die('two decisions for one id: '+d.id); seen.add(d.id);
  const found=before.rows.get(d.id); if(!found)die('not a live endpoint id: '+d.id);
  const explanation=String(found.q.explanation||'');
  if(explanation.includes(BOX_HEADING) && !markerFor(explanation)){skips.push(d.id);continue;}
  if(!markerFor(explanation))die('unrecognised closing marker for '+d.id);
  active.push({...d,name:found.name});
}
console.log('plan: apply '+active.map(d=>d.id).join(', ')+'; skip '+(skips.join(', ')||'-'));
if(!WRITE){console.log('dry run: decisions '+decisionsDoc.entries.length+'; apply '+active.length+'; skips '+skips.length); process.exit(0);}

const originals=new Map(beforeFiles.map(f=>[f.path,read(f.path)])); const texts=new Map(originals);
for(const d of active){ const p=filePath(d.name), b=blockFor(texts.get(p),d.id); if(!b)die('entry disappeared: '+d.id); const old=field(b.block,'explanation'); if(!old)die('explanation field missing: '+d.id); const marker=markerFor(old.value); if(!marker)die('unrecognised closing marker during write: '+d.id); let changed=replaceField(b.block,'explanation',old.value.replace(marker[1],boxText(d.box))); if(d.cite) { const source=field(changed,'source'); if(!source)die('source field missing: '+d.id); changed=replaceField(changed,'source',source.value+d.cite); } texts.set(p,texts.get(p).slice(0,b.open)+changed+texts.get(p).slice(b.end)); }
for(const [p,text] of texts)fs.writeFileSync(p,text,'utf8');

const after=indexRows(dataFiles()); const formsAfter=markerCounts(after.rows);
for(const f of beforeFiles)if(after.arrays.get(f.name).length!==before.arrays.get(f.name).length)die('array length changed: '+f.name);
for(const [id,old] of before.rows){ const now=after.rows.get(id); if(!now)die('entry removed: '+id); if(!active.some(d=>d.id===id)){ const beforeBlock=blockFor(originals.get(filePath(old.name)),id).block, afterBlock=blockFor(read(filePath(old.name)),id).block; if(beforeBlock!==afterBlock)die('untouched entry changed: '+id); } }
for(const d of active){ const old=before.rows.get(d.id).q, now=after.rows.get(d.id).q; if(!now)die('missing written entry: '+d.id); for(const k of new Set([...Object.keys(old),...Object.keys(now)]))if(k!=='explanation'&&!(k==='source'&&d.cite)&&JSON.stringify(old[k])!==JSON.stringify(now[k]))die('unexpected change: '+d.id+'.'+k); const wanted=boxText(d.box); if(!String(now.explanation).endsWith(wanted))die('box proof failed: '+d.id); if(d.cite&&now.source!==String(old.source)+d.cite)die('cite proof failed: '+d.id); }
const beforeMarkers=[...formsBefore.values()].reduce((a,b)=>a+b,0), afterMarkers=[...formsAfter.values()].reduce((a,b)=>a+b,0); if(beforeMarkers-afterMarkers!==active.length)die('marker count mismatch');
for(const f of beforeFiles){const r=cp.spawnSync(process.execPath,['--check',f.path],{encoding:'utf8'});if(r.status)die('--check failed: '+f.name+' '+r.stderr);}
console.log('PASS decisions='+decisionsDoc.entries.length+' applied='+active.length+' skipped='+skips.length+' markers='+beforeMarkers+'->'+afterMarkers);
if(skips.length)console.log('idempotent skips: '+skips.join(', '));
