// I - Idade em anos
// M - Meses
// D - Dias (aproximadamente)

let idadeAnos = prompt("Informe sua idade em anos:");

idadeAnos = Number(idadeAnos);

let idadeMeses = idadeAnos * 12;
let idadeDias = idadeAnos * 365;

console.log("Idade aproximada em meses: " + idadeMeses);
console.log("Idade aproximada em dias: " + idadeDias);