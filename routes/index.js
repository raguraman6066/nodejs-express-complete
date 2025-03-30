var express = require("express");
var app = express();
app.listen("5500", function () {
  console.log("server started");
});
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/home.html");
});
app.get("/login", function (req, res) {
  res.sendFile(__dirname + "/login.html");
});
app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/about.html");
});
app.get("/contact", function (req, res) {
  res.sendFile(__dirname + "/contact.html");
});

var router = express.Router();
app.use("/admin", router);
//admin requests
router.get("/dashboard", function (req, res) {
  res.sendFile(__dirname + "/dashboard.html");
});
router.get("/sales", function (req, res) {
  res.sendFile(__dirname + "/sales.html");
});
router.get("/pendings", function (req, res) {
  res.sendFile(__dirname + "/pendings.html");
});
