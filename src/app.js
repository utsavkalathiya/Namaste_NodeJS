const express = require("express");

const app = express();

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong..");
  }
});
app.get("/getUserData", (req, res) => {
  
  throw new Error("asjdvcjvsd");
  res.send("data is here..");
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong..");
  }
});

app.listen(7777, () => {
  console.log("Server is running on 7777....");
});
