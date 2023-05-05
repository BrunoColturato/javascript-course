function gerarNumerosEntre(min, max) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve) => {
    resolve(parseInt(Math.random() * (max - min + 1) + min));
  });
}

gerarNumerosEntre(1, 60)
  .then((num) => num * 10)
  .then(console.log);
