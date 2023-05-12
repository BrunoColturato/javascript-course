/**
 * A lazy evaluation utiliza-se tanto de Closure quanto de
 * Currying de forma a podermos reutilizar uma mesma funcao
 * com diferentes parametros "secundarios" (currying) com a
 * possibilidade de evitar um reprocessamento desnecessario
 * de dados (closure).
 */

function eager(a, b) {
  // simulando processamento
  const fim = Date.now() + 2500;
  while (Date.now() < fim) {}

  const valor = Math.pow(a, 3);
  return valor + b;
}

function lazy(a) {
  // simulando processamento pesado
  const fim = Date.now() + 2500;
  while (Date.now() < fim) {}

  const valor = Math.pow(a, 3);

  return function (b) {
    return valor + b;
  };
}

console.time("#1");
console.log(eager(3, 100));
console.log(eager(3, 200));
console.log(eager(3, 300));
console.timeEnd("#1"); // 7500ms

console.time("#2");
const lazy3 = lazy(3);
console.log(lazy3(100));
console.log(lazy3(200));
console.log(lazy3(300));
console.timeEnd("#2"); // 2500ms
