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
Raspberry Pi 2 + Fadecandy, using a 40amp power-supply. Container for the Pi, Fadecandy, and power-supply must be water/weather-proofed. Same goes for all connections for LEDs. 12mm LEDs are already waterproof. A plastic .50-cal ammo canister will be used for the case since they're normally water-resistant and can be made waterproof using silicon.

More details to follow.
