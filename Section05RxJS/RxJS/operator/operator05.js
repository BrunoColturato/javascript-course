const { of, Observable } = require("rxjs");

function terminadoCom(str) {
  return function (source$) {
    return new Observable((subscriber) => {
      source$.subscribe({
        next(value) {
          if (Array.isArray(value)) {
            subscriber.next(value.filter((el) => el.endsWith(str)));
          } 
          else if (value.endsWith(str)) {
            subscriber.next(value);
          }
        },
        error(e) {
          subscriber.error(e);
        },
        complete() {
          subscriber.complete();
        },
      });
    });
  };
}

const obs$ = of("Ana Silva", "Maria Silva", "Pedro Rocha").pipe(terminadoCom("Silva"));
const obs2$ = of(["Ana Silva", "Maria Silva", "Pedro Rocha"]).pipe(terminadoCom("Silva"));

obs$.subscribe(console.log);
obs2$.subscribe(console.log);
