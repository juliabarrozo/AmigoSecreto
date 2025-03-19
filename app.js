let participantes = [];

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".button-add").addEventListener("click", adicionarParticipante);
    document.querySelector(".button-draw").addEventListener("click", realizarSorteio);
});

function adicionarParticipante() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    if (nome) {
        participantes.push(nome);
        atualizarLista();
        input.value = "";
    } else {
        alert("Por favor, insira um nome válido.");
    }
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    participantes.forEach(nome => {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function realizarSorteio() {
    if (participantes.length < 2) {
        alert("Adicione pelo menos dois participantes para sortear.");
        return;
    }

    if (participantes.length % 2 !== 0) {
        alert("O número de participantes deve ser par para realizar o sorteio.");
        return;
    }

    let sorteados = [...participantes].sort(() => Math.random() - 0.5);

    let pares = [];
    for (let i = 0; i < sorteados.length; i += 2) {
        pares.push([sorteados[i], sorteados[i + 1]]);
    }

    mostrarResultado(pares);

    resetarLista();
}

function mostrarResultado(pares) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    pares.forEach(par => {
        let item = document.createElement("li");
        item.textContent = `${par[0]} sorteou ${par[1]}`; 
        resultado.appendChild(item);
    });
}

function resetarLista() {
    participantes = [];
    atualizarLista();
}