package com.mycompany.gestione_prenotazioni.service;

import com.mycompany.gestione_prenotazioni.model.Prenotazione;
import com.mycompany.gestione_prenotazioni.model.Postazione;
import com.mycompany.gestione_prenotazioni.model.Utente;
import java.time.LocalDate;
import java.util.List;

public interface PrenotazioneService {
    List<Prenotazione> trovaTutti();
    Prenotazione creaPrenotazione(Utente utente, Postazione postazione, LocalDate data);
    void cancellaPrenotazione(Long prenotazioneId);
    List<Prenotazione> trovaPrenotazioniPerUtente(Utente utente);
    List<Prenotazione> trovaPerPostazioneEData(Postazione postazione, LocalDate data);
    boolean isPostazioneDisponibile(Postazione postazione, LocalDate data);
    List<Prenotazione> trovaPrenotazioniPerData(LocalDate data);
}
