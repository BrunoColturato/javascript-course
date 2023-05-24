/**
 * Neste exemplo eh possivel ver como criar um stream de dados customizado 
 * quantas vezes quiser. 
 * Alem disso, vemos como ter controle sobre esse stream de dados.
 */

function gerarNumeros() {
  return {
    iniciar(fn, tempo) {
      let num = 0;
      const i = setInterval(() => {
        fn(num++);
      }, tempo);
      return {
        parar() {
          clearInterval(i);
        },
      };
    },
  };
}

const temp1 = gerarNumeros();
const exec1 = temp1.iniciar((num) => console.log(`#1 ${num * 2}`), 1000);
const temp2 = gerarNumeros();
const exec2 = temp1.iniciar((num) => console.log(`#2 ${num + 100}`), 1000);

setTimeout(() => {
  exec1.parar();
  exec2.parar();
}, 5000);
