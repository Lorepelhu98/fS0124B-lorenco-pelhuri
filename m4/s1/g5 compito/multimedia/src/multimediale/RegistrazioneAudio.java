package multimediale;

// Classe per le registrazioni audio
class RegistrazioneAudio extends ElementoMultimediale implements Riproducibile {
    private int volume; // Volume della registrazione audio

    // Costruttore
    public RegistrazioneAudio(String titolo, int volume) {
        super(titolo);
        this.volume = volume;
    }

    // Implementazione del metodo play() dell'interfaccia Riproducibile
    @Override
    public void play() {
        for (int i = 0; i < volume; i++) {
            // Stampa del titolo seguito da una sequenza di punti esclamativi di lunghezza pari al volume
            System.out.println(titolo + " " + "!".repeat(i + 1));
        }
    }

    // Implementazione del metodo esegui() dell'interfaccia ElementoMultimediale
    @Override
    public void esegui() {
        play(); // Esegue la riproduzione della registrazione audio
    }
}
