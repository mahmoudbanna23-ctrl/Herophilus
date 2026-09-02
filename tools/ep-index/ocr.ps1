# OCR every image in one folder with the Windows built-in engine (Windows.Media.Ocr).
#
#     powershell -ExecutionPolicy Bypass -File tools\ep-index\ocr.ps1 -In <imgdir> -Out <txtdir>
#
# Free, offline, ~40-60 ms per page on this PC (1,991 pages in 74 s, measured 2026-09-02).
# It reads the endpoint slides well -- stems came back character-exact on every ground-truth
# page, printed typos included -- but it SILENTLY DROPS WHOLE LINES now and then, and a
# different line at each resolution. That is why run-all.ps1 calls this twice, on the native
# JPEGs and on the 150 dpi PNGs, and index.py keeps both.
#
# One .txt per image, same stem, UTF-8 without BOM, one OCR line per text line.
# Windows PowerShell 5.1 only (the WinRT projection is not available in PowerShell 7).
param([Parameter(Mandatory)][string]$In, [Parameter(Mandatory)][string]$Out)

Add-Type -AssemblyName System.Runtime.WindowsRuntime
$null = [Windows.Media.Ocr.OcrEngine, Windows.Foundation, ContentType = WindowsRuntime]
$null = [Windows.Graphics.Imaging.BitmapDecoder, Windows.Foundation, ContentType = WindowsRuntime]
$null = [Windows.Storage.StorageFile, Windows.Foundation, ContentType = WindowsRuntime]
$null = [Windows.Storage.Streams.RandomAccessStream, Windows.Foundation, ContentType = WindowsRuntime]
$asTask = ([System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object {
    $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and
    $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1' })[0]
function Await($op, $type) {
    $t = $asTask.MakeGenericMethod($type).Invoke($null, @($op)); $t.Wait(-1) | Out-Null; $t.Result
}
$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
if ($null -eq $engine) { Write-Error 'no OCR engine (install the English language pack)'; exit 1 }

New-Item -ItemType Directory -Force $Out | Out-Null
$utf8 = New-Object System.Text.UTF8Encoding($false)
$files = Get-ChildItem -Path $In -File | Where-Object { $_.Extension -match '^\.(jpe?g|png)$' } | Sort-Object Name
$sw = [Diagnostics.Stopwatch]::StartNew(); $n = 0; $bad = 0
foreach ($f in $files) {
    $dest = Join-Path $Out ($f.BaseName + '.txt')
    try {
        $sf = Await ([Windows.Storage.StorageFile]::GetFileFromPathAsync($f.FullName)) ([Windows.Storage.StorageFile])
        $stream = Await ($sf.OpenAsync([Windows.Storage.FileAccessMode]::Read)) ([Windows.Storage.Streams.IRandomAccessStream])
        $dec = Await ([Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)) ([Windows.Graphics.Imaging.BitmapDecoder])
        $bmp = Await ($dec.GetSoftwareBitmapAsync()) ([Windows.Graphics.Imaging.SoftwareBitmap])
        $r = Await ($engine.RecognizeAsync($bmp)) ([Windows.Media.Ocr.OcrResult])
        $lines = @($r.Lines | ForEach-Object { $_.Text })
        [IO.File]::WriteAllLines($dest, $lines, $utf8)
        $bmp.Dispose(); $stream.Dispose()
    } catch {
        $bad++
        [IO.File]::WriteAllLines($dest, @('OCR-ERROR ' + $_.Exception.Message), $utf8)
    }
    $n++
    if ($n % 500 -eq 0) { Write-Host ("  {0} files  {1:n0}s" -f $n, $sw.Elapsed.TotalSeconds) }
}
Write-Host ("ocr: {0} files, {1} errors, {2:n0}s -> {3}" -f $n, $bad, $sw.Elapsed.TotalSeconds, $Out)
if ($bad -gt 0) { exit 1 }
