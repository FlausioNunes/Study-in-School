 if (!menuHandler.data) {
        menuHandler.data = {
            vendas: [],
            despesas: []
        };
    }

    switch (opcao) {
        case 'venda':
            inserirVenda(menuHandler.data);
            break;
        case 'statusVendas':
            verStatusVendas(menuHandler.data);
            break;
        case 'despesa':
            inserirDespesa(menuHandler.data);
            break;
        case 'statusDespesas':
            verStatusDespesas(menuHandler.data);
            break;
        case 'encerrar':
            encerrar();
            break;
        default:
            alert('Opção inválida!');
    }



function inserirVenda(data) {
    const valor = parseFloat(prompt("Digite o valor da venda:"));
    if (!isNaN(valor) && valor > 0) {
        data.vendas.push(valor);
        mostrarMensagem(`Venda de R$ ${valor.toFixed(2)} registrada.`);
    } else {
        mostrarMensagem("Valor inválido. A venda não foi registrada.");
    }
}


function verStatusVendas(data) {
    const total = data.vendas.reduce((acc, val) => acc + val, 0);
    const quantidade = data.vendas.length;
    mostrarMensagem(`Vendas do dia: ${quantidade} venda(s), Total vendido: R$ ${total.toFixed(2)}`);
}


function inserirDespesa(data) {
    const valor = parseFloat(prompt("Digite o valor da despesa:"));
    if (!isNaN(valor) && valor > 0) {
        data.despesas.push(valor);
        mostrarMensagem(`Despesa de R$ ${valor.toFixed(2)} registrada.`);
    } else {
        mostrarMensagem("Valor inválido. A despesa não foi registrada.");
    }
}


function verStatusDespesas(data) {
    const total = data.despesas.reduce((acc, val) => acc + val, 0);
    const quantidade = data.despesas.length;
    mostrarMensagem(`Total de despesas: ${quantidade} despesa(s), Total gasto: R$ ${total.toFixed(2)}`);
}


function encerrar() {
    mostrarMensagem("Sistema encerrado. Obrigado!");
    document.getElementById("menu").style.display = "none";
}


function mostrarMensagem(msg) {
    document.getElementById("output").textContent = msg;
}