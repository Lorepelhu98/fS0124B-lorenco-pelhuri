package repository;

import model.Elemento;
import java.util.List;

public interface CatalogoRepository {
    void aggiungiElemento(Elemento elemento);
    void rimuoviElemento(String isbn);
    Elemento cercaPerIsbn(String isbn);
    List<Elemento> cercaPerAnnoPubblicazione(int anno);
    List<Elemento> cercaPerAutore(String autore);
}