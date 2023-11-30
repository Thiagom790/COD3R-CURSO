class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome;
  }
}

class Pai extends Avo {
  constructor(sobrenome, profissao = "Professor") {
    super(sobrenome);
    this.profissao = profissao;
  }
}

class Filho extends Pai {
  constructor() {
    super("Silva");
  }
}

// Em classes só os atributos que mudam são do objeto
// o resto vai tudo para o prototype
const filho = new Filho();
console.log(filho);
