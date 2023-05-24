/**
 * Uma promise gera um unico valor.
 */

let p = new Promise(function (resolve, reject) {
  const arr = ["Bruno", "Marcos", "Murilo", "Eduardo"];

  // Conditions
  if (arr) {
    resolve(arr);
  } else {
    reject("[ERROR] Promise failed");
  }
});

// O then recebe duas funcoes: a primeira para sucesso e a segunda para fracasso.
// O parametro dessas funcoes, isto eh, o resultado da promisse, eh definido quando
// se define a promise (acima) baseado em alguma logica.
p.then(
  (value) => console.log(value),
  (error) => console.error(error)
); // ["Bruno", "Marcos", "Murilo", "Eduardo"]

p.then((value) => value[0])
  .then((value) => value.toLowerCase())
  .then(console.log); // bruno
