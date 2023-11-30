const pessoa = {
  saudacao: "Bom dia",
  falar() {
    console.log(this.saudacao);
  },
};

pessoa.falar();
const falar = pessoa.falar;
falar(); // conflito entre paradigmas: funcional e OO

// O bind eu amarro um objeto a uma função para resolver meu this
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();
