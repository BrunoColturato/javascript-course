const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99, fragil: true },
  { nome: "Impressora", qtde: 1, preco: 649.5, fragil: true },
  { nome: "Caderno", qtde: 4, preco: 27.1, fragil: false },
  { nome: "Lapis", qtde: 3, preco: 5.82, fragil: false },
  { nome: "Tesoura", qtde: 1, preco: 19.2, fragil: true },
];

// 1. Obter elementos com fragil === true
const ehfragil = carrinho.filter((item) => item.fragil);
console.log(ehfragil);

// 2. Obter quantidade * preco --> total
const total = ehfragil.map((item) => item.qtde * item.preco);
console.log(total);

// 3. Gerar media dos totais
// lembrando que o index comeca em zero para arrays
let media = total.reduce((prevVal, val, index) => (prevVal * index + val) / (index + 1));
console.log(media);

// OU

media = total.reduce(
  (acc, el) => {
    let qtde = acc.qtde + 1;
    let total = acc.total + el;
    let media = total / qtde;

    return { qtde, total, media };
  },
  { qtde: 0, total: 0, media: 0 }
).media;

console.log(media);
