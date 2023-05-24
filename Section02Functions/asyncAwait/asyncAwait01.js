// Vamos fazer um codigo assincrono virar sincrono
function waitFor(time) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), time);
  });
}

async function executar() {
  let v = await waitFor(1500);

  console.log(`Valor = ${v}`);

  await waitFor(1500);
  console.log(`Valor = ${v + 1}`);

  await waitFor(1500);
  console.log(`Valor = ${v + 2}`);

  return v + 3;
}

// OBS: nao eh possivel await fora de uma funcao async. Usa-se o then()
console.time("tempo");
executar()
  .then(console.log)
  .then(() => console.timeEnd("tempo"));
