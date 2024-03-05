//Primo esercizio

function salvaNome() {
    const nome = document.getElementById("nameInput").value;
    localStorage.setItem("nomeUtente", nome);
    mostraNomeSalvato();
}

function rimuoviNome() {
    localStorage.removeItem("nomeUtente");
    mostraNomeSalvato();
}

function mostraNomeSalvato() {
    const nomeSalvato = localStorage.getItem("nomeUtente");
    const nomeSalvatoElement = document.getElementById("nomeSalvato");
    if (nomeSalvato) {
        nomeSalvatoElement.textContent = `Nome precedentemente salvato: ${nomeSalvato}`;
    } else {
        nomeSalvatoElement.textContent = "";
    }
}

mostraNomeSalvato();

