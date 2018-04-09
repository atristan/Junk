// Include the file system library
var fs = require('fs');

// Check if directory exists
if (fs.existsSync('temp')) {
    // If so, indicate you're about to remove it
    console.log('Directory exists, removing...');

    // Check if new.txt exists in temp
    if (fs.existsSync('temp/new.txt')) {
        fs.unlinkSync('temp/new.txt');
    }

    // Remove the directory
    fs.rmdirSync('temp');
}

// Create directory
fs.mkdirSync('temp');

// If directory exists...
if (fs.existsSync('temp')) {

    // Change to that directory
    process.chdir('temp');

    // Create a text file with some text
    fs.writeFileSync('test.txt', 'This is some text for the file.');

    // Rename text file
    fs.renameSync('test.txt', 'new.txt');

    // Write simple stats on file
    console.log('File has size:  ' + fs.statSync('new.txt').size + 'bytes');
    console.log('File contents:  ' + fs.readFileSync('new.txt').toString());
}