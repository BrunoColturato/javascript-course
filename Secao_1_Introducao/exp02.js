/**
 * Experimento 02
 *
 * Aqui vemos que as funcoes na Event Queue executam em segundo
 * plano, porem sao adicionadas na Stack qualquer outra chamada.
 * Ou seja, um console.log da Event Queue eh mostrado na tela apos
 * a Stack estar vazia.
 */

function waitFor(time) {
  const future = Date.now() + time;
  while (Date.now() < future) {}
  console.log(`Wait for ${time}`);
}

setTimeout(() => console.log("Timer #1"), 3000);
setTimeout(() => {
  waitFor(3000)
  console.log("Timer #2")
}, 300);

waitFor(4000);
console.log("End");
