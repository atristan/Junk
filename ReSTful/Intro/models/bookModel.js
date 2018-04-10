// Include mongoose library
var   mongoose = require('mongoose')
    , Schema = mongoose.Schema();

var bookModel = new Schema({
    title: { type: String },
    author: { type: String },
    genre: { type: String },
    read: { type: Boolean, default: false }
});

// Tells mongoose model exists and can be used
module.exports = mongoose.model('Book', bookModel);