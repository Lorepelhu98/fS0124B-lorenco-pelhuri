package controller;

import model.Dispositivo;
import service.DispositivoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dispositivi")
public class DispositivoController {

    @Autowired
    private DispositivoService dispositivoService;

    @GetMapping
    public List<Dispositivo> getAllDispositivi() {
        return dispositivoService.findAll();
    }

    @GetMapping("/{id}")
    public Dispositivo getDispositivoById(@PathVariable Long id) {
        return dispositivoService.findById(id);
    }

    @PostMapping
    public Dispositivo createDispositivo(@RequestBody Dispositivo dispositivo) {
        return dispositivoService.save(dispositivo);
    }

    @DeleteMapping("/{id}")
    public void deleteDispositivo(@PathVariable Long id) {
        dispositivoService.deleteById(id);
    }
}