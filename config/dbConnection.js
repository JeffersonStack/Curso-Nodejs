const mysql = require("mysql");

const dbMySQL = function() {
  console.log("Banco de dados estabelecida");
  // Connection BD
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "portal_noticias"
  });
};

module.exports = function() {
  console.log("carregou");
  return dbMySQL;
};
