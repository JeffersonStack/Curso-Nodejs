module.exports = function(application) {
  application.get("/noticia", (req, res) => {
    const conn = application.config.dbConnection();
    const noticiasModel = application.app.models.noticiasModel;

    noticiasModel.getNoticia(conn, (error, result) => {
      res.render("noticias/noticia", { noticia: result });
    });
  });
};
