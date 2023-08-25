package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	
	private final FutbolistaRepository repositoryF;
	private final ClubRepository repositoryC;
	private final JugadorRepository repositoryN;

	@Autowired
	public DatabaseLoader(
		
		FutbolistaRepository repositoryF,
		ClubRepository repositoryC,
		JugadorRepository repositoryN
		) {
		
		this.repositoryF = repositoryF;
		this.repositoryC = repositoryC;
		this.repositoryN = repositoryN;
	}

	@Override
	public void run(String... strings) throws Exception {


		this.repositoryF.save(new Futbolista("Daniel F"));
		Futbolista mMoises = new Futbolista("Moises");
		this.repositoryF.save(mMoises);
		Futbolista mJulian = new Futbolista("Julian");
		this.repositoryF.save(mJulian);

		Club bReal = new Club("Real Madrid");
		this.repositoryC.save(bReal);

		this.repositoryN.save(new Jugador(bReal, mMoises));
		this.repositoryN.save(new Jugador(bReal, mJulian));


	}
}