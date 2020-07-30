package artur.footballapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import artur.footballapp.entity.Team;
import artur.footballapp.service.TeamService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TeamRestController {
	
	@Autowired
	private TeamService teamService;
	
	@GetMapping("/teams")
	public List<Team> getTeams() {
		return teamService.getTeams();
	}
	
	@GetMapping("/teams/{idTeam}")
	public Team getTeam(@PathVariable int idTeam) {
		return teamService.getTeamById(idTeam);
	}

}
