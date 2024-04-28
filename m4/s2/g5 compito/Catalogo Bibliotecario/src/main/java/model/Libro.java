package model;

public class Libro extends Elemento {
    private String autore;
    private String genere;

    public Libro(String isbn, String titolo, int annoPubblicazione, String autore, String genere) {
        super(isbn, titolo, annoPubblicazione);
        this.autore = autore;
        this.genere = genere;
    }

    public String getAutore() {
        return autore;
    }

    public String getGenere() {
        return genere;
    }
}