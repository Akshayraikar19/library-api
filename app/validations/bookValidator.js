const { checkSchema } = require("express-validator");

const bookValidationSchema = checkSchema({
  title: {
    in: ["body"],
    exists: { errorMessage: "Title is required" },
    notEmpty: { errorMessage: "Title cannot be empty" }
  },

  author: {
    in: ["body"],
    exists: { errorMessage: "Author ID is required" },
    notEmpty: { errorMessage: "Author ID cannot be empty" },
    isMongoId: { errorMessage: "Author ID must be a valid Mongo ID" }
  }
});

module.exports = bookValidationSchema;
