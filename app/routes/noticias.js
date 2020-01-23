module.exports = function(application) {
  application.get("/noticias", (req, res) => {
    const conn = application.config.dbConnection();
    const noticiasModel = application.app.models.noticiasModel;

    noticiasModel.getNoticias(conn, (error, result) => {
      res.render("noticias/noticias", { noticias: result });
    });
  });
};
