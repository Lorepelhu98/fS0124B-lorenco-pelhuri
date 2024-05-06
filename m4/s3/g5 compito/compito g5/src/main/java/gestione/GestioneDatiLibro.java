package gestione;

import universita.Libro;
import universita.Prestito;
import universita.Rivista;
import universita.Utente;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;

public class GestioneDatiLibro implements GestioneDatiElementoCatalogo {
    private final EntityManager entityManager;

    public GestioneDatiLibro(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public void aggiungiLibro(Libro libro) {
        EntityTransaction transaction = entityManager.getTransaction();
        transaction.begin();
        entityManager.persist(libro);
        transaction.commit();
    }

    @Override
    public void rimuoviLibro(String isbn) {
        EntityTransaction transaction = entityManager.getTransaction();
        transaction.begin();
        Libro libro = entityManager.find(Libro.class, isbn);
        if (libro != null) {
            entityManager.remove(libro);
        }
        transaction.commit();
    }

    @Override
    public Libro cercaLibroPerISBN(String isbn) {
        return entityManager.find(Libro.class, isbn);
    }

    @Override
    public void aggiungiRivista(Rivista rivista) {

    }

    @Override
    public void rimuoviRivista(String isbn) {

    }

    @Override
    public Rivista cercaRivistaPerISBN(String isbn) {
        return null;
    }

    @Override
    public void aggiungiUtente(Utente utente) {

    }

    @Override
    public void rimuoviUtente(String numeroTessera) {

    }

    @Override
    public Utente cercaUtentePerNumeroTessera(String numeroTessera) {
        return null;
    }

    @Override
    public void aggiungiPrestito(Prestito prestito) {

    }

    @Override
    public void rimuoviPrestito(Long id) {

    }

    @Override
    public Prestito cercaPrestitoPerId(Long id) {
        return null;
    }
}
