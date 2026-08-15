# Cuts the nine supplied poses out of their white background and lands them on
# ONE shared canvas, so swapping between them does not make her jump.
#
# Same method as the first cutout: a flood fill inward from the border that
# judges each candidate against the NEIGHBOUR it spread from, not against a
# fixed seed colour. A brightness threshold cannot be used here - her chiton,
# her gloves and her eye whites are all cream, and "delete the bright pixels"
# would delete exactly those. Her dark contour is a cliff the fill stops at.
#
# Writes to app\assets\clep\<pose>.png. Reads Clypsedra\ and never modifies it.

param([int]$TOL = 6, [int]$ERODE = 2, [int]$OUT = 440)

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

$srcDir = "D:\claude os\Medical school\Herophilus\Clypsedra"
$dstDir = "D:\claude os\Medical school\Herophilus\app\assets\clep"
if (-not (Test-Path $dstDir)) { New-Item -ItemType Directory -Path $dstDir | Out-Null }

function Cut-Background {
  param([System.Drawing.Bitmap]$bmp, [int]$tol, [int]$erode)

  $w = $bmp.Width; $h = $bmp.Height
  $rect = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
  $data = $bmp.LockBits($rect, "ReadWrite", "Format32bppArgb")
  $stride = $data.Stride
  $bytes = New-Object byte[] ($stride * $h)
  [Runtime.InteropServices.Marshal]::Copy($data.Scan0, $bytes, 0, $bytes.Length)

  $bg = New-Object bool[] ($w * $h)
  $stack = New-Object System.Collections.Generic.Stack[int]

  # seed every border pixel that is already background-ish (opaque white, or
  # already transparent as in Welcoming.png)
  for ($x = 0; $x -lt $w; $x++) {
    foreach ($y in 0, ($h - 1)) { $stack.Push($y * $w + $x) }
  }
  for ($y = 0; $y -lt $h; $y++) {
    foreach ($x in 0, ($w - 1)) { $stack.Push($y * $w + $x) }
  }

  while ($stack.Count -gt 0) {
    $i = $stack.Pop()
    if ($bg[$i]) { continue }
    $x = $i % $w; $y = [math]::Floor($i / $w)
    $p = $y * $stride + $x * 4
    # already transparent, or white enough to be the sheet
    $isEdgeSeed = ($x -eq 0 -or $y -eq 0 -or $x -eq $w - 1 -or $y -eq $h - 1)
    if ($isEdgeSeed) {
      if ($bytes[$p + 3] -gt 30 -and ($bytes[$p] -lt 230 -or $bytes[$p + 1] -lt 230 -or $bytes[$p + 2] -lt 230)) { continue }
    }
    $bg[$i] = $true
    foreach ($d in @(@(1, 0), @(-1, 0), @(0, 1), @(0, -1))) {
      $nx = $x + $d[0]; $ny = $y + $d[1]
      if ($nx -lt 0 -or $ny -lt 0 -or $nx -ge $w -or $ny -ge $h) { continue }
      $ni = $ny * $w + $nx
      if ($bg[$ni]) { continue }
      $np = $ny * $stride + $nx * 4
      # transparent neighbours always spread
      if ($bytes[$np + 3] -lt 30) { $stack.Push($ni); continue }
      # otherwise it must match the pixel we spread FROM, within tolerance
      if ($bytes[$p + 3] -lt 30) {
        if ($bytes[$np] -ge 236 -and $bytes[$np + 1] -ge 236 -and $bytes[$np + 2] -ge 236) { $stack.Push($ni) }
      }
      elseif ([math]::Abs($bytes[$np] - $bytes[$p]) -le $tol -and
              [math]::Abs($bytes[$np + 1] - $bytes[$p + 1]) -le $tol -and
              [math]::Abs($bytes[$np + 2] - $bytes[$p + 2]) -le $tol) {
        $stack.Push($ni)
      }
    }
  }

  # erode: strip the fringe of half-background left by the anti-aliased edge.
  # On dark it passes for a glow; on parchment it is a white halo.
  for ($pass = 1; $pass -le $erode; $pass++) {
    $add = New-Object System.Collections.Generic.List[int]
    for ($y = 0; $y -lt $h; $y++) {
      for ($x = 0; $x -lt $w; $x++) {
        $i = $y * $w + $x
        if ($bg[$i]) { continue }
        $touches = $false
        foreach ($d in @(@(1, 0), @(-1, 0), @(0, 1), @(0, -1))) {
          $nx = $x + $d[0]; $ny = $y + $d[1]
          if ($nx -lt 0 -or $ny -lt 0 -or $nx -ge $w -or $ny -ge $h) { continue }
          if ($bg[$ny * $w + $nx]) { $touches = $true; break }
        }
        if ($touches) {
          $p = $y * $stride + $x * 4
          # only erode pixels that are themselves pale - never eat her outline
          if ($bytes[$p] -ge 214 -and $bytes[$p + 1] -ge 214 -and $bytes[$p + 2] -ge 214) { $add.Add($i) }
        }
      }
    }
    foreach ($i in $add) { $bg[$i] = $true }
  }

  $cleared = 0
  for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
      if ($bg[$y * $w + $x]) {
        $p = $y * $stride + $x * 4
        $bytes[$p] = 0; $bytes[$p + 1] = 0; $bytes[$p + 2] = 0; $bytes[$p + 3] = 0
        $cleared++
      }
    }
  }
  [Runtime.InteropServices.Marshal]::Copy($bytes, 0, $data.Scan0, $bytes.Length)
  $bmp.UnlockBits($data)
  return $cleared / ($w * $h)
}

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

# ---- pass 1: cut, and measure where she actually sits ----------------------
$cut = @{}
$info = @()
foreach ($f in Get-ChildItem "$srcDir\*.png" | Sort-Object Name) {
  $src = New-Object System.Drawing.Bitmap($f.FullName)
  $bmp = New-Object System.Drawing.Bitmap($src.Width, $src.Height, "Format32bppArgb")
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.DrawImage($src, 0, 0, $src.Width, $src.Height)
  $g.Dispose(); $src.Dispose()

  $pct = Cut-Background -bmp $bmp -tol $TOL -erode $ERODE
  $bd = Get-Bounds -bmp $bmp
  $cut[$f.BaseName] = $bmp
  $info += [pscustomobject]@{
    Pose = $f.BaseName; Canvas = $bmp.Width; Removed = "{0:P1}" -f $pct
    L = $bd.l; T = $bd.t; W = $bd.w; H = $bd.h
    RelW = "{0:P0}" -f ($bd.w / $bmp.Width); RelH = "{0:P0}" -f ($bd.h / $bmp.Width)
  }
}
$info | Format-Table -AutoSize | Out-String -Width 200

# keep the cut bitmaps for pass 2
$global:CUT = $cut
$global:INFO = $info
"cut $($cut.Count) poses - bitmaps held in `$global:CUT"
