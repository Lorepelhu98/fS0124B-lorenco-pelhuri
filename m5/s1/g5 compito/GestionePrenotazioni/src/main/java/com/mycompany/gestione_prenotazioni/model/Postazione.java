package com.mycompany.gestione_prenotazioni.model;

import jakarta.persistence.*;

import jakarta.persistence.*;

@Entity
public class Postazione {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String codice;
    private String descrizione;
    @Enumerated(EnumType.STRING)
    private TipoPostazione tipo;
    private int numeroMassimoOccupanti;

    public Postazione() {}

    public Postazione(String codice, String descrizione, TipoPostazione tipo, int numeroMassimoOccupanti) {
        this.codice = codice;
        this.descrizione = descrizione;
        this.tipo = tipo;
        this.numeroMassimoOccupanti = numeroMassimoOccupanti;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCodice() {
        return codice;
    }

    public void setCodice(String codice) {
        this.codice = codice;
    }

    public String getDescrizione() {
        return descrizione;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }

    public TipoPostazione getTipo() {
        return tipo;
    }

    public void setTipo(TipoPostazione tipo) {
        this.tipo = tipo;
    }

    public int getNumeroMassimoOccupanti() {
        return numeroMassimoOccupanti;
    }

    public void setNumeroMassimoOccupanti(int numeroMassimoOccupanti) {
        this.numeroMassimoOccupanti = numeroMassimoOccupanti;
    }
}
