let qtdeExe = 0;

// Funcao impura!
function somar(a, b) {
  qtdeExe++; // Efeito colateral observavel
  return a + b;
}

// Obs: funcoes que leem arquivos/banco de dados sao impuras tambem.
// Isso porque depende de algo externo.
