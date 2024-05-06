package gestione;

import universita.Libro;
import universita.Prestito;
import universita.Rivista;
import universita.Utente;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;

public class GestioneDatiRivista implements GestioneDatiElementoCatalogo {
    private final EntityManager entityManager;

    public GestioneDatiRivista(EntityManager entityManager) {
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
        EntityTransaction transaction = entityManager.getTransaction();
        transaction.begin();
        entityManager.persist(rivista);
        transaction.commit();
    }

    @Override
    public void rimuoviRivista(String isbn) {
        EntityTransaction transaction = entityManager.getTransaction();
        transaction.begin();
        Rivista rivista = entityManager.find(Rivista.class, isbn);
        if (rivista != null) {
            entityManager.remove(rivista);
        }
        transaction.commit();
    }

    @Override
    public Rivista cercaRivistaPerISBN(String isbn) {
        return entityManager.find(Rivista.class, isbn);
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
