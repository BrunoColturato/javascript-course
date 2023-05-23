// Dois tipos:
// 1. Operadores de Criação;
const { of, from } = require("rxjs");

// 2. Operadores Encadeaveis (Pipeable operators).
const { last, map } = require("rxjs/operators");

// Gera um stream de dados
of("bruno", "milena", "joao", "gabriel")
  .pipe(
    last(),
    map((v) => v[0]),
    map((v) => `Letra encontrada: ${v}`)
  )
  .subscribe(console.log);

// Recebendo um unico array
from(["bruno", "milena", "joao", "gabriel"])
  .pipe(
    last(),
    map((v) => v[0]),
    map((v) => `Array encontrado: ${v}`)
  )
  .subscribe(console.log);
