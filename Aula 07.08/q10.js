let anoNascimento = prompt("Digite o ano de nascimento:");
let anoAtual = prompt("Digite o ano atual:");

anoNascimento = Number(anoNascimento);
anoAtual = Number(anoAtual);

let idade = anoAtual - anoNascimento;

console.log("Sua idade aproximada é: " + idade + " anos");