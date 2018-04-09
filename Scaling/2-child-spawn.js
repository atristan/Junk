// Inspired by http://nodejs.org/api/child_process.html

// Feed data to stdin and out while process is running

// Include child_process
var spawn = require('child_process').spawn
    , ps = spawn('ps', ['ax'])
    , grep = spawn('grep'['node']);

// Take stdout of ps command and pipe into grep stdin
ps.stdout.pipe(grep.stdin);
// Take stdin of grep and pipe to process stdout
grep.stdout.pipe(process.stdout);

// Listener for errors on ps command
ps.stderr.on('data', function (data) {
    console.log('ps stderr:  ' + data);
});

// Listener for errors on grep command
grep.stderr.on('data', function (data) {
    console.log('grep stderr:  ' + data);
});