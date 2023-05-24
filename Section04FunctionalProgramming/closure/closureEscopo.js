const x = 2;

function somarXmais4() {
  return x + 4;
}

function somarFora() {
  const x = 95;

  function somarXmais5() {
    return x + 5;
  }

  return somarXmais5;
}

module.exports = { somarXmais4, somarXmais5: somarFora() };
