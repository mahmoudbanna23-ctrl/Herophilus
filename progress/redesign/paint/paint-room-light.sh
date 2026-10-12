#!/usr/bin/env bash
# paint-room-light.sh <section> — daylight twin of an approved dark room, from "## <section>" plus
# "## common-room-light" in prompts-rooms.md (e.g. paint-room-light.sh room-ent-light). Copy of
# paint-room.sh: same busy-wait, same sandbox mode and flags, same refuse-to-overwrite. The
# reference is the matching approved dark painting room-<id>-dark.png and is the SAME ROOM to be
# repainted in daylight (layout, objects and camera kept; only light and palette change).
# Output <section>.png, log paint-<section>.log. Run under bash, not sh.
set -euo pipefail
cd "$(dirname "$0")"
name="$1"; size="1536x1024"
src="prompts-rooms.md"
id="${name#room-}"; id="${id%-light}"
ref="room-$id-dark.png"
grep -qx "## $name" "$src" || { echo "no section '## $name' in $src" >&2; exit 1; }
[ -e "$name.png" ] && { echo "$name.png exists; rename it or pick another name" >&2; exit 1; }
[ -f "$ref" ] || { echo "reference $ref not found" >&2; exit 1; }

section() { awk -v n="$1" '$0=="## "n{f=1;next} /^## /{f=0} f' "$src"; }
{ section "$name"; echo; section common-room-light; } > "prompt-$name.txt"

busy() {
  powershell -NoProfile -Command "@(Get-CimInstance Win32_Process | Where-Object { \$_.Name -eq 'codex.exe' -and \$_.CommandLine -like '* exec *' }).Count" | tr -d '\r '
}
waited=0
while [ "$(busy)" != "0" ]; do
  sleep 30; waited=$((waited + 30))
  [ "$waited" -ge 2700 ] && { echo "$name: Codex busy for 45 min; gave up without painting" >&2; exit 2; }
done
echo "$name: Codex free after ${waited}s, painting"

task="Use your image generation ability (the imagegen skill / gpt-image) to generate ONE image from the prompt in the file prompt-$name.txt in the current directory, at size $size. First look at the image file $ref: it is the SAME ROOM, to be repainted in morning daylight. Keep its layout, walls, objects and camera exactly; change only the light and the palette as the prompt describes. It is not a style-only reference. Save the result as $name.png in the current directory. Do not create, change or delete any other file. In your final message state the pixel width and height of the saved file and whether it has an alpha channel."
MSYS_NO_PATHCONV=1 timeout 900 codex exec --skip-git-repo-check -s workspace-write - <<<"$task" >"paint-$name.log" 2>&1 || true
[ -f "$name.png" ] || { echo "$name: no image produced; see paint-$name.log" >&2; tail -5 "paint-$name.log" >&2; exit 1; }
echo "$name: saved"
