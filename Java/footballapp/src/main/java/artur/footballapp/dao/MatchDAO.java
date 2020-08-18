package artur.footballapp.dao;

import java.util.List;

import artur.footballapp.entity.Match;

public interface MatchDAO {
	
	public void addMatch(Match match);
	public List<Match> getMatches();
	public Match getLastMatchId();

}
