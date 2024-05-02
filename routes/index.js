const express = require("express");
const router = express();
const postgre = require("../db")

router.get("/", function (req, res) {
  res.render("index")
  })
  //console.log(data);
  //res.render("index");


module.exports = router;
