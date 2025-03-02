const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Sachin",
    lastName: "Tendulkar",
    emailID: "sachin@gmail.com",
    password: "Sachin@123",
  });
  try {
    await user.save();
    res.send("User Added Successfully..");
  
  } catch (err) {
    res.status(400).send("Error adding User.." + err.message);
  };
});

connectDB()
  .then(() => {
    console.log("Connection successfully done..");
    app.listen(7777, () => {
      console.log("Server is running on 7777....");
    });
  })
  .catch((err) => {
    console.error("Connection cannot be done..");
  });
