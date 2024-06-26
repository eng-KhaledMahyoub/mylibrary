const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const indexRouter = require("./routes/index");
const authorRouter = require("./routes/authors")

app.set("view engine","ejs");
app.set("views",__dirname+"/views");
app.set("layout",__dirname+"/layouts/layout");

app.use(expressLayouts);
app.use(express.static("public"));
app.use("/",indexRouter);
app.use("/authors",authorRouter)



app.listen(process.env.PORT || 3000);
