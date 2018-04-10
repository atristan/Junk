// Inlclude express library
//          mongoose library
var   express = require('express')
    , mongoose = require('mongoose')
    , bodyParser = require('body-parser');

// Open connection to the db
// If db doesn't exist it will create it
var db;

if(process.env.ENV == 'Test')
    db = mongoose.connect('mongodb://localhost/[your_database_name]_test');
else
    db = mongoose.connect('mongodb://localhost/[your_database_name]')

var Book = require('./models/bookModel');

// Set up basice web server by executing express
var app = express();

// Set port
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Execute and inject Book
bookRouter = require('./Routes/bookRoutes')(Book);

app.use('/api/books', bookRouter);


app.get('/', function (req, res) {
    res.send('Welcome to my API.');
});

// Listen for requests on specified port
app.listen(port, function () {
    console.log('Gulp is running my app on PORT:  ' + port);
});

module.exports = app;