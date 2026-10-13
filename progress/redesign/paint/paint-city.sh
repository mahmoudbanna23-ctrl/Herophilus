#!/usr/bin/env bash
# paint-city.sh <section> [WxH] — one city plate, from "## <section>" plus "## common-city" in
# prompts-city.md. Copy of paint-room.sh: same Codex imagegen helper, sandbox mode, flags and
# busy-wait (one Codex job at a time). Size defaults to 1536x1024; pass 1024x1536 for upright.
# SCENE_REF=<png> makes the painting the SAME VIEW as that plate with the one change the prompt
# names (used for the "-clean" plates, which show what a near object hides).
# Refuses to overwrite. Output <section>.png, log paint-<section>.log. Run under bash, not sh.
set -euo pipefail
cd "$(dirname "$0")"
name="$1"; size="${2:-1536x1024}"
src="${PROMPTS_FILE:-prompts-city.md}"; common="${COMMON_SECTION:-common-city}"
ref="${ROOM_REF:-../../app-replan/mocks/plates/painted-codex-3.png}"
grep -qx "## $name" "$src" || { echo "no section '## $name' in $src" >&2; exit 1; }
[ -e "$name.png" ] && { echo "$name.png exists; rename it or pick another name" >&2; exit 1; }
[ -f "$ref" ] || { echo "style reference $ref not found" >&2; exit 1; }
[ -z "${SCENE_REF:-}" ] || [ -f "$SCENE_REF" ] || { echo "scene reference $SCENE_REF not found" >&2; exit 1; }

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

if [ -n "${SCENE_REF:-}" ]; then
  look="First look at the image file $SCENE_REF: it is the SAME SCENE. Repaint exactly that view, with the same camera, framing, palette, light and every element in the same place, making only the one change the prompt names."
else
  look="First look at the image file $ref: it is a STYLE REFERENCE ONLY (finish, palette, quality of light) and its subject must not be copied."
fi
task="Use your image generation ability (the imagegen skill / gpt-image) to generate ONE image from the prompt in the file prompt-$name.txt in the current directory, at size $size. $look Save the result as $name.png in the current directory. Do not create, change or delete any other file. In your final message state the pixel width and height of the saved file and whether it has an alpha channel."
MSYS_NO_PATHCONV=1 timeout 900 codex exec --skip-git-repo-check -s workspace-write - <<<"$task" >"paint-$name.log" 2>&1 || true
[ -f "$name.png" ] || { echo "$name: no image produced; see paint-$name.log" >&2; tail -5 "paint-$name.log" >&2; exit 1; }
echo "$name: saved"
