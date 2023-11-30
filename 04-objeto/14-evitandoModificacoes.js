// Object.preventExtensions - Previne que adicionamos novos atributos
const produto = Object.preventExtensions({
  nome: "Qualquer",
  preco: 1.99,
  tag: "Promocao",
});

// checa se podemos extender o objeto para adicionar mais attr
console.log("Extensível", Object.isExtensible(produto));

produto.nome = "Borracha";
produto.descricao = "Borracha escolar branca";
delete produto.tag;
console.log(produto);

// Object.seal - Não deixa excluir ou adicionar os attr do objeto
const pessoa = { nome: "Juliana", idade: 35 };
Object.seal(pessoa);
console.log("Selado:", Object.isSealed(pessoa));

pessoa.sobrenome = "Silva";
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);

// Object.freeze = selado + valores constantes
