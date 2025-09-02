let soma = 0;

function adicionarNumero() {
    const numero = parseFloat(document.getElementById('numeroInput').value);

    if (isNaN(numero)) {
        alert('Por favor, insira um número válido.');
        return;
    }

    if (numero === 0) {
        // Finaliza e mostra o somatório
        document.getElementById('resultado').textContent = `O somatório dos números é ${soma}.`;
        // Opcional: desabilitar o input e o botão após encerramento
        document.getElementById('numeroInput').disabled = true;
    } else {
        soma += numero;
        document.getElementById('numeroInput').value = '';
        document.getElementById('resultado').textContent = `Soma atual: ${soma}. Insira mais números ou 0 para encerrar.`;
    }
}