class Produto {
  constructor(nome, preco, desconto = 0.15) {
    this._nome = nome;
    this._preco = preco;
    this.desc = desconto;
  }

  // Metodos get e set transformam funcoes em atributos publicos
  get preco() {
    return this._preco;
  }

  set preco(novoPreco) {
    if (novoPreco >= 0) {
      this._preco = novoPreco;
    }
  }

  get precoFinal() {
    return this.preco * (1 - this.desc);
  }

  get nome() {
    return `Produto: ${this._nome}`;
  }

  set nome(novoNome) {
    this._nome = novoNome.toUpperCase();
  }
}

const p1 = new Produto("Caneta", 1);
p1.nome = "caneta";

const p2 = new Produto("Geladeira", 3000);
p2.preco = 10000;

console.log(p1.nome, p1.preco, p1.precoFinal);
console.log(p2.nome, p2.preco, p2.precoFinal);
