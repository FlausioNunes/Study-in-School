// Função usando while
function febreWhile() {
    let n = parseInt(prompt("Digite o número de pessoas:"));
    let i = 0;
    let febreCount = 0;
    while (i < n) {
        let temp = parseFloat(prompt(`Temperatura da pessoa ${i + 1}:`));
        if (temp > 38) {
            febreCount++;
        }
        i++;
    }
    alert(`Quantidade de pessoas com febre: ${febreCount}`);
}

// Função usando do-while
function febreDoWhile() {
    let n = parseInt(prompt("Digite o número de pessoas:"));
    let i = 0;
    let febreCount = 0;
    if (n > 0) {
        do {
            let temp = parseFloat(prompt(`Temperatura da pessoa ${i + 1}:`));
            if (temp > 38) {
                febreCount++;
            }
            i++;
        } while (i < n);
    }
    alert(`Quantidade de pessoas com febre: ${febreCount}`);
}

// Função usando for
function febreFor() {
    let n = parseInt(prompt("Digite o número de pessoas:"));
    let febreCount = 0;
    for (let i = 0; i < n; i++) {
        let temp = parseFloat(prompt(`Temperatura da pessoa ${i + 1}:`));
        if (temp > 38) {
            febreCount++;
        }
    }
    alert(`Quantidade de pessoas com febre: ${febreCount}`);
}