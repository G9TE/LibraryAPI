const express = require("express");
const { getAllBooks, getBookByTitle, addBook } = require("../controllers/bookController");

const router = express.Router();

router.get("/", getAllBooks);
router.get("/:title", getBookByTitle);
router.post("/", addBook);

module.exports = router;
