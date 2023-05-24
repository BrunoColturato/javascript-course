/**
 * No padrao Observer, temos:
 *
 * Subject: responsavel por detectar o evento;
 * Observer: interessado na execucao do evento.
 *
 * O observer precisa registrar seu interesse no evento
 * ao subject.
 *
 * O ovento ocorre, o subject detecta e notifica os observers
 * que o ovento ocorreu.
 */
const readline = require("readline");

function obterResposta(pergunta) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(pergunta, (resp) => {
      resolve(resp);
      rl.close();
    });
  });
}

/* Exemplo de uma festa surpresa de aniversario */

function anfitriao() {
  console.log("A: Apagar a luz");
  console.log("A: Pedir silencio");
  console.log("A: Surpresa!!!");
}

function sindico() {
  console.log("S: Monitorando barulho!");
}

async function porteiro(interessados) {
  while (true) {
    const resp = await obterResposta("O aniversariante chegou? (s/N/q) ");
    if (resp.toLowerCase() === "s") {
      // notifica observers
      if (Array.isArray(interessados)) {
        interessados.forEach((obs) => obs());
      }
    } else if (resp.toLowerCase() === "q") {
      break;
    }
  }
}

/**
 * O "porteiro" seria o subject e o "anfitriao" e o "sindico" sao os observers.
 * Registrando dois observers: [anfitriao, sindico].
 */
porteiro([anfitriao, sindico]);
