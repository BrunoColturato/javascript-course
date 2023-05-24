function gerarNumerosEntre(min, max, notAllowed) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve, reject) => {
    let scale = max - min + 1;
    let number = parseInt(Math.random() * scale + min);

    if (notAllowed.includes(number)) {
      reject("Numero repetido");
    } else {
      resolve(number);
    }
  });
}

// Tratamento de erro com funcao async
async function gerarMegaSena(qtdeNumeros) {
  try {
    let numeros = [];
    for (let _ of Array(qtdeNumeros).fill()) {
      numeros.push(await gerarNumerosEntre(1, 60, numeros));
    }
    return numeros;
  } catch (e) {
    throw "Nao deu pra gerar";
  }
}

// O catch ira pega o throw e nao o reject da promise original
gerarMegaSena(6)
  .then((numeros) => {
    numeros.sort((a, b) => a - b);
    console.log(numeros);
  })
  .catch(console.error);
