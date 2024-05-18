package com.mycompany.gestione_prenotazioni.service;

import com.mycompany.gestione_prenotazioni.model.Postazione;
import com.mycompany.gestione_prenotazioni.model.Prenotazione;
import com.mycompany.gestione_prenotazioni.model.Utente;
import com.mycompany.gestione_prenotazioni.repository.PrenotazioneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.time.LocalDate;



@Service
public class PronotazioneServiceImpl implements PrenotazioneService {

    @Autowired
    private PrenotazioneRepository prenotazioneRepository;

    @Override
    public List<Prenotazione> trovaTutti() {
        return prenotazioneRepository.findAll();
    }

    @Override
    public Prenotazione creaPrenotazione(Utente utente, Postazione postazione, LocalDate data) {
        if (!isPostazioneDisponibile(postazione, data)) {
            throw new IllegalStateException("Postazione non disponibile per la data selezionata.");
        }
        Prenotazione prenotazione = new Prenotazione(utente, postazione, data);
        return prenotazioneRepository.save(prenotazione);
    }


    @Override
    public void cancellaPrenotazione(Long prenotazioneId) {
        prenotazioneRepository.deleteById(prenotazioneId);
    }

    @Override
    public List<Prenotazione> trovaPrenotazioniPerUtente(Utente utente) {
        return prenotazioneRepository.findByUtenteUsername(utente.getUsername());
    }

    @Override
    public List<Prenotazione> trovaPerPostazioneEData(Postazione postazione, LocalDate data) {
        return prenotazioneRepository.findByPostazioneAndData(postazione, data);
    }

    @Override
    public boolean isPostazioneDisponibile(Postazione postazione, LocalDate data) {
        return trovaPerPostazioneEData(postazione, data).isEmpty();
    }

    @Override
    public List<Prenotazione> trovaPrenotazioniPerData(LocalDate data) {
        return prenotazioneRepository.findByData(data);
    }
}

