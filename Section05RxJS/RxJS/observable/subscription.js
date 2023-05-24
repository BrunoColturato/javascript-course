// esperar 3s
// jogar com um intervalo de 500ms
// apos 5s para o programa
const { timer, Subscription } = require("rxjs");

console.log("Aguardando...");
const sub1 = timer(3000, 500).subscribe(console.log);
const sub2 = timer(3000, 500).subscribe(console.log);

// Pra centralizar varias subscriptions em um unico ponto
// e para todas de um vez, usa-se o Subscription.
const subMaster = new Subscription();
subMaster.add(sub1);
subMaster.add(sub2);

setTimeout(() => subMaster.unsubscribe(), 5000);
