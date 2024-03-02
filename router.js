const express = require("express");
const router = express.Router();
const pool = require("./db/queries");

router.get("/film_category/:id?", (req, res) => {
  const id = req.params.id;
  let query = `SELECT * FROM film_category ORDER BY film_id ASC`;

  if (id) {
    query = `SELECT category.name, category.category_id, film.title, film.film_id  FROM film_category INNER JOIN category ON film_category.category_id = category.category_id INNER JOIN film ON film_category.film_id = film.film_id WHERE film_category.category_id = ${id}`;
  }

  pool.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ message: "Internal server error" });
    } else {
      res.status(200).json(result.rows);
    }
  });
});

router.get("/film/:id?", (req, res) => {
  const id = req.params.id;
  let query = `SELECT * FROM film ORDER BY film_id ASC`;

  if (id) {
    query = `SELECT * FROM film WHERE film_id = ${id}`;
  }

  pool.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ message: "Internal server error" });
    } else {
      res.status(200).json(result.rows);
    }
  });
});

router.get("/category/:id?", (req, res) => {
  const id = req.params.id;
  let query = `SELECT * FROM category ORDER BY category_id ASC`;

  if (id) {
    query = `SELECT * FROM category WHERE category_id = ${id}`;
  }
  pool.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ message: "Internal server error" });
    } else {
      res.status(200).json(result.rows);
    }
  });
});

module.exports = router;
