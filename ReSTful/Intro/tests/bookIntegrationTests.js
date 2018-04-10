// Includes
var should = require('should')
    , request = require('supertest')
    , app = ('../app.js')
    , mongoose = require('mongoose')
    , Book = mongoose.model('Book')
    , agent = request.agent(app);

describe('Book CRUD Test', function () {
    // Individual tests
    it('should allow a book to be posted and return a read and _id', function (done) {
        // Step 1:  Create book to test
        var bookPost = { title: 'new book', author: 'noone', genre: 'fiction' };

        // Step 2:  Setup agent to run tests
        agent.post('/api/books')
            .send(bookPost)
            .expect(200)
            .end(function(err, results){
                results.body.read.should.equal(false);
                results.body.should.have.property('_id');
                // Lets supertest know this test is done and move on to the next thing.
                done();
            });
    });

    // Step 3:  Clear test data from db.
    afterEach(function (done) {
        Book.remove().exec();
        done();
    });
});
