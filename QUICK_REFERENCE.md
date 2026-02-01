# 🎹 Strudel Quick Reference

## Basic Patterns

### Notes
```javascript
note("c4 e4 g4 c5")      // Play notes
note("c4 d4 e4 f4").slow(2)  // Slow down
note("c4 e4 g4").fast(2)     // Speed up
```

### Sounds/Samples
```javascript
s("bd sd hh sd")         // Drum sounds
s("piano:0 piano:1")     // Sample banks
```

## Pattern Notation

### Basic
```javascript
"c4 d4 e4 f4"           // Sequence
"c4 ~ e4 ~"             // Rests (~)
"[c4 e4] g4"            // Grouping
"<c4 e4 g4>"            // Alternation (cycles)
```

### Chords
```javascript
"[c4,e4,g4]"            // Chord (simultaneous)
"[c3,e3,g3] [f3,a3,c4]" // Chord progression
```

## Effects

### Filters
```javascript
.lpf(1000)              // Low pass filter
.hpf(200)               // High pass filter
.lpf(sine.range(400, 2000))  // Modulated filter
```

### Envelopes
```javascript
.attack(0.01)           // Attack time
.decay(0.1)             // Decay time
.sustain(0.5)           // Sustain level
.release(0.3)           // Release time
```

### Spatial Effects
```javascript
.room(0.5)              // Reverb
.delay(0.25)            // Delay
.pan(0.5)               // Panning (0=left, 1=right)
```

### Dynamics
```javascript
.gain(0.6)              // Volume
.shape(0.3)             // Distortion
```

## Modulation

### Oscillators
```javascript
sine.range(400, 2000)    // Sine LFO
perlin.range(0, 1)       // Perlin noise
saw.range(0, 1)          // Sawtooth wave
```

### Time
```javascript
.slow(4)                // Slow pattern
.fast(2)                // Speed up pattern
.every(4, fast(2))      // Every 4 cycles, double speed
```

## Combining Patterns

### Stack (Parallel)
```javascript
stack(
  note("c4 e4"),
  note("c2 ~ c2 ~"),
  s("bd ~ bd ~")
)
```

### Layer
```javascript
note("c4 e4 g4")
  .layer(
    x => x.s("piano"),
    x => x.s("string").slow(2)
  )
```

## Common Instruments

### Synths
```javascript
.s("sawtooth")          // Sawtooth wave
.s("sine")              // Sine wave
.s("triangle")          // Triangle wave
.s("square")            // Square wave
```

### Drums
```javascript
s("bd")                 // Bass drum/kick
s("sd")                 // Snare drum
s("hh")                 // Hi-hat
s("oh")                 // Open hi-hat
s("cp")                 // Clap
s("rim")                // Rimshot
```

## Trance Examples

### Basic Kick
```javascript
s("bd bd bd bd").gain(0.8)
```

### Rolling Bassline
```javascript
note("c2 ~ c2 g2 ~ ab2 ~ bb2")
  .s("sawtooth")
  .lpf(300)
```

### Trance Lead
```javascript
note("c5 e5 g5 b5 c6 b5 g5 e5")
  .s("sawtooth")
  .lpf(sine.range(800, 2500).slow(8))
  .room(0.4)
```

### Arpeggios
```javascript
note("c4 e4 g4 c5".fast(2))
  .s("triangle")
  .decay(0.1)
```

### Pad
```javascript
note("<[c3,e3,g3] [f3,a3,c4]>")
  .s("sawtooth")
  .lpf(1200)
  .room(0.8)
```

## Tips

- Start simple, add complexity gradually
- Use `.slow()` to hear patterns more clearly
- Combine multiple patterns with `stack()`
- Modulate filters for movement
- Add reverb and delay for space
- Use `~` for rhythmic rests
- Press `Ctrl+Enter` to play/stop

## Resources

- [Full Strudel Docs](https://strudel.cc/learn)
- [Pattern Reference](https://strudel.cc/learn/mini-notation)
- [TidalCycles Tutorial](https://tidalcycles.org/docs/patternlib)
