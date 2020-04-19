const app = require('./config/express')();
const port = app.get('port');

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bem vindo ao Rota Eats - API." });
});

// set port, listen for requests
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});