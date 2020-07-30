package artur.footballapp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="teams")
public class Team {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_team")
	private int idTeam;
	
	@Column(name="name")
	private String name;
	
	@Column(name="season")
	private String season;
	
	@Column(name="goals")
	private int goals;
	
	@Column(name="conceded")
	private int conceded;
	
	@Column(name="points")
	private int points;

	public Team(int idTeam, String name, String season, int goals, int conceded, int points) {
		super();
		this.idTeam = idTeam;
		this.name = name;
		this.season = season;
		this.goals = goals;
		this.conceded = conceded;
		this.points = points;
	}
	
	public Team() {
		
	}

	public int getIdTeam() {
		return idTeam;
	}

	public void setIdTeam(int idTeam) {
		this.idTeam = idTeam;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSeason() {
		return season;
	}

	public void setSeason(String season) {
		this.season = season;
	}

	public int getGoals() {
		return goals;
	}

	public void setGoals(int goals) {
		this.goals = goals;
	}

	public int getConceded() {
		return conceded;
	}

	public void setConceded(int conceded) {
		this.conceded = conceded;
	}

	public int getPoints() {
		return points;
	}

	public void setPoints(int points) {
		this.points = points;
	}

	@Override
	public String toString() {
		return "Team [idTeam=" + idTeam + ", name=" + name + ", season=" + season + ", goals=" + goals + ", conceded="
				+ conceded + ", points=" + points + "]";
	}
	
	
	
}
