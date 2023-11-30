function Pessoa(nome) {
  // dessa forma eu não acesso mais o nome
  //   this.falar = function () {
  //     console.log(`Meu nome é ${nome}`);
  //   };

  this.nome = nome;
  this.falar = function () {
    console.log(`Meu nome é ${this.nome}`);
  };
}

const p1 = new Pessoa("João");
p1.falar();
