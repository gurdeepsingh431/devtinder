const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connect(
    "mongodb+srv://gs431695:hCUrf0ImUmqmcMBH@learnnamastenode.tixwd.mongodb.net/devTinder"
  );
};
module.exports = { connectDB };
