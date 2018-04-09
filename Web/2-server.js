// Using node to run a simple web server

// Include file system library
var fs = require('fs');
// Include http library
var http = require('http');

// Create the web server
http.createServer(function (req, res) {
    // Write headers to response
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Check if url is a txt file
    if (req.url === 'file/txt')
        // Create readable stream and pip contents of the text file to the response; __dirname tells you where script is running from
        fs.createReadStream(__dirname + '/file.txt').pipe(res);
    else
        res.end('Hello world!');
}).listen(process.env.PORT, process.env.IP);

console.log('Server running!');
