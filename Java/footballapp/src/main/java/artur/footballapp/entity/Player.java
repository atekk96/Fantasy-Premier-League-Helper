package artur.footballapp.entity;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="players")
public class Player {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_player")
	private int idPlayer;
	
	@Column(name="season")
	private String season;
	

	@Column(name="appearances")
	private int appearances;
	
	@Column(name="goals")
	private int goals;
	
	@Column(name="assists")
	private int assists;
	
	@Column(name="nationality")
	private String nationality;
	
	@Column(name="position")
	private String position;
	
	@Column(name="yellowcards")
	private int yellowcard;
	
	@Column(name="redcards")
	private int redcard;
	
	@Column(name="minutesplayed")
	private int minutesplayed;
	
	@Column(name="cleansheets")
	private int cleansheet;
	
	@Column(name="averagerating")
	private BigDecimal averagerating;
	
	@Column(name="isactive")
	private boolean isactive;
	
	@Column(name="jerseynumber")
	private int jerseynumber;
	
	@Column(name="name")
	private String name;
	
	@Column(name="surname")
	private String surname;

	@Column(name="id_team")
	private int idTeam;
	
	
	public int getIdTeam() {
		return idTeam;
	}

	public void setIdTeam(int idTeam) {
		this.idTeam = idTeam;
	}

	public int getIdPlayer() {
		return idPlayer;
	}

	public void setIdPlayer(int idPlayer) {
		this.idPlayer = idPlayer;
	}

	public String getSeason() {
		return season;
	}

	public void setSeason(String season) {
		this.season = season;
	}

	public int getAppearances() {
		return appearances;
	}

	public void setAppearances(int appearances) {
		this.appearances = appearances;
	}

	public int getGoals() {
		return goals;
	}

	public void setGoals(int goals) {
		this.goals = goals;
	}

	public int getAssists() {
		return assists;
	}

	public void setAssists(int assists) {
		this.assists = assists;
	}

	public String getNationality() {
		return nationality;
	}

	public void setNationality(String nationality) {
		this.nationality = nationality;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public int getYellowcard() {
		return yellowcard;
	}

	public void setYellowcard(int yellowcard) {
		this.yellowcard = yellowcard;
	}

	public int getRedcard() {
		return redcard;
	}

	public void setRedcard(int redcard) {
		this.redcard = redcard;
	}

	public int getMinutesplayed() {
		return minutesplayed;
	}

	public void setMinutesplayed(int minutesplayed) {
		this.minutesplayed = minutesplayed;
	}

	public int getCleansheet() {
		return cleansheet;
	}

	public void setCleansheet(int cleansheet) {
		this.cleansheet = cleansheet;
	}

	public BigDecimal getAveragerating() {
		return averagerating;
	}

	public void setAveragerating(BigDecimal averagerating) {
		this.averagerating = averagerating;
	}

	public boolean isIsactive() {
		return isactive;
	}

	public void setIsactive(boolean isactive) {
		this.isactive = isactive;
	}

	public int getJerseynumber() {
		return jerseynumber;
	}

	public void setJerseynumber(int jerseynumber) {
		this.jerseynumber = jerseynumber;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public Player(int idPlayer, int idTeam, String season, int appearances, int goals, int assists, String nationality,
			String position, int yellowcard, int redcard, int minutesplayed, int cleansheet, BigDecimal averagerating,
			boolean isactive, int jerseynumber, String name, String surname) {
		super();
		this.idPlayer = idPlayer;
		this.idTeam = idTeam;
		this.season = season;
		this.appearances = appearances;
		this.goals = goals;
		this.assists = assists;
		this.nationality = nationality;
		this.position = position;
		this.yellowcard = yellowcard;
		this.redcard = redcard;
		this.minutesplayed = minutesplayed;
		this.cleansheet = cleansheet;
		this.averagerating = averagerating;
		this.isactive = isactive;
		this.jerseynumber = jerseynumber;
		this.name = name;
		this.surname = surname;
	}
	
	public Player() {
		
	}

	@Override
	public String toString() {
		return "Player [idPlayer=" + idPlayer + ", season=" + season + ", appearances=" + appearances + ", goals="
				+ goals + ", assists=" + assists + ", nationality=" + nationality + ", position=" + position
				+ ", yellowcard=" + yellowcard + ", redcard=" + redcard + ", minutesplayed=" + minutesplayed
				+ ", cleansheet=" + cleansheet + ", averagerating=" + averagerating + ", isactive=" + isactive
				+ ", jerseynumber=" + jerseynumber + ", name=" + name + ", surname=" + surname + "]";
	}
	
	
	
	
	
}
