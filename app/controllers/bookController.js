const Book = require("../models/Book")
const Author = require("../models/Autor")
const { validationResult } = require("express-validator");

const bookController = {};

// Create Book
bookController.create = async (req, res) => {
  try {
    // validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const authorExists = await Author.findById(req.body.author);
    if (!authorExists) {
      return res.status(404).json({ message: "Author not found" });
    }

    const book = await Book.create(req.body);
    return res.status(201).json(book);

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Get All Books (pagination + author populate)
bookController.list = async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query;

    const books = await Book.find()
      .populate("author")
      .skip((page - 1) * limit)
      .limit(Number(limit));

    return res.json(books);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Search books by author name
bookController.search = async (req, res) => {
  try {
    const { name } = req.query;

    const author = await Author.findOne({
      name: { $regex: name, $options: "i" }
    });

    if (!author) {
      return res.json([]);
    }

    const books = await Book.find({ author: author._id })
      .populate("author");

    return res.json(books);

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Update Book
bookController.update = async (req, res) => {
  try {
    const updated = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    return res.json(updated);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Delete Book
bookController.remove = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    return res.json({ message: "Book deleted successfully" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = bookController;
