/* Comparacao de callbacks aninhadas com promises */

// Por callback
/*
setTimeout(function () {
  console.log("Execucao #1");
  setTimeout(function () {
    console.log("Execucao #2");
    setTimeout(function () {
      console.log("Execucao #3");
    }, 2000);
  }, 2000);
}, 2000);
*/

// Por promise
function waitFor(time = 2000) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Executando...");
      resolve();
    }, time);
  });
}

waitFor(3000)
  .then(() => waitFor(2000))
  .then(() => waitFor(1000));
