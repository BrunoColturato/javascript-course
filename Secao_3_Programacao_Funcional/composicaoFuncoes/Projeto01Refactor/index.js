const path = require("path");
const fn = require("./functions");

const myPath = path.join(__dirname, "subtitles");

const symbols = [".", "?", "-", ",", '"', "_", "<i>", "</i>", "\r", "[", "]", "(", ")", "!", ":", ";", "♪"];

// Desafio
function composicao(...fns) {
  return function (valor) {
    return fns.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) {
        return fn(await acc);
      } else {
        return fn(acc);
      }
    }, valor);
  };
}

const palavras_mais_usadas = composicao(
  fn.readDir,
  fn.filesEndedWith(".srt"),
  fn.readFiles,
  fn.joinArrayBy(" "),
  fn.splitStringBy("\n"),
  fn.removeEmptyElements,
  fn.removeIfPattern("-->"),
  fn.removeOnlyNumbers,
  fn.removeSymbols(symbols),
  fn.joinArrayBy(" "),
  fn.splitStringBy(" "),
  fn.removeEmptyElements,
  fn.removeIfHasNumber,
  fn.countWords,
  fn.sortObjBy("count")
  // fn.saveToFile("results.json"),
);

palavras_mais_usadas(myPath).then(console.log);
