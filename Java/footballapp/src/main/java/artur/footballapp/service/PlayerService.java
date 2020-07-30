package artur.footballapp.service;

import java.util.List;

import artur.footballapp.entity.Player;

public interface PlayerService {
	
	public void addPlayer(Player player);
	public List<Player> getAllPlayers();
	public List<Player> getPlayersForTeam(int id);

}
