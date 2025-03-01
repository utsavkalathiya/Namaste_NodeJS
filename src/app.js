const express = require("express");

const app = express();

const { authAdmin, userAuth } = require("./middlewares/auth");

app.use("/admin", authAdmin);

app.get("/user", userAuth, (req, res) => {
  res.send("All users sent...");
});
app.get("/admin/getAllData", (req, res) => {
  res.send("All Data sent...");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("User Deleted...");
});

app.listen(7777, () => {
  console.log("Server is running on 7777....");
});
