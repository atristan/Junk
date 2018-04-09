// Using resource.js
var Resource = require('./resource');

// Initialize r as new Resource
var r = new Resource(7);

r.on('start', function () {
    console.log("Started...");
});

r.on('data', function (d) {
    console.log("   Data recieved -> " + d);
});

r.on('end', function (t) {
    console.log("Ended with " + t + " data events.");
});
