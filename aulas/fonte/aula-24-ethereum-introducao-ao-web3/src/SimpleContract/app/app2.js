const express = require("express");
const app = express();
const port = 8888;

app.get("/", function (req, res) {
  // res.send("Hello World!");
  console.log("OK");
  res.sendFile(__dirname + "/src/index.html");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});