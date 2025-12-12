require("dotenv").config();
const express = require("express");
const configureDB = require("./config/db");

// Import Routes
const authorRoutes = require("./app/routes/authorRoutes")
const bookRoutes = require("./app/routes/bookRoutes");

const app = express();
app.use(express.json());

// Connect DB
configureDB();

// Routes
app.use("/authors", authorRoutes);
app.use("/books", bookRoutes);

// Start Server
app.listen(process.env.PORT, () => {
  console.log("server running on port", process.env.PORT);
});
