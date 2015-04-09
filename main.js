var Firefly = require('./firefly'),
    tools   = require('./utilities');


var fireflyTimer = setInterval(runFirefly, 1000); // initial interval, changes while program is running

/**
 * Run Firefly program
 */
function runFirefly()
{
    if (fireflyTimer) {
        clearInterval(fireflyTimer);
    }
    
    var interval = tools.getRandomArbitrary(3000, 20000),
        fly = new Firefly();

    // attach parent interval for debugging
    fly.setParentInterval(interval);

    fly.setup()
       .start()
       .pause()
       .debug();
        
    // start a new timer
    fireflyTimer = setInterval(runFirefly, interval);
}
