// Full Trance Track
// Combines multiple elements for a complete trance sound

stack(
  // Kick
  s("bd bd bd bd").gain(0.8),
  
  // Bass
  note("c2 ~ c2 g2 ~ ab2 ~ bb2")
    .s("sawtooth")
    .lpf(300)
    .gain(0.6),
  
  // Lead
  note("c5 e5 g5 b5 c6 b5 g5 e5")
    .s("sawtooth")
    .lpf(sine.range(800, 2500).slow(8))
    .gain(0.5)
    .room(0.4),
  
  // Arp
  note("c4 e4 g4 c5".fast(2))
    .s("triangle")
    .gain(0.3)
    .decay(0.1),
  
  // Hi-hats
  s("~ hh ~ hh")
    .gain(0.2)
)
