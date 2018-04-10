// Include express library
var express = require('express');

// Step 1:  Set up basic web server
var app = express();
// Step 2:  Assign port
var port = process.env.port || 3000;
// Step 3:  Set up handler for a route
app.get('/', function (req, res) {
    res.send('Welcome to my API.');
});
// Step 4:  Add listener on port
app.listen(port, function () {
    console.log('Gulp is running my app on PORT:  ' + port);
});