const contadorA = require("./01-instanciaUnica");
const contadorB = require("./01-instanciaUnica");

const contadorC = require("./02-instanciaNova")();
const contadorD = require("./02-instanciaNova")();

contadorA.inc();
contadorA.inc();
// tem o mesmo valor que a instancia de A
console.log(contadorA.valor, contadorB.valor);

// nesse caso são novas instancias
contadorC.inc();
contadorC.inc();
console.log(contadorC.valor, contadorD.valor);
