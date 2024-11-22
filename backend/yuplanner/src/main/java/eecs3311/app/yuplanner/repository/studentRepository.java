package eecs3311.app.yuplanner.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import eecs3311.app.yuplanner.model.*;
@Repository

public interface studentRepository extends JpaRepository<student, Integer> {
    student findByUsernameAndPassword(String username, String password);
}