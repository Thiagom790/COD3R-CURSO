const ferrari = {
  modelo: "F40",
  velMax: 324,
};

const volvo = {
  modelo: "V40",
  velMax: 200,
};

console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype); // é o propotype de mais alto nível
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null); // depois dele não tem nada

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);
