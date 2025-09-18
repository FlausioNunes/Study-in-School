 let tipos = [];
    for (let i = 0; i < 10; i++) {
        let tipo = prompt(`Digite o tipo sanguíneo da pessoa ${i + 1} (ex: A+, O-, etc):`);
        tipos.push(tipo.toUpperCase());
    }
    tipos.forEach((tipo, index) => {
        console.log(`Cadastro ${index}: Tipo sanguíneo ${tipo}`);
    });