package artur.footballapp.dao;

import java.util.List;

import artur.footballapp.entity.Player;

public interface PlayerDAO {
	
	
	//this method is just for me in case some transfers occured, not used otherwise
	public void addPlayer(Player player);
	public List<Player> getAllPlayers();
	public List<Player> getPlayersForTeam(int id);
	public Player getPlayerById(int id);

}
