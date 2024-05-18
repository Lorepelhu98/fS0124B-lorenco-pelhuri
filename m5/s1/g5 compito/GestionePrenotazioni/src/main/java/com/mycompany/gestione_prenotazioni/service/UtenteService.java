package com.mycompany.gestione_prenotazioni.service;

import com.mycompany.gestione_prenotazioni.model.Utente;
import java.util.Optional;

public interface UtenteService {
    Optional<Utente> findByUsername(String username);
    Utente salvaUtente(Utente utente);
    Utente aggiornaUtente(Utente utente);
    void eliminaUtente(Long id);
}

