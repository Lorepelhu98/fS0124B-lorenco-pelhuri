package service;

import model.Dispositivo;
import repository.DispositivoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DispositivoService {

    @Autowired
    private DispositivoRepository dispositivoRepository;

    // Metodi per la logica di business

    public List<Dispositivo> findAll() {
        return dispositivoRepository.findAll();
    }

    public Dispositivo findById(Long id) {
        return dispositivoRepository.findById(id).orElse(null);
    }

    public Dispositivo save(Dispositivo dispositivo) {
        return dispositivoRepository.save(dispositivo);
    }

    public void deleteById(Long id) {
        dispositivoRepository.deleteById(id);
    }
}
