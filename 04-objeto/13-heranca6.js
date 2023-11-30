function Aula(nome, videID) {
  this.nome = nome;
  this.videID = videID;
}

const aula1 = new Aula("Bem Vindo", 123);
const aula2 = new Aula("Até breve", 456);
console.log(aula1, aula2);

// simulando o new
function novo(f, ...params) {
  const obj = {};
  obj.__proto__ = f.__proto__;
  f.apply(obj, params);
  return obj;
}

const aula3 = novo(Aula, "Bem vindo", 123);
const aula4 = novo(Aula, "Até Breve", 456);
console.log(aula3, aula4);
