// V - Valor original
// D - Desconto (5%)
// R - Resultado com desconto

let valor = prompt("Informe o valor do produto:");

valor = Number(valor);

let desconto = valor * 0.05;
let valorComDesconto = valor - desconto;

console.log("Valor original: R$ " + valor);
console.log("Desconto de 5%: R$ " + desconto);
console.log("Valor com desconto: R$ " + valorComDesconto);