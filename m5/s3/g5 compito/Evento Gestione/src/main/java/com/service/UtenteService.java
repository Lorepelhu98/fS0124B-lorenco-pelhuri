package com.service;

import com.model.Utente;
import com.repository.UtenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UtenteService {

    @Autowired
    private UtenteRepository utenteRepository;

    public Utente trovaUtenteByUsername(String username) {
        Optional<Utente> optionalUtente = utenteRepository.findByUsername(username);
        return optionalUtente.orElse(null);
    }
}
