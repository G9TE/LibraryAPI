const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  totalQuantity: { type: Number, required: true },
  checkedOut: { type: Number, default: 0 },
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
