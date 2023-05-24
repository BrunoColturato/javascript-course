const { interval, from } = require("rxjs");

const gerarNumeros = interval(500);

const sub1 = gerarNumeros.subscribe((num) => {
  console.log(Math.pow(2, num));
});

const sub2 = gerarNumeros.subscribe(console.log);

setTimeout(() => sub1.unsubscribe(), 5000);
setTimeout(() => sub2.unsubscribe(), 6000);

// Tranforma um array em um stream de dados
from([1, 2, 3, 4]).subscribe(console.log);
