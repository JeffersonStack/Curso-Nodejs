module.exports = function(application) {
  application.get("/formulario_inclusao_noticia", function(req, res) {
    res.render("admin/form_add_noticia");
  });

  application.post("/noticias/salvar", function(req, res) {
    const noticia = req.body;

    // Validator
    req.assert("titulo", "Titulo é obrigatorio").notEmpty();
    req.assert("resumo", "Resumo é obrigatorio").notEmpty();
    req.assert("resumo", "Tem que conter entre 10 a 100 caract").len(10, 100);
    req.assert("autor", "autor é obrigatorio").notEmpty();
    req
      .assert("data_noticia", "data é obrigatorio")
      .notEmpty()
      .toDate({ format: "YYYY-MM-DD" });
    req.assert("noticia", "Noticia é obrigatorio").notEmpty();

    const errors = req.validationErrors();
    if (errors) {
      res.render("admin/form_add_noticia");
      return;
    }

    const connection = application.config.dbConnection();
    const noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function(error, result) {
      res.redirect("/noticias");
    });
  });
};
