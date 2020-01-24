const mysql = require("mysql");

const dbMySQL = function() {
  // Connection BD
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "portal_noticias"
  });
};

module.exports = function() {
  return dbMySQL;
};
