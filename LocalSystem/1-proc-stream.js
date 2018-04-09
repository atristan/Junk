// Unpause stdin; paused by default
process.stdin.resume();
process.stdin.setEncoding('utf8');

// Listen for data coming in on stdin and write to stdout
process.stdin.on('data', function (chunk) {
    process.stdout.write('Data! ->' + chunk);
});

// Listen for the end and write using
process.stdin.on('end', function () {
    process.stderr.write('End!\n');
});

// Listen for POSIX command called SIGTERM (kill -TERM [processid] - kill process from outside the running code).
process.on('SIGTERM', function () {
    process.stderr.write('Why are you trying to terminate me?!?  :)');
});

// Get process id
console.log('Node is running as process #' + process.pid);
