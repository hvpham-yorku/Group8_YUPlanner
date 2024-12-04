package eecs3311.app.yuplanner.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import eecs3311.app.yuplanner.model.Rating;
import eecs3311.app.yuplanner.model.professor;
 
@Repository
public interface RatingRepository extends JpaRepository<Rating, Integer> {
    List<Rating> findByProfessor(professor profesor);
}
