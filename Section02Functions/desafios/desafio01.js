/* Implementar funcao tal que: somar(3)(4)(5) = 12 */
function somar(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

console.log(somar(3)(4)(5)); // 12

/* Implementar funcao do formato: calcular(3)(7)(fn) */
const soma = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

function calcular(x) {
  return function (y) {
    return function (fn) {
      return fn(x, y);
    };
  };
}

console.log(calcular(10)(5)(soma)); // 15
console.log(calcular(10)(5)(sub)); // 5
console.log(calcular(10)(5)(mult)); // 50
console.log(calcular(10)(5)(div)); // 2
