// Formas de somar elementos de um array
const arr = [1, 2, 3, 4, 5, 6];

/* #3 - Recursividade (imutavel) */
function somarArray03(arr, total = 0) {
  if (!arr.length) {
    return total;
  }
  return somarArray03(arr.slice(1), total + arr[0]);
}

/* #2 - Reduce (imutavel) */
function somarArray02(arr) {
  return arr.reduce((acc, el) => acc + el);
}

/* #1 - Dados mutaveis */
function somarArray01(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(somarArray03(arr));
