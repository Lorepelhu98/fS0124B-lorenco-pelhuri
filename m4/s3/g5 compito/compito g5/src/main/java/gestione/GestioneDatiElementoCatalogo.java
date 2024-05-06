package gestione;

import universita.Libro;
import universita.Rivista;
import universita.Utente;
import universita.Prestito;

public interface GestioneDatiElementoCatalogo {
    void aggiungiLibro(Libro libro);
    void rimuoviLibro(String isbn);
    Libro cercaLibroPerISBN(String isbn);

    void aggiungiRivista(Rivista rivista);
    void rimuoviRivista(String isbn);
    Rivista cercaRivistaPerISBN(String isbn);

    void aggiungiUtente(Utente utente);
    void rimuoviUtente(String numeroTessera);
    Utente cercaUtentePerNumeroTessera(String numeroTessera);

    void aggiungiPrestito(Prestito prestito);
    void rimuoviPrestito(Long id);
    Prestito cercaPrestitoPerId(Long id);
}
