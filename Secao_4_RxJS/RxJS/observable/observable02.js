const { Observable } = require("rxjs");

const obs = new Observable((subscriber) => {
  subscriber.next("Eu");
  subscriber.next("sou");
  subscriber.next("estudante");

  if (Math.random() > 0.5) {
    subscriber.error("Deu erro");
  } else {
    subscriber.complete();
  }
});

obs.subscribe({
  next(valor) {
    console.log(`Valor: ${valor}`);
  },
  error(err) {
    console.error(`Erro: ${err}`);
  },
  complete() {
    console.log("Finalizado");
  },
});

// De forma equivalente
// obs.subscribe({
//   next: (valor) => console.log(`Valor: ${valor}`),
//   error: (err) => console.error(`Erro: ${err}`),
//   complete: () => console.log("Finalizado"),
// });
