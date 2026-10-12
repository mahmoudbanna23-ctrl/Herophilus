#!/usr/bin/env bash
# paint-room.sh <section> — one subject room, from "## <section>" plus "## common-room" in
# prompts-rooms.md (e.g. paint-room.sh room-ent-dark). Copy of paint.sh: same Codex imagegen helper
# path, same sandbox mode and flags, same busy-wait. Size is fixed at 1536x1024 (landscape).
# Waits while another `codex exec` job is running (one Codex job at a time). Refuses to overwrite an
# existing painting. Output <section>.png, log paint-<section>.log. Run under bash, not sh.
# Style reference: ROOM_REF if set (path relative to this folder, or absolute), else the same
# painted-codex-3.png that paint.sh uses. No full-size cooled hall PNG exists on disk (only the
# 361 KB web JPG app/assets/hall/hall-dark.jpg), so the default stays the paint.sh reference.
set -euo pipefail
cd "$(dirname "$0")"
name="$1"; size="1536x1024"
src="${PROMPTS_FILE:-prompts-rooms.md}"; common="${COMMON_SECTION:-common-room}"
ref="${ROOM_REF:-../../app-replan/mocks/plates/painted-codex-3.png}"
grep -qx "## $name" "$src" || { echo "no section '## $name' in $src" >&2; exit 1; }
[ -e "$name.png" ] && { echo "$name.png exists; rename it or pick another name" >&2; exit 1; }
[ -f "$ref" ] || { echo "style reference $ref not found" >&2; exit 1; }
[ -z "${EXTRA_REF:-}" ] || [ -f "$EXTRA_REF" ] || { echo "extra reference $EXTRA_REF not found" >&2; exit 1; }

section() { awk -v n="$1" '$0=="## "n{f=1;next} /^## /{f=0} f' "$src"; }
{ section "$name"; echo; section "$common"; } > "prompt-$name.txt"

busy() {
  powershell -NoProfile -Command "@(Get-CimInstance Win32_Process | Where-Object { \$_.Name -eq 'codex.exe' -and \$_.CommandLine -like '* exec *' }).Count" | tr -d '\r '
}
waited=0
while [ "$(busy)" != "0" ]; do
  sleep 30; waited=$((waited + 30))
  [ "$waited" -ge 2700 ] && { echo "$name: Codex busy for 45 min; gave up without painting" >&2; exit 2; }
done
echo "$name: Codex free after ${waited}s, painting"

task="Use your image generation ability (the imagegen skill / gpt-image) to generate ONE image from the prompt in the file prompt-$name.txt in the current directory, at size $size. First look at the image file $ref: it is a STYLE REFERENCE ONLY (finish, palette, quality of light) and its subject must not be copied.${EXTRA_REF:+ Then look at the image file $EXTRA_REF: it is a LIKENESS REFERENCE ONLY for the face and head of the statue; do not copy its lighting, crop or background.} Save the result as $name.png in the current directory. Do not create, change or delete any other file. In your final message state the pixel width and height of the saved file and whether it has an alpha channel."
MSYS_NO_PATHCONV=1 timeout 900 codex exec --skip-git-repo-check -s workspace-write - <<<"$task" >"paint-$name.log" 2>&1 || true
[ -f "$name.png" ] || { echo "$name: no image produced; see paint-$name.log" >&2; tail -5 "paint-$name.log" >&2; exit 1; }
echo "$name: saved"
