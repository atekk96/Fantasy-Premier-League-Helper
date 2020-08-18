package artur.footballapp.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import artur.footballapp.entity.Player;
import artur.footballapp.entity.PlayerMatchDetail;

@Repository
public class PlayerMatchDetailDAOImplementation implements PlayerMatchDetailDAO {

	private EntityManager entityManager;
	
	@Autowired
	public PlayerMatchDetailDAOImplementation(EntityManager theEntityManager) {
		entityManager = theEntityManager;
	}
	
	@Override
	@Transactional
	public List<PlayerMatchDetail> getAllDetails() {
		Session currentSession = entityManager.unwrap(Session.class);
		Query<PlayerMatchDetail> theQuery = currentSession.createQuery("from PlayerMatchDetail", PlayerMatchDetail.class);
		List<PlayerMatchDetail> details = theQuery.getResultList();
		return details;
	}

	@Override
	@Transactional
	public void addDetail(PlayerMatchDetail pmd) {
		Session currentSession = entityManager.unwrap(Session.class);
		
		//save customer to db
		currentSession.saveOrUpdate(pmd);

	}

}
