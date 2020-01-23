const app = require("./config/server");
const Home = require("./app/routes/home")(app);
const noticias = require("./app/routes/noticias")(app);
const formulario = require("./app/routes/formulario_inclusao_noticia")(app);

// Server
app.listen(3333, () => console.log("Servidor rodando na porta 3333"));
