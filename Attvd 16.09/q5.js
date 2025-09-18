 let filmes = [];

    // Cadastro de filmes
    for (let i = 0; i < 6; i++) {
        let nome = prompt(`Digite o nome do filme ${i + 1}:`);
        let nota = parseFloat(prompt(`Digite a nota do filme ${nome} (0 a 10):`));
        filmes.push({ nome, nota });
    }

    let opcao;
    do {
        opcao = prompt(
            "Escolha uma opção:\n" +
            "a) Imprimir dados de 1 filme\n" +
            "b) Avaliar um filme cadastrado\n" +
            "c) Alterar dados de um filme\n" +
            "d) Finalizar e mostrar todos os filmes"
        );

        switch (opcao.toLowerCase()) {
            case 'a':
                let indice = parseInt(prompt("Digite o índice do filme (0 a 5):"));
                if (filmes[indice]) {
                    alert(`Filme: ${filmes[indice].nome}\nNota: ${filmes[indice].nota}`);
                } else {
                    alert("Índice inválido.");
                }
                break;

            case 'b':
                let idx = parseInt(prompt("Digite o índice do filme para nova avaliação:"));
                if (filmes[idx]) {
                    let novaNota = parseFloat(prompt("Digite a nova nota (0 a 10):"));
                    filmes[idx].nota = ((filmes[idx].nota + novaNota) / 2).toFixed(2);
                    alert(`Nova média da nota de "${filmes[idx].nome}": ${filmes[idx].nota}`);
                } else {
                    alert("Índice inválido.");
                }
                break;

            case 'c':
                let id = parseInt(prompt("Digite o índice do filme a alterar:"));
                if (filmes[id]) {
                    filmes[id].nome = prompt("Novo nome do filme:");
                    filmes[id].nota = parseFloat(prompt("Nova nota do filme:"));
                    alert("Filme alterado com sucesso.");
                } else {
                    alert("Índice inválido.");
                }
                break;

            case 'd':
                let todos = filmes.map((f, i) => `${i} - ${f.nome}: Nota ${f.nota}`).join('\n');
                alert("Filmes cadastrados:\n" + todos);
                break;

            default:
                alert("Opção inválida!");
        }

    } while (opcao.toLowerCase() !== 'd');
