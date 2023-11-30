// pessoa -> 123 -> {....}
const pessoa = { nome: "João" };
pessoa.nome = "Pedro";
console.log(pessoa);

// pessoa -> 456 -> {...}
// pessoa = { nome: "Ana" }; // da erro pq quero apontar para um novo endereço

Object.freeze(pessoa);

pessoa.nome = "Maria";
pessoa.end = "Rua ABC";
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: "Joao" });
console.log(pessoaConstante);
