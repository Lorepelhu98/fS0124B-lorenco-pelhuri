package model;


import java.io.Serializable;

public class Elemento implements Serializable {
    private String isbn;
    private String titolo;
    private int annoPubblicazione;

    public Elemento(String isbn, String titolo, int annoPubblicazione) {
        this.isbn = isbn;
        this.titolo = titolo;
        this.annoPubblicazione = annoPubblicazione;
    }

    public String getIsbn() {
        return isbn;
    }

    public String getTitolo() {
        return titolo;
    }

    public int getAnnoPubblicazione() {
        return annoPubblicazione;
    }
}



