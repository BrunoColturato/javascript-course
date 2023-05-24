// Gerar um array com o dobro dos valores do array original
const arr = [1, 2, 3, 4];
const times2 = (value) => value * 2;

const newArr = arr.map(times2);
console.log(newArr);

// Gerar um array com a letra inicial das strings do array original
const names = ["Ana", "Bruno", "Simone", "Pedro"];
const firstChar = (str) => str[0];

const firstLetter = names.map(firstChar);
console.log(firstLetter);

// Mini desafio
const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const nomesProd = carrinho.map((val) => val.nome);
const custosProd = carrinho.map((val) => val.qtde * val.preco);
console.log(nomesProd);
console.log(custosProd);

// Implementar a funcao map
Array.prototype.myMap = function (callback) {
  let newArr = [];

  for (let i = 0; i < this.length; i++) {
    const result = callback(this[i], i, this);
    newArr.push(result);
  }

  return newArr;
};
