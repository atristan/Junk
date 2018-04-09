// Include http library
var http = require('http');

// Set options
var options = {
    host: 'www.google.com',
    port: 80,
    path: '/',
    method: 'GET'
};

console.log("Going to make request...");

// Make http client request and send to stdout
var req = http.request('http://www.google.com', function (response) {
    // Get http status code
    console.log(response.statusCode);
    // Send response to stdout
    response.pipe(process.stdout);
});

// Make http client request using options and send to stdout
var reqwithopts = http.request(options, function (response) {
    // Get http status code
    console.log(response.statusCode);
    // Send response to stdout
    response.pipe(process.stdout);
});

// Make http client request using options and GET
// Since GET doesn't need to be handled by resonse, no need to take the response
// NOTE:  GET doesn't need to be ended with a end request
http.get(options, function (response) {
    // Get http status code
    console.log(response.statusCode);
    // Send response to stdout
    response.pipe(process.stdout);
});

// End http client request
req.end();
reqwithopts.end();