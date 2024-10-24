const express = require("express");
const app = express();

app.get("/user/:paramid", (req, res) => {
  console.log(req.query);
  console.log(req.params);
  //code to fetch data from database
  res.send({ firstname: "Gurdeep", lastname: "Singh", age: "23" });
});
app.post("/user", (req, res) => {
  //code to save data to database
  res.send("Data successfully saved");
});
app.delete("/user", (req, res) => {
  //code to delete data from database
  res.send("Data deleted successfully");
});

app.listen("7777", () => {
  console.log("Successfully created server");
});
