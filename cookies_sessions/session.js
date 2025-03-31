const express = require("express");
const session = require("express-session");
const app = express();

app.use(
  session({
    secret: "loginSecret",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/login", (req, res) => {
  req.session.user = "Ragu";
  res.send("User logged in!");
});

app.get("/profile", (req, res) => {
  if (req.session.user) {
    res.send(`Welcome to your profile, ${req.session.user}!`);
  } else {
    res.send("Access Denied. Please login!");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.send("User logged out!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
