// instalando pacote global com npm
// npm i -g nodemon
// rs restarta nodemon
const _ = require("lodash");

setInterval(() => {
  console.log(_.random(5, 10));
}, 2000);
