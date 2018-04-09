var request = require('request');
var s = request('http://www.pluralsight.com');

s.on('data', function (chunk) {
    console.log(">>> DATA <<< " + chunk);
});

s.on('end', function () {
    console.log(">>> DONE! <<<");
});
