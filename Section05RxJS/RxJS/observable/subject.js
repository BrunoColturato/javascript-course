/**
 * No padrao Observer, um subject eh responsavel por monitorar um
 * evento e passar o resultado obtido (quando disponivel) para os
 * interessados (observers) por meio de um multicast, ou seja, o
 * mesmo dada eh passado para todos.
 *
 * Na implementacao do padrao Observer pelo RxJs, um Observable
 * tem um papel semelhante a de um subject, e a funcao que chama
 * Observable.subscribe() tem o papel semelhante ao de um observer.
 * Porem, um observable realizar um comunicacao unicast, de forma
 * que os dados produzidos pelo observable sao sempre produzidos
 * do "zero", podendo ser diferente entre chamadas subscribe().
 *
 * No RxJs ha tambem um tipo de Observable chamada Subject, que
 * se diferencia de um Observable comum pelo fato de fazer uma
 * comunicacao multicast dos dados, gerando-os apenas uma vez.
 */
const { Observable, Subject } = require("rxjs");

// Observable
function getObservable() {
  return new Observable((subscriber) => {
    console.log("#Observable...");
    subscriber.next(Math.random());
    subscriber.complete();
  });
}

const obs$ = getObservable();
obs$.subscribe(console.log);
obs$.subscribe(console.log);

// Subject
function getSubject() {
  const sub$ = new Subject();
  console.log("#Subject...");
  return sub$;
}

const sub$ = getSubject();
sub$.subscribe(console.log);
sub$.subscribe(console.log);

sub$.next(Math.random());
sub$.complete();
