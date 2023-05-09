/*** Atribuicoes e passagens por referencia ***/
// OBS: os exemplos abaixo tambem se aplicam a arrays.
const pessoa = {
  nome: "Bruno",
  altura: 1.79,
  cidade: "Sao Carlos",
};

// Atribuicao por referencia
const pessoaCopia = pessoa;
pessoaCopia.nome = "Pedro";
console.log(pessoa.nome); // Pedro

// Passagem por referencia
function alteraPessoa(outraPessoa) {
  outraPessoa.nome = "Carlos";
}
alteraPessoa(pessoaCopia);
console.log(pessoa.nome); // Carlos

/*** Atribuicoes e passagens por valor ***/
// Atribuicao por valor
let a = 1;
let b = a; // copia
a++;
b--;
console.log(a, b);

// Passagem por valor
let num = 5;
function incrementar(num) {
  num++;
}
incrementar(num);
console.log(num);
