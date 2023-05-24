const fs = require("fs");
const path = require("path");

// Criar uma promise para ler de um arquivo
function lerArquivo(caminho) {
  return new Promise((resolve, reject) => {
    fs.readFile(caminho, (err, data) => {
      if (data) {
        resolve(data.toString());
      } else {
        reject(err.message);
      }
    });
  });
}

const caminho = path.join(__dirname, "data.txt");
lerArquivo(caminho)
  .then((data) => data.split("\n"))
  .then((linhas) => linhas.join(", "))
  .then((msg) => "Saida: " + msg)
  .then(console.log)
  .catch(console.error);
