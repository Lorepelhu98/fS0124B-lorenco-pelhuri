package multimediale;

// Classe astratta per gli elementi multimediali
abstract class ElementoMultimediale {
    protected String titolo; // Titolo dell'elemento multimediale

    // Costruttore
    public ElementoMultimediale(String titolo) {
        this.titolo = titolo;
    }

    // Metodo astratto per eseguire l'elemento multimediale
    public abstract void esegui();

    // Metodo per mostrare il titolo
    public void show() {
        System.out.println("Titolo: " + titolo);
    }
}

