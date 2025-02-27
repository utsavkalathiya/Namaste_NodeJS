const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({
    username: "Utsav Kalathiya",
    age: 23,
    contry: "India",
  });
});

app.listen(7777, () => {
  console.log("Server is listening successfully on 7777...");
});
