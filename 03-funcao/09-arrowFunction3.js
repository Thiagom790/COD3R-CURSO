let comparaComThis = function (param) {
  console.log(this === param);
};

comparaComThis(global);

const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

// nesse momento o this é o modulo
let comparaComThisArrow = (param) => console.log(this === param);
comparaComThis(global); // da erro pq o this não é o global
comparaComThisArrow(module.exports);

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj); // a arrow function é mais forte que o bind
