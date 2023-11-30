const fs = require("fs");

const produto = {
  nome: "Celular",
  preco: 1249.99,
  desconto: 0.15,
};

const caminhoArquivo = __dirname + "/arquivoGerado.json";

fs.writeFile(caminhoArquivo, JSON.stringify(produto), (err) => {
  console.log(err || "Arquivo salvo");
});
