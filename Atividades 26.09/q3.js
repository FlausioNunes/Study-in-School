if (!menuHandler.data) {
        menuHandler.data = {
            livros: []
        };
    }

    switch(opcao) {
        case 'inserir':
            inserirLivro(menuHandler.data);
            break;
        case 'listarNomes':
            listarNomes(menuHandler.data);
            break;
        case 'buscarLivro':
            buscarLivro(menuHandler.data);
            break;
        case 'buscarAutor':
            buscarAutor(menuHandler.data);
            break;
        case 'encerrar':
            encerrar();
            break;
        default:
            alert('Opção inválida!');
    }
    
function inserirLivro(data) {
    const nome = prompt("Nome do livro:");
    if (!nome || !nome.trim()) {
        mostrarMensagem("Nome inválido. Operação cancelada.");
        return;
    }

    const autor = prompt("Autor do livro:");
    if (!autor || !autor.trim()) {
        mostrarMensagem("Autor inválido. Operação cancelada.");
        return;
    }

    const anoStr = prompt("Ano de publicação:");
    const ano = parseInt(anoStr);
    if (isNaN(ano) || ano < 0) {
        mostrarMensagem("Ano inválido. Operação cancelada.");
        return;
    }

    const avaliacaoStr = prompt("Avaliação (0 a 5):");
    const avaliacao = parseFloat(avaliacaoStr);
    if (isNaN(avaliacao) || avaliacao < 0 || avaliacao > 5) {
        mostrarMensagem("Avaliação inválida. Operação cancelada.");
        return;
    }

    data.livros.push({ nome: nome.trim(), autor: autor.trim(), ano, avaliacao });
    mostrarMensagem(`Livro "${nome.trim()}" inserido com sucesso.`);
}

function listarNomes(data) {
    if (data.livros.length === 0) {
        mostrarMensagem("Nenhum livro cadastrado.");
        return;
    }
    const nomes = data.livros.map((l, i) => `${i + 1}. ${l.nome}`).join('\n');
    mostrarMensagem("Livros cadastrados:\n" + nomes);
}

function buscarLivro(data) {
    if (data.livros.length === 0) {
        mostrarMensagem("Nenhum livro cadastrado.");
        return;
    }

    const nomeBusca = prompt("Digite o nome do livro que deseja buscar:");
    if (!nomeBusca || !nomeBusca.trim()) {
        mostrarMensagem("Nome inválido.");
        return;
    }

    const encontrados = data.livros.filter(l => l.nome.toLowerCase() === nomeBusca.trim().toLowerCase());

    if (encontrados.length === 0) {
        mostrarMensagem(`Nenhum livro encontrado com o nome "${nomeBusca.trim()}".`);
        return;
    }

    const resultados = encontrados.map(l => 
        `Nome: ${l.nome}\nAutor: ${l.autor}\nAno: ${l.ano}\nAvaliação: ${l.avaliacao.toFixed(1)}`
    ).join('\n\n');

    mostrarMensagem(`Resultado(s) da busca:\n${resultados}`);
}

function buscarAutor(data) {
    if (data.livros.length === 0) {
        mostrarMensagem("Nenhum livro cadastrado.");
        return;
    }

    const autorBusca = prompt("Digite o nome do autor que deseja buscar:");
    if (!autorBusca || !autorBusca.trim()) {
        mostrarMensagem("Nome inválido.");
        return;
    }

    const encontrados = data.livros.filter(l => l.autor.toLowerCase() === autorBusca.trim().toLowerCase());

    if (encontrados.length === 0) {
        mostrarMensagem(`Nenhum livro encontrado do autor "${autorBusca.trim()}".`);
        return;
    }

    const resultados = encontrados.map(l => 
        `Nome: ${l.nome}\nAutor: ${l.autor}\nAno: ${l.ano}\nAvaliação: ${l.avaliacao.toFixed(1)}`
    ).join('\n\n');

    mostrarMensagem(`Livros do autor ${autorBusca.trim()}:\n${resultados}`);
}

function encerrar() {
    mostrarMensagem("Sistema encerrado. Até mais!");
    document.getElementById('menu').style.display = 'none';
}

function mostrarMensagem(msg) {
    document.getElementById('output').textContent = msg;
}