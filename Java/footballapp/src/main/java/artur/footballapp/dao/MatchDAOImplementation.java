package artur.footballapp.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.query.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import artur.footballapp.entity.Match;

@Repository
public class MatchDAOImplementation implements MatchDAO {
	
	//inject entitymanager
	private EntityManager entityManager;
	
	@Autowired
	public MatchDAOImplementation(EntityManager theEntityManager) {
		entityManager = theEntityManager;
	}

	@Override
	@Transactional
	public void addMatch(Match match) {
		
		Session currentSession = entityManager.unwrap(Session.class);
		
		currentSession.saveOrUpdate(match);

	}

	@Override
	@Transactional
	public Match getLastMatchId() {
		
		Session currentSession = entityManager.unwrap(Session.class);
		Query theQuery = currentSession.createQuery("from Match order by idMatch DESC", Match.class);
		theQuery.setMaxResults(1);
		Match result = (Match) theQuery.uniqueResult();
		return result;
	}

	@Override
	@Transactional
	public List<Match> getMatches() {
		Session currentSession = entityManager.unwrap(Session.class);
		Query<Match> theQuery = currentSession.createQuery("from Match", Match.class);
		List<Match> matches = theQuery.getResultList();
		return matches;
	}

}
