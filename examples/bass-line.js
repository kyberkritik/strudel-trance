// Trance Bass Line
// Deep rolling bassline

note("c2 ~ c2 g2 ~ ab2 ~ bb2")
  .s("sawtooth")
  .lpf(300)
  .gain(0.7)
  .cutoff(perlin.range(200, 400))
