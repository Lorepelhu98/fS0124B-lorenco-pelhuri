package multimediale;

import java.util.Scanner;

// Classe principale per il programma di lettura multimediale
public class LettoreMultimediale {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ElementoMultimediale[] elementi = new ElementoMultimediale[5];

        // Creazione degli elementi
        for (int i = 0; i < 5; i++) {
            System.out.println("Inserisci il titolo dell'elemento " + (i + 1) + ": ");
            String titolo = scanner.nextLine();
            System.out.println("Inserisci il volume: ");
            int volume = scanner.nextInt();
            scanner.nextLine(); // Consuma il newline
            elementi[i] = new RegistrazioneAudio(titolo, volume);
        }

        // Esecuzione degli elementi
        for (int i = 0; i < 5; i++) {
            System.out.println("Premi INVIO per eseguire l'elemento " + (i + 1));
            scanner.nextLine(); // Attendiamo che l'utente prema INVIO prima di eseguire l'elemento
            elementi[i].esegui(); // Eseguiamo l'elemento multimediale corrente
        }

        scanner.close(); // Chiudiamo lo scanner per liberare le risorse
    }
}

