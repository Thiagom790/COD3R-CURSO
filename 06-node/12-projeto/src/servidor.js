const express = require("express");

// porta é um processo no computador
const porta = 3003;
const app = express();
const bancoDeDados = require("./bancoDeDados");

// Exemplos de middlewares
// app.get("/produtos", (req, res, next) => {
//   console.log("Middleware 1...");
//   next();
// });
// app.use("/produtos", (req, res, next) => {
//   console.log("Middleware 2...");
//   next();
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/produtos", (req, res, next) => {
  //   res.send({ nome: "Notebook", preco: 123.45 }); //Converte para Json
  res.send(bancoDeDados.getProdutos());
});

app.get("/produtos/:id", (req, res) => {
  res.send(bancoDeDados.getProduto(req.params.id));
});

app.post("/produtos", (req, res) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.name,
    preco: req.body.preco,
  });

  res.send(produto);
});

app.put("/produtos/:id", (req, res) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.name,
    preco: req.body.preco,
  });

  res.send(produto);
});

app.delete("/produtos/:id", (req, res) => {
  const produto = bancoDeDados.excluirProduto(req.params.id);

  res.send(produto);
});

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}.`);
});
