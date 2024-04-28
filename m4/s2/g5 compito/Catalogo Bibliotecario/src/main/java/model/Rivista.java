package model;

public class Rivista extends Elemento {
    private String periodicita;

    public Rivista(String isbn, String titolo, int annoPubblicazione, String periodicita) {
        super(isbn, titolo, annoPubblicazione);
        this.periodicita = periodicita;
    }

    public String getPeriodicita() {
        return periodicita;
    }
}