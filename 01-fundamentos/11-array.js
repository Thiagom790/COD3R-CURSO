const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); // não da erro em js

valores[4] = 10;
console.log(valores);
console.log(valores.length);

valores.push({ id: 2 }, false, null, "teste");
console.log(valores);

console.log(valores.pop()); // remove o ultimo elemento do array
delete valores[0]; // ele deleta mas mantem o indice
console.log(valores);

console.log(typeof valores);
