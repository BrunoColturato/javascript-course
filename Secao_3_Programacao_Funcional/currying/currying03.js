/**
 * Continuacao de currying
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

function validar(fn) {
  return function (valor) {
    try {
      fn(valor);
    } catch (e) {
      return { error: e };
    }
  };
}

const comTamanhoPadrao = textoComTamanhoEntre(4)(255);
const comErroPadrao = comTamanhoPadrao("Nome de produto inválido!");
const validarNomeProduto = validar(comErroPadrao);

const p1 = { nome: "A", preco: 14.99, desc: 0.25 };
console.log(validarNomeProduto(p1.nome));
