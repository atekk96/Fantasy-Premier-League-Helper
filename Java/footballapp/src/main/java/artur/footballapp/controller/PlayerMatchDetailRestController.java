package artur.footballapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import artur.footballapp.entity.PlayerMatchDetail;
import artur.footballapp.service.PlayerMatchDetailService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class PlayerMatchDetailRestController {
	
	@Autowired
	private PlayerMatchDetailService playerMatchDetailService;
	
	@GetMapping("/details")
	public List<PlayerMatchDetail> getAllDetails() {
		return playerMatchDetailService.getAllDetails();
	}
	
	@PostMapping("/details")
	void addDetail(@RequestBody PlayerMatchDetail pmd) {
		playerMatchDetailService.addDetail(pmd);
	}

}
