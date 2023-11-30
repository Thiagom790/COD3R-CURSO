const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

const mulheres = (f) => f.genero === "F";
const chineses = (f) => f.pais === "China";
const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual;
};

axios.get(url).then((response) => {
  const funcionarios = response.data;

  // mulher chinesa com menor salário
  const mulherChinesaMenorSalario = funcionarios
    .filter(mulheres)
    .filter(chineses)
    .reduce(menorSalario);

  console.log(mulherChinesaMenorSalario);
});
