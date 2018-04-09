// Specifically designed to spawn child processes especially when they are node apps

// Include child_process library
var fork = require('child_process').fork;

// Use fork to call honorstudent.js
var child = fork(__dirname + '/honorstudent.js');

// Listen for message from child
child.on('message', function (m) {
    // Send answer to console
    console.log('The answer is:  ', m.answer);
    // Send command 'done' to finish
    child.send({ cmd: 'done' });
});

// fork command on ln 7 invokes double command
child.send({ cmd: 'double', number: 20 });
