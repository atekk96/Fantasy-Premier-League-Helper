package artur.footballapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import artur.footballapp.dao.PlayerDAO;
import artur.footballapp.entity.Player;

@Service
public class PlayerServiceImplementation implements PlayerService {
	
	@Autowired
	private PlayerDAO playerDAO;

	@Override
	@Transactional
	public void addPlayer(Player player) {
		playerDAO.addPlayer(player);
	}

	@Override
	@Transactional
	public List<Player> getAllPlayers() {
		return playerDAO.getAllPlayers();
	}

	@Override
	@Transactional
	public List<Player> getPlayersForTeam(int id) {
		return playerDAO.getPlayersForTeam(id);
	}

	@Override
	@Transactional
	public Player getPlayerById(int id) {
		return playerDAO.getPlayerById(id);
	}

}
