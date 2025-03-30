var express = require("express");
var app = express();
app.listen(5000, function () {
  console.log("server started");
});

var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/login2.html");
});

app.post("/login", function (req, res) {
  console.log(req.body);
  if (req.body.username == "admin" && req.body.password == "abc@123") {
    res.send("successful login");
  } else {
    res.send("login failed");
  }
});
// Fallback route for unknown pages
app.use(function (req, res) {
  res.status(404).send("no page found!");
});
