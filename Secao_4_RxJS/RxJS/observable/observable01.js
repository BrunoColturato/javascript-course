/**
 * Podemos ver a diferenca entre uma Promise e um Observable
 * pelo fato de uma Promise poder retornar um unico valor,
 * enquanto que para Observable podemos retornar varios dados
 * em formato de stream de dados.
 */
const { Observable } = require("rxjs");

const p = new Promise((resolve) => {
  resolve("Eu sou uma promise");
  resolve("Serei ignorado");
});
p.then(console.log);

const obs$ = new Observable((subscriber) => {
  subscriber.next("Eu");
  subscriber.next("sou");
  subscriber.next("um");
  subscriber.next("observable");
  subscriber.complete();
});
obs$.subscribe(console.log);
