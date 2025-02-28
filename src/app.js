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

app.get(
  "/user",
  (req, res, next) => {
    // res.send("Response!!!");
    console.log("Response...");
    next();
  },
  (req, res, next) => {
    res.send("2nd Response!!");
    console.log("2nd Response...");
    next();
  },
  (req, res, next) => {
    res.send("3nd Response!!");
    console.log("3nd Response...");
    next();
  },
  (req, res, next) => {
    res.send("4nd Response!!");
    console.log("4nd Response...");
    next();
  }
);

app.listen(7777, () => {
  console.log("Server is running....");
});
