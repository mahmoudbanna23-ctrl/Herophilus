# P5 D3 matched trace — home, candle lit vs stopped

10 s window each, 2 runs per state. Metrics are
`Performance.getMetrics` deltas (before/after the 10 s window); frames is a
requestAnimationFrame counter running for the same window (not a browser
paint-frame count — CDP tracing frame counters were not used here).

## Candle lit
  run 1: frames=111 TaskDuration=0.161 ScriptDuration=0.008 LayoutCount=13 RecalcStyleCount=113 LayoutDuration=0.003 RecalcStyleDuration=0.045
  run 2: frames=106 TaskDuration=0.135 ScriptDuration=0.005 LayoutCount=1 RecalcStyleCount=106 LayoutDuration=0.000 RecalcStyleDuration=0.042

## Candle stopped
Click result (aria-pressed after click): false
  run 1: frames=573 TaskDuration=0.100 ScriptDuration=0.013 LayoutCount=6 RecalcStyleCount=11 LayoutDuration=0.001 RecalcStyleDuration=0.003
  run 2: frames=567 TaskDuration=0.091 ScriptDuration=0.012 LayoutCount=1 RecalcStyleCount=2 LayoutDuration=0.000 RecalcStyleDuration=0.001
