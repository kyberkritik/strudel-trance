// Trance Pluck Arpeggio
// Fast arpeggiated pluck sound

note("c4 e4 g4 c5 g4 e4".fast(2))
  .s("triangle")
  .decay(0.1)
  .sustain(0)
  .lpf(perlin.range(1000, 3000))
  .gain(0.5)
