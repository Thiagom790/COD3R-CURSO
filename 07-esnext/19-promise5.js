function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      con.log();
      if (Math.random() < chanceErro) {
        reject("Ocorreu um erro!");
      } else {
        resolve(valor);
      }
    } catch (err) {
      reject(err);
    }
  });
}

funcionarOuNao("Testando...", 0.5)
  .then((v) => `Valor: ${v}`)
  .then(
    (v) => consol.log(v),
    // O erro ele cai na primeira trativa de erro
    (err) => console.log(`Erro Esp.: ${err}`)
  )
  .then(() => console.log("Quase Fim!"))
  .catch((err) => console.log(`Erro Geral: ${err}`))
  .then(() => console.log("Fim!"));
