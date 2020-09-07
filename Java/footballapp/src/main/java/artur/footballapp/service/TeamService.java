package artur.footballapp.service;

import java.util.List;

import artur.footballapp.entity.Team;

public interface TeamService {
	public List<Team> getTeams();
	public Team getTeamById(int id);
	public void updateTeam(Team team);
}
