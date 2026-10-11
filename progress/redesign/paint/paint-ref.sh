#!/usr/bin/env bash
# paint-ref.sh <name> <WxH> <style-ref.png> [<framing-ref.png>] — like paint.sh but reads
# prompt-<name>.txt as written (no prompts.md section) and takes its own reference image(s).
# First ref = style/colour. Optional second ref = framing/layout. Same busy-wait as paint.sh.
set -euo pipefail
cd "$(dirname "$0")"
name="$1"; size="$2"; ref1="$3"; ref2="${4:-}"
[ -f "prompt-$name.txt" ] || { echo "no prompt-$name.txt" >&2; exit 1; }
[ -e "$name.png" ] && { echo "$name.png exists" >&2; exit 1; }

busy() {
  powershell -NoProfile -Command "@(Get-CimInstance Win32_Process | Where-Object { \$_.Name -eq 'codex.exe' -and \$_.CommandLine -like '* exec *' }).Count" | tr -d '\r '
}
waited=0
while [ "$(busy)" != "0" ]; do
  sleep 30; waited=$((waited + 30))
  [ "$waited" -ge 2700 ] && { echo "$name: Codex busy for 45 min; gave up" >&2; exit 2; }
done
echo "$name: Codex free after ${waited}s, painting"

task="Use your image generation ability (the imagegen skill / gpt-image) to generate ONE image from the prompt in the file prompt-$name.txt in the current directory, at size $size. First look at the image file $ref1: it is the STYLE REFERENCE (finish, palette, stone, quality of light); its subject must not be copied."
if [ -n "$ref2" ]; then
  task="$task Then look at the image file $ref2: it is the FRAMING REFERENCE (building layout, doorway position and size, steps); copy its framing, but take colour and light from the style reference."
fi
task="$task Save the result as $name.png in the current directory. Do not create, change or delete any other file. In your final message state the pixel width and height of the saved file and whether it has an alpha channel."
MSYS_NO_PATHCONV=1 timeout 900 codex exec --skip-git-repo-check -s workspace-write - <<<"$task" >"$name.log" 2>&1 || true
[ -f "$name.png" ] || { echo "$name: no image produced; see $name.log" >&2; tail -5 "$name.log" >&2; exit 1; }
echo "$name: saved"
