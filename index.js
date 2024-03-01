const express = require("express");
const app = express();
const port = 3000;
const pool = require("./db/queries");
const router = require("./router.js");

pool.connect((err, res) => {
  if (err) {
    throw err;
  } else {
    console.log("Connected to database");
  }
});

app.use("/neblix", router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
