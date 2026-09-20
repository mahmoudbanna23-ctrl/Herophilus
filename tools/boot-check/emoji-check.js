/* Fails if any pictograph can reach the screen. Comments are blanked before the scan, so a
   warning sign in a code comment passes and no line-numbered allow-list is needed.
   ponytail: the `//` rule also blanks the tail of a line holding "https://" inside a string;
   an emoji after a URL on that same line would be missed. Upgrade: a real tokenizer. */
const fs=require('fs');
const path=require('path');
const root=path.resolve(__dirname,'..','..');
const targets=[
  path.join(root,'app','index.html'),
  ...['js','css'].flatMap(dir=>fs.readdirSync(path.join(root,'app',dir))
    .filter(name=>name.endsWith(dir==='js'?'.js':'.css'))
    .map(name=>path.join(root,'app',dir,name)))
];
const skip=new Set(['0','1','2','3','4','5','6','7','8','9','#','*','©','®','™']);
const blank=s=>s.replace(/[^\n]/g,' ');
let found=0;
for(const file of targets){
  const css=file.endsWith('.css');
  const text=fs.readFileSync(file,'utf8')
    .replace(/\/\*[\s\S]*?\*\/|<!--[\s\S]*?-->/g,blank)
    .replace(css?/$^/:/\/\/[^\n]*/g,blank);
  for(const match of text.matchAll(/\p{Extended_Pictographic}/gu)){
    const char=match[0];
    if(skip.has(char))continue;
    const line=text.slice(0,match.index).split('\n').length;
    const rel=path.relative(root,file).replace(/\\/g,'/');
    const code=`U+${char.codePointAt(0).toString(16).toUpperCase().padStart(4,'0')}`;
    console.log(`${rel}:${line}  ${char}  ${code}`);
    found++;
  }
}
console.log(found?`${found} pictograph(s) outside comments`:'emoji-check: clean');
process.exitCode=found?1:0;
