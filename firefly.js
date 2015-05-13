var OPC         = new require('./opc'),
    client      = new OPC('firefly.local', 7890),
    tools       = require('./utilities'),
    colors = [
        [255, 26, 24], // red
        [255, 155, 125], // red
        [255, 163, 23], // orange 1
        [255, 181, 23], // orange 2
        [237, 247, 1], // yellow
        [253, 253, 199], // yellow,
        [233, 255, 11], // green
        [190, 253, 15], // green 2
        [199, 229, 255], // blue
        [102, 184, 255] // blue
    ];

/**
 * @todo Add getters/setters for parent interval and colors
 */

/**
 * Firefly object
 *
 * @constructor
 */
var Firefly = function()
{
    this.setup();
};


/**
 * Setup object
 */
Firefly.prototype.setup = function() {
    this.count         = 0;
    this.blinkInterval = tools.getRandomArbitrary(100, 500);
    this.setBlinkRate(tools.getRandomArbitrary(1, 10));
    this.setColor(colors[ Math.round( Math.random() * (colors.length - 1)) ]);

    return this;
};


/**
 * Turn off all pixels
 */
Firefly.off = function(totalPixels) {
    // turn off all pixels
    for (var i = 0; i < totalPixels; i++) {
        client.setPixel(i, 0, 0, 0);
    }
    client.writePixels();
};


/**
 * Start blink timer
 */
Firefly.prototype.start = function() {
    this.blinkTimer    = setInterval(this.flash.bind(this), this.blinkInterval);

    return this;
};


/**
 * Flash the pixel
 */
Firefly.prototype.flash = function() {
    var blink = this.getBlinkRate();
    if (this.count > blink) {
        clearInterval(this.blinkTimer);
        this.count = 0;
    }

    var pixel = this.getPixel(),
        color = this.getColor(),
        r = color[0],
        g = color[1],
        b = color[2];

    if (this.count % 2) {
        client.setPixel(pixel, r, g, b);
    } else {
        client.setPixel(pixel, 0, 0, 0);
    }

    client.writePixels();
    this.count++;
};


/**
 * Brief pause before next pixel
 */
Firefly.prototype.pause = function() {
    // pause
    setTimeout(function(){}, 500);
    return this;
};


/**
 * Output basic debugging information
 */
Firefly.prototype.debug = function()
{
    console.log(
        "Parent Interval: " + (this.getParentInterval() / 1000).toString() + " secs | ",
        "Flash Interval: " + (this.blinkInterval / 1000).toString() + " secs | ",
        "Flash Rate: " + Math.round(this.getBlinkRate() / 2).toString() + " flashes | ",
        "Pixel: " + this.getPixel()
    );

    return this;
};


/**
 * Return the current color
 *
 * @returns {*}
 */
Firefly.prototype.getColor = function() {
    return this.color;
};


/**
 * Set pixel color
 *
 * @param {array} color Color array. RGB represented by [100, 100, 100]
 */
Firefly.prototype.setColor = function(color) {
    this.color = color;
};


/**
 * Get current blink-rate
 * @returns {number|*}
 */
Firefly.prototype.getBlinkRate = function() {
    return this.blinks;
};


/**
 * Set blink-rate
 * @param blinkRate
 */
Firefly.prototype.setBlinkRate = function(blinkRate) {
    this.blinks = blinkRate;
};


/**
 * Get current pixel
 * @returns {number|*}
 */
Firefly.prototype.getPixel = function() {
    return this.pixel;
};


/**
 * Set current pixel
 * @param pixel
 */
Firefly.prototype.setPixel = function(pixel) {
    this.pixel = pixel;
};


/**
 * Return parent interval
 * @returns {Firefly.parentInterval|*}
 */
Firefly.prototype.getParentInterval = function() {
    return this.parentInterval;
};


/**
 * Set parent interval
 * @param interval
 */
Firefly.prototype.setParentInterval = function(interval) {
    this.parentInterval = interval;
};

module.exports = Firefly;