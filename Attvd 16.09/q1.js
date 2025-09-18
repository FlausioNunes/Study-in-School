let precos = [];
for (let i = 0; i < 5; i++) {
    let preco;
    do {
        preco = parseFloat(prompt(`Digite o preço do produto ${i + 1}:`));
    } while (isNaN(preco) || preco < 0);
    precos.push(preco);
}
let maiorPreco = Math.max(...precos);
let indice = precos.indexOf(maiorPreco);
console.log("1) Produto mais caro:");
console.log(`Índice: ${indice}, Preço: R$${maiorPreco.toFixed(2)}`);
