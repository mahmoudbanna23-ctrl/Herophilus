const fs = require('fs'), path = require('path'), vm = require('vm'), cp = require('child_process');
const root = path.resolve(__dirname, '..'), repo = path.resolve(root, '../../../..');
function load(file) { const c = {}; vm.createContext(c); vm.runInContext(fs.readFileSync(file, 'utf8'), c, {filename:file}); return Object.values(c).find(Array.isArray); }
function assert(ok, message) { if (!ok) throw new Error(message); }
const qs = load(path.join(__dirname, 'questions.peds.sa.js'));
assert(qs.length === 521 && Object.keys(qs).length === 521, 'expected 521 non-sparse entries');
assert(new Set(qs.map(q => q.id)).size === qs.length, 'duplicate built ids');
const liveFiles = ['questions.peds.js','questions.peds.ep.js','questions.peds.ep2.js']; const live = liveFiles.flatMap(f => load(path.join(repo,'app/data',f)));
const liveIds = new Set(live.map(q => q.id)); assert(qs.every(q => !liveIds.has(q.id)), 'built id exists live');
for (const [prefix, n] of [['pedsa1-',165],['pedsa2-',188],['pedsa-b',168]]) assert(qs.filter(q=>q.id.startsWith(prefix)).length===n, `wrong ${prefix} count`);
const modules = fs.readFileSync(path.join(repo,'app/data/modules.js'),'utf8'); const chapters = new Set([...modules.matchAll(/\['([^']+)'\s*,/g)].map(x=>x[1]));
for (const q of qs) { assert(q.bank==='selfassess' && q.module==='pediatrics', `bank/module ${q.id}`); assert(chapters.has(q.chapter), `chapter ${q.id}`); assert(q.options.length>=2&&(q.options.length<=10 || q.id.startsWith('pedsa-b')), `options ${q.id}`); assert(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.options.length, `answer ${q.id}`); assert(/^Self (Assessment Book|assessment part [12])\.pdf p\.\d+ /.test(q.source), `source ${q.id}`); if(q.image){assert(q.imgAlt,`imgAlt ${q.id}`); assert(fs.existsSync(path.join(repo,'app/assets/q',q.image+'.jpg')),`image ${q.id}`);} }
const pairs=JSON.parse(fs.readFileSync(path.join(root,'_work/sweep/pairs/book-pairs.json'))), rulings=JSON.parse(fs.readFileSync(path.join(root,'_work/sweep/pairs/claude-rulings.json'))), rm=new Map(rulings.map(r=>[r.book+'\0'+r.other,r])); const fold=new Set(pairs.map(p=>({...p,...(rm.get(p.book+'\0'+p.other)||{})})).filter(p=>p.cls==='SAME').map(p=>p.book)); assert(fold.size===284,'fold count'); assert([...fold].every(id=>!qs.some(q=>q.id===id)),'folded id built');
const plan=JSON.parse(fs.readFileSync(path.join(__dirname,'alsoin-plan.json'))); for(const x of plan){assert(liveFiles.includes(x.liveFile),`plan file ${x.live}`); assert(load(path.join(repo,'app/data',x.liveFile)).some(q=>q.id===x.live),`plan live ${x.live}`);}
const dry=cp.spawnSync(process.execPath,['apply-alsoin.js'],{cwd:__dirname,encoding:'utf8'}); process.stdout.write(dry.stdout); process.stderr.write(dry.stderr); assert(dry.status===0,'apply dry run failed'); console.log('check.js PASS');
