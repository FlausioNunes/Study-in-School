let somaIdades = 0;
let quantidadePessoas = 0;

function adicionarIdade() {
    const idade = parseInt(document.getElementById('idadeInput').value);

    if (isNaN(idade)) {
        alert('Por favor, insira uma idade válida.');
        return;
    }

    if (idade <= 0) {
        // Encerra o processamento e mostra a média
        if (quantidadePessoas === 0) {
            document.getElementById('resultado').textContent = 'Nenhuma idade foi inserida.';
        } else {
            const media = somaIdades / quantidadePessoas;
            document.getElementById('resultado').textContent = `A idade média da população é ${media.toFixed(2)} anos.`;
        }
        // Opcional: desabilitar o botão ou limpar o input
        document.getElementById('idadeInput').disabled = true;
    } else {
        somaIdades += idade;
        quantidadePessoas++;
        document.getElementById('idadeInput').value = '';
        document.getElementById('resultado').textContent = `Total de pessoas: ${quantidadePessoas}. Insira mais idades ou 0 para encerrar.`;
    }
}