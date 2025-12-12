const express = require("express");
const authorController = require("../controllers/authorController");

const router = express.Router();

router.post("/", authorController.create);
router.get("/", authorController.list);

module.exports = router;
