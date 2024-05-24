package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import model.Dipendente;
import java.util.Optional;

public interface DipendenteRepository extends JpaRepository<Dipendente, Long> {
    Optional<Dipendente> findByUsername(String username);
}