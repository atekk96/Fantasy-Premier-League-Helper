package artur.footballapp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="player_match_details")
public class PlayerMatchDetail {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="id_match")
	private int id_match;
	
	@Column(name="id_player")
	private int id_player;
	
	@Column(name="id_team")
	private int id_team;
	
	@Column(name="position")
	private String position;
	
	@Column(name="season")
	private String season;
	
	@Column(name="goals")
	private int goals;
	
	@Column(name="assists")
	private int assists;
	
	@Column(name="ycards")
	private int ycards;
	
	@Column(name="rcards")
	private int rcards;
	
	@Column(name="minutesplayed")
	private int minutesplayed;
	
	@Column(name="owngoals")
	private int owngoals;
	
	@Column(name="rating")
	private int rating;
	
	public PlayerMatchDetail() {
		
	}

	
	
	public PlayerMatchDetail(int id, int id_match, int id_player, int id_team, String position, String season,
			int goals, int assists, int ycards, int rcards, int minutesplayed, int owngoals, int rating) {
		super();
		this.id = id;
		this.id_match = id_match;
		this.id_player = id_player;
		this.id_team = id_team;
		this.position = position;
		this.season = season;
		this.goals = goals;
		this.assists = assists;
		this.ycards = ycards;
		this.rcards = rcards;
		this.minutesplayed = minutesplayed;
		this.owngoals = owngoals;
		this.rating = rating;
	}






	public int getOwngoals() {
		return owngoals;
	}



	public void setOwngoals(int owngoals) {
		this.owngoals = owngoals;
	}



	public int getRating() {
		return rating;
	}



	public void setRating(int rating) {
		this.rating = rating;
	}



	@Override
	public String toString() {
		return "PlayerMatchDetail [id=" + id + ", id_match=" + id_match + ", id_player=" + id_player + ", id_team="
				+ id_team + ", position=" + position + ", season=" + season + ", goals=" + goals + ", assists="
				+ assists + ", ycards=" + ycards + ", rcards=" + rcards + ", minutesplayed=" + minutesplayed
				+ ", owngoals=" + owngoals + ", rating=" + rating + "]";
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getId_match() {
		return id_match;
	}

	public void setId_match(int id_match) {
		this.id_match = id_match;
	}

	public int getId_player() {
		return id_player;
	}

	public void setId_player(int id_player) {
		this.id_player = id_player;
	}

	public int getId_team() {
		return id_team;
	}

	public void setId_team(int id_team) {
		this.id_team = id_team;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
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

	public int getAssists() {
		return assists;
	}

	public void setAssists(int assists) {
		this.assists = assists;
	}

	public int getYcards() {
		return ycards;
	}

	public void setYcards(int ycards) {
		this.ycards = ycards;
	}

	public int getRcards() {
		return rcards;
	}

	public void setRcards(int rcards) {
		this.rcards = rcards;
	}

	public int getMinutesplayed() {
		return minutesplayed;
	}

	public void setMinutesplayed(int minutesplayed) {
		this.minutesplayed = minutesplayed;
	}
	
	

}
