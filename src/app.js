const express = require("express");
const app = express();

app.use("/test", (req, res) => {
  res.send("This is testing");
});
app.use("/hello", (req, res) => {
  res.send("Hello developers");
});
app.use("/", (req, res) => {
  res.send("This is dashboard home");
});

app.listen("7777", () => {
  console.log("Successfully created server");
});
