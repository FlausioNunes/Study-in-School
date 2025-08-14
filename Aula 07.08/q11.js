let valorHora = prompt("Digite o valor que você recebe por hora:");
let horasTrabalhadas = prompt("Digite a quantidade de horas trabalhadas no mês:");

valorHora = Number(valorHora);
horasTrabalhadas = Number(horasTrabalhadas);

let salario = valorHora * horasTrabalhadas;

console.log("Seu salário no mês é: R$ " + salario);