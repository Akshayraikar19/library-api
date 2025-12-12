const express = require("express");
const bookController = require("../controllers/bookController");
const bookValidation = require("../validations/bookValidator")

const router = express.Router();

router.post("/", bookValidation, bookController.create);
router.get("/", bookController.list);
router.get("/search", bookController.search);
router.put("/:id", bookController.update);
router.delete("/:id", bookController.remove);

module.exports = router;
