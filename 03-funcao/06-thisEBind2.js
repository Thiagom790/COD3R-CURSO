function Pessoa() {
  this.idade = 0;

  //   Como o setInterval chama um temporizador ele fica undefined o this
  //   dessa forma eu posso fazer um bind para resolver
  //   Ou o self para resolver
  const self = this;
  setInterval(
    function () {
      self.idade++;
      console.log(self.idade);
    } /*.bind(this)*/,
    1000
  );
}

new Pessoa();
