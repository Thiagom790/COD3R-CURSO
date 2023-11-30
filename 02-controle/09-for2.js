const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

// se eu não definir o índice como const ou let eu acesso ele depois
for (i in notas) {
  console.log(i, notas[i]);
}

console.log(i);

const pessoa = {
  nome: "ana",
  sobrenome: "Silva",
  idade: 29,
  peso: 64,
};

for (const atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`);
}
