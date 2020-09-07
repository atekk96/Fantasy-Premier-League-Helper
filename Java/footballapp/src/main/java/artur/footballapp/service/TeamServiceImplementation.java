package artur.footballapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import artur.footballapp.dao.TeamDAO;
import artur.footballapp.entity.Team;

@Service
public class TeamServiceImplementation implements TeamService {

	@Autowired
	private TeamDAO teamDAO;
	
	
	@Override
	@Transactional
	public List<Team> getTeams() {
		return teamDAO.getTeams();
	}


	@Override
	@Transactional
	public Team getTeamById(int id) {
		return teamDAO.getTeamById(id);
	}


	@Override
	@Transactional
	public void updateTeam(Team team) {
		teamDAO.updateTeam(team);
		
	}

}
