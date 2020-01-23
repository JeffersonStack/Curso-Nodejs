module.exports = function(app) {
  app.get("/noticias", (req, res) => {
    const mysql = require("mysql");

    // Connection BD
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "portal_noticias"
    });

    connection.query("select * from noticias", (error, result) => {
      res.render("noticias/noticias", { noticias: result });
    });
  });
};
