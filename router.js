const express = require("express");
const router = express.Router();
const pool = require("./db/queries");

router.get("/:nama/:id?", (req, res) => {
  const nama = req.params.nama;
  const id = req.params.id;
  let query = "";

  if (nama != "film_category") {
    query = `SELECT * FROM ${nama} ORDER BY ${nama + "_id"} ASC`;

    if (id) {
      query = `SELECT * FROM ${nama} WHERE ${nama + "_id"} = ${id}`;
    }
  } else {
    query = `SELECT * FROM film_category`;

    if (id) {
      query = `SELECT category.name, category.category_id, film.title, film.film_id  FROM film_category INNER JOIN category ON film_category.category_id = category.category_id INNER JOIN film ON film_category.film_id = film.film_id WHERE film_category.category_id = ${id}`;
    }
  }

  pool.query(query, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result.rows);
    }
  });
});

module.exports = router;
