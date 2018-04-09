// Create new buffer
var b = new Buffer('Hello');

// Write buffer to console
console.log(b.toString());

// Write buffer to console as base 64
console.log(b.toString('base64'));

// Create new buffer as base 64 using chaining
var v = new Buffer('World').toString('base64');

// Write buffer to console as utf-8
console.log(b.toString('utf-8', 0, 2));
