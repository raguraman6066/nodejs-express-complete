var express = require("express");
var app = express();
app.listen(5500, function () {
  console.log("server started");
});
//ejs
var ejs = require("ejs");
app.set("view engine", "ejs");
//mustache
app.get("/", function (req, res) {
  var model = { id: 101, name: "scott", mark: 110 };
  res.render("index", model);
});
app.get("/login", function (req, res) {
  var model = { username: "guest", password: "guest" };
  res.render("login", model);
});
