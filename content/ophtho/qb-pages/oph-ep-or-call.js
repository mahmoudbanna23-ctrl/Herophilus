// Call the local OmniRoute gateway. Usage: node or-call.js <model> <promptFile> <outFile>
// The key is read from the environment and never printed or written anywhere.
const fs = require('fs');
const http = require('http');

const model = process.argv[2];
const promptFile = process.argv[3];
const outFile = process.argv[4];
const key = process.env.OMNIROUTE_API_KEY;

if (!key) { console.error('OMNIROUTE_API_KEY not set in this shell'); process.exit(2); }

const prompt = fs.readFileSync(promptFile, 'utf8');

const body = JSON.stringify({
  model,
  max_tokens: 32000,
  messages: [{ role: 'user', content: prompt }]
});

const req = http.request({
  host: 'localhost',
  port: 20128,
  path: '/v1/chat/completions',
  method: 'POST',
  timeout: 300000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + key,
    'Content-Length': Buffer.byteLength(body)
  }
}, res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    console.log('HTTP ' + res.statusCode);
    let text = '';
    try {
      const j = JSON.parse(data);
      text = (j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content) || '';
      if (j.model) console.log('served by: ' + j.model);
      if (j.usage) console.log('usage: ' + JSON.stringify(j.usage));
    } catch (e) {
      text = data;
      console.log('non-JSON response');
    }
    fs.writeFileSync(outFile, text, 'utf8');
    console.log('chars written: ' + text.length);
  });
});

req.on('error', e => { console.error('ERR ' + e.code + ' ' + e.message); process.exit(3); });
req.on('timeout', () => { req.destroy(); console.error('ERR timeout'); process.exit(4); });
req.write(body);
req.end();
