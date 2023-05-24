/* Passando funcao como parametro */
function callback() {
  console.log("Yes");
}

function func(callback) {
  if (typeof callback === "function") callback();
}

func(callback);

/* Retornando funcao */
function power(b) {
  return function (exp) {
    return Math.pow(b, exp);
  };
}

const power2 = power(2);
console.log(power2(3)); // 8
console.log(power(10)(3)); // 1000
