/**
 * Array.reduce(fn, v_inicial).
 * fn(previousValue: number, currentValue: number, currentIndex: number, array: number[]) : number.
 * Caso nao seja passado um valor inicial, o primeiro elemento do array eh o valor inicial.
 * Opera-se entao a partir do segundo elemento.
 */

// Obter valor a ser gasto
const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const getTotal = (item) => item.qtde * item.preco;
const soma = (acc, el) => acc + el;

const gasto = carrinho.map(getTotal).reduce(soma);
console.log(gasto);

// Implementar a funcao reduce
Array.prototype.myReduce = function (fn, inicial) {
  let acc = inicial;

  for (let i = 0; i < this.length; i++) {
    if (!acc && i === 0) {
      acc = this[i];
    } else {
      acc = fn(acc, this[i], i, this);
    }
  }

  return acc;
};
