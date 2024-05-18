package com.mycompany.gestione_prenotazioni.repository;

import com.mycompany.gestione_prenotazioni.model.Postazione;
import com.mycompany.gestione_prenotazioni.model.Prenotazione;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.time.LocalDate;

@Repository
public interface PrenotazioneRepository extends JpaRepository<Prenotazione, Long> {
    List<Prenotazione> findByUtenteUsername(String username);
    List<Prenotazione> findByPostazioneAndData(Postazione postazione, LocalDate data);
    List<Prenotazione> findByData(LocalDate data);
}
