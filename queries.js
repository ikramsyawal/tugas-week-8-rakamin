const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "tugas-week-8-rakamin",
  password: "1234",
  port: 5432,
});

module.exports = pool;
