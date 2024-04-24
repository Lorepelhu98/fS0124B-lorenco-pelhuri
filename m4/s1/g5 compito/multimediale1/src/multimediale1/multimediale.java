package multimediale;

import java.util.Scanner;

//Interfaccia per gli elementi riproducibili

interfaccia multimediale {

abstract void play();

}

//Classe astratta per gli elementi multimediali

public abstract class ElementoMultimediale {

    protected String titolo;  // Titolo dell’elemento multimediale

    public ElementoMultimediale(String titolo) {

        this.titolo = titolo;

    }

    public abstract void esegui();

}

//Classe per le registrazioni audio

public class RegistrazioneAudio extends ElementoMultimediale implements Riproducibile

{

    private int durata; //Durata registrazione audio

    private int volume; //Volume registrazione audio     .;       drewewe        reg</p></p>