package service;

import model.Dipendente;
import repository.DipendenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DipendenteService {

    @Autowired
    private DipendenteRepository dipendenteRepository;

    // Metodi per la logica di business

    public List<Dipendente> findAll() {
        return dipendenteRepository.findAll();
    }

    public Dipendente findById(Long id) {
        return dipendenteRepository.findById(id).orElse(null);
    }

    public Dipendente save(Dipendente dipendente) {
        return dipendenteRepository.save(dipendente);
    }

    public void deleteById(Long id) {
        dipendenteRepository.deleteById(id);
    }
}
