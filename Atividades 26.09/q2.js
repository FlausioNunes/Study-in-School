if (!menuHandler.data) {
        menuHandler.data = {
            historico: [],
            atual: null
        };
    }

    switch (opcao) {
        case 'gerar':
            gerarPokemon(menuHandler.data);
            break;
        case 'taxas':
            mostrarTaxasCaptura(menuHandler.data);
            break;
        case 'historico':
            mostrarHistorico(menuHandler.data);
            break;
        case 'encerrar':
            encerrar();
            break;
        default:
            alert("Opção inválida!");
    }

function gerarPokemon(data) {
    const chance = Math.random();
    let tipo = '';
    let nomes = [];

    if (chance < 0.80) {
        tipo = 'Normal';
        nomes = ['Pidgey', 'Rattata', 'Zubat', 'Caterpie'];
    } else if (chance < 0.95) {
        tipo = 'Raro';
        nomes = ['Dragonair', 'Scyther', 'Ponyta', 'Haunter'];
    } else {
        tipo = 'Lendário';
        nomes = ['Mewtwo', 'Articuno', 'Zapdos', 'Moltres'];
    }

    const nome = nomes[Math.floor(Math.random() * nomes.length)];
    const pokemon = { nome, tipo };

    data.atual = pokemon;
    data.historico.push(pokemon);

    mostrarMensagem(`Pokemão Gerado: ${nome} (${tipo})`);
}

function mostrarTaxasCaptura(data) {
    const pokemon = data.atual;
    if (!pokemon) {
        mostrarMensagem("Nenhum pokemão foi gerado ainda.");
        return;
    }

    let chanceBase;
    switch (pokemon.tipo) {
        case 'Normal':
            chanceBase = 0.5;
            break;
        case 'Raro':
            chanceBase = 0.3;
            break;
        case 'Lendário':
            chanceBase = 0.1;
            break;
    }

    const itemNormal = (pokemon.tipo === 'Lendário') ? 0.8 : 1.0;
    const itemRaro = (pokemon.tipo === 'Lendário') ? 1.2 : 2.0;

    const taxaComum = (chanceBase * itemNormal * 100).toFixed(1);
    const taxaRaro = (chanceBase * itemRaro * 100).toFixed(1);

    mostrarMensagem(
        `Pokemão Atual: ${pokemon.nome} (${pokemon.tipo})\n` +
        `Chance de captura com item normal: ${taxaComum}%\n` +
        `Chance de captura com item raro: ${taxaRaro}%`
    );
}

function mostrarHistorico(data) {
    if (data.historico.length === 0) {
        mostrarMensagem("Nenhum pokemão foi gerado ainda.");
        return;
    }

    const lista = data.historico.map((p, i) => `${i + 1}. ${p.nome} (${p.tipo})`).join('\n');
    mostrarMensagem(`Histórico de Pokemãos:\n${lista}`);
}

function encerrar() {
    mostrarMensagem("Sistema encerrado. Até logo, treinador!");
    document.getElementById("menu").style.display = "none";
}

function mostrarMensagem(msg) {
    document.getElementById("output").textContent = msg;
}