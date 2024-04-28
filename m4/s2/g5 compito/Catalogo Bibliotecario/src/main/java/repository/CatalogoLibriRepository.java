package repository;

import model.Elemento;
import model.Libro;
import java.util.ArrayList;
import java.util.List;

public class CatalogoLibriRepository implements CatalogoRepository {
    private List<Elemento> elementi;

    public CatalogoLibriRepository() {
        this.elementi = new ArrayList<>();
    }

    @Override
    public void aggiungiElemento(Elemento elemento) {
        elementi.add(elemento);
    }

    @Override
    public void rimuoviElemento(String isbn) {
        elementi.removeIf(e -> e.getIsbn().equals(isbn));
    }

    @Override
    public Elemento cercaPerIsbn(String isbn) {
        return elementi.stream()
                .filter(e -> e.getIsbn().equals(isbn))
                .findFirst()
                .orElse(null);
    }

    @Override
    public List<Elemento> cercaPerAnnoPubblicazione(int anno) {
        List<Elemento> risultati = new ArrayList<>();
        for (Elemento elemento : elementi) {
            if (elemento.getAnnoPubblicazione() == anno) {
                risultati.add(elemento);
            }
        }
        return risultati;
    }

    @Override
    public List<Elemento> cercaPerAutore(String autore) {
        List<Elemento> risultati = new ArrayList<>();
        for (Elemento elemento : elementi) {
            if (elemento instanceof Libro) {
                Libro libro = (Libro) elemento;
                if (libro.getAutore().equals(autore)) {
                    risultati.add(libro);
                }
            }
        }
        return risultati;
    }
}