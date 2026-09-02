# The one command: PDF -> images (two resolutions) -> two OCR passes -> committed index.
#
#     powershell -ExecutionPolicy Bypass -File tools\ep-index\run-all.ps1 `
#         -Pdf "Semester 8\Pedo\Questions\Pediatrics endpoint part1.pdf" `
#         -Out content\peds\qb-pages\ocr\ep1 `
#         -Work <scratchpad>\ep1-index
#
# Images go to -Work (the session scratchpad, never the repo); only text lands in -Out.
# Measured 2026-09-02 on part 1 (1,991 pages): extract ~2 min, each OCR pass ~75-120 s.
# Re-runnable: everything is overwritten in place.
param(
    [Parameter(Mandatory)][string]$Pdf,
    [Parameter(Mandatory)][string]$Out,
    [Parameter(Mandatory)][string]$Work,
    [int]$First = 1,
    [int]$Last = 0
)
$ErrorActionPreference = 'Stop'
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$Pdf = (Resolve-Path $Pdf).Path
New-Item -ItemType Directory -Force $Work | Out-Null
$Work = (Resolve-Path $Work).Path

$args = @("$here\extract.py", $Pdf, $Work)
if ($Last -gt 0) { $args += @($First, $Last) }
& python @args
if ($LASTEXITCODE -ne 0) { Write-Error 'extract.py failed'; exit 1 }

& powershell -NoProfile -ExecutionPolicy Bypass -File "$here\ocr.ps1" -In "$Work\native" -Out "$Work\ocr-native"
if ($LASTEXITCODE -ne 0) { Write-Error 'ocr.ps1 (native) reported errors'; exit 1 }
& powershell -NoProfile -ExecutionPolicy Bypass -File "$here\ocr.ps1" -In "$Work\hires" -Out "$Work\ocr-hires"
if ($LASTEXITCODE -ne 0) { Write-Error 'ocr.ps1 (150 dpi) reported errors'; exit 1 }

& python "$here\index.py" $Work $Out
if ($LASTEXITCODE -ne 0) { Write-Error 'index.py failed'; exit 1 }
