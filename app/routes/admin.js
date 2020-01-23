module.exports = function(application) {
  application.get("/formulario_inclusao_noticia", (req, res) => {
    res.render("admin/form_add_noticia");
  });

  application.post("/noticias/salvar", (req, res) => {
    const noticia = req.body;

    const conn = application.config.dbConnection();
    const noticiasModel = application.app.models.noticiasModel;

    noticiasModel.salvarNoticia(noticia, conn, (error, result) => {
      res.redirect("/noticias");
    });
  });
};
