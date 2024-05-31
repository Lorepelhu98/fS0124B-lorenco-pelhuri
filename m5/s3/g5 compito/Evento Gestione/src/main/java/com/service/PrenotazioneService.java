package com.service;

import com.model.Prenotazione;
import com.repository.PrenotazioneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PrenotazioneService {

    @Autowired
    private PrenotazioneRepository prenotazioneRepository;

    public Prenotazione creaPrenotazione(Prenotazione prenotazione) {
        return prenotazioneRepository.save(prenotazione);
    }

    public List<Prenotazione> trovaTutteLePrenotazioni() {
        return prenotazioneRepository.findAll();
    }

    public Optional<Prenotazione> trovaPrenotazioneById(Long id) {
        return prenotazioneRepository.findById(id);
    }

    public List<Prenotazione> trovaPrenotazioniByUtenteId(Long utenteId) {
        return prenotazioneRepository.findByUtenteId(utenteId);
    }

    public void cancellaPrenotazione(Long id) {
        prenotazioneRepository.deleteById(id);
    }
}
