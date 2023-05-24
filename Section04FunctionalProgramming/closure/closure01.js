/**
 * Closure é a combinacao/encapsulamento de uma funcao com as referencias 
 * para seu ambiente lexico.
 * Assim, closure se refere a capacidade de uma funcao de acessar elementos
 * de seu escopo lexico mesmo quando executada fora desse escopo.
 * Isso implica que uma funcao pode acessar variaveis fora de seu escopo
 * e, de certa forma, tornar variaveis globais em locais.
 */
const fn = require("./closureEscopo");

const x = 999;

console.log(fn.somarXmais4());
console.log(fn.somarXmais5());
