# q-images.ps1 — crop the clinical photographs out of a question-bank PDF page.
#
# The banks print photographs that some questions cannot be answered without.
# This renders one page, finds the picture on it, crops it and writes a JPEG
# into app\assets\q\ named for its source page — q-<page>.jpg — so the filename
# is its own citation and does not depend on which entry ends up holding it.
#
#   .\q-images.ps1 -Pages 2844,3026 -Pdf "…\ENT endpoint.pdf"
#
# Every crop must be LOOKED AT before it is kept. The detector below is a
# heuristic on a template it has only been shown one bank of; -Box lets a page
# that it reads wrongly be given its own coordinates by hand.

param(
  [Parameter(Mandatory=$true)][int[]]$Pages,
  [Parameter(Mandatory=$true)][string]$Pdf,
  [string]$OutDir  = "D:\claude os\Medical school\Herophilus\app\assets\q",
  [string]$Work    = $env:TEMP,
  [int]$Dpi        = 300,
  [int]$MaxEdge    = 560,
  [int]$Quality    = 80,
  # Manual override: @{ 2844 = @(x,y,w,h) } in rendered-pixel coordinates.
  [hashtable]$Box  = @{},
  [switch]$DryRun,         # report the box, write nothing
  [switch]$Report          # list every component and why it was rejected
)

Add-Type -AssemblyName System.Drawing

$cell     = 12      # detection grid, in rendered pixels
$fillMin  = 0.55    # a cell is "picture" when this much of it is not paper
$areaMin  = 200     # cells; a real picture runs to thousands, a text line to ~70
$sdMin    = 12      # tone range ACROSS the component — flat fills are furniture
$yellowMx = 0.35    # the answer highlight and the corner arc are both yellow
# Padding is asymmetric on purpose. A leader-line label — the "X" of "the
# structure labeled X" — always sits BESIDE the picture, never above it, while
# the question text always sits above. A symmetric pad wide enough to reach the
# label drags a strip of the question into the crop.
$padX     = 0.04    # of card width
$padY     = 0.01

function Get-Pixels {
  param([System.Drawing.Bitmap]$bmp)
  $r = New-Object System.Drawing.Rectangle 0,0,$bmp.Width,$bmp.Height
  $d = $bmp.LockBits($r,[System.Drawing.Imaging.ImageLockMode]::ReadOnly,
                        [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
  $buf = New-Object byte[] ($d.Stride * $bmp.Height)
  [System.Runtime.InteropServices.Marshal]::Copy($d.Scan0,$buf,0,$buf.Length)
  $bmp.UnlockBits($d)
  return @{ b = $buf; stride = $d.Stride; w = $bmp.Width; h = $bmp.Height }
}

# The card is the big cream panel the slide is printed on. Everything the
# detector cares about is inside it; the teal surround and the page number are
# not. Found by looking for cream, never assumed to be at fixed coordinates.
#
# ⚠️ Cream alone is not enough. The rendered page is far taller than the slide
# and the space below it is pure white, which passes any cream test — so a
# cream-only scan runs the card's bottom edge off the end of the page. A row
# only belongs to the card if the teal surround is beside it, which is true on
# every row of the card and no row below it.
function Get-CardBox {
  param($px)
  $b=$px.b; $st=$px.stride; $w=$px.w; $h=$px.h
  $rowCream = New-Object int[] $h
  $rowTeal  = New-Object int[] $h
  $colCream = New-Object int[] $w
  for($y=0;$y -lt $h;$y++){
    $o=$y*$st
    for($x=0;$x -lt $w;$x++){
      $i=$o+$x*3
      $bl=$b[$i]; $g=$b[$i+1]; $r=$b[$i+2]
      if($bl -ge 238 -and $g -ge 246 -and $r -ge 248){ $rowCream[$y]++; $colCream[$x]++ }
      elseif($bl -ge 200 -and $g -ge 220 -and ($g-$r) -ge 15){ $rowTeal[$y]++ }
    }
  }
  $y0=-1;$y1=-1
  for($y=0;$y -lt $h;$y++){
    if($rowCream[$y] -gt $w*0.30 -and $rowTeal[$y] -gt $w*0.01){ if($y0 -lt 0){$y0=$y}; $y1=$y }
  }
  if($y0 -lt 0){ return @(0,0,$w,$h) }
  # columns are counted over the card's own rows only, for the same reason
  $colCream = New-Object int[] $w
  for($y=$y0;$y -le $y1;$y++){
    $o=$y*$st
    for($x=0;$x -lt $w;$x++){
      $i=$o+$x*3
      if($b[$i] -ge 238 -and $b[$i+1] -ge 246 -and $b[$i+2] -ge 248){ $colCream[$x]++ }
    }
  }
  $rows=$y1-$y0+1
  $x0=-1;$x1=-1
  for($x=0;$x -lt $w;$x++){ if($colCream[$x] -gt $rows*0.30){ if($x0 -lt 0){$x0=$x}; $x1=$x } }
  if($x0 -lt 0){ return @(0,$y0,$w,$rows) }
  return @($x0,$y0,($x1-$x0+1),$rows)
}

function Find-Picture {
  param($px,$card)
  $b=$px.b; $st=$px.stride
  $cx0=$card[0]; $cy0=$card[1]; $cw=$card[2]; $ch=$card[3]
  # inset — the card's own edge is a hairline of non-paper pixels
  $in = [int]($cw*0.01)
  $cx0+=$in; $cy0+=$in; $cw-=2*$in; $ch-=2*$in

  $gw=[math]::Floor($cw/$cell); $gh=[math]::Floor($ch/$cell)
  if($gw -lt 3 -or $gh -lt 3){ return $null }

  $pic = New-Object 'bool[,]' $gw,$gh
  $mu  = New-Object 'double[,]' $gw,$gh   # cell mean luminance
  $mu2 = New-Object 'double[,]' $gw,$gh   # cell mean of luminance squared
  $yel = New-Object 'double[,]' $gw,$gh

  for($gy=0;$gy -lt $gh;$gy++){
    for($gx=0;$gx -lt $gw;$gx++){
      $ink=0; $yellow=0; $n=0
      $s=0.0; $s2=0.0
      for($dy=0;$dy -lt $cell;$dy++){
        $o=($cy0+$gy*$cell+$dy)*$st
        for($dx=0;$dx -lt $cell;$dx++){
          $i=$o+($cx0+$gx*$cell+$dx)*3
          $bl=$b[$i]; $g=$b[$i+1]; $r=$b[$i+2]
          $n++
          # paper: cream and white only. Anything else is ink or colour.
          if(-not($bl -ge 228 -and $g -ge 228 -and $r -ge 228)){ $ink++ }
          if($r -gt 200 -and $g -gt 170 -and $bl -lt 130){ $yellow++ }
          $l=($r*0.299+$g*0.587+$bl*0.114)
          $s+=$l; $s2+=$l*$l
        }
      }
      $pic[$gx,$gy] = (($ink/$n) -ge $fillMin)
      $mu[$gx,$gy]  = $s/$n
      $mu2[$gx,$gy] = $s2/$n
      $yel[$gx,$gy] = $yellow/$n
    }
  }

  # 8-neighbour connected components over the picture cells
  $lab = New-Object 'int[,]' $gw,$gh
  $comps = @(); $next=0
  for($gy=0;$gy -lt $gh;$gy++){
    for($gx=0;$gx -lt $gw;$gx++){
      if(-not $pic[$gx,$gy] -or $lab[$gx,$gy] -ne 0){ continue }
      $next++
      $stack=New-Object System.Collections.Stack
      $stack.Push(@($gx,$gy)); $lab[$gx,$gy]=$next
      $minx=$gx;$maxx=$gx;$miny=$gy;$maxy=$gy;$area=0
      $muSum=0.0;$mu2Sum=0.0;$yeSum=0.0
      while($stack.Count -gt 0){
        $p=$stack.Pop(); $ux=$p[0]; $uy=$p[1]
        $area++; $muSum+=$mu[$ux,$uy]; $mu2Sum+=$mu2[$ux,$uy]; $yeSum+=$yel[$ux,$uy]
        if($ux -lt $minx){$minx=$ux}; if($ux -gt $maxx){$maxx=$ux}
        if($uy -lt $miny){$miny=$uy}; if($uy -gt $maxy){$maxy=$uy}
        foreach($d in @(@(-1,-1),@(0,-1),@(1,-1),@(-1,0),@(1,0),@(-1,1),@(0,1),@(1,1))){
          $nx=$ux+$d[0]; $ny=$uy+$d[1]
          if($nx -lt 0 -or $ny -lt 0 -or $nx -ge $gw -or $ny -ge $gh){ continue }
          if($pic[$nx,$ny] -and $lab[$nx,$ny] -eq 0){ $lab[$nx,$ny]=$next; $stack.Push(@($nx,$ny)) }
        }
      }
      # ⚠️ The tone spread must be measured ACROSS the component, never inside a
      # cell. A photograph is locally smooth — a 12px patch of it varies by ~6 —
      # while black-on-white text varies by ~77 within every cell it touches. A
      # per-cell reading therefore rejects pictures and keeps paragraphs, which
      # is exactly backwards. Pooled here from the per-cell means instead.
      $gm=$muSum/$area; $gs=[math]::Sqrt([math]::Max(0.0,($mu2Sum/$area)-($gm*$gm)))
      # ⚠️ pscustomobject, NOT a hashtable. Sort-Object -Property on an array of
      # hashtables silently returns them unsorted in PowerShell 5.1, which made
      # this pick an arbitrary component — a block of question text — instead of
      # the largest one. It threw nothing and the crop simply came out wrong.
      $comps += ,([pscustomobject]@{ area=$area; minx=$minx; maxx=$maxx
                    miny=$miny; maxy=$maxy
                    sd=$gs; yellow=($yeSum/$area) })
    }
  }

  if($script:Report){
    Write-Host "  card=$cx0,$cy0 ${cw}x${ch}  grid=${gw}x${gh}  components=$($comps.Count)"
    $comps | Sort-Object -Property area -Descending | Select-Object -First 8 | ForEach-Object {
      $why = @()
      if($_.area -lt $areaMin){ $why += 'small' }
      if($_.sd   -lt $sdMin)  { $why += 'flat' }
      if($_.yellow -gt $yellowMx){ $why += 'yellow' }
      # Write-Host, not bare output — a string emitted here joins the function's
      # return value and silently turns the box into an array.
      Write-Host ("    area={0,5} sd={1,5} yel={2,4} cells=({3},{4})-({5},{6})  {7}" -f `
        $_.area,[math]::Round($_.sd,1),[math]::Round($_.yellow,2),
        $_.minx,$_.miny,$_.maxx,$_.maxy,$(if($why){'REJECT '+($why -join '+')}else{'keep'}))
    }
  }

  $keep = $comps | Where-Object {
    $_.area -ge $areaMin -and $_.sd -ge $sdMin -and $_.yellow -le $yellowMx
  } | Sort-Object -Property area -Descending

  if(-not $keep){ return $null }
  $c = @($keep)[0]

  $px_=[int]($cw*$padX); $py_=[int]($cw*$padY)
  $x = $cx0 + $c.minx*$cell - $px_
  $y = $cy0 + $c.miny*$cell - $py_
  $w = ($c.maxx-$c.minx+1)*$cell + 2*$px_
  $h = ($c.maxy-$c.miny+1)*$cell + 2*$py_
  # clip back inside the card
  if($x -lt $cx0){ $w -= ($cx0-$x); $x=$cx0 }
  if($y -lt $cy0){ $h -= ($cy0-$y); $y=$cy0 }
  if($x+$w -gt $cx0+$cw){ $w = $cx0+$cw-$x }
  if($y+$h -gt $cy0+$ch){ $h = $cy0+$ch-$y }
  return @{ box=@($x,$y,$w,$h); area=$c.area; sd=[math]::Round($c.sd,1)
            others=@($keep).Count }
}

function Save-Jpeg {
  param([System.Drawing.Bitmap]$bmp,[string]$path,[int]$q)
  $enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
           Where-Object { $_.MimeType -eq 'image/jpeg' }
  $ps  = New-Object System.Drawing.Imaging.EncoderParameters 1
  $ps.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
                   [System.Drawing.Imaging.Encoder]::Quality, [long]$q)
  $bmp.Save($path,$enc,$ps)
}

if(-not (Test-Path $OutDir)){ New-Item -ItemType Directory -Path $OutDir | Out-Null }

foreach($p in $Pages){
  $prefix = Join-Path $Work "qi$p"
  & pdftoppm -png -r $Dpi -f $p -l $p $Pdf $prefix
  $src = Get-ChildItem "$prefix-*.png" | Select-Object -First 1
  if(-not $src){ Write-Host "p.$p  RENDER FAILED"; continue }

  $bmp = [System.Drawing.Bitmap]::FromFile($src.FullName)
  try {
    if($Box.ContainsKey($p)){
      $bx = $Box[$p]; $info = "manual"
    } else {
      $px   = Get-Pixels $bmp
      $card = Get-CardBox $px
      $hit  = Find-Picture $px $card
      if(-not $hit){ Write-Host "p.$p  NO PICTURE FOUND"; continue }
      $bx   = $hit.box
      $info = "cells=$($hit.area) sd=$($hit.sd) candidates=$($hit.others)"
    }

    $scale = [math]::Min(1.0, $MaxEdge / [double]([math]::Max($bx[2],$bx[3])))
    $ow=[int][math]::Round($bx[2]*$scale); $oh=[int][math]::Round($bx[3]*$scale)
    Write-Host ("p.{0}  box={1},{2} {3}x{4}  ->  {5}x{6}  {7}" -f `
                 $p,$bx[0],$bx[1],$bx[2],$bx[3],$ow,$oh,$info)
    if($DryRun){ continue }

    $out = New-Object System.Drawing.Bitmap $ow,$oh
    $g   = [System.Drawing.Graphics]::FromImage($out)
    $g.InterpolationMode  = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode    = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.SmoothingMode      = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.DrawImage($bmp,(New-Object System.Drawing.Rectangle 0,0,$ow,$oh),
                      $bx[0],$bx[1],$bx[2],$bx[3],[System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    Save-Jpeg $out (Join-Path $OutDir "q-$p.jpg") $Quality
    $out.Dispose()
  } finally {
    $bmp.Dispose()
    Remove-Item $src.FullName -Force -ErrorAction SilentlyContinue
  }
}
