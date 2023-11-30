// let tem o escopo de bloco
var numero = 1;
{
  // ou seja aqui não influencia o de fora
  let numero = 2;
  console.log("dentro =", numero);
}
console.log("fora =", numero);
