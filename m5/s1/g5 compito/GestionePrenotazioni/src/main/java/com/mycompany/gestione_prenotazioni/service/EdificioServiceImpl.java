package com.mycompany.gestione_prenotazioni.service;

import com.mycompany.gestione_prenotazioni.model.Edificio;
import com.mycompany.gestione_prenotazioni.repository.EdificioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EdificioServiceImpl implements EdificioService {

    private final EdificioRepository edificioRepository;

    @Autowired
    public EdificioServiceImpl(EdificioRepository edificioRepository) {
        this.edificioRepository = edificioRepository;
    }

    public List<Edificio> findByCitta(String citta) {
        return edificioRepository.findByCitta(citta);
    }

    public List<Edificio> findByNomeAndCitta(String nome, String citta) {
        return edificioRepository.findByNomeAndCitta(nome, citta);
    }

    public Edificio aggiungiEdificio(Edificio nuovoEdificio) {
        return edificioRepository.save(nuovoEdificio);
    }

    public Edificio aggiornaEdificio(Edificio edificioAggiornato) {
        return edificioRepository.save(edificioAggiornato);
    }

    public void eliminaEdificio(Long id) {
        edificioRepository.deleteById(id);
    }
}
