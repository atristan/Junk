// Include the assert library
var assert = require('assert');
// Include mathfun
var fun = require('../Beginner/mathfun');

// Assert synchronous evenDoubler will result in 4
assert.equal(fun.evenDoublerSync(2), 4);

// Asssert that if odd number passed in, will result in error
assert.throws(function () {
    fun.evenDoublerSync(3);
}, /Odd/);

fun.evenDoubler(2, function (err, results) {
    assert.ifError(err);
    assert.equal(results, 4, "evenDouble failed on even number.");
});

// Assert asynchronous evenDoubler will result in error with an odd value
fun.evenDoubler(3, function (err, results) {
    assert.notEqual(err, null);
});
