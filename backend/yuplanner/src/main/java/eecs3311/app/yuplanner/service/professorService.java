package eecs3311.app.yuplanner.service;

import java.util.List;
import java.util.Optional;

import eecs3311.app.yuplanner.model.professor;

public interface professorService {
    public professor saveProfessor(professor professor);
    public List<professor> getAllProfessors();
    public professor findProfessor(professor professor);
    public Optional<professor> findProfessorById(int id);
}
/*
 package eecs3311.app.yuplanner.service;

import java.util.List;
import java.util.Optional;

import eecs3311.app.yuplanner.model.professor;
import eecs3311.app.yuplanner.model.student;

public interface professorService {
	professor saveProfessor(professor professor);
    List<professor> getAllProfessors();
    professor findprofessor(professor pr); // Change return type to professor
    professor findByUsername(String username);
    Optional<professor> findProfessorById(int id);
    professor findById(int id);
    
}
 */