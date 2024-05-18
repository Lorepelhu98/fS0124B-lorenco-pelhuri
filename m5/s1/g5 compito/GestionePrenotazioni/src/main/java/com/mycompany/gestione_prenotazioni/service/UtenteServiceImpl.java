package com.mycompany.gestione_prenotazioni.service;

import com.mycompany.gestione_prenotazioni.model.Utente;
import com.mycompany.gestione_prenotazioni.repository.UtenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UtenteServiceImpl implements UtenteService {

    private final UtenteRepository utenteRepository;

    @Autowired
    public UtenteServiceImpl(UtenteRepository utenteRepository) {
        this.utenteRepository = utenteRepository;
    }

    public Optional<Utente> findByUsername(String username) {
        return utenteRepository.findByUsername(username);
    }

    public Utente salvaUtente(Utente utente) {
        return utenteRepository.save(utente);
    }

    public Utente aggiornaUtente(Utente utente) {
        return utenteRepository.save(utente);
    }

    public void eliminaUtente(Long id) {
        utenteRepository.deleteById(id);
    }
}
