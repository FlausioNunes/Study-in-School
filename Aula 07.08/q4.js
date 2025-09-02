// N - Nota
// P - Peso
// M - Média Ponderada

let n1 = prompt("Informe a primeira nota:");
let p1 = prompt("Informe o peso da primeira nota:");

let n2 = prompt("Informe a segunda nota:");
let p2 = prompt("Informe o peso da segunda nota:");

let n3 = prompt("Informe a terceira nota:");
let p3 = prompt("Informe o peso da terceira nota:");

n1 = Number(n1);
p1 = Number(p1);

n2 = Number(n2);
p2 = Number(p2);

n3 = Number(n3);
p3 = Number(p3);

let somaPonderada = (n1 * p1) + (n2 * p2) + (n3 * p3);
let somaPesos = p1 + p2 + p3;
media = somaPonderada / somaPesos;

console.log("A média ponderada é: " + media);