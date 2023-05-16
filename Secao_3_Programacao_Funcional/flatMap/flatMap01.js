const letrasAninhadas = [["O", ["l"], "a"], [" "], ["m", ["u", "n"], "d", "o"]];

// Flat transforma functors aninhados em nao aninhados
const letras = letrasAninhadas.flat(Infinity);
console.log(letras);

const resultado = letras.map((l) => [l, ","]);
console.log(resultado);

// Flat map primeiro mapeia e depois faz um flat
const resultadoFlat = letras.flatMap((l) => [l, ","]);
console.log(resultadoFlat);
