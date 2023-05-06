// Tratamento de erro com Promises
function funcionaOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceErro) {
      reject("Deu azar");
    } else {
      resolve(valor);
    }
  });
}

// Erro do reject
funcionaOuNao("Deu bom!", 0.5)
  .then(console.log)
  .catch((err) => console.error(`[Reject]: ${err}`))

// Erro qualquer dentro da funcao que retorna a promise
function errado() {
  return new Promise((resolve, reject) => {
    con.log("Hi");
  });
}

errado()
  .then(() => console.log("Deu certo"))
  .catch((err) => console.error(`[Erro promise]: ${err}`))
  .then(() => console.log("Fim"));

// Erro dentro do then
function errDentro() {
  return new Promise((resolve, reject) => {
    let x = 0;
    if (x == 0) resolve("Yes bay");
    else reject("ERRO!!");
  });
}

errDentro()
  .then(
    (val) => naoExiste.log(val),
    (err) => console.error(err)
  )
  .catch((err) => console.error(`[Erro dentro then]: ${err}`));
