Array.prototype.filter2 = function (callback) {
  const novoArray = [];

  for (let i = 0; i < this.length; i++) {
    const retorno = callback(this[i], i, this);
    if (retorno) {
      novoArray.push(this[i]);
    }
  }

  return novoArray;
};

const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad Pro", preco: 4199, fragil: true },
  { nome: "Copo de Vidro", preco: 12.49, fragil: true },
  { nome: "Copo de Plástico", preco: 18.49, fragil: false },
];

const caro = (produto) => produto.preco >= 500;
const fragil = (produto) => produto.fragil;

console.log(produtos.filter2(fragil).filter2(caro));
