const Book = require("../models/books");

const details = async (req, res) => {
    try {
        const books = await Book.find({});
        console.log('find method is available', books);
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log('find method is not available');
    }
};

const createDetails = async (req, res) => {
    try {
        const { bookName, authorName, stock, releaseDate, category } = req.body;
        const book = new Book({
            bookName,
            authorName,
            stock,
            releaseDate,
            category,
        });
        console.log('fixed the schema', book);
        const createdBook = await book.save();
        res.status(201).json(createdBook);
        console.log("data gets created", createdBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log("something wrong in try");
    }
};

const getDetailsById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (book) {
            res.json(book);
            console.log('got the book details by id', book);
        } else {
            res.status(404).json({ message: "Book not found" });
            console.log('did not get the book details by id', book);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log('error found in getting data by id', error.message);
    }
};

const updateStock = async (req, res) => {
    try {
        const { stock } = req.body;
        const bookId = req.params.id;
        console.log('book id',bookId);
        const updatedBook = await Book.findByIdAndUpdate(
            bookId, 
            { $set: { stock: stock } },
            { new: true, runValidators: true }
        );
        if (updatedBook) {
            res.json(updatedBook);
            console.log('Stock updated:', updatedBook);
        } else {
            res.status(404).json({ message: "Book not found" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteBook = async (req, res) => {
    try {
        const bookId = req.params.id;
        const deletedBook = await Book.findByIdAndDelete(bookId);

        if (deletedBook) {
            res.json({ message: "Book deleted successfully", book: deletedBook });
            console.log('Deleted book:', deletedBook);
        } else {
            res.status(404).json({ message: "Book not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    details,
    createDetails,
    getDetailsById,
    updateStock,
    deleteBook,
};
