package gestione;

import universita.Libro;
import universita.Prestito;
import universita.Rivista;
import universita.Utente;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;

public class GestioneDatiUtente implements GestioneDatiElementoCatalogo {
    private final EntityManager entityManager;

    public GestioneDatiUtente(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public void aggiungiLibro(Libro libro) {

    }

    @Override
    public void rimuoviLibro(String isbn) {

    }

    @Override
    public Libro cercaLibroPerISBN(String isbn) {
        return null;
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
        EntityTransaction transaction = entityManager.getTransaction();
        transaction.begin();
        entityManager.persist(utente);
        transaction.commit();
    }

    @Override
    public void rimuoviUtente(String numeroTessera) {
        EntityTransaction transaction = entityManager.getTransaction();
        transaction.begin();
        Utente utente = entityManager.find(Utente.class, numeroTessera);
        if (utente != null) {
            entityManager.remove(utente);
        }
        transaction.commit();
    }

    @Override
    public Utente cercaUtentePerNumeroTessera(String numeroTessera) {
        return entityManager.find(Utente.class, numeroTessera);
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
