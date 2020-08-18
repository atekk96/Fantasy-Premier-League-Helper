package artur.footballapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import artur.footballapp.dao.PlayerMatchDetailDAO;
import artur.footballapp.entity.PlayerMatchDetail;

@Service
public class PlayerMatchDetailServiceImplementation implements PlayerMatchDetailService {
	
	@Autowired
	private PlayerMatchDetailDAO playerMatchDetailDAO;

	@Override
	@Transactional
	public List<PlayerMatchDetail> getAllDetails() {
		// TODO Auto-generated method stub
		return playerMatchDetailDAO.getAllDetails();
	}

	@Override
	@Transactional
	public void addDetail(PlayerMatchDetail pmd) {
		playerMatchDetailDAO.addDetail(pmd);

	}

}
