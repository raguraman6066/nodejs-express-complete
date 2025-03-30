var express = require("express");
var app = express(); //server obj-start server

app.listen(5000, function () {
  console.log("Server started at http://localhost:5000");
});
app.get("/", function (req, res) {
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
  console.log(req.query);
  console.log(req.body);
  //res.write("hello");
  //res.end(); // Ensure response is completed
  //send=write+end
  //res.send("hi buddy!");
  res.header("content-type", "text/html");
  res.status(200);
  res.sendFile(__dirname + "/login.html");
});
