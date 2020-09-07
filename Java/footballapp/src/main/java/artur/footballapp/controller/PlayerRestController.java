package artur.footballapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import artur.footballapp.entity.Player;
import artur.footballapp.service.PlayerService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class PlayerRestController {
	
	@Autowired
	private PlayerService playerService;
	
	@GetMapping("/players")
	public List<Player> getAllPlayers() {
		return playerService.getAllPlayers();
	}
	
	@PostMapping("/players")
	void addPlayer(@RequestBody Player player) {
		playerService.addPlayer(player);
	}
	
	@GetMapping("/players/{idTeam}")
	public List<Player> getPlayersForTeam(@PathVariable int idTeam) {
		return playerService.getPlayersForTeam(idTeam);
	}
	
	@GetMapping("/players/player/{idPlayer}")
	public Player getPlayerById(@PathVariable int idPlayer) {
		return playerService.getPlayerById(idPlayer);
	}

}
