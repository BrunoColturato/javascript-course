// Criando um Pipeable Operator
const { Observable, from } = require("rxjs");

// Funcao generica para criacao de Pipeable Operators
function createPipeableOperator(operatorFn) {
  return function (source$) {
    return new Observable((subscriber) => {
      // Recebendo objeto com as funcoes
      const sub = operatorFn(subscriber);
      // Setando funcoes padrao
      source$.subscribe({
        next: sub.next,
        error: sub.error || ((e) => subscriber.error(e)),
        complete: sub.complete || (() => subscriber.complete()),
      });
    });
  };
}

// Retorna apenas o primeiro elemento
function myFirst() {
  return createPipeableOperator((subscriber) => ({
    next(value) {
      subscriber.next(value);
      subscriber.complete();
    },
  }));
}

// Retorna apenas o ultimo elemento
function myLast() {
  let ultimo;
  return createPipeableOperator((subscriber) => ({
    next(value) {
      ultimo = value;
    },
    complete() {
      if (ultimo) subscriber.next(ultimo);
      subscriber.complete();
    },
  }));
}

const first$ = from([1, 2, 3, 4, 5]).pipe(myFirst());
first$.subscribe(console.log);

const last$ = from([1, 2, 3, 4, 5]).pipe(myLast());
last$.subscribe(console.log);
