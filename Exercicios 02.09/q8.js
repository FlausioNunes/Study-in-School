// Criando o objeto pokemón
const pokemon = {
    nome: "Pikachu",
    HP: 100,
    ataque: Math.floor(Math.random() * 3) + 1, // valor entre 1 e 3
    level: 5,
    vitorias: 0,
    derrotas: 0,
    listar: function() {
        alert(
            `Nome: ${this.nome}\n` +
            `HP: ${this.HP}\n` +
            `Ataque: ${this.ataque}\n` +
            `Level: ${this.level}\n` +
            `Vitórias: ${this.vitorias}\n` +
            `Derrotas: ${this.derrotas}`
        );
    }
};

// Mostrar atributos iniciais
alert(
    `Atributos iniciais do Pokémon:\n` +
    `Nome: ${pokemon.nome}\n` +
    `HP: ${pokemon.HP}\n` +
    `Ataque: ${pokemon.ataque}\n` +
    `Level: ${pokemon.level}`
);

function abrirMenu() {
    let opcao;
    do {
        opcao = prompt(
            "Escolha uma opção:\n" +
            "1) Batalhar\n" +
            "2) Vitórias vs Derrotas\n" +
            "3) Listar Pokémon\n" +
            "4) Sair"
        );

        if (opcao === null) {
            // Caso o usuário clique em cancelar
            break;
        }

        switch (opcao) {
            case '1':
                batalhar();
                break;
            case '2':
                alert(`Vitórias: ${pokemon.vitorias}\nDerrotas: ${pokemon.derrotas}`);
                break;
            case '3':
                pokemon.listar();
                break;
            case '4':
                alert("Saindo do menu...");
                break;
            default:
                alert("Opção inválida. Tente novamente.");
        }
    } while (opcao !== '4');
}

function batalhar() {
    // Simular uma batalha
    const ataqueInimigo = Math.floor(Math.random() * 3) + 1;
    const dano = ataqueInimigo * 10; // exemplo de cálculo de dano
    alert(
        `Inimigo ataca com ataque de valor: ${ataqueInimigo}\n` +
        `Seu Pokémon recebe ${dano} de dano.`
    );

    // Atualizar vitórias ou derrotas com base em uma condição simples
    if (dano < 30) {
        // Vitória
        pokemon.vitorias++;
        alert("Você venceu a batalha!");
    } else {
        // Derrota
        pokemon.derrotas++;
        alert("Você foi derrotado...");
    }
}