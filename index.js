const express = require("express");
const app = express();
const port = 3000;
const pool = require("./queries");

app.get("/", (req, res) => {
  pool.query("SELECT * FROM actor", (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result.rows);
  });
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
