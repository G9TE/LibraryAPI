const Book = require("../models/bookModel");

// Get All Books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Get Single Book by Title
exports.getBookByTitle = async (req, res) => {
  try {
    const book = await Book.findOne({ title: req.params.title });
    if (!book) return res.status(404).json({ message: "Book not found" });

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Add a New Book
exports.addBook = async (req, res) => {
  try {
    const { title, author, genre, totalQuantity } = req.body;

    const bookExists = await Book.findOne({ title });
    if (bookExists) return res.status(400).json({ message: "Book already exists" });

    const book = new Book({ title, author, genre, totalQuantity });
    await book.save();

    res.status(201).json({ message: "Book added successfully", book });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
