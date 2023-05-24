/**
 * Composicao de funcoes nada mais eh do que passar o resultado
 * de uma funcao f1 para outra f2 chamando a funcao f1 dentro dos
 * parametros de f2:
 *
 * f1( f2(dado1, dado2) )
 */
function composicao(...fns) {
  return function (valor) {
    return fns.reduce((acc, fn) => fn(acc), valor);
  };
}

function gritar(texto) {
  return texto.toUpperCase();
}

function enfatizar(texto) {
  return `${texto}!!!`;
}

function tornarLento(texto) {
  return texto.split("").join(" ");
}

const exagerado = composicao(gritar, enfatizar, tornarLento);
const resultado1 = exagerado("para");
const resultado2 = exagerado("cuidado");

console.log(resultado1);
console.log(resultado2);
