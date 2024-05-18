package com.mycompany.gestione_prenotazioni.service;

import com.mycompany.gestione_prenotazioni.model.Edificio;
import java.util.List;
import java.util.Optional;

public interface EdificioService {
    List<Edificio> findByCitta(String citta);
    Optional<Edificio> findByNomeAndCitta(String nome, String citta);
    Edificio aggiungiEdificio(Edificio nuovoEdificio);
    Edificio aggiornaEdificio(Edificio edificioAggiornato);
    void eliminaEdificio(Long id);
}

