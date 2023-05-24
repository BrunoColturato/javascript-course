/**
 * Um scheduler controla quando uma inscricao comeca e quando as notificacoes
 * sao entregue.
 * Se comporta como um contexto de execucao.
 * 
 * O asyncScheduler torna uma execucao que por padrao eh sincrona em assincrona.
 */
const { from, asyncScheduler } = require("rxjs");
const { observeOn } = require("rxjs/operators");

console.log("Antes...");

from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).pipe(observeOn(asyncScheduler)).subscribe(console.log);

console.log("Depois...");
