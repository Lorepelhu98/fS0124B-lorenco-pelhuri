package com.mycompany.gestione_prenotazioni.repository;

import com.mycompany.gestione_prenotazioni.model.Postazione;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PostazioneRepository extends JpaRepository<Postazione, Long> {
    List<Postazione> findByTipoAndEdificioCitta(String tipo, String citta);
}
