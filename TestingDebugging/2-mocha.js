// Include should library
var should = require('should');
// Include matfun.js
var fun = require('../Beginner/mathfun');

// Tests for MathFun
describe('MathFun', function () {
    // Tests for synchronous call
    describe('when used synchronously', function () {
        // Should double even numbers
        // Add 'only' to test specific tests - Ex.: it.only('should double even numbers correctly', function () {
        // Add 'skip' to skip specific tests - Ex.: it.skip('should double even numbers correctly', function () {
        it('should double even numbers correctly', function () {
            fun.evenDoublerSync(2).should.equal(4);
        });

        // Should throw error on odds
        it('should throw on odd number', function (done) {
            (function () { fun.evenDoublerSync(3) }).should.throw(/Odd/);
            // Indicate to mocha test is done
            done();
        });
    });

    // Tests for asynchronous call
    describe('when used asynchronously', function () {
        it('should double even numbers correctly', function (done) {
            fun.evenDoubler(2, function (err, results) {
                should.not.exist(err);
                results.should.equal(4);
                done();
            });
        });

        it('should return error on odd numbers', function (done) {
            fun.evenDoubler(3, function (err, results) {
                should.exist(err);
                should.not.exist(results);
                done();
            });
        });
    });
})
