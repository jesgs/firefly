# Firefly
Mimics the blinking patterns of fireflies using 12mm WS2811 LED strings, Fadecandy, and Raspberry Pi. 

To run, use `node main.js`

### main.js
Project controller file. Sets up the random parent interval that drives the Firefly object.

### firefly.js
Represents an individual LED — color, number of blinks, and blink-rate.

### utilities.js
Utility functions

## Hardware
Raspberry Pi 2 + Fadecandy, using a 40-amp power-supply. Container for the Pi, Fadecandy, and power-supply must be water/weather-proofed. Same goes for all connections for LEDs. 12mm LEDs are already waterproof. A plastic .50-cal ammo canister will be used for the case as they are normally water-resistant and can be made waterproof by using a silicon gasket, or applying silicon to the existing lid channel.

### Ammo canister dimensions: 
+ 7.4" (L) x 13.5" (W) x 8.5" (H)
+ Inside Dimensions: 5.8" (L) x 11" (W) x 7.2" (H)

### Needed:
+ Rubber grommets of various sizes (for waterproofing screw-holes and cord-access)

### Have:
+ Ammo canister
+ Silicon — black RTV (usually found at O'Reilly's or NAPA stores)
+ Outdoor extension cord
+ Plasti Dip (for additional waterproofing of cords and access-points)

More details to follow.
