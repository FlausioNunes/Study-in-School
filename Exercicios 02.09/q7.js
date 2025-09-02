function executarMenu() {
    // Contadores para cada operação
    let somaCount = 0;
    let subCount = 0;
    let multCount = 0;
    let divCount = 0;

    let opcao;

    do {
        opcao = prompt(
            "Escolha uma opção:\n" +
            "a) SOMA\n" +
            "b) SUBTRAÇÃO\n" +
            "c) MULTIPLICAÇÃO\n" +
            "d) DIVISÃO\n" +
            "e) sair"
        );

        if (opcao === null) {
            // Caso o usuário clique em cancelar
            break;
        }

        opcao = opcao.toLowerCase();

        if (opcao === 'a') {
            // Soma
            const num1 = parseFloat(prompt("Digite o primeiro número:"));
            const num2 = parseFloat(prompt("Digite o segundo número:"));
            alert(`Resultado: ${num1 + num2}`);
            somaCount++;
        } else if (opcao === 'b') {
            // Subtração
            const num1 = parseFloat(prompt("Digite o primeiro número:"));
            const num2 = parseFloat(prompt("Digite o segundo número:"));
            alert(`Resultado: ${num1 - num2}`);
            subCount++;
        } else if (opcao === 'c') {
            // Multiplicação
            const num1 = parseFloat(prompt("Digite o primeiro número:"));
            const num2 = parseFloat(prompt("Digite o segundo número:"));
            alert(`Resultado: ${num1 * num2}`);
            multCount++;
        } else if (opcao === 'd') {
            // Divisão
            const num1 = parseFloat(prompt("Digite o primeiro número:"));
            const num2 = parseFloat(prompt("Digite o segundo número:"));
            if (num2 !== 0) {
                alert(`Resultado: ${num1 / num2}`);
            } else {
                alert("Erro: divisão por zero não é permitida.");
            }
            divCount++;
        } else if (opcao === 'e') {
            // Sair
            alert(
                `Operações realizadas:\n` +
                `Soma: ${somaCount}\n` +
                `Subtração: ${subCount}\n` +
                `Multiplicação: ${multCount}\n` +
                `Divisão: ${divCount}`
            );
        } else {
            alert("Opção inválida. Tente novamente.");
        }

    } while (opcao !== 'e');
}