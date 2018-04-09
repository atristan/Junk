// Include mathfun
var fun = require('../Beginner/mathfun');

// Add listener for 'message' to process
process.on('message', function (m) {
    if (m.cmd === 'double') {
        console.log('hs:  I was asked to double ' + m.number);
        fun.evenDoubler(m.number, function (err, result) {
            // Send JSON with results
            process.send({ answer: result });
        });
    } else if (m.cmd === 'done')
        process.exit();
});
