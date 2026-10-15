'use strict';
const fs = require('fs');
const path = require('path');
const {execFileSync} = require('child_process');
const {createHash} = require('crypto');
const root = path.resolve(__dirname, '../..');
const base = process.argv[2] || 'HEAD';
const git = args => execFileSync('git', args, {cwd:root, maxBuffer:128*1024*1024});
const frozen = p => p.startsWith('app/data/') || p.startsWith('app/js/lib/') ||
  ['app/js/storage.js','app/js/utils.js','app/js/theme.js','app/js/icons.js','app/css/print.css'].includes(p);
const hash = b => createHash('sha256').update(b).digest('hex');
try {
  const commit = git(['rev-parse','--verify',base+'^{commit}']).toString().trim();
  const old = git(['ls-tree','-r','--name-only','-z',commit]).toString().split('\0').filter(frozen);
  const current=[];
  function walk(dir){for(const e of fs.readdirSync(path.join(root,dir),{withFileTypes:true})){
    const p=dir+'/'+e.name;if(e.isDirectory())walk(p);else if(frozen(p))current.push(p);
  }}
  walk('app/data');walk('app/js');walk('app/css');
  const all=[...new Set([...old,...current])].sort();let bad=0;
  for(const p of all){
    const exists=fs.existsSync(path.join(root,p));
    if(!old.includes(p)||!exists||hash(git(['show',commit+':'+p]))!==hash(fs.readFileSync(path.join(root,p)))){
      console.log('MISMATCH '+p+(!exists?' (missing)':!old.includes(p)?' (added)':''));bad++;
    }
  }
  console.log((bad?'FAIL':'PASS')+' frozen: '+all.length+' files, '+bad+' mismatches (base '+base+')');
  process.exitCode=bad?1:0;
}catch(e){console.error('FAIL frozen: '+e.message);process.exitCode=1;}
