console.log(soma(3, 4));
// console.log(sub(3, 4)); da erro pq ainda não foi carregado a função
// console.log(mult(3, 4)); da erro pq ainda não foi carregado a função

// function declaration
// dessa forma o interpretador do js já carrega no inicio ela
function soma(x, y) {
  return x + y;
}

// function expression
const sub = function (x, y) {
  return x - y;
};

console.log(sub(3, 4));

// named function expression
const mult = function mult(x, y) {
  return x * y;
};

console.log(mult(3, 4));
