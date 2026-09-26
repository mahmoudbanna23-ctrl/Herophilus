/* Node-only placeholder GLB generator and validator. Run: node make-glb.js */
const fs=require('fs'),z=require('zlib');const chunks=[];let off=0;
function put(a){let p=(4-off%4)%4;if(p){chunks.push(Buffer.alloc(p));off+=p}let o=off,b=Buffer.from(a);chunks.push(b);off+=b.length;return[o,b.length]}
function png(){const raw=Buffer.alloc(512*2049);for(let y=0;y<512;y++){let k=y*2049;raw[k++]=0;for(let x=0;x<512;x++){raw[k++]=205;raw[k++]=132;raw[k++]=55;raw[k++]=255}}let crc=b=>{let n=~0;for(const q of b){n^=q;for(let i=0;i<8;i++)n=n>>>1^(n&1?0xedb88320:0)}return(~n)>>>0},C=(t,d)=>{let b=Buffer.alloc(12+d.length);b.writeUInt32BE(d.length);b.write(t,4);d.copy(b,8);b.writeUInt32BE(crc(b.subarray(4,8+d.length)),8+d.length);return b};return Buffer.concat([Buffer.from([137,80,78,71,13,10,26,10]),C('IHDR',Buffer.from([0,0,2,0,0,0,2,0,8,6,0,0,0])),C('IDAT',z.deflateSync(raw)),C('IEND',Buffer.alloc(0))])}
const N=768,pos=[],uv=[],joint=[],weight=[],idx=[];for(let i=0;i<=N;i++){let a=i/N*Math.PI*2,x=Math.cos(a)*.58,y=Math.sin(a)*.78;for(const yy of[-1.15,.55]){pos.push(x,yy,y);uv.push(i/N,yy<0?0:1);joint.push(1,0,0,0);weight.push(1,0,0,0)}}for(let i=0;i<N;i++){let a=i*2;idx.push(a,a+2,a+1,a+2,a+3,a+1)}let hs=pos.length/3;pos.push(0,.94,0);uv.push(.5,.5);joint.push(2,0,0,0);weight.push(1,0,0,0);for(let i=0;i<=N;i++){let a=i/N*Math.PI*2;pos.push(Math.cos(a)*.42,1.38,Math.sin(a)*.42);uv.push((Math.cos(a)+1)/2,(Math.sin(a)+1)/2);joint.push(2,0,0,0);weight.push(1,0,0,0)}for(let i=0;i<N;i++)idx.push(hs,hs+1+i,hs+2+i);
let views=[],accessors=[];const size={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT4:16};function f32(a){return Buffer.from(new Float32Array(a).buffer)}function u16(a){return Buffer.from(new Uint16Array(a).buffer)}function acc(a,type,component,min,max){let b=put(a),n=a.length/(component===5123?2:4)/size[type];views.push({buffer:0,byteOffset:b[0],byteLength:b[1]});let x={bufferView:views.length-1,componentType:component,count:n,type};if(min)x.min=min;if(max)x.max=max;accessors.push(x);return accessors.length-1}
let P=acc(f32(pos),'VEC3',5126,[-.58,-1.15,-.78],[.58,1.38,.78]),T=acc(f32(uv),'VEC2',5126),J=acc(u16(joint),'VEC4',5123),W=acc(f32(weight),'VEC4',5126),I=acc(u16(idx),'SCALAR',5123);

/* ---- generic mat4/TRS math: every matrix below is DERIVED, never hand-typed ---- */
function composeTRS(t,r,s){
  const x=r[0],y=r[1],z=r[2],w=r[3],x2=x+x,y2=y+y,z2=z+z,
        xx=x*x2,xy=x*y2,xz=x*z2,yy=y*y2,yz=y*z2,zz=z*z2,wx=w*x2,wy=w*y2,wz=w*z2,
        sx=s[0],sy=s[1],sz=s[2];
  return[(1-(yy+zz))*sx,(xy+wz)*sx,(xz-wy)*sx,0, (xy-wz)*sy,(1-(xx+zz))*sy,(yz+wx)*sy,0,
         (xz+wy)*sz,(yz-wx)*sz,(1-(xx+yy))*sz,0, t[0],t[1],t[2],1];
}
function matMul(a,b){const out=new Array(16);for(let c=0;c<4;c++)for(let r=0;r<4;r++){let s=0;for(let k=0;k<4;k++)s+=a[k*4+r]*b[c*4+k];out[c*4+r]=s}return out}
function matInvert(m){
  const a00=m[0],a01=m[1],a02=m[2],a03=m[3],a10=m[4],a11=m[5],a12=m[6],a13=m[7],
        a20=m[8],a21=m[9],a22=m[10],a23=m[11],a30=m[12],a31=m[13],a32=m[14],a33=m[15],
        b00=a00*a11-a01*a10,b01=a00*a12-a02*a10,b02=a00*a13-a03*a10,b03=a01*a12-a02*a11,
        b04=a01*a13-a03*a11,b05=a02*a13-a03*a12,b06=a20*a31-a21*a30,b07=a20*a32-a22*a30,
        b08=a20*a33-a23*a30,b09=a21*a32-a22*a31,b10=a21*a33-a23*a31,b11=a22*a33-a23*a32;
  let det=b00*b11-b01*b10+b02*b09+b03*b08-b04*b07+b05*b06;
  if(!det)throw Error('singular matrix');
  det=1/det;
  return[(a11*b11-a12*b10+a13*b09)*det,(a02*b10-a01*b11-a03*b09)*det,(a31*b05-a32*b04+a33*b03)*det,(a22*b04-a21*b05-a23*b03)*det,
         (a12*b08-a10*b11-a13*b07)*det,(a00*b11-a02*b08+a03*b07)*det,(a32*b02-a30*b05-a33*b01)*det,(a20*b05-a22*b02+a23*b01)*det,
         (a10*b10-a11*b08+a13*b06)*det,(a01*b08-a00*b10-a03*b06)*det,(a30*b04-a31*b02+a33*b00)*det,(a21*b02-a20*b04-a23*b00)*det,
         (a11*b07-a10*b09-a12*b06)*det,(a00*b09-a01*b07+a02*b06)*det,(a31*b01-a30*b03-a32*b00)*det,(a20*b03-a21*b01+a22*b00)*det];
}
const IDENTITY16=[1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1];

/* Node tree: 0 root -> 1 sway -> 2 head; 3 guide holds the skinned mesh. Rest TRS is identity for
   every node (no node has a rest offset), so world/bind matrices below are computed, not assumed. */
const nodeDefs=[
  {name:'root',children:[1],t:[0,0,0],r:[0,0,0,1],s:[1,1,1]},
  {name:'sway',children:[2],t:[0,0,0],r:[0,0,0,1],s:[1,1,1]},
  {name:'head',t:[0,0,0],r:[0,0,0,1],s:[1,1,1]},
  {name:'guide',mesh:0,skin:0,t:[0,0,0],r:[0,0,0,1],s:[1,1,1]}
];
const parentOf={};nodeDefs.forEach((nd,ni)=>{(nd.children||[]).forEach(c=>parentOf[c]=ni)});
const worldCache=[];
function worldOf(ni){if(worldCache[ni])return worldCache[ni];const p=parentOf[ni];const pw=p==null?IDENTITY16:worldOf(p);return worldCache[ni]=matMul(pw,composeTRS(nodeDefs[ni].t,nodeDefs[ni].r,nodeDefs[ni].s))}
nodeDefs.forEach((_,ni)=>worldOf(ni));

const jointNodeIds=[0,1,2];
const invBindFlat=[];jointNodeIds.forEach(ni=>invBindFlat.push(...matInvert(worldOf(ni))));
let inv=acc(f32(invBindFlat),'MAT4',5126);

function anim(name,tracks){
  let ti=acc(f32([0,1.2]),'SCALAR',5126,[0],[1.2]),samplers=[],channels=[];
  tracks.forEach(tr=>{
    let tAcc=acc(f32(tr.tx),'VEC3',5126);samplers.push({input:ti,output:tAcc,interpolation:'LINEAR'});
    channels.push({sampler:samplers.length-1,target:{node:tr.node,path:'translation'}});
    let rAcc=acc(f32(tr.rot),'VEC4',5126);samplers.push({input:ti,output:rAcc,interpolation:'LINEAR'});
    channels.push({sampler:samplers.length-1,target:{node:tr.node,path:'rotation'}});
  });
  return{name,samplers,channels};
}
/* idle: sway(1) is the primary track (same magnitude as the old single-channel idle) so the body
   itself moves; a small secondary track on head(2) keeps the cap following along.
   wave: head(2) stays primary (same magnitude as the old single-channel wave, cap raises/turns);
   a small secondary track on sway(1) makes the body join in. Every clip now animates BOTH joints
   that carry mesh weight, so each clip moves the whole figure (not just one part). */
let g={
  asset:{version:'2.0',generator:'Herophilus spike'},
  buffers:[{}],
  bufferViews:views,
  accessors,
  images:[],
  textures:[{source:0}],
  materials:[{pbrMetallicRoughness:{baseColorTexture:{index:0},metallicFactor:0,roughnessFactor:.8}}],
  meshes:[{primitives:[{attributes:{POSITION:P,TEXCOORD_0:T,JOINTS_0:J,WEIGHTS_0:W},indices:I,material:0}]}],
  nodes:[{name:'root',children:[1]},{name:'sway',children:[2]},{name:'head'},{name:'guide',mesh:0,skin:0}],
  skins:[{joints:jointNodeIds,inverseBindMatrices:inv,skeleton:0}],
  scenes:[{nodes:[0,3]}],
  scene:0,
  animations:[
    anim('idle',[{node:1,tx:[0,0,0, .1,0,0],rot:[0,0,0,1, 0,.04,0,.9992]},{node:2,tx:[0,0,0, 0,.02,0],rot:[0,0,0,1, 0,.015,0,.9999]}]),
    anim('wave',[{node:2,tx:[0,0,0, .35,.15,0],rot:[0,0,0,1, 0,.28,0,.96]},{node:1,tx:[0,0,0, 0,.05,0],rot:[0,0,0,1, 0,.05,0,.9987]}])
  ]
};
let image=png(),im=put(image);views.push({buffer:0,byteOffset:im[0],byteLength:im[1]});
g.images=[{bufferView:views.length-1,mimeType:'image/png'}];
g.buffers[0].byteLength=off;
let json=Buffer.from(JSON.stringify(g)),pad=(4-json.length%4)%4;json=Buffer.concat([json,Buffer.alloc(pad,32)]);let bin=Buffer.concat(chunks);pad=(4-bin.length%4)%4;bin=Buffer.concat([bin,Buffer.alloc(pad)]);let out=Buffer.alloc(12),total=12+8+json.length+8+bin.length;out.writeUInt32LE(0x46546c67,0);out.writeUInt32LE(2,4);out.writeUInt32LE(total,8);let h1=Buffer.alloc(8),h2=Buffer.alloc(8);h1.writeUInt32LE(json.length,0);h1.writeUInt32LE(0x4e4f534a,4);h2.writeUInt32LE(bin.length,0);h2.writeUInt32LE(0x004e4942,4);out=Buffer.concat([out,h1,json,h2,bin]);fs.writeFileSync('model.glb',out);fs.writeFileSync('model.b64.js','var SPIKE_GLB="data:model/gltf-binary;base64,'+out.toString('base64')+'";');

function check(){
  let b=fs.readFileSync('model.glb'),n=0,yes=(x,s)=>{if(!x)throw Error(s);n++},d=new DataView(b.buffer,b.byteOffset,b.length);
  yes(d.getUint32(0,true)===0x46546c67,'magic');yes(d.getUint32(4,true)===2,'version');yes(d.getUint32(8,true)===b.length,'length');
  let p=12,j,binLen,binOff;
  while(p<b.length){let l=d.getUint32(p,true),t=d.getUint32(p+4,true);yes(l%4===0&&p+8+l<=b.length,'chunk');if(t===0x4e4f534a)j=JSON.parse(b.subarray(p+8,p+8+l).toString());if(t===0x004e4942){binLen=l;binOff=p+8}p+=8+l}
  yes(p===b.length&&j&&binLen!=null,'chunks');
  for(const v of j.bufferViews)yes((v.byteOffset||0)+v.byteLength<=binLen,'view');
  for(const a of j.accessors){yes(a.count!=null,'count');let v=j.bufferViews[a.bufferView],w=size[a.type]*(a.componentType===5123?2:4);yes((a.byteOffset||0)+a.count*w<=v.byteLength,'accessor')}
  let pp=j.accessors[j.meshes[0].primitives[0].attributes.POSITION];yes(pp.min&&pp.max,'position bounds');
  for(const a of j.animations)for(const s of a.samplers)yes(j.accessors[s.input].min&&j.accessors[s.input].max,'time bounds');
  let sk=j.skins[0];yes(sk.joints.length===3,'skin joint count');
  let parentOf2={};j.nodes.forEach((nd,ni)=>{(nd.children||[]).forEach(c=>parentOf2[c]=ni)});
  let isDesc=(nn,root)=>{let cur=nn;while(cur!=null){if(cur===root)return true;cur=parentOf2[cur]}return false};
  yes(sk.joints.every(jn=>isDesc(jn,sk.skeleton)),'joints descend from skeleton');
  let jAttr=j.meshes[0].primitives[0].attributes.JOINTS_0,jAcc=j.accessors[jAttr],jbv=j.bufferViews[jAcc.bufferView],jStart=binOff+(jbv.byteOffset||0)+(jAcc.byteOffset||0),jMax=0;
  for(let i=0;i<jAcc.count*4;i++)jMax=Math.max(jMax,d.getUint16(jStart+i*2,true));
  yes(jMax<sk.joints.length,'JOINTS_0 in range');
  yes(j.animations.some(x=>x.name==='idle')&&j.animations.some(x=>x.name==='wave'),'clips');
  yes(Buffer.from(fs.readFileSync('model.b64.js','utf8').match(/base64,([^\"]+)/)[1],'base64').equals(b),'b64');

  /* -- new asserts (round 5): would have caught the round-4 regression -- */
  function readFloats(ai){let a=j.accessors[ai],v=j.bufferViews[a.bufferView],cn=size[a.type],start=binOff+(v.byteOffset||0)+(a.byteOffset||0),out=new Array(a.count*cn);for(let i=0;i<out.length;i++)out[i]=d.getFloat32(start+i*4,true);return out}
  function worldOf2(ni,cache){if(cache[ni])return cache[ni];let nd=j.nodes[ni],t=nd.translation||[0,0,0],r=nd.rotation||[0,0,0,1],s=nd.scale||[1,1,1],p=parentOf2[ni],pw=p==null?IDENTITY16:worldOf2(p,cache);return cache[ni]=matMul(pw,composeTRS(t,r,s))}
  let wcache={};j.nodes.forEach((_,ni)=>worldOf2(ni,wcache));
  let ibmFlat=readFloats(sk.inverseBindMatrices);
  // (a) IBM[j] x restWorld(joints[j]) ~= identity
  sk.joints.forEach((nodeId,ji)=>{
    let ibm=ibmFlat.slice(ji*16,ji*16+16),w=wcache[nodeId],prod=matMul(ibm,w),ok=prod.every((v,i)=>Math.abs(v-IDENTITY16[i])<1e-5);
    yes(ok,'IBM x restWorld ~= identity for joint node '+nodeId);
  });
  // (b) every animation channel targets a node that is one of the skin's joints
  for(const a of j.animations)for(const ch of a.channels)yes(sk.joints.includes(ch.target.node),'channel target is a joint: '+a.name+' -> node '+ch.target.node);
  // (c) each clip moves >= half of all weighted vertices (sum of weights on animated joints)
  let jointIdxOfNode={};sk.joints.forEach((nid,ji)=>jointIdxOfNode[nid]=ji);
  let total=jAcc.count,perVertexFirstJoint=new Array(total);
  for(let vi=0;vi<total;vi++)perVertexFirstJoint[vi]=d.getUint16(jStart+(vi*4)*2,true);
  for(const a of j.animations){
    let animatedNodeIds=new Set(a.channels.map(ch=>ch.target.node));
    let animatedJointIdx=new Set([...animatedNodeIds].map(nid=>jointIdxOfNode[nid]));
    let moved=0;for(let vi=0;vi<total;vi++)if(animatedJointIdx.has(perVertexFirstJoint[vi]))moved++;
    yes(moved/total>=0.5,'clip '+a.name+' moves >= half of weighted vertices ('+moved+'/'+total+')');
  }
  console.log(n+' passed');
}
check();console.log(out.length+' bytes, '+(idx.length/3)+' triangles');
