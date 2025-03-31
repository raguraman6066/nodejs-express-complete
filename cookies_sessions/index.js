const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

app.get("/set-cookie", (req, res) => {
  res.cookie("username", "johnson", { maxAge: 900000, httpOnly: true });
  res.send("Cookie set successfully!");
});

app.get("/get-cookie", (req, res) => {
  let username = req.cookies.username;
  res.send(username ? `Welcome back, ${username}` : "No cookie found!");
});

app.get("/delete-cookie", (req, res) => {
  res.clearCookie("username");
  res.send("Cookie deleted successfully!");
});

// Server Start
app.listen(3000, () => console.log("Server running on port 3000"));
