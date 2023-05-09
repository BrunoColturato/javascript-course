// Impura: Math.random() nao eh deterministico, dependendo
// assim de valores externos (seed do random).
function gerarNumeroAleatorio(min, max) {
  const fator = max - min + 1;
  return parseInt(Math.random() * fator) + min;
}

console.log(gerarNumeroAleatorio(1, 10));
