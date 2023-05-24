// Criando um Pipeable Operator
const { Observable, from } = require("rxjs");

// Retorna apenas o primeiro elemento
function myFirst() {
  return function (source$) {
    return new Observable((subscriber) => {
      source$.subscribe({
        // recebendo dados da fonte
        next(v) {
          subscriber.next(v);
          subscriber.complete();
        },
      });
    });
  };
}

// Retorna apenas o ultimo elemento
function myLast() {
  return function (source$) {
    return new Observable((subscriber) => {
      let ultimo;
      source$.subscribe({
        next(v) {
          ultimo = v;
        },
        complete() {
          if (ultimo) subscriber.next(ultimo);
          subscriber.complete();
        },
      });
    });
  };
}

const first$ = from([1, 2, 3, 4, 5]).pipe(myFirst());
first$.subscribe(console.log);

const last$ = from([1, 2, 3, 4, 5]).pipe(myLast());
last$.subscribe(console.log);
