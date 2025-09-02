function criarCampos() {
    const quantidade = document.getElementById('quantidade').value;
    const divCampos = document.getElementById('camposSalarios');
    divCampos.innerHTML = '';

    if (quantidade < 1 || isNaN(quantidade)) {
        alert('Por favor, insira um número válido de membros.');
        return;
    }

    for (let i = 1; i <= quantidade; i++) {
        const label = document.createElement('label');
        label.textContent = `Salário do membro ${i}: `;
        label.setAttribute('for', `salario${i}`);

        const input = document.createElement('input');
        input.type = 'number';
        input.id = `salario${i}`;
        input.min = '0';

        divCampos.appendChild(label);
        divCampos.appendChild(input);
        divCampos.appendChild(document.createElement('br'));
    }

    document.getElementById('salariosForm').style.display = 'block';
    document.getElementById('resultado').textContent = '';
}

function calcularTotal() {
    const quantidade = document.getElementById('quantidade').value;
    let total = 0;

    for (let i = 1; i <= quantidade; i++) {
        const salario = parseFloat(document.getElementById(`salario${i}`).value);
        if (isNaN(salario) || salario < 0) {
            alert(`Por favor, insira um salário válido para o membro ${i}.`);
            return;
        }
        total += salario;
    }

    document.getElementById('resultado').textContent = `A família possui R$ ${total.toFixed(2)}.`;
}