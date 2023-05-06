// Como esperar varias Promises se cumprirem para entao fazer algo
function gerarNumerosEntre(min, max, time) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve) => {
    setTimeout(() => resolve(parseInt(Math.random() * (max - min + 1) + min)), time);
  });
}

// Especie de "join" de promises
function gerarVariosNumeros() {
  return Promise.all([
    gerarNumerosEntre(1, 60, 4000),
    gerarNumerosEntre(1, 60, 2000),
    gerarNumerosEntre(1, 60, 500),
    gerarNumerosEntre(1, 60, 1000),
  ]);
}

console.time("promise");
gerarVariosNumeros()
  .then(console.log)
  .then(() => {
    console.timeEnd("promise");
  });
