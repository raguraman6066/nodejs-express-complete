var express = require("express");
var app = express();
app.listen(5000, function () {
  console.log("server started");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/login1.html");
});

app.get("/login", function (req, res) {
  if (req.query.username == "admin" && req.query.password == "abc@123") {
    res.send("successful login");
  } else {
    res.send("login failed");
  }
});
//fallback fun- else or default case..if not match any url
app.use(function (req, res) {
  res.send("no page found!");
});
