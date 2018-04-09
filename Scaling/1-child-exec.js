// Include child process library
var exec = require('child_process').exec;

// Call to execute linux 'uptime' command
// Same call but piped to 
// var child = exec('uptime | cut -d "," -f 1', function (err, stdout, stderr) {
var child = exec('uptime', function (err, stdout, stderr) {
    // Check for error
    if (err)
        // Log error
        console.log('Error:  ' + stderr);
    else
        // Log output
        console.log('Output is:  ' + stdout);
});

// Log process id
console.log('PID is ' + child.pid);