package com.repository;

import com.model.Prenotazione;
import com.model.Utente;
import org.springframework.data.jpa.repository.JpaRepository;
import jakarta.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Transactional
public interface UtenteRepository extends JpaRepository<Prenotazione, Long> {
    List<Prenotazione> findByUtenteId(Long utenteId);

    Optional<Utente> findByUsername(String username);
}