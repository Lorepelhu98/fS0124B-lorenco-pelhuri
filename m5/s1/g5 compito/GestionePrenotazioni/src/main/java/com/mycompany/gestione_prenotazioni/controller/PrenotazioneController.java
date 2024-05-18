package com.mycompany.gestione_prenotazioni.controller;

import com.mycompany.gestione_prenotazioni.model.Postazione;
import com.mycompany.gestione_prenotazioni.model.Prenotazione;
import com.mycompany.gestione_prenotazioni.service.PrenotazioneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;
import java.time.LocalDate;

@RestController
@RequestMapping("/prenotazioni")
public class PrenotazioneController {

    @Autowired
    private PrenotazioneService prenotazioneService;

    @GetMapping
    public List<Prenotazione> getAllPrenotazioni() {
        return prenotazioneService.trovaTutti();
    }

    @PostMapping
    public Prenotazione creaPrenotazione(@RequestBody Prenotazione prenotazione) {
        return prenotazioneService.creaPrenotazione(prenotazione.getUtente(), prenotazione.getPostazione(), prenotazione.getData());
    }

    @DeleteMapping("/{id}")
    public void cancellaPrenotazione(@PathVariable Long id) {
        prenotazioneService.cancellaPrenotazione(id);
    }

    @GetMapping("/utente/{username}")
    public List<Prenotazione> getPrenotazioniPerUtente(@PathVariable String username) {
        return prenotazioneService.trovaPrenotazioniPerUtente(new Utente(username, null, null));
    }

    @GetMapping("/disponibilita")
    public boolean verificaDisponibilita(@RequestParam Postazione postazione, @RequestParam LocalDate data) {
        return prenotazioneService.isPostazioneDisponibile(postazione, data);
    }
}
