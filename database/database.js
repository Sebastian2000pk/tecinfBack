const mysql = require("mysql");
const { promisify } = require("util");

const { database } = require("../config");

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
  if (err) console.log(err);

  if (connection) connection.release();
  console.log("Database is connected");
  return;
});

pool.query = promisify(pool.query);

module.exports = pool;
