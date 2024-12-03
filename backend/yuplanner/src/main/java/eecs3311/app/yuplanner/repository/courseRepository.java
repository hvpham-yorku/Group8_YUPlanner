package eecs3311.app.yuplanner.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import eecs3311.app.yuplanner.model.course;
@Repository

public interface courseRepository extends JpaRepository<course, Integer> {

}