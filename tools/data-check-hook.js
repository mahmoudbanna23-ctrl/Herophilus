/* Claude Code hook (PostToolUse on Edit|Write). After Claude edits a file in
 * app/data/, checks the file still parses. One stray comma in a questions file
 * blanks that whole subject in the app, and nothing else notices until it is opened.
 *
 * Parse only (node --check), never executes the file. Exit 2 hands the error
 * back to Claude so it fixes the file in the same turn. */
const { spawnSync } = require('child_process');

let input = '';
process.stdin.on('data', c => input += c);
process.stdin.on('end', () => {
  let file;
  try { file = JSON.parse(input).tool_input.file_path || ''; } catch (e) { return; }
  if (!/[\\/]app[\\/]data[\\/][^\\/]+\.js$/i.test(file)) return;
  const r = spawnSync(process.execPath, ['--check', file], { encoding: 'utf8' });
  if (r.status === 0) return;
  process.stderr.write('Data file no longer parses — the app will fail to load it:\n' + file + '\n' + r.stderr);
  process.exit(2);
});
