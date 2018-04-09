// Websockets with sockets.io and regular server

// Include http library
var http = require('http');
// Include socket.io
var socketio = require('socket.io');
// Inlude file system library
var fs = require('fs');

// Handles request for url but will always return index.html
var handler = function (req, res) {
    // Use fs to read index.html file
    fs.readFile(__dirname + '/index.html', function (err, data) {
        // If there is an error reading, return 200 error
        if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html.');
        }
        else {
            res.writeHead(200);
            res.end(data);
        }
    });
};

// Socket.io tries to use web sockets for web connections and if it can't, 
// it will default to whatever it can use to do so.  Therefore, to maintain 
// a connection between the client and the server, use the following mechanism
// to explicityly use xhr-polling.
var io = socketio.listen(app);
io.configure(function () {
    io.set('transports', ['xhr-polling']);
});

// Pass named function and store in var
var app = http.createServer(handler);
// Piggyback socket.io server onto server created in previous line
var io = socketio.listen(app);

// Listener for connection event
io.sockets.on('connection', function (socket) {
    // Set interval
    setInterval(function () {
        // Get current date and time
        var timestamp = Date.now();
        // Indicate to console time connection event was emitted
        console.log('Emitted' + timestamp);
        // Emit timer event
        socket.emit('timer', timestamp);
    }, 2000);

    // Listen for submit event
    socket.on('submit', function (data) {
        // Log time data was submitted
        console.log('Submitted:  ' + data);
    })
});

app.listen(8080);

console.log('Server running!');