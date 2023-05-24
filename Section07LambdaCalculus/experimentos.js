Number.prototype.log = function () {
  console.log(+this);
};
Function.prototype.log = function () {
  console.log(this.toString());
};

// identidade
console.log("Identidade:")
const I = (a) => a;
I(3).log();
I(I).log();

// self application
console.log("\nSELF:")
const SELF = (f) => f(f);
SELF(I).log();

console.log("\nFIRST:")
const FIRST = (a) => (b) => a;
FIRST(7)(11).log();

console.log("\nLAST:")
const LAST = (a) => (b) => b;
LAST(7)(11).log();

// FLIP
console.log("\nFLIP")
const FLIP = (f) => (a) => (b) => f(b)(a);
FLIP(FIRST)(7)(11).log();

console.log("\nLAST2:")
const LAST2 = (a) => (b) => FLIP(FIRST)(a)(b);
LAST2(7)(11).log();

// Definindo True e False
console.log("\nTRUE e FALSE:")
const T = FIRST;
const F = LAST;

T.toString = () => "True (FIRST)";
F.toString = () => "False (LAST)";
T.log();
F.log();

// NOT
console.log("\nNOT:")
const NOT = (a) => a(F)(T);
NOT(T).log();
NOT(F).log();

// AND
console.log("\nAND:")
const AND = (a) => (b) => a(b)(F);
AND(T)(T).log();

AND(T)(F).log();

AND(F)(T).log();

AND(F)(F).log();

// OR
console.log("\nOR:")
const OR = (a) => (b) => a(T)(b);
OR(T)(T).log();

OR(T)(F).log();

OR(F)(T).log();

OR(F)(F).log();

// XNOR
console.log("\nXNOR:")
const XNOR = (a) => (b) => a(b)(NOT(b));
XNOR(T)(T).log();

XNOR(T)(F).log();

XNOR(F)(T).log();

XNOR(F)(F).log();

// XOR
console.log("\nXOR:")
const XOR = (a) => (b) => NOT(XNOR(a)(b));
XOR(T)(T).log();

XOR(T)(F).log();

XOR(F)(T).log();

XOR(F)(F).log();
