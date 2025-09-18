   const complemento = {
        A: 'U',
        U: 'A',
        C: 'G',
        G: 'C'
    };

    let fita = [];
    for (let i = 0; i < 10; i++) {
        let base = prompt(`Digite a base ${i + 1} da fita de RNA (A, U, C, G):`).toUpperCase();
        while (!['A', 'U', 'C', 'G'].includes(base)) {
            base = prompt(`Base inválida! Digite A, U, C ou G:`).toUpperCase();
        }
        fita.push(base);
    }

    let fitaComplementar = fita.map(base => complemento[base]);
    alert(`Fita original: ${fita.join('-')}\nFita complementar: ${fitaComplementar.join('-')}`);

