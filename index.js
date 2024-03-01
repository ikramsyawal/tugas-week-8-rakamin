const express = require("express");
const app = express();
const port = 3000;
const pool = require("./queries");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

pool.connect((err, res) => {
  if (err) {
    throw err;
  } else {
    console.log("Connected to database");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
