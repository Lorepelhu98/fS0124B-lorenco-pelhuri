package com.service;

import com.model.Evento;
import com.repository.EventoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventoService {

    @Autowired
    private EventoRepository eventoRepository;

    public Evento creaEvento(Evento evento) {
        return eventoRepository.save(evento);
    }

    public List<Evento> trovaTuttiGliEventi() {
        return eventoRepository.findAll();
    }

    public Optional<Evento> trovaEventoById(Long id) {
        return eventoRepository.findById(id);
    }

    public Evento aggiornaEvento(Long id, Evento eventoDettagli) {
        Optional<Evento> optionalEvento = eventoRepository.findById(id);
        if (optionalEvento.isPresent()) {
            Evento evento = optionalEvento.get();
            evento.setTitolo(eventoDettagli.getTitolo());
            evento.setDescrizione(eventoDettagli.getDescrizione());
            evento.setData(eventoDettagli.getData());
            evento.setLuogo(eventoDettagli.getLuogo());
            evento.setCapacita(eventoDettagli.getCapacita());
            return eventoRepository.save(evento);
        }
        return null;
    }

    public void cancellaEvento(Long id) {
        eventoRepository.deleteById(id);
    }

    public List<Evento> trovaEventiFuturi() {
        return null;
    }
}
