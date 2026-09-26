/* P5 sprites: PNG decode/encode uses only fs, zlib and vm. */
const fs=require('fs'),zlib=require('zlib'),vm=require('vm'),path=require('path'),assert=require('assert'),crypto=require('crypto');
const here=__dirname,root=path.resolve(here,'..','..','..','..'),ed=path.join(here,'edits'),out=path.join(root,'app','assets','scene'),pre=path.join(ed,'preview');fs.mkdirSync(out,{recursive:true});fs.mkdirSync(pre,{recursive:true});
function u(b,o){return b.readUInt32BE(o)}function crc(b){let c=~0;for(let v of b){c^=v;for(let k=0;k<8;k++)c=(c>>>1)^((c&1)?0xedb88320:0)}return(~c)>>>0}
function dec(b){assert(b.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])));let p=8,w,h,bd,ct,a=[];while(p<b.length){let n=u(b,p),t=b.toString('ascii',p+4,p+8),d=b.subarray(p+8,p+8+n);p+=n+12;if(t==='IHDR'){w=u(d,0);h=u(d,4);bd=d[8];ct=d[9];assert(!d[12])}if(t==='IDAT')a.push(d)}assert(bd===8&&(ct===2||ct===6));let ch=ct===6?4:3,r=zlib.inflateSync(Buffer.concat(a)),s=w*ch,d=Buffer.alloc(w*h*4),pr=Buffer.alloc(s),p0=0;for(let y=0;y<h;y++){let f=r[p0++],q=Buffer.from(r.subarray(p0,p0+s));p0+=s;for(let x=0;x<s;x++){let A=x>=ch?q[x-ch]:0,B=pr[x],C=x>=ch?pr[x-ch]:0;if(f===1)q[x]=(q[x]+A)&255;else if(f===2)q[x]=(q[x]+B)&255;else if(f===3)q[x]=(q[x]+((A+B)>>1))&255;else if(f===4){let v=A+B-C,aa=Math.abs(v-A),bb=Math.abs(v-B),cc=Math.abs(v-C);q[x]=(q[x]+(aa<=bb&&aa<=cc?A:bb<=cc?B:C))&255}else assert(f===0)}for(let x=0;x<w;x++){let i=(y*w+x)*4,j=x*ch;d[i]=q[j];d[i+1]=q[j+1];d[i+2]=q[j+2];d[i+3]=ch===4?q[j+3]:255}pr=q}return{w,h,d}}
function enc(m){let r=Buffer.alloc((m.w*4+1)*m.h),p=0;for(let y=0;y<m.h;y++){r[p++]=0;m.d.copy(r,p,y*m.w*4,(y+1)*m.w*4);p+=m.w*4}let C=(t,d)=>{let b=Buffer.alloc(d.length+12);b.writeUInt32BE(d.length);b.write(t,4);d.copy(b,8);b.writeUInt32BE(crc(b.subarray(4,d.length+8)),d.length+8);return b},i=Buffer.alloc(13);i.writeUInt32BE(m.w);i.writeUInt32BE(m.h,4);i[8]=8;i[9]=6;return Buffer.concat([Buffer.from([137,80,78,71,13,10,26,10]),C('IHDR',i),C('IDAT',zlib.deflateSync(r)),C('IEND',Buffer.alloc(0))])}
function load(f){return dec(fs.readFileSync(f))}function save(f,m){fs.writeFileSync(f,enc(m))}function P(m,x,y,c){return x<0||y<0||x>=m.w||y>=m.h?0:m.d[(y*m.w+x)*4+c]}
function over(m,x,y,r,g,b,a){if(x<0||y<0||x>=m.w||y>=m.h)return;let i=(y*m.w+x)*4,A=a/255,O=m.d[i+3]/255,N=A+O*(1-A);if(!N)return;m.d[i]=Math.round((r*A+m.d[i]*O*(1-A))/N);m.d[i+1]=Math.round((g*A+m.d[i+1]*O*(1-A))/N);m.d[i+2]=Math.round((b*A+m.d[i+2]*O*(1-A))/N);m.d[i+3]=Math.round(N*255)}

const ctx={};vm.createContext(ctx);vm.runInContext(fs.readFileSync(path.join(here,'scene-map-b.js'),'utf8'),ctx);const M=ctx.SCENE_MAP,master=load(path.join(here,'master-v2-b.png')),rows=[],bad=[];

// --- keyed objects: final alpha = min(source alpha, green-key alpha). Fixes both a
// #00b140 source (green-key alone is right) and an already-transparent source (source
// alpha is right, and must override the green-dominance formula's false-opaque reading
// of a black background). Despill runs on every pixel with alpha>0.
function greenAlpha(r,g,b){return Math.max(0,Math.min(255,Math.round((68-(g-Math.max(r,b)))*255/42)))}
function keyTrim(src,maskOpts){
  // maskOpts={file,dx,dy}: source has no usable alpha (opaque edit background) — borrow
  // the sibling's alpha instead of green-keying, shifted by the measured registration.
  let a=load(src),w=a.w,h=a.h,am=Buffer.alloc(w*h),x0=w,y0=h,x1=-1,y1=-1;
  let mask=maskOpts?load(path.join(ed,maskOpts.file)):null,dx=maskOpts?maskOpts.dx:0,dy=maskOpts?maskOpts.dy:0;
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){
    let i=(y*w+x)*4,r=a.d[i],g=a.d[i+1],b=a.d[i+2],sa=a.d[i+3],v;
    if(mask){let mx=x-dx,my=y-dy;v=(mx<0||my<0||mx>=mask.w||my>=mask.h)?0:mask.d[(my*mask.w+mx)*4+3]}
    else{v=Math.min(sa,greenAlpha(r,g,b));if(v>0)a.d[i+1]=Math.min(g,Math.max(r,b)+12)}
    am[y*w+x]=v;
    if(v>24){x0=Math.min(x0,x);y0=Math.min(y0,y);x1=Math.max(x1,x);y1=Math.max(y1,y)}
  }
  assert(x1>=x0,'empty key '+src);
  let tw=x1-x0+1,th=y1-y0+1,d=Buffer.alloc(tw*th*4);
  for(let y=0;y<th;y++)for(let x=0;x<tw;x++){
    let sx=x0+x,sy=y0+y,si=(sy*w+sx)*4,di=(y*tw+x)*4;
    d[di]=a.d[si];d[di+1]=a.d[si+1];d[di+2]=a.d[si+2];d[di+3]=am[sy*w+sx];
  }
  return{tw,th,d};
}
// area-average (box filter) downscale, colour premultiplied by alpha before averaging
// (avoids transparent-pixel colour bleeding into the edge), alpha averaged plain.
function boxDown(trim,nw,nh,scale){
  let d=Buffer.alloc(nw*nh*4);
  for(let y=0;y<nh;y++){
    let sy0=Math.floor(y/scale),sy1=Math.min(trim.th-1,Math.max(sy0,Math.ceil((y+1)/scale)-1));
    for(let x=0;x<nw;x++){
      let sx0=Math.floor(x/scale),sx1=Math.min(trim.tw-1,Math.max(sx0,Math.ceil((x+1)/scale)-1));
      let sumA=0,sumR=0,sumG=0,sumB=0,cnt=0;
      for(let sy=sy0;sy<=sy1;sy++)for(let sx=sx0;sx<=sx1;sx++){
        let j=(sy*trim.tw+sx)*4,a=trim.d[j+3];
        sumA+=a;sumR+=trim.d[j]*a;sumG+=trim.d[j+1]*a;sumB+=trim.d[j+2]*a;cnt++;
      }
      let k=(y*nw+x)*4;
      if(sumA>0){d[k]=Math.round(sumR/sumA);d[k+1]=Math.round(sumG/sumA);d[k+2]=Math.round(sumB/sumA)}
      d[k+3]=Math.round(sumA/cnt);
    }
  }
  return d;
}
// place a trimmed object into a box-sized canvas at a given scale (aspect kept), bottom-centred
function place(trim,B,scale){
  let w=B[2],h=B[3],nw=Math.round(trim.tw*scale),nh=Math.round(trim.th*scale);
  let ox=Math.round((w-nw)/2),oy=h-8-nh;
  let ob=Buffer.alloc(w*h),im={w,h,d:Buffer.alloc(w*h*4)};
  let sd=boxDown(trim,nw,nh,scale);
  for(let y=0;y<nh;y++)for(let x=0;x<nw;x++){
    let j=(y*nw+x)*4,k=(oy+y)*w+ox+x;
    ob[k]=sd[j+3];
    let q=k*4;
    im.d[q]=sd[j];im.d[q+1]=sd[j+1];im.d[q+2]=sd[j+2];im.d[q+3]=ob[k];
  }
  return{im,ob,nw,nh};
}
// contact shadow, cast away from the lamp, then re-paint the object crisp on top — unchanged method
function shadowComposite(im,ob,B){
  let w=B[2],h=B[3],cx=B[0]+w/2,cy=B[1]+h/2;
  let lx=M.lamp.box[0]+M.lamp.box[2]/2,ly=M.lamp.box[1]+M.lamp.box[3]/2;
  let L=Math.hypot(cx-lx,cy-ly)||1,dx=Math.round(4*(cx-lx)/L),dy=Math.round(4*(cy-ly)/L);
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){
    let v=0;
    for(let yy=Math.max(0,y-6-dy);yy<=Math.min(h-1,y+6-dy);yy++)
      for(let xx=Math.max(0,x-6-dx);xx<=Math.min(w-1,x+6-dx);xx++){
        let q=(xx-x+dx)**2+(yy-y+dy)**2;
        if(q<=36)v=Math.max(v,ob[yy*w+xx]*(1-q/36));
      }
    if(v)over(im,x,y,35,18,10,Math.round(v*.35));
  }
  for(let i=0;i<ob.length;i++)if(ob[i]){let q=i*4;over(im,i%w,Math.floor(i/w),im.d[q],im.d[q+1],im.d[q+2],ob[i])}
}
function verifyKey(n,z){
  let{im,ob}=z,w=im.w,h=im.h,x0=w,y0=h,x1=-1,y1=-1,N=0;
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){
    let i=y*w+x;
    if(ob[i]>20){N++;x0=Math.min(x0,x);y0=Math.min(y0,y);x1=Math.max(x1,x);y1=Math.max(y1,y)}
    let q=i*4;
    if(im.d[q+3])assert(!(im.d[q+1]>im.d[q]+24&&im.d[q+1]>im.d[q+2]+24),n+' green');
  }
  assert(x0>=8&&y0>=8&&x1<=w-9&&y1<=h-9,n+' margins');
  assert(N>=w*h*.08,n+' coverage');
  for(let i of[3,(w-1)*4,(h-1)*w*4,(w*h-1)*4])assert(!im.d[i],n+' corner');
  let bw=x1-x0+1,bh=y1-y0+1,area=bw*bh,ringSum=0,ringN=0,opaque=0;
  for(let y=y0;y<=y1;y++)for(let x=x0;x<=x1;x++){
    let a=im.d[(y*w+x)*4+3];
    if(a>200)opaque++;
    if(Math.min(x-x0,x1-x,y-y0,y1-y)<2){ringSum+=a;ringN++}
  }
  if(ringN)assert(ringSum/ringN<128,n+' ring-bg');
  assert(opaque/area<.85,n+' opaque-fraction');
}

// erosion: pixel stays true only if every neighbour within `rad` (Chebyshev square) is also
// true; a window that runs off the canvas counts as false (conservative, shrinks at edges).
function erode(mask,w,h,rad){
  let out=new Uint8Array(w*h);
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){
    if(!mask[y*w+x])continue;
    if(y-rad<0||y+rad>h-1||x-rad<0||x+rad>w-1)continue;
    let ok=true;
    for(let yy=y-rad;yy<=y+rad&&ok;yy++)for(let xx=x-rad;xx<=x+rad;xx++)if(!mask[yy*w+xx]){ok=false;break}
    if(ok)out[y*w+x]=1;
  }
  return out;
}
// box-average a 0/1 mask into nw x nh box space using the same source boxes as boxDown();
// >=50% coverage of the source box counts as true.
function boxDownMask(mask,tw,th,nw,nh,scale){
  let out=new Uint8Array(nw*nh);
  for(let y=0;y<nh;y++){
    let sy0=Math.floor(y/scale),sy1=Math.min(th-1,Math.max(sy0,Math.ceil((y+1)/scale)-1));
    for(let x=0;x<nw;x++){
      let sx0=Math.floor(x/scale),sx1=Math.min(tw-1,Math.max(sx0,Math.ceil((x+1)/scale)-1));
      let sum=0,cnt=0;
      for(let sy=sy0;sy<=sy1;sy++)for(let sx=sx0;sx<=sx1;sx++){sum+=mask[sy*tw+sx];cnt++}
      out[y*nw+x]=(sum/cnt)>=0.5?1:0;
    }
  }
  return out;
}
// tablet-half: raw wax hairline strokes vanish at scale ~0.104 under any downscale unless
// thickened first. Round-4 defect: the stroke/fill leaked onto the wooden frame (604 of 680
// diff px). Fix: build a wax mask from BLANK (object px, brightness<55), eroded inward by
// r+2 so the dilated fill (radius r) can never reach the frame; stroke detection (left half
// only) and the darkest-neighbour fill are both restricted to that eroded wax mask. Mutates
// halfTrim.d in place (RGB only, alpha untouched); blankTrim is read-only.
function thickenTabletHalf(halfTrim,blankTrim,scale){
  let tw=halfTrim.tw,th=halfTrim.th;
  assert(tw===blankTrim.tw&&th===blankTrim.th,'tablet trim size mismatch');
  let r=Math.max(1,Math.ceil(0.8/scale)),er=r+2;
  let waxRaw=new Uint8Array(tw*th);
  for(let y=0;y<th;y++)for(let x=0;x<tw;x++){
    let i=(y*tw+x)*4;
    if(blankTrim.d[i+3]<=24)continue;
    if((blankTrim.d[i]+blankTrim.d[i+1]+blankTrim.d[i+2])/3<55)waxRaw[y*tw+x]=1;
  }
  let wax=erode(waxRaw,tw,th,er);
  let stroke=new Uint8Array(tw*th),strokeN=0;
  for(let y=0;y<th;y++)for(let x=0;x<tw/2;x++){
    if(!wax[y*tw+x])continue;
    let i=(y*tw+x)*4;
    let dr=Math.abs(halfTrim.d[i]-blankTrim.d[i]),dg=Math.abs(halfTrim.d[i+1]-blankTrim.d[i+1]),db=Math.abs(halfTrim.d[i+2]-blankTrim.d[i+2]);
    if(Math.max(dr,dg,db)>25){stroke[y*tw+x]=1;strokeN++}
  }
  let dil=new Uint8Array(tw*th);
  for(let y=0;y<th;y++)for(let x=0;x<tw;x++){
    if(!stroke[y*tw+x])continue;
    for(let yy=Math.max(0,y-r);yy<=Math.min(th-1,y+r);yy++)
      for(let xx=Math.max(0,x-r);xx<=Math.min(tw-1,x+r);xx++)
        if(wax[yy*tw+xx])dil[yy*tw+xx]=1;
  }
  // fill: this wax reads as scored highlight strokes (half BRIGHTER than blank locally, not
  // darker), so a plain darkest-neighbour fill just erases them back toward blank. Instead
  // copy the strongest nearby stroke seed's own half colour (whichever direction it differs
  // from blank) — thickens the real signal without inventing a value, still wax-confined.
  let out=Buffer.from(halfTrim.d),dilN=0;
  for(let y=0;y<th;y++)for(let x=0;x<tw;x++){
    if(!dil[y*tw+x])continue;
    dilN++;
    let i0=(y*tw+x)*4,best=-1,br=halfTrim.d[i0],bg=halfTrim.d[i0+1],bb=halfTrim.d[i0+2];
    for(let yy=Math.max(0,y-r);yy<=Math.min(th-1,y+r);yy++)
      for(let xx=Math.max(0,x-r);xx<=Math.min(tw-1,x+r);xx++){
        if(!stroke[yy*tw+xx])continue;
        let j=(yy*tw+xx)*4;
        let strength=Math.max(Math.abs(halfTrim.d[j]-blankTrim.d[j]),Math.abs(halfTrim.d[j+1]-blankTrim.d[j+1]),Math.abs(halfTrim.d[j+2]-blankTrim.d[j+2]));
        if(strength>best){best=strength;br=halfTrim.d[j];bg=halfTrim.d[j+1];bb=halfTrim.d[j+2]}
      }
    let k=(y*tw+x)*4;out[k]=br;out[k+1]=bg;out[k+2]=bb;
  }
  halfTrim.d=out;
  return{r,er,strokeN,dilN,wax};
}

// letters-many-stack: 9 (or 8) copies of the already-keyed letters-1 object, stacked
// bottom-up in source space so the family's shared width comes out from a correctly-scaled
// glyph instead of raw art whose ink was drawn half-size in its own bbox.
function buildLettersManyStack(l1,availW,availH,otherWs){
  let tw=l1.tw,th=l1.th,ox2=Math.max(1,Math.round(0.02*tw)),canvasW=tw+2*ox2;
  function tryN(n){
    for(let t=1;t<=400;t++){
      let hStack=th+(n-1)*t;
      let Wstack=Math.min(availW,availH*tw/hStack);
      let W=Math.min(...otherWs,Wstack);
      let scale=W/tw;
      if(t*scale>=2)return{t,hStack,W,scale};
    }
    return null;
  }
  let n=9,res=tryN(9);
  if(!res){n=8;res=tryN(8)}
  assert(res,'no feasible t for letters-many-stack');
  let{t,hStack}=res,canvas={w:canvasW,h:hStack,d:Buffer.alloc(canvasW*hStack*4)};
  for(let i=0;i<n;i++){
    let below=n-1-i,mul=Math.max(0,1-0.06*below),signX=(i%2===0)?-1:1;
    let offX=Math.round((canvasW-tw)/2)+signX*ox2,offY=hStack-th-i*t;
    for(let y=0;y<th;y++)for(let x=0;x<tw;x++){
      let j=(y*tw+x)*4,a=l1.d[j+3];
      if(!a)continue;
      over(canvas,offX+x,offY+y,Math.round(l1.d[j]*mul),Math.round(l1.d[j+1]*mul),Math.round(l1.d[j+2]*mul),a);
    }
  }
  return{canvas,n,t,scale:res.scale};
}

let z0={w:M.slots.letters.box[2],h:M.slots.letters.box[3],d:Buffer.alloc(M.slots.letters.box[2]*M.slots.letters.box[3]*4)};save(path.join(out,'letters-0.png'),z0);preview('letters-0.png',M.slots.letters.box,z0);rows.push(['letters-0.png','transparent',M.slots.letters.box,'[0,0]','0.00','0.00','pass']);

// keyed families: within a family every member shares the box's target width W, the
// largest width at which every member (its own natural aspect) still fits the box minus
// an 8px margin on every side, height included.
// build obj-letters-many-stack.png (9 stacked copies of the keyed letters-1 object) before
// the family loop runs, so keyTrim can load it like any other edit file.
let LB=M.slots.letters.box,lettersAvailW=LB[2]-16,lettersAvailH=LB[3]-16;
let l1t=keyTrim(path.join(ed,'obj-letters-1.png')),lft=keyTrim(path.join(ed,'obj-letters-few.png'));
let W1=Math.min(lettersAvailW,lettersAvailH*l1t.tw/l1t.th),Wf=Math.min(lettersAvailW,lettersAvailH*lft.tw/lft.th);
let stackRes=buildLettersManyStack(l1t,lettersAvailW,lettersAvailH,[W1,Wf]);
save(path.join(ed,'obj-letters-many-stack.png'),stackRes.canvas);
let stackNote=`stack layers ${stackRes.n}, t=${stackRes.t}px, est scale ${stackRes.scale.toFixed(3)}`;

const FAMILIES=[
  {box:M.slots.letters.box,members:[['letters-1.png','obj-letters-1.png'],['letters-few.png','obj-letters-few.png'],['letters-many.png','obj-letters-many-stack.png']]},
  {box:M.slots.tablet.box,members:[['tablet-blank.png','obj-tablet-blank.png'],['tablet-half.png','obj-tablet-half.png',{file:'obj-tablet-blank.png',dx:0,dy:0}]]},
  {box:M.slots.pile.box,members:[['pile.png','obj-pile.png']]},
];
let savedIm={},tabletFix=null,tabletGeom=null;
for(let fam of FAMILIES){
  let B=fam.box,availW=B[2]-16,availH=B[3]-16,ok=[];
  for(let[n,s,maskOpts]of fam.members){
    try{ok.push([n,s,keyTrim(path.join(ed,s),maskOpts)])}
    catch(e){bad.push(n+': '+e.message);rows.push([n,s,B,'—','—','—','fail'])}
  }
  if(!ok.length)continue;
  let W=Math.min(...ok.map(([,,t])=>Math.min(availW,availH*t.tw/t.th)));
  let halfEntry=ok.find(([n])=>n==='tablet-half.png'),blankEntry=ok.find(([n])=>n==='tablet-blank.png');
  if(halfEntry&&blankEntry){
    let scale=W/halfEntry[2].tw;
    tabletFix=thickenTabletHalf(halfEntry[2],blankEntry[2],scale);
    tabletGeom={scale,tw:halfEntry[2].tw,th:halfEntry[2].th,B};
  }
  for(let[n,s,trim]of ok){
    try{
      let scale=W/trim.tw,{im,ob,nw}=place(trim,B,scale);
      shadowComposite(im,ob,B);
      verifyKey(n,{im,ob});
      save(path.join(out,n),im);preview(n,B,im);
      savedIm[n]=im;
      rows.push([n,s,B,'scale '+scale.toFixed(3),'—','—','pass']);
    }catch(e){bad.push(n+': '+e.message);rows.push([n,s,B,'—','—','—','fail'])}
  }
}
function preview(n,B,s){let X=Math.max(0,B[0]-40),Y=Math.max(0,B[1]-40),R=Math.min(master.w,B[0]+B[2]+40),D=Math.min(master.h,B[1]+B[3]+40),m={w:R-X,h:D-Y,d:Buffer.alloc((R-X)*(D-Y)*4)};for(let y=0;y<m.h;y++)for(let x=0;x<m.w;x++){let i=(y*m.w+x)*4,j=((Y+y)*master.w+X+x)*4;master.d.copy(m.d,i,j,j+4)}for(let y=0;y<s.h;y++)for(let x=0;x<s.w;x++){let i=(y*s.w+x)*4;if(s.d[i+3])over(m,B[0]-X+x,B[1]-Y+y,s.d[i],s.d[i+1],s.d[i+2],s.d[i+3])}save(path.join(pre,n),m)}

function ring(e,B,dx,dy){let S=0,N=0,books=Object.values(M.books).map(q=>q.box);for(let y=B[1]-16;y<B[1]+B[3]+16;y++)for(let x=B[0]-16;x<B[0]+B[2]+16;x++){if(x>=B[0]&&x<B[0]+B[2]&&y>=B[1]&&y<B[1]+B[3])continue;if(books.some(q=>q!==B&&x>=q[0]&&x<q[0]+q[2]&&y>=q[1]&&y<q[1]+q[3]))continue;for(let c=0;c<3;c++){S+=Math.abs(P(e,x+dx,y+dy,c)-P(master,x,y,c));N++}}return S/N}function cut(e,B,s){let d=Buffer.alloc(B[2]*B[3]*4),S=0,N=0;for(let y=0;y<B[3];y++)for(let x=0;x<B[2];x++){let i=(y*B[2]+x)*4,q=Math.min(x,y,B[2]-1-x,B[3]-1-y),a=Math.min(255,Math.round(q*255/8));for(let c=0;c<3;c++){let v=P(e,B[0]+x+s.dx,B[1]+y+s.dy,c);d[i+c]=v;if(q<8){S+=Math.abs(v-P(master,B[0]+x,B[1]+y,c));N++}}d[i+3]=a}return{im:{w:B[2],h:B[3],d},seam:S/N}}
for(let[n,k]of[['gilt-terracotta.png','terracotta'],['gilt-sage.png','sage'],['gilt-violet.png','violet'],['gilt-blue.png','blue']]){let B=M.books[k].box,e=load(path.join(ed,'edit-4.png')),s={v:Infinity,dx:0,dy:0};for(let dy=-8;dy<=8;dy++)for(let dx=-8;dx<=8;dx++){let v=ring(e,B,dx,dy);if(v<s.v)s={v,dx,dy}}let q=cut(e,B,s),ok=q.seam<=10&&s.v<=12;save(path.join(out,n),q.im);preview(n,B,q.im);rows.push([n,'edit-4.png',B,`[${s.dx},${s.dy}]`,q.seam.toFixed(2),s.v.toFixed(2),ok?'pass':'fail']);if(!ok)bad.push(n)}

// ribbon: keyed, trimmed, no margin, no shadow, scaled (aspect kept) to fit 48x300, centred.
function verifyRibbon(im){
  let w=im.w,h=im.h,x0=w,y0=h,x1=-1,y1=-1;
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){
    let i=(y*w+x)*4,a=im.d[i+3];
    if(a>20){x0=Math.min(x0,x);y0=Math.min(y0,y);x1=Math.max(x1,x);y1=Math.max(y1,y)}
    if(a)assert(!(im.d[i+1]>im.d[i]+24&&im.d[i+1]>im.d[i+2]+24),'ribbon.png green');
  }
  for(let i of[3,(w-1)*4,(h-1)*w*4,(w*h-1)*4])assert(!im.d[i],'ribbon.png corner');
  assert(x1>=x0,'ribbon.png empty');
  assert(x1-x0+1>=44||y1-y0+1>=296,'ribbon.png span');
}
try{
  let trim=keyTrim(path.join(ed,'ribbon-raw.png')),W=48,H=300;
  let scale=Math.min(W/trim.tw,H/trim.th),nw=Math.round(trim.tw*scale),nh=Math.round(trim.th*scale);
  let ox=Math.round((W-nw)/2),oy=Math.round((H-nh)/2),rim={w:W,h:H,d:Buffer.alloc(W*H*4)};
  let sd=boxDown(trim,nw,nh,scale);
  for(let y=0;y<nh;y++)for(let x=0;x<nw;x++){
    let j=(y*nw+x)*4,k=((oy+y)*W+ox+x)*4;
    rim.d[k]=sd[j];rim.d[k+1]=sd[j+1];rim.d[k+2]=sd[j+2];rim.d[k+3]=sd[j+3];
  }
  // despill: ribbon had an olive green-spill fringe at row 0; clamp tighter than the
  // general keyed-object despill (+12) since this fringe survived that.
  for(let i=0;i<rim.d.length;i+=4)if(rim.d[i+3]>0)rim.d[i+1]=Math.min(rim.d[i+1],Math.max(rim.d[i],rim.d[i+2])+4);
  verifyRibbon(rim);
  save(path.join(out,'ribbon.png'),rim);
  savedIm['ribbon.png']=rim;
  let card={w:128,h:380,d:Buffer.alloc(128*380*4)};for(let i=0;i<card.d.length;i+=4)card.d[i]=card.d[i+1]=card.d[i+2]=150,card.d[i+3]=255;for(let y=0;y<H;y++)for(let x=0;x<W;x++){let i=(y*W+x)*4;if(rim.d[i+3])over(card,x+40,y+40,rim.d[i],rim.d[i+1],rim.d[i+2],rim.d[i+3])}save(path.join(pre,'ribbon.png'),card);
  rows.push(['ribbon.png','ribbon-raw.png','48×300','scale '+scale.toFixed(3),'—','—','pass']);
}catch(e){bad.push('ribbon.png: '+e.message);rows.push(['ribbon.png','ribbon-raw.png','48×300','—','—','—','fail'])}

// --- extra self-checks (round-3 refuter fixes) ---
let extra={};
{ // tablet-half vs tablet-blank, box px, split by the eroded wax mask (box-scaled): frame
  // (object px outside wax) must stay near-untouched, wax-left must show the strokes,
  // wax-right must stay near-untouched.
  let blank=savedIm['tablet-blank.png'],half=savedIm['tablet-half.png'];
  if(blank&&half&&tabletGeom&&tabletFix){
    let{scale,tw,th,B}=tabletGeom,w=B[2],h=B[3];
    let nw=Math.round(tw*scale),nh=Math.round(th*scale);
    let ox=Math.round((w-nw)/2),oy=h-8-nh;
    let waxBox=boxDownMask(tabletFix.wax,tw,th,nw,nh,scale);
    let frameN=0,waxLeftN=0,waxRightN=0;
    for(let y=0;y<nh;y++)for(let x=0;x<nw;x++){
      let bx=ox+x,by=oy+y,i=(by*w+bx)*4;
      if(blank.d[i+3]<=20)continue;
      let dr=Math.abs(half.d[i]-blank.d[i]),dg=Math.abs(half.d[i+1]-blank.d[i+1]),db=Math.abs(half.d[i+2]-blank.d[i+2]);
      if(Math.max(dr,dg,db)<=25)continue;
      if(!waxBox[y*nw+x])frameN++;
      else if(bx<w/2)waxLeftN++;else waxRightN++;
    }
    extra.tabletDiff={frameN,waxLeftN,waxRightN};
    if(!(frameN<=10&&waxLeftN>=60&&waxRightN<=10))bad.push('tablet-half check: frame='+frameN+' waxLeft='+waxLeftN+' waxRight='+waxRightN);
  }else bad.push('tablet-half/blank/geom missing for stroke check');
}
{ // no keyed sprite or the ribbon may carry green > max(R,B)+12 at any alpha>0 pixel
  let worst=0;
  for(let n of Object.keys(savedIm)){
    let im=savedIm[n];
    for(let i=0;i<im.w*im.h;i++){
      let q=i*4;
      if(im.d[q+3]>0){let over_=im.d[q+1]-Math.max(im.d[q],im.d[q+2]);if(over_>worst)worst=over_;if(over_>12){bad.push(n+': green-spill '+over_+' over +12');break}}
    }
  }
  extra.maxGreenOver12=worst;
}
{ // letters family envelope widths (a>89, shadow excluded) must match within 6 box px
  let widths={};
  for(let n of['letters-1.png','letters-few.png','letters-many.png']){
    let im=savedIm[n];
    if(!im){bad.push(n+' missing for envelope check');continue}
    let w=im.w,h=im.h,x0=w,x1=-1;
    for(let y=0;y<h;y++)for(let x=0;x<w;x++)if(im.d[(y*w+x)*4+3]>89){if(x<x0)x0=x;if(x>x1)x1=x}
    widths[n]=x1>=x0?x1-x0+1:0;
  }
  extra.lettersWidths=widths;
  let vals=Object.values(widths);
  if(vals.length===3&&Math.max(...vals)-Math.min(...vals)>6)bad.push('letters envelope mismatch: '+JSON.stringify(widths));
}
{ // letters-0 and the four gilt-* outputs must be byte-identical to the pre-edit baseline
  let baseline={'letters-0.png':'ecf29d30','gilt-terracotta.png':'29758e6f','gilt-sage.png':'4e462600','gilt-violet.png':'6a609c0a','gilt-blue.png':'4cafa0cd'};
  extra.unchangedSha1={};
  for(let n of Object.keys(baseline)){
    let h=crypto.createHash('sha1').update(fs.readFileSync(path.join(out,n))).digest('hex');
    extra.unchangedSha1[n]=h;
    if(!h.startsWith(baseline[n]))bad.push(n+' sha1 changed: '+h);
  }
}
extra.stackBuild=stackNote;extra.tabletThicken=tabletFix;
console.log('extra checks:',JSON.stringify(extra));

let want=['letters-0.png','letters-1.png','letters-few.png','letters-many.png','tablet-blank.png','tablet-half.png','pile.png','gilt-terracotta.png','gilt-sage.png','gilt-violet.png','gilt-blue.png','ribbon.png'];for(let n of want){let m=load(path.join(out,n));if(n==='ribbon.png')assert(m.w===48&&m.h===300);else{let r=rows.find(v=>v[0]===n),B=r[2];assert(m.w===B[2]&&m.h===B[3],n+' size')}}console.table(rows.map(r=>({sprite:r[0],source:r[1],shiftScale:r[3],seam:r[4],drift:r[5],pass:r[6]})));if(bad.length)throw Error(bad.join('; '));console.log('12 passed');globalThis.rows=rows;globalThis.extra=extra;globalThis.stackNote=stackNote;
