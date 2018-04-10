var bookController = function (Book) {
    var post = function (req, res) {
        var book = new Book(req.body);

        if (!req.body.title) {
            res.status(400);
            res.send('Title is required.');
        }
        else {
            book.save();
            res.status(201);
            res.send(book);
        }

        book.save();
        // Send status created and book
        res.status(201).send(book);
        res.send(book);
    };

    var get = function (req, res) {
        var query = {};

        if (req.query.genre)
            query.genre = req.query.genre;

        Book.find(query, function (err, books) {

            if (err)
                res.status(500).send(err);
            else {
                var returnBooks[];

                // Get links to books
                books.forEach(function (element, index, array) {
                    var tmpBook = element.toJSON();
                    tmpBook.links = {};
                    tmpBook.links.self = 'http://' + req.headers.host + '/api/books/' + tmpBook._id;
                    returnBooks.push(tmpBook);
                });
                //res.json(books);
                res.json(returnBooks);
            }
        });

        // Send back json object as a response
        res.json(resJson);
    };

    // Makes verbs externally available
    return {
        post: post,
        get: get
    }
}

// Makes bookController variable externally available
module.exports = bookController;