// hoisting é o issamento
console.log("a =", a);
var a = 2; // não da erro em js por causa do hoisting
console.log("a =", a);

// console.log("b = ", b); // da erro com let
let b = 2;
console.log("b = ", b);
