package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Jugador {
    
    private @Id @GeneratedValue Long id;

    @ManyToOne()
    @JoinColumn(name = "id_club")
    private Club club;

    @ManyToOne()
    @JoinColumn(name = "id_futbolista")
    private Futbolista futbolista;


    public Jugador() {}

    public Jugador(Club club, Futbolista futbolista) {
        this.club = club;
        this.futbolista = futbolista;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Club getClub() {
		return club;
	}

	public void setClub(Club club) {
		this.club = club;
	}

	public Futbolista getFutbolista() {
		return futbolista;
	}

	public void setFutbolista(Futbolista futbolista) {
		this.futbolista = futbolista;
	}
}
