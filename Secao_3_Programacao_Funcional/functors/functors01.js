/**
 * Functors sao objetos que implementam uma funcao MAP.
 * Tambem sao um encapsulamento de valores.
 * Quando o MAP eh chamado, retorna-se um objeto do mesmo
 * tipo do functor.
 *
 * Exemplo: Array.
 */

function TipoSeguro(valor) {
  return {
    valor,
    invalido() {
      return this.valor === null || this.valor === undefined;
    },
    map(fn) {
      return this.invalido() ? TipoSeguro(null) : TipoSeguro(fn(this.valor));
    },
    flatMap() {
      return this.map(fn).valor;
    },
  };
}

const resultado = TipoSeguro("Esse eh um texto").map((t) => t.toUpperCase());
console.log(resultado);
