
let operacao = prompt("Qual operação deseja realizar? (soma, subtracao, multiplicacao, divisao)");

let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

if (operacao === "divisao" && num2 === 0) {
  alert("Erro: divisão por zero não é permitida.");
} else {
  let resultado;

  if (operacao === "soma") {
    resultado = num1 + num2;
  } else if (operacao === "subtracao") {
    resultado = num1 - num2;
  } else if (operacao === "multiplicacao") {
    resultado = num1 * num2;
  } else if (operacao === "divisao") {
    resultado = num1 / num2;
  } else {
    alert("Operação inválida.");
  }

  if (resultado !== undefined) {
    console.log("Resultado:", resultado);
  }
}