// Include express library
var express = require('express');

var routes = function (Book) {
    // Create an instance of a router
    var bookRouter = express.Router();
    
    // Create instance of book controller
    var bookController = require('../controllers/bookController')(Book);

    // Set up routes
    bookRouter.route('/')
        .get(bookController.get());

    // Implementing middleware (next forces function to pass on req to continue processing client req
    bookRouter.use('/:bookId', function (req, res, next) {
        Book.findById(req.params.bookId, function (err, book) {
            // Check for error
            if (err)
                res.status(500).send(err);
            else if (book) {
                req.book = book;
                next();
            }
            else
                res.status(404).send('no book found');
        });
    });

    // Creating a book route
    bookRouter.route('/:bookId')
        .delete(function (req, res) {
            req.book.remove(function (err) {
                if (err)
                    res.status(500).send(err);
                else
                    res.status(204).send('Removed');
            });
        })
        .patch(function (req, res) {
            if (req.body._id)
                delete req.body._id;
            for (var p in req.body) {
                req.book[p] = req.body[p];
            }

            req.book.save(function (err) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(req.book);
            });
        })
        .put(function (req, res) {
            req.book.title = req.body.title;
            req.book.author = req.body.author;
            req.book.genre = req.body.genre;
            req.book.read = req.body.read;
            req.book.save(function (err) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(req.book);
            });
            res.json(book);
        })
        .post(bookController.post)
        .get(function (req, res) {
            var returnBook = req.book.toJSON();
            returnBook.links = {};
            var booklink = 'http://' + req.headers.host + '/api/books/?genre=' + returnBook.genre;
            returnBook.links.FilterByGenre = newLink.replace(' ', '%20');
            res.json(returnBook);
            //res.json(req.book);

            // Old Way
            // Json response to test
            //var resJson = { hello: 'This my api.' };

            // Send back json object as a response
            //res.json(resJson);
        });
    return bookRouter;
};

module.exports = routes;
