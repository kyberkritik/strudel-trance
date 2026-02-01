// Classic Trance Lead
// Uplifting melodic lead with filter modulation

note("c5 e5 g5 b5 c6 b5 g5 e5")
  .s("sawtooth")
  .lpf(sine.range(800, 3000).slow(8))
  .gain(0.6)
  .room(0.5)
  .delay(0.25)
