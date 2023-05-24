// Funcao construtora
function Produto(nome, preco, desconto = 0.15) {
  this.nome = nome;
  this.preco = preco;
  this.desc = desconto;

  this.precoFinal = function () {
    return this.preco * (1 - this.desc);
  };
}

const p1 = new Produto("Caneta", 1);
const p2 = new Produto("Geladeira", 3000);

console.log(p1.nome, p1.preco, p1.precoFinal());
console.log(p2.nome, p2.preco, p2.precoFinal());
