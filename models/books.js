const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true,
    },
    authorName: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    releaseDate: {
        type: Date,
        required: true, 
    },
    category: {
        type: String,
        enum: ["horror", "comedy", "science-fiction"],
        default: "horror",
    },
});

const Books = mongoose.model('Books', bookSchema);
module.exports = Books;
