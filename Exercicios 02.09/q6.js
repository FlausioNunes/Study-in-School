
// Função usando while
function mediaWhile() {
    const alunos = [];
    let somaNotas = 0;
    let i = 0;

    // Leitura das matrículas e notas
    while (i < 5) {
        const matricula = prompt(`Digite a matrícula do aluno ${i + 1}:`);
        const nota = parseFloat(prompt(`Digite a nota do aluno ${i + 1}:`));
        alunos.push({ matricula, nota });
        somaNotas += nota;
        i++;
    }

    const media = somaNotas / 5;

    // Impressão das matrículas dos alunos acima da média
    let resultado = "Alunos acima da média:\n";
    alunos.forEach(aluno => {
        if (aluno.nota > media) {
            resultado += `Matrícula: ${aluno.matricula}\n`;
        }
    });
    alert(resultado);
}

// Função usando do-while
function mediaDoWhile() {
    const alunos = [];
    let somaNotas = 0;
    let i = 0;

    // Leitura das matrículas e notas
    do {
        const matricula = prompt(`Digite a matrícula do aluno ${i + 1}:`);
        const nota = parseFloat(prompt(`Digite a nota do aluno ${i + 1}:`));
        alunos.push({ matricula, nota });
        somaNotas += nota;
        i++;
    } while (i < 5);

    const media = somaNotas / 5;

    // Impressão das matrículas dos alunos acima da média
    let resultado = "Alunos acima da média:\n";
    alunos.forEach(aluno => {
        if (aluno.nota > media) {
            resultado += `Matrícula: ${aluno.matricula}\n`;
        }
    });
    alert(resultado);
}

// Função usando for
function mediaFor() {
    const alunos = [];
    let somaNotas = 0;

    // Leitura das matrículas e notas
    for (let i = 0; i < 5; i++) {
        const matricula = prompt(`Digite a matrícula do aluno ${i + 1}:`);
        const nota = parseFloat(prompt(`Digite a nota do aluno ${i + 1}:`));
        alunos.push({ matricula, nota });
        somaNotas += nota;
    }

    const media = somaNotas / 5;

    // Impressão das matrículas dos alunos acima da média
    let resultado = "Alunos acima da média:\n";
    for (const aluno of alunos) {
        if (aluno.nota > media) {
            resultado += `Matrícula: ${aluno.matricula}\n`;
        }
    }
    alert(resultado);
}
