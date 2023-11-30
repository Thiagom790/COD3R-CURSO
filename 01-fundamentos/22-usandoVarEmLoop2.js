const funcs = [];

for (var i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i);
  });
}

// nesse contexto ele da 10 por causa que o var não tem escopo de bloco
funcs[2]();
funcs[8]();
