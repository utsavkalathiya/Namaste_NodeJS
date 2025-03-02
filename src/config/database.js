const mongoose = require("mongoose");

const connectionURL =
  "mongodb+srv://utsavkalathiya811:FzwkCJj2jvWHFiQA@cluster1.2oomi.mongodb.net/DevTinder";

const connectDB = async() => {
  await mongoose.connect(connectionURL);
};

module.exports = connectDB;