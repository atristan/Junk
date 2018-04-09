// Include request library
var request = require('request');
// Include file system library
var fs = require('fs');
// Include zip library
var zlib = require('zlib');

// Sending request to standard out
// Get html from request
var s = request('http://www.pluralsight.com');
// Pipe to console
s.pipe(process.stdout);

// Sending request to standard out via chaining
// Chain methods together
request('http://www.pluralsight.com').pipe(process.stdout);

// Sending request to a file via chaining
// Create writable stream and store in file 'pluralsight.html'
request('http://pluralsight.com').pipe(fs.createWriteStream('pluralsight.html'));

// Sending request to a zip file via chaining
request('http://pluralsight.com').pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight.html.gz'))