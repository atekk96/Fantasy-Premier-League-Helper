package artur.footballapp.dao;

import java.util.List;

import artur.footballapp.entity.PlayerMatchDetail;

public interface PlayerMatchDetailDAO {
	
	public List<PlayerMatchDetail> getAllDetails();
	public void addDetail(PlayerMatchDetail pmd);
}
