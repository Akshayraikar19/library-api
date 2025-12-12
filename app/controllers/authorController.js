const Author = require("../models/Autor")

const authorController = {};

authorController.create = async (req, res) => {
  try {
    const author = await Author.create(req.body);
    return res.status(201).json(author);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

authorController.list = async (req, res) => {
  try {
    const authors = await Author.find();
    return res.json(authors);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = authorController;
