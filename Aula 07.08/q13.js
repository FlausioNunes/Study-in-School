let distancia = prompt("Digite a distância da viagem (km):");
let velocidade = prompt("Digite a velocidade média da viagem (km/h):");
let precoCombustivel = prompt("Digite o preço do litro de combustível (R$):");
let consumo = prompt("Digite o consumo do carro (km por litro):");

distancia = Number(distancia);
velocidade = Number(velocidade);
precoCombustivel = Number(precoCombustivel);
consumo = Number(consumo);

let tempo = distancia / velocidade;
let litrosConsumidos = distancia / consumo;
let custo = litrosConsumidos * precoCombustivel;

console.log("Tempo de viagem: " + tempo + " horas");
console.log("Combustível consumido: " + litrosConsumidos + " litros");
console.log("Custo estimado da viagem: R$ " + custo);