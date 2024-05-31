package com.controller;

import com.model.Evento;
import com.service.EventoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/eventi")
public class EventoController {

    @Autowired
    private EventoService eventoService;

    @GetMapping
    public List<Evento> trovaEventiFuturi() {
        return eventoService.trovaEventiFuturi();
    }

    @PostMapping
    public Evento creaEvento(@RequestBody Evento evento) {
        return eventoService.creaEvento(evento);
    }
}
