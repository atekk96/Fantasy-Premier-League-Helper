package artur.footballapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import artur.footballapp.dao.MatchDAO;
import artur.footballapp.entity.Match;

@Service
public class MatchServiceImplementation implements MatchService {

	@Autowired
	private MatchDAO matchDAO;
	
	@Override
	@Transactional
	public void addMatch(Match match) {
		matchDAO.addMatch(match);

	}

	@Override
	@Transactional
	public Match getLastMatchId() {
		// TODO Auto-generated method stub
		return matchDAO.getLastMatchId();
	}

	@Override
	public List<Match> getMatches() {
		return matchDAO.getMatches();
	}

}
