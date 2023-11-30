/* O array em js é um objeto
 * A linguagem não tem um tipo nativo array
 * Ele é um objeto que indexa com números
 */

console.log(typeof Array, typeof new Array(), typeof []);

let aprovados = new Array("Bia", "Carlos", "Ana");
console.log(aprovados);

aprovados = ["Bia", "Carlos", "Ana"];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = "Paulo";
aprovados.push("Abia");
console.log(aprovados.length);
aprovados[9] = "Rafael";
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados);
// Altera o array original
aprovados.sort();
console.log(aprovados);

// ele seta o item como undefined
delete aprovados[1];
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ["Bia", "Carlos", "Ana"];
/* No exemplo abaixo a partir do índice 1 ele exclui 1 elementos
 * Em seguida adiciona 2
 * Ou seja ele excluí depois adiciona
 */
aprovados.splice(1, 1, "Elemento1", "Elemento2");
console.log(aprovados);
