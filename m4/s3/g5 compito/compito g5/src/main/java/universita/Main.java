package universita;

import gestione.GestioneDatiLibro;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class Main {
    public static void main(String[] args) {

        EntityManagerFactory emf = Persistence.createEntityManagerFactory("myPersistenceUnit");
        EntityManager em = emf.createEntityManager();


        GestioneDatiLibro gestioneDatiLibro = new GestioneDatiLibro(em);


        em.getTransaction().begin();


        Libro libro = new Libro();
        libro.setIsbn("1234567890");
        libro.setTitolo("Il nome del vento");
        libro.setAnnoPubblicazione(2007);
        libro.setNumeroPagine(662);
        libro.setAutore("Patrick Rothfuss");
        libro.setGenere("Fantasy");


        gestioneDatiLibro.aggiungiElemento(libro);


        em.getTransaction().commit();


        em.close();
        emf.close();
    }
}

