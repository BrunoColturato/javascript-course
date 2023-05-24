// Funcao construtora
function Produto(nome, preco, desconto = 0.15) {
  this.nome = nome;
  this.preco = preco;
  this._desc = desconto;
  this.teste = 1;

  this.precoFinal = function () {
    return this.preco * (1 - this._desc);
  };
}

Produto.prototype.log = function () {
  console.log(`Nome: ${this.nome}; Preco: R$${this.preco}`);
};

Object.defineProperty(Produto.prototype, "desc", {
  get: function () {
    return `Desconto de ${this._desc * 100}%`;
  },
  set: function (novoDesc) {
    if (novoDesc >= 0 && novoDesc <= 1) {
      this._desc = novoDesc;
    }
  },
});

const p1 = new Produto("Caneta", 1);
const p2 = new Produto("Geladeira", 3000);
p2.desc = 0.5;

p1.log();
console.log(p1.desc);
p2.log();
console.log(p2.desc);
