/**
 * Higher Order Functions: funcoes que aceitam outras funcoes
 * como parametros de entrada ou cujo valor de retorno seja
 * uma funcao.
 */
function executar(fn, ...params) {
  return function (texto) {
    return `${texto} ${fn(...params)}`;
  };
}

const somar = (a, b, c) => a + b + c;
const mult = (a, b) => a * b;

const r1 = executar(somar, 4, 5, 6)("O resultado da soma eh:");
const r2 = executar(mult, 30, 40)("O resultado da multiplicacao eh:");

console.log(r1);
console.log(r2);
