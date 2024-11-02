const express = require("express");
const app = express();
const { connectDB } = require("./config/database");
const { adminAuth, userAuth } = require("./middlewares/auth");
const { User } = require("./models/user");

// app.use("/admin", adminAuth);
// app.get("/admin/getAdminData", (req, res) => {
//   // Code to fetch admin data
//   console.log("Get data called");
//   res.send("Admin data received");
// });
// app.delete("/admin/deleteUser", (req, res) => {
//   // Code to delete user
//   console.log("Delete data called");
//   res.send("User deleted");
// });

// app.post("/user/login", (req, res) => {
//   console.log("User logged in");
//   res.send("User logged in");
// });
// app.get("/user/:paramid", userAuth, (req, res) => {
//   console.log(req.query);
//   console.log(req.params);
//   //code to fetch data from database
//   res.send({ firstname: "Gurdeep", lastname: "Singh", age: "23" });
// });
// app.post("/user", userAuth, (req, res) => {
//   //code to save data to database
//   res.send("Data successfully saved");
// });
// app.delete("/user", userAuth, (req, res) => {
//   //code to delete data from database
//   res.send("Data deleted successfully");
// });
app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User saved successfully");
  } catch (err) {
    res.status(400).send("Error while creating user:" + err.message);
  }
});

app.get("/user", async (req, res) => {
  try {
    const getByUserNames = await User.find({ userName: req.body.userName });
    res.send(getByUserNames);
  } catch (err) {
    res.status(400).send("Error while getting users.");
  }
});

app.get("/feed", async (req, res) => {
  try {
    const getAllUsers = await User.find({});
    res.send(getAllUsers);
  } catch (err) {
    res.status(400).send("Error while getting users.");
  }
});

app.get("/search", async (req, res) => {
  try {
    const searchID = await User.findById(req.body.id);
    res.send(searchID);
  } catch (err) {
    res.status(400).send("Something went wrong while searching user");
  }
});

app.delete("/user", async (req, res) => {
  try {
    const deleteID = await User.findByIdAndDelete(req.body.id);
    console.log(deleteID);

    res.send("User deleted successfully.");
  } catch (err) {
    res.status(400).send("Something went wrong while deleting the user!");
  }
});

app.patch("/user", async (req, res) => {
  try {
    const updateUserData = await User.findByIdAndUpdate(req.body.id, {
      lastName: "Singh",
    });
    res.send("User details updated successfully.");
  } catch (err) {
    res.status(400).send("Something went wrong while updating user details!");
  }
});
connectDB()
  .then(() => {
    console.log("Connection to database successful");
    app.listen("7777", () => {
      console.log("Successfully created server");
    });
  })
  .catch((err) => {
    console.log(err);
  });
