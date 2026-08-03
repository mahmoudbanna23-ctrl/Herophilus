# Pass 2: land every cut pose on ONE 440x440 canvas.
#
# Seven of the nine arrive on an identical 377x377 canvas from the same
# generator, so their framing is already consistent - those are simply scaled
# 377 -> 440 and left alone. Only Presenting (1254) and Welcoming (1024) have
# to be fitted, and for those two the head IS the topmost thing (their hands
# are at chest height), so matching the figure's box top and height works.
#
# An automatic "find the head" pass was tried first and produced head widths of
# 24-91px on a canvas where the head is ~250 - it is not worth debugging when
# the framing is already given. The overlay written at the end is the check.
#
# Requires $global:CUT from poses.ps1. Reads Clypsedra\ only through that.

param([int]$SIZE = 440)

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

if (-not $global:CUT) { throw "run poses.ps1 first - `$global:CUT is empty" }
$dstDir = "D:\claude os\Herophilus\app\assets\clep"
if (-not (Test-Path $dstDir)) { New-Item -ItemType Directory -Path $dstDir | Out-Null }

function Get-Bounds {
  param([System.Drawing.Bitmap]$bmp)
  $w = $bmp.Width; $h = $bmp.Height
  $rect = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
  $data = $bmp.LockBits($rect, "ReadOnly", "Format32bppArgb")
  $stride = $data.Stride
  $bytes = New-Object byte[] ($stride * $h)
  [Runtime.InteropServices.Marshal]::Copy($data.Scan0, $bytes, 0, $bytes.Length)
  $bmp.UnlockBits($data)
  $l = $w; $r = -1; $t = $h; $b = -1
  for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
      if ($bytes[$y * $stride + $x * 4 + 3] -gt 40) {
        if ($x -lt $l) { $l = $x }; if ($x -gt $r) { $r = $x }
        if ($y -lt $t) { $t = $y }; if ($y -gt $b) { $b = $y }
      }
    }
  }
  return @{ l = $l; r = $r; t = $t; b = $b; w = ($r - $l + 1); h = ($b - $t + 1) }
}

# ---- the reference framing, taken from the seven native-canvas poses --------
$native = @(); $odd = @()
foreach ($name in ($global:CUT.Keys | Sort-Object)) {
  if ($global:CUT[$name].Width -eq 377) { $native += $name } else { $odd += $name }
}
$k = $SIZE / 377.0
$tops = @(); $hts = @()
foreach ($name in $native) { $b = Get-Bounds -bmp $global:CUT[$name]; $tops += $b.t * $k; $hts += $b.h * $k }
$refTop = ($tops | Measure-Object -Average).Average
$refH = ($hts | Measure-Object -Average).Average
"reference framing from $($native.Count) native poses: box top {0:N0}px, box height {1:N0}px on {2}" -f $refTop, $refH, $SIZE

$rows = @()
foreach ($name in ($global:CUT.Keys | Sort-Object)) {
  $bmp = $global:CUT[$name]
  $dst = New-Object System.Drawing.Bitmap($SIZE, $SIZE, "Format32bppArgb")
  $g = [System.Drawing.Graphics]::FromImage($dst)
  $g.InterpolationMode = "HighQualityBicubic"; $g.PixelOffsetMode = "HighQuality"

  if ($bmp.Width -eq 377) {
    $g.DrawImage($bmp, 0, 0, $SIZE, $SIZE)
    $note = "native"
  }
  else {
    $b = Get-Bounds -bmp $bmp
    $s = $refH / $b.h
    $dx = $SIZE / 2.0 - ($b.l + $b.w / 2.0) * $s
    $dy = $refTop - $b.t * $s
    $g.DrawImage($bmp, $dx, $dy, ($bmp.Width * $s), ($bmp.Height * $s))
    $note = "fitted x{0:N2}" -f $s
  }
  $g.Dispose()

  $path = "$dstDir\$($name.ToLower()).png"
  $dst.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
  $fb = Get-Bounds -bmp $dst
  $rows += [pscustomobject]@{
    Pose = $name; Fit = $note; BoxTop = $fb.t; BoxH = $fb.h
    CentreX = [int]($fb.l + $fb.w / 2); KB = "{0:N0}" -f ((Get-Item $path).Length / 1KB)
  }
  $dst.Dispose()
}
$rows | Format-Table -AutoSize | Out-String -Width 200

# ---- the check: all nine stacked, so a drifting head is visible -------------
$scr = "C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Herophilus\d068a511-ea92-48c5-a0b5-bf14af181375\scratchpad"
$ov = New-Object System.Drawing.Bitmap($SIZE, $SIZE, "Format32bppArgb")
$g = [System.Drawing.Graphics]::FromImage($ov)
$g.Clear([System.Drawing.Color]::FromArgb(255, 20, 26, 36))
$ia = New-Object System.Drawing.Imaging.ImageAttributes
$cm = New-Object System.Drawing.Imaging.ColorMatrix
$cm.Matrix33 = 0.22
$ia.SetColorMatrix($cm)
foreach ($f in Get-ChildItem "$dstDir\*.png") {
  $im = [System.Drawing.Image]::FromFile($f.FullName)
  $g.DrawImage($im, (New-Object System.Drawing.Rectangle(0, 0, $SIZE, $SIZE)), 0, 0, $SIZE, $SIZE, "Pixel", $ia)
  $im.Dispose()
}
$g.Dispose()
$ov.Save("$scr\pose-overlay.png", [System.Drawing.Imaging.ImageFormat]::Png)
$ov.Dispose()
"wrote $scr\pose-overlay.png - a sharp head means they register, a blurred one means they drift"
