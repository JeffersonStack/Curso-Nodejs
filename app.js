const app = require("./config/server");

// PORT
const PORT = 3333;

// Server
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
