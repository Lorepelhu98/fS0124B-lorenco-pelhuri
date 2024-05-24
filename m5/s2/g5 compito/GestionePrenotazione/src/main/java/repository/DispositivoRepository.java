package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import model.Dispositivo;
import java.util.List;

public interface DispositivoRepository extends JpaRepository<Dispositivo, Long> {
    List<Dispositivo> findByDisponibilita(boolean disponibile);
}
