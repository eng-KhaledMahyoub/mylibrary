const express = require("express");
const router = express();

//all authors
router.get("/", function (req, res) {
  res.render("authors/index");
});
//new authors
router.get("/new", function (req, res) {
  res.render("authors/new");
});
//create author
router.post("/", function (req, res) {
  res.send("author created");
});

module.exports = router;