// Possar acessar com o caminho absoluto
// const moduloA = require("/home/thiago/codigos/cod3r-curso/06-node/03-required/01-moduloA.js");
const moduloA = require("../../01-moduloA");

console.log(moduloA.ola);

const c = require("./pastaC");
console.log(c.ola2);

// const http = require("http");
// http
//   .createServer((req, res) => {
//     res.write("bom dia!");
//     res.end();
//   })
//   .listen(8000);
