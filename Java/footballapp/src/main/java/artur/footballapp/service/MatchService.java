package artur.footballapp.service;

import java.util.List;

import artur.footballapp.entity.Match;

public interface MatchService {

	public void addMatch(Match match);
	public List<Match> getMatches();
	public Match getLastMatchId();
}
