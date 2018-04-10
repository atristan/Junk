// Includes:
var should = require('should'),
    sinon = require('singon');

// Describe what it is your doing; in this case book controller tests
describe('Book Controller Tests', function () {
    // Chain another describe for post tests
    describe('Post', function () {
        it('should not allow an empty title on post', function () {
            // Mock up your book
            var Book = function (book) { this.save = function () { } };

            var req = {
                body: {
                    author: 'Nikola Tesla'
                }
            }

            // Uses sinon framework that creates a spy that keeps track of whats called, who called it, etc.
            var res = {
                status: sinon.spy(),
                send: sinon.spy()
            }

            var bookController = require('../controllers/bookController')(Book);
            bookController.post(req, res);

            // Gives error code with status and what it was called with
            res.status.calledWith(400).should.equal(true, 'Bad Status' + res.status.args[0][0]);
            res.send.calledWith('Title is required.').should.equal(true);
        });
    });
});
