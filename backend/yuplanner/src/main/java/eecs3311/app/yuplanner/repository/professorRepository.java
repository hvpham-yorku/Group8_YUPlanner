package eecs3311.app.yuplanner.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import eecs3311.app.yuplanner.model.professor;
@Repository

public interface professorRepository extends JpaRepository<professor, Integer> {
    professor findByUsernameAndPassword(String username, String password);
}