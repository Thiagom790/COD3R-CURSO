const pai = { nome: "Pedro", corCabelo: "preto" };

// Object.create cria o objeto com um protótipo já
const filha1 = Object.create(pai);
filha1.nome = "Ana";
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
  nome: { value: "Bia", writable: false, enumerable: true },
});

console.log(filha2);
filha2.nome = "Carla";
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

// ele também não lista os objetos herdados
console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

// porem o for in já lista a prop
for (const key in filha2) {
  filha2.hasOwnProperty(key)
    ? console.log(key)
    : console.log(`Por herança: ${key}`);
}
