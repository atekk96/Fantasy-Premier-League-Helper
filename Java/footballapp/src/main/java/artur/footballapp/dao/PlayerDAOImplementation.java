package artur.footballapp.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import artur.footballapp.entity.Player;

@Repository
public class PlayerDAOImplementation implements PlayerDAO {

	//inject entitymanager
	private EntityManager entityManager;
	
	@Autowired
	public PlayerDAOImplementation(EntityManager theEntityManager) {
		entityManager = theEntityManager;
	}
	
	@Override
	@Transactional
	public void addPlayer(Player player) {
		
		
		Session currentSession = entityManager.unwrap(Session.class);
		
		//save customer to db
		currentSession.saveOrUpdate(player);
		
	}

	@Override
	@Transactional
	public List<Player> getAllPlayers() {
		Session currentSession = entityManager.unwrap(Session.class);
		Query<Player> theQuery = currentSession.createQuery("from Player", Player.class);
		List<Player> players = theQuery.getResultList();
		return players;
	}

	@Override
	@Transactional
	public List<Player> getPlayersForTeam(int id) {
		Session currentSession = entityManager.unwrap(Session.class);
		Query<Player> theQuery = currentSession.createQuery("from Player where idTeam=:id", Player.class);
		theQuery.setParameter("id", id);
		List<Player> players = theQuery.getResultList();
		return players;
	}

	@Override
	@Transactional
	public Player getPlayerById(int id) {
		Session currentSession = entityManager.unwrap(Session.class);
		Query<Player> theQuery = currentSession.createQuery("from Player where idPlayer=:id", Player.class);
		theQuery.setParameter("id", id);
		Player player = theQuery.getSingleResult();
		return player;
	}

}
