// Criando um Operador de Criacao
const { Observable } = require("rxjs");

function myOfDelay(delay, ...elementos) {
  return new Observable((subscriber) => {
    (elementos || []).forEach((el, i) => {
      setTimeout(() => {
        subscriber.next(el);
        if (elementos.length === i + 1) {
          subscriber.complete();
        }
      }, delay * (i + 1));
    });
  });
}

const obs$ = myOfDelay(1000, -1, ["a", "b"], false);
obs$.subscribe(console.log);
