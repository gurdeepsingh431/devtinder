const express = require("express");
const app = express();
const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);
app.get("/admin/getAdminData", (req, res) => {
  // Code to fetch admin data
  console.log("Get data called");
  res.send("Admin data received");
});
app.delete("/admin/deleteUser", (req, res) => {
  // Code to delete user
  console.log("Delete data called");
  res.send("User deleted");
});

app.post("/user/login", (req, res) => {
  console.log("User logged in");
  res.send("User logged in");
});
app.get("/user/:paramid", userAuth, (req, res) => {
  console.log(req.query);
  console.log(req.params);
  //code to fetch data from database
  res.send({ firstname: "Gurdeep", lastname: "Singh", age: "23" });
});
app.post("/user", userAuth, (req, res) => {
  //code to save data to database
  res.send("Data successfully saved");
});
app.delete("/user", userAuth, (req, res) => {
  //code to delete data from database
  res.send("Data deleted successfully");
});

app.listen("7777", () => {
  console.log("Successfully created server");
});
