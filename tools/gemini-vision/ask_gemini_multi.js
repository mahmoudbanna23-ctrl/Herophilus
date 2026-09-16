const fs = require('fs');
const https = require('https');

const args = process.argv.slice(2);
const promptText = args.pop();
const imgPaths = args;

const parts = [{ text: promptText }];
for (const p of imgPaths) {
  parts.push({ inline_data: { mime_type: 'image/png', data: fs.readFileSync(p).toString('base64') } });
}
const body = JSON.stringify({ contents: [{ parts }] });

const req = https.request({
  hostname: 'generativelanguage.googleapis.com',
  path: '/v1beta/models/gemini-3.6-flash:generateContent',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-goog-api-key': process.env.GEMINI_API_KEY,
    'Content-Length': Buffer.byteLength(body)
  }
}, res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    try {
      const j = JSON.parse(data);
      console.log(j.candidates?.[0]?.content?.parts?.map(p => p.text).join('\n') || JSON.stringify(j));
    } catch (e) {
      console.log(data);
    }
  });
});
req.write(body);
req.end();
