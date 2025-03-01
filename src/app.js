const express = require("express");

const app = express();

//ab?c  This means B is optional abc and ac will route
// ab+c => this means abbbbbbbc, b can be multiple time but a and c mendaatory
// ab*cd means ab ANYTHNING cd
// a(bc)?d => bc is optional
// a(bc*)d => bc cab be as many times will work

// app.get("/a(bc*)d", (req, res) => {
//   res.send({
//     firstName: "Utsav",
//     lastName: "Kalathiya",
//   });
// });

// app.post("/user", (req, res) => {
//   res.send("Data saved successfully...");
// });

// app.delete("/user", (req, res) => {
//   res.send("Data Deleted successfully...");
// });

app.use("/admin", (req, res, next) => {
  const token = "xyz";
  const isAminAuthorized = token == "xyz";

  if (!isAminAuthorized) {
    res.status(401).send("unauthorised request");
  } else {
    next();
  }
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
