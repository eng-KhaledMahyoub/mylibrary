const express = require("express");
const router = express();
const postgre = require("../db")

router.get("/", function (req, res) {
  postgre.query("select * from students",function (error,result){
    if(error)throw error
    res.send(result.rows)
  })
  //console.log(data);
  //res.render("index");

});

module.exports = router;
