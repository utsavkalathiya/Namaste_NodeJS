const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Dashbord!");
});

app.use("/hello", (req, res) => {
  res.send("Hello from the server");
});

app.use("/test", (req, res) => {
  res.send("Server test is done");
});

app.use("/connect", (req, res) => {
  res.send("server is connected successfully");
});

app.listen(3000, () => {
  console.log("Server is listening successfully on 3000...");
});