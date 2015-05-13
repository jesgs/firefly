var Firefly = require('./firefly'),
    tools   = require('./utilities'),
    maxNumBugs = 100;


var fireflyTimer = setInterval(runFirefly, 1000); // initial interval, changes while program is running

Firefly.off(maxNumBugs);

/**
 * Run Firefly program
 */
function runFirefly()
{
    if (fireflyTimer) {
        clearInterval(fireflyTimer);
    }

    Firefly.off(maxNumBugs);

    var interval = tools.getRandomArbitrary(3000, 10000),
        fly = new Firefly();

    // attach parent interval for debugging
    fly.setParentInterval(interval);
    fly.setPixel( tools.getRandomArbitrary(0, maxNumBugs) );
    fly.setup()
       .start()
       .pause()
       .debug();

    // start a new timer
    fireflyTimer = setInterval(runFirefly, interval);
}