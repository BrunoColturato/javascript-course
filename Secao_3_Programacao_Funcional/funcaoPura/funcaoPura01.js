/*
 * Uma funcao pura eh aquela em que o valor de retorno eh
 * determinado APENAS por seus valores de entrada, sem
 * efeitos colaterais observaveis.
 *
 * Um efeito colateral seria a mudanca de algum valor externo
 * a funcao.
 */

const PI = 3.1415;

// Impura, pois depende de um valor externo.
// Ao mudar o valor de PI (seja a constante ou a Math.PI),
// muda-se o valor da saida dado uma mesma entrada.
function areaCirc(raio) {
  return raio * raio * PI;
}

console.log(areaCirc(10));

// Pura: o retorno depende apenas dos parametros de entrada
function areaCircPura(raio, pi) {
  return raio * raio * pi;
}

console.log(areaCircPura(10, Math.PI));
