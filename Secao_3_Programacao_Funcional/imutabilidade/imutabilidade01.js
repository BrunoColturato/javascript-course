/**
 * A ideia eh nao modificar variaveis, mas criar copias.
 */

// A funcao sort() muda o array original (funcao impura).
// Para respeitar a imutabilidade, cria-se uma copia do array e
// ordena-se a copia.
const arr = [3, 1, 17, 9, 4, 6];

function mySort(arr) {
  return [...arr].sort((n1, n2) => n1 - n2);
}

console.log(mySort(arr));
console.log(arr);

/**
 * OBS: 
 * O spread operator funciona bem para arrays unidimensionais.
 * Para multidimensionais ele copia por referencia, nao por valor,
 * logo uma modificacao na copia gera uma modificacao no original,
 * o que fere a imutabilidade.
 * 
 * O mesmo ocorre com Array.slice(), Array.concat(), Array.map(x => x) etc.
 * 
 * Para copiar de forma segura objetos ou array aninhados, usam-se
 * as funcoes "JSON.stringify" (para converter um objeto em string) e 
 * "JSON.parse" (para converter uma string em um objeto).
 * 
 * Exemplo:
 * arr = [[1], [2]];
 * arrCopy = JSON.parse(JSON.stringify(arr)); 
*/