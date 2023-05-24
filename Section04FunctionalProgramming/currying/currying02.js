/**
 * Versao com currying.
 * Vemos aqui o conceito de lazy evaluation: demorar para avaliar a funcao.
 *
 * Com o currying eh possivel criar varias versoes de uma mesma funcao.
 * Com o uso do Closure, uma funcao "intermediaria" vai sempre se lembrar dos
 * parametros passados para a "funcao pai" ou "original".
 * Assim o currying traz a vantagem de poder reusar partes de funcoes sem ter
 * que definir novas funcoes. Reaproveita-se a logica do programa.
 */
function textoComTamanhoEntre(min) {
  return function (max) {
    return function (erro) {
      return function (texto) {
        const tamanho = (texto || "").trim().length;

        if (tamanho < min || tamanho > max) {
          throw erro;
        }
      };
    };
  };
}

const comTamanhoPadrao = textoComTamanhoEntre(4)(255);
const comErroPadrao = comTamanhoPadrao("Nome de produto inválido!");

const p1 = { nome: "Aberto", preco: 14.99, desc: 0.25 };
comErroPadrao(p1.nome);
