//Secondo esercizio 

function avviaContatore() {
    let tempoTrascorso = parseInt(sessionStorage.getItem("tempoTrascorso")) || 0;

    setInterval(() => {
        tempoTrascorso++;
        document.getElementById("counter").textContent = tempoTrascorso;
        sessionStorage.setItem("tempoTrascorso", tempoTrascorso);
    }, 1000); 
}

avviaContatore();
