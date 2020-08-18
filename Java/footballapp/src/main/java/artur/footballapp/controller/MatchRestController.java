package artur.footballapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import artur.footballapp.entity.Match;
import artur.footballapp.service.MatchService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class MatchRestController {
	
	@Autowired
	private MatchService matchService;

	@PostMapping("/matches")
	void addMatch(@RequestBody Match match) {
		matchService.addMatch(match);
	}
	
	@GetMapping("/matches/last")
	public Match getLastMatchId() {
		return matchService.getLastMatchId();
	}
	
	@GetMapping("/matches")
	public List<Match> getMatches() {
		return matchService.getMatches();
	}
}
