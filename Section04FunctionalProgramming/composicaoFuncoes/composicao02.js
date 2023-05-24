/**
 * Composicao de funcoes com assincronismo.
 *
 * OBSERVACAO:
 * Uma maneira de identificar se um parametro em JavaScript eh
 * uma Promise eh:
 *
 * Promise.resolve(2) === 2 // false
 * Promise.resolve(p) === p // true
 */

// Modificar a funcao para processar funcoes async
function composicao(...fns) {
  return function (valor) {
    return fns.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) {
        return fn(await acc);
      } else {
        return fn(acc);
      }
    }, valor);
  };
}

function gritar(texto) {
  return texto.toUpperCase();
}

function enfatizar(texto) {
  return `${texto}!!!`;
}

function tornarLento(texto) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(texto.split("").join(" "));
    }, 2000);
  });
}

const exagerado1 = composicao(gritar, enfatizar, tornarLento);
const exagerado2 = composicao(gritar, enfatizar);

console.time("#1");
console.time("#2");

exagerado1("para")
  .then(console.log)
  .then(() => console.timeEnd("#1"));

exagerado2("cuidado")
  .then(console.log)
  .then(() => console.timeEnd("#2"));
