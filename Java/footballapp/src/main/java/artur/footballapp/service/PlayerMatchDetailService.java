package artur.footballapp.service;

import java.util.List;

import artur.footballapp.entity.PlayerMatchDetail;

public interface PlayerMatchDetailService {
	
	public List<PlayerMatchDetail> getAllDetails();
	public void addDetail(PlayerMatchDetail pmd);

}
