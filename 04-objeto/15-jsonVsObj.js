const obj = {
  a: 1,
  b: 3,
  c: 3,
  soma() {
    return a + b + c;
  },
};

console.log(JSON.stringify(obj));
// Exemplos de formatos inválidos
// console.log(JSON.parse("{a:1,b:2}"));
// console.log(JSON.parse("{'a':1,'b':2}"));

// Exemplos de formatos válidos
console.log(JSON.parse('{"a":1,"b":2}'));
console.log(JSON.parse('{"a":1.7,"b":"string","c":true,"d":{},"e":[]}'));
