package artur.footballapp.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import artur.footballapp.entity.Team;

@Repository
public class TeamDAOImplementation implements TeamDAO {
	
	//inject entitymanager
	private EntityManager entityManager;
	
	@Autowired
	public TeamDAOImplementation(EntityManager theEntityManager) {
		entityManager = theEntityManager;
	}

	@Override
	@Transactional
	public List<Team> getTeams() {
		Session currentSession = entityManager.unwrap(Session.class);
		Query<Team> theQuery = currentSession.createQuery("from Team", Team.class);
		List<Team> teams = theQuery.getResultList();
		return teams;
	}

	@Override
	@Transactional
	public Team getTeamById(int id) {
		Session currentSession = entityManager.unwrap(Session.class);
		Query<Team> theQuery = currentSession.createQuery("from Team where idTeam=:id", Team.class);
		theQuery.setParameter("id", id);
		Team team = (Team) theQuery.getResultList().stream().findFirst().orElse(null);
		if(team == null) {
			return null;
		} else {
			return team;
		}
	}

	@Override
	@Transactional
	public void updateTeam(Team team) {
		Session currentSession = entityManager.unwrap(Session.class);
		currentSession.saveOrUpdate(team);
		
	}

}
