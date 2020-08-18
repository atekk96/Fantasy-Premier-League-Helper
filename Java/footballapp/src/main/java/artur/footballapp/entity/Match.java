package artur.footballapp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="matches")
public class Match {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_match")
	private int idMatch;
	
	@Column(name="season")
	private String season;
	
	@Column(name="teamhome")
	private int teamhome;
	
	@Column(name="teamaway")
	private int teamaway;
	
	@Column(name="teamhomegoals")
	private int teamhomegoals;
	
	@Column(name="teamawaygoals")
	private int teamawaygoals;
	
	@Column(name="winner")
	private int winner;
	
	@Column(name="fixture")
	private int fixture;
	
	public Match() {
		
	}

	public Match(int idMatch, String season, int teamhome, int teamaway, int teamhomegoals, int teamawaygoals,
			int winner, int fixture) {
		super();
		this.idMatch = idMatch;
		this.season = season;
		this.teamhome = teamhome;
		this.teamaway = teamaway;
		this.teamhomegoals = teamhomegoals;
		this.teamawaygoals = teamawaygoals;
		this.winner = winner;
		this.fixture = fixture;
	}

	public int getIdMatch() {
		return idMatch;
	}

	public void setIdMatch(int idMatch) {
		this.idMatch = idMatch;
	}

	public String getSeason() {
		return season;
	}

	public void setSeason(String season) {
		this.season = season;
	}

	public int getTeamHome() {
		return teamhome;
	}

	public void setTeamHome(int teamhome) {
		this.teamhome = teamhome;
	}

	public int getTeamAway() {
		return teamaway;
	}

	public void setTeamAway(int teamaway) {
		this.teamaway = teamaway;
	}

	public int getTeamHomeGoals() {
		return teamhomegoals;
	}

	public void setTeamHomeGoals(int teamhomegoals) {
		this.teamhomegoals = teamhomegoals;
	}

	public int getTeamAwayGoals() {
		return teamawaygoals;
	}

	public void setTeamAwayGoals(int teamawaygoals) {
		this.teamawaygoals = teamawaygoals;
	}

	public int getWinner() {
		return winner;
	}

	public void setWinner(int winner) {
		this.winner = winner;
	}

	public int getFixture() {
		return fixture;
	}

	public void setFixture(int fixture) {
		this.fixture = fixture;
	}

	@Override
	public String toString() {
		return "Match [idMatch=" + idMatch + ", season=" + season + ", teamHome=" + teamhome + ", teamAway=" + teamaway
				+ ", teamHomeGoals=" + teamhomegoals + ", teamAwayGoals=" + teamawaygoals + ", winner=" + winner
				+ ", fixture=" + fixture + "]";
	}

	
}
