const MAX_SLOTS = 5;


let slots = [];

let intervalo;

function iniciarLoopDeTempo() {
    intervalo = setInterval(() => {
       
        for (let i = 0; i < slots.length; i++) {
            slots[i].tempo--;
        }

       
        slots = slots.filter(slot => slot.tempo > 0);

        mostrarStatus(true);
    }, 1000);
}

function mostrarStatus(automatica = false) {
    const saida = document.getElementById("saida");
    let texto = `--- STATUS DO SERVIDOR ---\n`;
    texto += `Slots em uso: ${slots.length}/${MAX_SLOTS}\n`;

    slots.forEach((slot, index) => {
        texto += `Slot ${index + 1}: ${slot.tempo} unidade(s) de tempo restante\n`;
    });

    if (!automatica) {
        saida.textContent = texto;
    } else {
        
        saida.textContent = texto + "\n(Auto atualização a cada 1s)";
    }
}

function requisitarSlot() {
    if (slots.length < MAX_SLOTS) {
        slots.push({ tempo: 2 });
        alert("Slot requisitado com sucesso!");
    } else {
        alert("Todos os slots estão ocupados!");
    }

    mostrarStatus();
}

function liberarSlot() {
    if (slots.length > 0) {
        slots.pop();
        alert("Um slot foi liberado manualmente.");
    } else {
        alert("Não há slots para liberar.");
    }

    mostrarStatus();
}

function encerrarPrograma() {
    clearInterval(intervalo);
    alert("Programa encerrado.");
}
    

iniciarLoopDeTempo();