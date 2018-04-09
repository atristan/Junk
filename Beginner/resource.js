// Required for inheriting
var util = require('util');
var EventEmitter = require('events').EventEmitter;

function Resource(m) {
    var maxEvents = m;
    var self = this;

    process.nextTick(function () {
        var count = 0;
        self.emit('start');
        var t = setInterval(function () {
            self.emit('data', ++count);
            if (count === maxEvents) {
                self.emit('end', count);
                clearInterval(t);
            }
        });
    }, 10);
};

// Have Resource inherit from EventEmitter.
util.inherits(Resource, EventEmitter);

// Make Resource function visibe.
module.exports = Resource;