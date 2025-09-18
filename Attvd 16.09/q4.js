  let materias = [];

    for (let i = 0; i < 8; i++) {
        let nome = prompt(`Digite o nome da matéria ${i + 1}:`);
        let nota = parseFloat(prompt(`Digite a nota da matéria ${nome}:`));
        let frequencia = parseFloat(prompt(`Digite a frequência da matéria ${nome} (%):`));
        materias.push({ nome, nota, frequencia });
    }

    // a) Média de frequência
    let mediaFrequencia = materias.reduce((acc, mat) => acc + mat.frequencia, 0) / materias.length;
    alert(`Média de frequência: ${mediaFrequencia.toFixed(2)}%`);

    // b) Notas acima de 60%
    let acimaDaMedia = materias.filter(mat => mat.nota > 60).length;
    alert(`Quantidade de notas acima de 60%: ${acimaDaMedia}`);

