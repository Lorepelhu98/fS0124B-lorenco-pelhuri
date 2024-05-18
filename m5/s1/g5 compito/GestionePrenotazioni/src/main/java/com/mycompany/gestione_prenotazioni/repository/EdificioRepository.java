package com.mycompany.gestione_prenotazioni.repository;

import com.mycompany.gestione_prenotazioni.model.Edificio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface EdificioRepository extends JpaRepository<Edificio, Long> {
    List<Edificio> findByCitta(String citta);
    List<Edificio> findByNomeAndCitta(String nome, String citta);
}
