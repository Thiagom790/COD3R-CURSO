const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post("/usuarios", function (req, res) {
  console.log(req.body);
  res.send("<h1>Parabéns. Usuário Incluído!</h1>");
});

app.post("/usuarios/:id", function (req, res) {
  console.log(req.body);
  console.log(req.params.id);
  res.send("<h1>Parabéns. Usuário Alterado!</h1>");
});

app.listen(3003, () => console.log("listening on port 3003"));
