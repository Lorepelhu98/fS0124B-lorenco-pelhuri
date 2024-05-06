package gestione;

import universita.Libro;
import universita.Prestito;
import universita.Rivista;
import universita.Utente;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;

public class GestioneDatiPrestito implements GestioneDatiElementoCatalogo {
    private final EntityManager entityManager;

    public GestioneDatiPrestito(EntityManager entityManager) {
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
        EntityTransaction transaction = entityManager.getTransaction();
        transaction.begin();
        entityManager.persist(prestito);
        transaction.commit();
    }

    @Override
    public void rimuoviPrestito(Long id) {
        EntityTransaction transaction = entityManager.getTransaction();
        transaction.begin();
        Prestito prestito = entityManager.find(Prestito.class, id);
        if (prestito != null) {
            entityManager.remove(prestito);
        }
        transaction.commit();
    }

    @Override
    public Prestito cercaPrestitoPerId(Long id) {
        return entityManager.find(Prestito.class, id);
    }
}
