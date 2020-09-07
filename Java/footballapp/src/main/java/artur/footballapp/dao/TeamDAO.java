package artur.footballapp.dao;

import java.util.List;

import artur.footballapp.entity.Team;

public interface TeamDAO {

	public List<Team> getTeams();
	public Team getTeamById(int id);
	public void updateTeam(Team team);
	
}
