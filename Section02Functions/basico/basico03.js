// Arrow function
const hi = (name) => `Hi ${name}!`;
console.log(hi("John"));

// Numero de parametros variavel
const somar = (...numeros) => {
  // organiza os parametros em um array
  let soma = 0;
  for (let n of numeros) soma += n;
  return soma;
};

console.log(somar(1, 2, 3)); // 6
console.log(somar(1, 2, 3, 4)); // 10

// Retornando funcoes arrow
const potencia = (base) => (exp) => Math.pow(base, exp);
console.log(potencia(2)(10)); // 1024

// Nao eh possivel usar o this com arrow function
Array.prototype.log = function () {
  console.log(this);
};

const numeros = [1, 2, 3];
numeros.log();
