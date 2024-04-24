package multimediale;

import java.util.Scanner;

// Interfaccia per gli elementi riproducibili
interface Riproducibile {
    void play(); // Metodo per riprodurre l'elemento multimediale
}

// Classe astratta per gli elementi multimediali
abstract class ElementoMultimediale {
    protected String titolo; // Titolo dell'elemento multimediale

    // Costruttore
    public ElementoMultimediale(String titolo) {
        this.titolo = titolo;
    }

    // Metodo astratto per eseguire l'elemento multimediale
    public abstract void esegui();
}

// Classe per le registrazioni audio
class RegistrazioneAudio extends ElementoMultimediale implements Riproducibile {
    private int durata; // Durata della registrazione audio
    private int volume; // Volume della registrazione audio

    // Costruttore
    public RegistrazioneAudio(String titolo, int durata, int volume) {
        super(titolo);
        this.durata = durata;
        this.volume = volume;
    }

    // Implementazione del metodo play() dell'interfaccia Riproducibile
    @Override
    public void play() {
        for (int i = 0; i < durata; i++) {
            for (int j = 0; j < volume; j++) {
                // Stampa del titolo seguito da una sequenza di punti esclamativi di lunghezza pari al volume
                System.out.println(titolo + " " + "!".repeat(j + 1));
            }
        }
    }

    // Metodi per abbassare e alzare il volume
    public void abbassaVolume() {
        if (volume > 0)
            volume--;
    }

    public void alzaVolume() {
        volume++;
    }

    // Implementazione del metodo esegui() dell'interfaccia ElementoMultimediale
    @Override
    public void esegui() {
        play(); // Esegue la riproduzione della registrazione audio
    }
}

// Resto del codice delle altre classi...

// Classe principale per il programma di lettura multimediale
public class LettoreMultimediale {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ElementoMultimediale[] elementi = new ElementoMultimediale[5];

        // Creazione degli elementi
        for (int i = 0; i < 5; i++) {
            System.out.println("Inserisci il tipo di elemento (1 per Registrazione Audio, 2 per Video, 3 per Immagine): ");
            int tipo = scanner.nextInt();
            scanner.nextLine(); // Consuma il newline

            System.out.println("Inserisci il titolo: ");
            String titolo = scanner.nextLine();

            switch (tipo) {
                case 1:
                    System.out.println("Inserisci la durata: ");
                    int durataRA = scanner.nextInt();
                    System.out.println("Inserisci il volume: ");
                    int volume = scanner.nextInt();
                    elementi[i] = new RegistrazioneAudio(titolo, durataRA, volume);
                    break;
                // Resto del codice per creare Video e Immagine...
                default:
                    System.out.println("Tipo non valido.");
            }
        }

        // Esecuzione degli elementi
        int scelta;
        do {
            System.out.println("Inserisci il numero dell'elemento da eseguire (da 1 a 5) o 0 per terminare: ");
            scelta = scanner.nextInt();
            if (scelta >= 1 && scelta <= 5) {
                elementi[scelta - 1].esegui();
            } else if (scelta != 0) {
                System.out.println("Scelta non valida.");
            }
        } while (scelta != 0);

        scanner.close();
    }
}

