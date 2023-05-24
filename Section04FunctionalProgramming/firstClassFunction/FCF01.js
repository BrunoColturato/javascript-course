/**
 * Uma linguagem de programacao possui funcoes de primeira
 * classe quando funcoes sao tratadas pela linguagem como
 * uma variavel qualquer.
 *
 * Em outras palavras, eh possivel armazenar funcoes em
 * variaveis.
 */

const x = 3;
const y = function (txt) {
  return `O texto eh: ${txt}`;
};
const z = () => console.log("zzzz");

console.log(x);
console.log(y("Ola"));
z();
