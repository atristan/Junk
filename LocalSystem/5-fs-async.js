// Include file system library
var fs = require('fs');

// Check if temp folder exists
if (fs.existsSync('temp')) {
    // Warn that directory is being removed
    console.log('Directory exists, removing...');

    if (fs.existsSync('temp/new.txt'))
        fs.unlinkSync('temp/new.txt');

    fs.rmdirSync('temp');
}

fs.mkdir('temp', function (err) {
    fs.exists('temp', function (exists) {
        if (exists) {
            process.chdir('temp');

            fs.writeFile('test.txt', 'This is some text for the file.', function (err) {
                fs.rename('test.txt', 'new.txt', function (err) {
                    console.log('File has size:  ' + stats.size + 'bytes');

                    fs.readFile('new.txt', function (err, data) {
                        console.log('File contents:  ' + data.toString());
                    });
                });
            });
        }
    });
});
