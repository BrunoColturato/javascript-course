// Criar um stream de numeros entre um valor minimo e maximo com Observable
const { Observable } = require("rxjs");

function entre(min, max) {
  if (min > max) [min, max] = [max, min];

  return new Observable((subscriber) => {
    Array(max - min + 1)
      .fill()
      .map((el, i) => subscriber.next(min + i));
    subscriber.complete();
  });
}

entre(4, 10).subscribe((num) => console.log(`num = ${num}`));
