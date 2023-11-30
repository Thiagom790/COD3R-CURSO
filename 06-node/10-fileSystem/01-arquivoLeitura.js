const fs = require("fs");

const caminho = __dirname + "/arquivo.json";

// síncrono...
const conteudo = fs.readFileSync(caminho, "utf-8");
console.log(conteudo);

// assíncrono
fs.readFile(caminho, "utf-8", (err, conteudo) => {
  const config = JSON.parse(conteudo);
  console.log(`${config.db.host}:${config.db.port}`);
});

// isso só vale se eu usar importação do node e se for json
const config = require("./arquivo.json");
console.log(config.db);

fs.readdir(__dirname, (err, arquivos) => {
  console.log("Conteúdo da pasta...");
  console.log(arquivos);
});
