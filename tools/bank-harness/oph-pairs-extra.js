const fs=require('fs');
const D='D:/claude os/Medical school/Herophilus/content/ophtho/qb-pages/_close-work/';
const J=JSON.parse(fs.readFileSync(D+'pairs.json','utf8'));
const have=new Set(J.pairs.map(p=>p.ep+'|'+p.house));
const txt="n1 opmcq-c1-56, n2 opmcq-c16-21, n5 opmcq-c1-55, n7 opmcq-c18-27, n8 opmcq-c17-1 / opqb-t19-790, n9 opmcq-c1-54, n10 opmcq-c4-3, n12 opqb-t4-154, n14 opmcq-c3-27, n17 opmcq-c18-26, n19 opmcq-c5-32, n24 opmcq-c10-26, n25 opmcq-c10-1, n27 opmcq-c1-8, n32 opmcq-c2-32, n34 opmcq-c9-28, n35 opmcq-c1-9, n36 opmcq-c4-18, n38 opmcq-c1-7 / opqb-t14-588, n39 opmcq-c1-6, n40 opmcq-c14-2, n41 opmcq-c14-29, n42 opmcq-c14-28, n44 opmcq-c5-2, n45 opmcq-c8-27, n46 opmcq-c8-26b, n47 opmcq-c19-14, n52 opqb-t11-460, n56 opmcq-c19-35, n58 opmcq-c13-2, n60 opmcq-c19-34, n62 opmcq-c19-1, n65 opmcq-c16-1, n67 opmcq-c13-1, n15 opmcq-c12-9, n16 opmcq-c19-42, n18 opmcq-c4-29, n22 opmcq-c11-26, n26 opqb-t10-427, n28 opmcq-c4-1, n13 opqb-t22-11";
const out=[];
for(const m of txt.matchAll(/n(\d+) ([\w-]+(?: \/ [\w-]+)*)/g)){for(const h of m[2].split(' / ')){const ep='ophep2-summer-exam-'+m[1];const k=ep+'|'+h;if(!have.has(k)){out.push({ep,house:h,seed:true,extra:true});have.add(k)}}}
fs.writeFileSync(D+'pairs-extra.json',JSON.stringify({pairs:out},null,1));
console.log(out.length, out.map(x=>x.ep.slice(-7)+'>'+x.house).join(' '));
